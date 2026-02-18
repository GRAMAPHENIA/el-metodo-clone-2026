# El Metodo Adulma - Next.js 2026 Refactor

Sitio web migrado a **Next.js App Router + TypeScript estricto + Tailwind CSS** con arquitectura modular por dominio, SEO tecnico y accesibilidad WCAG 2.2 AA.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript estricto
- Tailwind CSS + design tokens
- Zod (validacion)
- Resend (correo transaccional)
- Plausible (analitica privacy-first, opcional)
- pnpm

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm check:no-barrels
pnpm check
pnpm format
```

## Variables de entorno

Crear `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://elmetodoadulma.com
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
CONTACT_RATE_LIMIT_WINDOW_MS=60000
CONTACT_RATE_LIMIT_MAX=5
PLAUSIBLE_DOMAIN=
```

## Arquitectura

```text
app/
  (marketing)/
    page.tsx
    nosotros/page.tsx
    capacitaciones/page.tsx
    galeria/page.tsx
  api/contact/route.ts
  robots.ts
  sitemap.ts
  manifest.ts
  layout.tsx
  globals.css

src/
  features/
  components/
  lib/
  styles/
  types/
```

## Politicas de calidad

- Sin barrel files (`export *` e `index.ts` agregadores prohibidos en `src`).
- Metadatos SEO por ruta.
- JSON-LD estructurado.
- Formularios con validacion y proteccion anti-spam.
- Componentes interactivos accesibles por teclado.

## Deploy

Proyecto preparado para Vercel SSR/ISR.
