import { Injectable } from '@angular/core';

@Injectable()
export class RoleService {

  getRole() {
    return [
     {'code': 1, 'label': 'User'},
     {'code': 2, 'label': 'Admin'},
     {'code': 3, 'label': 'Super Admin'}
    ];
  }

}