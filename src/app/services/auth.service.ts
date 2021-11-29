import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public base_url = environment.base_url
  constructor(private http:HttpClient) { }

  login(data: {}){
    const url = `${this.base_url}/auth/admin/login`;
    return this.http.post(url, data);
  }

  createAdmin(data:{}){
    const url = `${this.base_url}/admin/register`;
    return this.http.post(url, data);
  }

  validateEmailAdmin(data:{}){
    const url = `${this.base_url}/admin/ses/confirm_verify`;
    return this.http.post(url, data);
  }

  SendConfirmEmailAdmin(data:{}){
    const url = `${this.base_url}/admin/ses/verify_email`;
    return this.http.post(url, data);
  }

  validateCode(data:{}){
    const url = `${this.base_url}/code/validate`;
    return this.http.post(url , data)

  }
}
