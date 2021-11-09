import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsClientDetailsComponent } from './operations-client-details/operations-client-details.component';
import { OperationsClientComponent } from './operations-client/operations-client.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { OperationsComponent } from './operations/operations.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OperationsEmployeesJobsComponent } from './operations-employees-jobs/operations-employees-jobs.component';


@NgModule({
  declarations: [
    OperationsClientComponent,
    CreateClientsComponent,
    OperationsComponent,
    OperationsClientDetailsComponent,
    OperationsEmployeesJobsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  
})
export class ClientsModule { }
