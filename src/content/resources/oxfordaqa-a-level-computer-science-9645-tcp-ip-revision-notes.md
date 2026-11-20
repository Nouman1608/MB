---
title: "OxfordAQA A-Level Computer Science (9645): The Transmission Control Protocol/Internet Protocol -- Revision Notes"
seoTitle: "OxfordAQA 9645 TCP/IP Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.14.4: TCP/IP layers, sockets, MAC addresses, application protocols, subnet masks, IPv4 and IPv6, and DHCP."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.14.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.14, examined in Unit 4). For explanations and worked calculations, see the [TCP/IP study guide](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip/), then practise with the [TCP/IP practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-practice/).

## What the specification requires

- **3.14.4.1** Describe the role of the four layers (application, transport, internet, link); understand why protocols use layers; describe the role of **sockets**; know the role of **MAC addresses**.
- **3.14.4.2** Be familiar with **FTP, HTTP, HTTPS, IMAP, POP3, SMTP and SSH**; FTP clients and servers (anonymous and authenticated), SFTP; SSH for remote management; the role of an email server; how SMTP and POP3 or IMAP are used; the role of a web server and a web browser.
- **3.14.4.3** An IP address has a **network identifier** and a **host identifier**; **subnets** and **subnet masks**; **IPv4 and IPv6** and why IPv6 was introduced; **routable and non-routable** addresses.
- **3.14.4.4** The purpose of **DHCP**, how it works, and its advantages over manual configuration.

## The four layers

| Layer | Role | Adds or uses |
|---|---|---|
| Application | Protocol used by the program; formats data | HTTP, SMTP, FTP |
| Transport | Splits data into segments; ports; TCP numbers, acknowledges, resends | Port numbers |
| Internet | Sends packets between networks | Source and destination IP addresses |
| Link | Sends frames on the local network | MAC addresses |

Layers let each part be designed, tested and replaced **independently**, let products from different makers **work together**, and break a big problem into **smaller** ones.

## Sockets, ports and MAC addresses

- **Socket:** IP address plus port number, such as 203.0.113.8:443. It identifies one end of a connection, so one computer can hold many connections.
- **Well-known ports:** 80 HTTP, 443 HTTPS, 25 SMTP, 110 POP3, 143 IMAP, 21 FTP, 22 SSH.
- **MAC address:** the hardware address of a network interface, used for delivery on the local network.
- IP addresses stay the same end to end; **MAC addresses change at each hop**.

## Application protocols

| Protocol | Job | Note |
|---|---|---|
| HTTP | Request and deliver web pages | not encrypted |
| HTTPS | HTTP, encrypted | protects pages and forms in transit |
| FTP | Transfer files | anonymous or authenticated; not encrypted |
| SFTP | Encrypted file transfer | replacing FTP |
| SMTP | Send email | client to server and server to server |
| POP3 | Retrieve email | usually downloads and removes from server |
| IMAP | Retrieve and manage email | messages stay on the server; same view on every device |
| SSH | Encrypted remote login and commands | remote management |

- **Email path:** sender's client -> SMTP -> sender's email server -> SMTP -> recipient's email server -> POP3 or IMAP -> recipient's client.
- **Web server:** serves pages in text form (HTML). **Web browser:** retrieves the page and its resources (images, styles, scripts) and renders them.

## IP addresses and subnets

- An IP address = **network identifier** + **host identifier**.
- A **subnet mask** has 1s over the network part. **Address AND mask = network identifier.**
- **Hosts in a subnet:** 2^(host bits) - 2 (the first and last addresses are reserved).

| Address | Mask | Working | Network identifier |
|---|---|---|---|
| 172.16.37.201 | 255.255.252.0 | 37 AND 252 = 36 | 172.16.36.0 |
| 192.168.14.77 | 255.255.255.192 | 77 AND 192 = 64 | 192.168.14.64 |
| 192.168.5.130 | 255.255.255.128 | 130 AND 128 = 128 | 192.168.5.128 |
| 192.168.5.20 | 255.255.255.128 | 20 AND 128 = 0 | 192.168.5.0 |

Mask 255.255.255.192 has 6 host bits: 2^6 = 64 addresses, 62 usable hosts. The last two addresses above are on **different subnets**.

| | IPv4 | IPv6 |
|---|---|---|
| Length | 32 bits | 128 bits |
| Form | four decimal numbers | eight groups of four hexadecimal digits |
| Number of addresses | 4,294,967,296 | about 3.4 × 10^38 |

**Why IPv6:** IPv4 addresses ran out as the number of connected devices grew.

- **Routable (public):** unique on the Internet; routers forward packets to it.
- **Non-routable (private):** for use inside a network only (for example 10.x.x.x and 192.168.x.x); reused by many networks.

## DHCP

Purpose: give a device its **IP address and network settings automatically**.

1. Device broadcasts **discover**.
2. Server sends an **offer**.
3. Device sends a **request**.
4. Server sends an **acknowledgement**; the address is **leased** for a set time.

Advantages over manual set-up: no duplicate addresses or typing errors, central control, easy for visiting devices, and addresses are recycled.

## Exam traps

- **MAC addresses change** at each hop; IP addresses do not.
- **POP3 versus IMAP.** POP3 downloads; IMAP keeps messages on the server.
- **SMTP sends.** It is not used to read mail.
- **Layer order.** Application, transport, internet, link (top to bottom).
- **AND all four octets** when finding a network identifier.
- **Usable hosts** are two fewer than the addresses in the subnet.
- **FTP** does not encrypt; SFTP does.

## Quick self-test

1. Name the four layers of the TCP/IP stack, top to bottom.
2. Which layer uses MAC addresses?
3. Give one reason for using layers.
4. What is a socket?
5. Which protocol sends email?
6. What is the difference between POP3 and IMAP?
7. What does SSH allow an administrator to do?
8. Give the network identifier of 192.168.14.77 with mask 255.255.255.192.
9. How many bits does IPv6 use?
10. Why was IPv6 introduced?
11. What does a DHCP server send in reply to a discover message?
12. What is an advantage of DHCP over manual configuration?

### Answers

1. Application, transport, internet, link.
2. The link layer.
3. Each layer can be changed independently (or products from different makers work together).
4. An IP address combined with a port number, identifying one end of a connection.
5. SMTP.
6. POP3 usually downloads and removes messages from the server; IMAP leaves them on the server.
7. Log in securely to a remote computer and run commands.
8. 192.168.14.64
9. 128 bits.
10. IPv4 addresses were running out.
11. An offer.
12. It avoids duplicate addresses and typing errors (or settings are managed centrally).

## Next steps

- [TCP/IP study guide](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip/)
- [TCP/IP practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-practice/)
- [The Internet revision notes](/resources/oxfordaqa-a-level-computer-science-9645-internet-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.4 The Transmission Control Protocol/Internet Protocol.
