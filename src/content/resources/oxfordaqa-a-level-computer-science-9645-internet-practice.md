---
title: "OxfordAQA A-Level Computer Science (9645): The Internet -- Practice Questions"
seoTitle: "OxfordAQA 9645 The Internet Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "the-internet-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.14.3 The Internet: packets, routers, TTL, URLs, domain names, DNS look-ups and Internet registries."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.14.3 The Internet** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the structure of the Internet, packet switching, routers and routing, the components of a packet, URLs, domain names, DNS and Internet registries.

Related pages: [Internet study guide](/resources/oxfordaqa-a-level-computer-science-9645-internet/) ·
[Internet revision notes](/resources/oxfordaqa-a-level-computer-science-9645-internet-revision-notes/)

## Section A

**1.** State what is meant by the **Internet**. **[1]**

**2.** State the purpose of the **packet sequence number** in a packet. **[1]**

**3.** State the purpose of the **time to live** field in a packet. **[1]**

**4.** Give **two** other components of a packet, apart from the sequence number and the time to live. **[2]**

## Section B

**5.** A file of 7,300 bytes is sent across the Internet. Each packet can carry a payload of at most 1,200 bytes and has a 24-byte header.

**(a)** Calculate the number of packets needed. **[2]**
**(b)** Calculate the total number of bytes sent, including headers. **[2]**
**(c)** The packets arrive in the order 4, 2, 6, 1, 7, 3, 5. Explain how the receiving device deals with this. **[2]**

**6.** A packet is sent with a time to live of 8 across a path of 12 routers. Each router reduces the time to live by 1 before forwarding the packet.

**(a)** State at which router the packet is discarded. **[1]**
**(b)** Explain why the Internet uses a time to live. **[2]**

**7.** Describe the role of a router in packet switching. **[3]**

**8.** The URL `https://www.news.example.org/world/today.html` identifies a web page.

**(a)** State the protocol, the fully qualified domain name and the path. **[3]**
**(b)** State the top-level domain and the host name. **[2]**
**(c)** State the difference between the fully qualified domain name and the domain name `example.org`. **[1]**

**9.** A user types `www.news.example.org` into a browser. The browser has no cached answer and the local DNS server has no cached answer either. Outline the sequence of steps by which the IP address is found. **[5]**

**10.** Explain why Internet registries are needed. **[2]**

**11.** Compare packet switching with sending a whole message along one dedicated line. **[3]**

## Answers

**1.** A global network of networks joined together by routers **[1]**.

**2.** It shows the order of the packet within the message, so the receiver can reassemble the packets in the correct order **[1]**.

**3.** It limits how long a packet can live: it is reduced at each router and the packet is discarded at zero, which stops packets circulating for ever **[1]**.

**4.** Any two of: source address **[1]**; destination address **[1]**; payload (data) **[1]**; error detection or correction information **[1]**. **[2]**

**5. (a)** 7,300 / 1,200 = 6.08, so rounding up gives **7 packets** **[1]** (six full packets of 1,200 bytes and one of 100 bytes) **[1]**. **[2]**
**(b)** Headers: 7 × 24 = 168 bytes **[1]**; total = 7,300 + 168 = **7,468 bytes** **[1]**. **[2]**
**(c)** Each packet carries a sequence number **[1]**; the receiver sorts the packets into order 1 to 7 before rebuilding the file (and can ask for any missing packets) **[1]**. **[2]**

**6. (a)** The time to live is 7 after router 1, then 6, 5, 4, 3, 2, 1 and **0 after router 8**, so router 8 discards it **[1]**.
**(b)** A packet could be caught in a routing loop between routers **[1]**; the time to live ensures it is eventually discarded, so it does not use up network capacity for ever **[1]**. **[2]**

**7.** The router reads the destination address of each incoming packet **[1]**, looks it up in its routing table to find the best next hop **[1]**, and forwards the packet on that link (also reducing the time to live) **[1]**. **[3]**

**8. (a)** Protocol: `https` **[1]**; FQDN: `www.news.example.org` **[1]**; path: `/world/today.html` **[1]**. **[3]**
**(b)** Top-level domain: `org` **[1]**; host name: `www` **[1]**. **[2]**
**(c)** The fully qualified domain name is the complete name of a host, including the host name and every label; the domain name `example.org` is only the registered part (without the host and subdomain) **[1]**.

**9.** Award up to **[5]**: the local DNS server asks a root server **[1]**; the root server replies with the address of the server for the `org` top-level domain **[1]**; the local server asks the `org` server, which points to the server responsible for `example.org` **[1]**; the server for `example.org` returns the IP address for `www.news.example.org` **[1]**; the local server caches the answer and passes the IP address to the browser, which can then connect **[1]**.

**10.** Every IP address and domain name must be unique, otherwise data would go to the wrong place **[1]**. Registries allocate and record addresses and names, so conflicts are avoided and it is clear who is responsible for each one **[1]**. **[2]**

**11.** Award up to **[3]**: with packet switching the message is split into packets sent separately by different routes, so many users can share the same links **[1]**; if a link fails, the packets can be routed another way, whereas a dedicated line would fail completely **[1]**; a dedicated line reserves capacity even when no data is being sent, whereas packet switching uses a link only while packets cross it **[1]**.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.3 The Internet.
