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
  constructor(private globalSvc: GlobalService) { }

  ngOnInit(): void {
    this.getPortS();
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

}
