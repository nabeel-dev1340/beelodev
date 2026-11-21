# syntax=docker/dockerfile:1

# The Beelodev site, self-hosted on the RackNerd box with Coolify.
# next.config.ts sets output: "standalone", so the runner holds only the
# traced server, the static assets and the blog's Markdown.

FROM node:22-alpine AS base
WORKDIR /app

# ---- dependencies -----------------------------------------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- build ------------------------------------------------------------------
# NEXT_PUBLIC_* values are inlined into the client bundle at build time; in
# Coolify mark them "available at buildtime". RESEND_API_KEY is read only when
# the contact form posts, so it is a runtime variable.
FROM base AS build
ARG NEXT_PUBLIC_POSTHOG_KEY
ARG NEXT_PUBLIC_POSTHOG_HOST
ARG GOOGLE_SITE_VERIFICATION
ENV NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_POSTHOG_KEY=$NEXT_PUBLIC_POSTHOG_KEY \
    NEXT_PUBLIC_POSTHOG_HOST=$NEXT_PUBLIC_POSTHOG_HOST \
    GOOGLE_SITE_VERIFICATION=$GOOGLE_SITE_VERIFICATION
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN --mount=type=cache,id=beelodev-next-cache,target=/app/.next/cache,sharing=locked \
    npm run build

# ---- runner -----------------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

COPY --from=build /app/public ./public
COPY --from=build /app/content ./content
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
