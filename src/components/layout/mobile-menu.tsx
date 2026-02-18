'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';

import { Modal } from '@/src/components/ui/modal';
import type { NavItem } from '@/src/types/content';

type MobileMenuProps = {
	items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				type='button'
				onClick={() => setOpen(true)}
				aria-label='Abrir menu principal'
				className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-border-subtle bg-surface-base text-brand-ink lg:hidden'
			>
				<BsList className='text-2xl' />
			</button>

			<Modal isOpen={open} onClose={() => setOpen(false)} title='Menu principal'>
				<nav aria-label='Navegacion movil'>
					<ul className='space-y-3'>
						{items.map(item => {
							const active = pathname === item.href;
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										onClick={() => setOpen(false)}
										className={`block rounded-button px-4 py-3 text-base font-semibold transition ${
											active
												? 'bg-brand-accent text-text-inverted'
												: 'bg-surface-base text-text-primary hover:bg-brand-primary'
										}`}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</Modal>
		</>
	);
}
