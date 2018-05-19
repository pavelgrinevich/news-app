import { Component, EventEmitter, Output,  Input } from '@angular/core';
import { SourcesRequestProperties, NewsRequestProperties } from '../../services/RequestProperties';

@Component({
  selector: 'aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  })

export class AsideComponent {
  newsParams: NewsRequestProperties = new NewsRequestProperties('', 'any', 'any', '', '');
  sourcesParams: SourcesRequestProperties = new SourcesRequestProperties('any', 'any', 'any');
  
  languages: string[] = ['any', 'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'];
  categories: string[] = ['any', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  countries: string[] = ['any','ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  
  visibility: boolean = false;
  
  @Input() sourcesList: object[];
  @Output() searchNews = new EventEmitter<NewsRequestProperties>();
  @Output() setNewSourcesParams = new EventEmitter<SourcesRequestProperties>();
  
  setNewParams() {
    this.searchNews.emit(new NewsRequestProperties(
      this.newsParams.q, 
      this.newsParams.sources, 
      this.newsParams.language, 
      this.newsParams.from, 
      this.newsParams.to
    ));
  }

  showSources() {
    this.setNewSourcesParams.emit(new SourcesRequestProperties(
      this.sourcesParams.category, 
      this.sourcesParams.language, 
      this.sourcesParams.country,
    ));
  }

  toggle() {
    this.visibility=!this.visibility;
  }

  setSourcesList() {
    this.newsParams.sources = '';

    this.sourcesList.forEach((elem: any) => {
      if (elem.checked) this.newsParams.sources += `${elem.id},`;
    });

    this.toggle();
  }
}
