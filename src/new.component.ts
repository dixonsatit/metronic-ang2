import { Component, OnInit } from '@angular/core';
import { Connection } from './connection'
import { RoleService } from './role.service'
import { RoleData } from './user'
import { Router, ActivatedRoute } from '@angular/router'

let moment = require('moment')

@Component({
  selector: 'new-page',
  templateUrl: '../templates/new.component.html'
})
export class NewComponent implements OnInit {
  username: string;
  fullname: string;
  salary: number;
  role: number;
  roleItems: Array<RoleData>
  db: any

  constructor(private connection: Connection, private roleService: RoleService, private router: Router) {
    this.db = this.connection.getConnection()
   }

  ngOnInit() { 
    this.roleItems = this.roleService.getRole();
    console.log(this.roleItems[0].label);
  }

  save() {
    let user = {
      _id: moment().format('x'),
      username: this.username,
      fullname: this.fullname,
      salary: this.salary,
      role: this.role
    }

    this.db.put(user);
    this.router.navigateByUrl('/main')
  }
}