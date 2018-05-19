import { Component } from '@angular/core';

@Component({
  selector: 'body',
  template:
    `<router-outlet></router-outlet>`,
  styles: [` 
    :host {
      margin: 0;
      padding: 0;
    }
  `]
})

export class AppComponent {}
