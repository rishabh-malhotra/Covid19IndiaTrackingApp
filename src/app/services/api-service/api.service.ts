import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://api.covid19india.org';
  }

  getStatesData(){
    console.log("hello");
    console.log(`${this.url}/data.json`);
    return this.http.get(`${this.url}/data.json`);
  }

  getDistrictsData(){
    return this.http.get(`${this.url}/state_district_wise.json`);
  }
}
