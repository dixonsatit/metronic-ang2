import { Component, OnInit } from '@angular/core';
import { Connection } from './connection'

@Component({
  selector: 'my-app',
  templateUrl: '../templates/app.component.html'
})
export class AppComponent implements OnInit {
  db: any
  constructor(private connection: Connection) {
    this.db = this.connection.getConnection();
  }

  ngOnInit() {

  }  

 }
