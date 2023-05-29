import { RateLimitError } from 'discord.js';
import { Avistack } from '../Avistack';
import { AvistackCache } from '../cache/AvistackCache';
import { ApiKeyError } from '../errors/ApiKeyError';
import { FunctionAccessRestrictedError } from '../errors/FunctionAccessRestrictedError';
import { HttpsAccessRestrictedError } from '../errors/HttpsAccessRestrictedError';
import { InactiveUserError } from '../errors/InactiveUserError';
import { InvalidApiFunctionError } from '../errors/InvalidApiFunctionError';
import { MissingAccessKeyError } from '../errors/MissingAccessKeyError';
import { ResourceNotFoundError } from '../errors/ResourceNotFoundError';
import { SlowDownError } from '../errors/SlowDownError';
import { AvistackRequest } from '../util/AvistackRequest';
import { ApiRateLimitError } from '../errors/ApiRateLimitError';
import { InternalError } from '../errors/InternalError';

export class AvistackModule {

    private readonly _avistack: Avistack;
    private readonly _avistackCache: AvistackCache;

    constructor(avistack: Avistack) {
        this._avistack = avistack;
        this._avistackCache = new AvistackCache();
    }

    public async get(path: string): Promise<any> { 
        return new AvistackRequest(this._avistack).get(path);
    }

    public checkForError(data: any): void {
        if (data['error']) {
            switch (data['error']['code'].toLowerCase()) {
                case 'invalid_access_key': {
                    throw new ApiKeyError();
                }
                case 'missing_access_key': {
                    throw new MissingAccessKeyError();
                }
                case 'inactive_user': {
                    throw new InactiveUserError();
                }
                case 'https_access_restricted': {
                    throw new HttpsAccessRestrictedError();
                }
                case 'function_access_restricted': {
                    throw new FunctionAccessRestrictedError();
                }
                case 'invalid_api_function': {
                    throw new InvalidApiFunctionError();
                }
                case '404_not_found': {
                    throw new ResourceNotFoundError();
                }
                case 'usage_limit_reached': {
                    throw new SlowDownError();
                }
                case 'rate_limit_reached': {
                    throw new ApiRateLimitError();
                }
                case 'internal_error': {
                    throw new InternalError();
                }
            }
        }
    }

    get cache(): AvistackCache { 
        return this._avistackCache;
    }

    get avistack(): Avistack {
        return this._avistack;
    }

}