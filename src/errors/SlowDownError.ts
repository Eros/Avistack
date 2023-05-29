export class SlowDownError extends Error {
  
    constructor() {
       super('The given user has reached its monthly allowed request volume.');
    }

    get code(): number {
        return 429;
    }
}