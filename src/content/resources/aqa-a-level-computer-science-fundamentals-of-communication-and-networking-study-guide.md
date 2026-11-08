---
title: "AQA A Level Computer Science (7517): Fundamentals of communication and networking -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
description: "AQA A Level Computer Science 7517 section 4.9 guide: serial and parallel links, topologies, Wi-Fi, TCP/IP, subnets, packet switching and network security."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

This topic explains how data moves between devices, from a single wire inside a computer to the global internet. You need the vocabulary of communication (baud rate, bandwidth, latency), the layered TCP/IP model, how addresses and ports identify a destination, and the main security measures. Calculations are short but they appear regularly, particularly subnet masks and transfer times.

## Where this fits in the specification

This is section 4.9 of AQA 7517 and is assessed on Paper 2. It builds on the encryption ideas in [Fundamentals of data representation](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) and underpins the later work on client-server databases. Expect definitions, a diagram-labelling or topology question, a short calculation and an extended explanation of how a message crosses the internet.

## Communication methods

In **serial** transmission, bits are sent one after another along a single wire; it avoids the skew between wires that limits fast **parallel** transmission, where several bits travel at once on separate wires, and it is cheaper over distance. Parallel suits short, fast links within a device.

**Synchronous** transmission uses a shared clock signal (or clock recovered from the data) so sender and receiver stay in step; it suits large, continuous transfers. **Asynchronous** transmission has no shared clock: each character is framed by a **start bit** and a **stop bit**, so the receiver can recognise where it begins and ends. This is simple, but the extra bits add overhead.

Key measures:

- **Baud rate**: the number of signal changes per second. Where each change carries more than one bit, the **bit rate** is higher: bit rate = baud rate x bits per signal. A line at 2,400 baud using 4 bits per signal change has a bit rate of 9,600 bits per second.
- **Bandwidth**: the range of frequencies a channel carries, which in practice limits the maximum data rate; often quoted loosely as bits per second.
- **Latency**: the delay between sending and receipt. A link can have high bandwidth and high latency, such as a satellite connection.
- **Protocol**: an agreed set of rules for communication, including format, speed, error checking and handshaking.

## Network topologies and types

In a **physical star** network every device connects to a central switch. It is easy to extend, a cable fault affects only one device, and traffic is limited to the relevant link, but the switch is a single point of failure and more cable is needed. In a **physical bus** network devices share one backbone cable, which is cheap and simple, but a break disrupts the whole network, collisions increase with traffic and performance falls as devices are added. A **logical bus** describes how data is passed between nodes regardless of cabling, as in a bus topology emulated over a star.

**Wired** networks are generally faster, more stable and more secure; **wireless** networks give mobility and avoid cabling but share a medium, suffer interference and are easier to intercept.

**Client-server** networks use a central server to provide services, which gives central control, backup and security, but the server is a point of failure and costs more. **Peer-to-peer** (P2P) networks have equal devices sharing resources directly, which is cheap and resilient but harder to manage and secure. A **thin client** relies on a server for processing and storage; a **thick client** does most processing locally.

## Wi-Fi

A wireless network is set up through a **wireless access point**. Security measures include a changed **SSID** (network name), which can also be hidden, encryption with **WPA2** or newer, and MAC address filtering. Because radio is shared, devices use **CSMA/CA** (carrier-sense multiple access with collision avoidance): a node listens before transmitting and, if the channel is busy, waits. With **RTS/CTS**, a device sends a **request to send** and waits for a **clear to send** before transmitting, which reduces collisions caused by the **hidden node** problem, where two devices cannot hear each other but both reach the access point.

## The TCP/IP model

Communication is split into four **layers**, each with its own protocols and a defined interface to its neighbours, so each can be changed independently.

| Layer | Role | Example protocols |
|---|---|---|
| Application | Provides services to the user's program | HTTP, HTTPS, FTP, SMTP, POP3, IMAP, SSH |
| Transport | Breaks data into packets, numbers them, manages delivery between processes | TCP, UDP |
| Network (Internet) | Addresses and routes packets between networks | IP |
| Link | Transmits frames across the local physical link, using MAC addresses | Ethernet, Wi-Fi |

A **port number** identifies the application at the destination, and an IP address plus a port form a **socket**. Well-known ports include 80 (HTTP), 443 (HTTPS), 21 (FTP control), 22 (SSH), 25 (SMTP), 110 (POP3) and 143 (IMAP).

## Packet switching and routing

In **packet switching**, a message is split into packets, each containing a header with the source and destination addresses and a sequence number, plus the data and error-check information. Each packet may take a different route; **routers** read the destination and forward the packet using their routing tables, and the packets are reassembled in order at the destination. A packet also has a **hop count** (time to live) so that packets stuck in a loop are discarded. This makes efficient use of the network and allows rerouting around failure, but packets can arrive out of order or late. A **gateway** connects networks that use different protocols, and a router connects different networks together.

## IP addressing

An **IPv4 address** has 32 bits written as four decimal numbers, and **IPv6** uses 128 bits to provide far more addresses. An address has a **network identifier** and a **host identifier**; the **subnet mask** shows the split, with 1s over the network part. **CIDR** notation such as /26 gives the number of network bits. **Private** ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are not routed on the internet; **NAT** translates between them and a public address. **DHCP** assigns addresses automatically. **DNS** translates domain names to IP addresses.

## Worked example: subnets and transfer time

**(a)** A host has the address 172.16.37.77 with mask /26. Find the network address, broadcast address and number of usable hosts.

A /26 mask has 26 ones, so the mask is 255.255.255.192 (the last octet is 11000000). The host part is 6 bits. The last octet of the address is 77 = 01001101. Keep the top two bits: 01000000 = 64. So the network address is **172.16.37.64**. Setting all six host bits to 1 gives 01111111 = 127, so the broadcast address is **172.16.37.127**. There are 2^6 = 64 addresses, minus the network and broadcast addresses, so **62 usable hosts** (172.16.37.65 to 172.16.37.126). The address 172.16.37.130 is not in the subnet because its last octet is above 127.

**(b)** How long does a 450 MB file take to send at 60 Mbit/s?

450 MB = 450 x 8 = 3,600 Mbit. Time = 3,600 / 60 = **60 seconds**. If only 70 per cent of the rate is achieved in practice, the time is 3,600 / (60 x 0.7) = 85.7 seconds, so 86 seconds to the nearest second.

## Network security

Threats include **malware**, **social engineering** (phishing), weak passwords, misconfigured access rights, unpatched software and removable media. Measures:

- A **firewall** examines packets and blocks those that break rules (packet filtering), and may keep track of connections (stateful inspection).
- A **proxy server** acts for clients, can cache pages and filter content, and hides internal addresses.
- **Encryption** with **public and private keys**: a message encrypted with the receiver's public key can only be decrypted with their private key. A **digital signature** is made with the sender's private key and checked with their public key, proving who sent it and that it was unchanged. A **digital certificate**, issued by a trusted authority, links a public key to an identity.
- **Penetration testing** by authorised staff finds weaknesses before attackers do.

## Common mistakes

- Equating baud rate with bit rate when more than one bit is sent per signal change.
- Forgetting to subtract two addresses (network and broadcast) from the host count.
- Mixing bits and bytes in transfer-time calculations.
- Describing the IP address as identifying the application. The port does.
- Saying a firewall removes viruses. It filters traffic.

## Exam technique

For layers, state the layer's job, not just the protocol name. For a calculation, show the conversion and the units. For "explain how a packet reaches its destination", cover splitting, headers, routing at each router, and reassembly, in order.

## Check your understanding

1. Why is asynchronous transmission given start and stop bits? *Answer: so the receiver can tell where each character begins and ends without a shared clock.*
2. A line runs at 1,200 baud with 2 bits per signal. State the bit rate. *Answer: 2,400 bits per second.*
3. Give one advantage and one disadvantage of a physical star topology. *Answer: a fault on one cable affects only one device; the central switch is a single point of failure.*
4. What does CSMA/CA do? *Answer: it makes a device listen and wait for a clear channel before transmitting, to avoid collisions.*
5. What is a socket? *Answer: an IP address combined with a port number.*
6. How many usable hosts are in a /28 subnet? *Answer: 2^4 - 2 = 14.*
7. What does a digital signature prove? *Answer: who sent the message and that it has not been altered.*
8. How long to send 90 MB at 24 Mbit/s? *Answer: 90 x 8 / 24 = 30 seconds.*

## Frequently asked questions

**What is the difference between baud rate and bit rate?**
Baud rate is the number of signal changes per second, while bit rate is baud rate multiplied by the number of bits per signal change. A 2,400 baud line with 4 bits per signal change has a bit rate of 9,600 bits per second.

**How many usable hosts are in a subnet?**
Raise 2 to the number of host bits and subtract 2 for the network and broadcast addresses. A /26 subnet has 6 host bits, so it has 64 − 2 = 62 usable hosts.

**What is the difference between an IP address and a port number?**
The IP address identifies the destination device, while the port number identifies the application on that device. An IP address combined with a port forms a socket.

**How does CSMA/CA with RTS/CTS work?**
A device listens and waits for a clear channel before transmitting. With RTS/CTS it sends a request to send and waits for a clear to send, which reduces collisions caused by the hidden node problem.
