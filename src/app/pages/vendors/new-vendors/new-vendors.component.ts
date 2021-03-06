import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/services/suppliers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-vendors',
  templateUrl: './new-vendors.component.html',
  styles: [
  ]
})
export class NewVendorsComponent implements OnInit {
  public nitem: number = 0;
  public nit : number = 0;
  public supplier_name:string = '';
  public supplier_address:string = '';
  public supplier_phone:number = 0;
  public supplier_email:string = '';
  public code_ace:number = 0;
  public code_ciu:number = 0;
  public code_dpt: number = 0;
  public code_pai:number = 0;
  public seller:boolean = false;
  public prove: number = 0;
  public client:number = 0;
  public employee:number = 0;
  public affiliate:number = 0;
  constructor(private router:Router,  private suppliersSvc: SuppliersService ) { }

  ngOnInit(): void {
  }
  createSupplier(){
    const body = {
     nitem: this.nitem, 
     nit: this.nit, 
     supplier_name: this.supplier_name,
     supplier_address: this.supplier_address,
     supplier_phone: this.supplier_phone,
     supplier_email: this.supplier_email,
     code_ace: this.code_ace,
     code_ciu: this.code_ciu,
     code_dpt: this.code_dpt,
     code_pai:this.code_pai,
     seller: this.seller,
     prove: this.prove, 
     client: this.client, 
     employee: this.employee, 
     affiliate: this.affiliate
    }

    this.suppliersSvc.createSupplier(body)
              .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.router.navigateByUrl('/Home/VendorsDirectory')
                } else {
                  Swal.fire('Oooops', resp.message, 'error');
                  console.log(resp)
                }
              })

  }
}
