---
title: "OxfordAQA A-Level Computer Science (9645): Networking"
seoTitle: "OxfordAQA 9645 Networking Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "networking-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.14.2 in depth: peer-to-peer and client-server, thin and thick clients, copper and fibre, CSMA/CD, Wi-Fi security, CSMA/CA with RTS/CTS."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.14.2 Networking** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.14 Networking and cyber security. It is International A-level content, examined in Unit 4, the written paper. It has five parts: types of networking between hosts (3.14.2.1), thin-client versus thick-client computing (3.14.2.2), wired networking (3.14.2.3), wireless networking (3.14.2.4) and a comparison of wired and wireless networking (3.14.2.5).

The topic-level [networking and cyber security study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/) covers all of topic 3.14 in one pass. This page goes deeper on networking, with scenario choices and step-by-step protocol traces. Afterwards use the [networking revision notes](/resources/oxfordaqa-a-level-computer-science-9645-networking-revision-notes/) and the [networking practice questions](/resources/oxfordaqa-a-level-computer-science-9645-networking-practice/).

## 3.14.2.1 Types of networking between hosts

A **host** is any device on a network. There are two main models.

| | Peer-to-peer | Client-server |
|---|---|---|
| Status of computers | Every computer has **equal status** | Most computers are **clients**; one or more are **servers** |
| Who provides services | Any computer can both request and provide | Clients **request** services; servers **provide** them (file server, email server) |
| Management | Each user manages their own computer | Central management of users, security and backups |
| Cost and complexity | Cheap and simple; no dedicated server | Server hardware and an administrator needed |
| Weakness | Hard to secure and back up; slows if many peers share one machine | Server failure stops the service; the server can be a bottleneck |

**When to use each.** Peer-to-peer suits a small home network or a few colleagues sharing a printer and files. Client-server suits a school with 400 users, where logins, shared storage, security and backups must be controlled centrally.

## 3.14.2.2 Thin-client versus thick-client computing

| | Thin client | Thick client |
|---|---|---|
| Processing | Done mostly on the **server** | Done on the **client's own processor** |
| Storage and software | Held on the server | Installed and stored locally |
| Client hardware | Minimal: small processor, little memory, may have no hard disk | Full specification |
| Network requirement | Needs a **fast, reliable** connection; useless if it fails | Can work **offline**; network is used for file access and updates |
| Server requirement | Powerful server to run work for many clients | Server needed mainly for files and authentication |
| Management | Software updated once on the server; cheap clients | Each machine must be updated and maintained |

A call-centre with 200 identical desks suits thin clients: low cost per desk and central control. A video editor needing a powerful local graphics processor and the ability to work on a train needs a thick client.

## 3.14.2.3 Wired networking

### Copper and fibre-optic cables

The specification compares cables on **cost, speed and capacity** and expects you to select the most appropriate cable for a situation.

| | Copper (twisted pair) | Fibre-optic |
|---|---|---|
| Signal | Electrical | Pulses of light |
| Cost | Cheaper cable and cheaper connectors | More expensive cable and equipment |
| Speed | Lower | Higher |
| Capacity | Lower | Much higher |
| Distance | Signal weakens over about 100 m for common twisted pair | Can run kilometres between repeaters |
| Interference | Affected by electrical interference | Not affected by electrical interference |

**Worked example 1: choosing a cable.** A school needs (a) to connect 30 computers inside one room to a switch 20 m away, and (b) to link the main building to a sports hall 400 m away carrying data for the whole site. For (a), copper twisted pair is the best choice: short distance, low cost, and enough speed. For (b), fibre-optic is the best choice: the distance is far beyond the reach of common twisted pair, the link carries many users so needs high capacity, and fibre is unaffected by electrical interference between buildings.

### CSMA/CD

On a wired network where several devices share the same medium, two devices might transmit at the same moment, causing a **collision** and corrupted data. **Carrier Sense Multiple Access with Collision Detection (CSMA/CD)** manages this.

1. **Carrier sense:** a device wanting to send first listens to see whether the medium is in use.
2. If it is **idle**, the device begins to transmit. (If busy, it waits until idle.)
3. **Collision detection:** while sending, the device keeps monitoring the medium. If it detects a signal that does not match what it sent, a collision has happened.
4. On a collision the devices **stop** and send a short **jam signal** so that every device knows.
5. Each device then waits for a **random time** before trying again from step 1.

**Worked example 2.** Devices A and B both find the medium idle and begin sending together. Both detect the collision, stop and send a jam signal. A picks a random wait of 3 time slots and B picks 1. B waits 1 slot, finds the medium idle and transmits. A waits 3 slots, finds the medium busy because B is still sending, and waits until it is idle before sending. The random delay is what usually prevents the same collision repeating.

## 3.14.2.4 Wireless networking

**Wi-Fi** is a **wireless local area network based on international standards**. Its purpose is to let devices connect to a network without cables.

- **SSID (Service Set Identifier):** the name that identifies a wireless network, so users can tell one network from another and choose which to join.
- **Components needed:** each device needs a **wireless network adapter**; the network needs a **wireless access point** (WAP). In many homes one box combines the functions of a switch, a router and a wireless access point.

### Securing a wireless network

Radio signals can be received by anyone in range, so wireless networks need extra protection:

| Method | How it helps | Limitation |
|---|---|---|
| **Strong encryption of transmitted data (WPA2)** | Intercepted data cannot be read without the key | Weak passphrases can still be guessed |
| **SSID broadcast disabled** | The network name is not advertised, so casual users do not see it | Anyone with the right equipment can still detect that a network exists |
| **MAC address allow list** | Only devices with listed hardware addresses can join | Addresses can be copied (spoofed) by an attacker |

The most important protection is the encryption; the others add a small obstacle.

### CSMA/CA

In a wireless network a device cannot reliably detect a collision while it is transmitting, because its own signal swamps what it receives. **Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)** therefore tries to **avoid** collisions rather than detect them.

**Without RTS/CTS:**

1. The device listens to check whether the channel is idle.
2. If it is idle, the device waits for a short random time and checks again, then transmits its frame. If busy, it waits and tries again.
3. The receiver sends an **acknowledgement (ACK)** when the frame arrives correctly.
4. If no ACK is received, the sender assumes a collision, waits a random time and retransmits.

**With Request to Send / Clear to Send (RTS/CTS):**

1. The sender, when the channel is idle, sends a short **RTS** frame to the access point.
2. The access point replies with a **CTS** frame. Every device in range of the access point hears the CTS, including devices that cannot hear the sender, and stays silent for the stated time.
3. The sender transmits its data frame.
4. The receiver sends an ACK.

RTS/CTS solves the **hidden terminal problem**: two devices on opposite sides of the access point cannot hear each other, so each thinks the channel is idle. Without RTS/CTS both transmit and collide at the access point. The cost is the extra RTS and CTS frames, so it is worthwhile mainly when large frames make a collision expensive.

## 3.14.2.5 Comparing wired and wireless networking

| Feature | Wired | Wireless |
|---|---|---|
| Mobility | Devices tied to a cable | Devices can move around within range |
| Installation | Cabling is costly, and slow to install in an existing building | Easy and quick to add devices |
| Speed and reliability | Generally faster and more stable | Often slower; signals can drop |
| Interference | Little | Walls, distance and other radio sources reduce signal |
| Security | Harder to intercept; need physical access | Signal can be received by anyone in range, so encryption is essential |
| Number of devices | Limited by the number of ports | Many devices can join, but they share the channel |

**Worked example 3.** A café wants customers to use the internet on phones and laptops. Wireless is the right choice: customers move about, cannot be tied to sockets, and the owner avoids running a cable to every table. Security still matters, so the owner uses WPA2 encryption. The café's till system, however, is cabled to the router, because it needs a reliable connection and carries payment data.

## Exam technique

- **Compare means two sides.** For each point, state what applies to each option.
- **Scenario questions:** pick an option, link to a feature of the scenario, and give a reason.
- **Protocol descriptions** need the steps in order, including the waiting or acknowledgement.
- **Security:** name the method and say how it protects the network.

## Common mistakes

- Saying peer-to-peer has no security at all.
- Describing a thin client as one with a small screen. It is about where processing happens.
- Mixing up CSMA/CD (detect and recover) with CSMA/CA (avoid and acknowledge).
- Saying fibre uses electricity.
- Claiming that hiding the SSID makes a network fully secure.

## More on this topic

- [Networking revision notes](/resources/oxfordaqa-a-level-computer-science-9645-networking-revision-notes/)
- [Networking practice questions](/resources/oxfordaqa-a-level-computer-science-9645-networking-practice/)
- [The Internet study guide](/resources/oxfordaqa-a-level-computer-science-9645-internet/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.2 Networking.
