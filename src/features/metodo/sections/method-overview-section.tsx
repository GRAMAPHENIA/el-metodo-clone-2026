import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { metodoCards, metodoPageContent } from '@/src/features/metodo/metodo-content';

export function MethodOverviewSection() {
	return (
		<section className='section-spacing bg-brand-primary/40'>
			<Container>
				<SectionHeading
					eyebrow='El Metodo'
					title={metodoPageContent.title}
					description={metodoPageContent.intro}
				/>

				<div className='mt-10 grid gap-6 md:grid-cols-2'>
					{metodoCards.slice(0, 4).map(card => (
						<article key={card.id} className='surface-panel p-6 sm:p-8'>
							<p className='text-[length:var(--step-1)] font-semibold leading-relaxed text-text-primary'>
								{card.text}
							</p>
						</article>
					))}
				</div>

				<div className='mt-6'>
					<article className='surface-panel p-6 sm:p-8'>
						<p className='text-[length:var(--step-1)] font-semibold leading-relaxed text-text-primary'>
							{metodoCards[4].text}
						</p>
					</article>
				</div>
			</Container>
		</section>
	);
}
