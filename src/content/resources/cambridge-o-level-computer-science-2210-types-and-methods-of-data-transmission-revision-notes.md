---
title: "Cambridge O Level Computer Science (2210): Types and methods of data transmission -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 2.1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "types-and-methods-of-data-transmission"
description: "Revision notes for Cambridge O Level Computer Science 2210 section 2.1: packets, packet switching, transmission methods, USB, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 2.1, Types and methods of data transmission. For full explanations and worked examples, use the [Types and methods of data transmission study guide](/resources/cambridge-o-level-computer-science-2210-types-and-methods-of-data-transmission/).

## What the syllabus asks

- Data is broken down into packets; describe the structure of a packet and the process of packet switching.
- Describe serial, parallel, simplex, half-duplex and full-duplex transmission, and explain the suitability of each for a given scenario, with advantages and disadvantages.
- Understand the USB interface and how it transmits data, with benefits and drawbacks.

## Key terms

| Term | Definition |
|---|---|
| Packet | A small unit of data sent across a network |
| Packet header | Holds the destination address, packet number and originator's address |
| Payload | The part of the packet carrying the actual data |
| Trailer | The end of the packet; marks where it finishes and can hold error-checking data |
| Packet switching | Packets travel independently, possibly by different routes, and are reordered at the destination |
| Router | Device that decides the route each packet takes |
| Serial | One bit at a time along a single wire |
| Parallel | Several bits at once along several wires |
| Simplex | One direction only |
| Half-duplex | Both directions, one at a time |
| Full-duplex | Both directions at the same time |
| Skew | Bits sent together in parallel arriving at slightly different times |
| USB | Universal serial bus: a standard serial interface that can also supply power |

## Packet switching: five steps

1. Data broken into packets.
2. Each packet may take a different route.
3. Routers control the route of each packet.
4. Packets may arrive out of order.
5. When the last packet arrives, packets are reordered using packet numbers.

**Why packets?** Shared links, only damaged packets resent, routes can avoid congestion.

## Header contents: three items, three reasons

| Item | Reason |
|---|---|
| Destination address | Routers can forward the packet to the right place |
| Packet number | Receiver can put packets back in order |
| Originator's address | Receiver knows who sent it and where to send a reply or resend request |

## Choosing a method: decision guide

| If the scenario says... | Think |
|---|---|
| Long cable, many metres or more | Serial |
| Very short distance, speed matters | Parallel |
| Data only ever goes one way | Simplex |
| Two-way, but taking turns is acceptable | Half-duplex |
| Two-way, both talking at once | Full-duplex |

A link has **two** descriptions: serial or parallel **and** simplex, half-duplex or full-duplex. Example: a USB keyboard is serial; a video call over broadband is full-duplex.

## Advantages and disadvantages in one grid

| Method | Advantage | Disadvantage |
|---|---|---|
| Serial | Reliable over distance; cheaper cable; less interference | Slower than parallel over short distances |
| Parallel | Faster over short distances | Skew and interference over long distances; more expensive cable |
| Simplex | Simple and cheap | No way to send acknowledgements back |
| Half-duplex | Two-way on one channel | Must wait for the other side to finish |
| Full-duplex | Fastest two-way communication | More complex hardware |

## USB summary

**How it is used:** device plugged in, computer detects it, identifies it, loads the driver; data sent serially; power can be supplied along the cable.

**Benefits:** universal standard; automatic detection and drivers; supplies power; backwards compatible; connectors hard to insert wrongly.

**Drawbacks:** short maximum cable length; older versions slow; limited power for larger devices; different connector types may need adaptors.

## Packet arithmetic

Number of packets = file size ÷ payload size (in the same units).
A 5 MiB file with a 512 KiB payload: 5 × 1024 = 5120 KiB; 5120 ÷ 512 = **10 packets**.

## Exam traps

- "Packets take the quickest route." Each may take a **different** route chosen by routers.
- "Packets are put in order as they arrive." Only after the **last** one has arrived.
- "The trailer holds the destination address." The header does.
- "Serial is faster." Parallel is faster over short distances; serial is more reliable over long ones.
- "Half-duplex is one-way." It is two-way, one direction at a time.
- "USB is parallel." It is serial: the S stands for serial.
- Choosing a method without a reason from the scenario.

## Self-test

1. Name the three parts of a packet.
2. Name the three items in a packet header.
3. Why does the header include the packet number?
4. What device controls the route a packet takes?
5. Why might packets arrive out of order?
6. When are the packets reordered?
7. Give one advantage of serial over parallel transmission.
8. What is skew?
9. A baby monitor sends sound from a bedroom to a parent's unit and never sends anything back. Which direction method is it?
10. Give an example of a half-duplex system.
11. Give two benefits of USB.
12. A 2 MiB file is sent with a 256 KiB payload per packet. How many packets are needed?

**Answers**

1. Header, payload, trailer.
2. Destination address, packet number, originator's address.
3. So the receiver can put the packets back in the correct order.
4. A router.
5. They can take different routes, which differ in length and congestion.
6. Once the last packet has arrived.
7. Any one: more reliable over long distances; cheaper cable; less interference between wires; bits arrive in order.
8. Bits sent at the same time along parallel wires arriving at slightly different times.
9. Simplex.
10. A walkie-talkie (or any two-way link where only one side can transmit at a time).
11. Any two: universal standard; devices detected automatically; supplies power; backwards compatible.
12. 2 × 1024 = 2048 KiB; 2048 ÷ 256 = 8 packets.
