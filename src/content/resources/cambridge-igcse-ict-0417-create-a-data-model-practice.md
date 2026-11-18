---
title: "Cambridge IGCSE ICT (0417): Create a data model -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on spreadsheet models for 0417 subtopic 20.1: operators, replication, named cells, HLOOKUP, XLOOKUP, IF and nesting."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 subtopic 20.1 Create a data model. Section B uses the model below. The number in square brackets after the last part of a question is the total for the whole question. All data is invented for practice.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [20.1 Create a data model study guide](/resources/cambridge-igcse-ict-0417-create-a-data-model/) · [20.1 Create a data model revision notes](/resources/cambridge-igcse-ict-0417-create-a-data-model-revision-notes/)

---

## The model

A phone shop uses this spreadsheet to work out monthly bills.

| | A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|---|
| 1 | Customer | Plan | Data used (GB) | Price ($) | Allowance (GB) | Extra charge ($) | Total ($) |
| 2 | Ali | S | 6 | | | | |
| 3 | Bea | M | 11 | | | | |
| 4 | Chen | L | 33 | | | | |
| 5 | Dev | M | 7 | | | | |
| 6 | | | | | | Total | |

A plan table is held in K1:N3, and cell L5 holds the charge for each GB used above the allowance. L5 has been named **Extra**.

| | K | L | M | N |
|---|---|---|---|---|
| 1 | Plan | S | M | L |
| 2 | Price ($) | 8 | 15 | 22 |
| 3 | Allowance (GB) | 5 | 12 | 30 |
| 5 | Extra per GB ($) | 2.00 | | |

---

## Section A: short answers

**1.** What is the result of =18-3^2*2?

A: −63

B: 0

C: 18

D: 30 **[1]**

**2.** Explain why the outputs of a data model should be calculated with formulae rather than typed in. **[2]**

**3.** State the result of =INT(12.7) and of =ROUND(12.75,1). **[2]**

**4.** Write a formula that calculates the value in B4 raised to the power 3. **[1]**

**5.** State **one** reason for merging cells A1 to G1 above a table. **[1]**

**6.** Give **two** benefits of naming cell L5 *Extra* rather than referring to it as $L$5. **[2]**

---

## Section B: structured questions

**7. (a)** Write a formula for D2, using HLOOKUP, that returns the price of the customer's plan.

**(b)** Write a formula for E2 that returns the customer's data allowance.

**(c)** Explain why the table range in your formulae must be an absolute reference. **[6]**

**8. (a)** Write a formula for F2, using IF and the named cell *Extra*, that calculates the extra charge when the data used is more than the allowance, and 0 otherwise.

**(b)** State the value shown in F4 when your formula is replicated.

**(c)** Another student enters =IF(C2>E2,C2-E2*Extra,0). Explain the error and state the value this formula would give for Chen. **[6]**

**9. (a)** Write a formula for G2 and a formula for G6.

**(b)** Calculate the value in G6. **[3]**

**10.** Write a formula for D2 that uses XLOOKUP instead of HLOOKUP. **[2]**

**11. (a)** Write a formula to count the customers on plan M, and state its result.

**(b)** Write a nested formula to show the average data used, rounded to 1 decimal place, and state its result. **[4]**

**12.** The shop moves the plan table to a separate workbook called *plans.xlsx*, on Sheet1, in cells B1:D3.

**(a)** Rewrite the formula for D2 so that it uses this external data source.

**(b)** Describe **one** risk of using an external data source. **[3]**

**13.** The shop inserts a new row 4 for a new customer.

**(a)** Describe what happens to the formula in the total cell, which was =SUM(G2:G5).

**(b)** Explain why the formulae in D3 to G3 should be replicated into the new row rather than retyped. **[3]**

---

## Answers

**1.** B: 0 (3^2 = 9; 9*2 = 18; 18 − 18 = 0). **[1]**

**2.** Formulae recalculate automatically when an input changes (1), so the model stays correct and can be used to test "what if" changes; typed values would not update (1). **[2]**

**3.** 12 (1); 12.8 (1). **[2]**

**4.** =B4^3 (1). **[1]**

**5.** Any one: to centre a title across the width of the table (1); to make one heading cover several columns (1). **[1]**

**6.** Any two, 1 mark each: the formula is easier to read and understand (1); the name acts as an absolute reference, so replicated formulae stay correct (1); the rate can be changed in one place (1); fewer errors from typing the wrong reference (1). **[2]**

**7. (a)** =HLOOKUP(B2,$K$1:$N$3,2,FALSE): lookup value B2 (1); absolute table range $K$1:$N$3 or $L$1:$N$3 (1); row 2 with exact match FALSE (1).

**(b)** =HLOOKUP(B2,$K$1:$N$3,3,FALSE) (1).

**(c)** The formula is replicated down to rows 3 to 5 (1); a relative range would move down one row each time, so later formulae would search the wrong cells and give errors or wrong values (1). **[6]**

**8. (a)** =IF(C2>E2,(C2-E2)*Extra,0): condition C2>E2 (1); (C2-E2)*Extra as the true value, with brackets (1); 0 as the false value (1).

**(b)** 6 (Chen uses 33 GB with an allowance of 30: 3 × 2.00) (1).

**(c)** Without brackets the multiplication E2*Extra is done before the subtraction, so the allowance is doubled and then subtracted (1). For Chen: 33 − 30 × 2 = 33 − 60 = −27 (1). **[6]**

**9. (a)** G2: =D2+F2 (1). G6: =SUM(G2:G5) (1).

**(b)** Totals are 10, 15, 28 and 15, so G6 = 68 (1). **[3]**

**10.** =XLOOKUP(B2,$L$1:$N$1,$L$2:$N$2): lookup range $L$1:$N$1 (1); return range $L$2:$N$2 (1). **[2]**

**11. (a)** =COUNTIF(B2:B5,"M") (1); result 2 (1).

**(b)** =ROUND(AVERAGE(C2:C5),1) (1); (6 + 11 + 33 + 7) ÷ 4 = 57 ÷ 4 = 14.25, shown as 14.3 (1). **[4]**

**12. (a)** =HLOOKUP(B2,[plans.xlsx]Sheet1!$B$1:$D$3,2,FALSE): file name and sheet in the reference (1); correct absolute range with row 2 and exact match (1).

**(b)** Any one: if the file is moved, renamed or deleted the link breaks and the formula gives an error (1); changes made to the external file change the results without the user noticing (1). **[3]**

**13. (a)** The range expands to include the new row (1), so the formula becomes =SUM(G2:G6), now in G7 (1).

**(b)** Replicating copies the same structure with relative references adjusted to the new row, so the results are calculated consistently and no typing errors are introduced (1). **[3]**

## Frequently asked questions

**Can I use XLOOKUP if the task says VLOOKUP or HLOOKUP?**
Use the function the task names. LOOKUP, VLOOKUP, HLOOKUP and XLOOKUP are all listed in the syllabus, so be ready to write each of them.

**Do I need to write formulae with capital letters?**
Spreadsheet software accepts either, but write function names in capitals in written answers so they are easy to read.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 20 Spreadsheets, 20.1 Create a data model.
