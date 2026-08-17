/** The ONLY place an email/CRM provider is named. */
export type EnquiryKind = 'student' | 'tutoring' | 'school';

export interface SubmitResult { ok: boolean; message?: string }

export const FALLBACK_EMAIL = 'hello@marlbridge.com';

export async function submitEnquiry(kind: EnquiryKind, data: FormData): Promise<SubmitResult> {
  const endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT;
  if (!endpoint) {
    return { ok: false, message: 'Online enquiries are not connected yet. Please email ' + FALLBACK_EMAIL + '.' };
  }
  try {
    data.set('enquiryKind', kind);
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });
    if (!response.ok) return { ok: false, message: 'Something went wrong sending your enquiry. Please try again, or email us.' };
    return { ok: true };
  } catch {
    return { ok: false, message: 'We could not reach the server. Please check your connection, or email us.' };
  }
}
