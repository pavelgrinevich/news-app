import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';
import { AsideComponent } from './aside.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: 
      [ 
        AppComponent, 
        MainComponent, 
        AsideComponent, 
        HeaderComponent 
      ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
