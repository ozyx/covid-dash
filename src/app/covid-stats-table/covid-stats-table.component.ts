import { Component, OnInit } from '@angular/core';
import { CovidStats } from '../covid-stats';
import { CovidStatsService } from '../covid-stats.service'

@Component({
  selector: 'app-covid-stats-table',
  templateUrl: './covid-stats-table.component.html',
  styleUrls: ['./covid-stats-table.component.css']
})
export class CovidStatsTableComponent implements OnInit {

  covidStatsList: CovidStats[] = [];
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active'];

  constructor(private covidStatsService: CovidStatsService) { }

  ngOnInit(): void {
    this.covidStatsService.getStats().subscribe(covidStatsList => this.covidStatsList = covidStatsList);
  }

}
