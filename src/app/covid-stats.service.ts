import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidStats } from "./covid-stats";
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidStatsService {

  private covidBaseUrl = "https://disease.sh";

  private httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getStats(): Observable<CovidStats[]> {
    return this.http.get<CovidStats[]>(`${this.covidBaseUrl}/v2/countries`, this.httpOptions).pipe(
      tap(_ => console.log("fetch stats")));
  }
}
