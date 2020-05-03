import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NewsComponent } from './news/news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { StateDistrictWiseComponent } from './state-district-wise/state-district-wise.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news', component: NewsComponent },
  { path: 'precautions', component: PrecautionsComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'state/:statename', component: StateDistrictWiseComponent },
  { path: '**' , component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
