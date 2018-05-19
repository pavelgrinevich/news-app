import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list.component';
import { CustomNewsComponent } from './custom-news.component';
import { ReadLaterComponent } from './read-later.component';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';

const appRoutes: Routes =[
  { path: '', component: NewsListComponent },
  { path: 'custom-news', component: CustomNewsComponent },
  { path: 'read-later', component: ReadLaterComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: 
    [ 
      BrowserModule,
      FormsModule, 
      RouterModule.forRoot(appRoutes) 
    ],
  declarations: 
    [ 
      AppComponent,
      NewsListComponent,
      CustomNewsComponent,
      ReadLaterComponent,
      MainComponent, 
      AsideComponent, 
      HeaderComponent 
    ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
