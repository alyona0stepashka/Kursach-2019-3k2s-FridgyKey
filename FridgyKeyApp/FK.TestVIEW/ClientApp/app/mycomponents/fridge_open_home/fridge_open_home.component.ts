import { Component, OnInit } from '@angular/core';
import { FridgeProductService } from '../../services/fridgeproduct.service';
import { ProductService } from '../../services/product.service';
import { StickerService } from '../../services/sticker.service';
import { FridgeProductView } from '../../models/FridgeProduct';
import { StickerView } from '../../models/Sticker';
import { ProductView } from '../../models/Product';
import { HttpAuthService } from '../../services/auth.service';
import { CurrentUser } from "../../models/CurrentUser"; 

@Component({
  selector: 'fridge_open_home',
  templateUrl: './fridge_open_home.component.html',
  providers: [FridgeProductService, StickerService, ProductService]
})
export class FridgeOpenHomeComponent implements OnInit {

  //dbproducts: ProductView[];
  public dbproducts = [];

  public currentUser: CurrentUser = new CurrentUser();

  product: FridgeProductView = new FridgeProductView();   // изменяемый товар
  public products = [];
  //products: FridgeProductView[];                // массив товаров

  sticker: StickerView = new StickerView();   // изменяемый товар
  public stickers = [];
  //stickers: StickerView[];                // массив товаров

  tableMode: boolean = true;          // табличный режим

  constructor(private fridgeproductService: FridgeProductService,
    private httpAuthService: HttpAuthService,
    private stickerService: StickerService,
    private productService: ProductService) { }

  async ngOnInit() {
    this.currentUser = await this.httpAuthService.GetCurrentUser();
    this.dbproducts = await this.productService.getAllProducts();
    this.loadFridgeProducts();    // загрузка данных при старте компонента  
    this.loadStickers();    // загрузка данных при старте компонента  
  }
  // получаем данные через сервис
  async loadFridgeProducts() {
    this.products = await this.fridgeproductService.getFridgeProductByFridgeId(fridgeid); //???
  }
  async loadUserFridgeProducts() {
    this.products = await this.fridgeproductService.getFridgeProductByFridgeIdByUser(fridgeid); //???
  }
  // получаем данные через сервис
  async loadStickers() {
    this.stickers = await this.stickerService.getStickerByFridgeId(fridgeid); //???
  }

  //async loadUserProducts() {
  //  this.products = await this.fridgeproductService. getProductsByUser();
  //}
  // сохранение данных
  saveProduct() {
    if (this.product.id == null) {
      this.fridgeproductService.addFridgeProduct(this.product); 
    } else {
      this.fridgeproductService.updateFridgeProduct(this.product);
      this.loadFridgeProducts(); 
    }
    this.cancel();
  }
  editProduct(p: FridgeProductView) {
    this.product = p;
  }
  cancel() {
    this.product = new FridgeProductView();
    this.tableMode = true;
  }
  deleteProduct(p: FridgeProductView) {
    this.fridgeproductService.deleteFridgeProduct(p.id);
    this.loadFridgeProducts(); 
  }
  saveSticker() {
    if (this.sticker.id == null) {
      this.stickerService.addSticker(this.sticker);
    } else { 
      this.loadStickers();
    }
    this.cancel();
  }
  editSticker(p: StickerView) {
    this.sticker = p;
  }
  cancelSticker() {
    this.sticker = new StickerView();
    this.tableMode = true;
  }
  deleteSticker(p: FridgeProductView) {
    this.stickerService.deleteSticker(p.id);
    this.loadFridgeProducts();
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}
