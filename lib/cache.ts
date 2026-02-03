interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<unknown>>();
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

export function getCached<T>(key: string): T | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL) {
    return cached.data as T;
  }
  cache.delete(key);
  return null;
}

export function setCache<T>(key: string, data: T, ttl: number = DEFAULT_TTL): void {
  cache.set(key, { data, timestamp: Date.now() });

  // Auto-cleanup after TTL
  setTimeout(() => {
    const entry = cache.get(key);
    if (entry && Date.now() - entry.timestamp >= ttl) {
      cache.delete(key);
    }
  }, ttl);
}

export function clearCache(key?: string): void {
  if (key) {
    cache.delete(key);
  } else {
    cache.clear();
  }
}
