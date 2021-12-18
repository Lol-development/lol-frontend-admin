import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styles: [
  ]
})
export class OperationsComponent implements OnInit {
  public clients:any[] = [];

  constructor(private clientSvc:ClientService, private operationsSvc: OperationsService ) { }

  ngOnInit(): void {
    this.getClients();
  }
  getClients(){
    this.clientSvc.getClients() 
        .subscribe((resp:any)=> {
          this.clients = resp.data.clients;
        })
  }

}
