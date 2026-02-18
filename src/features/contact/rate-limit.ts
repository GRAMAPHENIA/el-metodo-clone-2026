type Hit = {
	count: number;
	resetAt: number;
};

const hits = new Map<string, Hit>();

export function isRateLimited(
	key: string,
	windowMs: number,
	maxRequests: number
): boolean {
	const now = Date.now();
	const current = hits.get(key);

	if (!current || current.resetAt <= now) {
		hits.set(key, {
			count: 1,
			resetAt: now + windowMs,
		});
		return false;
	}

	current.count += 1;
	if (current.count > maxRequests) return true;

	hits.set(key, current);
	return false;
}
