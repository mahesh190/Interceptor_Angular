import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { HeaderComponentComponent } from './Shared_Component/header-component/header-component.component';
import { FooterComponentComponent } from './Shared_Component/footer-component/footer-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { HomeComponent } from './Inner_Component/home/home.component';
import { AboutComponent } from './Inner_Component/about/about.component';
import { SettingsComponent } from './Inner_Component/settings/settings.component';
import { ContactsComponent } from './Inner_Component/contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponentComponent,
    FooterComponentComponent,
    AdminComponentComponent,
    HomeComponent,
    AboutComponent,
    SettingsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class AdminModuleModule { }
