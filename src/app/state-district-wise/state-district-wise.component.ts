import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';

import { StateDistrictDataModel } from '../models/state-district-data-model.model';
import { ActivatedRoute } from '@angular/router';
import { DistrictDataModel } from '../models/district-data-model.model';

@Component({
  selector: 'app-state-district-wise',
  templateUrl: './state-district-wise.component.html',
  styleUrls: ['./state-district-wise.component.css']
})
export class StateDistrictWiseComponent implements OnInit {

  stateDistrictsData: StateDistrictDataModel;
  districtsData: Array<DistrictDataModel> = [];
  stateName: string;
  district;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fetchDistrictWiseData();
  }

  fetchDistrictWiseData(){
    this.stateName = this.route.snapshot.params['statename'];
    this.apiService.getDistrictsData().subscribe((response: any) => {
      this.stateDistrictsData = response[this.stateName];
      this.districtsData = response[this.stateName].districtData;
      this.district = Object.entries(this.districtsData);
      console.log('response', response);
      console.log('statename', this.stateName);
      console.log('district data', this.districtsData);
      console.log('distric', this.district);
    })
  }

}
