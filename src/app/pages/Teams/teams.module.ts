import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NewMachineComponent } from './new-machine/new-machine.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditInventoryComponent,
    NewMachineComponent,
    InventoryComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TeamsModule { }
