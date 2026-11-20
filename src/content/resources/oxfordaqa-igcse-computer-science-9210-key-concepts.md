---
title: "OxfordAQA IGCSE Computer Science (9210): Key concepts of web page design -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Web Design Key Concepts Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.8.1: HTML for structure, CSS for style, server-side scripting and client-side scripting."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.8.1 Key concepts** of OxfordAQA International GCSE Computer Science (9210), the first
section of Topic 8, Web page design. You must **know that web pages can be constructed using HTML and CSS**; that **HTML
is used to create the structure of a web page and CSS can be used to change its style**; that **server-side scripting
languages** can be used on a web server for the **dynamic generation of web pages**; and that **client-side scripting
languages** can be used to **add additional functionality** to web pages. The detail of HTML tags and CSS rules is in the
[HTML study guide](/resources/oxfordaqa-igcse-computer-science-9210-hypertext-markup-language-html/).

## How a web page reaches the user

A **web page** is a document that a **web browser** displays. The page lives on a **web server**, which is a computer that
stores web pages and sends them on request. The steps are:

1. The user types an address or clicks a link, and the **browser sends a request** to the web server.
2. The server finds, or builds, the page and **sends it back** as a response.
3. The browser **reads the page and displays it** on the screen.

The computer that makes the request (the user's computer and its browser) is called the **client**. The computer that
answers is the **server**. This is the client-server model. The ideas of server-side and client-side scripting depend on
knowing **where** a program runs.

## HTML: the structure of a page

**HTML** stands for **Hypertext Markup Language**. It is not a programming language. It is a **markup language**: it
uses **tags** to mark up the content of a page and say what each part **is**. For example, one tag says "this is a
heading", another says "this is a paragraph", another says "this is a list" and another says "this is a link to
another page".

HTML is used to create the **structure** of a web page. It decides the parts of the page and their order, and the meaning
of each part. It does not decide how those parts look; that is the job of CSS.

Here is a very small page.

```
<html>
<head>
<title>My page</title>
</head>
<body>
<h1>Welcome</h1>
<p>This is my first page.</p>
</body>
</html>
```

The browser shows a large heading, "Welcome", and a paragraph below it. The text in the title appears on the browser tab.

## CSS: the style of a page

**CSS** stands for **Cascading Style Sheets**. It is used to **change the style** (the appearance) of a page: colours, fonts,
sizes, alignment and so on. A **style rule** says that elements of a certain kind should have a certain style.

```
h1 {
  color: blue;
  text-align: center;
}
```

This rule makes every level one heading blue and centred, without changing the structure at all.

### Why are HTML and CSS kept separate?

Keeping **structure** (HTML) apart from **style** (CSS) has benefits.

- **Consistency:** one rule changes the look of every heading on every page.
- **Easier changes:** to change the colour scheme you edit the style rules and leave the content alone.
- **Cleaner pages:** the HTML stays short and easy to read.
- **Accessibility:** structure that says what each part is helps software, such as screen readers, to present the page.

A good short statement to remember is: **HTML says what it is; CSS says what it looks like.**

| | HTML | CSS |
|---|---|---|
| Stands for | Hypertext Markup Language | Cascading Style Sheets |
| Job | Creates the **structure** of the page | Changes the **style** of the page |
| Example | "This is a heading" | "Headings are blue and centred" |

## Static and dynamic pages

A **static** web page is stored on the server as a ready-made file. Every visitor receives exactly the same page. A
**dynamic** web page is **generated** when it is requested, so its content can be different for each visitor or each
time. Dynamic pages are made using scripting.

## Server-side scripting

**Server-side scripting** means that a program runs **on the web server**, when the page is requested. The script works out
what the page should contain and **creates the HTML**, and the server sends the **result** to the browser. The user does not
see the script itself, only the page that it produced.

The specification says that server-side scripting languages "can be used on a web server for dynamic generation of web
pages". Examples of what server-side scripts do:

- Look up data in a **database** and put it in the page, such as a list of products or a user's order history.
- Show **personalised content** after a user has logged in, such as "Welcome back, Asha".
- **Process a form** that has been submitted, such as saving a new account or checking a password.
- Make a page that shows **the latest** news, scores or stock levels.

*Worked example.* A user logs in to a school website. The browser sends the username and password to the server. A
server-side script checks them against the database, and, if they are correct, builds a page that shows that student's
timetable. A different student sees a different page, made from the same script.

**Advantages of server-side scripting:**

- Data and code stay on the server, which is **more secure**: the user cannot read the script or change the
  checking.
- It can use the server's **database** and files.
- It works for **every browser**, because the browser only receives HTML.

**Disadvantages:**

- The server has to do the work for **every request**, which can slow it down when many people use the site.
- The page must be **sent back and forth** for each action, so there can be a delay.

## Client-side scripting

**Client-side scripting** means that a program is sent to the browser and runs **on the user's computer** (the client). The
specification says that client-side scripting languages "can be used to add additional functionality to web pages".
A widely used client-side language is JavaScript.

Examples of what client-side scripts do:

- **Check a form before it is sent**, such as telling the user at once that an email address is missing an @ sign.
- Make a page **interactive**: menus that open, images that change when the mouse moves over them, a clock that updates.
- **Update part of a page** without loading a new page.
- Show **animations** and simple games.

*Worked example.* A user types a birthday into a form. A client-side script checks that the month is between 1 and 12 and
shows an error message straight away, before anything is sent to the server.

**Advantages of client-side scripting:**

- **Fast response:** it does not have to wait for the server.
- It **reduces the load** on the server and the amount of data sent.
- It lets pages be **interactive** and more useful.

**Disadvantages:**

- The script is sent to the user, so it can be **read, changed or switched off**. A client-side check cannot be trusted
  on its own for security, so important checks are repeated on the server.
- The result depends on the user's **browser and settings**, and the script cannot reach the server's database
  directly.

## Comparing the two

| | Server-side scripting | Client-side scripting |
|---|---|---|
| Where it runs | On the web server | In the user's browser |
| What the browser receives | The finished HTML page | The page plus the script |
| Main purpose | **Dynamic generation** of pages, using data from the server | **Additional functionality** and interactivity in the page |
| Typical uses | Database look-ups, logins, processing forms | Checking input, menus, animation |
| Can the user see the script? | No | Yes |
| Speed of response | Needs a trip to the server | Immediate |

The two are often used **together**. A form might be checked by a client-side script for quick feedback, and then checked
again, and processed and stored, by a server-side script.

## Worked example: choose the right kind of scripting

For each task, state whether server-side or client-side scripting is more suitable, and why.

| Task | Answer | Reason |
|---|---|---|
| Show the user's saved basket when they return to a shop | Server-side | The data is in the shop's database on the server |
| Show a message as soon as a user leaves the password box empty | Client-side | Quick feedback without contacting the server |
| Check that a username is not already taken | Server-side | It needs the list of existing users held on the server |
| Make an image enlarge when the mouse is moved over it | Client-side | It happens in the browser immediately |
| Display the latest football scores from a database | Server-side | The page is generated from data on the server |

## Common mistakes

- Saying that HTML is a **programming language**. It is a **markup language** that describes the structure.
- Saying that CSS "makes the page" or "adds content". CSS controls the **appearance**.
- Mixing up **structure** (HTML) and **style** (CSS).
- Saying that server-side scripts run **in the browser**. They run on the **server**.
- Saying that client-side scripting is **always** better because it is faster. Security checks need the server.
- Saying that the user can **see** the server-side script. They see only the page that it produced.
- Describing **dynamic** only as "moving". Dynamic means that the page is **generated** and can differ.
- Forgetting to say **where** the code runs when explaining the difference.
- Writing HTML as an abbreviation without spelling out **Hypertext Markup Language**.

## Exam technique

- **State/know** questions: give short, exact statements, such as "HTML creates the structure of a web page; CSS changes its
  style".
- **Difference** questions: say where each type of script runs and what each is used for.
- **Choose a method** questions: link the choice to the data needed (server-side) or the instant response needed
  (client-side).
- **Describe** dynamic pages: say that the page is **generated** when it is requested, using data.
- Use the words **client**, **server**, **browser** and **request** where they fit.

## Next steps

For a condensed summary and a self-test, use the [Key concepts revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts-revision-notes/), and practise with the [Key
concepts practice questions](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts-practice/).
