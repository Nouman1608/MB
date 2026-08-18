# Image source manifest

Tracks provenance for every non-generated image asset published on Marlbridge,
per the v1.x WS3/WS4 rule against hotlinking or undocumented third-party
imagery. Each entry records where an asset actually came from, when it was
retrieved, and the licence basis for reuse.

## Faculty photographs (`public/images/faculty/`)

**Source organisation:** Learners Academy (`https://learnersacademy.com.pk/teachers/`).

**Licence basis:** Learners Academy is the founding academy behind
Marlbridge (stated on Marlbridge's own existing site copy), and the site
owner (Nouman Ahmed) is himself listed on the Learners Academy Teachers page
as both Principal and a named Chemistry teacher. This is same-organisation,
owner-authorized reuse, not an unaffiliated third-party scrape -- recorded as
decision **D-004** in `docs/decision-log.md`. No photographer/creator credit
is given on the source page for any individual photo, so none is fabricated
here.

**Download method:** direct HTTP fetch via Python `urllib.request` with a
descriptive `User-Agent` header, from
`https://learnersacademy.com.pk/teachers/<filename>.jpg`. All 19 files
downloaded 2026-08-18, all 640x640 JPEG.

| Local filename | Platform / source | Source URL | Photographer | Download date | Licence basis | Pages used |
|---|---|---|---|---|---|---|
| nouman-ahmed.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/nouman-ahmed.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/nouman-ahmed/ |
| iftikhar-azeemi.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/iftikhar-azeemi.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/iftikhar-azeemi/ |
| jawad-tariq.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/jawad-tariq.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/jawad-tariq/ |
| hassan.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/hassan.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/hassan/ |
| hina-mogul.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/hina-mogul.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/hina-mogul/ |
| ameer-hamza.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/ameer-hamza.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/ameer-hamza/ |
| harris-zaman.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/harris-zaman.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/harris-zaman/ |
| saad-zai.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/saad-zai.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/saad-zai/ |
| arslan-tanvir.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/arslan-tanvir.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/arslan-tanvir/ |
| sajawal-zahid.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/sajawal-zahid.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/sajawal-zahid/ |
| muhammad-ghazali-siddiqui.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/muhammad-ghazali-siddiqui.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/muhammad-ghazali-siddiqui/ |
| javaid-iqbal-sabri.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/javaid-iqbal-sabri.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/javaid-iqbal-sabri/ |
| zain-ud-din-ahmed.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/zain-ud-din-ahmed.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/zain-ud-din-ahmed/ |
| asif-iqbal.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/asif-iqbal.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/asif-iqbal/ |
| salman-ahmad.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/salman-ahmad.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/salman-ahmad/ |
| lubna-waseem.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/lubna-waseem.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/lubna-waseem/ |
| farheen-zehra.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/farheen-zehra.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/farheen-zehra/ |
| azam-siddique.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/azam-siddique.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/azam-siddique/ |
| aizaz-raoof-ali.jpg | Learners Academy website | https://learnersacademy.com.pk/teachers/aizaz-raoof-ali.jpg | Not stated on source | 2026-08-18 | Same-organisation reuse (D-004) | /authors/aizaz-raoof-ali/ |

## Notes / open follow-up

- No `boardsTaught` value was set on any author record: the source page does
  not break down which exam board each teacher covers, and Marlbridge's own
  board matrix spans five boards (Cambridge, Edexcel, AQA, OCR, OxfordAQA).
  Rather than guess, the field is left empty per-teacher. If the owner can
  confirm per-teacher board coverage later, this manifest and the
  corresponding author files should be updated together.
- Two existing resources (world history, sociology) have no matching
  Learners Academy teacher and were deliberately left assigned to
  `marlbridge-academic-team` rather than given a fabricated match.
