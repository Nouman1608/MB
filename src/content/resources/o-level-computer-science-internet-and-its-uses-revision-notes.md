---
title: "O Level Computer Science: The Internet and Its Uses — Revision Notes"
resourceType: "revision-notes"
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
description: "Last-weeks notes for Topic 5 of Cambridge O Level Computer Science 2210: web vs internet, URL parts, DNS steps, cookies, blockchain, malware, phishing and SSL."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 5 of Cambridge O Level Computer Science (2210) is mostly about sequences and pairs: the steps from URL to displayed page, the steps of an SSL connection, session versus persistent cookies, phishing versus pharming, and each cyber threat matched with its defence. These notes set each one out in the shortest form that still earns full marks on Paper 1.

Condensed for the final weeks. For the full explanation, use the
[Internet and its uses study guide](/resources/o-level-computer-science-internet-and-its-uses/); to apply it, use the
[Internet and its uses practice questions](/resources/o-level-computer-science-internet-and-its-uses-practice/).

## Syllabus coverage (2210, 2026–2028)

| Ref | What you must be able to do |
|---|---|
| 5.1.1 | Tell the internet (infrastructure) from the world wide web (websites and pages) |
| 5.1.2 | Understand a URL: protocol, domain name, web page/file name |
| 5.1.3 | Describe the purpose and operation of HTTP and HTTPS |
| 5.1.4 | Explain the purpose and functions of a web browser |
| 5.1.5 | Describe how a page is located, retrieved and displayed |
| 5.1.6 | Explain session and persistent cookies and their uses |
| 5.2.1–5.2.2 | Digital currency and blockchain |
| 5.3.1 | Processes and aims of cyber security threats |
| 5.3.2 | Solutions that keep data safe |

## Five sequences to be able to write

**A. URL to page:** URL typed → domain name sent to DNS → DNS finds IP address (asks another DNS if needed) → IP address returned to browser → browser requests page from web server → server sends HTML → browser renders it.

**B. SSL connection:** browser asks server to identify itself → server sends its digital certificate → browser checks the certificate is valid → encrypted session agreed → data encrypted both ways.

**C. DDoS attack:** computers infected with malware form a botnet → attacker commands them to send requests to one server → server is overloaded → genuine users cannot get through.

**D. Brute-force attack:** software tries combinations of characters (often common passwords first) → continues until the password is found → attacker logs in.

**E. Blockchain record:** a transaction is made → it is time-stamped and added as a block → the block is linked to the previous block → copies are held across many computers → altering a block breaks the chain and does not match other copies.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-internet-and-its-uses--19-net-blockchain.webp" width="900" height="960" alt="Four time-stamped blocks each link to the block before. Three computers hold copies; on the third, block 2 has been changed, so the link breaks and it does not match the other copies." loading="lazy">
  <figcaption>Tampering with one block is detected because the copies no longer match.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-internet-and-its-uses--21-net-ssl.webp" width="900" height="900" alt="Browser and web server exchange five numbered steps: browser asks the server to identify itself, server sends its digital certificate, browser checks it is valid and from a trusted authority, both agree to communicate, and all data is encrypted in both directions." loading="lazy">
  <figcaption>The SSL steps that start an encrypted session.</figcaption>
</figure>


## Pairs that are easy to confuse

| Pair | First | Second |
|---|---|---|
| Internet vs WWW | The network infrastructure | Websites and pages accessed over it |
| HTTP vs HTTPS | Rules for transferring pages | Same rules, data encrypted |
| Session vs persistent cookie | Deleted when the browser closes | Kept until expiry or deletion |
| Phishing vs pharming | User clicks a link in a fake message | User is redirected to a fake site even when typing the correct URL |
| Virus vs worm | Needs an infected file to be run | Replicates across a network on its own |
| Spyware vs adware | Secretly records user activity | Displays unwanted adverts |
| Firewall vs proxy server | Filters traffic by rules | Sits between user and internet, hides the user's IP address and can filter |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-internet-and-its-uses--18-net-cookies.webp" width="900" height="870" alt="A timeline: a session cookie is deleted when the browser is closed, while a persistent cookie lasts until it expires or the user deletes it. Four boxes show the four uses of cookies the lesson lists." loading="lazy">
  <figcaption>Session cookies end when the browser closes; persistent cookies stay.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-internet-and-its-uses--20-net-phish-pharm.webp" width="900" height="870" alt="Phishing: a fake email with a link the user must click to reach a fake website. Pharming: the correct URL is typed but code or DNS redirects the user to a fake website with no click needed. Both aim to collect personal details." loading="lazy">
  <figcaption>Phishing needs a click; pharming redirects even the correct URL.</figcaption>
</figure>


## Threat → best defence

| Threat | Defence to name |
|---|---|
| Brute-force attack | Authentication: a strong password, biometrics or two-step verification |
| Data interception | Encryption — HTTPS / SSL |
| DDoS attack | Firewall or proxy server filtering the traffic |
| Hacking | Firewall, strong authentication, access levels |
| Malware | Anti-malware software, automating software updates |
| Phishing | Checking spelling and tone, checking the URL attached to a link |
| Pharming | Checking the URL and the site's certificate (SSL), anti-malware |
| Social engineering | Checking the spelling and tone of communications; access levels to limit what a tricked user can reveal |

## Cookie uses (from the syllabus)

Saving personal details · tracking user preferences · holding items in an online shopping cart · storing login details.

## 2210 and its sibling syllabus

The subject content of 2210 is shared with Cambridge IGCSE Computer Science (0478). If you use an 0478 textbook, its Topic 5 chapters match this syllabus exactly.

## Exam traps

Drawn from our [practice page](/resources/o-level-computer-science-internet-and-its-uses-practice/), which paraphrases the Cambridge 2210 June 2025 mark schemes and lists where marks are usually lost:

- In the URL-to-page diagram, each step had its own mark, including the IP address being **returned** before the web server is contacted. Do not skip steps.
- The SSL marks were for the certificate being **requested, sent and checked**, not just "SSL encrypts the data".
- Cookie answers need **how long** each type is kept, not just what it is for.
- Keep the roles separate: the browser renders, the DNS looks up the IP address, the web server stores and sends the page.

## Frequently asked questions

**What are the three parts of a URL in 2210?**
The protocol (such as https), the domain name and the web page or file name. Questions often give a URL and ask you to label each part.

**Is ransomware a type of malware?**
Yes. The 2210 syllabus lists six types of malware: virus, worm, Trojan horse, spyware, adware and ransomware.

**What does a proxy server do for security?**
It sits between users and the internet, so the user's IP address is hidden from websites, and it can filter traffic and block access to unsafe sites.

## Self-test

1. Name the component that turns a domain name into an IP address.
2. State two functions of a web browser besides rendering HTML.
3. Which cookie type holds items in a shopping cart during one visit?
4. Describe how a worm differs from a virus.
5. Give two ways a user could spot a phishing email.

**Answers:** 1. The domain name server (DNS). 2. Any two: storing bookmarks/favourites, recording history, multiple tabs, storing cookies, navigation tools, address bar. 3. A session cookie. 4. A worm replicates and spreads across a network by itself; a virus needs an infected file to be run. 5. Poor spelling or an urgent, threatening tone; a link whose URL does not match the genuine organisation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-internet-and-its-uses--15-net-internet-web.webp" width="900" height="980" alt="A large box for the internet shows routers, cables and servers. Inside it a dashed region holds web pages (the web); email and online gaming sit outside the dashed region but inside the internet box." loading="lazy">
  <figcaption>The web is only part of what runs on the internet.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-internet-and-its-uses--16-net-url.webp" width="900" height="660" alt="The URL https://www.lakesidemuseum.org/visit/opening-hours.html split into protocol (https), domain name (www.lakesidemuseum.org) and web page/file name (opening-hours.html in the visit folder)." loading="lazy">
  <figcaption>The three parts of a URL.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-internet-and-its-uses--17-net-dns.webp" width="900" height="990" alt="A three-lane sequence of the browser, DNS and web server, with seven numbered steps: type the URL, send the domain name, DNS searches, IP address returned, page requested, HTML sent back, page rendered." loading="lazy">
  <figcaption>What happens between typing a URL and seeing the page.</figcaption>
</figure>

