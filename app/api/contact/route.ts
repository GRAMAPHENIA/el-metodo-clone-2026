import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { contactSchema } from '@/src/features/contact/contact-schema';
import { isRateLimited } from '@/src/features/contact/rate-limit';
import { sendContactEmail } from '@/src/features/contact/send-contact-email';
import { getRateLimitConfig } from '@/src/lib/utils/env';
import type { ContactApiError, ContactApiResponse } from '@/src/types/api';

function errorResponse(
	code: ContactApiError['code'],
	message: string,
	status: number
) {
	const body: ContactApiResponse = {
		ok: false,
		code,
		message,
	};

	return NextResponse.json(body, { status });
}

async function getClientIp() {
	const h = await headers();
	const forwardedFor = h.get('x-forwarded-for');
	if (forwardedFor) return forwardedFor.split(',')[0].trim();
	return h.get('x-real-ip') ?? 'unknown';
}

export async function POST(request: Request) {
	try {
		const json = await request.json();
		const parsed = contactSchema.safeParse(json);

		if (!parsed.success) {
			return errorResponse(
				'VALIDATION_ERROR',
				'Los datos del formulario son invalidos.',
				400
			);
		}

		const payload = parsed.data;

		if (payload.honeypot && payload.honeypot.trim() !== '') {
			return errorResponse('SPAM_DETECTED', 'Solicitud invalida.', 400);
		}

		const elapsed = Date.now() - payload.formStartedAt;
		if (elapsed < 2500) {
			return errorResponse('SPAM_DETECTED', 'Solicitud invalida.', 400);
		}

		const ip = await getClientIp();
		const rateConfig = getRateLimitConfig();

		if (isRateLimited(ip, rateConfig.windowMs, rateConfig.max)) {
			return errorResponse(
				'RATE_LIMITED',
				'Demasiados intentos. Intenta nuevamente en breve.',
				429
			);
		}

		const emailResult = await sendContactEmail(payload);
		if (!emailResult.ok) {
			const status =
				emailResult.code === 'CONFIGURATION_ERROR'
					? 500
					: emailResult.code === 'DELIVERY_ERROR'
					? 502
					: 500;

			return errorResponse(emailResult.code, emailResult.message, status);
		}

		return NextResponse.json(
			{
				ok: true,
				id: emailResult.id,
			},
			{ status: 200 }
		);
	} catch {
		return errorResponse('UNKNOWN_ERROR', 'Error inesperado del servidor.', 500);
	}
}
