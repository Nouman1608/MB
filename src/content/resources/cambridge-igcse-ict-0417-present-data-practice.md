---
title: "Cambridge IGCSE ICT (0417): Present data (Databases) -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.3
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "present-data-0417"
description: "Original questions with full answers on database reports for 0417 subtopic 18.3: report sections, titles, layouts, alignment and numeric display formats."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 subtopic 18.3 Present data: producing database reports with the correct sections, title, layout, alignment and number formats. The number in square brackets after the last part of a question is the total for the whole question. All data in the questions is invented for practice.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [18.3 Present data study guide](/resources/cambridge-igcse-ict-0417-present-data/) · [18.3 Present data revision notes](/resources/cambridge-igcse-ict-0417-present-data-revision-notes/)

---

## Section A: short answers

**1.** Which report section is printed once for every record?

A: page header

B: detail

C: report footer

D: report header **[1]**

**2.** State the report section in which a report title should be placed. **[1]**

**3.** Give **two** differences between a tabular report and a columnar report. **[2]**

**4.** A field stores the value 0.35. State what is displayed when it is formatted as a percentage with no decimal places. **[1]**

**5.** State how numeric data should be aligned in a report, and give **one** reason. **[2]**

**6.** A report shows the label *Telephone num* instead of *Telephone number*. State the cause and how to correct it. **[2]**

---

## Section B: structured questions

**7.** A sports centre produces a tabular report of class bookings. The report is four pages long.

**(a)** State the section where each of these should be placed: the title *Weekly Class Bookings*; the column headings; the page number; the total number of bookings for the week.

**(b)** Explain why the column headings should not be placed in the report header. **[6]**

**8.** A shop's report shows these prices in one column, left aligned: 4.5, 12, 108.75, 0.9

**(a)** Write the four values as they should appear when formatted as currency with a $ symbol and 2 decimal places.

**(b)** Describe how the column and its label should be aligned so that the decimal points line up. **[4]**

**9.** A school database has a table of students with 14 fields, including name, address, emergency contact and medical notes. The office needs a printed sheet for each student to keep in a file.

**(a)** State whether a tabular or columnar layout is more suitable and explain why.

**(b)** Give **one** problem that would arise if the other layout were used. **[3]**

**10.** A candidate's report has the following faults. For each fault, describe how to correct it.

**(a)** The field *SupplierID* appears in the report but the task asked only for *Product*, *Supplier* and *Cost*.

**(b)** The average cost is shown at the bottom of every page.

**(c)** Some product names are cut off.

**(d)** The title shows *qryStock* instead of *Products Below Reorder Level*. **[4]**

**11.** A field called *Discount* is set in the table design to display as a percentage. In one report the manager wants the discount shown with 1 decimal place, but in all other reports it should stay with none.

**(a)** Explain where the format for this report should be set.

**(b)** A discount is stored as 0.075. State what is displayed in this report and in the other reports.

**(c)** Explain why changing the display format does not affect a calculation that uses the discount. **[5]**

**12.** A charity's database holds details of donations. The manager asks for a report listing the donor name, date and amount of each donation over $100, sorted with the largest donation first, with the total of these donations at the end.

Describe **six** features the report should have to meet the manager's needs and the requirements for presenting data. **[6]**

---

## Answers

**1.** B: detail. **[1]**

**2.** The report header (1). **[1]**

**3.** Any two, 1 mark each: tabular shows one record per row, columnar shows each record as a block (1); in tabular the labels appear once as column headings, in columnar the labels are repeated beside the values for every record (1); tabular suits many records with few fields, columnar suits records with many fields (1); tabular uses fewer pages (1). **[2]**

**4.** 35% (1). **[1]**

**5.** Right aligned (1). Any one reason: units, tens and hundreds line up so values are easy to compare (1); with the same number of decimal places the decimal points line up (1). **[2]**

**6.** The label control is too narrow (1); widen the label control until the full text is visible (1). **[2]**

**7. (a)** Title: report header (1). Column headings: page header (1). Page number: page footer (1). Total bookings: report footer (1).

**(b)** The report header is printed only once, at the start of page 1 (1), so pages 2 to 4 would show data with no headings and the reader could not tell what each column contains (1). **[6]**

**8. (a)** $4.50 (1), $12.00 and $108.75 (1), $0.90 (1). Award the second mark only if both middle values are correct.

**(b)** Right align the values (and the label above them), with every value shown to 2 decimal places so the decimal points fall in line (1). **[4]**

**9. (a)** Columnar (1). Each student has 14 fields, which would not fit across a page as columns; a columnar layout shows each field with its label as a block, giving one readable record per student (1).

**(b)** Any one: in a tabular layout 14 columns would be too narrow, so data would be cut off or the text would be very small (1); it would be hard to print one student's details on a separate sheet (1). **[3]**

**10. (a)** Delete the SupplierID control and its label from the report (1).

**(b)** Move the calculated control for the average from the page footer to the report footer (1).

**(c)** Widen the Product control so the longest product name is fully visible (1).

**(d)** Edit the label in the report header to read *Products Below Reorder Level* exactly (1). **[4]**

**11. (a)** On the Discount control in this report (1), because a format set in the table design would change every report based on the field (1).

**(b)** This report: 7.5% (1). Other reports: 8% (1).

**(c)** The format only changes how the value is shown; the stored value 0.075 is still used in any calculation (1). **[5]**

**12.** Any six, 1 mark each:
- A clear title in the report header, for example *Donations over $100* (1).
- Only the three fields asked for: donor name, date and amount (1).
- Based on a query that selects donations with amount > 100 (1).
- Sorted on amount in descending order (1).
- Tabular layout with the column labels in the page header so they appear on every page (1).
- Amount formatted as currency with $ and 2 decimal places (1).
- Amount (and its label) right aligned so the decimal points line up (1).
- Total of the amounts as a calculated control in the report footer (1).
- All data and labels fully visible, for example the longest donor name not cut off (1).
- Page numbers in the page footer (1). **[6]**

## Frequently asked questions

**Do I need to know a particular database package?**
No. The syllabus describes report features, such as report and page headers and footers, that are found in most database packages. Use the names of the sections in your answers.

**Is the report footer the same as the page footer on the last page?**
No. The report footer prints once after the last record; the page footer prints at the bottom of every page, including the last.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 18 Databases, 18.3 Present data.
