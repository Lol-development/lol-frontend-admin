import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public email:string = '';
  public password:any = '';
  constructor(private authSVC:AuthService, private router:Router) { }

  ngOnInit(): void {
    localStorage.clear()
    }
  login(){
    const data = {
      email:this.email,
      password: this.password
    }
    this.authSVC.login(data)
          .subscribe((resp:any) => {
            console.log(resp);
            if(resp.error === false){
              localStorage.setItem('admin_name', resp.data.user.admin_name);
              localStorage.setItem('token', resp.data.jwt);
              localStorage.setItem('email', resp.data.user.email);
              localStorage.setItem('id', resp.data.user.id);           
              this.router.navigateByUrl('/Home');
            }  
          }, (err => {
            Swal.fire('Revisa los campos' , 'Ocurrio un error', 'error');
          }))
}
}