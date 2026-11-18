---
title: "IB DP Computer Science (DP Computer Science): Servers, Client-Server and Peer-to-Peer Models -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "A.2 -- Networks"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.21
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-2"
description: "Condensed notes on server functions (HL) and client-server versus peer-to-peer networks for IB DP Computer Science A.2, with exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A2.2.2 (function of servers, HL only) and A2.2.3 (client-server and peer-to-peer, SL and HL) labels; please check the server types and depth against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A2.2.2, the function of servers (HL only)**, and **A2.2.3, client-server and
peer-to-peer models (SL and HL)**, in A.2 Networks (IB DP Computer Science, first assessment 2027).
For full explanations and worked scenarios, use the
[servers, client-server and peer-to-peer study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-client-server-peer-to-peer/);
for devices and protocols, see the
[A.2 Networks revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Client | Device or program that requests a service |
| Server | Device or program that provides a service to clients over a network |
| Client-server model | Network in which dedicated servers provide services and clients request them |
| Peer-to-peer (P2P) model | Network with no dedicated server; each peer can both provide and request |
| Peer | A computer in a P2P network acting as client and server |
| Single point of failure | One component whose failure stops the whole service |
| Load balancing | Sharing requests between several servers |
| Bottleneck | A point where demand exceeds capacity, slowing everything down |
| Caching | Keeping copies of frequently requested data to serve them faster |
| Centralised management | Accounts, permissions, updates and backups controlled in one place |

## HL: server functions

| Server | Does what |
|---|---|
| Web | Sends web pages to browsers in response to HTTP/HTTPS requests |
| File | Stores shared files; controls access |
| Database | Stores a database; runs queries from clients |
| Email | Receives, stores and forwards email |
| DNS | Domain name → IP address |
| DHCP | Gives joining devices an IP address and settings |
| Print | Queues and manages print jobs |
| Proxy | Intermediary to the internet; filters content; caches pages |
| Application | Runs an application's logic for many clients |

**What all servers need:** enough processing power, memory and bandwidth for many concurrent clients;
high availability (backups, load balancing); strong security, since they hold central data.

## Client-server versus P2P

| Criterion | Client-server | Peer-to-peer |
|---|---|---|
| Roles | Fixed | Each peer does both |
| Management | Central (easy) | Each user (harder) |
| Security | Central policies | Depends on every peer |
| Backup | Central | Each peer separately |
| Cost | Higher (server, software, staff) | Lower |
| Failure | Server down → service down (unless backed up) | One peer down → limited effect |
| Performance under load | Server can be a bottleneck | Load shared; but a busy peer slows its owner's work |
| Data availability | Always, while server runs | Only while the holding peer is online |
| Best for | Organisations, sensitive data, many users | Small networks, low budget, large-scale file distribution |

## Deciding in a scenario: four questions

1. **How many users and devices?** Few → P2P possible; many → client-server.
2. **How sensitive or important is the data?** Important → central storage and backup.
3. **What is the budget and expertise?** Low on both → P2P.
4. **Must data always be available?** Yes → client-server with backup.

## Hybrid systems

Central servers for login and finding users (client-server) plus direct data exchange between users
(P2P), as in some video-calling and multiplayer game services.

## Exam traps

- A server is a **role**, not a size of computer.
- P2P is not "insecure"; its security is **decentralised** and so harder to enforce.
- Client-server has a **single point of failure** unless servers are duplicated.
- **DNS** resolves names; **DHCP** assigns addresses. Do not swap them.
- In comparisons, cover **both** models under each criterion.
- In recommendations, refer to the scenario's size, data, budget and staff.

## Self-test

1. Define a server.
2. Why can one laptop be both a client and a server?
3. (HL) State the function of a DHCP server.
4. (HL) State two functions of a proxy server.
5. (HL) What does a database server do when it receives an SQL query from a client?
6. Give two advantages of the client-server model.
7. Give two disadvantages of the client-server model.
8. Define a peer-to-peer network.
9. Why can large P2P file-sharing systems handle more users without slowing down as much?
10. Give two disadvantages of P2P networks.
11. A family wants to share photos between three laptops at home. Which model suits them, and why?
12. How can an organisation reduce the risk of a server being a single point of failure?

**Answers:**
1. A device or program that provides a service to clients over a network.
2. Client and server are roles; the laptop can request services and also provide one, such as a shared
   folder.
3. It allocates IP addresses and network settings to devices as they join the network.
4. Any two: filters requests to block unsuitable sites; caches frequently requested pages; hides
   clients' addresses from the internet.
5. It runs the query on the stored database and returns the results to the client.
6. Any two: central management; central security; central backup; one authoritative copy of data.
7. Any two: cost of hardware, software and staff; single point of failure; possible bottleneck.
8. A network with no dedicated server in which each computer can both provide and request resources.
9. Each downloader also uploads to others, so capacity grows with the number of peers.
10. Any two: each peer must be backed up separately; security depends on every user; files are
    unavailable when the holding peer is offline; a peer slows down when others use it.
11. Peer-to-peer: few devices, low cost, easy to set up, and no need for central management.
12. Use backup servers or several servers with load balancing, so another can take over if one fails.

## Related pages

- [Servers, client-server and peer-to-peer practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-client-server-peer-to-peer-practice/)
- [A.2 Networks study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
