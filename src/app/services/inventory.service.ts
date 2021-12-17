import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http: HttpClient) { }

  getEquipments(){
    const url = `${this.base_url}/equipments/getall/`;
    return this.http.get(url, this.header);
  }

  getEquipmentById(id:string){
    const url = `${this.base_url}/equipments/getforid/${id}`;
    return this.http.get(url, this.header);
  }

  updateEquipment(data:FormData, id:string){
    const url = `${this.base_url}/equipments/update/${id}`;
    return this.http.put(url, data, this.header);
  }

  createEquipment(data:FormData){
    const url = `${this.base_url}/equipments/create`;
    return this.http.post(url, data, this.header);
  }
  
  deleteEquipment(id:string){
    const url = `${this.base_url}/equipments/delete/${id}`;
    return this.http.delete(url, this.header);
  }
}
