import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { MainComponent }   from './main.component';
import { NewComponent }   from './new.component';
import { EditComponent }   from './edit.component';

import { Connection } from './connection'
import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, MainComponent, NewComponent, EditComponent ],
  bootstrap: [AppComponent],
  providers: [Connection]
})
export class AppModule { }

