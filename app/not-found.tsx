import Link from 'next/link';

import { Container } from '@/src/components/ui/container';

export default function NotFound() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container className='text-center'>
				<h1 className='text-[length:var(--step-3)] font-bold text-text-primary'>
					Pagina no encontrada
				</h1>
				<p className='mt-4 text-text-secondary'>
					La URL solicitada no existe o fue movida.
				</p>
				<Link
					href='/'
					className='mt-6 inline-flex min-h-11 items-center justify-center rounded-button border border-border-strong bg-brand-primary px-5 py-2 text-sm font-semibold text-brand-ink'
				>
					Volver al inicio
				</Link>
			</Container>
		</section>
	);
}
