---
title: "OxfordAQA IGCSE Computer Science: Web Page Design — Practice Questions (9210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Web page design"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 8
syllabusTopics:
  - qualification: "igcse"
    topic: "web-page-design"
description: "Original practice questions with worked answers on HTML tags, CSS selectors and properties, scripting and HTML5 for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Web page design study guide](/resources/oxfordaqa-igcse-computer-science-web-page-design-study-guide/) | [Web page design revision notes](/resources/oxfordaqa-igcse-computer-science-web-page-design-revision-notes/)

These questions cover section 3.8 of the OxfordAQA International GCSE Computer Science (9210) specification,
which is assessed on Paper 2. Use only the HTML tags and CSS properties listed in the specification, with an
embedded style sheet.

---

## Section A: key concepts

**1.** State the purpose of HTML and the purpose of CSS in a web page. **[2]**

**2.** **(a)** Explain what server-side scripting is used for, with an example. **[2]**
**(b)** Explain what client-side scripting is used for, with an example. **[2]**

**3.** Give three key differences between HTML5 and earlier versions of HTML. **[3]**

## Section B: HTML

**4.** State the HTML tag used for each of the following:
(a) the text shown on the browser tab (b) a numbered list (c) an item in a list (d) a line break
(e) text with strong importance (f) a top-level heading. **[6]**

**5.** Explain the difference between block-level and inline elements, giving one example of each from the
specification's list. **[3]**

**6.** Write the HTML for a hyperlink with the text "Timetable" that opens the page `timetable.html`. **[2]**

**7.** Write the HTML to display the image `team.jpg` with suitable alternative text, and explain why the alternative
text is useful. **[3]**

**8.** Find and correct three errors in this HTML:
```html
<body>
  <h1>Our Bakery<h1>
  <p>Fresh bread <em>every day</p></em>
  <ul>
    <li>White loaf
    <li>Wholemeal loaf</li>
  </ol>
</body>
```
**[3]**

## Section C: CSS

**9.** Name the three parts of a CSS style rule. **[3]**

**10.** Write an embedded style sheet that makes:
**(a)** every paragraph use the font Verdana at size 14px **[2]**
**(b)** every level-2 heading centred and dark green **[2]**
**(c)** any element with the class `warning` bold, red text on a yellow background **[3]**

**11.** Explain the difference between the selectors `h2` and `.highlight`. **[2]**

**12.** Show how the class `warning` from question 10(c) would be applied to a paragraph. **[1]**

## Section D: build a page

**13.** Write a complete web page for a school library that:
- has the title "School Library" on the browser tab
- shows the heading "Opening times" in italics, using CSS
- has a paragraph "Open Monday to Friday, 8am to 5pm." with "Monday to Friday" in emphasised text
- has an unordered list with the items "Fiction", "Non-fiction" and "Magazines"
- uses an embedded style sheet that gives the whole page a light blue background. **[8]**

---

## Answers

**1.** HTML is used to create the **structure** (and content) of a web page [1]; CSS is used to change the **style**
(appearance) of the page [1].

**2. (a)** Server-side scripts run on the web server to **generate web pages dynamically** [1], e.g. building a page of
search results or a user's account page from a database [1].
**(b)** Client-side scripts run in the user's browser to **add functionality** to a page [1], e.g. checking that a
form's email field is filled in before it is sent, or showing a menu when a button is clicked [1].

**3.** Any three: supports many facilities that previously needed add-ons; better support for web applications through
scripting and new APIs; easier inclusion of graphics and multimedia using `<svg>`, `<canvas>`, `<audio>` and `<video>`;
new semantic elements such as `<header>` and `<article>` [3].

**4.** (a) `<title>` (b) `<ol>` (c) `<li>` (d) `<br />` (e) `<strong>` (f) `<h1>` [1 each].

**5.** A block-level element starts on a new line and takes up the full width available [1]; an inline element stays
within the line of text around it [1]. Examples: block-level `<p>`, `<div>`, `<h1>`, `<ul>`; inline `<span>`, `<em>`,
`<a>`, `<strong>` [1].

**6.** `<a href="timetable.html">Timetable</a>` [2] (1 for the `href`, 1 for the link text and closing tag).

**7.** `<img src="team.jpg" alt="The school football team" />` [2]. The alternative text is shown if the image cannot
load and is read aloud by screen readers for users with visual impairments [1].

**8.** Any three [1 each]:
- `<h1>Our Bakery<h1>` -- the closing tag should be `</h1>`.
- `<em>every day</p></em>` -- tags closed in the wrong order; should be `<em>every day</em></p>`.
- `<li>White loaf` -- missing closing `</li>`.
- `<ul>` closed with `</ol>` -- should be `</ul>`.

**9.** Selector [1], property [1], value [1].

**10.**
```html
<style>
  p        { font-family: Verdana; font-size: 14px; }
  h2       { text-align: center; color: darkgreen; }
  .warning { font-weight: bold; color: red; background-color: yellow; }
</style>
```
(a) `p` selector [1] with both properties [1]. (b) `h2` selector [1] with `text-align: center` and `color` [1].
(c) `.warning` class selector [1]; `font-weight: bold` [1]; `color` and `background-color` [1].

**11.** `h2` is a **type** selector -- it styles every level-2 heading [1]. `.highlight` is a **class** selector -- it styles
only elements that have `class="highlight"`, of any type [1].

**12.** `<p class="warning">Please return books on time.</p>` [1].

**13.** One possible answer:
```html
<html>
  <title>School Library</title>
  <style>
    body { background-color: lightblue; }
    h1   { font-style: italic; }
  </style>
  <body>
    <h1>Opening times</h1>
    <p>Open <em>Monday to Friday</em>, 8am to 5pm.</p>
    <ul>
      <li>Fiction</li>
      <li>Non-fiction</li>
      <li>Magazines</li>
    </ul>
  </body>
</html>
```
`<html>` and `<body>` structure [1]; correct `<title>` [1]; `<style>` element [1]; `background-color` rule on `body` [1];
heading made italic with `font-style: italic` [1]; paragraph with correct `<em>` [1]; `<ul>` [1] with three `<li>` items
[1]. (A `<head>` element around `<title>` and `<style>` is also correct.)

---

## Where marks are usually lost

- Writing CSS properties with British spelling (`colour`) -- browsers ignore them.
- Using `<b>` or `<i>` instead of the listed `<strong>` and `<em>`, or making text italic with HTML when the question
  asks for CSS.
- Missing the dot in a class selector or the `class` attribute in the HTML.
- Closing nested tags in the wrong order.

## Frequently asked questions

**Will the exam use external style sheets?**
No. The 9210 specification says exam questions will only use embedded style sheets, although you may use external
style sheets in practical work.

**Do I need to know table or form tags?**
They are not in the specification's list of required HTML tags. Concentrate on the general, block-level and inline tags
the specification names.
