---
title: "Cambridge A Level Information Technology (ICT): Spreadsheets (9626) -- Practice Questions"
seoTitle: "Cambridge A Level ICT 9626 Spreadsheets Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
description: "Original practice questions with marked answers for Cambridge AS & A Level IT 9626 Spreadsheets: formulas, functions, test data and charts."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 8, Spreadsheets**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), sections 8.1 to 8.4. Topic 8 is an **AS Level** topic, assessed mainly in **Paper 2 (Practical)**, with written questions possible in Paper 1 (Theory). Paper 2 is done on a computer; these questions are written so you can answer them on paper, by writing formulas and predicting results.

Learn the content first in the [Spreadsheets study guide](/resources/a-level-cambridge-ict-spreadsheets/) and the [Spreadsheets revision notes](/resources/a-level-cambridge-ict-spreadsheets-revision-notes/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/).

The answers show one acceptable response with a [1] for each creditworthy point. They are indicative marking written for this practice set, not official mark schemes; other valid formulas and points also earn credit.

## Questions

**1.** A wide price list prints across three portrait A4 pages. State **three** page layout changes that would fit it on one A4 page. **[3]**

**2.** Explain the difference between an **input message** and an **error message** used with a validation rule. **[2]**

**3.** Cell C3 contains `=$B3*C$2`. It is copied to cell E6.

**(a)** Write the formula that appears in E6. **[1]**
**(b)** Explain why each `$` is needed when the formula fills a grid. **[2]**

**4.** Describe how a spreadsheet can be set up so that users can type in the Hours column but cannot change the formulas in the Cost column. **[3]**

**5.** A bike hire shop records hires in rows 2 to 9. Hourly rates are in H1:I3 (E-bike 12, Mountain 8, Road 6).

| Row | A ID | B Date | C Bike | D Hours | E Cost |
|---|---|---|---|---|---|
| 2 | BH-0457-E | 06/06/2026 | E-bike | 3 | 36 |
| 3 | BH-0458-R | 06/06/2026 | Road | 2 | 12 |
| 4 | BH-0461-M | 07/06/2026 | Mountain | 5 | 40 |
| 5 | BH-0462-E | 07/06/2026 | E-bike | 1 | 12 |
| 6 | BH-0470-R | 09/06/2026 | Road | 6 | 36 |
| 7 | BH-0473-E | 10/06/2026 | E-bike | 4 | 48 |
| 8 | BH-0475-M | 12/06/2026 | Mountain | 2 | 16 |
| 9 | BH-0478-E | 13/06/2026 | E-bike | 2 | 24 |

**(a)** Write a formula to count the E-bike hires. **[1]**
**(b)** Write a formula to total the cost of E-bike hires longer than 2 hours. **[2]**
**(c)** State the result of your formula in (b). **[1]**

**6.** E2 contains `=D2*VLOOKUP(C2,$H$1:$I$3,2,FALSE)`.

**(a)** Explain the purpose of `$H$1:$I$3`, `2` and `FALSE`. **[3]**
**(b)** A hire of type "Tandem" is entered. Rewrite the formula so the cell shows "Check bike type" instead of an error. **[2]**

**7.** State the result of each formula, using the table in question 5. **[4]**

`=LEFT(A2,2)`, `=MID(A2,4,4)`, `=VALUE(MID(A2,4,4))+1`, `=FIND("-",A2,4)`

**8.** Hires of 5 hours or more get 20% off; hires of 3 or 4 hours get 10% off; shorter hires pay full cost.

**(a)** Write a formula for F2 that gives the discounted cost. **[3]**
**(b)** State the results in F2 and F4. **[2]**

**9.** The Hours column must accept only whole numbers from 1 to 12. Complete a test plan with one item of normal data, the extreme data and two different items of abnormal data, giving the expected result of each, and explain why extreme data is tested. **[6]**

**10.** 6 June 2026 was a Saturday.

**(a)** State the result of `=WEEKDAY(B2)`. **[1]**
**(b)** Bikes must be returned within 7 days. Write a formula for the return-by date of the hire in row 2 and state its result. **[2]**
**(c)** Write a formula to count E-bike hires on or after 7 June 2026, and state its result. **[2]**

**11.** The manager wants total takings for each bike type.

**(a)** Describe how subtotals could produce these totals. **[3]**
**(b)** State the total for E-bikes. **[1]**
**(c)** Give **one** advantage of a pivot table over subtotals for this task. **[1]**

**12.** The manager asks for two charts and two files.

**(a)** Chart 1 shows each bike type's share of total takings. Name the chart type, calculate the percentage the E-bike segment should show to 1 decimal place, and describe how to emphasise that segment. **[3]**
**(b)** Chart 2 shows, for each day, the number of hires and the takings. Name a suitable chart type and explain why it needs a secondary axis. **[3]**
**(c)** The report goes to the owner as a pdf and the hire data goes to a booking app as a csv file. Explain why each format suits its purpose. **[2]**

## Answers

**1.** Change to **landscape** orientation [1]; set **fit to page**, one page wide [1]; **reduce the margins** [1].
*Examiner insight:* each change must be distinct; "make it smaller" and "fit to page" describe one change, so earn one mark.

**2.** An input message appears **when the cell is selected**, telling the user what to enter [1]; an error message appears **when invalid data is entered**, explaining what was wrong and what is allowed [1].
*Examiner insight:* both "when" and "what for" are needed; describing only one message caps the answer at one mark.

**3. (a)** **`=$B6*E$2`** [1]
**(b)** `$B` keeps every copy reading the values in **column B** [1]; `$2` keeps every copy reading the values in **row 2** [1].
*Examiner insight:* in (a) the whole formula must be exact; one wrong reference loses the mark.

**4.** Clear the **locked** setting on the Hours cells [1]; leave the Cost cells **locked** [1]; then **protect the worksheet**, ideally with a password [1].
*Examiner insight:* the order matters; protecting the sheet first would lock the Hours cells too.

**5. (a)** **`=COUNTIF(C2:C9,"E-bike")`** [1]
**(b)** `=SUMIFS(E2:E9,` with the cost range first [1], then `C2:C9,"E-bike",D2:D9,">2")` [1]
**(c)** **84** [1]
*Examiner insight:* the criterion `">2"` must be in quotes; writing `>2` without quotes gives an invalid formula.

**6. (a)** `$H$1:$I$3` is the rate table, **absolute** so it does not move when copied [1]; `2` returns the value from the table's **second column** (the rate) [1]; `FALSE` forces an **exact match** on the bike type [1].
**(b)** IFERROR wraps the whole calculation [1]: **`=IFERROR(D2*VLOOKUP(C2,$H$1:$I$3,2,FALSE),"Check bike type")`** [1]
*Examiner insight:* "absolute" alone is not enough; the mark needs the reason, that the reference stays fixed when copied.

**7.** **BH** [1]; **"0457"** (text) [1]; **458** [1]; **8** [1].
*Examiner insight:* MID returns text, so "0457" keeps its leading zero; only VALUE turns it into a number.

**8. (a)** Test the highest band first, `=IF(D2>=5,E2*0.8,` [1], then nest the second test `IF(D2>=3,E2*0.9,` [1], with full cost last, `E2))` [1].
**(b)** F2: **32.4** [1]; F4: **32** [1].
*Examiner insight:* allow follow-through in (b) from a correct-logic formula in (a), but testing `>=3` first gives the 5-hour hire only 10% off (36 instead of 32).

**9.** Normal: **6**, accepted [1]. Extreme: **1**, accepted [1]; **12**, accepted [1]. Abnormal: **13** (out of range), rejected with error message [1]; **"six"** or **2.5** (wrong type), rejected with error message [1]. Extreme data checks the rule uses the **right boundary operators**, e.g. `<=` not `<` [1].
*Examiner insight:* each item needs an expected result; a list of values with no "accepted" or "rejected" loses those marks.

**10. (a)** **7** [1]
**(b)** `=B2+7` [1], giving **13/06/2026** [1]
**(c)** `=COUNTIFS(C2:C9,"E-bike",B2:B9,">="&DATE(2026,6,7))` [1], giving **3** [1]
*Examiner insight:* in (c) the date must be joined to `">="` with `&`; writing `">=DATE(2026,6,7)"` inside the quotes compares with text and counts nothing.

**11. (a)** **Sort** the data by Bike [1]; apply subtotals **at each change in Bike**, using **SUM** on the Cost column [1]; **collapse the groups** to show only the totals [1].
**(b)** **120** [1]
**(c)** A pivot table needs **no sorting** and leaves the original list unchanged [1].
*Examiner insight:* "sort the data" without naming the field earns nothing; subtotals only work if the list is sorted by the grouping field.

**12. (a)** **Pie chart** [1]. E-bike: 120 ÷ 224 × 100 = **53.6%** [1]. **Extract (pull out) the E-bike sector** [1].
**(b)** A **combination chart**, hires as bars and takings as a line [1]. Daily takings reach 52 while daily hires are only 1 or 2 [1], so a **secondary axis** with its own scale stops the hires bars looking flat [1].
**(c)** pdf keeps the **layout fixed** and readable on any device, and cannot easily be altered [1]; csv holds **plain values** that another program can import [1].
*Examiner insight:* (b) needs the reason the scales differ, not just "it has two series"; two series on one scale is a comparative chart.

## Where marks are usually lost

- Writing a formula that would not run: no `=`, unquoted criteria, unbalanced brackets.
- Copying a formula across rows without an absolute reference to a lookup table.
- Giving SUMIFS arguments in SUMIF order.
- Testing the lowest IF band first.
- Forgetting that MID, LEFT and RIGHT return text.
- Listing test data without expected results.
- Naming only one extreme value when the rule has two limits.
- Choosing a chart without saying why it fits the purpose.
- Describing a pivot table and a subtotal as the same thing.

## Next steps

- Recap with the [Spreadsheets revision notes](/resources/a-level-cambridge-ict-spreadsheets-revision-notes/).
- Re-read weak sections in the [Spreadsheets study guide](/resources/a-level-cambridge-ict-spreadsheets/).
- Validation and verification practice: [Data Processing practice questions](/resources/a-ict-data-processing-practice/).
- See the full course on the [course hub](/boards/cambridge/a-level/ict/) and tick off the [9626 checklist](/checklists/cambridge/a-level/ict/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 8: Spreadsheets (8.1 Creating a spreadsheet; 8.2 Testing a spreadsheet; 8.3 Using a spreadsheet; 8.4 Graphs and charts).
