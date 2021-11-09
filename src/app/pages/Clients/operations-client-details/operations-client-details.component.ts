import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operations-client-details',
  templateUrl: './operations-client-details.component.html',
  styles: [
  ]
})
export class OperationsClientDetailsComponent implements OnInit {

  public ID!: string;
  public Oid!: string;
  constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.activatedRoute.params.subscribe(({id, oid}) =>{
        this.ID = id;
        this.Oid = oid;
        });
    }
}
