---
title: "IGCSE ICT: Proofing — Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE ICT 0417 Topic 15: spell and grammar checks, validation checks, visual verification, double data entry and proofreading."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Proofing in Cambridge IGCSE ICT 0417 (Topic 15) is about reducing errors: using spell and grammar checkers sensibly, using validation routines to stop unreasonable data being entered, verifying data by visual checking or double data entry, and proofreading documents for layout and consistency errors. You must also explain why validation and verification are both needed, a frequent Paper 1 question.

Condensed for revision. For the full explanation, use the
[proofing study guide](/resources/cambridge-igcse-ict-proofing-study-guide/), then try the
[proofing practice questions](/resources/cambridge-igcse-ict-proofing-practice/).

## Syllabus coverage

| Syllabus ref | Be able to | Know and understand |
|---|---|---|
| 15.1 Software tools | Use spell check and grammar check and make appropriate changes; use validation routines to minimise data entry errors | Spell check suggestions are not always correct; importance, characteristics and uses of range, character, length, type, format and presence checks |
| 15.2 Proofing techniques | Visual verification: correct transposed numbers, incorrect spelling, inconsistent character spacing, inconsistent case. Proofread: correct inconsistent line spacing, remove blank pages/slides, remove widows/orphans, fix inconsistent or incorrect styles, keep tables and lists from splitting over columns or pages/slides | Importance, characteristics and uses of verification (visual checking, double data entry); the need for validation as well as verification |

## 15.1 Why can't you trust a spell checker completely?

Spell check compares words with a dictionary and suggests corrections, but:

- A correctly spelled wrong word is not flagged (*their* / *there*, *form* / *from*).
- Names, technical terms and words in another language may be flagged even though they are right.
- The first suggestion may not be the word you meant.
- The dictionary language may be wrong (for example US instead of UK spelling).

Grammar check finds some errors (for example subject–verb agreement) but can also suggest changes that alter the meaning. **Always read the suggestion before accepting it.**

## Validation checks

**Validation** is an automatic check by the computer that data entered is **reasonable and sensible** and follows set rules. It cannot tell whether the data is correct.

| Check | What it checks | Example |
|---|---|---|
| Range check | Value is between a lower and upper limit | Percentage between 0 and 100 |
| Character check | Only permitted characters are present | A surname contains no digits or symbols other than hyphen or apostrophe |
| Length check | Number of characters is exact or within limits | Password of at least 8 characters |
| Type check | Data is the correct data type | Quantity is a number |
| Format check | Data matches a pattern | Postcode or a date in DD/MM/YYYY form |
| Presence check | Data has been entered; field is not blank | Email address is required |

## 15.2 What is verification?

**Verification** checks that data has been **copied or entered accurately** from the source.

| Method | How it works | Limitation |
|---|---|---|
| Visual checking | The person compares the entered data with the source document on screen or paper | Slow; the checker can miss errors, especially if tired |
| Double data entry | Data is entered twice (often by two people); the computer compares the two and flags differences | Takes twice as long; if both entries have the same mistake it is not found |

### Why are both validation and verification needed?

- Validation can accept data that is reasonable but **wrong** — a date of birth typed as 12/05/2009 instead of 21/05/2009 passes a format check.
- Verification can confirm data was copied accurately, even when the **source itself was unreasonable** — an impossible value copied faithfully would pass.
- Used together they catch more errors: validation stops unreasonable data, verification stops copying mistakes.

## Visual verification: errors to find

| Error | Example |
|---|---|
| Transposed numbers | 1532 typed as 1352 |
| Incorrect spelling | "recieve" for "receive" |
| Inconsistent character spacing | Two spaces after some full stops and one after others |
| Inconsistent case | "Price", "price" and "PRICE" used for the same heading |

## Proofreading a document: what to check

- **Inconsistent line spacing** between similar paragraphs.
- **Blank pages or blank slides** that should be removed.
- **Widows and orphans**: a widow is the last line of a paragraph left alone at the top of a new page or column; an orphan is the first line of a paragraph left alone at the bottom of a page or column. Remove them by adjusting breaks or using the widow/orphan control setting.
- **Inconsistent or incorrect application of styles** — every heading should use the heading style.
- **Tables and lists split** across columns, pages or slides — keep them together.

## Worked example: validation or verification?

*A clerk types a customer's phone number, 07700 900123, as 07700 900132.*

- A **length** or **format** check will accept it: it still has the right number of digits.
- Only **verification** (visual check against the form, or double entry) would find the transposed digits.

## Common mistakes and exam traps

- Saying validation checks that data is "correct". It checks that data is reasonable.
- Calling double data entry a validation check. It is a verification method.
- Describing a check without giving an example linked to the field in the question.
- Mixing up widows and orphans, or not knowing they relate to page and column breaks.
- Accepting every spell-check suggestion in the practical papers, including changing correct names.

## Frequently asked questions

**What is the difference between validation and verification?**
Validation is an automatic check that data is reasonable and follows the rules, such as a range check. Verification checks that data has been entered exactly as it appears in the source, by visual checking or double data entry.

**Why is a spell checker not enough to proofread a document?**
It only finds words that are not in its dictionary. Real words used wrongly, inconsistent spacing or case, and layout errors such as widows and split tables must be found by proofreading.

**Which check would stop a field being left blank?**
A presence check. It makes sure data has been entered before the record can be saved.

**What is a transposition error?**
Two characters are swapped, such as 47 typed as 74. Visual verification or double data entry can find it; most validation checks cannot.

## Self-test

1. Name the validation check for a password that must have at least 8 characters.
2. Give two reasons why spell-check suggestions may be wrong.
3. Describe double data entry.
4. Define a widow.
5. Explain why validation alone is not enough.

*Answers: 1 length check; 2 correctly spelled wrong word not flagged, names flagged, wrong dictionary language, first suggestion not the intended word; 3 data entered twice and the computer compares the two versions and reports differences; 4 last line of a paragraph alone at the top of a new page or column; 5 data can be reasonable but still wrong, such as transposed digits.*

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 15 "Proofing" (15.1 Software tools, 15.2 Proofing techniques).
