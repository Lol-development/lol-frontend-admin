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
 public  doc_number!: any;
 public  fullname!: string;
 public  effective_date!: string;
 public  eps!: string ;
 public  arl!: string ;
 public  address!: string ;
 public  pension!: string ;
 public  neighborhood!: string;
 public  rut!: string;
 public  email!: string;
 public  bank_account!: any;
 public  back_entity: string = '';
 public  phone!: any;
 public  allergy: string = '';
 public  birth_date: string = '';
 public  document_issue_date: string = '';
 public  place_issue_date: string = '';
 public  city: string = '';
 public  marital_status: string = '';
 public  academic_level: string = '';
 public  emergency_number: any = 0;
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
  public image!: File  | any ;
  preview: string | ArrayBuffer | null = null;

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
          this.image = resp.data.employee.photo;
          
    })
  }
  updateEmployee(){
    const fd = new FormData  ();
    fd.append('document_type_id', this.document_type_id );
    fd.append('document_number', this.doc_number );
    fd.append('fullname', this.fullname );
    fd.append('effective_date', this.effective_date );
    fd.append('eps', this.eps );
    fd.append('alr', this.arl );
    fd.append('address', this.address );
    fd.append('pension', this.pension );
    fd.append('neighborhood', this.neighborhood );
    fd.append('rut', this.rut );
    fd.append('email', this.email );
    fd.append('bank_account', this.bank_account );
    fd.append('back_entity', this.back_entity );
    fd.append('phone', this.phone );
    fd.append('allergy', this.allergy );
    fd.append('birth_date', this.birth_date );
    fd.append('document_issue_date', this.document_issue_date );
    fd.append('place_issue_date', this.place_issue_date );
    fd.append('city', this.city );
    fd.append('marital_status', this.marital_status );
    fd.append('academic_level', this.academic_level );
    fd.append('emergency_number', this.emergency_number );
    fd.append('emergency_name', this.emergency_name );
    fd.append('regime', this.regimen );
    fd.append('afp', this.afp );
    fd.append('rh', this.rh );
    fd.append('confidencial_agreement', this.confidencial_agreement );
    fd.append('vaccination_date_1', this.vaccination_date_1 );
    fd.append('vaccination_date_2', this.vaccination_date_2 );
    fd.append('vaccination_date_3', this.vaccination_date_3 );
    fd.append('image', this.image );
    
    this.employeSvc.updateEmployee(this.ID, fd)
              .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.getEmployeeByID();
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
  deleteInduction(id:string){
    Swal.fire({
      title: '¿Quieres eliminar esta inducción? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.employeSvc.deleteInductionEmployee(id)
        .subscribe((resp:any) => {

          if (resp.error === false) {
            Swal.fire('Exito', resp.message, 'success');
            this.getHSQInductions();
          }else {
            Swal.fire('Oooops', resp.message, 'error')
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
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
    
              if (resp.error === false) {
                  Swal.fire('Exito', resp.message , 'success');
                  this.getCertifatesEmployee();
              }else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })
  }

  deleteCertificate(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este certificado? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.employeSvc.deleteAsignCertificate(id)
        .subscribe((resp:any) => {

          if (resp.error === false) {
            Swal.fire('Exito', resp.message, 'success');
            this.getCertifatesEmployee();
          } else {
            Swal.fire('Oooops', resp.message, 'error');
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
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
  deleteMedicalTest(id:string){
    
    Swal.fire({
      title: '¿Quieres eliminar este examen médico? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.employeSvc.deleteMedicalTests(id)
        .subscribe((resp:any) => {
          if (resp.error === false) {
            Swal.fire('Exito', resp.message, 'success');
            this.getMedicTestEmployee();
          } else {
            Swal.fire('Oooops', resp.message , 'error');
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
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
  deleteCNCLAsign(id:string){

    Swal.fire({
      title: '¿Quieres eliminar esta certificación? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.employeSvc.deleteCNCLAsign(id)
        .subscribe((resp:any) => {
          if (resp.error === false) {
              Swal.fire('Exito', resp.message, 'success');
              this.getCNCLEmployee();
          }else{ 
              Swal.fire('Oooops', resp.message, 'error');
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
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