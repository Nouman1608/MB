/**
 * D-286 -- optional revision emails.
 *
 * `enabled` is the public switch. It stays FALSE until the provider is
 * configured and one real sign-up has been tested end to end (form ->
 * confirmation email -> confirm link -> contact visible in Resend ->
 * unsubscribe link works). While false, every subscription form renders
 * nothing at all, so no visitor can meet a form that cannot deliver.
 * The server endpoint independently answers 503 until its secrets exist
 * (functions/api/subscribe.ts), so flipping this early still cannot
 * produce a false "subscribed". Setup: docs/growth/newsletter-setup.md.
 *
 * Campaigns are never sent from this codebase. Each send is a person's
 * decision in Resend.
 */
export const NEWSLETTER = {
  enabled: true,
  /** What subscribers get -- shown next to the form. Keep it true to what is actually sent. */
  promise: 'Occasional emails with practice questions, worked explanations and links to free resources for the qualification and subjects you choose. No spam, and you can unsubscribe from any email.',
} as const;
