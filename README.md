# Beelodev

A Next.js App Router site for Nabeel Sharafat’s custom business and workflow automation services.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build`, then `npm run start`.

## Content

- `app/config/site.ts`: identity, contact details, navigation, homepage copy, and trust language.
- `app/config/services.ts`: four core offers and five specialist workflows, deliverables, boundaries, FAQs, search metadata, and related guides.
- `app/config/projects.ts`: actual project evidence and screenshots.
- `app/config/systems.ts`: secondary AI and integration workflows.
- `content/blog/*.mdx`: practical guides. Frontmatter includes `title`, `description`, `date`, `author`, `tags`, and `slug`; use `updatedDate` for revisions without changing the original publication date.
- `app/config/demo.ts`: fictional records shared by the downloader simulation and its CSV report.

New service pages and posts are included in the generated sitemap. Preserve existing slugs when editing published content.

## Design

Shared styles and light/dark theme tokens live in `app/globals.css`. The theme follows the system preference on first visit and stores an explicit user choice locally. Design context is recorded in `.impeccable.md`.

Core content is rendered on the server. Client components handle the navigation menu, theme toggle, inquiry form, blog filters, calculators, and sample downloader. The downloader is a simulation with fictional data; its CSV explicitly labels each download as simulated.

## Inquiry delivery

The server-side contact route requires `RESEND_API_KEY`. Configure it through the deployment environment and verify the sending domain in Resend. Do not commit environment files. A delivery failure is shown to the visitor with a direct email fallback.

The route validates field types, lengths, email format, service and dropdown values, and origin. It uses a honeypot and basic per-instance email throttling. Distributed production throttling belongs at the hosting edge.

The inquiry requires name, email, and workflow details. Optional service, tools, volume, and timing are disclosed on demand, with safe defaults accepted by the server. Homepage content leads with outcomes and links all nine services through four workflow groups.

PostHog initializes only when `NEXT_PUBLIC_POSTHOG_KEY` is configured. Form fields are excluded from automatic interaction capture and session recording is disabled. Vercel Analytics remains enabled.

## Verify

```sh
npm run lint
npm run build
```

No automated test runner is configured. See `REVAMP-NOTES.md` for the checks performed and launch follow-up.

## Organic search

See `SEO-PLAN.md` for the service and guide clusters and the Search Console setup steps. The optional `GOOGLE_SITE_VERIFICATION` deployment variable supports HTML meta tag verification; a domain property uses DNS verification instead.
