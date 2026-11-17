---
title: "IB DP Computer Science A.2: Networks -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "A.2 -- Networks"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.2
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-2"
description: "Twelve original questions on network devices, protocols, the TCP/IP model, packet switching and bandwidth for IB DP Computer Science A.2, with worked answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the questions, the HL-only label on Question 10 and the mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [A.2 Networks study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2-revision-notes/).

## Section A

**1.** Define the term protocol. **[1]**

**2.** Distinguish between a client and a server, giving an example of each. **[2]**

**3.** State the function of a wireless access point and of a modem. **[2]**

**4.** Identify the protocol used:
**(a)** to give a laptop an IP address when it joins a network. **[1]**
**(b)** to send a password securely to a website. **[1]**

**5.** Outline **two** differences between TCP and UDP. **[2]**

**6.** Define bandwidth and state the unit in which it is measured. **[2]**

## Section B

**7.** A school network connects 300 computers in several buildings to the internet. Explain the
role of a switch, a router and a hardware firewall in this network. **[6]**

**8. (a)** Describe how a message is sent across the internet using packet switching. **[4]**
**(b)** Explain **two** advantages of packet switching. **[2]**

**9.** A 1.2 GB video file is uploaded over a connection with a bandwidth of 40 Mbps.
**(a)** Calculate the minimum upload time, showing your working. Take 1 GB as 1000 MB. **[2]**
**(b)** Explain why the actual upload is likely to take longer. **[1]**

**10.** *(HL)* Explain how the four layers of the TCP/IP model work together when an email is sent,
including the idea of encapsulation. **[6]**

**11.** Compare the suitability of TCP and UDP for an online multiplayer game and for a banking app.
**[4]**

**12.** A café offers free Wi-Fi from one wireless access point at the front of the room. Customers
at the back say the connection keeps dropping, and everyone finds it slow at lunchtime.
**(a)** Explain the likely cause of each problem. **[4]**
**(b)** Suggest **one** solution for each problem. **[2]**

---

## Answers

**1.** An agreed set of rules governing how data is communicated between devices [1].

**2.** A client requests a service and a server provides it [1]; for example, a browser on a laptop
(client) requests a page from a web server (server) [1].

**3.** WAP: lets wireless devices connect to a wired network [1]. Modem: converts digital data into a
signal that can be sent over a line, and back again [1].

**4. (a)** DHCP [1].
**(b)** HTTPS [1].

**5.** Any two, [1] each: TCP sets up a connection, UDP does not; TCP acknowledges and resends lost
data, UDP does not; TCP delivers data in order, UDP may not; UDP has lower overhead and delay. Maximum 2.

**6.** The maximum rate of data transfer over a connection [1], measured in bits per second (e.g.
Mbps) [1].

**7.** Two marks for each device, one for its function and one for its use in this network:
- Switch: connects devices within a LAN and forwards frames only to the intended device using MAC
  addresses [1]; each building's computers connect to a switch, reducing unnecessary traffic [1].
- Router: forwards packets between networks using IP addresses [1]; it connects the school's network
  to the internet and between buildings' networks if they are separate [1].
- Firewall: inspects incoming and outgoing traffic and blocks it according to rules [1]; it protects
  the school's computers from unauthorised access and can block unsuitable sites or services [1].

**8. (a)** One mark per point, up to 4:
- The message is split into packets [1].
- Each packet has a header with source and destination IP addresses and a sequence number [1].
- Routers forward each packet independently by the best available route [1].
- Packets may arrive out of order and are reassembled using the sequence numbers [1].
- Missing packets are requested again (with TCP) [1].
Maximum 4.
**(b)** Any two, [1] each: lines are shared efficiently between many users; packets can be rerouted
around failures or congestion; no dedicated path has to be reserved; it scales to very large
networks. Maximum 2.

**9. (a)** 1.2 GB = 1200 MB × 8 = 9600 megabits [1]; 9600 ÷ 40 = 240 seconds (4 minutes) [1].
**(b)** Any one [1]: congestion from other users; protocol overheads such as headers and
acknowledgements; retransmission of lost packets; the server or connection running below its maximum.

**10.** One mark per point, up to 6:
- Application layer: the email program formats the message using an email protocol [1].
- Transport layer: TCP splits the data into segments, adds port numbers and sequence numbers [1].
- Internet layer: IP adds source and destination IP addresses so packets can be routed [1].
- Network interface layer: frames are created with MAC addresses and sent over the physical medium [1].
- Encapsulation: each layer adds its own header to the data from the layer above [1].
- At the receiver, each layer removes its header and passes the data up; TCP checks for missing
  segments and requests them again, so the message arrives complete [1].
- Each layer only needs to communicate with the layers directly above and below, so layers can change
  independently [1].
Maximum 6.

**11.** Game: UDP is more suitable [1] because low delay matters more than receiving every update, and
a late resent packet would be out of date [1]. Banking app: TCP is more suitable [1] because every
piece of data must arrive complete and in order, and errors could cause wrong transactions [1].

**12. (a)** Dropping at the back: the signal weakens with distance and obstacles (attenuation), so
devices far from the access point lose connection [2]. Slow at lunchtime: many users share the same
bandwidth, so congestion reduces each user's speed [2].
**(b)** Any one for each problem, [1] each: add a second access point or move it to the centre of the
room; upgrade the internet connection's bandwidth or limit the bandwidth each device can use.

## Where marks are usually lost

- Describing a switch and a router as if they do the same job.
- Forgetting to multiply by 8 in bandwidth calculations.
- Naming a protocol without justifying the choice for the scenario.
- At HL, listing the layers without saying how they work together.

## Frequently asked questions

**Is Question 10 for SL students?**
It is labelled HL because the function of the TCP/IP layers is HL only; SL students should still be
able to say which layer a device works at.

**Are these real IB questions?**
No. They are original practice questions.
