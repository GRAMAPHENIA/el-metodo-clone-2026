import type { Metadata } from 'next';

import { siteConfig } from '@/src/lib/seo/site-config';
import type { SeoPageConfig } from '@/src/types/content';

export function buildPageMetadata(config: SeoPageConfig): Metadata {
	const canonical = new URL(config.path, siteConfig.domain).toString();

	return {
		title: config.title,
		description: config.description,
		keywords: config.keywords,
		alternates: {
			canonical,
			languages: {
				es: canonical,
			},
		},
		openGraph: {
			type: 'website',
			locale: siteConfig.locale,
			url: canonical,
			title: config.title,
			description: config.description,
			siteName: siteConfig.name,
			images: [
				{
					url: siteConfig.defaultOgImage,
					width: 1200,
					height: 630,
					alt: `${siteConfig.name} portada`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: config.title,
			description: config.description,
			images: [siteConfig.defaultOgImage],
		},
	};
}
