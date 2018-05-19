import { Component, Input } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent {
  @Input() newsList: any;

  addToReadLater(item: any) {
    item.readLater = true;
    item.visibility = false;
    const news = JSON.stringify(item);

    let readLater = JSON.parse(window.localStorage.getItem('readLater'));
    if (!readLater) readLater = {};
    readLater[news] = news;
    window.localStorage.setItem('readLater', JSON.stringify(readLater));
  }

  removeFromReadLater(item: any) {
    const news = JSON.stringify(item);

    const readLater = JSON.parse(window.localStorage.getItem('readLater'));
    delete readLater[news];
    window.localStorage.setItem('readLater', JSON.stringify(readLater));
    item.readLater = false;
  }
}
