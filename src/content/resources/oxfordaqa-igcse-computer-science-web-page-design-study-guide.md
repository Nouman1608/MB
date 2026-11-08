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
description: "HTML structure and common tags, linking CSS to a page, selectors and properties, and accessible, usable page design for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check the 9210 specification for the exact HTML tags, CSS properties and design principles required, since the scope of this topic could not be confirmed against the specification."
publishedDate: 2026-11-08
featured: false
---

Web pages are built from two languages that work together. **HTML** (hypertext markup language) describes the structure and content of a page: headings, paragraphs, images and links. **CSS** (cascading style sheets) describes how that content looks: colours, fonts, spacing and layout. In OxfordAQA International GCSE Computer Science (9210) this topic asks you to read and write simple HTML and CSS, and to explain good design choices. The skills are practical, so the best revision is to write small pages and open them in a browser.

## Where this fits in the specification

Web page design is Topic 8, the last topic in the list, after relational databases and SQL. It connects to networks, because a browser requests a page over HTTP and receives HTML, and to cyber security, because forms that send data to a server need input checking. The ideas of structure, tags and nesting also help when you read code in the programming topic.

## HTML structure

HTML uses **tags**, usually in pairs: an opening tag such as `<p>` and a closing tag such as `</p>`, with the content between. Some tags, such as `<img>` and `<br>`, have no closing tag. Tags can have **attributes**, which give extra information, written as name="value" inside the opening tag. Tags are **nested**: an element inside another must be closed before the outer one closes.

Every page has the same basic skeleton. The `<!DOCTYPE html>` line declares the type of document. The `<html>` element contains everything. The `<head>` holds information about the page that is not displayed in the main window, including the `<title>` (shown on the browser tab) and links to style sheets. The `<body>` holds everything the visitor sees.

| Tag | Purpose |
|---|---|
| `<h1>` to `<h6>` | Headings, from most to least important |
| `<p>` | A paragraph |
| `<strong>`, `<em>` | Strong and emphasised text |
| `<ul>`, `<ol>`, `<li>` | Unordered list, ordered list, and list item |
| `<a href="...">` | A hyperlink to another page or site |
| `<img src="..." alt="...">` | An image |
| `<table>`, `<tr>`, `<th>`, `<td>` | A table, a row, a heading cell, a data cell |
| `<form>`, `<input>`, `<label>` | A form and its input controls |
| `<div>` | A generic container for grouping content |

The `src` attribute gives the file for an image, and `alt` gives text describing it. The `alt` text is displayed if the image does not load and is read out by screen readers for visually impaired users, so it should describe the image's purpose.

## CSS

CSS is written as rules. Each rule has a **selector**, which says which elements to style, and a **declaration block** in curly brackets, containing property and value pairs that each end with a semicolon.

```
h1 {
  color: navy;
  font-family: Arial, sans-serif;
}
.price {
  font-weight: bold;
  background-color: #f0f0f0;
}
#banner {
  text-align: center;
}
```

The first rule selects every `h1` element (an element selector). The second selects any element with `class="price"` (a class selector, starting with a full stop), which can be used on many elements. The third selects the one element with `id="banner"` (an id selector, starting with `#`), and an id should be unique on a page. Common properties include `color`, `background-color`, `font-family`, `font-size`, `text-align`, `margin` (space outside an element), `padding` (space inside an element) and `border`.

CSS can be applied in three ways. An **external** style sheet is a separate `.css` file linked from the `<head>` with `<link rel="stylesheet" href="style.css">`. An **internal** style sheet is placed in a `<style>` element in the head. An **inline** style is written in a `style` attribute on a single tag. External style sheets are usually best: one file controls the look of the whole site, so a change is made in one place, the HTML stays simpler, and the browser can reuse the stored file for every page.

## Good page design

Good design makes a site easy to use and available to everyone.

- **Consistent layout** with the same navigation, fonts and colours on every page.
- **Clear navigation**, so visitors can find content in few clicks.
- **Readable text**: enough contrast between text and background, a suitable font size and short paragraphs.
- **Accessibility**: meaningful alt text on images, a logical heading order, labels on form controls, and not relying on colour alone to carry meaning.
- **Appropriate media**: images sized sensibly, because very large files make pages slow to load.
- **Works on different devices**, such as phones and desktop computers.

## Worked example 1: reading a page

Here is a page.

```
<!DOCTYPE html>
<html>
<head>
  <title>Harbour Cycles</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Harbour Cycles</h1>
  <p>Repairs and <strong>rentals</strong> since 2012.</p>
  <img src="shop.jpg" alt="The front of the Harbour Cycles shop">
  <h2>Prices</h2>
  <ul>
    <li>Puncture repair</li>
    <li>Full service</li>
  </ul>
  <a href="contact.html">Contact us</a>
</body>
</html>
```

The browser tab shows "Harbour Cycles" because of the `<title>`. In the page itself the visitor sees a main heading, a paragraph in which the word "rentals" is shown in bold, the photograph, a second-level heading "Prices", a bullet list of two items, and a link "Contact us" that opens contact.html. The `<link>` tag is in the head, so it does not appear, but it loads the style sheet that controls the appearance. Count the elements: the list has two `<li>` items, inside one `<ul>`. All tags are correctly nested, which is checked by confirming that each element opened inside another is closed before the outer one.

## Worked example 2: writing CSS

Write CSS so that all level 1 headings are centred and dark green, and any element with class "price" is bold and red.

```
h1 {
  text-align: center;
  color: darkgreen;
}
.price {
  font-weight: bold;
  color: red;
}
```

The first rule uses an element selector, so it applies to every `<h1>` on any page that links to the file. The second uses a class selector, so to use it, the HTML must include `class="price"`, for example `<li class="price">Full service</li>`. Notice the full stop before the class name in the CSS but not in the HTML.

## Common mistakes

- Forgetting to close a tag, or closing nested tags in the wrong order.
- Writing the style properties in the HTML when the question asks for CSS, or the reverse.
- Missing the semicolon between declarations, or using round brackets instead of curly brackets around the declarations.
- Leaving off the full stop for a class selector or the hash for an id selector.
- Missing `alt` text on images, or giving it as "image1" instead of a meaningful description.
- Confusing `margin` (outside) and `padding` (inside).
- Treating HTML as a programming language. It marks up content; it does not contain loops or selection by itself.

## Exam technique

For **write** or **complete** questions, copy tag and attribute names exactly, and close every tag. For **describe what the browser displays**, work down the body, in order, mentioning headings, text styles, lists, images and links. For **explain why** an external style sheet is used, give two points: one file controls many pages, and the HTML stays shorter and easier to maintain. In design questions, link each point to the user, for example "alt text means a screen reader can describe the image to a visually impaired user".

## Check your understanding

1. What is the difference between HTML and CSS? *HTML defines the structure and content of a page; CSS defines how it looks.*
2. Which part of a page is shown on the browser tab? *The text inside the title element in the head.*
3. Write the HTML for a link with the text "Home" that goes to index.html. *`<a href="index.html">Home</a>`*
4. Why is alt text used on images? *It describes the image if it does not load and is read out by screen readers for visually impaired users.*
5. Write a CSS rule to make all paragraphs blue. *`p { color: blue; }`*
6. What is the difference between a class selector and an id selector? *A class (written with a full stop) can be used on many elements; an id (written with a hash) should be used on one element only.*
7. Give two advantages of an external style sheet. *One file controls the style of many pages, so changes are made in one place; the HTML is kept simpler.*
8. In the page in Worked example 1, how many list items are displayed? *Two.*
