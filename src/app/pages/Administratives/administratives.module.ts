import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAuxAdminsComponent } from './create-aux-admins/create-aux-admins.component';
import { ListAuxAdminsComponent } from './list-aux-admins/list-aux-admins.component';



@NgModule({
  declarations: [
    CreateAuxAdminsComponent,
    ListAuxAdminsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdministrativesModule { }
