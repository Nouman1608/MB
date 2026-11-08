---
title: "O Level Computer Science: The Internet and Its Uses (Cambridge 2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "The Internet and Its Uses"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 5
syllabusTopics:
  - qualification: "o-level"
    topic: "the-internet-and-its-uses-2210"
description: "Topic 5 study guide for Cambridge O Level Computer Science 2210: the web, URLs, HTTPS, DNS lookups, cookies, blockchain, cyber threats and SSL protection."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 5 of Cambridge O Level Computer Science (2210) explains what happens between typing a web address and seeing a page, how websites remember you, how digital currencies are recorded, and how attackers try to steal or disrupt data — together with the defences that stop them. Paper 1 tests this topic with "describe the process" questions, so this guide focuses on getting each sequence in the right order and naming every component involved.

## Where Topic 5 sits in 2210

Topic 5 belongs to the "Computer systems" half of 2210 and is examined on Paper 1 (1 hour 45 minutes, 75 marks, no calculator). Its content is the same as Topic 5 in Cambridge IGCSE Computer Science (0478). There are three sub-topics: 5.1 The internet and the world wide web, 5.2 Digital currency, and 5.3 Cyber security. It builds on Topic 2 (packets and encryption) and Topic 3 (IP addresses and routers).

## 5.1 The internet and the world wide web

### Two different things

The **internet** is the infrastructure — the cables, routers, servers and connected networks that span the world. The **world wide web** is the collection of websites and web pages that are reached using that infrastructure. Email and online gaming also use the internet without being part of the web, which is a good way to show you understand the difference.

### URLs

A **uniform resource locator (URL)** is a text-based address for a web page. The syllabus says it can contain three parts. Taking `https://www.lakesidemuseum.org/visit/opening-hours.html`:

| Part | In this URL |
|---|---|
| Protocol | `https` |
| Domain name | `www.lakesidemuseum.org` |
| Web page / file name | `opening-hours.html` (inside the `visit` folder) |

### HTTP and HTTPS

**Hypertext transfer protocol (HTTP)** is the set of rules used when a browser requests a web page and a web server sends it. **HTTPS** is the secure version: the same rules, but the data sent is encrypted, so anyone who intercepts it cannot read it. HTTPS is what makes it safe to type a password or card number into a page.

### What a web browser does

The main purpose of a browser is to **render HTML** — turn the HTML code a server sends into the page you see. Its other functions, listed in the syllabus, are storing bookmarks and favourites, recording user history, allowing multiple tabs, storing cookies, providing navigation tools such as back and refresh buttons, and providing an address bar.

### From URL to page

Five parts work together: the **browser**, **IP addresses**, the **domain name server (DNS)**, the **web server** and **HTML**.

1. The user types the URL into the address bar.
2. The browser sends the domain name to the DNS.
3. The DNS searches for the matching IP address. If it does not have it, it passes the request on to another DNS.
4. The IP address is returned to the browser.
5. The browser sends a request for the page to the web server at that IP address.
6. The web server sends back the page's HTML.
7. The browser renders the HTML and displays the page.

### Cookies

A **cookie** is a small text file that a website stores on the user's device through the browser. **Session cookies** are temporary and are deleted when the browser is closed. **Persistent cookies** remain on the device until they expire or the user deletes them. The syllabus lists four uses: saving personal details, tracking user preferences, holding items in an online shopping cart, and storing login details.

## 5.2 Digital currency

A **digital currency** exists only electronically. It is used to pay for goods and services, but there are no coins or notes. Transactions are tracked using **blockchain**. In its basic form, a blockchain is a digital ledger: a time-stamped series of records that cannot be altered. Each new block of transactions is linked to the block before it, and copies of the ledger are held on many computers. Changing an old record would break the link with the next block and would not match the other copies, so tampering is detected.

## 5.3 Cyber security

### Threats: how they work and what they aim to do

| Threat | How it is carried out | Aim |
|---|---|---|
| Brute-force attack | Software tries password after password until one works | Unauthorised access |
| Data interception | Data is captured as it travels, e.g. by a packet sniffer or on unsecured wireless | Steal data in transit |
| DDoS attack | A network of infected computers (botnet) floods a server with requests | Make a service unavailable |
| Hacking | Gaining access to a system without permission | Steal, change or delete data |
| Malware | Virus, worm, Trojan horse, spyware, adware or ransomware is installed | Damage, spy, disrupt or extort |
| Phishing | Fake emails or messages contain links to fake websites | Collect personal details |
| Pharming | Code on a device or DNS redirects a correct URL to a fake site | Collect personal details |
| Social engineering | People are manipulated into revealing information or breaking rules | Gain access through people |

The six types of **malware** differ in how they behave: a **virus** attaches to a file and needs it to be run; a **worm** spreads across a network by itself; a **Trojan horse** pretends to be useful software; **spyware** secretly records what the user does; **adware** shows unwanted adverts; **ransomware** encrypts files and demands payment.

### Solutions

The syllabus names ten: access levels; anti-malware (anti-virus and anti-spyware); authentication (username and password, biometrics, two-step verification); automating software updates; checking the spelling and tone of communications; checking the URL attached to a link; firewalls; privacy settings; proxy servers; and the **secure socket layer (SSL)** security protocol.

SSL is worth learning as a process. When a browser connects to a secure site:

1. The browser asks the web server to identify itself.
2. The server sends a copy of its **digital certificate**.
3. The browser checks the certificate is valid and from a trusted authority.
4. If it is, the browser and server agree to communicate, and an encrypted session begins.
5. Data sent in both directions is now encrypted.

## Worked example 1: buying a train ticket

*A passenger enters card details on a rail company's website. Explain two ways the passenger's data is protected.*

The website uses HTTPS with SSL: before any data is sent the browser checks the server's digital certificate, and then all data is encrypted, so intercepted card details cannot be understood. The rail company's servers are also protected by a firewall that blocks traffic not meeting its rules, reducing the chance of a hacker reaching stored payment data.

## Worked example 2: a ransomware attack on a clinic

*A clinic's computers display a message demanding payment to unlock patient files.* Identify the threat and suggest how it could have been prevented.

This is **ransomware**, a type of malware that encrypts files. Likely routes in are an email attachment or a link. Anti-malware would scan and quarantine the file; automatic software updates would close security holes it could exploit; and staff checking the spelling, tone and URL of suspicious emails would make it less likely to be opened. Backups do not prevent the attack but let the clinic recover without paying.

## How to approach it

Practise the URL-to-page and SSL sequences until you can write each step as one clear sentence. For every threat, learn two facts — the process and the aim — and for every solution, the threat it counters. In scenario questions, choose the defence that matches how the attack works: a firewall does not stop a user typing their password into a phishing site.

## Frequently asked questions

**Does the DNS send me the web page?**
No. The DNS only finds the IP address that matches the domain name. The web page itself comes from the web server.

**What is the difference between phishing and pharming?**
Phishing relies on the user clicking a link in a fake message. Pharming redirects the user to a fake site even when they type the correct URL, so the user does not need to click anything.

**Is HTTPS the same as SSL?**
No. SSL is the security protocol that sets up the encrypted connection; HTTPS is HTTP carried over that secure connection.

**How much do I need to know about blockchain?**
Only the basic form in the syllabus: a time-stamped digital ledger of transactions that cannot be altered, used to track digital currency.

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210) syllabus for examination in 2026, 2027 and 2028*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf), Subject content, section 5 "The internet and its uses" (5.1–5.3). Checked 2026-11-08.

Next steps: condense with the [Internet and its uses revision notes](/resources/o-level-computer-science-internet-and-its-uses-revision-notes/), then try the [Internet and its uses practice questions](/resources/o-level-computer-science-internet-and-its-uses-practice/).
