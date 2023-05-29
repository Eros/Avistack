export class InactiveUserError extends Error {
 
    constructor() {
        super('The provided user account is inactive.');
    }

    get code(): number {
        return 401;
    }
}