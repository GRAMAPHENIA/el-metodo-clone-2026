import { Resend } from 'resend';

import type { ContactSchema } from '@/src/features/contact/contact-schema';
import { getContactEmailConfig } from '@/src/lib/utils/env';
import type { ContactApiError } from '@/src/types/api';

type SendEmailResult =
	| {
			ok: true;
			id: string;
	  }
	| {
			ok: false;
			code: ContactApiError['code'];
			message: string;
	  };

export async function sendContactEmail(
	payload: ContactSchema
): Promise<SendEmailResult> {
	const config = getContactEmailConfig();

	if (!config.resendApiKey || !config.toEmail || !config.fromEmail) {
		return {
			ok: false as const,
			code: 'CONFIGURATION_ERROR' as const,
			message:
				'Configuración de email incompleta. Define RESEND_API_KEY, CONTACT_TO_EMAIL y CONTACT_FROM_EMAIL.',
		};
	}

	const resend = new Resend(config.resendApiKey);

	try {
		const response = await resend.emails.send({
			from: config.fromEmail,
			to: config.toEmail,
			replyTo: payload.email,
			subject: `[Contacto Web] ${payload.name} - ${payload.sourcePath}`,
			text: [
				`Nombre: ${payload.name}`,
				`Apellido: ${payload.lastName ?? '-'}`,
				`Email: ${payload.email}`,
				`Teléfono: ${payload.phone ?? '-'}`,
				`Ruta: ${payload.sourcePath}`,
				'',
				'Mensaje:',
				payload.message,
			].join('\n'),
		});

		if (response.error) {
			return {
				ok: false as const,
				code: 'DELIVERY_ERROR' as const,
				message: response.error.message ?? 'No se pudo enviar el correo.',
			};
		}

		return {
			ok: true as const,
			id: response.data?.id ?? crypto.randomUUID(),
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : 'Error desconocido al enviar email.';

		return {
			ok: false as const,
			code: 'DELIVERY_ERROR' as const,
			message,
		};
	}
}
