---
title: "O Level Computer Science: The Internet and Its Uses — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
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
description: "Original exam-style questions with full worked answers on URLs, the DNS, web browsers, SSL, cookies, blockchain and cyber security threats, for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 12. After each answer there is a mark-scheme insight or a tip and, where one matches, the real question to try next.

---

## Questions

**1.** A family wants to buy tickets for a zoo. They type this URL into their browser: https://www.riverfieldzoo.org/tickets/prices.html

Identify the **three** parts of this URL and state what each part is. **[3]**

**2.** A student types the URL of an online dictionary into their web browser. Describe the role of the domain name server (DNS) in finding the web page and how the page is then obtained from the web server. **[4]**

**3.** Give **three** functions of a web browser. **[3]**

**4.** A customer is paying for concert tickets on a website that uses the secure socket layer (SSL) protocol. Describe the steps that set up a secure link between the customer's web browser and the web server. **[5]**

**5.** An online clothes shop uses both session cookies and persistent cookies.

**(a)** Explain the difference between a session cookie and a persistent cookie.

**(b)** Give one use the shop could make of each type of cookie. **[4]**

**6.** A new digital currency uses blockchain to record every payment. Describe how blockchain makes it difficult for anyone to alter a record of a payment once it has been made. **[3]**

**7.** A bank customer is worried about phishing and pharming.

**(a)** Explain the difference between phishing and pharming.

**(b)** Give one way the customer could protect themselves against each threat. **[4]**

---

## Answers

**1.** **https** is the **protocol** [1]; **www.riverfieldzoo.org** is the **domain name** [1]; **/tickets/prices.html** is the **path and file name of the web page** [1].

*Tip:* Name each part and say what it is; writing "the first part", "the middle part" and so on does not show which term goes with which part.

**2.** Any four from:

- The web browser sends the **URL / domain name to the DNS** [1].
- The DNS **searches its records for the matching IP address** [1].
- If it cannot find it, the request is **passed on to another DNS** [1].
- The **IP address is sent back** to the student's computer [1].
- The browser uses the IP address to **send a request to the web server** [1].
- The web server **sends the web page (HTML) data** back to the browser, which displays it [1]. (Max 4.)

*Mark-scheme insight (June 2025):* Marks were given for each separate step: the URL going to the DNS, the search for the matching IP address, passing the request on to another DNS if it is not found, the IP address being returned, the request to the web server and the web page data coming back. The "not found, so passed to another DNS" step is a mark point in its own right, so include it.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 5.

**3.** Any three from: **sends requests for web pages** using the URL and **receives and renders the HTML** so the page is displayed [1]; stores **bookmarks / favourites** [1]; records the **user's history** [1]; lets the user open **multiple tabs** [1]; stores **cookies** [1]; provides **navigation tools** such as back and forward buttons and an address bar [1]; lets hyperlinks be followed to other pages [1]. (Max 3.)

*Tip:* Give three clearly different functions; "displays web pages" and "renders HTML" describe the same function, so they count only once.

**4.** Any five from:

- The browser **requests that the web server proves who it is** [1].
- The web server **sends a copy of its digital (SSL) certificate** [1].
- The browser **checks that the certificate is authentic** / valid [1].
- If the certificate is valid, the browser **tells the server to begin** and the secure connection is created [1].
- If the certificate is not valid, the connection is **not trusted and the user is warned** or the transaction is stopped [1].
- An **encrypted connection** is set up, using **asymmetric encryption** to agree the keys [1], so any data that is intercepted is **meaningless** without the key [1]. (Max 5.)

*Mark-scheme insight (June 2025):* The credited steps were the browser asking the server to identify itself, the server sending its digital certificate, the browser authenticating it, and the connection going ahead only if the certificate is valid (otherwise it is rejected). "Encrypted connection established" was only one of several mark points, so describe the certificate steps as well.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 5.

**5.** **(a)** A session cookie is stored **temporarily** and is **deleted when the browser is closed** [1]; a persistent cookie is stored on the user's device **until its expiry date or until the user deletes it**, so it is kept between visits [1].

**(b)** Session cookie: keeping track of the items in the **shopping basket** during the visit [1]. Persistent cookie: **remembering login details or preferences** (such as clothes size or language), or storing items viewed for targeted adverts on a later visit [1].

*Tip:* The key difference is how long the cookie lasts; link each use to that difference.

**6.** Blockchain is a **decentralised digital ledger**: a copy of the record is held by **every computer in the network**, not by one central body [1]. Each payment is stored in a **block that contains a hash value of its own data and the hash value of the previous block**, linking the blocks into a chain [1]. If someone changes a block, its hash value changes, so it **no longer matches the hash stored in the next block**, and the change does not match the copies held by everyone else, so the tampering is detected and rejected [1].

*Tip:* Mention both ideas: the chain of hashes linking each block to the one before, and the many copies held across the network.

**7.** **(a)** Phishing is when the user is sent a **legitimate-looking email or message containing a link to a fake website**, where they are tricked into entering personal details [1]. Pharming is when **malicious code installed on the user's computer or on a DNS server redirects the user to a fake website**, even when they type the correct URL [1].

**(b)** Phishing: **do not click links in unexpected emails**; type the bank's address in yourself, or use a spam filter [1]. Pharming: use **anti-malware software** and **check the website has a valid certificate and a secure (https) connection** before entering details [1].

*Tip:* The clearest way to show the difference is to say how the user reaches the fake site: by clicking a link (phishing) or by being redirected without doing anything wrong (pharming).

---

## Where marks are usually lost

- Leaving out steps in the DNS process, especially the IP address being returned before the web server is contacted.
- Mixing up the roles of the web browser, the DNS and the web server.
- Saying SSL "encrypts the data" without describing how the digital certificate is requested, sent and checked.
- Describing cookies without saying how long each type is stored.
- Treating phishing and pharming as the same thing.
