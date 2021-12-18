import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { OperationsService } from 'src/app/services/operations.service';
import Swal from 'sweetalert2';
import { getSubtotal } from '../../../models/global.models';


@Component({
  selector: 'app-operations-client-details',
  templateUrl: './operations-client-details.component.html',
  styles: [
  ]
})
export class OperationsClientDetailsComponent implements OnInit {

  public ID!: string;
  public Oid!: string;
  public client_name:string = '';
  public turns: any[] = [];
  public employees: any[] = [];
  public charges: any[] = [];
  public carries: any[] = [];
  public discarries: any[] = [];
  public removables: any[] = [];
  public factualStatus: any[] = [];
  public dispatches: any[] = [];
  public rccs: any[] = [];
  public evidences: any[] = [];
  public daily_reports: any[] = [];
  public facturation_reports: any[] = [];
  public reports: any[] = [];
  motor_ship: any;
  date_start: any;
  date_stop: any;
  coils: any;
  license_plate: any;
  consignment: any;
  coil_code: any;
  thickness: any;
  dimensions: any;
  gross_weight: any;
  observations: any;
  charge_id: any;
  employee_id: any;
  date: any;
  activity: any;
  basic_salary: any;
  auxiliary_transport: any;
  duration: any;
  email_notification: boolean = false;
  description: any;
  eid: any;
  turn_id: any;
  public image!: File  | any ;
  preview: string | ArrayBuffer | null = null;
  public evidences_desc:string = '';
  public filter_day:string = '';
  public total:number = 0;
  public subtotal:number = 0;
  public subtotal_turn:number = 0;
  public total_turns:number = 0;
  getSubtotal = getSubtotal;
  expected_time: any;
  real_time: any;
  obtained_rat: any;
  expected_rat: any;
  rid: any;
  constructor(private activatedRoute: ActivatedRoute, public globalSvc: GlobalService, public employeeSvc:EmployeeService, public operationSvc: OperationsService) { }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.activatedRoute.params.subscribe(({id, oid}) =>{
        this.ID = id;
        this.Oid = oid;
        });
        this.getTurns();
        this.getEmployee();
        this.getCharges();
        this.getOperationCarrie();
        this.getOperationDiscargue();
        this.getOperationRemovable();
        this.getFactualState();
        this.getOperationDispatches();
        this.getOperationTurns();
        this.getOperationEvidences();
        this.getFacturation();
        this.getOperationReport();
    }
    getTurns(){
      this.globalSvc.getAllTurns()
            .subscribe((resp:any) => {
              this.turns = resp.data;
            })
    }
    getEmployee(){
      this.employeeSvc.getEmployees()
                  .subscribe((resp:any) =>{ 
                    this.employees = resp.data.employees;
                  })
     }
    getCharges(){
      this.globalSvc.getCharges()
              .subscribe((resp:any) => {
                this.charges = resp.data;
              })
    }
    getOperationCarrie(){
      this.operationSvc.getOperationCarries(this.Oid)
                .subscribe((resp:any) => {
                  this.carries = resp.data;
                  this.client_name = this.carries[0].client.client_name;
                })
    }
    newOperationCarrie(){
      const body = {
          operation_id: this.Oid,
          client_id: this.ID,
          motor_ship: this.motor_ship,
          date_start: this.date_start,
          date_stop: this.date_stop,
          coils: this.coils,
          license_plate: this.license_plate,
          consignment: this.consignment,
          coil_code: this.coil_code,
          thickness: this.thickness,
          dimensions: this.dimensions,
          gross_weight: this.gross_weight,
          observations: this.observations
      }

      this.operationSvc.newOperationCarrie(body)
              .subscribe((resp:any)=> {
                if (resp.error === false) {
                 Swal.fire('Exito', resp.message, 'success'); 
                 this.getOperationCarrie();
                } else {
                  Swal.fire('Ooops', resp.message, 'error');
                }
              })
    }
    getOperationDiscargue(){
        this.operationSvc.getOperationsDischarges(this.Oid)
                      .subscribe((resp:any) => {
                        this.discarries = resp.data;
                      })
    }
    newOperationDischarge(){
      const body = {
        operation_id: this.Oid,
        client_id: this.ID,
        motor_ship: this.motor_ship,
        coils: this.coils,
        date_start: this.date_start,
        date_stop: this.date_stop,
        observations: this.observations
      }
      this.operationSvc.createDischarge(body)
                  .subscribe((resp:any) => {
                    console.log(resp, body)
                     if (resp.error === false) {
                        Swal.fire('Exito', resp.message, 'success');
                        this.getOperationDiscargue();                       
                     } else {
                       Swal.fire('Oooops', resp.message, 'error');
                     }
                  })
    }
    getOperationRemovable(){
      this.operationSvc.getOperationRemovables(this.Oid)
                .subscribe((resp:any) => {
                  this.removables = resp.data;
                })
    }
    newRemovable(){
      const body = {
        operation_id: this.Oid,
        position_id: this.charge_id,
        employee_id: this.employee_id,
        date_start: this.date_start,
        date_stop: this.date_stop,
        activity: this.activity,
        basic_salary: this.basic_salary,
        auxiliary_transport: this.auxiliary_transport,
        duration: this.duration
      }
      this.operationSvc.createRemovable(body)
                  .subscribe((resp:any)=> {
                    if (resp.error === false) {
                      Swal.fire('Exito', resp.message, 'success');
                      this.getOperationRemovable();
                    } else{ 
                      Swal.fire('Oooops', resp.message, 'error');
                    }
                  })
    }
    getFactualState(){
      this.operationSvc.getOperationFactualState(this.Oid)
              .subscribe((resp:any) => {
                this.factualStatus = resp.data;
              })
    }
    newFactualState(){
      const body = {
       operation_id: this.Oid,
       motor_ship:this.motor_ship,
       date_start:this.date_start,
       date_stop:  'no tiene',
       description:this.description,
       email_notification: this.email_notification
      }
      this.operationSvc.createFactualStatus(body) 
            .subscribe((resp:any) => {
              if (resp.error === false) {
                Swal.fire('Exito', resp.message, 'success');
                this.getFactualState();
              }else {
                Swal.fire('Oooops', resp.message, 'error');
                console.log(body, resp)
              }
            })
    }
    getOperationDispatches(){
      this.operationSvc.getOperationDispatches(this.Oid)
                .subscribe((resp:any) => {
                  this.dispatches = resp.data;
                })

    }
    newDispatches(){
      const body = {
      operation_id: this.Oid,
      client_id:this.ID,
      motor_ship: this.motor_ship,
      coils: this.coils,
      date_start: this.date_start,
      date_stop: this.date_stop,
      license_plate: this.license_plate,
      consignment: this.consignment,
      coil_code: this.coil_code,
      thickness: this.thickness,
      dimensions: this.dimensions,
      gross_weight: this.gross_weight,
      observations: this.observations
    }
    this.operationSvc.createDispatch(body)
            .subscribe((resp:any) => {
              console.log(resp, body);
              if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.getOperationDispatches();
              } else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })

  }
  getOperationTurns(){
    this.operationSvc.getOperationRcc(this.Oid)
              .subscribe((resp:any) => {
                this.rccs = resp.data;
              })
  }
  newEmployeeOperation(){
    const body = { 
      operation_id:this.Oid,
      employee_id:this.eid,
      position_id: this.charge_id,
      turn_id:this.turn_id,
      date_start: this.date_start,
      date_stop: this.date_stop
    }
    this.operationSvc.newTurn(body) 
            .subscribe((resp:any) => {
              if (resp.error === false) {
                Swal.fire('Exito', resp.message, 'success');
                this.getOperationTurns();
              } else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })

  }
  getOperationEvidences(){
    this.operationSvc.getEvidences(this.Oid)
              .subscribe((resp:any) => {
                this.evidences = resp.data;
              })
  }

  uploadEvidence(){
    const fd = new FormData();
    fd.append('image', this.image);
    fd.append('description', this.evidences_desc);
    fd.append('operation_id', this.Oid);

    this.operationSvc.createEvidence(fd)
              .subscribe((resp:any) => {
               ;
                if (resp.error === false ) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.getOperationEvidences();
                } else {
                  Swal.fire('Oooops', resp.message, 'error');
                }
              })
  }
  convert(event: Event): void {
    const target = (event.target as HTMLInputElement);
    if (target.files && target.files[0]) {
      this.image = target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(target.files[0]); // read file as data url
      reader.onload = (progressEvent) => { // called once readAsDataURL is completed
        this.preview  = progressEvent.target!.result;
      };  
    }
  }

  getDailyReport(){
    this.operationSvc.getDailyOperationReport(this.Oid, this.filter_day)
              .subscribe((resp:any) => {
                this.daily_reports = resp ;
              })
  }

  getFacturation(){
    this.operationSvc.facturactionOperation(this.Oid)
              .subscribe((resp:any) => {
                this.facturation_reports = resp.turns;
                resp.turns.forEach((res:any) => {
                  this.subtotal =   getSubtotal(res.cnt, res.turn.value )
                  this.total += this.subtotal;
                  this.subtotal_turn += Number(res.turn.value)
                  this.total_turns += res.cnt;                
                });
              })
  }

 createReport(){
   const body = {
    operation_id: this.Oid,
    expected_rat: this.expected_rat,
    obtained_rat: this.obtained_rat,
    expected_time: this.expected_time,
    real_time: this.real_time
   }

   this.operationSvc.createReport(body)
          .subscribe((resp:any) =>{
            if (resp.error === false) {
              Swal.fire('Exito', resp.message, 'success');
              this.getOperationReport();
            } else {
              Swal.fire('Oooops', resp.message, 'error')
            }
          })
 }

 updateReport(){
  const body = {
    operation_id: this.Oid,
    expected_rat: this.expected_rat,
    obtained_rat: this.obtained_rat,
    expected_time: this.expected_time,
    real_time: this.real_time
   }
  
   this.operationSvc.UpdateReport(this.rid, body)
              .subscribe((resp:any) => {               
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                } else {
                  Swal.fire('Ooooops', resp.message, 'error');
                }
              })
 }

 getOperationReport(){
      this.operationSvc.getAllReportForOperation(this.Oid)
              .subscribe((resp:any) => {
               
                this.expected_rat = resp.data.expected_rat;
                this.expected_time = resp.data.expected_time;
                this.obtained_rat = resp.data.obtained_rat;
                this.real_time = resp.data.real_time;
                this.rid = resp.data.id;
                this.reports = resp.data;
              })
 }
}
