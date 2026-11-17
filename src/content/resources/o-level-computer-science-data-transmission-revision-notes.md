---
title: "Cambridge O-Level Computer Science: Data Transmission — Revision Notes"
seoTitle: "Cambridge O Level Computer Science Data Transmission Notes"
resourceType: "revision-notes"
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
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "types-and-methods-of-data-transmission"
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "methods-of-error-detection"
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "encryption"
description: "Recall notes for Cambridge O Level Computer Science 2210 Topic 2 (2026-2028): packet switching, transmission methods, USB, error detection, ARQ and encryption."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-09-03
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data Transmission study guide](/resources/o-level-cambridge-computer-science-data-transmission/).

## Packets — the sequence to narrate

Data is broken into **packets**, each carrying a **header** (destination address, packet number,
originator's address), a **payload**, and a **trailer**. A **router** decides each packet's route
independently — different packets from the same message can travel by different paths, so packets can
arrive **out of order**. The receiving device uses the **packet number** to reassemble them correctly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-transmission--01-packet-structure.webp" width="900" height="700" alt="A packet is drawn as three blocks: a header holding the destination address, the packet number and the originator address; a payload holding the data being carried; and a trailer marking the end of the packet. Below, a file is split into four numbered packets, each with the same three-part layout." loading="lazy">
  <figcaption>A packet has a header (destination address, packet number, originator address), a payload and a trailer.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-transmission--02-packet-switching.webp" width="900" height="880" alt="A sender and receiver are joined through four routers. Four numbered packets leave the sender and each takes a different path through the routers, because each router decides every packet’s route. They arrive in a different order (example: 3, 1, 4, 2) and the receiver puts them back in order using the packet numbers." loading="lazy">
  <figcaption>Each packet is routed independently, may arrive out of order, and is reordered using its packet number.</figcaption>
</figure>

## Transmission methods, side by side

| Method | Direction |
|---|---|
| Serial | Bits one after another, single wire — reliable over long distances |
| Parallel | Multiple bits at once, several wires — fast over short distances, prone to "skew" over long ones |
| Simplex | One direction only |
| Half-duplex | Two-way, not simultaneous |
| Full-duplex | Two-way, simultaneous |

**USB**: standardised connector, supports many device types, "plug and play" — but has cable length
limitations.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-transmission--03-serial-parallel.webp" width="900" height="1150" alt="Three panels. Serial: one wire carries the bits of a byte one after another in single file; it is slower per instant but reliable over long distances. Parallel: eight wires carry all eight bits of a byte at the same moment, which is faster over short distances. Parallel over a long cable: the bits drift apart and arrive at different times, called skew." loading="lazy">
  <figcaption>Serial sends bits one after another on one wire; parallel sends several bits at once but can suffer skew over distance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-transmission--04-simplex-duplex.webp" width="900" height="900" alt="Three rows. Simplex: a single arrow, for example from a keyboard to a computer, so data flows one direction only. Half-duplex: arrows in both directions but drawn as taking turns, so only one direction at a time. Full-duplex: two solid arrows in opposite directions, so data flows both ways at once, as on a network connection." loading="lazy">
  <figcaption>Simplex is one way only, half-duplex is two-way but one at a time, and full-duplex is two-way at once.</figcaption>
</figure>

## Error detection — keep each method distinct

- **Parity check** (odd/even, incl. parity block check): counts 1-bits, checks against expected total.
- **Checksum**: a calculated value sent with the data, recalculated on arrival for comparison.
- **Echo check**: received data is sent back to the sender for comparison with the original.
- **Check digit**: validates one piece of **entered data** (e.g. ISBN, bar code) — not an entire
  transmitted packet, so keep it separate from the three methods above.
- **ARQ**: positive/negative acknowledgements plus a **timeout** to confirm error-free receipt; if no
  acknowledgement arrives in time, data is automatically resent.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-transmission--05-parity-check.webp" width="900" height="830" alt="A byte 01101000 has three 1-bits, so the sender adds a parity bit of 1 to make four 1-bits, which is even. During transmission interference flips one bit from 1 to 0. The receiver counts only three 1-bits, which is odd when even was expected, so an error is flagged. Odd parity works the same way with the total required to be odd." loading="lazy">
  <figcaption>An even parity bit makes the count of 1s even; a flipped bit makes the count odd and flags an error.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-transmission--06-arq.webp" width="900" height="920" alt="A sender and receiver shown as two vertical lines with messages between them. Case 1: the data arrives and the receiver sends back a positive acknowledgement. Case 2: the data arrives damaged, the receiver sends a negative acknowledgement, and the sender sends the data again. Case 3: the data is lost, no acknowledgement arrives before the timeout, so the sender automatically resends it." loading="lazy">
  <figcaption>ARQ uses positive or negative acknowledgements and a timeout so data is resent when needed.</figcaption>
</figure>

## Encryption — one precise distinction

- **Symmetric**: same key encrypts and decrypts — must be shared securely beforehand.
- **Asymmetric**: linked **public/private key pair** — the public key encrypts, only the matching
  private key decrypts. The private key never needs to be transmitted, which is exactly why asymmetric
  encryption avoids the key-sharing problem symmetric encryption has.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-transmission--07-encryption.webp" width="900" height="800" alt="Two rows. Symmetric: the sender and receiver both hold the same key, which has to be shared securely beforehand; the message Hello is scrambled in transit and unscrambled with the same key. Asymmetric: the sender encrypts with a public key that can be shared openly; the scrambled message can only be decrypted with the linked private key, which the recipient keeps secret and never sends." loading="lazy">
  <figcaption>Symmetric encryption uses one shared key; asymmetric uses a public key to encrypt and a private key kept secret to decrypt.</figcaption>
</figure>

## 2210 and its sibling syllabus

2210 shares subject content and topic order with **Cambridge IGCSE Computer Science (0478)** — the
syllabus PDF confirms textbooks endorsed for 0478 suit 2210 too. 2210 is **not tiered**: every
candidate covers the full content above.

## Why error detection exists at all — connect 2.1 and 2.2

A network cannot guarantee a clean, uninterrupted path from sender to receiver — that is exactly why
packets are switched and routed independently in the first place. That same unreliability —
interference, congestion, equipment faults along the packet-switched journey — is exactly why error
detection exists at all. A strong "why do we need error detection" answer draws this link explicitly:
because packets can travel unpredictable routes and encounter unpredictable conditions, some form of
check after transmission is unavoidable if data integrity matters.

## Worked example — sketching the full journey

Practise sketching a labelled packet (header, payload, trailer) and then describing, in full sentences,
what happens to it end to end: it is created with a destination address, an originator's address and a
packet number; a router examines it and forwards it along whichever path is currently best; it may
arrive out of order relative to its siblings; the receiving device reassembles all packets using their
numbers; and finally an error-detection method such as a checksum or parity check confirms nothing was
corrupted along the way. Exam questions frequently ask you to *describe the process* rather than just
name the individual terms, so being able to narrate this full sequence fluently is worth more revision
time than memorising each term in isolation.

## Exam traps

- Confusing parity check (operates bit-by-bit on a byte/block) with checksum (a single calculated
  value for a whole block).
- Mixing up simplex, half-duplex and full-duplex direction rules.
- Saying asymmetric encryption is "more secure" without stating the specific reason — the private key
  is never transmitted.
- Forgetting packets can arrive out of order and must be reassembled by packet number.

## Scenario practice — matching method to situation

Build the habit of justifying, not just naming, a transmission method for a given scenario. A
printer connected to a computer by a short cable favours **parallel** transmission, since the short
distance keeps timing errors ("skew") manageable while the extra wires deliver higher speed. A
long-distance network link between two offices favours **serial** transmission instead, since parallel
cabling becomes unreliable and expensive over longer distances as signal degradation between the
multiple wires increases. Being able to generate this kind of justified comparison on demand — rather
than only reciting the definitions of serial and parallel in isolation — is what "explain the
suitability of a method for a given scenario" questions are actually testing.

## Why error detection matters

Errors introduced during transmission are rare in absolute terms but not negligible over long
distances or noisy links, so an exam answer that explains parity/checksum/CRC without linking it back
to *why* transmission introduces errors in the first place (electrical interference, signal
attenuation over distance, cross-talk between adjacent cables) will lose the "explain" marks even if
the mechanism itself is described correctly.

## Self-test

1. What three parts make up a packet?
2. Why can packets from the same message arrive out of order?
3. Name the three error-detection methods used after transmission, and what each checks.
4. What is the precise reason asymmetric encryption avoids the key-sharing problem?
5. Which sibling syllabus shares 2210's content and topic order?

**Answers:** 1. Header, payload, trailer. 2. Routers decide each packet's route independently, so
different packets can travel different paths. 3. Parity check (bit count), checksum (calculated
value), echo check (data sent back). A check digit is a separate, single-value validation of one
piece of entered data, not a fourth transmission error-detection method. 4. The private key never
needs to be transmitted. 5. Cambridge IGCSE Computer Science (0478).

## Frequently asked questions

**How does an automatic repeat query (ARQ) work?**
The receiver sends a positive or negative acknowledgement to show whether the data arrived correctly. If no acknowledgement arrives within a set timeout, the data is automatically resent.

**Why is serial transmission used over long distances?**
Serial transmission sends bits one after another along a single wire, which is reliable over long distances. Parallel transmission is fast over short distances but prone to skew over long ones.

**Why is error detection needed after transmission?**
A network cannot guarantee a clean path from sender to receiver, so interference, congestion or equipment faults can cause data loss, gain or change on the way.

**Does O Level Computer Science 2210 have the same content as IGCSE 0478?**
Yes. 2210 shares its subject content and topic order with Cambridge IGCSE Computer Science 0478, and textbooks endorsed for 0478 are suitable for 2210.

## Official syllabus

Cambridge O Level Computer Science 2210 syllabus for 2026, 2027 and 2028 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf).
