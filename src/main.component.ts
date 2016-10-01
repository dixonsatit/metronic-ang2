import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Connection } from './connection'
import { RoleService } from './role.service'
import { 
  UserData, 
  UserDocument, 
  ResultSet, 
  RoleData 
} from './user'

let PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'));

@Component({
  selector: 'main-page',
  templateUrl: '../templates/main.component.html'
})
export class MainComponent implements OnInit {
  db: any
  userDocument: Array<UserDocument>
  users: Array<UserData>
  roleData: Array<RoleData>
  resultSet: ResultSet
  query: string

  constructor(private connection: Connection,  private roleService: RoleService, private router: Router) {
    this.db = this.connection.getConnection()
   }

  ngOnInit() {
    this.getList()
    this.roleData = this.roleService.getRole()
  }

  getRoleName(roleCode) {
    this.roleData.forEach(v => {
      if (v.code == +roleCode) {
        console.log(v)
        return v.label
      }
    })
  }
  
  getList() {
    this.users = []
    this.db.allDocs({
      include_docs: true
    })
      .then(doc => {
        let _doc = <ResultSet>doc
        let total = _doc.total_rows
        let documents = <Array<UserDocument>>_doc.rows
        // let userDocument = _do
        console.log(documents)
        this.users = []

        documents.forEach(v => {
          this.users.push(v.doc);
        });
      })
      .catch(err => {
        console.log(err)
      });
    
  }

  doSearch(username) {

    this.users = []

    this.db.find({
        selector: { username: username }
      })
        .then(result => {
          this.users = result.docs;
        })
        .catch(err => {
          console.log(err)
        });
  }

  edit(id: any) {
    this.router.navigate(['/edit', id])
  }

  remove(id: any) {
    // console.log(id)
    if (confirm('Are you sure?')) {
      this.db.get(id)
      .then(doc => {
        this.db.remove(doc)
        this.getList()
      });
    }
  }

  search() {
    if (this.query) {
      this.doSearch(this.query);
    } else {
      this.getList()
    }
  }
}