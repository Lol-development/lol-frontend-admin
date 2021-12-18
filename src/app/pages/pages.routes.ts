import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { HomeComponent } from './home.component';
import { CreateClientsComponent } from './Clients/create-clients/create-clients.component';
import { OperationsComponent } from './Clients/operations/operations.component';
import { EmployeesListComponent } from './Employees/employees-list/employees-list.component';
import { CreateEmployeesComponent } from './Employees/create-employees/create-employees.component';
import { InventoryComponent } from './Teams/inventory/inventory.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ParametersComponent } from './Configurations/parameters/parameters.component';
import { NotificationsComponent } from './Configurations/notifications/notifications.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { OperationsClientComponent } from './Clients/operations-client/operations-client.component';
import { OperationsClientDetailsComponent } from './Clients/operations-client-details/operations-client-details.component';
import { CreateAuxAdminsComponent } from './Administratives/create-aux-admins/create-aux-admins.component';
import { ListAuxAdminsComponent } from './Administratives/list-aux-admins/list-aux-admins.component';
import { NewMachineComponent } from './Teams/new-machine/new-machine.component';
import { NewVendorsComponent } from './vendors/new-vendors/new-vendors.component';
import { EditInventoryComponent } from './Teams/edit-inventory/edit-inventory.component';
import { EditEmployeeComponent } from './Employees/edit-employee/edit-employee.component';
import { MailboxComponent } from './Malibox-group/mailbox/mailbox.component';
import { ResponseComponent } from './Malibox-group/response/response.component';
import { OperationsEmployeesJobsComponent } from './Clients/operations-employees-jobs/operations-employees-jobs.component';
import { EditVendorsComponent } from './vendors/edit-vendors/edit-vendors.component';
import { ServicesGuard } from '../services/services.guard';



const routes: Routes = [
    { path: 'Home', 
     component: HomeComponent, data:{title: 'Home'},
     canActivate:[ServicesGuard],
    children:[
        {path:'', component:GraphicsComponent, data:{title: 'Graficas y Estadísticas'}},
        {path:'CreateClients', component:CreateClientsComponent,  data:{title: 'Crear clientes'}},
        {path:'Operations', component:OperationsComponent,  data:{title: 'Clientes'}},
        {path:'ClientOperations/:id', component:OperationsClientComponent,  data:{title: 'Operaciones - Cliente'}},
        {path:'ClientOperations/:id/OperationsDetail/:oid', component:OperationsClientDetailsComponent,  data:{title: 'Detalle de la operación - Cliente'}},
        {path:'ClientOperations/:id/OperationsDetail/:oid/EmployeeMonthJob/:eid', component:OperationsEmployeesJobsComponent,  data:{title: 'Turnos mensuales  - Operaciones/Trabajadores'}},
        {path:'EmployeesList', component:EmployeesListComponent ,  data:{title: 'Base de datos - Empleados'}},
        {path:'EditEmployee/:id', component:EditEmployeeComponent ,  data:{title: 'Editar empleado - Empleados'}},
        {path:'CreateEmployees', component:CreateEmployeesComponent ,  data:{title: 'Crear Empleados'}},
        {path:'Inventory', component:InventoryComponent ,  data :{title: 'Inventario'}},
        {path:'EditInventory/:id', component:EditInventoryComponent ,  data :{title: 'Editar inventario'}},
        {path:'NewMachine', component:NewMachineComponent ,  data :{title: 'Nuevo equipo'}},
        {path:'VendorsDirectory', component:VendorsComponent ,  data:{title: 'Directorio de Proveedores'}},
        {path:'VendorsDirectory/:id', component:EditVendorsComponent ,  data:{title: 'Directorio de Proveedores - Actualizar'}},
        {path:'NewVendorsDirectory', component:NewVendorsComponent ,  data:{title: 'Nuevo   Proveedor'}},
        {path:'Parameters', component:ParametersComponent ,  data:{title: 'Parámetros'}},
        {path:'Notifications', component:NotificationsComponent,   data:{title: 'Notificaciones'}},
        {path:'CreatAuxAdmins', component:CreateAuxAdminsComponent,   data:{title: 'Crear administradores auxiliares'}},
        {path:'AuxAdminList', component:ListAuxAdminsComponent,   data:{title: 'Listado de administradores'}},
        {path:'Mailbox', component:MailboxComponent,   data:{title: 'Buzón de cotizaciones - clientes'}},
        {path:'ResponseMailbox/:id', component:ResponseComponent,   data:{title: 'Responder cotización - clientes'}},
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
