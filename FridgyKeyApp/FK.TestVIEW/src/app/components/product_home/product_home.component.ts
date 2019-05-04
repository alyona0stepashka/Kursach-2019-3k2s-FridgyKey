import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';
import { HttpAuthService } from '../../services/auth.service';
import { CurrentUser } from "../../models/CurrentUser";
import 'rxjs/add/operator/map';
import { ServerResponse } from '../../models/ServerResponse';
import { ProductService } from '../../services/product.service';
import { ProductView } from '../../models/Product';

@Component({
  selector: 'product_home',
  templateUrl: './product_home.component.html',
  styleUrls: ['./product_home.component.css'],
  providers: [ProductService, HttpAuthService]
})
export class ProductHomeComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  public product: ProductView = new ProductView();   // изменяемый товар
  public products = [];
  public currentUser: CurrentUser = new CurrentUser();
  public errors: Array<string> = new Array<string>();
  //products: ProductView[];                // массив товаров
  public tableMode: boolean = true;          // табличный режим

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private productService: ProductService,
    private httpAuthService: HttpAuthService) {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      paging: true
    };

    this.dtTrigger.next();
  }

  load = false;

  async ngOnInit() {
    this.currentUser = await this.httpAuthService.GetCurrentUser();
    this.loadProducts();    // загрузка данных при старте компонента  
    this.dtTrigger.next();
  }
  // получаем данные через сервис
  async loadProducts() {
    this.load = false;
    this.products = await this.productService.getAllProducts();
    this.load = true;
  }

  async loadUserProducts() {
    this.products = await this.productService.getProductsByUser();
  }
  // сохранение данных
  async save() {
    let response: ServerResponse<any>;
    if (this.product.id == null) {
      response = await this.productService.addProduct(this.product);      
    } else {
      this.productService.updateProduct(this.product); 
    }
      if (response.statusCode == 200) {
        this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.loadProducts();
          this.dtTrigger.next();
        });
      } else {
        console.log(response);
      }
    this.cancel();
  }
  editProduct(p: ProductView) {
    this.product = p;
  }
  cancel() {
    this.product = new ProductView();
    this.tableMode = true;
  }
  async delete(p: ProductView) {
    let response: ServerResponse<any> = await this.productService.deleteProduct(p.id);
    if (response.statusCode == 200) {
      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.loadProducts();
        this.dtTrigger.next();
      });
    } else {
      console.log(response);
    }
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}
