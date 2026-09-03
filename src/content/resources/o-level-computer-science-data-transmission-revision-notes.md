---
title: "Cambridge O-Level Computer Science: Data Transmission — Revision Notes"
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
description: "Condensed recall notes on packet switching, transmission methods, error detection and encryption for Topic 2 of Cambridge O-Level Computer Science (2210), 2026-2028 series."
author: "marlbridge-academic-team"
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

## Error detection — keep each method distinct

- **Parity check** (odd/even, incl. parity block check): counts 1-bits, checks against expected total.
- **Checksum**: a calculated value sent with the data, recalculated on arrival for comparison.
- **Echo check**: received data is sent back to the sender for comparison with the original.
- **Check digit**: validates one piece of **entered data** (e.g. ISBN, bar code) — not an entire
  transmitted packet, so keep it separate from the three methods above.
- **ARQ**: positive/negative acknowledgements plus a **timeout** to confirm error-free receipt; if no
  acknowledgement arrives in time, data is automatically resent.

## Encryption — one precise distinction

- **Symmetric**: same key encrypts and decrypts — must be shared securely beforehand.
- **Asymmetric**: linked **public/private key pair** — the public key encrypts, only the matching
  private key decrypts. The private key never needs to be transmitted, which is exactly why asymmetric
  encryption avoids the key-sharing problem symmetric encryption has.

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
3. Name the four error-detection methods and what each checks.
4. What is the precise reason asymmetric encryption avoids the key-sharing problem?
5. Which sibling syllabus shares 2210's content and topic order?

**Answers:** 1. Header, payload, trailer. 2. Routers decide each packet's route independently, so
different packets can travel different paths. 3. Parity check (bit count), checksum (calculated
value), echo check (data sent back), check digit (single entered value). 4. The private key never
needs to be transmitted. 5. Cambridge IGCSE Computer Science (0478).

## Official syllabus

Cambridge O Level Computer Science 2210 syllabus for 2026, 2027 and 2028 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf).
