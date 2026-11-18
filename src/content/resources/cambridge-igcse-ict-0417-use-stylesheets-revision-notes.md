---
title: "Cambridge IGCSE ICT (0417): Use stylesheets -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0417 subtopic 21.3: CSS syntax, generic styles, classes, inline styles, font, background and table properties, comments and hierarchy."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense Cambridge IGCSE ICT 0417 subtopic 21.3 Use stylesheets: creating the presentation layer in CSS. The [21.3 Use stylesheets study guide](/resources/cambridge-igcse-ict-0417-use-stylesheets/) explains each property and works through a hierarchy example. Test yourself with the [21.3 practice questions](/resources/cambridge-igcse-ict-0417-use-stylesheets-practice/). The [Website authoring revision notes](/resources/cambridge-igcse-ict-website-authoring-revision-notes/) cover all of Topic 21.

## Key terms

| Term | Meaning |
|---|---|
| Cascading stylesheet (CSS) | A set of rules that format elements of web pages, saved with the .css extension |
| Attached (external) stylesheet | A separate .css file linked from the head of each page |
| Inline style attribute | A style attribute written inside one HTML tag |
| Selector | The part of a rule that says which elements it applies to |
| Declaration | A property and value pair, such as `color: navy;` |
| Generic style | A rule whose selector is an element (h1, p, li), applying to all such elements |
| Class | A named rule (`.name`) applying only to elements with `class="name"` |
| Comment | Notes in a stylesheet between `/*` and `*/`, ignored by the browser |
| Hierarchy (cascade) | The order of priority used when rules conflict |

## Rule syntax checklist

`selector { property: value; property: value; }`

- Colon between property and value; semicolon after each declaration.
- Curly brackets around declarations.
- Font names with spaces in quotation marks; end with a generic family (serif, sans-serif).
- CSS uses **color** and **center**.

## Properties the syllabus names

| Group | Properties |
|---|---|
| Background | `background-color`, `background-image: url("...")` |
| Font | `font-family`, `font-size`, `color`, `text-align`, `font-weight: bold`, `font-style: italic` |
| Table size | `width`, `height` (px or %) |
| Table colour | `background-color` on table, tr, th or td |
| Alignment | `text-align` (horizontal), `vertical-align` (vertical: top, middle, bottom) |
| Spacing | `border-spacing` (gap between cells) |
| Padding | `padding` (gap inside a cell, between content and border) |
| Borders | `border-collapse: collapse`; `border: 2px solid #333333` (thickness, style, colour); `border: none` (invisible) |

## From task wording to CSS

| Instruction (invented) | Rule |
|---|---|
| "All paragraphs 12 point Tahoma, or a sans-serif font if Tahoma is unavailable" | `p { font-family: Tahoma, sans-serif; font-size: 12pt; }` |
| "Level 1 headings centred and bold" | `h1 { text-align: center; font-weight: bold; }` |
| "Table data cells with a 3 pixel dark red border" | `td { border: 3px solid #8B0000; }` |
| "Leave 10 pixels between cell contents and the border" | `td { padding: 10px; }` |
| "List items in italic" | `li { font-style: italic; }` |
| "A class called note with a light grey background" | `.note { background-color: #D3D3D3; }` |

Read each instruction for the **element** (selector), the **property** and the **value**, then check spelling and punctuation.

## Style vs class

| | Style | Class |
|---|---|---|
| Written | `p { ... }` | `.notice { ... }` |
| Applied | Automatically to every p | Only where `class="notice"` is added |
| Reusable on other element types? | No | Yes |
| Priority | Lower | Higher than a generic style for the same property |

## Attached vs inline

| | Attached stylesheet | Inline style |
|---|---|---|
| Where | Separate .css file, linked in the head | Inside one tag |
| Scope | Every page that links it | One element |
| Maintenance | Change once | Change each element |
| Priority | Lower | Highest |

## Hierarchy

1. **Inline style** (highest).
2. Attached stylesheets: the **later** link wins over an earlier one for the same selector.
3. Non-conflicting properties from every source combine.

Quick example (invented): first.css sets `h1 { color: green; font-size: 30px; }`, second.css (attached later) sets `h1 { color: maroon; }`, and the tag is `<h1 style="text-align: right;">`. Result: maroon, 30px, right aligned.

## File paths

- Attach with a **relative path**: `<link rel="stylesheet" href="css/site.css">`.
- **Why?** An absolute path (such as C:\...) refers to one computer's folders; on the web server or another computer it cannot be found and the pages lose their formatting.
- Paths **inside** a stylesheet, such as a background image, are relative to the **stylesheet's** folder.

## Exam traps

- `colour:` or `centre`: ignored by the browser.
- Missing semicolon: the next declaration fails.
- `.class` used in HTML, or a class rule without the full stop.
- Padding and spacing confused.
- Borders shown as double lines when `border-collapse: collapse` was required.
- Stylesheets attached in the wrong order, so the general style overrides the specific one.
- An external stylesheet containing HTML tags.

## Self-test

1. State the file extension of an external stylesheet.
2. Write a CSS comment saying *Main styles*.
3. Write a rule making every h3 italic and dark green (#006400).
4. What is the difference between padding and border-spacing?
5. Which property makes adjacent cell borders into single lines?
6. Write a declaration that makes a border invisible.
7. Write a class called *warning* with a yellow background and bold text.
8. How is the class *warning* applied to a paragraph in the HTML?
9. An attached stylesheet sets `p { color: blue; }`; the tag is `<p style="color: grey;">`. What colour is the paragraph?
10. a.css and then b.css are attached. Both set the font size of li. Which wins?
11. Give **one** reason for using an attached stylesheet instead of inline styles.
12. Why must a relative path be used to attach a stylesheet?

### Answers

1. .css
2. `/* Main styles */`
3. `h3 { font-style: italic; color: #006400; }`
4. Padding is the space inside a cell between its content and border; border-spacing is the space between neighbouring cells.
5. `border-collapse: collapse;`
6. `border: none;` (or `border-style: hidden;`).
7. `.warning { background-color: yellow; font-weight: bold; }`
8. `<p class="warning">...</p>`
9. Grey, because an inline style overrides the attached stylesheet.
10. b.css, because it is attached later.
11. Any one: one file formats every page consistently; a change is made once; it keeps presentation separate from content.
12. So the link still works when the site is moved or uploaded; an absolute path refers to a folder that will not exist on another computer.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 21 Website authoring, 21.3 Use stylesheets.
