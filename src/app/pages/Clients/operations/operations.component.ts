import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styles: [
  ]
})
export class OperationsComponent implements OnInit {
  public clients:any[] = [];
  constructor(private clientSvc:ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }
  getClients(){
    this.clientSvc.getClients() 
        .subscribe((resp:any)=> {
          this.clients = resp.data.clients;
          console.log(this.clients);
        })
  }
}
