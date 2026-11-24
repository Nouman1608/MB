---
title: "OxfordAQA IGCSE Computer Science (9210): Hypertext Markup Language (HTML) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 HTML and CSS Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.8.2: HTML tags, CSS rules with type and class selectors, properties, HTML5 and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.8.2 Hypertext Markup Language (HTML)** of OxfordAQA International GCSE Computer Science
(9210). Explanations and a complete example are in the [HTML study
guide](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html/).

## What the specification asks

- **Create the structure of a web page** using HTML tags from the list.
- Use **basic CSS** to control the layout. A style rule has **a selector, a property and a value**.
- Know two selectors: **type** and **class**. Exam questions use **embedded style sheets** only.
- Know the properties: `background-color`, `color`, `text-align`, `font-family`, `font-size`, `font-weight`,
  `font-style`.
- Be aware of the **key differences between HTML5 and earlier versions**.

## Tags

| Group | Tags |
|---|---|
| General | `<html>`, `<title>`, `<body>`, `<style>` |
| Block-level | `<div>`, `<p>`, `<h#>` (h1 to h6), `<ol>`, `<ul>`, `<li>` |
| Inline | `<span>`, `<strong>`, `<em>`, `<br />`, `<a>`, `<img />` |

- Most tags are **paired**: `<p> ... </p>`. Close tags in the **reverse** order to opening them.
- `<br />` and `<img />` have no content.
- **Block-level** elements start on a new line and use the full width. **Inline** elements sit within a line.
- `<title>` and `<style>` normally sit inside a `<head>` section before the `<body>`.

## What each tag does

| Tag | Purpose |
|---|---|
| `<html>` | The whole page |
| `<title>` | The title on the browser tab |
| `<body>` | The visible content |
| `<style>` | Embedded CSS rules |
| `<div>` | A block container |
| `<p>` | A paragraph |
| `<h1>` | The most important heading (to h6, the least) |
| `<ol>` | A numbered list |
| `<ul>` | A bulleted list |
| `<li>` | A list item |
| `<span>` | An inline container |
| `<strong>` | Bold (important) text |
| `<em>` | Italic (emphasised) text |
| `<br />` | A line break |
| `<a href="...">` | A link; `href` gives the destination |
| `<img src="..." alt="..." />` | An image; `src` is the file; `alt` is a text description |

## Examples

```
<ol>
<li>Dig</li>
<li>Plant</li>
</ol>
<p>Meet at the gate.<br />Bring a spade.</p>
<p>This is <strong>very</strong> important.</p>
<p><a href="plants.html">Plant list</a></p>
<img src="rose.jpg" alt="A red rose" />
```

## CSS rules

```
selector {
  property: value;
}
```

- A colon separates the property and the value; a semicolon ends each pair; curly brackets surround the pairs.
- **Type selector:** a tag name, such as `p`. It affects **every** element of that type.
- **Class selector:** a full stop and a name, such as `.notice`. It affects only the elements with `class="notice"`.
- The full stop appears in the **style sheet** but not in the `class` attribute.

```
h1 {
  color: darkgreen;
  text-align: center;
}
.notice {
  font-weight: bold;
}
```

```
<h1>Garden Club</h1>
<p class="notice">No meeting this week.</p>
<p>The next meeting is on Friday.</p>
```

Display: the heading in dark green, centred; the first paragraph in bold; the second paragraph unchanged.

## CSS properties

| Property | Controls | Example values |
|---|---|---|
| `background-color` | Background colour | `yellow` |
| `color` | Text colour | `red` |
| `text-align` | Text alignment | `left`, `center`, `right` |
| `font-family` | Typeface | `Arial` |
| `font-size` | Text size | `20px` |
| `font-weight` | Boldness | `bold` |
| `font-style` | Slant | `italic` |

American spelling is used for `color` and `center`.

## Embedded style sheet

The CSS goes **inside a `<style>` element** in the same HTML file.

```
<style>
p {
  font-family: Arial;
}
</style>
```

## HTML5

| Feature | Detail |
|---|---|
| Fewer add-ons | Supports many facilities that previously needed add-ons |
| Web applications | Better support through scripting and access to many new APIs |
| Multimedia and graphics | `<svg>`, `<canvas>`, `<audio>` and `<video>` tags |
| Semantic elements | New elements such as `<header>` and `<article>` that define parts of a page |

## Choosing a selector

| Wanted | Use |
|---|---|
| The same style on every paragraph | Type selector `p` |
| A style on only some paragraphs | Class selector, such as `.notice` |
| A style on part of a line | `<span class="...">` |

## Reading a page: what is displayed?

For each tag and rule, write one effect: `<h1>` gives a large heading; a rule `h1 { color: blue; }` makes it blue; `<p
class="note">` gives a paragraph in the style of the class note; `<strong>` makes bold text; `<ul>` with `<li>` items gives
bullets. Listing the effects in the order of the page earns the marks.

## Exam traps

- **A closing tag missing**, or tags closed in the wrong order.
- **List items outside a list**, or `<ul>` closed with `</ol>`.
- **`<br>` instead of `<br />`.**
- **No full stop** in the class selector, or a full stop in the `class` attribute.
- **`color = red`** instead of `color: red;`.
- **No semicolons or curly brackets.**
- **`colour` and `centre`.** Use `color` and `center`.
- **CSS written outside `<style>`.**
- **A type selector where only some elements should change.** Use a class.
- **HTML5 "is newer".** Give the specific features.

## Key terms

| Term | Meaning |
|---|---|
| Element | An opening tag, its content and its closing tag |
| Attribute | Extra information in an opening tag, such as `href="..."` |
| Selector | The part of a rule that says which elements it applies to |
| Property | The aspect of appearance that a rule changes |
| Semantic element | An element that describes the meaning of its content |

## Self-test

1. State the tag pair that creates a paragraph.
2. State the tag that creates a line break.
3. State the difference between `<ol>` and `<ul>`.
4. State the attribute that gives the destination of a link.
5. Write a CSS rule that makes all paragraphs blue.
6. Write a CSS rule for a class called warning that makes text bold.
7. Write the HTML for a paragraph that uses the class warning.
8. State what `text-align: center;` does.
9. Name two new HTML5 tags that help with multimedia.
10. Name one semantic element introduced in HTML5.

**Answers:**
1. `<p>` and `</p>`.
2. `<br />`.
3. `<ol>` makes a numbered list; `<ul>` makes a bulleted list.
4. `href`.
5. `p { color: blue; }`
6. `.warning { font-weight: bold; }`
7. `<p class="warning">text</p>`
8. It centres the text.
9. Any two of `<audio>`, `<video>`, `<canvas>`, `<svg>`.
10. For example `<header>` or `<article>`.

## More resources on this topic

- [Hypertext Markup Language (HTML) study guide](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html/)
- [Hypertext Markup Language (HTML) practice questions](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html-practice/)
- [Key concepts revision notes](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts-revision-notes/)
