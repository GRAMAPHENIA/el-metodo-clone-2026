import type { Metadata } from 'next';

import { ContactForm } from '@/src/features/contact/contact-form';
import { HeroSection } from '@/src/features/home/sections/hero-section';
import { ScheduleSection } from '@/src/features/home/sections/schedule-section';
import { TestimonialsSection } from '@/src/features/home/sections/testimonials-section';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import type { SeoPageConfig } from '@/src/types/content';

const seoConfig: SeoPageConfig = {
	title: 'Inicio',
	description:
		'Metodo integral para adultos mayores con enfoque en movimiento, cognicion y bienestar comunitario.',
	path: '/',
	keywords: [
		'metodo adulma',
		'adultos mayores',
		'envejecimiento activo',
		'bienestar',
		'actividades para mayores',
	],
};

export const metadata: Metadata = buildPageMetadata(seoConfig);

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<ScheduleSection />
			<TestimonialsSection />
			<ContactForm />
		</>
	);
}
