'use client';

import { useState } from 'react';

import { getVideoType } from '@/src/lib/media/video';
import { cn } from '@/src/lib/utils/cn';

type VideoCardProps = {
	src: string;
	title?: string;
	poster?: string;
	className?: string;
};

export function VideoCard({ src, title, poster, className }: VideoCardProps) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<figure
			className={cn('surface-card mx-auto w-full max-w-[18rem] overflow-hidden', className)}
		>
			<div className='relative'>
				{!isLoaded ? <div aria-hidden='true' className='media-skeleton absolute inset-0 z-10' /> : null}
				<video
					controls
					playsInline
					preload='metadata'
					poster={poster}
					className={cn(
						'aspect-[9/16] w-full bg-surface-muted object-cover transition-opacity duration-300',
						isLoaded ? 'opacity-100' : 'opacity-0'
					)}
					onLoadedData={() => setIsLoaded(true)}
				>
					<source src={src} type={getVideoType(src)} />
					Tu navegador no soporta video HTML5.
				</video>
			</div>
			{title ? (
				<figcaption className='px-4 py-3 text-sm font-medium text-text-secondary'>
					{title}
				</figcaption>
			) : null}
		</figure>
	);
}
