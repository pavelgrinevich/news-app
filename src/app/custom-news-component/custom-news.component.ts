import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
  
@Component({
  selector: 'custom-news-app',
  templateUrl: './custom-news.component.html',
  styleUrls: ['./custom-news.component.css'],
})

export class CustomNewsComponent {
  customNewsArray: object[];
  customNews: any = {
    title: '', 
    description: '',
  };
  checkInput: boolean;
  checkTextarea: boolean;

  constructor() {
    this.getCustomNews();
  }

  checkForFields() {
    this.checkInput = false;
    this.checkTextarea = false;

    switch (true) {
      case this.customNews.title === '' && this.customNews.description === '':
        this.checkInput = true;
        this.checkTextarea = true;
        return false;
      case this.customNews.title === '':
        this.checkInput = true;
        return false;
      case this.customNews.description === '':
        this.checkTextarea = true;
        return false;
    }

    return true;
  }

  getCustomNews() {
    this.customNewsArray = [];

    const customNewsStorage = JSON.parse(window.localStorage.getItem('customNews'));
    for (const key in customNewsStorage) {
      if (customNewsStorage.hasOwnProperty(key)) {
        const elem = JSON.parse(customNewsStorage[key]);
        this.customNewsArray.push(elem);
      }
    }
  }

  addNews() {
    if (!this.checkForFields()) return;

    this.customNews.date = new Date();

    const news = JSON.stringify(this.customNews);

    let customNewsStorage = JSON.parse(window.localStorage.getItem('customNews'));
    if (!customNewsStorage) customNewsStorage = {};
    customNewsStorage[news] = news;
    window.localStorage.setItem('customNews', JSON.stringify(customNewsStorage));

    this.getCustomNews();
  }

  remove(item: any) {
    const news = JSON.stringify(item);

    const customNewsStorage = JSON.parse(window.localStorage.getItem('customNews'));
    delete customNewsStorage[news];
    window.localStorage.setItem('customNews', JSON.stringify(customNewsStorage));
    
    this.getCustomNews();
  }
}
