# Hong Yu's Workshop

A personal portfolio for Soh Hong Yu / UltraRaptor. Built with Next.js 16, TypeScript, Tailwind CSS 4, Geist, and Framer Motion.

## Run locally

```bash
bun install
bun dev
```

Open http://localhost:3000.

```bash
bun run lint
bun run build
bun start
```

Browser checks (run the production build first):

```bash
bunx playwright install chromium
bun run test:e2e
```

The checks cover command-palette keyboard navigation, modal focus management, project dialogs, hackathon stickers, mobile overflow, reduced motion, no-JavaScript content, resume printing, and social metadata. `bun run format` formats source files.

## V1

- Light, studio-style landing page with a compact Now board
- Four featured projects with original UI illustrations and detail dialogs
- GovTech experience, expandable hackathon stickers, About, and contact links
- Searchable command palette: `Cmd+K` / `Ctrl+K`, arrow keys, Enter, Escape
- Printable resume at `/resume`, including Save as PDF through the print dialog
- Responsive vertical mobile layout, native modal focus management, and reduced-motion support
- Open Graph image, metadata, sitemap, and robots.txt
- Transparent UltraRaptor avatar in the wordmark, hero, About, and social preview
- Subtle hero parallax and a pinned, four-stage build sequence on larger screens
- A compact navigation dock that appears after the introduction

The build sequence follows normal browser scrolling and has a skip link. Mobile, short viewports, reduced-motion preferences, and no-JavaScript visits get a static, complete version.

Project illustrations are concept treatments, not recordings of the apps. The site does not call an AI API or require environment variables. Status content is edited manually.

## Update content

- `app/lib/content.ts`: projects, verified external links, awards, and contact details
- `app/page.tsx`: Now board, experience, About, and homepage copy
- `app/resume/page.tsx`: printable resume
- `app/components/project-art.tsx`: lightweight HTML/SVG project illustrations
- `app/components/build-sequence.tsx`, `app/components/hero-scene.tsx`: scroll interactions
- `app/workshop-motion.css`: scroll-scene styles and reduced-motion fallbacks
- `app/project-art.css`: the four project illustrations
- `app/globals.css`: visual system and responsive layouts
- `app/layout.tsx`, `app/opengraph-image.tsx`: SEO and social preview

FilmGram and Enchanted Notebook link to their public repositories. Enchanted Notebook also links to its live demo. L.A.R.P. and PickMe provide project details and an email CTA until public project URLs are available.

## Avatar and icons

The original uploads in `public/` are preserved. The transparent PNG is the source for the optimized WebP avatar. Browser, Apple touch, and Android icons use the uploaded transparent favicon set directly, with metadata in `app/layout.tsx` and `public/site.webmanifest`. Rebuild the avatar after replacing the source image:

```bash
bun run assets:brand
```

The avatar is statically imported so updated images get a new cache-safe URL. The asset script also removes the old generated `app/` icons, which would otherwise override the uploaded set. The Open Graph renderer embeds the original avatar locally, without a third-party image request.

## Deploy

Import the repository into Vercel and select its Next.js preset. The production domain in metadata is `https://sohhongyu.dev`; update metadata, robots, and sitemap if deploying under a different canonical domain.

The draggable desktop, embedded notebook, video previews, playground, timeline, and easter eggs are reserved for V2.
