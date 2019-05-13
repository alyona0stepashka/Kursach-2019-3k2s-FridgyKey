import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeginComponent } from './components/begin/begin.component';
import { LoginComponent } from './components/begin/login/login.component';
import { RegisterComponent } from './components/begin/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
