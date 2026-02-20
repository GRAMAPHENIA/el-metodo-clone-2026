'use client';

import { usePathname } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';

import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import type { ContactApiError, ContactApiSuccess } from '@/src/types/api';

type FormState = {
	status: 'idle' | 'submitting' | 'success' | 'error';
	message: string;
};

export function ContactForm() {
	const pathname = usePathname();
	const [state, setState] = useState<FormState>({
		status: 'idle',
		message: '',
	});

	const startedAt = useMemo(() => Date.now(), []);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		setState({ status: 'submitting', message: '' });

		const payload = {
			name: String(formData.get('name') ?? ''),
			lastName: String(formData.get('lastName') ?? ''),
			email: String(formData.get('email') ?? ''),
			phone: String(formData.get('phone') ?? ''),
			message: String(formData.get('message') ?? ''),
			sourcePath: pathname || '/',
			honeypot: String(formData.get('website') ?? ''),
			formStartedAt: Number(formData.get('formStartedAt') ?? Date.now()),
		};

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const result = (await response.json()) as ContactApiSuccess | ContactApiError;

			if (!response.ok || !result.ok) {
				setState({
					status: 'error',
					message:
						'No pudimos enviar tu mensaje en este momento. Intenta nuevamente en unos minutos.',
				});
				return;
			}

			form.reset();
			setState({
				status: 'success',
				message: 'Mensaje enviado correctamente. Te contactaremos a la brevedad.',
			});
		} catch {
			setState({
				status: 'error',
				message: 'Ocurrió un error de red. Intenta nuevamente.',
			});
		}
	};

	return (
		<section
			id='contacto'
			className='section-spacing bg-surface-base'
		>
			<Container>
				<div className='mx-auto max-w-2xl surface-card p-6 sm:p-8'>
					<h2 className='text-center text-[length:var(--step-3)] font-bold text-text-primary'>
						Hablemos
					</h2>
					<p className='mt-3 text-center text-text-secondary'>
						Realiza tu consulta y te responderemos a la brevedad.
					</p>

					<form className='mt-8 space-y-4' onSubmit={onSubmit} noValidate>
						<div className='grid gap-4 sm:grid-cols-2'>
							<label className='block'>
								<span className='mb-1 block text-sm font-semibold text-text-primary'>
									Nombre
								</span>
								<input
									name='name'
									required
									className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
								/>
							</label>

							<label className='block'>
								<span className='mb-1 block text-sm font-semibold text-text-primary'>
									Apellido
								</span>
								<input
									name='lastName'
									className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
								/>
							</label>
						</div>

						<label className='block'>
							<span className='mb-1 block text-sm font-semibold text-text-primary'>
								Email
							</span>
							<input
								type='email'
								name='email'
								required
								className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
							/>
						</label>

						<label className='block'>
								<span className='mb-1 block text-sm font-semibold text-text-primary'>
									Teléfono
								</span>
							<input
								type='tel'
								name='phone'
								className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
							/>
						</label>

						<label className='block'>
							<span className='mb-1 block text-sm font-semibold text-text-primary'>
								Mensaje
							</span>
							<textarea
								name='message'
								required
								rows={5}
								className='w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
							/>
						</label>

						<input
							type='text'
							name='website'
							autoComplete='off'
							tabIndex={-1}
							className='hidden'
							aria-hidden='true'
						/>
						<input type='hidden' name='formStartedAt' value={startedAt} />

						<div className='flex flex-wrap items-center gap-4'>
							<Button type='submit' disabled={state.status === 'submitting'}>
								{state.status === 'submitting' ? 'Enviando...' : 'Enviar consulta'}
							</Button>
							<p
								aria-live='polite'
								className={`text-sm ${
									state.status === 'success'
										? 'text-feedback-success'
										: state.status === 'error'
										? 'text-feedback-error'
										: 'text-text-secondary'
								}`}
							>
								{state.message}
							</p>
						</div>
					</form>
				</div>
			</Container>
		</section>
	);
}
