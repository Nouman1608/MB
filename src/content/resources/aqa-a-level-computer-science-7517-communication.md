---
title: "AQA A-Level Computer Science (7517): Communication"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "communication-7517"
description: "Deeper guide to AQA 7517 section 4.9.1 Communication: serial and parallel transmission, synchronous and asynchronous data, start and stop bits, baud rate, bit rate, bandwidth, latency and protocols."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.9.1 Communication** in AQA A-Level Computer Science (7517). It has two parts. **Communication methods:** define serial and parallel transmission and discuss the advantages of serial over parallel; define and compare synchronous and asynchronous transmission; describe the purpose of start and stop bits. **Communication basics:** define baud rate, bit rate, bandwidth, latency and protocol; differentiate between baud rate and bit rate; and understand the relationship between bit rate and bandwidth.

The wider [communication and networking study guide](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/) covers all of section 4.9. This page goes deeper on the calculations and on the reasons behind each comparison.

Condensed notes are in the [communication revision notes](/resources/aqa-a-level-computer-science-7517-communication-revision-notes/), and exam-style questions are in the [communication practice questions](/resources/aqa-a-level-computer-science-7517-communication-practice/).

## Serial and parallel transmission

**Serial transmission** sends the bits of a message **one after another along a single wire** (or channel). **Parallel transmission** sends several bits **at the same time**, each along its own wire, so that an 8-bit byte might travel on 8 wires at once.

At first sight parallel looks faster: eight bits per clock tick instead of one. Over short distances inside a computer it can be. Over longer cables it runs into problems:

- **Skew:** the bits on different wires do not travel at exactly the same speed. Over distance they arrive at slightly different times, so the receiver may read the wrong values unless the clock is slowed down to allow for the difference.
- **Crosstalk:** a signal on one wire induces a signal in its neighbours, causing interference that corrupts data. The risk rises with speed and with cable length.
- **Cost and size:** a parallel cable has many wires and large connectors. Serial cables are thinner, lighter and cheaper.

Because serial links have only one data path, there is no skew between wires and little crosstalk, so the clock rate can be pushed much higher. A fast serial link can then be faster than a slow parallel link. That is why modern external connections such as USB and SATA use serial transmission.

| Feature | Serial | Parallel |
|---|---|---|
| Bits sent at once | 1 | Several (for example 8) |
| Number of wires for data | 1 (per direction) | One per bit |
| Skew | None between data wires | Can be a problem over distance |
| Crosstalk | Low | Higher |
| Cable cost | Lower | Higher |
| Suitable distance | Long | Short |
| Typical speed in practice | High (clock can be fast) | Limited by skew and crosstalk |

## Synchronous and asynchronous transmission

The receiver needs to know **when each bit starts and ends**. The two methods solve this differently.

### Synchronous transmission

- Sender and receiver share a **clock signal** (sent separately or recovered from the data), so they are in step.
- Data is sent in a **continuous stream or in large blocks**, with a small amount of header information (including synchronisation) at the start of each block.
- **Advantages:** little overhead, so a high proportion of the bits carries data; high speeds are possible.
- **Disadvantages:** the clocks must be kept in step, and the equipment is more complex.

### Asynchronous transmission

- There is **no shared clock**. The sender and receiver agree on a transmission speed in advance.
- Data is sent in small groups, usually a character at a time. Each group is **framed by a start bit and one or more stop bits** so the receiver knows where it begins and ends.
- **Advantages:** simple, cheap hardware; gaps between characters are allowed, so it suits irregular data such as keystrokes.
- **Disadvantages:** the extra bits for every group reduce the proportion of useful data, and the speed is lower.

### Start and stop bits

The line is **idle** at a steady level between characters. A **start bit** (a change from the idle level) tells the receiver that a character is about to begin, and lets it **synchronise its timing** to the sender for the bits that follow. One or more **stop bits** (a return to the idle level) mark the **end** of the character and give the receiver time to process it before the next start bit. A parity bit may be added for error detection.

A typical asynchronous frame:

```
idle | START | d0 d1 d2 d3 d4 d5 d6 d7 | (parity) | STOP | idle
```

**Worked example 1: overhead.** A frame has 1 start bit, 8 data bits and 1 stop bit, which is 10 bits for 8 bits of data.

- Efficiency = 8 ÷ 10 = **80%**.
- To send 1,000 bytes: 1,000 × 10 = 10,000 bits.
- At 9,600 bits per second: 10,000 ÷ 9,600 = **1.04 seconds**.
- If a parity bit and a second stop bit were added, each frame would be 12 bits and efficiency would be 8 ÷ 12 = 66.7%.

## Communication basics: definitions

- **Baud rate:** the number of **signal changes (symbols) per second**. It is measured in baud.
- **Bit rate:** the number of **bits transmitted per second** (bits per second, bit/s or bps).
- **Bandwidth:** the **range of frequencies** a channel can carry, measured in hertz (Hz). In everyday use it is also used for the maximum data rate of a connection, but in this specification it is the channel's frequency range, and a larger bandwidth allows a higher bit rate.
- **Latency:** the **delay** between a signal being sent and the start of its arrival. It depends on distance, the equipment on the path and the time spent waiting in queues.
- **Protocol:** a **set of rules** that two communicating devices agree to follow, covering the format of data, timing, error handling and how a conversation starts and ends.

## Baud rate and bit rate

If each signal change carries only one bit (two possible signal levels), then **bit rate = baud rate**. If each signal change can take one of more than two values, each change carries **more than one bit**, so the bit rate is higher than the baud rate:

**bit rate = baud rate × bits per signal change**

The number of bits per change is log₂ of the number of distinct signal levels.

**Worked example 2.** A line runs at 2,400 baud.

- With 2 levels (1 bit per change): bit rate = 2,400 × 1 = **2,400 bit/s**.
- With 4 levels (2 bits per change): bit rate = 2,400 × 2 = **4,800 bit/s**.
- With 16 levels (4 bits per change): bit rate = 2,400 × 4 = **9,600 bit/s**.

Working backwards: a link carrying 9,600 bit/s using 4 bits per signal change has a baud rate of 9,600 ÷ 4 = **2,400 baud**.

## Bit rate and bandwidth

The **bit rate is directly proportional to bandwidth**: a channel with a larger range of frequencies can carry more signal changes per second, and so more bits per second. If the encoding is unchanged, **doubling the bandwidth doubles the bit rate**.

**Worked example 3.** A channel of bandwidth 4 kHz supports 8,000 bit/s with a certain encoding. With the same encoding, a channel of 12 kHz supports 8,000 × (12 ÷ 4) = **24,000 bit/s**.

## Latency and transfer time

The total time to send a message is approximately **latency + (size of message ÷ bit rate)**.

**Worked example 4.** A 5 MB file (5 × 8 = 40 megabits) is sent over a link of 20 megabits per second with 50 ms latency.

- Transfer time = 40 ÷ 20 = 2 seconds.
- Total time = 2 + 0.05 = **2.05 seconds**.

For very small messages the latency dominates (a short instruction to a game server suffers from delay, not from a lack of bit rate). For large files, the bit rate dominates.

## Common mistakes

- Giving **baud rate as the same as bit rate** in all cases. They are equal only with two signal levels.
- Saying parallel is "always faster" or serial is "always faster". Explain **skew** and **crosstalk**.
- Describing start and stop bits as "data". They carry no data; they **frame** the character.
- Using **synchronous with start and stop bits**. Start and stop bits belong to asynchronous transmission.
- Confusing **latency** (delay) with **bit rate** (amount per second).
- Forgetting to convert **bytes to bits** (×8) in transfer-time calculations.

## Exam technique

- For **compare** questions, use a table in your head: each point states the feature for both methods.
- For **"explain the purpose of start and stop bits"**, say what each does (start: signals the start and synchronises; stop: marks the end).
- For **calculations**, write the formula, substitute, and include units.
- For **definitions**, give the unit as well as the idea.

## Related resources

- [Communication revision notes](/resources/aqa-a-level-computer-science-7517-communication-revision-notes/)
- [Communication practice questions](/resources/aqa-a-level-computer-science-7517-communication-practice/)
- [Networking study guide](/resources/aqa-a-level-computer-science-7517-networking/)

*Written against the AQA A-level Computer Science (7517) specification, 4.9.1 Communication. Always check the current specification on the AQA website.*
