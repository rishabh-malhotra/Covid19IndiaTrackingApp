import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { StateDataModel } from '../models/state-data-model.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  data: Array<StateDataModel> = [];
  titleData: StateDataModel;
  test = true;
  ngOnInit(): void {
    this.apiService.getStatesData().subscribe((response: any) => {
      console.log(response.statewise);
      this.data = response.statewise;
      this.titleData = this.data.shift();
    }
    );
  }

}
