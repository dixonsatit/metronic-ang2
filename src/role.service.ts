import { Injectable } from '@angular/core';
import { RoleData } from './user'

@Injectable()
export class RoleService {
  roles: Array<RoleData>
  constructor() {
    this.roles = [
     {'code': 1, 'label': 'User'},
     {'code': 2, 'label': 'Admin'},
     {'code': 3, 'label': 'Super Admin'}
    ]
  }
  getRole() {
    return this.roles
  }

}