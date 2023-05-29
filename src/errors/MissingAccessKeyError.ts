export class MissingAccessKeyError extends Error {
    
    constructor() {
        super('No API access key was supplied.');
    }

    get code(): number {
        return 401;
    }
}