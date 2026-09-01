---
title: "Cambridge O-Level Computer Science: Data Transmission (2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data Transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 2
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
description: "How data is packaged into packets and sent between devices, the transmission methods and USB interface, error-detection techniques, and symmetric versus asymmetric encryption, for Cambridge O-Level Computer Science 2210."
author: "marlbridge-academic-team"
publishedDate: 2026-09-01
featured: false
---

This guide covers **Topic 2 Data Transmission**, the second of ten topics in Cambridge O-Level Computer
Science (2210), for examination 2026-2028. It follows directly on from Topic 1, Data Representation,
which established how information is stored inside a computer; this topic asks what happens once that
data needs to leave one device and reach another.

## Where this fits in 2210

2210 shares its subject content and topic order with the sibling Cambridge IGCSE Computer Science
syllabus (0478) — the syllabus PDF confirms textbooks endorsed for 0478 are suitable for use here too.
Topic 2 has three subtopics: 2.1 Types and methods of data transmission, 2.2 Methods of error detection,
and 2.3 Encryption. Together they explain the mechanics of moving data reliably and securely between
devices, before the syllabus moves on to Topic 3, Hardware.

## Syllabus coverage

**CAMBRIDGE O LEVEL COMPUTER SCIENCE 2210**

2.1 Types and methods of data transmission
- Understand that data is broken down into packets to be transmitted, and describe the structure of a
  packet (packet header, payload, trailer)
- Describe the process of packet switching, including that a router controls the route each packet
  takes, packets may arrive out of order, and are reordered once the last one arrives
- Describe how data is transmitted using different methods — serial, parallel, simplex, half-duplex and
  full-duplex — and explain the suitability of each for a given scenario
- Understand the universal serial bus (USB) interface and explain how it is used to transmit data

2.2 Methods of error detection
- Understand the need to check for errors after data transmission and how errors can occur, e.g.
  interference causing data loss, data gain or data change
- Describe parity check (odd and even), checksum and echo check as methods of detecting errors in data
  after transmission
- Describe how a check digit is used to detect errors in data entry, including examples such as
  international standard book numbers (ISBN) and bar codes
- Describe how an automatic repeat query (ARQ) can be used to establish that data is received without
  error, including positive/negative acknowledgements and timeout

2.3 Encryption
- Understand the need for and purpose of encryption when transmitting data
- Understand how data is encrypted using symmetric and asymmetric encryption, including the use of
  public and private keys in asymmetric encryption

2210 is **not tiered** — every candidate covers all of the above.

## Packets and packet switching

Rather than sending a whole file as one continuous stream, a network breaks data down into smaller
units called **packets**. Each packet carries three parts: a **header** (containing the destination
address, the packet number, and the originator's address), the **payload** (the actual data being
carried), and a **trailer** (marking the end of the packet). Breaking data into packets, each carrying
its own addressing information, is what makes **packet switching** possible: a router examines each
packet and decides its route independently, so different packets belonging to the same message can
travel by different paths across a network. Because of this, packets can arrive at their destination
**out of order** — the receiving device uses the packet number in each header to reassemble them into
the correct sequence once the final packet has arrived.

## Transmission methods and the USB interface

Data can be sent using several methods, each suited to different situations. **Serial transmission**
sends bits one after another along a single wire — slower per instant, but reliable over long distances.
**Parallel transmission** sends multiple bits simultaneously along several wires — faster over short
distances, but prone to timing errors ("skew") over longer ones. Direction of flow also varies:
**simplex** transmission flows in one direction only, **half-duplex** allows both directions but only
one at a time, and **full-duplex** allows simultaneous two-way transmission. The choice between these
depends on the scenario — a keyboard only needs simplex transmission to a computer, while a network
connection benefits from full-duplex.

The **universal serial bus (USB)** is a widely used serial interface for connecting peripheral devices
to a computer. Its benefits include a standardised connector, support for many device types, and
"plug and play" convenience, though it has drawbacks too, such as cable length limitations.

## Detecting errors after transmission

Interference during transmission can cause **data loss, data gain, or data change**, so several
techniques exist to check whether data arrived correctly:

- **Parity check**: an extra parity bit is added to a byte so that the total number of 1-bits is either
  always even (even parity) or always odd (odd parity); if the count doesn't match after transmission,
  an error is flagged. This extends to a **parity block check**, which checks both rows and columns of
  a block of data.
- **Checksum**: a value calculated from a block of data before it is sent, transmitted alongside the
  data, and recalculated at the receiving end — a mismatch indicates an error.
- **Echo check**: the received data is sent back to the sender, which compares it with the original to
  check for discrepancies.
- **Check digit**: a single digit calculated from the other digits in a code, used to detect errors in
  data entry — common real-world examples are ISBNs on books and the digits encoded in bar codes.
- **Automatic repeat query (ARQ)**: the receiver sends back a positive or negative acknowledgement to
  confirm whether data arrived correctly; if no acknowledgement is received within a set **timeout**,
  the data is automatically resent.

## Encryption

Encryption exists because data can be intercepted while in transit, and encryption makes intercepted
data unreadable without the correct key. **Symmetric encryption** uses the same key to both encrypt and
decrypt the data, so that key must be shared securely between sender and receiver beforehand.
**Asymmetric encryption** instead uses a linked pair of keys — a **public key**, which can be shared
openly and used to encrypt data, and a **private key**, kept secret by the recipient and used to decrypt
it. Because the private key never needs to be transmitted, asymmetric encryption avoids the key-sharing
problem that symmetric encryption has.

## Common mistakes

- **Confusing parity check with checksum.** Parity check operates bit-by-bit on a single byte (or block);
  checksum is a single calculated value covering a whole block of transmitted data.
- **Mixing up simplex, half-duplex and full-duplex.** Remember: simplex is one-way only; half-duplex is
  two-way but not at the same time; full-duplex is two-way simultaneously.
- **Describing asymmetric encryption as "more secure" without explaining why.** The precise reason is
  that the private key is never transmitted, unlike the shared key in symmetric encryption.
- **Forgetting that packets can arrive out of order** and must be reassembled using the packet number in
  the header — a common source of lost marks when describing packet switching.

## How to approach it

Work through each subtopic in the order the syllabus presents it, since 2.2 and 2.3 both build on the
idea, introduced in 2.1, that data travels across a network as discrete packets that can be intercepted
or corrupted. Practise sketching a labelled packet (header, payload, trailer) and describing the
fetch-transmit-verify sequence for at least one error-detection method in full sentences, since exam
questions frequently ask you to *describe the process* rather than just name it.

## Related resources

- [Cambridge O-Level Computer Science: Data Representation (2210)](/resources/o-level-cambridge-computer-science-data-representation/)

## Official syllabus

Cambridge Assessment International Education, Cambridge O Level Computer Science 2210 syllabus for
2026, 2027 and 2028: https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf
(verified 2026-09-01).
