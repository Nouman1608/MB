---
title: "OxfordAQA IGCSE Computer Science: Computer Networks — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 5: Computer networks"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 5
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-networks"
description: "Recall notes on LANs and WANs, wired and wireless networks, topologies, protocols, network security and the TCP/IP model for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Computer networks (topic 3.5 of OxfordAQA International GCSE Computer Science 9210) covers what a network is,
LANs and WANs, wired and wireless connections, star and bus topologies, the common protocols, network security
methods and the four-layer TCP/IP model. It is assessed on Paper 2, mostly through definitions, comparisons and
"which protocol or layer" questions, so precise wording matters.

Condensed for the final weeks. For the full explanation, use the
[Computer networks study guide](/resources/oxfordaqa-igcse-computer-science-computer-networks-study-guide/).
Practise with the [Computer networks practice questions](/resources/oxfordaqa-igcse-computer-science-computer-networks-practice/).

## Syllabus coverage

OxfordAQA 9210 specification (Version 3.4), section 3.5 Computer networks:

- define a computer network; benefits and risks of networks
- LAN and WAN
- wired (fibre, copper) and wireless networks; benefits and risks of wireless
- star and bus physical topologies
- protocols: Ethernet, Wi-Fi, TCP, UDP, IP, HTTP, HTTPS, FTP, SMTP, IMAP
- network security: authentication, encryption, firewall, MAC address filtering
- the 4-layer TCP/IP model and which protocols work at each layer

## Networks: definitions and comparisons

A **computer network** is two or more computers (or devices) connected together so they can communicate and
share resources.

| Benefits | Risks |
|---|---|
| Share files, printers and an Internet connection | Malware can spread between connected computers |
| Communicate by email and messaging | Hackers may gain unauthorised access |
| Central backup and management of user accounts | A server or switch failure can stop many users working |
| Users can log in from any computer on the network | Setting up and managing a network has costs |

| | **LAN** (Local Area Network) | **WAN** (Wide Area Network) |
|---|---|---|
| Area | Relatively small geographical area, e.g. one building or site | Wide geographical area, e.g. between cities or countries |
| Ownership | Often owned and managed by a single person or organisation | Often under collective or distributed ownership |
| Example | A school network | **The Internet -- the biggest WAN** |

## Wired and wireless

- **Copper cable**: cheap and easy to install; suitable for shorter distances, e.g. within a building.
- **Fibre-optic cable**: sends data as light; higher bandwidth, works over much longer distances and is not
  affected by electrical interference, but costs more -- suits backbone links between buildings and long
  distances.
- **Wireless** benefits: no cables, so devices can move around; cheaper and quicker to add devices.
  Risks: signals can be intercepted by anyone in range, so encryption is essential; usually slower and less
  reliable than wired, affected by distance, walls and interference.
- **Wi-Fi** is a **trademark**; the generic term for this kind of network is **WLAN** (wireless LAN).

## Topologies

```
STAR                                BUS
      PC   PC                       PC    PC    PC
        \  /                        |     |     |
  PC -- SWITCH -- PC            ====+=====+=====+==== backbone cable
        /  \                        |     |          (terminator at each end)
      PC   PC                       PC    PC
```

| | Star | Bus |
|---|---|---|
| Layout | Each device has its own cable to a central switch | All devices share one main cable (backbone) |
| If one cable fails | Only that device is affected | A break in the backbone stops the whole network |
| Performance | Good -- the switch sends data only to the destination | Slows with heavy traffic; data collisions on the shared cable |
| Cost | More cable and a switch | Less cable, cheaper to set up |

## Protocols

A **protocol** is a set of rules that govern how data is transmitted and received by devices.

| Protocol | Used for | TCP/IP layer |
|---|---|---|
| **HTTP** | Requesting and sending web pages | Application |
| **HTTPS** | An **encrypted** version of HTTP for secure web transactions | Application |
| **FTP** | Transferring files between computers | Application |
| **SMTP** | **Sending** email (to and between mail servers) | Application |
| **IMAP** | **Retrieving** email; messages stay on the server so they sync across devices | Application |
| **TCP** | Reliable delivery: sets up a connection, numbers packets, checks they all arrive, resends lost ones | Transport |
| **UDP** | Fast delivery with no connection or checking -- suits live streaming and online games | Transport |
| **IP** | Addressing packets and routing them across networks | Network |
| **Ethernet** | A **family** of protocols for wired LANs | Link |
| **Wi-Fi** | A **family** of protocols for wireless LANs | Link |

You do not need to name the individual protocols in the Ethernet or Wi-Fi families. The specification states the
layer for HTTP, HTTPS, SMTP, IMAP, FTP, TCP, UDP and IP; Ethernet and Wi-Fi are shown at the link layer because
they govern the network hardware that sits there.

## Network security

| Method | What it does | Example of use |
|---|---|---|
| **Authentication** | Confirms a user's identity before allowing access | Username and password; two-factor code sent to a phone |
| **Encryption** | Scrambles data so it cannot be understood without the key, if intercepted | WPA2 on Wi-Fi; HTTPS for online banking |
| **Firewall** | Hardware or software that monitors traffic and blocks it according to rules | Blocking incoming connections from unknown addresses |
| **MAC address filtering** | Allows or blocks devices based on the **physical address** in their network adapter | Only school-owned laptops may join the network |

These methods work best **together**: a firewall blocks unwanted traffic, authentication stops unauthorised users,
MAC filtering stops unknown devices, and encryption protects any data that is intercepted.

## The four-layer TCP/IP model

| Layer | Main function (specification wording) | Protocols |
|---|---|---|
| **Application** | Where network applications such as web browsers and email programs operate | HTTP, HTTPS, SMTP, IMAP, FTP |
| **Transport** | Sets up communication between the two hosts; they agree settings such as packet size | TCP, UDP |
| **Network** | Addresses and packages data for transmission; routes packets across the network | IP |
| **Link** | Where the network hardware such as the NIC is located; OS device drivers also sit here | Ethernet, Wi-Fi |

Use these four names in answers; you are not expected to know alternative names for the layers.

## Common mistakes / exam traps

- Calling the Internet a LAN, or saying a WAN is always owned by one company.
- Mixing up SMTP (sends email) and IMAP (retrieves email).
- Writing that HTTPS is "faster" -- its point is that it is **encrypted**.
- Putting TCP at the network layer or IP at the transport layer.
- Saying a star network fails if one device's cable breaks -- only the central switch failing stops the network.
- Describing MAC filtering as blocking users: it allows or blocks **devices** by their physical address.

## Frequently asked questions

**What is the difference between TCP and UDP?**
TCP sets up a connection and checks that every packet arrives, resending any that are lost, so it is reliable. UDP
sends packets without checking, so it is faster and suits streaming and games where speed matters more than every
packet.

**Is Wi-Fi a single protocol?**
No. The 9210 specification says Wi-Fi is a family of related protocols and a trademark; the generic term is WLAN.
Ethernet is also a family of protocols.

**Which layer does a network interface card belong to?**
The link layer, where the network hardware and the operating system's device drivers are located.

## Related resources

[Computer networks study guide](/resources/oxfordaqa-igcse-computer-science-computer-networks-study-guide/) |
[Computer networks practice questions](/resources/oxfordaqa-igcse-computer-science-computer-networks-practice/) |
[Cyber security revision notes](/resources/oxfordaqa-igcse-computer-science-cyber-security-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.5 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
