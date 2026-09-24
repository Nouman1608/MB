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
| Years of experience | 18 of 20 | Harris Khan, Lubna Waseem |
| Previous schools | 17 of 20 | Harris Khan, Harris Zaman, Lubna Waseem |
| **Exam boards taught** | **0 of 20** | all (`boardsTaught` is empty; the faculty listing does not break coverage down by board) |
| **Qualifications taught** | **0 of 20** | all (`qualificationsTaught` is empty, for the same reason) |
| Teaching approach, learner needs suited | 0 of 20 (beyond the one-line bio) | all |
| Formats and fees | 20 of 20, from the site-wide pricing data (added to every profile on 25 Sep) | none |
| Availability | Site-wide statement only (D-311: "teachers are available 24/7") | per-teacher availability is not recorded |
| Testimonials or results per teacher | 0 of 20 | all (no per-teacher evidence with permission exists) |
| Teaching video or introduction | 0 of 20 (`src/content/videos` holds only the unpublished template) | all |

Because boards and levels are not recorded, profiles do **not** say which boards a teacher
covers, and resource and hub pages do **not** link a named teacher to a board-specific course.
The trial form treats a named teacher as a preference that staff check (see
`docs/operations/trial-follow-up.md`).

## What the owner can supply, smallest first

1. **Boards and levels per teacher.** For each teacher, the qualifications (IGCSE, O Level,
   A Level, IB…) and boards (Cambridge, Edexcel, AQA…) they currently teach. With that,
   profiles list them, and resource and hub pages can suggest a teacher for that exact course.
2. **Harris Khan:** a photograph, and years of experience if he wants it shown.
3. **Lubna Waseem:** years of experience, if she wants it shown.
4. **Optional, per teacher:** two or three sentences on how they teach and which learners
   they suit, in their own words, approved by them.
5. **Introduction videos** (brief below). Profiles already render a lessons section once a
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
