import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/services/suppliers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styles: [
  ]
})
export class VendorsComponent implements OnInit {
  public suppliers: any[] = [];
  constructor(private router:Router, private suppliersSvc:SuppliersService) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(){
    this.suppliersSvc.getSuppliers()
              .subscribe((resp:any) => { 
                this.suppliers = resp.data;
              })
  }
  deleteVendor(id:string){
    
    Swal.fire({
      title: 'Estas seguro que quieres eliminar este proveedor?',
      text:'No podras volverlo a encontrar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.value) {
        this.suppliersSvc.deleteSupplier(id)
            .subscribe((resp:any) => {
              if (resp.error === false) {
                Swal.fire('Exito', resp.message, 'success');
                  this.getSuppliers();
              } else{ 
                Swal.fire('Oooops', resp.mesage, 'error');
                console.log(resp);
              }
            })
      }
    })
  
  
  }
}
