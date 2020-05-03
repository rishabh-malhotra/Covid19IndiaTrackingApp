import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDataModel } from '../../models/admin-data-model.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  adminLogin(admin: AdminDataModel): boolean{
    if (admin.username.trim() === 'admin' && admin.password === 'root') {
      localStorage.setItem('token', admin.username);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean{
    if (localStorage.getItem('token') !== null){
      return true;
    }
    return false;
  }

  logOut(): void{
    localStorage.removeItem('token');
  }
}
