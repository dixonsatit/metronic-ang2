import { Pipe, PipeTransform } from '@angular/core';
import { RoleService } from './role.service'
import { RoleData } from './user'

let _ = require('lodash')

@Pipe({name: 'roleName'})
export class RoleNamePipe implements PipeTransform {
  roles: Array<RoleData>;
  constructor(private roleService: RoleService) {
    this.roles = this.roleService.getRole()
  }
  transform(role: string): string {
    let _role: number = parseInt(role);
    let idx = _.findIndex(this.roles, { code: _role });
    return idx >= 0 ? this.roles[idx].label : ''
  }
}