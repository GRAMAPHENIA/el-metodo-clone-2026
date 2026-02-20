import Image from 'next/image';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';

import { LinkButton } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { creatorContent } from '@/src/features/metodo/metodo-content';

export function CreatorSection() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<SectionHeading
					eyebrow='Creadora'
					title={creatorContent.name}
					description={creatorContent.role}
				/>

				<div className='mt-10 grid items-center gap-8 lg:grid-cols-[20rem,1fr]'>
					<div className='mx-auto overflow-hidden rounded-full border-4 border-border-strong shadow-floating'>
						<Image
							src={creatorContent.image}
							alt='Retrato de Ana T. de León'
							width={320}
							height={320}
							className='h-72 w-72 object-cover sm:h-80 sm:w-80'
						/>
					</div>

					<div className='surface-card p-6 sm:p-8'>
						<ul className='space-y-3 text-base leading-relaxed text-text-primary'>
							{creatorContent.bio.map(item => (
								<li key={item}>- {item}</li>
							))}
						</ul>
						<div className='mt-6'>
							<LinkButton href={creatorContent.cvUrl} target='_blank' rel='noreferrer noopener'>
								<span className='inline-flex items-center gap-2'>
									<BsFillHandIndexThumbFill aria-hidden='true' />
									Ver currículum completo
								</span>
							</LinkButton>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
