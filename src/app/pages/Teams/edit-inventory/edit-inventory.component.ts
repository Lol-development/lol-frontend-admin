import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styles: [
  ]
})
export class EditInventoryComponent implements OnInit {
  public ID: string = '';
  public equipment_name:string = '';
  public equipment_ref: string = '';
  public equipment_certificate:string = '';
  public equipment_description:string = '';
  public equipment_capacity:string = '';
  public equipment_amount:any = 1;
  public image!: File  | any ;
  preview: string | ArrayBuffer | null = null;
  constructor( private activatedRoute:ActivatedRoute, private router: Router, private inventorySvc:InventoryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.ID = id
    });
    this.getEquipmentByID();
1  }

  updateEquipment(){
    const fd = new FormData();
    fd.append('equipment_name', this.equipment_name )
    fd.append('equipment_ref', this.equipment_ref )
    fd.append('equipment_certificate', this.equipment_certificate )
    fd.append('equipment_description', this.equipment_description )
    fd.append('equipment_capacity', this.equipment_capacity )
    fd.append('equipment_amount', this.equipment_amount )
    fd.append('image', this.image )

     this.inventorySvc.updateEquipment(fd, this.ID)
              .subscribe((resp:any) => {
                if (resp.error === false) {
                  Swal.fire('Exito', resp.message, 'success');
                  this.router.navigateByUrl('/Home/Inventory');
                } else{
                  Swal.fire('Oooops', resp.message, 'error');
                }
              })
  }

  getEquipmentByID(){
    this.inventorySvc.getEquipmentById(this.ID)
            .subscribe(({data}:any) => {
              this.equipment_amount = data.equipment_amount;
              this.equipment_capacity = data.equipment_capacity;
              this.equipment_certificate = data.equipment_certificate;
              this.equipment_description = data.equipment_description;
              this.equipment_name = data.equipment_name;
              this.equipment_ref = data.equipment_ref;
              this.image = data.equipment_image;
            })
  }
  convert(event: Event): void {
    const target = (event.target as HTMLInputElement);
    if (target.files && target.files[0]) {
      this.image = target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(target.files[0]); // read file as data url

      reader.onload = (progressEvent) => { // called once readAsDataURL is completed
        this.preview  = progressEvent.target!.result;
      };

  
}
  }
}
