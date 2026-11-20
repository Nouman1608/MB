---
title: "AQA A-Level Computer Science (7517): The Internet -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "the-internet-7517"
description: "Condensed AQA 7517 section 4.9.3 recall: packet switching, routing, URLs, DNS, registries, firewalls, encryption, certificates, signatures and malware."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.9.3 The Internet**, AQA A-Level Computer Science (7517): how the Internet works (packet switching, routers, gateways, routing, URL, FQDN, domain names, IP addresses, DNS, registries) and Internet security (firewalls, symmetric and asymmetric encryption, key exchange, certificates, signatures, worms, trojans and viruses). The longer explanations are in the [Internet study guide](/resources/aqa-a-level-computer-science-7517-the-internet/); questions are in the [Internet practice questions](/resources/aqa-a-level-computer-science-7517-the-internet-practice/).

## How the Internet works

- **Structure:** a network of networks; ISPs connect homes and organisations; ISPs connect to each other and to high-capacity backbone links.
- **Packet switching:** a message is split into packets; each is sent separately, possibly by a different route; they are reassembled at the destination.
- **Packet parts:** header (destination IP, source IP, sequence number, hop count, protocol), payload, check data.
- **Router:** connects networks and forwards packets using the destination IP address and a routing table.
- **Gateway:** connects networks that may use different protocols; the exit point from one network to another.

**Packet count check:** 12,000 bytes with 1,500 byte payloads = 8 packets. Always round up.

## Routing across the Internet

1. Router reads the destination IP address.
2. It looks up the next hop in its routing table.
3. It decrements the hop count; at 0 the packet is discarded.
4. It forwards the packet.
5. Repeat at each router until the destination network is reached.

## Names and addresses

| Term | Meaning | Example |
|---|---|---|
| URL | Protocol, host name and path to a resource | `https://www.example.org/news/index.html` |
| FQDN | Complete host name | `www.example.org` |
| Domain name | Registered name of an organisation or area | `example.org` |
| IP address | Numerical address of a device on a network | used by routers to deliver packets |

**Hierarchy:** top-level domain (`.org`), second-level domain (`example`), subdomain (`www`), read right to left.

## DNS

Translates a domain name into an IP address. A distributed hierarchy of servers.

1. Check browser and operating system caches.
2. Ask the configured DNS server.
3. If unknown, ask a root server, which points to the top-level domain server.
4. That points to the authoritative server for the domain.
5. The IP address is returned and cached.

## Internet registries

Allocate IP address blocks and record domain name ownership. Needed so that addresses and names are **unique** worldwide, and so owners can be identified.

## Firewalls

| Type | What it examines |
|---|---|
| Packet filtering | Packet headers (IP addresses, ports, protocol) against rules |
| Proxy server | Acts on behalf of internal clients; hides internal addresses; can inspect content |
| Stateful inspection | Tracks the state of connections; allows replies to connections started inside; blocks unsolicited packets |

## Encryption

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared key | Public and private key pair |
| Speed | Fast | Slower |
| Problem | Sharing the key securely | None with key sharing, but slow |

- **Key exchange:** encrypt a symmetric session key with the receiver's public key; both use the session key afterwards.
- **To send a secret message:** encrypt with the **receiver's public key**.
- **To sign:** encrypt the hash with the **sender's private key**.

**Toy check:** public key (33, 3), private key (33, 7). Message 4 encrypts to 4³ mod 33 = 31; 31⁷ mod 33 = 4. Signing hash 5: 5⁷ mod 33 = 14; 14³ mod 33 = 5.

## Digital signatures and certificates

- **Signature:** hash the message; encrypt the hash with the sender's private key; the receiver decrypts with the public key and compares hashes. Gives **authenticity and integrity**.
- **Certificate:** links a public key to an identity. Obtained from a **certificate authority** after identity checks; the CA signs it. Used when a browser checks the CA's signature to trust a site's public key.

## Malware

| | Virus | Worm | Trojan |
|---|---|---|---|
| Spreads by | Attaching to files and programs | Copying itself across networks | User installing disguised software |
| Needs user action | Usually | No | Yes |
| Replicates | Yes | Yes | No |
| Exploits | User running infected files | Software flaws | User trust |

**Countermeasures:** better code quality (validation, bounds checks, testing); monitoring (logs, intrusion detection); protection (patches, anti-malware, firewalls, least privilege, user training).

## Key terms

| Term | Definition |
|---|---|
| Packet | A small unit of data sent across a network with a header |
| Hop count | A count reduced at each router; the packet is discarded at zero |
| Routing table | A list in a router of networks and the next hop to reach them |
| ISP | Internet service provider: supplies Internet access |
| Hash | A short fixed-size value calculated from a message |
| Certificate authority | A trusted organisation that issues and signs digital certificates |
| Session key | A temporary symmetric key used for one conversation |
| Authoritative name server | The DNS server that holds the records for a domain |
| Backbone | High-capacity links that carry Internet traffic between regions |

## Exam traps

- **Packets can take different routes** and arrive out of order.
- **Routers forward; DNS translates names.**
- **Encrypt with the receiver's public key; sign with your private key.**
- **A signature does not hide the message.**
- **A trojan does not replicate**; worms and viruses do.
- **Round up** when counting packets.
- **A gateway** links different networks or protocols.

## Self-test

1. What is packet switching?
2. Name three items in a packet header.
3. What does a router use to decide where to send a packet?
4. Why does a packet have a hop count?
5. Split `https://www.example.org/news/index.html` into protocol, FQDN and path.
6. What does DNS do?
7. Why are Internet registries needed?
8. What does stateful inspection add to packet filtering?
9. Which key encrypts a message to a receiver in asymmetric encryption?
10. Why are symmetric and asymmetric encryption combined?
11. What does a digital certificate prove?
12. Name one difference between a worm and a trojan.

**Answers**

1. Dividing a message into packets that are sent separately and reassembled at the destination.
2. Any three of: destination IP, source IP, sequence number, hop count, protocol.
3. The destination IP address and its routing table.
4. To discard packets that have travelled too far, stopping them circulating forever.
5. Protocol `https`; FQDN `www.example.org`; path `/news/index.html`.
6. It translates domain names into IP addresses.
7. To keep addresses and domain names unique and to record who owns them.
8. It tracks the state of connections, so unsolicited packets can be blocked.
9. The receiver's public key.
10. Symmetric is fast but needs a shared key; asymmetric sends the key securely.
11. That a public key belongs to a named owner, verified by a certificate authority.
12. A worm copies itself across networks; a trojan is disguised software that the user installs and does not copy itself.

## Related resources

- [Internet study guide](/resources/aqa-a-level-computer-science-7517-the-internet/)
- [Internet practice questions](/resources/aqa-a-level-computer-science-7517-the-internet-practice/)
- [Networking revision notes](/resources/aqa-a-level-computer-science-7517-networking-revision-notes/)
