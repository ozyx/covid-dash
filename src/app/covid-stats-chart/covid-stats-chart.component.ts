import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CovidStatsService } from '../covid-stats.service';
import { CountryHistory } from '../covid-stats';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-covid-stats-chart',
  templateUrl: './covid-stats-chart.component.html',
  styleUrls: ['./covid-stats-chart.component.css'],
})
export class CovidStatsChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  country: string;
  chartOptions: Highcharts.Options = {
    chart: {
      zoomType: 'x',
    },
    xAxis: {
      type: 'datetime',
    },
    series: [
      {
        data: [1, 2, 3],
        type: 'spline',
      },
      {
        data: [4, 5, 6],
        type: 'spline',
      },
      {
        data: [7, 8, 9],
        type: 'spline',
      },
    ],
    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
  };
  updateFlag = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private covidStatsService: CovidStatsService
  ) {}

  ngOnInit(): void {
    const country = this.route.snapshot.paramMap.get('country');
    this.country = country;
    this.covidStatsService
      .getHistoricalStatsByCountry(country)
      .subscribe((countryHistory) => {
        this.updateData(
          countryHistory.timeline.cases,
          countryHistory.timeline.deaths,
          countryHistory.timeline.recovered
        );
        console.log(this.chartOptions.series);
        this.updateFlag = true;
      });
  }

  private updateData(cases, deaths, recovered): void {
    const casesSeries = this.prepareSeries(cases);
    const deathsSeries = this.prepareSeries(deaths);
    const recoveredSeries = this.prepareSeries(recovered);

    this.chartOptions.title = {
      text: `Historical Data for ${this.country}`,
    };
    this.chartOptions.series = [
      {
        name: 'Cases',
        data: casesSeries,
        type: 'line',
      },
      {
        name: 'Deaths',
        data: deathsSeries,
        type: 'line',
      },
      {
        name: 'Recovered',
        data: recoveredSeries,
        type: 'line',
      },
    ];
    this.updateFlag = true;
    // this.chart.hideLoading();
  }

  private prepareSeries(cases: any) {
    const series = [];
    for (const date in cases) {
      if (cases.hasOwnProperty(date)) {
        const [month, day, year] = date.split('/');

        const count = cases[date];
        series.push([
          Date.UTC(
            2000 + parseInt(year, 10),
            parseInt(month, 10) - 1,
            parseInt(day, 10)
          ),
          count,
        ]);
      }
    }
    return series;
  }
}
