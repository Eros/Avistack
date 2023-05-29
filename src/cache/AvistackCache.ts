const NodeCache = require("node-cache");
import { CacheKeys } from "../enums/CacheKeys";

export class AvistackCache {
    
    private readonly _cache = new NodeCache();

    public async set<T>(key: CacheKeys | string, value: T): Promise<void> {
        this._cache.set(key.toString(), value);
    }

    public async get<T>(key: CacheKeys | string): Promise<T | undefined> {
        return this._cache.get(key.toString());
    }
}