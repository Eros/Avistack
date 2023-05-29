import { CacheKeys } from "../enums/CacheKeys";
import { AvistackModule } from "./AvistackModule";
import {AirlineRoutesData} from "../types/AirlineRoutesData";

export class AirlineRoutes extends AvistackModule {

    public getRoutes(): Promise<AirlineRoutesData[]> {
        if (this.cache.get(CacheKeys.AirlineRouteData)) {
            return this.cache.get(CacheKeys.AirlineRouteData);
        }

        const responseData: any = this.getRawData();

        const allRoutes: AirlineRoutesData[] = [];

        if (Array.isArray(responseData['results'])) {
            responseData['results'].forEach(route => {
                allRoutes.push({
                    departureAirport: route['departure']['airport'],
                    departureTimezone: route['departure']['timezone'],
                    departureIata: route['departure']['iata'],
                    departureIcao: route['departure']['icao'],
                    departureTerminal: route['departure']['terminal'],
                    departureTime:  route['departure']['time'],
                    arrivalAirport: route['departure']['airport'],
                    arrivalTimezone: route['departure']['timezone'],
                    arrivalIata: route['departure']['iata'],
                    arrivalIcao: route['departure']['icao'],
                    arrivalTerminal: route['departure']['terminal'],
                    arrivalTime:  route['departure']['time'],
                    airlineName: route['airline']['name'],
                    airlineCallsign: route['airline']['callsign'],
                    airlineIata: route['airline']['iata'],
                    airlineIcao: route['airline']['icao'],
                    flightNumber: route['flight']['number'],
                })
            });
        }
    }
    

    public async getRawData(): Promise<any> {
        if (this.cache.get(CacheKeys.AirlineRouteRaw)) {
            return this.cache.get(CacheKeys.AirlineRouteRaw);
        }

        const data: any = this.get('routes');

        this.checkForError(data);

        this.cache.set(CacheKeys.AirlineRouteRaw, data);

        return data;
    }

}