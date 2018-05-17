import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template:
    `<div class="logo">
      <h1>news app</h1>
    </div>
    <nav>
      <a class="active" href="">news list</a>
      <a href="">custom news</a>
      <a href="">read later</a>
    </nav>`
})

export class HeaderComponent { }
