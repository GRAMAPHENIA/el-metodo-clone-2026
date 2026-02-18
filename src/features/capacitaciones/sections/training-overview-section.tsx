import { LinkButton } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { courseInfo } from '@/src/features/capacitaciones/capacitaciones-content';

export function TrainingOverviewSection() {
	return (
		<section className='section-spacing bg-brand-primary/40'>
			<Container>
				<div className='mx-auto max-w-3xl surface-card p-6 sm:p-8'>
					<SectionHeading
						eyebrow='Capacitaciones'
						title={courseInfo.title}
						description={courseInfo.description}
					/>

					<ul className='mt-8 list-disc space-y-2 pl-5 text-sm text-text-secondary'>
						<li>Formacion interdisciplinaria con enfoque practico.</li>
						<li>Herramientas para armar y coordinar grupos propios.</li>
						<li>Certificacion profesional avalada.</li>
					</ul>

					<div className='mt-8 flex flex-wrap items-center gap-4'>
						<LinkButton href={courseInfo.ctaHref} target='_blank' rel='noreferrer noopener'>
							{courseInfo.ctaLabel}
						</LinkButton>
						<p className='text-xs text-text-secondary'>
							* Alumnos del exterior pueden inscribirse con tarjeta.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
