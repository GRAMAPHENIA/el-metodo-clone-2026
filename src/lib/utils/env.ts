function getEnv(name: string) {
	return process.env[name]?.trim();
}

export function getSiteUrl() {
	return getEnv('NEXT_PUBLIC_SITE_URL') ?? 'https://elmetodoadulma.com';
}

export function getContactEmailConfig() {
	return {
		resendApiKey: getEnv('RESEND_API_KEY'),
		toEmail: getEnv('CONTACT_TO_EMAIL'),
		fromEmail: getEnv('CONTACT_FROM_EMAIL'),
	};
}

export function getRateLimitConfig() {
	const windowMs = Number(getEnv('CONTACT_RATE_LIMIT_WINDOW_MS') ?? '60000');
	const max = Number(getEnv('CONTACT_RATE_LIMIT_MAX') ?? '5');

	return {
		windowMs: Number.isFinite(windowMs) ? windowMs : 60000,
		max: Number.isFinite(max) ? max : 5,
	};
}

export function getPlausibleDomain() {
	return getEnv('PLAUSIBLE_DOMAIN');
}
