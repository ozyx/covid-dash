import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidStats } from '../covid-stats';
import { CovidStatsService } from '../covid-stats.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid-stats-table',
  templateUrl: './covid-stats-table.component.html',
  styleUrls: ['./covid-stats-table.component.css']
})
export class CovidStatsTableComponent implements OnInit {

  covidStatsList: CovidStats[] = [];
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active'];
  dataSource: MatTableDataSource<CovidStats>;

  constructor(private covidStatsService: CovidStatsService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.covidStatsService.getAllCountriesStats().subscribe(
      covidStatsList => {
        this.dataSource = new MatTableDataSource(covidStatsList);
        this.dataSource.sort = this.sort;
      });
  }
}
