import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { OperationsService } from 'src/app/services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operations-client',
  templateUrl: './operations-client.component.html',
  styles: [
  ]
})
export class OperationsClientComponent implements OnInit {
  public ID!: string;
  public ports:any [] = [];
  public operations:any [] = [];
  public client_name:string = '';
  port_id: any;
  client_id: any;
  type_organization: any;
  tons: any;
  hours: any;
  vessel: any;
  date: any;
  barges: any;
  type_of_land: any;
  op_name: any;
  constructor(private activatedRoute: ActivatedRoute, private globalSvc:GlobalService, private operationsSvc: OperationsService, private router: Router ) { }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.activatedRoute.params.subscribe(({id}) =>{
        this.ID = id;
        });
        this.getPorts();
        this.getOperationsClient();
    }

    getPorts(){
      this.globalSvc.getPorts()
              .subscribe((resp:any) => {
                this.ports = resp.data;
              })
    }
    createOperation(){
      const body = {
        name:this.op_name,
        port_id: this.port_id,
        client_id: this.ID,
        type_organization: this.type_organization,
        tons: this.tons,
        hours: this.hours,
        vessel: this.vessel, 
        date: this.date, 
        barges: this.barges,
        type_of_land: this.type_of_land
      }
      this.operationsSvc.createOperation(body)  
            .subscribe(((resp:any) => {
              if (resp.error === false) {
                Swal.fire('Exito!', resp.message, 'success');
                this.getOperationsClient();
              } else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            }))
    }

    getOperationsClient(){
      this.operationsSvc.getClientOperations(this.ID)
              .subscribe((resp:any) => {
                this.operations = resp.data
                this.client_name = this.operations[0].client.client_name;
              })
    }
}
