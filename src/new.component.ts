import { Component, OnInit } from '@angular/core';
import { Connection } from './connection'

import { Router, ActivatedRoute } from '@angular/router'

let moment = require('moment')

@Component({
  selector: 'new-page',
  templateUrl: '../templates/new.component.html'
})
export class NewComponent implements OnInit {
  username: string
  fullname: string
  salary: number
  db: any

  constructor(private connection: Connection, private router: Router) {
    this.db = this.connection.getConnection()
   }

  ngOnInit() { }

  save() {
    let user = {
      _id: moment().format('x'),
      username: this.username,
      fullname: this.fullname,
      salary: this.salary
    }

    this.db.put(user);
    this.router.navigateByUrl('/main')
  }
}