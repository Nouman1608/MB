---
title: "Cambridge O Level Computer Science (2210): Types and methods of data transmission"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 2.1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "types-and-methods-of-data-transmission"
description: "Study guide to Cambridge O Level Computer Science 2210 section 2.1: packets, packet switching, serial, parallel, simplex and duplex methods, and USB."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 2.1 of the Cambridge O Level Computer Science 2210 syllabus has three parts. You must understand that data is broken down into **packets**, describe the **structure of a packet** and the process of **packet switching**; describe and explain the suitability of **serial, parallel, simplex, half-duplex and full-duplex** transmission "for a given scenario"; and understand the **universal serial bus (USB)** interface, including its benefits and drawbacks.

The [Data Transmission study guide](/resources/o-level-cambridge-computer-science-data-transmission/) gives an overview of the whole topic. This guide concentrates on 2.1: it explains why each feature exists, works through a packet calculation and a scenario question, and shows how examiners expect "suitability" answers to be built.

## Why data is split into packets

A large file is not sent as one continuous stream. It is broken into small units called **packets**. Splitting data this way means:

- many users can share the same network links, because packets from different messages can be interleaved;
- if one packet is lost or damaged, only that packet needs to be sent again, not the whole file;
- packets can be sent by whichever route is least busy at the moment.

## The structure of a packet

The syllabus names three parts.

| Part | Contents and purpose |
|---|---|
| Packet header | Control information needed to deliver the packet |
| Payload | The actual data being sent, one piece of the original file |
| Trailer | Marks the end of the packet; often also carries error-checking data |

The header must include:

- the **destination address**, so routers know where to send the packet;
- the **packet number**, so the receiver can put the packets back in the right order;
- the **originator's address** (the sender), so the receiver knows where the packet came from and where to send any reply or request to resend.

### Worked example 1: how many packets?

A 3 MiB image is sent in packets that each carry a 1 KiB payload.

- 3 MiB = 3 × 1024 KiB = 3072 KiB.
- 3072 KiB ÷ 1 KiB per packet = **3072 packets**.

Each packet has its own header and trailer, so the total amount transmitted is more than 3 MiB. If packet 1500 is damaged, only that one packet has to be sent again.

## Packet switching

The syllabus lists five points, and an answer that covers them in order scores well.

1. The data is broken down into packets.
2. Each packet could take a **different route** across the network.
3. A **router** controls the route each packet takes, choosing the next step based on the destination address and how busy the links are.
4. Because routes differ in length and traffic, packets **may arrive out of order**.
5. **Once the last packet has arrived**, the packets are **reordered** using their packet numbers to rebuild the original data.

The benefit is efficient use of the network: no single route is reserved for one conversation, and traffic can avoid broken or congested links. The cost is that the receiver must wait for every packet and do the work of reordering.

## Serial and parallel transmission

**Serial transmission** sends data **one bit at a time along a single wire** (or channel). **Parallel transmission** sends **several bits at the same time along several wires**, for example eight bits along eight wires.

| | Serial | Parallel |
|---|---|---|
| Advantages | Bits arrive in order; reliable over long distances; cheaper cable with fewer wires; less interference between wires | Faster over short distances because several bits travel at once |
| Disadvantages | Slower than parallel for the same clock rate, because bits travel one after another | Bits can arrive at slightly different times over long distances (skew), corrupting data; more wires cost more; wires can interfere with each other |
| Typical use | Long-distance links, USB, network cables | Short links inside a computer, such as between the CPU and memory on internal buses |

The key idea is **distance**. Parallel is faster in principle, but the longer the cable, the more likely bits in the same group arrive out of step, so serial is chosen for anything more than a short distance.

## Simplex, half-duplex and full-duplex

These describe the **direction** of transmission.

| Method | Directions | Example |
|---|---|---|
| Simplex | One direction only | A computer sending data to a printer that never replies; a sensor sending readings to a monitoring computer |
| Half-duplex | Both directions, but only one direction at a time | A walkie-talkie; a channel where devices take turns |
| Full-duplex | Both directions at the same time | A telephone call; a broadband connection that downloads and uploads together |

**Advantages and disadvantages to learn**

- Simplex is the simplest and cheapest, but the receiver cannot send back acknowledgements or report errors.
- Half-duplex allows two-way communication on a single channel, but each side must wait for the other to finish, which slows the exchange.
- Full-duplex is the fastest for two-way communication, but it needs more complex hardware (or two channels).

Methods combine: a connection is described both by how bits travel (serial or parallel) and by direction (simplex, half-duplex or full-duplex). A network cable link between a laptop and a router is **serial, full-duplex**.

## The universal serial bus (USB)

USB is a standard interface for connecting devices such as keyboards, printers, phones and flash drives to a computer. As its name says, it uses **serial** transmission.

How it is used: when a device is plugged in, the computer detects it, identifies the type of device, and loads or asks for the correct driver. Data is then sent serially along the cable, and the cable can also carry power.

| Benefits | Drawbacks |
|---|---|
| A single industry standard, supported by almost all computers and many devices | Cable length is limited to a few metres before the signal becomes unreliable |
| Devices are detected automatically and the right driver is loaded | Older USB versions are much slower than newer ones, so an old port can limit a new device |
| Can supply power, so small devices need no separate power supply | The power supplied may not be enough for larger devices |
| Connectors fit only one way (or both ways on newer reversible types), reducing damage | Older and newer connector shapes differ, so adaptors may be needed |
| Newer versions are backwards compatible with older ones | |

## Worked example 2: a suitability answer

**Question:** A school's science department connects a temperature sensor in a greenhouse to a computer in a classroom 40 metres away. The sensor only sends readings; it never receives data. Identify the most suitable methods of data transmission and justify your choices. [4]

**Model answer:** Serial transmission should be used [1] because the cable has to cover a long distance, and with parallel the bits could arrive out of step and corrupt the readings [1]. Simplex transmission is suitable [1] because data only needs to travel in one direction, from the sensor to the computer [1].

Each method is followed by a reason **taken from the scenario** (distance; one direction). "Serial is cheaper" would be weaker here, because the question gives distance as the deciding detail.

## Common mistakes

- Writing that packets "always take the shortest route". Routers choose routes, and different packets may go different ways.
- Leaving out reordering, or saying packets are reordered as each arrives. The syllabus says once the **last** packet has arrived.
- Putting the packet number in the payload or trailer. It is in the header.
- Saying serial is "faster over long distances". It is more **reliable** over long distances; parallel is faster over short ones.
- Confusing half-duplex with simplex. Half-duplex is two-way, just not at the same time.
- Calling USB a parallel interface.

## Exam technique

- **Describe** packet switching: number the five steps from the syllabus.
- **Describe the structure of a packet**: three parts, then the three header items.
- **Explain the suitability** of a method: method plus reason linked to the scenario, as in worked example 2.
- **Benefits and drawbacks of USB**: give each as a full sentence; "power" alone does not score, "USB can power the device so it needs no separate supply" does.

Condense this guide with the [Types and methods of data transmission revision notes](/resources/cambridge-o-level-computer-science-2210-types-and-methods-of-data-transmission-revision-notes/), then practise with the [Types and methods of data transmission practice questions](/resources/cambridge-o-level-computer-science-2210-types-and-methods-of-data-transmission-practice/).
