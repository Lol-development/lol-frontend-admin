import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAuxAdminsComponent } from './create-aux-admins/create-aux-admins.component';
import { ListAuxAdminsComponent } from './list-aux-admins/list-aux-admins.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateAuxAdminsComponent,
    ListAuxAdminsComponent,
    ValidateEmailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule,
    FormsModule, 

  ]
})
export class AdministrativesModule { }
