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
var router_1 = require('@angular/router');
var connection_1 = require('./connection');
var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
var MainComponent = (function () {
    function MainComponent(connection, router) {
        this.connection = connection;
        this.router = router;
        this.db = this.connection.getConnection();
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    MainComponent.prototype.getList = function () {
        var _this = this;
        this.users = [];
        this.db.allDocs({
            include_docs: true
        })
            .then(function (doc) {
            var _doc = doc;
            var total = _doc.total_rows;
            var documents = _doc.rows;
            // let userDocument = _do
            console.log(documents);
            _this.users = [];
            documents.forEach(function (v) {
                _this.users.push(v.doc);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MainComponent.prototype.doSearch = function (username) {
        // this.db.get(username)
        //   .then(doc => {
        //     this.users = doc
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   });
        var _this = this;
        this.users = [];
        this.db.find({
            selector: { username: username }
        })
            .then(function (result) {
            _this.users = result.docs;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MainComponent.prototype.edit = function (id) {
        this.router.navigate(['/edit', id]);
    };
    MainComponent.prototype.remove = function (id) {
        var _this = this;
        // console.log(id)
        if (confirm('Are you sure?')) {
            this.db.get(id)
                .then(function (doc) {
                _this.db.remove(doc);
                _this.getList();
            });
        }
    };
    MainComponent.prototype.search = function () {
        if (this.query) {
            this.doSearch(this.query);
        }
        else {
            this.getList();
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-page',
            templateUrl: '../templates/main.component.html'
        }), 
        __metadata('design:paramtypes', [connection_1.Connection, router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map