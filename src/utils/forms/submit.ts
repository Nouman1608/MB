/**
 * v1.2 WS3 — submits to the same-origin Cloudflare Pages Function at
 * /api/enquiry (see functions/api/enquiry.ts), instead of an external
 * PUBLIC_FORM_ENDPOINT that was never configured. The endpoint always
 * exists once this Function is deployed alongside the static site — no
 * build-time environment variable is required for routing to work.
 *
 * The Function itself still returns the honest "not connected yet"
 * message (same wording as before) if Cloudflare's email-sending binding
 * is not yet configured on the Pages project — see that file's header
 * comment for the exact required dashboard configuration. This function
 * never claims success on the client side; it only ever reports what the
 * server actually did.
 */
export type EnquiryKind = 'student' | 'tutoring' | 'school' | 'trial' | 'correction';

export interface SubmitResult { ok: boolean; message?: string; errors?: Record<string, string> }

export const FALLBACK_EMAIL = 'hello@marlbridge.com';
const ENDPOINT = '/api/enquiry';

export async function submitEnquiry(kind: EnquiryKind, data: FormData): Promise<SubmitResult> {
  try {
    data.set('enquiryKind', kind);
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });
    let payload: SubmitResult | null = null;
    try { payload = await response.json(); } catch { /* non-JSON response — fall through to status-based message */ }
    if (response.ok) return { ok: true };
    return {
      ok: false,
      message: payload?.message ?? 'Something went wrong sending your enquiry. Please try again, or email us.',
      errors: payload?.errors,
    };
  } catch {
    return { ok: false, message: 'We could not reach the server. Please check your connection, or email us.' };
  }
}
