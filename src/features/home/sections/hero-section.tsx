'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Container } from '@/src/components/ui/container';
import { homeHero } from '@/src/features/home/home-content';

export function HeroSection() {
	const [showVideo, setShowVideo] = useState(false);

	useEffect(() => {
		const timer = window.setTimeout(() => {
			setShowVideo(true);
		}, 1200);

		return () => window.clearTimeout(timer);
	}, []);

	return (
		<section className='relative isolate overflow-hidden border-b border-border-subtle bg-brand-ink text-text-inverted'>
			{!showVideo ? (
				<div
					className='absolute inset-0 -z-10 animate-pulse bg-gradient-to-br from-brand-ink via-brand-ink/85 to-brand-primary/30'
					aria-hidden='true'
				/>
			) : null}
			{showVideo ? (
				<video
					className='absolute inset-0 -z-10 h-full w-full object-cover opacity-45'
					autoPlay
					muted
					loop
					playsInline
					preload='metadata'
					aria-hidden='true'
				>
					<source src={homeHero.videoSrc} type='video/mp4' />
				</video>
			) : null}

			<div
				className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/20 via-brand-ink/60 to-brand-ink'
				aria-hidden='true'
			/>

			<Container className='section-spacing'>
				<div className='mx-auto max-w-3xl text-center fade-up'>
					<h1 className='text-balance text-[length:var(--step-4)] font-bold'>
						{homeHero.title}
					</h1>
					<p className='mt-5 text-[length:var(--step-0)] leading-relaxed text-brand-surface'>
						{homeHero.description}
					</p>
					<div className='mt-8'>
						<Link
							href={homeHero.ctaHref}
							className='inline-flex min-h-11 items-center justify-center rounded-button border border-brand-primary bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-surface'
						>
							{homeHero.ctaLabel}
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}
