import { Container } from '@/src/components/ui/container';
import { ImageCard } from '@/src/components/ui/image-card';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { galleryImages } from '@/src/features/galeria/galeria-content';

export function PhotoGallerySection() {
	return (
		<section className='section-spacing bg-brand-surface'>
			<Container>
				<SectionHeading
					eyebrow='Galeria'
					title='Imagenes de nuestras actividades'
					description='Registro de clases y encuentros.'
				/>
				<div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
					{galleryImages.map((image, index) => (
						<ImageCard
							key={image.src}
							src={image.src}
							alt={image.alt}
							width={image.width ?? 1200}
							height={image.height ?? 900}
							priority={index < 2}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
