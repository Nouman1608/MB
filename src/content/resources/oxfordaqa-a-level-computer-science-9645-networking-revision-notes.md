---
title: "OxfordAQA A-Level Computer Science (9645): Networking -- Revision Notes"
seoTitle: "OxfordAQA 9645 Networking Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.14.2: peer-to-peer, client-server, thin and thick clients, cables, CSMA/CD, Wi-Fi, CSMA/CA and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.14.2 Networking** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.14, examined in Unit 4). For explanations and scenario examples, see the [networking study guide](/resources/oxfordaqa-a-level-computer-science-9645-networking/), then practise with the [networking practice questions](/resources/oxfordaqa-a-level-computer-science-9645-networking-practice/).

## What the specification requires

- **3.14.2.1** Explain **peer-to-peer** and **client-server** networking and describe situations where each might be used.
- **3.14.2.2** Compare **thin-client** and **thick-client** computing, including hardware and networking requirements.
- **3.14.2.3** Compare **copper and fibre-optic cables** (cost, speed, capacity) and select the most appropriate; describe how **CSMA/CD** works.
- **3.14.2.4** Explain the purpose of **Wi-Fi**, the **SSID**, the components needed, how wireless networks are secured, and how **CSMA/CA** works with and without **RTS/CTS**.
- **3.14.2.5** Compare the advantages and disadvantages of wireless and wired networking.

## Key terms

| Term | Meaning |
|---|---|
| Host | Any device on a network |
| Peer-to-peer | Network in which every computer has equal status |
| Client-server | Clients request services from one or more servers that provide them |
| Thin client | Relies on a server for most processing and storage |
| Thick client | Does most processing and storage locally |
| CSMA/CD | Carrier Sense Multiple Access with Collision Detection (wired) |
| CSMA/CA | Carrier Sense Multiple Access with Collision Avoidance (wireless) |
| Wi-Fi | Wireless LAN based on international standards |
| SSID | Service Set Identifier: the name of a wireless network |
| WAP | Wireless access point |
| RTS/CTS | Request to Send / Clear to Send handshake |

## Peer-to-peer versus client-server

| | Peer-to-peer | Client-server |
|---|---|---|
| Computers | all equal | clients and servers |
| Use | small home or office network | school, company, anything needing central control |
| Strength | cheap, simple | central security, backup, management |
| Weakness | hard to secure and back up | server failure or overload affects everyone |

## Thin client versus thick client

| | Thin | Thick |
|---|---|---|
| Processing | on the server | on the client |
| Client hardware | minimal | full |
| Network need | fast and reliable | can work offline |
| Server need | powerful | modest |
| Maintenance | central | each machine |

## Copper versus fibre

| | Copper | Fibre-optic |
|---|---|---|
| Cost | lower | higher |
| Speed | lower | higher |
| Capacity | lower | higher |
| Distance | about 100 m for common twisted pair | kilometres |
| Interference | affected | unaffected |

Choose copper for a short, low-cost room connection; fibre for long runs between buildings and heavy traffic.

## CSMA/CD in steps

1. Listen: is the medium idle?
2. If idle, transmit; if busy, wait.
3. While transmitting, watch for a collision.
4. On collision, stop and send a jam signal.
5. Wait a random time and start again.

## Wi-Fi

- **Purpose:** connect devices to a network wirelessly; a wireless local area network based on international standards.
- **SSID:** names the network.
- **Components:** wireless network adapter in each device; wireless access point. Home routers often combine switch, router and access point.

| Security method | Effect |
|---|---|
| WPA2 encryption | data cannot be read without the key |
| SSID broadcast disabled | network name is not advertised |
| MAC address allow list | only listed devices can connect |

## CSMA/CA in steps

**Without RTS/CTS**

1. Listen for an idle channel.
2. Wait a short random time, then send the frame.
3. The receiver returns an **ACK**.
4. No ACK means a collision: wait a random time and resend.

**With RTS/CTS**

1. Sender sends **RTS** to the access point.
2. Access point replies **CTS**, heard by all devices in range, which stay silent.
3. Sender transmits the frame.
4. Receiver sends an **ACK**.

RTS/CTS stops the **hidden terminal problem**, where two devices cannot hear each other but both reach the access point.

## Wired versus wireless

| Feature | Wired | Wireless |
|---|---|---|
| Mobility | fixed | free within range |
| Installation | cables needed | quick and easy |
| Speed and reliability | higher and steadier | lower and variable |
| Security | needs physical access | in range of anyone; encryption essential |
| Interference | little | walls, distance and radio sources |

## Exam traps

- **Thin client** is about where processing happens, not screen size.
- **CD versus CA.** Wired detects collisions; wireless avoids them and uses acknowledgements.
- **Hiding the SSID** is not full security; encryption is the key protection.
- **Compare answers** need points about both wired and wireless.
- **Cable choice** needs a reason from the scenario: distance, capacity, interference or cost.
- **Peer-to-peer** is not "no servers possible"; it is that every computer has equal status.
- **RTS/CTS** is optional in CSMA/CA, and it adds overhead.

## Quick self-test

1. What status do computers have in a peer-to-peer network?
2. Name two services a server might provide.
3. State one network requirement of thin-client computing.
4. Give one advantage of fibre over copper.
5. What does CSMA/CD stand for?
6. What happens when a collision is detected?
7. What is an SSID?
8. Name two components needed for wireless networking.
9. Give two ways of securing a wireless network.
10. Why does a wireless network use CSMA/CA instead of CSMA/CD?
11. What does the CTS frame tell other devices?
12. Give one advantage of wired over wireless networking.

### Answers

1. Equal status.
2. Any two of: file server, email server, print server, web server.
3. A fast, reliable connection to the server.
4. Higher speed, higher capacity, longer distance, or no electrical interference.
5. Carrier Sense Multiple Access with Collision Detection.
6. The devices stop, send a jam signal and wait a random time before trying again.
7. The Service Set Identifier: the name of a wireless network.
8. A wireless network adapter and a wireless access point.
9. WPA2 encryption, disabling SSID broadcast, a MAC address allow list.
10. A wireless device cannot reliably detect a collision while it is transmitting.
11. To stay silent while the sender transmits.
12. Faster and more reliable (or harder to intercept).

## Next steps

- [Networking study guide](/resources/oxfordaqa-a-level-computer-science-9645-networking/)
- [Networking practice questions](/resources/oxfordaqa-a-level-computer-science-9645-networking-practice/)
- [Communications revision notes](/resources/oxfordaqa-a-level-computer-science-9645-communications-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.2 Networking.
