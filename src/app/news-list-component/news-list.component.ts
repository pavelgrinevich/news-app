import { Component, OnInit, Inject } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { SourcesResponseProperties, NewsResponseProperties } from '../services/ResponseProperties';
  
@Component({
    selector: 'news-list-app',
    template:
      `<main [newsList]="newsList">load...</main>
      <aside 
        [sourcesList]="sourcesList" 
        (searchNews)="searchNews($event)" 
        (setNewSourcesParams)="setNewSourcesParams($event)">load...</aside>`,
    styleUrls: ['./news-list.component.css'],
    providers: [NewsApiService],
})

export class NewsListComponent implements OnInit { 
  newsList: any;
  sourcesList: any;

  constructor(@Inject(NewsApiService) private heroService: NewsApiService) {}

  ngOnInit() {
    this.getNewsList();
    this.getSourcesList();
  }

  getNewsList() {
    this.heroService.getNews()
    .then((response: NewsResponseProperties) => {
      this.newsList = response.articles;

      this.newsList.forEach((elem: any) => {
        elem.visibility = false;
        elem.toggle = () => {
          elem.visibility = !elem.visibility;
        }
      });
    });
  }

  getSourcesList() {
    this.heroService.getSources()
    .then((response: SourcesResponseProperties) => {
      this.sourcesList = response.sources;

      this.sourcesList.forEach((elem: any) => {
        elem.checked = false;
      });
    });
  }
  
  searchNews(newsParams:any) {
    this.heroService.setNewsRequestParameters(newsParams);
    this.getNewsList();
  }

  setNewSourcesParams(sourcesParams:any) {
    this.heroService.setSourcesRequestParameters(sourcesParams);
    this.getSourcesList();
  }
}
