import { Routes } from "@angular/router";
import { authGuard } from "../guards/common/auth.guard";
import { LoginComponent } from "../login/login.component";
import { HomeComponent } from "./home/home.component";
import { UILayoutComponent } from "./ui-layout/ui-layout.component";
import { AboutsComponent } from "./abouts/abouts.component";


export const userroutes: Routes = [
       
     //  {path: 'login', title: 'Üye Giriş', component: LoginComponent},
       
              
             { path: '', redirectTo: 'home', pathMatch: 'full' },
              {path: 'home', title: 'Home', component: HomeComponent},
              {path: 'about', title: 'About', component: AboutsComponent},
       ,
      //,{ path: '', redirectTo: 'home', pathMatch: 'full' },
     //  { path: '**', component: ErrorComponent }
       ///</router-outlet>
        
      

      
];