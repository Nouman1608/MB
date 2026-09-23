# Revision emails: turning them on — D-286

Prepared 2026-09-23 (PKT). The sign-up form, double opt-in, confirmation,
welcome email with a personal unsubscribe link, one-click unsubscribe and the
confirmation pages are all built and tested with a mocked provider. The form
is **hidden** (`src/data/newsletter.ts`, `enabled: false`) and the endpoint
answers 503 until the settings below exist. No campaign is ever sent from the
website: each send is a person's decision in Resend.

## Why it is off

The existing `RESEND_API_KEY` sends enquiry emails. Resend keys can be
"sending access" (emails only) or "full access" (also contacts). Which kind the
existing key is cannot be seen from the repository, and storing subscribers
needs contacts access. A separate key keeps the enquiry path untouched.

## Steps (owner, about 20 minutes)

1. **Resend → API keys:** create a key with **Full access**, name it
   `marlbridge-contacts`.
2. **Resend → Contacts → Properties:** create two text properties named exactly
   `qualification` and `subjects`.
3. Optional: **Resend → Segments:** create "Revision emails" and copy its id.
4. Generate a signing secret (any long random string, e.g. 48 characters from
   a password manager).
5. Set the Worker secrets (Cloudflare dashboard → Workers → `mb` → Settings →
   Variables and secrets, type *Secret*), or with wrangler:

   ```
   npx wrangler secret put RESEND_CONTACTS_API_KEY
   npx wrangler secret put SUBSCRIBE_SIGNING_SECRET
   npx wrangler secret put RESEND_NEWSLETTER_SEGMENT_ID   # optional
   ```
6. In `scripts/validate-worker-bindings.mjs`, move the names you set from
   `PENDING_SECRETS` to `KNOWN_SECRETS`.
7. Set `enabled: true` in `src/data/newsletter.ts`, deploy, then test end to
   end with your own address: form → confirmation email → click → "You're
   subscribed" page → the contact shows in Resend with its qualification and
   subjects → the welcome email's unsubscribe link → the contact shows as
   unsubscribed.
8. Only then mark `newsletter_subscribe_confirmed` as a GA4 key event, if wanted.

If step 7 fails anywhere, set `enabled: false` again; nothing else changes.

## Where the form appears

After the "Next steps" block on resource pages, and on the results screen of
the diagnostics. It is never a pop-up and never required for any tool.

## What subscribers are promised

"Occasional emails with practice questions, worked explanations and links to
free resources for the qualification and subjects you choose." Keep campaigns
to that. The privacy policy already describes this processing (updated
2026-09-23); the Arabic, Urdu and Bengali privacy pages still need the same
paragraph before the form is switched on (the English page governs).
