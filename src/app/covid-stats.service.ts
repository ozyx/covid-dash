import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidStats, CovidStatsResponse } from "./covid-stats";
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidStatsService {

  private covidBaseUrl = "https://covid2019-api.herokuapp.com/v2";

  private httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getStats(): Observable<CovidStatsResponse> {
    return this.http.get<CovidStatsResponse>(`${this.covidBaseUrl}/current`, this.httpOptions).pipe(
      tap(_ => console.log("fetch stats")));
  }
}
