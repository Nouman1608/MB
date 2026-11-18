---
title: "Cambridge IGCSE ICT (0417): Present data (Spreadsheets)"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 20: Spreadsheets"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 20.3
syllabusTopics:
  - qualification: "igcse"
    topic: "spreadsheets-0417"
    subtopic: "present-data-20-3-0417"
description: "Presenting spreadsheets for Cambridge IGCSE ICT 0417 subtopic 20.3: formulae view, visible data, hiding, number formats, conditional formatting and printing."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 20.3 of Cambridge IGCSE ICT 0417, "Present data", has three skills. **Adjust the display features**: display formulae or values; adjust row height, column width and cell sizes so that all data, labels and formulae are fully visible; wrap text within cells; hide and display rows and columns. **Format a spreadsheet**: text colour, cell colour, bold, underline, italic and shading; numeric formats including decimal places, different currency symbols and percentages; conditional formatting. **Set page layout**: portrait or landscape orientation; printing to a specified number of pages; print area; displaying or hiding gridlines and row and column headings. This guide explains each, with particular attention to the difference between what a cell **shows** and what it **holds**, which causes many lost marks.

For the whole of Topic 20, see the [Spreadsheets study guide](/resources/cambridge-igcse-ict-spreadsheets-study-guide/). Consolidate this page with the [20.3 revision notes](/resources/cambridge-igcse-ict-0417-present-data-20-3-revision-notes/) and the [20.3 practice questions](/resources/cambridge-igcse-ict-0417-present-data-20-3-practice/).

## Displaying formulae or values

Normally a cell shows the **value** its formula produces. The **formulae view** (often toggled with a single command or keyboard shortcut) shows the formula itself in every cell. Practical tasks often ask for two printouts: one showing values and one showing formulae, so the examiner can see both the results and how they were calculated.

In formulae view, columns often need to be **much wider**, because a formula such as =IF(C2>E2,(C2-E2)*Extra,0) is longer than its result. A formulae printout with cut-off formulae cannot be credited, so widen each column until every formula is fully visible. Printing the **row and column headings** with the formulae lets the reader check each cell reference.

## Making everything fully visible

The syllabus says all data, labels and formulae must be **fully visible**. Signs that they are not:

- **Hash symbols** (#####) in a cell: a number or date is too wide for the column.
- **Cut-off text**: text spills into the next cell only if that cell is empty; if the next cell has content, the text is cut off at the cell edge.
- A number shown with fewer decimal places, or in scientific form, because the column is narrow.

Fixes:

- **Column width**: drag the boundary, double-click it to fit the widest entry, or type an exact width.
- **Row height**: increase it for larger fonts or wrapped text.
- **Wrap text**: long text continues on extra lines inside the same cell, making the row taller instead of the column wider. Useful for long headings above narrow numeric columns.

Check the widest entry in each column, which may be far down the sheet, not just the heading.

## Hiding and displaying rows and columns

Hiding a row or column removes it from view and from printouts without deleting it. Use it to hide working columns, such as a lookup table, or rows that are not needed in a particular printout. Hidden cells are **still part of the model**: a SUM over a range that includes a hidden row still adds that row. To display hidden rows or columns again, select the rows or columns on either side and choose unhide.

## Formatting the spreadsheet

### Enhancing text and cells

The syllabus lists **text colour, cell colour, bold, underline, italic** and **shading**. Use them for a purpose: bold for headings and totals, cell colour or shading to separate header rows from data, italic for notes. Apply exactly the formatting the task names to exactly the cells it names, such as "make row 1 bold with a pale blue cell colour".

### Numeric formats

| Stored value | Format | Displayed |
|---|---|---|
| 1234.5 | 2 decimal places | 1234.50 |
| 1234.5 | Currency, $, 2 decimal places | $1,234.50 |
| 1234.5 | Currency, €, 0 decimal places | €1,235 |
| 0.125 | Percentage, 1 decimal place | 12.5% |
| 12.5 | Percentage, 1 decimal place | 1250.0% |

The syllabus specifically mentions **different currency symbols**, so you may be asked to show one column in dollars and another in euros or yen. Choose the symbol from the currency format options rather than typing it into the cell, which would turn the number into text that cannot be calculated.

Percentage format multiplies the displayed value by 100. A rate should therefore be stored as a decimal (0.125) and formatted as a percentage. Typing 12.5 and formatting it as a percentage displays 1250.0%.

### Display is not the stored value

Formatting changes how a number looks, not the number itself. Suppose B2, B3 and B4 each hold 2.4 and B5 holds =SUM(B2:B4).

| Cell | Stored | Displayed with 0 decimal places |
|---|---|---|
| B2 | 2.4 | 2 |
| B3 | 2.4 | 2 |
| B4 | 2.4 | 2 |
| B5 | 7.2 | 7 |

A reader adding the displayed figures gets 6, but the total shows 7, because the calculation uses the stored values. If the task needs the values themselves to be rounded, use the ROUND function (subtopic 20.1); if it only asks for them to be displayed to a number of decimal places, use formatting.

## Conditional formatting

Conditional formatting changes a cell's appearance **depending on its contents**, and updates automatically when the contents change. A rule has a **condition** and a **format**.

| Condition (invented examples) | Format |
|---|---|
| Stock less than 10 | Red cell colour |
| Score between 50 and 69 | Amber cell colour |
| Text equal to "Overdue" | Bold red text |
| Profit less than 0 | Red text |

A range can have more than one rule, for example green for scores of 70 or more, amber for 50 to 69 and red for below 50. Check the boundaries match the task: "50 or more" includes 50. Apply the rule to the whole range named, not just the first cell, and test it by changing a value temporarily.

## Setting the page layout

- **Orientation**: portrait for tall, narrow sheets; landscape for wide sheets with many columns, such as most formulae printouts.
- **Fit to a specified number of pages**: scale the printout to, for example, 1 page wide by 1 page tall. If a task says "on a single page", set both. Check the preview: scaling a large sheet onto one page can make text too small to read, so widen only what is needed.
- **Print area**: set it to print only part of the sheet, such as A1:G20, so working areas are left out.
- **Gridlines**: display or hide the lines between cells on the printout. Gridlines help a reader follow rows in a formulae printout but may be hidden for a finished report.
- **Row and column headings**: the letters and numbers at the edges. Display them when the reader needs to check cell references, typically on formulae printouts.

## Worked example: preparing two printouts

*The task is invented.* A sheet holds a model in A1:G6 and a lookup table in K1:N3. The task says: hide the lookup table; make row 1 bold with a grey cell colour; show prices with a $ symbol and 2 decimal places; colour any total above $25 green; print the values in portrait on one page without gridlines; then print the formulae in landscape on one page wide with gridlines and row and column headings, ensuring all formulae are fully visible.

1. Select columns K to N and hide them.
2. Format A1:G1 bold with a grey cell colour.
3. Apply currency, $, 2 decimal places to the price and total columns.
4. Add a conditional formatting rule to the total column: cell value greater than 25, green cell colour.
5. Values printout: set the print area to A1:G6, portrait, fit to 1 page, gridlines off. Check every value is visible.
6. Formulae printout: switch to formulae view, widen columns until every formula is visible, set landscape, fit to 1 page wide, turn on gridlines and row and column headings. Hidden columns K to N stay hidden, so check the task does not need them shown.

## Common mistakes

- A formulae printout with formulae cut off by narrow columns.
- Hash symbols left in the values printout.
- Typing a currency symbol into the cell instead of using a currency format.
- Formatting 12.5 as a percentage and getting 1250%.
- Expecting formatting to change the stored value, then reading wrong totals.
- A conditional formatting rule applied to one cell instead of the range.
- Printing on two pages when the task said one, or forgetting to switch orientation.

## Exam technique

Practical tasks use *display*, *adjust*, *format*, *set*, *hide* and *print*. Each instruction is usually a separate mark; check the print preview against every instruction before printing. In theory questions, *explain* a choice by linking it to the reader, for example: "Row and column headings are printed with the formulae so the reader can check which cells each formula refers to."
