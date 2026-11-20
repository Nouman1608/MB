---
title: "OxfordAQA A-Level Computer Science (9645): Cyber security -- Practice Questions"
seoTitle: "OxfordAQA 9645 Cyber Security Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.5
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "cyber-security-oxfordaqa-alevel-cs"
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.14.5 Cyber security: firewalls, encryption, key exchange, signatures, certificates and malware."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.14.5 Cyber security** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: firewalls (packet filtering, proxy servers and stateful inspection), symmetric and asymmetric encryption, key exchange, digital certificates and signatures, and worms, trojans and viruses. The numbers used in the calculations are far too small to be secure; they are for practice only.

Related pages: [cyber security study guide](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security/) ·
[cyber security revision notes](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security-revision-notes/)

## Section A

**1.** State which type of encryption uses the same key to encrypt and decrypt. **[1]**

**2.** State what a digital certificate links together. **[1]**

**3.** Describe how a worm differs from a trojan. **[2]**

## Section B

**4.** A packet-filtering firewall has these rules, applied from rule 1 downwards. The first matching rule is used.

| Rule | Source | Destination | Port | Action |
|---|---|---|---|---|
| 1 | any | web server | 443 | allow |
| 2 | 198.51.100.7 | any | any | block |
| 3 | any | mail server | 25 | allow |
| 4 | any | any | any | block |

State the action for each packet.

**(a)** From 192.0.2.10 to the web server on port 443 **[1]**
**(b)** From 198.51.100.7 to the mail server on port 25 **[1]**
**(c)** From 192.0.2.10 to the web server on port 22 **[1]**

**5.** Describe the difference between packet filtering and stateful inspection. **[3]**

**6.** Describe **two** ways in which a proxy server can protect the computers on a network. **[2]**

**7.** A company has 50 staff who must each be able to exchange secret messages with every other member of staff.

**(a)** Calculate the number of separate shared keys needed if symmetric encryption is used. **[2]**
**(b)** Calculate the number of keys needed if asymmetric encryption is used, and explain why it is fewer. **[3]**

**8.** A toy RSA system uses the public key (n = 55, e = 3) and the private key (n = 55, d = 27).

**(a)** Calculate the ciphertext when the message value 8 is encrypted with the public key. **[2]**
**(b)** State which key the receiver uses to decrypt it, and what value is obtained. **[2]**
**(c)** The sender signs a hash value of 12 using the private key. Calculate the signature, and show how the receiver verifies it with the public key. **[3]**

**9.** Two users agree publicly on p = 19 and g = 2 for a Diffie-Hellman key exchange. User A chooses the secret 5 and user B chooses the secret 7. Calculate the value each user sends, and the shared key. **[4]**

**10.** Describe how a digital signature shows that a message has not been altered and was sent by the claimed sender. **[4]**

**11.** A web server presents a digital certificate to a browser.

**(a)** State **two** items of information that the certificate contains. **[2]**
**(b)** Describe how the browser decides whether to trust the certificate. **[3]**

**12.** Explain why a computer that has not been updated for two years is at risk from a worm. **[2]**

## Answers

**1.** Symmetric encryption **[1]**.

**2.** A public key and the identity of its owner **[1]**.

**3.** A worm is a standalone program that copies itself across a network without any user action **[1]**. A trojan is disguised as legitimate software and does not copy itself; the user is tricked into installing it **[1]**. **[2]**

**4. (a)** Rule 1 matches: **allow** **[1]**
**(b)** Rule 1 does not match (wrong destination); rule 2 matches the source, so **block** **[1]**
**(c)** Rule 1 does not match (port 22); rule 2 does not match; rule 3 does not match; rule 4 matches, so **block** **[1]**

**5.** Packet filtering examines each packet on its own using header details such as addresses, port and protocol **[1]**. Stateful inspection keeps a table of connections and their state **[1]**, so it allows a packet only if it belongs to an established connection or is a permitted new connection, and drops packets that claim to be replies to connections that do not exist **[1]**. **[3]**

**6.** Any two of: it hides internal IP addresses because external servers see only the proxy's address **[1]**; it can inspect requests and responses and block unwanted sites or content **[1]**; it can log activity **[1]**; it can cache pages, reducing the number of direct connections **[1]**. **[2]**

**7. (a)** n(n − 1)/2 = 50 × 49 / 2 **[1]** = **1,225** keys **[1]**. **[2]**
**(b)** Each person needs one key pair, so 2 × 50 = **100** keys **[1]**. It is fewer because the public keys can be shared with everyone **[1]**, so there is no need for a different secret key for each pair of people **[1]**. **[3]**

**8. (a)** 8³ mod 55 = 512 mod 55 **[1]** = **17** **[1]**. **[2]**
**(b)** The receiver uses the **private key** **[1]**: 17²⁷ mod 55 = **8**, the original message **[1]**. **[2]**
**(c)** Signature = 12²⁷ mod 55 = **23** **[1]**. The receiver calculates 23³ mod 55 using the public key **[1]** and obtains **12**, which matches the hash of the message received, so the message is authentic and unaltered **[1]**. **[3]**

**9.** User A sends 2⁵ mod 19 = 32 mod 19 = **13** **[1]**. User B sends 2⁷ mod 19 = 128 mod 19 = **14** **[1]**. A computes 14⁵ mod 19 = **10** **[1]**; B computes 13⁷ mod 19 = **10** **[1]**. The shared key is 10. **[4]**

**10.** The sender makes a hash of the message **[1]** and encrypts the hash with the sender's private key to create the signature **[1]**. The receiver decrypts the signature with the sender's public key and compares the result with a hash of the message received **[1]**. A match shows that only the private key holder could have signed it and that the message has not been altered, since any change would change the hash **[1]**. **[4]**

**11. (a)** Any two of: the owner's name or domain **[1]**; the owner's public key **[1]**; the validity dates **[1]**; the digital signature of the certificate authority **[1]**. **[2]**
**(b)** The browser checks that the certificate was signed by a certificate authority that it trusts, using the authority's public key **[1]**; that it has not expired **[1]**; and that the name in the certificate matches the website being visited **[1]**. **[3]**

**12.** Software updates (patches) fix known flaws **[1]**; a computer that has not installed them still has vulnerabilities that a worm can exploit to copy itself onto the machine without any action by the user **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.5 Cyber security.
