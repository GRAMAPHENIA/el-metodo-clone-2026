import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { courseInfo } from '@/src/features/capacitaciones/capacitaciones-content';
import { TrainingCtaActions } from '@/src/features/capacitaciones/sections/training-cta-actions';

export function TrainingOverviewSection() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<div className='mx-auto max-w-3xl surface-card p-6 sm:p-8'>
					<SectionHeading eyebrow='Capacitaciones' title={courseInfo.title} />

					<p className='mt-8 text-base leading-relaxed lg:text-lg'>{courseInfo.introText}</p>
					<p className='mt-4 text-base leading-relaxed lg:text-lg'>{courseInfo.secondaryText}</p>
					<div className='mt-6 rounded-[var(--radius-card)] bg-brand-primary/25 p-4 sm:p-5'>
						<p className='text-xs leading-relaxed sm:text-sm'>{courseInfo.enrollmentNotice}</p>
					</div>
					<TrainingCtaActions
						ctaHref={courseInfo.ctaHref}
						ctaLabel={courseInfo.ctaLabel}
						learnMoreLabel={courseInfo.learnMoreLabel}
						learnMoreContent={courseInfo.learnMoreContent}
					/>
				</div>
			</Container>
		</section>
	);
}
