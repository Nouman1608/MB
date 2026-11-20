---
title: "AQA A-Level Computer Science (7517): Networking -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.9.2 recall: physical star and logical bus, peer-to-peer and client-server, WiFi components and security, SSID and CSMA/CA with RTS/CTS."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.9.2 Networking**, AQA A-Level Computer Science (7517): **physical star and logical bus** topologies, **peer-to-peer and client-server** networks, and **wireless networking** (purpose of WiFi, components, security, CSMA/CA with and without RTS/CTS, SSID). Full explanations are in the [networking study guide](/resources/aqa-a-level-computer-science-7517-networking/); questions are in the [networking practice questions](/resources/aqa-a-level-computer-science-7517-networking-practice/).

## Topology

- **Physical topology:** how cables and devices are laid out.
- **Logical topology:** how data flows between devices.
- A physical **star** can behave **logically as a bus** if it uses a bus protocol and appropriate physical switching (a hub that repeats to every port).

| | Physical star | Logical bus |
|---|---|---|
| Layout | Each device has its own cable to a central hub or switch | All devices share one communication path |
| Operation | Central device passes data on (switch: to one port; hub: to all) | Every device sees every frame and processes those addressed to it |
| Strength | A cable fault affects one device; easy to add devices; easy to find faults | Simple; little equipment |
| Weakness | Central device is a single point of failure; more cable | Collisions grow with traffic; all devices see all data |

**Shared-bus check:** 100 Mbit/s shared by 10 busy devices is about 10 Mbit/s each. A switched star gives each device its own 100 Mbit/s link.

## Peer-to-peer and client-server

| | Peer-to-peer | Client-server |
|---|---|---|
| Status of computers | All equal | Clients request; servers provide |
| Services | Each shares its own files or devices | File, email, print, web servers |
| Security and back-up | Harder: spread across machines | Central control |
| Cost | Cheap, no server | Server and administration costs |
| Single point of failure | No | The server |
| Scales | Poorly | Well |
| Suits | Home, very small office | School, business, many users |

## WiFi

- **Purpose:** a wireless local area network based on international standards, used to connect devices to a network wirelessly.
- **Components:** a **wireless network adapter** in each device; a **wireless access point (WAP)**.
- **SSID (Service Set Identifier):** the name that identifies a wireless network.

## Securing a wireless network

| Method | What it does | Weakness |
|---|---|---|
| WPA / WPA2 encryption | Scrambles transmitted data so intercepted data cannot be read | Weak passphrases can be guessed |
| SSID broadcast disabled | Network name is not advertised | The name can still be found from traffic |
| MAC address allow list | Only listed devices may join | MAC addresses can be copied (spoofed) |

Use **encryption first**; the other two are extra layers.

## CSMA/CA

Wireless devices cannot detect a collision while transmitting, so they **avoid** collisions.

**Without RTS/CTS**

1. Listen to the channel.
2. If idle for a set period, transmit.
3. If busy, wait until free, then a random back-off.
4. Receiver sends an acknowledgement (ACK).
5. No ACK: assume a collision, wait a random back-off and resend.

**With RTS/CTS**

1. Sender transmits a short **Request to Send** to the access point.
2. The access point replies with **Clear to Send**; every device in range hears it and stays quiet.
3. Sender transmits the data.
4. The access point sends an ACK.

**Why RTS/CTS?** It handles the **hidden node problem**: two devices in range of the access point but not of each other cannot sense each other's transmissions. The cost is extra frames for each transmission.

## Choosing a network

- **Home with three devices and a printer:** peer-to-peer is enough.
- **School with hundreds of users:** client-server, for central accounts, security and back-up.
- **Café giving customers internet access:** WAP with WPA2 encryption and a separate guest network.
- **Office needing wired reliability:** physical star with a switch.

## Key terms

| Term | Definition |
|---|---|
| Topology | The arrangement of devices and links in a network |
| Hub | A central device that repeats data to every port |
| Switch | A central device that forwards data only to the destination port |
| Collision | Two devices transmitting at once so that both signals are corrupted |
| Client | A computer that requests a service |
| Server | A computer that provides a service |
| WAP | A device that connects wireless devices to a network |
| MAC address | A unique hardware address of a network adapter |
| Hidden node | A device out of range of another device that is still in range of the access point |
| ACK | A message acknowledging that a frame arrived correctly |

## Exam traps

- **Physical and logical are different.** State which one you describe.
- **Hub and switch differ.** A hub repeats everything; a switch is selective.
- **Peer-to-peer is not "no security"**; it is harder to manage.
- **Hiding the SSID and MAC filtering are not enough alone.**
- **CSMA/CA avoids collisions.** It does not detect them as they happen.
- **Do not forget the ACK** and the random back-off.
- **RTS/CTS reduces** collisions; it does not remove them.

## Self-test

1. What is the difference between physical and logical topology?
2. Give one weakness of a physical star.
3. Why can all devices on a logical bus see all data?
4. What is meant by peer-to-peer?
5. Give two examples of servers.
6. Why is back-up easier in a client-server network?
7. Name the two components needed for wireless networking.
8. What does the SSID identify?
9. Give one weakness of a MAC address allow list.
10. Why can a wireless device not detect a collision while it is transmitting?
11. What does the CTS frame tell other devices?
12. What is the hidden node problem?

**Answers**

1. Physical is how cables and devices are laid out; logical is how data is seen to flow.
2. The central device is a single point of failure (or more cable is needed).
3. They share one communication path, so each frame reaches every device.
4. Each computer has equal status, with no dedicated server.
5. Any two of: file, email, print, web.
6. Data is stored on a central server that can be backed up in one place.
7. A wireless network adapter and a wireless access point.
8. The name of a wireless network.
9. MAC addresses can be copied (spoofed).
10. It cannot listen while it is transmitting on the same channel.
11. That the channel is reserved, so they should stay silent for the stated time.
12. Two devices in range of the access point but not of each other cannot sense each other's transmissions, so they collide.

## Related resources

- [Networking study guide](/resources/aqa-a-level-computer-science-7517-networking/)
- [Networking practice questions](/resources/aqa-a-level-computer-science-7517-networking-practice/)
- [Communication revision notes](/resources/aqa-a-level-computer-science-7517-communication-revision-notes/)
