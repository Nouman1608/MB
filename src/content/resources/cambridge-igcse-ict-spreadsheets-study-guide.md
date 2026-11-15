---
title: "Cambridge IGCSE ICT (0417): Spreadsheets -- Study Guide"
resourceType: "study-guides"
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
description: "Building a spreadsheet data model with formulas and functions, sorting, searching and lookups, and presenting results with formatting and charts for IGCSE ICT."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

A spreadsheet stores data in a grid of cells and recalculates results automatically when the data changes. In Cambridge IGCSE ICT the practical task asks you to build a working model from instructions, use formulas and functions correctly, search or sort the data and present the result clearly. Marks are lost most often by typing values instead of formulas and by cell references that break when copied. This guide follows the three subtopics and works through a complete example with the answers calculated.

## Where this fits in the specification

Topic 20 covers creating a data model (20.1), manipulating data (20.2) and presenting data (20.3). In the practical paper you receive a file or a description and a numbered task list, and you may be asked to print the sheet showing formulas as well as values. The written paper can ask why a spreadsheet model is useful or what a function does.

## Create a data model

A **data model** is a spreadsheet set up so that changing an input changes the outputs. This lets you ask "what if" questions, for example what happens to profit if a price rises.

### Cells, rows and columns

A cell is named by its column letter and row number, such as C4. A range is a block of cells such as B2:B9. Put labels in the first row or column, keep inputs (such as a rate) in their own labelled cells and avoid typing the same constant into many formulas.

### Formulas

A formula starts with an equals sign. It uses the operators + - * / and brackets, and follows the usual order of operations: brackets, then multiplication and division, then addition and subtraction. A formula such as =B2*C2 uses cell references, so it updates when B2 or C2 changes. Typing the answer as a number breaks the model.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-spreadsheets-study-guide--02-ss-formula-chain.webp" width="900" height="972" alt="A table of five shop items with unit price and quantity. A formula in each row multiplies price by quantity to give line totals of 10.00, 33.00, 36.00, 52.00 and 37.00. Below, =SUM(D2:D6) gives 168.00. The formula =IF(D7&gt;150,D7*0.1,0) gives a 10 per cent discount of 16.80 because 168.00 is greater than 150. Finally =D7-D8 gives 151.20." loading="lazy">
  <figcaption>Line totals feed =SUM, then the IF discount, then the final amount: 168.00, 16.80, 151.20.</figcaption>
</figure>


### Cell references

- **Relative** (C4): changes when the formula is copied, so a formula copied down one row changes row numbers by one.
- **Absolute** ($C$4): stays fixed when copied. Use it for a single input such as a tax rate or a total.
- **Mixed** (C$4 or $C4): one part fixed and the other relative.

A formula that divides every row by a total needs the total locked, for example =D2/$D$7. Forgetting the dollar signs is the most common modelling error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-spreadsheets-study-guide--01-ss-relative-absolute.webp" width="900" height="896" alt="A spreadsheet column D holds line totals 10.00, 33.00, 36.00, 52.00 and 37.00 in rows 2 to 6 and the total 168.00 in D7, which is marked as locked. Column E copies the formula =D2/$D$7 down. The first part (D2, D3, D4 and so on) is a relative reference and moves down one row each time. The second part, $D$7, is an absolute reference: a gold line carries every formula back to the same cell D7. The results shown are 6.0 per cent, 19.6 per cent, 21.4 per cent, 31.0 per cent and 22.0 per cent." loading="lazy">
  <figcaption>A formula copied down changes relative references but an absolute reference stays on one cell.</figcaption>
</figure>


### Functions

A function is a built-in routine. Know these:

- SUM, AVERAGE, MIN, MAX: total, mean, smallest and largest of a range.
- COUNT counts numbers; COUNTA counts non-empty cells.
- COUNTIF and SUMIF count or add only the cells that meet a condition.
- IF tests a condition and returns one value if true and another if false, for example =IF(D7>150,D7*0.1,0). IFs can be nested.
- ROUND, ROUNDUP, ROUNDDOWN, INT: control decimal places.
- Text functions such as LEFT, RIGHT, MID and LEN, and CONCATENATE or the & symbol to join text.
- Lookup functions: VLOOKUP searches the first column of a table for a value and returns an item from a column you choose, while HLOOKUP does the same across rows. Use exact match (FALSE) for codes. XLOOKUP is a newer equivalent in some software.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-spreadsheets-study-guide--03-ss-countif.webp" width="900" height="830" alt="A column chart of the five line totals: Pencil 10.00, Notebook 33.00, Ruler 36.00, Stapler 52.00 and Marker 37.00, with a dashed gold line at 35. The three bars above the line (Ruler, Stapler and Marker) are shaded and ticked. The formula =COUNTIF(D2:D6,&quot;&gt;35&quot;) therefore returns 3." loading="lazy">
  <figcaption>COUNTIF counts only the line totals above 35, giving 3.</figcaption>
</figure>


### Named ranges and other model features

A **named cell or range** gives a cell a meaningful name such as VATRate, which makes formulas easier to read. You can also link sheets and workbooks, insert and delete rows and columns, and protect or hide cells and sheets to prevent accidental changes. Showing **formulas** (rather than values) for printing is a standard check.

## Manipulate data

- **Sort** rearranges rows in ascending or descending order on one or more columns. Select the whole data range before sorting, otherwise only one column moves and the data is scrambled.
- **Filter** hides rows that do not meet criteria without deleting them.
- **Search** with comparison and logical operators, as in a database, for example a filter for values greater than 35.
- **Validation rules** restrict what can be entered, such as whole numbers from 1 to 100, a list of allowed items, or a date range, and can display an input message or error alert.
- **Conditional formatting** changes the look of a cell when it meets a rule, for example shading marks below 40 red.
- **Replacing and importing data**: you may import a text or CSV file and set the delimiter, or use find and replace.
- **Templates** save a layout, formulas and formatting so they can be reused.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-spreadsheets-study-guide--04-ss-sort-whole-table.webp" width="900" height="1015" alt="A shop list of five items with line totals 10.00, 33.00, 36.00, 52.00 and 37.00. Selecting the whole table and sorting ascending by line total gives Pencil, Notebook, Ruler, Marker, Stapler, and every item keeps its own total. Sorting only the line total column moves the totals but not the items, so Stapler is shown with 37.00 and Marker with 52.00. Two rows are scrambled." loading="lazy">
  <figcaption>Select the whole table before sorting or the rows no longer match.</figcaption>
</figure>


## Present data

- **Formatting cells**: number formats (integer, decimal places, percentage, currency, date and time), font, size, alignment, borders and shading, text wrap and merged cells.
- **Page layout**: orientation, paper size, margins, headers and footers, and fitting a sheet to one page wide. Print gridlines or row and column headings only if asked.
- **Charts**: choose the type to fit the data. A **bar or column chart** compares categories, a **line graph** shows change over time, a **pie chart** shows each part of a whole, and a **scatter graph** shows the relationship between two numeric variables. Every chart needs a title, labelled axes and a legend where more than one series is shown. Select only the cells needed, often with a non-adjacent selection for the category labels and values.
- **Readability**: column widths wide enough to show every value (a row of hash symbols means the column is too narrow), consistent decimals and clear labels.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-spreadsheets-study-guide--05-ss-chart-choice.webp" width="900" height="1120" alt="Four small charts. A column chart of the five shop line totals compares categories. A line graph of illustrative values rising over five time points shows change over time. A pie chart of the same line totals shows parts of a whole: Pencil 6 per cent, Notebook 20 per cent, Ruler 21 per cent, Stapler 31 per cent and Marker 22 per cent. A scatter graph of illustrative points shows the relationship between two numeric variables. Every chart needs a title and labelled axes, and a legend only when there are two or more series." loading="lazy">
  <figcaption>Bar, line, pie and scatter charts answer different questions.</figcaption>
</figure>


## Worked example

A school shop records stock in a sheet. Row 1 holds the headings Item, Unit price, Quantity and Line total. Rows 2 to 6 hold the data.

| Row | Item | Unit price | Quantity | Line total (formula) |
|---|---|---|---|---|
| 2 | Pencil | 0.40 | 25 | =B2*C2 |
| 3 | Notebook | 2.75 | 12 | =B3*C3 |
| 4 | Ruler | 1.20 | 30 | =B4*C4 |
| 5 | Stapler | 6.50 | 8 | =B5*C5 |
| 6 | Marker | 1.85 | 20 | =B6*C6 |

1. Line totals: 0.40 * 25 = 10.00; 2.75 * 12 = 33.00; 1.20 * 30 = 36.00; 6.50 * 8 = 52.00; 1.85 * 20 = 37.00.
2. In D7 enter =SUM(D2:D6). The result is 10 + 33 + 36 + 52 + 37 = 168.00.
3. In D8 enter a bulk discount of 10 per cent only when the total exceeds 150: =IF(D7>150,D7*0.1,0). Since 168 is greater than 150, the discount is 16.80.
4. In D9 enter =D7-D8, giving 168.00 - 16.80 = 151.20.
5. In E2 enter =D2/$D$7 and copy it down to E6, formatted as a percentage to one decimal place. For the pencil, 10 / 168 = 5.95 per cent, shown as 6.0 per cent at one decimal place; for the stapler, 52 / 168 = 30.95 per cent, shown as 31.0 per cent. The dollar signs keep every row dividing by the same total in D7.
6. In D10 enter =AVERAGE(D2:D6), which is 168 / 5 = 33.60, and in D11 enter =COUNTIF(D2:D6,">35"). The values above 35 are 36, 52 and 37, so the answer is 3.
7. Add a column chart of Item against Line total with a title, axis labels and no legend (there is only one series), then print one page wide with the formulas shown on a second printout.

## Common mistakes

- Typing totals as numbers instead of using formulas.
- Missing or misplaced dollar signs, so copied formulas point at the wrong cell.
- Sorting one column on its own and scrambling the rows.
- A range that includes the heading or the total row, or one that stops a row short.
- Using VLOOKUP with approximate match on unsorted codes.
- A chart with no title, unlabelled axes or the wrong chart type.
- A cell showing hash symbols because the column is too narrow.

## Exam technique

Command words in the practical task are mostly *enter*, *insert*, *calculate*, *format*, *sort*, *search*, *create* and *print*. Use cell references rather than values. Test a formula with a number you can check by hand, and print the formula view when asked. On the written paper, *describe* means what the function or feature does, and *explain* needs the benefit, such as: "A spreadsheet model recalculates automatically when a value changes, so many what-if scenarios can be tested quickly without errors from recalculating by hand."

## Check your understanding

1. What does the formula =B2*$F$1 do when copied down? *B2 changes to B3, B4 and so on, while $F$1 stays fixed.*
2. Write a function to find the largest value in C2:C20. *=MAX(C2:C20).*
3. Which function counts cells above 50 in B2:B30? *=COUNTIF(B2:B30,">50").*
4. Why use a named cell for a VAT rate? *The formula is easier to read and the rate can be changed in one place.*
5. When is a line graph more suitable than a pie chart? *When showing how a value changes over time.*
6. What goes wrong if you sort only column B of a table of three columns? *The rows no longer match, because column B moves and the others do not.*
7. A line total is 7.5 for each of 18 items. What is the total? *7.5 * 18 = 135.*

## Frequently asked questions

**What is the difference between relative and absolute cell references?**
In Cambridge IGCSE ICT (0417), a relative reference such as C4 changes when a formula is copied, while an absolute reference such as $C$4 stays fixed. Use an absolute reference for a single input such as a tax rate or a total.

**Why should spreadsheet formulas use cell references instead of typed values?**
A formula built from cell references updates automatically when the data changes, so the model can test "what if" questions. Typing the answer as a number breaks the model and is one of the most common ways to lose marks.

**What does VLOOKUP do?**
VLOOKUP searches the first column of a table for a value and returns an item from a column you choose; use exact match (FALSE) for codes. HLOOKUP does the same across rows.

**Why should you select the whole table before sorting?**
If only one column is selected, only that column moves and the rows no longer match, scrambling the data. Select the whole data range so each row stays together.
