import { Component, OnInit } from '@angular/core';
import { Connection } from './connection'
import { UserData, UserDocument, ResultSet, BarData } from './user'

@Component({
  selector: 'chart-page',
  templateUrl: '../templates/chart.component.html'
})

export class ChartComponent implements OnInit {

  barDatasets = [{label: "# of Votes", data: []}]
  
  barLabels = [];

  barOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  
  pieChartType:string = 'pie';
  pieChartLabels:string[] = [];
  pieChartData:number[] = [];
  db: any;

  userDocument: Array<UserDocument>
  users: Array<UserData>
  resultSet: ResultSet
  
  constructor(private connection: Connection) { 
    this.db = this.connection.getConnection();
  }

  getSaraly() {
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
        // this.users = []
        let chartData: number[] = []
        let chartLabel: string[] = []

        documents.forEach(v => {
          // this.barDatasets.data.push(+v.doc.salary)
          // console.log(v.doc)
          this.pieChartLabels.push(v.doc.fullname)
          chartLabel.push(v.doc.fullname)
          chartData.push(+v.doc.salary)
          // this.barDatasets[0].data.push(+v.doc.salary)
        });
        this.barDatasets[0].data = chartData
        this.barLabels = chartLabel
        this.pieChartData = chartData

        console.log(this.barDatasets)
        console.log(this.barLabels)

      })
      .catch(err => {
        console.log(err)
      });
    
  }
  ngOnInit() { 
    this.getSaraly()
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}