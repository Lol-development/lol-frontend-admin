import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public admin_name:any = '';
  constructor() { }

  ngOnInit(): void {
    this.admin_name = localStorage.getItem('admin_name')
  }

}
