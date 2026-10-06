---
title: "Cambridge A Level Information Technology (ICT): Communications technology (9626) -- Revision Notes"
seoTitle: "A Level ICT 9626 Communications Technology Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for Cambridge A Level IT 9626 communications technology, with protocol tables, key distinctions and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **topic 14, Communications technology**, of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), sections 14.1 to 14.10. The topic is **A Level only** and is assessed in **Paper 3 Advanced Theory**, where calculators are not allowed.

For full explanations and worked examples, read the [study guide](/resources/a-level-cambridge-ict-communications-technology/). Then try the [practice set](/resources/a-level-cambridge-ict-communications-technology-practice/). Course links: [hub](/boards/cambridge/a-level/ict/), [checklist](/checklists/cambridge/a-level/ict/), [diagnostics](/diagnostics/). Related AS pages: [eSecurity](/resources/a-level-cambridge-ict-esecurity/) and [data processing and information](/resources/a-level-cambridge-ict-data-processing-and-information/).

## 14.1 Networks

| Type | Key idea | Plus | Minus |
|---|---|---|---|
| LAN | One site, one owner | Fast, cheap to run | Limited area |
| WAN | Linked LANs over a wide area | Connects sites | Leased lines cost; slower |
| Client-server | Central server provides services | Central security and back-up | Server is a single point of failure |
| Peer-to-peer | All nodes equal | Cheap, simple | No central control |
| VPN | Encrypted tunnel over a public network | Secure remote access | Slower; set-up needed |
| Mobile network | Cellular voice and data | Access on the move | Coverage gaps |

- **Topology**: physical = cabling layout; logical = data flow. Hub-based star = physical star, logical bus.
- **Architecture** = client-server or P2P. **Protocols** = rules each type uses.
- **Uses**: sharing resources and peripherals, data exchange, internet access, telephony, tunnelling, content delivery for streaming and downloads.
- **BitTorrent**: file split into pieces; downloaded from many peers at once; each peer also uploads.

## 14.2 Components

- **NIC / wireless NIC**: connect a device by cable / by radio; hold the MAC address.
- **Repeater**: regenerates a weak signal.
- **Hub**: broadcasts to all ports.
- **Switch**: sends a frame only to the port of the destination MAC address.
- **WAP**: joins wireless devices to a cabled LAN.
- **Bridge**: joins two segments with the same protocol.
- **Router**: forwards packets between networks by IP address.
- **Gateway**: joins networks with different protocols.

## 14.3 Servers and 14.4 Cloud

- **File, web, mail, applications, print, FTP** servers: each provides one shared service. Common plus: central control, back-up and security. Common minus: cost, specialist staff, and that service stops if the server fails.
  - File: one copy of data with access rights; heavy load slows it. Print: queues jobs fairly; a queue fault blocks printing. Applications: install software once; needs a fast network. Mail and web: control of own email and site; must be secured, as they face the internet. FTP: large file transfers; plain FTP is unencrypted.
- **Proxy**: go-between for internet requests; filters, caches, hides internal addresses.
- **Virtual**: software server sharing hardware with others.
- **Request and response**: client asks, server replies.
- **Server farm**: many servers with load balancing; resilient but power-hungry.

**Choosing a server for a scenario**: match the need to the server, then give one benefit and one drawback. A school that wants to block unsuitable sites and speed up repeated page loads needs a **proxy server**: it filters and caches, but it adds a point of failure and must be kept updated. A firm with three small services on lightly used machines could move them to **virtual servers** on one machine: less hardware and power, but one hardware fault stops all three.
- **Cloud**: shared provider resources over the internet, pay for use.
  - Individuals: photo storage, file sync across devices, online office apps. Plus: anywhere access, automatic back-up. Minus: subscription, privacy depends on the provider.
  - Organisations: hosting, databases, off-site back-up, collaboration. Plus: no hardware to buy, scales with demand, provider maintains it. Minus: needs reliable internet, ongoing fees, less control over where data is held.

## 14.5 Transmission

| Term | Meaning | Unit |
|---|---|---|
| Bandwidth | Maximum data rate of a link (or range of frequencies a channel carries) | bit/s (or Hz) |
| Bit rate | Bits actually sent, or needed by a stream, per second | bit/s |

**Method in steps: transfer time**

```
1. Convert size to bits: bytes × 8 (MB × 8 = Mbit)
2. Match prefixes (Mbit with Mbit/s)
3. Time (s) = bits ÷ bit rate
4. Convert to minutes if asked
```

**Worked reminder**: a 400 MB video sent at 80 Mbit/s → 400 × 8 = 3200 Mbit → 3200 ÷ 80 = **40 s**.

**Streaming**: real-time = live, as it happens; on-demand = stored, played when chosen. Bandwidth below the stream's bit rate means buffering or lower quality. UHD TV needs a high bit rate.

**Access technologies**: fibre gives the most bandwidth, then cabled Ethernet; wireless and mobile links usually give less, and it varies with distance, interference and the number of users sharing them. A low-bandwidth medium may carry data and audio well but not several video or UHD streams at once.

| Medium | Strength | Weakness |
|---|---|---|
| Fibre | Highest bandwidth, long range, no electrical interference | Cost, fragile joins |
| Twisted pair | Cheap, easy to fit | Shorter range, interference |
| Coaxial | Shielded | Bulky |
| Laser | No cable between buildings | Needs line of sight; fog |

## 14.6 Protocols

A **protocol** is a set of rules for formatting, addressing, sending and receiving data, so that different devices can communicate.

| Job | Protocols |
|---|---|
| Reliable transport | TCP (connection, acknowledgements, resend) |
| Fast transport | UDP (no connection, no acknowledgement) |
| Addressing and routing | IP |
| Errors and diagnostics | ICMP |
| Address lookup | ARP (IP → MAC), InARP (link-layer address → IP) |
| Automatic addressing | DHCP |
| Web | HTTP, HTTPS |
| Files | FTP |
| Email | SMTP sends; POP3 downloads to one device; IMAP syncs from server |
| Remote login | Telnet (plain text), SSH (encrypted) |
| Security and tunnels | IPsec, TLS/SSL, L2TP |

**Must-know distinctions**

- **Packet switching**: packets with header, payload, trailer; separate routes; reassembled.
  - **Connection mode**: frame relay, TCP.
  - **Connectionless (datagram) mode**: Ethernet, IP, UDP.
- **Circuit switching**: dedicated channel for the whole session.
- **Message switching**: whole message stored and forwarded node by node.
- **MAC** = 48-bit physical address, local delivery. **IP** = logical address, routing. IPv4 32 bits; IPv6 128 bits.
- **Static routing**: manual tables; secure, cannot adapt. **Dynamic routing**: automatic; adapts, uses bandwidth.
- **Interior gateway protocols** inside an autonomous system; **exterior** between them; **BGP** across the internet.
- **OSI** (7): physical, data link, network, transport, session, presentation, application. **TCP/IP** (4): link, internet, transport, application.
- **Firewall**: rules on address, port, protocol, direction; default deny.

## 14.7 Wireless

| Method | Key feature | Example use |
|---|---|---|
| Wi-Fi | Radio, medium range | Wireless LAN |
| Bluetooth | Short-range radio, pairing | Headphones |
| Infrared | Line of sight | Remote control |
| Microwave | Line-of-sight links | Mast-to-mast, satellite |
| Radio | Broadcast | FM radio |
| NFC | Devices almost touching | Contactless payment |

- **Data transfer**: data is carried by modulating electromagnetic waves (radio, microwave or infrared); each method follows its own protocol, e.g. IEEE 802.11 for Wi-Fi, Bluetooth pairing.
- **Wireless power transfer**: inductive charging pads.
- Uses: data exchange, mobile comms, IoT.
- Security: WPA2/WPA3 not WEP; strong passphrase; change default passwords; update firmware.
- Plus: mobility, no cabling, quick to add devices. Minus: lower and less steady speeds than cable, interference, limited range, interception risk.

## 14.8 Mobile systems

- **Cells** with base stations; neighbours use different frequencies; **handover** as you move.
- 3G mobile internet; 4G faster all-IP; 5G faster, lower delay, more devices.
- **Satellite**: data encoded and modulated → ground station uplink → transponder amplifies → downlink on another frequency → receiving dish decodes.
- **GPS**: a receiver works out its position from the timing of signals from several satellites.
- Uses: GPS, global mapping, surveillance, TV and radio broadcasting, UHD TV, remote telephones.

## 14.9 Security and 14.10 Disaster recovery

| Threat | One-line description |
|---|---|
| Brute force | Trying every password |
| DoS | Flooding a server with requests |
| Botnet | Hijacked computers controlled together |
| SQL injection | Database code typed into a form |
| Malware | Viruses, worms, spyware or ransomware spread across the network |
| Malicious actors | People who attack on purpose: criminals, hackers, disgruntled staff |
| Poor policies | Weak passwords, no updates |

- **Impacts**: destruction, manipulation, theft, identity theft.
- **Prevention**: physical (locks, guards, alarms, surveillance); software (biometrics, anti-malware, encryption, access rights, firewall rules).

| Prevention | Advantage | Disadvantage |
|---|---|---|
| Biometrics | Cannot be forgotten or shared | Costly; false rejections |
| Anti-malware | Detects and removes known threats | Needs constant updates |
| Encryption | Stolen data is unreadable | Lost keys mean lost data |
| Access rights | Users see only what they need | Must be kept up to date as roles change |
| Firewall | Blocks unwanted traffic by rule | Badly set rules block real users or let attacks through |

- **Disaster types**: natural, equipment and power failure, cybercrime, malware, crime, accidents.
- **Risk analysis**, **perpetrator analysis**, **risk testing**, **quantifying** (likelihood × impact).

**Worked reminder**: risks scored 1 to 5. Server failure (likelihood 3, impact 4) = 12; theft of laptops (likelihood 2, impact 3) = 6. Deal with server failure first, for example with a spare server and tested back-ups.

- **Control**: detect (monitoring, alerts, intrusion logs), prevent (firewalls, anti-malware, training), restore (back-ups and a recovery plan).
- **Minimise**: UPS and surge protection; passwords and access control; anti-malware; off-site back-ups; tested restore plan.

## Quick self-test

1. Define bit rate.
2. Which device forwards packets between networks using IP addresses?
3. A 250 MB file is sent at 20 Mbit/s. How long does it take?
4. Three on-demand streams need 8 Mbit/s each. A link has 30 Mbit/s free. How much is left?
5. Name the protocol that assigns IP addresses automatically.
6. How many bits are in an IPv6 address?
7. Give the connection mode of UDP.
8. Which OSI layer lies between transport and presentation?
9. Why is WEP not recommended?
10. A risk has likelihood 2 and impact 4. What is its score?
11. What does a proxy server cache?
12. What happens during handover?

### Answers

1. The number of bits sent or needed per second.
2. A router.
3. 250 × 8 = 2000 Mbit; 2000 ÷ 20 = **100 s**.
4. 3 × 8 = 24 Mbit/s used; **6 Mbit/s** left.
5. DHCP.
6. 128.
7. Connectionless (datagram).
8. Session.
9. Its encryption is weak and easily broken; use WPA2 or WPA3.
10. 2 × 4 = **8**.
11. Copies of frequently requested web pages.
12. A moving phone's connection passes from one cell's base station to the next.

## Where marks are usually lost

- Giving "a switch connects computers" without saying it uses MAC addresses to send frames to one port.
- Defining bandwidth as "speed" with no reference to maximum capacity.
- Dividing megabytes by megabits per second without multiplying by 8.
- Naming POP3 or IMAP as the sending protocol.
- Listing TCP features without linking them to reliability (acknowledgement, resending, sequencing).
- Describing a VPN without the words tunnel and encrypted.
- Writing "the cloud is unsafe" instead of a specific risk such as loss of control over where data is stored.
- Giving firewall answers with no rule detail (address, port, protocol).
- Describing a back-up strategy without saying copies are kept off site.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027 (version 3), Cambridge University Press & Assessment: topic 14, Communications technology, sections 14.1 to 14.10.
