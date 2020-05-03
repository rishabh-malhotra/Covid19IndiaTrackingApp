import { Injectable } from '@angular/core';
import { NewsDataModel } from '../../models/news-data-model.model';


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  newsList: NewsDataModel[] = [];

  constructor() { }

  addNews(news: NewsDataModel) {
    try {
      //this.newsList = localStorage.getItem('newsDetails');
      this.newsList.push(news);
      //localStorage.setItem('newsDetails',this.newsList);
    }
    catch (error) {
        console.log(error);
    }
  }
}

