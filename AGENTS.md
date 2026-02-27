# Agent Notes (beelodev)

This repository is a Next.js (App Router) site using TypeScript, Tailwind CSS, ESLint, framer-motion, and lucide-react.

No Cursor rules were found in `.cursor/rules/` or `.cursorrules`.
No GitHub Copilot instructions were found in `.github/copilot-instructions.md`.

## Repository Layout

- `app/` - Next.js App Router routes, layouts, API route handlers, and UI components
- `app/components/` - reusable components (many are client components)
- `app/config/` - content/config single source of truth (`site.ts`, `projects.ts`)
- `app/lib/` - shared utilities (SEO + JSON-LD generators)
- `app/api/` - Route Handlers (server-only)
- `public/` - static assets (project images, icons)

If you need to change copy/content, prefer editing config in `app/config/site.ts` and `app/config/projects.ts` instead of hardcoding in components.

## Setup

- Package manager: npm (lockfile: `package-lock.json`)
- Install: `npm ci`
- Node: use a modern LTS compatible with Next 16 (Node 18.18+ / 20+)

## Build / Lint / Test

### Common commands

- Dev server: `npm run dev` (http://localhost:3000)
- Production build: `npm run build`
- Start prod server: `npm run start`
- Lint: `npm run lint`

### Linting specifics

- Lint + autofix: `npm run lint -- --fix`
- Lint a single file:
  - `npx eslint "app/components/Navbar.tsx"`
  - `npx eslint "app/api/contact/route.ts"`
- Lint a subset by glob:
  - `npx eslint "app/**/*.{ts,tsx}"`

### Type checking

There is no dedicated `typecheck` script, but TypeScript is configured as `strict: true`.

- Typecheck (CLI): `npx tsc -p tsconfig.json --noEmit`
- `npm run build` will also surface many type errors during Next build.

### Tests

No unit/integration/e2e test runner is currently configured (no `vitest`, `jest`, `playwright`, etc. in `package.json`).

- If you add tests later, also add:
  - a `test` script
  - a "single test" command in this section (examples below)

Examples (only valid if the tool is installed and configured):

- Vitest: `npx vitest run path/to/file.test.ts -t "test name"`
- Jest: `npx jest path/to/file.test.ts -t "test name"`
- Playwright: `npx playwright test path/to/spec.spec.ts -g "test name"`

## Environment / Secrets

- Do not commit `.env*` files (they are ignored by `.gitignore`).
- Server-only secrets belong in Route Handlers / server components (never in client components).
- `app/api/contact/route.ts` uses Resend and expects `RESEND_API_KEY` at runtime.

## Code Style (follow existing patterns)

### Language / Types

- TypeScript everywhere; keep it strict-friendly.
- Prefer `type` for object shapes and unions (common in this repo), `interface` only when you need declaration merging.
- Use `import type { ... }` for type-only imports.
- Avoid `any`; prefer `unknown` + narrowing.

### Formatting

- There is no Prettier config in this repo.
- Match the style of the file you are editing.
- Current conventions you will see often:
  - semicolons
  - single quotes in most TS/TSX files
  - 2-space indentation in many files, but some use 4 spaces (do not reformat unrelated code)
- Keep JSX readable: wrap long prop objects and long className strings across lines.

### Imports

Order imports top-to-bottom:

1. React (hooks) when needed
2. Next.js (`next/*`)
3. Third-party packages (`framer-motion`, `lucide-react`, etc.)
4. Local modules (relative imports or `@/*` alias)

Notes:

- `tsconfig.json` defines `@/*` -> `./*` path alias; use it when it improves clarity, but don’t churn existing relative imports.

### Naming

- Components: `PascalCase` default exports (e.g. `Navbar`, `Contact`)
- Hooks: `useX` named exports (e.g. `useMousePosition`)
- Types: `PascalCase` (e.g. `Project`, `SiteConfig`)
- Variables/functions: `camelCase`
- Constants: `camelCase` for most values; `SCREAMING_SNAKE_CASE` only for true constants that read better that way

### Next.js (App Router) conventions

- Server Components by default; add `'use client';` only when you need client hooks, state, or browser APIs.
- Keep client components small and focused; push data and heavy logic to server components when possible.
- Route Handlers live in `app/api/**/route.ts` and must validate input.
- Metadata:
  - Global: `app/layout.tsx` uses `generateMetadata` from `app/lib/seo.ts`
  - Project pages: `app/projects/[slug]/page.tsx` uses `generateProjectMetadata` and injects project JSON-LD
- SEO/structured data lives in `app/lib/seo.ts` and `app/components/StructuredData.tsx`; preserve the patterns when extending.

### Error handling

- Treat all external input as untrusted (forms, query params, request JSON).
- In API route handlers:
  - validate required fields
  - return `NextResponse.json({ error: "..." }, { status: 4xx/5xx })`
  - log server errors with enough context for debugging, but do not leak secrets to the client
- Prefer explicit, user-safe error messages; keep raw error objects in server logs only.

### React / UI

- Use Tailwind for styling; global utilities live in `app/globals.css` (`@layer base` / `@layer utilities`).
- Use `next/image` for images (see `next.config.ts` image settings).
- framer-motion is used for intentional motion; keep animations purposeful (entrance, hover, stagger) and avoid excessive re-renders.
- Accessibility: include `aria-label` for icon-only buttons/links and preserve semantic HTML (`nav`, `main`, `section`, `article`).

## Working Agreement for Agents

- Keep diffs minimal: avoid drive-by reformatting.
- Prefer editing config/content in `app/config/*` over duplicating content.
- Never add or print secrets; do not touch `.env` beyond referencing required variable names.
- Before opening a PR/commit, ensure `npm run lint` and `npm run build` pass.
