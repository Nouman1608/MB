---
title: "OxfordAQA IGCSE Computer Science (9210): Web page design -- Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA International GCSE Computer Science 9210 guide: the HTML tags in the spec, CSS type and class selectors, the seven properties, HTML5 and scripting."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check the 9210 specification for the exact HTML tags, CSS properties and design principles required, since the scope of this topic could not be confirmed against the specification. 2026-11-08 recheck: checked against spec v3.3 section 3.8; limited tags to the spec list (removed table/form tags), selectors to type and class, properties to the seven listed, CSS to embedded sheets; added HTML5 and scripting; please re-review."
publishedDate: 2026-11-08
featured: false
---

Web pages are built from two languages that work together. **HTML** (hypertext markup language) creates the **structure** of a web page; **CSS** (cascading style sheets) changes its **style**. In OxfordAQA International GCSE Computer Science (9210), section 3.8 asks you to write the structure of a page with a set list of HTML tags, use basic CSS to control its appearance, know the key differences between HTML5 and earlier HTML, and understand what server-side and client-side scripting do. The skills are practical, so write small pages and open them in a browser.

## What does the 9210 specification require for web page design?

| Spec ref | Content |
|---|---|
| 3.8.1 | Web pages are built with HTML and CSS; HTML creates the structure and CSS changes the style; server-side scripting generates pages dynamically on a web server; client-side scripting adds functionality to pages |
| 3.8.2 | Create the structure of a page using the listed HTML tags; use basic CSS (type and class selectors, seven properties); key differences between HTML5 and earlier HTML |

## Which HTML tags must you know?

The specification lists exactly these tags:

| Group | Tags | Purpose |
|---|---|---|
| General | `<html> </html>` | Contains the whole page |
| | `<title> </title>` | The page title, shown on the browser tab |
| | `<body> </body>` | Everything displayed in the browser window |
| | `<style> </style>` | An embedded style sheet holding CSS rules |
| Block-level | `<div> </div>` | A block container for grouping content |
| | `<p> </p>` | A paragraph |
| | `<h#> </h#>` | A heading, where # is 1 (most important) to 6 |
| | `<ol> </ol>`, `<ul> </ul>` | An ordered (numbered) list, an unordered (bullet) list |
| | `<li> </li>` | A list item inside `ol` or `ul` |
| Inline | `<span> </span>` | An inline container, often used to apply a class to part of a line |
| | `<strong> </strong>`, `<em> </em>` | Strong (bold) text, emphasised (italic) text |
| | `<br />` | A line break |
| | `<a> </a>` | A hyperlink; the destination goes in the `href` attribute |
| | `<img />` | An image; the file goes in `src`, and `alt` gives a text description |

**Block-level** elements start on a new line and take the full width; **inline** elements sit within a line of text. Tags are usually in pairs, an opening tag and a closing tag with a slash. `<br />` and `<img />` are self-closing. Tags must be **nested** correctly: an element opened inside another is closed before the outer one closes.

In a complete page the `<title>` and `<style>` elements are normally placed inside a `<head>` section before the `<body>`.

## How do you write CSS for 9210?

A style rule has three parts, a **selector**, a **property** and a **value**:

```
selector { property : value }
```

You need two kinds of selector:

- A **type selector** names an HTML element, such as `p` or `h1`, and styles every element of that type.
- A **class selector** starts with a full stop, such as `.warning`, and styles every element with `class="warning"`.

You need these seven properties:

| Property | Controls |
|---|---|
| `background-color` | The background colour |
| `color` | The text colour |
| `text-align` | Alignment: left, right, center |
| `font-family` | The typeface, such as Arial |
| `font-size` | The size of the text, such as 16px |
| `font-weight` | Boldness, such as bold or normal |
| `font-style` | Italic or normal |

Exam questions only use **embedded style sheets**: CSS rules written inside a `<style>` element in the page. You may use external style sheets in practical work, but exam questions will not.

## What are the key differences between HTML5 and earlier versions?

The specification lists four points. HTML5:

- supports many facilities that were previously only available by using **add-ons** to HTML;
- improves provision for **web applications**, through support for scripting and access to many new APIs;
- makes it easier to include **graphics and multimedia**, for example with the `<svg>`, `<canvas>`, `<audio>` and `<video>` tags;
- adds new **semantic elements** such as `<header>` and `<article>` to define different parts of a page.

## What is the difference between server-side and client-side scripting?

**Server-side scripting** languages run on the **web server** and generate web pages dynamically, for example building a page of search results from a database before sending it. **Client-side scripting** languages run in the **browser** and add extra functionality to a page, for example checking a form entry or showing a hidden menu without contacting the server.

## Worked example 1: reading a page

```
<html>
<head>
<title>Harbour Cycles</title>
<style>
h1 { color : darkgreen }
.offer { font-weight : bold }
</style>
</head>
<body>
<h1>Harbour Cycles</h1>
<p>Repairs and <span class="offer">rentals</span> since 2012.</p>
<img src="shop.jpg" alt="The front of the Harbour Cycles shop" />
<h2>Prices</h2>
<ul>
<li>Puncture repair</li>
<li><em>Full service</em></li>
</ul>
<a href="contact.html">Contact us</a>
</body>
</html>
```

The browser tab shows "Harbour Cycles" (from `<title>`). The page shows a dark green main heading (type selector on `h1`), a paragraph in which "rentals" is bold (class selector `.offer` applied through `<span>`), the photo, a second-level heading "Prices", a bullet list of two items with "Full service" in italics, and a link "Contact us" to contact.html.

## Worked example 2: writing CSS

Write an embedded style sheet so that every paragraph has Arial text, size 14px, and anything with class "price" is centred on a yellow background.

```
<style>
p { font-family : Arial; font-size : 14px }
.price { text-align : center; background-color : yellow }
</style>
```

The first rule is a type selector, so it affects every `<p>`. The second is a class selector, so the HTML must include `class="price"`, for example `<p class="price">From 15 dollars</p>`. The full stop appears in the CSS, not in the HTML.

## Common mistakes

- Forgetting to close a tag, or closing nested tags in the wrong order.
- Putting `li` items directly in the body without an `ol` or `ul`.
- Leaving off the full stop before a class selector in CSS, or adding one in the HTML.
- Writing `colour` instead of the CSS spelling `color`, or `text-align : centre` instead of `center`.
- Mixing up `<strong>` (bold) and `<em>` (italic).
- Saying client-side scripts run on the server, or the reverse.

## Exam technique

For **write** or **complete** questions, copy tag and property names exactly, and close every tag. For **describe what the browser displays**, work down the body in order, mentioning headings, styles, lists, images and links. For HTML5 questions, give the specification's points and a named tag as an example.

## Frequently asked questions

**Do I need table or form tags for 9210?**
No. The specification lists the general tags html, title, body and style; the block-level tags div, p, h#, ol, ul and li; and the inline tags span, strong, em, br, a and img. Table and form tags are not in that list.

**Which CSS selectors are required?**
Two kinds: type selectors (such as `p`) and class selectors (such as `.price`).

**Will the exam use external style sheets?**
No. Exam questions only use embedded style sheets, in a `<style>` element in the page.

**What is the purpose of the alt attribute?**
It gives a text description of an image, which is shown if the image cannot be displayed and can be read aloud by screen readers.

## Check your understanding

1. What is the difference between HTML and CSS? *HTML creates the structure of a page; CSS changes its style.*
2. Which tag sets the text on the browser tab? *`<title>`.*
3. Write the HTML for a link with the text "Home" that goes to index.html. *`<a href="index.html">Home</a>`*
4. Write a CSS rule to make all paragraphs blue. *`p { color : blue }`*
5. What is the difference between a type selector and a class selector? *A type selector styles every element of one type; a class selector styles any element with that class.*
6. Name two HTML5 multimedia tags. *Any two of svg, canvas, audio, video.*
7. Where does a server-side script run? *On the web server, generating the page before it is sent.*
8. In Worked example 1, which text is shown in italics? *"Full service".*

## Related pages

- [Web page design revision notes](/resources/oxfordaqa-igcse-computer-science-web-page-design-revision-notes/)
- [Web page design practice questions](/resources/oxfordaqa-igcse-computer-science-web-page-design-practice/)

## Official specification

OxfordAQA, *International GCSE Computer Science (9210)*, for exams May/June 2019 onwards, Version 3.3, section 3.8 "Web page design".
