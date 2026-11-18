---
title: "Cambridge A Level Computer Science (9618): Circuit Switching, Packet Switching -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14: Communication and internet technologies"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 14.2
syllabusTopics:
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
    subtopic: "circuit-switching-packet-switching"
description: "Condensed 9618 notes on circuit and packet switching: phases, packet headers, router steps, benefits, drawbacks, scenario choices and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 14.2 "Circuit switching, packet switching" of Cambridge International AS & A Level Computer Science 9618. The syllabus asks for the benefits, drawbacks and applicability of each method, the function of a router in packet switching, and how packet switching passes messages across a network, including the internet. It is assessed in Paper 3.

Related: [Circuit switching and packet switching study guide](/resources/cambridge-a-level-computer-science-9618-circuit-switching-packet-switching/) · [Circuit switching and packet switching practice questions](/resources/cambridge-a-level-computer-science-9618-circuit-switching-packet-switching-practice/) · [Topic 14 revision notes](/resources/a-level-computer-science-communication-internet-a-level-revision-notes/)

## The one idea to remember

- **Circuit switching**: reserve a whole path first, then send.
- **Packet switching**: split the message, send every piece separately, let each router decide.

Every benefit and drawback follows from this. Reserving gives guarantees but wastes capacity; not reserving shares capacity but removes guarantees.

## Key terms

| Term | Meaning |
|---|---|
| Circuit | An end-to-end path whose capacity is reserved for one communication |
| Circuit establishment | Setting up the reserved path before any data is sent |
| Packet | A small unit of a message: header plus payload |
| Header | Control data in a packet: source and destination IP addresses, sequence number, hop limit, checksum |
| Payload | The part of the message carried by a packet |
| Sequence number | The packet's position in the message, used to reassemble it |
| Hop | One step from one router to the next |
| Hop limit (time to live) | A count reduced at each router; at zero the packet is discarded |
| Routing table | A router's table of destinations and the next hop to use for each |
| Next hop | The neighbouring router to which a packet is forwarded |
| Reassembly | The receiver putting packets back in order using sequence numbers |

## Circuit switching: recall list

**Phases**: establish the circuit → transfer data along it → release (disconnect) it.

**Benefits**
- Guaranteed bandwidth for the whole communication.
- Constant, predictable delay; data arrives in order.
- No routing decisions once set up.

**Drawbacks**
- Reserved capacity is wasted during idle periods.
- Set-up time before transfer.
- A failed link ends the communication.
- New connections are refused when capacity on a route is all reserved.

**Applicable to**: continuous, real-time communication, for example a telephone call or live video link.

## Packet switching: recall list

**Steps to pass a message across the internet**
1. Split the message into packets.
2. Add a header to each: source IP, destination IP, sequence number, hop limit, checksum.
3. Send each packet independently onto the network.
4. At each router: read the destination IP, consult the routing table, reduce the hop limit, forward to the next hop.
5. Packets may take different routes and arrive out of order; some may be lost.
6. At the destination: check each packet for errors, reorder by sequence number, request missing or damaged packets again, reassemble the message.

**Benefits**
- Links shared by many users; capacity not wasted.
- No set-up needed.
- Resilient: routes around failures; only lost packets are resent.

**Drawbacks**
- Variable delay; packets may queue, arrive out of order or be lost.
- Header overhead on every packet.
- Processing needed to reassemble and request resends.
- Uneven arrival can disrupt live audio or video.

**Applicable to**: email, web pages, file transfer, downloads; the internet as a whole.

## Router function in four verbs

**Receive** the packet → **read** the destination IP address → **look up** the next hop in the routing table → **forward** it (discarding it if the hop limit has reached zero).

A router does not reassemble messages. That happens at the receiving host.

## Quick scenario decisions

| Scenario | Better method | Deciding feature |
|---|---|---|
| Live radio interview between two studios | Circuit | Constant delay, guaranteed bandwidth |
| Sending a set of exam results by email | Packet | Must arrive complete; timing does not matter |
| Downloading a large game patch | Packet | Lost packets resent; links shared |
| Permanent link carrying data all day between two offices | Circuit | Line always busy, so reserved capacity is not wasted |

## Exam traps

- "Packets all follow the same route": wrong for packet switching.
- "Circuit switching is faster": say guaranteed bandwidth and constant delay instead.
- Router "reorders packets": no, the receiver does.
- Missing the sequence number from the header list, then no way to explain reassembly.
- Giving benefits that do not match the scenario in the question.
- Confusing the hop limit (stops endless circulation) with the sequence number (restores order).

## Self-test

1. Name the three phases of a circuit-switched communication.
2. Why is capacity wasted in circuit switching?
3. List four items in a packet header.
4. What does a router read from each packet?
5. What is a routing table used for?
6. Why can two packets from the same message take different routes?
7. Who reassembles the message, and using what?
8. What happens to a packet whose hop limit reaches zero?
9. Give one drawback of packet switching for a live video call.
10. Give one reason the internet uses packet switching.
11. A link on a circuit-switched path fails mid-call. What happens?
12. Why does packet switching need no set-up phase?

### Answers

1. Circuit establishment, data transfer, circuit disconnection (release).
2. The path is reserved for one communication even when no data is being sent, so no one else can use it.
3. Any four of: source IP address, destination IP address, sequence number, hop limit (time to live), checksum.
4. The destination IP address.
5. To find the next hop (the best neighbouring router) towards a packet's destination.
6. Each packet is routed independently; the routing decision can change between packets because of congestion or a failed link.
7. The receiving host, using the sequence numbers in the headers.
8. The router discards it.
9. Packets can arrive late or out of order, so the picture or sound may freeze or break up.
10. Links are shared efficiently among many users, and it is resilient: packets are rerouted round failures and lost packets are resent.
11. The communication is lost and the circuit must be set up again.
12. No path is reserved; each packet is simply forwarded hop by hop using its destination address.
