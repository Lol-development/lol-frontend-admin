import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validate-email-client',
  templateUrl: './validate-email-client.component.html',
  styles: [
  ]
})
export class ValidateEmailClientComponent implements OnInit {
  public charge:boolean = false;
  public verifyEmailForm = this.fb.group({
    code: ['', Validators.required],
 });
  constructor(private fb: FormBuilder,  private router: Router, private authsvc: AuthService, private clientSvc:ClientService) { }

  ngOnInit(): void {
  }

  validateEmail(){
    this.charge == true
    const verifyForm = {
      'code_id':  localStorage.getItem('code_id') ,
      'code_asign': `${this.verifyEmailForm.controls['code'].value}`,
      "type": "verify_email",
      "method":"EMAIL"
    }

    this.authsvc.validateCode(verifyForm)
            .subscribe((resp:any)=> {
              if (resp.error === false) {
                console.log(resp)
                const body  =  {
                  email: localStorage.getItem('email_client')
                }
                this.clientSvc.validateEmail(body)
                      .subscribe((resp:any) => {
                        this.charge === false

                        console.log(resp);
                        if (resp.error === false) {
                         
                          this.router.navigateByUrl('/Home/Operations');
                       
                        } else {
                          Swal.fire('Ooops', resp.message , 'error')
                        };
                        })
              } else if (!resp.data.ok) {
                console.log(resp)
                Swal.fire('Ooops', 'código incorrecto', 'error')
                this.charge == false
              }
            })
  }

}
