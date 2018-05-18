import { Component, Input } from '@angular/core';
import { NewsResponseProperties } from './ResponseProperties';

@Component({
  selector: 'main',
  template:
    `<section *ngFor="let item of newsList">
      <div class="title-img">
        <img *ngIf="item.urlToImage" src="{{item.urlToImage}}" alt="">
        <p *ngIf="!item.urlToImage" src="" alt="">no image</p>
      </div>
      <h2 *ngIf="item.title">{{item.title}}</h2>
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
      <p *ngIf="item.description">{{item.description}}</p>
      <p *ngIf="!item.description">no description</p>
      <p class="source" *ngIf="item.source.name">source: {{item.source.name}}</p>
      <p class="source" *ngIf="!item.source.name">no source</p>
    </section>`
})

export class MainComponent {
  @Input() newsList: NewsResponseProperties;
}
