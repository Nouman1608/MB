---
title: "IGCSE Computer Science: Data Transmission — Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for Cambridge IGCSE Computer Science 0478 Topic 2: packet switching, serial and parallel transmission, USB, error detection, ARQ and encryption."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29."
publishedDate: 2026-09-03
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data Transmission study guide](/resources/igcse-computer-science-data-transmission/).

## Packets and packet switching — narrate it as a sequence

1. A message is broken into **packets**.
2. Each packet gets a **header** (destination address, packet number, originator's address), a
   **payload**, and a **trailer**.
3. **Routers** control the route each packet takes — different packets from the same transmission can
   travel by **different routes**.
4. Packets can therefore **arrive out of order**.
5. The receiving device uses the **packet numbers** to **reorder** them once the last one arrives.

**Exam tip:** "describe the process" questions want this as a sequence, not a list of isolated facts.

## Transmission methods — match scenario to method fast

| Method | Best for |
|---|---|
| Serial | Long distance, cheaper cabling |
| Parallel | Short runs, high speed |
| Simplex | One direction only (e.g. keyboard to computer) |
| Half-duplex | Alternating two-way (e.g. walkie-talkie) |
| Full-duplex | Simultaneous two-way (e.g. phone call) |

The exam typically gives a scenario (printer cable, long-distance network link, keyboard) and asks
which method suits it — build this table into automatic recall rather than re-deriving trade-offs
under time pressure.

**USB**: a standardised, widely supported connector that also supplies power (benefit); has
transmission speed limits compared with some dedicated interfaces, and a maximum practical cable
length (drawback). Past questions ask for one of each — prepare both.

## Error detection — keep the three methods distinct

- **Parity check** (odd/even, including parity byte and parity block): counts the number of 1-bits and
  compares against an expected odd or even total.
- **Checksum**: a calculated value sent alongside the data, recalculated on arrival for comparison.
- **Echo check**: the received data is simply sent back to the sender to compare with the original.

**Check digit** (e.g. ISBN, barcodes) is a related but separate idea — it validates **one piece of
entered data**, not an entire transmitted packet. Don't conflate it with the three methods above.

**ARQ (automatic repeat query)**: uses positive and negative acknowledgements plus a **timeout** to
confirm data was received without error.

## Encryption — the one distinction that carries the marks

- **Symmetric encryption**: one shared key for both encrypting and decrypting.
- **Asymmetric encryption**: a mathematically linked **public/private key pair** — data encrypted with
  the public key can only be decrypted with the matching private key.

State the difference precisely — just naming both terms without the mechanism usually only earns
partial credit.

## Connect 2.1 and 2.2 — why error detection exists at all

A network cannot guarantee a clean, uninterrupted path from sender to receiver — that is exactly why
packets are switched and routed independently (2.1). That same unreliability — interference,
congestion, equipment faults along the packet-switched journey — is exactly why error detection (2.2)
exists at all. A strong "why do we need error detection" answer draws this link explicitly rather than
treating the two sub-topics as unrelated.

## Exam traps

- Confusing a movement/change in one error-detection method for another because all three serve the
  same general purpose — keep them distinct by what each one actually checks.
- Treating check digits as a fourth error-detection method rather than a separate, single-value
  validation.
- Naming symmetric/asymmetric encryption without explaining the public/private key mechanism.
- Treating USB as too minor to examine — past papers have asked for both a benefit and a drawback.

## Where this topic sits in the wider syllabus

Data transmission is the second of six topics grouped under "Computer systems," between Data
representation and Hardware. Everything here assumes candidates already accept that data is
ultimately binary (Topic 1); the packet structure and network concepts introduced here are picked up
again in Topic 3.4 (Network hardware) and Topic 5 (The internet and its uses), both of which assume
candidates already understand how data physically moves across a network before discussing the
hardware and protocols built on top of it. Revising this topic thoroughly therefore pays off twice
later in the syllabus, not just on its own questions.

## Choosing between transmission methods — worked scenario

Consider a printer connected to a computer by a short cable versus a network link connecting two
offices several kilometres apart. The printer connection favours **parallel** transmission because the
distance is short and speed benefits outweigh cost; the office-to-office link favours **serial**
transmission because parallel cabling becomes unreliable and expensive over long distances due to
signal degradation between the multiple wires. Practising this kind of side-by-side comparison, rather
than memorising the definitions in isolation, is what lets you answer a "justify your choice" question
rather than only a "name the method" question.

## Distinguishing the 0478 and 0984 sibling syllabuses

Cambridge IGCSE Computer Science 0478 is the plain A*-G qualification and is not tiered — every
candidate sits the same two papers regardless of ability. It is distinct from the numeric-grade Cambridge
IGCSE (9-1) Computer Science 0984 sibling syllabus, which uses a different grading scale. The paper
structure is **identical**: both have Paper 1 (Computer Systems) and Paper 2 (Algorithms, Programming
and Logic), each 1 hour 45 minutes, 75 marks and 50% of the qualification. What differs is the grading
and the **availability**: 0984 is not offered in every administrative zone and has no March series,
whereas 0478 is also examined in March in India. Confirm which syllabus code your school has entered
you for before assuming a past paper's grade thresholds apply.

## Self-test

1. What does a packet header contain?
2. Why might packets from the same transmission arrive out of order?
3. Name the three error-detection methods that check different things.
4. What does a check digit validate that the other three methods do not?
5. What is the key mechanism that distinguishes asymmetric from symmetric encryption?

**Answers:** 1. Destination address, packet number, originator's address. 2. Routers can send
different packets by different routes. 3. Parity check, checksum, echo check. 4. A single piece of
entered data (e.g. an ISBN), not an entire transmitted packet. 5. A mathematically linked public/private
key pair, where the public key encrypts and only the matching private key can decrypt.

## Frequently asked questions

**What does a packet header contain?**
A packet header contains the destination address, the packet number and the originator's address. The packet numbers are used to reorder packets that arrive out of order.

**What are the error detection methods in Cambridge IGCSE 0478?**
Parity checks, checksums and echo checks, with ARQ using acknowledgements and a timeout. A check digit is a separate idea that validates one piece of entered data.

**What is the difference between simplex, half-duplex and full-duplex?**
Simplex sends data in one direction only, half-duplex sends in both directions but not at the same time, and full-duplex sends in both directions simultaneously.

**What is the difference between Cambridge IGCSE Computer Science 0478 and 0984?**
The paper structure is identical, with Paper 1 Computer Systems and Paper 2 Algorithms, Programming and Logic. 0478 is graded A* to G, while 0984 uses the numeric 9 to 1 scale and is not offered in every zone.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Version 6, September 2026) —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
