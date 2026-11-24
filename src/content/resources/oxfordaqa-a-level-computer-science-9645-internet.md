---
title: "OxfordAQA A-Level Computer Science (9645): The Internet"
seoTitle: "OxfordAQA 9645 The Internet Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.14.3 in depth: Internet structure, packet switching, routers, packet contents, routing, URLs, domain names, the Domain Name System and registries."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.14.3 The Internet** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.14 Networking and cyber security. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to understand the structure of the Internet, packet switching and routers, the main components of a packet, how routing is achieved, what a URL is, the terms fully qualified domain name (FQDN), domain name and IP address, how domain names are organised, the purpose and function of the domain name service and its reliance on the Domain Name System (DNS), how DNS works using domain name servers, and the service provided by Internet registries.

The topic-level [networking and cyber security study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/) covers all of topic 3.14 in one pass. This page gives the Internet its own space, with a packet example, a TTL trace and a full DNS look-up. Afterwards use the [Internet revision notes](/resources/oxfordaqa-a-level-computer-science-9645-internet-revision-notes/) and the [Internet practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internet-practice/).

## The structure of the Internet

The Internet is a **network of networks**: millions of separate networks (home, school, company, university and service-provider networks) joined together by **routers** so that any connected device can, in principle, communicate with any other. No single organisation owns it. Internet service providers (ISPs) connect customers to the Internet, and ISPs connect to each other, and to very high-capacity long-distance links, so that data can cross continents. The Internet is the infrastructure; the **World Wide Web** is one service that uses it.

## Packet switching

Data sent across the Internet is not sent as one continuous stream. It is broken into small units called **packets**. This is **packet switching**.

1. The sending device splits the message into packets and numbers them.
2. Each packet is sent into the network on its own and is forwarded by **routers**.
3. Packets of the same message may take **different routes**, and may arrive out of order.
4. The receiving device uses the **packet sequence numbers** to put them back in order, and requests any that are missing.

Benefits compared with reserving a single dedicated line for the whole message: many users can share the same links; if a link fails the packets can be sent another way; and a link is used only while packets are crossing it.

### What a router does

A **router** connects networks. When a packet arrives, the router reads its **destination address**, looks it up in its **routing table**, and forwards the packet on the link that leads towards that destination (the **next hop**). It also reduces the packet's time to live by one. No router needs to know the whole route; each makes a local decision about the next step.

### The main components of a packet

| Component | Purpose |
|---|---|
| **Source address** | The IP address of the sender, so replies and error messages can be returned |
| **Destination address** | The IP address of the receiver, used by routers to forward the packet |
| **Packet sequence number** | Shows the packet's position in the message, so the receiver can reassemble packets in order |
| **Time to live (TTL)** | A count that is reduced at every router; when it reaches zero the packet is discarded |
| **Payload** | The data being carried |
| **Error detection or correction information** | Allows the receiver to check that the packet arrived without corruption (and in some schemes to repair it) |

**Worked example 1: packets.** A message of 4,500 bytes is sent with a payload of at most 1,000 bytes per packet. That needs ⌈4,500 / 1,000⌉ = **5 packets**: four of 1,000 bytes and one of 500 bytes. If each packet also carries a 20-byte header, the number of bytes sent is 4,500 + 5 × 20 = **4,600 bytes**. If the packets arrive with sequence numbers 3, 1, 5, 2, 4, the receiver sorts them into the order 1, 2, 3, 4, 5 before passing the message on.

**Worked example 2: time to live.** A packet is sent with a TTL of 6 along a path of 8 routers. Each router reduces the TTL by 1. After router 1 the TTL is 5; after router 2 it is 4; after router 3, 3; after router 4, 2; after router 5, 1; after router 6 it is **0**, so router 6 discards the packet. The packet never reaches router 7 or the destination. The sender would get no acknowledgement for that packet. The purpose of TTL is to stop a packet that is caught in a routing loop from travelling for ever.

### Routing

**Routing** is the process of choosing the path of packets across the Internet. Each router holds a routing table, which lists, for each group of destination addresses, the neighbouring router or link to use next. Routers exchange information with each other and update their tables, so if a link fails or becomes busy, later packets can be sent another way. This is why two packets of the same message can follow different routes.

## URLs, domain names and IP addresses

Computers locate each other by **IP address**, a number such as 203.0.113.8. People prefer names, so the Internet uses names that are translated into addresses.

A **uniform resource locator (URL)** identifies a resource on the Internet and how to reach it. Taking the example `https://www.library.example.org/books/fiction.html?page=2`:

| Part | Value | Meaning |
|---|---|---|
| Protocol | `https` | The protocol used to fetch the resource |
| Fully qualified domain name | `www.library.example.org` | The complete name of the host |
| Path | `/books/fiction.html` | The resource on that host |
| Query | `page=2` | Extra information passed to the server |

A **fully qualified domain name (FQDN)** is the complete name of a host, with every label from the host name to the top-level domain. A **domain name** is the registered name of an organisation or group of hosts, such as `example.org`. An **IP address** is the numeric address that the name stands for.

### How domain names are organised

Domain names are **hierarchical**. Read from right to left, each label narrows the scope:

| Label in `www.library.example.org` | Level | Role |
|---|---|---|
| (the invisible root) | Root | Top of the hierarchy |
| `org` | Top-level domain (TLD) | A category or country, such as `org`, `com` or `uk` |
| `example` | Second-level domain | The name registered by an organisation |
| `library` | Subdomain | A division the organisation creates itself |
| `www` | Host name | A particular machine or service |

The hierarchy lets responsibility be shared: each organisation looks after the names under its own domain.

## The Domain Name System (DNS)

The **domain name service** lets users type a name instead of an address. It relies on the **Domain Name System (DNS)**, a distributed worldwide database held on many **domain name servers**. No single server knows every name.

**Worked example 3: looking up `www.library.example.org`.**

1. The browser checks its own **cache** for a recent answer. If not found, it asks a **local DNS server** (often run by the ISP).
2. If the local server has no cached answer, it asks a **root server**, which does not know the address but replies with the server responsible for the `org` top-level domain.
3. The local server asks the **`org` server**, which replies with the server responsible for `example.org`.
4. The local server asks the **server for `example.org`**, which holds the record for `www.library.example.org` and replies with its IP address, 203.0.113.8.
5. The local server passes the address to the browser and keeps a copy in its cache for a limited time, so the next request is answered at once.
6. The browser then connects to 203.0.113.8 using the protocol in the URL.

If the final server did not know the name, the look-up would fail and the browser would report that the site cannot be found.

## Internet registries

Every IP address and every domain name must be **unique**, otherwise packets and requests would go to the wrong place. **Internet registries** are the organisations that allocate and record these identifiers: they hand out blocks of IP addresses to ISPs and organisations, register domain names for the people who ask for them, and keep the records that DNS depends on. They are needed to avoid duplicates and conflicts, to show who is responsible for a name or address, and to keep the system working worldwide.

## Exam technique

- **Packet questions:** list the components and give the purpose of each in your own words.
- **Describe packet switching:** split, number, route independently, reassemble.
- **DNS:** give the steps in order and name the servers: local, root, top-level domain, authoritative.
- **Terms:** use the example `www.library.example.org` to show the difference between FQDN and domain name.

## Common mistakes

- Saying a packet always follows the same route as the others.
- Describing TTL as a time in seconds only; it is a count of hops (reduced at each router).
- Confusing the Internet with the World Wide Web.
- Saying DNS stores web pages. It stores the mapping from names to addresses.
- Treating the domain name and the FQDN as the same thing.

## More on this topic

- [Internet revision notes](/resources/oxfordaqa-a-level-computer-science-9645-internet-revision-notes/)
- [Internet practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internet-practice/)
- [TCP/IP study guide](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.3 The Internet.
