import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ValidateEmailComponent } from '../pages/Administratives/validate-email/validate-email.component';
import { ValidateEmailClientComponent } from '../pages/Clients/validate-email-client/validate-email-client.component';


const routes: Routes = [
    
    {path:'', component:LoginComponent},
    {path:'Validate-email', component:ValidateEmailComponent,   data:{title: 'Crear administradores auxiliares'}},
    {path:'Validate-email-client', component:ValidateEmailClientComponent,   data:{title: 'Crear clientes '}},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
