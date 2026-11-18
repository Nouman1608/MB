---
title: "Cambridge IGCSE ICT (0417): Create a web page -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0417 subtopic 21.2: head and body, metatags, default targets, tables and spans, media attributes, bookmarks, hyperlinks and relative paths."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense Cambridge IGCSE ICT 0417 subtopic 21.2 Create a web page: using HTML in the content layer. The [21.2 Create a web page study guide](/resources/cambridge-igcse-ict-0417-create-a-web-page/) explains every element with annotated code and an error-finding example. Test yourself with the [21.2 practice questions](/resources/cambridge-igcse-ict-0417-create-a-web-page-practice/). The [Website authoring revision notes](/resources/cambridge-igcse-ict-website-authoring-revision-notes/) summarise all of Topic 21.

## Key terms

| Term | Meaning |
|---|---|
| Head section | Holds information about the page (title, metatags, stylesheet links, default target); not displayed in the window |
| Body section | Holds everything displayed on the page |
| Metatag | A head element giving information about the page, such as its character set or keywords |
| Attribute | Extra information in an opening tag, such as src, alt, href, colspan |
| Default target | The window in which links open unless they say otherwise, set with base target |
| colspan / rowspan | Make a table cell span more than one column / row |
| Alternate text (alt) | A text description of an image for screen readers and when the image does not load |
| Aspect ratio | The ratio of width to height of an image or video |
| div | A tag that groups elements into a block so styles or classes can be applied together |
| Bookmark | A named location in a page, created with an id attribute, that a link can jump to |
| Anchor | The a element, which creates a hyperlink |
| Relative path | A file location described from the current page, such as images/logo.png |
| Absolute path | A full fixed location, such as C:\Users\...\logo.png or a full URL |

## Head checklist

| Element | Example | Function |
|---|---|---|
| Title | `<title>Hillside Library</title>` | Shown on the browser tab |
| Stylesheets | `<link rel="stylesheet" href="base.css">` then `href="local.css"` | Attach the presentation layer; later ones take priority |
| charset | `<meta charset="UTF-8">` | Defines the character set |
| description | `<meta name="description" content="...">` | Summary for search engines |
| keywords | `<meta name="keywords" content="...">` | Words for search engines to match |
| author | `<meta name="author" content="...">` | Names the author |
| viewport | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Makes the page display on all devices |
| Default target | `<base target="_blank">` | All links open in a new window unless stated |

## Tables

- `<table>` contains rows `<tr>`; rows contain header cells `<th>` or data cells `<td>`.
- `colspan="3"`: one cell across three columns. `rowspan="2"`: one cell down two rows (the next row needs one fewer cell).
- Sizes: pixels (fixed, `600px`) or % (relative to the window, `80%`).
- **Why tables?** To structure elements in rows and columns so text and images line up.

## Media attributes

| Attribute | Effect |
|---|---|
| src | The file to display or play |
| alt | Alternate text for an image |
| width / height | Display size in pixels; set one, or both in proportion |
| controls | Shows play, pause and volume controls |
| (controls removed) | No controls are shown |
| autoplay | Starts playing automatically when the page loads |

Aspect ratio check: new height = new width × original height ÷ original width.
Example (invented): 1600 × 900 video shown 480 wide → 480 × 900 ÷ 1600 = **270** high.

## Hyperlinks

| Destination | href |
|---|---|
| Bookmark on the same page | `#contact` (with `id="contact"` on the target) |
| Local page | `prices.html` or `pages/prices.html` |
| Website | `https://www.example.org` |
| Email | `mailto:info@example.org` |

| Target | Opens in |
|---|---|
| `_self` | The same window |
| `_blank` | A new window |
| A name, such as `target="menu"` | The window with that name (created the first time) |

An image becomes a link when the img element is placed inside the a element.

## File paths

- **Relative** paths keep working when the whole site folder is moved or uploaded.
- **Absolute** paths to local files point to one computer's folders; on the web server they do not exist, so links, images and stylesheets break. Never use them for local pages, objects or attached stylesheets.
- `../` means "go up one folder".

## Exam traps

- Title or metatags in the body; headings in the head.
- `href="contact"` for a bookmark (missing #).
- An extra td left in after using colspan or rowspan.
- Width and height out of proportion, distorting an image.
- No alt text.
- Absolute path such as C:\ in src or href.
- Confusing an id (bookmark, unique) with a class (style, reusable).

## Self-test

1. State the purpose of the head section.
2. Which metatag makes a page display correctly on all devices?
3. Write the HTML so that every link on a page opens in a new window by default.
4. What does `colspan="2"` do?
5. A table has 3 columns. Row 2 starts with a cell that has `colspan="2"`. How many td elements does row 2 need in total?
6. A 1000 × 750 image is to be shown 400 pixels wide. What height keeps its aspect ratio?
7. Which attribute starts a video automatically?
8. Write the HTML to make the heading *Prices* a bookmark called prices.
9. Write the HTML for a link from the text *Email us* to sales@example.org.
10. What is the difference between `target="_blank"` and `target="_self"`?
11. Why must absolute file paths not be used for local images?
12. What is the function of the anchor element?

### Answers

1. To hold information about the page, such as the title, metatags, stylesheet links and default target, which is not displayed in the main window.
2. The viewport metatag.
3. `<base target="_blank">` in the head.
4. Makes one cell span two columns.
5. Two (one spanning two columns, plus one more).
6. 400 × 750 ÷ 1000 = 300 pixels.
7. autoplay.
8. `<h2 id="prices">Prices</h2>` (any heading level).
9. `<a href="mailto:sales@example.org">Email us</a>`.
10. _blank opens the link in a new window; _self opens it in the same window.
11. They point to a folder on one computer; when the site is moved or uploaded that location does not exist, so the image will not display.
12. It creates a hyperlink to another location, given by its href attribute.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 21 Website authoring, 21.2 Create a web page.
