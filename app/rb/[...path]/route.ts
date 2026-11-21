/**
 * Rybbit through this site's own origin, without its cookies.
 *
 * The tracker (app/layout.tsx) loads /rb/script.js and sends to the paths
 * beside it. Each is forwarded to the self-hosted Rybbit backend on the
 * server's internal Docker network (RYBBIT_URL, e.g.
 * http://rybbit-backend-<service>:3001), not its public host: through Traefik
 * every visitor would arrive as this server. The site is set as behind a
 * first-party proxy in Rybbit, so the backend takes the visitor's address
 * from X-Real-IP, for the coarse location and the daily visitor hash only;
 * Rybbit does not store the address itself.
 *
 * Forwarded: the body, its type, the user agent, Origin and Referer, and the
 * Accept / Sec-Fetch headers Rybbit's bot check expects from a real browser.
 * Never Cookie or Authorization. Only the paths the tracker uses (v2.9.3).
 */

const UPSTREAM = process.env.RYBBIT_URL?.replace(/\/+$/, '');

const ALLOWED =
  /^\/(script\.js|replay\.js|track|identify|site\/tracking-config\/[a-z0-9]+|session-replay\/record\/[a-z0-9]+)$/;

const FORWARDED_REQUEST = [
  'content-type',
  'user-agent',
  'origin',
  'referer',
  'accept',
  'accept-language',
  'sec-fetch-site',
  'sec-fetch-mode',
  'sec-fetch-dest',
  'sec-ch-ua',
  'sec-ch-ua-mobile',
  'sec-ch-ua-platform',
];

/** Rybbit's own limit (a session-replay batch is the biggest thing it takes). */
const MAX_BODY = 10 * 1024 * 1024;
const DROPPED_RESPONSE = new Set(['set-cookie', 'content-encoding', 'content-length', 'transfer-encoding', 'connection']);

/** The visitor's address as Traefik passed it on. */
function clientIp(request: Request): string | null {
  const real = request.headers.get('x-real-ip')?.trim();
  if (real) return real;
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null;
}

async function forward(request: Request): Promise<Response> {
  if (!UPSTREAM) return new Response('Not found', { status: 404 });
  const url = new URL(request.url);
  const rest = url.pathname.replace(/^\/rb/, '');
  if (!ALLOWED.test(rest)) return new Response('Not found', { status: 404 });

  const headers = new Headers();
  for (const name of FORWARDED_REQUEST) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  // What the browser accepts, minus encodings this server's fetch may not
  // decode; gzip is what the bot check looks for.
  if (request.headers.get('accept-encoding')) headers.set('accept-encoding', 'gzip, deflate, br');
  const ip = clientIp(request);
  if (ip) {
    headers.set('x-real-ip', ip);
    headers.set('x-forwarded-for', ip);
  }

  let body: ArrayBuffer | undefined;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    if (Number(request.headers.get('content-length')) > MAX_BODY) return new Response(null, { status: 413 });
    body = await request.arrayBuffer();
    if (body.byteLength > MAX_BODY) return new Response(null, { status: 413 });
  }
  const upstream = await fetch(`${UPSTREAM}/api${rest}${url.search}`, {
    method: request.method,
    headers,
    body,
    redirect: 'manual',
    signal: AbortSignal.timeout(30_000),
  }).catch(() => null);
  if (!upstream) return new Response(null, { status: 502 });

  const out = new Headers();
  upstream.headers.forEach((value, name) => {
    if (!DROPPED_RESPONSE.has(name.toLowerCase())) out.set(name, value);
  });
  return new Response(request.method === 'HEAD' ? null : upstream.body, { status: upstream.status, headers: out });
}

export const GET = forward;
export const HEAD = forward;
export const POST = forward;
export const OPTIONS = forward;
