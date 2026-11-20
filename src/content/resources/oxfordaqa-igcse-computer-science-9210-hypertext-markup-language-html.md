---
title: "OxfordAQA IGCSE Computer Science (9210): Hypertext Markup Language (HTML) -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 HTML and CSS Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.8.2: the HTML tags you must know, basic CSS rules, selectors, properties and the key features of HTML5."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.8.2 Hypertext Markup Language (HTML)** of OxfordAQA International GCSE Computer Science
(9210). You must be able to **create the structure of a web page using HTML**, using a list of named tags; to use **basic CSS
to control the layout** of a web page; and to **be aware of the key differences between HTML5 and earlier versions** of
HTML. The additional information states that exam questions will only use **embedded style sheets**, with two kinds
of selector, **type** and **class**, and seven named properties. The ideas of HTML and CSS are introduced in the [key concepts
study guide](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts/).

## The structure of an HTML page

HTML uses **tags** written in angle brackets. Most tags come in a pair: an **opening tag** such as `<p>` and a **closing
tag** with a slash such as `</p>`. The content goes between them. Together they make an **element**. Elements can be placed
inside other elements, and each must be closed in the reverse of the order in which it was opened.

A few tags have no content, so they are not paired. The specification writes these as `<br />` and `<img />`.

A minimal page looks like this.

```
<html>
<head>
<title>Garden Club</title>
</head>
<body>
<h1>Garden Club</h1>
<p>We meet every Friday.</p>
</body>
</html>
```

- `<html>` holds the whole page.
- `<title>` gives the page title, shown on the browser tab. In a complete page, the `<title>` and `<style>` are normally
  placed inside a `<head>` section before the `<body>`. The `<head>` tag is not on the specification's list, but it is part of
  how real pages are written.
- `<body>` holds everything that appears in the browser window.

## The tags you must know

The specification lists these tags.

| Group | Tag | Purpose |
|---|---|---|
| General | `<html> </html>` | The whole page |
| General | `<title> </title>` | The page title |
| General | `<body> </body>` | The visible content |
| General | `<style> </style>` | An embedded style sheet containing CSS rules |
| Block-level | `<div> </div>` | A block container for grouping content |
| Block-level | `<p> </p>` | A paragraph |
| Block-level | `<h1> </h1>` to `<h6> </h6>` | Headings (written `<h#>`), where 1 is the most important |
| Block-level | `<ol> </ol>` | An ordered (numbered) list |
| Block-level | `<ul> </ul>` | An unordered (bulleted) list |
| Block-level | `<li> </li>` | A list item |
| Inline | `<span> </span>` | An inline container for part of a line |
| Inline | `<strong> </strong>` | Important text, usually shown in bold |
| Inline | `<em> </em>` | Emphasised text, usually shown in italics |
| Inline | `<br />` | A line break |
| Inline | `<a> </a>` | A link (anchor) |
| Inline | `<img />` | An image |

### Block-level and inline

**Block-level** elements start on a **new line** and take up the full width of the page, so they stack one under another.
Paragraphs, headings, lists and `div` containers are block-level. **Inline** elements sit **within a line of text** and
only take up as much room as their content. The words `<strong>` and `<em>` can be placed in the middle of a sentence
without breaking it.

### Lists

An ordered list uses numbers; an unordered list uses bullets. Each item is an `<li>`, inside either `<ol>` or `<ul>`.

```
<ol>
<li>Dig the bed</li>
<li>Plant the seeds</li>
<li>Water them</li>
</ol>
```

This shows a numbered list with three items. Changing `ol` to `ul` (in both the opening and the closing tags) shows
bullets instead.

### Links and images: attributes

An **attribute** gives extra information inside an opening tag, in the form `name="value"`.

- A link: `<a href="plants.html">Plant list</a>`. The **href** attribute says where the link goes, and the text between
  the tags is what the user clicks.
- An image: `<img src="rose.jpg" alt="A red rose" />`. The **src** attribute names the image file. The **alt** attribute gives
  a text description, which helps users who cannot see the image.

### Line breaks, emphasis and containers

```
<p>Meet at the gate.<br />Bring a spade.</p>
<p>This is <strong>very</strong> important and this is <em>nearly</em> as important.</p>
<div>
<p>A paragraph in a block container.</p>
</div>
<p>Today's special: <span>compost</span>.</p>
```

The `<br />` starts a new line inside the paragraph. A `<div>` groups block elements, so that they can all be given
the same style. A `<span>` groups a few words inside a line, so that they can be given a style without breaking the
line.

## Basic CSS

**CSS** controls how elements look. A rule is made up of three parts: **a selector, a property and a value**.

```
selector {
  property: value;
}
```

For example:

```
h1 {
  color: green;
}
```

- The **selector** (`h1`) says which elements the rule applies to.
- The **property** (`color`) says which aspect of their appearance to change.
- The **value** (`green`) says what to change it to.

The property and value are separated by a colon, and each pair ends with a semicolon. A rule may contain several pairs
inside the curly brackets.

### The two selectors

**Type selector.** It names an HTML element, and applies to **every** element of that type.

```
p {
  font-family: Arial;
  font-size: 18px;
}
```

This changes every paragraph on the page.

**Class selector.** It begins with a **full stop**, and applies only to elements that have been given that **class** with the
`class` attribute. A class can be used on any element, and on as many as you like.

```
.notice {
  color: red;
  font-weight: bold;
}
```

```
<p class="notice">The meeting is cancelled.</p>
<p>The next meeting is on Friday.</p>
<p>Please <span class="notice">sign in</span> at the door.</p>
```

Only the first and third lines are in the style of the class. The second paragraph is unchanged, because it does not have
the class. Notice that the class name in the style sheet starts with a full stop, but in the `class` attribute it does not.

### The properties you must know

| Property | What it changes | Example values |
|---|---|---|
| `background-color` | The background colour | `yellow`, `lightblue` |
| `color` | The colour of the text | `red`, `navy` |
| `text-align` | The alignment of text | `left`, `center`, `right` |
| `font-family` | The typeface | `Arial`, `Verdana` |
| `font-size` | The size of the text | `20px`, `150%` |
| `font-weight` | How bold the text is | `bold`, `normal` |
| `font-style` | The slant of the text | `italic`, `normal` |

Note the American spelling of `color` and `center`.

### Embedded style sheets

The specification says that exam questions will use **embedded** style sheets: the CSS is written inside a `<style>` element
in the same file as the HTML. (An external style sheet is a separate file, which is useful in practical work, but it is not
used in questions.)

## A complete worked example

```
<html>
<head>
<title>Garden Club</title>
<style>
body {
  background-color: lightyellow;
}
h1 {
  color: darkgreen;
  text-align: center;
}
.notice {
  color: red;
  font-weight: bold;
  font-style: italic;
}
</style>
</head>
<body>
<h1>Garden Club</h1>
<p>We meet every <strong>Friday</strong>.</p>
<p class="notice">No meeting this week.</p>
<ul>
<li>Spades</li>
<li>Seeds</li>
</ul>
<p><a href="plants.html">See the plant list</a></p>
</body>
</html>
```

What the browser shows:

- A light yellow background, because of the rule for `body`.
- The heading "Garden Club" in dark green and centred (type selector `h1`).
- A paragraph with the word **Friday** in bold (`strong`).
- A paragraph in red, bold, italic text, because it has `class="notice"`.
- A bulleted list with two items.
- A link, which the user can click to go to `plants.html`.

## HTML5

**HTML5** is the current version of HTML. The specification says that you should know that HTML5:

- **supports many facilities that were previously only available by using add-ons** to HTML, so pages need fewer extra
  plug-ins;
- has **improved provision for web applications**, through support for scripting and access to many new application
  programming interfaces (APIs);
- makes it **easier to include graphics and multimedia**, for example with the `<svg>`, `<canvas>`, `<audio>` and `<video>`
  tags;
- adds **new semantic elements** such as `<header>` and `<article>` to define different parts of a page.

**Semantic** elements describe the **meaning** of a part of the page. A `<header>` is the heading area and an `<article>` is
a self-contained piece of content such as a news story. They make the structure clearer than a series of `<div>` elements,
and they help search engines and software for users with a disability to understand the page.

A short way to remember the changes is: **multimedia without add-ons, better support for web applications, and more
meaningful structure**.

## Common mistakes

- Leaving out a **closing tag**, or closing tags in the wrong order (`<p><strong>text</p></strong>`).
- Putting `<li>` items outside a list, or using `<ul>` and closing it with `</ol>`.
- Writing `<br>` in the answer. The specification form is `<br />`.
- Forgetting the **full stop** in a class selector, or putting it in the `class` attribute.
- Writing CSS with **equals signs** or no colon: `color = red` is wrong; `color: red;` is right.
- Forgetting the **semicolons** or the **curly brackets**.
- Using **round** or **square** brackets around the CSS rule.
- Writing **colour** or **centre** in CSS. The words are `color` and `center`.
- Putting the **CSS outside** the `<style>` element.
- Using a type selector when the style should only apply to some elements. Use a **class** for that.
- Putting block-level elements such as `<p>` inside inline elements such as `<strong>`.
- Not putting the **href** value or the **src** value in quotation marks.

## Exam technique

- **Write HTML** questions: build the page from the outside in (`html`, `body`), and indent the tags so that you can see
  that every element is closed.
- **Write CSS** questions: write each rule as selector, curly bracket, property, colon, value, semicolon, curly bracket.
- **Read a page and state what is displayed**: list the effect of each tag and each rule, in order.
- **Decide between a type and a class selector**: if the style should apply to every element of a kind, use a type
  selector; if it should apply to selected elements, use a class.
- **HTML5** questions: give the specific features, such as `<video>` for multimedia and `<header>` as a semantic
  element, rather than saying it is "newer".

## Next steps

For a condensed summary and a self-test, use the [Hypertext Markup Language (HTML) revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html-revision-notes/), and practise
with the [Hypertext Markup Language (HTML) practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html-practice/).
