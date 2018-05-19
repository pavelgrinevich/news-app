const NewsAPI = require('newsapi');
import { SourcesRequestParameters, NewsRequestParameters } from './RequestParameters';
import { Injectable } from '@angular/core';

const newsapi = new NewsAPI('f4275402660946fa87fa39864876df8f');

@Injectable({
  providedIn: 'root',
})

export class NewsApiService {
  private newsRequestParameters: NewsRequestParameters;
  private sourcesRequestParameters: SourcesRequestParameters;

  constructor() {
    this.newsRequestParameters = new NewsRequestParameters('', 'any', '', '', '');
    this.sourcesRequestParameters = new SourcesRequestParameters('', '', '');
  }

  setNewsRequestParameters(param: NewsRequestParameters) {
    if (param.language === 'any') param.language = '';

    this.newsRequestParameters = new NewsRequestParameters(
      param.q,
      param.sources,
      param.language,
      param.from,
      param.to,  
    );
  }

  setSourcesRequestParameters(param: SourcesRequestParameters) {
    for (let key in param) {
      if (param[key] === 'any') param[key] = '';
    }

    this.sourcesRequestParameters = new SourcesRequestParameters(
      param.category,
      param.language,
      param.country,
    );
  }

  getNews() {
    return newsapi.v2.everything(this.newsRequestParameters);
  }

  getSources() {
    return newsapi.v2.sources(this.sourcesRequestParameters);
  }
}
