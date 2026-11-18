---
title: "Cambridge IGCSE ICT (0417): Web development layers -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Topic 21: Website authoring"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 21.1
syllabusTopics:
  - qualification: "igcse"
    topic: "website-authoring"
    subtopic: "web-development-layers-0417"
description: "Revision notes for 0417 subtopic 21.1: the content, presentation and behaviour layers, their languages, classifying features and why layers are kept separate."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense Cambridge IGCSE ICT 0417 subtopic 21.1 Web development layers. The full explanation, with an annotated page and a classification table, is in the [web development layers study guide](/resources/cambridge-igcse-ict-0417-web-development-layers/). Test yourself with the [web development layers practice questions](/resources/cambridge-igcse-ict-0417-web-development-layers-practice/), and see the [Website authoring revision notes](/resources/cambridge-igcse-ict-website-authoring-revision-notes/) for all of Topic 21.

## The syllabus definitions

Learn these three sentences; they are the safest wording for a theory answer.

- **Content layer**: used to enter the content and create the structure of a web page.
- **Presentation layer**: used to display and format elements within a web page.
- **Behaviour layer**: for a scripting language to control elements within a web page.

## Key terms

| Term | Meaning |
|---|---|
| Web development layers | The three separate parts of a web page: content, presentation and behaviour |
| HTML | HyperText Markup Language, used for the content layer |
| CSS | Cascading Style Sheets, used for the presentation layer |
| Scripting language | A language such as JavaScript used for the behaviour layer |
| Element | A part of an HTML page marked by tags, such as a heading or paragraph |
| Structure | What each part of the content is (heading, paragraph, list, table) |
| External stylesheet | A separate .css file attached to pages to format them |
| Inline style attribute | Formatting written inside an HTML tag, mixing presentation into the content layer |

## The three layers side by side

| | Content | Presentation | Behaviour |
|---|---|---|---|
| Question it answers | What is on the page? | How does it look? | What does it do? |
| Language | HTML | CSS | Scripting language (for example JavaScript) |
| Examples | Headings, paragraphs, lists, tables, images, video, sound, hyperlinks, title, metatags | Fonts, colours, backgrounds, borders, alignment, sizes | Pop-up messages, form checks, image changes on mouse-over, show/hide menus |
| Usually stored in | The .html file | An attached .css file | A script file or script element |
| Built in the 0417 practical? | Yes (21.2) | Yes (21.3) | No: know and understand only |

## Classifying features: quick test

Ask: **what**, **how it looks**, or **what it does when used**?

| Feature (invented) | Layer |
|---|---|
| A list of five club rules | Content |
| Red bullets in the list | Presentation |
| A table header row | Content |
| Pale grey background for the header row | Presentation |
| A video clip of a match | Content |
| A message saying "Please enter your name" when a form is sent empty | Behaviour |
| A page title shown on the browser tab | Content |
| Text centred on the page | Presentation |
| A photo gallery that moves to the next photo when an arrow is clicked | Behaviour |

One visible feature can involve all three: a **hyperlink** is content, its **colour** is presentation, a **script triggered by clicking** it is behaviour.

## Benefits of separating the layers

| Benefit | Because |
|---|---|
| Consistency | One external stylesheet formats every page in the same way |
| Easier maintenance | One change to the stylesheet updates the whole site |
| Different devices or outputs | The same content can have different stylesheets for phones, large screens or printing |
| Accessibility | Structured content can be read by screen readers and still makes sense without styles or scripts |
| Division of work | Writers, designers and programmers work on separate files at the same time |
| Simpler fault-finding | Each kind of problem is in one place |

## Exam traps

- Swapping the layers: CSS is **not** content; HTML does **not** format.
- Hyperlinks placed in the behaviour layer: they are content.
- "Behaviour" explained as how the page looks on different devices: that is presentation.
- A benefit without a reason, such as "it's easier".
- Forgetting that the 0417 practical asks you to build only the content and presentation layers.
- Writing that the behaviour layer uses CSS: it uses a scripting language.

## Self-test

1. State the purpose of the content layer.
2. Name the language used for the presentation layer.
3. What kind of language does the behaviour layer use?
4. Which layer is used to make all paragraphs 14 point?
5. Which layer contains a table of prices?
6. Which layer would display a warning when a user clicks a button without filling in a form?
7. Is a hyperlink part of the behaviour layer? Explain.
8. Give **two** benefits of keeping the presentation layer in an external stylesheet.
9. How is the presentation layer attached to an HTML page?
10. What happens to the content of a page if its stylesheet fails to load?
11. Why does an inline style attribute weaken the separation of layers?
12. Give **one** reason why separating layers helps people with visual impairments.

### Answers

1. To enter the content and create the structure of the web page.
2. CSS (Cascading Style Sheets).
3. A scripting language, such as JavaScript.
4. The presentation layer.
5. The content layer.
6. The behaviour layer.
7. No. The link is content (an HTML element); a script triggered by clicking it would be behaviour.
8. Any two: every page looks consistent; one change updates every page; the same content can be restyled for different devices; content and design can be worked on separately.
9. With a link element in the head section of the HTML that names the stylesheet file.
10. It still appears, in the browser's default styling, because the content layer does not depend on the stylesheet.
11. It puts formatting inside the HTML, so the presentation is mixed into the content layer and cannot be changed from the stylesheet alone.
12. Content marked up with proper structure and alternative text can be read correctly by a screen reader, whatever the presentation.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 21 Website authoring, 21.1 Web development layers.
