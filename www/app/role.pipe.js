"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var role_service_1 = require('./role.service');
var _ = require('lodash');
var RoleNamePipe = (function () {
    function RoleNamePipe(roleService) {
        this.roleService = roleService;
        this.roles = this.roleService.getRole();
    }
    RoleNamePipe.prototype.transform = function (role) {
        var _role = parseInt(role);
        var idx = _.findIndex(this.roles, { code: _role });
        return idx >= 0 ? this.roles[idx].label : '';
    };
    RoleNamePipe = __decorate([
        core_1.Pipe({ name: 'roleName' }), 
        __metadata('design:paramtypes', [role_service_1.RoleService])
    ], RoleNamePipe);
    return RoleNamePipe;
}());
exports.RoleNamePipe = RoleNamePipe;
//# sourceMappingURL=role.pipe.js.map