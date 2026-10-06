---
title: "OxfordAQA A-Level Computer Science: Networking and cyber security (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Networking Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed OxfordAQA A-Level Computer Science revision notes on networking and cyber security, with method steps, key contrasts and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---
Every idea here is taught in full, with worked examples, in the [study guide](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/). These notes condense section 3.14 (Networking and cyber security) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Treat every line as International A-level only content; it sits in Unit 4, the written paper on sections 3.12 to 3.16.

Test yourself with the [practice questions](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security-practice/), tick off topics on the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/), browse the [course hub](/boards/oxfordaqa/a-level/computer-science/), or find gaps with a free [diagnostic](/diagnostics/).

## 3.14.1 Communications

| Term | Definition to learn |
|---|---|
| Serial | Bits sent one at a time down a single line |
| Parallel | Several bits sent at once down several lines |
| Synchronous | Continuous data stream; sender and receiver clocks kept in step by a timing signal |
| Asynchronous | Characters sent individually, framed by start and stop bits |
| Baud rate | Signal changes per second |
| Bit rate | Bits transmitted per second |
| Bandwidth | Range of frequencies a medium can carry |
| Latency | Time delay between sending and receiving |
| Protocol | Agreed set of rules for communication |

**Why serial beats parallel over distance:** no skew between bits, no crosstalk between neighbouring wires, cheaper cable with fewer conductors.

**Start bit:** brings the receiver's clock into phase with the sender's. **Stop bit:** allows the next start bit to be recognised; in older devices it gave the receiver time to process the data.

**Method: bit rate from baud rate**
1. Count the signal levels, *n*.
2. Bits per signal change = log₂(*n*).
3. Bit rate = baud rate × bits per change.

*Reminder:* 1,200 baud with 8 levels → log₂(8) = 3 bits per change → 3,600 bit/s.

**Bit rate and bandwidth:** directly proportional. Double the bandwidth and the achievable bit rate doubles.

**Asynchronous overhead:** with 1 start bit, 8 data bits and 2 stop bits, each character costs 11 bits, so only 8/11 ≈ 72.7% of the bits are data.

## 3.14.2 Networking

**Peer-to-peer vs client-server**

| | Peer-to-peer | Client-server |
|---|---|---|
| Status of computers | All equal | Servers provide services; clients request them |
| Typical use | Small home network, sharing files between a few users | School or business with central files, email, logins |
| Strength | Cheap, no dedicated server | Central backups, security and user management |
| Weakness | No central control; files scattered | Server cost; server failure affects everyone |

**Thin vs thick client**

| | Thin client | Thick client |
|---|---|---|
| Processing and storage | Mostly on the server | On the local machine |
| Hardware needs | Simple, cheap terminals; powerful server | Capable local hardware |
| Network needs | Fast, reliable network essential | Lighter network load |
| Management | Central updates and security | Each machine maintained separately |

**Copper vs fibre:** copper is cheaper and easy to fit but slower, lower capacity and open to electrical interference; fibre is costlier but faster, higher capacity, longer reach and immune to electrical interference. Pick fibre for long or high-traffic links, copper for short, low-cost runs.

**Method: CSMA/CD (wired)**
1. Listen to the medium; wait while it is busy.
2. When idle, transmit and keep listening.
3. If a collision is detected, send a jam signal.
4. Wait a random back-off time, then return to step 1.

**Method: CSMA/CA (wireless), no RTS/CTS**
1. Listen; if busy, wait a random back-off time and listen again.
2. When idle, transmit the frame.
3. Wait for an acknowledgement from the receiver.
4. No acknowledgement → assume a collision, back off, retry.

**With RTS/CTS:** sender transmits a short Request to Send to the access point → access point broadcasts Clear to Send → all other stations stay quiet → data frame → acknowledgement. Fixes the hidden-node problem.

**Wireless kit and security:** wireless network adapter in each device, wireless access point for the network. The SSID names the network. Secure with WPA2 encryption, SSID broadcast disabled, MAC address allow list.

**Wired vs wireless:** wireless wins on mobility, set-up cost and adding devices; wired wins on speed, reliability and security.

## 3.14.3 The Internet

- **Structure:** a network of networks joined by high-capacity backbone links and routers; ISPs connect users.
- **Packet switching:** data split into packets that travel independently, may take different routes, and are reordered by sequence number.
- **Routers:** forward each packet towards its destination using routing tables; routing happens one hop at a time.
- **Packet contents:** source address, destination address, sequence number, time to live, payload, error detection/correction data.
- **Time to live:** reduced by 1 at each router; packet discarded at 0.

**Must-know distinctions**

| Term | Meaning |
|---|---|
| IP address | Numeric address of a device on the network |
| Domain name | Readable name for an organisation's network area |
| FQDN | Domain name plus host name, identifying exactly one host |
| URL | Complete address of a resource: protocol, FQDN, path |

**Domain hierarchy:** root → top-level domain (generic such as .com, or country code) → organisation's domain → subdomains/hosts. Read right to left.

**Method: DNS lookup**
1. Check the local cache.
2. Ask the DNS resolver.
3. Resolver asks a root server → referred to the top-level domain server.
4. Top-level domain server → refers to the domain's authoritative name server.
5. Authoritative server returns the IP address; resolver caches it and replies.

**Internet registries:** allocate IP addresses and record domain names so each is unique. IANA delegates to five Regional Internet Registries.

## 3.14.4 TCP/IP

| Layer | Key job | Adds |
|---|---|---|
| Application | Program-level protocol (HTTP, SMTP, FTP) | Application data |
| Transport | Splits into segments, reliability, resends | Port numbers, sequence numbers |
| Internet | Routing between networks | Source and destination IP addresses |
| Link | Delivery across the physical network | MAC addresses |

**Why layers:** each layer is independent, so one can change without the others; complex problem divided up; standard interfaces let different makers' products work together.

**Socket** = IP address + port number. **MAC address** = unique hardware address of a network interface, used inside the local network and replaced at each hop.

| Protocol | What it does |
|---|---|
| FTP | File transfer, anonymous or authenticated; unencrypted, being replaced by SFTP |
| HTTP / HTTPS | Fetch web resources / the same, encrypted |
| SMTP | Sends email from client to server and server to server |
| POP3 | Downloads email to one device, normally deleting it from the server |
| IMAP | Leaves email on the server, synchronised across devices |
| SSH | Encrypted remote login to run commands and manage servers |

**Web:** the server sends pages in text form; the browser requests the page and its resources, then renders them.

**Method: network identifier from a subnet mask**
1. Write each octet where the mask is neither 255 nor 0 in binary.
2. AND the address with the mask bit by bit.
3. Octets under 255 are copied; octets under 0 become 0.

*Reminder:* 192.168.37.77 with 255.255.255.224: 77 = 01001101, 224 = 11100000, AND = 01000000 = 64, so the network is 192.168.37.64 with 5 host bits.

**IPv4 vs IPv6:** 32-bit vs 128-bit addresses; IPv6 was introduced because the IPv4 supply ran out.

**Routable vs non-routable:** public addresses are unique and forwarded across the Internet; private ranges (10.x.x.x, 172.16–31.x.x, 192.168.x.x) are reused within local networks and not forwarded.

**DHCP:** Discover (broadcast) → Offer → Request → Acknowledge. Address leased for a period. Beats manual set-up: no duplicates or typos, address reuse, instant connection for visitors, central changes.

## 3.14.5 Cyber security

| Firewall method | How it works |
|---|---|
| Packet filtering | Compares addresses, ports and protocol with rules |
| Proxy server | Requests on users' behalf; hides internal addresses |
| Stateful inspection | Admits only packets that belong to a tracked connection |

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared key | Public and private key pair |
| Speed | Fast | Slower |
| Problem | Getting the key to the receiver safely | Slow for bulk data |

**Key exchange:** encrypt a fresh symmetric key with the recipient's public key; send it; use symmetric encryption from then on.

**Digital signature:** hash → encrypt hash with sender's private key → receiver decrypts with sender's public key, re-hashes, compares.
**Digital certificate:** public key + identity sent to a Certificate Authority → identity checked → certificate signed by the CA.

**Malware:** virus (needs a host file to run), worm (self-spreading over networks), trojan (disguised as useful software). Vulnerabilities: unpatched software, weak passwords, excess privileges, human error.

## Quick self-test

1. Define latency.
2. Give two reasons serial is preferred to parallel over long cables.
3. A link uses 4 signal levels at 1,500 baud. Find the bit rate.
4. What does a stop bit allow?
5. Name the problem RTS/CTS solves.
6. Which part of a packet stops it circulating forever?
7. Find the network identifier of 172.20.9.130 with mask 255.255.255.128.
8. State one difference between POP3 and IMAP.
9. Which key does a sender use to create a digital signature?
10. How does a worm differ from a virus?

### Answers

1. The delay between data being sent and being received.
2. No skew between bits; no crosstalk; cheaper cable (any two).
3. log₂(4) = 2 bits per change; 1,500 × 2 = 3,000 bit/s.
4. The next start bit to be recognised (and, in older devices, time to process the data).
5. The hidden-node problem.
6. The time to live.
7. 130 = 10000010; AND 10000000 = 128; network 172.20.9.128.
8. POP3 downloads and usually deletes from the server; IMAP keeps mail on the server.
9. The sender's own private key.
10. A worm spreads by itself across networks; a virus needs a host file to be run.

## Where marks are usually lost

- Defining bandwidth as "speed" instead of a range of frequencies.
- Saying bit rate always equals baud rate.
- Mixing up the start bit (clock phase) and stop bit (recognise next start bit).
- Describing CSMA/CA as detecting collisions while sending.
- Missing the random back-off step from either CSMA method.
- Using "domain name" when the question asks for an FQDN.
- Forgetting that the resolver caches the DNS answer.
- Claiming private addresses are "secure" rather than non-routable.
- Saying a signature uses the receiver's keys.
- Calling every piece of malware a virus.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.14 Networking and cyber security.
