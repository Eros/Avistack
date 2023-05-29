export interface AirlineRoutesData {
    departureAirport: string,
    departureTimezone: string,
    departureIata: string,
    departureIcao: string,
    departureTerminal: string | undefined,
    departureTime: string | undefined,
    arrivalAirport: string,
    arrivalTimezone: string,
    arrivalIata: string,
    arrivalIcao: string,
    arrivalTerminal: string | undefined,
    arrivalTime: string | undefined,
    airlineName: string,
    airlineCallsign: string,
    airlineIata: string,
    airlineIcao: string,
    flightNumber: string
}