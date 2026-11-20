---
title: "Cambridge A Level Information Technology (9626): Components in a network"
seoTitle: "A Level IT 9626 Components in a Network: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.2
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "components-in-a-network"
description: "Cambridge 9626 IT section 14.2 study guide: the role and operation of network interface cards, repeaters, hubs, switches, access points, gateways, bridges and routers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.2 Components in a network** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page explains each component in more depth. Use it with the [components in a network practice questions](/resources/cambridge-a-level-ict-9626-components-in-a-network-practice/).

## What section 14.2 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Role | State the purpose of network interface cards, wireless network interface cards, repeaters, hubs, switches, wireless access points, gateways, bridges and routers |
| Operation | Explain how each component carries out its role |
| Working together | Explain how the components work with each other in a network |

Two ideas explain most of the section.

1. A **network** needs a way to connect each device (the interface), a way to share the connection between devices (hubs and switches), and a way to join networks (bridges, routers, gateways).
2. Components work at different levels. Some deal only with **signals**, some with **local addresses** and some with **network addresses**.

## The components

### Network interface card (NIC)

A circuit board or chip inside a computer that connects it to a wired network. It has a unique **MAC address** stored at manufacture. It turns the computer's data into electrical or light signals for the cable, and turns incoming signals back into data. It checks whether a frame is addressed to its own MAC address and ignores the rest. Without a NIC, a computer cannot join a wired network.

### Wireless network interface card (WNIC)

A NIC that uses radio waves, with an antenna, to connect to a wireless network. Most laptops, phones and tablets have it built in. It also has a MAC address. It finds available networks, joins the one chosen (sending a password for security) and converts data to radio signals and back.

### Repeater

Signals become weaker and distorted over distance (**attenuation**). A repeater receives a signal, cleans it, amplifies it and sends it on, so the signal can travel further. It does not read the data or decide where it goes. It extends a cable or wireless range.

**Worked example 1: extending a cable.** Ethernet cable is limited to about 100 metres per segment. A link of 350 metres needs 350 ÷ 100 = 3.5, so 4 segments, and therefore **3 repeaters** between the segments. Each repeater regenerates the signal before it fades below a usable level.

### Hub

A hub has several ports to which devices connect. When data arrives at one port, the hub repeats it out of **every other port**. All devices receive all traffic, and only the intended device accepts it. The devices share the same bandwidth, and collisions happen when two devices send at once. Hubs are cheap and simple, but they are slow in busy networks and a security risk, as every device can see all the data.

### Switch

A switch also connects devices, but it learns which MAC address is on which port, building a **MAC address table**. When a frame arrives, the switch reads the destination MAC address and sends the frame only to the correct port. This reduces traffic, avoids collisions and gives each device its own full-speed connection.

**Worked example 2: hub against switch.** Eight computers are connected at 100 megabits per second. With a hub, they share the 100 megabits per second, so if all eight send at once each gets about 100 ÷ 8 = **12.5 megabits per second**. With a switch, each port has its own 100 megabits per second to the switch, and traffic to different destinations does not interfere. The switch also keeps data away from devices that are not the intended recipients.

### Wireless access point (WAP)

A device that connects wireless devices to a wired network. It receives radio signals from wireless NICs and passes them onto the cable, and sends data from the cable out by radio. It usually connects to a switch or router by cable. Several access points can cover a large building. In a home, the WAP is often built into the router.

### Bridge

A bridge connects two network **segments** or two LANs so that they behave as one network. It reads the MAC address of each frame and forwards it to the other segment only if the destination is on the other side. This reduces traffic and can connect networks of different types (for example wired and wireless). A bridge works with MAC addresses, not IP addresses.

### Router

A router connects different networks, for example a home LAN and the internet. It reads the **IP address** in each packet, looks up the destination in its **routing table**, and sends the packet to the next router on the best path. It can use **network address translation** so that many devices share one public address, and it often includes a firewall and DHCP. Routers make the internet work, since the internet is a set of networks joined by routers.

### Gateway

A gateway connects networks that use **different protocols or architectures** and translates between them. For example, a gateway links a company's internal network to a different type of network, or converts email formats between systems. In a home or office, the router is often the **default gateway**, the device to which a computer sends any traffic for another network.

## Comparing the components

| Component | Works with | Decides where data goes? | Key point |
|---|---|---|---|
| NIC / WNIC | The device itself | No | Connects a device; has a MAC address |
| Repeater | Signals | No | Regenerates a weak signal |
| Hub | Signals / frames | No | Sends data to every port |
| Switch | MAC addresses | Yes, by MAC address | Sends data only to the right port |
| Wireless access point | Radio and cable | No | Joins wireless devices to the wired network |
| Bridge | MAC addresses | Yes, between two segments | Joins and filters between segments |
| Router | IP addresses | Yes, by routing table | Joins different networks |
| Gateway | Protocols | Translates | Joins networks that use different protocols |

## How the components work together

Follow a request from a laptop to a web server:

1. The laptop's **wireless NIC** converts the request into radio signals and sends them to the **wireless access point**.
2. The access point passes the data to the **switch**, which reads the MAC address and forwards it to the router's port only.
3. The **router** reads the IP address, finds the next hop in its routing table, and sends the packet to the internet service provider, passing through other routers.
4. If the destination network uses a different protocol, a **gateway** translates.
5. On a long cable run, **repeaters** regenerate the signal.
6. The reply returns by the same route, and the **NIC** of the laptop accepts frames addressed to its MAC address.

Another example: a school joins its old and new buildings with a **bridge**, uses **switches** inside each room, connects staff wireless devices through **access points** and reaches the internet through a **router** that also acts as the default gateway.

## Common mistakes

- Saying a hub and a switch "do the same thing". A hub sends to all ports; a switch sends only to the destination port.
- Mixing up a router (joins networks using IP addresses) with a bridge (joins segments using MAC addresses).
- Saying a repeater "sends data to the right place". It only regenerates the signal.
- Describing a wireless access point as a router.
- Saying a gateway is the same as a router. A gateway translates between different protocols.
- Giving the role but not how it carries it out. The syllabus asks for both.

## Exam technique

- **State the role** in one sentence, then **explain how** in one or two.
- Use the key words: MAC address, IP address, routing table, regenerate, port, segment.
- For "how components work together" questions, trace data from device to destination and name each component in order.
- For a comparison, give a similarity and a difference, such as "both connect devices, but the switch sends data only to the destination".

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.2 Components in a network.
