---
title: "Cambridge A Level Information Technology (9626): Network protocols"
seoTitle: "A Level IT 9626 Network Protocols: Study Guide"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 14.6 study guide: protocols, packet, circuit and message switching, MAC and IP addressing, routing, TCP/IP and OSI layers and firewalls."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.6 Network protocols** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on protocols. Use it with the [network protocols revision notes](/resources/cambridge-a-level-ict-9626-network-protocols-revision-notes/) and the [network protocols practice questions](/resources/cambridge-a-level-ict-9626-network-protocols-practice/).

## What section 14.6 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Protocols | Define a protocol, say why protocols are needed, and state the purpose and use of the named protocols |
| Methods of sending data | Describe packet switching (packet structure, connection and connectionless modes), circuit switching and message switching |
| Addressing | Explain MAC and IP addressing (IPv4 and IPv6) |
| Routing | Explain static and dynamic routing, routing tables and routing protocols |
| Layering | Describe the TCP/IP and OSI models |
| Firewalls | Explain their use and configuration |

## What is a protocol?

A **protocol** is a set of agreed rules for communication between devices: the format of the data, how a connection starts and ends, how errors are found and how addresses are used. Protocols are necessary because devices from different makers, with different operating systems, must understand each other. Without agreed rules, the receiver would not know where a message begins, which part is the address, or whether it has arrived correctly.

## The named protocols

| Protocol | Purpose and use |
|---|---|
| TCP (Transmission Control Protocol) | Reliable, connection-based delivery: splits data into segments, numbers them, checks they arrive, and asks for any missing ones to be re-sent |
| IP (Internet Protocol) | Addresses packets and routes them across networks |
| ICMP (Internet Control Message Protocol) | Sends error and status messages, such as "destination unreachable"; used by the ping tool |
| ARP (Address Resolution Protocol) | Finds the MAC address that matches a known IP address on the local network |
| InARP (Inverse ARP) | Finds the IP address that matches a known address on the other end of a link |
| DHCP (Dynamic Host Configuration Protocol) | Automatically gives a device an IP address and settings when it joins a network |
| UDP (User Datagram Protocol) | Fast, connectionless delivery with no checking or re-sending; suits live video, voice and games |
| HTTP | Transfers web pages between servers and browsers |
| HTTPS | HTTP with encryption (using TLS), so that web data cannot be read on the way |
| FTP | Transfers files between computers |
| Tunnelling protocol (e.g. L2TP) | Carries private data through a public network, as in a VPN |
| SMTP | Sends email from a client to a server and between mail servers |
| POP3 | Downloads email from a server to one device, usually deleting it from the server |
| IMAP | Reads email held on the server, keeping it there so that several devices can see the same mailbox |
| Telnet | Remote text-based control of another computer, with no encryption |
| SSH | Secure, encrypted remote control and file transfer, replacing Telnet |
| IPsec | Secures IP traffic by authenticating and encrypting packets |
| TLS/SSL | Encrypts data between two applications, such as a browser and a bank, and proves the server's identity |

## Methods of sending data

### Packet switching

The message is divided into **packets**. Each packet is sent separately and may take a **different route**. At the destination they are put back in order. Routers forward each packet on the best path at that moment, so the network can share its lines between many users.

A packet normally contains:

- **Header**: source and destination addresses, the packet number (sequence), the total number of packets, protocol information, and sometimes the number of hops left (time to live).
- **Payload**: the data being carried.
- **Trailer (or error check)**: a check value so the receiver can detect corruption.

**Worked example 1: overhead of packets.** A 5,000 byte file is sent in packets each carrying 500 bytes of payload and a 40 byte header.

- Number of packets = 5,000 ÷ 500 = **10**.
- Header data = 10 × 40 = 400 bytes. Total sent = 5,000 + 400 = **5,400 bytes**.
- Overhead = 400 ÷ 5,400 = 7.4% of what is sent (or 8% of the original file).

If one packet is lost, only that packet is re-sent, not the entire file.

**Advantages:** efficient use of lines; if one route fails the packets take another; no need to set up a dedicated line. **Disadvantages:** packets can arrive out of order or late, which affects live voice and video; headers add overhead; packets must be reassembled.

**Modes of connection.**

- **Connection mode** (such as TCP, frame relay): the sender and receiver first set up a connection, agree the details, check delivery with acknowledgements and re-send lost packets. Reliable, but slower. Used for web pages, email and file transfer.
- **Connectionless (datagram) mode** (such as IP, UDP and Ethernet): each packet is sent independently with no set-up and no acknowledgement. Faster and simpler, but delivery is not guaranteed. Used for live streaming, voice calls and games, where speed matters more than a lost packet.

### Circuit switching

A dedicated **communication channel** is set up between sender and receiver before data is sent, and stays reserved for the entire call, even in silence. It was used in traditional telephone networks. **Advantages:** steady speed and no delay variation; data arrives in order. **Disadvantages:** the line is wasted when nothing is sent; set-up time; other users cannot use the reserved path; a break ends the call.

### Message switching

The whole message is sent to the first node, which **stores** it, and then **forwards** it to the next node when a line is free ("store and forward"). There is no dedicated path. **Advantages:** no need for the whole route to be free at once; lines are shared. **Disadvantages:** long delays, and nodes need enough storage for whole messages. Early telegram and some email systems work in this way.

## Addressing

**MAC address.** A unique 48-bit hardware address assigned to a network interface card, written as 12 hexadecimal digits. It identifies the device on the local network and is used by switches and bridges. It does not normally change.

**IP address.** A logical address given to a device on a network, used to route packets between networks. It can change when the device moves to another network.

- **IPv4**: 32 bits, written as four decimal numbers from 0 to 255, such as 192.168.1.10. There are 2³² = 4,294,967,296 possible addresses, which have almost run out.
- **IPv6**: 128 bits, written as eight groups of hexadecimal digits. There are 2¹²⁸ addresses (about 3.4 × 10³⁸), enough for every device.

**Worked example 2: an IPv4 address.** 192.168.1.10 in binary is 11000000.10101000.00000001.00001010. In a network where the first 24 bits identify the network and the last 8 bits identify the device, there are 2⁸ = 256 values for the device part. Two are reserved (all zeros for the network itself and all ones for broadcast), so 256 − 2 = **254** devices can be addressed. If the host part has 6 bits, there are 2⁶ − 2 = 62 usable addresses.

## Static and dynamic routing

A **routing table** lists destination networks and the next router (hop) to send packets towards.

| | Static routing | Dynamic routing |
|---|---|---|
| How routes are set | An administrator enters them by hand | Routers exchange information and update routes automatically |
| Reaction to a failure | None; the route stays until changed | Finds a new path |
| Router load | Low | Higher, because of the exchange of route information |
| Suitable for | Small, stable networks | Large, changing networks |
| Security | Less exposed to false route information | Needs protection against false updates |

**Worked example 3: using a routing table.** A router has this table.

| Destination network | Next hop |
|---|---|
| 10.1.0.0 | Router A |
| 10.2.0.0 | Router B |
| Default | Router C |

A packet for 10.2.0.0 is sent to Router B. A packet for 172.16.0.0 matches no entry, so it follows the default route to Router C.

### Routing protocols

- **Interior gateway protocols** exchange routes between routers **inside one organisation or autonomous system**.
- **Exterior gateway protocols** exchange routes **between different** autonomous systems, such as different internet providers.
- **Border gateway protocols** (BGP) are the main exterior protocol of the internet. They run on routers at the border between systems and choose paths based on agreed policies, as well as distance.

## Protocol layering

Dividing communication into layers means each layer does one job and relies on the one below. Layers can be improved without changing the others, and equipment from different makers can work together.

| TCP/IP layer | Function | OSI layer(s) |
|---|---|---|
| Application | Services used by programs (HTTP, SMTP, FTP) | Application, Presentation, Session |
| Transport | End-to-end delivery, segments, error control (TCP, UDP) | Transport |
| Internet | Addressing and routing of packets (IP) | Network |
| Network access (link) | Sending frames over the physical medium (Ethernet, Wi-Fi), MAC addresses | Data link, Physical |

The **OSI model** has seven layers: **Application** (network services for programs), **Presentation** (formatting, encryption, compression), **Session** (starting, managing and ending conversations), **Transport** (reliable or fast delivery), **Network** (logical addresses and routing), **Data link** (frames and MAC addresses on one link) and **Physical** (signals, cables and radio).

**Comparison.** OSI is a theoretical reference model with seven layers; TCP/IP is the working suite on the internet, with four. OSI separates presentation and session functions, while TCP/IP includes them in its application layer. Both use layers and encapsulate data as it passes down.

## Firewalls

A **firewall** examines traffic entering or leaving a network and allows or blocks it according to rules. It may be hardware or software. Configuring one means setting rules based on:

- **IP addresses**: block or allow named sources or destinations.
- **Ports and protocols**: allow web traffic (HTTP/HTTPS) and block Telnet.
- **Direction**: inbound and outbound rules differ.
- **State**: allow replies to requests the network started but block unsolicited incoming connections.

A **default-deny** rule blocks everything not specifically allowed. Firewalls reduce unauthorised access, but they cannot stop an attack that uses an allowed port, nor a threat from inside the network, and rules that are too strict stop genuine users.

## Common mistakes

- Defining a protocol as "a set of rules" without saying what for.
- Mixing up POP3 and IMAP, or HTTP and HTTPS, or Telnet and SSH.
- Saying packet switching sends each packet by the same route.
- Describing UDP as "unreliable and therefore bad". It is chosen when speed matters.
- Mixing up the MAC address (hardware, local) with the IP address (logical, routing).
- Listing OSI layers in the wrong order.

## Exam technique

- **State the purpose** of a protocol in a short phrase and add what it is used for.
- **Compare** switching methods using set-up, path, efficiency and delay.
- **Layers**: name the layer and the job it does, not just the protocol.
- **Firewall**: describe the rules and what they allow or block.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.6 Network protocols.
