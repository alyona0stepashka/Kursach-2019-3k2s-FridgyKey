import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { EditableModule } from 'ng2-editable';
import { MomentModule } from 'angular2-moment';
import { NgSelectModule } from '@ng-select/ng-select';
import { MyDateRangePickerModule } from 'mydaterangepicker';

//---------services-----------------
import { HttpAuthService } from "./services/auth.service";
import { FridgeService } from "./services/fridge.service";
import { FridgeProductService } from "./services/fridgeproduct.service";
import { ProductService } from "./services/product.service";
import { StickerService } from "./services/sticker.service";
import { UserService } from "./services/user.service"; 
import { Auth0Service } from "./auth/auth0.service"; 

//---------guards-------------------
import { CurrentUserOrAdminGuard } from "../app/guards/currentuser.guard";
import { AdminGuard } from "../app/guards/admin.guard";

//--------components----------------
import { AdminPageComponent } from './mycomponents/adminpage/adminpage.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { AppComponent } from './mycomponents/app/app.component';
import { SignUpComponent } from './mycomponents/signUp/signUp.component';
import { FridgeOpenHomeComponent } from './mycomponents/fridge_open_home/fridge_open_home.component';
import { UserFridgeHomeComponent } from './mycomponents/user_fridge_home/user_fridge_home.component';
import { ProductHomeComponent } from './mycomponents/product_home/product_home.component';
import { ProductDetailComponent } from './mycomponents/product_detail/product_detail.component';



//--------routes-------------------
const appRoutes: Routes = [
  { path: 'adminLogs', component: LogHomeComponent, canActivate: [AdminGuard]  }, 
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'adminUsers', component: UserHomeComponent, canActivate: [AdminGuard]  },
  { path: 'users/:id', component: UserDetailComponent, canActivate: [CurrentUserOrAdminGuard] },
  { path: 'adminFridges', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: 'products', component: ProductHomeComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'fridges', component: UserFridgeHomeComponent, canActivate: [CurrentUserOrAdminGuard]  },
  { path: 'fridges/:id', component: FridgeDetailComponent, canActivate: [CurrentUserOrAdminGuard] },
  { path: 'myFridges/:id', component: FridgeOpenHomeComponent, canActivate: [CurrentUserOrAdminGuard] },
  { path: '**', component: UserFridgeHomeComponent, canActivate: [CurrentUserOrAdminGuard] },
];

//----------modules------------------
@NgModule({
  declarations: [
    AppComponent,

    AdminPageComponent,
    ProductHomeComponent,
    ProductDetailComponent,
    UserFridgeHomeComponent,
    FridgeOpenHomeComponent,
    LogHomeComponent,
    LoginComponent,
    SignUpComponent,
    UserHomeComponent,
    UserDetailComponent  
  ],
  imports: [
    BrowserModule,
    MomentModule,
    HttpClientModule,
    HttpModule,
    DataTablesModule,
    EditableModule,
    FormsModule,
    NgSelectModule,
    MyDateRangePickerModule,
    RouterModule.forRoot(appRoutes),
  ],
  //----------services--and--guards-------------
  providers: [
    HttpAuthService,
    Auth0Service,
    FridgeService,
    FridgeProductService,
    ProductService,
    StickerService,
    UserService,
    CurrentUserOrAdminGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]  //???
})
export class AppModule { }
