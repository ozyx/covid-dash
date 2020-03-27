interface ICovidStats {
    location: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    active: number;
}

export class CovidStats implements ICovidStats {
    location: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    active: number;

    constructor(location: string, confirmed: number, deaths: number, recovered: number, active: number) {
        this.location = location;
        this.confirmed = confirmed;
        this.deaths = deaths;
        this.recovered = recovered;
        this.active = active;
    }
}

export class CovidStatsResponse {
    data: CovidStats[];
}
