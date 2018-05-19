import { Component } from '@angular/core';

@Component({
  selector: 'body',
  template:
    `<header>load...</header>
    <router-outlet></router-outlet>`,
  styles: [` 
    :host {
      margin: 0;
      padding: 0;
    }
  `]
})

export class AppComponent {}
