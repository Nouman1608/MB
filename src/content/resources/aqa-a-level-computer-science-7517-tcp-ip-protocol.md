---
title: "AQA A-Level Computer Science (7517): The Transmission Control Protocol/Internet Protocol (TCP/IP) Protocol"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.9.4: the TCP/IP layers, ports and sockets, application protocols, IP addressing and subnets, NAT, DHCP, the client-server model, REST and thin versus thick clients."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.9.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol** in AQA A-Level Computer Science (7517). It is the largest part of section 4.9 and has eleven strands: the four-layer TCP/IP stack with sockets, MAC addresses and ports; standard application layer protocols (FTP, HTTP, HTTPS, POP3, SMTP, SSH); IP address structure; subnet masking; IP standards (v4 and v6); public and private addresses; DHCP; NAT; port forwarding; the client-server model with WebSocket, REST and CRUD, and JSON compared with XML; and thin- versus thick-client computing.

The wider [communication and networking study guide](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/) covers the whole section. This page adds a working method for each strand and a worked subnet calculation.

Condensed notes are in the [TCP/IP revision notes](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol-revision-notes/), and exam-style questions are in the [TCP/IP practice questions](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol-practice/).

## The four layers of the TCP/IP stack

Layering splits communication into jobs. Each layer uses the services of the one below and offers a service to the one above. On sending, data passes **down** the stack and each layer adds its own header; on receiving, it passes **up** and each layer removes its header.

| Layer | Role | Example |
|---|---|---|
| **Application** | Gives programs access to the network and defines the messages they exchange | HTTP, SMTP, FTP |
| **Transport** | Splits data into segments, adds **port numbers**, and (with TCP) numbers segments, checks for loss and re-sends, so delivery is reliable and in order | TCP |
| **Network** (Internet) | Adds **IP addresses** and routes packets between networks | IP |
| **Link** | Sends frames across the local physical connection using **MAC addresses** | Ethernet, WiFi |

**MAC (Media Access Control) address.** A unique hardware address built into a network adapter. It is used at the link layer to deliver a frame to the right device on the **same local network**. As a packet crosses the Internet, the MAC addresses change at every hop while the IP addresses stay the same.

**Ports and sockets.** An IP address identifies a device; a **port number** identifies which program on that device should receive the data. A **socket** is the combination of an **IP address and a port number**, and one connection is identified by the sockets at each end. The transport layer uses sockets to pass data to the right application.

- **Well-known ports** (0 to 1023) are fixed for standard services, so a client knows where to find them: HTTP 80, HTTPS 443, FTP 21, SSH 22, SMTP 25, POP3 110.
- **Client ports** are high-numbered ports (for example 49152 to 65535) chosen temporarily by the client's operating system for the duration of a connection, so that replies come back to the right program.

For example, a browser may use a socket at client port 52814 to connect to the web server's socket at port 443.

## Standard application layer protocols

| Protocol | Purpose |
|---|---|
| **HTTP** | Requests and delivers web pages and other resources |
| **HTTPS** | HTTP protected by encryption, so data cannot be read or altered in transit and the server is authenticated |
| **FTP** | Transfers files between a client and a server |
| **SMTP** | **Sends** email, from client to server and between servers |
| **POP3** | **Retrieves** email from a mail server to a client |
| **SSH** | Secure, encrypted remote login and command execution |

**FTP access.** An FTP client connects to an FTP server. With **anonymous access** anyone can log in without an account, usually to download public files with limited rights. With **non-anonymous access** the user must supply a username and password, which gives access to private files and permission to upload.

**SSH.** An SSH client makes a **TCP connection** to a remote port and encrypts everything sent. It can be used to **log in securely to a remote computer and run commands**, which is how servers are managed remotely. An SSH client can also connect to the port of another service and send application-level commands, such as `GET` for HTTP, SMTP commands to send email, or POP3 commands to retrieve it.

**Roles**

- **Email server:** receives outgoing email (SMTP), stores incoming mail, and delivers it to clients on request (POP3).
- **Web server:** receives requests and serves web pages in text form (HTML, with references to other resources).
- **Web browser:** requests pages and their resources (images, scripts, style sheets), then renders them for the user.

## IP address structure and subnet masks

An IPv4 address is 32 bits, written as four decimal numbers (0 to 255). It splits into a **network identifier** (which network) and a **host identifier** (which device on it).

A **subnet mask** is a 32-bit pattern of 1s followed by 0s. The 1s mark the network part. A bitwise **AND** of the address with the mask gives the network identifier.

**Worked example 1.** Address 192.168.10.77, mask 255.255.255.192.

- Only the last number needs work: 77 = 01001101, 192 = 11000000.
- 01001101 AND 11000000 = 01000000 = 64.
- Network identifier: **192.168.10.64**. The mask has 26 ones, so the host part is 6 bits.
- Host number within the subnet: 77 − 64 = **13**.
- Hosts per subnet: 2⁶ − 2 = **62** (the all-0s address names the network and the all-1s address is the broadcast address).

With mask 255.255.255.0 the same address is in network 192.168.10.0 and has 254 usable host addresses. Subnetting lets an organisation divide a network into smaller groups to reduce broadcast traffic, improve security and organise by department.

## IPv4 and IPv6

- **IPv4:** 32-bit addresses give 2³² = 4,294,967,296 addresses.
- **IPv6:** 128-bit addresses, written as eight groups of hexadecimal digits, give 2¹²⁸ addresses.
- **Why v6 was introduced:** the number of devices connected to the Internet outgrew the IPv4 address space, so a much larger space was needed.

## Public and private IP addresses

- **Public (routable)** addresses are unique across the Internet and can be reached from it.
- **Private (non-routable)** addresses are reserved for use inside a local network and are not forwarded by Internet routers. The IPv4 private ranges are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255 and 192.168.0.0 to 192.168.255.255. Many networks can reuse the same private addresses.

## DHCP

**Dynamic Host Configuration Protocol (DHCP)** automatically gives a device an IP address (and other settings, such as the subnet mask, default gateway and DNS server) when it joins the network. A DHCP server holds a pool of addresses and **leases** one to each device for a period of time. This avoids manual set-up, prevents duplicate addresses and lets addresses be reused when devices leave.

## NAT and port forwarding

**Network Address Translation (NAT)** lets many devices with **private addresses** share **one public address**. The router replaces the private source address and port of outgoing packets with its public address and a port, records the mapping, and reverses the change on the replies. **Why it is used:** it conserves public IPv4 addresses, and it hides internal addresses, since unsolicited incoming packets have no mapping.

**Port forwarding** is a rule in the router that sends incoming traffic arriving at a given public port to a chosen private address and port. **Why it is used:** it allows a service inside the private network, such as a web server or a game server, to be reached from the Internet, which NAT would otherwise prevent.

## The client-server model

A **client** sends a **request message** to a server; the server replies with a **response message**.

**WebSocket.** Standard HTTP opens a request, receives a response and finishes. The **WebSocket** protocol creates a **full-duplex, persistent connection** between a web browser and a server over TCP, so either side can send data **at any time** without a fresh request. It is used for live applications such as chat, online games and live feeds.

**CRUD and REST.** Web applications connected to a database need four actions: **Create, Retrieve, Update, Delete (CRUD)**. **Representational State Transfer (REST)** uses standard HTTP request methods to carry them, so JavaScript in the browser can call a **REST API** on the server. The mapping to SQL is:

| CRUD | HTTP method | SQL |
|---|---|---|
| Create | POST | INSERT |
| Retrieve | GET | SELECT |
| Update | PUT | UPDATE |
| Delete | DELETE | DELETE |

Data is sent between server and web application as **JSON** or **XML**. Compared with XML, JSON is easier for a human to read, more compact, easier to create, and easier (so quicker) for computers to parse.

## Thin versus thick clients

| | Thin client | Thick client |
|---|---|---|
| Processing | Mostly on the server | Mostly on the client |
| Client hardware | Cheap, simple | More powerful and costly |
| Maintenance | Software updated centrally | Each client must be updated |
| Network dependence | Cannot work without the network | Can often work offline |
| Server load | Heavy | Lighter |

## Common mistakes

- Saying a port identifies a **computer**. It identifies a **program**; the IP address identifies the computer.
- Confusing **SMTP** (send) with **POP3** (retrieve).
- Writing that **MAC addresses stay the same all the way across the Internet**. They are used only on the local link.
- Forgetting **AND** with the mask to find the network identifier, or forgetting the **−2** for host counts.
- Saying NAT is **encryption**. It translates addresses.
- Treating **WebSocket** as a different protocol family to TCP. It runs over TCP.

## Exam technique

- For **layer** questions, name the layer, its job and the identifier it uses (port, IP or MAC).
- For **subnet** questions, write the binary of the last relevant octet.
- For **"why"** questions (NAT, DHCP, IPv6), give the problem each solves.
- For **comparisons**, give both sides of each point.

## Related resources

- [TCP/IP revision notes](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol-revision-notes/)
- [TCP/IP practice questions](/resources/aqa-a-level-computer-science-7517-tcp-ip-protocol-practice/)
- [The Internet study guide](/resources/aqa-a-level-computer-science-7517-the-internet/)

*Written against the AQA A-level Computer Science (7517) specification, 4.9.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol. Always check the current specification on the AQA website.*
