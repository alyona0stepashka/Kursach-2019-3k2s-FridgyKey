import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeginComponent } from './components/begin/begin.component';
import { LoginComponent } from './components/begin/login/login.component';
import { RegisterComponent } from './components/begin/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { Forbidden403Component } from './components/forbidden403/forbidden403.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FridgeService } from './services/fridge.service';
import { FridgeproductService } from './services/fridgeproduct.service';
import { StickerService } from './services/sticker.service';
import { UserfridgeService } from './services/userfridge.service';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminFridgeComponent } from './components/admin-panel/admin-fridge/admin-fridge.component';
import { AdminProductComponent } from './components/admin-panel/admin-product/admin-product.component';
import { AdminUserComponent } from './components/admin-panel/admin-user/admin-user.component';
import { AdminProductDetailComponent } from './components/admin-panel/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './components/admin-panel/admin-product/admin-product-list/admin-product-list.component';
import { AdminFridgeListComponent } from './components/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component';
import { AdminFridgeDetailComponent } from './components/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component';
import { AdminUserDetailComponent } from './components/admin-panel/admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserListComponent } from './components/admin-panel/admin-user/admin-user-list/admin-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
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
    AdminUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [
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
