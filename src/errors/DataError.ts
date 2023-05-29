export class DataError extends Error {
    
    constructor(message: string) {
        super(`An error occured with the data: ${message}`);
    }
}