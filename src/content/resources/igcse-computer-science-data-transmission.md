---
title: "IGCSE Computer Science: Data Transmission (Cambridge 0478)"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Data transmission"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 2
syllabusTopics:
  - qualification: "igcse"
    topic: "data-transmission"
description: "Packets and packet switching, serial versus parallel and simplex versus duplex transmission, error detection methods, and symmetric versus asymmetric encryption -- the full content of Topic 2 for Cambridge IGCSE Computer Science 0478, 2026-2028 series."
author: "marlbridge-academic-team"
publishedDate: 2026-09-01
featured: false
---

This guide covers **Topic 2 Data transmission**, for Cambridge IGCSE
Computer Science 0478, 2026–2028 series (Version 5, published December
2025). 0478 is not tiered, and this is the plain A*-G qualification,
distinct from the numeric-grade Cambridge IGCSE (9-1) Computer Science
0984 sibling syllabus.

## Where this fits in 0478

Data transmission is the second of six topics grouped under "Computer
systems," sitting between Data representation and Hardware. Where Topic
1 established that everything a computer handles is ultimately binary,
Topic 2 asks what happens to that binary data once it needs to move
from one device to another — how it is packaged, what can go wrong in
transit, how errors are caught, and how the data is kept private along
the way. The packet structure and network concepts introduced here are
picked up again later in Topic 3.4 (Network hardware) and Topic 5 (The
internet and its uses), which both assume candidates already understand
how data physically moves across a network before discussing the
hardware and protocols built on top of that movement.

## Syllabus coverage

**CAMBRIDGE IGCSE COMPUTER SCIENCE 0478 — TOPIC 2 DATA TRANSMISSION**

- 2.1 Types and methods of data transmission — understanding that data
is broken down into packets for transmission and describing a packet's
structure (a packet header containing the destination address, packet
number and originator's address, a payload, and a trailer); describing
the process of packet switching, including that a router controls the
route each packet takes, that different packets from the same
transmission may travel by different routes, that packets can arrive
out of order, and that they are reordered once the last one arrives;
describing how data is transmitted using serial, parallel, simplex,
half-duplex and full-duplex methods and explaining which is suitable
for a given scenario, including the advantages and disadvantages of
each; understanding the universal serial bus (USB) interface and
explaining how it is used to transmit data, including its benefits and
drawbacks.
- 2.2 Methods of error detection — understanding the need to check for
errors after data transmission and how transmission errors occur (for
example through interference causing data loss, data gain or data
change); describing the parity check (odd and even, including parity
byte and parity block check), the checksum, and the echo check as
methods of detecting errors in transmitted data; describing how a check
digit is used to detect data-entry errors, with examples including
international standard book numbers (ISBN) and bar codes; describing
how an automatic repeat query (ARQ) — using positive and negative
acknowledgements plus a timeout — is used to confirm that data has been
received without error.
- 2.3 Encryption — understanding the need for, and purpose of,
encryption when transmitting data; understanding how data is encrypted
using symmetric and asymmetric encryption, including that asymmetric
encryption uses a public key and a private key.

## How to approach it

Packet switching is the concept most often tested with a "describe the
process" style question, so practise narrating it as a sequence rather
than a list of facts: a message is broken into packets, each packet is
given a header containing the destination address, an originator's
address and a packet number, packets can travel independently by
different routes as directed by routers along the way, they may
therefore arrive out of order, and the receiving device uses the packet
numbers to reassemble them correctly once the final packet arrives.
For the transmission methods in 2.1, the exam typically gives a
scenario — a printer cable, a long-distance network link, a keyboard —
and asks which method suits it and why; build a short mental table of
serial vs parallel (distance and cost vs speed over short runs) and
simplex vs half-duplex vs full-duplex (one-way only, alternating
two-way, or simultaneous two-way) so you can match a scenario to a
method quickly rather than re-deriving the trade-offs from scratch
under time pressure. The three error-detection methods in 2.2 are
frequently confused with each other because they all serve the same
general purpose; keep them distinct by what each one actually checks —
a parity check counts the number of 1-bits and compares it against an
expected odd or even total, a checksum is a calculated value sent
alongside the data and recalculated on arrival for comparison, and an
echo check simply sends the received data back to the sender to be
compared with the original. Check digits are a related but separate
idea worth not conflating with the other three: they validate a single
piece of entered data, such as an ISBN or barcode number, rather than
an entire transmitted packet. For encryption in 2.3, the exam distinction
that matters most is that symmetric encryption uses one shared key for
both encrypting and decrypting, while asymmetric encryption uses a
mathematically linked public/private key pair — data encrypted with the
public key can only be decrypted with the matching private key — and
being able to state that difference precisely, rather than just naming
both terms, is usually where the marks sit.

It also pays to connect 2.1 and 2.2 explicitly rather than revising
them as two unrelated sections: packets are switched and routed
independently precisely because a network cannot guarantee a clean,
uninterrupted path from sender to receiver, and that same unreliability
is exactly why error detection in 2.2 exists at all. A well-prepared
answer to a "why do we need error detection" question draws on this
link — interference, congestion and equipment faults during the
packet-switched journey described in 2.1 are the reasons data can
arrive corrupted, which is what the parity check, checksum, echo check
and ARQ in 2.2 exist to catch and, where possible, correct. When
revising the USB interface specifically, resist the temptation to
treat it as a footnote: past questions have asked candidates to
explain both a benefit (a standardised, widely supported connector that
also supplies power) and a drawback (transmission speed limits compared
with some dedicated interfaces, and a maximum practical cable length),
so prepare at least one of each rather than assuming the topic is too
minor to be examined in its own right.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028
(Version 5, December 2025) —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
