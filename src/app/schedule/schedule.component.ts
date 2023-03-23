import {Component, OnInit} from '@angular/core';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    {data: [0.078, 0.208, 0.455, 0.694, 0.854, 0.969, 0.995, 1, 1, 1, 1], label: 'Series A', borderDash: [20, 5]}
  ];
  public lineChartLabels: Label[] = ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1'];
  public lineChartOptions = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(0,0,0,0)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private dataService: DataService) {
    this.dataService.onClick.subscribe(cnt => {
      this.lineChartData.push(cnt[0]);
      this.lineChartColors.push(cnt[1]);
    });
  }

  ngOnInit() {
  }

}
