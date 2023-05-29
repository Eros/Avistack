import { ApiKeyError } from "./errors/ApiKeyError";

export class Avistack {

    private readonly _apiKey: string;

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new ApiKeyError();
        }
        this._apiKey = apiKey;
    }

    get apiKey(): string {
        return this._apiKey;
    }
}