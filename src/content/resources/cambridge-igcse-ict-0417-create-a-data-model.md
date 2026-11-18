---
title: "Cambridge IGCSE ICT (0417): Create a data model"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 20: Spreadsheets"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 20.1
syllabusTopics:
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "create-a-data-model-0417"
description: "Building a spreadsheet model for Cambridge IGCSE ICT 0417 subtopic 20.1: structure, operators, replication, named ranges, lookups, IF and nested functions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 20.1 of Cambridge IGCSE ICT 0417, "Create a data model", asks you to **create and edit a spreadsheet model**. The syllabus guidance lists: insert and delete cells, rows and columns and merge cells; create formulae using cell references; replicate formulae using absolute and relative references; use arithmetic operators including indices; use named cells and named ranges; use functions including sum, average, maximum, minimum, integer, rounding, counting, LOOKUP, VLOOKUP, HLOOKUP, XLOOKUP and IF; use external data sources within functions; and use nested functions. You must also know the difference between a formula and a function, the order of operations and the characteristics of absolute and relative referencing.

The [Spreadsheets study guide](/resources/cambridge-igcse-ict-spreadsheets-study-guide/) introduces these ideas with a shop example. This page builds one model step by step and spends more time on the decisions behind each formula. Afterwards, use the [20.1 revision notes](/resources/cambridge-igcse-ict-0417-create-a-data-model-revision-notes/) and the [20.1 practice questions](/resources/cambridge-igcse-ict-0417-create-a-data-model-practice/).

## What makes a spreadsheet a model?

A model represents a real situation with **inputs**, **processing** (formulae) and **outputs**. Change an input and every output that depends on it recalculates. That only works if each output is a formula that refers to the input cells. A typed result, even a correct one, breaks the model because it will not change when the inputs do.

## The structure: cells, rows, columns and merging

- **Inserting** a row or column moves existing cells down or right. Formulae that refer to moved cells adjust automatically, and a range such as B2:B5 widens if a row is inserted inside it.
- **Inserting cells** (rather than a whole row) shifts only the neighbouring cells, which can misalign data in other columns. Use it only when the task asks.
- **Deleting** a row or column removes it completely. Any formula that referred to a deleted cell shows a reference error, so check the model after deleting.
- **Merging cells** joins several cells into one, typically to centre a title across the width of a table. Merge only title or heading cells: merged cells inside a data range get in the way of sorting and replicating.

## Formulae, functions and operators

A **formula** is any calculation you write, starting with =, such as =C2+B2*D2. A **function** is a named, built-in routine that performs a calculation on values or ranges, such as =SUM(E2:E5). A function is used inside a formula.

The arithmetic operators are + (add), − (subtract), * (multiply), / (divide) and ^ (indices, "to the power of").

### Order of operations

Spreadsheets apply **brackets** first, then **indices**, then **multiplication and division** (working left to right), then **addition and subtraction** (left to right).

| Formula | Working | Result |
|---|---|---|
| =2+3*4 | 3*4 = 12, then 2 + 12 | 14 |
| =2*3^2 | 3^2 = 9, then 2*9 | 18 |
| =(2*3)^2 | 2*3 = 6, then 6^2 | 36 |
| =20/4*2 | Left to right: 20/4 = 5, then 5*2 | 10 |
| =20/(4*2) | Brackets first: 4*2 = 8, then 20/8 | 2.5 |

Brackets are the way to **make sure that formulae work**. When in doubt, add them: =(C2+B2*D2)/B2 makes the order clear even though the multiplication inside would happen first anyway.

## Worked example: a school trip model

*All figures are invented.* A school compares four trips. Cell K1 holds the admin fee per student, 1.50, and has been given the name **Admin**.

| | A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|---|
| 1 | Trip | Students | Coach ($) | Entry per student ($) | Total cost ($) | Cost per student ($) | Charge ($) |
| 2 | Zoo | 38 | 450 | 12.50 | | | |
| 3 | Museum | 52 | 520 | 0.00 | | | |
| 4 | Theatre | 30 | 380 | 18.00 | | | |
| 5 | Science park | 45 | 600 | 15.75 | | | |

**Step 1, total cost.** In E2 enter =C2+B2*D2. Multiplication happens first, so the entry cost for all students is added to the coach cost. For the zoo: 38 × 12.50 = 475, plus 450, gives 925.

**Step 2, replicate.** Copy E2 down to E5. The references are **relative**, so E3 becomes =C3+B3*D3 and so on. Results: 925, 520, 920 and 1308.75.

**Step 3, cost per student with the admin fee.** In F2 enter =E2/B2+Admin (or =E2/B2+$K$1). Division happens before addition. The fee must stay fixed when copied, so it uses a **named cell** or an **absolute reference**. Copied down, F3 becomes =E3/B3+Admin. Results: 25.84, 11.50, 32.17 and 30.58 (to 2 decimal places).

If F2 had been written =E2/B2+K1 and copied down, F3 would become =E3/B3+K2, which is empty, so every row after the first would be wrong.

**Step 4, a whole-dollar charge.** In G2 enter =ROUND(F2,0) and copy down: 26, 12, 32 and 31. ROUND rounds to the nearest whole number (11.5 rounds up to 12). =INT(F2) would instead remove the decimal part: 25, 11, 32 and 30. Choose the function the task describes: rounding or integer.

**Step 5, summary functions.**

| Cell formula | Purpose | Result |
|---|---|---|
| =SUM(E2:E5) | Total cost of all trips | 3673.75 |
| =AVERAGE(B2:B5) | Mean number of students | 41.25 |
| =INT(AVERAGE(B2:B5)) | Whole-number part of the mean (nested) | 41 |
| =MAX(E2:E5) | Most expensive trip | 1308.75 |
| =MIN(F2:F5) | Lowest cost per student | 11.5 |
| =COUNTIF(B2:B5,">=40") | Trips with 40 or more students | 2 |

## Named cells and named ranges

A **named cell** (such as Admin) or **named range** (such as Students for B2:B5) replaces a reference with a meaningful name. Names are absolute by nature, so a formula such as =E2/B2+Admin can be replicated safely. They also make formulae easier to read and check: =SUM(Students) is clearer than =SUM(B2:B5). Use exactly the name the task gives, with the same spelling.

## Lookups

A discount table in K3:L5 (invented) gives group discounts: 0 students or more, 0%; 40 or more, 5%; 50 or more, 10%.

- **VLOOKUP** searches down the **first column** of a table and returns a value from a column to the right: =VLOOKUP(B2,$K$3:$L$5,2,TRUE). TRUE (approximate match) finds the largest value not greater than B2, so the first column must be in **ascending order**. Results: zoo 0%, museum 10%, theatre 0%, science park 5%. Use FALSE for an exact match when looking up codes or names.
- **HLOOKUP** is the same idea for a table laid out in rows: it searches across the **first row** and returns a value from a row below.
- **LOOKUP** finds a value in one row or column and returns the item in the same position from another; the lookup values must be in ascending order.
- **XLOOKUP** takes a lookup range and a separate return range, works in any direction and finds an exact match by default: =XLOOKUP("Theatre",A2:A5,E2:E5) returns 920.

The table range is made absolute (or named) so it does not move when the lookup formula is replicated.

## External data sources

A function can use data held in **another file or worksheet**, for example a VLOOKUP whose table is in a supplied workbook. The reference includes the file name in square brackets and the sheet name, such as =VLOOKUP(A2,[prices.xlsx]Sheet1!$A$2:$B$40,2,FALSE). Keep the external file in the location the task gives; if it is moved or renamed, the link breaks.

## Nested functions

A nested function is a function inside another. Common patterns:

- =ROUND(AVERAGE(F2:F5),2): average, then round.
- =IF(B2>=50,10%,IF(B2>=40,5%,0)): nested IF giving the same discounts as the lookup. Test the **highest** boundary first; reversing the order would give 5% to a group of 52.
- =IF(VLOOKUP(B2,$K$3:$L$5,2,TRUE)>0,"Discount","Full price"): a lookup inside an IF.

Work from the inside out when reading a nested function, and check each bracket has a partner.

## Common mistakes

- Typing results instead of formulae, so the model does not update.
- Relative references to a single input cell, so replicated formulae point at empty cells.
- Forgetting brackets, for example =C2+B2*D2/B2 instead of =(C2+B2*D2)/B2.
- Approximate-match VLOOKUP on a table that is not in ascending order.
- Using INT when the task says round, or the reverse.
- Deleting a row that a formula depends on, causing a reference error.

## Exam technique

Practical tasks use *create*, *enter*, *replicate*, *name* and *use*. Use the named cells and functions asked for, replicate rather than retyping, and check one result by hand. In theory questions, *explain* absolute referencing with a reason ("the rate must stay fixed when the formula is replicated, otherwise the reference moves to an empty cell") and *state* the difference between a formula and a function precisely.
