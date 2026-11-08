---
title: "A Level Computer Science: Communication and Internet Technologies (A Level) — Revision Notes (Cambridge 9618)"
seoTitle: "Cambridge 9618 Protocols and Switching Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Communication and internet technologies"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
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
description: "Notes on protocol stacks, TCP/IP layers, email, web, FTP and BitTorrent protocols, routers, and circuit and packet switching for Cambridge A Level 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

These notes condense Topic 14 Communication and internet technologies, A Level content in Cambridge International AS & A Level Computer Science 9618. You need to explain why protocols are essential and why they are layered, describe each of the four TCP/IP layers when a message is sent, give the purpose of HTTP, FTP, POP3, IMAP, SMTP and BitTorrent, and compare circuit switching with packet switching, including the router's role. It is examined in Paper 3.

Related: [Communication and Internet Technologies study guide](/resources/a-level-computer-science-communication-internet-a-level/) · [practice questions](/resources/a-level-computer-science-communication-internet-a-level-practice/) · [AS Communication revision notes](/resources/a-level-computer-science-communication-revision-notes/)

## Syllabus coverage

- **14.1 Protocols**: why a protocol is essential; protocol implementation as a stack with each layer having its own function; the TCP/IP suite's four layers (Application, Transport, Internet, Link), their purpose and function and their use when a message is sent host to host; HTTP, FTP, POP3, IMAP, SMTP, BitTorrent and their purposes.
- **14.2 Circuit switching, packet switching**: benefits, drawbacks and applicability of each; the function of a router in packet switching; how packet switching passes messages across a network, including the internet.

## Key terms

| Term | Meaning |
|---|---|
| Protocol | A set of rules governing how data is formatted, addressed, transmitted, checked and received |
| Protocol stack | Protocols arranged in layers, each with one job, using the layer below and serving the layer above |
| Encapsulation | Each layer adding its own header to the data on the way down the stack |
| Packet | A unit of data with a header (addresses, sequence number, error check) and a payload |
| Router | A device that forwards packets between networks using the destination IP address and a routing table |
| Peer-to-peer | Computers share resources directly with each other, with no central server holding the file |

## Why layers?

- Each layer can be designed, changed and tested separately.
- A layer can be replaced (e.g. Wi-Fi instead of Ethernet) without changing the others.
- Different manufacturers' products work together if they follow the same layer standards.

## TCP/IP layers: sending and receiving

| Layer | On the sending host | On the receiving host |
|---|---|---|
| Application | The application's protocol (e.g. HTTP, SMTP) formats the data | Passes the data to the right application |
| Transport (TCP) | Splits the data into segments; adds port numbers and sequence numbers; sets up the connection | Reorders segments, checks for missing ones, sends acknowledgements, requests resends |
| Internet (IP) | Adds source and destination IP addresses to form packets; routes them | Checks the packet is addressed to this host and passes it up |
| Link | Frames the packet with hardware (MAC) addresses and transmits it as signals | Receives the frames from the medium and passes the packets up |

Memory hook: **A**pplication formats, **T**ransport splits and guarantees, **I**nternet addresses and routes, **L**ink transmits.

## Application protocols

| Protocol | One-line purpose |
|---|---|
| HTTP | Transfers web pages and resources between web server and browser |
| FTP | Uploads and downloads files between a client and a server |
| SMTP | Sends email from client to server and between servers |
| POP3 | Downloads email to one device, usually deleting it from the server |
| IMAP | Leaves email on the server, synchronised across all devices |
| BitTorrent | Peer-to-peer sharing of a file split into pieces among a swarm |

**BitTorrent sequence**: torrent file → contact the tracker → get a list of peers in the swarm → download different pieces from several peers at once → upload pieces held to other peers → when complete, can remain as a seed.

## Circuit switching vs packet switching

| Point | Circuit switching | Packet switching |
|---|---|---|
| Route | One dedicated path set up before transfer | Each packet routed separately; routes can differ |
| Order | Data arrives in order | Packets may arrive out of order; reassembled with sequence numbers |
| Bandwidth | Reserved for the whole connection, even when idle | Shared by many users; used efficiently |
| Set-up time | Needed | None |
| Resilience | A broken link ends the connection | Packets rerouted round failures |
| Delay | Fixed and predictable | Variable; packets may be lost and resent |
| Applicable to | Live voice and video calls needing continuous, real-time data | Email, web pages, file downloads |

## How packet switching passes a message

1. The message is split into packets of a set size.
2. Each packet gets a header: source and destination IP addresses, sequence number, and error-checking data (and a hop limit).
3. Each packet is sent independently; at each router, the destination address is read and the routing table gives the next hop.
4. Packets may take different routes and arrive in any order.
5. The receiver checks for errors, reorders the packets using the sequence numbers and requests any missing packets again.

## Worked example: choosing switching for a scenario

*A charity streams a live concert and also lets supporters download the recording afterwards.*

- Live stream: circuit switching would suit it, as a dedicated path gives guaranteed bandwidth and constant delay, so the stream does not stutter.
- Download: packet switching suits it, as the order of arrival and small delays do not matter; packets can be rerouted if a link fails, and lost packets are simply resent.

## Common mistakes and exam traps

- Packet switching confused with circuit switching (November 2024, June 2025).
- HTTP named as a TLS protocol (June 2025).
- IP addressing placed at the Transport layer, or segmenting placed at the Internet layer.
- POP3 or IMAP given as the protocol that sends email; that is SMTP.
- Saying a router "connects computers"; in packet switching it reads the destination address and forwards each packet towards it.
- Not linking the layer's job to the task in the question (e.g. "the web page", "the email").

## Frequently asked questions

**Does the internet use circuit switching for voice calls?** Internet calls are carried by packet switching; circuit switching is the approach of traditional telephone networks. In the exam, give the features of each and match them to the scenario.

**What is the difference between a segment and a packet?** The Transport layer splits data into segments; the Internet layer adds IP addresses, forming packets. Many questions use "packet" for both, so follow the wording of the question.

**What is a tracker?** A server that keeps a record of the peers sharing a particular file, so a new peer knows whom to connect to. It does not hold the file.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 14 Communication and internet technologies (14.1 and 14.2). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
