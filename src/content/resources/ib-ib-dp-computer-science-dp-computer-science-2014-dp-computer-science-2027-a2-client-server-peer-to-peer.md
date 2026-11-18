---
title: "IB DP Computer Science (DP Computer Science): Servers, Client-Server and Peer-to-Peer Models"
resourceType: "study-guides"
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
description: "Study guide to the function of servers (HL) and the comparison of client-server and peer-to-peer models (SL and HL) in IB DP Computer Science A.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A2.2.2 (function of servers, HL only) and A2.2.3 (client-server and peer-to-peer, SL and HL) labels; please check the server types and depth against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers two statements of A.2 Networks: A2.2.2, the function of servers, which the guide
marks HL only, and A2.2.3, the comparison of client-server and peer-to-peer models, which is for both
SL and HL.** The [A.2 Networks study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2/)
introduces clients and servers in a sentence each; this page goes further into what servers
actually do and how the two network models compare.

> **Scope of this page.** The statement numbers and their SL/HL status come from the full DP Computer
> Science guide (first assessment 2027). Check your school's copy for the exact wording and for the
> server types it lists. Sections marked **HL** below are HL only.

## Clients and servers: the core idea

A **client** is a device or program that **requests** a service. A **server** is a device or program
that **provides** a service to clients over a network. The same physical computer can run several
server programs, and a powerful machine in a data centre may host many virtual servers.

The relationship is defined by **role**, not by hardware: your laptop is a client when it loads a web
page, but if you share a folder from it, it is also acting as a file server.

## HL: the function of servers

Each type of server provides one kind of service. The table summarises those you are most likely to
meet; your school's guide may name a specific list.

| Server | Function | Example in use |
|---|---|---|
| **Web server** | Stores web pages and sends them to browsers in response to HTTP or HTTPS requests | A school's website |
| **File server** | Stores files centrally and controls who can read or change them | Shared coursework folders |
| **Database server** | Stores a database and processes queries (for example SQL) sent by client applications | A library's loans system |
| **Email server** | Receives, stores and forwards email for users | A school's email accounts |
| **DNS server** | Translates domain names into IP addresses | Turning a school's domain name into its address |
| **DHCP server** | Allocates IP addresses and network settings to devices when they join | A laptop connecting to school Wi-Fi |
| **Print server** | Queues print jobs from many users and sends them to printers | Library printers |
| **Proxy server** | Acts as an intermediary between clients and the internet; can filter content and cache frequently requested pages | Blocking unsuitable sites and speeding up repeat visits |
| **Application server** | Runs the business logic of an application for many clients | An online booking system |

Three ideas link all server types:

1. **Centralisation.** Data and services are held in one place, so they are easier to back up, secure
   and update.
2. **Concurrency.** A server must handle requests from many clients at once, so it needs enough
   processing power, memory and bandwidth.
3. **Availability.** Clients depend on the server; if it fails, the service stops. Important services
   use backup servers or **load balancing** to share requests between several servers.

## The client-server model

In a **client-server** network, dedicated servers provide services, and clients request them.

```
  client ----\
  client ------->  server (files, accounts, web, database)
  client ----/
```

**Advantages**
- **Central management:** user accounts, permissions, software updates and backups are handled in
  one place.
- **Security:** access can be controlled centrally; data is not scattered across users' machines.
- **Reliable data:** there is one authoritative copy of each file or database.
- **Scalable for services:** more powerful servers can be added as demand grows.

**Disadvantages**
- **Cost:** servers, specialist software and trained staff are expensive.
- **Single point of failure:** if the server fails and there is no backup, clients lose the service.
- **Bottleneck:** many simultaneous requests can overload the server or its network connection.

## The peer-to-peer model

In a **peer-to-peer (P2P)** network, there is no dedicated server. Each computer, or **peer**, can act
as both client and server, sharing its own resources directly with other peers.

```
  peer <------> peer
    ^  \      /  ^
    |   \    /   |
    v    peer    v
  peer <------> peer
```

**Advantages**
- **Low cost:** no dedicated server hardware or administrator is needed.
- **Easy to set up** for a small number of devices.
- **No single point of failure:** if one peer leaves, the others continue.
- **Shared load:** in large P2P file-sharing systems, each downloader also uploads, so capacity grows
  with the number of users.

**Disadvantages**
- **Decentralised management:** each peer must be configured and backed up separately.
- **Weaker security:** each user controls their own machine's sharing; one poorly secured peer puts
  others at risk.
- **Availability depends on peers:** a file is only available while a peer holding it is online.
- **Performance:** a peer's own work slows down when others access its resources.

## Comparison table (SL and HL)

| Criterion | Client-server | Peer-to-peer |
|---|---|---|
| Roles | Fixed: server provides, client requests | Each peer can provide and request |
| Management | Central | Distributed among users |
| Security | Centrally controlled | Depends on each peer |
| Cost | Higher | Lower |
| Failure | Server failure stops the service | Loss of one peer has limited effect |
| Backup | Central | Each peer separately |
| Typical use | Schools, businesses, websites, online banking | Small home networks, file sharing, some video-calling and update-distribution systems |

## Worked example: choosing a model for a scenario

**Scenario.** A small architecture office has five staff. They currently email drawings to each
other. They want to share files and a printer. The owner is worried about losing work if a computer
breaks.

A strong answer weighs the scenario's details, not the models in general:

- Five computers is small enough for **peer-to-peer** to work, and it would avoid the cost of a
  server.
- But the owner's main concern is **losing work**. In P2P each computer's files would need separate
  backups, and a drawing would be unavailable if the computer holding it were switched off.
- A modest **client-server** set-up (a single file server with automatic backups) would keep one
  authoritative copy of every drawing and back it up centrally.
- **Recommendation:** client-server, because protecting the drawings matters more to this office than
  the extra cost; a small file server is affordable at this scale.

## Worked example: an annotated model answer (HL)

**Question.** A school's network uses a proxy server. Explain **two** functions of the proxy server.
[4]

> The proxy server sits between the school's computers and the internet, so it can check each
> request against a list of blocked sites and refuse unsuitable ones **[1: function, filtering]**,
> protecting students and helping the school meet its safeguarding duties **[1: explanation in
> context]**. It also stores copies of frequently requested pages **[1: function, caching]**, so when
> many students open the same page in a lesson it is sent from the proxy instead of the internet,
> saving bandwidth and loading faster **[1: explanation in context]**.

## Hybrid systems

Many real systems combine the models. A video-calling or game service may use central servers to
log users in and find other players (client-server), then send audio or game data directly between
users (peer-to-peer). Recognising this in a case study shows understanding beyond the textbook
definitions.

## Common mistakes

- **Defining a server as "a big computer".** A server is defined by its role: providing a service.
- **Saying peer-to-peer has "no security".** Security exists but is managed by each peer, which makes
  it harder to enforce consistently.
- **Claiming client-server never fails.** It has a single point of failure unless backup servers are
  used.
- **Confusing DNS and DHCP.** DNS translates names to IP addresses; DHCP gives devices their IP
  addresses.
- **Generic comparisons.** In a scenario, decide which advantages and disadvantages actually matter
  to that user.

## Exam technique for the command words

- **Outline** the function of a server: what service it provides and to whom.
- **Compare and contrast** the models: use criteria (management, security, cost, failure) and address
  both models under each.
- **Evaluate** or **Recommend** a model: weigh the scenario's size, budget, data sensitivity and
  expertise, and finish with a justified choice.

## Practise and revise

- [Servers, client-server and peer-to-peer revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-client-server-peer-to-peer-revision-notes/)
- [Servers, client-server and peer-to-peer practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a2-client-server-peer-to-peer-practice/)
- [A.2 Networks revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2-revision-notes/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
