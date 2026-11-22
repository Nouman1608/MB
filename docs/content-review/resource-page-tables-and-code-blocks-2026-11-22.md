# Resource pages: tables and worked-example blocks on phones and desktop

Internal review note, 22 Nov 2026 (D-515). Found while viewing the four pilot pages on the live site in a browser: a phone-sized view (375 x 812) and a desktop-sized view (1024 wide). Both findings are about how the site draws content. **Both were fixed the same day on the owner's instruction (D-516); see "What was done" at the end.** The text below is the finding as it was written.

## What was checked

For each page at each size: horizontal page scrolling, number of `h1`, tables, code blocks, figures (alt text, broken images, wider than the screen), body text size, and, by eye, the densest sections.

| Page | Desktop | Phone |
|---|---|---|
| 0620 atomic structure study guide | No overflow. 3 tables fit. 14 code blocks fit. 12 of 12 figures have alt text and a caption. None broken | No overflow. Tables fit but are cramped. **All 14 code blocks wrap**, 12 of them aligned-column layouts |
| AQA 7405 relative mass and mole guide | No overflow. 4 code blocks, none wrap. 2 of 2 figures have alt text and a caption | No overflow. **All 4 code blocks wrap** (the two worked examples wrap 6 of 11 and 8 of 11 lines) but each step stays legible |
| 0620/5070 atomic structure practice | No overflow. Text only | No overflow. Nothing wider than the screen. Text only |
| 9990 clinical psychology practice | No overflow. Text only | No overflow. Nothing wider than the screen. Text only |

Body text is 17.5px on all four. No page scrolls sideways at either size.

## Finding 1: aligned-column blocks do not line up, and wrap on a phone

**What is seen.** In Worked example 3 of the 0620 guide, the particle-counting table is a fenced block written with spaces to make columns. On desktop the columns are ragged ("Al3+ 13 14 13 - 3 = 10" does not sit under "particle protons neutrons electrons"). On a phone the header row splits over two lines and "= 18" drops to its own line.

**Why.** `src/styles/global.css` lines 113 to 151. An unlabelled fence is drawn in the site's proportional font with `white-space: pre-wrap` and a hanging indent (D-476): right for a line of working that wraps, wrong for columns. A fence labelled `text` is drawn in a monospace font, with no wrapping and sideways scrolling (D-478), which is what drawn layouts need. The aligned blocks on these pages are not labelled `text`.

**The fix.** Label the aligned-column blocks `text` (12 on the 0620 guide; 3 on the AQA guide, though its steps read acceptably as they are). The template already supports this, so no CSS changes.

**The cost.** It edits the two Chemistry guides. Their content hashes change, so both teacher verifications (D-497) go stale and the pages return to REVERIFICATION_REQUIRED until the teacher re-confirms, and two new assessments are needed. That is the framework working as designed, even for a formatting-only edit. Not done.

## Finding 2: tables have no borders, padding or header styling

**What is seen.** In the resource body, `td` and `th` have 0 padding and no borders; rows have no shading and headings no styling, because no CSS rule targets `.resource-content table`. On desktop the columns still read, held apart by the table layout. On a phone, the middle column of the 0620 outcomes table is about 140px wide, its text wraps to six or seven lines, and with no row dividers it is hard to see where one row ends.

**The fix.** A small rule for `.resource-content table`: cell padding, a bold header, a thin bottom border on rows, and a horizontally scrolling wrapper for wide tables.

**The cost.** It changes how every table on every resource page looks (18,318 resources), so it needs a design decision, a full build and the audits. Not done.

## What was not checked

- Pages other than these four. Both findings come from site-wide styles, so other pages with tables or unlabelled aligned blocks will behave the same way, but they were not viewed.
- A real phone. The phone view is a browser emulation at 375 x 812.
- Screen readers, and keyboard use.
- AI-assisted. Not a teacher review.

## What was done (D-516, 22 Nov 2026)

The owner said "fix them", knowing the cost of finding 1.

- **Finding 2 (tables)** was fixed site-wide in `src/styles/global.css`, with a scroll box added by a markdown plugin (`src/utils/markdown/hast-table-scroll.mjs`). Reason for the plugin: a survey of all 42,087 tables on 13,578 pages found about 2,900 (6.9%) already wider than a phone screen and cut off, because the page does not scroll; padding alone would have pushed 1,900 to 3,100 more over the edge.
- **Finding 1 (worked-example blocks)**: eight blocks on the 0620 guide became real tables, two are fenced `text`, and one block on the AQA guide became a table. Prose-like blocks were left alone. The owner re-confirmed both pages and their verifications were replaced; the cost was exactly as predicted.
- **Not done:** other pages with unlabelled aligned blocks were not looked for, and the pages were not checked on a real phone or with a screen reader.
