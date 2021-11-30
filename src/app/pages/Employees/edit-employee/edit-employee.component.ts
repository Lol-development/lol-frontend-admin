import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styles: [
  ]
})
export class EditEmployeeComponent implements OnInit {
 
  public documents:any[] = [];
 public  ID: any;
 public  document_type_id!:any;
 public  doc_number!: number;
 public  fullname!: string;
 public  effective_date!: string;
 public  eps!: string ;
 public  arl!: string ;
 public  address!: string ;
 public  pension!: string ;
 public  neighborhood!: string;
 public  rut!: string;
 public  email!: string;
 public  bank_account!: number;
 public  back_entity: string = '';
 public  phone!: number;
 public  allergy: string = '';
 public  birth_date: string = '';
 public  document_issue_date: string = '';
 public  place_issue_date: string = '';
 public  city: string = '';
 public  marital_status: string = '';
 public  academic_level: string = '';
 public  emergency_number: number = 0;
 public  emergency_name: string = '';
 public  regimen: string = '';
 public  afp: string = '';
 public  rh: string = '';
  confidencial_agreement: any;
  document_type_name: any;
  vaccination_date_1: any;
  vaccination_date_2: any;
  vaccination_date_3: any;
  public inductions:any [] = [];
  port: any;
  date_realization: any;
  date_expiration: any;
  date_realization_certificate: any;
  public ports:any[] = [];
  public employeCertificate:any[] = [];
  public certificate:any[] = [];
  public medicalTest:any[] = [];
  public CNCL:any[] = [];
  public CNCList:any[] = [];
  certificate_id: any;
  entity: any;
  date_expiration_certificate: any;
  mt_entity: any;
  mt_date_realization: any;
  mt_type: any;
  mt_date_expiration: any;
  position_id: any;
  entity_cncl: any;
  date_realization_cncl: any;
  date_expiration_cncl: any;
  constructor(private globalSvc: GlobalService, private activatedRoute:ActivatedRoute, private employeSvc:EmployeeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.ID = id
    });
    this.getDocumentTypes();
    this.getEmployeeByID();
    this.getHSQInductions();
    this.getPorts();
    this.getCertifatesEmployee();
    this.getAvaibleCertificates();
    this.getMedicTestEmployee();
    this.getCNCLEmployee();
    this.getCNCLAvaible();
  }


  getDocumentTypes(){
    this.globalSvc.getDocumentsType()
          .subscribe((resp:any) => {
            this.documents = resp.data;
          })
  }
  getEmployeeByID(){
    this.employeSvc.getEmployeById(this.ID)
        .subscribe((resp:any) => {
          this.fullname = resp.data.employee.fullname;
          this.document_type_id = resp.data.employee.document_type.id;
          this.document_type_name = resp.data.employee.document_type.name;
          this.doc_number = resp.data.employee.document_number;
          this.email = resp.data.employee.email;
          this.phone = resp.data.employee.phone;
          this.effective_date = resp.data.employee.effective_date;
          this.pension = resp.data.employee.pension;
          this.back_entity = resp.data.employee.back_entity;
          this.bank_account = resp.data.employee.bank_account;
          this.birth_date = resp.data.employee.birth_date;
          this.document_issue_date = resp.data.employee.document_issue_date;
          this.allergy = resp.data.employee.allergy;
          this.address = resp.data.employee.address;
          this.city = resp.data.employee.city;
          this.neighborhood = resp.data.employee.neighborhood;
          this.marital_status = resp.data.employee.marital_status;
          this.academic_level = resp.data.employee.academic_level;
          this.emergency_number = resp.data.employee.emergency_number;
          this.eps = resp.data.employee.eps;
          this.regimen = resp.data.employee.regime;
          this.afp = resp.data.employee.afp;
          this.arl = resp.data.employee.alr;
          this.rut = resp.data.employee.rut;
          this.confidencial_agreement = resp.data.employee.confidencial_agreement;
          this.rh = resp.data.employee.rh;
          this.emergency_name = resp.data.employee.rut;
          this.place_issue_date = resp.data.employee.place_issue_date;
          this.vaccination_date_1 = resp.data.employee.vaccination_date_1;
          this.vaccination_date_2 = resp.data.employee.vaccination_date_2;
          this.vaccination_date_3 = resp.data.employee.vaccination_date_3;
          
    })
  }
  updateEmployee(){
      const body = {
        document_type_id: this.document_type_id,
        document_number: this.doc_number,
        fullname: this.fullname ,
        effective_date: this.effective_date,
        eps: this.eps,
        alr: this.arl,
        address: this.address ,
        pension: this.pension,
        neighborhood: this.neighborhood,
        rut: this.rut,
        email: this.email,
        bank_account: this.bank_account,
        back_entity: this.back_entity,
        phone: this.phone,
        allergy: this.allergy,
        birth_date: this.birth_date,
        document_issue_date: this.document_issue_date,
        place_issue_date: this.place_issue_date,
        city: this.city,
        marital_status: this.marital_status,
        academic_level: this.academic_level,
        emergency_number: this.emergency_number,
        emergency_name: this.emergency_name,
        regime: this.regimen,
        afp: this.afp,
        rh: this.rh,
        confidencial_agreement: this.confidencial_agreement,
        vaccination_date_1: this.vaccination_date_1,
        vaccination_date_2: this.vaccination_date_2,
        vaccination_date_3: this.vaccination_date_3,
    }
    this.employeSvc.updateEmployee(this.ID, body)
              .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                } else{
                  Swal.fire('Oooops', resp.message, 'error');
                }
              })
  }
  getHSQInductions(){
    this.globalSvc.getInductionsEmployee(this.ID)
            .subscribe((resp :any)=> {
              this.inductions = resp.data.HSQInductionsList;
            })
  }
  createInduction(){
    const body = {
      port_id: this.port,
      employee_id: this.ID,
      date_realization: this.date_realization,
      date_expiration:this.date_expiration
    }
    this.globalSvc.createHSQInduction(body)
          .subscribe((resp:any) =>{
            if (resp.error === false) {
              Swal.fire('Exito', resp.message, 'success')
              this.getHSQInductions();
            }else{
              Swal.fire('Oooops', resp.message, 'error')
            }
          })
  }
  getPorts(){
    this.globalSvc.getPorts()
          .subscribe((resp:any) => {
            this.ports = resp.data;
          })
  }
  getCertifatesEmployee(){
    this.employeSvc.getAsignCertificateEmployee(this.ID)
                .subscribe((resp:any) => {
                  this.employeCertificate = resp.data;
                })
  }
  asignCertificate(){
    const body = {
    employee_id: this.ID,
    certificate_id:this.certificate_id ,
    entity: this.entity,
    date_realization: this.date_realization_certificate,
    date_expiration: this.date_expiration_certificate
    }
    this.employeSvc.asignCertificate(body)
            .subscribe((resp:any) => {
              console.log(resp);
              if (resp.error === false) {
                  Swal.fire('Exito', resp.message , 'success');
                  this.getCertifatesEmployee();
              }else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })
  }
  getAvaibleCertificates(){
    this.globalSvc.getAllCertificates()
          .subscribe((resp:any) => {
            this.certificate = resp.data;
          })
  }
  getMedicTestEmployee(){
    this.employeSvc.getMedicalEmployeeTest(this.ID)
              .subscribe((resp:any) => {
                this.medicalTest = resp.data;
              })
  }
  createMedicalTest(){
    const body = {
      employee_id:this.ID,
      entity: this.mt_entity,
      date_realization: this.mt_date_realization,
      date_expiration: this.mt_date_expiration,
      type: this.mt_type
    }
    this.employeSvc.createMedicalTest(body)
              .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.getMedicTestEmployee();
                } else {
                  Swal.fire('Oooops', resp.message, 'error')
                }
              })
  }

  asignCNCL(){
    const body = {
      employee_id: this.ID,
      position_id:this.position_id,
      entity:this.entity_cncl,
      date_realization: this.date_realization_cncl,
      date_expiration: this.date_expiration_cncl
    }
    this.employeSvc.asignCNCL(body)
          .subscribe((resp:any) => {
            if (resp.error === false) {
              Swal.fire('Exito', resp.message, 'success');
              this.getCNCLEmployee()
            } else {
              Swal.fire('Oooops', resp.message, 'error');
            }
          })
  }

  getCNCLEmployee(){
      this.employeSvc.getCNCLEmploye(this.ID)
              .subscribe((resp:any) => {
                this.CNCL = resp.data;
              })
  }

  getCNCLAvaible(){
     this.globalSvc.getCharges()
            .subscribe((resp:any) => {
                this.CNCList = resp.data;
            })
  }
}