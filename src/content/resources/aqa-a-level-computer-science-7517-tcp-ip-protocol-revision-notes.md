---
title: "AQA A-Level Computer Science (7517): The Transmission Control Protocol/Internet Protocol (TCP/IP) Protocol -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "the-transmission-control-protocol-internet-protocol-tcp-ip-protocol-7517"
description: "Condensed AQA 7517 section 4.9.4 recall: TCP/IP layers, ports and sockets, application protocols, subnet masks, IPv6, NAT, DHCP, REST, WebSocket and thin clients."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.9.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol**, AQA A-Level Computer Science (7517). The explanations and a worked subnet example are in the [TCP/IP study guide](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol/); questions are in the [TCP/IP practice questions](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol-practice/).

## The four layers

| Layer | Role | Identifier used |
|---|---|---|
| Application | Programs' messages (HTTP, SMTP, FTP, ...) | Port of the service |
| Transport | Segments, port numbers; TCP gives reliable, ordered delivery | Port number |
| Network | Routes packets between networks | IP address |
| Link | Delivers frames on the local network | MAC address |

- Sending: data passes **down** the stack, each layer adding a header. Receiving: it passes **up**, each layer removing its header.
- **MAC address:** unique hardware address of a network adapter; used on the local link only.
- **Socket:** an IP address plus a port number.
- **Well-known ports** (0 to 1023): fixed for standard services. **Client ports:** high-numbered, chosen temporarily by the client's operating system.

| Service | Port |
|---|---|
| HTTP | 80 |
| HTTPS | 443 |
| FTP | 21 |
| SSH | 22 |
| SMTP | 25 |
| POP3 | 110 |

## Application protocols

| Protocol | Use |
|---|---|
| HTTP | Request and deliver web pages |
| HTTPS | HTTP with encryption and server authentication |
| FTP | Transfer files; anonymous access (no account, limited rights) or non-anonymous (login required) |
| SMTP | Send email |
| POP3 | Retrieve email |
| SSH | Encrypted remote login and commands; a TCP connection to a remote port |

- **Email server:** sends (SMTP) and stores mail, delivers it to clients (POP3).
- **Web server:** serves pages in text form (HTML).
- **Browser:** requests pages and resources, then renders them.

## IP addresses

- IPv4 address = **network identifier + host identifier**.
- **Subnet mask:** 1s for the network part. **Network identifier = address AND mask.**
- **Hosts per subnet = 2ʰ − 2** for h host bits.

**Check:** 192.168.10.77 with mask 255.255.255.192: 77 AND 192 = 64, so network 192.168.10.64; 6 host bits give 62 hosts.

| | IPv4 | IPv6 |
|---|---|---|
| Size | 32 bits | 128 bits |
| Addresses | 2³² = 4,294,967,296 | 2¹²⁸ |
| Why introduced | | IPv4 address space ran out as the number of devices grew |

- **Public (routable):** unique on the Internet. **Private (non-routable):** reserved for local networks (10.x.x.x, 172.16.x.x to 172.31.x.x, 192.168.x.x).

## DHCP, NAT and port forwarding

| | What it does | Why |
|---|---|---|
| DHCP | Automatically leases an IP address and settings to a device | No manual set-up, no duplicate addresses, addresses reused |
| NAT | Router swaps private addresses and ports for its public address and port | Saves public addresses; hides internal devices |
| Port forwarding | Sends traffic for a given public port to a chosen internal address and port | Lets Internet users reach a server inside a private network |

## Client-server model

- Client sends a **request message**; server sends a **response message**.
- **WebSocket:** full-duplex, persistent connection between browser and server over TCP; either side can send at any time. Used for chat, live feeds and games.
- **REST:** JavaScript in the browser calls a REST API on the server using HTTP methods.

| CRUD | HTTP | SQL |
|---|---|---|
| Create | POST | INSERT |
| Retrieve | GET | SELECT |
| Update | PUT | UPDATE |
| Delete | DELETE | DELETE |

- **JSON compared with XML:** easier to read, more compact, easier to create, quicker to parse.

## Thin versus thick clients

| | Thin | Thick |
|---|---|---|
| Processing | On the server | On the client |
| Hardware cost | Low | Higher |
| Updates | Central | On every client |
| Offline use | No | Often yes |
| Server load | High | Lower |

## Key terms

| Term | Definition |
|---|---|
| Protocol stack | Layers of protocols, each using the layer below |
| Socket | The combination of an IP address and a port number |
| Port | A number identifying the program that should receive data |
| Subnet | A smaller network formed by dividing a larger network |
| Subnet mask | A bit pattern used to find the network part of an address |
| Lease | The time for which a DHCP server gives out an address |
| Full-duplex | Data can be sent in both directions at the same time |
| API | Application programming interface: a defined way for programs to talk to each other |
| JSON | JavaScript Object Notation: a compact text format for data |
| Thin client | A client that relies on a server for most processing |

## Exam traps

- **Port = program; IP = device; MAC = local link.**
- **SMTP sends; POP3 retrieves.**
- **MAC addresses change at each hop;** IP addresses do not.
- **Subnet:** AND the address with the mask, then subtract 2 from the host count.
- **NAT is address translation, not encryption.**
- **WebSocket is persistent and two-way,** unlike a single HTTP request.
- **Do not mix up CRUD and HTTP methods.** PUT is update; POST is create.

## Self-test

1. Name the four layers of the TCP/IP stack.
2. What is a socket?
3. What is the difference between a well-known port and a client port?
4. Which protocol retrieves email?
5. Give one use of SSH.
6. What are the two parts of an IPv4 address?
7. Find the network identifier of 172.16.5.200 with mask 255.255.255.224.
8. Why was IPv6 introduced?
9. Give one reason for using DHCP.
10. What does port forwarding allow?
11. Which HTTP method maps to SQL SELECT?
12. Give one difference between a thin client and a thick client.

**Answers**

1. Application, transport, network (Internet), link.
2. An IP address combined with a port number.
3. A well-known port is a fixed number for a standard service; a client port is chosen temporarily by the client.
4. POP3.
5. Secure remote login to run commands on another computer (or secure file transfer or tunnelling).
6. A network identifier and a host identifier.
7. 200 AND 224 = 192, so 172.16.5.192.
8. IPv4 addresses were running out as more devices connected.
9. Addresses are given out automatically, avoiding manual set-up and duplicates.
10. Users on the Internet to reach a server on a private network.
11. GET.
12. A thin client relies on the server for most processing; a thick client does most of it locally.

## Related resources

- [TCP/IP study guide](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol/)
- [TCP/IP practice questions](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol-practice/)
- [The Internet revision notes](/resources/aqa-a-level-computer-science-7517-the-internet-revision-notes/)
