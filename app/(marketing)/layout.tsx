import { SiteShell } from '@/src/components/layout/site-shell';

export default function MarketingLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <SiteShell>{children}</SiteShell>;
}
