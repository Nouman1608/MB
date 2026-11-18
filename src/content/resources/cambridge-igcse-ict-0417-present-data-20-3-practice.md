---
title: "Cambridge IGCSE ICT (0417): Present data (Spreadsheets) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on presenting spreadsheets for 0417 subtopic 20.3: display features, number formats, conditional formatting and printing."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 subtopic 20.3 Present data: adjusting display features, formatting a spreadsheet and setting the page layout. Section B uses the sheet below. The number in square brackets after the last part of a question is the total for the whole question. All data is invented.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [20.3 Present data study guide](/resources/cambridge-igcse-ict-0417-present-data-20-3/) · [20.3 Present data revision notes](/resources/cambridge-igcse-ict-0417-present-data-20-3-revision-notes/)

---

## The sheet

A theatre records ticket sales. Column F holds formulae; cell H1 holds the booking fee rate, 0.05, used by the formulae in column F.

| | A | B | C | D | F |
|---|---|---|---|---|---|
| 1 | Show | Date | Price | Tickets sold | Income including fee |
| 2 | Moonlight Opera | 03/05/2027 | 24 | 180 | =C2*D2*(1+$H$1) |
| 3 | Comedy Night | 10/05/2027 | 12.5 | 240 | =C3*D3*(1+$H$1) |
| 4 | Youth Dance | 17/05/2027 | 8 | 95 | =C4*D4*(1+$H$1) |
| 5 | Jazz Evening | 24/05/2027 | 18.75 | 60 | =C5*D5*(1+$H$1) |

Column E is empty and has been hidden.

---

## Section A: short answers

**1.** A cell displays #####. What is the most likely cause?

A: the formula contains an error

B: the column is too narrow for the number

C: the cell has been hidden

D: the cell is formatted as text **[1]**

**2.** State the difference between the values view and the formulae view of a spreadsheet. **[2]**

**3.** A cell holds 0.045. State what it displays when formatted as a percentage to 1 decimal place. **[1]**

**4.** State what is meant by *wrap text*. **[1]**

**5.** Give **two** reasons for printing row and column headings with a formulae printout. **[2]**

**6.** State what is meant by a *print area*. **[1]**

---

## Section B: structured questions

**7. (a)** Calculate the value of F2 and of F3.

**(b)** The prices in column C must be displayed in euros with 2 decimal places. State what C3 will display.

**(c)** Explain why the currency symbol should not be typed into the cells. **[5]**

**8.** The manager formats column F to show no decimal places.

**(a)** State what F5 will display. Show your working.

**(b)** Explain why the total of the displayed values in column F might not equal a SUM of column F shown with no decimal places. **[4]**

**9.** The heading in F1 is much longer than the numbers below it.

**(a)** Describe **two** ways to make the heading fully visible.

**(b)** State which method keeps the column narrow. **[3]**

**10.** The manager wants incomes below $1,000 shown in red and incomes of $4,000 or more shown in green.

**(a)** Describe how to set this up.

**(b)** State the colour, if any, of F2, F3, F4 and F5.

**(c)** Explain **one** advantage of conditional formatting over colouring the cells by hand. **[6]**

**11.** Column E is hidden.

**(a)** Explain what happens to column E when the sheet is printed.

**(b)** Describe how to display column E again. **[2]**

**12.** The task says: "Print the formulae on a single page in landscape orientation, with gridlines and row and column headings displayed. Make sure all formulae are fully visible."

Describe **five** steps the student should take. **[5]**

---

## Answers

**1.** B: the column is too narrow for the number. **[1]**

**2.** Values view shows the results calculated by the formulae (1); formulae view shows the formulae themselves in the cells (1). **[2]**

**3.** 4.5% (1). **[1]**

**4.** Text that is too long for the cell continues on extra lines inside the same cell, increasing the row height (1). **[1]**

**5.** Any two, 1 mark each: the reader can see which cells each formula refers to (1); references such as $H$1 can be checked against the cells (1); it is easier to find a particular cell on a large printout (1). **[2]**

**6.** The range of cells selected to be printed, so other parts of the sheet are not printed (1). **[1]**

**7. (a)** F2: 24 × 180 × 1.05 = 4536 (1). F3: 12.5 × 240 × 1.05 = 3150 (1).

**(b)** €12.50 (1).

**(c)** A typed symbol makes the cell text instead of a number (1), so the formulae in column F could not use it in calculations (1). **[5]**

**8. (a)** 18.75 × 60 × 1.05 = 1181.25 (1), displayed as 1181 (1).

**(b)** The format only changes the display; the stored values keep their decimals (1), so the SUM adds the full values, which can differ from adding the rounded displayed values (1). **[4]**

**9. (a)** Any two, 1 mark each: widen column F (1); wrap the text in F1 (and increase the row height if needed) (1).

**(b)** Wrapping the text (1). **[3]**

**10. (a)** Select F2:F5 (1); add a conditional formatting rule: cell value less than 1000, red (1); add a second rule: cell value greater than or equal to 4000, green (1).

**(b)** F2 (4536): green; F3 (3150): no colour; F4 (8 × 95 × 1.05 = 798): red; F5 (1181.25): no colour. 2 marks for all four correct; 1 mark for two or three correct.

**(c)** The colour changes automatically when the values change, so it is always correct (1). **[6]**

**11. (a)** It is not printed, because hidden columns do not appear on printouts (1).

**(b)** Select columns D and F (either side of E) and choose unhide (1). **[2]**

**12.** 1 mark each, any five:
- Switch to formulae view (1).
- Widen each column until every formula is fully visible (1).
- Set the orientation to landscape (1).
- Set the page scaling to fit to 1 page (wide and tall) (1).
- Turn on printing of gridlines (1).
- Turn on printing of row and column headings (1).
- Check the print preview before printing (1). **[5]**

## Frequently asked questions

**Does formatting a number to fewer decimal places round it?**
Only on screen. The stored value keeps all its decimals and is used in calculations. To change the value itself, use the ROUND function from subtopic 20.1.

**Should I print gridlines?**
Only when the task asks. They are often helpful on formulae printouts and are usually turned off for a finished report.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 20 Spreadsheets, 20.3 Present data.
