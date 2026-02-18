import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { VideoCard } from '@/src/components/ui/video-card';
import { galleryVideos } from '@/src/features/galeria/galeria-content';

export function VideoGallerySection() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<SectionHeading
					eyebrow='Videos'
					title='Momentos en movimiento'
					description='Clips de clases y actividades de El método.'
				/>
				<div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
					{galleryVideos.map(video => (
						<VideoCard key={video.src} src={video.src} />
					))}
				</div>
			</Container>
		</section>
	);
}
