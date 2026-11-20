---
title: "OxfordAQA A-Level Computer Science (9645): Communications"
seoTitle: "OxfordAQA 9645 Communications Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.14.1 in depth: serial and parallel, synchronous and asynchronous transmission, start and stop bits, baud rate, bit rate, bandwidth, latency."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.14.1 Communications** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.14 Networking and cyber security. It is International A-level content, examined in Unit 4, the written paper. It has two parts: communication methods (3.14.1.1) and communication basics (3.14.1.2). You need to define serial and parallel transmission and discuss the advantages of serial; define and compare synchronous and asynchronous transmission; describe the purpose of start and stop bits; define baud rate, bit rate, bandwidth, latency and protocol; explain the difference between baud rate and bit rate; and know the relationship between bit rate and bandwidth.

The topic-level [networking and cyber security study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/) covers all of topic 3.14 in one pass. This page gives communications its own space, with calculations. Afterwards use the [communications revision notes](/resources/oxfordaqa-a-level-computer-science-9645-communications-revision-notes/) and the [communications practice questions](/resources/oxfordaqa-a-level-computer-science-9645-communications-practice/).

## 3.14.1.1 Communication methods

### Serial and parallel transmission

- **Serial transmission** sends the bits of the data **one after another** along a single channel (one wire or one pair of wires).
- **Parallel transmission** sends several bits **at the same time**, each along its own wire. An 8-bit parallel link has at least 8 data wires, so one byte moves in a single clock tick.

At first sight parallel looks eight times faster. In practice **serial is usually better** over distance and at high speed, for these reasons:

| Problem with parallel | Why serial avoids it |
|---|---|
| **Skew**: bits sent together arrive at slightly different times because the wires differ in length or resistance, so the receiver may read the wrong values | One channel, so every bit arrives in the order it was sent |
| **Crosstalk**: signals on neighbouring wires interfere with each other | Fewer wires, so less interference |
| **Cost**: many wires, many connector pins, bulky cable | One or two wires, cheaper and thinner |
| **Distance and speed**: skew and crosstalk limit how fast the clock can run and how long the cable can be | The clock can run much faster, so a single serial link can beat a slower parallel one |

Modern external interfaces such as USB and SATA are serial for these reasons.

### Synchronous and asynchronous transmission

The question is how the receiver knows **when** each bit is arriving.

| Feature | Synchronous | Asynchronous |
|---|---|---|
| Timing | Sender and receiver are kept in step by a shared **clock signal** (or a clock recovered from the data) | No shared clock; each device has its own |
| Framing | Data is sent in continuous **blocks** with a header | Each character or byte is sent on its own with a **start bit** and a **stop bit** |
| Gaps | Bits flow continuously with no gaps | Gaps of any length can appear between bytes |
| Overhead | Small per block | Extra bits for every byte |
| Typical use | Fast bulk transfer of large blocks | Keyboards and simple serial devices that send data at irregular times |

### Start and stop bits

In asynchronous transmission the receiver's clock is not guaranteed to match the sender's, so each byte is framed.

- The **start bit** brings the clock of the receiver **into phase** with the clock of the sender: it marks the exact moment the byte begins, so the receiver can sample the following bits at the right times.
- The **stop bit** allows the **next start bit to be recognised**, because it returns the line to a known idle level. In older devices it also gave the receiver **time to deal with** the byte it had just received.

**Worked example 1: frame efficiency.** A common frame has 1 start bit, 8 data bits and 1 stop bit, so each byte costs 10 bits. Only 8 of the 10 are data, an efficiency of 8 / 10 = 80%. To send 1,500 bytes at 9,600 bits per second:

- with framing: 1,500 × 10 = 15,000 bits, taking 15,000 / 9,600 = **1.5625 seconds**;
- data bits alone: 1,500 × 8 = 12,000 bits, which would take **1.25 seconds**.

Framing costs an extra 0.3125 seconds. A synchronous block carrying 1,000 data bytes with a 16-byte header is much more efficient: 1,000 / 1,016 is about 98.4%.

## 3.14.1.2 Communication basics

### Definitions

| Term | Meaning |
|---|---|
| **Baud rate** | The number of **signal changes per second** on the channel |
| **Bit rate** | The number of **bits transmitted per second** |
| **Bandwidth** | The range of frequencies a channel can carry, which sets its capacity for data |
| **Latency** | The **delay** between sending data and its arrival (or between a request and the start of the response) |
| **Protocol** | An agreed **set of rules** for communication between devices |

### Baud rate and bit rate are different

If each signal change carries one bit, the baud rate and bit rate are equal. If each signal can take one of several levels, **several bits are encoded in each signal change**, and the bit rate is higher than the baud rate.

```
bit rate = baud rate × bits per signal change
bits per signal change = log₂ (number of signal levels)
```

**Worked example 2.** A line has a baud rate of 2,400 and four signal levels. Four levels encode log₂ 4 = 2 bits per change, so the bit rate is 2,400 × 2 = **4,800 bits per second**. With 8 levels (3 bits) at 1,200 baud the bit rate is **3,600** bits per second. To reach 28,800 bits per second using 16 levels (4 bits per change) the line needs a baud rate of 28,800 / 4 = **7,200**.

### Bandwidth and bit rate

For a given channel, **bit rate is directly proportional to bandwidth**. If a channel with 4 MHz of bandwidth can carry 20 megabits per second, then a similar channel with 10 MHz carries 20 × 10 / 4 = **50 megabits per second**. Doubling the bandwidth doubles the available bit rate. Bandwidth is a property of the channel; the bit rate is how much data it actually carries.

### Latency is not bit rate

Bit rate says how fast bits flow once they are flowing. Latency says how long before they start to arrive. A video call needs low latency, because delay makes a conversation awkward. A large file download needs a high bit rate, because the extra delay at the start does not matter.

**Worked example 3.** A 20 MB file (20,000,000 bytes) is sent over a link with a bit rate of 50 megabits per second and a latency of 0.04 seconds.

- bits to send: 20,000,000 × 8 = 160,000,000
- transmission time: 160,000,000 / 50,000,000 = 3.2 seconds
- total time: 3.2 + 0.04 = **3.24 seconds**

For a 1 kB message (1,000 bytes) over a 100 megabit per second link, the bits take only 8,000 / 100,000,000 = 0.00008 seconds (0.08 ms), so the latency dominates the total.

### Protocols

Two devices can only communicate if they follow the same **protocol**: agreed rules for the format of messages, the order in which they are exchanged, error checking and timing. Start and stop bits, baud rate and the framing of blocks are all part of the protocol for a serial link.

## Choosing a method for a situation

Questions often give a scenario and ask which method suits it. Use the properties above and justify your choice.

| Scenario | Suitable method | Reason |
|---|---|---|
| A keyboard sends a keystroke at irregular moments | Asynchronous serial | Data arrives in single characters with long gaps; start and stop bits frame each one without a shared clock |
| A 40 GB backup sent to a server | Synchronous serial | Large continuous blocks, so the small per-block overhead gives high efficiency |
| An old printer connected by a 1 m ribbon cable | Parallel could be acceptable | Over a very short distance skew is small, and several bits move per clock tick |
| A building-to-building link of 300 m | Serial | Over that distance skew and crosstalk would make a parallel link unreliable |

A good answer names the method, links it to a feature of the scenario (data pattern, distance, volume) and gives a reason. It does not simply say that one method is faster.

### Worked example 4: comparing two links

Link A is asynchronous with 10 bits per byte at 9,600 bits per second. Link B is synchronous at 9,600 bits per second, with a 16-byte header on each 1,000-byte block.

- Link A sends 9,600 / 10 = **960 bytes of data per second**, because only 8 of every 10 bits carry data, so the useful data rate is 960 bytes per second.
- Link B sends 9,600 / 8 = 1,200 bytes per second in total; of each 1,016-byte block 1,000 bytes are data, so the useful rate is 1,200 × 1,000 / 1,016 = about **1,181 bytes per second**.

The two links have the same bit rate, but link B delivers about 23% more data per second because it spends fewer bits on framing. This is why bit rate alone does not tell you how much useful data arrives.

## Exam technique

- **Define, then compare.** For serial against parallel, name a problem (such as skew) and explain how serial avoids it.
- **Use "start bit" and "stop bit" wording exactly**: phase of the receiver's clock, and recognising the next start bit.
- **Calculate with units.** Convert bytes to bits before dividing by a bit rate.
- **Baud versus bit rate:** state that more than one bit can be encoded in each signal change.

## Common mistakes

- Saying parallel is always faster. Skew and crosstalk limit it.
- Confusing baud rate with bit rate.
- Forgetting to multiply bytes by 8 (or by 10 with framing).
- Describing latency as the amount of data per second.
- Saying the stop bit tells the receiver where the byte starts. That is the start bit.

## Next steps

- [Communications revision notes](/resources/oxfordaqa-a-level-computer-science-9645-communications-revision-notes/)
- [Communications practice questions](/resources/oxfordaqa-a-level-computer-science-9645-communications-practice/)
- [Networking study guide](/resources/oxfordaqa-a-level-computer-science-9645-networking/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.1 Communications.
