---
title: "Cambridge A Level Information Technology (ICT): Mail merge (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Mail Merge Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Mail merge"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 18
syllabusTopics:
  - qualification: "a-level"
    topic: "mail-merge"
description: "Condensed revision notes for Cambridge A Level IT 9626 Mail merge: key terms, field types, recipient rules and a quick self-test with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, use the [mail merge study guide](/resources/a-level-cambridge-ict-mail-merge/). These notes condense **topic 18, Mail merge** (section 18.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus bases Paper 3 (Advanced Theory) questions on sections 12–21 and Paper 4 (Advanced Practical) tasks on sections 17–21, so mail merge can appear in both. Calculators are not allowed in Paper 3.

Test yourself with the [mail merge practice questions](/resources/a-level-cambridge-ict-mail-merge-practice/), see the course on the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/), tick outcomes off on the [9626 checklist](/checklists/cambridge/a-level/ict/), and find your gaps with a [free 10-minute diagnostic](/diagnostics/).

## Key terms

| Term | Meaning |
|---|---|
| Mail merge | Combining a master document with a data source to produce a personalised copy per record |
| Master document | Fixed text, layout and merge fields; the same in every copy |
| Data source | File of records (spreadsheet, database table, CSV or word-processed table) |
| Record | One row: one recipient |
| Field | One column: one item of data, e.g. Postcode |
| Field name | Column heading in the first row; must match the merge field exactly |
| Merge field | Placeholder replaced by the current record's value, e.g. «Surname» |
| Directory | Merge type that puts all selected records into one document |
| Custom label | Label set-up where you enter the sheet's own measurements |

## When and why mail merge is used

- **When**: the same document goes to many people with some details different. Letters, invoices, reminders, certificates, badges, labels, directories.
- **Why**: fixed text typed once (saves time); same layout every copy (consistent); data not retyped (fewer errors); copies addressed by name (personal, professional); rules send copies only where needed.
- **Drawbacks**: one source error repeats in every copy using it; set-up time not worth it for very few documents; bulk post may be seen as junk.

## Why both a data source and a master document

- Master without data: nothing to personalise.
- Data without master: no layout or wording.
- Separate files: one source can feed a letter, labels and a directory; update the data once and every master uses the new values.

## Source data: method in steps

1. Field names in row 1 only, unique and descriptive.
2. One record per row; no blank rows, no merged cells.
3. Atomic fields: Title, Forename, Surname, not one Name field.
4. Consistent formats; numbers stored as numbers.
5. Remove duplicates; check spellings.
6. Make corrections in the source, not in a merged copy.

## Master documents

| Type | Output | Notes |
|---|---|---|
| Letter | One document per record | Address block, salutation, personal details; spaces and punctuation between fields |
| Labels | Records fill labels across a sheet in order | Same layout on every label |
| Custom labels | As labels, for a non-standard sheet | Enter page size, margins, label size, pitch, number across and down |
| Directory | One document containing all selected records | Master holds only the repeating line; add headings after merging |

**Label arithmetic.**

```
Pitch = label size + gap
Side margin = (page width − width used) ÷ 2   (if centred)
Width used  = across × label width + (across − 1) × gap
Labels per sheet = across × down
Sheets = records ÷ labels per sheet, rounded UP
```

Reminder: 3 across × 8 down = 24 per sheet. 100 recipients → 100 ÷ 24 = 4.17 → 5 sheets; the last has 100 − 96 = 4 labels.

## Linking the master to the source

- Link first, then insert fields from the source's list, not by typing them.
- **Correct field names**: insert exactly the field a task asks for; a renamed column breaks its field.
- **Embedding a chart/table**: an embedded object is a copy stored in the document, appears in every merged copy, and does not change when its original file changes. A linked object updates from its file.

## Fields at a glance

| Field | Filled by | Use |
|---|---|---|
| Merge field | Data source | Name, address, amount owed |
| Document property | File information (title, author, company) | Author in footer |
| Document field | Document itself (page number, number of pages, file name) | "Page 1 of 3"; file name for version control |
| Date/time field | System clock | Letter date that is correct on the day of merging |
| Fill-in | User at merge time; answer appears where the field is | One-off comment or date |
| Ask | User at merge time; answer stored under a name for reuse | Value used in several places or in a condition |
| Formula | Calculation from fields | Totals, discounts, VAT |

Fill-in and Ask can usually prompt **once per merge** or **once per record**.

**Writing a prompt**: say what to enter, the format, and give an example; set a default where one answer is usual. "Enter the closing date for replies (e.g. 30 November 2026)" beats "Date?".

**Formula reminder**: 15% discount on a 240 order → 0.15 × 240 = 36; to pay 240 − 36 = 204.

**When and why to set up fields**: data not in the source → Fill-in/Ask; value can be worked out → formula; value must stay current → date, page or file-name field. Set up and test before the full merge.

## Rules for recipients

| Rule | What it does | Example |
|---|---|---|
| Edit | Correct or update records | Fix a misspelt surname |
| Sort | Order the output | By postcode for posting; by surname for filing |
| Filter | Keep only records meeting criteria | Year = 13 AND Fees owed > 0 |
| Exclude by hand | Deselect single records | Duplicate entry; opted out |
| If Then Else | Insert one result if true, another if false | "paid" or "unpaid" paragraph |
| Skip Record If | If true, produce no copy for that record | Skip if Balance = 0 |
| Next Record If | If true, move to the next record in the same merged document | Labels and directories |

**When and why**: so only the right people get a document; cuts wasted printing and postage; avoids wrong or upsetting messages; respects people who asked not to be contacted (data protection); gives output in a useful order.

## Must-know distinctions

- **Fill-in vs Ask**: Fill-in shows the answer where the field sits. Ask stores the answer to be referred to elsewhere, possibly several times or in a condition.
- **If Then Else vs Skip Record If**: If Then Else changes what a copy says; Skip Record If stops the copy being produced.
- **Skip Record If vs Next Record If**: Skip removes a whole copy; Next moves on one record inside the same document and does not re-test the new record.
- **Letter vs directory**: one document per record vs all records in one document.
- **Typed date vs date field**: fixed vs updating.
- **Embedded vs linked object**: stored copy vs updates from file.
- **Filter vs exclude by hand**: rule applied to all records vs choosing individual records.
- **AND vs OR**: AND needs both conditions true (fewer records); OR needs either (more records).

## Quick self-test

1. State what the master document contains.
2. Give one reason the source should have separate Forename and Surname fields.
3. A sheet has labels 4 across and 10 down. How many sheets are needed for 365 labels, and how many labels are on the last sheet?
4. Labels are 70 mm wide with a 2.5 mm gap between columns. State the horizontal pitch.
5. Which merge type gives a single price list containing every product?
6. A letter must include a meeting date that changes each term and is the same for every parent. Which field type would you use and how often should it prompt?
7. Write a suitable prompt for that field.
8. Name the rule that stops letters being produced for customers whose Balance is 0.
9. A filter is "Region = West OR Owed > 0". Explain why it selects too many records for "West customers who owe money".
10. Explain why a date field is better than a typed date in a master used every month.
11. State the difference between an embedded and a linked chart in a master document.
12. A member pays 50 per month with 20% off for students. Write the logic of a field that shows the amount, and the two possible results.

### Answers

1. Fixed text and layout that are the same in every copy, plus merge fields showing where data goes.
2. Salutations such as "Dear Ms Khan" need the surname alone; sorting by surname also needs it.
3. 4 × 10 = 40 per sheet; 365 ÷ 40 = 9.1 → **10 sheets**; the last has 365 − 360 = **5 labels**.
4. 70 + 2.5 = **72.5 mm**.
5. A **directory**.
6. A Fill-in (or Ask) field, set to prompt **once** for the whole merge.
7. "Enter the meeting date (e.g. 12 March 2027)", with the format shown.
8. **Skip Record If** Balance = 0 (or a filter Balance > 0).
9. OR selects every West record, even with nothing owed, and every record that owes money in any region; it needs AND.
10. The date field updates each time, so letters show the current date without editing the master; a typed date would be out of date.
11. Embedded: a copy stored in the document that does not change. Linked: updates when the original file changes.
12. IF «Status» = "Student" THEN 50 × 0.8 ELSE 50 → **40** for students, **50** for others.

## Where marks are usually lost

- Describing the data source as "the letter" or the master as "the database".
- Saying mail merge "saves time" with no reason (fixed text typed once).
- Confusing Fill-in and Ask, or not saying when each prompts.
- Prompts with no format or example.
- Sheets for labels rounded down instead of up.
- Forgetting the gap when working out pitch, or adding a gap after the last column.
- Using OR in a filter where both conditions must be true.
- Saying Next Record If removes a record; it moves on one record within the same document.
- Not giving "when and why" reasons for rules and fields when the question asks for them.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 18, Mail merge, section 18.1.
