import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductView } from '../../models/Product';
import { HttpAuthService } from '../../services/auth.service';
import { CurrentUser } from "../../models/CurrentUser"; 

@Component({
  templateUrl: './product-detail.component.html',
  providers: [ProductService, HttpAuthService]
})
export class ProductDetailComponent implements OnInit {

  public id: number;
  public product: ProductView = new ProductView();
  public loaded: boolean = false;

  constructor(private productService: ProductService, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }

  async ngOnInit() {
    if (this.id) {
      this.product = await this.productService.getProductById(this.id);
      this.loaded = true;
    } 
  }
}
