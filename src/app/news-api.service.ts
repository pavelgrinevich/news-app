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
    this.newsRequestParameters = new NewsRequestParameters(
      param.q,
      param.sources,
      param.language,
      param.from,
      param.to,  
    );
  }

  setSourcesRequestParameters(param: SourcesRequestParameters) {
    this.sourcesRequestParameters = new SourcesRequestParameters(
      param.category,
      param.language,
      param.country,
    );
  }

  getNews() {
    return new Promise ((resolve) => {
      newsapi.v2.everything(this.newsRequestParameters)
      .then((response: object) => resolve(response));
    });
  }

  getSources() {
    newsapi.v2.sources(this.sourcesRequestParameters)
      .then((response: object) => {
        console.log(response);
        /*
          {
            status: "ok",
            sources: [...]
          }
        */
      });
  }
}
