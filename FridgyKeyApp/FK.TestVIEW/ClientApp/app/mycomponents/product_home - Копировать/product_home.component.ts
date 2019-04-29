import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductView } from '../../models/Product';

@Component({
  selector: 'product_home',
  templateUrl: './product_home.component.html',
  providers: [ProductService]
})
export class ProductHomeComponent implements OnInit {

  product: ProductView = new ProductView();   // изменяемый товар
  products: ProductView[];                // массив товаров
  tableMode: boolean = true;          // табличный режим

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();    // загрузка данных при старте компонента  
  }
  // получаем данные через сервис
  async loadProducts() {
    this.products = await this.productService.getAllProducts(); 
  }
  async loadUserProducts() {
    this.products = await this.productService.getProductsByUser();
  }
  // сохранение данных
  save() {
    if (this.product.id == null) {
      this.productService.addProduct(this.product); 
    } else {
      this.productService.updateProduct(this.product);
      this.loadProducts(); 
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
  delete(p: ProductView) {
    this.productService.deleteProduct(p.id);
    this.loadProducts(); 
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}
