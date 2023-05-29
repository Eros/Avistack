export class InternalError extends Error {
    constructor() {
        super('An internal error occured. This is not your fault, probably.');
    }

    get code(): number {
        return 500;
    }
}