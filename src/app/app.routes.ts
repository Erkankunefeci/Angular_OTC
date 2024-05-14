import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
      
       { path: '', title: 'Home Page', component: HomeComponent},
       {path: 'login', title: 'Üye Giriş', component: LoginComponent},
        
      

      
];