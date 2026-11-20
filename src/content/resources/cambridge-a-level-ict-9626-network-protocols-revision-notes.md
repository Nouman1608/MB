---
title: "Cambridge A Level Information Technology (9626): Network protocols -- Revision Notes"
seoTitle: "A Level IT 9626 Network Protocols: Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.6
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "network-protocols"
description: "Revision notes for Cambridge 9626 IT section 14.6: protocols, switching methods, addressing, routing, layer models and firewalls, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 14.6 Network protocols** (Topic 14 Communications technology) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. A Level content, examined in Paper 3 Advanced Theory. Full explanations and worked examples are in the [network protocols study guide](/resources/cambridge-a-level-ict-9626-network-protocols/); test yourself with the [network protocols practice questions](/resources/cambridge-a-level-ict-9626-network-protocols-practice/).

## Definition

A **protocol** is a set of agreed rules for communication: data format, how a connection starts and ends, error checking and addressing. Protocols are needed so that devices from different makers can understand each other.

## Protocols at a glance

| Group | Protocol | Remember |
|---|---|---|
| Delivery | TCP | Reliable, connection-based, numbers segments, re-sends lost ones |
| | UDP | Fast, connectionless, no re-send; live video, voice, games |
| | IP | Addresses and routes packets |
| Support | ICMP | Error and status messages; ping |
| | ARP | IP address to MAC address |
| | InARP | Other end's hardware address to IP address |
| | DHCP | Gives a device an IP address automatically |
| Web | HTTP | Web pages, no encryption |
| | HTTPS | HTTP plus TLS encryption |
| Files | FTP | File transfer |
| Email | SMTP | Sends mail |
| | POP3 | Downloads mail to one device |
| | IMAP | Mail stays on the server; several devices |
| Remote | Telnet | Remote text control, not encrypted |
| | SSH | Encrypted remote control |
| Security | IPsec | Authenticates and encrypts IP packets |
| | TLS/SSL | Encrypts data between applications; proves server identity |
| | L2TP (tunnelling) | Tunnel for VPNs |

## Switching methods

| | Packet | Circuit | Message |
|---|---|---|---|
| Path | Each packet may differ | One dedicated channel | Hop by hop, no dedicated path |
| Set-up | None (or per connection with TCP) | Before data is sent | None |
| Efficiency | High; lines shared | Low; line reserved even when idle | Moderate; whole message stored at each node |
| Delay | Variable | Constant | Can be long |
| Example | The internet | Traditional telephone call | Store-and-forward messaging |

**Packet structure:** header (source and destination addresses, sequence number, protocol information, time to live), payload (the data), and trailer or check value (error detection).

**Connection mode** (TCP, frame relay): set up, acknowledge, re-send lost data; reliable and slower. **Connectionless mode** (IP, UDP, Ethernet): send independently, no set-up or acknowledgement; fast but unreliable.

## Addressing

| | MAC | IPv4 | IPv6 |
|---|---|---|---|
| Length | 48 bits | 32 bits | 128 bits |
| Written as | 12 hex digits | Four decimal numbers 0 to 255 | Eight groups of hex digits |
| Number | Fixed to hardware | 2³² (about 4.3 billion) | 2¹²⁸ |
| Used for | Local delivery by switches | Routing between networks | Routing; replaces IPv4 as addresses run out |

**Quick sum.** A network with 8 host bits has 2⁸ − 2 = **254** usable addresses (two are reserved).

## Routing

- **Routing table:** destination network and next hop.
- **Static:** routes entered by hand; simple, no extra traffic, no reaction to failures. Suits small stable networks.
- **Dynamic:** routers share information and update; reacts to failures, scales, but uses more processing and bandwidth.
- **Interior gateway protocols:** inside one autonomous system.
- **Exterior gateway protocols:** between autonomous systems.
- **Border gateway protocol (BGP):** the main exterior protocol of the internet, choosing routes between providers by policy.

## Layer models

| TCP/IP | OSI |
|---|---|
| Application | Application, Presentation, Session |
| Transport | Transport |
| Internet | Network |
| Network access | Data link, Physical |

**OSI seven layers, top to bottom:** Application, Presentation, Session, Transport, Network, Data link, Physical. A memory aid: "All People Seem To Need Data Processing".

| OSI layer | Job |
|---|---|
| Application | Services for programs |
| Presentation | Formatting, encryption, compression |
| Session | Start, manage, end a conversation |
| Transport | End-to-end delivery |
| Network | Logical addresses, routing |
| Data link | Frames, MAC addresses |
| Physical | Signals, cables, radio |

**Why layers?** Each layer does one job, can be changed independently, and makers' equipment works together.

## Firewalls

A firewall filters traffic by rules on **IP address, port, protocol, direction and state**. A default-deny policy blocks anything not allowed. Used to control access to a network. Limits: cannot stop attacks over allowed ports or threats from inside; strict rules may block genuine users.

## Quick examples

**Packets.** 3,000 bytes in packets of 250 bytes payload plus 30 bytes header: 3,000 ÷ 250 = **12 packets**; header data 12 × 30 = 360; total = **3,360 bytes**.

**Routing.** A table has 10.5.0.0 via Router A and a default route via Router D. A packet for 10.5.0.0 goes to A; a packet for 192.0.2.0 goes to D.

## Exam traps

- Saying packet switching sends all packets by the same route.
- Mixing up POP3 and IMAP, or Telnet and SSH.
- Confusing MAC and IP addresses.
- Saying UDP is "worse" than TCP, rather than faster with no guarantee.
- Naming OSI layers in the wrong order.
- Describing a firewall without rules.
- Saying TCP/IP and OSI are the same.

## Self-test

1. Define a protocol.
2. Why are protocols necessary?
3. State the purpose of DHCP.
4. Why is UDP used for live video?
5. State the difference between POP3 and IMAP.
6. Name the contents of a packet.
7. Describe circuit switching.
8. What is store and forward?
9. How many bits are in an IPv6 address?
10. What is the difference between static and dynamic routing?
11. Name the OSI transport layer's job.
12. A 2,000 byte file is sent in packets of 200 bytes payload with 20 byte headers. How many bytes are sent altogether?

### Answers

1. A set of agreed rules for communication between devices.
2. So that devices from different makers and systems understand each other.
3. To give a device an IP address and settings automatically when it joins a network.
4. It is fast and has no set-up or re-sending, so there are few delays; a lost packet matters little.
5. POP3 downloads mail to one device, usually removing it from the server; IMAP keeps mail on the server for several devices.
6. Header, payload (data) and a trailer or error check.
7. A dedicated channel is set up and reserved for the whole call, even when no data is being sent.
8. A node stores the whole message and forwards it when the next line is free.
9. 128 bits.
10. Static routes are set by hand and do not change; dynamic routes are updated automatically by routers sharing information.
11. End-to-end delivery of data between the two devices.
12. 2,000 ÷ 200 = 10 packets; 10 × 20 = 200 bytes of headers; 2,000 + 200 = 2,200 bytes.
