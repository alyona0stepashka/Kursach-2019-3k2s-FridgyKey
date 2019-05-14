import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guards';
import { BeginComponent } from './components/begin/begin.component';
import { RegisterComponent } from './components/begin/register/register.component';
import { LoginComponent } from './components/begin/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { Forbidden403Component } from './components/forbidden403/forbidden403.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminProductComponent } from './components/admin-panel/admin-product/admin-product.component';
import { AdminFridgeComponent } from './components/admin-panel/admin-fridge/admin-fridge.component';
import { AdminUserComponent } from './components/admin-panel/admin-user/admin-user.component';
import { AdminFridgeListComponent } from './components/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component';
import { AdminProductDetailComponent } from './components/admin-panel/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminFridgeDetailComponent } from './components/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component';
import { AdminProductListComponent } from './components/admin-panel/admin-product/admin-product-list/admin-product-list.component';
import { AdminUserDetailComponent } from './components/admin-panel/admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserListComponent } from './components/admin-panel/admin-user/admin-user-list/admin-user-list.component';

const routes: Routes = [
  { path:'',redirectTo:'/begin/login',pathMatch:'full'},
  { path: 'begin', component: BeginComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
  ]},
  { path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  { path:'forbidden403',component:Forbidden403Component}, 
  { path:'admin',component:AdminPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['admin']},
    children: [
      { path: 'product', component: AdminProductComponent,
        children: [
          { path: 'detail', component: AdminProductDetailComponent },
          { path: 'list', component: AdminProductListComponent } 
        ] 
      },
      { path: 'fridge', component: AdminFridgeComponent,
        children: [
          { path: 'detail', component: AdminFridgeDetailComponent },
          { path: 'list', component: AdminFridgeListComponent } 
        ] 
      },
      { path: 'user', component: AdminUserComponent,
        children: [
          { path: 'detail', component: AdminUserDetailComponent },
          { path: 'list', component: AdminUserListComponent } 
        ] 
      }
    ]
  },  
  { path: 'product', component: ProductComponent,canActivate:[AuthGuard],
    children: [
      { path: 'productdetail', component: ProductDetailComponent },
      { path: 'productlist', component: ProductListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
