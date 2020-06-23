import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CovidStatsService } from '../../covid-stats.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-covid-stats-chart',
  templateUrl: './covid-stats-chart.component.html',
  styleUrls: ['./covid-stats-chart.component.css'],
})
export class CovidStatsChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  country: string;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Loading...',
    },
    chart: {
      zoomType: 'x',
    },
    xAxis: {
      type: 'datetime',
    },
    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
  };
  updateFlag = false;
  oneToOneFlag = true;

  constructor(
    private route: ActivatedRoute,
    private covidStatsService: CovidStatsService
  ) {}

  ngOnInit(): void {
    const country = this.route.snapshot.paramMap.get('country');
    this.country = country;

    /// Get historical data by country and update the chart
    this.covidStatsService
      .getHistoricalStatsByCountry(country)
      .subscribe((countryHistory) => {
        this.updateData(
          countryHistory.timeline.cases,
          countryHistory.timeline.deaths,
          countryHistory.timeline.recovered
        );
      }, (err) => {
        this.chartOptions.title = { text: `${err}: ${country}`};
        this.updateFlag = true;
      });
  }

  /// Update chart data and trigger a visual update
  private updateData(cases: object, deaths: object, recovered: object): void {
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
        type: 'spline',
        marker: {
          radius: 3
        }
      },
      {
        name: 'Deaths',
        data: deathsSeries,
        type: 'spline',
        marker: {
          radius: 3
        }
      },
      {
        name: 'Recovered',
        data: recoveredSeries,
        type: 'spline',
        marker: {
          radius: 3
        }
      },
    ];
    this.updateFlag = true;
  }

  /// Put data in the proper format
  /// for displaying with Highcharts
  private prepareSeries(cases: object) {
    const series = [];
    for (const date in cases) {
      if (cases.hasOwnProperty(date)) {
        const [month, day, year] = date.split('/');
        const count = cases[date];

        series.push([
          Date.UTC(
            // Assume all data will happen post-2000, so add 2000 to get full year
            2000 + parseInt(year, 10),
            // Adjust month for zero-indexed month (thanks JavaScript)
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
