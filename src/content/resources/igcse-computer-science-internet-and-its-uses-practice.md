---
title: "IGCSE Computer Science: The Internet and Its Uses — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
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
description: "Original exam-style questions with full answers on the WWW, HTTPS, page retrieval, cookies, blockchain, DDoS, malware and security for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [The internet and its uses study guide](/resources/cambridge-igcse-computer-science-the-internet-and-its-uses-study-guide/) and
[revision notes](/resources/igcse-computer-science-internet-and-its-uses-revision-notes/)

These questions cover all three sub-topics of Topic 5 in the Cambridge IGCSE Computer Science 0478 syllabus (2026–2028): the internet and the world wide web (5.1), digital currency (5.2) and cyber security (5.3). Topic 5 is assessed on Paper 1.

---

## Section A

**1.** A student says, "The internet and the world wide web are the same thing." Explain why the student is wrong. **[2]**

**2.** State the purpose of HTTP, and describe how HTTPS is different. **[3]**

**3.** A web browser has an address bar. Identify **two** other functions of a web browser, other than providing an address bar. **[2]**

**4.** State what is meant by a digital currency. **[1]**

## Section B

**5.** The statements A to F describe how a web page is located, retrieved and displayed, but they are in the wrong order. Write the letters in the correct order. **[4]**

- A — The web server sends the HTML for the page back to the browser.
- B — The user enters the URL in the browser.
- C — The browser renders the HTML and displays the page.
- D — The DNS returns the IP address of the web server.
- E — The browser sends the domain name to a DNS.
- F — The browser uses the IP address to request the page from the web server.

**6.** A travel website uses cookies.

**(a)** State what is meant by a cookie. **[1]**
**(b)** The website remembers a user's preferred language each time they return over several months. State which type of cookie is used and explain why. **[2]**
**(c)** Give **two** other uses of cookies. **[2]**

**7.** A small online games company is hit by a distributed denial of service (DDoS) attack.

**(a)** Describe the process of a DDoS attack. **[3]**
**(b)** State the aim of the attack. **[1]**
**(c)** Identify **one** solution that could help reduce the effect of the attack and explain how it helps. **[2]**

**8.** Describe the difference between each pair of malware. **[4]**

**(a)** A virus and a worm.
**(b)** Spyware and ransomware.

**9.** An employee receives a phone call from someone claiming to be from the company's IT department. The caller asks for the employee's password to "fix a problem with their account".

**(a)** Identify the cyber security threat. **[1]**
**(b)** Explain why access levels would limit the damage if the employee gave away their password. **[2]**

**10.** A school's network administrator wants to protect pupils' data. Explain how each of the following helps keep data safe: **[6]**

**(a)** automating software updates
**(b)** a proxy server
**(c)** biometric authentication

**11.** Explain how blockchain is used to track digital currency transactions. **[3]**

---

## Answers

**1.** The internet is the infrastructure: the worldwide network of connected computers and networks [1]. The world wide web is the collection of websites and web pages that are accessed using the internet [1].

**2.** HTTP is the set of rules (protocol) used to transfer web pages between a web server and a browser [1]. HTTPS uses the same rules but is secure [1]: the data is encrypted (using SSL), so if it is intercepted it cannot be understood [1].

**3.** Any two from: storing bookmarks/favourites; recording user history; allowing multiple tabs; storing cookies; providing navigation tools (such as back and forward buttons) [1 each, max 2].

**4.** A currency that only exists electronically [1].

**5.** B, E, D, F, A, C. One mark each for: B first [1]; E immediately followed by D [1]; F immediately followed by A [1]; C last [1].

*Tip:* the DNS only supplies the IP address. Pupils often put "the DNS sends the page", which is never credited.

**6. (a)** A small text file stored on the user's device by the web browser for a website [1].
**(b)** A persistent cookie [1], because it stays on the device after the browser is closed until it expires or is deleted, so the preference is still there on the next visit [1].
**(c)** Any two from: saving personal details; holding items in an online shopping cart; storing login details; tracking user preferences (other than language, already given) [1 each, max 2].

**7. (a)** Any three from:
- the attacker infects many computers with malware, creating a botnet [1]
- the attacker instructs these computers to send requests to the company's server at the same time [1]
- the server receives far more requests than it can handle [1]
- so it slows down or crashes / genuine users' requests cannot be processed [1]

**(b)** To make the website or server unavailable to genuine users [1].
**(c)** A firewall [1] can monitor incoming traffic and block requests that do not meet its rules, such as many requests from the same IP addresses [1]. Or: a proxy server [1] can filter traffic before it reaches the web server, absorbing some of the requests [1].

**8. (a)** A virus attaches itself to a file and replicates when the infected file is run [1]; a worm replicates itself and spreads across a network without needing a user to run a file [1].
**(b)** Spyware records the user's actions, such as key presses, and sends the data to a third party [1]; ransomware encrypts the user's files and demands payment for the decryption key [1].

**9. (a)** Social engineering [1].
**(b)** Access levels mean each user can only open the data and areas of the system their role needs [1], so an attacker using the employee's password could only reach that employee's data, not the whole system [1].

**10.** Two marks each — one for what it does, one for how this protects data:

**(a)** Updates are downloaded and installed automatically as soon as they are released [1], so security weaknesses that attackers could exploit are fixed quickly without relying on the administrator remembering [1].
**(b)** A proxy server sits between the school network and the internet [1]; it hides the internal IP addresses and can filter traffic, blocking access to unsafe websites [1].
**(c)** Biometric authentication uses a unique physical feature such as a fingerprint or face [1], which is hard to copy or guess, so only the genuine user can log in [1].

**11.** Any three from:
- blockchain is a digital ledger: a time-stamped series of records [1]
- each transaction is stored as a block that cannot be altered [1]
- each block contains a hash of the previous block, linking them in a chain [1]
- copies of the chain are held on many computers, so any change to one copy would not match the others and is rejected [1]

## Where marks are usually lost

- Question 2: saying HTTPS is "more secure" without saying **how** — the data is encrypted.
- Q7(a): describing one computer sending many requests. A DDoS attack needs many computers.
- Question 8: describing what both malware types have in common instead of the difference between them.
- Question 10: naming what the solution is but not how it keeps data safe — each part has a mark for both.

## Frequently asked questions

**How many cyber security threats does 0478 list?**
Eight headings: brute-force attack, data interception, DDoS, hacking, malware (six named types), pharming, phishing and social engineering. You need both the process and the aim of each.

**Is SSL the same as HTTPS?**
No. SSL is the security protocol that encrypts the data; HTTPS is HTTP running over that secure, encrypted connection.

**Do I need to know how a digital currency is mined?**
No. The 0478 syllabus limits digital currency to the concept, how it is used and blockchain in its basic form.
