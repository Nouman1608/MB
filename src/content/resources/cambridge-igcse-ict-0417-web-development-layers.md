---
title: "Cambridge IGCSE ICT (0417): Web development layers"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 21: Website authoring"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 21.1
syllabusTopics:
  - qualification: "igcse"
    topic: "website-authoring"
    subtopic: "web-development-layers-0417"
description: "The content, presentation and behaviour layers of a web page for Cambridge IGCSE ICT 0417 subtopic 21.1: what each does and why they are kept apart."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 21.1 of Cambridge IGCSE ICT 0417 is a "know and understand" statement: **the three web development layers**. The syllabus defines them precisely. The **content layer** is used to enter the content and create the structure of a web page. The **presentation layer** is used to display and format elements within a web page. The **behaviour layer** is for a scripting language to control elements within a web page. Subtopics 21.2 and 21.3 then ask you to build the first two layers yourself, in HTML and CSS. This guide explains each layer, shows how to decide which layer a feature belongs to, and sets out the reasons for keeping the layers separate, which is what theory questions usually ask.

The [Website authoring study guide](/resources/cambridge-igcse-ict-website-authoring-study-guide/) introduces all three subtopics. Revise this one with the [web development layers revision notes](/resources/cambridge-igcse-ict-0417-web-development-layers-revision-notes/) and test it with the [web development layers practice questions](/resources/cambridge-igcse-ict-0417-web-development-layers-practice/).

## The content layer

The content layer holds **what the page says and how it is organised**. It is written in **HTML** (HyperText Markup Language). The two key words in the syllabus definition are *content* and *structure*:

- **Content**: the text, images, video and sound clips, tables of data, and hyperlinks.
- **Structure**: what each piece of content *is*, shown by HTML elements. A main heading is marked as h1, a sub-heading as h2, a paragraph as p, a list item as li, a table row as tr. The structure also includes the head section (title, metatags, links to stylesheets) and the body section (everything displayed).

The content layer says that a line is a heading. It should not say that the heading is dark blue and 28 pixels high: that is presentation.

## The presentation layer

The presentation layer controls **how the elements look when displayed**. It is written in **CSS** (Cascading Style Sheets), and is normally held in one or more external stylesheet files attached to each page. It covers:

- fonts: family, size, colour, bold, italic, alignment;
- background colours and background images;
- table appearance: borders, padding, spacing, cell colours, alignment;
- sizes and positions of elements.

Because the presentation layer is separate, one stylesheet can control the look of every page on a website.

## The behaviour layer

The behaviour layer makes the page **respond and change while it is being used**. It uses a **scripting language**, most commonly JavaScript, to control elements on the page. Typical behaviour includes:

- showing a message or opening a panel when a button is clicked;
- checking that a form field has been filled in before the form is sent;
- changing an image when the pointer moves over it;
- showing or hiding part of the page, such as a drop-down menu.

The 0417 syllabus requires you to **know and understand** this layer. The practical tasks in subtopics 21.2 and 21.3 build the content and presentation layers; you are not asked to write scripts.

## How the layers fit together

The HTML file is the centre. It contains the content and structure, and in its head section it **attaches** the presentation layer and can attach the behaviour layer. Here is an annotated example (original code):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Harbour Café</title>
  <link rel="stylesheet" href="cafe.css">   <!-- attaches the presentation layer -->
  <script src="menu.js"></script>            <!-- attaches the behaviour layer -->
</head>
<body>
  <h1>Harbour Café</h1>                      <!-- content: a main heading -->
  <p>Fresh food every day.</p>               <!-- content: a paragraph -->
  <button id="show">Show today's menu</button>
</body>
</html>
```

The stylesheet *cafe.css* might make the h1 heading navy and centred. The script *menu.js* might display the menu when the button is clicked. If *cafe.css* fails to load, the heading and paragraph still appear in plain default styling, because the content does not depend on the presentation layer.

## Deciding which layer a feature belongs to

Ask one question: is this **what** is on the page, **how it looks**, or **what it does** when the user interacts?

| Feature (invented examples) | Layer | Reason |
|---|---|---|
| A table of opening times | Content | It is information, structured as a table |
| Making every table border 2 pixels and grey | Presentation | It changes appearance only |
| An image of the shop with alternative text | Content | The image and its description are content |
| Setting that image to 300 pixels wide in the stylesheet | Presentation | Size is how it is displayed |
| A hyperlink to the contact page | Content | A link is part of the page's content and structure |
| Making all hyperlinks green | Presentation | Colour is formatting |
| A pop-up box that appears when a link is clicked | Behaviour | A script controls an element in response to an action |
| Checking an email address has been typed before a form is sent | Behaviour | A script reacts to what the user does |
| Marking "Our Menu" as an h2 heading | Content | It defines structure |
| Making h2 headings Arial, bold | Presentation | Formatting of an element |

A common trap is the hyperlink. The link itself is content; its colour is presentation; a script that runs when it is clicked is behaviour. One feature on the screen can involve all three layers.

## Why keep the layers separate?

These are the reasons to give in a theory answer, each with its explanation:

- **Consistency**: one external stylesheet formats every page, so all pages share the same fonts and colours.
- **Easier maintenance**: changing one rule in the stylesheet updates the whole site; changing the content does not mean redoing the formatting.
- **Different presentations of the same content**: the same HTML can be given a different stylesheet for a phone, a large screen or printing.
- **Accessibility**: well-structured content (proper headings, alternative text) can be read by screen readers and still makes sense if styles or scripts are switched off or fail to load.
- **Division of work**: a writer can produce content, a designer the stylesheet and a programmer the scripts, at the same time, without editing each other's files.
- **Simpler fault-finding**: a display problem is looked for in the CSS, a missing paragraph in the HTML, a button that does nothing in the script.

An **inline style attribute** (subtopic 21.3), such as style="color:red" written inside an HTML tag, puts presentation into the content layer. It works, but the more of it there is, the more of these benefits are lost.

## Common mistakes

- Calling CSS the content layer, or HTML the presentation layer.
- Saying HTML is used to "format" the page; in the syllabus definition HTML enters content and creates structure.
- Describing the behaviour layer as "how the page behaves on different devices"; it is scripting that controls elements.
- Classing hyperlinks as behaviour because they are clicked.
- Giving "it is easier" as a benefit of separation without saying why.

## Exam technique

*Name* or *identify* questions want the layer's name and, if asked, its language. *Describe* questions want what the layer is used for, using the syllabus verbs: content enters content and creates structure; presentation displays and formats elements; behaviour uses a scripting language to control elements. *Explain* questions about separating layers want a benefit and its reason: "The presentation layer is in one external stylesheet, so changing a font in that file changes it on every page."
