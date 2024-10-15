/// <reference types="@angular/localize" />

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {  HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withPreloading, withDebugTracing, RouterModule, Route, PreloadAllModules, RouterOutlet } from '@angular/router';
import { routes } from './app/app.routes';
import { CustomHttpService } from './app/service/custom-http.service';
import { customStrategy } from './app/customStrategy';
import { environment } from './environments/environment.development';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './app/service/common/auth.service';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export function tokenGetter() {
  console.log("erkan")
  return localStorage.getItem("token");
}

bootstrapApplication(AppComponent, 
  {
    providers: [
    provideAnimations(), // required animations providers
    provideToastr(),
  importProvidersFrom(
BrowserAnimationsModule,
  HttpClientModule,
  BrowserModule,

  //RouterModule.forRoot(routes),

  JwtModule.forRoot({
    config:{tokenGetter:tokenGetter,
  allowedDomains:['localhost:7081'],
  
  
}}), 

),
provideHttpClient(
  withInterceptorsFromDi()
),
  
  provideRouter(routes, 
   withPreloading(PreloadAllModules),
   withDebugTracing(),
  ),
{provide:"BASE_API_URL",useValue:environment.baseUrl,multi:true},
//{ provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi: true },
CustomHttpService,customStrategy,AuthService
]})
  .catch((err) => console.error("main hata",err));
