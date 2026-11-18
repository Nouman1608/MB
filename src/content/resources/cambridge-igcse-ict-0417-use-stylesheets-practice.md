---
title: "Cambridge IGCSE ICT (0417): Use stylesheets -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 21: Website authoring"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 21.3
syllabusTopics:
  - qualification: "igcse"
    topic: "website-authoring"
    subtopic: "use-stylesheets-0417"
description: "Original questions with full answers on CSS for 0417 subtopic 21.3: table and font properties, classes, inline styles, comments, hierarchy and relative paths."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 subtopic 21.3 Use stylesheets: creating the presentation layer in CSS. The number in square brackets after the last part of a question is the total for the whole question. All code is original and invented. Any correct, equivalent CSS is acceptable in the answers.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [21.3 Use stylesheets study guide](/resources/cambridge-igcse-ict-0417-use-stylesheets/) · [21.3 Use stylesheets revision notes](/resources/cambridge-igcse-ict-0417-use-stylesheets-revision-notes/)

---

## Section A: short answers

**1.** Which of these CSS declarations makes text bold?

A: font-style: bold;

B: font-weight: bold;

C: text-style: bold;

D: font: heavy; **[1]**

**2.** State the symbols used to start and end a comment in a stylesheet. **[1]**

**3.** State the difference between padding and border-spacing in a table. **[2]**

**4.** Write a declaration that aligns the contents of table cells to the bottom of each cell. **[1]**

**5.** State which has the higher priority: an inline style attribute or an attached stylesheet. **[1]**

**6.** Give **two** differences between an attached stylesheet and an inline style attribute. **[2]**

---

## Section B: structured questions

**7.** Write CSS rules for a stylesheet so that:

- every table is 600 pixels wide with collapsed borders;
- every th cell has a dark blue (#002060) background, white text and is centred;
- every td cell has a 1 pixel solid grey (#808080) border and 5 pixels of padding;
- the stylesheet starts with a comment containing the word *Timetable*. **[7]**

**8.** A web page attaches *general.css* and then *events.css*.

- general.css: `h2 { color: black; font-size: 20px; font-family: Arial, sans-serif; }`
- events.css: `h2 { color: purple; font-size: 22px; }`
- HTML: `<h2 style="font-size: 26px;">Summer Fair</h2>`

**(a)** State the colour, font size and font family of the heading.

**(b)** Explain how you decided the colour.

**(c)** The two link elements are swapped, so events.css is attached first. State the colour of the heading now. **[6]**

**9.** A club wants most paragraphs in its normal style, but a few paragraphs that announce cancellations must be red and italic.

**(a)** Explain whether a generic style or a class should be used for the cancellation paragraphs.

**(b)** Write the CSS for a class called *cancel* with red, italic text.

**(c)** Write the HTML to apply this class to the paragraph *No training on Friday*. **[5]**

**10.** Find **four** errors in this original stylesheet and write each line correctly.

```css
h1 { font-family: Georgia serif; colour: navy; }
p { font-size 14px; text-align: centre; }
.box { border: 2px solid; background-color: #EEEEEE }
``` 

**[8]**

**11.** A stylesheet *site.css* is in a folder called *css*. The background image *paper.jpg* is in a folder called *images*. Both folders are inside the website folder.

**(a)** Write the CSS to use *paper.jpg* as the background image of the body.

**(b)** Explain why the path must be relative. **[3]**

**12.** A designer wants a table of prices with no visible borders at all, the text in every cell vertically centred, and the price column right aligned.

Write CSS that uses a class called *prices* for the table and a class called *amount* for the price cells. **[4]**

---

## Answers

**1.** B: font-weight: bold; **[1]**

**2.** `/*` to start and `*/` to end (1). **[1]**

**3.** Padding is the space inside a cell between its content and its border (1); border-spacing is the space between neighbouring cells (1). **[2]**

**4.** `vertical-align: bottom;` (1). **[1]**

**5.** An inline style attribute (1). **[1]**

**6.** Any two, 1 mark each: an attached stylesheet is a separate .css file, an inline style is written inside one tag (1); an attached stylesheet can format every page, an inline style affects only one element (1); a change to an attached stylesheet updates all pages, inline styles must be changed one by one (1); inline styles take priority over attached stylesheets (1). **[2]**

**7.**
```css
/* Timetable styles */
table { width: 600px; border-collapse: collapse; }
th { background-color: #002060; color: white; text-align: center; }
td { border: 1px solid #808080; padding: 5px; }
```
1 mark each: comment with *Timetable* (1); table width 600px (1); border-collapse: collapse (1); th background #002060 (1); th white text and centred (1); td border 1px solid #808080 (1); td padding 5px (1). **[7]**

**8. (a)** Purple (1), 26px (1), Arial (1).

**(b)** Both stylesheets set the colour; events.css is attached later, so its rule takes priority over general.css (1), and the inline style does not set a colour (1).

**(c)** Black (1). **[6]**

**9. (a)** A class (1), because a generic style for p would change every paragraph, whereas a class applies only to the paragraphs given that class (1).

**(b)** `.cancel { color: red; font-style: italic; }`: class selector with full stop (1); red and italic declarations correct (1).

**(c)** `<p class="cancel">No training on Friday</p>` (1). **[5]**

**10.** Any four, 1 mark for each error identified and 1 for the correct line:
- Missing comma between fonts (1): `font-family: Georgia, serif;` (1).
- `colour` should be `color` (1): `color: navy;` (1).
- Missing colon after font-size (1): `font-size: 14px;` (1).
- `centre` should be `center` (1): `text-align: center;` (1).
- Border has no colour (1): `border: 2px solid #000000;` or another colour (1).

Credit also the missing semicolon after the last declaration in .box (good practice, though not required by browsers), if identified with its correction. Maximum 8. **[8]**

**11. (a)** `body { background-image: url("../images/paper.jpg"); }`: background-image property with url (1); correct relative path from the css folder, ../images/paper.jpg (1).

**(b)** An absolute path refers to a folder on one computer, which would not exist when the site is uploaded or moved, so the background would not appear (1). **[3]**

**12.**
```css
.prices td { border: none; vertical-align: middle; }
.amount { text-align: right; }
```
1 mark each: rule targeting cells of the prices table (1); border: none (or hidden) (1); vertical-align: middle (1); .amount with text-align: right (1). Also credit `.prices { border: none; }` with a separate td rule. **[4]**

## Frequently asked questions

**Should I use pixels or points for font sizes?**
Use the unit the task gives. Pixels (px) are common for screen display; points (pt) are also accepted by browsers.

**Can one element have more than one class?**
Yes, for example `class="notice large"`, but 0417 tasks normally ask for a single class at a time.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 21 Website authoring, 21.3 Use stylesheets.
