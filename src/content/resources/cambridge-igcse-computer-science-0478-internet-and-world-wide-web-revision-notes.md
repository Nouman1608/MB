---
title: "Cambridge IGCSE Computer Science (0478): The internet and the world wide web -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 5.1: internet and web, URL parts, HTTP and HTTPS, browser functions, DNS look-up and cookies."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 5.1, The internet and the world wide web. They cover the six content statements: internet against web, URLs, HTTP and HTTPS, browsers, page retrieval and cookies.

## Four facts to start with

1. The **internet** is the infrastructure. The **world wide web** is the collection of web pages accessed using it.
2. A **URL** is a text address; it can contain the protocol, the domain name and the page or file name.
3. **HTTPS** is HTTP with encryption using SSL.
4. A **cookie** is a small file that a website stores on your device to remember information about you.

## Key terms

| Term | Definition |
|---|---|
| Internet | Worldwide network of networks; the infrastructure |
| World wide web | Collection of websites and web pages accessed using the internet |
| URL | Text-based address of a web page |
| Protocol | Set of rules for communication, such as HTTP |
| Domain name | Name of a website's server, such as `www.example.org` |
| HTTP | Hypertext transfer protocol; used to request and send web pages |
| HTTPS | HTTP with encryption (SSL) |
| Web browser | Software that renders HTML and displays web pages |
| HTML | Hypertext markup language; describes the structure and content of a page |
| IP address | Address that identifies a device on a network |
| DNS | Domain name server; finds the IP address that matches a domain name |
| Web server | Computer that stores web pages and sends them when requested |
| Cookie | Small file stored by a browser to hold data about the user |

## Internet versus world wide web

| Internet | World wide web |
|---|---|
| Infrastructure | Websites and pages |
| Hardware, cables, routers, protocols | HTML pages, images, links |
| Also carries email, streaming, games | Viewed with a browser |

## Parts of a URL

`https://www.example.org/science/atoms.html`

| Part | Example |
|---|---|
| Protocol | `https` |
| Domain name | `www.example.org` |
| Web page / file name | `/science/atoms.html` |

## HTTP versus HTTPS

| | HTTP | HTTPS |
|---|---|---|
| Encrypted | No | Yes (SSL) |
| Address starts | `http://` | `https://` |
| Use | General pages | Shopping, banking, logging in |

Operation: browser sends a **request**, server sends a **response** with the HTML. With HTTPS the data in both directions is encrypted.

## Browser functions

- Renders HTML and displays pages (main purpose).
- Stores **bookmarks/favourites**.
- Records **history**.
- Allows **multiple tabs**.
- Stores **cookies**.
- Provides **navigation tools** (back, forward, refresh).
- Provides an **address bar**.

## Retrieving a page in six steps

1. User enters the URL.
2. Browser sends the domain name to the **DNS**.
3. DNS returns the **IP address** (or asks another DNS).
4. Browser sends a request to the **web server** at that IP address.
5. Web server sends the **HTML** back.
6. Browser **renders** the HTML and shows the page.

## Cookies

| | Session cookie | Persistent cookie |
|---|---|---|
| Deleted | When the browser closes | At expiry date or when the user deletes it |
| Typical use | Shopping cart | Login details, preferences |

Uses of cookies: saving personal details, tracking user preferences, holding items in a shopping cart, storing login details.

## Worked example: reading the DNS step

The DNS holds a table of domain names and IP addresses, for example `www.example.org` and `203.0.113.25`. When the browser sends `www.example.org`, the DNS returns `203.0.113.25`. If the DNS does not hold the entry, it asks another DNS. The browser then uses `203.0.113.25` to contact the web server. Without this step the browser would have no IP address to send the request to.

## Worked example: reading a cookie scenario

A news website greets a returning reader by name and remembers they prefer large text. Which cookie type is used and why?

1. The information must survive after the browser is closed and be there on the next visit.
2. A **session cookie** is deleted when the browser closes, so it cannot do this.
3. A **persistent cookie** stays on the device until its expiry date, so it is the correct answer.
4. The cookie's uses here are *saving personal details* (the name) and *tracking user preferences* (large text).

## Exam traps

- **Internet equals web.** They are different; the web uses the internet.
- **DNS stores pages.** It only matches names to IP addresses.
- **HTTPS means a safe website.** It means encrypted transmission.
- **Cookies as viruses.** They are text files and cannot run.
- **Session cookie lasting for weeks.** It ends when the browser closes.
- **Missing the IP address** when describing retrieval.

## Self-test

1. Which is the infrastructure, the internet or the world wide web?
2. Name the three parts a URL can contain.
3. What does HTTPS use to protect data?
4. State the main purpose of a web browser.
5. Give two other functions of a browser.
6. What does a DNS do?
7. What does the web server send back to the browser?
8. What is a cookie?
9. What happens to a session cookie when the browser is closed?
10. Give two uses of cookies.

**Answers**

1. The internet.
2. Protocol, domain name, web page / file name.
3. The secure socket layer (SSL) protocol, which encrypts the data.
4. To render HTML and display web pages.
5. Any two: storing bookmarks, recording history, multiple tabs, storing cookies, navigation tools, an address bar.
6. It finds the IP address that matches a domain name.
7. The HTML for the page (with other files such as images).
8. A small file stored on the user's device by a website to remember information about the user.
9. It is deleted.
10. Any two: saving personal details, tracking preferences, holding shopping cart items, storing login details.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## More on this topic

Read the full explanations in the [The internet and the world wide web study guide](/resources/cambridge-igcse-computer-science-0478-internet-and-world-wide-web/), then try the [The internet and the world wide web practice questions](/resources/cambridge-igcse-computer-science-0478-internet-and-world-wide-web-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 5.1:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
