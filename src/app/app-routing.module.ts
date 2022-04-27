import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routes';
import { PagesRoutingModule } from './pages/pages.routes';

const routes: Routes = [
   {path: '', redirectTo: '/login', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
