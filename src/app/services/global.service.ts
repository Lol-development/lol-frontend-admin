import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 
  public base_url:string = environment.base_url;

  constructor(private http:HttpClient) { }


  getDocumentsType(){
    const url = `${this.base_url}/documenttypes/getall`;
    return this.http.get(url, this.header);
  }

  getPorts(){
    const url = `${this.base_url}/ports/getall`;
    return this.http.get(url , this.header);
  }


  createPort(data:{}){
    const url = `${this.base_url}/ports/create`;
    return this.http.post(url, data, this.header)
  }
  createHSQInduction(data:{}){
    const url = `${this.base_url}/hsqinductions/create`;
   return this.http.post(url, data ,this.header)
  }
  getInductionsEmployee(id:string){
    const url = `${this.base_url}/hsqinductions/getforemployee/${id}`;
   return this.http.get(url, this.header);
  }
}
