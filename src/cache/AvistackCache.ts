import NodeCache from "node-cache";
import { CacheKeys } from "../enums/CacheKeys";

export class AvistackCache {
    
    private readonly _cache: NodeCache = new NodeCache();

    public async set<T>(key: CacheKeys | string, value: T): Promise<void> {
        this._cache.set<T>(key.toString(), value);
    }

    public async get<T>(key: CacheKeys | string): Promise<T | undefined> {
        return this._cache.get<T>(key.toString());
    }
}