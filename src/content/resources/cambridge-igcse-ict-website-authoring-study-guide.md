---
title: "Cambridge IGCSE ICT (0417): Website authoring -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 21: Website authoring"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 21
syllabusTopics:
  - qualification: "igcse"
    topic: "website-authoring"
  - qualification: "igcse"
    topic: "website-authoring"
    subtopic: "web-development-layers-0417"
  - qualification: "igcse"
    topic: "website-authoring"
    subtopic: "create-a-web-page-0417"
  - qualification: "igcse"
    topic: "website-authoring"
    subtopic: "use-stylesheets-0417"
description: "The layers of web development, building a web page in HTML and styling it with CSS, including internal and external stylesheets, for IGCSE ICT."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Website authoring is about building web pages from code or from a web-authoring tool and making them look consistent with a stylesheet. In Cambridge IGCSE ICT you are expected to understand how a web page is built in layers, create a page with correct HTML, add images, tables, lists and links, and then control the appearance with CSS. This guide explains each subtopic, with a worked example of a complete page and its stylesheet.

## Where this fits in the specification

Topic 21 has three subtopics: 21.1 Web development layers, 21.2 Create a web page and 21.3 Use stylesheets. The practical paper gives you resource files (text and images) and a list of instructions. You may be asked to show the HTML source and a screenshot of the page in a browser. Written questions may ask you to name the layers, explain why a stylesheet is useful or identify an error in a piece of code.

## Web development layers

Web development separates a page into layers, each with its own job.

- **Content layer**: the text, images and structure of the page, written in **HTML** (HyperText Markup Language).
- **Presentation layer**: how the content looks, such as colours, fonts and layout, written in **CSS** (Cascading Style Sheets).
- **Behaviour layer**: what the page does when the user interacts with it, such as validating a form or showing a menu, usually written in **JavaScript**.

The benefit of separation is that you can change the look of a whole site by editing one stylesheet without touching the content, and the same content can be given a different look on a phone and on a desktop computer. Pages also remain readable if the stylesheet or script fails to load.

## Create a web page

### Basic structure

An HTML document is made of **elements**, usually written as an opening tag, content and a closing tag, such as `<p>text</p>`. A tag can have **attributes**, such as `href` or `src`, written inside the opening tag with a value in quotes.

```
<!DOCTYPE html>
<html>
<head>
  <title>Page title</title>
</head>
<body>
  <h1>Main heading</h1>
  <p>A paragraph of text.</p>
</body>
</html>
```

The head holds information about the page, such as its title (shown on the browser tab) and links to stylesheets. The body holds everything visible.

### Common elements

- Headings `<h1>` to `<h6>`, paragraphs `<p>` and line breaks `<br>`.
- Lists: `<ul>` for a bulleted (unordered) list and `<ol>` for a numbered (ordered) list, with each item in `<li>`.
- Images: `<img src="photo.jpg" alt="A description" width="300">`. The `src` is the file location and the `alt` text is shown if the image fails to load and is read by screen readers, so every image should have it. Setting only the width keeps the proportions.
- Hyperlinks: `<a href="page2.html">Next page</a>` for another page or a file, `<a href="https://example.com">` for an external site, and a link within the same page using an `id` as the target.
- Tables: `<table>`, rows `<tr>`, header cells `<th>` and data cells `<td>`, with attributes or CSS for borders.
- Containers: `<div>` for a block of content and `<span>` for a part of a line.

### Good practice

Use meaningful file names with no spaces, keep all the files for the site in one folder and use **relative file paths** such as `images/logo.png` so that links still work when the folder is moved to a web server. Close every tag, nest tags correctly and indent your code. Save the file with the extension .html. Check the result in a browser, and test every link.

## Use stylesheets

A **stylesheet** is a set of rules that apply formatting to HTML elements. A CSS rule has a **selector**, which says what to style, and one or more **declarations** inside curly brackets, each made of a property, a colon, a value and a semicolon.

```
h1 {
  font-family: Arial, sans-serif;
  font-size: 24pt;
  color: navy;
}
```

### Three ways to apply CSS

- **External stylesheet**: rules saved in a separate .css file and linked from the head of each page with `<link rel="stylesheet" href="style.css">`. This is the best choice for a whole site, because one file controls every page.
- **Internal (embedded) stylesheet**: rules placed in a `<style>` element in the head, applying to that page only.
- **Inline style**: a `style` attribute on a single element, applying only to that element. It is quick but hard to maintain.

When rules conflict, the more specific rule wins: inline styles override internal and external ones for that element.

### Selectors, classes and ids

- An **element selector** such as `p` applies to every paragraph.
- A **class** selector, written `.note`, applies to any element carrying `class="note"`, and a class can be reused many times on a page.
- An **id** selector, written `#banner`, applies to the one element with `id="banner"`, because an id must be unique.

### Useful properties

Text properties include font-family (with a generic fallback such as serif or sans-serif), font-size, font-weight, color and text-align. Box properties include background-color, border, margin (space outside), padding (space inside) and width. Colours can be named or written as hexadecimal codes such as #003366. Fonts should be chosen from web-safe options and sizes set consistently.

## Worked example

Task: create a page for a school gardening club. It needs a heading, a short paragraph, a bulleted list of three jobs, an image with alternative text, a link to a second page, and a stylesheet that makes headings dark green in Arial and sets the page layout to two columns inside an 800 pixel wide container.

The HTML file, saved as index.html:

```
<!DOCTYPE html>
<html>
<head>
  <title>Gardening Club</title>
  <link rel="stylesheet" href="club.css">
</head>
<body>
  <div id="container">
    <h1>Gardening Club</h1>
    <div id="main">
      <p>We meet on Thursdays to look after the school garden.</p>
      <ul>
        <li>Planting seeds</li>
        <li>Watering</li>
        <li>Picking vegetables</li>
      </ul>
      <img src="images/beds.jpg" alt="Raised vegetable beds" width="300">
      <a href="join.html">How to join</a>
    </div>
    <div id="side"><p class="note">Bring gloves.</p></div>
  </div>
</body>
</html>
```

The stylesheet, saved as club.css in the same folder:

```
body { font-family: Arial, sans-serif; }
h1 { color: darkgreen; }
#container { width: 800px; }
#main { width: 560px; float: left; }
#side { width: 240px; float: left; }
.note { color: #003366; font-weight: bold; }
```

Check the layout arithmetic: the two columns are 560 + 240 = 800 pixels wide, which exactly fills the container, so they sit side by side with no wrap. If you added a 20 pixel padding to each column without reducing the widths, the total would become 800 + 4 * 20 = 880 pixels (20 on each side of each of the two columns), more than the container, and the second column would drop below. Open the page in a browser, confirm the heading is dark green and every image and link works, and save screenshots of the code and the browser view if the paper asks for them.

## Common mistakes

- Leaving out the closing tag or nesting tags in the wrong order.
- Missing `alt` text on images, or file names in the code that do not match the saved files, including capital letters.
- Using absolute paths such as `C:\Users\...\logo.png` that break on another computer.
- Putting `<link>` in the body or forgetting that the stylesheet file must be saved in the right folder.
- A semicolon missing between CSS declarations, or a colon replaced by an equals sign.
- Using an id for several elements, or a class selector without the full stop.
- Using inline formatting for everything, so the site is not consistent.

## Exam technique

Practical tasks use the words *create*, *insert*, *attach*, *apply*, *save* and *display*. Follow the exact names given for files, classes and ids. On the written paper, *state* wants a short fact, *describe* wants what a feature does and *explain* wants a reason such as: "An external stylesheet means a single change updates every page, so the site stays consistent." When correcting code, say what is wrong as well as what the corrected line should be.

## Check your understanding

1. Name the three layers of web development and a language for each. *Content: HTML. Presentation: CSS. Behaviour: JavaScript.*
2. What is the purpose of the alt attribute? *It gives a text alternative for when the image does not show and for screen readers.*
3. Write the HTML for a numbered list with items Red and Blue. *`<ol><li>Red</li><li>Blue</li></ol>`*
4. Write a CSS rule that makes every paragraph 12 point and centred. *`p { font-size: 12pt; text-align: center; }`*
5. Give one advantage of an external stylesheet over inline styles. *One file controls every page, so changes are made once and the style is consistent.*
6. What is the difference between a class and an id? *A class can be used on many elements; an id must be unique on a page.*
7. Why use relative file paths? *The links still work when the whole folder is moved to another computer or a server.*

## Frequently asked questions

**What are the three layers of web development?**
In Cambridge IGCSE ICT (0417), the content layer holds the text, images and structure in HTML, the presentation layer controls how it looks with CSS, and the behaviour layer controls interaction, usually with JavaScript.

**Why should every image on a web page have alt text?**
The alt attribute gives a text alternative that is shown if the image fails to load and is read by screen readers, so it makes the page more accessible.

**What is the advantage of an external stylesheet?**
An external stylesheet is a separate .css file linked from each page, so one change updates every page and the site stays consistent.

**Why use relative file paths in a website?**
Relative paths such as images/logo.png keep links working when the whole site folder is moved to another computer or a web server.
