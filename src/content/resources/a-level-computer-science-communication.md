---
title: "A Level Computer Science: Communication (Cambridge 9618)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Communication"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "communication"
description: "LAN/WAN characteristics, client-server and peer-to-peer models, network topologies, cloud computing, wired and wireless media, Ethernet and CSMA/CD, IP addressing, and how URLs and DNS locate resources on the web -- the full content of Topic 2 Communication for Cambridge International AS & A Level Computer Science 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Topic 2 **Communication** is AS Level content in Cambridge
International AS & A Level Computer Science (9618), following [Topic 1
Information Representation](/resources/a-level-computer-science-information-representation/).
The whole topic consists of one dense sub-topic, 2.1 Networks including
the internet, which covers everything from how a LAN is physically
built to how a URL locates a specific resource on the web. It is
examined on Paper 1 alongside the rest of the "Computer systems"
content.

## Networking devices, LANs and WANs

You need to understand the purpose and benefits of networking devices,
and the characteristics that distinguish a **LAN** (local area
network) from a **WAN** (wide area network) -- broadly, geographic
scope and who owns the infrastructure.

## Network models: client-server, peer-to-peer, thin/thick client

Two network models are examined in detail:

- **Client-server**: dedicated server computers provide services (file
  storage, authentication, printing) to client computers on the
  network.
- **Peer-to-peer**: computers on the network have equal status, each
  able to act as both client and server.

For both, you need to know the roles of the different computers
involved (including subnetwork models), and the benefits and drawbacks
of each, since exam questions typically ask you to justify which model
suits a given situation rather than just define the two. A related
distinction is **thin-client versus thick-client**: a thin client
relies heavily on a server for processing, while a thick client
performs most processing locally.

## Network topologies

You need to understand the **bus**, **star**, **mesh** and **hybrid**
topologies, including how packets are transmitted between two hosts
for a given topology, and be able to justify the use of a specific
topology for a given situation. A star topology, for example, routes
all traffic through a central switch, making it easier to isolate a
single faulty connection than a bus topology, where all devices share
one communication line.

## Cloud computing

This covers **public** and **private** clouds, and the benefits and
drawbacks of cloud computing generally -- weighing accessibility and
reduced local infrastructure needs against dependence on internet
connectivity and third-party data hosting.

## Wired and wireless media, and LAN hardware

You need to understand the differences between, and implications of
using, wired versus wireless networks, and be able to describe the
characteristics of the specific media named in the syllabus: **copper
cable**, **fibre-optic cable**, **radio waves (including WiFi)**,
**microwaves** and **satellites**.

The hardware that supports a LAN is also named explicitly: switch,
server, network interface card (NIC), wireless network interface card
(WNIC), wireless access points (WAP), cables, bridge and repeater. You
also need to describe the role and function of a **router**
specifically, since it operates differently from the other named
devices (directing traffic between networks rather than within one).

## Ethernet and collision handling

You need to show understanding of **Ethernet** and how collisions
between transmissions are detected and avoided, specifically using
**Carrier Sense Multiple Access / Collision Detection (CSMA/CD)** --
the mechanism by which a device checks whether the shared medium is
free before transmitting, and detects and recovers from a collision if
two devices transmit simultaneously.

## Bit streaming

This covers the two named methods of bit streaming -- **real-time**
and **on-demand** -- and the importance of bit rate and broadband speed
to how well bit streaming performs. This content connects back to
Topic 1's coverage of sound sampling: a higher sampling rate and
resolution produce better audio quality but require a higher bit rate
to stream smoothly.

## The internet, IP addressing and DNS

The final block distinguishes the **World Wide Web (WWW)** (the
system of linked documents and resources accessed via HTTP) from the
**internet** (the underlying global network infrastructure the web
runs on) -- a distinction often confused in casual use but tested
precisely here. You also need to know the hardware that supports the
internet (modems, the Public Switched Telephone Network (PSTN),
dedicated lines, cell phone networks).

**IP addressing** is covered in detail: the format of an IP address
including **IPv4** and **IPv6**, the use of **subnetting**, how an IP
address is associated with a device on a network, the difference
between a **public** and a **private** IP address (and the security
implications of each), and the difference between a **static** and a
**dynamic** IP address.

Finally, you need to explain how a **Uniform Resource Locator (URL)**
is used to locate a resource on the WWW, and the role of the **Domain
Name Service (DNS)** in translating a human-readable URL into the IP
address a network actually uses to route the request.

## How to approach it

Because this topic packs a large amount of named terminology into one
sub-topic, organise your revision around the same structure used
above -- devices, models, topologies, media, and internet-specific
concepts -- rather than trying to hold the whole sub-topic as an
undifferentiated list. The "justify the use of X for a given
situation" instruction appears repeatedly across models, topologies
and cloud computing, so practise writing short justification answers
(two or three sentences, weighing a specific benefit against a
specific drawback for the scenario given) for each, since this is the
exam skill Cambridge is explicitly building toward throughout the
sub-topic. Keep the WWW/internet distinction and the static/dynamic
and public/private IP address distinctions especially sharp, since
these pairs of similar-sounding terms are common sources of confused
or reversed answers under exam pressure.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level
Computer Science (9618) syllabus for examination in 2026*: [official
syllabus
PDF](https://www.cambridgeinternational.org/Images/697372-2026-syllabus.pdf),
Subject content, section 2 "Communication". Verified 2026-09-02.
