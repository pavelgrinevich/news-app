import { Component } from '@angular/core';

@Component({
  selector: 'main',
  template:
    `<section>
      <div class="title-img">
        <img src="https://www.bleepingcomputer.com/forums/public/style_images/master/meta_image.png" alt="">
      </div>
      <h2>Blogotitle of blogopost about blogoflowers</h2>
      <hr class="top-line">
      <p class="publication-date">22:58 Jan 01, 2014</p>
      <p class="publication-author">by E. Hyperraccoon</p>
      <div class="later-button">
        <button>detailed info</button>
        <button>add to read later</button>
      </div>
      <hr class="bottom-line">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>`
})

export class MainComponent { }
