# Ryan Smith Portfolio

A statically rendered software engineering portfolio built with Next.js, React, TypeScript, and CSS Modules.

## Development

Requires Node.js 24.

```bash
npm install
npm run dev
```

The development site is available at `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run audit:prod
npm run build
```

## Structure

- `app/` contains App Router pages, shared UI, metadata, and portfolio data.
- `app/data/portfolio.ts` is the typed source for project and employment content.
- `public/` contains the resume, profile image, favicon, and project artwork.
- Page-specific CSS Modules own layout and component styling; `app/globals.css` owns design tokens and shared behavior.

## Deployment

The application builds as statically generated routes and is suitable for deployment on Vercel or another Next.js-compatible host. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin for metadata, sitemap, and structured data.
