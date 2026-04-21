interface RateEntry {
  count: number;
  resetAt: number;
}

const rateMap = new Map<string, RateEntry>();

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const GC_INTERVAL = 5 * 60 * 1000;
const MAX_MAP_SIZE = 10_000;

let lastGc = Date.now();

function gc() {
  const now = Date.now();
  if (now - lastGc < GC_INTERVAL) return;
  lastGc = now;
  for (const [key, entry] of rateMap) {
    if (now > entry.resetAt) rateMap.delete(key);
  }
}

export function rateLimit(
  identifier: string,
  limit = MAX_REQUESTS
): { ok: boolean; remaining: number } {
  gc();

  if (rateMap.size > MAX_MAP_SIZE) {
    rateMap.clear();
  }

  const now = Date.now();
  const entry = rateMap.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateMap.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { ok: false, remaining: 0 };
  }

  entry.count++;
  return { ok: true, remaining: limit - entry.count };
}
