export class ApiRateLimitError extends Error {
    constructor() {
        super('The given user has reached the rate limit');
    }

    get code(): number {
        return 429;
    }
}