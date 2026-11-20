---
title: "AQA A-Level Computer Science (7517): Networking"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "networking-7517"
description: "Deeper guide to AQA 7517 section 4.9.2 Networking: physical star and logical bus topologies, peer-to-peer and client-server networks, WiFi components, wireless security, SSID and CSMA/CA with RTS/CTS."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.9.2 Networking** in AQA A-Level Computer Science (7517). There are three parts. **Network topology:** understand the physical star and logical bus topologies, differentiate between them and explain their operation. **Types of networking between hosts:** explain peer-to-peer and client-server networking and describe situations where each might be used. **Wireless networking:** explain the purpose of WiFi, know the components needed, know how wireless networks are secured, explain the protocol CSMA/CA with and without Request to Send/Clear to Send (RTS/CTS), and know the purpose of the Service Set Identifier (SSID).

The wider [communication and networking study guide](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/) covers all of section 4.9. This page adds step-by-step explanations of the wireless protocol and worked comparisons.

Condensed notes are in the [networking revision notes](/resources/aqa-a-level-computer-science-7517-networking-revision-notes/), and exam-style questions are in the [networking practice questions](/resources/aqa-a-level-computer-science-7517-networking-practice/).

## Physical and logical topology

A **topology** describes how the devices in a network are arranged. It can be described in two ways, and they need not be the same:

- **Physical topology:** the actual layout of the cables and devices.
- **Logical topology:** the way that data is seen to flow between devices, whatever the cabling looks like.

The specification highlights the **physical star** and the **logical bus**, and notes that a network physically wired as a star can behave logically as a bus.

## Physical star topology

Every device is connected by its **own cable** to a **central device**, a hub or a switch.

**Operation.** A device sends data along its cable to the central device, which passes it on. With a **switch**, the data is sent only out of the port that leads to the destination device. With a **hub**, it is repeated out of every port.

**Advantages**

- A fault in one cable affects only the device on that cable.
- New devices are easy to add: plug in another cable.
- With a switch, each device has its own dedicated link, so traffic from one pair does not slow another.
- Faults are easy to locate.

**Disadvantages**

- If the central device fails, the whole network fails (a single point of failure).
- More cable is needed than for a bus.
- The cost of the central device.

## Logical bus topology

In a **logical bus**, all devices share **one communication path** and every transmission is available to every device. A frame carries the address of its destination. Each device sees every frame but processes only those addressed to it.

**Operation.** Only one device can transmit successfully at a time. If two transmit together, their signals collide and both messages are corrupted, so a bus protocol is needed to make devices check the line is free and recover from collisions.

**Advantages:** simple model; easy to understand; little equipment is needed in a true bus.

**Disadvantages:** collisions increase as more devices are added, so performance falls; all devices can see all data, which is a security concern; with a physical bus cable, a break stops the whole bus.

**A star that behaves as a bus.** If the central device in a physical star is a **hub**, it repeats everything to every port, so all devices share the same traffic: logically it is a bus. A bus protocol is used to control access, and the hub provides the "appropriate physical switching" that links the cables together. If the central device is a **switch** that sends frames only to the destination port, the network behaves logically as a set of separate links, not as a single shared bus.

| Feature | Physical star | Logical bus |
|---|---|---|
| Describes | How cables are laid out | How data is shared between devices |
| Central device | Hub or switch | None needed logically |
| Failure of one cable | Affects one device | In a physical bus, can stop everything |
| Collisions | None with a switch | Possible, so a protocol is needed |
| Privacy between devices | Better with a switch | All devices see all traffic |

**Worked example 1: shared capacity.** A shared bus runs at 100 Mbit/s and 10 devices are all transmitting continuously. If they share equally, each gets about 100 ÷ 10 = **10 Mbit/s**. In a switched star, each device has its own 100 Mbit/s link to the switch, so the pair that exchange data can each use their full link.

## Peer-to-peer networking

In a **peer-to-peer** network each computer has **equal status**. Each can share its own files and devices and can use those shared by others. There is no dedicated server.

**Advantages:** cheap and simple to set up; no server to buy or administer; no single point of failure for the whole network.

**Disadvantages:** hard to manage security and back-ups, because data is spread across many machines; each machine may slow down when others use its resources; the network does not scale well to many users.

**Suitable for:** a home or a very small office sharing a printer and a few files.

## Client-server networking

In a **client-server** network, most computers are **clients** and one or more are **servers**. Clients **request services** and servers **provide** them: file servers, email servers, print servers, web servers.

**Advantages:** central control of security, user accounts and back-ups; files stored in one place; easier to manage and to expand; servers can be powerful machines built for the job.

**Disadvantages:** server hardware and software cost more; staff are needed to administer it; if the server fails, its service is unavailable to all clients; heavy demand can overload the server.

**Suitable for:** schools, businesses and any organisation with many users who need shared, secure, backed-up data.

## WiFi and its components

**WiFi** is a **wireless local area network** based on international standards. Its purpose is to let devices **connect to a network wirelessly**, which makes it easy to connect laptops, phones and tablets without cables and to move around.

Components:

- a **wireless network adapter** in each device (built in to most laptops and phones);
- a **wireless access point (WAP)**, which links the wireless devices to each other and to the wired network (often built into a home router).

### Service Set Identifier (SSID)

The **SSID** is the **name** that identifies a particular wireless network. A device uses it to choose which network to join. An access point normally broadcasts its SSID so that devices can find it.

### Securing a wireless network

Radio signals reach anyone within range, so wireless networks need extra protection:

- **Strong encryption of transmitted data using WPA or WPA2.** The data is scrambled with a key, so a person who intercepts it cannot read it. This is the most important measure.
- **SSID broadcast disabled.** The network name is not advertised, so it does not appear in a list of available networks. This hides the network from casual users, but a determined attacker can still discover the name from traffic, so it is not strong security on its own.
- **MAC address allow list.** The access point accepts only devices whose MAC addresses are on an approved list. MAC addresses can be copied (spoofed) by an attacker who has seen them in traffic, so this also works best together with encryption.

## CSMA/CA

Wireless devices share the same radio channel, and a device **cannot listen while it is transmitting**, so it cannot detect a collision as it happens. **Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)** therefore tries to **avoid** collisions.

### Without RTS/CTS

1. The device wants to send, so it **listens** to the channel (carrier sense).
2. If the channel has been **idle** for a short set period, it transmits its frame.
3. If the channel is **busy**, it waits until the channel is free and then waits a further **random back-off time**, so that two waiting devices are unlikely to start together.
4. The receiver sends back an **acknowledgement (ACK)** if the frame arrives correctly.
5. If no ACK is received, the sender assumes a collision and tries again after another random back-off.

### With RTS/CTS

This option deals with the **hidden node problem**: two devices may both be in range of the access point but out of range of each other. Each thinks the channel is free when the other is sending, so they collide at the access point.

1. The device that wants to send first transmits a short **Request to Send (RTS)** frame to the access point.
2. If the channel is free, the access point replies with a **Clear to Send (CTS)** frame. Every device in range of the access point hears the CTS, including the hidden one, so they **stay silent** for the time stated.
3. The sender transmits its data.
4. The access point sends an ACK.

RTS and CTS are short, so a collision on them costs little. The cost is the extra frames for every transmission, which is why RTS/CTS is mainly worth using for large frames or in busy networks.

## Common mistakes

- Treating **physical** and **logical** topology as the same thing.
- Saying a switch and a hub work in the same way. A hub repeats to all ports; a switch sends to one.
- Describing peer-to-peer as "having no security". Say that security and back-up are **harder to manage**.
- Stating that **disabling SSID broadcast** or a **MAC allow list** makes a network fully secure.
- Confusing **CSMA/CA** (collision avoidance, used in wireless) with detecting collisions after they happen.
- Forgetting the **acknowledgement** in the CSMA/CA process.
- Saying that RTS/CTS stops all collisions. It reduces them, especially from hidden nodes.

## Exam technique

- For **compare** questions on topologies or network types, give each point as a feature for both.
- For **"describe a situation"** questions, tie the choice to the scenario: size, number of users, need for central control.
- For **CSMA/CA**, write numbered steps in order.
- For **security**, name the method and say what it protects against and one weakness.

## Related resources

- [Networking revision notes](/resources/aqa-a-level-computer-science-7517-networking-revision-notes/)
- [Networking practice questions](/resources/aqa-a-level-computer-science-7517-networking-practice/)
- [Communication study guide](/resources/aqa-a-level-computer-science-7517-communication/)

*Written against the AQA A-level Computer Science (7517) specification, 4.9.2 Networking. Always check the current specification on the AQA website.*
