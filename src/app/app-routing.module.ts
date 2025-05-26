import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Outer_Component/login-page/login-page.component';
import { PageNotFoundComponent } from './Outer_Component/page-not-found/page-not-found.component';
import { AuthGuardsGuard } from './Guards/auth-guards.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  
  {path:'login',component:LoginPageComponent},
  

  {path:'admin',loadChildren:()=>import('././admin-module/admin-module.module').then(m=>m.AdminModuleModule),canActivate:[AuthGuardsGuard]},
  
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
