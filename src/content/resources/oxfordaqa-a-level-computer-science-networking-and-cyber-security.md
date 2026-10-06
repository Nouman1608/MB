---
title: "OxfordAQA A-Level Computer Science: Networking and cyber security (9645)"
seoTitle: "OxfordAQA A-Level CS 9645 Networking & Cyber Security Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
description: "Study guide to OxfordAQA A-Level Computer Science networking and cyber security: transmission, LANs, the Internet, TCP/IP, DHCP and encryption."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---
This guide teaches section 3.14 (Networking and cyber security) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. All of section 3.14 is International A-level only, assessed on the written Unit 4 paper (Advanced concepts and principles of computer science).

Pair it with the [revision notes](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security-practice/). See the [course hub](/boards/oxfordaqa/a-level/computer-science/), the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/), the [exam preparation guide](/resources/oxfordaqa-a-level-computer-science-exam-preparation/) and the free [diagnostics](/diagnostics/).

## What this topic covers

Status of each row below: International A-level only.

| Spec ref | You must be able to |
|---|---|
| 3.14.1 | Transmission methods and communication basics |
| 3.14.2 | Network types, thin/thick clients, wired and wireless networking, CSMA/CD and CSMA/CA |
| 3.14.3 | Packet switching, routing, URLs, domain names, DNS, registries |
| 3.14.4 | TCP/IP layers, sockets, protocols, IP addressing, DHCP |
| 3.14.5 | Firewalls, encryption, certificates, signatures, malware |

## 3.14.1 Communications

In **serial transmission**, bits travel in sequence over one line. **Parallel transmission** sends several bits at once along several lines. Serial is better over distance: parallel bits arrive at slightly different times (**skew**), neighbouring wires interfere (**crosstalk**), and serial cables need fewer wires so cost less.

**Synchronous transmission** sends a continuous stream, with sender and receiver kept in step by a shared timing signal. **Asynchronous transmission** sends each character on its own, with gaps allowed between characters. The **start bit** brings the receiver's clock into phase with the sender's; the **stop bit** lets the next start bit be recognised and, in older devices, gave the receiver time to deal with the data.

- **Baud rate**: signal changes per second.
- **Bit rate**: bits sent per second.
- **Bandwidth**: the range of frequencies a medium can carry. Bit rate is directly proportional to bandwidth.
- **Latency**: the delay between sending a signal and it being received.
- **Protocol**: a set of rules governing how devices communicate.

Bit rate exceeds baud rate when each signal change encodes more than one bit: *n* signal levels carry log₂(*n*) bits per change.

**Worked example 1.** A link runs at 2,400 baud with 16 signal levels. It sends 3,000 characters asynchronously, each as 1 start bit, 8 data bits and 1 stop bit. Find the bit rate, the time taken and the fraction of bits that are data.

```
bits per change = log2(16) = 4
bit rate        = 2,400 × 4 = 9,600 bit/s
bits per char   = 1 + 8 + 1 = 10
total bits      = 3,000 × 10 = 30,000
time            = 30,000 ÷ 9,600 = 3.125 s
data fraction   = 8 ÷ 10 = 80%
```

## 3.14.2 Networking

In a **peer-to-peer** network every computer has equal status and shares its own resources; it suits a small home network or direct file sharing between users. In a **client-server** network, clients request services from one or more servers (file server, email server); it suits an organisation needing central storage, accounts, backups and security.

A **thin client** does little processing or storage; programs and data live on a server. It needs a powerful server and a fast, reliable network, but terminals are cheap and are managed centrally. A **thick client** processes and stores data itself, so it needs capable hardware, loads the network less, and must be updated and secured machine by machine.

### Wired networking

**Copper** cable is cheaper and easier to install but has lower speed and capacity, and suffers electrical interference over distance. **Fibre-optic** cable costs more but gives far higher speed and capacity over long distances and is immune to electrical interference. Choose copper for short runs inside a building and fibre for backbone links between buildings or sites.

**CSMA/CD** (Carrier Sense Multiple Access with Collision Detection) controls a shared wired medium. In language-neutral pseudo-code (the specification defines no pseudo-code standard for this):

```
REPEAT
  WHILE medium is busy
    wait
  ENDWHILE
  transmit frame while listening
  IF collision detected THEN
    send jam signal
    wait a random back-off time
  ENDIF
UNTIL frame sent without collision
```

### Wireless networking

**Wi-Fi** is a wireless local area network based on international standards, letting devices join a network without cables. The **SSID** is the name identifying the network. Each device needs a **wireless network adapter**, and the network needs a **wireless access point**; in many homes one box is switch, router and access point. Secure it with **WPA2** encryption, **SSID broadcast disabled**, and a **MAC address allow list**.

**CSMA/CA** (Collision Avoidance) exists because a wireless station cannot detect a collision while transmitting. The station listens; if the channel is busy it waits a random back-off time; if idle it transmits. The receiver sends an acknowledgement; no acknowledgement means a collision is assumed and the station backs off and retries.

**With RTS/CTS**, the station first sends a short **Request to Send** to the access point, which replies **Clear to Send**. Every station in range hears the CTS and stays silent while the data and acknowledgement pass. This solves the hidden-node problem, where two stations cannot hear each other but both reach the access point.

**Wired vs wireless**: wireless gives mobility, no cabling and easy expansion, but lower and less steady speed, interference, range limits and greater interception risk. Wired is faster, more reliable and more secure but costs more to install and fixes devices in place.

## 3.14.3 The Internet

The Internet is a network of networks: high-capacity backbone links and routers, with ISPs connecting users to them. **Packet switching** splits data into packets that travel independently, possibly by different routes. **Routers** read each packet's destination address and use a routing table to pick the next hop, so routing is achieved hop by hop. The receiver reorders packets by sequence number.

A packet holds: **source address**, **destination address**, **packet sequence number**, **time to live**, **payload**, and **error detection/correction information**. Each router lowers the time to live by 1 and discards the packet at 0, so lost packets cannot circulate forever.

- **IP address**: the numeric address of a device on an IP network.
- **Domain name**: a readable name for an organisation's part of the Internet, e.g. orrinvale-museum.org.
- **FQDN**: a domain name including the host name, identifying one host, e.g. tickets.orrinvale-museum.org.
- **URL**: the full address of a resource, e.g. `https://tickets.orrinvale-museum.org/events/winter.html` (protocol, FQDN, path).

Domain names are hierarchical, read right to left: root, **top-level domain** (.org, .com, or a country code such as .pk), the organisation's domain, then subdomains or hosts.

The **domain service** lets people use names while routers use numbers; it relies on **DNS**. To look up tickets.orrinvale-museum.org:

1. The computer checks its cache, then asks its DNS resolver (often the ISP's).
2. If the resolver has no cached answer, it asks a root name server, which refers it to the .org servers.
3. A .org server refers it to the name server for orrinvale-museum.org.
4. That server returns the IP address; the resolver caches it and passes it back.

**Internet registries** allocate IP addresses and keep records of domain names so every public address and name is unique. IANA delegates address blocks to five Regional Internet Registries, which allocate them to ISPs and organisations.

## 3.14.4 TCP/IP

| Layer | Role |
|---|---|
| Application | Formats data using protocols such as HTTP or SMTP |
| Transport | TCP splits data into numbered segments, adds port numbers, acknowledges and resends lost data |
| Internet | IP adds source and destination IP addresses; routers forward packets between networks |
| Link | Network hardware; adds MAC addresses and sends frames over the medium |

Layers let each part be designed, changed and replaced independently, and let different manufacturers' products work together.

A **socket** is an IP address plus a port number, e.g. 203.0.113.8:443; it identifies one end of a connection, so one computer can hold many connections at once. A **MAC address** is the unique hardware address of a network interface, used for delivery within a local network; it changes at each hop while IP addresses stay end to end.

### Application layer protocols

FTP transfers files; HTTP requests web pages and HTTPS does so encrypted; SMTP sends email; POP3 and IMAP retrieve it; SSH gives encrypted remote access.

- **FTP**: client software connects to an FTP server with **anonymous access** (public files, no account) or **authenticated access** (username and password). FTP is unencrypted, so protocols such as **SFTP**, which encrypt files, are replacing it.
- **SSH**: an administrator logs in securely to a remote computer and executes commands, e.g. restarting a service.
- **Email**: Teodora's client uses SMTP to send her message to her email server, which relays it by SMTP to the recipient's email server, which stores it in Kwabena's mailbox. He collects it with POP3 (downloaded, usually removed from the server) or IMAP (kept on the server, in step across devices).
- **Web**: a web server answers HTTP requests by sending pages in text form (HTML). The browser then requests the images, style sheets and scripts the page references and renders the result.

### IP addresses

An IP address has a **network identifier** and a **host identifier**. A **subnet mask** has 1s over the network part; ANDing address and mask gives the network identifier.

**Worked example 2.** Find the network identifier of 10.48.157.201 with mask 255.255.240.0.

```
octets 1–2: mask 255 keeps them    → 10.48
octet 3:   157 = 10011101
           240 = 11110000
       AND       10010000 = 144
octet 4:   mask 0                  → 0
network identifier = 10.48.144.0   host bits = 4 + 8 = 12
```

**IPv4** addresses are 32 bits; **IPv6** addresses are 128 bits, introduced because IPv4 addresses ran out as connected devices multiplied. **Routable** (public) addresses are unique worldwide. **Non-routable** (private) addresses, such as 10.x.x.x or 192.168.x.x, are reused inside local networks and are not forwarded across the Internet.

**DHCP** gives a device its IP configuration automatically: the device broadcasts **Discover**, a server sends an **Offer**, the device sends a **Request**, the server sends **Acknowledge**. The address is leased for a set time, then returns to the pool. Advantages over manual set-up: no typing errors or duplicate addresses, addresses are reused, visitors join instantly, and changes are made centrally.

## 3.14.5 Cyber security

A **firewall** controls traffic between networks. **Packet filtering** checks addresses, port numbers and protocol against rules. A **proxy server** makes requests for internal users, hiding their addresses and filtering content. **Stateful inspection** tracks open connections and only admits packets belonging to one.

**Symmetric encryption** uses one shared key: fast, but the key must reach the receiver safely. **Asymmetric encryption** uses a key pair: what the recipient's **public key** encrypts, only their **private key** decrypts. **Key exchange**: encrypt a random symmetric key with the recipient's public key, send it, then both sides use it.

A **digital signature**: hash the message, encrypt the hash with the sender's private key, attach it. The receiver decrypts it with the sender's public key, re-hashes and compares; a match proves origin and integrity. A **digital certificate** is obtained by sending your public key and identity to a **Certificate Authority**, which verifies you and signs a certificate holding the public key, owner and expiry date. Browsers check that signature before trusting a site's key.

A **virus** attaches to a file and spreads when it runs; a **worm** spreads across networks by itself through unpatched software; a **trojan** poses as useful software to trick users. They exploit out-of-date software, weak passwords, excess privileges and careless users; patching, anti-malware, least privilege and training reduce the risk.

## Common errors

- Calling bandwidth "speed": it is a frequency range that limits bit rate.
- Saying CSMA/CA detects collisions: it infers them from a missing acknowledgement.
- Treating a signature as secrecy: it proves origin and integrity.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.14 Networking and cyber security.
