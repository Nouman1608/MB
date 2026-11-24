---
title: "AQA A-Level Computer Science (7517): The Internet"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "the-internet-7517"
description: "Deeper guide to AQA 7517 section 4.9.3 The Internet: packet switching, routers and gateways, URLs and DNS, Internet registries, firewalls, encryption, certificates, signatures and malware."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.9.3 The Internet** in AQA A-Level Computer Science (7517), in two parts. **The Internet and how it works:** the structure of the Internet; packet switching and routers; the main components of a packet; routers and gateways; how routing is achieved; URLs, fully qualified domain names (FQDN), domain names and IP addresses; how domain names are organised; the domain name service and the Domain Name Server (DNS) system; and the service provided by Internet registries. **Internet security:** how a firewall works; symmetric and asymmetric encryption and key exchange; digital certificates and digital signatures; and worms, trojans and viruses.

The wider [communication and networking study guide](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/) covers all of section 4.9. This page works through each idea with examples.

Condensed notes are in the [Internet revision notes](/resources/aqa-a-level-computer-science-7517-the-internet-revision-notes/), and exam-style questions are in the [Internet practice questions](/resources/aqa-a-level-computer-science-7517-the-internet-practice/).

## Structure of the Internet

The Internet is a **network of networks**. Homes and organisations connect to an **Internet service provider (ISP)**. ISPs connect to each other and to very high-capacity **backbone** links that carry traffic over long distances, often exchanging traffic at shared **Internet exchange points**. No single organisation owns it; networks agree to follow common protocols so that any connected device can reach any other.

## Packet switching and routers

In **packet switching** a message is divided into **packets**. Each packet is sent separately and may take a different route. At the destination the packets are put back in order.

**Main components of a packet**

- **Header:** the destination IP address, the source IP address, a sequence number (to reassemble the message), a hop count or time to live, and the protocol in use.
- **Payload:** the part of the data being carried.
- **Trailer or check data:** a checksum so that the receiver can detect corruption.

**Why packet switching?** Many conversations share the same links efficiently; if one route is busy or fails, packets can use another; and a lost packet can be sent again without resending the whole message.

**Worked example 1.** A file of 12,000 bytes is sent in packets with a payload of 1,500 bytes. 12,000 ÷ 1,500 = **8 packets**. If it were 12,100 bytes, there would be 9 packets, because the last holds a partial load (round up).

### Router and gateway

- A **router** is a device that connects two or more networks and **forwards packets** between them. It reads the destination IP address of each packet and decides which way to send it next.
- A **gateway** is a device or node that **connects networks that use different protocols** or that acts as the **exit point from one network to another**, translating between them where needed. A home router often acts as the gateway between a local network and the Internet.

### Routing across the Internet

1. A router receives a packet and reads the **destination IP address** in its header.
2. It looks in its **routing table**, which lists networks and the next router on the path (the next hop), for the best match.
3. It reduces the **hop count (time to live)** by one. If this reaches zero the packet is discarded, which stops packets circulating forever.
4. It forwards the packet to the next hop.
5. This repeats at each router until the packet reaches the network of the destination.

Routers exchange information with each other so that routing tables are kept up to date, and so traffic can be directed around failures or congestion.

**Worked example 2.** A packet starts with a hop count of 5. After three routers, the hop count is 2. If the route needed 7 hops, the packet would be discarded at the fifth router, when the count reached 0.

## URLs, domain names and IP addresses

- A **uniform resource locator (URL)** identifies a resource on the Internet and how to get it. For `https://www.example.org/news/index.html`:
  - `https` is the protocol;
  - `www.example.org` is the fully qualified domain name;
  - `/news/index.html` is the path to the resource on the server.
- A **fully qualified domain name (FQDN)** is the complete name of a host, including every label from the host to the top-level domain: `www.example.org`.
- A **domain name** identifies an organisation or area of the Internet, such as `example.org`, and is registered by an owner.
- An **IP address** is the numerical address of a device on a network, used by routers to deliver packets.

**How domain names are organised.** Domain names form a **hierarchy** read from right to left: a **top-level domain** (such as `.org`, `.uk` or `.com`), then a **second-level domain** (`example`), then optional **subdomains** (`www`, `mail`). Each level is managed by the owner of the level above it.

### The domain name service and DNS

People remember names and computers use numbers, so the **domain name service** translates a name into an IP address. It relies on the **Domain Name Server (DNS)** system, a distributed set of servers arranged in a hierarchy.

**Worked example 3: resolving `www.example.org`.**

1. The browser checks its own cache, then the operating system's cache. If found, the address is used and the process stops.
2. If not, a request goes to a DNS server provided by the ISP (or another configured server).
3. If that server does not know, it asks a **root server**, which points it to the servers for the `.org` top-level domain.
4. The `.org` server points to the **authoritative name server** for `example.org`.
5. The authoritative server returns the IP address.
6. The address is passed back to the browser and cached for a time, and the browser connects to that address.

Spreading the work across many servers, and caching results, avoids a single point of failure and heavy load.

### Internet registries

Addresses and names must be **unique and coordinated** across the world. **Internet registries** keep the records and allocate resources. Regional registries hand out blocks of IP addresses to ISPs and large organisations, and domain registries record who owns each domain name. They are needed so that two organisations are never given the same address or name, which would stop packets being delivered correctly, and so that the owner of a name can be identified.

## Internet security

### Firewalls

A **firewall** sits between a network and the Internet and decides which traffic to allow.

- **Packet filtering:** each packet header is checked against rules covering the source and destination IP address, the port number and the protocol. A packet that breaks a rule is dropped. It is fast but does not look at the content or the context.
- **Proxy server:** acts as an intermediary. Internal devices make requests to the proxy, which makes the request on their behalf and checks the reply. This hides internal addresses, allows content to be inspected or blocked, and can cache pages.
- **Stateful inspection:** the firewall remembers the **state of connections**. It allows incoming packets that belong to a connection started from inside, and blocks unsolicited packets, which gives better protection than looking at each packet alone.

### Symmetric and asymmetric encryption

- **Symmetric encryption** uses **one shared key** to encrypt and decrypt. It is fast, but the key must be shared securely, which is hard to do over an insecure network.
- **Asymmetric (public/private key) encryption** uses a **pair of keys**. The **public key** can be shared with anyone and is used to encrypt; only the matching **private key**, kept secret, can decrypt. It solves the key-sharing problem but is slower.

**Key exchange.** In practice the two are combined. One party generates a symmetric **session key**, encrypts it with the other's public key, and sends it. Only the owner of the private key can recover it. Both then use the fast symmetric key for the rest of the conversation. This is the idea behind HTTPS.

**Worked example 4: toy asymmetric encryption.** Real keys are very large; these numbers only show the idea. Take a public key (n = 33, e = 3) and a private key (n = 33, d = 7).

- Encrypt the message 4: 4³ = 64; 64 mod 33 = **31**.
- Decrypt: 31⁷ mod 33 = **4**. The original message is recovered.

### Digital signatures and certificates

A **digital signature** proves who sent a message and that it has not been changed.

1. The sender computes a **hash** (a short fixed-size summary) of the message.
2. The sender encrypts the hash with their **private key**: this is the signature.
3. The receiver decrypts the signature with the sender's **public key** and computes the hash of the received message.
4. If the two hashes match, the message is unchanged and came from the holder of the private key.

Using the toy keys above, a hash value of 5 is signed as 5⁷ mod 33 = **14**. The receiver computes 14³ mod 33 = **5**, which matches.

But how does the receiver know the public key really belongs to the sender? A **digital certificate** links a public key to an identity. It is **obtained** by generating a key pair, sending the public key and proof of identity to a **certificate authority (CA)**, which checks the identity and **signs the certificate** with its own private key. The certificate holds the owner's name, public key, expiry date and the CA's signature. It is **used** when a browser connects to a site: the browser verifies the CA's signature using the CA's public key, which it already trusts, and so can be confident that the public key belongs to the site.

### Worms, trojans and viruses

| Malware | How it spreads | Vulnerability exploited |
|---|---|---|
| **Virus** | Attaches itself to a program or file and spreads when that file is run or shared | User opening infected files |
| **Worm** | Copies itself across networks **without** needing a host file or user action | Flaws in software, such as unpatched network services |
| **Trojan** | Disguised as useful software and installed by the user; does not copy itself | User trust and social engineering |

**Addressing them**

- **Improved code quality:** validate input, check array bounds, test thoroughly and review code to remove the flaws that worms exploit.
- **Monitoring:** log activity, watch for unusual traffic or file changes, and use intrusion detection.
- **Protection:** keep software patched, use anti-malware and firewalls, give users the least privilege they need, and train users not to open unknown attachments or install unknown programs.

## Common mistakes

- Describing a router as a device that **stores** web pages. It forwards packets.
- Saying packets all take **the same route**, or arrive in order.
- Mixing up **public** and **private** keys: encrypt with the receiver's public key; sign with the sender's private key.
- Describing a **signature** as encrypting the whole message to keep it secret. It authenticates; it does not hide the message.
- Saying a trojan **replicates**; it does not.
- Forgetting the **hop count**, which stops packets looping forever.

## Exam technique

- For **how something works**, use numbered steps in the correct order.
- For **encryption**, state which key is used by which party.
- For **"explain"** questions on malware, state how it spreads and what weakness it uses.
- For **compare** questions on firewalls, say what each type examines.

## More resources on this topic

- [Internet revision notes](/resources/aqa-a-level-computer-science-7517-the-internet-revision-notes/)
- [Internet practice questions](/resources/aqa-a-level-computer-science-7517-the-internet-practice/)
- [TCP/IP study guide](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol/)

*Written against the AQA A-level Computer Science (7517) specification, 4.9.3 The Internet. Always check the current specification on the AQA website.*
