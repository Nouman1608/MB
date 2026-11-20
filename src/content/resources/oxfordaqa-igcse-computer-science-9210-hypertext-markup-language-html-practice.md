---
title: "OxfordAQA IGCSE Computer Science (9210): Hypertext Markup Language (HTML) -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 HTML and CSS Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Web page design"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 8.02
syllabusTopics:
  - qualification: "igcse"
    topic: "web-page-design"
  - qualification: "igcse"
    topic: "web-page-design"
    subtopic: "hypertext-markup-language-html-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on HTML tags, embedded CSS rules, type and class selectors and HTML5."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Hypertext Markup Language (HTML) study guide](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html/) | [Hypertext Markup Language (HTML) revision notes](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html-revision-notes/)

These questions cover section 3.8.2 Hypertext Markup Language (HTML) of the OxfordAQA International GCSE Computer
Science (9210) specification.

---

## Section A

**1.** State the purpose of each HTML tag.

**(a)** `<ul>` **[1]**

**(b)** `<li>` **[1]**

**(c)** `<br />` **[1]**

**(d)** `<title>` **[1]**

**2.** State the difference between a block-level element and an inline element. **[2]**

**3.** State the three parts of a CSS style rule. **[3]**

**4.** State what the property `font-weight: bold;` does. **[1]**

## Section B

**5.** Write the HTML for a page with the title "School Trip". The page must show a heading "School Trip" and a
paragraph that reads "We leave at 8 am." **[5]**

**6.** Write the HTML for a numbered list of three items: Passport, Tickets, Money. **[3]**

**7.** Write the HTML for a link to the page `times.html` that displays the words "See the times". **[3]**

**8.** Write the HTML to show the image `bus.jpg` with the alternative text "A school bus". **[3]**

**9.** The following page is displayed in a browser.

```
<html>
<head>
<title>Notices</title>
<style>
h1 {
  color: blue;
  text-align: center;
}
.alert {
  color: red;
  font-style: italic;
}
</style>
</head>
<body>
<h1>Notices</h1>
<p>Library open at lunch.</p>
<p class="alert">Gym closed today.</p>
<p>See the <span class="alert">board</span> for details.</p>
</body>
</html>
```

**(a)** State the text that is shown on the browser tab. **[1]**

**(b)** Describe how the heading is displayed. **[2]**

**(c)** State which text is displayed in red italics. **[2]**

**10.** Write a CSS rule that makes every paragraph use the font Arial, at a size of 18px. **[3]**

**11.** Write a CSS class rule called note that gives text a yellow background, and the HTML for one paragraph that
uses it. **[4]**

**12.** Explain why a class selector is used instead of a type selector when only some of the paragraphs in a page should
be changed. **[2]**

**13.** A student writes this CSS.

```
.warning
  color = red
  text-align: center
```

Identify three mistakes and write the corrected rule. **[4]**

**14.** A student writes this HTML.

```
<ul>
<li>Pens</li>
<li>Paper<li>
</ol>
```

Identify the two mistakes. **[2]**

**15.** Describe two key differences between HTML5 and earlier versions of HTML. **[4]**

---

## Answers

**1.** **(a)** Creates an unordered (bulleted) list [1]. **(b)** Creates a list item inside a list [1]. **(c)** Creates
a line break [1]. **(d)** Gives the title of the page, shown on the browser tab [1].

**2.** A block-level element starts on a new line and takes up the full width available [1]; an inline element sits
within a line of text and takes up only the room that its content needs [1].

**3.** The selector [1], the property [1] and the value [1].

**4.** It makes the text bold [1].

**5.** One possible answer:

```
<html>
<head>
<title>School Trip</title>
</head>
<body>
<h1>School Trip</h1>
<p>We leave at 8 am.</p>
</body>
</html>
```

`<html>` and `</html>` [1]; `<title>` with the correct text [1]; `<body>` and `</body>` [1]; heading with `<h1>` [1];
paragraph with `<p>` and the correct text [1]. (The `<head>` tags are not needed for the mark.)

**6.**
```
<ol>
<li>Passport</li>
<li>Tickets</li>
<li>Money</li>
</ol>
```
`<ol>` and `</ol>` [1]; three `<li>` items with the correct text [1]; each item correctly opened and closed [1].

**7.** `<a href="times.html">See the times</a>` [3: `<a>` tags [1]; `href="times.html"` [1]; the link text between the
tags [1]].

**8.** `<img src="bus.jpg" alt="A school bus" />` [3: `<img` and the self-closing `/>` [1]; `src="bus.jpg"` [1];
`alt="A school bus"` [1]].

**9.** **(a)** Notices [1]. **(b)** The heading is blue [1] and centred [1]. **(c)** The paragraph "Gym closed today." [1] and
the word "board" [1].

**10.**
```
p {
  font-family: Arial;
  font-size: 18px;
}
```
Selector `p` [1]; `font-family: Arial;` [1]; `font-size: 18px;` with curly brackets in the correct places [1].

**11.**
```
.note {
  background-color: yellow;
}
```
```
<p class="note">Bring a hat.</p>
```
A full stop before the class name [1]; `background-color: yellow;` correctly written [1]; the HTML uses `class="note"` without
a full stop [1]; the paragraph is correctly opened and closed [1].

**12.** A type selector applies to every element of that type [1]; a class selector applies only to the elements that have
been given that class, so the other paragraphs are unchanged [1].

**13.** Mistakes: the curly brackets are missing [1]; the equals sign is used instead of a colon [1]; the semicolons are
missing [1]. Corrected rule:

```
.warning {
  color: red;
  text-align: center;
}
```
The corrected rule [1].

**14.** The second list item is not closed correctly: `<li>Paper<li>` should end with `</li>` [1]; the list is opened with
`<ul>` but closed with `</ol>`, so it should end with `</ul>` [1].

**15.** Any two differences, each with a description (1 mark for the feature, 1 mark for the detail). For example: it
supports many facilities that previously needed add-ons [1], so fewer plug-ins are needed [1]; it makes it easier to include
graphics and multimedia, for example with `<audio>`, `<video>`, `<svg>` and `<canvas>` [1]; it adds semantic elements
such as `<header>` and `<article>` to define parts of a page [1]; it has better support for web applications, through
scripting and new APIs [1].

---

## Where marks are usually lost

- Leaving out closing tags, or closing them in the wrong order.
- Using `=` instead of a colon in CSS, and leaving out semicolons or curly brackets.
- Forgetting the full stop in a class selector, or writing it in the `class` attribute.
- Writing `colour` instead of `color`.
- Describing HTML5 as "newer" with no specific feature.
