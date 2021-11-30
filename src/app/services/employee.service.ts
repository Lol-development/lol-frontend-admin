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
  asignCertificate(data:{}){
     const url = `${this.base_url}/asigncertificates/create`;
     return this.http.post(url, data, this.header);
  }
  deleteAsignCertificate(id:string){
    const url = `${this.base_url}/asigncertificates/delete/${id}`;
    return this.http.delete(url, this.header);
  }
  getAsignCertificateEmployee(id:string){
    const url = `${this.base_url}/asigncertificates/getforemploye/${id}`;
    return this.http.get(url, this.header);
  }
  getMedicalEmployeeTest(id:string){
    const url = `${this.base_url}/medicalexams/getforemploye/${id}`;
    return this.http.get(url, this.header);
  }
  createMedicalTest(data:{}){
    const url = `${this.base_url}/medicalexams/create`;
    return this.http.post(url, data, this.header);
  }
  deleteMedicalTests(id:string){
    const url = `${this.base_url}/medicalexams/delete/${id}`;
    return this.http.delete(url, this.header);
  }

  getCNCLEmploye(id:string){
    const url = `${this.base_url}/cncl/getforemploye/${id}`;
    return this.http.get(url, this.header);
  }
  asignCNCL(data:{}){
    const url = `${this.base_url}/cncl/create`;
    return this.http.post(url, data , this.header);
  }

  deleteCNCLAsign(id:string){
    const url = `${this.base_url}/cncl/delete/${id}`;
    return this.http.delete(url , this.header)
  }

  deleteInductionEmployee(id:string){
    const url = `${this.base_url}/hsqinductions/delete/${id}`;
    return this.http.delete(url , this.header);
  }
}
