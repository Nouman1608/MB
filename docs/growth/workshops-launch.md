# Launching a revision workshop — D-286

Prepared 2026-09-23 (PKT). The workshop pages, registration and emails are
built and tested. No workshop is published, because no real session has been
confirmed. `src/content/workshops/example-workshop-draft.md` is an
unpublished template (dated 2099 on purpose) and never appears on the live
site. While no workshop is published, `/workshops/` is noindexed, left out of
the sitemap and linked from nowhere.

## Information needed for the first workshop

| Needed | Why |
|---|---|
| Teacher (must have a profile) | Shown on the page and in the confirmation email |
| Course and topic (e.g. 0620, Topic 3 Stoichiometry) | Page, listing and related material |
| Date and start time, with time zone | Stored with an explicit offset, shown in UTC, Pakistan time and the visitor's own time |
| Length in minutes | Page, calendar file, email |
| Platform (e.g. Google Meet, Zoom) and who sends the joining link, when | The confirmation says the link follows before the start; someone must send it |
| Capacity, if any | Registration closes automatically when full |
| Who it is for (e.g. Extended candidates sitting in November) | Page |
| 2–4 related Marlbridge resources | "Revise before or after" list |

## Steps

1. Copy `example-workshop-draft.md` to a new file, e.g. `0620-moles-nov-2026.md`.
   The file name becomes the address: `/workshops/0620-moles-nov-2026/`.
2. Fill every field with the confirmed details. `startsAt` must include an
   offset, e.g. `"2026-11-07T15:00:00+05:00"` (3 pm Pakistan time).
3. Set `registration.status: open` and `publicationState: published`.
4. Build and review the preview. Check the three times shown, then register
   once with your own email and confirm that both emails arrive: the
   registrant's confirmation and the notification to the owner's inbox.
5. After merging, the workshop is live. Add a link to it from wherever you
   promote it; the homepage shows nothing about workshops by design.

## Before the session

Registrations arrive as emails to the owner's inbox (one per person). Send
the joining link to those addresses. The website never shows or stores the
joining link.

## After the session

1. Set `status: completed`. Registration closes on its own once the start
   time has passed.
2. If it was recorded and everyone on camera has consented: upload the
   recording (see `teacher-video-filming-brief.md`), create its `videos`
   entry with the transcript, and set `recording: <video file name>` on the
   workshop. The page then shows "Recording and transcript".

## How registration works

`POST /api/workshop-register` (`functions/api/workshop-register.ts`) checks the
workshop against its own published data, Turnstile, a rate limit and a
duplicate check (one registration per email per workshop, stored as a SHA-256
code, not the address), then sends both emails through Resend. It reports
success only after both emails were accepted. It uses the existing Resend key,
Turnstile secret and KV namespace; nothing new needs to be configured.

On the Cloudflare preview address, registration (like every form) is refused by
the same-origin check and Turnstile's domain list, so test it after merging,
or add the preview host to Turnstile and the origin check temporarily.
