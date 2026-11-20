---
title: "Cambridge A Level Information Technology (ICT): 17.1 Data analysis and visualisation (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Data Analysis Practice"
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
  - qualification: "a-level"
    topic: "data-analysis-and-visualisation"
    subtopic: "data-analysis-and-visualisation-content"
description: "Original practice questions with marked answers on cleaning data, combining sources, splitting and merging fields, pivot tables and pivot charts for section 17.1 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 17.1 Data Analysis and Visualisation** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content. The syllabus assesses it mainly in Paper 4 (Advanced Practical), so these written questions test the ideas behind the practical skills; practise the same tasks in your spreadsheet software too. All questions can be answered on paper.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-data-analysis-visualisation/) and the [topic revision notes](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** A sports club exports its member list. Some town names are typed as "leeds", some as "LEEDS" and some as " Leeds ". Some members appear twice.

**(a)** Describe **two** problems that these entries will cause when the data is analysed. **[2]**
**(b)** Describe how the data could be cleaned. **[3]**
**(c)** Explain why a copy of the original data should be kept. **[1]**

**2.** A school has a field named FullName that holds entries in the form "Khan, Amira". It also has separate fields Day, Month and Year.

**(a)** Explain why FullName is not a discrete field. **[1]**
**(b)** Describe how the data in FullName could be split into Surname and FirstName. **[3]**
**(c)** Describe how Day, Month and Year could be merged into a single date field. **[2]**

**3.** A charity has two spreadsheets. Sheet 1 lists 500 donors with a DonorID, name and email. Sheet 2 lists this year's donations, each with a DonorID and an amount. The charity wants to know which donors have not donated this year.

**(a)** Describe how the two sources could be compared to find these donors. **[3]**
**(b)** State **two** checks that should be made on the DonorID field before the comparison. **[2]**
**(c)** Describe how the charity could consolidate the donations so that each donor's total appears beside their details. **[2]**

**4.** A company's staff table is shown.

| Department | Role | Salary (£) |
|---|---|---|
| Sales | Clerk | 21000 |
| Sales | Manager | 36000 |
| IT | Technician | 28000 |
| IT | Technician | 30000 |
| IT | Manager | 44000 |
| HR | Clerk | 22000 |
| HR | Manager | 38000 |
| Sales | Clerk | 24000 |

**(a)** A pivot table has Department in the rows and the sum of Salary in the values. Complete the totals for Sales, IT, HR and the grand total. **[4]**
**(b)** The pivot table is changed to show the average salary for each department. Calculate the value for Sales and for IT. **[2]**
**(c)** The pivot table is changed to show the count of Role for each role. State the count for Clerk, Manager and Technician. **[3]**
**(d)** State the field placed in the columns area if the pivot table must show the sum of salaries by department and by role. **[1]**

**5.** After the table in Question 4 was used for the pivot table, the HR manager's salary was corrected in the source data from £38,000 to £40,000. The pivot table still shows the old total.

**(a)** Explain why. **[1]**
**(b)** State what must be done, and give the new HR total. **[2]**

**6.** The company wants a chart based on the pivot table in Question 4 that shows each department's share of the total salary bill.

**(a)** State the name of a chart linked to a pivot table. **[1]**
**(b)** Name a suitable chart type and justify your choice. **[2]**
**(c)** State **three** features that the chart should have to communicate clearly. **[3]**

**7.** A data analyst is given a spreadsheet in which a column of prices has some entries typed with a "£" sign as text, and some blank rows between groups of data. She tries to build a pivot table and the sum of prices comes out as zero.

Explain the likely causes and describe how to put them right. **[4]**

## Answers

**1. (a)** Any two: the same town will be treated as different towns, so counts and groupings are wrong [1]; sorting and filtering will not group the same town together [1]; duplicate members will be counted twice, which inflates totals. [1] **[2]**
**(b)** Remove the extra spaces (trim) [1]; convert the town names to one case, such as proper case [1]; find and remove the duplicate records after checking the key field (such as the member number) to decide which to keep. [1] **[3]**
**(c)** If the cleaning goes wrong, the original can be recovered, and the changes can be checked against it. [1] **[1]**

**2. (a)** It holds more than one fact (surname and first name) in one field. [1] **[1]**
**(b)** Use text to columns with the comma as the delimiter (or find the position of the comma) [1]; take the text before the comma as Surname [1]; take the text after the comma, with the leading space removed, as FirstName. [1] **[3]**
**(c)** Use a date function that builds a date from the year, month and day values [1], or concatenate the fields with separators and then set the format to date. [1] **[2]**

**3. (a)** Use a lookup (or match) of each DonorID from Sheet 1 against the DonorID column of Sheet 2 [1]; donors where the lookup returns "not found" (an error or blank) have not donated this year [1]; filter or highlight those donors with conditional formatting. [1] **[3]**
**(b)** Any two: the IDs are unique in Sheet 1; the format and data type are the same in both sheets (number or text); no extra spaces; no blank IDs. [1 each] **[2]**
**(c)** Use a summing function (such as sum-if) on Sheet 2 by DonorID [1], placed in a new column next to each donor in Sheet 1. (Accept a pivot table of donations by DonorID joined to the donor list.) [1] **[2]**

**4. (a)** Sales: 21,000 + 36,000 + 24,000 = 81,000 [1]. IT: 28,000 + 30,000 + 44,000 = 102,000 [1]. HR: 22,000 + 38,000 = 60,000 [1]. Grand total 243,000. [1] **[4]**
**(b)** Sales: 81,000 / 3 = 27,000 [1]. IT: 102,000 / 3 = 34,000. [1] **[2]**
**(c)** Clerk 3 [1]; Manager 3 [1]; Technician 2. [1] **[3]**
**(d)** Role. [1] **[1]**
*Examiner insight:* Check that the grand total equals the total of the department totals, and also the total of the role totals (clerks 67,000, managers 118,000, technicians 58,000, which also give 243,000).

**5. (a)** A pivot table does not update automatically when the source data changes. [1] **[1]**
**(b)** Refresh the pivot table [1]. The HR total becomes 22,000 + 40,000 = 62,000. [1] **[2]**

**6. (a)** A pivot chart. [1] **[1]**
**(b)** A pie chart [1], because it shows each department's share of a whole and there are only three categories. [1] **[2]**
**(c)** Any three: a clear title; labels or a legend that identify each department; percentages or values shown; readable text; good contrast between colours. [1 each] **[3]**

**7.** Prices typed with "£" as text are not numbers, so they are ignored in the sum [1]; the blank rows break the data into separate blocks, so the pivot table may not pick up the whole range [1]. Convert the text to numbers, for example by removing the "£" character and formatting the column as currency [1]; delete the blank rows and make the data one continuous table with headings in the first row. [1] **[4]**

## Where marks are usually lost

- Describing cleaning only as "correct mistakes" without saying how.
- Splitting by character position when the lengths of the entries vary.
- Forgetting to refresh a pivot table.
- Using count when sum is needed.
- Giving a chart type without a reason.
- Not checking that the key field is unique and in the same format in both sources.

## Next steps

- Recap with the [topic revision notes](/resources/a-level-cambridge-ict-data-analysis-and-visualisation-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-data-analysis-visualisation/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**Is data analysis examined in a practical paper?**
Yes. The syllabus states that Paper 4 (Advanced Practical) tests sections 17 to 21, so you should practise these tasks on a computer as well as answering written questions.

**Why do pivot tables need a refresh?**
They hold a summary of the data as it was when they were built, so they do not change when the source changes until they are refreshed.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 17.1: Data Analysis and Visualisation.
