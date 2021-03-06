import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateDistrictWiseComponent } from './state-district-wise/state-district-wise.component';

import { ApiService } from './services/api-service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {LoginService} from './services/login-service/login.service';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';
import { AddNewsComponent } from './news/add-news/add-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    NewsComponent,
    AdminLoginComponent,
    PrecautionsComponent,
    StateDistrictWiseComponent,
    NotFoundPageComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ToastrModule,
  ],
  providers: [ApiService, LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
