export class HttpsAccessRestrictedError extends Error {

    constructor() {
        super('HTTPS access is not supported on the current subscription plan.');
    }

    get code(): number {
        return 403;
    }

}