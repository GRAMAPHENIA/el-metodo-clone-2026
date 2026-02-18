import type { CourseInfo, InstructorProfile, MediaAsset } from '@/src/types/content';

export const courseInfo: CourseInfo = {
	id: 'curso-online',
	title: 'Curso online para profesionales',
	description:
		'Formacion para profesionales que desean ensenar el metodo y ampliar su impacto laboral en el campo del adulto mayor.',
	ctaLabel: 'Programa e informacion',
	ctaHref: 'https://www.ama-med.org.ar/especialidades/detalleCurso/701',
};

export const instructorProfiles: InstructorProfile[] = [
	{
		id: 'juan-alfonso',
		name: 'Profesor Juan P. Alfonso',
		image: '/avatar/instructor-uno.webp',
		role: 'Instructor certificado',
	},
	{
		id: 'mariela-trajterman',
		name: 'Mariela Trajterman',
		image: '/avatar/instructor-dos.webp',
		role: 'Instructora certificada',
	},
	{
		id: 'mirta-gakbart',
		name: 'Mirta Gakbart',
		image: '/avatar/instructor-tres.webp',
		role: 'Instructora certificada',
	},
	{
		id: 'manuela-miretti',
		name: 'Manuela Miretti',
		image: '/avatar/instructor-cuatro.webp',
		role: 'Instructora certificada',
	},
	{
		id: 'araceli-pane',
		name: 'Araceli E. Pane',
		image: '/avatar/instructor-cinco.webp',
		role: 'Instructora certificada',
	},
];

export const courseGalleryMedia: MediaAsset[] = [
	{ src: '/1cap.mp4', alt: 'Video de capacitacion 1' },
	{ src: '/2cap.mp4', alt: 'Video de capacitacion 2' },
	{
		src: '/4cap.webp',
		alt: 'Imagen de capacitaciones grupales',
		width: 900,
		height: 650,
	},
	{
		src: '/6cap.webp',
		alt: 'Imagen de practica en capacitaciones',
		width: 900,
		height: 650,
	},
	{
		src: '/7cap.webp',
		alt: 'Imagen de clase de capacitacion',
		width: 900,
		height: 650,
	},
	{
		src: '/cap001.webp',
		alt: 'Imagen de formacion profesional 1',
		width: 900,
		height: 650,
	},
	{
		src: '/cap002.webp',
		alt: 'Imagen de formacion profesional 2',
		width: 900,
		height: 650,
	},
	{
		src: '/cap003.webp',
		alt: 'Imagen de formacion profesional 3',
		width: 900,
		height: 650,
	},
];
