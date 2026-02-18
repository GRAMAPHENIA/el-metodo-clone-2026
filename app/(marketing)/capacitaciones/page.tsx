import type { Metadata } from 'next';

import { CourseGallerySection } from '@/src/features/capacitaciones/sections/course-gallery-section';
import { InstructorsSection } from '@/src/features/capacitaciones/sections/instructors-section';
import { TrainingOverviewSection } from '@/src/features/capacitaciones/sections/training-overview-section';
import { ContactForm } from '@/src/features/contact/contact-form';
import { getBreadcrumbJsonLd, getCourseJsonLd } from '@/src/lib/seo/jsonld';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import { siteConfig } from '@/src/lib/seo/site-config';
import type { SeoPageConfig } from '@/src/types/content';

const seoConfig: SeoPageConfig = {
	title: 'Capacitaciones',
	description:
		'Formacion certificada para profesionales e instructores interesados en ensenar El Metodo Adulma.',
	path: '/capacitaciones',
	keywords: [
		'capacitaciones',
		'curso adulto mayor',
		'curso online',
		'instructores adulma',
	],
};

export const metadata: Metadata = buildPageMetadata(seoConfig);

export default function CapacitacionesPage() {
	return (
		<>
			<h1 className='sr-only'>Capacitaciones de El Metodo Adulma</h1>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						getBreadcrumbJsonLd([
							{ name: 'Inicio', item: siteConfig.domain },
							{
								name: 'Capacitaciones',
								item: `${siteConfig.domain}/capacitaciones`,
							},
						])
					),
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(getCourseJsonLd()),
				}}
			/>
			<TrainingOverviewSection />
			<InstructorsSection />
			<CourseGallerySection />
			<ContactForm />
		</>
	);
}
