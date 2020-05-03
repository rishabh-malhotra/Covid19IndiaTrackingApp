import { Component, OnInit } from '@angular/core';
import { NewsDataModel } from '../../models/news-data-model.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news-service/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news: NewsDataModel;
  newsForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(5)]],
        description : ['', Validators.required],
        summary: [{ value: '', disabled: false }, Validators.required]
    });
  }

  save(news: NewsDataModel) {
    this.newsService.addNews(news);
    this.router.navigate(['/news']);
  }

}
