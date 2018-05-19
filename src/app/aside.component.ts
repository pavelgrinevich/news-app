import { Component, EventEmitter, Output,  Input } from '@angular/core';
import { SourcesRequestParameters, NewsRequestParameters } from './RequestParameters';

@Component({
  selector: 'aside',
  template:
    `<section>
      <h3>set filter</h3>
      <div class="filter">
        <div>
          <label for="q">Keywords or phrases to search for:</label>
        </div>
        <div>
          <input id="q" type="text" name="q" [(ngModel)]="newsParams.q">
        </div>
        <div>Sources:</div>
        <div 
          class="sources" 
          (click)="toggle()" 
          *ngIf="this.newsParams.sources !== 'any' && this.newsParams.sources !== ''"
        >{{this.newsParams.sources}}</div>
        <div 
          class="sources" (click)="toggle()" 
          *ngIf="this.newsParams.sources === 'any' || this.newsParams.sources === ''"
        >choose sources</div>
        <div class="sources-window" [style.display]="visibility?'block':'none'">
          <label for="category">Сategory:</label>
          <select [(ngModel)]="sourcesParams.category">    
            <option  *ngFor="let item of categories" [value]="item">
              {{item}}
            </option>
          </select>
          <label>Language:</label>
          <select [(ngModel)]="sourcesParams.language">    
            <option  *ngFor="let item of languages" [value]="item">
              {{item}}
            </option>
          </select>
          <label>Country:</label>
          <select [(ngModel)]="sourcesParams.country">    
            <option  *ngFor="let item of countries" [value]="item">
              {{item}}
            </option>
          </select>
          <input type="submit" value="show" (click)="showSources()">
          <h4>Sources:</h4>
          <div class="sources-list">
            <div *ngFor="let item of sourcesList">
              <input [id]="item.id" type="checkbox" [value]="item.id" [(ngModel)]="item.checked">
              <label [for]="item.id">{{item.name}}</label>
              <p>{{item.description}}</p>
            </div>
          </div>
          <input type="submit" value="apply" (click)="setSourcesList()">
          <input type="submit" value="cancel" (click)="toggle()">
        </div>
        <div>
          <label>Language:</label>
        </div>
        <div> 
          <select [(ngModel)]="newsParams.language">    
            <option  *ngFor="let item of languages" [value]="item">
              {{item}}
            </option>
          </select>
        </div>
        <div>
          <label for="from">From:</label>
        </div>
        <div>
          <input id="from" type="date" name="from" [(ngModel)]="newsParams.from">
        </div>
        <div>
          <label for="to">To:</label>
        </div>
        <div>
          <input id="to" type="date" name="to" [(ngModel)]="newsParams.to">
        </div>
        <div>
          <input type="submit" value="search" (click)="setNewParams()">
        </div>
      </div>
    </section>`,
  })

export class AsideComponent {
  newsParams: NewsRequestParameters = new NewsRequestParameters('', 'any', 'any', '', '');
  sourcesParams: SourcesRequestParameters = new SourcesRequestParameters('any', 'any', 'any');
  
  languages: string[] = ['any', 'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'];
  categories: string[] = ['any', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  countries: string[] = ['any','ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  
  visibility: boolean = false;
  
  @Input() sourcesList: object[];
  @Output() searchNews = new EventEmitter<NewsRequestParameters>();
  @Output() setNewSourcesParams = new EventEmitter<SourcesRequestParameters>();
  
  setNewParams() {
    this.searchNews.emit(new NewsRequestParameters(
      this.newsParams.q, 
      this.newsParams.sources, 
      this.newsParams.language, 
      this.newsParams.from, 
      this.newsParams.to
    ));
  }

  showSources() {
    this.setNewSourcesParams.emit(new SourcesRequestParameters(
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
