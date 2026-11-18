---
title: "Cambridge A Level Computer Science (9618): Protocols"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14: Communication and internet technologies"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 14.1
syllabusTopics:
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
    subtopic: "protocols"
description: "Study guide to 9618 section 14.1: why protocols are essential, layered stacks, the four TCP/IP layers in action, and the six named protocols in depth."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 14.1 Protocols of Cambridge International AS & A Level Computer Science 9618 asks you to show understanding of why a protocol is essential for communication between computers, how protocol implementation can be viewed as a stack in which each layer has its own functionality, the TCP/IP protocol suite (its four layers, the purpose and function of each, and their application when a message is sent from one host to another on the internet), and the protocols HTTP, FTP, POP3, IMAP, SMTP and BitTorrent and their purposes. It is A Level content, examined in Paper 3.

Related: [Protocols revision notes](/resources/cambridge-a-level-computer-science-9618-protocols-revision-notes/) · [Protocols practice questions](/resources/cambridge-a-level-computer-science-9618-protocols-practice/) · [Communication and Internet Technologies study guide (all of Topic 14)](/resources/a-level-computer-science-communication-internet-a-level/)

## What a protocol actually fixes

Saying "a protocol is a set of rules" earns little on its own. The marks come from saying **what** the rules cover and **why** each matters. A protocol defines:

- **data format**: how the bits of a message are arranged, so the receiver can tell the header from the data;
- **addressing**: how the sender and receiver are identified;
- **timing and sequencing**: who sends when, and how parts of a message are numbered so they can be reassembled in order;
- **flow control**: how fast data is sent, so a slow receiver is not overwhelmed;
- **error detection and correction**: how damaged or missing data is noticed and what happens next, such as a request to resend;
- **connection set-up and closing**: how two devices agree to start and end communication (handshaking).

Without agreement on all of these, two computers could each be working correctly and still be unable to understand each other. Because protocols are published standards, devices and software from different manufacturers can interoperate.

## Why a stack of layers?

Protocols are organised into a **stack**. Each layer solves one part of the communication problem, uses the service provided by the layer beneath and offers a service to the layer above. Layer *n* on one host communicates logically with layer *n* on the other host, even though the data physically passes down through the layers on the sender and up through them on the receiver.

Benefits of layering:

- each layer is simpler to design, test and understand;
- a layer can be replaced without changing the others, as long as its interface to adjacent layers stays the same (a laptop can move from a wired link to Wi-Fi without its email software changing);
- different teams and manufacturers can work on different layers;
- standard interfaces make it easier to combine products.

## The four TCP/IP layers in more detail

| Layer | Purpose | Detail worth quoting |
|---|---|---|
| Application | Provide network services to applications | Defines the messages an application exchanges, such as an HTTP request for a page, or an SMTP command to send mail |
| Transport | Reliable host-to-host delivery to the right application | TCP sets up a connection with a handshake, splits data into numbered segments, adds port numbers, acknowledges receipt, resends lost segments, reorders segments and controls flow |
| Internet | Move packets between networks | IP adds the source and destination IP addresses; routers use the destination address to choose the next hop; a hop limit stops packets circulating for ever |
| Link | Move data across one physical link | Puts packets into frames with hardware (MAC) addresses for the next device on the local network, and converts frames to signals on the medium |

**Port numbers** let the transport layer hand data to the right application on a host. Well-known examples are 80 for HTTP, 25 for SMTP, 110 for POP3 and 143 for IMAP; you need to understand their purpose, not memorise the values.

A key point for the Internet and Link layers: the **IP addresses** in a packet stay the same from source to destination, but the **hardware addresses** in the frame change at every hop, because each frame only travels to the next device.

## The application protocols in depth

### HTTP

HyperText Transfer Protocol is used by a browser (client) to request resources from a web server. The client sends a **request**, such as GET for a page, and the server sends a **response** that includes a status code (for example 200 for success or 404 for not found) and the requested content. A single page usually needs many requests: the HTML first, then each image, style sheet and script it refers to.

### FTP

File Transfer Protocol transfers files between a client and a server, in either direction. It supports logging in with a user name and password (or anonymous access where allowed), listing, renaming and deleting files on the server, and uploading or downloading. It is suited to managing files on a remote server, such as uploading a website's files to a web host.

### SMTP

Simple Mail Transfer Protocol **sends** email. It carries a message from the sender's email client to their mail server, and from that server to the recipient's mail server. It is a **push** protocol: the sending side initiates the transfer.

### POP3 and IMAP

Both **retrieve** email from the recipient's mail server; they are **pull** protocols.

| | POP3 | IMAP |
|---|---|---|
| Where mail is kept | Downloaded to the device; normally deleted from the server | Kept on the server; the device shows a synchronised copy |
| Several devices | Each sees only what it downloaded | All see the same mailbox, folders and read/unread status |
| Offline use | All downloaded mail is available offline | Only messages already cached are available offline |
| Server storage | Little needed | More needed, as all mail stays on the server |

### BitTorrent

BitTorrent provides **peer-to-peer** file sharing. The file is split into small pieces; a peer that has some pieces uploads them to others while downloading the pieces it lacks from many peers at once. Because every downloader also uploads, the capacity of the swarm grows with its popularity, and no single server has to supply the whole file to everyone. Each piece is checked against a hash so a corrupted piece can be detected and downloaded again.

## Worked example: an email crossing the internet

**Question.** Describe how the TCP/IP protocol suite is used when Leila sends an email from her laptop to Tomás, who reads it on his phone and tablet.

**Model answer**

1. **Application layer (sender)**: Leila's email client formats the message and uses **SMTP** to send it to her mail server.
2. **Transport layer**: TCP opens a connection with the server, splits the message into numbered segments and adds the port number for the mail service.
3. **Internet layer**: IP puts each segment in a packet with the source and destination IP addresses; routers forward each packet towards the mail server.
4. **Link layer**: on each link, the packet is placed in a frame addressed to the next device's hardware address and sent as signals.
5. Leila's mail server passes the message to Tomás's mail server using **SMTP**, again through all four layers.
6. At each receiving host the layers work upwards: frames are unpacked, IP checks the address, TCP acknowledges segments, requests any missing ones and reassembles the message in order.
7. **Application layer (receiver)**: Tomás's phone and tablet retrieve the message with **IMAP**, so both show the same synchronised mailbox.

*Why it scores:* every layer is named with a function tied to this message, the two different protocols (SMTP to send, IMAP to retrieve) are used at the right points, and the answer explains IMAP's suitability for two devices.

## Common mistakes

- Defining a protocol with no detail of what the rules cover.
- Saying the layers communicate directly with each other across the network; data passes down and up the stacks, and only the bottom layer uses the physical medium.
- Adding IP addresses at the Transport layer, or port numbers at the Internet layer.
- Saying hardware addresses stay the same from source to destination.
- Using POP3 or IMAP to send email.
- Describing BitTorrent as downloading from one server.

## Exam technique

**Explain why** a protocol is essential: give at least two things the rules define and what would go wrong without them. **Describe** a layer: give its purpose and two functions linked to the scenario. **Describe** what happens when a message is sent: work down the sender's stack, across the routers, and up the receiver's stack, naming the protocol used at the Application layer. **Identify** and justify a protocol: name it and give the feature that suits the task, such as IMAP's synchronisation across devices or BitTorrent's sharing of load among peers.
