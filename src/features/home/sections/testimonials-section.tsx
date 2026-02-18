import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { VideoCard } from '@/src/components/ui/video-card';
import { testimonialVideos } from '@/src/features/home/home-content';

export function TestimonialsSection() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<SectionHeading
					eyebrow='Testimonios'
					title='Experiencias reales'
					description='Relatos de quienes forman parte de nuestras clases.'
				/>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
					{testimonialVideos.map(video => (
						<VideoCard key={video.src} src={video.src} />
					))}
				</div>
			</Container>
		</section>
	);
}
