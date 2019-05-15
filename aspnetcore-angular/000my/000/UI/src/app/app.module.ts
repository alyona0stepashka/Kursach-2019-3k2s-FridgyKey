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

@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
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
    UserPanelComponent
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
