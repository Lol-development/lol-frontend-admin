import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeesListComponent,
    CreateEmployeesComponent,
    EditEmployeeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

})
export class EmployeesModule { }
