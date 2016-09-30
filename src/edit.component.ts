import { Component, OnInit } from '@angular/core';
import { Connection } from './connection'

import { Router, ActivatedRoute, Params } from '@angular/router'

let moment = require('moment')

@Component({
  selector: 'new-page',
  templateUrl: '../templates/edit.component.html'
})
export class EditComponent implements OnInit {
  username: string
  fullname: string
  db: any
  id: any
  constructor(private connection: Connection, private router: Router, private activatedRoute: ActivatedRoute) {
    this.db = this.connection.getConnection()
    this.activatedRoute.params.forEach((param: Params) => {
      this.id = param['id']
    })
   }

  ngOnInit() { 
    this.db.get(this.id)
      .then(doc => {
        this.username = doc.username;
        this.fullname = doc.fullname;
      });
  }

  save() {
    this.db.get(this.id)
      .then(doc => {
        return this.db.put({
          _id: this.id,
          _rev: doc._rev,
          fullname: this.fullname,
          username: this.username
        })
      })
      .then(res => {
        this.router.navigateByUrl('/main')
      })
      .catch(err => {
        console.log(err)
      });
  }
}