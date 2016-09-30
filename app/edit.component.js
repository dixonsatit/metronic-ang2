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
var EditComponent = (function () {
    function EditComponent(connection, router, activatedRoute) {
        var _this = this;
        this.connection = connection;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.db = this.connection.getConnection();
        this.activatedRoute.params.forEach(function (param) {
            _this.id = param['id'];
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.get(this.id)
            .then(function (doc) {
            _this.username = doc.username;
            _this.fullname = doc.fullname;
            _this.salary = doc.salary;
        });
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        this.db.get(this.id)
            .then(function (doc) {
            return _this.db.put({
                _id: _this.id,
                _rev: doc._rev,
                fullname: _this.fullname,
                username: _this.username,
                salary: _this.salary
            });
        })
            .then(function (res) {
            _this.router.navigateByUrl('/main');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'new-page',
            templateUrl: '../templates/edit.component.html'
        }), 
        __metadata('design:paramtypes', [connection_1.Connection, router_1.Router, router_1.ActivatedRoute])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map