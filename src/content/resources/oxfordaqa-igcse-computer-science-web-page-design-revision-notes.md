---
title: "OxfordAQA IGCSE Computer Science: Web Page Design — Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes on HTML structure and tags, CSS type and class selectors, the seven CSS properties, scripting and HTML5 for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Web page design (topic 3.8 of OxfordAQA International GCSE Computer Science 9210) covers building web pages with
**HTML** for structure and **CSS** for style, the roles of server-side and client-side scripting, and the main
differences between HTML5 and earlier HTML. The specification lists the exact tags, the two kinds of CSS selector
and the seven CSS properties you must know, so revise exactly that list and practise writing it by hand.

Condensed for the final weeks. For the full explanation, use the
[Web page design study guide](/resources/oxfordaqa-igcse-computer-science-web-page-design-study-guide/).
Practise with the [Web page design practice questions](/resources/oxfordaqa-igcse-computer-science-web-page-design-practice/).

## Syllabus coverage

OxfordAQA 9210 specification (Version 3.4), section 3.8:

- **3.8.1** Key concepts -- web pages are built with HTML and CSS; HTML creates the structure, CSS changes the
  style; server-side scripting generates pages dynamically on a web server; client-side scripting adds
  functionality to pages
- **3.8.2** HTML -- create page structure with the listed tags; basic CSS (selector, property, value; type and
  class selectors; seven properties); key differences between HTML5 and earlier versions

## The tags you must know

| Group | Tags (as listed in the specification) | Purpose |
|---|---|---|
| General | `<html>`, `<title>`, `<body>`, `<style>` | Whole document; browser-tab title; visible content; embedded CSS |
| Block-level | `<div>`, `<p>`, `<h#>` (h1-h6), `<ol>`, `<ul>`, `<li>` | Division; paragraph; heading; ordered list; unordered list; list item |
| Inline | `<span>`, `<strong>`, `<em>`, `<br />`, `<a>`, `<img />` | Inline container; strong importance (bold); emphasis (italic); line break; hyperlink; image |

- **Block-level** elements start on a new line and take the full width; **inline** elements sit within a line of text.
- `<br />` and `<img />` are **self-closing** -- they have no closing tag.
- A link: `<a href="contact.html">Contact us</a>`. An image: `<img src="logo.png" alt="Club logo" />`.
- Tags must be **nested** correctly: close the inner element before the outer one.

## CSS: the rule

A style rule has three parts -- a **selector**, a **property** and a **value**:

```css
selector { property : value }
```

| Selector | Written as | Styles |
|---|---|---|
| **Type** | `p { ... }` | Every element of that type (every paragraph) |
| **Class** | `.notice { ... }` | Every element with `class="notice"` |

**The seven properties:** `background-color`, `color`, `text-align`, `font-family`, `font-size`, `font-weight`,
`font-style`.

Exam questions use **embedded** style sheets -- CSS written inside `<style>` tags in the page itself.

### Worked example: a complete page

```html
<html>
  <title>Riverside Chess Club</title>
  <style>
    body    { background-color: lightyellow; font-family: Arial; }
    h1      { color: navy; text-align: center; }
    .notice { font-weight: bold; font-style: italic; font-size: 18px; }
  </style>
  <body>
    <h1>Riverside Chess Club</h1>
    <p>We meet every <strong>Tuesday</strong> at 7pm.</p>
    <p class="notice">New members are always welcome.</p>
    <h2>What we offer</h2>
    <ul>
      <li>Coaching for beginners</li>
      <li>Weekly tournaments</li>
    </ul>
    <p>Contact us: <a href="contact.html">contact page</a><br />
    <img src="board.jpg" alt="A chess board" /></p>
  </body>
</html>
```

- `h1` and `body` are **type** selectors; `.notice` is a **class** selector applied with `class="notice"`.
- Real pages also have a `<head>` element holding `<title>` and `<style>`; it is not in the 9210 tag list, but
  using it is correct HTML.

## How do HTML and CSS work together?

Keeping structure and style apart is the point of the two languages. The HTML says **what** each piece of content
is -- a heading, a paragraph, a list item -- and the CSS says **how** it should look. Because one rule such as
`h1 { color: navy; }` styles every level-1 heading at once, changing the look of a whole page means editing a single
line of CSS rather than every tag. A class lets you pick out particular elements: `<span class="notice">` inside a
paragraph styles just those words, while `<p class="notice">` styles a whole paragraph. When answering, state which
elements a rule will affect and why -- for a type selector, every element of that type; for a class selector, only the
elements that carry the class.

## Scripting: server-side and client-side

| | Server-side scripting | Client-side scripting |
|---|---|---|
| Runs on | The **web server** | The user's **browser** |
| Used to | **Generate web pages dynamically**, e.g. build a page of search results from a database | **Add functionality** to a page, e.g. check a form before it is sent, respond to clicks, animations |
| Visitor sees | Only the HTML that is produced | The script can be viewed in the page's source |

## HTML5: what changed?

HTML5 (from the specification):

- supports many facilities that previously needed **add-ons** to HTML
- improves support for **web applications** through scripting and access to many new **APIs**
- makes it easier to include **graphics and multimedia**, e.g. `<svg>`, `<canvas>`, `<audio>` and `<video>` tags
- adds **semantic elements** such as `<header>` and `<article>` to define different parts of a page

## Common mistakes / exam traps

- Saying CSS creates the structure: **HTML = structure, CSS = style**.
- Writing a class selector without the dot (`notice {}`), or putting the dot in the HTML (`class=".notice"`).
- Using `=` instead of `:` in CSS, or forgetting the curly brackets.
- Writing `colour` -- the CSS property is spelt `color`, and `background-color` likewise.
- Leaving out `alt` text on images, or closing tags in the wrong order.
- Mixing up server-side (runs on the server, builds the page) and client-side (runs in the browser).

## Frequently asked questions

**What is the difference between a type selector and a class selector?**
A type selector such as `p` styles every element of that type. A class selector such as `.notice` styles only the
elements given that class with `class="notice"`, whatever their type.

**Which CSS properties do I need for 9210?**
background-color, color, text-align, font-family, font-size, font-weight and font-style.

**What is the difference between block-level and inline elements?**
Block-level elements such as `<p>` and `<div>` start on a new line. Inline elements such as `<strong>` and `<a>`
stay within the line of text around them.

## Related resources

[Web page design study guide](/resources/oxfordaqa-igcse-computer-science-web-page-design-study-guide/) |
[Web page design practice questions](/resources/oxfordaqa-igcse-computer-science-web-page-design-practice/) |
[Relational databases and SQL revision notes](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.8 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
