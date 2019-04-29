import { Component, OnInit } from '@angular/core';
import { FridgeProductService } from '../../services/fridgeproduct.service';
import { StickerService } from '../../services/sticker.service';
import { FridgeProductView } from '../../models/FridgeProduct';
import { StickerView } from '../../models/Sticker';

@Component({
  selector: 'fridge_open_home',
  templateUrl: './fridge_open_home.component.html',
  providers: [FridgeProductService]
})
export class FridgeOpenHomeComponent implements OnInit {

  product: FridgeProductView = new FridgeProductView();   // изменяемый товар
  products: FridgeProductView[];                // массив товаров

  sticker: StickerView = new StickerView();   // изменяемый товар
  stickers: StickerView[];                // массив товаров

  tableMode: boolean = true;          // табличный режим

  constructor(private fridgeproductService: FridgeProductService, private stickerService: StickerService) { }

  ngOnInit() {
    this.loadFridgeProducts();    // загрузка данных при старте компонента  
    this.loadStickers();    // загрузка данных при старте компонента  
  }
  // получаем данные через сервис
  async loadFridgeProducts() {
    this.products = await this.fridgeproductService.getFridgeProductByFridgeId(fridgeid); //???
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
