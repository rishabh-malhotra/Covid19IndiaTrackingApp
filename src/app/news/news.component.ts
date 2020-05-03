import { Component, OnInit } from '@angular/core';
import { NewsDataModel } from '../models/news-data-model.model';
import { NewsService } from '../services/news-service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList: Array<NewsDataModel> = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsList = this.newsService.newsList;
  }

}
