import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styles: [
  ]
})
export class ParametersComponent implements OnInit {
  public port_name:string = '';
  public ports:any[] = [];
  public certificates:any[] = [];
  public charges:any[] = [];
  type: any;
  name: any;
  charge_name: any;
  hour_value: any;
  horary: any;
  constructor(private globalSvc: GlobalService) { }

  ngOnInit(): void {
    this.getPortS();
    this.getCertificates();
    this.getCharges();
  }
  getPortS(){
    this.globalSvc.getPorts()
          .subscribe((resp:any) => {
              this.ports = resp.data
          })
  }
  createNewPort(){
    const body = {
      name: this.port_name
    }
    this.globalSvc.createPort(body)
            .subscribe((resp:any) => {
              if (resp.error === false) {
                Swal.fire('Exito', 'Puerto creado');
                this.getPortS();
              } else {
                Swal.fire('Faltan campos', 'Ocurrio un error', 'error')
              }
            })
  }

  getCertificates(){
    this.globalSvc.getAllCertificates()
          .subscribe((resp:any) => {
            this.certificates = resp.data
          })
  }
  createCertificate(){
    const body = {
      name: this.name,
      type: 'Certificado'
     }
    this.globalSvc.createCertificates(body)
              .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.getCertificates();
                }else {
                  Swal.fire('Oooops', resp.message, 'error')
                }
              } )
  }

  getCharges(){
    this.globalSvc.getCharges()
            .subscribe((resp:any) => {
              this.charges = resp.data;
            })
  }

  createCharge(){
    const body = {
      name: this.charge_name,
      hour_value: this.hour_value,
      horary:this.horary
    }
    this.globalSvc.createCharges(body)
            .subscribe((resp:any) => {
              console.log(resp, body);
              if (resp.error === false) {
                Swal.fire('Exito', resp.message, 'success');
                this.getCharges();
              } else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })
  }
}
