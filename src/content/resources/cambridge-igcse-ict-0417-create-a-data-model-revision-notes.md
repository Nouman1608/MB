---
title: "Cambridge IGCSE ICT (0417): Create a data model -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0417 subtopic 20.1: spreadsheet structure, order of operations, relative and absolute references, named ranges, lookups and nested functions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense Cambridge IGCSE ICT 0417 subtopic 20.1 Create a data model: building and editing a spreadsheet model with formulae, replication, named cells, functions, external data and nested functions. The full explanation, with a worked school trip model, is in the [20.1 Create a data model study guide](/resources/cambridge-igcse-ict-0417-create-a-data-model/). Test yourself with the [20.1 practice questions](/resources/cambridge-igcse-ict-0417-create-a-data-model-practice/). For all of Topic 20, see the [Spreadsheets revision notes](/resources/cambridge-igcse-ict-spreadsheets-revision-notes/).

## Syllabus checklist

- Insert and delete cells, rows and columns; merge cells.
- Create formulae using cell references; replicate them with absolute and relative references.
- Use the operators add, subtract, multiply, divide and indices.
- Use named cells and named ranges.
- Use functions: sum, average, maximum, minimum, integer, rounding, counting, LOOKUP, VLOOKUP, HLOOKUP, XLOOKUP, IF.
- Use external data sources within functions; use nested functions.
- Know: formula vs function; order of operations (and brackets); absolute vs relative referencing.

## Key terms

| Term | Meaning |
|---|---|
| Data model | A spreadsheet in which outputs are calculated from inputs, so changing an input updates the results |
| Formula | A calculation written by the user, starting with = |
| Function | A named, built-in routine used within a formula, such as SUM |
| Operator | A symbol for a calculation: + − * / ^ |
| Indices (^) | Raises a number to a power: =3^2 gives 9 |
| Replicate | Copy a formula to other cells so it adjusts to each row or column |
| Relative reference | A reference such as B2 that changes when replicated |
| Absolute reference | A reference such as $K$1 that stays fixed when replicated |
| Named cell / range | A cell or range given a name, which acts as an absolute reference |
| Nested function | A function used inside another function |
| External data source | Data in another workbook or worksheet used by a function |

## Order of operations

**B**rackets → **I**ndices → **M**ultiplication and **D**ivision (left to right) → **A**ddition and **S**ubtraction (left to right).

| Formula | Result |
|---|---|
| =10-2^3/4 | 2^3 = 8; 8/4 = 2; 10 − 2 = **8** |
| =(10-2)^3/4 | 8^3 = 512; 512/4 = **128** |
| =6+4/2 | 4/2 = 2; 6 + 2 = **8** |
| =(6+4)/2 | 10/2 = **5** |
| =12/3*2 | 12/3 = 4; 4*2 = **8** (left to right) |

## Relative vs absolute

| Formula in F2 | Copied to F3 | Copied to G2 |
|---|---|---|
| =E2/B2 | =E3/B3 | =F2/C2 |
| =E2*$K$1 | =E3*$K$1 | =F2*$K$1 |
| =E2*Rate (named cell) | =E3*Rate | =F2*Rate |

Use an absolute reference or a name for **one fixed input** (rate, fee, total, lookup table). Use relative references for values that change row by row.

## Structure changes

| Action | Effect on formulae |
|---|---|
| Insert a row inside a range | The range expands, for example =SUM(B2:B5) becomes =SUM(B2:B6) |
| Insert a column | References to cells to the right move with them |
| Delete a row a formula uses | The formula shows a reference error |
| Merge cells | Use for titles only; merged cells in data stop sorting and replication working cleanly |

## Functions to know

| Function | Example | Result (invented data) |
|---|---|---|
| SUM | =SUM(B2:B5) with 38, 52, 30, 45 | 165 |
| AVERAGE | =AVERAGE(B2:B5) | 41.25 |
| MAX / MIN | =MAX(B2:B5) / =MIN(B2:B5) | 52 / 30 |
| INT | =INT(7.8) | 7 (decimal part removed) |
| ROUND | =ROUND(7.8,0) / =ROUND(3.456,2) | 8 / 3.46 |
| COUNT | =COUNT(B2:B5) | 4 (cells containing numbers) |
| COUNTA | =COUNTA(A2:A5) | 4 (non-empty cells) |
| COUNTIF | =COUNTIF(B2:B5,">=40") | 2 |
| IF | =IF(B2>=40,"Large","Small") | "Small" for 38 |

## Lookup functions compared

| Function | Searches | Returns | Notes |
|---|---|---|---|
| VLOOKUP | Down the first column of a table | A value from a column to the right, by column number | FALSE = exact; TRUE = approximate (first column ascending) |
| HLOOKUP | Across the first row of a table | A value from a row below, by row number | Same match options as VLOOKUP |
| LOOKUP | One row or column | The item in the same position in another row or column | Lookup values must be ascending |
| XLOOKUP | A lookup range | The matching item from a separate return range | Exact match by default; any direction |

Make the table range **absolute** or **named** before replicating.

## External data and nesting

- External reference: =VLOOKUP(A2,[prices.xlsx]Sheet1!$A$2:$B$40,2,FALSE). The file must stay where the formula expects it.
- Nesting: =ROUND(AVERAGE(C2:C5),1); =IF(B2>=50,10%,IF(B2>=40,5%,0)) (test the highest boundary first).

## Exam traps

- A typed answer in place of a formula.
- A relative reference to a fixed input, giving wrong results or zeros in copied rows.
- Missing brackets: =A2+B2/2 is not the average of A2 and B2; =(A2+B2)/2 is.
- INT versus ROUND: INT(7.8) is 7, not 8.
- Approximate VLOOKUP with an unsorted first column, or approximate when an exact match is needed.
- Unbalanced brackets in nested functions.
- Saying "a function is a formula you type": a function is **predefined**.

## Self-test

1. Calculate =4+6^2/3.
2. Calculate =(4+6)^2/4.
3. State the difference between a formula and a function.
4. A formula in D2 is =B2*C2. What does it become when replicated to D5?
5. A formula in F2 is =E2*$H$1. What does it become when replicated to F4?
6. Why does a named cell behave like an absolute reference?
7. State the result of =INT(9.87) and of =ROUND(9.87,1).
8. Write a function to count how many cells in C2:C9 contain the text "Yes".
9. Which lookup function searches across the first row of a table?
10. Why must the first column be in ascending order for an approximate-match VLOOKUP?
11. A total in B8 is =SUM(B2:B7). A row is inserted at row 4. What is the formula now and where is it?
12. Write a nested function to show the average of D2:D9 rounded to 2 decimal places.

### Answers

1. 6^2 = 36; 36/3 = 12; 4 + 12 = 16.
2. 10^2 = 100; 100/4 = 25.
3. A formula is a calculation written by the user; a function is a predefined, named routine (such as SUM) used within a formula.
4. =B5*C5.
5. =E4*$H$1.
6. The name always refers to the same cell, so it does not change when the formula is replicated.
7. 9 and 9.9.
8. =COUNTIF(C2:C9,"Yes").
9. HLOOKUP.
10. Approximate match finds the largest value not greater than the lookup value, which only works correctly if the values are in ascending order.
11. =SUM(B2:B8), now in B9.
12. =ROUND(AVERAGE(D2:D9),2).

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 20 Spreadsheets, 20.1 Create a data model.
