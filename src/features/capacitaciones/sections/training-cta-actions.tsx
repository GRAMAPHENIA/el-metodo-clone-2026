'use client';

import { useState } from 'react';

import { Button, LinkButton } from '@/src/components/ui/button';
import { Modal } from '@/src/components/ui/modal';

type TrainingCtaActionsProps = {
	ctaHref: string;
	ctaLabel: string;
	learnMoreLabel: string;
	learnMoreContent: string[];
};

export function TrainingCtaActions({
	ctaHref,
	ctaLabel,
	learnMoreLabel,
	learnMoreContent,
}: TrainingCtaActionsProps) {
	const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

	return (
		<>
			<div className='mt-8 flex flex-wrap items-center gap-4'>
				<LinkButton
					href={ctaHref}
					target='_blank'
					rel='noreferrer noopener'
					className='min-h-12 border-brand-accent bg-brand-accent px-7 text-base font-bold text-text-inverted shadow-floating transition-transform hover:scale-[1.02] hover:bg-brand-primary hover:text-brand-ink'
				>
					{ctaLabel}
				</LinkButton>
				<Button
					type='button'
					onClick={() => setIsLearnMoreOpen(true)}
					className='border-brand-accent bg-transparent text-brand-accent hover:bg-brand-accent hover:text-text-inverted'
				>
					{learnMoreLabel}
				</Button>
			</div>

			<Modal
				isOpen={isLearnMoreOpen}
				onClose={() => setIsLearnMoreOpen(false)}
				title='Sobre la capacitación'
			>
				<div className='space-y-4 text-sm leading-relaxed sm:text-base'>
					{learnMoreContent.map((paragraph, index) => (
						<p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
					))}
				</div>
			</Modal>
		</>
	);
}
