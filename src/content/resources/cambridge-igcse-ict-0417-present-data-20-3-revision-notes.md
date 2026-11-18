---
title: "Cambridge IGCSE ICT (0417): Present data (Spreadsheets) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0417 subtopic 20.3: formulae and values views, visible data, wrapping and hiding, number formats, conditional formatting and page layout."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense Cambridge IGCSE ICT 0417 subtopic 20.3 Present data: adjusting display features, formatting a spreadsheet and setting the page layout for printing. The [20.3 Present data study guide](/resources/cambridge-igcse-ict-0417-present-data-20-3/) explains each skill with a worked printing task. Test yourself with the [20.3 practice questions](/resources/cambridge-igcse-ict-0417-present-data-20-3-practice/). The [Spreadsheets revision notes](/resources/cambridge-igcse-ict-spreadsheets-revision-notes/) cover all of Topic 20.

## Syllabus checklist

| Skill | Includes |
|---|---|
| Adjust the display features | Display formulae or values; adjust row height, column width and cell sizes so all data, labels and formulae are fully visible; wrap text; hide and display rows and columns |
| Format a spreadsheet | Text colour, cell colour, bold, underline, italic, shading; decimal places, different currency symbols, percentages; conditional formatting |
| Set page layout | Portrait or landscape; print to a specified number of pages; print area; display or hide gridlines; display or hide row and column headings |

## Key terms

| Term | Meaning |
|---|---|
| Values view | Cells show the results of formulae |
| Formulae view | Cells show the formulae themselves |
| Wrap text | Long text continues on extra lines within the same cell |
| Hide (row or column) | Remove from view and printouts without deleting |
| Shading | A fill colour or pattern applied to cells |
| Number format | How a number is displayed: decimal places, currency, percentage |
| Conditional formatting | Formatting applied automatically when a cell's contents meet a rule |
| Print area | The range of cells set to be printed |
| Gridlines | The lines between cells, which can be printed or hidden |
| Row and column headings | The row numbers and column letters, which can be printed or hidden |

## Is everything fully visible?

| You see | Cause | Fix |
|---|---|---|
| ##### | Number or date too wide for the column | Widen the column |
| Text cut off at the cell edge | Next cell is not empty | Widen the column or wrap the text |
| Formula cut off in formulae view | Formulae are longer than results | Widen columns in formulae view before printing |
| Tall font clipped | Row too short | Increase the row height |

## Number formats

| Stored | Format | Shows |
|---|---|---|
| 45.678 | 1 decimal place | 45.7 |
| 45.678 | Currency, £, 2 decimal places | £45.68 |
| 2500 | Currency, ¥, 0 decimal places | ¥2,500 |
| 0.4 | Percentage, 0 decimal places | 40% |
| 0.035 | Percentage, 1 decimal place | 3.5% |
| 40 | Percentage, 0 decimal places | 4000% (store 0.4 instead) |

- Use the **currency format** for symbols; a typed symbol makes the cell text.
- **Formatting changes the display only.** Calculations use the stored value. To change the value itself, use ROUND.

Display trap (invented): three cells each hold 1.6 and show 2 at 0 decimal places. Their SUM is 4.8, shown as 5, not 6.

## Conditional formatting

- Rule = **condition** + **format**, for example "less than 10 → red cell colour".
- Updates automatically when values change.
- Several rules can cover bands (for example green, amber, red).
- Apply to the **whole range** named; check boundary values ("or more" includes the value).

## Hide and display

- Hidden rows and columns are **still calculated**: a SUM including a hidden row still adds it.
- Display again by selecting the rows or columns either side and unhiding.
- Hidden columns do not print: unhide them if the printout must show them.

## Page layout

| Setting | Use |
|---|---|
| Portrait | Tall, narrow sheets |
| Landscape | Wide sheets, formulae printouts |
| Fit to pages | For example 1 page wide by 1 page tall; check text is still readable |
| Print area | Print only the range needed |
| Gridlines on | Helps follow rows, especially in formulae printouts |
| Row and column headings on | Lets the reader check cell references in formulae |

## Exam traps

- Values printout when formulae were asked for, or the reverse.
- Formulae printout with columns too narrow.
- Percentages stored as whole numbers.
- Totals that seem not to add up because formatting hides decimals.
- Conditional formatting on one cell only, or with the wrong boundary (> instead of >=).
- Sheet printed over two pages when "one page" was required.
- In a theory answer, "make it look nice" is not a reason; link each format to the reader's need.

## Self-test

1. What does the formulae view show?
2. A cell shows #####. What should you do?
3. Why might text be cut off even though it is not too long for the sheet?
4. What does wrap text do?
5. State what 0.065 displays as with a percentage format to 1 decimal place.
6. A student types 15 and formats it as a percentage. What is displayed?
7. Why should a currency symbol be applied with a number format and not typed?
8. Cells A1 to A4 each hold 2.3 and are shown with no decimal places. What does =SUM(A1:A4) display with no decimal places?
9. Is a hidden row included in a SUM of a range that contains it?
10. Give an example of a conditional formatting rule.
11. Why might row and column headings be printed with a formulae printout?
12. Which orientation usually suits a formulae printout, and why?

### Answers

1. The formulae in each cell instead of their results.
2. Widen the column until the number is fully visible.
3. The next cell contains data, so the text cannot spill into it.
4. It continues long text on extra lines within the same cell, increasing the row height.
5. 6.5%.
6. 1500%.
7. A typed symbol turns the entry into text, which cannot be used in calculations.
8. 9 (the stored total is 9.2).
9. Yes.
10. For example: if the stock value is less than 10, make the cell colour red.
11. So the reader can see which cells each formula refers to and check the references.
12. Landscape, because formulae make columns wider and more columns fit across the page.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 20 Spreadsheets, 20.3 Present data.
