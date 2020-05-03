import { Component, OnInit } from '@angular/core';
import { NewsDataModel } from '../../models/news-data-model.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  title = 'Add News';
  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  descriptionFormControl = new FormControl('', Validators.required);
  summaryFormControl = new FormControl('', Validators.required);
  constructor(public fb: FormBuilder, private router: Router, private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
      summary: this.summaryFormControl
    });
  }

  save(news: NewsDataModel) {
    this.newsService.addNews(new NewsDataModel(this.titleFormControl.value,
      this.descriptionFormControl.value, this.summaryFormControl.value));
    this.router.navigate(['/news']);
  }

}
