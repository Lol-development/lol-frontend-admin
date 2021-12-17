import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {
  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http: HttpClient) { }

  getAllQuotation(){
    const url = `${this.base_url}/quotations/getall`;
  return    this.http.get(url, this.header); 
  }

  getQuotationByID(id:string){
    const url = `${this.base_url}/quotations/getforid/${id}`;
  return    this.http.get(url, this.header);
  }
  UpdateQuotation(data:FormData, id:string){
    const url = `${this.base_url}/quotations/admin/updatebooleans/${id}`;
  return    this.http.put(url, data, this.header);
  }
}
