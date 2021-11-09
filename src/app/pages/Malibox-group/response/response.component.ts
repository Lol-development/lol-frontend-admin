import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styles: [
  ]
})
export class ResponseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  response(){
    Swal.fire('Respuesta enviada', 'El cliente recibira en breve el resultado', 'success')
    setTimeout(() => {
         this.router.navigateByUrl('/Home/Mailbox')
       }, 2000);
  }
}
