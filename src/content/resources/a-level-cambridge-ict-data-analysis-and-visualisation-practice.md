---
title: "Cambridge A Level Information Technology (ICT): Data analysis and visualisation (9626) -- Practice Questions"
seoTitle: "9626 A Level IT: Data Analysis & Visualisation Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Data analysis and visualisation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 17
syllabusTopics:
  - qualification: "a-level"
    topic: "data-analysis-and-visualisation"
description: "Original practice questions with marked answers for Cambridge A Level IT 9626 data analysis: cleaning, splitting, merging, pivot tables and charts."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 17, Data analysis and visualisation** (section 17.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). This is **A Level only** content. The syllabus bases **Paper 4 (Advanced Practical)** tasks on sections 17–21 and **Paper 3 (Advanced Theory)** questions on sections 12–21. Calculators are not allowed in Paper 3, so the numbers here work by hand. Every question can be answered on paper.

Learn the content first with the [study guide](/resources/a-level-cambridge-ict-data-analysis-and-visualisation/) and the [revision notes](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-revision-notes/). The course hub is [Cambridge A Level IT](/boards/cambridge/a-level/ict/), the [9626 checklist](/checklists/cambridge/a-level/ict/) lists every outcome, and a [free diagnostic](/diagnostics/) shows where to start.

## Questions

**1.** State **two** reasons why data should be cleaned before it is analysed. **[2]**

**2.** A school records sports-day entries in a spreadsheet. Part of the data is shown.

| EntryID | Student | House | Event | Time (s) |
|---|---|---|---|---|
| E01 | Ali Hassan | Red | 100m | 13.2 |
| E02 | Maryam Javed | red | 100m | 14.0 |
| E03 | Usman Tariq | Blue | 200m | |
| E02 | Maryam Javed | red | 100m | 14.0 |
| E04 | Noor Fatima | Green | 100m | 1.38 |
| E05 | Hamza Iqbal | Yelow | 200m | 29.5 |

**(a)** Identify **three** different problems with this data. **[3]**
**(b)** Describe how each problem you identified in (a) should be dealt with. **[3]**

**3.** Cell B2 contains the email address zara.ahmed@hillview.org

**(a)** State the value returned by `=FIND("@",B2)`. **[1]**
**(b)** Write a formula to extract the part of the address before the @ symbol, and state its result. **[2]**
**(c)** Write a formula to extract the domain, hillview.org, from B2. **[2]**

**4.** A file stores the day, month and year of each order in separate fields: C2 = 9, D2 = 11, E2 = 2026.

**(a)** Write a formula to combine these into a single date field. **[2]**
**(b)** Explain why `=C2&"/"&D2&"/"&E2` is not a suitable way to combine them. **[2]**
**(c)** A2 contains Station and B2 contains 47. Write a formula that produces Sta-47. **[2]**

**5.** Cell F2 contains the text 12 kg.

**(a)** Write a formula that returns the weight as a number. **[2]**
**(b)** Explain why the value must be numeric before it is used in a pivot table. **[1]**

**6.** A bakery has two shops, Mall and Station. Each keeps a list of product codes in column A of its own worksheet.

Mall: B01, C02, C05, P03 (cells A2:A5). Station: B01, C02, P03, P07 (cells A2:A5).

This formula is entered in B2 of the Mall worksheet and copied down to B5:

```
=IF(COUNTIF(Station!$A$2:$A$5,A2)=0,"Mall only","Both")
```

**(a)** State the result shown in each of B2 to B5. **[2]**
**(b)** Explain why absolute references are used for the Station range. **[1]**
**(c)** Describe how the products sold only at Station could be found. **[1]**

**7.** Mall exports its sales as a csv file. Station exports a tab-delimited txt file with the same fields in a different order and dates stored as text. Describe how the two files should be consolidated into one table ready for analysis. **[5]**

**8.** The bakery's consolidated data is summarised in this pivot table.

| Total sales (dollars) | Mall | Station | Grand total |
|---|---|---|---|
| Bread | 120 | 80 | 200 |
| Cakes | 150 | 250 | 400 |
| Pastries | 130 | 70 | 200 |
| **Grand total** | **400** | **400** | **800** |

**(a)** Identify the row field, the column field, and the value field with its summary type. **[3]**
**(b)** Calculate the percentage of total sales that came from cakes. **[2]**
**(c)** Calculate cake sales at Station as a percentage of Station's total sales. **[2]**
**(d)** New sales records are added to the source data. State what must be done so the pivot table includes them. **[1]**

**9.** The manager wants a pivot chart from the pivot table in question 8.

**(a)** Identify the most appropriate chart type to compare sales of each product at the two shops, and justify your choice. **[2]**
**(b)** Describe **two** features that would help the chart communicate clearly. **[2]**
**(c)** Explain the purpose of field selection buttons on the pivot chart. **[1]**

**10.** Compare the use of a pivot table with the use of SUMIF formulas to produce the summary in question 8. **[4]**

**11.** A charity records volunteer hours from two sources. An online form exports a csv file with fields Name (Forename Surname), Region, Date and Hours. Paper forms are typed into a txt file with fields Name (Surname, Forename), Region (spelled in several ways), Day, Month, Year and Hours. Describe how you would produce a pivot table report and pivot chart showing total hours by region and month. **[8]**

## Answers

**1.** Any two: duplicate records are counted twice, inflating totals [1]; inconsistent spellings split one group into several, and missing or invalid values distort totals and averages, so conclusions would be wrong [1]. **[2]**
*Examiner insight:* Two separate reasons are needed; "to make it accurate" said twice in different words is one point.

**2. (a)** Any three: E02 is duplicated [1]; E03 has no time recorded [1]; E04's time of 1.38 s is not possible for 100m [1]. (Also accept: "red" capitalised inconsistently; "Yelow" misspelt.)
**(b)** Delete the second E02 record, keeping one copy [1]. Obtain E03's time from the event officials, or exclude it and report it; do not guess [1]. Check E04's time against the original record and correct it, adding a validation rule for future entries [1]. **[6]**
*Examiner insight:* Each action in (b) should match a problem from (a); a general "check the data" does not show how each problem is fixed.

**3. (a)** **11** [1] **[1]**
**(b)** `=LEFT(B2,FIND("@",B2)-1)` [1] gives **zara.ahmed** [1] **[2]**
**(c)** `=MID(B2,FIND("@",B2)+1,50)` [1] with the start position after the @ and a length long enough for the rest of the text [1] **[2]**
*Examiner insight:* Write complete formulas with cell references; a described method such as "use LEFT up to the @" gives nothing exact to credit.

**4. (a)** `=DATE(E2,D2,C2)` [1], with the arguments in year, month, day order [1] **[2]**
**(b)** The `&` operator produces text, not a date [1], so the field cannot be sorted chronologically, grouped by month in a pivot table or used in date calculations [1]. **[2]**
**(c)** `=LEFT(A2,3)&"-"&B2` [1] taking 3 characters and joining the hyphen as text [1] **[2]**
*Examiner insight:* In (a), DATE(C2,D2,E2) reverses the order and gives a wrong date, so the argument order matters as much as the function name.

**5. (a)** `=VALUE(LEFT(F2,FIND(" ",F2)-1))` [1] which extracts "12" and converts it to the number **12** [1] **[2]**
**(b)** Text values cannot be summed or averaged, so the pivot table would not total them correctly [1]. **[1]**
*Examiner insight:* LEFT alone returns the text "12"; the conversion step to a number is the point of the question.

**6. (a)** B2 **Both**, B3 **Both** [1]; B4 **Mall only**, B5 **Both** [1] **[2]**
**(b)** So the range stays fixed on Station!A2:A5 when the formula is copied down [1]. **[1]**
**(c)** Enter the same formula on the Station sheet, counting each code in the Mall range, labelled "Station only"; P07 is flagged [1]. **[1]**
*Examiner insight:* In (a), check each code against the whole Station list; P03 is in both lists even though it sits in a different row.

**7.** Import the csv file using a comma delimiter and the txt file using a tab delimiter, so each value is in its own field [1]. Rearrange the Station fields into the same order with the same field names as Mall [1]. Convert Station's text dates into true dates, and make data types and formats consistent [1]. Add a Shop field to both sets of records so each record shows its source [1]. Append Station's records below Mall's, remove duplicates and check the record count equals the two sources added together [1]. **[5]**
*Examiner insight:* Steps should be specific to this scenario (delimiters, field order, text dates); a generic "combine the files" earns little.

**8. (a)** Row field: product (Bread, Cakes, Pastries) [1]. Column field: shop [1]. Value field: sales, summarised by sum [1]. **[3]**
**(b)** 400 ÷ 800 × 100 [1] = **50%** [1] **[2]**
**(c)** 250 ÷ 400 × 100 [1] = **62.5%** [1] **[2]**
**(d)** Refresh the pivot table (checking the source range includes the new rows) [1]. **[1]**
*Examiner insight:* In (c), the denominator is Station's total of 400, not the grand total; using 800 gives 31.25%, a different measure.

**9. (a)** Comparative (clustered) bar chart [1], because it shows the two shops side by side for each product so differences are easy to compare [1]. **[2]**
**(b)** Any two: a meaningful title [1]; axis titles with units, such as "Sales (dollars)", and a legend identifying the shops [1]. (Also accept a value axis starting at zero.) **[2]**
**(c)** They let the user filter the data shown, such as one shop or selected products, directly on the chart [1]. **[1]**
*Examiner insight:* The justification must link the chart to this comparison; "it is clear" is not a reason.

**10.** A pivot table is built quickly by placing fields, while SUMIF needs a separate formula for every total [1]. A pivot table can be rearranged or filtered in seconds; formulas need rewriting for a new layout [1]. New products appear in a pivot table when it is refreshed, but SUMIF needs a new formula for each new product [1]. SUMIF recalculates automatically and gives full control of layout, whereas a pivot table may need refreshing after the source changes [1]. **[4]**
*Examiner insight:* "Compare" needs both methods in each point; two separate lists of features gain less than linked comparisons.

**11.** Import both files using the correct delimiter for each [1]. Split the txt names at the comma with LEFT, MID and FIND, then merge them as Forename Surname with `&` so both sources match [1]. Combine Day, Month and Year into one true date with DATE [1]. Standardise region spellings to one agreed list, and remove duplicates, blanks and invalid hours [1]. Give both sets the same field names and order, add a Source field, and append them into one table [1]. Create a pivot table with Region as the row field, month (from the date) as the column field and Hours summed as the value [1]. Format it as a report: clear title, headings with units, sorted regions [1]. Create a linked pivot chart (comparative bar or line), with a title, axis labels and legend, and refresh both if the data changes [1]. **[8]**
*Examiner insight:* Cover all three syllabus stages, getting, cleaning and displaying; an answer about the pivot table alone limits the marks available.

## Where marks are usually lost

- Writing formulas without cell references, or describing them in words.
- Leaving out the −1 after FIND, so the delimiter is kept in the result.
- Putting DATE arguments in day, month, year order.
- Joining date parts with `&` and treating the result as a date.
- Using the grand total as the denominator when a question asks for a share of one column.
- Giving cleaning actions that do not match the problems identified.
- Generic consolidation steps that ignore delimiters, field order and formats.
- Choosing a pie chart to compare two shops across several products.
- Forgetting to refresh a pivot table after the source data changes.

## Next steps

- [Data analysis and visualisation revision notes](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-revision-notes/)
- [Data analysis and visualisation study guide](/resources/a-level-cambridge-ict-data-analysis-and-visualisation/)
- [Spreadsheets practice questions](/resources/a-level-cambridge-ict-spreadsheets-practice/) for AS function skills
- [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and [9626 checklist](/checklists/cambridge/a-level/ict/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 17, Data analysis and visualisation, section 17.1.
