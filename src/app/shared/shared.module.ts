import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';



@NgModule({
  declarations: [
    TopbarComponent,
    ScrollerComponent,
    FooterComponent,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports:[
    TopbarComponent,
    ScrollerComponent,
    FooterComponent,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
