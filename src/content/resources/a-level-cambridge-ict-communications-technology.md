---
title: "Cambridge A Level Information Technology (ICT): Communications technology (9626)"
seoTitle: "Cambridge A Level ICT 9626 Communications Technology Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
description: "Study guide for Cambridge A Level IT 9626 topic 14: networks, components, servers, cloud, transmission, protocols, wireless, mobile, security and recovery."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **topic 14, Communications technology**, of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), sections 14.1 to 14.10. It is **A Level only**, assessed in **Paper 3 Advanced Theory** (no calculator).

See the [revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/), the [practice set](/resources/a-level-cambridge-ict-communications-technology-practice/), the [course hub](/boards/cambridge/a-level/ict/), the [printable checklist](/checklists/cambridge/a-level/ict/) and the [diagnostics](/diagnostics/). Encryption and TLS/SSL were met at AS in [topic 1](/resources/a-level-cambridge-ict-data-processing-and-information/), and malware in [eSecurity](/resources/a-level-cambridge-ict-esecurity/).

## What this topic covers

| Section | Key content |
|---|---|
| 14.1 Networks | Network types, topologies, uses, pros and cons |
| 14.2 Components | Role and operation of NICs, hubs, switches, routers and others |
| 14.3 Servers | Server types, request and response, server farms |
| 14.4 Cloud computing | Shared resources, uses, pros and cons |
| 14.5 Data transmission | Bandwidth, bit rate, streaming, transmission media |
| 14.6 Protocols | Named protocols, switching, addressing, routing, layering, firewalls |
| 14.7 Wireless | Methods, operation, uses, security |
| 14.8 Mobile systems | Cellular networks, satellite systems |
| 14.9 Network security | Threats, impacts, prevention |
| 14.10 Disaster recovery | Risk identification, control, minimising risk |

## 14.1 Networks

- **LAN**: devices on one site, owned by one organisation.
- **WAN**: networks linked over a wide area, usually through leased lines or the internet.
- **Client-server**: a central server holds files, security and services; clients request them. Easy to secure and back up centrally, but the server is a single point of failure.
- **Peer-to-peer (P2P)**: every computer is equal and shares its own resources. Cheap, but no central back-up or security.
- **VPN**: a private, encrypted link across a public network, made by **tunnelling** (wrapping one packet inside another). Home workers reach the office LAN as if on site.
- **Mobile networks**: cellular voice and data for phones (14.8).

**Characteristics.** **Physical topology** is how devices are cabled; **logical topology** is how data flows. A star cabled round a hub is physically a star but logically a bus, because the hub sends every signal to every device. **Architecture** means client-server or P2P. **Protocols** differ by type: Ethernet or Wi-Fi in a LAN, IP across a WAN, tunnelling protocols in a VPN.

**Uses:** sharing and storing resources, sharing peripherals, exchanging data, internet services, telephony, tunnelling, and content delivery (streaming, software downloads). **BitTorrent** splits a large file into pieces; you download pieces from many peers at once while uploading pieces you hold, so no single server carries the load.

## 14.2 Components in a network

| Component | Role and operation |
|---|---|
| NIC | Connects a device to a cabled network; holds its MAC address |
| Wireless NIC | Same job by radio, through an aerial |
| Repeater | Regenerates a weakened signal so it travels further |
| Hub | Sends incoming data out of every port; cannot read addresses |
| Switch | Learns which MAC address is on each port; sends each frame only to its destination port |
| Wireless access point | Connects wireless devices to a cabled LAN |
| Bridge | Joins two LAN segments using the same protocol; filters by MAC address |
| Router | Forwards packets between networks using IP addresses and a routing table |
| Gateway | Joins networks using **different** protocols, converting between them |

**Working together:** PCs' NICs cable to a switch; a WAP on the switch serves laptops; the switch connects to a router, which forwards outside traffic to the internet provider. Switches cut collisions and improve security compared with hubs, as frames are not broadcast.

## 14.3 Network servers

**File** (central storage with access rights), **web** (sends pages to browsers), **mail** (sends, receives, stores email), **applications** (runs software for clients), **print** (manages print queues), **FTP** (files for upload and download), **proxy** (sits between clients and the internet; filters content, caches pages, hides internal addresses) and **virtual** (a software server; several share one physical machine, saving hardware, but one hardware fault stops them all).

Servers use **request and response**: a client sends a request, the server processes it and replies. A **server farm** is a large group of servers. A load balancer shares requests between them, so heavy demand is handled and a failed server's work moves to another. They need much power.

## 14.4 Cloud computing

Cloud computing uses **shared computing resources** (storage, processing, software) owned by a provider and reached over the internet; customers pay for use. **Individuals** store and sync photos and files and use online office software. **Organisations** host websites and databases, back up off site and collaborate on documents.

**Advantages:** no hardware to buy, capacity grows on demand, access from anywhere, provider handles maintenance. **Disadvantages:** needs reliable internet, ongoing fees, less control over where data is held, security depends on the provider.

## 14.5 Data transmission across networks

**Bandwidth** is the maximum rate a link can carry data, in bits per second (in signal terms, the range of frequencies a channel carries, in hertz). **Bit rate** is the number of bits actually sent per second, or that a media stream needs per second of playback. Bandwidth is capacity; bit rate is demand.

**Streaming.** A **real-time** stream (a live match) is sent as it happens. An **on-demand** stream (a stored film) plays when you choose. If available bandwidth is below the stream's bit rate, the player buffers or switches to a lower-quality version. UHD TV needs a far higher bit rate than standard definition, so relies on high-bandwidth media and compression.

| Medium | Properties | Typical use |
|---|---|---|
| Fibre optic | Light pulses; highest bandwidth; long distances; immune to electrical interference; costly | Backbones, links to buildings |
| Twisted pair | Cheap; bandwidth falls with distance; interference | Ethernet LANs |
| Coaxial | Shielded, so less interference than twisted pair; bulkier | Cable TV and broadband |
| Laser | Beam through air; needs line of sight; affected by fog | Links between nearby buildings |

### Worked example 1

A home has a 50 Mbit/s connection. Two UHD films stream at 20 Mbit/s each and a video call uses 4 Mbit/s. Can a third film be added? How long would a 1.5 GB download take on an idle line? (1 GB = 1000 MB.)

1. Demand now: 2 × 20 + 4 = 44 Mbit/s, below 50.
2. With a third film: 3 × 20 + 4 = 64 Mbit/s, above 50, so **it will buffer or drop quality**.
3. 1.5 GB = 1500 MB = 1500 × 8 = 12 000 Mbit.
4. Time = 12 000 ÷ 50 = **240 s (4 minutes)**.

## 14.6 Network protocols

A **protocol** is an agreed set of rules for formatting, addressing, sending and receiving data. Without them, different makers' devices could not communicate.

| Protocol | Purpose |
|---|---|
| TCP | Sets up a connection, numbers segments, acknowledges and resends lost data |
| IP | Addresses and routes packets between networks |
| ICMP | Error and status messages; used by ping |
| ARP / InARP | ARP finds a MAC address from an IP address; InARP finds an IP address from a link-layer address |
| DHCP | Assigns IP addresses and settings automatically |
| UDP | Datagrams with no connection or acknowledgement; fast, for live media |
| HTTP / HTTPS | Web pages; HTTPS encrypts with TLS |
| FTP | File upload and download |
| Tunnelling (L2TP) | Carries packets inside other packets for VPNs; often paired with IPsec |
| SMTP | Sends email |
| POP3 | Downloads email to one device, usually removing it from the server |
| IMAP | Keeps email on the server; devices stay in sync |
| Telnet / SSH | Remote command line; Telnet unencrypted, SSH encrypted |
| IPsec | Encrypts and authenticates IP packets |
| TLS/SSL | Encrypts a client-server session |

**Packet switching.** Data is split into packets, each with a **header** (source and destination addresses, sequence number), a **payload** and usually a **trailer** (error check). Packets may take different routes and are reassembled. **Connection mode** (frame relay, TCP) sets up a connection first, giving reliable, ordered delivery. **Connectionless (datagram) mode** (Ethernet, IP, UDP) sends each packet independently: faster, not guaranteed.

**Circuit switching** reserves a dedicated channel for the whole session, as in a traditional phone call. **Message switching** sends the whole message node to node; each stores it and forwards it when the next link is free.

**Addressing.** A **MAC address** is a 48-bit physical address on a NIC, used within a local network. An **IP address** is a logical address for routing between networks: **IPv4** is 32 bits (four denary numbers, e.g. 192.168.1.20); **IPv6** is 128 bits (eight groups of hexadecimal), introduced because IPv4 addresses ran out.

**Routing.** Routers choose paths from **routing tables**. **Static routing**: routes entered by hand; predictable and secure, but cannot adapt to a failed link. **Dynamic routing**: routers share information and update tables automatically; adapts to failures but uses bandwidth and processing. **Interior gateway protocols** route within one autonomous system; **exterior gateway protocols** route between autonomous systems; the **Border Gateway Protocol** does this across the internet.

**Layering.** **OSI** has seven layers: physical, data link, network, transport, session, presentation, application. **TCP/IP** has four: link, internet, transport, application. TCP/IP is the internet's working model; OSI is a more detailed reference model. TCP/IP's application layer spans OSI's top three layers; its link layer spans the bottom two.

**Firewalls** allow or block packets by rules on IP address, port, protocol and direction. A secure configuration blocks everything by default and opens only what is needed.

### Worked example 2

A doctor wants one inbox on phone and laptop. Choose protocols.

- Send with **SMTP**.
- Receive with **IMAP**, which keeps mail on the server so both devices match; POP3 would move each message onto one device.
- Run both over **TLS** for encryption.

## 14.7 Wireless technology

**Wi-Fi** (radio, medium range, wireless LANs, IEEE 802.11 protocols); **Bluetooth** (low-power radio over a few metres, devices pair first); **infrared** (line of sight, remote controls); **microwave** (line-of-sight links between masts, satellite links); **radio** (broadcast to many receivers); **NFC** (devices almost touching; contactless payment).

**Wireless power transfer** charges without a cable, for example on an inductive pad. Uses: data exchange, mobile communications and the **Internet of Things**.

**Security.** Signals can be intercepted outside the building. Use **WPA2 or WPA3** (WEP is weak), a strong passphrase, changed default router passwords and updated firmware.

**Pros:** mobility, no cabling. **Cons:** slower than cable, interference, limited range, interception.

## 14.8 Mobile communication systems

A **cellular network** divides an area into **cells**, each with a base station. Neighbouring cells use different frequencies so frequencies can be reused further away. Moving between cells, sessions are **handed over** between base stations. **3G** brought mobile internet; **4G** faster all-IP data; **5G** higher speeds, lower delay and many more devices, suiting IoT.

**Satellites.** Data is encoded and modulated, sent from a ground station on the **uplink**, amplified by the satellite's transponder and returned on a **downlink** at a different frequency. Uses: **GPS** (position from the timing of signals from several satellites), **global mapping** from images, **surveillance**, **broadcasting** TV and radio including UHD TV, and telephones in remote areas.

## 14.9 Network security

**Threats:** brute force (trying many passwords), denial of service (flooding a server), botnets (infected machines controlled together), malware, malicious actors, SQL injection (database code typed into a web form) and poor network policies. **Impacts:** data destruction; manipulation, modification or theft; identity theft.

**Prevention:** barriers, locks, surveillance, alarms, guards; biometrics; anti-malware, anti-virus and anti-spyware; encryption; access rights; firewalls blocking unneeded ports. Drawbacks: biometrics are costly, anti-virus needs constant updates, stolen keys defeat encryption.

## 14.10 Disaster recovery management

**Threats:** natural disasters, equipment and power failures, cybercrime, malware, criminal activity, accidents. **Risk analysis** lists what could go wrong; **perpetrator analysis** asks who might attack and why; **risk testing** simulates a disaster to test the plan; **quantifying the risk** scores each one, often likelihood × impact.

**Control:** detect threats early, prevent them, and **restore** from back-ups using a tested plan. **Strategies:** UPS and surge protection, passwords and access controls, anti-malware, and regular back-ups kept off site.

### Worked example 3

Risks scored 1 to 5. Power cut: likelihood 4, impact 3. Flood: 1, 5. Ransomware: 3, 5.

1. Scores: 4 × 3 = 12; 1 × 5 = 5; 3 × 5 = 15.
2. Priority: **ransomware, then power cut, then flood**.

## Common errors

- Confusing a switch (MAC addresses, within a LAN) with a router (IP addresses, between networks).
- Treating bandwidth and bit rate as the same.
- Calling UDP unreliable without saying why: no acknowledgement or resending.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027 (version 3), Cambridge University Press & Assessment: topic 14, Communications technology, sections 14.1 to 14.10.
