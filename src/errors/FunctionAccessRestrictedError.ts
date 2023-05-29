export class FunctionAccessRestrictedError extends Error {

    constructor() {
        super('The given API endpoint is not supported on the current subscription plan.');
    }

    get code(): number {
        return 403;
    }

}