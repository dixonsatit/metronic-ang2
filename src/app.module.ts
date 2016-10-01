import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent }   from './app.component';
import { MainComponent }   from './main.component';
import { NewComponent }   from './new.component';
import { EditComponent }   from './edit.component';
import { ChartComponent }   from './chart.component';

import { RoleService } from './role.service';
import { Connection } from './connection';
import { routing } from './app.routing';

import { RoleNamePipe } from './role.pipe'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, ChartsModule ],
  declarations: [ AppComponent, MainComponent, NewComponent, EditComponent, ChartComponent, RoleNamePipe ],
  bootstrap: [AppComponent],
  providers: [Connection, RoleService]
})
export class AppModule { }

