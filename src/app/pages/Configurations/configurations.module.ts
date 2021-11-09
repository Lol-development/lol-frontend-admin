import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { ParametersComponent } from './parameters/parameters.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParametersComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
 
})
export class ConfigurationsModule { }
