---
title: "Cambridge IGCSE Computer Science (0478): The internet and the world wide web -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 5.1: URLs, HTTPS, browsers, DNS, web servers and cookies."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [The internet and the world wide web study guide](/resources/cambridge-igcse-computer-science-0478-internet-and-world-wide-web/) and [The internet and the world wide web revision notes](/resources/cambridge-igcse-computer-science-0478-internet-and-world-wide-web-revision-notes/)

---

## Section A

**1.** State what is meant by the **world wide web**. **[1]**

**2.** Identify the protocol, the domain name and the web page name in this URL: `https://www.pennylane.example/shop/hats.html` **[3]**

**3.** State the main purpose of a web browser. **[1]**

**4.** State **two** functions of a web browser other than displaying web pages. **[2]**

**5.** State what the abbreviation DNS stands for. **[1]**

**6.** State what happens to a session cookie when the user closes the browser. **[1]**

## Section B

**7.** Explain the difference between the internet and the world wide web. **[3]**

**8.** Explain **two** differences between HTTP and HTTPS. **[4]**

**9.** Describe how a web page is retrieved and displayed when a user enters a URL. **[5]**

**10.** A user types `www.pennylane.example` but the browser only knows IP addresses. Explain why a DNS is needed. **[2]**

**11.** A customer fills an online basket with three items, goes to look at other pages, then returns to the basket. Explain how a cookie allows the basket to be remembered. **[3]**

**12.** Describe **two** differences between session cookies and persistent cookies. **[4]**

**13.** A user says: "I always see the padlock, so every page I visit is completely safe." Explain why this statement is not correct. **[2]**

**14.** A shopping website stores the user's login details in a cookie. Discuss one benefit and one risk of this. **[4]**

---

## Answers

**1.** The collection of websites and web pages that are accessed using the internet [1].

**2.** Protocol: `https` [1]. Domain name: `www.pennylane.example` [1]. Web page name: `hats.html` (accept `/shop/hats.html`) [1].

**3.** To render HTML and display web pages [1].

**4.** Any two from: storing bookmarks / favourites, recording user history, allowing use of multiple tabs, storing cookies, providing navigation tools, providing an address bar [1 each].

**5.** Domain name server [1].

**6.** It is deleted [1].

**7.** The internet is the infrastructure, the worldwide network of connected networks and hardware [1]. The world wide web is the collection of websites and web pages [1] that are accessed using the internet [1]. Accept: the internet also carries other services such as email, which are not part of the web.

**8.** HTTP sends data unencrypted, whereas HTTPS encrypts the data [1] so it cannot be understood if intercepted [1]. HTTPS uses the SSL security protocol, but HTTP has no security protocol [1]. A URL using HTTPS starts with https:// and one using HTTP starts with http:// [1]. Accept: HTTPS is used for payments and logins, HTTP for pages without personal data.

**9.** Any five from: the browser sends the domain name to the DNS [1]; the DNS finds the matching IP address [1]; the IP address is returned to the browser [1]; the browser sends a request to the web server at that IP address [1]; the web server sends the HTML for the page to the browser [1]; the browser renders the HTML and displays the page [1].

**10.** The DNS stores domain names and their matching IP addresses [1]. It converts the name the user typed into the IP address the browser needs to contact the web server [1].

**11.** The website stores a (session) cookie on the user's device holding the basket contents [1]. When the user returns to the basket, the browser sends the cookie to the website [1], which reads it and displays the three items [1].

**12.** A session cookie is deleted when the browser is closed [1], but a persistent cookie stays on the device until it expires or is deleted [1]. A session cookie is used for short-term things such as a shopping cart [1], whereas a persistent cookie is used for things that need remembering between visits, such as login details [1].

**13.** The padlock shows that the connection between the browser and the server is encrypted [1]. It does not show that the website is trustworthy, or that the user's device is free from malware, so a website could still be fraudulent [1].

**14.** Benefit: the user does not have to type the login details each visit, which saves time [1]; the site can show personalised content straight away [1]. Risk: if someone else uses the device, or the cookie is stolen, they could log in as the user [1]; the stored details could be accessed by spyware [1]. Maximum 4 (accept one developed benefit and one developed risk).

---

## Where marks are usually lost

- Question 2: giving the full URL as the "web page name".
- Question 7: saying "the internet is the web" or describing the web as the hardware.
- Question 8: one-sided differences, such as "HTTPS is secure" with no comparison.
- Question 9: leaving out the DNS or the IP address.
- Question 10: saying the DNS "stores the website".
- Question 12: describing only session cookies.
- Question 13: saying a padlock makes the website "legal" or "virus-free".

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| Internet | Infrastructure |
| World wide web | Websites and pages |
| HTTPS | Encrypted using SSL |
| DNS | Domain name to IP address |
| Session cookie | Deleted when the browser closes |
