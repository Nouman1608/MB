# Teacher profiles: evidence coverage and missing assets

*Checked 2026-09-25 (D-330) against `src/content/authors/*.md`. The source for every
profile is the published Learners Academy faculty listing (`sourceUrl`), checked on 18 Aug
2026. Nothing below was inferred.*

## Coverage (20 teacher profiles)

| Evidence | Recorded for | Missing for |
|---|---|---|
| Name, role, bio | 20 of 20 | none |
| Photograph | 19 of 20 | Harris Khan (a neutral "Photo" placeholder labelled "not yet available" is shown) |
| Subjects taught | 20 of 20 | none |
| Years of experience | 19 of 20 (Lubna Waseem's 22 years added 25 Sep 2026, D-333) | Harris Khan (owner: leave as it is) |
| Previous schools | 17 of 20 | Harris Khan, Harris Zaman, Lubna Waseem |
| Exam boards taught | 20 of 20, from the owner's answers of 25 Sep 2026 (D-333) | none |
| IB (MYP and Diploma) | 19 of 20 take IB students (D-333); Javaid Iqbal Sabri does not | none |
| Levels taught | 20 of 20: owner decision of 25 Sep 2026 (D-331) that all teachers teach all levels; every profile lists IGCSE / GCSE / O Level and AS & A Level, plus IB for the 19 teachers who take IB students (D-333) | none (`qualificationsTaught` stays empty; a per-teacher list would override the statement) |
| Teaching approach, learner needs suited | 0 of 20 (beyond the one-line bio) | all |
| Formats and fees | 20 of 20, from the site-wide pricing data (added to every profile on 25 Sep) | none |
| Availability | Site-wide statement only (D-311: "teachers are available 24/7") | per-teacher availability is not recorded |
| Testimonials or results per teacher | 0 of 20 | all (no per-teacher evidence with permission exists) |
| Teaching video or introduction | 0 of 20 (`src/content/videos` holds only the unpublished template) | all |

Profiles now list each teacher's boards (and IB where they take IB students). Resource and hub
pages still do **not** suggest a named teacher for a board-specific course; that would be a
separate change.
The trial form treats a named teacher as a preference that staff check (see
`docs/operations/trial-follow-up.md`).

## What the owner can supply, smallest first

1. **Harris Khan:** a photograph and years of experience, when available (owner said on
   25 Sep 2026 to leave his profile as it is for now).
2. **Optional, per teacher:** two or three sentences on how they teach and which learners
   they suit, in their own words, approved by them.
3. **Introduction videos** (brief below). Profiles already render a lessons section once a
   video is published (D-286); none is shown until one exists.

## Filming brief: 60-90 second teacher introduction

- **Who:** the teacher themselves, on camera, with their written consent to publication.
  Never an AI-generated presenter, voice or "sample lesson" (policy for this site).
- **Content:** name and subject; the qualifications and boards they teach; one thing students
  usually find hard in their subject and how they help; how a trial class with them runs.
  No results claims unless they are separately evidenced.
- **Format:** landscape 1080p, quiet room, clip-on mic, plain background, eye level. One take is
  fine; no music under speech.
- **Delivery:** upload unlisted to the Marlbridge YouTube channel. Send the link and the exact
  spoken words (used as the transcript). Captions are made from that transcript, not
  auto-generated.
- **On the site:** added as a `videos` entry with `publicationState: published`. The player loads
  only on Play (no autoplay, nothing from YouTube before Play, as `/legal/cookies/` states),
  and the transcript shows below it.
