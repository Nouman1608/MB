---
title: "Cambridge A Level Computer Science (9618): Circuit Switching, Packet Switching"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 14.2: how circuit and packet switching work, their benefits and drawbacks, router functions and how messages cross the internet."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 14.2 of Cambridge International AS & A Level Computer Science 9618 asks you to "show understanding of circuit switching" and "show understanding of packet switching", in each case covering the "benefits, drawbacks and where it is applicable". The notes and guidance add two more demands: the "function of a router in packet switching", and to "explain how packet switching is used to pass messages across a network, including the internet". It is A Level content, assessed in Paper 3 Advanced Theory.

Related: [Circuit switching and packet switching revision notes](/resources/cambridge-a-level-computer-science-9618-circuit-switching-packet-switching-revision-notes/) · [Circuit switching and packet switching practice questions](/resources/cambridge-a-level-computer-science-9618-circuit-switching-packet-switching-practice/) · [Topic 14 Communication and internet technologies study guide](/resources/a-level-computer-science-communication-internet-a-level/)

## What "switching" means

A network has many links joined at switching points (exchanges or routers). **Switching** is the method used to decide how data gets from one end to the other across those links. The two methods differ in one fundamental choice: whether a path is reserved before any data moves (circuit switching), or whether each piece of data finds its own way as it goes (packet switching). Almost every exam point in 14.2 follows from that single difference, so anchor every answer to it.

## Circuit switching in three phases

Describe circuit switching as three phases. Examiners reward the sequence, not just the phrase "dedicated path".

1. **Circuit establishment.** Before any data is sent, a complete end-to-end path is set up through the switching nodes. Each node on the path reserves capacity for this communication only.
2. **Data transfer.** All data travels along the same reserved path, so it arrives in the order it was sent, with a constant delay. No other communication can use the reserved capacity.
3. **Circuit disconnection.** When the communication ends, the path is released and its capacity becomes available to others.

### Benefits of circuit switching

- The bandwidth is guaranteed for the whole communication, so the transmission rate does not fall when the network is busy.
- Delay is constant and predictable, and data arrives in order, so nothing needs reordering at the receiver.
- Once the circuit is set up there is no per-item routing decision, so the data stream is simple to handle.

### Drawbacks of circuit switching

- Capacity is wasted whenever the line is idle (silence in a call), because nobody else can use it.
- Time is spent setting up the circuit before any data flows.
- If a link or node on the path fails, the communication is lost and must be set up again.
- When all the capacity on a route is reserved, a new connection cannot be made at all until a circuit is released.

### Where circuit switching is applicable

Circuit switching suits communication that is **continuous and real-time**, where a steady rate and constant delay matter more than efficient use of the network: a traditional telephone call, a live video link, or a dedicated link between two sites that exchange data all the time.

## Packet switching step by step

In **packet switching** a message is split into small units called **packets**. Each packet is made of a **header** and a **payload** (the part of the message it carries). The header holds the information the network and the receiver need:

| Header field | Why it is needed |
|---|---|
| Source IP address | So the receiver knows who sent it and where to send replies or requests for resends |
| Destination IP address | So each router can decide where to forward the packet |
| Sequence number | So the receiver can put packets back in the right order |
| Hop limit (time to live) | So a packet that cannot be delivered is discarded rather than circulating for ever |
| Error-checking data (checksum) | So corruption can be detected on arrival |

The packets are then sent **independently**. They share the network's links with packets from many other users, and each one may take a different route to the destination. On arrival, the receiver checks each packet, uses the sequence numbers to reassemble the message, and requests again any packet that is missing or corrupted.

### What a router does in packet switching

A **router** sits where networks meet. For each packet it:

1. receives the packet and reads the **destination IP address** from the header;
2. looks up its **routing table** to find the best next router (the **next hop**) towards that destination, which can take account of current traffic or a failed link;
3. reduces the hop limit by one and discards the packet if the limit reaches zero;
4. forwards the packet along the chosen link.

The router does not know or care that a packet belongs to a particular message. That is why consecutive packets can be sent by different routes: if a link becomes congested or fails between one packet and the next, the routing decision changes.

### Benefits of packet switching

- Links are shared, so capacity is not wasted when one user is idle; many users can use the network at once.
- No set-up is needed before sending.
- It is resilient: packets are routed around a failed link or router, and lost packets are simply resent.
- Errors affect only individual packets, so only those packets need resending, not the whole message.

### Drawbacks of packet switching

- Delay varies. Packets queue at busy routers, so they can arrive late, out of order or not at all.
- Each packet carries a header, which adds overhead to the data sent.
- The receiver must spend processing time reassembling packets and requesting resends.
- Real-time streams such as live calls can suffer from uneven arrival, because a late packet is of little use once its moment has passed.

### Where packet switching is applicable

Packet switching suits data where **accuracy and completeness matter more than exact timing**: email, web pages, file downloads, software updates. The internet is a packet-switched network, which is why a large download still completes correctly even when parts of the route are congested.

## Worked example 1: a file crossing the internet

*A user downloads a 12,000-byte file. The network carries 1,000 bytes of payload per packet. (Figures are invented for this example.)*

- The file is split into 12,000 ÷ 1,000 = **12 packets**, numbered 1 to 12 in their headers.
- Each packet gets the source and destination IP addresses, its sequence number, a hop limit and a checksum.
- At each router, the destination address is read and the routing table gives the next hop. Packets 1 to 6 go via one route; a link on that route then becomes congested, so the routing decision changes and packets 7 to 12 go via another.
- Packets arrive in the order 1, 2, 3, 4, 5, 7, 8, 6, 9, 11, 12. Packet 10 was dropped by a congested router.
- The receiver holds the packets, orders them by sequence number, finds that 10 is missing and requests it again. When it arrives, the file is reassembled complete.

Notice how each step answers a part of the specification: splitting, headers, router function, independent routes, reassembly and resending.

## Worked example 2: annotated answer to a "justify" question

*A school runs live video lessons to remote students, and posts recordings of the lessons for students to download later. Justify which switching method suits each use.* [4]

> "The live lesson suits circuit switching **[point]**, because a dedicated path gives a guaranteed bandwidth and constant delay, so the video and sound arrive steadily without freezing **[justification linked to the live lesson]**. The recordings suit packet switching **[point]**, because arriving in order or on time does not matter for a download; packets can be rerouted round busy links and missing ones resent, so the file arrives complete while sharing the network efficiently **[justification linked to the download]**."

Each method earns one mark for the choice and one for a reason tied to the scenario. A generic list of advantages with no link to "live lesson" or "download" would score less.

## Comparing the two in one sentence each

| Criterion | Circuit switching | Packet switching |
|---|---|---|
| Path | Reserved end to end before transfer | Chosen per packet, at each router |
| Use of capacity | Exclusive, wasted when idle | Shared, used efficiently |
| Arrival | In order, constant delay | Possibly out of order, variable delay |
| Failure of a link | Communication lost | Packets rerouted |
| Best for | Continuous real-time streams | Data that must arrive complete |

## Common mistakes

- Saying that in packet switching "all packets follow the same path". They are routed independently and may differ.
- Saying the router "reassembles the packets". Reassembly happens at the receiving host; routers only forward.
- Writing "circuit switching is faster". It has guaranteed bandwidth and constant delay, which is not the same as being faster.
- Leaving out the sequence number when describing the header, then being unable to explain reassembly.
- Giving advantages without saying for which scenario they matter.
- Confusing a hop limit with a sequence number: one stops endless circulation, the other restores order.

## Exam technique for the command words

- **Describe** (how packet switching works): give the steps in order, from splitting to reassembly, one mark per step.
- **Explain** (why packet switching is resilient): give the feature and the reason, for example "no path is reserved, so packets can be rerouted when a link fails".
- **Compare**: write paired points, one for each method on the same criterion, as in the table above.
- **Justify** (choice of method): name the method, then the feature that matters for this use, then why it matters here.
- **State** the function of a router: reads destination address, uses routing table, forwards to next hop. Three short points.

When a question gives a scenario, use its words in every point. "The video call" or "the downloaded file" in your sentence shows the examiner you are applying the idea, not reciting it.
