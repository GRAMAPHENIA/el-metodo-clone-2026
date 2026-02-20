import Link from 'next/link';

import { Container } from '@/src/components/ui/container';
import { navItems } from '@/src/lib/seo/site-config';

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className='border-t border-border-subtle bg-brand-primary/25' id='footer'>
			<Container className='grid gap-8 py-10 md:grid-cols-3'>
				<section aria-labelledby='footer-explorar'>
					<h2 id='footer-explorar' className='text-lg font-bold text-brand-ink'>
						Explorar
					</h2>
					<ul className='mt-4 space-y-2'>
						{navItems.slice(0, 4).map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									className='text-sm font-medium text-brand-ink underline-offset-4 hover:underline'
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section aria-labelledby='footer-contacto'>
					<h2 id='footer-contacto' className='text-lg font-bold text-brand-ink'>
						Contacto
					</h2>
					<ul className='mt-4 space-y-2 text-sm text-text-secondary'>
						<li>
							<a
								href='mailto:adulmaelmetodo@gmail.com'
								className='underline-offset-4 hover:underline'
							>
								adulmaelmetodo@gmail.com
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/elmetodoadulma/'
								target='_blank'
								rel='noreferrer noopener'
								className='underline-offset-4 hover:underline'
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/El.metodo.adulma'
								target='_blank'
								rel='noreferrer noopener'
								className='underline-offset-4 hover:underline'
							>
								Facebook
							</a>
						</li>
					</ul>
				</section>

				<section aria-labelledby='footer-legal'>
					<h2 id='footer-legal' className='text-lg font-bold text-brand-ink'>
						Información legal
					</h2>
					<div className='mt-4 space-y-3 text-xs leading-relaxed text-text-secondary'>
						<p>
							Se deja constancia que EL MÉTODO ADULMA es impartido de manera
							directa por la Lic. Ana T. de León, creadora del mismo, en el salón
							de Ricardo Gutiérrez 1372, Olivos, los días lunes y jueves de 11.00
							a 12.00 hs, y en el salón de La Redonda de Belgrano, sito en Vuelta
							de Obligado 2042, barrio de Belgrano, ingresando por Secretaría
							Parroquial, los días martes y viernes de 11.00 a 12.00 hs.
						</p>
						<p>
							Las personas que figuran en esta página han concurrido y finalizado
							el curso de Formación de EL MÉTODO ADULMA. La aplicación y
							transmisión de los conocimientos adquiridos durante la cursada por
							parte de dichos instructores se realiza bajo su exclusiva
							responsabilidad, siendo los únicos pasibles de las acciones que
							pudieran derivarse de su práctica profesional.
						</p>
					</div>
				</section>
			</Container>

			<div className='border-t border-border-subtle py-5 text-center text-xs font-semibold text-brand-ink'>
				Copyright © EL MÉTODO ADULMA {year}. Todos los derechos reservados.
			</div>
		</footer>
	);
}
