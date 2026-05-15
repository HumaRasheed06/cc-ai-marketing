# CC AI — Marketing Site

Public-facing single-page marketing site for CC AI.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (subtle entrance animations)
- lucide-react icons
- Fonts: Outfit (body) + Poppins (heading) via `next/font/google`

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and set the URL of your real app
cp .env.example .env.local
# edit .env.local — NEXT_PUBLIC_APP_URL=http://localhost:3000 (or your deployed app)

# 3. Run dev server (defaults to port 4000 to avoid clashing with the main app on 3000)
npm run dev
```

Open http://localhost:4000

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server on port 4000 (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Production server on port 4000 |
| `npm run lint` | Next.js lint |

## How CTAs work

All `Sign in` / `Start free` buttons read `NEXT_PUBLIC_APP_URL` and append `/login` or `/signup`.

If the env var is missing, they fall back to `http://localhost:3000`.

## Editing content

Every piece of copy on the page lives in [`src/content/site.ts`](src/content/site.ts). Edit there, no other files needed.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts + metadata
│   ├── page.tsx          # composes all sections
│   └── globals.css       # design tokens + Tailwind
├── components/
│   ├── Header.tsx        # sticky transparent → solid on scroll
│   ├── Hero.tsx
│   ├── DashboardPreview.tsx
│   ├── TrustStrip.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx       # monthly/annual toggle
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTABand.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── ui/               # Button, Container, Section
├── content/
│   └── site.ts           # all copy lives here
└── lib/
    └── cn.ts             # cn() + appUrl() helpers
```

## Design tokens

Mirrored from the main app so brand feel is consistent:
- Primary: deep navy `oklch(0.281 0.031 253)`
- Background: cool light gray `oklch(0.966 0.007 253)`
- Radius: 10px
- Fonts: Outfit / Poppins
