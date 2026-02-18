import type { MethodTextCard } from '@/src/types/content';

export const metodoPageContent = {
	title: '¿Por qué enseñar El Método?',
	intro:
		'El Metodo integra movimiento, estimulacion cognitiva y acompanamiento social para favorecer autonomia y salud integral.',
};

export const metodoCards: MethodTextCard[] = [
	{
		id: 'beneficios-ensenanza',
		text: 'Beneficios de El Metodo para enseñar a adultos mayores.',
	},
	{
		id: 'impacto-profesional',
		text: 'Impacto profesional de enseñar El Metodo.',
	},
	{
		id: 'beneficios-cognitivos-fisicos',
		text: 'Beneficios cognitivos y físicos de aprender El Metodo.',
	},
	{
		id: 'resultados-aprendizaje',
		text: 'Resultados de aprendizaje del Metodo en adultos mayores.',
	},
	{
		id: 'resumen-metodologico',
		text: 'Resumen metodológico de la propuesta Adulma.',
	},
];

export const creatorContent = {
	name: 'Ana T. de Leon',
	role: 'Lic. en Enfermeria y creadora de El Metodo Adulma',
	image: '/avatar/teresa.png',
	bio: [
		'Especialista en adulto mayor y vejez con experiencia academica y asistencial.',
		'Miembro de la Asociacion Medica Argentina y ex docente UBA.',
		'Autora de obras sobre tercera y cuarta edad y metodologia Adulma.',
	],
	cvUrl: '/cvAna-comprimido.pdf',
};
