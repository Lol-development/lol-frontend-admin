import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operations-client',
  templateUrl: './operations-client.component.html',
  styles: [
  ]
})
export class OperationsClientComponent implements OnInit {
  public ID!: string;
  constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.activatedRoute.params.subscribe(({id}) =>{
        this.ID = id;
        });
    }
}
