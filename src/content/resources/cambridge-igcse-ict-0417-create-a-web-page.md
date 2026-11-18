---
title: "Cambridge IGCSE ICT (0417): Create a web page"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 21: Website authoring"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 21.2
syllabusTopics:
  - qualification: "igcse"
    topic: "website-authoring"
    subtopic: "create-a-web-page-0417"
description: "Building the HTML content layer for Cambridge IGCSE ICT 0417 subtopic 21.2: head elements, metatags, tables, media, divs, bookmarks, links and file paths."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 21.2 of Cambridge IGCSE ICT 0417, "Create a web page", is about **using HTML in the content layer**. The syllabus guidance is long. In the head section you place a page title, attach external stylesheets (with the correct hierarchy, using a relative file path), add metatags (charset, and name attributes for description, keywords, author and viewport, with content attributes) and set a default target window. In the body you insert tables (with header, rows and data, spanning cells and sizes in pixels or %), insert text, images, sound and video (with controls, without controls, or autoplay, with sizes, aspect ratio and alternate text), use the div tag, apply h1, h2, h3, p and li, apply classes and styles, create bookmarks with an id attribute, and create hyperlinks to bookmarks, local pages, websites and email addresses, opening in a specified window. You must also understand the purpose of the head and body, why tables are used, the function of metatags, hyperlinks, bookmarks and anchors, and relative and absolute file paths.

The [Website authoring study guide](/resources/cambridge-igcse-ict-website-authoring-study-guide/) gives an overview and a full example page. This guide goes element by element with the reasons behind each choice. Afterwards, use the [21.2 revision notes](/resources/cambridge-igcse-ict-0417-create-a-web-page-revision-notes/) and the [21.2 practice questions](/resources/cambridge-igcse-ict-0417-create-a-web-page-practice/).

## Head and body: what goes where

The **head** section holds information **about** the page that is not displayed in the browser window itself. The **body** holds everything that **is** displayed. A frequent error is placing a title, metatag or stylesheet link in the body, or a heading in the head.

## The head section in detail

### Page title

```html
<title>Hillside Library - Opening Times</title>
```

The title appears on the browser tab, in bookmarks and as the heading of search results. It is not the same as an h1 heading, which is displayed in the page. Type it exactly as the task gives it.

### Attaching external stylesheets

```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/library.css">
```

The **hierarchy** matters: where two attached stylesheets set the same property for the same element, the one attached **later** takes priority. Attach the general stylesheet first and the more specific one after it. Use a **relative file path**, as here, so the link works wherever the folder of files is moved. Subtopic 21.3 covers the stylesheets themselves.

### Metatags

```html
<meta charset="UTF-8">
<meta name="description" content="Opening times and events at Hillside Library">
<meta name="keywords" content="library, books, opening times, events">
<meta name="author" content="A. Candidate">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Metatag | Function |
|---|---|
| charset | Defines the character set used to display the text correctly, such as UTF-8 |
| name="description" | A summary of the page that search engines may show in results |
| name="keywords" | Words that search engines can match to users' searches |
| name="author" | Names the author of the page |
| name="viewport" | Makes the page display at the width of the device, so it works on all devices |

Each metatag uses the **name** attribute to say what kind of information it is and the **content** attribute to hold the value; charset uses its own attribute.

### Default target window

```html
<base target="_blank">
```

This sets where **every** hyperlink on the page opens unless a link says otherwise. "_blank" means a new window or tab; "_self" means the same window. A link with its own target attribute overrides the default.

## The body section in detail

### Text with pre-defined styles

Use **h1** for the main heading, **h2** and **h3** for sub-headings at lower levels, **p** for paragraphs and **li** for list items inside **ul** (unordered, bulleted) or **ol** (ordered, numbered). These tags give structure; the stylesheet decides how each looks.

### Tables

```html
<table style="width:80%">
  <tr>
    <th colspan="2">Opening Times</th>
  </tr>
  <tr>
    <th>Day</th>
    <th>Hours</th>
  </tr>
  <tr>
    <td>Monday to Friday</td>
    <td rowspan="2">09:00 to 17:00</td>
  </tr>
  <tr>
    <td>Saturday</td>
  </tr>
</table>
```

- **th** is a table header cell, **tr** a table row and **td** a table data cell.
- **colspan="2"** makes a cell span two columns; **rowspan="2"** makes a cell span two rows. When a cell spans, the row it extends into needs one fewer td, which is why the last row has only one.
- Sizes can be set in **pixels** (fixed, such as 600px) or **%** of the available width (such as 80%, which adjusts to the window).
- Styles are applied to a table by a class or a style attribute.

Tables are used to **structure elements** within a page: they position text and images in rows and columns so they line up, for example a grid of photographs with captions.

### Images, sound and video

```html
<img src="images/reading-room.jpg" alt="The reading room with tables and shelves" width="450">
<audio src="media/welcome.mp3" controls></audio>
<video src="media/tour.mp4" width="400" controls></video>
<video src="media/intro.mp4" width="400" autoplay></video>
```

- **alt** (alternate text) describes the image if it cannot be displayed and is read aloud by screen readers.
- **Aspect ratio**: set only the width (or only the height) and the browser keeps the proportions. If you set both, scale them in the same ratio. A 1200 × 800 pixel photograph displayed 450 pixels wide should be 450 × 800 ÷ 1200 = 300 pixels high.
- **controls** displays play, pause and volume controls; **removing** the attribute hides them; **autoplay** starts the media automatically when the page loads.

### The div tag, classes and styles

A **div** groups several elements into one block, so a style or class can be applied to all of them at once:

```html
<div class="notice">
  <h2>Summer Reading Challenge</h2>
  <p>Read six books over the holidays.</p>
</div>
<ol class="steps">
  <li>Join at the desk</li>
  <li>Collect your card</li>
</ol>
```

A **class** applies a named set of styles from the stylesheet, and can be used on many elements. A **style attribute** applies formatting to one element only.

### Bookmarks

A **bookmark** is a named location within a page that a link can jump to. It is created with an **id** attribute on the target element:

```html
<h2 id="events">Events</h2>
```

### Hyperlinks

The **anchor** element, a, creates a hyperlink; its **href** attribute holds the destination.

```html
<a href="#events">See our events</a>                       <!-- bookmark on the same page -->
<a href="membership.html">Join the library</a>             <!-- locally stored page -->
<a href="https://www.example.org">Partner site</a>          <!-- website, by URL -->
<a href="mailto:info@example.org">Email the library</a>     <!-- send mail -->
<a href="map.html" target="_self">Map</a>                   <!-- same window -->
<a href="map.html" target="_blank">Map</a>                  <!-- new window -->
<a href="prices.html" target="fees">Fees</a>                <!-- window named fees -->
<a href="index.html"><img src="images/logo.png" alt="Hillside Library home"></a>  <!-- image link -->
```

A **named** window opens the first time the link is clicked; later links with the same target name reuse that window instead of opening another.

## Relative and absolute file paths

| Path | Type | Meaning |
|---|---|---|
| images/logo.png | Relative | The images folder inside the page's own folder |
| ../index.html | Relative | The folder one level above the page's folder |
| C:\Users\Sam\site\images\logo.png | Absolute | A fixed location on one computer |
| https://www.example.org/news.html | Absolute | A full web address |

**Absolute file paths must not be used** for links to locally saved pages or objects, or for attached stylesheets. They point to a location on the computer where the page was made. When the site is uploaded to a web server or opened on another computer, that location does not exist, so images, links and styles break. A relative path describes the route from the page, so it keeps working as long as the folder structure is moved together. A full URL is correct only for a link to an external website.

## Worked example: find the errors

*Original code with deliberate errors.*

```html
<head>
  <h1>Hillside Library</h1>
  <link rel="stylesheet" href="C:\Work\site\library.css">
</head>
<body>
  <img src="images/hall.jpg" width="600" height="600">
  <a href="events">Events</a>
</body>
```

1. The h1 heading is in the head; move it into the body, and add a title element to the head.
2. The stylesheet uses an absolute path; change it to href="library.css" (or the correct relative path).
3. The image has no alt attribute; add one describing the image.
4. If hall.jpg is 900 × 600 pixels, width 600 and height 600 distort it; the height should be 600 × 600 ÷ 900 = 400, or the height should be left out.
5. The bookmark link is missing the # symbol; it should be href="#events", and an element needs id="events".

## Common mistakes

- Title, metatags or stylesheet links placed in the body.
- Absolute paths to images, pages or stylesheets.
- A spanning cell added but an extra td left in the row it spans into.
- Images stretched by setting width and height in the wrong ratio.
- Bookmark links without #, or the id spelt differently from the link.
- Using a class name in the HTML that does not exactly match the stylesheet.

## Exam technique

Practical tasks say *create*, *place*, *insert*, *attach*, *apply* and *set*; each element and attribute named is usually checked. Copy file names, class names and ids exactly, including capitals. In theory questions, *state* the function of a metatag in one line, and *explain* the rule on file paths with the reason: "an absolute path refers to a folder on one computer, which does not exist on the web server, so the link would break."
