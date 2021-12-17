import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  public stadistics: any = [];
  constructor(private globalSvc: GlobalService) { }

  ngOnInit(): void {
    this.getStadistics();
  }


  getStadistics(){
    this.globalSvc.getStadistics()
            .subscribe((resp:any) => {
              this.stadistics = resp.data;              
            })
  }
}
