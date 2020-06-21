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

class CountryInfo {
  // tslint:disable-next-line: variable-name
  _id: number;
  lat: number;
  long: number;
  flag: string;
  iso3: string;
  iso2: string;
}

class CovidTimeline {
  cases: object;
  deaths: object;
  recovered: object;
}

export class CountryHistory {
  country: string;
  province: string[];
  timeline: CovidTimeline;
}

export class CovidStats implements ICovidStats {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;

  constructor(
    country: string,
    cases: number,
    todayCases: number,
    deaths: number,
    todayDeaths: number,
    recovered: number,
    active: number,
    critical: number
  ) {
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
