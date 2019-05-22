(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guards */ "./src/app/auth/auth.guards.ts");
/* harmony import */ var _components_begin_begin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/begin/begin.component */ "./src/app/components/begin/begin.component.ts");
/* harmony import */ var _components_begin_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/begin/register/register.component */ "./src/app/components/begin/register/register.component.ts");
/* harmony import */ var _components_begin_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/begin/login/login.component */ "./src/app/components/begin/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_forbidden403_forbidden403_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/forbidden403/forbidden403.component */ "./src/app/components/home/forbidden403/forbidden403.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/admin-panel/admin-panel.component */ "./src/app/components/home/admin-panel/admin-panel.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/admin-panel/admin-product/admin-product.component */ "./src/app/components/home/admin-panel/admin-product/admin-product.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_fridge_admin_fridge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/admin-panel/admin-fridge/admin-fridge.component */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/admin-panel/admin-user/admin-user.component */ "./src/app/components/home/admin-panel/admin-user/admin-user.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_fridge_admin_fridge_list_admin_fridge_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_product_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component */ "./src/app/components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component */ "./src/app/components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var _components_home_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/user-panel/user-panel.component */ "./src/app/components/home/user-panel/user-panel.component.ts");
/* harmony import */ var _components_home_user_panel_user_product_user_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/user-panel/user-product/user-product.component */ "./src/app/components/home/user-panel/user-product/user-product.component.ts");
/* harmony import */ var _components_home_user_panel_user_product_user_product_detail_user_product_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/user-panel/user-product/user-product-detail/user-product-detail.component */ "./src/app/components/home/user-panel/user-product/user-product-detail/user-product-detail.component.ts");
/* harmony import */ var _components_home_user_panel_user_product_user_product_list_user_product_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/user-panel/user-product/user-product-list/user-product-list.component */ "./src/app/components/home/user-panel/user-product/user-product-list/user-product-list.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_detail_user_fridge_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_list_user_fridge_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component.ts");
/* harmony import */ var _components_home_user_panel_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/user-panel/user-page/user-page.component */ "./src/app/components/home/user-panel/user-page/user-page.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_add_user_fridge_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component.ts");
/* harmony import */ var _components_home_open_open_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/open/open.component */ "./src/app/components/home/open/open.component.ts");
/* harmony import */ var _components_home_open_fridge_product_fridge_product_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/home/open/fridge-product/fridge-product.component */ "./src/app/components/home/open/fridge-product/fridge-product.component.ts");
/* harmony import */ var _components_home_open_fridge_product_fridge_product_detail_fridge_product_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component */ "./src/app/components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component.ts");
/* harmony import */ var _components_home_open_fridge_product_fridge_product_list_fridge_product_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home/open/fridge-product/fridge-product-list/fridge-product-list.component */ "./src/app/components/home/open/fridge-product/fridge-product-list/fridge-product-list.component.ts");
/* harmony import */ var _components_home_open_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/home/open/sticker/sticker.component */ "./src/app/components/home/open/sticker/sticker.component.ts");
/* harmony import */ var _components_home_open_sticker_sticker_detail_sticker_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home/open/sticker/sticker-detail/sticker-detail.component */ "./src/app/components/home/open/sticker/sticker-detail/sticker-detail.component.ts");
/* harmony import */ var _components_home_open_sticker_sticker_list_sticker_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home/open/sticker/sticker-list/sticker-list.component */ "./src/app/components/home/open/sticker/sticker-list/sticker-list.component.ts");
/* harmony import */ var _components_home_open_cart_cart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/home/open/cart/cart.component */ "./src/app/components/home/open/cart/cart.component.ts");
/* harmony import */ var _components_home_open_cart_cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/home/open/cart/cart-detail/cart-detail.component */ "./src/app/components/home/open/cart/cart-detail/cart-detail.component.ts");
/* harmony import */ var _components_home_open_cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/home/open/cart/cart-list/cart-list.component */ "./src/app/components/home/open/cart/cart-list/cart-list.component.ts");














//import { AdminProductDetailComponent } from './components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component';
//import { AdminFridgeDetailComponent } from './components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component';

//import { AdminUserDetailComponent } from './components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component';




















var routes = [
    { path: '', redirectTo: '/begin/login', pathMatch: 'full' },
    { path: 'begin', component: _components_begin_begin_component__WEBPACK_IMPORTED_MODULE_4__["BeginComponent"],
        children: [
            { path: 'register', component: _components_begin_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
            { path: 'login', component: _components_begin_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
        ]
    },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: 'forbidden403', component: _components_home_forbidden403_forbidden403_component__WEBPACK_IMPORTED_MODULE_8__["Forbidden403Component"] },
            { path: 'admin', component: _components_home_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_9__["AdminPanelComponent"], canActivate: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { permittedRoles: ['admin'] },
                children: [
                    { path: 'product', component: _components_home_admin_panel_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_10__["AdminProductComponent"],
                        children: [
                            // { path: 'detail', component: AdminProductDetailComponent },
                            { path: 'list', component: _components_home_admin_panel_admin_product_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_14__["AdminProductListComponent"] }
                        ]
                    },
                    { path: 'fridge', component: _components_home_admin_panel_admin_fridge_admin_fridge_component__WEBPACK_IMPORTED_MODULE_11__["AdminFridgeComponent"],
                        children: [
                            // { path: 'detail', component: AdminFridgeDetailComponent },
                            { path: 'list', component: _components_home_admin_panel_admin_fridge_admin_fridge_list_admin_fridge_list_component__WEBPACK_IMPORTED_MODULE_13__["AdminFridgeListComponent"] }
                        ]
                    },
                    { path: 'user', component: _components_home_admin_panel_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_12__["AdminUserComponent"],
                        children: [
                            // { path: 'detail', component: AdminUserDetailComponent },
                            { path: 'list', component: _components_home_admin_panel_admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_15__["AdminUserListComponent"] }
                        ]
                    }
                ]
            },
            { path: 'user', component: _components_home_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_16__["UserPanelComponent"], canActivate: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { permittedRoles: ['user', 'admin'] },
                children: [
                    { path: 'product', component: _components_home_user_panel_user_product_user_product_component__WEBPACK_IMPORTED_MODULE_17__["UserProductComponent"],
                        children: [
                            { path: 'detail', component: _components_home_user_panel_user_product_user_product_detail_user_product_detail_component__WEBPACK_IMPORTED_MODULE_18__["UserProductDetailComponent"] },
                            { path: 'list', component: _components_home_user_panel_user_product_user_product_list_user_product_list_component__WEBPACK_IMPORTED_MODULE_19__["UserProductListComponent"] }
                        ]
                    },
                    { path: 'fridge', component: _components_home_user_panel_user_fridge_user_fridge_component__WEBPACK_IMPORTED_MODULE_20__["UserFridgeComponent"],
                        children: [
                            { path: 'detail', component: _components_home_user_panel_user_fridge_user_fridge_detail_user_fridge_detail_component__WEBPACK_IMPORTED_MODULE_21__["UserFridgeDetailComponent"] },
                            { path: 'list', component: _components_home_user_panel_user_fridge_user_fridge_list_user_fridge_list_component__WEBPACK_IMPORTED_MODULE_22__["UserFridgeListComponent"] },
                            { path: 'add', component: _components_home_user_panel_user_fridge_user_fridge_add_user_fridge_add_component__WEBPACK_IMPORTED_MODULE_24__["UserFridgeAddComponent"] }
                        ]
                    },
                    { path: 'page', component: _components_home_user_panel_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_23__["UserPageComponent"] }
                ]
            },
            { path: 'open', component: _components_home_open_open_component__WEBPACK_IMPORTED_MODULE_25__["OpenComponent"], canActivate: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                children: [
                    { path: 'fridgeproduct', component: _components_home_open_fridge_product_fridge_product_component__WEBPACK_IMPORTED_MODULE_26__["FridgeProductComponent"],
                        children: [
                            { path: 'detail', component: _components_home_open_fridge_product_fridge_product_detail_fridge_product_detail_component__WEBPACK_IMPORTED_MODULE_27__["FridgeProductDetailComponent"] },
                            { path: 'list', component: _components_home_open_fridge_product_fridge_product_list_fridge_product_list_component__WEBPACK_IMPORTED_MODULE_28__["FridgeProductListComponent"] }
                        ]
                    },
                    { path: 'sticker', component: _components_home_open_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_29__["StickerComponent"],
                        children: [
                            { path: 'detail', component: _components_home_open_sticker_sticker_detail_sticker_detail_component__WEBPACK_IMPORTED_MODULE_30__["StickerDetailComponent"] },
                            { path: 'list', component: _components_home_open_sticker_sticker_list_sticker_list_component__WEBPACK_IMPORTED_MODULE_31__["StickerListComponent"] }
                        ]
                    },
                    { path: 'cart', component: _components_home_open_cart_cart_component__WEBPACK_IMPORTED_MODULE_32__["CartComponent"],
                        children: [
                            { path: 'detail', component: _components_home_open_cart_cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_33__["CartDetailComponent"] },
                            { path: 'list', component: _components_home_open_cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_34__["CartListComponent"] }
                        ]
                    }
                ]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circle\" style=\"width: 100%\"> \n  <main role=\"main\" class=\"container\" style=\"width: 100%\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// declare module 'rxjs/Subject' {
//   interface Subject<T> {
//     lift<R>(operator: Operator<T, R>): Observable<R>;
//   }
// }
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'UI';
    }
    AppComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/begin/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_begin_begin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/begin/begin.component */ "./src/app/components/begin/begin.component.ts");
/* harmony import */ var _components_begin_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/begin/login/login.component */ "./src/app/components/begin/login/login.component.ts");
/* harmony import */ var _components_begin_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/begin/register/register.component */ "./src/app/components/begin/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_forbidden403_forbidden403_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/forbidden403/forbidden403.component */ "./src/app/components/home/forbidden403/forbidden403.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _services_fridge_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/fridge.service */ "./src/app/services/fridge.service.ts");
/* harmony import */ var _services_fridgeproduct_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/fridgeproduct.service */ "./src/app/services/fridgeproduct.service.ts");
/* harmony import */ var _services_sticker_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/sticker.service */ "./src/app/services/sticker.service.ts");
/* harmony import */ var _services_userfridge_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/userfridge.service */ "./src/app/services/userfridge.service.ts");
/* harmony import */ var _components_home_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/admin-panel/admin-panel.component */ "./src/app/components/home/admin-panel/admin-panel.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_fridge_admin_fridge_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/admin-panel/admin-fridge/admin-fridge.component */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/admin-panel/admin-product/admin-product.component */ "./src/app/components/home/admin-panel/admin-product/admin-product.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/admin-panel/admin-user/admin-user.component */ "./src/app/components/home/admin-panel/admin-user/admin-user.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_product_admin_product_detail_admin_product_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component */ "./src/app/components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_product_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component */ "./src/app/components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_fridge_admin_fridge_list_admin_fridge_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_fridge_admin_fridge_detail_admin_fridge_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_user_admin_user_detail_admin_user_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component */ "./src/app/components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component.ts");
/* harmony import */ var _components_home_admin_panel_admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component */ "./src/app/components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var _components_home_user_panel_user_product_user_product_detail_user_product_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home/user-panel/user-product/user-product-detail/user-product-detail.component */ "./src/app/components/home/user-panel/user-product/user-product-detail/user-product-detail.component.ts");
/* harmony import */ var _components_home_user_panel_user_product_user_product_list_user_product_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/home/user-panel/user-product/user-product-list/user-product-list.component */ "./src/app/components/home/user-panel/user-product/user-product-list/user-product-list.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_list_user_fridge_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge.component.ts");
/* harmony import */ var _components_home_user_panel_user_product_user_product_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/home/user-panel/user-product/user-product.component */ "./src/app/components/home/user-panel/user-product/user-product.component.ts");
/* harmony import */ var _components_home_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/home/user-panel/user-panel.component */ "./src/app/components/home/user-panel/user-panel.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_detail_user_fridge_detail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component.ts");
/* harmony import */ var _components_home_user_panel_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/home/user-panel/user-page/user-page.component */ "./src/app/components/home/user-panel/user-page/user-page.component.ts");
/* harmony import */ var _components_home_user_panel_user_fridge_user_fridge_add_user_fridge_add_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component */ "./src/app/components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component.ts");
/* harmony import */ var _components_home_open_open_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/home/open/open.component */ "./src/app/components/home/open/open.component.ts");
/* harmony import */ var _components_home_open_fridge_product_fridge_product_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/home/open/fridge-product/fridge-product.component */ "./src/app/components/home/open/fridge-product/fridge-product.component.ts");
/* harmony import */ var _components_home_open_fridge_product_fridge_product_detail_fridge_product_detail_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component */ "./src/app/components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component.ts");
/* harmony import */ var _components_home_open_fridge_product_fridge_product_list_fridge_product_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/home/open/fridge-product/fridge-product-list/fridge-product-list.component */ "./src/app/components/home/open/fridge-product/fridge-product-list/fridge-product-list.component.ts");
/* harmony import */ var _components_home_open_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/home/open/sticker/sticker.component */ "./src/app/components/home/open/sticker/sticker.component.ts");
/* harmony import */ var _components_home_open_sticker_sticker_detail_sticker_detail_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/home/open/sticker/sticker-detail/sticker-detail.component */ "./src/app/components/home/open/sticker/sticker-detail/sticker-detail.component.ts");
/* harmony import */ var _components_home_open_sticker_sticker_list_sticker_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/home/open/sticker/sticker-list/sticker-list.component */ "./src/app/components/home/open/sticker/sticker-list/sticker-list.component.ts");
/* harmony import */ var _components_home_open_cart_cart_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/home/open/cart/cart.component */ "./src/app/components/home/open/cart/cart.component.ts");
/* harmony import */ var _components_home_open_cart_cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/home/open/cart/cart-detail/cart-detail.component */ "./src/app/components/home/open/cart/cart-detail/cart-detail.component.ts");
/* harmony import */ var _components_home_open_cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/home/open/cart/cart-list/cart-list.component */ "./src/app/components/home/open/cart/cart-list/cart-list.component.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");



















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_begin_begin_component__WEBPACK_IMPORTED_MODULE_5__["BeginComponent"],
                // FormsModule,
                // ReactiveFormsModule,
                _components_begin_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_begin_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_home_forbidden403_forbidden403_component__WEBPACK_IMPORTED_MODULE_9__["Forbidden403Component"],
                _components_home_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_21__["AdminPanelComponent"],
                _components_home_admin_panel_admin_fridge_admin_fridge_component__WEBPACK_IMPORTED_MODULE_22__["AdminFridgeComponent"],
                _components_home_admin_panel_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_23__["AdminProductComponent"],
                _components_home_admin_panel_admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_24__["AdminUserComponent"],
                _components_home_admin_panel_admin_product_admin_product_detail_admin_product_detail_component__WEBPACK_IMPORTED_MODULE_25__["AdminProductDetailComponent"],
                _components_home_admin_panel_admin_product_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_26__["AdminProductListComponent"],
                _components_home_admin_panel_admin_fridge_admin_fridge_list_admin_fridge_list_component__WEBPACK_IMPORTED_MODULE_27__["AdminFridgeListComponent"],
                _components_home_admin_panel_admin_fridge_admin_fridge_detail_admin_fridge_detail_component__WEBPACK_IMPORTED_MODULE_28__["AdminFridgeDetailComponent"],
                _components_home_admin_panel_admin_user_admin_user_detail_admin_user_detail_component__WEBPACK_IMPORTED_MODULE_29__["AdminUserDetailComponent"],
                _components_home_admin_panel_admin_user_admin_user_list_admin_user_list_component__WEBPACK_IMPORTED_MODULE_30__["AdminUserListComponent"],
                _components_home_user_panel_user_product_user_product_detail_user_product_detail_component__WEBPACK_IMPORTED_MODULE_31__["UserProductDetailComponent"],
                _components_home_user_panel_user_product_user_product_list_user_product_list_component__WEBPACK_IMPORTED_MODULE_32__["UserProductListComponent"],
                _components_home_user_panel_user_fridge_user_fridge_list_user_fridge_list_component__WEBPACK_IMPORTED_MODULE_33__["UserFridgeListComponent"],
                _components_home_user_panel_user_fridge_user_fridge_detail_user_fridge_detail_component__WEBPACK_IMPORTED_MODULE_37__["UserFridgeDetailComponent"],
                _components_home_user_panel_user_fridge_user_fridge_component__WEBPACK_IMPORTED_MODULE_34__["UserFridgeComponent"],
                _components_home_user_panel_user_product_user_product_component__WEBPACK_IMPORTED_MODULE_35__["UserProductComponent"],
                _components_home_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_36__["UserPanelComponent"],
                _components_home_user_panel_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_38__["UserPageComponent"],
                _components_home_user_panel_user_fridge_user_fridge_add_user_fridge_add_component__WEBPACK_IMPORTED_MODULE_39__["UserFridgeAddComponent"],
                _components_home_open_open_component__WEBPACK_IMPORTED_MODULE_40__["OpenComponent"],
                _components_home_open_fridge_product_fridge_product_component__WEBPACK_IMPORTED_MODULE_41__["FridgeProductComponent"],
                _components_home_open_fridge_product_fridge_product_detail_fridge_product_detail_component__WEBPACK_IMPORTED_MODULE_42__["FridgeProductDetailComponent"],
                _components_home_open_fridge_product_fridge_product_list_fridge_product_list_component__WEBPACK_IMPORTED_MODULE_43__["FridgeProductListComponent"],
                _components_home_open_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_44__["StickerComponent"],
                _components_home_open_sticker_sticker_detail_sticker_detail_component__WEBPACK_IMPORTED_MODULE_45__["StickerDetailComponent"],
                _components_home_open_sticker_sticker_list_sticker_list_component__WEBPACK_IMPORTED_MODULE_46__["StickerListComponent"],
                _components_home_open_cart_cart_component__WEBPACK_IMPORTED_MODULE_47__["CartComponent"],
                _components_home_open_cart_cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_48__["CartDetailComponent"],
                _components_home_open_cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_49__["CartListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    progressBar: true
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [
                _services_cart_service__WEBPACK_IMPORTED_MODULE_50__["CartService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
                _services_fridge_service__WEBPACK_IMPORTED_MODULE_17__["FridgeService"],
                _services_fridgeproduct_service__WEBPACK_IMPORTED_MODULE_18__["FridgeproductService"],
                _services_sticker_service__WEBPACK_IMPORTED_MODULE_19__["StickerService"],
                _services_userfridge_service__WEBPACK_IMPORTED_MODULE_20__["UserfridgeService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guards.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.guards.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, service) {
        this.router = router;
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') != null) {
            var roles = next.data['permittedRoles'];
            if (roles) {
                if (this.service.roleMatch(roles))
                    return true;
                else {
                    this.router.navigate(['/home/forbidden403']);
                    return false;
                }
            }
            return true;
        }
        else {
            this.router.navigate(['/begin/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) { }, function (err) {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    _this.router.navigateByUrl('/user/login');
                }
                else if (err.status == 403)
                    _this.router.navigateByUrl('/forbidden');
            }));
        }
        else
            return next.handle(req.clone());
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/begin/begin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/begin/begin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" class=\"col-md-6 offset-md-3\" style=\"top:20px\">\n  <div class=\"wrapped-div\">\n    <div class=\"tab-header\">\n      <h2 routerLink='/begin/login' routerLinkActive='active'>Sign In</h2>\n      <h2 routerLink='/begin/register' routerLinkActive='active'>Sign Up</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\"><br/>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/begin/begin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/begin/begin.component.ts ***!
  \*****************************************************/
/*! exports provided: BeginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginComponent", function() { return BeginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BeginComponent = /** @class */ (function () {
    function BeginComponent() {
    }
    BeginComponent.prototype.ngOnInit = function () {
    };
    BeginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-begin',
            template: __webpack_require__(/*! ./begin.component.html */ "./src/app/components/begin/begin.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BeginComponent);
    return BeginComponent;
}());



/***/ }),

/***/ "./src/app/components/begin/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/begin/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/img/single_user.png\" class=\"mx-auto d-block\"><br>\n<form #form='ngForm' class=\"mb-4\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">  \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-at\"  [class.green-icon]=\"UserName.valid\" [class.red-icon]=\"UserName.invalid && UserName.touched\"></i>\n            </div>\n          </div>\n          <input name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"formModel.UserName\" \n            class=\"form-control\" placeholder=\"Email...\" required maxlength=\"400\">\n        </div>\n      </div> \n      <div class=\"form-group\">\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text bg-white\">\n                <i class=\"fas fa-key\"  [class.green-icon]=\"Password.valid\" [class.red-icon]=\"Password.invalid && Password.touched\"></i>\n              </div>\n            </div>\n            <input type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"formModel.Password\" \n              class=\"form-control\" placeholder=\"Email...\" required maxlength=\"400\">\n          </div>\n        </div> \n  <div class=\"form-row\">\n    <div class=\"form-group col-md-8 offset-md-2\">\n      <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"form.invalid\">Login</button>\n    </div>\n  </div>\n</form> "

/***/ }),

/***/ "./src/app/components/begin/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/begin/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.login(form.value).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('role', res.role);
            //localStorage.setItem('currentUser', res.currentUser);
            _this.router.navigateByUrl('/home');
        }, function (err) {
            if (err.status == 400)
                _this.toastr.error('Incorrect username or password.', 'Authentication failed.');
            else
                console.log(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/begin/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/begin/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/begin/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\"> \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-at\" [class.green-icon]=\"Email.valid\" [class.red-icon]=\"Email.invalid && Email.touched\"></i>\n          </div>\n        </div>\n        <input name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"service.formData.Email\" class=\"form-control\"\n          placeholder=\"Email...\" required maxlength=\"400\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-user-alt\"  [class.green-icon]=\"FullName.valid\" [class.red-icon]=\"FullName.invalid && FullName.touched\"></i>\n          </div>\n        </div>\n        <input name=\"FullName\" #FullName=\"ngModel\" [(ngModel)]=\"service.formData.FullName\" \n        class=\"form-control\" placeholder=\"FullName...\" required maxlength=\"400\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-key\"  [class.green-icon]=\"Password.valid\" [class.red-icon]=\"Password.invalid && Password.touched\"></i>\n          </div>\n        </div>\n        <input type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"service.formData.Password\" \n        class=\"form-control\" placeholder=\"Password...\" required maxlength=\"400\">\n      </div>\n    </div> \n    <div class=\"form-row\">\n        <div class=\"form-group col-md-8 offset-md-2\">\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Sign Up</button>\n      </div> \n      </div> \n    </div>\n  </form>\n "

/***/ }),

/***/ "./src/app/components/begin/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/begin/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service, toastr) {
        this.router = router;
        this.service = service;
        this.toastr = toastr;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.service.resetForm();
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.register().subscribe(function (res) {
            if (res.succeeded) {
                _this.service.resetForm();
                _this.toastr.success('New user created!', 'Registration successful.');
                _this.router.navigate(['/begin/login']);
            }
            else {
                res.errors.forEach(function (element) {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            _this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/begin/register/register.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-fridge-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AdminFridgeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFridgeDetailComponent", function() { return AdminFridgeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminFridgeDetailComponent = /** @class */ (function () {
    function AdminFridgeDetailComponent() {
    }
    AdminFridgeDetailComponent.prototype.ngOnInit = function () {
    };
    AdminFridgeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-fridge-detail',
            template: __webpack_require__(/*! ./admin-fridge-detail.component.html */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-detail/admin-fridge-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminFridgeDetailComponent);
    return AdminFridgeDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n    <table class=\"table wrapped-div\" style=\"width: 100%\">\n      <thead> \n        <th>Name</th>\n        <th>Description</th>\n        <th>DateCreate</th>\n        <!-- <th>Owners</th>  -->\n        <th><i class=\"fas fa-cogs\"></i></th>\n      </thead>\n      <tr *ngFor=\"let pd of _service.list\"> \n        <td >{{pd.Name}}</td>\n        <td >{{pd.Description}}</td>\n        <td >{{pd.DateCreate}}</td>\n        <!-- <td >\n          <p *ngFor=\"let user of pd.Users\">{{user.Fullname}}</p>\n        </td>  -->\n        <td>\n          <i class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.Id)\"></i> | <i class=\"fas fa-door-open\" (click)=\"onOpen(pd.Id)\"></i>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"!isLoaded\" class=\"text-center\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AdminFridgeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFridgeListComponent", function() { return AdminFridgeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fridge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fridge.service */ "./src/app/services/fridge.service.ts");
/* harmony import */ var src_app_services_userfridge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userfridge.service */ "./src/app/services/userfridge.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");







var AdminFridgeListComponent = /** @class */ (function () {
    function AdminFridgeListComponent(router, service, service2, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoaded = false;
        this._service = service;
        this._serviceUserFridge = service2;
        this._toastrService = toastr;
    }
    AdminFridgeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.refreshListGeneral();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    AdminFridgeListComponent.prototype.onDelete = function (Id) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.isLoaded = false;
            this._serviceUserFridge.deleteUserFridgeDetail(Id).subscribe(function (res) {
                _this._toastrService.warning('Submitted (delete) successfully', 'Fridge Detail Register');
                _this._service.refreshListGeneral();
            }, function (err) {
                console.log(err);
            });
        }
        this.isLoaded = true;
    };
    AdminFridgeListComponent.prototype.onOpen = function (Id) {
        localStorage.setItem("fridgeId", Id);
        this.router.navigate(['/home/open']);
    };
    AdminFridgeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-fridge-list',
            template: __webpack_require__(/*! ./admin-fridge-list.component.html */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge-list/admin-fridge-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_fridge_service__WEBPACK_IMPORTED_MODULE_2__["FridgeService"],
            src_app_services_userfridge_service__WEBPACK_IMPORTED_MODULE_3__["UserfridgeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], AdminFridgeListComponent);
    return AdminFridgeListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-fridge/admin-fridge.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"wrapped-div\">\n    <div class=\"tab-header\">\n      <!-- <h2 routerLink='/home/admin/fridge/detail' routerLinkActive='active'>FridgeDetail</h2> -->\n      <h2 routerLink='/home/admin/fridge/list' routerLinkActive='active'>FridgeList</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-fridge/admin-fridge.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminFridgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFridgeComponent", function() { return AdminFridgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminFridgeComponent = /** @class */ (function () {
    function AdminFridgeComponent() {
    }
    AdminFridgeComponent.prototype.ngOnInit = function () {
    };
    AdminFridgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-fridge',
            template: __webpack_require__(/*! ./admin-fridge.component.html */ "./src/app/components/home/admin-panel/admin-fridge/admin-fridge.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminFridgeComponent);
    return AdminFridgeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"wrapped-div\">\n    <div class=\"tab-header\">\n      <h2 routerLink='/home/admin/fridge' routerLinkActive='active'>Fridges</h2>\n      <h2 routerLink='/home/admin/product' routerLinkActive='active'>Products</h2>\n      <h2 routerLink='/home/admin/user' routerLinkActive='active'>Users</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! ./admin-panel.component.html */ "./src/app/components/home/admin-panel/admin-panel.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-product-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AdminProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductDetailComponent", function() { return AdminProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminProductDetailComponent = /** @class */ (function () {
    function AdminProductDetailComponent() {
    }
    AdminProductDetailComponent.prototype.ngOnInit = function () {
    };
    AdminProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-product-detail',
            template: __webpack_require__(/*! ./admin-product-detail.component.html */ "./src/app/components/home/admin-panel/admin-product/admin-product-detail/admin-product-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminProductDetailComponent);
    return AdminProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n    <table class=\"table wrapped-div\" style=\"width: 100%\">\n      <thead>\n        <th>Image</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>p/f/c</th>\n        <th>Kkal</th>\n        <th><i class=\"fas fa-cogs\"></i></th>\n      </thead>\n      <tr *ngFor=\"let pd of _service.list\">\n        <td >      \n            <img *ngIf=\"pd.ImgURL==''\" src=\"https://www.diamondbathrooms.com/sites/default/files/default_images/no_image_available.png\" style=\"max-height: 75px; max-width: 75px; opacity:0.3\"/>\n            <img *ngIf=\"pd.ImgURL!=''\" src=\"{{pd.ImgURL}}\" style=\"max-height: 75px; max-width: 75px\"></td>\n        <td >{{pd.Name}}</td>\n        <td >{{pd.Description}}</td>\n        <td >{{pd.ProdInfo.Protein}} / {{pd.ProdInfo.Fat}} / {{pd.ProdInfo.Carb}} </td>\n        <td >{{pd.ProdInfo.Kkal}}</td>\n        <td>\n          <i class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.Id)\"></i> \n        </td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"!isLoaded\" class=\"text-center\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AdminProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductListComponent", function() { return AdminProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var AdminProductListComponent = /** @class */ (function () {
    function AdminProductListComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoaded = false;
        this._service = service;
        this._toastrService = toastr;
    }
    AdminProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.refreshListGeneral();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    AdminProductListComponent.prototype.populateForm = function (pd) {
        this._service.formData = Object.assign({}, pd);
    };
    AdminProductListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.isLoaded = false;
            this._service.deleteProductDetail(PMId).subscribe(function (res) {
                _this._toastrService.warning('Submitted (delete) successfully', 'Product General Detail Register');
                _this._service.refreshListGeneral();
            }, function (err) {
                console.log(err);
            });
        }
        this.isLoaded = true;
    };
    AdminProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-product-list',
            template: __webpack_require__(/*! ./admin-product-list.component.html */ "./src/app/components/home/admin-panel/admin-product/admin-product-list/admin-product-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AdminProductListComponent);
    return AdminProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-product/admin-product.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-product/admin-product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"wrapped-div\">\n    <div class=\"tab-header\">\n      <!-- <h2 routerLink='/home/admin/product/detail' routerLinkActive='active'>ProductDetail</h2> -->\n      <h2 routerLink='/home/admin/product/list' routerLinkActive='active'>ProductList</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-product/admin-product.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-product/admin-product.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductComponent", function() { return AdminProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminProductComponent = /** @class */ (function () {
    function AdminProductComponent() {
    }
    AdminProductComponent.prototype.ngOnInit = function () {
    };
    AdminProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-product',
            template: __webpack_require__(/*! ./admin-product.component.html */ "./src/app/components/home/admin-panel/admin-product/admin-product.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminProductComponent);
    return AdminProductComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-user-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AdminUserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserDetailComponent", function() { return AdminUserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminUserDetailComponent = /** @class */ (function () {
    function AdminUserDetailComponent() {
    }
    AdminUserDetailComponent.prototype.ngOnInit = function () {
    };
    AdminUserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user-detail',
            template: __webpack_require__(/*! ./admin-user-detail.component.html */ "./src/app/components/home/admin-panel/admin-user/admin-user-detail/admin-user-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminUserDetailComponent);
    return AdminUserDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n    <table class=\"table wrapped-div\" style=\"width: 100%\">\n      <thead> \n        <th>Id</th>\n        <th>Email</th>\n        <th>FullName</th>\n        <th>Role</th>  \n      </thead>\n      <tr *ngFor=\"let pd of userService.list\"> \n        <td >{{pd.Id}}</td>\n        <td >{{pd.Email}}</td>\n        <td >{{pd.FullName}}</td>\n        <td >{{pd.Role}}</td>  \n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"!isLoaded\" class=\"text-center\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AdminUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserListComponent", function() { return AdminUserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





var AdminUserListComponent = /** @class */ (function () {
    function AdminUserListComponent(router, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoaded = false;
        this._toastrService = toastr;
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.refreshList();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    AdminUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user-list',
            template: __webpack_require__(/*! ./admin-user-list.component.html */ "./src/app/components/home/admin-panel/admin-user/admin-user-list/admin-user-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AdminUserListComponent);
    return AdminUserListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-user/admin-user.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-user/admin-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"wrapped-div\">\n    <div class=\"tab-header\">\n      <!-- <h2 routerLink='/home/admin/user/detail' routerLinkActive='active'>UserDetail</h2> -->\n      <h2 routerLink='/home/admin/user/list' routerLinkActive='active'>UserList</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/admin-panel/admin-user/admin-user.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/home/admin-panel/admin-user/admin-user.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserComponent", function() { return AdminUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminUserComponent = /** @class */ (function () {
    function AdminUserComponent() {
    }
    AdminUserComponent.prototype.ngOnInit = function () {
    };
    AdminUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user',
            template: __webpack_require__(/*! ./admin-user.component.html */ "./src/app/components/home/admin-panel/admin-user/admin-user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminUserComponent);
    return AdminUserComponent;
}());



/***/ }),

/***/ "./src/app/components/home/forbidden403/forbidden403.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/forbidden403/forbidden403.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\" style=\"background-color: transparent\">\n  <div class=\"col s6 offset-s3\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src=\"/assets/img/403.png\" style=\"height:300px;width:300px;\">\n\n      </div>\n      <div class=\"card-content\">\n        <span class=\"card-title\" style=\"color:#039be5\">403 - ACCESS DENIED</span>\n        <p>You don't have the permission to access this resource.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/forbidden403/forbidden403.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/forbidden403/forbidden403.component.ts ***!
  \************************************************************************/
/*! exports provided: Forbidden403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forbidden403Component", function() { return Forbidden403Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Forbidden403Component = /** @class */ (function () {
    function Forbidden403Component(router) {
        this.router = router;
    }
    Forbidden403Component.prototype.ngOnInit = function () {
    };
    Forbidden403Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forbidden403',
            template: __webpack_require__(/*! ./forbidden403.component.html */ "./src/app/components/home/forbidden403/forbidden403.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Forbidden403Component);
    return Forbidden403Component;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mynav-cirlce\" style=\"width: 100%; border-top-left-radius: 0%; border-top-right-radius: 0%\">\n  <a class=\"navbar-brand text-white\" routerLink='/home/user/page' routerLinkActive='active'><img src=\"https://image.flaticon.com/icons/png/512/823/823231.png\" style=\"max-height: 50px; max-width: 75px\">FridgeKeyApp</a>\n  <!-- <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\" *ngIf=\"isAdmin\">\n      <a class=\"nav-link\" routerLink=\"/home/admin\">Admin Panel</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/home/user\">User Panel</a>\n    </li> \n  </ul> -->\n  <button class=\"btn btn-danger my-2 my-sm-0\" (click)=\"onLogout()\">Logout</button>\n</nav>\n<!-- \n<div class=\"card m-5\" style=\"width:24rem\" *ngIf=\"userDetails\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><strong>Id : </strong>{{userDetails.Id}}</li>\n    <li class=\"list-group-item\"><strong>FullName : </strong>{{userDetails.FullName}}</li>\n    <li class=\"list-group-item\"><strong>Email : </strong>{{userDetails.Email}}</li>\n    <li class=\"list-group-item\"><strong>Role : </strong>{{userDetails.Role}}</li> \n  </ul>\n</div>\n<br/> -->\n\n<div class=\"wrapper\">\n  <div class=\"wrapped-div\">\n    <div class=\"tab-header\">\n      <h2 *ngIf=\"isAdmin\" routerLink='/home/admin' routerLinkActive='active'>Admin Panel</h2>\n      <h2 routerLink='/home/user' routerLinkActive='active'>User Panel</h2>\n      <h2 *ngIf=\"isFridge\" routerLink='/home/open' routerLinkActive='active'>Open Fridge</h2>\n    </div>\n    <div class=\"row\">\n      <div style=\"width: 100%\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, service) {
        this.router = router;
        this.service = service;
        this.isFridge = false;
        this.isAdmin = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('fridgeId') != null) {
            this.isFridge = true;
        }
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
            if (_this.userDetails.Role == "admin") {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('fridgeId');
        //localStorage.removeItem('currentUser');
        this.router.navigate(['/begin/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/cart/cart-detail/cart-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/home/open/cart/cart-detail/cart-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.Id\"> \n    <input type=\"hidden\" name=\"User\" [value]=\"_service.formData.User\"> \n    <input type=\"hidden\" name=\"Fridge\" [value]=\"_service.formData.Fridge\"> \n    <input type=\"hidden\" name=\"Product\" [value]=\"_service.formData.Product\"> \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-hamburger\" [class.green-icon]=\"Name.valid\" [class.red-icon]=\"Name.invalid && Name.touched\"></i>\n          </div>\n        </div>\n        <!-- <select id=\"select_product\" required name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Product.Name\" class=\"form-control\" placeholder=\"Name...\">\n          <option *ngFor=\"prod of products\" [value]=\"_service.formData.Product\">{{product.Name}}</option>\n        </select> -->\n        <input name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Product.Name\" class=\"form-control\"\n          placeholder=\"Name...\" required maxlength=\"400\">\n      </div>\n    </div>  \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-hamburger\" [class.green-icon]=\"Description.valid\" [class.red-icon]=\"Description.invalid && Description.touched\"></i>\n          </div>\n        </div> \n        <input name=\"Description\" #Description=\"ngModel\" [(ngModel)]=\"_service.formData.Description\" class=\"form-control\"\n          placeholder=\"Description...\" required maxlength=\"400\">\n      </div>\n    </div> \n    <div class=\"form-row\">\n      <div class=\"form-group col-md-8\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-fire-alt\"  [class.green-icon]=\"Amount.valid\" [class.red-icon]=\"Amount.invalid && Amount.touched\"></i>\n            </div>\n          </div>\n          <input name=\"Amount\" #Amount=\"ngModel\" [(ngModel)]=\"_service.formData.Amount\" class=\"form-control\" \n            placeholder=\"Amount...\" required >\n        </div>\n      </div>\n      <div class=\"form-group col-md-4\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"EI.valid\" [class.red-icon]=\"EI.invalid && EI.touched\"></i>\n            </div>\n          </div>\n          <input name=\"EI\" #EI=\"ngModel\" [(ngModel)]=\"_service.formData.EI\" class=\"form-control\" \n            placeholder=\"EI...\" required >\n        </div>\n      </div>  \n    </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Submit Form Data</button> \n        <button class=\"btn btn-lg btn-block\" type=\"button\" (onClick)=\"resetForm(form)\" style=\"background-color: slategray; border-radius: 20px; color:#ffff\"><i class=\"fas fa-database\"></i> Clear</button>\n      </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/home/open/cart/cart-detail/cart-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/home/open/cart/cart-detail/cart-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: CartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailComponent", function() { return CartDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");







var CartDetailComponent = /** @class */ (function () {
    function CartDetailComponent(router, service, toastr, prodService, userService) {
        this.router = router;
        this.prodService = prodService;
        this.userService = userService;
        this._service = service;
        this._toastrService = toastr;
    }
    CartDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
        this.resetForm();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.prodService.refreshList();
        this.products = this.prodService.list;
    };
    CartDetailComponent.prototype.onSubmit = function (form) {
        if (this._service.formData.Id == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    };
    CartDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this._service.postCartDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.success('Submitted (post) successfully', 'Product Detail Register');
            _this._service.refreshList(_this.fridgeId);
        }, function (err) {
            console.log(err);
        });
    };
    CartDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this._service.putCartDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.info('Submitted (put) successfully', 'Product Detail Register');
            _this._service.refreshList(_this.fridgeId);
        }, function (err) {
            console.log(err);
        });
    };
    CartDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this._service.resetForm();
    };
    CartDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-detail',
            template: __webpack_require__(/*! ./cart-detail.component.html */ "./src/app/components/home/open/cart/cart-detail/cart-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], CartDetailComponent);
    return CartDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/cart/cart-list/cart-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/home/open/cart/cart-list/cart-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n    <table class=\"table wrapped-div\" style=\"width: 100%\">\n      <thead>\n        <th>Image</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>Amount</th> \n        <th><i class=\"fas fa-cogs\"></i></th>\n      </thead>\n      <tr *ngFor=\"let pd of _service.list\">\n        <td (click)=\"populateForm(pd)\">      \n            <img *ngIf=\"pd.Product.ImgURL==''\" src=\"https://www.diamondbathrooms.com/sites/default/files/default_images/no_image_available.png\" style=\"max-height: 75px; max-width: 75px; opacity:0.3\"/>\n            <img *ngIf=\"pd.Product.ImgURL!=''\" src=\"{{pd.Product.ImgURL}}\" style=\"max-height: 75px; max-width: 75px\"></td>\n        <td (click)=\"populateForm(pd)\">{{pd.Product.Name}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.Description}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.Amount}} {{pd.EI}} </td> \n        <td>\n          <i *ngIf=\"pd.User.Id==userDetails.Id\" class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.Id)\"></i>\n          <i *ngIf=\"pd.User.Id!=userDetails.Id\" class=\"far fa-trash-alt fa-lg text-danger\" style=\"opacity: 0.3\"></i>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"!isLoaded\" class=\"text-center\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/home/open/cart/cart-list/cart-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/open/cart/cart-list/cart-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListComponent", function() { return CartListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var CartListComponent = /** @class */ (function () {
    function CartListComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoaded = false;
        this._service = service;
        this._toastrService = toastr;
    }
    CartListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.today = ??? 
        this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
        this._service.refreshList(this.fridgeId);
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    CartListComponent.prototype.populateForm = function (pd) {
        this._service.formData = Object.assign({}, pd);
    };
    CartListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.isLoaded = false;
            this._service.deleteCartDetail(PMId).subscribe(function (res) {
                _this._toastrService.warning('Submitted (delete) successfully', 'Cart Detail Register');
                _this._service.refreshList(_this.fridgeId);
            }, function (err) {
                console.log(err);
            });
        }
        this.isLoaded = true;
    };
    CartListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-list',
            template: __webpack_require__(/*! ./cart-list.component.html */ "./src/app/components/home/open/cart/cart-list/cart-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], CartListComponent);
    return CartListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/cart/cart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home/open/cart/cart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h1 class=\"display-4 text-center\">Shopping Cart Detail Register</h1>\n    <hr>\n    <div clas=\"row\"></div>\n    <div class=\"wrapped-div\"><br/>\n      <app-cart-detail></app-cart-detail>\n      </div><br/>\n    <div class=\"wrapped-div\" style=\"width: 100%\">\n      <app-cart-list></app-cart-list>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/open/cart/cart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home/open/cart/cart.component.ts ***!
  \*************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/home/open/cart/cart.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.Id\">\n    <input type=\"hidden\" name=\"DateBuy\" [value]=\"_service.formData.DateBuy\"> \n    <input type=\"hidden\" name=\"User\" [value]=\"_service.formData.User\"> \n    <input type=\"hidden\" name=\"Fridge\" [value]=\"_service.formData.Fridge\"> \n    <input type=\"hidden\" name=\"Product\" [value]=\"_service.formData.Product\"> \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-hamburger\" [class.green-icon]=\"Name.valid\" [class.red-icon]=\"Name.invalid && Name.touched\"></i>\n          </div>\n        </div>\n        <!-- <select id=\"select_product\" required name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Product.Name\" class=\"form-control\" placeholder=\"Name...\">\n          <option *ngFor=\"product of products\" value=\"{{product.Name}}\">{{product.Name}}</option>\n        </select> -->\n        <input name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Product.Name\" class=\"form-control\"\n          placeholder=\"Name...\" required maxlength=\"400\">\n      </div>\n    </div>  \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-hamburger\" [class.green-icon]=\"Description.valid\" [class.red-icon]=\"Description.invalid && Description.touched\"></i>\n          </div>\n        </div> \n        <input name=\"Description\" #Description=\"ngModel\" [(ngModel)]=\"_service.formData.Description\" class=\"form-control\"\n          placeholder=\"Description...\" required maxlength=\"400\">\n      </div>\n    </div>  \n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-fire-alt\"  [class.green-icon]=\"Amount.valid\" [class.red-icon]=\"Amount.invalid && Amount.touched\"></i>\n            </div>\n          </div>\n          <input name=\"Amount\" #Amount=\"ngModel\" [(ngModel)]=\"_service.formData.Amount\" class=\"form-control\" \n            placeholder=\"Amount...\" required >\n        </div>\n      </div>\n      <div class=\"form-group col-md-4\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"EI.valid\" [class.red-icon]=\"EI.invalid && EI.touched\"></i>\n            </div>\n          </div>\n          <input name=\"EI\" #EI=\"ngModel\" [(ngModel)]=\"_service.formData.EI\" class=\"form-control\" \n            placeholder=\"EI...\" required >\n        </div>\n      </div>\n      <div class=\"form-group col-md-4\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"Price.valid\" [class.red-icon]=\"Price.invalid && Price.touched\"></i>\n            </div>\n          </div>\n          <input name=\"Price\" #Price=\"ngModel\" [(ngModel)]=\"_service.formData.Price\" class=\"form-control\" \n            placeholder=\"Price...\" required >\n        </div>\n      </div> \n    </div>\n    <div class=\"form-group\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-hamburger\" [class.green-icon]=\"DateValid.valid\" [class.red-icon]=\"DateValid.invalid && DateValid.touched\"></i>\n            </div>\n          </div>\n          <!-- <select id=\"select_product\" required name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Product.Name\" class=\"form-control\" placeholder=\"Name...\">\n            <option *ngFor=\"product of products\" value=\"{{product.Name}}\">{{product.Name}}</option>\n          </select> -->\n          <input name=\"DateValid\" #DateValid=\"ngModel\" [(ngModel)]=\"_service.formData.DateValid\" class=\"form-control\"\n            placeholder=\"DateValid...\" >\n        </div>\n      </div>\n    <div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Submit Form Data</button> \n        <button class=\"btn btn-lg btn-block\" type=\"button\" (onClick)=\"resetForm(form)\" style=\"background-color: slategray; border-radius: 20px; color:#ffff\"><i class=\"fas fa-database\"></i> Clear</button>\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FridgeProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgeProductDetailComponent", function() { return FridgeProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fridgeproduct_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fridgeproduct.service */ "./src/app/services/fridgeproduct.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");







var FridgeProductDetailComponent = /** @class */ (function () {
    function FridgeProductDetailComponent(router, service, toastr, prodService, userService) {
        this.router = router;
        this.prodService = prodService;
        this.userService = userService;
        this._service = service;
        this._toastrService = toastr;
    }
    FridgeProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
        this.resetForm();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.prodService.refreshList();
        this.products = this.prodService.list;
    };
    FridgeProductDetailComponent.prototype.onSubmit = function (form) {
        this._service.formData.Fridge.Id = this.fridgeId;
        if (this._service.formData.Id == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    };
    FridgeProductDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this._service.postFridgeProductDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.success('Submitted (post) successfully', 'Product Detail Register');
            _this._service.refreshList(_this.fridgeId);
        }, function (err) {
            console.log(err);
        });
    };
    FridgeProductDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this._service.putFridgeProductDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.info('Submitted (put) successfully', 'Product Detail Register');
            _this._service.refreshList(_this.fridgeId);
        }, function (err) {
            console.log(err);
        });
    };
    FridgeProductDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this._service.resetForm();
    };
    FridgeProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fridge-product-detail',
            template: __webpack_require__(/*! ./fridge-product-detail.component.html */ "./src/app/components/home/open/fridge-product/fridge-product-detail/fridge-product-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_fridgeproduct_service__WEBPACK_IMPORTED_MODULE_2__["FridgeproductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], FridgeProductDetailComponent);
    return FridgeProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/fridge-product/fridge-product-list/fridge-product-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/home/open/fridge-product/fridge-product-list/fridge-product-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n    <table class=\"table wrapped-div\" style=\"width: 100%\">\n      <thead>\n        <th>Image</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>Amount</th>\n        <th>Price</th>\n        <th>DateBuy</th>\n        <th>DateValid</th>\n        <th><i class=\"fas fa-cogs\"></i></th>\n      </thead>\n      <tr *ngFor=\"let pd of _service.list\">\n        <td (click)=\"populateForm(pd)\">      \n            <img *ngIf=\"pd.Product.ImgURL==''\" src=\"https://www.diamondbathrooms.com/sites/default/files/default_images/no_image_available.png\" style=\"max-height: 75px; max-width: 75px; opacity:0.3\"/>\n            <img *ngIf=\"pd.Product.ImgURL!=''\" src=\"{{pd.Product.ImgURL}}\" style=\"max-height: 75px; max-width: 75px\"></td>\n        <td (click)=\"populateForm(pd)\">{{pd.Product.Name}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.Description}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.Amount}} {{pd.EI}} </td>\n        <td (click)=\"populateForm(pd)\">{{pd.Price}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.DateBuy}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.DateValid}}</td>\n        <td>\n          <i *ngIf=\"pd.User.Id==userDetails.Id\" class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.Id)\"></i>\n          <i *ngIf=\"pd.User.Id!=userDetails.Id\" class=\"far fa-trash-alt fa-lg text-danger\" style=\"opacity: 0.3\"></i>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"!isLoaded\" class=\"text-center\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/home/open/fridge-product/fridge-product-list/fridge-product-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/home/open/fridge-product/fridge-product-list/fridge-product-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FridgeProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgeProductListComponent", function() { return FridgeProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fridgeproduct_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fridgeproduct.service */ "./src/app/services/fridgeproduct.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var FridgeProductListComponent = /** @class */ (function () {
    function FridgeProductListComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoaded = false;
        this._service = service;
        this._toastrService = toastr;
    }
    FridgeProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.today = ??? 
        this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
        this._service.refreshList(this.fridgeId);
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    FridgeProductListComponent.prototype.populateForm = function (pd) {
        this._service.formData = Object.assign({}, pd);
    };
    FridgeProductListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.isLoaded = false;
            this._service.deleteFridgeProductDetail(PMId).subscribe(function (res) {
                _this._toastrService.warning('Submitted (delete) successfully', 'FridgeProduct Detail Register');
                _this._service.refreshList(_this.fridgeId);
            }, function (err) {
                console.log(err);
            });
        }
        this.isLoaded = true;
    };
    FridgeProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fridge-product-list',
            template: __webpack_require__(/*! ./fridge-product-list.component.html */ "./src/app/components/home/open/fridge-product/fridge-product-list/fridge-product-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_fridgeproduct_service__WEBPACK_IMPORTED_MODULE_2__["FridgeproductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], FridgeProductListComponent);
    return FridgeProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/fridge-product/fridge-product.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/home/open/fridge-product/fridge-product.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h1 class=\"display-4 text-center\">Fridge Product Detail Register</h1>\n    <hr>\n    <div clas=\"row\"></div>\n    <div class=\"wrapped-div\"><br/>\n      <app-fridge-product-detail></app-fridge-product-detail>\n      </div><br/>\n    <div class=\"wrapped-div\" style=\"width: 100%\">\n      <app-fridge-product-list></app-fridge-product-list>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/open/fridge-product/fridge-product.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home/open/fridge-product/fridge-product.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FridgeProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgeProductComponent", function() { return FridgeProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FridgeProductComponent = /** @class */ (function () {
    function FridgeProductComponent() {
    }
    FridgeProductComponent.prototype.ngOnInit = function () {
    };
    FridgeProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fridge-product',
            template: __webpack_require__(/*! ./fridge-product.component.html */ "./src/app/components/home/open/fridge-product/fridge-product.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FridgeProductComponent);
    return FridgeProductComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/open.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/home/open/open.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<div class=\"wrapper\">\n    <div class=\"wrapped-div\">\n      <div class=\"tab-header\">\n        <p class=\"text-center display-4\">You Open Fridge (Id={{fridgeId}})</p>\n        <h2 routerLink='/home/open/fridgeproduct' routerLinkActive='active'>Products</h2>\n        <h2 routerLink='/home/open/sticker' routerLinkActive='active'>Stickers</h2> \n        <h2 routerLink='/home/open/cart' routerLinkActive='active'>Shopping Cart</h2> \n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-10 offset-md-1\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/open/open.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/open/open.component.ts ***!
  \********************************************************/
/*! exports provided: OpenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenComponent", function() { return OpenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpenComponent = /** @class */ (function () {
    function OpenComponent() {
    }
    OpenComponent.prototype.ngOnInit = function () {
        this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
    };
    OpenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open',
            template: __webpack_require__(/*! ./open.component.html */ "./src/app/components/home/open/open.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpenComponent);
    return OpenComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/sticker/sticker-detail/sticker-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/home/open/sticker/sticker-detail/sticker-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n  <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.Id\">  \n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text bg-white\">\n          <i class=\"fas fa-hamburger\" [class.green-icon]=\"Text.valid\" [class.red-icon]=\"Text.invalid && Text.touched\"></i>\n        </div>\n      </div> \n      <input name=\"Text\" #Text=\"ngModel\" [(ngModel)]=\"_service.formData.Text\" class=\"form-control\"\n        placeholder=\"Text...\" required maxlength=\"400\">\n    </div>\n  </div>  \n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Submit Form Data</button>  \n    </div> \n</form>"

/***/ }),

/***/ "./src/app/components/home/open/sticker/sticker-detail/sticker-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/home/open/sticker/sticker-detail/sticker-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StickerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerDetailComponent", function() { return StickerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sticker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sticker.service */ "./src/app/services/sticker.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var StickerDetailComponent = /** @class */ (function () {
    function StickerDetailComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this._service = service;
        this._toastrService = toastr;
    }
    StickerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
    };
    StickerDetailComponent.prototype.onSubmit = function (form) {
        if (this._service.formData.Id == 0)
            this.insertRecord(form);
    };
    StickerDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this._service.postStickerDetail().subscribe(function (res) {
            _this._toastrService.success('Submitted (post) successfully', 'Sticker Detail Register');
            _this._service.refreshList(_this.fridgeId);
        }, function (err) {
            console.log(err);
        });
    };
    StickerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sticker-detail',
            template: __webpack_require__(/*! ./sticker-detail.component.html */ "./src/app/components/home/open/sticker/sticker-detail/sticker-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_sticker_service__WEBPACK_IMPORTED_MODULE_2__["StickerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], StickerDetailComponent);
    return StickerDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/sticker/sticker-list/sticker-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/home/open/sticker/sticker-list/sticker-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n    <table class=\"table wrapped-div\" style=\"width: 100%\">\n      <thead>\n        <th>Text</th>\n        <th>DateAdd</th>\n        <th>User</th> \n      </thead>\n      <tr *ngFor=\"let pd of _service.list\"> \n        <td >{{pd.Text}}</td>\n        <td >{{pd.DateAdd}}</td>\n        <td >{{pd.User.FullName}}</td> \n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"!isLoaded\" class=\"text-center\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/home/open/sticker/sticker-list/sticker-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/home/open/sticker/sticker-list/sticker-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StickerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerListComponent", function() { return StickerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sticker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sticker.service */ "./src/app/services/sticker.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var StickerListComponent = /** @class */ (function () {
    function StickerListComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoaded = false;
        this._service = service;
        this._toastrService = toastr;
    }
    StickerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
        this._service.refreshList(this.fridgeId);
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    StickerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sticker-list',
            template: __webpack_require__(/*! ./sticker-list.component.html */ "./src/app/components/home/open/sticker/sticker-list/sticker-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_sticker_service__WEBPACK_IMPORTED_MODULE_2__["StickerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], StickerListComponent);
    return StickerListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/open/sticker/sticker.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/open/sticker/sticker.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h1 class=\"display-4 text-center\">Sticker Detail Register</h1>\n    <hr>\n    <div clas=\"row\"></div>\n    <div class=\"wrapped-div\"><br/>\n      <app-sticker-detail></app-sticker-detail>\n      </div><br/>\n    <div class=\"wrapped-div\" style=\"width: 100%\">\n      <app-sticker-list></app-sticker-list>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/open/sticker/sticker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/home/open/sticker/sticker.component.ts ***!
  \*******************************************************************/
/*! exports provided: StickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerComponent", function() { return StickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StickerComponent = /** @class */ (function () {
    function StickerComponent() {
    }
    StickerComponent.prototype.ngOnInit = function () {
    };
    StickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sticker',
            template: __webpack_require__(/*! ./sticker.component.html */ "./src/app/components/home/open/sticker/sticker.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StickerComponent);
    return StickerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\"> \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-hamburger\" [class.green-icon]=\"Name.valid\" [class.red-icon]=\"Name.invalid && Name.touched\"></i>\n          </div>\n        </div>\n        <input name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Name\" class=\"form-control\"\n          placeholder=\"Name...\" required maxlength=\"400\">\n      </div>\n    </div> \n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"PasswordHash.valid\" [class.red-icon]=\"PasswordHash.invalid && PasswordHash.touched\"></i>\n            </div>\n          </div>\n          <input type=\"password\" name=\"PasswordHash\" #PasswordHash=\"ngModel\" [(ngModel)]=\"_service.formData.PasswordHash\" class=\"form-control\" \n            placeholder=\"PasswordHash...\" required >\n        </div>\n      </div> \n    <div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Get Access For Already Exist Fridge</button> \n        <button class=\"btn btn-lg btn-block\" type=\"button\" (onClick)=\"resetForm(form)\" style=\"background-color: slategray; border-radius: 20px; color:#ffff\"><i class=\"fas fa-database\"></i> Clear</button>\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UserFridgeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFridgeAddComponent", function() { return UserFridgeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_userfridge_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userfridge.service */ "./src/app/services/userfridge.service.ts");






var UserFridgeAddComponent = /** @class */ (function () {
    function UserFridgeAddComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this._service = service;
        this._toastrService = toastr;
    }
    UserFridgeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
    };
    UserFridgeAddComponent.prototype.onSubmit = function (form) {
        this.insertRecord(form);
    };
    UserFridgeAddComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this._service.postUserFridgeDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.success('Submitted (post) successfully', 'Fridge Detail Register');
        }, function (err) {
            if (err)
                console.log(err);
            _this._toastrService.error('Submitted (post) error', 'Fridge Detail Register');
        });
    };
    UserFridgeAddComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this._service.resetForm();
    };
    UserFridgeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-fridge-add',
            template: __webpack_require__(/*! ./user-fridge-add.component.html */ "./src/app/components/home/user-panel/user-fridge/user-fridge-add/user-fridge-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_userfridge_service__WEBPACK_IMPORTED_MODULE_5__["UserfridgeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserFridgeAddComponent);
    return UserFridgeAddComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.Id\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.Stickers\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.FridgeProducts\"> \n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.Users\"> \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-hamburger\" [class.green-icon]=\"Name.valid\" [class.red-icon]=\"Name.invalid && Name.touched\"></i>\n          </div>\n        </div>\n        <input name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Name\" class=\"form-control\"\n          placeholder=\"Name...\" required maxlength=\"400\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-align-center\" [class.green-icon]=\"Description.valid\" [class.red-icon]=\"Description.invalid && Description.touched\"></i>\n          </div>\n        </div>\n        <input name=\"Description\" #Description=\"ngModel\" [(ngModel)]=\"_service.formData.Description\" \n        class=\"form-control\" placeholder=\"Description...\" required maxlength=\"400\">\n      </div>\n    </div>  \n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"PasswordHash.valid\" [class.red-icon]=\"PasswordHash.invalid && PasswordHash.touched\"></i>\n            </div>\n          </div>\n          <input type=\"password\" name=\"PasswordHash\" #PasswordHash=\"ngModel\" [(ngModel)]=\"_service.formData.PasswordHash\" class=\"form-control\" \n            placeholder=\"PasswordHash...\" required >\n        </div>\n      </div> \n    <div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Submit Form Data</button> \n        <button class=\"btn btn-lg btn-block\" type=\"button\" (onClick)=\"resetForm(form)\" style=\"background-color: slategray; border-radius: 20px; color:#ffff\"><i class=\"fas fa-database\"></i> Clear</button>\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UserFridgeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFridgeDetailComponent", function() { return UserFridgeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fridge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fridge.service */ "./src/app/services/fridge.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var UserFridgeDetailComponent = /** @class */ (function () {
    function UserFridgeDetailComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this._service = service;
        this._toastrService = toastr;
    }
    UserFridgeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
    };
    UserFridgeDetailComponent.prototype.onSubmit = function (form) {
        if (this._service.formData.Id == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    };
    UserFridgeDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this._service.postFridgeDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.success('Submitted (post) successfully', 'Fridge Detail Register');
            _this._service.refreshList();
        }, function (err) {
            console.log(err);
        });
    };
    UserFridgeDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this._service.putFridgeDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.info('Submitted (put) successfully', 'Fridge Detail Register');
            _this._service.refreshList();
        }, function (err) {
            console.log(err);
        });
    };
    UserFridgeDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this._service.resetForm();
    };
    UserFridgeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-fridge-detail',
            template: __webpack_require__(/*! ./user-fridge-detail.component.html */ "./src/app/components/home/user-panel/user-fridge/user-fridge-detail/user-fridge-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_fridge_service__WEBPACK_IMPORTED_MODULE_2__["FridgeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UserFridgeDetailComponent);
    return UserFridgeDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n    <table class=\"table wrapped-div\" style=\"width: 100%\">\n      <thead> \n        <th>Name</th>\n        <th>Description</th>\n        <th>DateCreate</th>\n        <th>Owners</th> \n        <th><i class=\"fas fa-cogs\"></i></th>\n      </thead>\n      <tr *ngFor=\"let pd of _service.list\"> \n        <td (click)=\"populateForm(pd)\">{{pd.Name}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.Description}}</td>\n        <td (click)=\"populateForm(pd)\">{{pd.DateCreate}}</td>\n        <td (click)=\"populateForm(pd)\">\n          <p *ngFor=\"let user of pd.Users\">{{user.Fullname}}</p>\n        </td> \n        <td>\n          <i class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.Id)\"></i> | <i class=\"fas fa-door-open \" (click)=\"onOpen(pd.Id)\"></i>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"!isLoaded\" class=\"text-center\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserFridgeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFridgeListComponent", function() { return UserFridgeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fridge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fridge.service */ "./src/app/services/fridge.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_userfridge_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/userfridge.service */ "./src/app/services/userfridge.service.ts");







var UserFridgeListComponent = /** @class */ (function () {
    function UserFridgeListComponent(router, service, service2, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoaded = false;
        this._service = service;
        this._serviceUserFridge = service2;
        this._toastrService = toastr;
    }
    UserFridgeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.refreshList();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    UserFridgeListComponent.prototype.populateForm = function (pd) {
        this._service.formData = Object.assign({}, pd);
    };
    UserFridgeListComponent.prototype.onDelete = function (Id) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.isLoaded = false;
            this._serviceUserFridge.deleteUserFridgeDetail(Id).subscribe(function (res) {
                _this._toastrService.warning('Submitted (delete) successfully', 'Fridge Detail Register');
                _this._service.refreshList();
            }, function (err) {
                console.log(err);
            });
        }
        this.isLoaded = true;
    };
    UserFridgeListComponent.prototype.onOpen = function (Id) {
        localStorage.setItem("fridgeId", Id);
        this.router.navigate(['/home/open']);
    };
    UserFridgeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-fridge-list',
            template: __webpack_require__(/*! ./user-fridge-list.component.html */ "./src/app/components/home/user-panel/user-fridge/user-fridge-list/user-fridge-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_fridge_service__WEBPACK_IMPORTED_MODULE_2__["FridgeService"],
            src_app_services_userfridge_service__WEBPACK_IMPORTED_MODULE_6__["UserfridgeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UserFridgeListComponent);
    return UserFridgeListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h1 class=\"display-4 text-center\">Fridge Detail Register</h1>\n    <hr>\n    <div clas=\"row\"></div>\n    <div class=\"wrapped-div\"><br/>\n      <app-user-fridge-add></app-user-fridge-add>\n      </div><br/>\n    <div class=\"wrapped-div\"><br/>\n      <app-user-fridge-detail></app-user-fridge-detail>\n      </div><br/>\n    <div class=\"wrapped-div\" style=\"width: 100%\">\n      <app-user-fridge-list></app-user-fridge-list>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-fridge/user-fridge.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-fridge/user-fridge.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserFridgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFridgeComponent", function() { return UserFridgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserFridgeComponent = /** @class */ (function () {
    function UserFridgeComponent() {
    }
    UserFridgeComponent.prototype.ngOnInit = function () {
    };
    UserFridgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-fridge',
            template: __webpack_require__(/*! ./user-fridge.component.html */ "./src/app/components/home/user-panel/user-fridge/user-fridge.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserFridgeComponent);
    return UserFridgeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-page/user-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-page/user-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h1 class=\"display-4 text-center\">User Detail Register</h1>\n    <hr>\n    <div clas=\"row\"></div>\n    <div class=\"card m-5 text-center\" style=\"width:24rem\" *ngIf=\"userDetails\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\"><strong>Id : </strong>{{userDetails.Id}}</li>\n          <li class=\"list-group-item\"><strong>FullName : </strong>{{userDetails.FullName}}</li>\n          <li class=\"list-group-item\"><strong>Email : </strong>{{userDetails.Email}}</li>\n          <li class=\"list-group-item\"><strong>Role : </strong>{{userDetails.Role}}</li> \n        </ul>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-page/user-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-page/user-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(router, service) {
        this.router = router;
        this.service = service;
        this.isAdmin = false;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.userDetails = localStorage.getItem('currentUser');
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        });
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/components/home/user-panel/user-page/user-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-panel.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-panel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<div class=\"wrapper\">\n  <div class=\"wrapped-div\">\n    <div class=\"tab-header\">\n      <h2 routerLink='/home/user/page' routerLinkActive='active'>My Page</h2>\n      <h2 routerLink='/home/user/product' routerLinkActive='active'>My Products</h2>\n      <h2 routerLink='/home/user/fridge' routerLinkActive='active'>My Fridges</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent() {
    }
    UserPanelComponent.prototype.ngOnInit = function () {
    };
    UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-panel',
            template: __webpack_require__(/*! ./user-panel.component.html */ "./src/app/components/home/user-panel/user-panel.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserPanelComponent);
    return UserPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-product/user-product-detail/user-product-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-product/user-product-detail/user-product-detail.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.Id\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.ProdInfo.Id\">\n    <input type=\"hidden\" name=\"PMId\" [value]=\"_service.formData.User\"> \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-hamburger\" [class.green-icon]=\"Name.valid\" [class.red-icon]=\"Name.invalid && Name.touched\"></i>\n          </div>\n        </div>\n        <input name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"_service.formData.Name\" class=\"form-control\"\n          placeholder=\"Name...\" required maxlength=\"400\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text bg-white\">\n            <i class=\"fas fa-align-center\" [class.green-icon]=\"Description.valid\" [class.red-icon]=\"Description.invalid && Description.touched\"></i>\n          </div>\n        </div>\n        <input name=\"Description\" #Description=\"ngModel\" [(ngModel)]=\"_service.formData.Description\" \n        class=\"form-control\" placeholder=\"Description...\" required maxlength=\"400\">\n      </div>\n    </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-image\" [class.green-icon]=\"ImgURL.valid\" [class.red-icon]=\"ImgURL.invalid && ImgURL.touched\"></i>\n            </div>\n          </div>\n          <input name=\"ImgURL\" #ImgURL=\"ngModel\" [(ngModel)]=\"_service.formData.ImgURL\" class=\"form-control\"\n            placeholder=\"ImgURL...\" maxlength=256>\n            <div>\n                <img *ngIf=\"_service.formData.ImgURL==''\" src=\"https://www.diamondbathrooms.com/sites/default/files/default_images/no_image_available.png\" style=\"max-height: 38px; max-width: 38px\"/>\n                <img *ngIf=\"_service.formData.ImgURL!=''\" src=\"{{_service.formData.ImgURL}}\" style=\"max-height: 38px; max-width: 38px\"/>\n            </div> \n        </div>\n      </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-fire-alt\"  [class.green-icon]=\"Fat.valid\" [class.red-icon]=\"Fat.invalid && Fat.touched\"></i>\n            </div>\n          </div>\n          <input name=\"Fat\" #Fat=\"ngModel\" [(ngModel)]=\"_service.formData.ProdInfo.Fat\" class=\"form-control\" \n            placeholder=\"Fat...\" required >\n        </div>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"Carb.valid\" [class.red-icon]=\"Carb.invalid && Carb.touched\"></i>\n            </div>\n          </div>\n          <input name=\"Carb\" #Carb=\"ngModel\" [(ngModel)]=\"_service.formData.ProdInfo.Carb\" class=\"form-control\" \n            placeholder=\"Carb...\" required >\n        </div>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"Protein.valid\" [class.red-icon]=\"Protein.invalid && Protein.touched\"></i>\n            </div>\n          </div>\n          <input name=\"Protein\" #Protein=\"ngModel\" [(ngModel)]=\"_service.formData.ProdInfo.Protein\" class=\"form-control\" \n            placeholder=\"Protein...\" required >\n        </div>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text bg-white\">\n              <i class=\"fas fa-key\"  [class.green-icon]=\"Kkal.valid\" [class.red-icon]=\"Kkal.invalid && Kkal.touched\"></i>\n            </div>\n          </div>\n          <input name=\"Kkal\" #Kkal=\"ngModel\" [(ngModel)]=\"_service.formData.ProdInfo.Kkal\" class=\"form-control\" \n            placeholder=\"Carb...\" required >\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Submit Form Data</button> \n        <button class=\"btn btn-lg btn-block\" type=\"button\" (onClick)=\"resetForm(form)\" style=\"background-color: slategray; border-radius: 20px; color:#ffff\"><i class=\"fas fa-database\"></i> Clear</button>\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-product/user-product-detail/user-product-detail.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-product/user-product-detail/user-product-detail.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: UserProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProductDetailComponent", function() { return UserProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var UserProductDetailComponent = /** @class */ (function () {
    function UserProductDetailComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        this._service = service;
        this._toastrService = toastr;
    }
    UserProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
    };
    UserProductDetailComponent.prototype.onSubmit = function (form) {
        if (this._service.formData.Id == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    };
    UserProductDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this._service.postProductDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.success('Submitted (post) successfully', 'Product Detail Register');
            _this._service.refreshList();
        }, function (err) {
            console.log(err);
        });
    };
    UserProductDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this._service.putProductDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this._toastrService.info('Submitted (put) successfully', 'Product Detail Register');
            _this._service.refreshList();
        }, function (err) {
            console.log(err);
        });
    };
    UserProductDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this._service.resetForm();
    };
    UserProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-product-detail',
            template: __webpack_require__(/*! ./user-product-detail.component.html */ "./src/app/components/home/user-panel/user-product/user-product-detail/user-product-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UserProductDetailComponent);
    return UserProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-product/user-product-list/user-product-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-product/user-product-list/user-product-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\">\n  <table class=\"table wrapped-div\" style=\"width: 100%\">\n    <thead>\n      <th>Image</th>\n      <th>Name</th>\n      <th>Description</th>\n      <th>p/f/c</th>\n      <th>Kkal</th>\n      <th><i class=\"fas fa-cogs\"></i></th>\n    </thead>\n    <tr *ngFor=\"let pd of _service.list\">\n      <td (click)=\"populateForm(pd)\">      \n          <img *ngIf=\"pd.ImgURL==''\" src=\"https://www.diamondbathrooms.com/sites/default/files/default_images/no_image_available.png\" style=\"max-height: 75px; max-width: 75px; opacity:0.3\"/>\n          <img *ngIf=\"pd.ImgURL!=''\" src=\"{{pd.ImgURL}}\" style=\"max-height: 75px; max-width: 75px\"></td>\n      <td (click)=\"populateForm(pd)\">{{pd.Name}}</td>\n      <td (click)=\"populateForm(pd)\">{{pd.Description}}</td>\n      <td (click)=\"populateForm(pd)\">{{pd.ProdInfo.Protein}} / {{pd.ProdInfo.Fat}} / {{pd.ProdInfo.Carb}} </td>\n      <td (click)=\"populateForm(pd)\">{{pd.ProdInfo.Kkal}}</td>\n      <td>\n        <i *ngIf=\"pd.User.Id==userDetails.Id\" class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.Id)\"></i>\n        <i *ngIf=\"pd.User.Id!=userDetails.Id\" class=\"far fa-trash-alt fa-lg text-danger\" style=\"opacity: 0.3\"></i>\n      </td>\n    </tr>\n  </table>\n</div>\n<div *ngIf=\"!isLoaded\" class=\"text-center\">\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif\" style=\"max-height: 70px; max-width: 70px\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-product/user-product-list/user-product-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-product/user-product-list/user-product-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: UserProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProductListComponent", function() { return UserProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






// import { DataTableDirective } from 'angular-datatables';
// import { Subject } from 'rxjs/Subject';
//import 'rxjs/add/operator/map';
var UserProductListComponent = /** @class */ (function () {
    function UserProductListComponent(router, service, toastr, userService) {
        this.router = router;
        this.userService = userService;
        //@ViewChild(DataTableDirective) dtElement: DataTableDirective;
        //dtOptions: DataTables.Settings = {};
        //dtTrigger: Subject<any> = new Subject();
        this.isLoaded = false;
        this._service = service;
        this._toastrService = toastr;
        // this.dtOptions = {
        //   pagingType: 'full_numbers',
        //   pageLength: 5,
        //   paging: true
        // };
        //this.dtTrigger.next();
    }
    UserProductListComponent.prototype.ngOnInit = function () {
        // this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
        //    dtInstance.destroy(); 
        //    this._service.refreshList();
        //    this.dtTrigger.next();
        //  });
        var _this = this;
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            console.log(err);
        });
        this.isLoaded = true;
    };
    UserProductListComponent.prototype.populateForm = function (pd) {
        this._service.formData = Object.assign({}, pd);
        // this.dtTrigger.next();
    };
    UserProductListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.isLoaded = false;
            this._service.deleteProductDetail(PMId).subscribe(function (res) {
                _this._toastrService.warning('Submitted (delete) successfully', 'Product Detail Register');
                //  this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
                //    dtInstance.destroy(); 
                //    this._service.refreshList();
                //    this.dtTrigger.next();
                //   });
            }, function (err) {
                console.log(err);
            });
        }
        this.isLoaded = true;
        // this.dtTrigger.next(); 
    };
    UserProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-product-list',
            template: __webpack_require__(/*! ./user-product-list.component.html */ "./src/app/components/home/user-panel/user-product/user-product-list/user-product-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UserProductListComponent);
    return UserProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/user-panel/user-product/user-product.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-product/user-product.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1 class=\"display-4 text-center\">Product Detail Register</h1>\n  <hr>\n  <div clas=\"row\"></div>\n  <div class=\"wrapped-div\"><br/>\n    <app-user-product-detail></app-user-product-detail>\n    </div><br/>\n  <div class=\"wrapped-div\" style=\"width: 100%\">\n    <app-user-product-list></app-user-product-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/user-panel/user-product/user-product.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/home/user-panel/user-product/user-product.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProductComponent", function() { return UserProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProductComponent = /** @class */ (function () {
    function UserProductComponent() {
    }
    UserProductComponent.prototype.ngOnInit = function () {
    };
    UserProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-product',
            template: __webpack_require__(/*! ./user-product.component.html */ "./src/app/components/home/user-panel/user-product/user-product.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProductComponent);
    return UserProductComponent;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var CartService = /** @class */ (function () {
    function CartService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:8491/api';
        this._http = http;
    }
    CartService.prototype.postCartDetail = function () {
        return this._http.post(this.rootURL + '/cart', this.formData);
    };
    CartService.prototype.putCartDetail = function () {
        return this._http.put(this.rootURL + '/cart?id=' + this.formData.Id, this.formData);
    };
    CartService.prototype.deleteCartDetail = function (id) {
        return this._http.delete(this.rootURL + '/cart?id=' + id);
    };
    CartService.prototype.refreshList = function (id) {
        var _this = this;
        this._http.get(this.rootURL + '/cart/fridge?id=' + id)
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    CartService.prototype.resetForm = function () {
        this.formData = {
            Id: 0,
            Amount: 0,
            Description: '',
            EI: '',
            Fridge: {
                Id: 0,
                Name: '',
                Description: '',
                PasswordHash: '',
                DateCreate: new Date(),
                Stickers: null,
                FridgeProducts: null,
                Users: null
            },
            Product: {
                Id: 0,
                Name: '',
                Description: '',
                ImgURL: '',
                ProdInfo: {
                    Id: 0,
                    Fat: 0,
                    Carb: 0,
                    Protein: 0,
                    Kkal: 0
                },
                User: {
                    Id: '',
                    FullName: '',
                    Email: '',
                    Password: '',
                    Role: ''
                }
            },
            User: {
                Id: '',
                FullName: '',
                Email: '',
                Password: '',
                Role: ''
            }
        };
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/fridge.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/fridge.service.ts ***!
  \********************************************/
/*! exports provided: FridgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgeService", function() { return FridgeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var FridgeService = /** @class */ (function () {
    function FridgeService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:8491/api';
        this._http = http;
    }
    FridgeService.prototype.postFridgeDetail = function () {
        return this._http.post(this.rootURL + '/fridge', this.formData);
    };
    FridgeService.prototype.putFridgeDetail = function () {
        return this._http.put(this.rootURL + '/fridge?id=' + this.formData.Id, this.formData);
    };
    FridgeService.prototype.deleteFridgeDetail = function (id) {
        return this._http.delete(this.rootURL + '/fridge?id=' + id);
    };
    FridgeService.prototype.refreshList = function () {
        var _this = this;
        this._http.get(this.rootURL + '/fridge/user')
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    FridgeService.prototype.refreshListGeneral = function () {
        var _this = this;
        this._http.get(this.rootURL + '/fridge/general')
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    FridgeService.prototype.resetForm = function () {
        this.formData = {
            Id: 0,
            Name: '',
            Description: '',
            PasswordHash: '',
            DateCreate: new Date(),
            Stickers: null,
            FridgeProducts: null,
            Users: null
        };
    };
    FridgeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FridgeService);
    return FridgeService;
}());



/***/ }),

/***/ "./src/app/services/fridgeproduct.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/fridgeproduct.service.ts ***!
  \***************************************************/
/*! exports provided: FridgeproductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgeproductService", function() { return FridgeproductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var FridgeproductService = /** @class */ (function () {
    function FridgeproductService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:8491/api';
        this._http = http;
    }
    FridgeproductService.prototype.postFridgeProductDetail = function () {
        return this._http.post(this.rootURL + '/fridgeproduct', this.formData);
    };
    FridgeproductService.prototype.putFridgeProductDetail = function () {
        return this._http.put(this.rootURL + '/fridgeproduct?id=' + this.formData.Id, this.formData);
    };
    FridgeproductService.prototype.deleteFridgeProductDetail = function (id) {
        return this._http.delete(this.rootURL + '/fridgeproduct?id=' + id);
    };
    FridgeproductService.prototype.refreshList = function (id) {
        var _this = this;
        this._http.get(this.rootURL + '/fridgeproduct/fridge?id=' + id)
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    FridgeproductService.prototype.resetForm = function () {
        this.formData = {
            Id: 0,
            Amount: 0,
            Description: '',
            EI: '',
            Price: 0,
            DateBuy: new Date(),
            DateValid: new Date(),
            Fridge: {
                Id: 0,
                Name: '',
                Description: '',
                PasswordHash: '',
                DateCreate: new Date(),
                Stickers: null,
                FridgeProducts: null,
                Users: null
            },
            Product: {
                Id: 0,
                Name: '',
                Description: '',
                ImgURL: '',
                ProdInfo: {
                    Id: 0,
                    Fat: 0,
                    Carb: 0,
                    Protein: 0,
                    Kkal: 0
                },
                User: {
                    Id: '',
                    FullName: '',
                    Email: '',
                    Password: '',
                    Role: ''
                }
            },
            User: {
                Id: '',
                FullName: '',
                Email: '',
                Password: '',
                Role: ''
            }
        };
    };
    FridgeproductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FridgeproductService);
    return FridgeproductService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ProductService = /** @class */ (function () {
    function ProductService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:8491/api';
        this._http = http;
    }
    ProductService.prototype.postProductDetail = function () {
        return this._http.post(this.rootURL + '/product', this.formData);
    };
    ProductService.prototype.putProductDetail = function () {
        return this._http.put(this.rootURL + '/product?id=' + this.formData.Id, this.formData);
    };
    ProductService.prototype.deleteProductDetail = function (id) {
        return this._http.delete(this.rootURL + '/product?id=' + id);
    };
    ProductService.prototype.refreshList = function () {
        var _this = this;
        this._http.get(this.rootURL + '/product/user')
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    ProductService.prototype.refreshListGeneral = function () {
        var _this = this;
        this._http.get(this.rootURL + '/product/general')
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    ProductService.prototype.resetForm = function () {
        this.formData = {
            Id: 0,
            Name: '',
            Description: '',
            ImgURL: '',
            ProdInfo: {
                Id: 0,
                Fat: 0,
                Carb: 0,
                Protein: 0,
                Kkal: 0
            },
            User: {
                Id: '',
                FullName: '',
                Email: '',
                Password: '',
                Role: ''
            }
        };
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/sticker.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sticker.service.ts ***!
  \*********************************************/
/*! exports provided: StickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerService", function() { return StickerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var StickerService = /** @class */ (function () {
    // formModel = this.fb.group({
    //   Text: ['', Validators.required]
    // });
    function StickerService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:8491/api';
        this._http = http;
    }
    StickerService.prototype.postStickerDetail = function () {
        return this._http.post(this.rootURL + '/sticker', this.formData);
    };
    StickerService.prototype.refreshList = function (id) {
        var _this = this;
        this._http.get(this.rootURL + '/sticker/fridge?id=' + id)
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    StickerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StickerService);
    return StickerService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.BaseURI = 'http://localhost:8491/api';
    }
    // formModel1 = this.fb.group({
    //   FullName: ['', Validators.required],
    //   Email: ['', Validators.email], 
    //   Passwords: this.fb.group({
    //     Password: ['', [Validators.required, Validators.minLength(4)]],
    //     ConfirmPassword: ['', Validators.required]
    //   }, { validator: this.comparePasswords })
    // });
    // comparePasswords(fb: FormGroup) {
    //   let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //   //passwordMismatch
    //   //confirmPswrdCtrl.errors={passwordMismatch:true}
    //   if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
    //     if (fb.get('Password').value != confirmPswrdCtrl.value)
    //       confirmPswrdCtrl.setErrors({ passwordMismatch: true });
    //     else
    //       confirmPswrdCtrl.setErrors(null);
    //   }
    // }
    UserService.prototype.register = function () {
        // var body = {
        //   FullName: this.formModel.value.FullName,
        //   Email: this.formModel.value.Email, 
        //   Password: this.formModel.value.Passwords.Password
        // };
        return this.http.post(this.BaseURI + '/user/register', this.formData);
    };
    UserService.prototype.login = function (formData1) {
        return this.http.post(this.BaseURI + '/user/login', formData1);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(this.BaseURI + '/userpage');
    };
    UserService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.BaseURI + '/user/general')
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    UserService.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach(function (element) {
            if (userRole == element) {
                isMatch = true;
            }
        });
        return isMatch;
    };
    UserService.prototype.resetForm = function () {
        this.formData = {
            Id: '',
            FullName: '',
            Email: '',
            Password: '',
            Role: ''
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/userfridge.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/userfridge.service.ts ***!
  \************************************************/
/*! exports provided: UserfridgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserfridgeService", function() { return UserfridgeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UserfridgeService = /** @class */ (function () {
    // formModel = this.fb.group({
    //   Name: ['', Validators.required], 
    //   Passwords: this.fb.group({
    //     Password: ['', [Validators.required, Validators.minLength(4)]]})
    // });
    function UserfridgeService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:8491/api';
        this._http = http;
    }
    UserfridgeService.prototype.postUserFridgeDetail = function () {
        return this._http.post(this.rootURL + '/userfridge', this.formData);
    };
    UserfridgeService.prototype.deleteUserFridgeDetail = function (id) {
        return this._http.delete(this.rootURL + '/userfridge?id=' + id); //fridge_id
    };
    UserfridgeService.prototype.resetForm = function () {
        this.formData = {
            Name: '',
            PasswordHash: ''
        };
    };
    UserfridgeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserfridgeService);
    return UserfridgeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Study\3k2s\GitRep\Kursach-2019-3k2s-FridgyKey\aspnetcore-angular\000my\000\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map