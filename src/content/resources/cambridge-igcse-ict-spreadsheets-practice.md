---
title: "IGCSE ICT: Spreadsheets — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 20: Spreadsheets"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 20
syllabusTopics:
  - qualification: "igcse"
    topic: "spreadsheets-0417"
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "create-a-data-model-0417"
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "manipulate-data-20-2-0417"
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "present-data-20-3-0417"
description: "Original exam-style spreadsheet questions with worked answers on formulae, cell references, IF, VLOOKUP, sorting and conditional formatting for IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These questions cover Cambridge IGCSE ICT 0417 Topic 20: creating a data model (20.1), manipulating data (20.2) and presenting data (20.3). Spreadsheets are assessed practically in Paper 3, so the questions ask you to write the exact formulae you would enter, with worked answers showing each formula and why it works.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Spreadsheets revision notes](/resources/cambridge-igcse-ict-spreadsheets-revision-notes/) · [Spreadsheets study guide](/resources/cambridge-igcse-ict-spreadsheets-study-guide/)

---

## The data model

A café uses this spreadsheet. Cell G1 holds the service charge rate, 0.1.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Code | Item | Price ($) | Qty sold | Takings ($) |
| 2 | C01 | Coffee | 2.80 | 145 | |
| 3 | T02 | Tea | 2.20 | 98 | |
| 4 | S03 | Sandwich | 4.75 | 62 | |
| 5 | M04 | Muffin | 2.95 | 7 | |
| 6 | J05 | Juice | 3.10 | 40 | |
| 7 | | Total | | | |

---

## Section A: short answers

**1.** State the difference between a formula and a function. **[2]**

**2.** Calculate the result of `=3+6/3*2`. **[1]**

**3.** State what is meant by a *named range*. **[1]**

---

## Section B: structured questions

**4. (a)** Write the formula for E2 to calculate the takings for coffee. **[1]**
**(b)** Write the formula for E7 to calculate the total takings using a function. **[1]**
**(c)** Write a formula for F2, to be replicated down to F6, that calculates the service charge on the takings using the rate in G1. **[2]**
**(d)** Explain why your formula in (c) uses an absolute reference. **[2]**

**5.** Write a formula for G2, to be replicated down, that displays "Popular" if Qty sold is 50 or more, and "Low" otherwise. **[3]**

**6.** Cell H2 must show "Best seller" if Qty sold is over 100, "Popular" if it is 50 or more, and "Low" otherwise. Write a nested IF formula. **[3]**

**7.** A separate range, J2:K6, holds item codes in column J and supplier names in column K.

**(a)** Write a formula for L2 that looks up the code in A2 and returns the supplier name. **[3]**
**(b)** Explain why an exact match is required. **[1]**

**8. (a)** Write a formula to show the price of the most expensive item. **[1]**
**(b)** Write a formula to round the average price to 1 decimal place. **[2]**
**(c)** Write a formula to count how many items sold fewer than 50. **[2]**

**9.** Describe how to sort the data so that items appear with the highest takings first, keeping each row together. **[2]**

**10.** Describe how to search the data to show only items whose code starts with C or whose price is greater than $4. **[2]**

---

## Section C: presenting the data

**11.** Describe how to make cells E2:E6 show a red fill when takings are less than $100. **[2]**

**12.** The manager wants a one-page landscape printout showing the formulae, with row and column headings. Describe four settings to change. **[4]**

---

## Worked answers

**1.** A formula is any calculation written by the user, starting with = (1); a function is a predefined, named formula such as SUM or AVERAGE (1). **[2]**

**2.** 7 (division and multiplication left to right first: 6/3 = 2, 2 × 2 = 4; then 3 + 4). **[1]**

**3.** A range of cells given a name that can be used in formulae instead of the cell references. **[1]**

**4. (a)** `=C2*D2` **[1]**
**(b)** `=SUM(E2:E6)` **[1]**
**(c)** `=E2*$G$1` (1 for E2, 1 for $G$1). A named cell, for example `=E2*Rate`, is also credited. **[2]**
**(d)** When the formula is copied down, the reference to G1 must not change (1); without $ signs it would become G2, G3 … which are empty, giving wrong results (1). **[2]**

**5.** `=IF(D2>=50,"Popular","Low")` — 1 for the condition D2>=50, 1 for "Popular" as true value, 1 for "Low" as false value. **[3]**

**6.** `=IF(D2>100,"Best seller",IF(D2>=50,"Popular","Low"))` — 1 for the first test and result, 1 for the nested IF, 1 for the correct order and final "Low". **[3]**

**7. (a)** `=VLOOKUP(A2,$J$2:$K$6,2,FALSE)` — 1 for lookup value A2, 1 for the absolute table range, 1 for column 2 with exact match. `=XLOOKUP(A2,$J$2:$J$6,$K$2:$K$6)` or `=LOOKUP(A2,$J$2:$J$6,$K$2:$K$6)` also credited (LOOKUP needs the codes sorted). **[3]**
**(b)** Codes are unique identifiers, so the formula must return the supplier for that exact code, not the nearest one. **[1]**

**8. (a)** `=MAX(C2:C6)` **[1]**
**(b)** `=ROUND(AVERAGE(C2:C6),1)` (1 for AVERAGE nested in ROUND, 1 for 1 decimal place). **[2]**
**(c)** `=COUNTIF(D2:D6,"<50")` (1 for range, 1 for criterion). **[2]**

**9.** Select the whole data range A1:E6 (or A2:E6) so rows stay together (1), and sort on column E (Takings) in descending order (1). **[2]**

**10.** Apply a filter/search with the criteria code like `C*` (wildcard) (1) OR price `>4`, using OR so items meeting either condition are shown (1). **[2]**

**11.** Select E2:E6 and apply conditional formatting (1) with the rule "cell value less than 100" set to a red fill (1). **[2]**

**12.** Any four: switch to formulae view (show formulae); widen columns so formulae are fully visible; set orientation to landscape; fit to 1 page (wide and tall); display row and column headings; set the print area to the data. **[4]**

## Frequently asked questions

**Do I have to write formulae in capitals?**
Spreadsheet software accepts either, but write function names clearly, use the exact cell references and include the = sign.

**Which is better, VLOOKUP or XLOOKUP?**
Both are in the 0417 syllabus. XLOOKUP can look in any direction and defaults to an exact match; VLOOKUP needs the lookup column to be the first column of the table.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 20 "Spreadsheets" (20.1 Create a data model, 20.2 Manipulate data, 20.3 Present data) and section 4, Paper 3.
