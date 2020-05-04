import { Injectable } from '@angular/core';
import { NewsDataModel } from '../../models/news-data-model.model';


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  newsList: NewsDataModel[] = [];

  constructor() {
    this.newsList.push({
      title: 'Sample News 1',
      description: 'description for sample news',
      summary: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      addedOn: new Date().toString()
    });
   }

  addNews(news: NewsDataModel) {
    try {
       // this.newsList = localStorage.getItem('newsDetails');
      this.newsList.push(news);
       // localStorage.setItem('newsDetails',this.newsList);
    }
    catch (error) {
        console.log(error);
    }
  }
}

