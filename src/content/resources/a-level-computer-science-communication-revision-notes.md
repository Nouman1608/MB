---
title: "A Level Computer Science: Communication — Revision Notes (Cambridge 9618)"
resourceType: "revision-notes"
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
description: "Condensed revision notes on networks, topologies, cloud computing, wired/wireless media, Ethernet, IP addressing and DNS for Cambridge AS & A Level Computer Science Topic 2 (9618)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-03
featured: false
---

Related: [Communication study guide](/resources/a-level-computer-science-communication/)

Condensed, exam-focused notes for Topic 2 of Cambridge AS & A Level Computer Science (9618), 2026 series.

## Network models

- **Client-server**: dedicated servers provide services (storage, authentication, printing) to clients.
- **Peer-to-peer**: all computers have equal status, each acting as both client and server.
- **Thin client**: relies heavily on the server for processing. **Thick client**: performs most
  processing locally.
- Exam questions typically ask you to justify which model suits a described situation, not just define
  the two.

## LAN vs WAN and network topologies

- **LAN**: smaller geographic scope, typically single-site ownership. **WAN**: larger geographic scope,
  often spans multiple owners/locations.
- **Bus**: single shared line. **Star**: all traffic routed through a central switch — easier to isolate
  a faulty connection than bus. **Mesh**: multiple interconnections, high resilience. **Hybrid**:
  combination of topologies.

## Cloud computing

- **Public cloud**: shared infrastructure, third-party hosted. **Private cloud**: dedicated
  infrastructure for one organisation.
- Advantages: accessibility, reduced local infrastructure needs. Disadvantages: dependence on internet
  connectivity, reliance on third-party data hosting.

## Wired/wireless media and LAN hardware

- Named media: copper cable, fibre-optic cable, radio waves (including WiFi), microwaves, satellites.
- Named hardware: switch, server, NIC, WNIC, WAP, cables, bridge, repeater, router.
- **Router** directs traffic *between* networks — distinct from a switch, which directs traffic *within*
  one network.

## Ethernet and CSMA/CD

- **CSMA/CD** (Carrier Sense Multiple Access/Collision Detection): a device checks whether the shared
  medium is free before transmitting, and detects/recovers from a collision if two devices transmit
  simultaneously.

## Bit streaming

- **Real-time** streaming vs **on-demand** streaming.
- Bit rate and broadband speed determine performance; connects to Topic 1's sound sampling — higher
  sampling rate/resolution improves audio quality but requires a higher bit rate to stream smoothly.

## The internet, IP addressing and DNS

- **WWW** (linked documents/resources via HTTP) is distinct from the **internet** (the underlying global
  network infrastructure) — a commonly confused pair.
- **IPv4** vs **IPv6** address formats; **subnetting**; **public** vs **private** IP (security
  implications differ); **static** vs **dynamic** IP.
- **URL** locates a resource on the WWW; **DNS** translates the human-readable URL into the IP address
  the network actually uses.

## Exam technique for this topic

The instruction "justify the use of X for a given situation" recurs across models, topologies and cloud
computing, so practise writing short justification answers — two or three sentences weighing a specific
benefit against a specific drawback for the scenario given — for each of these areas, since this is the
exam skill Cambridge is explicitly building toward throughout the topic. Keep the WWW/internet
distinction and the static/dynamic and public/private IP address distinctions especially sharp, since
these pairs of similar-sounding terms are common sources of confused or reversed answers under exam
pressure. When asked to describe a topology, always state how packets are transmitted between two hosts
for that specific topology, not just its shape, since that mechanism is what's actually assessed.

## Worked example: justifying a network model

Consider a small architecture firm of six employees needing to share design files and printers.
Client-server suits this scenario because a dedicated server provides centralised, controlled access to
shared files and printers, with backups and permissions managed in one place — important given the
firm's design files are valuable, sensitive work product. Peer-to-peer would suit a much smaller, more
informal setup (for instance, two freelancers occasionally sharing files) where the cost and complexity
of a dedicated server isn't justified. A strong exam answer names the specific feature of the scenario
(number of users, sensitivity of data, need for centralised control) that drives the recommendation,
rather than stating a network model is simply "better" in the abstract.

## Worked example: static vs dynamic and public vs private IP addresses

A company's web server needs a fixed, publicly reachable address so customers can always find it —
this calls for a **static public IP address**, since a dynamic address could change unexpectedly and
break the connection, and a private address would not be reachable from outside the company's own
network at all. By contrast, employee laptops on the internal network are usually assigned **dynamic
private IP addresses**: private because they don't need to be individually reachable from the internet
(improving security), and dynamic because addresses can be reused efficiently as devices join and leave
the network via DHCP. Practising this kind of paired reasoning — which combination of static/dynamic and
public/private suits which device and why — is a reliable way to avoid reversing these frequently
confused terms under exam pressure.

## Connecting back to Topic 1

This topic assumes familiarity with Topic 1's coverage of data representation and sound sampling, most
directly in the bit streaming sub-topic, where a higher sampling rate and resolution produce better
audio quality but require a higher bit rate to stream smoothly — revising the two topics together, not
as fully separate units, makes this connection concrete rather than abstract.

## Self-test

1. What is the key difference between a thin client and a thick client?
2. Which topology routes all traffic through a central switch?
3. What does CSMA/CD stand for and what does it do?
4. What is the difference between the WWW and the internet?
5. What is the role of DNS?

**Answers:** 1. Thin client relies heavily on the server for processing; thick client performs most
processing locally. 2. Star topology. 3. Carrier Sense Multiple Access/Collision Detection — checks
whether the medium is free before transmitting, and detects/recovers from collisions. 4. The WWW is the
system of linked documents/resources accessed via HTTP; the internet is the underlying global network
infrastructure the web runs on. 5. Translates a human-readable URL into the IP address used to route the
request.
