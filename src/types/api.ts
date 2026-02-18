export type ContactRequest = {
	name: string;
	lastName?: string;
	email: string;
	phone?: string;
	message: string;
	sourcePath: string;
	honeypot?: string;
	formStartedAt: number;
};

export type ContactApiSuccess = {
	ok: true;
	id: string;
};

export type ContactApiError = {
	ok: false;
	code:
		| 'VALIDATION_ERROR'
		| 'RATE_LIMITED'
		| 'SPAM_DETECTED'
		| 'CONFIGURATION_ERROR'
		| 'DELIVERY_ERROR'
		| 'UNKNOWN_ERROR';
	message: string;
};

export type ContactApiResponse = ContactApiSuccess | ContactApiError;
