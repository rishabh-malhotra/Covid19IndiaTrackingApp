import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    NewsComponent,
    AdminLoginComponent,
    PrecautionsComponent,
    StateDistrictWiseComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
