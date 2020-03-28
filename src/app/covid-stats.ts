interface ICovidStats {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
}

export class CovidStats implements ICovidStats {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;

  constructor(country: string, cases: number, todayCases: number,
              deaths: number, todayDeaths: number, recovered: number, active: number, critical: number) {
    this.country = country;
    this.cases = cases;
    this.todayCases = todayCases;
    this.deaths = deaths;
    this.todayDeaths = todayDeaths;
    this.recovered = recovered;
    this.active = active;
    this.critical = critical;
  }
}
