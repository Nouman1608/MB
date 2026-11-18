---
title: "Cambridge IGCSE ICT (0417): Create a web page -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on HTML for 0417 subtopic 21.2: metatags, default targets, spanning cells, media attributes, divs, links and file paths."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 subtopic 21.2 Create a web page: using HTML in the content layer. The number in square brackets after the last part of a question is the total for the whole question. All websites, files and code are original and invented. Any correct, equivalent HTML is acceptable in the answers.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [21.2 Create a web page study guide](/resources/cambridge-igcse-ict-0417-create-a-web-page/) · [21.2 Create a web page revision notes](/resources/cambridge-igcse-ict-0417-create-a-web-page-revision-notes/)

---

## Section A: short answers

**1.** Which metatag attribute value gives words that search engines can match to a user's search?

A: author

B: description

C: keywords

D: viewport **[1]**

**2.** State where the page title is displayed when a web page is open in a browser. **[1]**

**3.** State the function of the *author* metatag. **[1]**

**4.** Write the HTML element that makes every hyperlink on a page open in the same window unless the link states otherwise. **[1]**

**5.** State the difference between a table header cell and a table data cell. **[2]**

**6.** Give **two** reasons for adding alternate text to an image. **[2]**

---

## Section B: structured questions

**7.** Write the HTML for a table, 70% of the window width, that shows:

- a header row with the cells *Class*, *Day* and *Time*;
- a row with *Yoga*, *Monday*, *18:00*;
- a row with *Pilates*, *Monday*, *19:30*, where the cell *Monday* is a single cell spanning both of these rows. **[5]**

**8.** A video file *match.mp4* is stored in a folder called *media* inside the page's folder. The original video is 1280 × 720 pixels.

**(a)** Write the HTML to display the video 640 pixels wide with play and pause controls.

**(b)** Calculate the height that keeps the aspect ratio.

**(c)** State how the HTML would change if the video had to start automatically with no controls displayed. **[5]**

**9.** A page contains these three lines. Write the HTML for each.

**(a)** A link from the text *Back to top* to a bookmark called *top*.

**(b)** A link from the text *Timetable* to the local page *timetable.html*, opening in a window named *info*.

**(c)** A link from the image *logo.png*, with alternate text *Club logo*, to the website https://www.example.com, opening in a new window. **[5]**

**10.** Write the HTML for a div with the class *offer* that contains an h2 heading *Spring Sale* and an unordered list with the items *Rackets* and *Balls*. **[4]**

**11.** The page *about.html* is in a folder called *pages*. The image *team.jpg* is in a folder called *images*. Both folders are inside the folder *site*.

**(a)** Write the relative path that *about.html* should use for *team.jpg*.

**(b)** Explain why the path C:\Users\Jo\site\images\team.jpg must not be used. **[3]**

**12.** Identify **four** errors in this original code and give the correction for each.

```html
<html>
<body>
  <title>Valley Riding School</title>
  <meta name="keywords" value="riding, horses, lessons">
  <h1>Valley Riding School</h1>
  <a href="lessons">Lessons</a>
  <h2 id="lessons">Lessons</h2>
  <img src="pony.jpg">
</body>
</html>
```

**[8]**

**13.** Explain why tables are used to structure elements within a web page. **[2]**

---

## Answers

**1.** C: keywords. **[1]**

**2.** On the browser tab (or title bar) (1). **[1]**

**3.** It names the author of the web page (1). **[1]**

**4.** `<base target="_self">` (1). **[1]**

**5.** A header cell (th) holds a heading for a row or column, usually displayed bold and centred (1); a data cell (td) holds the data itself (1). **[2]**

**6.** 1 mark each: screen-reader software can read it to visually impaired users (1); it is displayed if the image fails to load (1). **[2]**

**7.**
```html
<table style="width:70%">
  <tr><th>Class</th><th>Day</th><th>Time</th></tr>
  <tr><td>Yoga</td><td rowspan="2">Monday</td><td>18:00</td></tr>
  <tr><td>Pilates</td><td>19:30</td></tr>
</table>
```
1 mark each: width 70% (1); header row using th (1); Yoga row correct (1); rowspan="2" on the Monday cell (1); Pilates row with only two td cells (1). **[5]**

**8. (a)** `<video src="media/match.mp4" width="640" controls></video>`: relative path media/match.mp4 (1); width 640 (1); controls attribute (1).

**(b)** 640 × 720 ÷ 1280 = 360 pixels (1).

**(c)** Remove the controls attribute and add autoplay (1). **[5]**

**9. (a)** `<a href="#top">Back to top</a>` (1).

**(b)** `<a href="timetable.html" target="info">Timetable</a>`: href (1); target="info" (1).

**(c)** `<a href="https://www.example.com" target="_blank"><img src="logo.png" alt="Club logo"></a>`: img inside a with alt text (1); full URL with target="_blank" (1). **[5]**

**10.**
```html
<div class="offer">
  <h2>Spring Sale</h2>
  <ul>
    <li>Rackets</li>
    <li>Balls</li>
  </ul>
</div>
```
1 mark each: div with class="offer" (1); h2 heading (1); ul element (1); two li items, correctly closed and nested (1). **[4]**

**11. (a)** `../images/team.jpg` (1).

**(b)** It is an absolute path to a folder on one computer (1); when the site is uploaded to a web server or opened elsewhere, that location does not exist, so the image will not display (1). **[3]**

**12.** Any four errors, 1 mark for each error and 1 for its correction:
- The title and metatag are in the body (1); add a head section before the body and move them into it (1).
- The metatag uses value instead of content (1); it should be `content="riding, horses, lessons"` (1).
- The bookmark link is missing # (1); it should be `href="#lessons"` (1).
- The image has no alternate text (1); add `alt="..."` describing the pony (1).
- The page has no `<!DOCTYPE html>` declaration (1); add it as the first line (1). **[8]**

**13.** Tables arrange text and images in rows and columns (1), so elements are positioned and lined up neatly on the page (1). **[2]**

## Frequently asked questions

**Do I need to write the closing tag for img and meta?**
No. img, meta, link and base are empty elements with no closing tag. Elements with content, such as p, td and a, must be closed.

**Does the order of attributes matter?**
No. `<img src="a.jpg" alt="A">` and `<img alt="A" src="a.jpg">` work the same. Spell attribute names and values exactly.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 21 Website authoring, 21.2 Create a web page.
