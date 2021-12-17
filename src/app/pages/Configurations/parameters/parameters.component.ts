import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  public Turns:any[] = [];
  type: any;
  name: any;
  charge_name: any;
  hour_value: any;
  horary: any;
  description_turn: any;
  abbreviation_turn: any;
  value_turn: any;
  comments: any;
  constructor(private globalSvc: GlobalService) { }

  ngOnInit(): void {
    this.getPortS();
    this.getCertificates();
    this.getCharges();
    this.getTurns();
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
  deletePort(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este puerto? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.globalSvc.deletePort(id)
        .subscribe((resp:any) => {
            if (resp.error === false) {
              Swal.fire('Exito', resp.message, 'success');
              this.getPortS();
            } else {
              Swal.fire('Oooops', resp.message, 'error')
            }
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
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
  deleteCertificate(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este certificado? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.globalSvc.deleteCertificates(id)
        .subscribe((resp:any) => {
          if (resp.error === false) {
            Swal.fire('Exito', resp.message, 'success');
            this.getCertificates();
          } else {
            Swal.fire('Ooops', resp.message, 'error');
            this.getCertificates();
          }
          console.log(resp)
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
      }
     
    })
   
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
  deleteCharges(id:string){
    Swal.fire({
      title: '¿Quieres eliminar este cargo? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.globalSvc.deleteCharges(id)
        .subscribe((resp:any) => {
          if (resp.error === false) {
            Swal.fire('Exito!', resp.message, 'success');
            this.getCharges();
          }else {
            Swal.fire('Oooops', resp.message, 'error');
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
      }
     
    })
  
      
  }
  getTurns(){
    this.globalSvc.getAllTurns()
            .subscribe((resp:any) => {
              this.Turns =  resp.data
            })
  }
  createTurns(){
    const body  = {
      description: this.description_turn,
      abbreviation: this.abbreviation_turn,
      value: this.value_turn,
      comments: this.comments
    }
    this.globalSvc.createTurn(body)
            .subscribe((resp:any) => {
              if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.getTurns();
              } else {
                Swal.fire('Oooops', resp.message, 'error');
              }
            })
  }
  deleteTurns(id:string){
        Swal.fire({
      title: '¿Quieres eliminar este turno? ',
      showDenyButton: true,
     
      confirmButtonText: 'Eliminar',
       denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.globalSvc.deleteTurn(id)
        .subscribe((resp:any) => {
          if (resp.error === false ) {
              Swal.fire('Exito', resp.message, 'success');
              this.getTurns();
          } else {
            Swal.fire('Ooops', resp.message, 'error')
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Eliminación cancelada', '', 'info')
      }
     
    })
  
  }
}

