import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styles: [
  ]
})
export class CreateClientsComponent implements OnInit {
  public client_name:string = '';
  public client_name_charge:string = '';
  public address:string = '';
  public social_linkedin:string = '';
  public email:string = '';
  public password1:string = '';
    public password:string = '';
  public phone_number:string = '';
  public phone_prefix:string = '';
  constructor(private clientSvc: ClientService, private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  createClient(){
        const registerForm = {
          client_name:this.client_name,
          client_name_charge:this.client_name_charge,
          address: this.address,
          social_linkedin: this.social_linkedin,
          email:this.email,
          password: this.password,
          phone_number:this.phone_number, 
          phone_prefix: 57
        }
          if (this.password1 === this.password) {
            this.clientSvc.createClient(registerForm)
            .subscribe((resp:any) => {
              if (resp.error === false) {
                  console.log(resp);
                  const body = {
                    email: registerForm.email
                  }
                  this.clientSvc.sendVerificationCode(body)
                        .subscribe((resp:any)=> {
                          console.log(resp)
                          if (resp.error === false) {
                              localStorage.setItem('code_id', resp.data.code_id)
                              localStorage.setItem('email_client', registerForm.email)
                              this.router.navigateByUrl('/Validate-email-client')
                              console.log(resp)
                          }
                        })
              } else {
                Swal.fire(resp.message, 'Ocurrio un error', 'error')
              }
            })
          } else {
            Swal.fire( 'Oooops' ,'Las contraseñas deben coincidir','error')
          }
       
  }
}
