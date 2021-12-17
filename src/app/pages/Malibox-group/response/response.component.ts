import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuotationsService } from 'src/app/services/quotations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styles: [
  ]
})
export class ResponseComponent implements OnInit {
  public ID:string = '';
  public port_name:string = '';
  public product_type:string = '';
  public quantity_services:string = '';
  public tons:number = 0;
  public operation_estimate_date:string = '';
  public productivity_rate:string = '';
  public spoons:number = 0;
  public client_name:string = '';
  public hoppers:number = 0;
  public mini_hoppers:number = 0;
  public discharge:boolean = false;
  public charge:boolean  =  false;
  public bagged:boolean = false;
  public document!: File | any;
  public document_name:string = '';
  public uploading:boolean = false;
  constructor(private router:Router,  private activatedRoute:ActivatedRoute, private quotationsSvc: QuotationsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.ID = id
    });
    this.getQuotationById();
  }

  getQuotationById(){
    this.quotationsSvc.getQuotationByID(this.ID)
            .subscribe((resp:any) => {
              this.port_name  = resp.data.port.name;
              this.product_type  = resp.data.product_type;
              this.quantity_services  = resp.data.services;
              this.tons  = resp.data.tons;
              this.operation_estimate_date  = resp.data.date_operation;
              this.productivity_rate  = resp.data.product_type;
              this.spoons  = resp.data.spoons;
              this.hoppers  = resp.data.hoppers;
              this.mini_hoppers  = resp.data.mini_hoppers;
              this.discharge  = resp.data.discharge;
              this.charge  = resp.data.load;
              this.bagged  = resp.data.bagged;
              this.client_name = resp.data.client.client_name;
            })
  }
  getBase64(event:any) {
  
    this.document = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.document);
    reader.onload = function () {
      //me.modelvalue = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  response(){
    this.uploading === true;
    const fd = new FormData;
    fd.append('document', this.document);
    fd.append('document_name', this.document_name)
    this.quotationsSvc.UpdateQuotation(fd, this.ID)
              .subscribe((resp:any) => {
                this.uploading === false;
                if (resp.error === false ) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.router.navigateByUrl('/Home/Mailbox');

                } else {
                  Swal.fire('Oooops', resp.message, 'error')
                }
              })
  }
}