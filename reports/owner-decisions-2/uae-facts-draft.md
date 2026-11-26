# UAE facts draft (D-543g, item 15) - for owner approval

Date read: 2026-11-26. Nothing here is on the site. Not edited in src.
Pointers: `src/data/markets.ts` (the `uae` entry: intro/not-taught paragraph, FAQ list) and `reports/audit3/A2.md` "Region pages: facts each page could add" (row /uae/: share of British-curriculum schools; academic year dates; KHDA / ADEK ratings context).

## Source status

| Source | Status |
|---|---|
| https://web.khda.gov.ae/en/Resources/KHDA-data-statistics | UNREACHABLE (HTTP 403) |
| KHDA Schools landscape infographic 2025-26 (web.khda.gov.ae getattachment ... Schools_landscape_infographic_2025-26_EN.pdf.aspx) | UNREACHABLE (HTTP 403). A web-search result snippet quoted it (388,731 students, 227 schools, "accurate as of June 2026") but the page was not read, so it is NOT used below. |
| KHDA inspection key findings 2023-24 report | UNREACHABLE (owner link; KHDA host returns 403; not retrievable) |
| KHDA news pages (web.khda.gov.ae/en/About-Us/News/2025/...) | UNREACHABLE (HTTP 403) |
| https://www.adek.gov.ae/en/Education-System/Education-Policies/School-Policies | READ |
| ADEK School Curriculum Policy PDF, https://www.adek.gov.ae/-/media/Project/TAMM/ADEK/Policies/School-Policies/Teaching-and-Learning/ADEK_S_Curriculum-Policy_EN_v1_2.pdf | READ (the link on the ADEK page works; it is not 404 from here. The owner's 404 was probably a different URL) |
| https://mediaoffice.ae/en/news/2025/january/09-01/dubais-private-school-sector (Dubai Government Media Office, citing KHDA data) | READ (secondary to KHDA; says it is KHDA data) |
| https://mediaoffice.ae/en/news/2025/august/24-08/dubai-academic-year (Dubai Media Office) | READ |

Dubai figures below are for 2024-25 and August 2025, not the latest year (2025-26 infographic could not be read). Label them with their year if used.

## Facts

### F1. Dubai private-school enrolment, 2024-25
- Sentence: Dubai's private schools had 387,441 students across 227 schools in 2024-25.
- Source: https://mediaoffice.ae/en/news/2025/january/09-01/dubais-private-school-sector
- Quote: "reaching a total of 387,441 students across 227 private schools" (enrolment up 6% in 2024-25).
- Read: 2026-11-26 (page dated 9 January 2025; attributed there to KHDA).
- Where: /uae/ intro or a new "Schools in the UAE" paragraph (markets.ts `uae`). Caveat: a later figure exists but was unreadable; state the year.

### F2. Share of Dubai students by curriculum, 2024-25
- Sentence: In Dubai's private schools the UK curriculum is the most popular, with 37% of students, followed by Indian (26%), US (14%), International Baccalaureate (7%) and UK/IB (4%).
- Source: https://mediaoffice.ae/en/news/2025/january/09-01/dubais-private-school-sector
- Quote: "The UK curriculum is the most popular, with 37% of students. Indian (26%), US (14%), International Baccalaureate (7%), and UK/IB hybrid (4%) follow." (17 curricula in total.)
- Read: 2026-11-26.
- Where: /uae/ page; answers the A2 gap "share of British-curriculum schools". Note it is a share of students, not of schools, and "UK" is not split by board (Cambridge/Edexcel/AQA is NOT available from any readable source).

### F3. Number of curricula offered in Dubai
- Sentence: Dubai private schools offer 17 curricula.
- Source and quote: same page as F1/F2 ("Schools offer 17 curricula").
- Where: /uae/ FAQ context.

### F4. Dubai new schools for 2025-26 are mostly UK curriculum
- Sentence: Of six new Dubai private schools announced in August 2025, five follow the UK curriculum and one the French curriculum.
- Source: https://mediaoffice.ae/en/news/2025/august/24-08/dubai-academic-year
- Quote: five UK-curriculum schools named, one French ("Lycee Francais International School in Mudon"); page dated Sunday 24 August 2025. The page also gives "233 schools" as the current sector total.
- Read: 2026-11-26.
- Where: optional; low value for tutoring. Note F1 (227) and this page (233) differ in date; do not mix.

### F5. Abu Dhabi: MoE subjects are compulsory in every school, whatever the curriculum
- Sentence: ADEK requires all Abu Dhabi private schools, whatever their curriculum, to teach the UAE Ministry of Education (MoE) subjects, and exemptions are not authorised.
- Source: ADEK School Curriculum Policy v1.2 (September 2025), section 7.2 and 7.4, PDF above.
- Quote: "All schools, regardless of curriculum, shall teach the MoE subjects as per the MoE requirements." and "Exemptions from the requirements of teaching MoE subjects are not authorized."
- Read: 2026-11-26.
- Where: /uae/ not-taught paragraph in markets.ts (which already says Marlbridge does not teach the UAE Ministry of Education curriculum): the new sentence explains why families still need school-based MoE subjects alongside Marlbridge. Needs owner approval of wording; do not imply Marlbridge replaces MoE subjects.

### F6. Abu Dhabi: MoE subjects defined
- Sentence: ADEK defines MoE subjects as the mandatory subjects that all private and charter schools in the UAE must teach under the Ministry of Education's requirements.
- Quote: "The mandatory subjects that all private and charter schools in the UAE are required to teach as per the Ministry of Education's requirements."
- Where: same as F5 (support). The policy does not list the subjects in the text read, so no subject list is claimed.

### F7. Abu Dhabi: external exam bodies are recognised through school affiliation
- Sentence: ADEK's curriculum policy defines affiliation as a school being approved to offer specific external exams, naming Cambridge Education as an example.
- Quote: "A school's association with an external body whereby they are approved to offer specific external exams (e.g., Cambridge Education, CBSE, Kerala, etc.)."
- Where: /uae/ (Abu Dhabi context). Does not give any board share.

### F8. ADEK policy dates
- Sentence: ADEK's Curriculum Policy took effect in Academic Year 2024/25 (Fall term), with compliance from 2025/26 (Fall term).
- Source: ADEK School Policies page and PDF page 1 ("Effective From AY 2024/25 (Fall term); Compliance From AY 2025/26 (Fall term)").
- Where: only if F5 is used, to date the rule.

## Not found / could not be read
- KHDA 2025-26 landscape figures, KHDA inspection key findings 2023-24 (ratings distribution), KHDA data and statistics page: 403, unreachable. Owner would need to paste text or save the PDFs locally.
- Cambridge vs Edexcel vs AQA split in UAE schools, Dubai and Abu Dhabi term dates (ADEK has a Calendar and Public Holidays policy PDF listed at /-/media/Project/TAMM/ADEK/Policies/School-Policies/Governance-and-Operations/ADEK_S_Calendar-and-Public-Holidays-Policy_EN.pdf; not read, could be the next fetch).
