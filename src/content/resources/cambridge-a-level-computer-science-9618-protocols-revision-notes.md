---
title: "Cambridge A Level Computer Science (9618): Protocols -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 9618 section 14.1: what protocols define, layered stacks, TCP/IP layer functions, the six named protocols, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 14.1 Protocols, A Level content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 3. You need to explain why protocols are essential and why they are layered, describe the four TCP/IP layers and their roles when a message travels between hosts, and give the purposes of HTTP, FTP, POP3, IMAP, SMTP and BitTorrent.

Related: [Protocols study guide](/resources/cambridge-a-level-computer-science-9618-protocols/) · [Protocols practice questions](/resources/cambridge-a-level-computer-science-9618-protocols-practice/) · [Communication and Internet Technologies revision notes (all of Topic 14)](/resources/a-level-computer-science-communication-internet-a-level-revision-notes/)

## Why protocols are essential

A protocol is an agreed set of rules for communication. It defines:

- data format (header and data layout);
- addressing of sender and receiver;
- timing and sequencing of messages;
- flow control;
- error detection and what to do about errors;
- how connections are opened and closed (handshaking).

Without these, devices could not interpret each other's data. Published standards let different manufacturers' products work together.

## Why a stack

- Each layer has one job, uses the layer below and serves the layer above.
- Layer *n* on one host talks logically to layer *n* on the other.
- Layers can be changed independently if their interfaces stay the same.
- Simpler design and testing; teams can specialise by layer.

## TCP/IP layers

| Layer | Key functions | Adds |
|---|---|---|
| Application | Formats data for the application; uses HTTP, FTP, SMTP, POP3, IMAP, BitTorrent | Application data |
| Transport | Connection set-up (handshake); segments; sequence numbers; acknowledgements; resending; reordering; flow control | Port numbers and sequence numbers (segment header) |
| Internet | Addressing and routing between networks; routers forward by destination IP | Source and destination IP addresses (packet header) |
| Link | Transmission over one physical link; frames; signals on the medium | Hardware (MAC) addresses (frame header) |

- Going down the stack: each layer adds its header (encapsulation). Going up: each removes it.
- IP addresses stay the same end to end; hardware addresses change at every hop.
- Port numbers direct data to the right application on a host.

## The six protocols

| Protocol | Purpose | Key feature |
|---|---|---|
| HTTP | Request and deliver web resources between browser and server | Request (such as GET) and response with a status code (200 found, 404 not found) |
| FTP | Transfer files between client and server | Login (or anonymous), upload, download, list, rename and delete remote files |
| SMTP | Send email from client to server and between servers | Push protocol |
| POP3 | Retrieve email to one device | Downloads and usually deletes from the server; available offline |
| IMAP | Retrieve and manage email on the server | Synchronised across all devices; mail stays on the server |
| BitTorrent | Peer-to-peer file sharing | Pieces downloaded from and uploaded to many peers at once; load shared |

**BitTorrent terms**: torrent file (describes the file and gives the tracker); tracker (lists peers in the swarm); swarm (all peers sharing the file); seed (has the whole file); leecher (still downloading).

## Key terms

| Term | Meaning |
|---|---|
| Protocol | An agreed set of rules for data transmission between devices |
| Protocol stack | Protocols arranged in layers, each with its own function |
| Encapsulation | Each layer adding its own header to the data from the layer above |
| Segment | The unit of data at the Transport layer, with port and sequence numbers |
| Packet | The unit of data at the Internet layer, with IP addresses |
| Frame | The unit of data at the Link layer, with hardware addresses |
| Port number | Identifies the application or service on a host that data is for |
| Handshake | The exchange of messages that sets up a connection |
| Peer-to-peer | Each computer both supplies and receives data, with no central server holding the file |

## Exam traps

- "A set of rules" with no examples scores little.
- IP addresses are added at the Internet layer, ports at the Transport layer.
- Routers work at the Internet layer, reading destination IP addresses.
- SMTP sends; POP3 and IMAP retrieve.
- HTTP transfers web pages; it does not secure them.
- BitTorrent does not download from one server.
- In "message sent" questions, name the protocol at the Application layer and describe the reverse process at the receiver.

## Self-test

1. Give three things a protocol defines.
2. State one advantage of designing protocols as a stack of layers.
3. Which layer adds port numbers?
4. Which layer adds source and destination IP addresses?
5. What is the purpose of the Link layer?
6. State two ways TCP makes transmission reliable.
7. What changes at each hop: the IP addresses or the hardware addresses?
8. Which protocol transfers a page from a web server to a browser?
9. Which protocol should a web designer use to upload site files to a host and rename them there?
10. Give one advantage of POP3 over IMAP.
11. What does a tracker do in BitTorrent?
12. Why does a popular file download quickly using BitTorrent?

**Answers:** 1. Any three: data format; addressing; timing and sequencing; flow control; error detection and handling; connection set-up and closing. 2. Any one: a layer can be changed without changing the others; each layer is simpler to design and test; different teams can work on different layers. 3. Transport. 4. Internet. 5. To transmit data across one physical link, using frames with hardware addresses and converting them to signals. 6. Any two: sequence numbers to reorder segments; acknowledgements; resending unacknowledged segments; connection set-up; flow control. 7. The hardware addresses. 8. HTTP. 9. FTP. 10. Downloaded mail is available offline and uses little server storage. 11. It keeps a list of the peers in the swarm that are sharing the file and gives it to new peers. 12. Many peers each upload different pieces at the same time, so the load is shared and download capacity grows with the number of peers.
