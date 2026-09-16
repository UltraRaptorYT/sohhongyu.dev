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

The checks cover command-palette keyboard navigation, modal focus management, project dialogs, hackathon stickers, mobile overflow, reduced motion, no-JavaScript content, byte-identical PDF downloads, resume-sourced facts, archive filtering, and social metadata. `bun run format` formats source files.

## V1

- Light, studio-style landing page with a compact Now board
- Four featured projects with original UI illustrations and detail dialogs
- Resume-sourced GovTech and MOE experience, education, expandable hackathon stickers, About, and contact links
- Searchable command palette: `Cmd+K` / `Ctrl+K`, arrow keys, Enter, Escape
- Original uploaded PDF: preview at `/resume`, inline document at `/resume/document`, download at `/resume/download`
- Searchable project archive at `/projects`, with category and year filters
- Responsive vertical mobile layout, native modal focus management, and reduced-motion support
- Open Graph image, metadata, sitemap, and robots.txt
- Transparent UltraRaptor avatar in the wordmark, hero, About, and social preview
- Subtle hero parallax and a pinned, four-stage build sequence on larger screens
- A compact navigation dock that appears after the introduction

The build sequence follows normal browser scrolling and has a skip link. Mobile, short viewports, reduced-motion preferences, and no-JavaScript visits get a static, complete version.

Project illustrations are concept treatments, not recordings of the apps. The site does not call an AI API or require environment variables. Status content is edited manually.

## Update content

- `app/lib/content.ts`: featured projects, experience, education, awards, resume configuration, and contact details
- `app/lib/project-archive.ts`: curated archive entries
- `app/lib/beacons-projects.ts`: project and resource links transcribed from the supplied Beacons HTML
- `docs/content-sources.md`: sources, verification scope, and remaining gaps
- `app/page.tsx`: Now board, About, and homepage copy
- `app/resume/page.tsx`: preview and download controls for the original PDF
- `app/resume/SohHongYu_Resume_caa20260917.pdf`: the uploaded source document
- `app/components/project-art.tsx`: lightweight HTML/SVG project illustrations
- `app/components/build-sequence.tsx`, `app/components/hero-scene.tsx`: scroll interactions
- `app/workshop-motion.css`: scroll-scene styles and reduced-motion fallbacks
- `app/project-art.css`: the four project illustrations
- `app/globals.css`: visual system and responsive layouts
- `app/layout.tsx`, `app/opengraph-image.tsx`: SEO and social preview

FilmGram and Enchanted Notebook link to their public repositories. Enchanted Notebook and PickMe also link to their project sites. L.A.R.P. provides project details and an email CTA until a public project URL is available.

To replace the resume, add the new PDF under `app/resume/`, update `resume.sourceFile` and `resume.updated` in `app/lib/content.ts`, and rebuild. The PDF routes are generated at build time from the original bytes. Keep the PDF in the repository so deployments can include it.

The archive combines resume/GitHub sources with the visible project links in the Beacons HTML supplied by Hong Yu. Related app, admin-console and video links are grouped under one project; community, social and general video resources appear under “Beyond the code.” Unknown years use “Undated” and undocumented stacks are omitted. See the source notes for the PickMe award wording confirmed by Hong Yu.

## Avatar and icons

The original uploads in `public/` are preserved. The transparent PNG is the source for the optimized WebP avatar. Browser, Apple touch, and Android icons use the uploaded transparent favicon set directly, with metadata in `app/layout.tsx` and `public/site.webmanifest`. Rebuild the avatar after replacing the source image:

```bash
bun run assets:brand
```

The avatar is statically imported so updated images get a new cache-safe URL. The asset script also removes the old generated `app/` icons, which would otherwise override the uploaded set. The Open Graph renderer embeds the original avatar locally, without a third-party image request.

## Deploy

Import the repository into Vercel and select its Next.js preset. The production domain in metadata is `https://sohhongyu.dev`; update metadata, robots, and sitemap if deploying under a different canonical domain.

The draggable desktop, embedded notebook, video previews, playground, timeline, and easter eggs are reserved for V2.
