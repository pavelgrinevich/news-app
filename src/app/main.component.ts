import { Component, Input } from '@angular/core';
import { NewsResponseProperties } from './ResponseProperties';

@Component({
  selector: 'main',
  template:
    `<section *ngFor="let item of newsList">
      <div class="title-img">
        <a href="{{item.url}}" target="_blank" *ngIf="item.urlToImage">
          <img  src="{{item.urlToImage}}" alt="">
        </a>
        <p *ngIf="!item.urlToImage">no image</p>
      </div>
      <a class="ref-title" href="{{item.url}}" target="_blank" *ngIf="item.title">
        <h2 *ngIf="item.title">{{item.title}}</h2>
      </a>
      <h2 *ngIf="!item.title">no title</h2>
      <hr class="top-line">
      <p class="publication-date" *ngIf="item.publishedAt">{{item.publishedAt}}</p>
      <p class="publication-date" *ngIf="!item.publishedAt">no date</p>
      <p class="publication-author" *ngIf="item.author">{{item.author}}</p>
      <p class="publication-author" *ngIf="!item.author">no author</p>
      <div class="later-button">
        <button>detailed info</button>
        <button>add to read later</button>
      </div>
      <hr class="bottom-line">
      <p *ngIf="item.description">
        {{item.description}}<br /><a href="{{item.url}}" target="_blank">go to news...</a>
      </p>
      <p *ngIf="!item.description">
        no description<br /><a href="{{item.url}}" target="_blank">go to news...</a>
      </p>
      <p class="source" *ngIf="item.source.name">source: {{item.source.name}}</p>
      <p class="source" *ngIf="!item.source.name">no source</p>
    </section>`
})

export class MainComponent {
  @Input() newsList: NewsResponseProperties;
}
