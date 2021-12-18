import { Component, OnInit } from '@angular/core';
import { QuotationsService } from 'src/app/services/quotations.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styles: [
  ]
})
export class MailboxComponent implements OnInit {
  public quotations: any[] = [];
  constructor(private quotationsSvc:QuotationsService) { }

  ngOnInit(): void {

    this.getQuotations();
  }
  
  getQuotations(){
    this.quotationsSvc.getAllQuotation()
            .subscribe((resp:any) => {
              this.quotations = resp.data;
            })
  }
}
