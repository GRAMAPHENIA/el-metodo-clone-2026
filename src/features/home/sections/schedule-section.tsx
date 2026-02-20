import { MdLocationOn } from 'react-icons/md';

import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { locationCards } from '@/src/features/home/home-content';

export function ScheduleSection() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<SectionHeading
					eyebrow='Sedes y horarios'
					title='Espacios activos de El método'
					description='Cronograma actualizado para clases regulares.'
				/>

				<div className='mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
					{locationCards.map(card => (
						<article key={card.id} className='surface-card p-5'>
							<div className='mb-3 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-brand-primary text-brand-ink'>
								<MdLocationOn aria-hidden='true' className='text-xl' />
							</div>
							<h3 className='text-xl font-bold text-text-primary'>{card.location}</h3>
							<p className='mt-2 text-sm font-semibold uppercase tracking-wide text-brand-accent'>
								{card.scheduleTitle}
							</p>
							<div className='mt-3 space-y-4'>
								{card.schedules.map((scheduleBlock, index) => (
									<div key={`${card.id}-${index}`} className='space-y-1.5'>
										<p className='text-sm font-medium text-text-primary'>
											{scheduleBlock.time}
										</p>
										{scheduleBlock.venue ? (
											<p className='pt-1 text-sm font-bold uppercase text-brand-ink'>
												{scheduleBlock.venue}
											</p>
										) : null}
										{scheduleBlock.note ? (
											<p className='text-sm leading-relaxed text-text-secondary'>
												{scheduleBlock.note}
											</p>
										) : null}
										<p className='text-sm leading-relaxed text-text-secondary'>
											{scheduleBlock.address}
										</p>
									</div>
								))}
							</div>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
