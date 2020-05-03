import { Component, OnInit } from '@angular/core';
import { NewsDataModel } from '../models/news-data-model.model';
import { NewsService } from '../services/news-service/news.service';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList: Array<NewsDataModel> = [];
  isAdminLoggedIn = false;
  title: string;
  constructor(private newsService: NewsService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.title = 'Latest News';
    this.newsList = this.newsService.newsList;
    this.isAdminLoggedIn = this.checkAdminLoggedIn();
  }

  checkAdminLoggedIn(){
    return this.loginService.isLoggedIn();
  }

}
