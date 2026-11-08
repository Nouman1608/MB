---
title: "IGCSE ICT: Website Authoring — Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE ICT 0417 Topic 21: content, presentation and behaviour layers, HTML head and body, tables, links, bookmarks and CSS."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Website authoring in Cambridge IGCSE ICT 0417 (Topic 21) is about building web pages in three layers: the content layer written in HTML, the presentation layer written in CSS, and the behaviour layer for scripting. You must be able to write the head and body sections, tables, images, video, lists, bookmarks and hyperlinks, create external styles and classes, and explain relative file paths and the stylesheet hierarchy. It is assessed practically in Paper 3, with theory points also asked in Paper 1.

Condensed for revision. For the full explanation, use the
[website authoring study guide](/resources/cambridge-igcse-ict-website-authoring-study-guide/), then try the
[website authoring practice questions](/resources/cambridge-igcse-ict-website-authoring-practice/).

## Syllabus coverage

| Syllabus ref | Content |
|---|---|
| 21.1 Web development layers | Content layer (content and structure), presentation layer (display and format), behaviour layer (scripting to control elements) |
| 21.2 Create a web page | Head: title, external stylesheets (correct hierarchy, relative path), metatags (charset, name: description, keywords, author, viewport; content), default target window. Body: tables (th, tr, td; spanning rows/columns; sizes in pixels or %; styles), images, sound, video (controls, autoplay), size, aspect ratio, alt text; div with styles and classes; h1, h2, h3, p, li; ordered and unordered lists; bookmarks with id; hyperlinks to bookmarks, local pages, URLs, email, and to open in the same window, a new window or a named window. Know: purpose of head and body; why tables structure pages; function of metatags, hyperlinks, bookmarks and anchors; relative vs absolute file paths |
| 21.3 Use stylesheets | External styles and inline style attributes; background (colour, images), font properties; table, tr, th, td properties (size, background colour, alignment, spacing, padding, borders: collapsed, colour, thickness, visible/invisible); classes; styles for h1, h2, h3, p, li; comments in a stylesheet; save as .css. Know: attached stylesheets vs inline styles; hierarchy; style vs class; why relative paths are used for attached stylesheets |

## 21.1 What are the three web development layers?

| Layer | Language / role | Example |
|---|---|---|
| Content | HTML: enters the content and creates the structure | Headings, paragraphs, tables, images |
| Presentation | CSS: displays and formats elements | Fonts, colours, borders, alignment |
| Behaviour | Scripting language (for example JavaScript): controls elements | A button that shows a message when clicked |

## 21.2 What goes in the head and the body?

- **Head**: information *about* the page, not shown in the main window — title (shown on the browser tab), links to stylesheets, metatags, default target (`<base target="_blank">`).
- **Body**: everything displayed on the page.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Riverside Club</title>
  <meta charset="UTF-8">
  <meta name="description" content="Opening times and events at Riverside Club">
  <meta name="keywords" content="club, river, events">
  <meta name="author" content="A. Student">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="base.css">
  <link rel="stylesheet" href="club.css">
</head>
<body>
  <h1>Riverside Club</h1>
  <p class="intro">Welcome to our club.</p>
</body>
</html>
```

### Function of metatags

| Metatag | Function |
|---|---|
| charset | Defines the character set, for example UTF-8 |
| keywords | Words used by search engines to match searches |
| author | Names the author of the page |
| description | A summary that search engines may display |
| viewport | Makes the page display correctly on all devices by setting the width to the device width |

### Stylesheet hierarchy

When several stylesheets are attached, a later one **overrides** an earlier one for the same property. An **inline style** attribute overrides attached stylesheets. So link the general stylesheet first and the more specific one after it.

## Tables

- `<table>`, `<tr>` (table row), `<th>` (table header), `<td>` (table data).
- `colspan="2"` merges across columns; `rowspan="3"` merges down rows.
- Size in pixels or %: `style="width:80%"`.
- **Why tables?** They structure and position elements in rows and columns on a page.

## Images, sound and video

```html
<img src="images/logo.png" alt="Club logo" width="200">
<video src="media/tour.mp4" width="400" controls autoplay></video>
<audio src="media/welcome.mp3" controls></audio>
```

- **alt** text describes the image if it does not load and for screen readers.
- Keep the **aspect ratio** by setting only the width (or both in proportion).
- `controls` shows play/pause; remove it to hide them; `autoplay` starts the media automatically.

## Divs, tags, classes and lists

- `<div>` groups content so styles or a class can be applied to the whole block.
- Pre-defined styles: `h1`, `h2`, `h3`, `p`, `li`.
- Lists: `<ol>` ordered (numbered), `<ul>` unordered (bulleted), each item in `<li>`.

## Bookmarks and hyperlinks

```html
<h2 id="events">Events</h2>                        <!-- bookmark -->
<a href="#events">Go to events</a>                  <!-- same page -->
<a href="contact.html">Contact us</a>               <!-- local page -->
<a href="https://www.example.com">Partner site</a>  <!-- website URL -->
<a href="mailto:info@example.com">Email us</a>      <!-- email -->
<a href="map.html" target="_blank">Map</a>          <!-- new window -->
<a href="news.html" target="_self">News</a>         <!-- same window -->
<a href="prices.html" target="prices">Prices</a>    <!-- named window -->
<a href="index.html"><img src="logo.png" alt="Home"></a>  <!-- image link -->
```

- A **hyperlink** lets the user move to another location when clicked.
- A **bookmark** is a named location on a page (created with an `id` attribute) that a link can jump to.
- An **anchor** is the `<a>` element that creates the hyperlink.

### Relative vs absolute file paths

- **Relative**: `images/logo.png` — the location relative to the current page.
- **Absolute**: `C:\Users\Sam\Website\images\logo.png` — the full path on one computer.
- Absolute paths must **not** be used for local pages, objects or attached stylesheets: when the site is uploaded to a web server or moved, those paths no longer exist and links break.

## 21.3 How do you use CSS?

```css
/* Main stylesheet for Riverside Club */
body { background-color: #F0F8FF; font-family: Arial, sans-serif; }
h1   { color: #003366; font-size: 28px; text-align: center; }
p    { font-size: 14px; color: #333333; }
table { border-collapse: collapse; width: 90%; }
th, td { border: 2px solid #003366; padding: 6px; text-align: left; vertical-align: top; }
.highlight { background-color: yellow; font-weight: bold; }
```

- A **style** applies to every element of a type (all `p` elements).
- A **class** (`.highlight`) applies only to elements given `class="highlight"`; one class can be used on different element types.
- **Inline style**: `<p style="color:red;">` — applies to that element only.
- **Comments**: `/* ... */`. Save the external stylesheet with the **.css** extension.
- Borders: `border-collapse: collapse`, colour, thickness (`2px`), visible or invisible (`border: none`).

## Common mistakes and exam traps

- Using an absolute file path for an image or stylesheet.
- Attaching stylesheets in the wrong order, so the wrong style wins.
- Forgetting `alt` text, or distorting an image by setting width and height out of proportion.
- Putting the title or metatags in the body.
- Confusing `id` (bookmark, unique) with `class` (style, reusable).
- Missing `#` before the bookmark name in the link (`href="#events"`).
- Not closing tags, or missing semicolons and braces in CSS.

## Frequently asked questions

**What is the difference between a style and a class in CSS?**
A style is applied to every element of a given type, such as all h1 headings. A class is a named set of styles applied only to the elements you give that class name.

**Why must relative file paths be used for stylesheets?**
An absolute path points to a location on one computer. When the website is moved or uploaded to a server that path does not exist, so the stylesheet would not load.

**What does the viewport metatag do?**
It sets the page width to the device's screen width so the page displays properly on all devices, including phones.

**Which wins: an inline style or an attached stylesheet?**
The inline style, because it is applied directly to the element and comes last in the hierarchy.

## Self-test

1. Name the three web development layers.
2. Write the HTML to link to a bookmark called *top*.
3. Which attribute merges a cell across two columns?
4. Write a CSS class called *note* with italic text.
5. Give one reason a table is used in a web page.

*Answers: 1 content, presentation, behaviour; 2 `<a href="#top">Top</a>`; 3 colspan="2"; 4 `.note { font-style: italic; }`; 5 to structure and position elements in rows and columns.*

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 21 "Website authoring" (21.1–21.3).
