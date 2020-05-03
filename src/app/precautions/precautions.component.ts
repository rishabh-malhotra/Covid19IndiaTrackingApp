import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  title: string;
  imagesSrc: Array<string> = [];
  constructor() {
    this.title = 'Precautions';
    this.imagesSrc = [
      '../../assets/precautions6.jpg',
      '../../assets/precaution7.jpg',
      '../../assets/precaution8.jpg',
      '../../assets/precautions9.png',
      '../../assets/precautions11.png',
      '../../assets/precautions12.png'
    ]
  }

  ngOnInit(): void {
  }

}
