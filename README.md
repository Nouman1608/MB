# Marlbridge

Astro + TypeScript + Tailwind CSS v4. Static output. Canonical domain: https://marlbridge.com

## Run locally

\`\`\`bash
npm install
npm run dev      # http://localhost:4321
npm run check    # astro check (TypeScript + template diagnostics)
npm run build    # production build to ./dist
npm run preview  # serve ./dist
\`\`\`

## Before first run

1. Copy the brand assets into \`public/images/brand/\`:
   marlbridge-horizontal.png, marlbridge-horizontal-reverse.png,
   marlbridge-mark.png, marlbridge-favicon-512.png, marlbridge-appicon-1024.png
2. Add subset variable fonts to \`public/fonts/\`:
   newsreader-latin.woff2, public-sans-latin.woff2
   (until then the stack falls back to Georgia / system-ui)
3. Create an Open Graph image at \`public/images/brand/marlbridge-og.png\` (1200×630).

## What is implemented (Stages 1–4)

Foundation, design tokens, typography, BaseLayout, Header, mobile navigation,
Footer, Button, Container, Section, Card, Badge, Eyebrow, Logo, PathwayFigure,
SEO metadata + JSON-LD graph, sitemap, robots.txt, homepage, 404.

Not yet implemented: content collections, program/subject/resource/article
templates, forms, search. See the approved architecture specification.

## Client JavaScript

One script only: the mobile menu toggle in
\`src/components/navigation/MobileMenu.astro\` (focus trap + Escape).
Everything else is static HTML.

## Availability data

\`src/data/homepage.ts\` holds placeholder availability flags per program.
These control badges, CTA wording and Course JSON-LD, and require business
confirmation before launch.
