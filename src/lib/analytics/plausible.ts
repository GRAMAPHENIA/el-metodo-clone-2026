import { getPlausibleDomain } from '@/src/lib/utils/env';

export function getPlausibleConfig() {
	const domain = getPlausibleDomain();
	if (!domain) return null;

	return {
		domain,
		src: 'https://plausible.io/js/script.js',
	};
}
