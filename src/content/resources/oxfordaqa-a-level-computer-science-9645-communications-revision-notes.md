---
title: "OxfordAQA A-Level Computer Science (9645): Communications -- Revision Notes"
seoTitle: "OxfordAQA 9645 Communications Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "communications-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.14.1: serial and parallel, synchronous and asynchronous, start and stop bits, baud rate, bit rate, bandwidth and latency."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.14.1 Communications** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.14, examined in Unit 4). For explanations and worked calculations, see the [communications study guide](/resources/oxfordaqa-a-level-computer-science-9645-communications/), then practise with the [communications practice questions](/resources/oxfordaqa-a-level-computer-science-9645-communications-practice/).

## What the specification requires

**3.14.1.1 Communication methods**

- Define **serial** and **parallel** transmission; discuss the advantages of serial over parallel.
- Define and compare **synchronous** and **asynchronous** transmission.
- Describe the purpose of **start and stop bits** in asynchronous transmission.

**3.14.1.2 Communication basics**

- Define **baud rate, bit rate, bandwidth, latency** and **protocol**.
- Understand the difference between baud rate and bit rate.
- Understand the relationship between bit rate and bandwidth.

## Key terms

| Term | Meaning |
|---|---|
| Serial | Bits sent one after another along a single channel |
| Parallel | Several bits sent at the same time, one per wire |
| Skew | Bits sent together arrive at slightly different times |
| Synchronous | Sender and receiver kept in step by a shared clock; data sent in blocks |
| Asynchronous | No shared clock; each byte framed by a start bit and stop bit |
| Baud rate | Signal changes per second |
| Bit rate | Bits per second |
| Bandwidth | Range of frequencies a channel carries; sets its capacity |
| Latency | Delay between sending and arrival |
| Protocol | An agreed set of rules for communication |

## Serial versus parallel

| | Serial | Parallel |
|---|---|---|
| Wires for data | One channel | One wire per bit |
| Skew | None | Yes: bits arrive at different times |
| Crosstalk | Little | More, between neighbouring wires |
| Cable and connector cost | Low | Higher |
| Distance and clock speed | Longer, faster | Limited by skew and crosstalk |

Advantages of serial: no skew, less crosstalk, cheaper cable, longer distances, higher clock rates.

## Synchronous versus asynchronous

| | Synchronous | Asynchronous |
|---|---|---|
| Timing | shared clock signal | no shared clock |
| Data unit | continuous block with header | single byte or character |
| Start and stop bits | no | yes, for every byte |
| Gaps | none | any length between bytes |
| Overhead | small | large per byte |

## Start and stop bits

- **Start bit:** brings the clock of the receiver into **phase** with the clock of the sender.
- **Stop bit:** allows the **next start bit to be recognised**. In older devices it gave the receiver time to deal with the received data.

Frame efficiency: 1 start bit + 8 data bits + 1 stop bit = 10 bits per byte, so efficiency is 8 / 10 = 80%.

| Task | Working | Result |
|---|---|---|
| Send 1,500 bytes at 9,600 bit/s with framing | 1,500 × 10 / 9,600 | 1.5625 s |
| Same data, no framing | 1,500 × 8 / 9,600 | 1.25 s |
| 1,000 data bytes in a block with a 16-byte header | 1,000 / 1,016 | about 98.4% |

## Baud rate and bit rate

```
bit rate = baud rate × bits per signal change
bits per signal change = log₂ (number of signal levels)
```

| Baud rate | Signal levels | Bits per change | Bit rate |
|---|---|---|---|
| 2,400 | 2 | 1 | 2,400 |
| 2,400 | 4 | 2 | 4,800 |
| 1,200 | 8 | 3 | 3,600 |
| 4,800 | 16 | 4 | 19,200 |

Bit rate is higher than baud rate when **more than one bit is encoded in each signal change**.

## Bandwidth, bit rate and latency

- **Bit rate is directly proportional to bandwidth.** If 4 MHz carries 20 megabits per second, 10 MHz carries 50 megabits per second.
- **Latency** is delay; it is not the amount of data per second.
- Total transfer time is about latency plus (bits to send / bit rate).
- 20 MB at 50 megabits per second with 0.04 s latency: 160,000,000 / 50,000,000 = 3.2 s, plus 0.04 s gives 3.24 s.
- Small messages are dominated by latency; large files by bit rate.

## Protocols

A protocol fixes the message format, the order of exchange, error checking and timing. Both devices must follow the same protocol.

## Exam traps

- **"Parallel is faster."** Skew and crosstalk limit parallel links.
- **Baud against bit rate.** They are equal only if each change carries one bit.
- **Which bit does what.** Start bit: synchronise the receiver's clock. Stop bit: lets the next start bit be recognised.
- **Units.** Convert bytes to bits; include the framing bits when asked about asynchronous transfers.
- **Latency.** It is a delay, measured in time, not a rate.
- **Bandwidth.** It is the channel's capacity; the bit rate is what is carried.
- **Compare means both sides.** Give a difference for each method.

## Quick self-test

1. Define serial transmission.
2. Give one problem of parallel transmission that serial avoids.
3. Give one difference between synchronous and asynchronous transmission.
4. What is the purpose of the start bit?
5. What is the purpose of the stop bit?
6. What fraction of a 10-bit frame carrying 8 data bits is data?
7. Calculate the bit rate for 1,200 baud with 8 signal levels.
8. How many bits are encoded in each change with 16 signal levels?
9. If bit rate is proportional to bandwidth, what happens to the bit rate when bandwidth is doubled?
10. Define latency.
11. Define protocol.
12. How long do 2,000 bytes take at 9,600 bit/s with 10 bits per byte?

### Answers

1. Bits are sent one after another along a single channel.
2. Skew (or crosstalk, or cost).
3. Synchronous uses a shared clock and sends blocks; asynchronous uses start and stop bits for each byte.
4. It brings the receiver's clock into phase with the sender's clock.
5. It lets the next start bit be recognised (and gave older receivers time to process the data).
6. 8 / 10, or 80%.
7. 3 bits per change, so 3,600 bits per second.
8. 4 bits.
9. It doubles.
10. The delay between sending data and its arrival.
11. An agreed set of rules for communication between devices.
12. 2,000 × 10 / 9,600 = about 2.08 seconds.

## Next steps

- [Communications study guide](/resources/oxfordaqa-a-level-computer-science-9645-communications/)
- [Communications practice questions](/resources/oxfordaqa-a-level-computer-science-9645-communications-practice/)
- [Networking revision notes](/resources/oxfordaqa-a-level-computer-science-9645-networking-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.1 Communications.
