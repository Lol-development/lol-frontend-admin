import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-aux-admins',
  templateUrl: './list-aux-admins.component.html',
  styles: [
    
  ]
})
export class ListAuxAdminsComponent implements OnInit {

  constructor(private authSvc:AuthService) { }
  public admins:any [] = [];
    ngOnInit(): void {
    this.getAdminList()
  }

  getAdminList(){
    this.authSvc.getAdminList()
          .subscribe((resp:any) => {
            this.admins = resp.data.admins;
          })
  }

}
