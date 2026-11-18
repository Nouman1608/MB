---
title: "Cambridge IGCSE ICT (0417): Use stylesheets"
resourceType: "study-guides"
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
description: "Writing CSS for Cambridge IGCSE ICT 0417 subtopic 21.3: external and inline styles, classes, font and table properties, comments and stylesheet hierarchy."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 21.3 of Cambridge IGCSE ICT 0417, "Use stylesheets", is about **using CSS in the presentation layer**. You must be able to create generic external styles and inline style attributes, and create classes, for background properties (colour, images), font properties and table properties (size, background colour, horizontal and vertical alignment, spacing, padding, and borders: collapsed, colour, thickness, visible or invisible). You must create external styles for h1, h2, h3, p and li; specify font family, size, colour, alignment, bold and italic; attach comments; and save styles in cascading stylesheet format. You must also understand the difference between attached stylesheets and inline style attributes, the hierarchy of multiple attached stylesheets and inline styles, the difference between a style and a class, and why relative file paths must be used for attached stylesheets.

The [Website authoring study guide](/resources/cambridge-igcse-ict-website-authoring-study-guide/) introduces CSS selectors and properties. This guide concentrates on the properties the syllabus lists and on working out which rule wins when several apply. Then use the [21.3 revision notes](/resources/cambridge-igcse-ict-0417-use-stylesheets-revision-notes/) and the [21.3 practice questions](/resources/cambridge-igcse-ict-0417-use-stylesheets-practice/).

## Anatomy of a CSS rule

```css
h2 {
  font-family: "Trebuchet MS", Arial, sans-serif;
  color: #1F4E79;
}
```

- The **selector** (h2) says which elements the rule applies to.
- Each **declaration** is a property, a colon, a value and a semicolon.
- Declarations sit between curly brackets.
- Font names containing spaces go in quotation marks; list fall-back fonts, ending with a generic family such as sans-serif or serif, in case the first font is not installed.

## Generic external styles

A **generic style** uses an element as its selector, so it applies to **every** element of that type on every page attached to the stylesheet. The syllabus names h1, h2, h3, p and li.

```css
/* Generic styles for the Lakeside Sailing Club site (saved beside the images folder) */
body { background-color: #F4F9FF; background-image: url("images/waves.png"); }
h1 { font-family: Georgia, serif; font-size: 32px; color: #003366; text-align: center; }
h2 { font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; }
h3 { font-family: Arial, sans-serif; font-size: 18px; font-style: italic; }
p  { font-family: Arial, sans-serif; font-size: 14px; color: #333333; text-align: left; }
li { font-family: Arial, sans-serif; font-size: 14px; color: #333333; }
```

The comment on the first line uses `/*` and `*/`. Comments are ignored by the browser and explain the stylesheet to whoever maintains it; a task may ask you to add one with your name or a description. The file is saved in **cascading stylesheet format**, with the extension **.css**, as plain text.

### Font properties

| Requirement | Property and example |
|---|---|
| Font family | `font-family: Verdana, sans-serif;` |
| Size | `font-size: 16px;` (or pt) |
| Colour | `color: #8B0000;` or `color: darkred;` |
| Alignment | `text-align: center;` (left, right, center, justify) |
| Bold | `font-weight: bold;` |
| Italic | `font-style: italic;` |

Note the American spellings `color` and `center`: "colour" or "centre" in CSS is ignored.

### Background properties

`background-color` sets a colour; `background-image: url("...")` sets an image. A path in a stylesheet is **relative to the stylesheet file**, not to the HTML page. If the stylesheet is in a folder *css* and the image in a folder *images* beside it, the path is `url("../images/waves.png")`.

### Table properties

```css
table { border-collapse: collapse; width: 90%; }
th { background-color: #003366; color: white; text-align: center; padding: 8px; }
td { border: 1px solid #999999; padding: 6px; text-align: left; vertical-align: top; }
```

| Syllabus property | CSS |
|---|---|
| Size | `width`, `height` in px or % |
| Background colour | `background-color` |
| Horizontal alignment | `text-align: left / center / right` |
| Vertical alignment | `vertical-align: top / middle / bottom` |
| Spacing (between cells) | `border-spacing: 4px;` (only has an effect when borders are separate) |
| Padding (inside a cell) | `padding: 6px;` |
| Collapsed borders | `border-collapse: collapse;` merges adjacent cell borders into single lines |
| Border colour and thickness | `border: 2px solid #003366;` (thickness, style, colour) |
| Visible / invisible | `border: 1px solid black;` is visible; `border: none;` (or `border-style: hidden;`) is invisible |

Remember the difference between **padding** (space between a cell's content and its border) and **spacing** (space between neighbouring cells).

## Classes

A **class** is a named set of styles that applies only to elements given that class. In the stylesheet it starts with a full stop; in the HTML it is used with the class attribute, without the full stop.

```css
.highlight { background-color: #FFF2CC; font-weight: bold; }
.noborder td { border: none; }
.price { text-align: right; vertical-align: middle; color: #006400; }
```

```html
<p class="highlight">Taster sessions every Sunday.</p>
<table class="noborder"> ... </table>
<td class="price">25.00</td>
```

The same class can be used on many elements and on different types of element. A class rule is more specific than a generic element rule, so where both set the same property, the class wins for the elements that carry it.

### Style or class?

| | Style (generic) | Class |
|---|---|---|
| Selector | An element name: `p` | A name with a full stop: `.highlight` |
| Applies to | Every element of that type | Only elements with `class="highlight"` |
| Use for | The default look of headings, paragraphs, lists | Exceptions and special cases |

## Inline style attributes

An **inline style** is written inside an HTML tag with the style attribute:

```html
<p style="color: red; font-style: italic;">Lessons cancelled on Saturday.</p>
```

It affects only that one element.

## Attached stylesheets versus inline styles

| Attached (external) stylesheet | Inline style attribute |
|---|---|
| A separate .css file linked from the head | Written inside a single tag |
| One file can format every page of a site | Affects one element only |
| Change once, every page updates | Must be changed element by element |
| Keeps presentation separate from content | Mixes presentation into the content layer |
| Lower priority than inline styles | Highest priority |

## The hierarchy

When rules conflict for the same element and property:

1. An **inline style** beats any attached stylesheet.
2. Among attached stylesheets, the one attached **later** in the head beats one attached earlier (for rules with the same selector).
3. Properties that are not in conflict are combined from all sources.

### Worked example: which rule wins?

*Original files.* The head attaches *base.css* and then *club.css*.

- base.css: `p { color: black; font-size: 12px; font-family: Arial, sans-serif; }`
- club.css: `p { color: navy; }`
- HTML: `<p style="font-size: 16px;">Welcome aboard!</p>`

Working, property by property:

- **color**: base says black, club says navy; club is attached later, so **navy**.
- **font-size**: base says 12px, the inline style says 16px; inline wins, so **16px**.
- **font-family**: only base sets it, so **Arial**.

Result: navy, 16px, Arial. If the order of the two links were reversed, the colour would be black.

## Why relative paths for attached stylesheets?

The link must work wherever the site is placed. A relative path such as `href="css/club.css"` describes the route from the page to the stylesheet, so it still works when the whole site folder is copied to a web server or another computer. An absolute path such as `href="C:\Users\Ana\site\css\club.css"` points to a folder on one computer; elsewhere the browser cannot find it, and every page loses its formatting.

## Common mistakes

- Missing semicolons, colons or curly brackets, so later declarations are ignored.
- British spellings: `colour`, `centre`.
- A class written without the full stop in the stylesheet, or with it in the HTML.
- Confusing padding with spacing, or forgetting `border-collapse: collapse` when single lines are required.
- An image path in the stylesheet written relative to the page instead of the stylesheet.
- Saving the stylesheet with a .txt or .html extension.
- HTML tags such as `<style>` typed inside an external .css file.

## Exam technique

Practical tasks use *create*, *attach*, *apply*, *specify* and *save*. Each property named is normally a separate mark, so check your stylesheet line by line against the instructions and view the page to confirm each rule works. In theory questions, *explain* the hierarchy with the order of priority and a reason, and *describe* the difference between a style and a class by saying what each applies to.
