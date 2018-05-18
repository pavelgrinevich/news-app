import { Component, OnInit, Inject } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { SourcesResponseProperties, NewsResponseProperties } from './ResponseProperties';

@Component({
  selector: 'body',
  template:
    `<header>load...</header>
    <main [newsList]="newsList">load...</main>
    <aside>load...</aside>`,
    providers: [NewsApiService],
})

export class AppComponent implements OnInit { 
  newsList: any;

  constructor(@Inject(NewsApiService) private heroService: NewsApiService) {}

  ngOnInit() {
    this.heroService.getNews()
      .then((response: NewsResponseProperties) => {
        this.newsList = response.articles;
        console.log(this.newsList);
      });
  }
}
