import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styles: [
  ]
})
export class ValidateEmailComponent implements OnInit {


  public verifyEmailForm = this.fb.group({
    code: ['', Validators.required],
 });
  constructor(private fb: FormBuilder,  private router: Router, private authsvc: AuthService,) { }

  ngOnInit(): void {
  }

  validateEmail(){
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
                  email: localStorage.getItem('email')
                }
                this.authsvc.validateEmailAdmin(body)
                      .subscribe((resp:any) => {
                        console.log(resp);
                        if (resp.data.validateEmail) {
                         
                          this.router.navigateByUrl('/Home/AuxAdminList');
                          localStorage.clear();
                        };
                        })
              } else if (!resp.data.ok) {
                console.log(resp)
                Swal.fire('Ooops', 'código incorrecto', 'error')

              }
            })
  }


}
