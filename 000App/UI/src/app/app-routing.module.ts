import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guards';
import { BeginComponent } from './components/begin/begin.component';
import { RegisterComponent } from './components/begin/register/register.component';
import { LoginComponent } from './components/begin/login/login.component';
import { HomeComponent } from './components/home/home.component'; 
import { Forbidden403Component } from './components/home/forbidden403/forbidden403.component';
import { AdminPanelComponent } from './components/home/admin-panel/admin-panel.component';
import { AdminProductComponent } from './components/home/admin-panel/admin-product/admin-product.component';
import { AdminFridgeComponent } from './components/home/admin-panel/admin-fridge/admin-fridge.component';
import { AdminUserComponent } from './components/home/admin-panel/admin-user/admin-user.component';
import { AdminFridgeListComponent } from './components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component';
//import { AdminProductDetailComponent } from './components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component';
//import { AdminFridgeDetailComponent } from './components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component';
import { AdminProductListComponent } from './components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component';
//import { AdminUserDetailComponent } from './components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserListComponent } from './components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component';
import { UserPanelComponent } from './components/home/user-panel/user-panel.component';
import { UserProductComponent } from './components/home/user-panel/user-product/user-product.component';
import { UserProductDetailComponent } from './components/home/user-panel/user-product/user-product-detail/user-product-detail.component';
import { UserProductListComponent } from './components/home/user-panel/user-product/user-product-list/user-product-list.component';
import { UserFridgeComponent } from './components/home/user-panel/user-fridge/user-fridge.component';
import { UserFridgeDetailComponent } from './components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component';
import { UserFridgeListComponent } from './components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component';
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


const routes: Routes = 
[
  { path:'',redirectTo:'/begin/login',pathMatch:'full'},
  { path: 'begin', component: BeginComponent,
    children: 
    [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path:'home', component:HomeComponent,canActivate:[AuthGuard],
    children:
      [
        { path:'forbidden403',component:Forbidden403Component}, 
        { path:'admin',component:AdminPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['admin']},
          children: 
            [
              { path: 'product', component: AdminProductComponent,
                children: 
                [
                  // { path: 'detail', component: AdminProductDetailComponent },
                  { path: 'list', component: AdminProductListComponent } 
                ] 
              },
              { path: 'fridge', component: AdminFridgeComponent,
                children: 
                  [
                    // { path: 'detail', component: AdminFridgeDetailComponent },
                    { path: 'list', component: AdminFridgeListComponent } 
                  ] 
              },
              { path: 'user', component: AdminUserComponent,
                children: 
                  [
                    // { path: 'detail', component: AdminUserDetailComponent },
                    { path: 'list', component: AdminUserListComponent } 
                  ] 
              }
            ]
        }, 
        { path:'user',component:UserPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['user','admin']},
            children: 
              [
                { path: 'product', component: UserProductComponent,
                  children: 
                  [
                    { path: 'detail', component: UserProductDetailComponent },
                    { path: 'list', component: UserProductListComponent } 
                  ] 
                },
                { path: 'fridge', component: UserFridgeComponent,
                  children: 
                    [
                      { path: 'detail', component: UserFridgeDetailComponent },
                      { path: 'list', component: UserFridgeListComponent },
                      { path: 'add', component: UserFridgeAddComponent }  
                    ] 
                },
                { path: 'page', component: UserPageComponent} 
              ]
        }, 
        { path:'open',component:OpenComponent,canActivate:[AuthGuard],
          children: 
            [
              { path: 'fridgeproduct', component: FridgeProductComponent,
                children: 
                [
                  { path: 'detail', component: FridgeProductDetailComponent },
                  { path: 'list', component: FridgeProductListComponent } 
                ] 
              },
              { path: 'sticker', component: StickerComponent,
                children: 
                  [
                    { path: 'detail', component: StickerDetailComponent },
                    { path: 'list', component: StickerListComponent } 
                  ] 
              },
              { path: 'cart', component: CartComponent,
                children: 
                [
                  { path: 'detail', component: CartDetailComponent },
                  { path: 'list', component: CartListComponent } 
                ] 
              }
            ]
        }     
      ]
  }
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
