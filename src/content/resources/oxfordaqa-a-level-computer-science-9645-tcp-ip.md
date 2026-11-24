---
title: "OxfordAQA A-Level Computer Science (9645): The Transmission Control Protocol/Internet Protocol"
seoTitle: "OxfordAQA 9645 TCP/IP Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.4
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "the-transmission-control-protocol-internet-protocol-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.14.4 in depth: the four TCP/IP layers, sockets, MAC addresses, application protocols, IP addressing, subnet masks and DHCP."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.14.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.14 Networking and cyber security. It is International A-level content, examined in Unit 4, the written paper. It has four parts: the TCP/IP model (3.14.4.1), standard application layer protocols (3.14.4.2), IP addresses (3.14.4.3) and the Dynamic Host Configuration Protocol (DHCP) (3.14.4.4).

The topic-level [networking and cyber security study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/) covers all of topic 3.14 in one pass. This page gives TCP/IP its own space, with how a message passes down the layers, more subnet-mask calculations and a full account of each protocol. Afterwards use the [TCP/IP revision notes](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-revision-notes/) and the [TCP/IP practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-practice/).

## 3.14.4.1 The TCP/IP model

The TCP/IP stack has four **layers**. Each layer has its own job and uses the layer below it.

| Layer | Role | Example |
|---|---|---|
| **Application** | Provides the protocol that the program uses, and formats the data | HTTP, SMTP, FTP |
| **Transport** | Splits data into segments, adds **port numbers**, and (with TCP) numbers segments, acknowledges them and resends lost ones | TCP |
| **Internet** | Adds **source and destination IP addresses** and sends packets between networks; routers work at this layer | IP |
| **Link** | Sends frames over the physical network within one local network, using **MAC addresses** | Ethernet, Wi-Fi |

### How a message passes down the layers

When a browser sends a request, each layer wraps the data from the layer above with its own header. This is called encapsulation.

1. **Application:** the browser builds an HTTP request.
2. **Transport:** TCP splits it into segments and adds the sender's and receiver's **port numbers** and a sequence number.
3. **Internet:** IP puts each segment in a packet with the **source and destination IP addresses**.
4. **Link:** the network interface puts the packet into a frame with the **MAC addresses** of the sender and the next device, and sends it.

At the receiver the process runs in reverse: each layer removes its header and passes the data up.

### Why networking protocols use layers

- Each layer can be designed, changed or replaced **independently** of the others, as long as the interface between layers stays the same.
- Different manufacturers' products **work together**, because each layer follows an agreed standard.
- A complex problem is split into **smaller, simpler** ones, which are easier to design, test and debug.
- A new link technology (for example a new type of Wi-Fi) can be adopted without rewriting the web browser.

### Sockets

A **socket** is the combination of an **IP address** and a **port number**, such as 203.0.113.8:443. The IP address identifies the computer and the port identifies the program or service on it. A socket identifies one end of a connection, so one computer can hold many connections at once, for example a browser, an email client and an SSH session, each using different ports. Well-known ports include 80 (HTTP), 443 (HTTPS), 25 (SMTP), 110 (POP3), 143 (IMAP), 21 (FTP) and 22 (SSH).

### MAC addresses

A **MAC (Media Access Control) address** is a hardware address that identifies a network interface, normally fixed by the manufacturer. It is used for delivery within one local network: a frame carries the MAC addresses of the sender and the next device. As a packet crosses the Internet, the **IP addresses** stay the same from sender to receiver, but the **MAC addresses change at each hop**, because each link uses new sender and receiver interfaces.

## 3.14.4.2 Standard application layer protocols

| Protocol | Purpose |
|---|---|
| **HTTP** | Requests and delivers web pages |
| **HTTPS** | HTTP with encryption, so pages and form data cannot be read in transit |
| **FTP** | Transfers files between a client and a server |
| **SMTP** | Sends email (client to server, and server to server) |
| **POP3** | Retrieves email from a mail server |
| **IMAP** | Retrieves and manages email that stays on the server |
| **SSH** | Gives encrypted remote access to another computer |

### FTP

An **FTP server** holds files. Users run **FTP client software** to connect. Access can be **anonymous** (no personal account, usually limited to public files) or **authenticated** (a username and password). FTP sends data without encryption, so it is being replaced by alternatives such as **SFTP**, which **encrypt files** for secure transmission.

### SSH

**Secure Shell** is used for **remote management**. An administrator uses SSH to log in securely to a remote computer and execute commands on it, for example restarting a service on a server in another country. All traffic is encrypted.

### Email

**Worked example 1: sending an email.** Amira sends a message to Daniel.

1. Amira's email client uses **SMTP** to send the message to her **email server**.
2. Her server uses **SMTP** to pass the message to Daniel's email server, which stores it in his mailbox.
3. Daniel's client collects it using **POP3** (the message is downloaded, and usually removed from the server) or **IMAP** (the message stays on the server, so every device he uses sees the same mailbox).

The role of an **email server** is to send, receive and store messages for its users.

### The web

A **web server** serves up web pages in text form (HTML) in response to requests. A **web browser** retrieves the page and the resources it refers to (images, style sheets, scripts) and **renders** them into the page the user sees.

## 3.14.4.3 IP addresses

An **IP address** is split into a **network identifier** and a **host identifier**. The network identifier is the same for every device on one network; the host identifier picks out the device. A large network can be divided into **subnets**. A **subnet mask** identifies the network part: wherever the mask has a 1 the bit belongs to the network identifier. A bitwise AND of the address and the mask gives the network identifier.

**Worked example 2.** Find the network identifier for 172.16.37.201 with mask 255.255.252.0.

```
octets 1 and 2: mask 255 keeps them         -> 172.16
octet 3:   37  = 00100101
           252 = 11111100
           AND = 00100100 = 36
octet 4:   mask 0                            -> 0
network identifier = 172.16.36.0
```

The mask 255.255.252.0 has 8 + 8 + 6 = 22 network bits and 10 host bits, so the subnet has 2¹⁰ = 1,024 addresses, of which 1,022 can be given to hosts (the first and last are reserved for the network and for broadcasts).

**Worked example 3.** Are 192.168.5.130 and 192.168.5.20 on the same subnet with mask 255.255.255.128? In the last octet the mask is 128 = 10000000. The AND with 130 (10000010) gives 128, and with 20 (00010100) gives 0. The network identifiers are 192.168.5.128 and 192.168.5.0, so the devices are on **different subnets** and need a router to communicate.

### IPv4 and IPv6

- **IPv4** addresses are 32 bits, written as four decimal numbers, so there are 2³² = 4,294,967,296 possible addresses.
- **IPv6** addresses are 128 bits, written as eight groups of four hexadecimal digits, giving 2¹²⁸ addresses (about 3.4 × 10³⁸).
- **Why IPv6 was introduced:** IPv4 addresses are running out, because far more devices are connected than the 4.3 billion addresses can cover.

### Routable and non-routable addresses

A **routable** (public) address is unique across the Internet, so routers will forward packets to it. A **non-routable** (private) address, for example in the ranges 10.x.x.x, 172.16.x.x to 172.31.x.x and 192.168.x.x, can be reused by many separate networks and is not forwarded across the Internet. A device with a private address reaches the Internet through a router that has a public address.

## 3.14.4.4 DHCP

The **Dynamic Host Configuration Protocol** automatically gives a device the network settings it needs: an IP address, a subnet mask and the address of the default router.

**How DHCP works:**

1. A device joining the network **broadcasts a discover message**, because it has no address yet.
2. A **DHCP server** replies with an **offer** of an address and settings.
3. The device sends a **request** accepting the offer.
4. The server sends an **acknowledgement** confirming that the address is **leased** to the device for a set time.

When the lease ends, the device renews it or the address returns to the pool to be used by another device.

**Advantages over manual configuration:** no typing mistakes or duplicate addresses; the settings are changed centrally; visiting devices connect automatically; and addresses are reused as devices leave.

## Exam technique

- **Layers:** name the layer and state its role, then give the item it adds (ports, IP addresses, MAC addresses).
- **Protocol questions:** give the job of each protocol in a few words and match it to the situation.
- **Subnet masks:** write the numbers in binary and AND them bit by bit.
- **DHCP:** give the steps in order and mention the lease.

## Common mistakes

- Saying a MAC address stays the same along the entire route. It changes at each hop.
- Confusing POP3 and IMAP: POP3 normally downloads and removes; IMAP leaves messages on the server.
- Saying SMTP is used to read email.
- Treating SFTP as plain FTP.
- Writing the AND of the mask with only some octets.

## More on this topic

- [TCP/IP revision notes](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-revision-notes/)
- [TCP/IP practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-practice/)
- [Cyber security study guide](/resources/oxfordaqa-a-level-computer-science-9645-cyber-security/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.4 The Transmission Control Protocol/Internet Protocol.
