import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http: HttpClient) { }


  createClient(data:{}){
      const url = `${this.base_url}/client/register`;
        return this.http.post(url , data , this.header);
  }
  getClients(){
    const url = `${this.base_url}/client/getall`;
    return this.http.get(url, this.header);
  }

  sendVerificationCode(data:{}){
    const url = `${this.base_url}/client/ses/verify_email`;
        return  this.http.post(url, data, this.header);
  }
  validateEmail(data:{}){
    const url = `${this.base_url}/client/ses/confirm_verify`;
        return this.http.post(url, data, this.header)
  }

}
