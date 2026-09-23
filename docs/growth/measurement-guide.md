# Measuring the revision tools and enquiries — D-286

Written 2026-09-23 (PKT). Covers the events added by D-286 and how to read the
five questions the owner asked about. No traffic baseline is stated here:
GA4 could not be read from this session (the Supermetrics trial that exposed it
expired on 2026-09-22, and no BigQuery project id is recorded in the repo). Take
the baseline from GA4 itself in the week the change goes live.

## What is recorded, and what is not

Every event goes through `window.mbTrack` or the existing `gtag` calls in
`ConsentAnalytics.astro`, so the regional consent rule (D-280) applies unchanged:
in the UK and Europe nothing is sent with cookies until the visitor accepts;
elsewhere analytics runs until the visitor rejects it under "Cookie Settings".

Never sent: names, emails, phone numbers, messages, typed answers, self-awarded
marks, topic ratings, exam dates, revision plans, or anything else a visitor
types. `mbTrack` also drops any parameter whose key contains `name`, `email`,
`phone`, `address`, `answer_text`, `question_text`, `password` or `token`.

| Event | Fires when (a completed action, not a button press) | Parameters |
|---|---|---|
| `revision_plan_generated` | A plan was actually built and shown (`/revision-planner/`) | `subjects_count`, `weeks`, `has_unknown_date`, `plan_fits` |
| `diagnostic_complete` | The student finished marking and the results were shown; once per run | `course_code`, `diagnostic_set`, `question_count`, `duration_bucket` |
| `recommended_resource_click` | A student followed a link the tools recommended | `source` (`planner`, `diagnostic`, `resource_next_steps`, `finder_home`), `link_kind`, sometimes `course_code` |
| `syllabus_finder_select` | A course was chosen in the homepage finder | `source`, `qualification`, `board`, `course_code` |
| `workshop_registration_success` | The server accepted the registration and both emails were sent | `workshop` (slug) |
| `newsletter_subscribe_confirmed` | The visitor clicked the confirmation link and Resend accepted the contact (fires on `/subscribe/confirmed/?s=1`, then the flag is removed from the address) | none |
| `generate_lead` (existing key event) | The enquiry server accepted the trial request | now also `trial_source`, `qualification`, `format` for trial requests |
| `whatsapp_click` (existing key event) | WhatsApp link opened; the trial form's link uses `link_location: trial_form` | `link_location`, `page_context` |
| `teaching_video_play` | A visitor pressed Play on a lesson video (none published yet) | `video_id` |

Existing events are unchanged, including the practice page's per-question
`question_answered` events (docs/growth/practice-analytics-events.md), which already disclose on the page that each
self-mark is recorded.

### Known limits

- `newsletter_subscribe_confirmed` is sent from the browser. Someone who opens
  `/subscribe/confirmed/?s=1` directly would add one false event. Resend's
  contact count is the authoritative number.
- `generate_lead` fires only after the server returns success, so it cannot
  count a failed submission, but it also cannot tell a real enquiry from a test.
- A plan made twice counts twice: `revision_plan_generated` measures plans made,
  not unique students.

## GA4 set-up needed (owner, about 15 minutes)

1. Admin → Custom definitions → create event-scoped custom dimensions for:
   `trial_source`, `course_code`, `diagnostic_set`, `source`, `link_kind`,
   `subjects_count` (metric), `plan_fits`, `qualification`, `format`.
2. Admin → Events: decide which to mark as key events. Suggested: keep
   `generate_lead` and `whatsapp_click`; add `workshop_registration_success`
   and `newsletter_subscribe_confirmed` only once those features are live.
   `revision_plan_generated` and `diagnostic_complete` are engagement, not
   conversions — leave them unstarred.
3. Create a segment "Used a free tool" = session contains
   `revision_plan_generated` OR `diagnostic_complete`.

## Reading the five questions

| Question | Where in GA4 | Notes |
|---|---|---|
| Relevant organic search visits | Reports → Acquisition → Traffic acquisition, channel = Organic Search; add a landing-page filter for `/boards/`, `/resources/`, `/practice/`, `/revision-planner/` | Search Console (`/admin/search-demand/`, D-125) remains the source for queries and positions. |
| Returning visitors | Reports → Retention, or Explore with dimension "New / returning" | Before D-280 about 87% of sessions were cookieless, so returning visitors were undercounted; compare only periods after 2026-09-22. |
| Tool completion rates | Explore → Funnel: page_view on `/practice/*/diagnostic/*` → `diagnostic_complete`; page_view on `/revision-planner/` → `revision_plan_generated` | A diagnostic "start" is not recorded on purpose (the button press is not an outcome); the funnel starts at the page view. |
| Trial enquiry rate | `generate_lead` (enquiry_kind = trial) ÷ sessions; split by `trial_source` | `trial_source` tells which surface (tuition page, diagnostic, teacher, resource, planner, region page, home) the request came from. |
| Pages contributing to enquiries | Explore → Path exploration ending in `generate_lead`, or Free-form with Landing page × `generate_lead` | Also the "Used a free tool" segment × `generate_lead` to see whether tool users enquire more. |

What GA4 cannot show: whether a trial was booked, attended or converted to
paid tuition. Those stages live in the enquiry system (learnerspreschool.cloud)
and are not faked on the website (D-149).

## Monthly check (15 minutes)

1. Search Console: clicks and impressions for the five tuition hubs and the
   diagnostic pages.
2. GA4: `diagnostic_complete`, `revision_plan_generated`, `generate_lead` by
   `trial_source`, `whatsapp_click`.
3. Enquiry system: trial requests received, trials held, enrolments — the
   website cannot see these.
4. Write the three numbers that changed most into `docs/growth/monthly-growth-report-template.md`.
