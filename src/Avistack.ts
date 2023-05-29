import { ApiKeyError } from "./errors/ApiKeyError";
import { AirlineRoutes } from "./modules/AirlineRoutes";
import { HistoricalFlights } from "./modules/HistoricalFlights";
import { LiveFlights } from "./modules/LiveFlights";

export class Avistack {

    private readonly _apiKey: string;
    
    private readonly _historicalFlights: HistoricalFlights;
    private readonly _liveFlights: LiveFlights;
    private readonly _airlineRoutes: AirlineRoutes;

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new ApiKeyError();
        }
        this._apiKey = apiKey;
        this._historicalFlights = new HistoricalFlights(this);
        this._liveFlights = new LiveFlights(this);
        this._airlineRoutes = new AirlineRoutes(this);
    }

    get apiKey(): string {
        return this._apiKey;
    }

    get historicalFlights(): HistoricalFlights {
        return this._historicalFlights;
    }

    get liveFlights(): LiveFlights {
        return this._liveFlights;
    }

    get airlineRoutes(): AirlineRoutes {
        return this._airlineRoutes;;
    }
}