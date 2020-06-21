import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidStatsTableComponent } from './covid-stats-table/covid-stats-table.component';
import { CovidStatsChartComponent } from './covid-stats-chart/covid-stats-chart.component';

const routes: Routes = [
  {
    path: '',
    component: CovidStatsTableComponent,
  },
  {
    path: 'chart',
    redirectTo: ''
  },
  {
    path: 'chart/:country',
    component: CovidStatsChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
