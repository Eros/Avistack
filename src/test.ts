import { Avistack } from "./Avistack";
import { AvistackRequest } from "./util/AvistackRequest";

require('dotenv').config();

const avistack: Avistack = new Avistack(process.env.TEST_KEY);

async function testLiveFlights() {
    console.log(await avistack.liveFlights.getRawData());
}


async function testHistorical() {

}

testLiveFlights();

// testHistorical();
