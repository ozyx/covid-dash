import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidStatsListComponent } from './covid-stats-list/covid-stats-list.component';


const routes: Routes = [
  {
    path: '',
    component: CovidStatsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
