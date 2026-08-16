const buckets = new Map<string, { count: number; reset: number }>();

export function rateLimit(
  request: Request,
  key: string,
  limit: number,
  windowMs = 10 * 60 * 1000,
) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local";
  const id = `${key}:${ip}`;
  const now = Date.now();
  const current = buckets.get(id);
  if (!current || current.reset < now) {
    buckets.set(id, { count: 1, reset: now + windowMs });
    return { ok: true };
  }
  if (current.count >= limit) return { ok: false };
  current.count += 1;
  return { ok: true };
}
