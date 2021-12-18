import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styles: [
  ]
})
export class InventoryComponent implements OnInit {
  public equipments:any[] = [];
  constructor(private inventorySvc: InventoryService) { }

  ngOnInit(): void {
    this.getInventory();
  }
  getInventory(){
    this.inventorySvc.getEquipments()
          .subscribe((resp:any) => {
              this.equipments = resp.data;
          })
  }

  deleteInventory(id:string) {

    Swal.fire({
      title: 'Estas seguro que quieres eliminar este equipo?',
      text:'No podras volverlo a encontrar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.value) {
        this.inventorySvc.deleteEquipment(id)
        .subscribe((resp:any) => {
          if (resp.error === false) {
            Swal.fire('Exito', resp.message, 'success');
            this.getInventory();
          } else {
            Swal.fire('Ooops', resp.message, 'error');
          }
        })
      }
    })

  }
}
