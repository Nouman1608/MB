<!--
DRAFT FOR THE OWNER'S REVIEW. NOT PUBLISHED.
Audit 3, item 45 (A5, 25 Nov 2026 PKT). A rewrite of
src/content/articles/ib-tuition-in-singapore-online.md. It lives outside src/content, so the site
does not build it. To publish: review, replace every [SOURCE NEEDED] / [NEEDS OWNER] line with a
sourced fact or delete the sentence, then copy the body over the article's body (keep its front
matter, add a dated reviewNote line if it is re-reviewed) and update reviewedDate.

What is local and where each fact comes from (every fact below is one of these, or a placeholder):
  S1  Singapore time is UTC+08:00 (Singapore Standard Time), no daylight saving: Wikidata Q334
      (Singapore), P421 time zone -> Q6985 "UTC+08:00", Q3244578 "Singapore Standard Time",
      Q63285957 "Asia/Singapore", read 25 Nov 2026; also src/data/markets.ts (utcOffsetHours: 8).
      Lahore is UTC+5 (Pakistan Standard Time), so Singapore is 3 hours ahead all year
      (src/data/markets.ts FAQ, existing article).
  S2  Singapore's official languages are English, Malay, Standard Chinese (Mandarin) and Tamil:
      Wikidata Q334, P37 official language -> Q1860, Q9237, Q727694, Q5885 (start time 9 Aug 1965),
      read 25 Nov 2026.
  S3  Which Marlbridge pages visitors from Singapore actually read: docs/decision-log.md D-415
      (GA4 BigQuery, 1 Jul to 9 Oct 2026, Singapore sessions with 5 s or more of engagement: about
      21, landing mostly on IB DP Computer Science, Mathematics AA, Economics, ESS, IB MYP and
      A Level resources) and src/data/markets.ts `searchedHubs` (the matching taught course pages).
      ESS has no classes (matrix.ts, D-270).
  S4  What is not taught (PSLE, Singapore-Cambridge GCE O/N/A-Level, SEC): src/data/markets.ts
      `notOffered` (D-415).
  S5  WhatsApp replies within an hour, 8am to 11pm Pakistan time, every day; email the same day:
      owner decision D7 (audit 3 brief), and the live resource pages (checked 25 Nov 2026:
      "WhatsApp replies within an hour (8am–11pm Pakistan time, every day); email the same day").
      8am to 11pm PKT is 11am to 2am the next day in Singapore (S1).
  S6  IB Language B assessment outline (Paper 1 writing 30 marks; Paper 2 listening 25 marks and
      reading 40 marks; Individual Oral 30 marks): src/data/academic/assessments.ts, 'DP Language B',
      read from the IB Language B guide (first assessment 2020), verified 2026-09-21.
  S7  Subjects taught, one-to-one 1-hour IB classes, fees shown in Singapore dollars as indicative
      conversions: the current article and src/data/markets.ts (D-415, D-416).

Not reachable from the audit container, so not used: ibo.org (Cloudflare challenge, HTTP 403 on
every page tried, including /about-the-ib/facts-and-figures/ and /programmes/find-an-ib-school/),
moe.gov.sg, school websites, SEAB.

Changes from the published article: it no longer shares the network-wide sentences ("Every class is
taught live online by a named subject teacher from our academy in Lahore", "Marlbridge has no
office, branch or teacher in ...", "Before the trial class", "Bring a recent test ..."); the
reply-hours sentence follows D7; the opening is built on what Singapore visitors read (S3) rather
than a general claim about "many international schools"; the language section is new (S2, S6).
-->

---
title: "IB in Singapore: planning online Diploma and MYP lessons around UTC+8"
excerpt: "For IB families in Singapore: the IB courses Singapore visitors read most on Marlbridge, how one-to-one lessons fit Singapore's time zone, IB languages in a four-language country, and what tuition must not do."
---

Our own site analytics give a small but real picture of what IB families in Singapore look for.
Between July and early October 2026, the visits from Singapore that stayed longer than five
seconds (about 21 of them, with automated traffic removed) landed mostly on IB Diploma pages
(Computer Science, Mathematics: Analysis and Approaches, Economics, Environmental Systems and
Societies), on IB MYP pages, and on A Level resources. This guide starts from those courses.

[SOURCE NEEDED: how many IB World Schools in Singapore offer the Diploma Programme and the Middle
Years Programme, and when that count was taken. Where: ibo.org "Find an IB World School", filter
Country = Singapore, programme DP and MYP. ibo.org was unreachable from the audit environment.]

## The courses Singapore visitors read most

The taught course pages that match those visits:

- [IB DP Mathematics: Analysis and Approaches](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)
- [IB DP Computer Science](/boards/ib/ib-dp/computer-science/)
- [IB DP Economics](/boards/ib/ib-dp/economics/)
- [IB MYP Language Acquisition](/boards/ib/ib-myp/myp-language-acquisition/)
- [Cambridge A Level Chemistry](/boards/cambridge/a-level/chemistry/)
- [Pearson Edexcel A Level Economics](/boards/edexcel/a-level/economics/)

(Environmental Systems and Societies is not listed: its [course page](/boards/ib/ib-dp/environmental-systems-and-societies/)
and free resources are published, but no classes are offered in it at the moment.) Each page
sets out the official syllabus or subject guide, how the course is assessed, and free
study material. The other IB Diploma and MYP subjects we teach are listed on the
[IB board page](/boards/ib/) and the [Singapore page](/singapore/).

## Lessons in Singapore time

Singapore keeps Singapore Standard Time, UTC+8, all year, with no change of clocks. Our teachers
are in Lahore, on Pakistan time (UTC+5), so Singapore is always three hours ahead:

| In Singapore | In Lahore |
| --- | --- |
| 4:00 pm, after school | 1:00 pm |
| 7:00 pm | 4:00 pm |
| 2:00 pm Saturday | 11:00 am Saturday |

IB lessons are one-to-one, so the time is set around your child's timetable, co-curricular
activities and weekend.

Messages: WhatsApp replies come within an hour between 8am and 11pm Pakistan time, which is 11am
to 2am in Singapore. Emails are answered the same day.

[SOURCE NEEDED: the IB's May 2027 examination schedule and the time zone the IB places Singapore
in, so the guide can say when papers start in Singapore and plan the last weeks of lessons around
them. Where: the IB's published examination schedule (ibo.org) or the school's IB Diploma
coordinator.]

[SOURCE NEEDED: the date and time IB Diploma results are released for the May 2027 session,
converted to Singapore time. Where: ibo.org results information.]

## IB languages in a four-language country

Singapore has four official languages: English, Malay, Mandarin Chinese and Tamil. For IB
students that often means a choice between taking a language as Language A (studied as literature
or language and literature) or as Language B (an
acquired language).

[SOURCE NEEDED: which of Singapore's IB schools offer Chinese, Malay or Tamil as Language A or
Language B. Where: each school's DP course list; ibo.org school pages.]

Language B is assessed the same way at Standard and Higher Level, except for the complexity of
the language required: Paper 1 is one writing task (30 marks); Paper 2 is listening (25 marks)
and reading (40 marks); and the Individual Oral (30 marks) is marked by the teacher and moderated
by the IB. A tutor can help with each part, including practice for the oral.

[NEEDS OWNER: which languages Marlbridge teaches for DP Language B and MYP Language Acquisition.
The course pages do not name them, so this guide does not either.]

## Internal assessments and the Extended Essay

Internal assessments, the Extended Essay and MYP projects must be the student's own work, under
the IB's academic integrity rules. A tutor can teach the subject and explain what each assessment
criterion asks for; the writing stays the student's, and the school's supervisor stays
responsible for guidance on the piece itself.

## Not the national system

We do not teach the Singapore national curriculum or its examinations: the PSLE, the
Singapore-Cambridge GCE O-Level, N-Level and A-Level, or the Singapore-Cambridge Secondary
Education Certificate (SEC). These are different examinations from the Cambridge International
IGCSE, O Level and AS & A Level that international schools teach, which we do teach.

## Fees and the first lesson

IB lessons are 1 hour, one-to-one, charged per lesson. The [Singapore page](/singapore/) shows the
fee in Singapore dollars as an indicative conversion; the exact fee is confirmed in writing before
any payment.

For the [free trial class](/trial/), tell us the programme (DP or MYP), the subject and, for the
Diploma, Higher or Standard Level, and send the last piece of marked work with the teacher's
comments. Every lesson is taught live online from our Lahore academy.

[SOURCE NEEDED: Singapore international schools' academic year and term dates for 2026-27, if the
owner wants a section on when families usually start tuition (for example after first-semester
reports). Where: each school's published calendar. Delete this section if not sourced.]
