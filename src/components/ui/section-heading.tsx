import { cn } from '@/src/lib/utils/cn';

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	description?: string;
	className?: string;
};

export function SectionHeading({
	eyebrow,
	title,
	description,
	className,
}: SectionHeadingProps) {
	return (
		<header className={cn('mx-auto max-w-3xl text-center', className)}>
			{eyebrow ? (
				<p className='text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent'>
					{eyebrow}
				</p>
			) : null}
			<h2 className='mt-3 text-balance text-[length:var(--step-3)] font-bold text-text-primary'>
				{title}
			</h2>
			{description ? (
				<p className='mt-4 text-[length:var(--step-0)] leading-relaxed text-text-secondary'>
					{description}
				</p>
			) : null}
		</header>
	);
}
