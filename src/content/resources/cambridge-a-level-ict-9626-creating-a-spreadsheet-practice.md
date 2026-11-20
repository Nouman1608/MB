---
title: "Cambridge A Level Information Technology (9626): Creating a spreadsheet -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 8 – Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8.1
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
  - qualification: "a-level"
    topic: "spreadsheets"
    subtopic: "creating-a-spreadsheet"
description: "Fourteen original Cambridge 9626 IT section 8.1 questions with answers on spreadsheet structure, validation, referencing, functions and formatting."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Creating a spreadsheet study guide](/resources/cambridge-a-level-ict-9626-creating-a-spreadsheet/)

These questions are for **section 8.1 Creating a spreadsheet** (Topic 8, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Questions 6 to 9 use the table below, which is in columns A to D of a worksheet with headings in row 1 and data in rows 2 to 7. All organisations are invented.

| Row | A: Region | B: Product | C: Units | D: Price |
|---|---|---|---|---|
| 2 | North | Pens | 40 | 2.50 |
| 3 | South | Pens | 25 | 2.50 |
| 4 | North | Books | 12 | 8.00 |
| 5 | East | Books | 30 | 8.00 |
| 6 | South | Books | 18 | 8.00 |
| 7 | North | Files | 50 | 1.20 |

---

## Section A

**1.** State what is meant by an absolute cell reference. **[2]**

**2.** Describe the purpose of freezing panes in a long table. **[2]**

**3.** Give **two** reasons for adding a header and a footer to a printed spreadsheet. **[2]**

**4.** Explain why a drop-down list is better than typing for a "Region" cell. **[2]**

**5.** Describe the steps to protect all formulas on a worksheet while allowing users to change the Units column. **[3]**

## Section B

**6.** Write down the result of each formula.

**(a)** `=SUM(C2:C7)` **[1]**

**(b)** `=COUNTIF(B2:B7,"Books")` **[1]**

**(c)** `=SUMIF(A2:A7,"North",C2:C7)` **[1]**

**(d)** `=MAX(D2:D7)` **[1]**

**7.** The formula `=C2*D2*(1+$H$1)` is entered in F2 and copied down to F7. Cell H1 contains 0.2.

**(a)** State the result in F2 and in F4. **[2]**

**(b)** Explain why `$H$1` is used. **[2]**

**(c)** State what would happen in F3 if `H1` was typed without dollar signs. **[2]**

**8.** Write a formula for each task.

**(a)** Total the Units for the North region and the Pens product. **[2]**

**(b)** Display "Bulk" if Units in C2 is at least 30, otherwise "Standard". **[2]**

**(c)** Show "Unknown" instead of an error if a lookup fails. The lookup is `VLOOKUP(B2,F2:G4,2,FALSE)`. **[2]**

**9.** A discount table is stored in F2:G4. The first column holds minimum units (0, 25, 50) and the second holds the discount (0%, 5%, 10%).

**(a)** Write a formula that finds the discount for the units in C5. **[3]**

**(b)** State the result for C5. **[1]**

**(c)** Explain why the last argument is TRUE in this case, but FALSE for a product code lookup. **[2]**

**10.** Cell A2 in another sheet holds the code `NOR-0412`. State the result of each formula.

**(a)** `=LEFT(A2,3)` **[1]**

**(b)** `=RIGHT(A2,4)` **[1]**

**(c)** `=MID(A2,5,2)` **[1]**

**(d)** `=FIND("-",A2)` **[1]**

**11.** Describe **two** features of conditional formatting that would help a manager read the Units column. **[3]**

**12.** Explain the difference between a relative, an absolute and a mixed reference. **[3]**

**13.** A spreadsheet will be used by primary school pupils to record the rainfall each day. Describe **three** features of the spreadsheet's design that suit this audience. **[6]**

**14.** Explain why named ranges are useful in a workbook with several worksheets. **[3]**

---

## Answers

**1.** A reference to a cell that does not change when the formula is copied [1], because both the column and row are fixed, written with dollar signs such as `$H$1` [1]. **[2]**

**2.** It keeps the chosen rows or columns, such as headings, visible [1] while the user scrolls through the rest of the data [1]. **[2]**

**3.** Any two from: show the title or purpose of the sheet [1]; show the author or date [1]; show page numbers [1]; show the file name so printed copies can be matched to the file [1]. **[2]**

**4.** The user selects from a fixed list [1], so spelling mistakes and invalid regions cannot be entered, which keeps data consistent [1]. **[2]**

**5.** Unlock the cells in the Units column [1], then protect the worksheet (with a password if required) [1], so locked formula cells cannot be changed but Units can be typed [1]. **[3]**

**6. (a)** 175 [1].

**(b)** 3 [1].

**(c)** 102 (40 + 12 + 50) [1].

**(d)** 8 [1]. **[4]**

**7. (a)** F2 = 40 × 2.5 × 1.2 = 120 [1]; F4 = 12 × 8 × 1.2 = 115.2 [1].

**(b)** It is an absolute reference to the VAT rate [1], so it does not change when the formula is copied and every row uses the same rate [1].

**(c)** The reference would change to H2 [1], which is empty and counts as zero, so F3 would calculate 25 × 2.5 × (1 + 0) = 62.5 instead of 75 [1]. **[6]**

**8. (a)** `=SUMIFS(C2:C7,A2:A7,"North",B2:B7,"Pens")` [2] (one mark for SUMIFS with the sum range, one for both criteria correct).

**(b)** `=IF(C2>=30,"Bulk","Standard")` [2] (one mark for the test, one for the two outcomes).

**(c)** `=IFERROR(VLOOKUP(B2,F2:G4,2,FALSE),"Unknown")` [2] (one mark for IFERROR around the lookup, one for the message). **[6]**

**9. (a)** `=VLOOKUP(C5,$F$2:$G$4,2,TRUE)` [3] (one mark for VLOOKUP with C5, one for the fixed table range, one for column 2 with approximate match).

**(b)** C5 is 30. The largest minimum not above 30 is 25, so the discount is 5% [1].

**(c)** Units fall between thresholds, so an approximate match is needed to find the band they belong to [1]. A product code must match exactly, so FALSE is used [1]. **[6]**

**10. (a)** NOR [1].

**(b)** 0412 [1].

**(c)** 04 [1].

**(d)** 4 [1]. **[4]**

**11.** Any two features, one mark for each and one for an explanation: highlight cells below a set value in red [1], so low sales are noticed quickly [1]; use colour scales or data bars to show size [1]; the format changes automatically when the data changes [1]. **[3]**

**12.** A relative reference changes when the formula is copied, for example C2 becomes C3 [1]. An absolute reference does not change, for example `$H$1` [1]. A mixed reference fixes either the column or the row, for example `$A2` or `B$1` [1]. **[3]**

**13.** Any three, each with a reason: large clear text and headings [1], so that young pupils can read it [1]; a drop-down or simple input cells with only the cells they need unlocked [1], so they cannot damage formulas [1]; input messages in simple words [1], to tell them what to enter [1]; bright colours and a simple layout [1], to keep them interested [1]; a chart that updates [1], to show rainfall in a form they understand [1]. **[6]**

**14.** A name gives a clear label to a cell or range, such as `VATRate` [1], so formulas are easier to read and check [1]. Names can be used from any worksheet or workbook and behave as absolute references, so there is no need to remember where the cell is [1]. **[3]**

## Where marks are usually lost

- Forgetting the dollar signs in an absolute reference.
- Using TRUE for an exact lookup, or FALSE for a banded lookup.
- Writing a formula without the equals sign or with brackets in the wrong place.
- Naming a feature without saying why it helps the user.
- Describing protection without unlocking the input cells.
