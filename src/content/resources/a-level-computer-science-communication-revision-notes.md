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
  - qualification: "a-level"
    topic: "communication"
    subtopic: "networks-including-the-internet"
description: "Recall notes for Cambridge AS Computer Science 9618 Topic 2: network models, topologies, cloud computing, media, Ethernet, CSMA/CD, IP addressing and DNS."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-09-03
featured: false
---

Related: [Communication study guide](/resources/a-level-computer-science-communication/)

Condensed, exam-focused notes for Topic 2 of Cambridge AS & A Level Computer Science (9618), 2027-2029 series.

## Network models

- **Client-server**: dedicated servers provide services (storage, authentication, printing) to clients.
- **Peer-to-peer**: all computers have equal status, each acting as both client and server.
- **Thin client**: relies heavily on the server for processing. **Thick client**: performs most
  processing locally.
- Exam questions typically ask you to justify which model suits a described situation, not just define
  the two.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-communication--06-comm-models.webp" width="900" height="1060" alt="Top: a client-server network. A central server is linked by two-way arrows to four client computers, and provides services to them. Bottom: a peer-to-peer network. Five computers are joined in a ring by two-way arrows and have equal status, each acting as both client and server." loading="lazy">
  <figcaption>In client-server a dedicated server provides services to clients; in peer-to-peer every computer has equal status and can be both.</figcaption>
</figure>


## LAN vs WAN and network topologies

- **LAN**: smaller geographic scope, typically single-site ownership. **WAN**: larger geographic scope,
  often spans multiple owners/locations.
- **Bus**: single shared line. **Star**: all traffic routed through a central switch — easier to isolate
  a faulty connection than bus. **Mesh**: multiple interconnections, high resilience. **Hybrid**:
  combination of topologies.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-communication--07-comm-topologies.webp" width="900" height="990" alt="Four small network diagrams. Bus: four computers hang off one shared line. Star: five computers each linked to a central switch. Mesh: five computers with every pair linked, ten links. Hybrid: two stars whose switches are joined." loading="lazy">
  <figcaption>A bus shares one line; a star routes everything through a central switch; a mesh links many pairs; a hybrid mixes topologies.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-communication--08-comm-lan-hardware.webp" width="900" height="940" alt="A LAN in a dashed box. A switch joins a server, a PC with a network interface card, and a wireless access point by cables. A laptop with a wireless NIC connects to the access point by radio waves. The switch is cabled to a router above, which links the LAN to other networks (a WAN) shown as a cloud." loading="lazy">
  <figcaption>Inside a LAN the switch joins devices; the router directs traffic between networks.</figcaption>
</figure>


## Ethernet and CSMA/CD

- **CSMA/CD** (Carrier Sense Multiple Access/Collision Detection): a device checks whether the shared
  medium is free before transmitting, and detects/recovers from a collision if two devices transmit
  simultaneously.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-communication--09-comm-csmacd.webp" width="900" height="960" alt="Top: three computers on a shared line; two send at once and their signals meet and collide at the middle. Bottom: a flow of steps. 1 Listen to check the line is free (if busy, keep waiting). 2 Transmit. 3 Was there a collision? If no, the data was sent. If yes, 4 detect and recover." loading="lazy">
  <figcaption>CSMA/CD: a device checks the shared medium is free before transmitting, and detects and recovers from a collision if two transmit at once.</figcaption>
</figure>


## Bit streaming

- **Real-time** streaming vs **on-demand** streaming.
- Bit rate and broadband speed determine performance; connects to Topic 1's sound sampling — higher
  sampling rate/resolution improves audio quality but requires a higher bit rate to stream smoothly.

## The internet, IP addressing and DNS

- **WWW** (linked documents/resources via HTTP) is distinct from the **internet** (the underlying global
  network infrastructure) — a commonly confused pair.
- **IPv4** vs **IPv6** address formats; **subnetting**; **public** vs **private** IP (security
  implications differ); **static** vs **dynamic** IP.
- **URL** locates a resource on the WWW; **DNS** translates the domain name within a URL into the IP
  address the network actually uses.

## Exam technique for this topic

The instruction "justify the use of X for a given situation" recurs across models, topologies and cloud
computing, so practise writing short justification answers — two or three sentences weighing a specific
benefit against a specific drawback for the scenario given — for each of these areas, since this is the
exam skill Cambridge is explicitly building toward throughout the topic. Keep the WWW/internet
distinction and the static/dynamic and public/private IP address distinctions especially sharp, since
these pairs of similar-sounding terms are common sources of confused or reversed answers under exam
pressure. When asked to describe a topology, always state how packets are transmitted between two hosts
for that specific topology, not just its shape, since that mechanism is what's actually assessed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-communication--10-comm-ip-public-private.webp" width="900" height="890" alt="The internet cloud is joined to a router that has one public IP address, 203.0.113.5. Inside the LAN three computers each have a private address: 192.168.1.10, 192.168.1.11 and 192.168.1.12. All addresses are illustrative." loading="lazy">
  <figcaption>A public IP address identifies a network to the internet; devices inside the LAN use private addresses.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-communication--11-comm-ip-static-dynamic.webp" width="900" height="800" alt="Two rows across three connections. A static address row shows the same address, 203.0.113.5, each time. A dynamic address row shows a different address each time: 203.0.113.9, 203.0.113.24 and 203.0.113.17. Addresses are illustrative." loading="lazy">
  <figcaption>A static IP address stays the same; a dynamic IP address can change from one connection to the next.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-communication--12-comm-url-dns.webp" width="900" height="920" alt="A URL typed into a browser has a domain name, www.example.com, and a resource. The browser asks a DNS server for the domain name. The DNS server answers with an IP address, 203.0.113.7. The browser then sends its request to the web server at that IP address. Names and addresses are illustrative." loading="lazy">
  <figcaption>DNS translates the domain name in a URL into the IP address used to route the request.</figcaption>
</figure>


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
infrastructure the web runs on. 5. Translates the domain name within a URL into the IP address used to route the
request.

## Frequently asked questions

**What is the difference between a router and a switch?**
A router directs traffic between networks, while a switch directs traffic within one network.

**What is the difference between the World Wide Web and the internet?**
The World Wide Web is the system of linked documents and resources accessed via HTTP. The internet is the underlying global network infrastructure that the web runs on.

**When should a device use a static public IP address?**
A web server that customers must always be able to reach needs a static public IP address. Internal devices such as employee laptops usually have dynamic private IP addresses assigned by DHCP.

**What is the difference between a public cloud and a private cloud?**
A public cloud uses shared infrastructure hosted by a third party. A private cloud uses dedicated infrastructure for one organisation.
