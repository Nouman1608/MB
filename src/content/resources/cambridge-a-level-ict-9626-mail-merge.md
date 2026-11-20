---
title: "Cambridge A Level Information Technology (ICT): 18.1 Mail merge (9626)"
seoTitle: "Cambridge A Level IT 9626: Mail Merge Study Guide"
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
  - qualification: "a-level"
    topic: "mail-merge"
    subtopic: "mail-merge-content"
description: "Study guide to section 18.1 of Cambridge A Level IT 9626: data sources, master documents, merge fields, Fill-in and Ask fields, recipient rules and conditional fields."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **18.1 Mail merge** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. The syllabus says that Paper 3 (Advanced Theory) is based on sections 12 to 21 and that Paper 4 (Advanced Practical) tests sections 17 to 21, so mail merge can be examined in written questions and in practical tasks.

Use it with the [mail merge topic guide](/resources/a-level-cambridge-ict-mail-merge/), the [topic revision notes](/resources/a-level-cambridge-ict-mail-merge-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-mail-merge-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

Menu names vary between word processors. The ideas and the terms used in the syllabus are what matter, and you should practise the steps in your own software.

## When and why mail merge is used

Mail merge produces many personalised documents from one design and one list. It is used when the same document, with different details, must go to many people: letters to customers, address labels for envelopes, certificates, invoices, reminders or a directory of names.

Reasons for using it:

- It saves time: one master document makes hundreds of copies.
- It reduces errors: details are taken from the data, not retyped.
- Each document is personal, so recipients feel valued.
- The list can be sorted, filtered and updated, and the same master document can be reused.

## The two parts: data source and master document

| Part | What it is |
|---|---|
| **Data source** (source file) | A table of records: each row is a person or item, each column a field |
| **Master document** (main document) | The letter, label sheet or directory, containing fixed text and merge fields |

Merging combines them: for each record, the program fills the merge fields in a copy of the master document with that record's data.

## Creating and editing the data source

The data source may be created in a spreadsheet, a database or a table in the word processor.

Rules for a good source:

- Headings (**field names**) in the first row, short and unique, without special characters (for example Title, FirstName, Surname, Address1, Town, Postcode, Balance).
- One record per row and no blank rows or columns.
- One fact per field (split names and address parts, so that "Dear Mr Khan" can be built from Title and Surname).
- A consistent data type in each column, and correct formats (for example currency or date).
- No spelling or data errors, since they will be copied to every letter.

The source can be edited: records can be added, corrected or removed, and the merge will use the new data.

## Creating a master document

### Letters

A letter has the sender's details, a date, an address block made of merge fields, a greeting ("Dear «Title» «Surname»"), the body text and a closing. Each merged letter is a separate page.

### Labels (including custom labels)

Labels use a sheet divided into cells. Choose a standard label product, or create a **custom label** by setting the page margins, label height and width, the number of labels across and down, and the spacing between them. The address block goes in the first cell, and the program fills the other cells with the next records. The merged result has several records per page.

### A directory

A directory is a single document listing many records, such as a staff list or catalogue, instead of a separate page for each. The merge fields are set up once, and each record follows the last in the same document, often in a table or list layout.

## Linking the master document to the source

- Select the data source file and, if there is more than one table or sheet, the correct one.
- Insert merge fields using the **correct field names**. If a field name in the master document does not exist in the source, the merge fails or shows an error.
- Chart or table: a chart or table can be **embedded** in the master document, for example a table of the recipient's charges or a chart of results, so that it appears in every merged document. A static table gives the same data to all; a table or chart linked to the data gives details specific to the record.

## Inserting fields

| Field type | Use |
|---|---|
| **Merge fields** | Take data from the source, such as «FirstName» or «Balance» |
| **Document properties** | Take information about the document itself, such as its author or title |
| **Document fields** | Other automatic fields such as page numbers, file name or the number of pages |
| **Date/time fields** | Insert the current date or time, which updates each time the document is opened or merged |

Formatting applies to the merge field and carries into the result, so check capitalisation, fonts and number formats (for example currency with two decimal places).

## Setting up fields for completion

### Manual completion: Fill-in and Ask fields

Some information is not in the data source and is typed during the merge.

- A **Fill-in** field asks the user for text each time a merge field is reached (once per record) and inserts what is typed.
- An **Ask** field asks for a value once, or for each record, and stores it under a name (a bookmark) that can be used several times in the document.

The **prompt** should be clear and short: it should say what to enter and in what format, for example "Enter the interview date (DD/MM/YYYY)". A bad prompt, such as "Enter data", leads to errors.

*When and why:* use them for details that change for each letter but are not worth storing, such as a personal note, a meeting time chosen at the time, or an amount agreed on the day.

### Automatic completion: calculations

A field can hold a **formula** that calculates a value from merge fields. For example, a total can be worked out as Quantity multiplied by UnitPrice, and the result can be formatted as currency. The results update for each record.

*When and why:* use calculations when the data source has the inputs but not the result, saving the need to calculate in advance, and when the result must be accurate in every document.

## Specifying rules

Rules decide which records appear in the merge.

### Selecting recipients

- **Editing:** change or correct records in the list, or remove individual records, before merging.
- **Sorting:** put the records in order, for example by postcode (to sort mail for postage) or by surname for a directory. Several sort levels can be used (town, then surname).
- **Filtering:** choose only the records that meet a condition, for example Town = "Leeds" and Balance greater than 0. Several conditions can be joined with AND or OR.

### Excluding recipients

Records can be excluded by unticking them in the recipient list or by a filter, for example to leave out people who have opted out.

### Conditional fields

Rules can also be written into the master document.

| Field | What it does | Example |
|---|---|---|
| **If Then Else** | Inserts one piece of text if a condition is true and another if it is false | If Balance > 0, insert "Please pay the amount shown." otherwise insert "Your account is up to date." |
| **Skip Record If** | Leaves out the current record altogether if the condition is true | Skip Record If Balance = 0 (no letter is produced for that person) |
| **Next Record If** | Moves on to the next record without starting a new document (or page) if the condition is true | Used in a directory or label sheet so that several records can be combined on the same page |

*When and why:* rules ensure that the right people receive the right letter. They avoid sending a reminder to someone who owes nothing, or a "welcome back" paragraph to a new customer.

## Worked example: a reminder letter

A gym holds a data source with Title, Surname, Address, MembershipType and Balance. The letter should say how much is owed, and only go to members who owe money.

1. Add "Skip Record If Balance = 0" at the start of the master document.
2. Add the address block from the merge fields.
3. Write: "Dear «Title» «Surname»".
4. Insert an If Then Else: if MembershipType = "Premium", then "As a premium member you can pay at the desk or online." Otherwise "Please pay at the desk."
5. Write "You owe «Balance»", formatted as currency.
6. Insert a date field.
7. Preview the results, check the first and last records, and then merge to a new document or to the printer.

A formula field can be added: if the gym adds a fixed late charge of £5, a calculated field Balance + 5 gives the total to pay.

## Previewing and checking

Always preview before merging. Check that:

- every field is filled, with no blank gaps in addresses
- capitals, spacing and number formats are correct
- the conditions work for both outcomes
- the number of letters matches the number of records expected
- Fill-in and Ask prompts are clear.

## Common errors

- Field names in the source that contain spaces or duplicates, causing failures.
- Names with titles in one field and surnames in another that were not split, so the greeting is wrong.
- Forgetting to format the number field, so that £25 appears as 25.
- Using Skip Record If when the aim was to choose different text (that is If Then Else).
- Using a filter and forgetting to remove it afterwards.
- Not previewing before printing.
- A prompt with no instruction on what to type or in what format.

## Frequently asked questions

**What are the two parts of a mail merge?**
The data source (the list of records) and the master document (the fixed text and merge fields).

**What is the difference between Skip Record If and If Then Else?**
Skip Record If leaves out the whole record if the condition is true. If Then Else chooses between two pieces of text within a document that is produced.

**What is a Fill-in field?**
A field that asks the user to type a value during the merge, and inserts the response in the document.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 18.1: Mail merge.
