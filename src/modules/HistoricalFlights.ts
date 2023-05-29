import { CacheKeys } from "../enums/CacheKeys";
import { FlightData } from "../types/FlightData";
import { AvistackModule } from "./AvistackModule";

export class HistoricalFlights extends AvistackModule {

    public async getOnDate(date: string): Promise<FlightData[]> {
        if (this.cache.get(CacheKeys.HistoricalFlightsData + '_' + date)) {
            return this.cache.get(CacheKeys.HistoricalFlightsData + '_' + date);
        }

        const responseData: any = this.getRawData(date);
    
        const allFlights: FlightData[] = [];

        if (Array.isArray(responseData['results'])) {
            responseData['results'].forEach(flight => {
                allFlights.push({
                    date: flight['flight_date'],
                    status: flight['status'],
                    departureAirport: flight['departure']['airport'],
                    departureTimezone: flight['departure']['timezone'],
                    departureIata: flight['departure']['airport'],
                    departureIcao: flight['departure']['icao'],
                    departureTerminal: flight['departure']['terminal'],
                    departureGate: flight['departure']['gate'],
                    delay: flight['departure']['delay'],
                    scheduledDeparture: flight['departure']['scheduled'],
                    estimedDeparture: flight['departure']['estimated'],
                    actualDeparture: flight['departure']['actual'],
                    departureActualRunway: flight['departure']['actual_runway'],
                    departureEstimatedRunway: flight['departure']['estimated_runway'],
                    arrivalAirport: flight['arrival']['airport'],
                    arrivalTimezone: flight['arrival']['timezone'],
                    arrivalIata: flight['arrival']['iata'],
                    arrivalIcao: flight['arrival']['icao'],
                    arrivalTerminal: flight['arrival']['terminal'],
                    arrivalGate: flight['arrival']['gate'],
                    arrivalBaggage: flight['arrival']['baggage'],
                    arrivalDelay: flight['arrival']['delay'],
                    scheduledArrival:  flight['arrival']['scheduled'],
                    estimedArrival: flight['arrival']['estimated'],
                    actualArrival: flight['arrival']['actual'],
                    arrivalEstimatedRunway: flight['arrival']['estimated_runway'],
                    arrivalActualRunway: flight['arrival']['actual_runway'],
                    airlineName: flight['airline']['name'],
                    airlineIata: flight['airline']['iata'],
                    airlineIcao: flight['airline']['icao'],
                    flightNumber: flight['flight']['number'],
                    flightIata: flight['flight']['iata'],
                    flightIcao: flight['flight']['icao'],
                    flightCodeshared: flight['flight']['codeshared'],
                    aircraftRegistration: flight['aircraft']['registration'],
                    aircraftIata: flight['aircraft']['iata'],
                    aircraftIcao: flight['aircraft']['icao'],
                    aircraftIcao24: flight['aircraft']['icao24'],
                    lastUpdated: flight['live']['updated'],
                    currentHeading: flight['live']['direction'],
                    currentLatitude: flight['live']['latitude'],
                    currentLongitude: flight['live']['longitude'],
                    currentHorizontalSpeed: flight['live']['speed_horizontal'],
                    currentVerticalSpeed: flight['live']['speed_vertical'],
                    isOnGround: flight['live']['is_ground'],
                    currentAltitude: flight['live']['altitude'],
                });
            });
        } else {
            throw new Error('DataError: results is not an array');
        }

        this.cache.set(CacheKeys.HistoricalFlightsData + '_' + date, allFlights);

        return allFlights;
    }

    public async getRawData(date: string): Promise<any> {

        if (this.cache.get(CacheKeys.HistorialFlightsRaw + '_' + date)) {
            return this.cache.get(CacheKeys.HistorialFlightsRaw + '_' + date);
        }

        const data: any = this.get('flights');

        this.checkForError(data);

        this.cache.set(CacheKeys.HistorialFlightsRaw + '_' + date, data);

        return data;

    }
}