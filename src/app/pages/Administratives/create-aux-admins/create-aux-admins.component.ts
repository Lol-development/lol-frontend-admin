import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-aux-admins',
  templateUrl: './create-aux-admins.component.html',
  styles: [
  ]
})
export class CreateAuxAdminsComponent implements OnInit {
  public admin_name:string = '';
  public email: string = '';
  public password: string = '';
  public password1:string = '';
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  

  createAdmin():any{
    const data = {
      admin_name : this.admin_name,
      email:this.email,
      password:this.password
    }
    if(this.password !== this.password1){
      return Swal.fire('Oooops', 'Las contraseñas deben coincidir', 'warning')
    } else {
      this.authSvc.createAdmin(data)
      .subscribe((resp:any) => {
        console.log(resp)
        if (resp.error === false) {
          const verifyEmail = {
            email: data.email
          }
          this.authSvc.SendConfirmEmailAdmin(verifyEmail)
                .subscribe((resp:any) => {
                  console.log(resp, verifyEmail)
                  if (resp.error === false) {
                    this.router.navigateByUrl('/Validate-email');
                    localStorage.setItem('code_id', resp.data.code_id);
                  } else {
                    Swal.fire( `${resp.message}`, 'Vuelve a intentarlo', 'error');
                    
                  }
                })
        } else {
          Swal.fire(resp.message, 'Ooopps', 'error')
        }
      })
    }
  
  }
}
