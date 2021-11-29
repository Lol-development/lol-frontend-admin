import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public base_url = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http:HttpClient) { }

  getEmployees(){
    const url = `${this.base_url}/employee/getall`;
    return   this.http.get(url,this.header);
  }

  createEmployee(data:{}){
    const url = `${this.base_url}/employee/create`;
    return   this.http.post(url, data , this.header);
  }
  getEmployeById(id:string){
    const url = `${this.base_url}/employee/getone/${id}`;
    return this.http.get(url, this.header);
  }
  updateEmployee(id:string, data:{}){
    const url = `${this.base_url}/employee/update/${id}`;
    return this.http.put(url, data, this.header);
  }

}
