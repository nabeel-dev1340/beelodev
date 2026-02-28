<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Beelodev Next.js 16 App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new) — Initialises PostHog client-side using the Next.js 15.3+ instrumentation API. Configured with a `/ingest` reverse proxy, exception capture, and debug mode in development.
- **`next.config.ts`** (edited) — Added PostHog reverse proxy rewrites (`/ingest/static/*` and `/ingest/*`) and `skipTrailingSlashRedirect: true` so PostHog requests route correctly through Next.js, bypassing ad blockers.
- **`app/lib/posthog-server.ts`** (new) — Singleton server-side PostHog client using `posthog-node`, used by API routes to capture server-side events.
- **`app/components/Contact.tsx`** (edited) — Added `posthog.identify()` on successful submission (identifies the lead by email), `contact_form_submitted` capture on success, and `contact_form_error` + `posthog.captureException()` on failure.
- **`app/components/Packages.tsx`** (edited) — Added `pricing_plan_cta_clicked` on each plan's "Book call" CTA and `pricing_plan_details_clicked` on each plan's "View details" link, both with `plan_name`, `plan_slug`, `plan_price`, and `is_popular` properties.
- **`app/components/Hero.tsx`** (edited) — Added `booking_cta_clicked` on the primary hero booking CTA and `hero_primary_cta_clicked` on the secondary CTA, with location and label properties.
- **`app/api/contact/route.ts`** (edited) — Added server-side `posthog.identify()` and `server_contact_form_submitted` capture on email delivery success; `server_contact_form_failed` capture on Resend error, providing a server-confirmed counterpart to client events.
- **`.env.local`** (created) — Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (covered by `.gitignore`).

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `contact_form_submitted` | User successfully submitted the contact form | `app/components/Contact.tsx` |
| `contact_form_error` | Contact form submission failed (client-side error) | `app/components/Contact.tsx` |
| `booking_cta_clicked` | User clicked the hero "Book a call" CTA | `app/components/Hero.tsx` |
| `hero_primary_cta_clicked` | User clicked the hero secondary CTA ("See Our Work") | `app/components/Hero.tsx` |
| `pricing_plan_cta_clicked` | User clicked "Book call" on a pricing plan card | `app/components/Packages.tsx` |
| `pricing_plan_details_clicked` | User clicked "View details" on a pricing plan card | `app/components/Packages.tsx` |
| `server_contact_form_submitted` | Server confirmed contact email sent via Resend | `app/api/contact/route.ts` |
| `server_contact_form_failed` | Server failed to deliver contact email via Resend | `app/api/contact/route.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

**Dashboard**
- [Analytics basics](https://us.posthog.com/project/326969/dashboard/1317924)

**Insights**
- [Contact Form Submissions Over Time](https://us.posthog.com/project/326969/insights/ytWNLj2O) — Daily trend of client-side and server-confirmed submissions
- [Booking → Contact Form Conversion Funnel](https://us.posthog.com/project/326969/insights/saTugykm) — Funnel from booking CTA click to form submission
- [CTA Engagement by Type](https://us.posthog.com/project/326969/insights/V66Llu2q) — Compares hero booking, pricing plan, and secondary CTA clicks
- [Pricing Plan Engagement by Plan](https://us.posthog.com/project/326969/insights/ZqYGtUqw) — Breaks down plan CTA and "View details" clicks by plan name
- [Contact Form Error Rate](https://us.posthog.com/project/326969/insights/iHDm8XuX) — Tracks client errors and server failures over time

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
