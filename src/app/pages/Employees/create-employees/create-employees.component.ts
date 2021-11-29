import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styles: [
  ]
})
export class CreateEmployeesComponent implements OnInit {
  public documents:any[] = [];
  document_type_id!:any;
  doc_number!: number;
  fullname!: string;
  effective_date!: string;
  eps!: string ;
  alr!: string ;
  address!: string ;
  pension!: string ;
  neighborhood!: string;
  rut!: string;
  email!: string;
  bank_account!: number;
  back_entity: string = '';
  phone!: number;
  allergy: string = '';
  birth_date: string = '';
  document_issue_date: string = '';
  place_issue_date: string = '';
  city: string = '';
  marital_status: string = '';
  academic_level: string = '';
  emergency_number: number = 0;
  emergency_name: string = '';
  regimen: string = '';
  afp: string = '';
  rh: string = '';
  
  constructor(private globalSvc: GlobalService, private employeSvc: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getDocumentTypes();
  }


  getDocumentTypes(){
    this.globalSvc.getDocumentsType()
          .subscribe((resp:any) => {
            this.documents = resp.data;
          })
  }
  createEmployee(){
    const body = {
            document_type_id: this.document_type_id,
            document_number: this.doc_number,
            fullname: this.fullname ,
            effective_date: this.effective_date,
            eps: this.eps,
            alr: this.alr,
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
            confidencial_agreement: "Si",
            vaccination_date_1: '',
            vaccination_date_2: '',
            vaccination_date_3: '',
    }
    this.employeSvc.createEmployee(body)
    .subscribe((resp:any) => {
      console.log(resp);
      if (resp.error === false) {
        Swal.fire('Exito', resp.message , 'success');
        this.router.navigateByUrl('/Home/EmployeesList');
      } else {
        Swal.fire('Oooops', resp.message, 'error');
      }
    })
  }

}
