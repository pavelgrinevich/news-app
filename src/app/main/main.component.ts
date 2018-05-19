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
    console.log(item);
  }

  removeFromReadLater(item: any) {
    item.readLater = false;
  }
}
