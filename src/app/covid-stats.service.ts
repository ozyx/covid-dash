import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidStats, CountryHistory } from './covid-stats';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidStatsService {
  private covidBaseUrl = 'https://disease.sh';

  private httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllCountriesStats(): Observable<CovidStats[]> {
    return this.http
      .get<CovidStats[]>(`${this.covidBaseUrl}/v2/countries`, this.httpOptions)
      .pipe(tap((_) => console.log('fetch stats'))); // TODO: use logger, error handling
  }

  getHistoricalStatsByCountry(country: string): Observable<CountryHistory> {
    return this.http
      .get<CountryHistory>(
        `${this.covidBaseUrl}/v2/historical/${country}?lastdays=90`,
        this.httpOptions
      )
      .pipe(tap((_) => console.log('get stats by country'))); // TODO: use logger, error handling
  }
}
