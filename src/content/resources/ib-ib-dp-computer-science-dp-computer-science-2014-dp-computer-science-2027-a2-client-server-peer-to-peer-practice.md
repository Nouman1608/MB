---
title: "IB DP Computer Science (DP Computer Science): Servers, Client-Server and Peer-to-Peer Models -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original questions on server functions and client-server versus peer-to-peer models for IB DP Computer Science A.2, with mark-scheme answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Written from the public subject brief and the A2.2.2 (function of servers, HL only) and A2.2.3 (client-server and peer-to-peer, SL and HL) labels; please check the HL labels and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A2.2.2, the function of servers (HL only)**, and **A2.2.3, client-server and
peer-to-peer models (SL and HL)**. Questions marked *(HL)* are for HL students only. Related:
[study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-client-server-peer-to-peer/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-client-server-peer-to-peer-revision-notes/).

## Section A

**1.** Define the term *peer* in a peer-to-peer network. **[1]**

**2.** Distinguish between a client and a server. **[2]**

**3.** *(HL)* State the function of each of the following servers.
**(a)** DNS server.
**(b)** File server. **[2]**

**4.** Outline why a client-server network is described as having a single point of failure. **[2]**

**5.** State **two** reasons why a small home network often uses a peer-to-peer model. **[2]**

**6.** *(HL)* Explain why a web server for a popular online shop needs large amounts of processing power
and bandwidth. **[2]**

## Section B

**7.** *(HL)* A school's network includes a DHCP server, a file server and a print server. Describe what
happens on the network when a student logs on to a school computer and prints a document stored in
their shared folder. Refer to the role of each server. **[6]**

**8.** Compare the client-server and peer-to-peer models in terms of security and backup. **[4]**

**9.** A software company distributes large updates to millions of users. Instead of sending every
copy from its own servers, it uses a peer-to-peer system in which users who have downloaded part of
an update also send it to other users.
**(a)** Explain **one** advantage of this approach for the company. **[2]**
**(b)** Explain **one** disadvantage or risk for the users. **[2]**

**10.** *(HL)* Explain **two** functions of a proxy server in a school network. **[4]**

**11.** A multiplayer game uses a central server to log players in and match them into games, then
sends game data directly between the players' devices.
**(a)** Identify which part of the system uses the client-server model and which uses the
peer-to-peer model. **[2]**
**(b)** Suggest **one** reason for sending game data directly between players. **[1]**

**12.** A medical clinic with 25 staff stores patient records on each doctor's own computer and shares
them through a peer-to-peer network. Evaluate whether the clinic should change to a client-server
model. **[6]**

---

## Answers

**1.** A computer in a peer-to-peer network that can both provide resources to and request resources
from other computers [1].

**2.** A client requests a service [1]; a server provides a service to clients over the network [1].

**3. (a)** Translates domain names into IP addresses [1].
**(b)** Stores files centrally and controls which users can access them [1].

**4.** Clients depend on the server for services such as files or logins [1]; if the server fails and
there is no backup server, none of the clients can use those services [1].

**5.** Any two, [1] each: low cost (no dedicated server); easy to set up; few devices to manage;
no specialist administrator needed. Maximum 2.

**6.** The server must respond to requests from very many clients at the same time [1]; each request
requires processing (for example building pages and querying stock) and sending data, so insufficient
power or bandwidth would make pages slow or unavailable [1].

**7.** One mark per point, up to 6:
- When the computer starts on the network, it requests an IP address and the DHCP server allocates one
  together with network settings [1].
- The student's log-on details are checked against the central account records, so the student can
  use any school computer [1].
- The student's shared folder is held on the file server, which checks the student's permissions
  before allowing access [1].
- The document is sent from the file server to the student's computer (the client) [1].
- When the student prints, the print job is sent to the print server, which places it in a queue [1].
- The print server sends jobs to the printer in turn and can track or limit printing per user [1].
Maximum 6.

**8.** Security, up to 2: client-server security is controlled centrally, for example user accounts
and permissions set by an administrator [1]; in P2P each user controls sharing on their own machine,
so security is only as strong as the weakest peer [1]. Backup, up to 2: client-server data is backed
up centrally from the server [1]; in P2P each peer must be backed up separately, so data can be lost
if a user does not do so [1].

**9. (a)** The company does not need enough server capacity to send every copy itself [1], because
users share the load, reducing its bandwidth and server costs and allowing many users to download at
once [1].
**(b)** Any one, explained [2]: users' upload bandwidth is used, which can slow their own internet
use or cost them money on limited plans [1] [1]; users' devices are exposed to other peers, so
security depends on the update being verified (for example signed) to stop tampered copies spreading
[1] [1].

**10.** Two functions, [1] for each function and [1] for each explanation in context:
- Filtering: the proxy checks requests against a list of blocked sites [1], so students cannot reach
  unsuitable content [1].
- Caching: the proxy stores copies of frequently requested pages [1], so when many students request
  the same page it loads faster and uses less of the school's internet bandwidth [1].
- Anonymity/security: requests appear to come from the proxy [1], hiding individual computers'
  addresses from outside servers [1].
Maximum 4.

**11. (a)** Logging in and matchmaking use the client-server model [1]; sending game data between
players uses the peer-to-peer model [1].
**(b)** Any one [1]: lower delay because data does not travel through a central server; reduces the
load and bandwidth cost on the company's servers.

**12.** Award up to 6:
- Patient records are highly sensitive, and P2P leaves security to each doctor's machine; a central
  server allows consistent access control and auditing [1].
- With 25 staff, P2P management (backups, updates, permissions on every computer) becomes difficult
  [1].
- Records are unavailable when a doctor's computer is switched off; a server keeps them available to
  any authorised staff [1].
- Central backup on a server reduces the risk of losing records if one computer fails [1].
- Drawbacks of changing: cost of server hardware, software and a technician; a single point of
  failure unless a backup server or off-site backup is used [1].
- Justified conclusion: the clinic should change, because the sensitivity and importance of the
  records outweigh the cost, provided a backup arrangement is included [1].
Maximum 6.

---

## Where marks are usually lost

- Giving server types without saying what service each provides.
- Comparisons that describe one model only.
- Recommending a model without referring to the scenario's size, data and budget.
- Mixing up DNS and DHCP.

## Frequently asked questions

**Are server functions examined at SL?**
The function of servers is marked HL only in the guide; comparing client-server and peer-to-peer is
for both levels, so SL students should answer Questions 1, 2, 4, 5, 8, 9, 11 and 12.

**Are these real IB questions?**
No. They are original practice questions written for revision.
