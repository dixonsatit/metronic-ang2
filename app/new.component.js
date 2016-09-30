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
var connection_1 = require('./connection');
var router_1 = require('@angular/router');
var moment = require('moment');
var NewComponent = (function () {
    function NewComponent(connection, router) {
        this.connection = connection;
        this.router = router;
        this.db = this.connection.getConnection();
    }
    NewComponent.prototype.ngOnInit = function () { };
    NewComponent.prototype.save = function () {
        var user = {
            _id: moment().format('x'),
            username: this.username,
            fullname: this.fullname,
            salary: this.salary
        };
        this.db.put(user);
        this.router.navigateByUrl('/main');
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'new-page',
            templateUrl: '../templates/new.component.html'
        }), 
        __metadata('design:paramtypes', [connection_1.Connection, router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;
//# sourceMappingURL=new.component.js.map