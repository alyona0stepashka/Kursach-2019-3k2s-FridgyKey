import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component'; 
import { AuthInterceptor } from './auth/auth.interceptor'; 
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, 
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent
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
  providers: [PaymentDetailService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
