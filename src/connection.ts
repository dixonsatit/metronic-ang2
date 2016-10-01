import { Injectable } from '@angular/core';

let PouchDB = require('pouchdb')

@Injectable()
export class Connection { 
  db: any
  constructor() {
    this.db = new PouchDB('users');
  }

  getConnection() {
    return this.db
  }
}