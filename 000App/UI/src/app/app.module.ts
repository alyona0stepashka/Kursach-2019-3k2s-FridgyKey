import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeginComponent } from './components/begin/begin.component';
import { LoginComponent } from './components/begin/login/login.component';
import { RegisterComponent } from './components/begin/register/register.component'; 
import { HomeComponent } from './components/home/home.component';
import { Forbidden403Component } from './components/home/forbidden403/forbidden403.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FridgeService } from './services/fridge.service';
import { FridgeproductService } from './services/fridgeproduct.service';
import { StickerService } from './services/sticker.service';
import { UserfridgeService } from './services/userfridge.service';
import { AdminPanelComponent } from './components/home/admin-panel/admin-panel.component';
import { AdminFridgeComponent } from './components/home/admin-panel/admin-fridge/admin-fridge.component';
import { AdminProductComponent } from './components/home/admin-panel/admin-product/admin-product.component';
import { AdminUserComponent } from './components/home/admin-panel/admin-user/admin-user.component';
import { AdminProductDetailComponent } from './components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component';
import { AdminFridgeListComponent } from './components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component';
import { AdminFridgeDetailComponent } from './components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component';
import { AdminUserDetailComponent } from './components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserListComponent } from './components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component'; 
import { UserProductDetailComponent } from './components/home/user-panel/user-product/user-product-detail/user-product-detail.component';
import { UserProductListComponent } from './components/home/user-panel/user-product/user-product-list/user-product-list.component';
import { UserFridgeListComponent } from './components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component';
import { UserFridgeComponent } from './components/home/user-panel/user-fridge/user-fridge.component';
import { UserProductComponent } from './components/home/user-panel/user-product/user-product.component';
import { UserPanelComponent } from './components/home/user-panel/user-panel.component';
import { UserFridgeDetailComponent } from './components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component';
import { UserPageComponent } from './components/home/user-panel/user-page/user-page.component';
import { UserFridgeAddComponent } from './components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component';
import { OpenComponent } from './components/home/open/open.component';
import { FridgeProductComponent } from './components/home/open/fridge-product/fridge-product.component';
import { FridgeProductDetailComponent } from './components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component';
import { FridgeProductListComponent } from './components/home/open/fridge-product/fridge-product-list/fridge-product-list.component';
import { StickerComponent } from './components/home/open/sticker/sticker.component';
import { StickerDetailComponent } from './components/home/open/sticker/sticker-detail/sticker-detail.component';
import { StickerListComponent } from './components/home/open/sticker/sticker-list/sticker-list.component';
import { CartComponent } from './components/home/open/cart/cart.component';
import { CartDetailComponent } from './components/home/open/cart/cart-detail/cart-detail.component';
import { CartListComponent } from './components/home/open/cart/cart-list/cart-list.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    // FormsModule,
    // ReactiveFormsModule,
    LoginComponent,
    RegisterComponent, 
    HomeComponent,
    Forbidden403Component,
    AdminPanelComponent,
    AdminFridgeComponent,
    AdminProductComponent,
    AdminUserComponent,
    AdminProductDetailComponent,
    AdminProductListComponent,
    AdminFridgeListComponent,
    AdminFridgeDetailComponent,
    AdminUserDetailComponent,
    AdminUserListComponent, 
    UserProductDetailComponent,
    UserProductListComponent,
    UserFridgeListComponent,
    UserFridgeDetailComponent,
    UserFridgeComponent,
    UserProductComponent,
    UserPanelComponent,
    UserPageComponent,
    UserFridgeAddComponent,
    OpenComponent,
    FridgeProductComponent,
    FridgeProductDetailComponent,
    FridgeProductListComponent,
    StickerComponent,
    StickerDetailComponent,
    StickerListComponent,
    CartComponent,
    CartDetailComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [
    CartService,
    ProductService, 
    UserService, 
    FridgeService, 
    FridgeproductService, 
    StickerService, 
    UserfridgeService, 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
