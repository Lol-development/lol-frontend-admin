import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getSubtotal } from 'src/app/models/global.models';
import { EmployeeService } from 'src/app/services/employee.service';
import { GlobalService } from 'src/app/services/global.service';
import { OperationsService } from 'src/app/services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operations-employees-jobs',
  templateUrl: './operations-employees-jobs.component.html',
  styles: [
  ]
})
export class OperationsEmployeesJobsComponent implements OnInit {
  public Turns:any[] = [];
  public charges: any[] = [];

  public ID!: string;
  public Oid!: string;
  public Eid!: string;
  public charge_id:string = '';
  public turn_id:string = '';
  public employee_turns:any [] = [];
  public date_start: string = '';
  public date_stop: string = '';
  public employee_name:string = '';
  public employee_photo:string = '';
  public consolidate:any = 0;
  public total:number = 0;
  public subtotal:number = 0;
  public subtotal_turn:number = 0;
  public total_turns:number = 0;
  getSubtotal = getSubtotal;

  constructor(private activatedRoute: ActivatedRoute, public globalSvc: GlobalService, public employeeSvc:EmployeeService, public operationSvc: OperationsService) { }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.activatedRoute.params.subscribe(({id, oid, eid}) =>{
        this.ID = id;
        this.Oid = oid;
        this.Eid = eid;
        });
    this.getAllTurns();
    this.getCharges();
    this.getEmployeeTurns();
    this.getConsolidateTurns();
  }
  getAllTurns(){
    this.globalSvc.getAllTurns()
            .subscribe((resp:any) =>{ 
              this.Turns = resp.data;
      })
  }
  getCharges(){
    this.globalSvc.getCharges()
            .subscribe((resp:any) => {
              this.charges = resp.data;
            })
  }

  getEmployeeTurns(){
    this.operationSvc.getEmployeeTurns(this.Oid, this.Eid)
            .subscribe((resp:any) => {
                this.employee_turns = resp.data;
                 this.employee_name = resp.data[0].employee.fullname;
                 this.employee_photo = resp.data[0].employee.photo;
            })
  }
  newEmployeeOperation(){
    const body = { 
      operation_id:this.Oid,
      employee_id:this.Eid,
      position_id: this.charge_id,
      turn_id:this.turn_id,
      date_start: this.date_start,
      date_stop: this.date_stop
    }
    this.operationSvc.newTurn(body) 
            .subscribe((resp:any) => {
              if (resp.error === false) {
                Swal.fire('Exito', resp.message, 'success');
                this.getEmployeeTurns();
              } else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })

  }

  updateTurn(id:string, foods:boolean, epp:boolean, transport:boolean){
    const body = {
      foods: foods,
      epp: epp,
      transport: transport
    }

    this.operationSvc.updateTurnAdmin(body, id)
            .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                } else {
                  Swal.fire('Ooops', resp.message, 'error');
                }
                this.getEmployeeTurns();

            })
   
  }

  getConsolidateTurns(){
    this.operationSvc.getTurnsForEmployeeId(this.Eid, this.Oid)
            .subscribe((resp:any) => {

              resp.turns.forEach((res:any) => {
                this.subtotal =   getSubtotal(res.cnt, res.turn.value )
                this.total += this.subtotal;
                this.subtotal_turn += Number(res.turn.value)
                this.total_turns += res.cnt; 
              });
            })
  }


}
