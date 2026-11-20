---
title: "Cambridge A Level Information Technology (ICT): 18.1 Mail merge (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Mail Merge Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with marked answers on mail merge data sources, master documents, Fill-in and Ask fields, filters and conditional fields for section 18.1 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 18.1 Mail merge** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content. The syllabus bases Paper 3 (Advanced Theory) on sections 12 to 21 and Paper 4 (Advanced Practical) on sections 17 to 21, so mail merge can be examined in both. Calculators are not allowed in Paper 3. These written questions can be answered on paper; practise the same steps in your word processor.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-mail-merge/) and the [topic revision notes](/resources/a-level-cambridge-ict-mail-merge-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** State the **two** files or parts needed for a mail merge and describe the purpose of each. **[4]**

**2.** A swimming club will send a letter to every member about the new term.

**(a)** Give **two** reasons why the club uses mail merge instead of typing each letter. **[2]**
**(b)** Describe **three** features of a well-prepared data source for the merge. **[3]**

**3.** The club's data source is shown. It has six records.

| Surname | Town | Balance (£) | Member |
|---|---|---|---|
| Ali | Leeds | 0 | Y |
| Brown | York | 25 | N |
| Chen | Leeds | 40 | Y |
| Dar | Hull | 0 | N |
| Evans | York | 15 | Y |
| Fox | Leeds | 60 | N |

**(a)** A filter is set to select only records where Town is "Leeds" **and** Balance is greater than 0. State the surnames of the recipients. **[2]**
**(b)** The master document begins with the rule Skip Record If Balance = 0. State how many letters are produced and name the recipients. **[3]**
**(c)** The records are sorted by Town (A to Z) and then by Surname (A to Z). State the order of the surnames. **[2]**
**(d)** Explain why a postal sorting order might be useful to the club. **[1]**

**4.** The reminder letter contains this rule: *If Member = "Y" then insert "Thank you for being a member." otherwise insert "Join us as a member and save 10%."*

**(a)** Name the type of field used. **[1]**
**(b)** State the sentence that appears in the letter to Evans, and the sentence for Brown. **[2]**
**(c)** Explain the difference between this field and Skip Record If. **[2]**

**5.** The club secretary wants each letter to contain a short personal note that is typed by hand for each member during the merge.

**(a)** Name the field type that does this. **[1]**
**(b)** Write a suitable prompt for a field that asks for the date of the member's next training session. **[2]**
**(c)** Explain why a clear prompt matters. **[1]**

**6.** A library prints address labels from a data source of 14 records. The label sheet has 2 columns and 3 rows of labels.

**(a)** Calculate the number of labels on one sheet and the number of sheets needed. **[2]**
**(b)** The library also needs labels of a size that is not on the standard list. State **three** settings that must be entered to create a custom label. **[3]**

**7.** A bakery's data source has the fields Quantity and UnitPrice. The invoice should show the total cost.

**(a)** Describe how the total could be produced in the master document without adding a column to the data source. **[2]**
**(b)** A customer orders 12 items at £4.50 each. State the total before and after adding VAT of 20%. **[2]**
**(c)** State how the result should be formatted. **[1]**

**8.** A school secretary produces a staff directory from a mail merge.

**(a)** Describe how a directory differs from a set of merged letters. **[2]**
**(b)** State the purpose of Next Record If in a directory. **[1]**

## Answers

**1.** The data source (source file) [1] holds the records, one for each recipient, with a field for each item of information [1]. The master document (main document) [1] holds the fixed text and the merge fields that are filled from the data source. [1] **[4]**

**2. (a)** Any two: it saves time; it avoids retyping and so reduces errors; each letter can be personal; the same master document can be reused. [1 each] **[2]**
**(b)** Any three: unique field names in the first row; one record per row; no blank rows or columns; one fact per field (such as Title and Surname separately); consistent formats; no spelling or data errors. [1 each] **[3]**

**3. (a)** Chen [1] and Fox. [1] **[2]**
**(b)** 4 letters [1]. Brown, Chen, Evans, Fox. [1 for all four, 1 mark for noting that Ali and Dar are skipped because their balances are 0] **[3]**
**(c)** Dar, Ali, Chen, Fox, Brown, Evans. [2 marks for all six correct; 1 mark if towns are in the correct order but names within a town are wrong] **[2]**
**(d)** Mail already in town or postcode order is easier and quicker to bundle and post. [1] **[1]**
*Examiner insight:* In (a) both conditions must be true (AND). Leeds records with a balance of 0 (Ali) are excluded.

**4. (a)** If Then Else (a conditional field). [1] **[1]**
**(b)** Evans: "Thank you for being a member." [1] Brown: "Join us as a member and save 10%." [1] **[2]**
**(c)** If Then Else chooses between two pieces of text within a letter that is still produced [1]; Skip Record If leaves out the whole record, so no letter is produced for that person. [1] **[2]**

**5. (a)** A Fill-in field (an Ask field is also accepted). [1] **[1]**
**(b)** A clear instruction [1] that names the item and the format, for example "Enter the date of the member's next training session (DD/MM/YYYY)". [1] **[2]**
**(c)** The person typing needs to know what to enter and in what format, so that entries are consistent and correct. [1] **[1]**

**6. (a)** 2 × 3 = 6 labels per sheet [1]; 14 ÷ 6 = 2.33, so 3 sheets are needed. [1] **[2]**
**(b)** Any three: label height and width; number of labels across and down; page margins; spacing between labels; page size. [1 each] **[3]**

**7. (a)** Insert a formula field in the master document that multiplies the Quantity merge field by the UnitPrice merge field. [1] The result is calculated for each record when the merge is done. [1] **[2]**
**(b)** Before VAT: 12 × 4.50 = £54.00 [1]. After VAT: 54.00 × 1.20 = £64.80. [1] **[2]**
**(c)** As currency with two decimal places. [1] **[1]**

**8. (a)** A directory is one document that lists many records one after another [1], while merged letters produce a separate letter or page for each record. [1] **[2]**
**(b)** To place the next record in the same document (or page) without starting a new one, when a condition is true. [1] **[1]**

## Where marks are usually lost

- Confusing the data source with the master document.
- Using OR when the filter needs AND.
- Mixing up Skip Record If (leaves out the record) with If Then Else (chooses the text).
- Writing a vague prompt such as "Enter data".
- Forgetting to give the format of a calculated amount.
- Not previewing the merge before printing.

## Next steps

- Recap with the [topic revision notes](/resources/a-level-cambridge-ict-mail-merge-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-mail-merge/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**How do I show that I understand mail merge in a written question?**
Use the syllabus terms (data source, master document, merge field, Fill-in, Ask, If Then Else, Skip Record If, Next Record If) and apply them to the scenario.

**Why must field names match?**
The master document finds data by field name, so a name that does not exist in the source causes an error or an empty field.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 18.1: Mail merge.
