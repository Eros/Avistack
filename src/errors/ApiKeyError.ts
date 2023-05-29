
export class ApiKeyError extends Error {

    constructor() {
        super('API key provided is either null or undefined.');
    }

    get code(): number {
        return 401;
    }
}