---
title: "Cambridge IGCSE Computer Science (0478): Types and methods of data transmission -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2: Data transmission"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 2.1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "types-and-methods-of-data-transmission-0478"
description: "Condensed Cambridge IGCSE Computer Science 0478 notes on packets, packet switching, serial, parallel, simplex and duplex methods and USB, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **2.1 Types and methods of data transmission** from Topic 2, Data transmission, of the Cambridge
IGCSE Computer Science 0478 syllabus for 2026 to 2028 (Paper 1, Computer systems). For explanations and worked
scenarios, read the
[Types and methods of data transmission study guide](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission/),
then try the
[practice questions](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission-practice/).
The whole topic is summarised in the [Data Transmission revision notes](/resources/data-transmission-revision-notes/).

## Packets

- Data is **broken down into packets** before it is sent.
- Only a lost or damaged packet needs resending, not the whole file.

| Part | Contents |
|---|---|
| Header | Destination address; packet number; originator's address |
| Payload | The actual data |
| Trailer | Marks the end of the packet; may hold error-checking data |

## Packet switching (six-step sequence)

```
1  data broken into packets (each with a header)
2  packets sent independently
3  a router reads the destination address and controls each packet's route
4  packets may take different routes
5  packets may arrive out of order
6  once the LAST packet arrives, the receiver reorders them using packet numbers
```

Benefit: avoids busy or broken paths; links shared by many users. Drawback: packets must be reassembled; some may be
delayed.

## Serial vs parallel (how many bits at once)

| | Serial | Parallel |
|---|---|---|
| Bits | One at a time | Several at once |
| Wires | One | Several (e.g. 8) |
| Speed | Slower over short distances | Faster over short distances |
| Long distance | Reliable | Skew causes errors |
| Cost | Cheaper | More expensive |
| Interference between wires | Not an issue | Possible |
| Use | Long links, USB | Short links inside a computer |

**Skew**: bits sent at the same time on different wires arrive at slightly different times.

## Simplex, half-duplex, full-duplex (which direction, and when)

| Method | Direction | Example | Advantage | Disadvantage |
|---|---|---|---|---|
| Simplex | One way only | Sensor → computer | Simple, cheap | No reply possible |
| Half-duplex | Both ways, one at a time | Walkie-talkie | Two-way on one channel | Must take turns; slower |
| Full-duplex | Both ways at once | Phone call | Fastest two-way | More complex and costly |

Every link has **both** a serial/parallel type **and** a direction type, e.g. "serial, half-duplex".

**Method: answering a scenario question**

```
Step 1  distance? long → serial; very short and speed needed → parallel
Step 2  direction? one way → simplex; two ways in turn → half; two ways at once → full
Step 3  name both methods, then give a reason from the scenario for each
```

## USB (universal serial bus)

- Uses **serial** transmission.
- Device plugged in → **detected automatically** → driver loaded or installed.

| Benefits | Drawbacks |
|---|---|
| Industry standard; supported by most devices and computers | Limited cable length |
| Automatic detection and driver loading | Transmission rate lower than some specialised interfaces |
| Connectors designed so they cannot be plugged in wrongly | Very old versions may not support newer devices |
| Can supply power and charge devices | |
| Newer versions backward compatible | |

## Key terms

| Term | Meaning |
|---|---|
| Packet | Small unit of data sent across a network |
| Header | Part of a packet holding the addresses and packet number |
| Payload | The data carried by a packet |
| Trailer | End of a packet; can include error-checking data |
| Packet switching | Packets sent independently, possibly by different routes, then reordered |
| Router | Device that controls the route a packet takes |
| Serial | One bit at a time down one wire |
| Parallel | Several bits at once down several wires |
| Skew | Bits on parallel wires arriving at different times |
| Simplex / half-duplex / full-duplex | One way / both ways in turn / both ways at once |

## Exam traps

- Header described as "the address" with no detail.
- "The router puts the packets back in order": it is the **receiving device**.
- "Parallel is always faster": only over **short** distances.
- Half-duplex described as one-way.
- Giving only one of the two descriptions (e.g. "serial") when the question wants both.
- USB called parallel.

## Quick self-test

1. Name the three items in a packet header.
2. What is the payload?
3. Why might packets from the same file arrive out of order?
4. What does the receiving device use to reorder packets?
5. When does reordering happen?
6. Define serial transmission.
7. Explain why parallel transmission is unreliable over long distances.
8. Give one example of simplex transmission.
9. What is the difference between half-duplex and full-duplex?
10. Which methods suit a video call between two countries?
11. Give two benefits of USB.
12. Give one drawback of USB.

### Answers

1. Destination address, packet number, originator's address.
2. The actual data being carried.
3. Each packet may take a different route, chosen by routers.
4. The packet numbers.
5. Once the last packet has arrived.
6. Data sent one bit at a time down a single wire.
7. Bits on different wires can arrive at different times (skew), causing errors.
8. A sensor sending readings to a computer (or a computer sending to a printer that sends nothing back).
9. Half-duplex: both ways but one at a time; full-duplex: both ways at the same time.
10. Serial (long distance) and full-duplex (both people send and receive at once).
11. Any two: standard and widely supported; devices detected automatically; supplies power; cannot be plugged in
    wrongly; backward compatible.
12. Limited cable length (or lower transmission rate than some interfaces).

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 2 Data
transmission, 2.1 Types and methods of data transmission.
