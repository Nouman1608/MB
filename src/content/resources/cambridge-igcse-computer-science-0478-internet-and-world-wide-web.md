---
title: "Cambridge IGCSE Computer Science (0478): The internet and the world wide web"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 5: The internet and its uses"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 5.1
syllabusTopics:
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
    subtopic: "the-internet-and-the-world-wide-web-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 5.1: internet against world wide web, URLs, HTTP and HTTPS, web browser functions, how a web page is retrieved and cookies."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Section 5.1 of the Cambridge IGCSE Computer Science 0478 syllabus has six content statements. You must **understand the difference between the internet and the world wide web**, **understand what a uniform resource locator (URL) is**, **describe the purpose and operation of HTTP and HTTPS**, **explain the purpose and functions of a web browser**, **describe how web pages are located, retrieved and displayed** when a user enters a URL, and **explain what cookies are and how they are used**, including session and persistent cookies.

This guide takes the six in order and follows one web page request from start to finish.

## The internet and the world wide web

People often use the two words as if they meant the same thing. They do not.

| | The internet | The world wide web (WWW) |
|---|---|---|
| What it is | The **infrastructure**: a huge worldwide network of interconnected networks, made of cables, routers, servers and other hardware | The **collection of websites and web pages** that are accessed using the internet |
| Made of | Hardware and the rules (protocols) that move data | Pages written in HTML, images, videos and other content, stored on web servers |
| Used for | Carrying all kinds of data: web pages, email, file transfer, online games, streaming | Viewing and linking web pages with a web browser |

An easy picture: the internet is the road system and the web is one of the things that travels on it. Email and online gaming also use the internet, but they are not part of the world wide web.

## Uniform resource locator (URL)

A **URL** is a text-based address for a web page. It can contain the **protocol**, the **domain name** and the **web page or file name**.

Take this made-up address:

`https://www.example.org/science/atoms.html`

| Part | Value | Meaning |
|---|---|---|
| Protocol | `https` | The set of rules used to request and send the page |
| Domain name | `www.example.org` | The name of the website's server; it is turned into an IP address by a domain name server |
| Web page / file name | `/science/atoms.html` | The folder and file wanted on that server |

A user types a URL into the browser's address bar or clicks a link that holds one.

## HTTP and HTTPS

**Hypertext transfer protocol (HTTP)** is the protocol used to request web pages and send them from a web server to a browser. It is a set of rules for the conversation between the two.

### Operation of HTTP

1. The browser sends an **HTTP request** to the web server asking for a particular page.
2. The web server finds the page and sends back an **HTTP response** containing the page's HTML and the related files, such as images.
3. The browser receives the data and displays the page.

HTTP sends data as plain text, so someone intercepting the data could read it.

### HTTPS

**Hypertext transfer protocol secure (HTTPS)** is the secure version of HTTP. It uses the **secure socket layer (SSL)** security protocol, so the data sent between the browser and the web server is **encrypted**. If it is intercepted, it cannot be understood without the key.

| | HTTP | HTTPS |
|---|---|---|
| Data | Sent unencrypted | Encrypted |
| Security | Can be read if intercepted | Protected from being read |
| Address begins | `http://` | `https://` |
| Typical use | Pages with no personal data | Online shopping, banking, logins |

In the browser, secure sites usually show a padlock symbol. A padlock means the connection is encrypted. It does not prove that the website is honest.

## The web browser

A **web browser** is software that lets a user view web pages. Its main purpose is to **render hypertext markup language (HTML)** and display web pages. HTML is the language that describes the structure and content of a page, such as headings, paragraphs, links and images. The browser reads the HTML and draws the page on the screen.

The syllabus lists these functions:

| Function | What it does |
|---|---|
| Storing bookmarks and favourites | Keeps the addresses of pages the user wants to return to |
| Recording user history | Keeps a list of pages visited, so the user can go back to them |
| Allowing use of multiple tabs | Lets several pages be open in one window |
| Storing cookies | Keeps small files of data about the user's visits |
| Providing navigation tools | Back, forward, refresh and home buttons for moving between pages |
| Providing an address bar | A box where the user types or sees the URL |

## How a web page is located, retrieved and displayed

The syllabus names five things: the **web browser**, **IP addresses**, the **domain name server (DNS)**, the **web server** and **HTML**.

A web server is identified by an IP address, but people use names such as `www.example.org`, which are easier to remember. The DNS links the two.

### Step-by-step

1. The user types the URL into the browser's address bar.
2. The browser sends the **domain name** to a **domain name server (DNS)**.
3. The DNS looks up the domain name in its records. If it finds the **IP address**, it sends it back to the browser. If it does not know, it asks another DNS.
4. The browser uses the IP address to contact the **web server**, and sends a request (an HTTP or HTTPS request) for the page.
5. The web server sends the page's **HTML** (and other files such as images) back to the browser.
6. The browser **renders** the HTML and displays the web page.

### Worked example

A student types `https://www.example.org/science/atoms.html`.

1. The browser uses the protocol `https`, so the connection will be encrypted.
2. It asks the DNS for the IP address of `www.example.org`. The DNS returns, say, `203.0.113.25`.
3. The browser sends a request to `203.0.113.25` for the file `/science/atoms.html`.
4. The web server sends the HTML for the page and the picture files used on it.
5. The browser renders the HTML and shows the page.

Note that the DNS is used to find the **address of the server**. It does not store the web pages.

## Cookies

A **cookie** is a small text file that a website stores on the user's device through the browser. It lets the website remember information about the user.

### Functions of cookies

- **Saving personal details**, such as a name or address, so forms can be filled in automatically.
- **Tracking user preferences**, such as the language, the layout or the type of goods the user looks at.
- **Holding items in an online shopping cart** while the user continues to browse.
- **Storing login details**, so the user does not have to log in each time.

### Session cookies and persistent cookies

| | Session cookie | Persistent cookie |
|---|---|---|
| Lifetime | Held in memory and deleted when the browser is closed | Stored on the device's storage until the expiry date or until the user deletes it |
| Used for | Shopping carts, remembering which pages were visited in this visit | Keeping a user logged in, remembering preferences between visits |
| Next visit | Not remembered | Remembered |

Cookies are not programs and cannot run or spread like a virus. However, a persistent cookie can be used to track what a user does over time, which raises privacy concerns.

### Worked example: a shopping cart

A customer adds a pair of shoes to an online basket, then looks at other pages. The website stores a **session cookie** holding the basket's contents. When the customer clicks "Basket", the browser sends the cookie back and the site displays the shoes. If the customer closes the browser, the session cookie is deleted and the basket is empty next time. If the site wanted to remember the basket for a week it would use a **persistent cookie**.

## Annotated model answer

**Question:** Describe how a web page is retrieved and displayed when a user types a URL into a browser. [5]

> The browser sends the domain name in the URL to a DNS [1]. The DNS finds the matching IP address and returns it to the browser [1]. The browser uses the IP address to send a request to the web server [1]. The web server sends the HTML for the page back to the browser [1]. The browser renders the HTML and displays the page [1].

**Why it scores 5:** it follows the order of events and names the five items the syllabus lists. A common weaker answer says "the browser goes to the website", which leaves out the DNS and the IP address.

## Common mistakes

- Saying the internet and the world wide web are the same thing.
- Saying the world wide web is "the hardware". That is the internet.
- Describing the DNS as the place where web pages are stored. It stores domain names and their IP addresses.
- Writing that HTTPS makes the website itself safe. It encrypts the data sent between browser and server.
- Calling a cookie a virus or saying it can read other files on the computer.
- Forgetting that session cookies are deleted when the browser closes.
- Giving "history" as the description of cookies. History is a list of visited pages.

## Exam technique

- **Understand the difference** between two terms: define each and make clear which is which.
- **Describe the purpose and operation**: say what it is for, then the steps in order.
- **Explain what is meant by cookies**: give the definition, then a use, then session and persistent types.
- **Describe how a page is retrieved**: use all five named parts in the right order.

## Practise this sub-topic

Use the [The internet and the world wide web revision notes](/resources/cambridge-igcse-computer-science-0478-internet-and-world-wide-web-revision-notes/) for quick recall and the [The internet and the world wide web practice questions](/resources/cambridge-igcse-computer-science-0478-internet-and-world-wide-web-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 5.1 The internet and the world wide web:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
