import { Component, OnInit } from '@angular/core';
import { CovidStats } from '../covid-stats';
import { CovidStatsService } from '../covid-stats.service'

@Component({
  selector: 'app-covid-stats-list',
  templateUrl: './covid-stats-list.component.html',
  styleUrls: ['./covid-stats-list.component.css']
})
export class CovidStatsListComponent implements OnInit {

  covidStatsList: CovidStats[] = [];

  constructor(private covidStatsService: CovidStatsService) { }

  ngOnInit(): void {
    this.covidStatsService.getStats().subscribe(covidStatsResponse => this.covidStatsList = covidStatsResponse.data);
  }

}
