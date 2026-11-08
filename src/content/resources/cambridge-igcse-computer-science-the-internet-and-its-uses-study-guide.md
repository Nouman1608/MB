---
title: "Cambridge IGCSE Computer Science (0478): The internet and its uses -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 5: The internet and its uses"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 5
syllabusTopics:
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
description: "IGCSE study guide to the internet and World Wide Web, URLs, DNS, HTTPS, cookies, digital currency, blockchain and cyber security for Cambridge 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Most people use the internet every day without thinking about how it works. This topic explains the difference between the internet and the World Wide Web, what happens between typing an address and seeing a page, how cookies and digital currency work, and which threats you face online and how to defend against them. Questions reward clear definitions and the ability to apply them to a short scenario.

## Where this fits in the syllabus

Topic 5 of Cambridge IGCSE Computer Science (0478) is examined on Paper 1 (Computer Systems). It builds on the data transmission topic, which introduces packets, protocols and encryption, and it leads into the work on automated and emerging technologies. The three parts are the internet and the World Wide Web, digital currency, and cyber security.

## The internet and the World Wide Web

The **internet** is the global network of interconnected networks. It is the infrastructure: cables, routers and servers carrying data. The **World Wide Web (WWW)** is a collection of web pages and other resources, stored on web servers and accessed using the internet. The web is one service that runs on the internet; email and file transfer are others. The two words are not interchangeable, and mixing them up is a common error.

### URLs, HTTP and HTTPS

A **uniform resource locator (URL)** is the text address of a web resource. A typical URL has a **protocol** (https), a **domain name** (www.example.com) and often a **path** and file name (/shop/boots.html). **HTTP** (hypertext transfer protocol) is the protocol browsers and servers use to request and send pages. **HTTPS** is the secure version, which encrypts the data using SSL/TLS, so anything intercepted is unreadable. Look for https and a padlock when entering personal details. The padlock shows the connection is encrypted; it does not prove the site is honest.

### Web browsers and the DNS

A **web browser** is application software that requests web pages, interprets the HTML and other code, and displays the result. It also stores bookmarks and history, can hold cookies and may run several tabs.

Computers find each other using **IP addresses**, which are numbers, but people use names. The **domain name system (DNS)** translates a domain name to an IP address. The steps:

1. The user types a URL into the browser.
2. The browser sends the domain name to a **DNS server**.
3. The DNS server looks the name up in its database. If it does not hold the name it asks other DNS servers.
4. The IP address is returned to the browser.
5. The browser sends a request to the web server at that IP address, and the web server sends back the page, which the browser displays.

### Cookies

A **cookie** is a small text file stored on the user's device by a website. A **session cookie** is held in memory and deleted when the browser closes; it can keep items in a shopping basket while you browse. A **persistent cookie** is stored on the device until it expires or is deleted. It can remember login details or preferences, and it can store information used to tailor advertising. Cookies can track browsing habits, so they raise privacy questions. A cookie is a file of data; it cannot run as a program, which is why it is not a virus.

## Digital currency

A **digital currency** exists only in electronic form and has no physical coins or notes. Most digital currencies are **cryptocurrencies**, which use encryption to secure transactions and are not issued by a central bank. They are tracked using a **blockchain**.

A **blockchain** is a digital ledger of transactions held as a chain of **blocks**. Each block holds a group of transactions, a **timestamp** and a **hash** of the previous block, and its own hash is calculated from its contents. Because every block contains the hash of the one before it, changing any past transaction changes that block's hash and breaks the link in all later blocks, so tampering is easy to detect. A copy of the blockchain is shared across many computers rather than stored centrally. A new block is added only when the network agrees that the transactions are valid. Uses extend beyond digital currency, to tracking goods in a supply chain and keeping records that must not be changed.

## Cyber security

**Cyber security** is the protection of systems, networks and data from attack. Know each threat and a matching defence.

| Threat | What it is | Typical protection |
|---|---|---|
| Brute-force attack | Trying many passwords or keys in turn until one works | Long, complex passwords; limit login attempts; two-factor authentication |
| Data interception | Capturing data in transit, for example with a packet sniffer | Encryption; HTTPS; avoid public Wi-Fi for sensitive tasks |
| Distributed denial of service (DDoS) | Many computers flood a server with requests so real users cannot get through | Firewall, traffic filtering and proxy servers |
| Hacking | Unauthorised access to a computer system | Firewalls, strong passwords, software updates and access rights |
| Malware | Software designed to harm: viruses, worms, trojans, spyware, ransomware, adware | Antivirus and anti-malware, updates, careful downloads |
| Phishing | Fake emails or messages pretending to be from a trusted source to get personal data | Staff training, spam filters, checking sender and links |
| Pharming | Malicious code redirects users to a fake website even when the right URL is typed | Antivirus, checking for https, a trusted DNS |
| Social engineering | Tricking people into giving access or information | Training and clear procedures |

Other defences are keeping software up to date, using access levels, using **biometric** logins and checking links before clicking.

## Worked example 1: how long does a brute-force attack take?

A criminal's software tries 1,000 passwords per second. Compare a 4-digit PIN with a password of six lowercase letters.

- PIN: each digit has 10 possible values, so 10 x 10 x 10 x 10 = 10,000 combinations. At 1,000 per second, the worst case takes 10 seconds.
- Six lowercase letters: each position has 26 options, so 26 to the power 6 = 308,915,776 combinations. At 1,000 per second, that is 308,915.776 seconds. Divide by 3,600 to convert to hours: about 85.8 hours, or roughly 3.6 days.

Adding length or more character types raises the number of combinations enormously. Allowing capitals and digits as well gives 62 options per position, and 62 to the power 6 is 56,800,235,584, which is about 184 times larger than 26 to the power 6. This is why Cambridge-style answers say "longer, with a mix of letters, numbers and symbols", and why limiting login attempts defeats an attack that depends on speed.

## Worked example 2: tracing a page request

Keira types www.lakeviewbooks.example/new into her browser. The browser extracts the domain name www.lakeviewbooks.example and sends it to a DNS server. Suppose the DNS returns 203.0.113.25. The browser then sends an HTTP request to 203.0.113.25 asking for the path /new. The web server sends the HTML file; the browser renders it, and any further files such as images are requested in the same way. If the site used https, the request and response would be encrypted. If Keira had instead been redirected to a copy of the site run by a criminal, that would be pharming. In an answer, give the steps in order and name what is exchanged at each one.

## Common mistakes

- Using "internet" and "web" as if they were the same.
- Saying a cookie is a virus or can run programs.
- Saying a padlock guarantees a site is trustworthy.
- Confusing phishing (a fake message) with pharming (a redirect).
- Describing a DDoS attack as one computer sending the traffic.
- Saying the blockchain makes tampering impossible; it makes it detectable and very hard.

## Exam technique

Command words: **State** and **give** need short facts; **describe** needs a sentence on how it works; **explain** needs a reason. For a threat question name the threat, say how it works and then give a defence that matches it. Do not offer "antivirus" for every threat. In multi-step process questions such as DNS, number the steps and keep them in order.

## Check your understanding

1. State the difference between the internet and the World Wide Web. *The internet is the global network infrastructure; the web is a service of linked pages accessed using the internet.*
2. State what the DNS does. *It converts a domain name into the IP address of the matching web server.*
3. Give one difference between a session cookie and a persistent cookie. *A session cookie is deleted when the browser closes; a persistent cookie stays until it expires or is deleted.*
4. Explain why changing one block in a blockchain is easy to detect. *Each block stores the hash of the previous block, so a change alters that hash and breaks the link in all later blocks.*
5. Describe how a DDoS attack works. *Many devices send a very large number of requests to a server at once, overloading it so genuine users cannot get access.*
6. Give two ways to protect against a brute-force attack. *Use a long, complex password; limit failed login attempts; use two-factor authentication.*
7. State the difference between phishing and pharming. *Phishing uses fake messages to trick the user; pharming redirects to a fake website without the user being tricked by a message.*
8. A PIN has 5 digits. How many combinations are there? *10 to the power 5 = 100,000.*

## Frequently asked questions

**What is the difference between the internet and the World Wide Web?**
The internet is the global network of interconnected networks. The World Wide Web is a collection of web pages and resources stored on web servers and accessed using the internet.

**What is the difference between phishing and pharming?**
Phishing uses fake emails or messages pretending to come from a trusted source. Pharming uses malicious code to redirect users to a fake website even when the correct URL is typed.

**What is the difference between a session cookie and a persistent cookie?**
A session cookie is held in memory and deleted when the browser closes. A persistent cookie stays on the device until it expires or is deleted.

**Why is tampering with a blockchain easy to detect?**
Each block stores the hash of the previous block, so changing a past transaction changes that block's hash and breaks the link in every later block.
