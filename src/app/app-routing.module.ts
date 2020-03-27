import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidStatsTableComponent } from './covid-stats-table/covid-stats-table.component';


const routes: Routes = [
  {
    path: '',
    component: CovidStatsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
