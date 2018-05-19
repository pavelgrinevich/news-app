const NewsAPI = require('newsapi');
import { SourcesRequestProperties, NewsRequestProperties } from './RequestParameters';
import { Injectable } from '@angular/core';

const newsapi = new NewsAPI('f4275402660946fa87fa39864876df8f');

@Injectable({
  providedIn: 'root',
})

export class NewsApiService {
  private newsRequestProperties: NewsRequestProperties;
  private sourcesRequestProperties: SourcesRequestProperties;

  constructor() {
    this.newsRequestProperties = new NewsRequestProperties('', 'any', '', '', '');
    this.sourcesRequestProperties = new SourcesRequestProperties('', '', '');
  }

  setNewsRequestParameters(param: NewsRequestProperties) {
    if (param.language === 'any') param.language = '';

    this.newsRequestProperties = new NewsRequestProperties(
      param.q,
      param.sources,
      param.language,
      param.from,
      param.to,  
    );
  }

  setSourcesRequestParameters(param: SourcesRequestProperties) {
    for (let key in param) {
      if (param[key] === 'any') param[key] = '';
    }

    this.sourcesRequestProperties = new SourcesRequestProperties(
      param.category,
      param.language,
      param.country,
    );
  }

  getNews() {
    return newsapi.v2.everything(this.newsRequestProperties);
  }

  getSources() {
    return newsapi.v2.sources(this.sourcesRequestProperties);
  }
}
