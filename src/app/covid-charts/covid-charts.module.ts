import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidStatsChartComponent } from './covid-stats-chart/covid-stats-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    CovidStatsChartComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
  ]
})
export class CovidChartsModule { }
