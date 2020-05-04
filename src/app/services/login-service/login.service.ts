import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDataModel } from '../../models/admin-data-model.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLogDetail: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.userLogDetail = new BehaviorSubject(false);
  }

  getAdminStatus(){
    if (localStorage.getItem('token') === 'admin'){
      this.userLogDetail.next(true);
    }else{
      this.userLogDetail.next(false);
    }
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
    this.userLogDetail.next(false);
  }
}
