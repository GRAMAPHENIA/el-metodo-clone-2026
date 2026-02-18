import type { Metadata } from 'next';

import { ContactForm } from '@/src/features/contact/contact-form';
import { PhotoGallerySection } from '@/src/features/galeria/sections/photo-gallery-section';
import { VideoGallerySection } from '@/src/features/galeria/sections/video-gallery-section';
import { getBreadcrumbJsonLd } from '@/src/lib/seo/jsonld';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import { siteConfig } from '@/src/lib/seo/site-config';
import type { SeoPageConfig } from '@/src/types/content';

const seoConfig: SeoPageConfig = {
	title: 'Galeria',
	description:
		'Imagenes y videos de clases, encuentros y capacitaciones de El Metodo Adulma.',
	path: '/galeria',
	keywords: ['galeria', 'videos', 'adultos mayores', 'metodo adulma'],
};

export const metadata: Metadata = buildPageMetadata(seoConfig);

export default function GaleriaPage() {
	return (
		<>
			<h1 className='sr-only'>Galeria de El Metodo Adulma</h1>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						getBreadcrumbJsonLd([
							{ name: 'Inicio', item: siteConfig.domain },
							{ name: 'Galeria', item: `${siteConfig.domain}/galeria` },
						])
					),
				}}
			/>
			<PhotoGallerySection />
			<VideoGallerySection />
			<ContactForm />
		</>
	);
}
