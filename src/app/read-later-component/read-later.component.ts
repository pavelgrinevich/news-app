import { Component } from '@angular/core';
  
@Component({
  selector: 'read-later-app',
  templateUrl: './read-news.component.html',
  styleUrls: ['./read-news.component.css'],
})

export class ReadLaterComponent {
  readLaterNews: object[] = [];

  constructor() {
    this.getReadLaterNews();
  }

  getReadLaterNews() {
    const readLater = JSON.parse(window.localStorage.getItem('readLater'));
    for (const key in readLater) {
      if (readLater.hasOwnProperty(key)) {
        const elem = JSON.parse(readLater[key]);
        elem.toggle = () => {
          elem.visibility = !elem.visibility;
        }
        this.readLaterNews.push(elem);
      }
    }
  }

  removeFromReadLater(item: any) {
    const news = JSON.stringify(item);

    const readLater = JSON.parse(window.localStorage.getItem('readLater'));
    delete readLater[news];
    window.localStorage.setItem('readLater', JSON.stringify(readLater));
    
    this.readLaterNews = [];
    this.getReadLaterNews();
  }
}