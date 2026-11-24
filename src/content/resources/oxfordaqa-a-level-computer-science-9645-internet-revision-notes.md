---
title: "OxfordAQA A-Level Computer Science (9645): The Internet -- Revision Notes"
seoTitle: "OxfordAQA 9645 The Internet Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.14.3: Internet structure, packet switching, routers, packet parts, URLs, DNS look-up, registries and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.14.3 The Internet** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.14, examined in Unit 4). For worked examples, see the [Internet study guide](/resources/oxfordaqa-a-level-computer-science-9645-internet/), then practise with the [Internet practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internet-practice/).

## What the specification requires

- Understand the **structure** of the Internet.
- Understand **packet switching** and the role of **routers**.
- Know the main **components of a packet**.
- Explain how **routing** is achieved across the Internet.
- Describe a **URL**; explain **FQDN**, **domain name** and **IP address**.
- Describe how **domain names are organised**.
- Understand the purpose of the **domain name service** and its reliance on **DNS**; outline how DNS works using **domain name servers**.
- Explain the service provided by **Internet registries** and why they are needed.

## Key terms

| Term | Meaning |
|---|---|
| Internet | A global network of networks joined by routers |
| Packet switching | Splitting data into packets that are routed independently and reassembled |
| Router | Forwards packets towards their destination using a routing table |
| Next hop | The neighbouring router or link a packet is sent to next |
| TTL | Time to live: a count reduced at each router; the packet is discarded at 0 |
| URL | Uniform resource locator: protocol, host name, path, and so on |
| FQDN | Fully qualified domain name: the complete host name, such as `www.library.example.org` |
| Domain name | The registered name, such as `example.org` |
| DNS | Domain Name System: distributed database that maps names to IP addresses |
| Registry | Organisation that allocates and records IP addresses and domain names |

## Packet switching in four steps

1. Split the message into packets and number them.
2. Send each packet separately.
3. Routers forward each packet; packets may take different routes and arrive out of order.
4. The receiver reorders by sequence number and asks for missing packets.

## Packet components

| Component | Purpose |
|---|---|
| Source address | Where the packet came from |
| Destination address | Where the packet is going; used by routers |
| Packet sequence number | Reassembly order |
| Time to live | Stops packets circulating for ever |
| Payload | The data |
| Error detection or correction information | Checks (or repairs) corruption |

## Routing

- Each router holds a **routing table** giving the next hop for each destination group.
- Each router decides locally; none needs the whole route.
- Tables are updated, so packets can avoid failed or busy links.
- TTL stops packets in a routing loop.

## Worked reminders

| Task | Working | Result |
|---|---|---|
| Packets for 4,500 bytes at 1,000 bytes of payload | ⌈4,500 / 1,000⌉ | 5 packets (4 × 1,000, 1 × 500) |
| Bytes sent with a 20-byte header on each | 4,500 + 5 × 20 | 4,600 |
| Reorder 3, 1, 5, 2, 4 | sort by sequence number | 1, 2, 3, 4, 5 |
| TTL 6 through routers 1, 2, 3, ... | 5, 4, 3, 2, 1, 0 | discarded at router 6 |

## URLs and names

`https://www.library.example.org/books/fiction.html?page=2`

| Part | Value |
|---|---|
| Protocol | `https` |
| FQDN | `www.library.example.org` |
| Domain name | `example.org` |
| Path | `/books/fiction.html` |
| Query | `page=2` |

Domain names are **hierarchical**, read right to left: top-level domain (`org`), second-level domain (`example`), subdomain (`library`), host name (`www`).

## DNS look-up in order

1. Browser checks its cache.
2. Asks the local DNS server.
3. Local server asks a **root server**, which points to the **top-level domain server**.
4. TLD server points to the server for the domain (`example.org`).
5. That server returns the **IP address**.
6. The local server caches the answer and returns it to the browser.

## Internet registries

- They **allocate** IP address blocks and **register** domain names.
- They are needed because every address and name must be **unique**.
- They keep the **records** that DNS relies on and show who is responsible.

## Comparing the terms

| Term | What it is | Example |
|---|---|---|
| IP address | Numeric address of a device | 203.0.113.8 |
| Domain name | Registered name of an organisation or group of hosts | `example.org` |
| FQDN | Complete name of one host, including every label | `www.library.example.org` |
| URL | Protocol, FQDN, path and so on: how to reach a resource | `https://www.library.example.org/books/fiction.html` |
| Top-level domain | Last label of the name | `org` |

A DNS look-up turns an FQDN into an IP address; the URL tells the browser which protocol to use once the address is known.

## Exam traps

- **Different routes.** Packets of one message do not have to follow the same path.
- **Not the Web.** The Web is a service that runs on the Internet.
- **DNS holds mappings**, not pages.
- **TTL** counts hops; at zero the packet is discarded.
- **FQDN versus domain name.** The FQDN includes the host name.
- **Header contents.** Name the six components, not just "address and data".
- **Registries** exist for uniqueness, not for speed.

## Quick self-test

1. What is the Internet?
2. What is a packet?
3. What does a router read to decide where to send a packet?
4. Name three components of a packet.
5. What happens when a packet's TTL reaches zero?
6. Why is the sequence number needed?
7. In `https://www.shop.example.com/items`, what is the FQDN?
8. In the same URL, what is the top-level domain?
9. What does DNS do?
10. Which server gives the IP address at the end of a DNS look-up?
11. Why are Internet registries needed?
12. Why is a DNS answer cached?

### Answers

1. A global network of networks joined by routers.
2. A small unit of data, with address and control information, sent across a network.
3. The destination address (looked up in its routing table).
4. Any three of: source address, destination address, sequence number, time to live, payload, error detection or correction information.
5. The packet is discarded.
6. So the receiver can put packets back in order.
7. `www.shop.example.com`
8. `com`
9. It maps domain names to IP addresses.
10. The server for the domain, called the authoritative server (here the server for `example.com`).
11. Every IP address and domain name must be unique, and someone must allocate and record them.
12. So later requests can be answered quickly without repeating the look-up.

## More on this topic

- [Internet study guide](/resources/oxfordaqa-a-level-computer-science-9645-internet/)
- [Internet practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internet-practice/)
- [Networking revision notes](/resources/oxfordaqa-a-level-computer-science-9645-networking-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.3 The Internet.
