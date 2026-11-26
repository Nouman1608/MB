# Brand listings text and Dawn pitch outline (item 17, D-546i)

Date: 26 Nov 2026. Branch owner-decisions-3. **Nothing has been submitted, no account made, nobody contacted.** Each submission needs the owner's yes first (D-546i). A paid listing must be `rel="sponsored"`; do not ask a publisher to change that. Company facts below come only from `src/data/site.ts` and `src/pages/about/index.astro`. No founding year, teacher count, student number, review count or accreditation is stated, because none is recorded on the site.

## 1. One set of details, used everywhere

| Field | Text |
|---|---|
| Business name | Marlbridge |
| Website | https://marlbridge.com |
| Address | None. Do not give a street address on any listing. (If a form insists on a location, enter "Lahore, Pakistan", which is the city and country recorded in `site.about`; the owner confirms first.) |
| Contact | Only what the owner approves for each form. The WhatsApp line on the site is `+92 323 9149918` (`site.whatsapp.display`). |
| Category | Online tutoring / education (IGCSE, O Level, A Level, IB). Choose the closest category the directory offers. |
| Logo | `public/images/brand/marlbridge-horizontal.png` (or `marlbridge-mark.png` for a square slot) |

**1-sentence description (use verbatim):**
> Marlbridge offers live online tutoring for learners anywhere, taught from Pakistan, alongside a free study library for the international curricula studied across the Gulf, South Asia and the UK.

Source: `site.defaultDescription` ("Live teaching from Pakistan. Online tutoring for learners anywhere. A free study library built for the international curricula studied across the Gulf, South Asia, the UK and beyond.").

**3-sentence description (use verbatim):**
> Marlbridge offers live online tutoring for learners anywhere, taught from Pakistan, alongside a free study library for the international curricula studied across the Gulf, South Asia and the UK. Marlbridge is the international branch of Learners Academy, teaching students around the world. The first trial class is free.

Sources: `site.defaultDescription`; `site.founding`; `PRICING_TERMS.freeTrial` in `src/data/pricing.ts`. If a directory bans promotional wording, drop the third sentence rather than rewording it.

Do not add: "best", "leading", "trusted by", "years of experience", pass rates, grades, prices or discounts.

## 2. Submission-by-submission

All four submit the same name, description and URL above.

### Edarabia (edarabia.com)
- **Route** (from `reports/owner-decisions-2/brand-mentions-ranked.md`, not re-checked today): "Add your Business" form (edarabia.com/register/?reg=active), or "Claim Listing" if a page already exists; email admin@edarabia.com.
- **Owner must supply or confirm:**
  1. Whether there is a fee or a paid "featured" tier, and whether the owner will accept a paid listing (it must then be `rel="sponsored"`). The page showed no price.
  2. Which countries to list for (UAE, Qatar; the site has `/uae/` and `/qatar/` pages) and the exact category names Edarabia uses.
  3. **Gulf advertising rules:** whether advertising paid tuition in the UAE or Qatar needs a licence or approval. This was not verified in the research; the owner must confirm before listing for either country.
  4. Which contact details to show (email or WhatsApp, no street address) and who answers enquiries.
  5. Fees: the site does not publish fees in listing text. Ask whether the form requires a fee figure; if it does, the owner supplies the current figure from `/pricing/` and approves it. Do not enter any figure from this document.
  6. Safeguarding: whether the form asks for a child-safeguarding or background-check statement. None is recorded on the site, so the owner must say what is true.

### The Tutors' Association (thetutorsassociation.org.uk)
- **Route:** "Join Us" on the membership page; there is also an "International Membership" page. Price and rules were not read.
- **Owner must supply or confirm:**
  1. Which membership type applies to a business teaching from Pakistan, and its fee and renewal terms (the owner decides whether to pay).
  2. **Membership rules:** the association's code of conduct, safeguarding policy and any enhanced DBS-check requirement (the research saw a DBS check service mentioned). Whether Marlbridge's teachers can meet it, and what evidence exists. The site records no DBS or safeguarding policy, so none may be claimed.
  3. Whether membership is for individuals or companies, and who the member of record is (a named person from Marlbridge or Learners Academy).
  4. Any insurance, qualification or reference requirement.
  5. Whether a member listing gives a link, and what kind: the association controls this; record it as given.
  6. Use of the association's name or logo on the Marlbridge site only after written permission.

### Expatica directory (expatica.com)
- **Route:** "add your service" for service providers (route to confirm on the site; seen on its tutoring pages for Qatar, UAE and Saudi).
- **Owner must supply or confirm:**
  1. Fee, paid upgrade or free listing, and the link type (paid placement must be `rel="sponsored"`).
  2. Which country sections to appear in and the audience framing: British and international curricula for families abroad, without claims about results.
  3. **Gulf advertising rules** for each country chosen (as above).
  4. Contact details and response times, consistent with `PRICING_TERMS.enquiryResponse`.
  5. Fees and safeguarding statements: same as Edarabia items 5 and 6.

### Dawn (dawn.com): guest article, see section 3
- **Route** (per the ranked list, dated 2019 and to be reconfirmed): email the Prism or opinion desk with a pitch or finished piece, short bio, original and unpublished, one desk only; no reply in 10 days means it may be offered elsewhere.
- **Owner must supply or confirm:** the named teacher, their bio, the desk, and that the editorial route and email on dawn.com are still current.

## 3. Dawn guest article: pitch outline (not brand copy)

Rules: editorial, written for readers, not an advertisement. The teacher is the author. One bio link at most, brand name only, no keyword anchor text. No fees, no free-trial promotion, no company claims in the body. The bio may say the teacher teaches at Marlbridge only if the owner confirms the wording.

**Author:** [TEACHER NAME, to be supplied by the owner], [subject and level taught, to be supplied], [short bio to be supplied and confirmed by the teacher: qualifications and experience only if the teacher can state them].

**Working title (placeholder):** Preparing for Cambridge O Level and IGCSE: what families can do before the exam series.

**Angle:** a practical guide for Pakistani families whose children sit Cambridge O Level or IGCSE in the May/June or October/November series. It explains how exams are marked, how to use past papers, and how to plan revision, so that parents can support without needing to teach the subject.

**Outline (about 800 to 1,000 words; the target length is for the owner to confirm against Dawn's guidance):**
1. **Opening, the problem.** Rereading notes feels like revision but measures familiarity. Source on this site: `src/content/articles/how-to-revise-for-a-science-examination.md`.
2. **Revise from the specification, not the textbook.** Mark each statement confident, shaky or not yet learned. Same source.
3. **Retrieve before you review.** Blank page, check and correct, then timed questions at about a minute a mark. Same source.
4. **Use past papers late and mark them honestly.** Mark against the official mark scheme; method often carries credit; write one of three causes for each lost mark. Source: `src/content/articles/understanding-mark-schemes-and-examiner-reports.md`.
5. **Know the series.** Cambridge O Level can be sat in May/June or October/November; spreading subjects across the two affects preparation time. Source: `src/content/articles/o-level-june-or-november-exam-series.md`. Dates only from Cambridge's own published documents, read again on the day.
6. **What parents can do.** Ask the school which tier or syllabus code a subject is entered under; keep a calendar; do not set aside the weak topic. Source: `src/content/articles/igcse-or-o-level-which-should-my-child-take.md`.
7. **Close.** One practical week-by-week suggestion from the teacher's own experience (the teacher supplies it; nothing invented).

**Every factual sentence in the finished piece needs a named source** (Cambridge document, syllabus or the published site article above), and each source is re-read before sending. Any statistic about Pakistani students or results requires a published source; none is used here.

**Before sending (owner):** the teacher's name, bio and consent to be named; a decision on the bio link (`https://marlbridge.com`, brand-name anchor); Dawn's current submission guidance; whether any reply or payment terms apply. Nothing is sent until the owner says yes.

## 4. What the owner must decide, in one list

1. Which of Edarabia, The Tutors' Association, Expatica and Dawn to proceed with, in what order.
2. Whether any listing may be paid (then `rel="sponsored"`).
3. Gulf advertising rules for UAE and Qatar: the owner confirms; not verified here.
4. Safeguarding and background-check position (what is actually true and documented), needed for The Tutors' Association and possibly the directory forms.
5. Contact details to show (no street address) and who answers.
6. A named teacher and bio for the Dawn article.
7. Approval of the two descriptions in section 1 as the permanent wording.
