import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './reports/reports.component';

import { VendorsComponent } from './vendors/vendors.component';
import { RouterModule } from '@angular/router';
import { GraphicsComponent } from './graphics/graphics.component';

import { CreateAuxAdminsComponent } from './Administratives/create-aux-admins/create-aux-admins.component';
import { ListAuxAdminsComponent } from './Administratives/list-aux-admins/list-aux-admins.component';
import { NewVendorsComponent } from './vendors/new-vendors/new-vendors.component';

import { ClientsModule } from './Clients/clients.module';
import { ConfigurationsModule } from './Configurations/configurations.module';
import { EmployeesModule } from './Employees/employees.module';
import { TeamsModule } from './Teams/teams.module';
import { MailboxGroupModule } from './Malibox-group/mailbox-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrativesModule } from './Administratives/administratives.module';
import { EditVendorsComponent } from './vendors/edit-vendors/edit-vendors.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReportsComponent,
    VendorsComponent,
    GraphicsComponent,
    
    NewVendorsComponent,
          EditVendorsComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule, 
    ClientsModule,
    ConfigurationsModule, 
    EmployeesModule,
    MailboxGroupModule,
    TeamsModule,
    AdministrativesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
