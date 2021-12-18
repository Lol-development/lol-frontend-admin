import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from 'src/app/services/suppliers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-vendors',
  templateUrl: './edit-vendors.component.html',
  styles: [
  ]
})
export class EditVendorsComponent implements OnInit {

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
  ID: any;
  constructor(private router:Router,  private suppliersSvc: SuppliersService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.ID = id
    });
    this.getSupplier()
  }
  updateSupplier(){
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

    this.suppliersSvc.updateSupplier(body, this.ID)
              .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.router.navigateByUrl('/Home/VendorsDirectory')
                } else {
                  Swal.fire('Oooops', resp.message, 'error');
                }
              })

  }

  getSupplier(){
    this.suppliersSvc.getSupplierId(this.ID)
            .subscribe(({data}:any) => {
              console.log(data)
              this.nitem = data.nitem;
              this.nit = data.nit;
              this.supplier_name = data.supplier_name;
              this.supplier_address = data.supplier_address;
              this.supplier_phone = data.supplier_phone;
              this.supplier_email = data.supplier_email;
              this.code_ace = data.code_ace;
              this.code_ciu = data.code_ciu;
              this.code_dpt = data.code_dpt;
              this.code_pai = data.code_pai;
              this.seller = data.seller;
              this.prove = data.prove;
              this.client = data.client;
              this.employee = data.employee;
              this.affiliate = data.affiliate;
            })
  }
}
