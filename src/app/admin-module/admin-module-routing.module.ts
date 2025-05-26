import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { HomeComponent } from './Inner_Component/home/home.component';
import { AboutComponent } from './Inner_Component/about/about.component';
import { SettingsComponent } from './Inner_Component/settings/settings.component';
import { ContactsComponent } from './Inner_Component/contacts/contacts.component';
import { DeactivateGuard } from '../Guards/deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponentComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'setting',
        component: SettingsComponent,
      },
      {
        path: 'contact',
        component: ContactsComponent,canDeactivate:[DeactivateGuard]
      },
      
      {path:'',redirectTo:'/admin/home',pathMatch:'full'}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModuleRoutingModule {}
