import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidStats, CountryHistory } from './covid-stats';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidStatsService {
  private covidBaseUrl = 'https://disease.sh';

  private cache = {};
  private all = 'allStats';

  private httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllCountriesStats(): Observable<CovidStats[]> {
    if (this.cache[this.all]) {
      return of(this.cache[this.all]);
    }

    return this.http
      .get<CovidStats[]>(`${this.covidBaseUrl}/v2/countries`, this.httpOptions)
      .pipe(tap((resolvedValue) => (this.cache[this.all] = resolvedValue))); // TODO: use logger, error handling
  }

  getHistoricalStatsByCountry(country: string): Observable<CountryHistory> {
    if (this.cache[country]) {
      return of(this.cache[country]);
    }

    return this.http
      .get<CountryHistory>(
        `${this.covidBaseUrl}/v2/historical/${country}?lastdays=all`,
        this.httpOptions
      )
      .pipe(tap((resolvedValue) => (this.cache[country] = resolvedValue))); // TODO: use logger, error handling
  }
}
