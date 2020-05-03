import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen: boolean;
  isLoggedIn: boolean;

  constructor(private loginService: LoginService, private route: Router) {
   }

  ngOnInit(): void {
    this.navbarOpen = false;
    this.isLoggedIn = this.isAdminLoggedIn();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isAdminLoggedIn(){
    return this.loginService.isLoggedIn();
  }

  logOut(){
    this.loginService.logOut();
    this.isLoggedIn = false;
    this.route.navigate(['/home']);
  }

}
