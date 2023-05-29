export class InvalidApiFunctionError extends Error {
  
    constructor() {
        super('The given API endpoint does not exist.');
    }

    get code(): number {
        return 404;
    }
}