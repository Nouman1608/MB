---
title: "Cambridge IGCSE ICT (0417): Manipulate data (Spreadsheets) -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 20: Spreadsheets"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 20.2
syllabusTopics:
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "manipulate-data-20-2-0417"
description: "Original questions with full answers on sorting and filtering spreadsheet data for 0417 subtopic 20.2: multi-level sorts, AND, OR, NOT, operators and wildcards."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 subtopic 20.2 Manipulate data: sorting on single and multiple criteria, and searching and selecting subsets with operators and wildcards. Section B uses the data below. The number in square brackets after the last part of a question is the total for the whole question. All titles and figures are invented.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [20.2 Manipulate data study guide](/resources/cambridge-igcse-ict-0417-manipulate-data-20-2/) · [20.2 Manipulate data revision notes](/resources/cambridge-igcse-ict-0417-manipulate-data-20-2-revision-notes/)

---

## The data

A bookshop keeps this stock sheet, with headings in row 1.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Code | Title | Genre | Pages | Price ($) |
| 2 | B101 | The Lantern Road | Fantasy | 320 | 8.99 |
| 3 | B102 | Cold Harbour | Crime | 280 | 7.50 |
| 4 | B103 | Starfall | Science fiction | 410 | 9.99 |
| 5 | B104 | The Last Orchard | Fantasy | 198 | 6.25 |
| 6 | B105 | Night Ferry | Crime | 352 | 8.50 |
| 7 | B106 | Tidewatch | Science fiction | 265 | 7.99 |
| 8 | B107 | The Glass Tower | Fantasy | 455 | 10.50 |
| 9 | B108 | Hollow Hill | Crime | 230 | 6.99 |

---

## Section A: short answers

**1.** Which operator should be used for the condition "no more than 300 pages"?

A: <

B: <=

C: >=

D: <> **[1]**

**2.** State what the wildcard * represents in a search. **[1]**

**3.** Explain the difference between sorting data and filtering data. **[2]**

**4.** A student selects only column D and sorts it in ascending order. State the problem this causes. **[1]**

**5.** Write a search criterion that selects every title beginning with the word *The*. **[1]**

**6.** State the wildcard that represents exactly one character. **[1]**

---

## Section B: structured questions

**7. (a)** List the titles in order when the data is sorted by Pages in descending order.

**(b)** The data is sorted by Genre ascending and then by Price ascending. State the first three titles in the sorted list.

**(c)** Explain why the second criterion is needed in part (b). **[7]**

**8.** State the titles selected by each search.

**(a)** Genre = Fantasy AND Price < 9

**(b)** Genre = Crime OR Pages > 400

**(c)** Title = The*

**(d)** NOT Genre = Fantasy AND Price >= 8 **[4]**

**9.** The manager wants a list of books with between 250 and 350 pages, including books with exactly 250 or 350 pages.

**(a)** Write the search criteria, using the correct operators.

**(b)** State how many books are selected. **[3]**

**10.** A student wants to show all Crime and all Science fiction books. He sets up the search Genre = Crime AND Genre = Science fiction, and no rows are shown.

**(a)** Explain why no rows are shown.

**(b)** Write the correct search criteria. **[3]**

**11.** Describe how to display only Fantasy books priced over $8, with the most expensive first, and state the titles displayed in order. **[5]**

**12.** The manager wants to see books that are either Crime **or** cost more than $9.

**(a)** Explain why setting a filter on Genre and a filter on Price will not give this result.

**(b)** Describe how the criteria would be laid out in a criteria range for an advanced filter.

**(c)** State how many books are selected. **[4]**

**13. (a)** State the titles matched by the search Title = \*ow\*.

**(b)** Write a search criterion that selects titles that are exactly eight characters long, and state the title it selects. **[3]**

---

## Answers

**1.** B: <= **[1]**

**2.** Any number of characters, including none (1). **[1]**

**3.** Sorting rearranges all the rows into an order (1); filtering shows only the rows that meet criteria and hides the rest, without changing their order (1). **[2]**

**4.** Only the Pages values move, so the pages no longer match their titles and other data; the rows are scrambled (1). **[1]**

**5.** The* (1). **[1]**

**6.** ? (1). **[1]**

**7. (a)** The Glass Tower, Starfall, Night Ferry, The Lantern Road, Cold Harbour, Tidewatch, Hollow Hill, The Last Orchard. 2 marks for the full correct order; 1 mark if the first four are correct.

**(b)** Hollow Hill (1), Cold Harbour (1), Night Ferry (1).

**(c)** Several books share the same genre (1), so the second criterion puts the books within each genre in price order (1). **[7]**

**8. (a)** The Lantern Road and The Last Orchard (1).

**(b)** Cold Harbour, Starfall, Night Ferry, The Glass Tower and Hollow Hill (1).

**(c)** The Lantern Road, The Last Orchard and The Glass Tower (1).

**(d)** Starfall and Night Ferry (1). **[4]**

**9. (a)** Pages >= 250 (1) AND Pages <= 350 (1).

**(b)** 3 (The Lantern Road 320, Cold Harbour 280, Tidewatch 265; Night Ferry has 352 so is excluded) (1). **[3]**

**10. (a)** AND requires both conditions to be true for the same row (1); a book cannot have two genres at once, so no row meets both (1).

**(b)** Genre = Crime OR Genre = Science fiction (1). **[3]**

**11.** Filter the Genre column to show Fantasy (1). Filter the Price column with the criterion > 8 (1); the two filters combine with AND (1). Sort the visible rows by Price in descending order (1). Titles: The Glass Tower, then The Lantern Road (1). **[5]**

**12. (a)** Filters on different columns combine with AND, so only Crime books costing more than $9 would show (there are none) (1).

**(b)** Use two rows under the headings Genre and Price: Crime under Genre on one row, and > 9 under Price on a different row (1); criteria on different rows are combined with OR (1).

**(c)** 5 (the three Crime books, Starfall and The Glass Tower) (1). **[4]**

**13. (a)** The Glass Tower (1) and Hollow Hill (1).

**(b)** ???????? (eight question marks), selecting Starfall (1). **[3]**

## Frequently asked questions

**Are spreadsheet searches case sensitive?**
Filters in most spreadsheet packages are not case sensitive, so *the\** also finds titles starting with *The*. Use the case shown in the task anyway, so your criteria match the instructions exactly.

**What is the difference between this subtopic and database queries?**
The logic of AND, OR, NOT, comparison operators and wildcards is the same. In a spreadsheet you filter rows of a worksheet; in a database you run a query on records in a table.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 20 Spreadsheets, 20.2 Manipulate data.
