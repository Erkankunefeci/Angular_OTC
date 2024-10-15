import { Route } from '@angular/router';
import { authGuard } from './guards/common/auth.guard';
import { AboutsComponent } from './user/abouts/abouts.component';
import { HomeComponent } from './user/home/home.component';

export const routes: Route[] = [
       
       { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
     
       {path:'',loadComponent:()=>import('./user/ui-layout/ui-layout.component').then((m)=>m.UILayoutComponent),

              children:[
                     { path: '', redirectTo: 'home', pathMatch: 'full' },
                     {path: 'home', title: 'Home', component: HomeComponent},
                     {path: 'about', title: 'About', component: AboutsComponent}],canActivate:[authGuard]
       }
       ,  { path: '**',title:"Hatalı", component: AboutsComponent }
       //{ path: 'account', loadChildren: () => import('./pages/Uye/uye.routes').then(m => m.uye_routes),data:{preload:true} },
       ,
      // {path: 'admin',  loadChildren: () => import("./Admin/admin.routes").then(m => m.admin_routes),data:{preload:true}}
     ];