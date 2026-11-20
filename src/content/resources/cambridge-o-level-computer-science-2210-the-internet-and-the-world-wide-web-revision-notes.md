---
title: "Cambridge O Level Computer Science (2210): The internet and the world wide web -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Internet and Web Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 5.1: internet versus web, URLs, HTTP and HTTPS, browser functions, how a page is retrieved, cookies and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 5.1, The internet and the world wide web. For the full step-by-step explanation and a model answer, use the [The internet and the world wide web study guide](/resources/cambridge-o-level-computer-science-2210-the-internet-and-the-world-wide-web/).

## Syllabus checklist

- The difference between the internet and the world wide web.
- What a uniform resource locator (URL) is.
- The purpose and operation of HTTP and HTTPS.
- The purpose and functions of a web browser.
- How web pages are located, retrieved and displayed when a user enters a URL, including the role of the browser, IP addresses, the DNS, the web server and HTML.
- What cookies are and how they are used, including session and persistent cookies.

## Key terms

| Term | Definition |
|---|---|
| Internet | The infrastructure: the worldwide network of connected networks |
| World wide web | The collection of websites and web pages accessed using the internet |
| URL | A text-based address for a web page |
| Protocol | An agreed set of rules for communication |
| HTTP | Hypertext transfer protocol: transfers web pages |
| HTTPS | HTTP with encryption (SSL) so that data is sent securely |
| Web browser | Software that renders HTML and displays web pages |
| HTML | Hypertext markup language: the language web pages are written in |
| IP address | The number that identifies a device on a network |
| Domain name server (DNS) | Converts a domain name into an IP address |
| Web server | A computer that stores web pages and sends them when requested |
| Cookie | A small text file stored on the user's device by a website |

## Internet versus web

| Internet | World wide web |
|---|---|
| The infrastructure (cables, routers, servers) | The websites and web pages |
| Carries email, file transfer, web pages and more | Is accessed using the internet |

One line to remember: the web runs on the internet, but the internet is more than the web.

## URL structure

`https://www.example-shop.test/sale/shoes.html`

| Part | Example |
|---|---|
| Protocol | https |
| Domain name | www.example-shop.test |
| Web page or file name | /sale/shoes.html |

## HTTP versus HTTPS

| | HTTP | HTTPS |
|---|---|---|
| Purpose | Transfers web pages | Transfers web pages securely |
| Data encrypted? | No | Yes (SSL) |
| Use | General pages | Banking, shopping, logins |
| Sign | http:// | https:// and a padlock |

Operation: the browser sends a **request**; the web server sends a **response** containing the page.

## Browser functions

- Rendering HTML to display pages (the main purpose).
- Storing bookmarks and favourites.
- Recording the history of pages visited.
- Allowing multiple tabs.
- Storing cookies.
- Providing navigation tools (back, forward, refresh).
- Providing an address bar.

## Locating and displaying a page: the steps

1. User enters the URL in the **browser**.
2. Browser sends the domain name to the **DNS**.
3. DNS returns the **IP address** of the web server.
4. Browser sends a **request** to that IP address.
5. **Web server** sends the page back as **HTML**.
6. Browser **renders** the HTML and displays the page.

Memory aid: **U**RL, **D**NS, **I**P, **R**equest, **S**erver, **H**TML, **D**isplay.

## Cookies

| | Session cookie | Persistent cookie |
|---|---|---|
| Lifetime | Deleted when the browser is closed | Stays until it expires or is deleted |
| Typical use | Shopping cart during a visit | Remember login or preferences |

Uses (from the syllabus):

- saving personal details;
- tracking user preferences;
- holding items in an online shopping cart;
- storing login details.

Concern: persistent cookies can build a record of the sites a person visits, which affects privacy.

## Answer templates

**Difference between the internet and the web (2 marks):** the internet is the infrastructure; the web is the collection of websites and web pages that are accessed using it.

**Describe HTTPS (3 marks):** used to transfer web pages; encrypts the data using a security protocol; so that interceptors cannot read it.

**Describe how a page is retrieved (5 marks):** URL entered in the browser; DNS finds the IP address; request sent to the web server; server returns HTML; browser renders it.

**Explain how a cookie is used (3 marks):** small text file stored by the website; the browser sends it back on the next visit; the site can recognise the user and, for example, keep items in the cart.

## Exam traps

- **"The internet is the web".** Keep them separate.
- **Missing the DNS.** The DNS converts the domain name to an IP address, so it must be in the answer.
- **"HTTPS is a different website".** It is the same page sent using a secure protocol.
- **Cookie as a program.** It is a text file, and cannot run.
- **"A browser finds web pages".** The browser requests and displays them. The search engine and the DNS do other jobs.
- **Writing "the web server renders the page".** The browser renders the HTML.

## Self-test

1. Which of the internet and the web is the infrastructure?
2. Name the three parts a URL can contain.
3. What does HTTP stand for?
4. Give one way HTTPS differs from HTTP.
5. What is the main purpose of a web browser?
6. Name two functions of a web browser other than displaying pages.
7. What does a DNS do?
8. What does the web server send to the browser?
9. What is a cookie?
10. How does a session cookie differ from a persistent cookie?
11. Give two uses of cookies.
12. Why might some users be concerned about persistent cookies?

**Answers**

1. The internet.
2. Protocol, domain name and web page or file name.
3. Hypertext transfer protocol.
4. HTTPS encrypts the data; HTTP does not.
5. To render HTML and display web pages.
6. Any two: store bookmarks and favourites; record history; allow multiple tabs; store cookies; provide navigation tools; provide an address bar.
7. It converts a domain name into the IP address of the web server.
8. The web page as HTML (with its images and other files).
9. A small text file stored on the user's device by a website.
10. A session cookie is deleted when the browser closes; a persistent cookie stays until it expires or is deleted.
11. Any two: save personal details; track preferences; hold items in a shopping cart; store login details.
12. They can be used to track what sites a person visits, which affects privacy.
