---
title: "OxfordAQA IGCSE Computer Science (9210): Key concepts of web page design -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Web Design Key Concepts Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Web page design"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 8.01
syllabusTopics:
  - qualification: "igcse"
    topic: "web-page-design"
  - qualification: "igcse"
    topic: "web-page-design"
    subtopic: "key-concepts-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.8.1: HTML and CSS roles, server-side and client-side scripting, comparisons and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.8.1 Key concepts** of OxfordAQA International GCSE Computer Science (9210).
Explanations are in the [Key concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts/).

## What the specification asks

- Know that web pages can be constructed using **HTML** and **CSS**.
- Know that **HTML creates the structure** of a web page and **CSS changes the style**.
- Understand that **server-side scripting** languages can be used on a web server for **dynamic generation** of web
  pages.
- Understand that **client-side scripting** languages can be used to **add additional functionality** to web pages.

## How a page reaches the user

1. The browser (the **client**) sends a **request** to the **web server**.
2. The server finds or builds the page and sends it back (the **response**).
3. The browser displays the page.

## HTML and CSS

| | HTML | CSS |
|---|---|---|
| Stands for | Hypertext Markup Language | Cascading Style Sheets |
| Job | Creates the **structure** of the page | Changes the **style** (colours, fonts, alignment) |
| Method | Tags mark up what each part is | Style rules say how each part looks |
| Example | A heading, a paragraph, a list | Headings blue and centred |

- HTML is a **markup** language, not a programming language.
- Remember: **HTML says what it is; CSS says what it looks like.**
- Benefits of keeping them separate: consistency; easier changes; cleaner HTML; helps accessibility.

## Static and dynamic pages

| Page type | Meaning |
|---|---|
| Static | A ready-made file that every visitor receives unchanged |
| Dynamic | Generated when requested, so its content can differ between visitors or visits |

## Server-side scripting

- A program that runs **on the web server** when the page is requested.
- It **generates the HTML**; the browser receives the finished page.
- The user **cannot see** the script.
- Uses: database look-ups, personalised content after login, processing forms, showing the latest data.

| Advantages | Disadvantages |
|---|---|
| More secure: code and data stay on the server | The server does the work for every request |
| Can use the server's database | A trip to the server is needed for each action |
| Works in every browser (only HTML is sent) | Can be slow when many users make requests |

## Client-side scripting

- A program sent to the browser and run **on the user's computer**.
- Adds **extra functionality**: checking forms, menus, interactive content, animation, updating part of a page.
- The user **can see** the script.

| Advantages | Disadvantages |
|---|---|
| Fast response, with no wait for the server | Can be read, changed or switched off |
| Reduces server load | Depends on the browser and settings |
| More interactive pages | Cannot be trusted alone for security |

## Comparison

| | Server-side | Client-side |
|---|---|---|
| Runs on | The web server | The user's browser |
| Browser receives | The finished HTML | The page plus the script |
| Purpose | Dynamic generation of pages | Extra functionality in the page |
| Visible to user | No | Yes |
| Example | Show a user's orders from a database | Check an email address as it is typed |

They are often used **together**: a client-side check for quick feedback, then a server-side check and processing.

## Which type to choose

| Task | Type | Reason |
|---|---|---|
| Show a customer's saved basket | Server-side | Data held on the server |
| Warn about an empty box at once | Client-side | Immediate feedback |
| Check that a username is unused | Server-side | Needs the server's list of users |
| Enlarge an image on mouse-over | Client-side | Happens in the browser |

## Exam traps

- **HTML called a programming language.** It is a markup language.
- **CSS "makes the page".** CSS controls appearance.
- **Structure and style mixed up.**
- **Server-side script "runs in the browser".** It runs on the server.
- **Client-side called "always better".** Security checks need the server.
- **User "sees" the server-side script.** They only see the page it produced.
- **Dynamic as "moving".** It means generated on request.
- **No mention of where the code runs.**

## Key terms

| Term | Meaning |
|---|---|
| Client | The user's computer and browser |
| Server | The computer that stores pages and answers requests |
| Browser | Software that requests and displays web pages |
| Markup | Tags added to content to describe its structure |
| Script | A short program that runs on the server or in the browser |

## Self-test

1. State what HTML stands for.
2. State what CSS is used for.
3. State what HTML is used for.
4. State where a server-side script runs.
5. State where a client-side script runs.
6. Give one use of server-side scripting.
7. Give one use of client-side scripting.
8. State what a dynamic web page is.
9. Explain why a form check done only in the browser is not enough for security.
10. State one benefit of keeping style rules apart from the HTML.

**Answers:**
1. Hypertext Markup Language.
2. To change the style of a web page, such as colours, fonts and alignment.
3. To create the structure of a web page.
4. On the web server.
5. In the user's browser.
6. For example looking up data in a database to build the page.
7. For example checking a form before it is sent, or making a menu interactive.
8. A page that is generated when it is requested, so its content can be different each time.
9. The user can see, change or switch off the script, so the check must be repeated on the server.
10. For example one rule can change the look of every page, or the HTML stays cleaner.

## Related resources

- [Key concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts/)
- [Key concepts practice questions](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts-practice/)
- [Hypertext Markup Language (HTML) revision notes](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html-revision-notes/)
