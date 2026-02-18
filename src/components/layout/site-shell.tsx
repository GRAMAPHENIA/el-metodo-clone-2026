import type { ReactNode } from 'react';

import { SiteFooter } from '@/src/components/layout/site-footer';
import { SiteHeader } from '@/src/components/layout/site-header';

type SiteShellProps = {
	children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
	return (
		<>
			<a
				href='#contenido-principal'
				className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-button focus:bg-brand-accent focus:px-4 focus:py-2 focus:text-text-inverted'
			>
				Saltar al contenido principal
			</a>
			<SiteHeader />
			<main id='contenido-principal'>{children}</main>
			<SiteFooter />
		</>
	);
}
