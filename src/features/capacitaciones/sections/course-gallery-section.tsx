import { Container } from '@/src/components/ui/container';
import { ImageCard } from '@/src/components/ui/image-card';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { VideoCard } from '@/src/components/ui/video-card';
import { courseGalleryMedia } from '@/src/features/capacitaciones/capacitaciones-content';

export function CourseGallerySection() {
	const videos = courseGalleryMedia.filter(item => item.src.endsWith('.mp4'));
	const images = courseGalleryMedia.filter(item => !item.src.endsWith('.mp4'));

	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<SectionHeading
					eyebrow='Galería de capacitaciones'
					title='Experiencias de nuestras capacitaciones'
					description='Así se vive cada encuentro: aprendizaje activo, trabajo en equipo y herramientas aplicables desde el primer día.'
				/>

				<div className='mt-10 grid gap-6 md:grid-cols-2'>
					{videos.map(video => (
						<VideoCard key={video.src} src={video.src} />
					))}
				</div>

				<div className='mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
					{images.map(image => (
						<ImageCard
							key={image.src}
							src={image.src}
							alt={image.alt}
							width={image.width ?? 900}
							height={image.height ?? 650}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
