import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

import { MobileMenu } from '@/src/components/layout/mobile-menu';
import { Container } from '@/src/components/ui/container';
import { navItems, socialLinks } from '@/src/lib/seo/site-config';

export function SiteHeader() {
	return (
		<header className='sticky top-0 z-40 border-b border-border-subtle bg-brand-surface'>
			<Container className='flex min-h-[4.5rem] items-center justify-between gap-4'>
				<Link href='/' className='inline-flex items-center gap-3' aria-label='Ir a inicio'>
					<Image
						src='/logoroundedsvg.svg'
						alt='Logo de El Método Adulma'
						width={48}
						height={48}
						priority
					/>
					<span className='hidden text-lg font-semibold text-brand-ink sm:inline'>
						El Método Adulma
					</span>
				</Link>

				<nav className='hidden lg:block' aria-label='Navegación principal'>
					<ul className='flex items-center gap-6'>
						{navItems.map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									className='rounded-button px-2 py-1 text-sm font-semibold text-brand-ink transition hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent'
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className='flex items-center gap-2'>
					<a
						href={socialLinks.instagram}
						target='_blank'
						rel='noreferrer noopener'
						aria-label='Instagram de El Método Adulma'
						className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-base text-brand-ink transition hover:bg-brand-accent hover:text-text-inverted'
					>
						<BsInstagram aria-hidden='true' />
					</a>
					<a
						href={socialLinks.facebook}
						target='_blank'
						rel='noreferrer noopener'
						aria-label='Facebook de El Método Adulma'
						className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-base text-brand-ink transition hover:bg-brand-accent hover:text-text-inverted'
					>
						<BsFacebook aria-hidden='true' />
					</a>
					<MobileMenu items={navItems} />
				</div>
			</Container>
		</header>
	);
}
