---
title: "IGCSE ICT: Proofing — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 15: Proofing"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 15
syllabusTopics:
  - qualification: "igcse"
    topic: "proofing"
  - qualification: "igcse"
    topic: "proofing"
    subtopic: "software-tools-0417"
  - qualification: "igcse"
    topic: "proofing"
    subtopic: "proofing-techniques-0417"
description: "Original exam-style questions with worked answers on spell check, validation checks, verification, double entry and proofreading for Cambridge IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These questions cover Cambridge IGCSE ICT 0417 Topic 15: software tools for reducing errors (15.1) and proofing techniques (15.2). They test validation checks, the limits of spell checkers, visual verification and double data entry, proofreading for widows, orphans and split tables, and why validation and verification are both needed.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Proofing revision notes](/resources/cambridge-igcse-ict-proofing-revision-notes/) · [Proofing study guide](/resources/cambridge-igcse-ict-proofing-study-guide/)

---

## Section A: short answers

**1.** Name two methods of verification. **[2]**

**2.** State the validation check that ensures a field has not been left blank. **[1]**

**3.** State what is meant by an *orphan* in a document. **[1]**

**4.** Give one reason why automated spell-check suggestions might not be correct. **[1]**

---

## Section B: structured questions

**5.** A school database stores the following data about each student. For each field, name a suitable validation check and give an example of data it would reject. **[6]**

| Field | Example data |
|---|---|
| StudentID | ST04821 |
| Age | 14 |
| Surname | Okafor |

**6.** A clerk copies 500 order forms into a database.

**(a)** Describe how double data entry would be used. **[2]**
**(b)** Give one disadvantage of double data entry. **[1]**
**(c)** The clerk types the quantity 63 as 36. Explain why a range check of 1 to 100 would not detect this error. **[2]**

**7.** A student has written a five-page report. List four errors she should look for when proofreading it, other than spelling. **[4]**

---

## Section C: extended questions

**8.** Explain why both validation and verification are needed when entering data into a system. **[4]**

**9.** A user runs a spell check on a letter that contains the sentence: "Please find the attached from and return it to Mr Nkemelu." Explain the problems the spell checker may cause and how the user should respond. **[3]**

**10.** In a presentation, a table of 12 rows is split over two slides and there is an empty slide at the end. Describe how these should be corrected and why. **[3]**

---

## Worked answers

**1.** Visual checking (1); double data entry (1). **[2]**

**2.** Presence check. **[1]**

**3.** The first line of a paragraph left on its own at the bottom of a page or column, with the rest of the paragraph on the next page or column. **[1]**

**4.** Any one: a correctly spelled but wrong word is not flagged (for example *from* for *form*); names and technical terms are flagged as wrong; the suggestions may not be the intended word; the dictionary language may be different. **[1]**

**5.** Two marks per field (check + rejected example):
- StudentID: format check (two letters followed by five digits) (1); rejects for example 04821ST or S4821 (1). A length check of 7 characters is also acceptable, rejecting ST0482.
- Age: range check, for example 11 to 18 (1); rejects 25 or 3 (1). A type check rejecting "fourteen" is also acceptable.
- Surname: character check, letters only (with hyphen/apostrophe) (1); rejects Ok4for or Okafor! (1). A presence check rejecting a blank field is also acceptable. **[6]**

**6. (a)** Each form is entered twice, often by two different people (1); the computer compares the two versions and reports any differences so they can be checked against the original form (1). **[2]**
**(b)** It takes twice as long / costs more in staff time (or: if both entries contain the same mistake it is not detected). **[1]**
**(c)** 36 is within the range 1 to 100, so it is accepted as reasonable (1); validation cannot tell whether reasonable data is the correct value — only verification against the source would find the transposition (1). **[2]**

**7.** Any four: inconsistent line spacing; blank pages; widows or orphans; inconsistent or incorrect application of styles; tables or lists split over pages or columns; inconsistent character spacing; inconsistent case; transposed numbers. **[4]**

**8.** Up to 4 marks:
- Validation checks that data is reasonable and follows rules, such as a range check (1).
- But data can pass validation and still be wrong, for example a mistyped date that is still a valid date (1).
- Verification checks that data has been copied accurately from the source, by visual checking or double entry (1).
- But verification does not check whether the source data is sensible; an unreasonable value copied accurately would pass (1).
- Using both reduces errors more than either alone (1). **[4]**

**9.** The spell checker will not flag *from*, because it is a correctly spelled word, even though *form* was meant (1); it may flag the name *Nkemelu* as an error and suggest a different word (1). The user should read every suggestion, correct *from* to *form* by proofreading, and ignore (or add to the dictionary) the correct name (1). **[3]**

**10.** Move rows or resize the table (or reduce font size within the house style) so the whole table fits on one slide, or split it in a planned way with headings repeated (1), because a split table is hard to read and compare (1); delete the blank slide so the presentation does not end on an empty screen (1). **[3]**

## Frequently asked questions

**Will I be asked to name a validation check for a given field?**
Yes, this is a common style of question. Name the check, then give an example of data it would accept or reject for that specific field.

**Is a check digit a proofing validation check?**
Check digits are listed under Topic 7 design. The Topic 15 list is range, character, length, type, format and presence checks.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 15 "Proofing" (15.1 Software tools, 15.2 Proofing techniques).
