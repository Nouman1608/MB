---
title: "Cambridge A Level Information Technology (ICT): Mail merge (9626)"
seoTitle: "Cambridge A Level ICT 9626 Mail Merge Study Guide"
resourceType: "study-guides"
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
description: "Study guide for Cambridge A Level IT 9626 Mail merge: data sources, master documents, labels, fields, Ask and Fill-in prompts and recipient rules."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

This study guide covers **topic 18, Mail merge** (section 18.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus bases Paper 3 (Advanced Theory) questions on sections 12–21 and Paper 4 (Advanced Practical) tasks on sections 17–21, so you can meet mail merge in **both** the theory paper and the practical paper.

The syllabus names no software, and the way fields are typed differs between word processors, so learn the purpose and logic of each feature. Use this guide with the [revision notes](/resources/a-level-cambridge-ict-mail-merge-revision-notes/) and the [practice questions](/resources/a-level-cambridge-ict-mail-merge-practice/). The course hub is [Cambridge A Level IT](/boards/cambridge/a-level/ict/), and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/) lists every outcome. Find your gaps with a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do | Level |
|---|---|---|
| 18.1 | Explain when and why mail merge is used | A Level only |
| 18.1 | Explain the need for data sources and master documents | A Level only |
| 18.1 | Create, edit and use source data | A Level only |
| 18.1 | Create master documents for letters, labels (including custom labels) and a directory | A Level only |
| 18.1 | Link a master document to a source file, using correct field names and embedding a chart/table | A Level only |
| 18.1 | Insert merge fields, document properties, document fields and date/time fields | A Level only |
| 18.1 | Set up Fill-in and Ask fields with prompts, and formula fields; explain when and why | A Level only |
| 18.1 | Select recipients (edit, sort, filter) and exclude them, including with If Then Else, Skip Record If and Next Record If; explain when and why | A Level only |

## When and why mail merge is used

**Mail merge** combines one master document with a file of records to produce a personalised copy for each record. Use it when **the same document goes to many people but some details differ**: letters, invoices, reminders, certificates, badges, labels and printed lists.

Why it is used:

- **Saves time**: layout and fixed text are written once.
- **Consistency**: every copy has the same layout and wording.
- **Fewer typing errors**: details come from stored data, not retyping.
- **Personalisation**: "Dear Mr Iqbal" looks more professional than "Dear Customer".
- **Selection**: rules pick out only the records that need a document.

Limitations: a source error is copied into every document that uses it, set-up is not worth it for a few letters, and bulk mail can be seen as junk.

## Data sources and master documents

- The **master document** (main document) holds everything that is the same in every copy: layout, fixed text, logos, and **merge fields** that mark where data goes.
- The **data source** holds the data that changes. Each **record** (row) is one recipient. Each **field** (column) is one item, such as Forename or Postcode. The first row holds the **field names**.

You need both: the master cannot personalise without data, and the data has no layout without the master. Keeping them separate also lets one data source feed several masters, such as a letter and labels for the same mailing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-mail-merge--07-mm-how-it-works.webp" width="900" height="880" alt="A master document holds fixed text and merge fields for Surname and Owed. A data source holds one record per row: Okafor 40, Khan 25 and Iqbal 80. Merging produces one personalised copy per record with the same layout and wording and only the field values changed." loading="lazy">
  <figcaption>One master document plus one record per row gives one personalised copy per record.</figcaption>
</figure>


## Creating and editing source data

A data source can be a spreadsheet, a database table, a CSV file or a table in a word-processed document. Build it so the merge works first time:

1. Field names in the first row only, each unique and descriptive (Forename, not Name1).
2. One record per row, with no blank rows or merged cells.
3. Split data into the smallest useful fields: Title, Forename and Surname, not one Name field.
4. Keep formats consistent: dates in one format, numbers stored as numbers, not text.
5. Remove duplicates and check spellings before merging.

Correct errors in the source itself, not in one merged letter, so the fix is kept for every future merge. For more on fields, records and file types, see the [database and file concepts study guide](/resources/a-level-cambridge-ict-database-and-file-concepts/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-mail-merge--08-mm-source-data.webp" width="900" height="930" alt="Two illustrative tables. The poor one has a vague combined name field, a blank row, mixed date formats and a duplicate record. The good one has field names in the first row only, the smallest useful fields (Title, Forename, Surname), one record per row and one date format." loading="lazy">
  <figcaption>Good source data has clear fields, one record per row and consistent formats.</figcaption>
</figure>


## Creating master documents

### Letters

One merged document per record, with an address block, a salutation and personal details in the body. Leave spaces and punctuation between fields: «Title» «Surname» needs a space, or the output reads "MrIqbal".

### Labels and custom labels

The master is one page of labels. Each label holds the same field layout, and records fill the labels in order. A **custom label** is set up by entering the measurements of the label sheet yourself, when it is not a stock size. You need: page size, top margin, side margin, label width and height, horizontal and vertical pitch, and the number across and down.

**Pitch** is label size plus the gap to the next label.

**Worked example 1 -- custom labels.** An A4 sheet (210 mm × 297 mm) holds labels 99 mm wide and 38 mm high, 2 across and 7 down. There is a 2 mm gap between columns and no gap between rows. The labels sit centrally.

```
Horizontal pitch = 99 + 2 = 101 mm
Vertical pitch   = 38 + 0 = 38 mm
Width used  = 2 × 99 + 1 × 2 = 200 mm  → side margin = (210 − 200) ÷ 2 = 5 mm
Height used = 7 × 38 = 266 mm          → top margin  = (297 − 266) ÷ 2 = 15.5 mm
Labels per sheet = 2 × 7 = 14
150 records: 150 ÷ 14 = 10.7 → 11 sheets; the last sheet has 150 − 140 = 10 labels
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-mail-merge--09-mm-custom-labels.webp" width="900" height="765" alt="A scale drawing of an A4 sheet with 14 labels of 99 by 38 mm, 2 across and 7 down, and a 2 mm gap between columns. Horizontal pitch is 101 mm, vertical pitch 38 mm, side margin 5 mm and top margin 15.5 mm. 150 records need 11 sheets, the last with 10 labels." loading="lazy">
  <figcaption>Pitch is label size plus gap; margins centre the labels on the sheet.</figcaption>
</figure>


### A directory

A **directory** (or catalogue) puts **all the selected records into one document**, one after another. Use it for a phone list, price list or class list. The master holds only the repeating part, such as one line of fields; add any heading after merging or it repeats for every record.

## Linking the master document to the source file

Link the master to the data source before inserting fields. Then:

- **Use the correct field names.** A field in the master must match a column heading in the source exactly. If a task asks for the customer's first name, insert «Forename», not «Surname» or a typed name. Rename a column after linking and that field breaks.
- **Embed a chart or table**, such as a price table or a sales chart from a spreadsheet. An **embedded** object is a copy stored inside the document, so it appears in every merged copy and does not change if the spreadsheet changes later; a **linked** object would update from its file. A table in the master can also hold merge fields, such as an invoice line.

## Inserting fields

| Field type | What it inserts | Example use |
|---|---|---|
| Merge field | The value of a named field for the current record | «Forename» in the salutation |
| Document property | Information stored with the file, such as title, author or company | Author name in a footer |
| Document field | Information about the document itself, such as page number, number of pages or file name | "Page 1 of 2" footer; file name for version control |
| Date/time field | The current date or time, formatted as required | Letter date that updates each time you merge |

A **typed** date never changes; a **date field** updates, so a letter merged next month shows next month's date. Choose an unambiguous format, such as 6 October 2026.

## Setting up fields

### Manual completion: Fill-in and Ask

Some information is not in the source and changes each merge, such as a meeting date. A field can prompt the user to type it.

- **Fill-in**: shows a prompt during the merge, and the response appears **where the field is placed**.
- **Ask**: shows a prompt and **stores** the response under a name. The stored value is then shown by a reference to that name, and can be reused in several places or used in a condition.

Both can usually be set to prompt **once** for the whole merge (the same answer in every copy) or **for each record** (a different answer per recipient).

A good prompt says exactly what to type and in what format: "Enter the parents' evening date (e.g. 14 November 2026)". A default response saves typing. A vague prompt such as "Enter date" invites the wrong date or format.

### Automatic completion: formula fields

A **formula field** calculates a value from merge fields when each copy is produced, so no total is typed by hand.

**Worked example 2 -- invoice letter.** The source holds Quantity; the unit price is 25.50. The letter shows the total and gives 10% discount when the total is over 500.

```
Total    = «Quantity» × 25.50
Discount = IF Total > 500 THEN Total × 0.10 ELSE 0
To pay   = Total − Discount

Record with Quantity 24: Total = 612.00, Discount = 61.20, To pay = 550.80
Record with Quantity 12: Total = 306.00, Discount = 0.00,  To pay = 306.00
```

Set a number format so money shows two decimal places.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-mail-merge--11-mm-formula-invoice.webp" width="900" height="890" alt="A formula field calculates Total as Quantity times 25.50, Discount as 10 percent of Total when Total is over 500, and To pay as Total minus Discount. Quantity 24 gives 612.00, discount 61.20, to pay 550.80. Quantity 12 gives 306.00, no discount, to pay 306.00." loading="lazy">
  <figcaption>The formula runs separately for each record, so no totals are typed by hand.</figcaption>
</figure>


### When and why fields need to be set up

Set fields up when data is **not** in the source (manual completion), when a value can be **calculated** (no arithmetic errors), or when information must **stay current** (dates, page numbers). Set them up before merging and test them on a few records.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-mail-merge--10-mm-fill-in-ask.webp" width="900" height="960" alt="A prompt asks the user to type a date. A Fill-in field shows the response where the field is placed. An Ask field stores it under a name so it can be shown in several places or used in a condition. Both can prompt once for the whole merge or for each record." loading="lazy">
  <figcaption>Fill-in shows the answer in one place; Ask stores it so it can be reused.</figcaption>
</figure>


## Specifying rules

### Selecting recipients: editing, sorting and filtering

- **Editing** the recipient list corrects or updates records before merging.
- **Sorting** sets the output order, for example by postcode for bundling post, or by surname for filing.
- **Filtering** selects only records that meet criteria, using comparisons (=, <>, <, >, <=, >=) joined by AND or OR.

**Worked example 3 -- filter, exclude, sort.** A charity's source has fields Surname, Region, Owed and Contact. Reminders go to the North region, only where money is owed.

| Surname | Region | Owed | Contact |
|---|---|---|---|
| Okafor | North | 40 | Yes |
| Patel | South | 0 | Yes |
| Ahmed | North | 0 | Yes |
| Brown | North | 15 | No |
| Zhou | East | 60 | Yes |
| Khan | North | 25 | Yes |
| Evans | South | 30 | Yes |
| Iqbal | North | 80 | Yes |

```
Filter: Region = "North" AND Owed > 0  → Okafor, Brown, Khan, Iqbal
Rule:   Skip Record If Contact = "No"  → Brown removed
Sort:   Surname ascending              → Iqbal, Khan, Okafor (3 letters)
```

OR instead of AND would wrongly select every North record and every record owing money.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-mail-merge--12-mm-choose-recipients.webp" width="900" height="920" alt="Eight records with Surname, Region, Owed and Contact. The filter Region North AND Owed over 0 keeps Okafor, Brown, Khan and Iqbal. Skip Record If Contact is No removes Brown. Sorting by surname gives the output order Iqbal, Khan, Okafor. Using OR instead of AND would select 7 of the 8 records." loading="lazy">
  <figcaption>Filter, then skip, then sort: three letters are produced from eight records.</figcaption>
</figure>


### Excluding recipients

You can exclude individual records by hand (deselect them in the recipient list), for example a duplicate or someone who has asked not to be contacted. To exclude by a rule, use conditional fields:

- **If Then Else** tests a condition and inserts one result if it is true and another if it is false. It changes **what** a copy says, for example a paid or unpaid sentence; with an empty result it can leave a line out.

```
IF «Owed» > 0
THEN "Please pay the balance of «Owed» by the end of the month."
ELSE "Thank you: your account is fully paid."
```

- **Skip Record If** tests a condition; if it is true, **no copy is produced** for that record and the merge moves on.
- **Next Record If** tests a condition; if it is true, the merge moves to the next record **within the same merged document**. It is used in labels and directories. It moves on only one record each time it is tested, so two matching records in a row are not both passed over; a filter or Skip Record If is more reliable for exclusion.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-mail-merge--13-mm-conditional-fields.webp" width="900" height="970" alt="If Then Else inserts one sentence if Owed is over 0 and another if not: Okafor (owes 40) gets a please pay sentence, Patel (owes 0) gets a thank you sentence. Skip Record If Contact is No produces no copy for Brown while Khan and Iqbal get copies. Next Record If moves to the next record within the same merged document, one record per test." loading="lazy">
  <figcaption>If Then Else changes the wording; Skip Record If removes the copy; Next Record If moves on within one document.</figcaption>
</figure>


### When and why rules need to be specified

Rules make sure only the right people receive a document. That avoids wasted printing and postage, avoids confusing people (a reminder to someone who has paid), respects people who asked not to be contacted, which supports data protection, and keeps output in a useful order.

## Common errors

- Inserting a field with the wrong name, so every copy shows the wrong data.
- Missing spaces or punctuation between fields.
- Typing a date or total instead of using a field.
- A vague prompt with no format.
- Using OR where the criteria need AND.
- Choosing a letter merge when a directory is needed.

## Where next

Use the [mail merge revision notes](/resources/a-level-cambridge-ict-mail-merge-revision-notes/), then the [mail merge practice questions](/resources/a-level-cambridge-ict-mail-merge-practice/). Sorting and filtering also appear in the [spreadsheets study guide](/resources/a-level-cambridge-ict-spreadsheets/).

## Frequently asked questions

**When should mail merge be used?**
Mail merge is used when the same document goes to many people but some details differ, such as letters, invoices, certificates, labels and printed lists. It saves time, keeps layout consistent, reduces typing errors and allows personalisation.

**How should a mail merge data source be set up?**
Put unique field names in the first row only, keep one record per row with no blank rows or merged cells, split data into the smallest useful fields such as Title, Forename and Surname, keep formats consistent, and remove duplicates before merging.

**What is the difference between Skip Record If and Next Record If?**
Skip Record If produces no copy for a record that meets the condition. Next Record If moves to the next record within the same merged document, as in labels and directories, and only moves on one record each time, so a filter or Skip Record If is more reliable for exclusion.

**Why should errors be corrected in the data source rather than the merged letter?**
Correcting the data source keeps the fix for every future merge and every master document that uses it, whereas editing one merged copy leaves the error in the source.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 18, Mail merge, section 18.1.
