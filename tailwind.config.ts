import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: 'rgb(var(--color-brand-primary) / <alpha-value>)',
					surface: 'rgb(var(--color-brand-surface) / <alpha-value>)',
					ink: 'rgb(var(--color-brand-ink) / <alpha-value>)',
					accent: 'rgb(var(--color-brand-accent) / <alpha-value>)',
				},
				surface: {
					base: 'rgb(var(--color-surface-base) / <alpha-value>)',
					muted: 'rgb(var(--color-surface-muted) / <alpha-value>)',
					strong: 'rgb(var(--color-surface-strong) / <alpha-value>)',
				},
				text: {
					primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
					secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
					inverted: 'rgb(var(--color-text-inverted) / <alpha-value>)',
				},
				border: {
					subtle: 'rgb(var(--color-border-subtle) / <alpha-value>)',
					strong: 'rgb(var(--color-border-strong) / <alpha-value>)',
				},
				feedback: {
					error: 'rgb(var(--color-feedback-error) / <alpha-value>)',
					success: 'rgb(var(--color-feedback-success) / <alpha-value>)',
				},
			},
			borderRadius: {
				card: 'var(--radius-card)',
				button: 'var(--radius-button)',
			},
			boxShadow: {
				card: 'var(--shadow-card)',
				floating: 'var(--shadow-floating)',
			},
			fontFamily: {
				sans: ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
				serif: ['var(--font-libre-baskerville)', 'Georgia', 'serif'],
			},
			spacing: {
				'fluid-xs': 'clamp(0.75rem, 1.2vw, 1rem)',
				'fluid-sm': 'clamp(1rem, 2vw, 1.5rem)',
				'fluid-md': 'clamp(1.5rem, 3vw, 2.5rem)',
				'fluid-lg': 'clamp(2rem, 4vw, 4rem)',
			},
		},
	},
	plugins: [],
};

export default config;
