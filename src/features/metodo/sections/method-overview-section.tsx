import { Container } from '@/src/components/ui/container';
import {
	metodoLeftCards,
	metodoPageContent,
	metodoRightCards,
} from '@/src/features/metodo/metodo-content';

function MethodTextCard({ text }: { text: string }) {
	return (
		<article className='surface-card h-full p-3 sm:p-4'>
			<div className='flex h-full min-h-60 items-center justify-center rounded-[calc(var(--radius-card)-0.25rem)] px-5 py-7 sm:px-7 sm:py-9'>
				<p className='text-center text-[length:var(--step-0)] font-medium leading-relaxed text-brand-accent'>
					{text}
				</p>
			</div>
		</article>
	);
}

export function MethodOverviewSection() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<h2 className='sr-only'>{metodoPageContent.sectionTitle}</h2>

				<div className='mx-auto grid max-w-6xl items-stretch gap-x-20 gap-y-6 lg:grid-cols-2'>
					<h3 className='flex min-h-16 items-center justify-center rounded-button border border-border-subtle bg-brand-surface px-5 py-3 text-center text-[length:var(--step-2)] font-bold text-brand-accent shadow-card'>
						{metodoPageContent.leftColumnTitle}
					</h3>
					<h3 className='flex min-h-16 items-center justify-center rounded-button border border-border-subtle bg-brand-surface px-5 py-3 text-center text-[length:var(--step-2)] font-bold text-brand-accent shadow-card'>
						{metodoPageContent.rightColumnTitle}
					</h3>
					<MethodTextCard text={metodoLeftCards[0]?.text ?? ''} />
					<MethodTextCard text={metodoRightCards[0]?.text ?? ''} />
					<MethodTextCard text={metodoLeftCards[1]?.text ?? ''} />
					<MethodTextCard text={metodoRightCards[1]?.text ?? ''} />
				</div>

				<div className='mx-auto mt-10 max-w-3xl'>
					<MethodTextCard text={metodoPageContent.bottomText} />
				</div>
			</Container>
		</section>
	);
}
