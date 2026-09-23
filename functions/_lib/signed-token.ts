/**
 * D-286 -- sealed (encrypted and authenticated) tokens for the newsletter's
 * double opt-in and unsubscribe links. AES-256-GCM via Web Crypto, which the
 * Workers runtime and Node 22 both provide, so no dependency is added.
 *
 * Encrypted rather than only signed because the payload holds an email
 * address and these tokens travel in URLs (email links, browser history):
 * a signed-only token would expose the address to anyone who sees the link.
 * GCM's authentication tag also proves Marlbridge issued the token.
 *
 * Format: base64url(12-byte IV || ciphertext+tag). The key is SHA-256 of the
 * SUBSCRIBE_SIGNING_SECRET. The payload carries its own expiry (`exp`, ms).
 */
const enc = new TextEncoder();

function b64url(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromB64url(s: string): Uint8Array {
  const pad = s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4);
  return Uint8Array.from(atob(pad), (c) => c.charCodeAt(0));
}

async function aesKey(secret: string): Promise<CryptoKey> {
  const raw = await crypto.subtle.digest('SHA-256', enc.encode(secret));
  return crypto.subtle.importKey('raw', raw, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
}

export async function signToken(payload: Record<string, unknown>, secret: string): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await aesKey(secret), enc.encode(JSON.stringify(payload))));
  const out = new Uint8Array(iv.length + ct.length);
  out.set(iv);
  out.set(ct, iv.length);
  return b64url(out);
}

/** The payload if the token is authentic and unexpired; otherwise null. */
export async function verifyToken<T extends { exp: number }>(token: string, secret: string, now = Date.now()): Promise<T | null> {
  if (!token || token.length > 2000 || !/^[A-Za-z0-9_-]+$/.test(token)) return null;
  try {
    const bytes = fromB64url(token);
    if (bytes.length < 13) return null;
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: bytes.slice(0, 12) }, await aesKey(secret), bytes.slice(12));
    const payload = JSON.parse(new TextDecoder().decode(pt)) as T;
    if (typeof payload.exp !== 'number' || payload.exp < now) return null;
    return payload;
  } catch {
    return null;
  }
}

/** SHA-256 hex, for storage keys that must not hold an email address in the clear. */
export async function sha256Hex(s: string): Promise<string> {
  const d = new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(s)));
  return [...d].map((b) => b.toString(16).padStart(2, '0')).join('');
}
