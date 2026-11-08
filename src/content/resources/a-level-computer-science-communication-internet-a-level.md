---
title: "A Level Computer Science: Communication and Internet Technologies (A Level) (Cambridge 9618)"
seoTitle: "Cambridge 9618 Protocols and Switching Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Communication and internet technologies"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
    subtopic: "protocols"
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
    subtopic: "circuit-switching-packet-switching"
description: "Study guide to protocols, the four-layer TCP/IP stack, HTTP, FTP, POP3, IMAP, SMTP, BitTorrent, and circuit versus packet switching for Cambridge A Level 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 14 Communication and internet technologies explains how computers agree to communicate. A protocol is a set of rules for data transmission; the internet uses the TCP/IP suite, a stack of four layers that each do one job, plus application protocols such as HTTP, SMTP and BitTorrent. The topic also compares circuit switching with packet switching. In Cambridge International AS & A Level Computer Science 9618 it is A Level content, examined in Paper 3.

Related: [Communication and Internet Technologies revision notes](/resources/a-level-computer-science-communication-internet-a-level-revision-notes/) · [practice questions](/resources/a-level-computer-science-communication-internet-a-level-practice/) · [AS Communication study guide](/resources/a-level-computer-science-communication/)

## Where this fits in 9618

Topic 14 extends AS Topic 2 (networks, IP addresses and DNS). Paper 3 Advanced Theory (1 hour 30 minutes, 75 marks) assesses sections 13 to 20. Questions usually describe a task, such as sending an email or downloading a file, and ask what a layer or protocol does in that task, so answers must refer to the scenario.

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 14.1 Protocols | Show understanding of why a protocol is essential for communication between computers |
| 14.1 | Show understanding of how protocol implementation can be viewed as a stack, where each layer has its own functionality |
| 14.1 | Show understanding of the TCP/IP protocol suite: the four layers (Application, Transport, Internet, Link), the purpose and function of each, and their application when a message is sent from one host to another on the internet |
| 14.1 | Show understanding of HTTP, FTP, POP3, IMAP, SMTP and BitTorrent and their purposes (BitTorrent provides peer-to-peer file sharing) |
| 14.2 Switching | Show understanding of circuit switching and packet switching: benefits, drawbacks and where each is applicable |
| 14.2 | Show understanding of the function of a router in packet switching |
| 14.2 | Explain how packet switching is used to pass messages across a network, including the internet |

## Why is a protocol essential?

Two computers can only exchange data if they agree on every detail: the format of the data, how it is addressed, the order and timing of messages, how errors are detected and what to do when they happen. A **protocol** is that agreed set of rules. Without it, a receiver could not tell where one message ends, who it is for, or whether it arrived intact. Because the rules are published standards, hardware and software from different manufacturers can work together.

## Why is a protocol suite viewed as a stack?

Communication is split into **layers**. Each layer:

- has one area of responsibility and its own protocols;
- uses the services of the layer below and provides a service to the layer above;
- communicates logically with the same layer on the other host.

This makes the system easier to design and maintain: one layer can be changed (for example, Ethernet replaced by Wi-Fi at the bottom) without changing the others, and each layer's protocols can be developed separately.

## What does each TCP/IP layer do?

| Layer | Purpose | Function and protocols |
|---|---|---|
| Application | Provides network services to the user's applications | Formats the data for the application using protocols such as HTTP, FTP, SMTP, POP3 and IMAP |
| Transport | Provides host-to-host data transfer | TCP splits the data into segments, numbers them, adds port numbers so data reaches the right application, sets up the connection, uses acknowledgements to resend lost segments, and reassembles segments in order at the receiver |
| Internet | Moves packets across networks | IP adds the source and destination IP addresses to make packets and routes each packet towards its destination; routers work at this layer |
| Link | Moves data across one physical network link | Uses hardware (MAC) addresses and network protocols such as Ethernet or Wi-Fi to put frames onto the medium as signals and take them off |

### What happens when a message is sent?

Suppose a student sends a web form to a server.

1. **Application layer**: the browser formats the request using HTTP.
2. **Transport layer**: TCP splits the data into segments, each with a header holding the port numbers and a sequence number.
3. **Internet layer**: IP adds the source and destination IP addresses, forming packets.
4. **Link layer**: each packet is placed in a frame with hardware addresses and sent as signals over the cable or radio link.
5. Routers along the way look at the destination IP address and forward each packet towards the server.
6. At the server, the layers work in reverse: the link layer passes packets up, IP checks the address, TCP reorders the segments, requests any missing ones and acknowledges receipt, and HTTP passes the request to the web server software.

Each layer adds its own header on the way down (**encapsulation**) and removes it on the way up.

## What are HTTP, FTP, SMTP, POP3, IMAP and BitTorrent for?

| Protocol | Purpose |
|---|---|
| HTTP (HyperText Transfer Protocol) | Requests and transfers web pages and their resources between a web server and a browser |
| FTP (File Transfer Protocol) | Transfers files between a client and a server, for uploading and downloading; can require a login |
| SMTP (Simple Mail Transfer Protocol) | Sends email from a client to a mail server and between mail servers (a "push" protocol) |
| POP3 (Post Office Protocol 3) | Downloads email from the server to one device; messages are normally deleted from the server, so other devices do not see them |
| IMAP (Internet Message Access Protocol) | Keeps email on the server and synchronises it across every device, so read, moved and deleted messages match everywhere |
| BitTorrent | Peer-to-peer file sharing: a file is split into pieces that are downloaded from, and uploaded to, many peers at once |

### How does BitTorrent work?

A file is divided into small pieces. A **torrent** file holds information about the file and the address of a **tracker**, a server that records which computers (peers) in the **swarm** are sharing it. A new peer contacts the tracker, gets a list of peers, and downloads different pieces from several peers at once. As soon as it has a piece it can upload it to others. Peers with the whole file are **seeds**; peers still downloading are often called **leechers**. Because many peers share the load, popular files download quickly and no single server is overloaded.

## Circuit switching versus packet switching

**Circuit switching** sets up a dedicated path (circuit) between the two ends before any data is sent. The path is reserved for the whole communication, all data travels along it in order, and it is released at the end. The traditional telephone network worked this way.

**Packet switching** splits the message into packets. Each packet carries a header with, for example, the source and destination IP addresses, a sequence number and error-checking data. Each packet is sent independently and may take a different route; packets can arrive out of order and are reassembled by the receiver using the sequence numbers. Missing packets are requested again. The internet uses packet switching.

| | Circuit switching | Packet switching |
|---|---|---|
| Path | Dedicated, reserved for the whole call | Shared; each packet routed independently |
| Order of arrival | Always in order | May arrive out of order; reassembled |
| Bandwidth | Guaranteed, but wasted when idle | Shared efficiently between many users |
| Set-up | Needs a connection set up first | No set-up needed |
| If a link fails | The connection is lost | Packets are rerouted around the failure |
| Delay | Constant, predictable | Varies; packets may be delayed or lost |
| Suits | Real-time, continuous communication such as a voice call or live video | Data such as email, web pages and file transfer, where small delays do not matter |

### What does a router do in packet switching?

A **router** receives each packet, reads its destination IP address, and uses its **routing table** to decide the best next router (next hop) towards the destination, then forwards it. If a route is busy or broken, a different route can be chosen, so packets of one message can travel by different paths. Routers also discard packets whose hop limit has run out, so lost packets do not circulate for ever.

## Common mistakes

- Confusing packet switching and circuit switching, or saying that packets in packet switching all follow the same path (November 2024, June 2025).
- Naming HTTP as a TLS protocol (June 2025). HTTP transfers web pages; TLS (Topic 17) secures the connection.
- Mixing up the roles of the layers: IP addresses are added at the Internet layer, not the Transport layer.
- Saying POP3 sends email. SMTP sends; POP3 and IMAP retrieve.
- Describing BitTorrent as downloading from one server.

## Frequently asked questions

**Why is TCP called reliable?**
It numbers segments, waits for acknowledgements and resends anything that is not acknowledged, so the receiver gets all the data in the right order.

**Why is packet switching more resilient than circuit switching?**
No single path is reserved. If a router or link fails, later packets are routed another way, and missing packets are resent.

**Is IMAP or POP3 better for someone with a phone and a laptop?**
IMAP, because the email stays on the server and both devices show the same, synchronised mailbox.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 14 Communication and internet technologies (14.1 Protocols, 14.2 Circuit switching, packet switching). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
