import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withPreloading, withDebugTracing } from '@angular/router';
import { routes } from './app/app.routes';
import { CustomHttpService } from './app/service/custom-http.service';
import { customStrategy } from './app/customStrategy';
import { environment } from './environments/environment.development';
import { TokenInterceptor } from './app/interceptor/token.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

bootstrapApplication(AppComponent, 
  {
    providers: [
  importProvidersFrom(HttpClientModule,BrowserModule,JwtModule.forRoot({config:{tokenGetter:()=>localStorage.getItem("token"),
  allowedDomains:["localhost:8080"]
}})),
  
  provideRouter(routes, 
   withPreloading(customStrategy),
   withDebugTracing(),
  ),
{provide:"BASE_API_URL",useValue:environment.baseUrl,multi:true},
{ provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi: true },
CustomHttpService,customStrategy
]})
  .catch((err) => console.error(err));
