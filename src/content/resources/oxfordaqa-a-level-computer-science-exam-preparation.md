---
title: "OxfordAQA International A-Level Computer Science: On-Screen Programming Papers vs Written Theory Papers (9645)"
resourceType: "exam-preparation"
subject: "computer-science"
level: ["a-levels"]
topic: "Exam preparation -- AS Papers 1-2 and A-level Papers 1-2"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "For first teaching September 2024"
order: 3
description: "How OxfordAQA International A-Level Computer Science 9645's two on-screen programming papers differ in preparation from its two written theory papers, plus a worked trace-table routine."
author: "marlbridge-academic-team"
publishedDate: 2026-09-09
featured: false
---

OxfordAQA International A-Level Computer Science (9645) splits its four papers into two distinct
formats. AS Paper 1 and A-level Paper 1 are on-screen programming exams, written in one of C#, Python or
VB.Net, covering procedural and object-oriented programming, data structures and algorithms. AS Paper 2
and A-level Paper 2 are written exams covering theory: computer systems, architecture and machine code
at AS; functional programming, computation theory, networking, databases and AI at A-level. AS papers
are each 20% of the full A-level; A-level papers are each 30%. This is a recently revised specification
-- first teaching September 2024, first AS exams May/June 2025, first A-level exams May/June 2026 --
already examined at both levels as of this record's verification. These notes complement the site's
guides to [Procedural Programming](/resources/a-level-oxfordaqa-computer-science-procedural-programming/)
and [Static vs Dynamic Data Structures and Arrays](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/).

## The on-screen and written papers need genuinely different revision

Programming papers reward fluency in writing and debugging working code under time pressure in the
exam's programming environment; theory papers reward precise technical vocabulary and written
explanation with no code to fall back on. **Exam-preparation priority**: prepare for the two formats
separately rather than assuming strong coding ability alone will carry the written theory papers, or
vice versa.

## On-screen papers demand real practice in the exam environment

AS Paper 1 is 2 hours for 75 marks; A-level Paper 1 steps up to 2 hours 30 minutes for 90 marks, in the
same on-screen format. **Exam-preparation priority**: practise writing and running code specifically
under timed, on-screen exam conditions -- reading about algorithms is not a substitute for typing and
debugging them against the clock.

## Written theory papers reward exact terminology

AS Paper 2 (90 minutes, 75 marks) and A-level Paper 2 (90 minutes, 75 marks) are marked on written
explanation, where vague or approximate technical language costs marks that precise definitions would
earn. **Exam-preparation priority**: drill exact definitions for core terms -- register, bus, protocol,
normalisation -- rather than relying on a general sense of what they mean.

## A-level Paper 2's content is a wide net: functional programming to AI

A-level Paper 2 covers functional programming, theory of computation, networking and cyber security,
databases, and artificial intelligence in a single 90-minute paper -- five distinct topic areas.
**Exam-preparation priority**: build a topic-by-topic checklist for this paper specifically, since its
breadth makes it easy to under-revise one area while feeling confident overall.

## Worked routine: tracing an algorithm by hand before trusting it

The routine below is an original model written for this resource, not a reproduction of any official
past paper or mark scheme.

```
Step 1 - draw a trace table with one column per variable:
Include a column for any output produced, not just the variables.

Step 2 - step through the algorithm line by line:
Update only the variables that line actually changes -- resist
updating ahead.

Step 3 - record output at the exact line it is produced:
Not at the end of the trace -- ordering matters for full marks.

Step 4 - check the final row against the algorithm's stated
purpose:
Does the traced result match what the algorithm claims to compute?

Step 5 - if it doesn't match, re-trace from the first discrepancy:
Not from the start -- find precisely where the trace diverged from
what you expected.
```

Step 4 is the check most candidates skip under time pressure, and it is the fastest way to catch a
mistracked variable before it costs marks on a written explanation built on the wrong trace.

## Before/during exam checklist

- **Before the exams**: practise coding under timed, on-screen conditions specifically for Papers 1;
  drill exact technical definitions for the written Papers 2; build a topic checklist for A-level Paper
  2's five distinct content areas.
- **During a programming paper**: trace code by hand before trusting it works, using a full variable
  trace table.
- **During a theory paper**: use precise technical terms throughout, not approximate everyday language.

## Self-test

1. How do the on-screen and written papers differ in what they reward?
2. Why should programming revision happen under timed, on-screen conditions specifically?
3. What five topic areas does A-level Paper 2 cover in a single 90-minute paper?
4. What should you check at the end of a hand-traced algorithm?

**Answers:** 1. The on-screen papers reward fluent, working code under time pressure; the written papers
reward precise technical vocabulary and explanation with no code available. 2. Because reading about
algorithms does not train the specific skill of writing and debugging code against the clock in the
actual exam environment. 3. Functional programming, theory of computation, networking and cyber
security, databases, and artificial intelligence. 4. Whether the traced final result actually matches
what the algorithm claims to compute -- and if not, re-trace from the first point of discrepancy.

*Written against the assessment section of OxfordAQA's own International AS/A-level Computer Science
(9645) qualification page (official OxfordAQA page, verified 2026-08-28); the paper formats, languages,
timings and weightings (20/20/30/30) are exactly as the board's own Assessment section states them. The
trace-table routine above is an original model written for this resource, not a reproduction of any
official past paper or mark scheme. Always check the current specification for your examination series
at [oxfordaqa.com](https://www.oxfordaqa.com/qualifications/international-as-a-level-computer-science/).*
