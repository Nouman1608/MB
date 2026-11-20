---
title: "Cambridge O Level Computer Science (2210): The internet and the world wide web"
seoTitle: "Cambridge O Level CS 2210 Internet and Web Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 5 – The internet and its uses"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 5.1
syllabusTopics:
  - qualification: "o-level"
    topic: "the-internet-and-its-uses-2210"
  - qualification: "o-level"
    topic: "the-internet-and-its-uses-2210"
    subtopic: "the-internet-and-the-world-wide-web-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 5.1: the internet and the web, URLs, HTTP and HTTPS, web browsers, how a web page is located and displayed, and cookies."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 5.1 of Cambridge O Level Computer Science 2210 has six learning statements. Candidates should understand the difference between the **internet** and the **world wide web**; understand what a **uniform resource locator (URL)** is; describe the purpose and operation of **HTTP and HTTPS**; explain the purpose and functions of a **web browser**; describe how **web pages are located, retrieved and displayed** when a user enters a URL; and explain what **cookies** are and how they are used. This guide covers each in order.

## Part 1: the internet and the world wide web

People often use these two words as if they were the same thing. They are not.

| | The internet | The world wide web |
|---|---|---|
| What it is | The **infrastructure**: a huge worldwide network of connected networks, with the cables, routers and servers that join them | The **collection of websites and web pages** that are accessed using the internet |
| Analogy | The roads and the vehicles | The shops and buildings that you visit by road |
| Other services using it | Email, file transfer, video calls, online games | Web pages only |

The web uses the internet, but the internet carries more than the web. Email, for example, travels across the internet but is not part of the web.

## Part 2: uniform resource locators (URLs)

A **URL** is a text-based address for a web page. Typing the URL into a browser tells the browser which page to fetch. A URL can contain three parts:

- the **protocol**;
- the **domain name**;
- the **web page or file name**.

Take this example:

```
https://www.marlbridge-demo.example/shop/prices.html
```

| Part | Value | Meaning |
|---|---|---|
| Protocol | https | The set of rules used to transfer the page (here HTTPS) |
| Domain name | www.marlbridge-demo.example | The name of the web server holding the site |
| Path and file name | /shop/prices.html | The folder and the page being requested |

A domain name is easier for people to remember than the number the computer actually uses, which is why domain names exist.

## Part 3: HTTP and HTTPS

A **protocol** is an agreed set of rules for communication.

### HTTP

**Hypertext transfer protocol (HTTP)** is the protocol used to transfer web pages between a web server and a browser.

How it operates:

1. The browser sends an **HTTP request** to the web server asking for a page.
2. The web server sends back an **HTTP response** containing the page, or a message that it cannot be found.
3. The browser then displays the page.

HTTP sends data as plain text. Anyone who intercepts it can read it, so it is unsuitable for passwords or card numbers.

### HTTPS

**Hypertext transfer protocol secure (HTTPS)** works in the same way, but the data is **encrypted** using a security protocol (SSL). Interceptors see only meaningless data. HTTPS also lets the browser check that the website is genuine before the data is sent. It is used where sensitive data is sent, such as online banking, shopping and logging in. A padlock symbol in the address bar is a common sign that HTTPS is in use.

| | HTTP | HTTPS |
|---|---|---|
| Purpose | Transfers web pages | Transfers web pages securely |
| Data | Not encrypted | Encrypted |
| Suitable for passwords and payments? | No | Yes |
| URL begins | http:// | https:// |

## Part 4: web browsers

A **web browser** is application software used to view web pages. Its main purpose is to **render hypertext markup language (HTML)** and display web pages. **HTML** is the language in which a page's content and structure are written. The browser reads the HTML and turns it into the page you see, with headings, text, images and links.

Functions in the syllabus:

| Function | What it does |
|---|---|
| Storing bookmarks and favourites | Keeps the addresses of pages the user wants to return to |
| Recording user history | Keeps a list of pages visited so the user can go back to them |
| Allowing use of multiple tabs | Lets several pages be open in one window |
| Storing cookies | Saves small files sent by websites |
| Providing navigation tools | Back, forward, refresh and home buttons |
| Providing an address bar | A box where a URL is typed or displayed |

## Part 5: how a web page is located, retrieved and displayed

The role of the web browser, IP addresses, the domain name server (DNS), the web server and HTML all appear in this process. Follow the steps in order.

1. The user types a URL, such as `https://www.marlbridge-demo.example/index.html`, into the **web browser**.
2. The browser needs the **IP address** of the web server. An IP address is the number that identifies a device on a network. Browsers cannot use a domain name directly, so the browser sends the domain name to a **domain name server (DNS)**.
3. The DNS looks up the domain name in its records and returns the matching **IP address**. If it does not have the record, it asks another DNS.
4. The browser sends an **HTTP or HTTPS request** to the IP address, asking for the page.
5. The **web server** finds the requested page and sends it back to the browser as **HTML** (together with any images and other files).
6. The browser **renders** the HTML and displays the web page on the screen.

A short way to remember the chain: **URL, DNS, IP address, request, web server, HTML, display**.

If the DNS cannot find the domain name, the browser shows an error. If the server cannot find the file, the error is about the missing page.

## Part 6: cookies

A **cookie** is a small text file that a website stores on the user's device through the web browser. The next time the user visits the site, the browser sends the cookie back, so that the site can recognise the user.

### Session cookies and persistent cookies

| | Session cookie | Persistent cookie |
|---|---|---|
| Stored | In temporary memory | On the device's storage |
| Lifetime | Deleted when the browser is closed | Remains until it reaches its expiry date or is deleted |
| Example use | Holding items in an online shopping cart during a visit | Remembering a login or preferred language for next time |

### What cookies are used for

- **Saving personal details**, such as a name or address in a form, so the user does not retype them.
- **Tracking user preferences**, such as language, layout or items browsed, so the site can customise itself or suggest products.
- **Holding items in an online shopping cart** while the user browses.
- **Storing login details** so that the user stays logged in.

Cookies are not programs and do not carry viruses. However, persistent cookies can be used to track a person's browsing, and this raises privacy concerns.

## Worked example

**Question:** Describe how a web page is retrieved and displayed when a user enters a URL. [5]

> The user types the URL into the web browser [1]. The browser sends the domain name to a domain name server (DNS) [1], which returns the IP address of the web server [1]. The browser sends a request to that IP address [1], and the web server sends back the web page as HTML, which the browser renders and displays [1].

## Common mistakes

- **Saying the internet and the world wide web are the same.** One is the infrastructure; the other is the web pages.
- **Saying HTTPS "stops hackers".** It encrypts the data so it is meaningless if intercepted.
- **Thinking a web browser is the same as a search engine.** A browser displays pages. A search engine is a website that finds them.
- **Forgetting the DNS step.** The browser needs the IP address before it can send the request.
- **Describing a cookie as a virus or program.** It is a small text file.
- **Mixing session and persistent cookies.** Session cookies disappear when the browser closes.

## Exam technique

- **Internet versus web:** use the words "infrastructure" and "collection of websites and web pages".
- **URL parts:** name all three: protocol, domain name and file name.
- **HTTP versus HTTPS:** say that HTTPS encrypts the data.
- **Locating a page:** write the steps in order and name the browser, DNS, IP address, web server and HTML.
- **Cookies:** give a use and say whether it is a session or persistent cookie.

## Quick check

1. What is the role of the DNS? *It converts the domain name into the IP address of the web server.*
2. What language does a browser render? *HTML.*
3. Name the three parts of a URL. *Protocol, domain name and web page or file name.*
4. Give one difference between HTTP and HTTPS. *HTTPS encrypts the data; HTTP does not.*
5. What happens to a session cookie when the browser is closed? *It is deleted.*

## Continue with

Revise with the [The internet and the world wide web revision notes](/resources/cambridge-o-level-computer-science-2210-the-internet-and-the-world-wide-web-revision-notes/) and practise with the [The internet and the world wide web practice questions](/resources/cambridge-o-level-computer-science-2210-the-internet-and-the-world-wide-web-practice/).
