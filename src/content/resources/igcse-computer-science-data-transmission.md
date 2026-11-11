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
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "types-and-methods-of-data-transmission-0478"
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "methods-of-error-detection-0478"
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "encryption-0478"
description: "Guide to Topic 2 of Cambridge IGCSE Computer Science 0478 (2026-2028): packets, packet switching, transmission methods, USB, error detection and encryption."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-09-01
featured: false
---

This guide covers **Topic 2 Data transmission**, for Cambridge IGCSE
Computer Science 0478, 2026–2028 series (Version 6, published September
2026). 0478 is not tiered, and this is the plain A*-G qualification,
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

## Frequently asked questions

**What is an automatic repeat query (ARQ)?**
ARQ uses positive and negative acknowledgements plus a timeout to confirm that data has been received without error, so data can be resent if needed.

**Is a check digit an error detection method for transmitted data?**
A check digit is a separate idea: it detects data-entry errors in a single piece of entered data, such as an ISBN or barcode, rather than checking an entire transmitted packet.

**What is the difference between symmetric and asymmetric encryption?**
Symmetric encryption uses one shared key to encrypt and decrypt. Asymmetric encryption uses a linked public and private key pair, where data encrypted with the public key can only be decrypted with the matching private key.

**What are the benefits and drawbacks of USB?**
USB is a standardised, widely supported connector that can also supply power. Its drawbacks are transmission speed limits compared with some dedicated interfaces and a maximum practical cable length.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028
(Version 6, September 2026) —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-computer-science-data-transmission--07-dt-packet-structure.webp" width="900" height="872" alt="Data is split into parts and each part is sent in a packet with a header, a payload and a trailer. The header holds the destination address, the packet number and the originator's address." loading="lazy">
  <figcaption>A packet has a header (destination address, packet number, originator's address), a payload and a trailer.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-computer-science-data-transmission--08-dt-packet-switching.webp" width="900" height="940" alt="Four numbered packets leave the sender and travel by different routes through routers. They arrive in the order 2, 4, 1, 3 and are put back in order using their packet numbers once the last packet arrives. Route delays are illustrative." loading="lazy">
  <figcaption>Packets may take different routes and arrive out of order, so they are reordered at the end.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-computer-science-data-transmission--09-dt-serial-parallel.webp" width="900" height="1010" alt="Serial transmission sends the 8 bits of a byte one after another along one wire. Parallel sends all 8 bits side by side along 8 wires. Serial suits longer distances at lower cost; parallel is faster over short runs." loading="lazy">
  <figcaption>Serial sends bits one at a time on one wire; parallel sends 8 bits at once on 8 wires.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-computer-science-data-transmission--10-dt-duplex.webp" width="900" height="850" alt="Simplex sends data one way only. Half-duplex allows both directions but only one at a time. Full-duplex allows both directions at the same time." loading="lazy">
  <figcaption>The three methods differ in which directions data can travel and when.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-computer-science-data-transmission--11-dt-parity.webp" width="900" height="970" alt="A parity bit is added so the number of 1s in the byte is even. If the byte arrives with the same count of 1s it is accepted. If one bit changes the count becomes odd and the error is found. The data are illustrative." loading="lazy">
  <figcaption>Even parity: an odd count of 1s on arrival shows that the data has changed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-computer-science-data-transmission--12-dt-arq.webp" width="900" height="1220" alt="In the first case the receiver sends a positive acknowledgement. In the second it finds an error and sends a negative acknowledgement, so the data is sent again. In the third no reply arrives, so after a timeout the sender sends the data again." loading="lazy">
  <figcaption>ARQ resends data after a negative acknowledgement or a timeout.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-computer-science-data-transmission--13-dt-encryption.webp" width="900" height="850" alt="Symmetric encryption uses one shared key to encrypt and decrypt. Asymmetric encryption uses a key pair: data encrypted with the public key can only be decrypted with the matching private key." loading="lazy">
  <figcaption>Symmetric uses one shared key; asymmetric uses a public and private key pair.</figcaption>
</figure>

