---
title: "Cambridge O Level Computer Science (2210): The internet and the world wide web -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Internet and Web Questions"
resourceType: "practice-questions"
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
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 5.1: internet and web, URLs, HTTP and HTTPS, browsers, DNS, web servers and cookies."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [The internet and the world wide web study guide](/resources/cambridge-o-level-computer-science-2210-the-internet-and-the-world-wide-web/) and [The internet and the world wide web revision notes](/resources/cambridge-o-level-computer-science-2210-the-internet-and-the-world-wide-web-revision-notes/)

---

## Section A

**1.** State what is meant by the internet. **[1]**

**2.** State what is meant by the world wide web. **[1]**

**3.** State what the letters HTML stand for. **[1]**

**4.** State the purpose of a domain name server (DNS). **[1]**

**5.** Name the type of software that is used to view web pages. **[1]**

**6.** Give **one** function of a web browser, other than displaying web pages. **[1]**

**7.** State what is meant by a cookie. **[1]**

## Section B

**8.** Explain the difference between the internet and the world wide web. **[2]**

**9.** The URL of a web page is: https://www.riverside-school.example/news/events.html

**(a)** State the protocol. **[1]**

**(b)** State the domain name. **[1]**

**(c)** State the web page name. **[1]**

**10.** Describe the purpose and operation of HTTP. **[3]**

**11.** An online bank uses HTTPS.

**(a)** Explain why HTTPS is more suitable for the bank than HTTP. **[3]**

**(b)** State **one** sign that a web page is using HTTPS. **[1]**

**12.** Describe the steps that take place from the moment a user types a URL into a browser until the page is displayed. **[5]**

**13.** A user visits an online shop and adds three items to a shopping basket. The shop uses a session cookie.

**(a)** State what happens to a session cookie when the browser is closed. **[1]**

**(b)** Explain how the session cookie helps the shop. **[2]**

**14.** An online newspaper uses a persistent cookie.

**(a)** State **two** things that the newspaper's website could use the cookie to store. **[2]**

**(b)** Explain **one** difference between a persistent cookie and a session cookie. **[2]**

**15.** Explain why a user might be concerned about the use of persistent cookies. **[2]**

**16.** A student says: "The browser finds the web server by sending the URL straight to it." Explain why the student is wrong. **[3]**

---

## Answers

**1.** The worldwide infrastructure (network of connected networks) that carries data [1].

**2.** The collection of websites and web pages that are accessed using the internet [1].

**3.** Hypertext markup language [1].

**4.** To find / return the IP address that matches a domain name [1].

**5.** A web browser [1].

**6.** Any one: storing bookmarks or favourites; recording the user's history; allowing multiple tabs; storing cookies; providing navigation tools; providing an address bar [1].

**7.** A small text file that a website stores on the user's device (through the browser) [1].

**8.** The internet is the infrastructure / the network of connected networks [1], while the world wide web is the collection of websites and web pages that are accessed using the internet [1].

**9. (a)** https [1].
**(b)** www.riverside-school.example [1].
**(c)** events.html [1].

**10.** HTTP is the protocol (set of rules) used to transfer web pages [1]. The browser sends a request to the web server for a page [1]. The web server sends back a response containing the page [1].

**11. (a)** HTTPS encrypts the data that is sent [1]. Banking data such as passwords and account details would be meaningless to anyone who intercepted it [1]. HTTP sends the data as plain text, which could be read by an interceptor [1].
**(b)** Any one: the URL begins with https; a padlock symbol is shown in the address bar [1].

**12.** The user enters the URL in the web browser [1]. The browser sends the domain name to a domain name server (DNS) [1]. The DNS returns the IP address of the web server [1]. The browser sends a request to the web server at that IP address [1]. The web server sends the page back as HTML and the browser renders it and displays the page [1].

**13. (a)** It is deleted [1].
**(b)** The cookie holds the items in the basket while the user browses the site [1], so the items are still in the basket when the user moves between pages / goes to the checkout [1].

**14. (a)** Any two: personal details; user preferences, such as the language or layout; login details; items the user has viewed [1 each].
**(b)** A persistent cookie stays on the device until it expires or is deleted, even after the browser is closed [1], whereas a session cookie is deleted when the browser is closed [1].

**15.** Persistent cookies can record the sites a person visits over a long period [1]. This information could be used to track the person or to build a profile without their clear consent, which affects privacy [1].

**16.** A browser cannot send a request to a domain name or URL directly; it needs the IP address of the web server [1]. The browser first sends the domain name to a DNS [1], which looks up and returns the IP address [1].

---

## Where marks are usually lost

- Question 1 and Question 2: describing them in the same way. Use "infrastructure" for the internet and "websites and web pages" for the web.
- Question 9: giving the whole URL again instead of the part that was asked for.
- Question 10: describing what HTTP is for but not how the request and response work.
- Question 11: writing "HTTPS is more secure" without saying the data is encrypted.
- Question 12: missing the DNS or the IP address, or saying that the web server displays the page.
- Question 13: describing a persistent cookie, or forgetting to say how the cookie helps the shop.
- Question 14: giving two examples of the same kind of data.
- Question 16: saying "the browser uses the DNS" without saying that the DNS returns an IP address.

## Checking a "describe the steps" answer

Count your marks against the six stages: URL entered, domain name sent to the DNS, IP address returned, request sent, HTML returned, page rendered. If your answer has fewer stages than marks, add the missing one.
