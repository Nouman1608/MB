---
title: "IGCSE Computer Science: The Internet and Its Uses — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "The internet and its uses"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 5
syllabusTopics:
  - qualification: "igcse"
    topic: "the-internet-and-its-uses"
description: "Revision notes on the internet and WWW, URLs, HTTP/HTTPS, browsers, DNS, cookies, blockchain, cyber threats and security solutions for Cambridge IGCSE CS 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 5 covers how the web works on top of the internet, how a browser finds and displays a page, what cookies and digital currencies are, and how cyber security threats are carried out and defended against. In Cambridge IGCSE Computer Science (0478) it is examined on Paper 1; the cyber security section (5.3) is one of the most heavily tested parts of the paper, and most marks come from describing a process step by step.

Condensed for the final weeks. For full explanations and worked examples, use the
[Internet and its uses study guide](/resources/cambridge-igcse-computer-science-the-internet-and-its-uses-study-guide/); for exam practice, use the
[Internet and its uses practice questions](/resources/igcse-computer-science-internet-and-its-uses-practice/).

## Syllabus coverage

Learning outcomes from the Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028:

| Ref | Learning outcome (summarised) |
|---|---|
| 5.1.1 | Difference between the internet and the world wide web |
| 5.1.2 | What a uniform resource locator (URL) is |
| 5.1.3 | Purpose and operation of HTTP and HTTPS |
| 5.1.4 | Purpose and functions of a web browser |
| 5.1.5 | How web pages are located, retrieved and displayed when a URL is entered |
| 5.1.6 | Cookies: session and persistent, and how they are used |
| 5.2.1 | Concept of digital currency and how it is used |
| 5.2.2 | Blockchain and how it tracks digital currency transactions |
| 5.3.1 | Processes and aims of a range of cyber security threats |
| 5.3.2 | Solutions used to keep data safe from security threats |

## 5.1 The internet and the world wide web

| Term | Key fact |
|---|---|
| Internet | The infrastructure: the global network of connected computers and networks |
| World wide web (WWW) | The collection of websites and web pages accessed using the internet |
| URL | A text-based address for a web page; can contain the protocol, domain name and web page/file name |
| HTTP | Hypertext transfer protocol: the set of rules for transferring web pages between a web server and a browser |
| HTTPS | HTTP secure: the same rules, but the data is encrypted (using SSL) so intercepted data cannot be understood |
| Web browser | Software whose main purpose is to render HTML and display web pages |
| DNS | Domain name server: looks up a domain name and returns the matching IP address |
| Cookie | A small text file stored by the browser on the user's device for a website |

**Browser functions to learn:** storing bookmarks and favourites · recording user history · allowing multiple tabs · storing cookies · providing navigation tools · providing an address bar.

### How is a web page found and displayed? (5.1.5)

1. The user types a URL into the browser's address bar.
2. The browser sends the domain name to a DNS.
3. The DNS finds the matching IP address (asking another DNS if it does not hold it) and returns it to the browser.
4. The browser uses the IP address to send a request to the web server that stores the page.
5. The web server sends the page, written in HTML, back to the browser.
6. The browser renders the HTML and displays the page.

### Session or persistent cookie? (5.1.6)

| | Session cookie | Persistent cookie |
|---|---|---|
| Where stored | Temporary, in memory | Saved on the device's storage |
| When deleted | When the browser is closed | When it expires or the user deletes it |
| Typical use | Holding items in an online shopping cart during one visit | Saving personal details, tracking user preferences, storing login details |

## 5.2 Digital currency and blockchain

- A **digital currency** only exists electronically. It is used to pay for goods and services just like money, but there are no physical notes or coins.
- **Blockchain** is, in its basic form, a digital ledger: a time-stamped series of records that cannot be altered.
- Each new transaction forms a block. Each block holds a hash of the previous block, which links the blocks into a chain. Copies of the chain are held on many computers, so a change to one copy is spotted because the hashes no longer match.

## 5.3 Cyber security threats

| Threat | Process | Aim |
|---|---|---|
| Brute-force attack | Trying every possible password combination in turn, often with software | To gain unauthorised access to an account |
| Data interception | Monitoring data as it travels, for example with a packet sniffer | To steal data in transit |
| DDoS attack | Many infected computers (a botnet) flood a server with requests | To make the server or website unavailable |
| Hacking | Gaining unauthorised access to a computer system | To steal, change or delete data |
| Virus | Malware that attaches to a file and replicates when the file is run | To damage or delete data |
| Worm | Malware that replicates itself across a network without a user running it | To use up bandwidth and spread damage |
| Trojan horse | Malware disguised as legitimate software | To give the attacker access or install other malware |
| Spyware | Records what the user does, such as key presses, and sends it to a third party | To steal data such as passwords |
| Adware | Displays unwanted adverts | To generate revenue; can redirect to unsafe sites |
| Ransomware | Encrypts the user's files | To demand payment for the decryption key |
| Phishing | A fake email or message with a link to a fake website | To trick the user into giving personal details |
| Pharming | Malicious code redirects the user to a fake website, even when the correct URL is typed | To collect personal details |
| Social engineering | Manipulating people, for example by pretending to be IT support | To get them to reveal confidential information or break security |

## 5.3 Security solutions

| Solution | How it helps |
|---|---|
| Access levels | Users can only see or change the data their role needs |
| Anti-malware (anti-virus, anti-spyware) | Scans files and removes or quarantines threats |
| Authentication | Username and password, biometrics or two-step verification prove who the user is |
| Automating software updates | Security holes are patched as soon as a fix is released |
| Checking spelling and tone | Poor spelling or an urgent tone can reveal a phishing message |
| Checking the URL of a link | A misspelt or unexpected domain can reveal a fake site |
| Firewall | Monitors traffic in and out and blocks traffic that does not meet set rules |
| Privacy settings | Limit who can see the user's personal data |
| Proxy server | Sits between the user and the internet, hides the user's IP address and can filter traffic |
| SSL | Encrypts data between browser and web server using digital certificates |

## Worked example: matching threat to solution

A bank customer receives an email that says "URGENT: your account will be closed today" with a link to "www.rnybank.com". Identify the threat and two solutions.

- **Threat:** phishing — a message designed to trick the customer into visiting a fake website and entering their details.
- **Solution 1:** check the URL attached to the link: "rnybank" imitates "mybank".
- **Solution 2:** check the spelling and tone: the urgent, threatening tone is typical of phishing.

Note that a firewall is a weak answer here — the email is not blocked network traffic, it relies on the user acting.

## Common mistakes / exam traps

- Treating "internet" and "world wide web" as the same thing.
- Saying the DNS "stores the web page". It only returns the IP address.
- Saying HTTPS "stops hackers". It encrypts data so intercepted data is meaningless.
- Confusing phishing (user clicks a link in a message) with pharming (redirection happens without the user clicking a fake link).
- Describing a virus and a worm the same way: a worm replicates without user action.
- Naming "anti-virus" as the solution for every threat. Match the solution to how the attack works.
- Writing "cookies are viruses". They are text files, not malware.

## Frequently asked questions

**What is the difference between the internet and the world wide web?**
The internet is the infrastructure of connected networks. The world wide web is the collection of websites and web pages accessed using that infrastructure.

**What parts can a URL contain?**
The Cambridge 0478 syllabus lists three: the protocol (such as https), the domain name and the web page or file name.

**Why is a DDoS attack called "distributed"?**
The requests come from many computers at once, usually a botnet of infected devices. Because the traffic arrives from so many sources, the server is overwhelmed and the attack is hard to block.

**Which security solutions are in the 0478 syllabus?**
Ten: access levels, anti-malware, authentication, automating software updates, checking spelling and tone, checking URLs, firewalls, privacy settings, proxy servers and SSL.

## Self-test

1. State the main purpose of a web browser.
2. Give one use of a session cookie.
3. Describe what is meant by blockchain.
4. Describe how ransomware works.
5. Explain how two-step verification helps protect an account.

**Answers:** 1. To render HTML and display web pages. 2. Holding items in an online shopping cart during a visit. 3. A digital ledger: a time-stamped series of records of transactions that cannot be altered, held as linked blocks. 4. It encrypts the user's files so they cannot be opened, and the attacker demands payment for the key to decrypt them. 5. As well as a password, the user must enter a second code, for example one sent to their phone, so a stolen password alone is not enough to log in.
