---
title: "Cambridge IGCSE Computer Science (0478): Types and methods of data transmission"
resourceType: "study-guides"
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
description: "Cambridge IGCSE Computer Science 0478 data transmission in depth: packets, packet switching, serial and parallel, simplex and duplex methods, and USB."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **2.1 Types and methods of data transmission**, the first subtopic of Topic 2, Data
transmission, in the Cambridge IGCSE Computer Science 0478 syllabus for 2026 to 2028, examined on Paper 1, Computer
systems. The [Data Transmission study guide](/resources/igcse-computer-science-data-transmission/) gives an overview
of the whole topic. This page explains each part of 2.1 in turn and shows how to justify a choice of method for a
scenario, which is where most marks in this subtopic are won or lost. For quick recall, use the
[revision notes](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission-revision-notes/),
and test yourself with the
[practice questions](/resources/cambridge-igcse-computer-science-0478-types-and-methods-of-data-transmission-practice/).

## What 2.1 asks you to do

- Understand that data is **broken down into packets** to be transmitted.
- Describe the **structure of a packet**: header, payload and trailer.
- Describe the process of **packet switching**.
- Describe **serial**, **parallel**, **simplex**, **half-duplex** and **full-duplex** transmission.
- Explain the **suitability** of each method for a given scenario, with advantages and disadvantages.
- Understand the **universal serial bus (USB)** interface, how it transmits data, and its benefits and drawbacks.

## Packets

A large file is not sent across a network in one piece. It is **broken down into small units called packets**. Each
packet can be sent, checked and, if necessary, resent on its own. If one small packet is lost, only that packet needs
to be sent again, not the whole file.

### The structure of a packet

| Part | What it contains | Why it is needed |
|---|---|---|
| **Header** | The **destination address**, the **packet number** and the **originator's address** | So routers know where to send it, the receiver can put packets in order, and the receiver knows where it came from |
| **Payload** | The actual data being sent: a part of the file or message | This is the content itself |
| **Trailer** | Marks the **end of the packet**, and can hold data for checking errors | So the receiver knows the packet is complete and can check it |

In an exam, "the header contains the address" is not enough for full marks; name the three items.

## Packet switching

Packet switching is the method used to send packets across a network such as the internet. Describe it as a
sequence:

1. The data is **broken down into packets**, each with a header.
2. Each packet is sent **independently**.
3. A **router** reads the destination address and **controls the route** each packet takes, sending it on towards
   the destination.
4. Because routes are chosen packet by packet, **each packet may take a different route**, depending on how busy
   each path is.
5. Packets may therefore **arrive out of order**.
6. **Once the last packet has arrived**, the receiving device uses the **packet numbers** to **reorder** the packets
   and rebuild the original data.

**Why this is useful.** Packets can avoid a busy or broken part of the network, so data still gets through. Many users
can share the same links at once. The drawback is that packets arrive out of order and may be delayed, so they must
be reassembled before the data can be used.

## Serial and parallel transmission

These describe **how many bits travel at once**.

- **Serial**: data is sent **one bit at a time** down a **single wire** (or channel).
- **Parallel**: **several bits are sent at the same time**, down **several wires**, usually 8 or more.

| | Serial | Parallel |
|---|---|---|
| Advantages | Bits arrive in order, so no risk of them getting out of step; fewer wires, so cheaper; reliable over long distances | Faster over a short distance, because several bits travel at once |
| Disadvantages | Slower than parallel over a short distance | Bits on different wires can arrive at slightly different times (skew), which causes errors over long distances; more wires, so more expensive; wires close together can interfere with each other |
| Typical use | Long-distance links, most modern connections including USB | Short connections inside a computer, such as between components on a circuit board |

## Simplex, half-duplex and full-duplex

These describe **which direction** data travels and **when**.

- **Simplex**: data travels in **one direction only**. Example: a computer sending data to a printer that never sends
  anything back, or a sensor sending readings to a computer.
- **Half-duplex**: data can travel in **both directions, but only one direction at a time**. Example: a walkie-talkie,
  where one person speaks while the other listens.
- **Full-duplex**: data can travel in **both directions at the same time**. Example: a phone call, or a broadband
  connection that downloads and uploads at once.

| | Advantage | Disadvantage |
|---|---|---|
| Simplex | Simple and cheap; the whole channel is used one way | No reply or confirmation can be sent back |
| Half-duplex | Two-way communication on one channel | Devices must wait their turn, so it is slower than full-duplex |
| Full-duplex | Fastest two-way communication; no waiting | More complex and more expensive |

### Combining the two ideas

Every connection has **both** a serial-or-parallel description and a direction description. A connection can be,
for example, **serial and full-duplex** or **parallel and simplex**. Exam questions often ask for both, so give both.

## Justifying a method: worked examples

**Worked example 1.** A weather station on a hilltop sends temperature readings every minute to a computer in a town
5 km away. It never needs to receive data. Identify a suitable method of transmission and justify it.

> Serial, simplex. Serial because the distance is long: bits sent one at a time down one wire do not suffer from
> skew, and one wire is cheaper than several over 5 km. Simplex because data only needs to travel one way, from the
> station to the computer.

**Worked example 2.** Two components on the same circuit board must exchange large amounts of data very quickly, in
both directions at once. Identify a method.

> Parallel, full-duplex. Parallel because the distance is very short, so skew is not a problem and sending several
> bits at once is faster. Full-duplex because data must flow both ways at the same time without waiting.

The pattern for full marks: **name** the method, then give a **reason linked to the scenario** (distance, speed,
cost, or the direction of data).

## The universal serial bus (USB)

**USB** is a standard interface for connecting devices to a computer. As its name says, it uses **serial**
transmission. When a device is plugged in, the computer **detects it automatically** and loads, or installs, the
right driver so the device can be used.

**Benefits**

- It is an **industry standard**, so a very wide range of devices use it and it is supported by most computers.
- Devices are **detected automatically**, and the right driver is usually loaded without the user doing anything.
- The connectors are designed so that they cannot be plugged in the wrong way.
- It can **supply power** to a device as well as data, so some devices need no separate power supply, and it can
  charge devices.
- Newer versions are usually **backward compatible** with older ones.

**Drawbacks**

- **Cable length is limited**, so it is not suitable for connecting devices far apart.
- Its **transmission rate** is lower than some other, more specialised interfaces.
- Very old versions of USB may not support some newer devices.

## Common mistakes

- Listing packet parts without the three header items.
- Saying all packets "take the same route" or "arrive in order".
- Saying a router "reorders" the packets. The receiving device reorders them.
- Calling parallel transmission "always faster". It is faster only over short distances.
- Confusing half-duplex with simplex: half-duplex is two-way, just not at the same time.
- Saying USB is parallel. It is serial.

## Exam technique

**Describe** packet switching as an ordered sequence of the six steps. **Identify** a method by naming it.
**Justify** or **explain the suitability** by tying the advantage to a detail in the scenario. For **benefits and
drawbacks** questions about USB, give each as a separate, specific point; "it is good" or "it is cheap" alone earns
little.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 2 Data
transmission, 2.1 Types and methods of data transmission.
