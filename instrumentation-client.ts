import posthog from 'posthog-js';

if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-01-30',
    capture_exceptions: true,
    disable_session_recording: true,
    autocapture: {
      css_selector_allowlist: [
        '.desktop-nav a',
        '.service-card',
        '.project-card',
        '.blog-card',
        '.header-cta',
      ],
    },
    debug: false,
  });
}
