import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http: HttpClient) { }

  getSuppliers(){
      const url = `${this.base_url}/suppliers/getall`;
      return this.http.get(url, this.header);
  }

  getSupplierId(id:string){
    const url = `${this.base_url}/suppliers/getforid/${id}`;
    return this.http.get(url, this.header);
  }
  createSupplier(data:{}){
      const url = `${this.base_url}/suppliers/create`;
      return this.http.post(url, data, this.header);
  }
  updateSupplier(data:{}, id:string){
      const url = `${this.base_url}/suppliers/update/${id}`;
      return this.http.post(url, data, this.header);
  }
  deleteSupplier(id:string){
      const url = `${this.base_url}/suppliers/delete/${id}`;
      return this.http.delete(url, this.header);
  }   
}
