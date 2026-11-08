---
title: "AQA A-Level Computer Science: Communication and Networking — Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes on transmission, topologies, Wi-Fi, packet switching, security, TCP/IP, subnets, NAT and REST for AQA A-Level Computer Science 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Fundamentals of communication and networking (section 4.9 of AQA A-Level Computer Science 7517) covers how
bits are transmitted, how networks are organised and secured, how the Internet routes packets, and how the
TCP/IP stack, addressing and web protocols work. Paper 2 asks for precise definitions (baud rate, latency,
gateway), short calculations such as subnet masking, and explanations of processes such as CSMA/CA or how a
digital signature is checked.

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of communication and networking study guide](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/).
Practise with the [communication and networking practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.9, assessed on Paper 2:

- **4.9.1** Communication -- serial/parallel, synchronous/asynchronous, start and stop bits; baud rate,
  bit rate, bandwidth, latency, protocol
- **4.9.2** Networking -- physical star and logical bus topologies; peer-to-peer and client-server; Wi-Fi,
  its security, CSMA/CA and RTS/CTS, SSID
- **4.9.3** The Internet -- packet switching, routers, gateways, URLs, domain names, DNS, Internet
  registries; firewalls, encryption, digital certificates and signatures, malware
- **4.9.4** TCP/IP -- the four layers, sockets, MAC addresses, ports; FTP, HTTP, HTTPS, POP3, SMTP, SSH;
  IP addresses, subnets, IPv4/IPv6, public/private addresses, DHCP, NAT, port forwarding; client-server,
  WebSocket, CRUD and REST, JSON vs XML; thin vs thick clients

## Communication: the definitions

| Term | Definition |
|---|---|
| **Serial** | Bits sent one after another along a single wire |
| **Parallel** | Several bits sent simultaneously along several wires |
| **Synchronous** | Sender and receiver share a timing (clock) signal so data is sent at regular intervals |
| **Asynchronous** | No shared clock; each character is framed by a **start bit** (wakes the receiver and synchronises its clock) and a **stop bit** (marks the end, gives time to process) |
| **Baud rate** | The rate at which the **signal changes** (signal changes per second) |
| **Bit rate** | The number of **bits transmitted per second** |
| **Bandwidth** | The range of frequencies a medium can carry; bit rate is **directly proportional** to bandwidth |
| **Latency** | The **time delay** between sending and the start of receipt |
| **Protocol** | A set of **rules** for communication between devices |

**Serial over parallel:** no **skew** (bits on parallel wires arriving at different times), no
**crosstalk** between wires, cheaper cable, works over longer distances -- so serial can be run at higher
speeds. **Bit rate can exceed baud rate** if more than one bit is encoded per signal change: 1,000 baud with
4 bits per change = 4,000 bit/s.

## Networks and Wi-Fi

- **Physical star**: each device has its own cable to a central switch. **Logical bus**: a network wired as
  a star can **behave as a bus** if it uses a bus protocol -- every device receives every frame and only the
  addressed device keeps it.
- **Peer-to-peer**: every computer has equal status and shares its own resources (small home networks, file
  sharing). **Client-server**: clients request services from one or more servers (file server, email server)
  -- central backup, security and management.
- **Wi-Fi**: a wireless LAN based on international standards. Needs a **wireless network adapter** in each
  device and a **wireless access point**. **SSID** = the network's name, identifying it to devices.
- **Securing Wi-Fi**: strong encryption with **WPA/WPA2**, **disable SSID broadcast**, **MAC address allow list**.

### CSMA/CA (with and without RTS/CTS)

```
1. Listen: is the channel idle?
2. If busy, wait a random back-off period, then listen again.
3. If idle, transmit the frame.
4. Receiver sends an acknowledgement (ACK); no ACK -> assume collision, back off, retry.
With RTS/CTS: before sending data the device sends Request to Send to the access point;
the AP replies Clear to Send; other devices hear the CTS and stay silent. This solves
the hidden node problem, where two devices cannot hear each other but both reach the AP.
```

CSMA/CD (Ethernet) is **not required**.

## The Internet

- **Packet switching**: data is split into **packets** that may take **different routes** and are reassembled
  in order at the destination. A packet has a **header** (source and destination IP address, packet number,
  time to live), the **payload**, and a **trailer** (checksum).
- **Router**: forwards packets between networks towards their destination using routing tables. **Gateway**:
  connects networks that use **different protocols**, translating between them.
- **URL**: the full address of a resource, e.g. `https://www.example.com/docs/page.html` (protocol, FQDN,
  path). **FQDN**: the complete domain name including host, e.g. `www.example.com`. **Domain names** are
  organised hierarchically (root -> top-level `.com`/`.uk` -> second-level -> subdomain).
- **DNS**: domain name servers translate a domain name into an **IP address**. **Internet registries**
  allocate IP addresses and domain names so each is globally **unique**.

## Internet security

| Defence | How it works |
|---|---|
| **Packet filtering** | Allows or blocks packets by source/destination IP address, port and protocol |
| **Proxy server** | Intermediary that makes requests on the client's behalf, hiding internal addresses; can filter and cache |
| **Stateful inspection** | Tracks open connections and only allows packets that belong to an established, legitimate connection |

- **Symmetric encryption**: the same key encrypts and decrypts -- fast, but the key must be shared securely.
  **Asymmetric**: a **public key** encrypts and only the matching **private key** decrypts. In practice,
  asymmetric encryption is used for **key exchange** of a symmetric session key.
- **Digital signature**: the sender hashes the message and encrypts the hash with **their private key**. The
  receiver decrypts it with the **sender's public key** and compares it with their own hash of the message --
  a match proves who sent it and that it was not altered.
- **Digital certificate**: issued by a **Certificate Authority**; binds a public key to an identity and is
  signed by the CA, so others can trust the key.
- **Malware**: a **virus** attaches to a file and needs a user action to spread; a **worm** replicates itself
  across a network without a host file; a **trojan** pretends to be useful software. They exploit
  vulnerabilities such as unpatched software, buffer overflows and user trust. Defences: improved **code
  quality** (testing, code review), **monitoring** (traffic and behaviour), **protection** (antivirus, firewalls,
  patching).

## TCP/IP

| Layer | Role |
|---|---|
| **Application** | The protocol the program uses (HTTP, FTP, SMTP...) and the data it sends |
| **Transport** | TCP splits data into segments, numbers them, adds **port numbers**, handles acknowledgements and retransmission |
| **Network (Internet)** | Adds source and destination **IP addresses**; routing between networks |
| **Link** | Adds **MAC addresses** and transmits on the physical network |

- **Socket** = IP address + port number; identifies one end of a connection to a specific process.
- **MAC address**: unique hardware address of a network interface, used to deliver frames on the local network.
- **Well-known ports** (0-1023) identify standard server services: FTP 21, SSH 22, SMTP 25, HTTP 80,
  POP3 110, HTTPS 443. **Client ports** are temporary, assigned by the client's OS for one connection.
- Protocols: **FTP** file transfer (anonymous or with a login); **HTTP/HTTPS** web pages (HTTPS encrypted);
  **SMTP** sends email; **POP3** retrieves email from a server; **SSH** secure remote login and commands --
  an SSH client can also open a TCP connection to a port and send application commands such as HTTP `GET`.

## IP addressing -- worked example

IP address 192.168.12.77 with subnet mask 255.255.255.192:

```
Last byte of address  77  = 01001101
Last byte of mask    192  = 11000000
AND                        = 01000000 = 64
Network identifier: 192.168.12.64   Host identifier: 001101 = 13
```

- **IPv4** is 32 bits; **IPv6** (128 bits) was introduced because IPv4 addresses were running out.
- **Public** (routable) addresses are unique on the Internet; **private** (non-routable) addresses, e.g.
  192.168.x.x, are used inside local networks.
- **DHCP** automatically assigns an IP address (and subnet mask, gateway, DNS server) to a device from a pool.
- **NAT** lets many devices with private addresses share one public address; the router rewrites addresses
  and keeps a translation table. **Port forwarding** directs incoming traffic on a given public port to a
  specific private device, e.g. a game server.

## Client-server, WebSocket and REST

- Client-server: the client sends a **request** message, the server replies with a **response**.
- **WebSocket**: a **full-duplex**, **persistent** connection between browser and server over TCP, so either
  side can send at any time -- used for chat, live games and live data feeds.
- **REST** uses HTTP request methods so browser JavaScript can call an API on the server. **CRUD** mapping:
  **GET -> SELECT**, **POST -> INSERT**, **PUT -> UPDATE**, **DELETE -> DELETE**. Data is sent as JSON or XML.
- **JSON vs XML**: JSON is easier for humans to read, more compact, easier to create, and easier and
  quicker for computers to parse.
- **Thin client**: most processing and storage on the server -- cheap terminals, central management, but
  depends on the network and server. **Thick client**: processing and storage on the client -- works offline
  and reduces server load, but each machine is more expensive and harder to manage.

## Common mistakes / exam traps

- Defining baud rate as "bits per second" -- that is bit rate; baud is signal changes per second.
- Saying a gateway and a router are the same: a gateway joins networks using **different protocols**.
- Signing with the receiver's key: signatures use the **sender's private key**.
- Forgetting the AND step in subnet questions, or ANDing in denary.
- Writing that NAT gives each device a public address -- it lets many share one.

## Frequently asked questions

**Why is serial transmission used for fast, long connections?**
Serial uses one wire per direction, so there is no skew or crosstalk between wires. That allows higher clock
speeds and cheaper cabling over long distances than parallel transmission.

**What is the difference between a well-known port and a client port?**
Well-known ports (0 to 1023) identify standard services on servers, such as 80 for HTTP. A client port is a
temporary number chosen by the client's operating system for a single connection.

**Why was IPv6 introduced?**
The 32-bit IPv4 address space allows about 4.3 billion addresses, which was not enough for every connected
device. IPv6 uses 128-bit addresses.

## Related resources

[Communication and networking study guide](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/) |
[Communication and networking practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-practice/) |
[Fundamentals of databases revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-databases-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.9 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
