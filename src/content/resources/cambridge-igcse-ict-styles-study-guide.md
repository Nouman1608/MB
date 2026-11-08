---
title: "Cambridge IGCSE ICT (0417): Styles -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 14: Styles"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 14
syllabusTopics:
  - qualification: "igcse"
    topic: "styles"
  - qualification: "igcse"
    topic: "styles"
    subtopic: "create-edit-and-apply-styles-t14-0417"
  - qualification: "igcse"
    topic: "styles"
    subtopic: "corporate-house-style-t14-0417"
description: "Creating, editing and applying paragraph and character styles, and following a corporate house style, for the Cambridge IGCSE ICT 0417 practical skills."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "The sub-topics for this practical topic are unnumbered in the source list; check how far the 0417 2026-2028 syllabus expects style definitions and house style to be taken."
publishedDate: 2026-11-08
featured: false
---

A **style** is a saved set of formatting instructions that you apply to text, to a table or to another object in a single step. Cambridge IGCSE ICT 0417 expects you to create, edit and apply styles, and to make documents follow a corporate house style. Styles are the main way of getting consistent documents, and in the practical papers consistency is often checked directly: every heading should look the same, every body paragraph should match and no formatting should be applied by hand when a style could be used.

## Where this fits in the specification

Styles connect to layout (paragraph alignment and spacing), to audience (a house style is chosen to suit the organisation's readers) and to proofing (consistency is a proofing check). In a long task such as a report, the styles you define at the start save a great deal of editing time later.

## Create, edit and apply styles

### Types of style

- A **paragraph style** applies to a whole paragraph and can set the font, size, colour, alignment, line spacing, spacing before and after, indents, tab stops and borders. Examples include Heading 1, Heading 2 and Body Text.
- A **character style** applies to selected words only, for example a bold red style for a warning word.
- A **table style** sets borders, shading and fonts for a whole table.
- In presentation and web software, styles take the form of **master slides** and **style sheets** (CSS), which work in the same way: define the formatting once and apply it widely.

### Creating a style

To create a paragraph style you give it a **name**, choose the formatting, and decide what it is **based on** and what style follows it. For instance, a style called `Body Text` could be 11 pt Arial, left-aligned, with 1.15 line spacing and 6 pt spacing after each paragraph. A style called `Heading 1` could be 18 pt Arial bold in dark blue, with 12 pt spacing before and 6 pt after, and a following style of `Body Text`, so that pressing Enter after a heading starts a body paragraph.

Style names should describe their purpose, for example `Caption` or `Warning`, and not their appearance, such as `BigBlue`, because the appearance may change.

### Applying and editing styles

You apply a style by selecting the text (or placing the cursor in the paragraph) and choosing the style from the styles list. Applying a style is better than formatting by hand because:

- the formatting is **consistent** throughout the document;
- it is **faster**, with one click per paragraph;
- a change to the style updates **every** paragraph that uses it;
- headings with styles can be used to build a **contents list** automatically.

When you **edit** a style, for example changing Body Text from 11 pt to 12 pt, every paragraph with that style changes. If a style is *based on* another, changes to the parent can pass down to the children, which is called **inheritance**. If you make a manual change to one paragraph, it is called a **direct formatting override**, and it will not update when the style changes, so avoid it.

### Worked example: why a style is quicker

A 12-page report has 18 headings, and all of them need changing from 14 pt black to 16 pt dark blue.

- *Without a style:* each heading must be selected and formatted separately, which is 18 separate edits and a chance of missing one or applying a different shade.
- *With a Heading 1 style:* one edit to the style changes all 18 headings at once, identically.

The saving is 17 fewer edits (18 - 1), and the result is guaranteed consistent. In an answer, say both parts, the time and the consistency.

Suppose the style is based on Body Text and Body Text changes font from Arial to Verdana. The heading will also change unless the heading style has set its own font. This is why the style hierarchy should be planned before work starts.

### Checking the result

Check that every body paragraph uses the same style, every heading uses its heading style, and that there are no stray spaces or blank paragraphs used to create space. Look at the styles list to see the names of styles applied, and use the show formatting marks option to check for empty paragraphs.

## Corporate house style

A **corporate house style** (also called a corporate identity) is a set of rules which an organisation uses for all its documents, so that they look as though they come from the same organisation. It makes the company instantly recognisable and looks professional.

Typical elements:

- **Logo**, with a fixed position and size.
- **Colour scheme**, for example a specified dark blue and orange, often given as colour codes.
- **Fonts**, including heading, body and caption fonts and sizes.
- **Layout rules**: margins, alignment, line spacing, position of headers, footers and page numbers.
- **Slogan or tagline**, and standard wording such as the confidentiality notice.
- **Image and chart style**, for example how graphs should be coloured.

On a computer the house style is usually built into a **template**, which contains the saved styles, header and footer, logo and page setup. A user opens the template and writes the document without having to format it from the beginning.

### Worked example: applying a house style

A company house style says: headings in Arial 16 pt bold, colour dark blue; body text in Arial 11 pt, left-aligned; logo at the top right of the first page; footer with the page number centred and the confidential notice on the left.

An efficient way to follow it:

1. Create the style `Heading 1` with Arial 16 pt bold, dark blue.
2. Create the style `Body Text` with Arial 11 pt, left-aligned.
3. Insert the logo into the header, aligned right, or place it at the top right as instructed.
4. Create the footer with a left-aligned notice and a centred automatic page number, using tab stops.
5. Apply the styles to the text and check that no paragraph has a different font or size.
6. Save the file as a template if it will be used again.

A marker will look for the exact values, so read the specification closely, including sizes in points and the alignment of every item.

### Benefits of a house style

Documents look professional and consistent, the brand is easy to recognise, staff do not spend time on formatting and new staff can produce correct documents quickly. A weakness is that it limits individual creativity, and the style must be updated for all documents when the organisation changes it.

## Common mistakes

- Formatting each heading by hand rather than applying a style.
- Choosing a style name based on its appearance, which becomes misleading if the style is changed.
- Using the Enter key to create space between paragraphs, in place of spacing settings.
- Forgetting a small element of the house style, such as the logo position or footer.
- Applying direct formatting on top of a style, leading to inconsistency when the style is edited.
- Thinking that consistency means everything must look identical. Headings and body text differ, but each heading level must match the others at the same level.

## Exam technique

When asked why styles are used, give a **benefit and an explanation**, such as "A change to the style updates all paragraphs, which keeps the document consistent." For practical tasks, create the style first, apply it, then check. For house style questions, quote the exact attributes (font, size, colour, position) from the task, and tick them off.

## Check your understanding

1. What is a style? *A saved set of formatting instructions that can be applied to text in one step.*
2. State two benefits of using styles. *Consistency and speed, or the ability to change every paragraph by editing the style.*
3. A document has 30 headings and the colour must change. How many edits are needed with a heading style? *One edit, to the style.*
4. What is the difference between a paragraph style and a character style? *A paragraph style affects a whole paragraph; a character style affects selected words.*
5. Why should style names describe a purpose? *Because the appearance may change, so a purpose such as Caption stays meaningful.*
6. Define corporate house style. *A set of rules for fonts, colours, logo and layout that makes an organisation's documents look consistent.*
7. Give three elements of a house style. *Logo, colour scheme and fonts (or layout rules, slogan).*
8. How does a template help apply a house style? *It stores the styles, page setup, logo and footers so new documents start with the correct formatting.*
