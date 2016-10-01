"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var connection_1 = require('./connection');
var ChartComponent = (function () {
    function ChartComponent(connection) {
        this.connection = connection;
        this.barDatasets = [{
            label: "# of Votes",
            data: []
        }];
        this.totalSalary = 0;
        this.totalEmp = 0;
        this.barLabels = [];
        this.barOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        this.pieChartType = 'pie';
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.db = this.connection.getConnection();
    }
    ChartComponent.prototype.getSaraly = function () {
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
                // this.users = []
                var chartData = [];
                var chartLabel = [];
                _this.totalEmp = total;
                documents.forEach(function (v) {
                    // this.barDatasets.data.push(+v.doc.salary)
                    // console.log(v.doc)
                    _this.pieChartLabels.push(v.doc.fullname);
                    chartLabel.push(v.doc.fullname);
                    chartData.push(+v.doc.salary);
                    _this.totalSalary += +v.doc.salary;
                    // this.barDatasets[0].data.push(+v.doc.salary)
                });
                _this.barDatasets[0].data = chartData;
                _this.barLabels = chartLabel;
                _this.pieChartData = chartData;
                console.log(_this.barDatasets);
                console.log(_this.barLabels);
            })
            .catch(function (err) {
                console.log(err);
            });
    };
    ChartComponent.prototype.ngOnInit = function () {
        this.getSaraly();
    };
    // events
    ChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'chart-page',
            templateUrl: 'metronic-ang2/www/templates/chart.component.html'
        }),
        __metadata('design:paramtypes', [connection_1.Connection])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map