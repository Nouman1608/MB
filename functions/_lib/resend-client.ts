/**
 * D-286 -- the Resend HTTP calls the newsletter and workshop endpoints need.
 * Plain fetch, no SDK, matching functions/api/enquiry.ts. Every function
 * throws on a non-2xx answer so callers report a real failure rather than a
 * false success.
 */
export const PUBLIC_SENDER = 'Marlbridge <hello@marlbridge.com>';

export async function sendEmail(
  apiKey: string,
  opts: { to: string[]; subject: string; text: string; replyTo?: string; from?: string; headers?: Record<string, string> },
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  const res = await fetchImpl('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: opts.from ?? PUBLIC_SENDER,
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      ...(opts.headers ? { headers: opts.headers } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend send responded ${res.status}`);
}

/**
 * Creates (or re-subscribes) a contact. Resend answers an existing email with
 * an error on create, so on a non-2xx create we try an update by email, which
 * is how a previously unsubscribed person opts back in.
 * Docs: https://resend.com/docs/api-reference/contacts/create-contact
 */
export async function upsertContact(
  apiKey: string,
  contact: { email: string; segmentId?: string; properties?: Record<string, string> },
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  const body = {
    email: contact.email,
    unsubscribed: false,
    ...(contact.segmentId ? { segments: [{ id: contact.segmentId }] } : {}),
    ...(contact.properties ? { properties: contact.properties } : {}),
  };
  const headers = { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' };
  const created = await fetchImpl('https://api.resend.com/contacts', { method: 'POST', headers, body: JSON.stringify(body) });
  if (created.ok) return;
  const updated = await fetchImpl(`https://api.resend.com/contacts/${encodeURIComponent(contact.email)}`, {
    method: 'PATCH', headers, body: JSON.stringify({ unsubscribed: false, ...(contact.properties ? { properties: contact.properties } : {}) }),
  });
  if (!updated.ok) throw new Error(`Resend contact create ${created.status}, update ${updated.status}`);
}

export async function unsubscribeContact(apiKey: string, email: string, fetchImpl: typeof fetch = fetch): Promise<void> {
  const res = await fetchImpl(`https://api.resend.com/contacts/${encodeURIComponent(email)}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ unsubscribed: true }),
  });
  // 404: never subscribed -- the outcome the visitor wants anyway.
  if (!res.ok && res.status !== 404) throw new Error(`Resend unsubscribe responded ${res.status}`);
}
