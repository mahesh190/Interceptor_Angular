import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Outer_Component/page-not-found/page-not-found.component';
import { LoginPageComponent } from './Outer_Component/login-page/login-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './Interceptors/auth-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,LoginPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
