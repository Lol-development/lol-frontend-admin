import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-machine',
  templateUrl: './new-machine.component.html',
  styles: [
  ]
})
export class NewMachineComponent implements OnInit {
  public equipment_name:string = '';
  public equipment_ref: string = '';
  public equipment_certificate:string = '';
  public equipment_description:string = '';
  public equipment_capacity:string = '';
  public equipment_amount:any = 1;
  public image!: File  | any ;
  preview: string | ArrayBuffer | null = null;
  constructor(private inventorySvc: InventoryService, private router: Router) { }

  ngOnInit(): void {
  }

  createEquipment(){
    const fd = new FormData();
    fd.append('equipment_name', this.equipment_name )
    fd.append('equipment_ref', this.equipment_ref )
    fd.append('equipment_certificate', this.equipment_certificate )
    fd.append('equipment_description', this.equipment_description )
    fd.append('equipment_capacity', this.equipment_capacity )
    fd.append('equipment_amount', this.equipment_amount )
    fd.append('image', this.image )
    
    this.inventorySvc.createEquipment(fd)
            .subscribe((resp:any) => {
              if (resp.error === false) {
                Swal.fire('Exito', resp.message, 'success');
                this.router.navigateByUrl('/Home/Inventory');
              } else{
                Swal.fire('Oooops', resp.message, 'error');
                console.log(resp)
              }
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
