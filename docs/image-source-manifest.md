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
| naqiya-yousaf.jpg | Supplied by Nouman Ahmed, owner (chat, 15 Nov 2026): a Beaconhouse College Programme Sociology promotional graphic of Ms Naqiya Yousaf. Photo area cropped (330x330 px, clear of the graphic's text and frame) and resized to 640x640; replaces the earlier lower-resolution copy from PR #118 (16 Oct 2026) | Not a URL (file supplied directly) | Not stated on source | 2026-11-15 | Owner-supplied photograph of a member of staff; owner takes responsibility (D-468) | /authors/naqiya-yousaf/ and teacher cards |
| ammar-bilal.jpg | Supplied by Nouman Ahmed, owner. The file added in PR #118 (16 Oct 2026) is a square crop of the photograph the owner re-sent on 15 Nov 2026 (991x1280 px); the site copy was confirmed to match and was not changed | Not a URL (file supplied directly) | Not stated on source | 2026-10-16 (re-confirmed 2026-11-15) | Owner-supplied photograph of a member of staff; owner takes responsibility (D-471) | /authors/ammar-bilal/ and teacher cards |
| farhat-ul-ain-sehgal.jpg | Added in PR #150 (8 Nov 2026). The image is deliberately pixelated so the teacher cannot be identified; owner confirmed this is intended on 15 Nov 2026. Original source not recorded | Not recorded | Not stated | 2026-11-08 | Owner-supplied; pixelation intended (D-471) | /authors/farhat-ul-ain-sehgal/ and teacher cards |

### Derived WebP copies (D-457)

Each JPEG above, and every other JPEG in `public/images/faculty/`, has two
smaller WebP copies beside it: `<name>-128.webp` and `<name>-224.webp`. They
are not separate source images. `scripts/generate-faculty-webp.mjs` makes
them from the local JPEG with `sharp` (resize to 128 px and 224 px wide,
WebP quality 80): no crop, no retouching, no other edit. First generated
2026-11-15. The JPEG originals are kept unchanged and remain the record for
source, date and licence basis; the pages serve the WebP copy with the JPEG
as the fallback, and the Person schema still names the JPEG. After adding or
replacing a JPEG, run the script again
(`node scripts/generate-faculty-webp.mjs --check` reports a missing copy).

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
