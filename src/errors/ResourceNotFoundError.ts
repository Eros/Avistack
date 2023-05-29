export class ResourceNotFoundError extends Error {
    
    constructor() {
        super('Resource not found.');
    }

    get code(): number {
        return 404;
    }
}