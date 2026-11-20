---
title: "Cambridge A Level Information Technology (9626): Using a spreadsheet -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 8 – Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8.3
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
  - qualification: "a-level"
    topic: "spreadsheets"
    subtopic: "using-a-spreadsheet"
description: "Twelve original Cambridge 9626 IT section 8.3 questions with answers on filtering, sorting, pivot tables, subtotals, and importing and exporting data."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Using a spreadsheet study guide](/resources/cambridge-a-level-ict-9626-using-a-spreadsheet/) | [Using a spreadsheet revision notes](/resources/cambridge-a-level-ict-9626-using-a-spreadsheet-revision-notes/)

These questions are for **section 8.3 Using a spreadsheet** (Topic 8, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Questions 4 to 7 use the class list below. All organisations are invented.

| Row | A: Student | B: Class | C: Score | D: Date joined |
|---|---|---|---|---|
| 2 | Amir | 9A | 72 | 03/09/2025 |
| 3 | Beth | 9B | 55 | 04/09/2025 |
| 4 | Chen | 9A | 88 | 03/09/2025 |
| 5 | Dana | 9C | 49 | 10/09/2025 |
| 6 | Farah | 9B | 91 | 04/09/2025 |
| 7 | Gareth | 9C | 66 | 11/09/2025 |
| 8 | Hana | 9A | 55 | 12/09/2025 |
| 9 | Jamal | 9B | 78 | 12/09/2025 |

---

## Section A

**1.** Describe what a filter does to a list of records. **[2]**

**2.** State the difference between using AND and using OR to combine two search criteria. **[2]**

**3.** State what the criterion `H*` finds in a Name column. **[1]**

## Section B

**4.** List the students returned by each search.

**(a)** Class = 9A AND Score >= 70 **[2]**

**(b)** Class = 9C OR Score >= 90 **[3]**

**(c)** NOT Class = 9B **[5]**

**(d)** Date joined <= 04/09/2025 **[4]**

**5.** The list is sorted by Score in descending order. Where scores are equal, the students are sorted by name in ascending order. Write down the order of the students. **[3]**

**6.** A pivot table is created with Class in the rows and the sum of Score as the values.

**(a)** State the value shown for each class. **[3]**

**(b)** State the grand total. **[1]**

**(c)** The pivot table is changed to show the average score. Calculate the average for class 9B, to two decimal places. **[2]**

**(d)** Jamal's score is corrected from 78 to 80 in the data. State what must be done for the pivot table to show this. **[1]**

**7.** A teacher wants a total score for each class inserted into the list as subtotals.

**(a)** State what must be done to the list first, and why. **[2]**

**(b)** Describe how grouping could make a printout of the list shorter. **[2]**

**8.** A school wants to send student data to its database software.

**(a)** Name a suitable file format. **[1]**

**(b)** Describe **two** limitations of this format. **[2]**

**9.** Explain why a spreadsheet should be exported to PDF before being emailed to parents as a final report. **[3]**

**10.** A text file contains product codes such as 00423. After import into the spreadsheet they show as 423.

**(a)** Explain what has happened. **[2]**

**(b)** State how to prevent it. **[1]**

**11.** Describe the steps to create a pivot chart that shows the total score for each class. **[4]**

**12.** Evaluate using a pivot table instead of writing separate SUMIF formulas for each class. **[6]**

---

## Answers

**1.** It displays only the records that meet the criteria [1] and hides the others without deleting them [1]. **[2]**

**2.** AND needs all the criteria to be true, so it returns fewer records [1]; OR needs only one to be true, so it returns more records [1]. **[2]**

**3.** Text that starts with H [1]. **[1]**

**4. (a)** Amir, Chen [2] (one mark if one is missing or an extra is given).

**(b)** Dana, Gareth, Farah [3] (lose a mark for each missing or extra).

**(c)** Amir, Chen, Dana, Gareth, Hana [5].

**(d)** Amir, Beth, Chen, Farah [4]. **[14]**

**5.** Farah (91), Chen (88), Jamal (78), Amir (72), Gareth (66), Beth (55), Hana (55), Dana (49). Award [1] for Farah, Chen, Jamal, Amir correct at the top, [1] for Gareth at fifth place, and [1] for Beth before Hana and Dana last. **[3]**

**6. (a)** 9A: 215 [1]; 9B: 224 [1]; 9C: 115 [1].

**(b)** 554 [1].

**(c)** (55 + 91 + 78) divided by 3 = 224 / 3 = 74.67 [2].

**(d)** Refresh the pivot table [1]. **[7]**

**7. (a)** Sort the list by Class [1], so that students of the same class are together and each class gets one subtotal [1].

**(b)** Group the rows by class [1] and collapse the groups, so only the subtotal rows are printed [1]. **[4]**

**8. (a)** CSV (comma-separated values) [1].

**(b)** Any two from: it does not keep formulas [1]; it does not keep formatting [1]; it stores only one sheet [1]; it holds text only [1]. **[3]**

**9.** The layout is fixed, so parents see the report exactly as designed [1]; the content cannot easily be changed by accident or on purpose [1]; it can be opened on any device without the spreadsheet program [1]. **[3]**

**10. (a)** The software has read the codes as numbers [1] and removed the leading zeros [1].

**(b)** Set the column to text when importing [1]. **[3]**

**11.** Create a pivot table from the data with Class in the rows and the sum of Score as the values [1]. Select the pivot table [1]. Insert a pivot chart of a suitable type, such as a column chart [1]. Add a title and axis labels [1]. **[4]**

**12.** For: a pivot table is created quickly by choosing fields [1]; it automatically includes every class and a grand total, so no class is missed [1]; the layout can be changed to show averages or counts without new formulas [1]. Against: it must be refreshed when data changes, while SUMIF formulas update at once [1]; it is less flexible for a layout that must match a set design [1]; a new user may find it harder to set up than a formula [1]. Conclusion: pivot tables are better for summarising many groups, SUMIF for small, fixed reports [1]. Any six marks. **[6]**

## Where marks are usually lost

- Using OR where AND is needed.
- Sorting only one column.
- Forgetting to sort before inserting subtotals.
- Forgetting to refresh a pivot table after the data changes.
- Saying that CSV keeps formulas and formatting.
