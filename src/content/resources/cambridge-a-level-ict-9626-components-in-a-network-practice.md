---
title: "Cambridge A Level Information Technology (9626): Components in a network -- Practice Questions"
seoTitle: "A Level IT 9626 Network Components: Practice Questions"
resourceType: "practice-questions"
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
description: "Thirteen original Cambridge 9626 IT section 14.2 questions with answers on the role and operation of network components and how they work together."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Components in a network study guide](/resources/cambridge-a-level-ict-9626-components-in-a-network/) | [Communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/)

These questions are for **section 14.2 Components in a network** (Topic 14, A Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** State the purpose of a network interface card. **[2]**

**2.** Describe the purpose of a repeater. **[2]**

**3.** State **two** differences between a hub and a switch. **[2]**

**4.** Describe the role of a wireless access point. **[2]**

**5.** State what a router uses to decide where to send a packet. **[2]**

**6.** Explain why a gateway is needed when two networks use different protocols. **[2]**

## Section B

**7.** A cable run between two buildings is 450 metres. A single segment of the cable can carry a usable signal for 100 metres.

**(a)** Calculate the number of repeaters needed. Show your working. **[3]**

**(b)** Explain why a repeater is needed. **[2]**

**8.** Ten computers are connected to a 100 megabit per second hub.

**(a)** Calculate the approximate speed available to each computer if all ten send data at once. **[2]**

**(b)** Explain why replacing the hub with a switch improves performance. **[3]**

**(c)** Explain a security advantage of a switch over a hub. **[2]**

**9.** Explain the difference between a bridge and a router. **[4]**

**10.** A laptop in a library sends a request to a website. Describe how the network components work together to carry the request, from the laptop to the internet. **[6]**

**11.** A business has a wired office network with one switch and wants staff to use tablets and phones. Explain what must be added and how it works. **[4]**

**12.** A small company uses a router at the edge of its network. Explain **three** functions that the router may perform. **[3]**

**13.** Compare a bridge with a switch. **[3]**

---

## Answers

**1.** It connects a computer to a wired network [1] and converts data to signals suitable for the cable and back, using its unique MAC address to identify the computer [1]. **[2]**

**2.** Signals weaken and become distorted over distance [1]. A repeater receives the signal, cleans and amplifies it and sends it on, so that it can travel further [1]. **[2]**

**3.** A hub sends incoming data to every port, but a switch sends it only to the port of the destination device [1]. A hub shares the bandwidth between all devices, but a switch gives each device its own connection and reduces collisions; a switch also uses a MAC address table, but a hub does not [1]. **[2]**

**4.** It connects wireless devices to a wired network [1] by receiving radio signals from the devices and passing the data to the cable, and sending data from the cable to the devices by radio [1]. **[2]**

**5.** The destination IP address in the packet [1], which it looks up in its routing table to find the next hop [1]. **[2]**

**6.** Different protocols use different formats and rules, so devices on one network cannot understand data from the other [1]. A gateway translates the data and the addresses between the two protocols [1]. **[2]**

**7. (a)** 450 ÷ 100 = 4.5, so 5 segments [1]. Repeaters = number of segments − 1 [1] = 4 [1].

**(b)** The signal loses strength with distance (attenuation) [1], so it must be regenerated before it becomes too weak or distorted to read [1]. **[5]**

**8. (a)** 100 ÷ 10 [1] = 10 megabits per second [1].

**(b)** A switch learns the MAC addresses on each port [1] and sends data only to the destination port [1], so each device has its own full-speed connection and traffic does not collide [1].

**(c)** A hub sends all data to every device, so any device could read it [1]. A switch sends data only to the intended device, so it is harder for others to intercept it [1]. **[7]**

**9.** A bridge joins two segments of a network [1] and forwards frames using MAC addresses [1]. A router joins different networks [1] and forwards packets using IP addresses and a routing table [1]. **[4]**

**10.** The laptop's wireless NIC converts the request into radio signals [1] that are received by the wireless access point [1]. The access point passes the data to the switch, which sends it to the router using the MAC address [1]. The router reads the destination IP address and checks its routing table [1] and forwards the packet to the next router towards the internet [1]. A gateway translates if the next network uses a different protocol, and repeaters regenerate weak signals on long cables [1]. **[6]**

**11.** A wireless access point must be added [1] and connected by cable to the switch [1]. The tablets and phones use their wireless NICs to send radio signals to it [1], and it passes the data to the wired network and returns replies by radio [1]. **[4]**

**12.** Any three from: joins the company network to the internet [1]; forwards packets using the routing table [1]; shares one public IP address between devices using network address translation [1]; may include a firewall to filter traffic [1]; may allocate private IP addresses using DHCP [1]. **[3]**

**13.** Similarity: both use MAC addresses to decide where to forward data [1]. Difference: a bridge normally joins two segments, while a switch has many ports and connects many devices [1]. A switch can be thought of as a multi-port bridge, and it is faster because it forwards in hardware [1]. **[3]**

## Where marks are usually lost

- Writing "sends data around the network" for every component.
- Confusing hub and switch, or bridge and router.
- Forgetting that the number of repeaters is one fewer than the number of segments.
- Naming components in a trace but not saying what each does.
- Calling a wireless access point a router.
