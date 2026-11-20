---
title: "Cambridge A Level Information Technology (9626): Network protocols -- Practice Questions"
seoTitle: "A Level IT 9626 Network Protocols: Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.6
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "network-protocols"
description: "Thirteen original Cambridge 9626 IT section 14.6 questions with answers on protocols, switching, addressing, routing, layers and firewalls."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Network protocols study guide](/resources/cambridge-a-level-ict-9626-network-protocols/) | [Network protocols revision notes](/resources/cambridge-a-level-ict-9626-network-protocols-revision-notes/)

These questions are for **section 14.6 Network protocols** (Topic 14, A Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** Explain the term protocol and why protocols are necessary. **[3]**

**2.** State the purpose of **each** of the following protocols.

**(a)** ARP. **[1]**

**(b)** SMTP. **[1]**

**(c)** DHCP. **[1]**

**3.** Distinguish between Telnet and SSH. **[2]**

**4.** State **two** pieces of information found in the header of a packet. **[2]**

**5.** Explain why a MAC address and an IP address are both needed. **[3]**

## Section B

**6.** A file of 6,000 bytes is sent by packet switching. Each packet carries 400 bytes of data and a 25 byte header.

**(a)** Calculate the number of packets. **[1]**

**(b)** Calculate the total number of bytes sent. **[2]**

**(c)** Describe what happens at the destination when the packets arrive in a different order. **[2]**

**7.** A network uses 5 bits of an IPv4 address to identify the devices on it.

**(a)** Calculate the number of usable device addresses, given that two values are reserved. **[2]**

**(b)** State **one** reason why IPv6 was introduced. **[1]**

**8.** A router has the routing table shown.

| Destination network | Next hop |
|---|---|
| 10.1.0.0 | Router A |
| 10.2.0.0 | Router B |
| Default | Router C |

**(a)** State where a packet for 10.2.0.0 is sent. **[1]**

**(b)** State where a packet for 172.20.0.0 is sent and explain why. **[2]**

**(c)** Explain **one** advantage of dynamic routing over static routing. **[2]**

**9.** Compare connection mode and connectionless mode for sending data across a network, giving an example of each. **[4]**

**10.** Compare packet switching with circuit switching. **[6]**

**11.** Describe the function of each layer in the TCP/IP model. **[4]**

**12.** A company configures a firewall for its network. Explain **three** rules it might set, and a limitation of a firewall. **[5]**

**13.** A video-calling service chooses to send voice and video using UDP rather than TCP. Explain why, and state one disadvantage. **[3]**

---

## Answers

**1.** A protocol is a set of agreed rules for communication between devices [1]. They set out the format of data, how connections start and end, and how errors are handled [1]. They are necessary so that devices made by different makers and running different systems can understand each other [1]. **[3]**

**2. (a)** Finds the MAC address that matches a known IP address on the local network [1].

**(b)** Sends email from a client to a mail server, and between mail servers [1].

**(c)** Automatically gives a device an IP address and settings when it joins a network [1]. **[3]**

**3.** Telnet gives remote text control of another computer but does not encrypt anything, so passwords and commands can be read [1]. SSH does the same job but encrypts the connection, so it is secure [1]. **[2]**

**4.** Any two from: source address [1]; destination address [1]; packet number or sequence [1]; total number of packets [1]; protocol information [1]; time to live [1]. **[2]**

**5.** A MAC address identifies the network card and is used for delivery on the local network, such as by a switch [1]. An IP address is a logical address used to route packets between networks [1]. The IP address can change when a device moves, so it is mapped to the MAC address (using ARP) for the final delivery on the local network [1]. **[3]**

**6. (a)** 6,000 ÷ 400 = 15 [1].

**(b)** Headers = 15 × 25 = 375 [1]; total = 6,000 + 375 = 6,375 bytes [1].

**(c)** The packet numbers in the headers are used [1] to put the packets back in the correct order before the file is passed to the application [1].

**7. (a)** 2⁵ = 32 [1]; 32 − 2 = 30 [1].

**(b)** IPv4 has a limited number of addresses (about 4.3 billion) and they were running out [1].

**8. (a)** Router B [1].

**(b)** Router C [1], because there is no entry for 172.20.0.0, so the default route is used [1].

**(c)** Dynamic routing updates automatically when a link fails or changes [1], so packets take a new path without an administrator editing the tables [1].

**9.** Connection mode sets up a connection first and acknowledges data, re-sending anything lost [1]; it is reliable but slower, for example TCP for web pages [1]. Connectionless mode sends each packet independently with no set-up or acknowledgement [1]; it is faster but delivery is not guaranteed, for example UDP for live video [1]. **[4]**

**10.** Packet switching: the message is divided into packets, which may take different routes [1]; lines are shared between many users, so use is efficient [1]; packets may arrive late or out of order and must be reassembled [1]. Circuit switching: a dedicated channel is set up before data is sent [1] and reserved for the whole communication [1], so data arrives in order with steady delay [1]; the line is wasted when nothing is sent, and other users cannot use it [1]. A comparison point, such as the internet uses packet switching, while the old telephone network used circuits [1]. Maximum 6 marks. **[6]**

**11.** Application: services used by programs, such as HTTP and SMTP [1]. Transport: end-to-end delivery, dividing data into segments, with error checking in TCP [1]. Internet: addressing and routing of packets using IP [1]. Network access: sending frames over the physical medium using MAC addresses [1]. **[4]**

**12.** Any three rules with an explanation: block all incoming connections that were not requested from inside [1]; allow only web traffic on the ports used by HTTP and HTTPS [1]; block Telnet, allowing only SSH [1]; block traffic from a list of known harmful IP addresses [1]; apply a default-deny rule so that anything not listed is blocked [1]. Limitation: it cannot stop attacks using an allowed port, or threats from inside the network [1]. Maximum 5 marks. **[5]**

**13.** UDP has no set-up and no re-sending of lost packets [1], so there is less delay, which matters more in a live call than the occasional lost packet [1]. Disadvantage: lost packets are not recovered, so there may be gaps or distortion in sound and video [1]. **[3]**

## Where marks are usually lost

- Defining a protocol without saying what it is for.
- Mixing up POP3 and IMAP, or Telnet and SSH.
- Forgetting to add the headers to the file size when calculating the total sent.
- Calculating usable addresses without subtracting the two reserved ones.
- Comparing switching methods without a two-sided point (such as "whereas").
