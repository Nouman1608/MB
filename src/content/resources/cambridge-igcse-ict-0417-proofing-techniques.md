---
title: "Cambridge IGCSE ICT (0417): Proofing techniques"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 15: Proofing"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 15.2
syllabusTopics:
  - qualification: "igcse"
    topic: "proofing"
    subtopic: "proofing-techniques-0417"
description: "Visual verification, proofreading for layout faults, double data entry and the need for both validation and verification, for IGCSE ICT 0417 section 15.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Section 15.2 of Cambridge IGCSE ICT 0417 covers the checks a **person** carries out, as opposed to the automatic tools in 15.1. You must be able to **perform visual verification**, identifying and correcting "transposed numbers, incorrect spelling, inconsistent character spacing, inconsistent case"; **proofread** a document, dealing with line spacing, blank pages or slides, widows and orphans, styles, and tables or lists split across columns, pages or slides; and know the "importance, characteristics and uses of verification including visual checking and double data entry", together with "the need for validation as well as verification". The [Proofing study guide](/resources/cambridge-igcse-ict-proofing-study-guide/) introduces the whole topic; this guide goes further into each named error and how to fix it.

## Verification: the idea

**Verification** checks that data has been **copied accurately** from its source, such as a paper form, into the computer. It answers the question "Is what was typed the same as what was on the original?" It does not ask whether the data is sensible; that is validation's job.

The syllabus names two methods.

### Visual checking

The person entering the data (or a second person) compares the data on the screen with the source document, item by item, and corrects any difference.

- **Characteristics:** done by a person; needs no extra software; can be done straight after entry or on a printout.
- **Uses:** small amounts of data; checking a document before it is sent; checking a record on screen while the customer is present, for example reading an address back over the telephone.
- **Weaknesses:** people get tired and miss errors, especially in long lists of numbers; a person checking their own work tends to see what they meant to type.

### Double data entry

The same data is entered twice, often by two different people. The computer compares the two versions and reports every place where they differ, and the differences are checked against the original.

- **Characteristics:** the comparison is done by the computer; it finds almost any keying difference between the two entries.
- **Uses:** large volumes of important data, such as exam results or medical records; also the "enter your password again" or "confirm your email address" boxes on a sign-up form, where the user types the same item twice.
- **Weaknesses:** it takes about twice as long and costs more; if the same mistake is made in both entries, or the source itself is wrong, the error is not found.

## The four data entry errors to spot

| Error | What it looks like | Source | Typed |
|---|---|---|---|
| Transposed numbers | Two digits swapped in position | 4719 | 4791 |
| Incorrect spelling | A word or name spelt differently from the source | Fernandes | Fernandez |
| Inconsistent character spacing | Missing, double or extra spaces between characters or words | 12 Hill Road | 12 Hill Road, with two spaces after *Hill* |
| Inconsistent case | Capital and lower-case letters used differently from the source or from other entries | High Street | high Street |

Transposed numbers matter most because they cannot be found by validation: 4791 is just as reasonable as 4719. Incorrect spelling of a name will not be flagged by a spell checker, because names are not in its dictionary in any spelling. Spacing errors are easiest to see with formatting marks shown, which displays each space as a dot.

### Worked example: visual verification of three records

A clerk types three customer orders from paper forms. Comparing screen and form:

| Field | Paper form | On screen | Error type | Correction |
|---|---|---|---|---|
| OrderNo | 58217 | 52817 | Transposed numbers | 58217 |
| Name | Priya Nandakumar | Priya Nandkumar | Incorrect spelling | Nandakumar |
| Street | 14 Station Road | 14 Station road, with two spaces after *14* | Inconsistent character spacing and inconsistent case | 14 Station Road |
| Quantity | 36 | 36 | None | None |

Four errors are found in three fields (the street has two). Note that every incorrect value would pass a sensible validation rule: 52817 is a five-digit order number, and "Nandkumar" contains only letters. This is exactly why verification is needed.

## Proofreading a document

Proofreading looks at the finished document as a whole. The syllabus lists these faults.

### Inconsistent line spacing

Some paragraphs are single-spaced and others 1.15 or 1.5, often because text was pasted from another file. **Fix:** select the body text and apply the same body style (or the same line spacing setting) to all of it, so one rule controls every paragraph.

### Blank pages and slides

A blank page usually comes from a stack of empty paragraphs or a page break left at the end of the document; a blank slide from an extra slide added and not used. **Fix:** show formatting marks, delete the extra paragraph marks or the page break; in a presentation, delete the empty slide. Never leave a blank page in printed evidence.

### Widows and orphans

- An **orphan** is the first line of a paragraph left alone at the bottom of a page or column, with the rest of the paragraph on the next.
- A **widow** is the last line of a paragraph carried alone to the top of the next page or column.

**Fix:** turn on widow and orphan control, or set the paragraph to keep its lines together. Do not insert blank lines to push text down: the moment anything earlier in the document changes, the problem moves.

### Inconsistent or incorrect application of styles

One subheading may have the body style, or a heading may have been formatted by hand and look slightly different. **Fix:** check each heading and paragraph against the styles list and reapply the correct style.

### Tables and lists split over columns, pages or slides

A table with its header row on one page and its data on the next, or a bulleted list broken between two columns, is hard to read. **Fix:** keep the rows together (or keep each paragraph with the next), insert a page or column break before the table so that it starts on a new page or column, or resize it to fit; on slides, resize the text or table so it fits on one slide, within the house style.

### Worked example: proofreading a report

A report that should fill three pages is checked in print preview. Problems found, in order:

1. Page 1: the second subheading is Body Text, not Heading 2. *Reapply Heading 2.*
2. Page 1 to page 2: the last line of a paragraph sits alone at the top of page 2 (a widow). *Turn on widow and orphan control.*
3. Page 2: two paragraphs pasted from an email are double-spaced. *Apply Body Text so they match the 1.15 spacing used elsewhere.*
4. Page 2 to page 3: a table's heading row is at the foot of page 2 and its data on page 3. *Insert a page break before the table, or set the rows to stay together.*
5. Page 4: blank, caused by several empty paragraphs after the table. *Delete them, so the report ends on page 3.*

Five faults, each with a fix that will still work if the text changes later.

## Why validation and verification are both needed

| Error | Caught by validation? | Caught by verification? |
|---|---|---|
| Age typed as 250 | Yes, by a range check | Yes, if checked against the source |
| Date of birth left blank | Yes, by a presence check | Only if the checker notices |
| Order number 58217 typed as 52817 | No, it is a valid number | Yes |
| Source form already contains the wrong date | No, if the date is reasonable | No, the copy matches the source |

Validation catches data that breaks rules; verification catches copying errors that obey the rules. Each misses errors the other finds, so a well-designed system uses both. Neither can correct an error that is already on the original document.

## Common mistakes

- Defining verification as "checking data is correct". It checks the data matches the source.
- Saying double data entry means "typing it again to check". Say the **computer compares** the two entries.
- Swapping the definitions of widow and orphan. Orphan: first line alone at the bottom; widow: last line alone at the top.
- Fixing layout faults with blank lines or spaces.
- Forgetting slides: blank slides and tables split across slides count too.

## Exam technique

For **describe** questions on a verification method, give what is done *and* who or what does the comparison. For **explain** questions on the need for both methods, give an example of an error each one misses, as in the table above. In practical tasks, finish with a proofread in print preview, checking line spacing, styles, blank pages, widows and orphans, and split tables or lists.

## Check your understanding

1. What does verification check? *That data has been copied accurately from the source.*
2. Which error is 3058 typed as 3508? *Transposed numbers.*
3. Who or what compares the data in double data entry? *The computer.*
4. Give one weakness of visual checking. *The checker may miss errors through tiredness or seeing what they expect.*
5. What is a widow? *The last line of a paragraph alone at the top of a page or column.*
6. Why can validation not detect transposed numbers? *The swapped value is still reasonable, so it obeys the rules.*

## More on this topic

Revise with the [proofing techniques revision notes](/resources/cambridge-igcse-ict-0417-proofing-techniques-revision-notes/), then try the [proofing techniques practice questions](/resources/cambridge-igcse-ict-0417-proofing-techniques-practice/). The automatic tools are in the [software tools study guide](/resources/cambridge-igcse-ict-0417-software-tools/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 15 "Proofing", 15.2 Proofing techniques.
