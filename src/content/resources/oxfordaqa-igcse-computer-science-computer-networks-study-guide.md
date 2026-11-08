---
title: "OxfordAQA IGCSE Computer Science (9210): Computer networks -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 5: Computer networks"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 5
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-networks"
description: "LANs and WANs, network hardware, topologies, client-server and peer-to-peer, protocols and the TCP/IP layers for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

A computer network is two or more devices connected so that they can share data and resources. Networks are everywhere, from a home router connecting a phone and a laptop to the internet itself. In OxfordAQA International GCSE Computer Science (9210) you need to describe the types of network, the hardware and layouts that build them, and the rules (protocols) that let different devices communicate. Most questions ask you to describe, compare or justify a choice for a given situation.

## Where this fits in the specification

Computer networks is Topic 5, following computer systems, because a network is made of computers and devices. It leads directly into cyber security, which looks at the threats to networks and how to defend them. It also uses the file-size and bits calculations from data representation, for example in working out how long a download will take.

## Types of network

A **local area network (LAN)** covers a small geographical area, such as a school, an office building or a home, and is usually owned and managed by one organisation. A **wide area network (WAN)** covers a large area, such as a country or the world, and usually uses infrastructure leased from telecommunications companies. The internet is the largest WAN. A WAN is slower and more expensive to run than a LAN but connects distant sites.

Networks can be **wired**, using copper (Ethernet) or fibre-optic cable, or **wireless**, using Wi-Fi radio signals or Bluetooth. Wired connections are generally faster, more stable and more secure. Fibre is faster and carries data further than copper. Wireless is convenient and lets devices move around, but signals can be interfered with and intercepted more easily, and range is limited.

## Network hardware

- A **network interface controller (NIC)** is the component that lets a device connect to a network.
- A **switch** connects devices on a LAN and sends data only to the device it is meant for, using the device's MAC address.
- A **router** connects different networks together, for example a LAN to the internet, and forwards packets towards their destination using IP addresses. A home "router" often combines a router, a switch and a wireless access point.
- A **wireless access point (WAP)** lets wireless devices join a wired network.

A **MAC address** is a unique identifier for the network card, set by the manufacturer. An **IP address** identifies a device on a network and can change depending on the network it joins. IPv4 addresses are four numbers from 0 to 255 separated by dots, for example 192.168.4.20. IPv6 was introduced because IPv4 does not provide enough addresses for the number of devices in use.

## Network models and layouts

In a **client-server** network, one or more powerful **servers** provide services (file storage, printing, email, security), and **clients** request them. It is easier to manage, back up and secure, because data is held centrally, but the server is expensive and, if it fails, the services stop. In a **peer-to-peer** network, every computer has equal status and can share files directly. It is cheap and simple, but harder to secure and back up, and slower when many devices are sharing.

The **topology** is how devices are arranged. In a **star** topology each device connects to a central switch. If one cable fails only that device is affected, new devices are easy to add, and performance stays consistent, but the central switch is a single point of failure and it needs more cable. In a **bus** topology all devices share a single backbone cable. It needs little cable and is cheap, but performance drops as more devices are added, since they share the same cable, and a break in the backbone can cut off the network.

## Protocols and layers

A **protocol** is an agreed set of rules for communication. Protocols you should know include:

| Protocol | Use |
|---|---|
| HTTP and HTTPS | Requesting and sending web pages; HTTPS is the encrypted version |
| FTP | Transferring files between computers |
| SMTP | Sending email |
| POP and IMAP | Receiving email (IMAP keeps messages on the server) |
| TCP | Splitting data into packets, numbering them and checking they arrive |
| IP | Addressing packets and routing them across networks |

Data is sent as **packets**. Each packet includes a header (with the source and destination addresses and a packet number) and the data. The packets may take different routes and arrive out of order, so TCP uses the numbers to put them back together and asks for any missing packet to be resent.

Protocols are organised into **layers**, and the TCP/IP model has four: the **application** layer (HTTP, FTP, SMTP), the **transport** layer (TCP), the **internet** layer (IP) and the **link** layer (the physical connection, including Ethernet and Wi-Fi). Each layer does one job and only communicates with the layer above and below. The benefit of layering is that one layer can be changed without affecting the others, and different companies can work on different layers while their products still work together.

The **domain name system (DNS)** translates a human-friendly name such as a website address into the IP address needed to find the server.

## Worked example 1: download time

A file of 450 megabytes is downloaded over a connection with a speed of 60 megabits per second. How long does the download take, assuming the full speed is used?

Convert the file size to bits: 450 MB x 8 = 3,600 megabits. Time = size / speed = 3,600 / 60 = 60 seconds. Note the units: file sizes are usually in bytes and speeds in bits per second, so the factor of 8 is the step most often missed. If the connection only delivers half the speed because several users are sharing it, the time doubles to 120 seconds.

## Worked example 2: choosing a network

A small office has six computers and one printer. The manager has no IT staff and wants low cost. Recommend a network and justify it.

A peer-to-peer network could work: with only six computers, there are no expensive servers to buy or maintain, and a printer can be shared directly. The weakness is that there is no central security or backup, so each user has to look after their own files. If the office were to grow to dozens of users, or hold sensitive client data that needs central backup and access control, a client-server network with a star topology would be better. A good answer states the recommendation, gives at least two reasons tied to the details given, and acknowledges a drawback.

## Worked example 3: reading an address

Is 192.168.300.5 a valid IPv4 address? No. Each of the four numbers must be from 0 to 255, and 300 is above 255. By contrast, 192.168.4.20 is valid because all four numbers are in range.

## Common mistakes

- Mixing up a switch and a router. A switch connects devices within a network; a router connects networks.
- Saying the internet and the World Wide Web are the same. The internet is the global network; the web is a service that runs on it.
- Forgetting that peer-to-peer does not mean "no security problems".
- Giving only an advantage when the question asks for a comparison.
- Confusing bits and bytes in a transfer-time calculation.
- Writing that TCP "sends the data". TCP splits data into packets, numbers them and checks delivery; IP addresses and routes them.
- Describing layers as separate networks.

## Exam technique

**Describe** needs several features; **explain** needs a reason; **compare** needs both items covered, with a link word such as "whereas". When asked to recommend a network, name the type, give two reasons from the scenario, and mention one drawback. For calculation questions, write the formula, convert units first, then substitute. For protocol questions, give the specific protocol name and its purpose. For layer questions, say which layer and what its job is.

## Check your understanding

1. State two differences between a LAN and a WAN. *A LAN covers a small area and is owned by one organisation; a WAN covers a large area and often uses leased infrastructure.*
2. What is the job of a switch? *To connect devices on a LAN and send data only to the intended device using its MAC address.*
3. Give one advantage and one disadvantage of a star topology. *Advantage: a cable fault affects only one device. Disadvantage: the central switch is a single point of failure.*
4. What is the purpose of HTTPS compared with HTTP? *HTTPS encrypts the data sent between the browser and the server.*
5. Why are packets numbered? *So the receiver can put them back in the right order and spot any that are missing.*
6. How long does a 120 MB file take to download at 40 megabits per second? *120 x 8 = 960 megabits; 960 / 40 = 24 seconds.*
7. Give one benefit of using layers of protocols. *A layer can be changed without affecting the others, so different developers can work independently.*
8. What does DNS do? *It converts a domain name into the IP address of the server.*

## Frequently asked questions

**What is the difference between a LAN and a WAN?**
A local area network covers a small geographical area, such as a school, office or home, and is usually owned by one organisation. A wide area network covers a large area, such as a country or the world, and usually uses infrastructure leased from telecommunications companies.

**What is the difference between a switch and a router?**
A switch connects devices within a LAN and sends data only to the device it is meant for, using its MAC address. A router connects different networks together, such as a LAN to the internet, and forwards packets between them.

**Is the internet the same as the World Wide Web?**
No. The internet is the global network, while the World Wide Web is a service that runs on it. Treating them as the same is a common mistake in OxfordAQA International GCSE 9210 answers.

**What are the four layers of the TCP/IP model?**
The TCP/IP model has an application layer, a transport layer, an internet layer and a link layer. A layer can be changed without affecting the others.

**How do you calculate a file download time?**
Convert the file size to bits by multiplying bytes by 8, then divide by the connection speed in bits per second. For example, 450 MB is 3,600 megabits, which takes 60 seconds at 60 megabits per second.
