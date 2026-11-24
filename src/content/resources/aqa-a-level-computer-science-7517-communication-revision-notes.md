---
title: "AQA A-Level Computer Science (7517): Communication -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.9.1 recall: serial versus parallel, synchronous versus asynchronous, start and stop bits, baud rate, bit rate, bandwidth, latency and protocols."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.9.1 Communication**, AQA A-Level Computer Science (7517). Fuller explanations and four worked calculations are in the [communication study guide](/resources/aqa-a-level-computer-science-7517-communication/); questions are in the [communication practice questions](/resources/aqa-a-level-computer-science-7517-communication-practice/).

## Serial and parallel

| | Serial | Parallel |
|---|---|---|
| Definition | Bits sent one after another along one wire | Several bits sent at the same time, one wire per bit |
| Skew | None between data wires | Bits arrive at different times over distance |
| Crosstalk | Low | Higher: neighbouring wires interfere |
| Cable | Thin, cheap | Many wires, costly connectors |
| Distance | Suitable for long distances | Suitable for short distances |
| Speed in practice | Clock rate can be high | Clock must be slowed to allow for skew |

**Advantages of serial over parallel:** no skew between wires; less crosstalk; cheaper and thinner cable; works over longer distances; a faster clock can compensate for sending one bit at a time. USB and SATA are serial.

## Synchronous and asynchronous

| | Synchronous | Asynchronous |
|---|---|---|
| Timing | Shared clock signal keeps sender and receiver in step | No shared clock; both agree a speed in advance |
| Data sent | Continuous stream or large blocks | Small groups, usually one character |
| Framing | Header at the start of a block | Start bit and stop bit(s) around each character |
| Overhead | Low | Higher |
| Speed | Higher | Lower |
| Hardware | More complex | Simple and cheap |
| Suits | Large, steady transfers | Irregular data such as keystrokes |

## Start and stop bits

- **Start bit:** signals that a character is about to begin and lets the receiver synchronise its timing.
- **Stop bit(s):** mark the end of the character and return the line to idle, giving the receiver time before the next start bit.
- Frame: `START | data bits | (parity) | STOP`.

**Overhead check:** 1 start + 8 data + 1 stop = 10 bits to send 8 bits of data = 80% efficient. With parity and two stop bits it is 8 ÷ 12 = 66.7%.

## Definitions

| Term | Definition and unit |
|---|---|
| Baud rate | Number of signal changes per second (baud) |
| Bit rate | Number of bits transmitted per second (bit/s) |
| Bandwidth | Range of frequencies a channel can carry (Hz); larger bandwidth allows a higher bit rate |
| Latency | Delay between sending a signal and its arrival |
| Protocol | A set of agreed rules for communication |

## Baud rate versus bit rate

**bit rate = baud rate × bits per signal change**

- Two signal levels: 1 bit per change, so bit rate = baud rate.
- Four levels: 2 bits per change. Sixteen levels: 4 bits per change.
- Bits per change = log₂ of the number of levels.

**Check:** 2,400 baud with 4 levels gives 2,400 × 2 = 4,800 bit/s. A 9,600 bit/s link using 4 bits per change runs at 2,400 baud.

## Bit rate and bandwidth

Bit rate is **directly proportional** to bandwidth. With the same encoding, doubling the bandwidth doubles the bit rate. **Check:** 4 kHz carrying 8,000 bit/s means 12 kHz carries 24,000 bit/s.

## Transfer time

**time ≈ latency + (message size in bits ÷ bit rate)**

- Convert bytes to bits by multiplying by 8.
- **Check:** 5 MB = 40 megabits; at 20 megabit/s that is 2 s; add 0.05 s latency to get 2.05 s.
- Large files are limited by bit rate; short messages are limited by latency.

## Protocols

A protocol defines: the format of messages, the order and timing of exchanges, how errors are detected and handled, and how a connection starts and ends. Both ends must follow the same protocol.

## Key terms

| Term | Definition |
|---|---|
| Serial transmission | Sending bits one at a time along one channel |
| Parallel transmission | Sending several bits at once along separate wires |
| Skew | Bits on parallel wires arriving at slightly different times |
| Crosstalk | Interference between neighbouring wires |
| Synchronous | Sender and receiver share a clock |
| Asynchronous | No shared clock; each character is framed by start and stop bits |
| Parity bit | An extra bit added so that errors can be detected |
| Signal change | A change in the state of the transmission medium that represents data |
| Idle | The steady line level between characters |

## Exam traps

- **Baud rate is not always equal to bit rate.** It is only when each change carries one bit.
- **Name the cause** when explaining why parallel loses out: skew and crosstalk.
- **Start and stop bits carry no data**; they are used only for framing and timing.
- **Latency is a delay**, not a rate.
- **Convert bytes to bits** before dividing by a bit rate.
- **Give the unit** with every answer: baud, bit/s, Hz, seconds.
- **Do not link start/stop bits to synchronous transmission.**

## Self-test

1. Define serial transmission.
2. Give two problems of parallel transmission over a long cable.
3. State one difference between synchronous and asynchronous transmission.
4. State the purpose of a start bit.
5. State the purpose of a stop bit.
6. Define baud rate.
7. A line runs at 1,200 baud with 8 signal levels. What is the bit rate?
8. How does doubling bandwidth affect the bit rate, other things equal?
9. What is latency?
10. What is a protocol?
11. A frame has 1 start bit, 7 data bits, 1 parity bit and 1 stop bit. What fraction is data?
12. Why is the total time to send a small message often dominated by latency?

**Answers**

1. Bits are sent one after another along a single wire or channel.
2. Skew and crosstalk (also higher cable cost).
3. Synchronous uses a shared clock; asynchronous uses start and stop bits and no shared clock.
4. It tells the receiver that a character is starting and lets it synchronise its timing.
5. It marks the end of the character and returns the line to idle.
6. The number of signal changes per second.
7. 8 levels is 3 bits per change, so 1,200 × 3 = 3,600 bit/s.
8. It doubles the bit rate.
9. The delay between a signal being sent and arriving.
10. A set of rules that devices follow so they can communicate.
11. 7 ÷ 10 = 70%.
12. The data takes very little time to send, so the fixed delay is most of the total.

## More resources on this topic

- [Communication study guide](/resources/aqa-a-level-computer-science-7517-communication/)
- [Communication practice questions](/resources/aqa-a-level-computer-science-7517-communication-practice/)
- [Networking revision notes](/resources/aqa-a-level-computer-science-7517-networking-revision-notes/)
