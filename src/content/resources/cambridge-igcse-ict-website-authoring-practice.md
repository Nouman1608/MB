---
title: "IGCSE ICT: Website Authoring — Practice Questions"
resourceType: "practice-questions"
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
description: "Original exam-style questions with worked answers on web layers, HTML head and body, tables, links, bookmarks, CSS classes and file paths for IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These questions cover Cambridge IGCSE ICT 0417 Topic 21: web development layers (21.1), creating a web page in HTML (21.2) and using stylesheets (21.3). Website authoring is assessed practically in Paper 3, so many questions ask you to write the exact HTML or CSS you would use, with worked answers showing the code.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Website Authoring revision notes](/resources/cambridge-igcse-ict-website-authoring-revision-notes/) · [Website authoring study guide](/resources/cambridge-igcse-ict-website-authoring-study-guide/)

---

## Section A: short answers

**1.** Name the web development layer used to format elements on a web page. **[1]**

**2.** State the purpose of the head section of a web page. **[1]**

**3.** State the function of the *keywords* metatag. **[1]**

**4.** State the file extension used to save an external stylesheet. **[1]**

---

## Section B: structured questions

**5.** Write the HTML for the head section of a page that:
- displays *Green Valley Farm* on the browser tab
- defines the character set as UTF-8
- includes the viewport metatag
- attaches the stylesheets *main.css* and then *farm.css*, both in the same folder as the page. **[5]**

**6.** Explain why *farm.css* is attached after *main.css*. **[2]**

**7.** Write the HTML for a table with a header row containing *Animal* and *Number*, one data row containing *Cows* and *42*, and a final row where a single cell spanning both columns contains *Updated weekly*. **[4]**

**8. (a)** Write the HTML to make the heading *Opening times* a bookmark called *opening*. **[1]**
**(b)** Write the HTML to create a link to this bookmark from the text *See opening times*. **[1]**
**(c)** Write the HTML for an image *cow.jpg*, in a subfolder called *images*, displayed 300 pixels wide with the alternative text *Cow in a field*, which opens *animals.html* in a new window when clicked. **[4]**

**9.** A student uses `src="C:\Users\Kai\Site\images\cow.jpg"` for an image. Explain why this is wrong and give the correct path. **[3]**

---

## Section C: stylesheets

**10.** Write CSS to:
- set the page background colour to #FFFFF0
- make all h1 headings Verdana (or sans-serif), 32 pixels, centred, dark green (#006400)
- make all table data cells have a 1 pixel solid black border with 5 pixels of padding, with the borders collapsed
- create a class called *offer* with a yellow background and bold text
- include a comment saying who wrote the stylesheet. **[7]**

**11.** Explain the difference between a style and a class. **[2]**

**12.** A paragraph has `<p style="color:blue;">` but the attached stylesheet sets `p { color: black; }`. State the colour of the paragraph and explain why. **[2]**

**13.** Describe the behaviour layer and give one example of its use. **[2]**

---

## Worked answers

**1.** The presentation layer. **[1]**

**2.** To hold information about the page, such as the title, metatags and links to stylesheets, which is not displayed in the main body. **[1]**

**3.** Gives words that search engines can use to match the page to searches. **[1]**

**4.** .css **[1]**

**5.** 1 mark per bullet, 1 mark for correct order of the stylesheets:
```html
<head>
  <title>Green Valley Farm</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <link rel="stylesheet" href="farm.css">
</head>
```
**[5]**

**6.** Stylesheets attached later take priority over earlier ones in the hierarchy (1), so any styles in *farm.css* override the general styles in *main.css* for the same elements (1). **[2]**

**7.**
```html
<table>
  <tr><th>Animal</th><th>Number</th></tr>
  <tr><td>Cows</td><td>42</td></tr>
  <tr><td colspan="2">Updated weekly</td></tr>
</table>
```
1 mark for header cells using `th`, 1 for the data row, 1 for `colspan="2"`, 1 for correct `table`/`tr` structure. **[4]**

**8. (a)** `<h2 id="opening">Opening times</h2>` (any heading level). **[1]**
**(b)** `<a href="#opening">See opening times</a>` **[1]**
**(c)** `<a href="animals.html" target="_blank"><img src="images/cow.jpg" width="300" alt="Cow in a field"></a>` — 1 for relative path images/cow.jpg, 1 for width 300, 1 for alt text, 1 for link with target="_blank". **[4]**

**9.** It is an absolute path to a folder on one computer (1); when the site is uploaded to a web server or opened on another computer that location does not exist, so the image will not display (1). Correct relative path: `images/cow.jpg` (1). **[3]**

**10.** One mark per correct point, for example:
```css
/* Stylesheet written by A. Student */
body { background-color: #FFFFF0; }
h1 { font-family: Verdana, sans-serif; font-size: 32px; text-align: center; color: #006400; }
table { border-collapse: collapse; }
td { border: 1px solid black; padding: 5px; }
.offer { background-color: yellow; font-weight: bold; }
```
Marks: comment (1); background colour (1); h1 font family and size (1); h1 centred and colour (1); td border 1px solid black (1); padding 5px and collapsed borders (1); class *offer* correct (1). **[7]**

**11.** A style is applied to every element of a particular type, such as all p elements (1); a class is a named set of styles applied only to elements given that class, and can be used on different types of element (1). **[2]**

**12.** Blue (1). The inline style attribute is applied directly to the element and overrides the attached stylesheet in the hierarchy (1). **[2]**

**13.** The behaviour layer uses a scripting language to control elements on the page (1), for example a button that displays a message or changes an image when clicked (1). **[2]**

## Frequently asked questions

**Do I need to write a full HTML page from memory?**
In Paper 3 you edit and create pages from source files, so you must know the tags and attributes in the syllabus and be able to write them accurately.

**Is it acceptable to use colour names instead of hex codes?**
Use exactly what the task specifies. If it gives a hex code such as #006400, use that code.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 21 "Website authoring" (21.1 Web development layers, 21.2 Create a web page, 21.3 Use stylesheets) and section 4, Paper 3.
