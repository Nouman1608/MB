---
title: "Cambridge IGCSE ICT (0417): Web development layers -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on the content, presentation and behaviour layers for 0417 subtopic 21.1, including classifying features and code."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 subtopic 21.1 Web development layers: the content, presentation and behaviour layers, what each is used for, and why they are kept separate. The number in square brackets after the last part of a question is the total for the whole question. All code and websites in the questions are original and invented.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Web development layers study guide](/resources/cambridge-igcse-ict-0417-web-development-layers/) · [Web development layers revision notes](/resources/cambridge-igcse-ict-0417-web-development-layers-revision-notes/)

---

## Section A: short answers

**1.** Which web development layer is used to display and format elements within a web page?

A: behaviour layer

B: content layer

C: presentation layer

D: structure layer **[1]**

**2.** State the purpose of the content layer. **[2]**

**3.** Name the type of language used in the behaviour layer and give **one** example of such a language. **[2]**

**4.** State the layer to which each of these belongs: a numbered list of instructions; making the list text italic. **[2]**

**5.** Give **one** example of what the behaviour layer could do on a web page. **[1]**

**6.** State the language used to create the content layer. **[1]**

---

## Section B: structured questions

**7.** A school website has these features. For each one, state the web development layer it belongs to.

**(a)** A photograph of the school with alternative text.

**(b)** All headings displayed in dark green.

**(c)** A photo gallery that shows the next photograph when an arrow button is clicked.

**(d)** A table of term dates.

**(e)** A 2 pixel border around every table cell.

**(f)** A message that appears if a parent submits the contact form without an email address. **[6]**

**8.** Read this original code.

```html
<head>
  <title>Riverside Rowing Club</title>
  <link rel="stylesheet" href="rowing.css">
  <script src="booking.js"></script>
</head>
<body>
  <h1>Riverside Rowing Club</h1>
  <p style="color:red;">Sessions are cancelled in high winds.</p>
  <button id="book">Book a session</button>
</body>
```

**(a)** Identify the line that attaches the presentation layer.

**(b)** Identify the line that attaches the behaviour layer.

**(c)** Identify the part of the code where presentation has been placed in the content layer, and explain why this is not good practice. **[4]**

**9.** A student says: "A hyperlink belongs to the behaviour layer, because something happens when you click it."

Explain whether the student is correct. **[3]**

**10.** A company has a website of 60 pages. All the formatting is held in one external stylesheet.

**(a)** The company changes its brand colour. Explain how the separation of layers helps.

**(b)** Explain how separating the layers helps the company provide a version of the site that suits mobile phones. **[4]**

**11.** Explain **two** ways in which separating the content layer from the presentation layer improves accessibility for users with visual impairments. **[4]**

**12.** A web design team consists of a writer, a graphic designer and a programmer.

**(a)** State which layer each person would work on.

**(b)** Explain **one** benefit to the team of the layers being in separate files. **[5]**

---

## Answers

**1.** C: presentation layer. **[1]**

**2.** To enter the content of the web page (1) and create its structure, such as headings, paragraphs, lists and tables (1). **[2]**

**3.** A scripting language (1); for example JavaScript (1). **[2]**

**4.** Numbered list: content layer (1). Italic text: presentation layer (1). **[2]**

**5.** Any one: display a message when a button is clicked (1); check a form has been completed before it is sent (1); change an image when the pointer moves over it (1); show or hide part of the page (1). **[1]**

**6.** HTML (1). **[1]**

**7. (a)** Content (1).

**(b)** Presentation (1).

**(c)** Behaviour (1).

**(d)** Content (1).

**(e)** Presentation (1).

**(f)** Behaviour (1). **[6]**

**8. (a)** `<link rel="stylesheet" href="rowing.css">` (1).

**(b)** `<script src="booking.js"></script>` (1).

**(c)** The inline style attribute `style="color:red;"` in the paragraph tag (1). It mixes formatting into the content layer, so the colour cannot be changed from the stylesheet alone and pages may become inconsistent (1). **[4]**

**9.** The student is not correct (1). A hyperlink is created with an HTML anchor element, so it is part of the content and structure of the page (1). Only a script that runs when the link is clicked, such as one that opens a pop-up box, would belong to the behaviour layer (1). **[3]**

**10. (a)** The colour is defined in the one stylesheet attached to every page (1), so changing it once in that file updates all 60 pages consistently, with no change to the content (1).

**(b)** The content stays the same (1), and a different stylesheet, or different rules in the stylesheet, can present it to suit small screens (1). **[4]**

**11.** Any two, each with explanation, 2 marks each:
- Content marked up with proper structure (headings, lists, alternative text on images) can be read correctly by screen-reader software (1), because the meaning does not depend on how the page looks (1).
- The user can switch off or override the stylesheet, for example to use larger text or higher contrast (1), and the content still makes sense because it is separate from the presentation (1).
- If the stylesheet fails to load, the content is still displayed (1), so the information remains available (1). **[4]**

**12. (a)** Writer: content layer (1). Graphic designer: presentation layer (1). Programmer: behaviour layer (1).

**(b)** Any one benefit with explanation: they can work at the same time (1) without changing or breaking each other's files (1); or a fault can be traced to one file (1), making it quicker to fix (1). **[5]**

## Frequently asked questions

**Do I need to write JavaScript for 0417?**
No. The syllabus asks you to know and understand the behaviour layer. The practical tasks in 21.2 and 21.3 create the content layer in HTML and the presentation layer in CSS.

**Is the title in the head section part of the content layer?**
Yes. The head and body are both written in HTML and form the structure of the page, so the title belongs to the content layer.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 21 Website authoring, 21.1 Web development layers.
