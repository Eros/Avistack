import { Avistack } from "./Avistack";
import { AvistackRequest } from "./util/AvistackRequest";

require('dotenv').config();

const avistack: Avistack = new Avistack(process.env.TEST_KEY);

async function testRequest() {
    new AvistackRequest(avistack).get('flights');
}

async function testHistorical() {
    new AvistackRequest(avistack).get('flights', 'flight_date', '2019-12-11');
}

testHistorical();

// testRequest();