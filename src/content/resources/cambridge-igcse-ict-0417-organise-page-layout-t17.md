---
title: "Cambridge IGCSE ICT (0417): Organise page layout"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 17: Document production"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 17.1
syllabusTopics:
  - qualification: "igcse"
    topic: "document-production"
    subtopic: "organise-page-layout-t17-0417"
description: "Page size, orientation, margins, columns, column width and spacing, and setting and removing breaks for Cambridge IGCSE ICT 0417, with worked calculations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

The first skill listed under Topic 17 Document production in Cambridge IGCSE ICT 0417 is **organise page layout**: "edit page layout including page size, page orientation, page margins, number of columns, column width, spacing between columns, set and remove breaks (page, section and column breaks)". This is a practical skill, assessed by what your document looks like when printed or saved. This guide explains each setting, shows how the measurements fit together and works through a typical set of instructions. The broader [Document production study guide](/resources/cambridge-igcse-ict-document-production-study-guide/) covers the whole topic.

## Page size

Page size is the size of paper the document is designed for. The common international sizes are:

| Size | Width × height (portrait) | Typical use |
|---|---|---|
| A3 | 29.7 cm × 42.0 cm | Posters, large diagrams |
| A4 | 21.0 cm × 29.7 cm | Letters, reports, most practical tasks |
| A5 | 14.8 cm × 21.0 cm | Leaflets, booklets |
| Letter | 21.59 cm × 27.94 cm | Standard in North America |

Each A size is half the one above it: A5 is A4 folded in half. Software sometimes defaults to Letter, so always check the paper size when a task says A4; the two are close enough that the difference is easy to miss on screen, but margins and page breaks will not match the expected output.

## Page orientation

**Portrait** pages are taller than they are wide; **landscape** pages are wider than they are tall. In landscape, the A4 width becomes 29.7 cm and the height 21.0 cm. Orientation can be set for the whole document or for one section only. A wide table or chart in an otherwise portrait report is placed in its own section and that section alone is turned to landscape.

## Page margins

The margins are the space between the edge of the paper and the text area. There are four (top, bottom, left, right), and each can be set separately. The width of the text area is:

> text width = page width - left margin - right margin

For A4 portrait with left and right margins of 2.5 cm: 21.0 - 2.5 - 2.5 = **16.0 cm**.

Check the units your software uses. A task given in centimetres must not be entered as inches; 2.5 inches is 6.35 cm, which would make the text area far too narrow. Set margins from the page setup options, not by dragging the ruler, which gives approximate values.

## Columns

### Number of columns

Text set in columns flows down the first column and then continues at the top of the next. Newsletters and leaflets often use two or three columns because short lines are quicker to read. Columns can be applied to the whole document or to one section.

### Column width and spacing between columns

The **spacing** (or gutter between columns, not to be confused with the binding gutter margin) is the gap between one column and the next. For equal columns:

> column width = (text width - (number of columns - 1) × spacing) ÷ number of columns

There is one fewer gap than there are columns.

**Example 1.** A4 portrait, left and right margins 2.5 cm, three equal columns with 1 cm spacing. Text width is 16.0 cm. There are two gaps: 2 × 1 = 2 cm. Column width = (16.0 - 2) ÷ 3 = 14 ÷ 3 = **4.67 cm** (to 2 decimal places).

**Example 2.** A4 landscape, left and right margins 2 cm, two equal columns with 1.5 cm spacing. Text width = 29.7 - 2 - 2 = 25.7 cm. Column width = (25.7 - 1.5) ÷ 2 = 24.2 ÷ 2 = **12.1 cm**.

**Unequal columns.** Turn off the equal column width option and set each column. With a 16.0 cm text width, a left column of 5 cm, spacing of 1 cm and a right column of 10 cm uses 5 + 1 + 10 = 16 cm exactly. If the numbers do not add up to the text width, the software adjusts one of them, so check the values after setting them.

Some software also offers a **line between** columns. Use it only if the task asks.

## Breaks

### Setting breaks

| Break | What it does |
|---|---|
| Page break | Text after the break starts at the top of the next page |
| Column break | Text after the break starts at the top of the next column |
| Section break (next page) | Starts a new section on a new page |
| Section break (continuous) | Starts a new section on the same page |
| Section break (odd or even page) | Starts a new section on the next odd- or even-numbered page |

A **section** is a part of a document that can have its own orientation, margins, columns, headers and footers. A heading across the full width above two columns of text needs a continuous section break between them: the heading's section has one column, the article's section has two.

Insert a break at the cursor position from the layout or insert options. Do not imitate a break by pressing Enter repeatedly; the blank lines will move as soon as text above them changes. The [pagination study guide](/resources/cambridge-igcse-ict-0417-pagination-t17/) explains when each break is the right choice.

### Removing breaks

Breaks are invisible in normal view. To remove one:

1. Show formatting marks (the button with the ¶ symbol). Each break appears as a dotted line with its name, such as "Page Break" or "Section Break (Continuous)".
2. Click on or just before the break, or select it.
3. Press Delete.

Take care with section breaks. In many word processors, including Microsoft Word, the formatting of a section is stored in the break at its end. Deleting that break merges the two sections, and the text before the break takes on the layout of the section after it. If columns or orientation suddenly change after a deletion, undo, and check which break you removed.

## Worked example: following layout instructions

*Task (invented):* "Set the page to A4 portrait with all margins 2 cm. The title must span the page. The body text must be in two equal columns with 1 cm spacing. Start the heading *Results* at the top of the second column. Page 2 contains a wide table and must be landscape; page 3 returns to portrait."

1. Page setup: A4, portrait, top, bottom, left and right margins 2 cm. Text width = 21.0 - 2 - 2 = 17.0 cm.
2. Click after the title and insert a **continuous** section break. Apply two columns to the second section only, with 1 cm spacing. Each column = (17.0 - 1) ÷ 2 = **8.0 cm**.
3. Click just before *Results* and insert a **column break**, so the heading moves to the top of column 2.
4. Click before the table and insert a **next page** section break; click after it and insert another. Set the middle section alone to landscape, and set it to one column so the table can use the full width. In landscape the text width is 29.7 - 2 - 2 = 25.7 cm.
5. Show formatting marks and check that there is no stray page break or empty page. Check in print preview that page 1 is portrait with two columns, page 2 is landscape and page 3 is portrait.

## Common mistakes

- Leaving the paper size as Letter when A4 is asked for.
- Entering margins in the wrong units.
- Applying columns to the whole document, so the title is squeezed into one column.
- Forgetting there is one fewer column gap than there are columns.
- Using page breaks where section breaks are needed, so orientation cannot change for one page.
- Deleting a section break and not noticing that the layout of the earlier section has changed.

## Exam technique

The practical paper uses instructions such as *set*, *change* and *insert*. Do exactly what is asked and nothing more. Read the whole task before starting, because a later instruction (such as a landscape page) can affect where you put section breaks. Check the measurements in the page setup and column dialogue boxes rather than trusting the screen, and finish with print preview.

## Check your understanding

1. What are the dimensions of A4 portrait? *21.0 cm wide, 29.7 cm high.*
2. A4 portrait has left and right margins of 3 cm. What is the text width? *15.0 cm.*
3. With a text width of 15 cm, two equal columns and 1 cm spacing, how wide is each column? *(15 - 1) ÷ 2 = 7 cm.*
4. Which break moves the following text to the top of the next column? *A column break.*
5. Which break lets a title span the page above two columns on the same page? *A continuous section break.*
6. How do you find a break to delete it? *Show formatting marks so it appears as a labelled dotted line.*

## Next steps

Revise with the [organise page layout revision notes](/resources/cambridge-igcse-ict-0417-organise-page-layout-t17-revision-notes/), then try the [organise page layout practice questions](/resources/cambridge-igcse-ict-0417-organise-page-layout-t17-practice/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 17 "Document production", organise page layout.
