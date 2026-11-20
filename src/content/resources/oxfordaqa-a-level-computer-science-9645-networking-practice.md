---
title: "OxfordAQA A-Level Computer Science (9645): Networking -- Practice Questions"
seoTitle: "OxfordAQA 9645 Networking Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "networking-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.14.2 Networking: network types, thin and thick clients, cables, CSMA/CD, Wi-Fi security and CSMA/CA."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.14.2 Networking** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: peer-to-peer and client-server networks, thin and thick clients, copper and fibre-optic cables, CSMA/CD, Wi-Fi, CSMA/CA with and without RTS/CTS, and wired against wireless networking.

Related pages: [networking study guide](/resources/oxfordaqa-a-level-computer-science-9645-networking/) ·
[networking revision notes](/resources/oxfordaqa-a-level-computer-science-9645-networking-revision-notes/)

## Section A

**1.** State what is meant by a **peer-to-peer** network. **[1]**

**2.** State what the abbreviation SSID stands for and describe its purpose. **[2]**

**3.** State **two** components that a laptop-based wireless network needs. **[2]**

## Section B

**4.** A small design studio of five people wants to share files and a printer. A large college wants to give 2,000 students login accounts, shared storage and automatic backups.

**(a)** Recommend a type of network for the studio and justify your choice. **[2]**
**(b)** Recommend a type of network for the college and justify your choice. **[2]**

**5.** A company is replacing the computers in its call centre with thin clients.

**(a)** Describe what is meant by a thin client. **[2]**
**(b)** State **two** advantages of using thin clients in this situation. **[2]**
**(c)** State **one** requirement the company must meet for the network. **[1]**

**6.** A university needs to connect two buildings that are 450 m apart. The link will carry data for hundreds of users.

**(a)** State which type of cable is most appropriate. **[1]**
**(b)** Give **three** reasons for your choice. **[3]**
**(c)** State **one** advantage of copper cable over the type you chose. **[1]**

**7.** Describe how CSMA/CD manages access to a shared wired network. **[5]**

**8.** A home Wi-Fi network is protected with WPA2 encryption, a disabled SSID broadcast and a MAC address allow list.

**(a)** Explain how each of the three measures helps to secure the network. **[3]**
**(b)** Explain why the MAC address allow list does not guarantee security. **[1]**

**9.** Describe how CSMA/CA with RTS/CTS is used when a laptop sends a large file through a wireless access point, and explain the problem that RTS/CTS helps to solve. **[5]**

**10.** A café is deciding whether to install wired sockets at each table or a wireless network for its customers.

**(a)** Give **two** advantages of wireless networking for the café. **[2]**
**(b)** Give **two** disadvantages of wireless compared with wired networking. **[2]**

## Answers

**1.** A network in which every computer has equal status; there is no dedicated server and any computer can both request and provide services **[1]**.

**2.** Service Set Identifier **[1]**. It is the name that identifies a wireless network, so devices can find and choose which network to join **[1]**. **[2]**

**3.** Any two of: a wireless network adapter (in the laptop) **[1]**; a wireless access point **[1]**; (a router or switch connecting the access point to the wider network). **[2]**

**4. (a)** **Peer-to-peer** **[1]**; it is cheap and simple for a few users, with no need for a dedicated server or administrator **[1]**. **[2]**
**(b)** **Client-server** **[1]**; the server can manage logins, shared storage, security and backups centrally for a large number of users **[1]**. **[2]**

**5. (a)** A thin client has minimal processing power and storage **[1]**; most processing is carried out by, and the software and files are held on, a server **[1]**. **[2]**
**(b)** Any two of: cheaper client hardware **[1]**; software installed and updated once, on the server **[1]**; easier central management and security **[1]**; less to go wrong at each desk. **[2]**
**(c)** A fast and reliable network connection to the server (the clients cannot work without it) **[1]**; or a powerful server able to run work for many clients.

**6. (a)** Fibre-optic **[1]**
**(b)** Any three of: the distance (450 m) is beyond the reach of common copper twisted pair **[1]**; fibre has higher capacity for hundreds of users **[1]**; higher speed **[1]**; unaffected by electrical interference between buildings **[1]**. **[3]**
**(c)** Copper is cheaper (cable and equipment) **[1]**.

**7.** Award up to **[5]**: a device with data first listens to check whether the medium is idle (carrier sense) **[1]**; if idle it begins transmitting **[1]**; while sending it monitors the medium to detect a collision **[1]**; if a collision is detected the devices stop and send a jam signal **[1]**; each waits for a random time before trying again, which makes a repeat collision unlikely **[1]**.

**8. (a)** WPA2 encrypts the transmitted data so that intercepted signals cannot be read without the key **[1]**. Disabling the SSID broadcast means the network name is not advertised, so it is not obvious to casual users **[1]**. A MAC allow list lets only devices with listed hardware addresses join **[1]**. **[3]**
**(b)** MAC addresses can be copied (spoofed) by an attacker who has observed the address of an allowed device **[1]**.

**9.** Award up to **[5]**: the laptop first checks that the channel is idle **[1]**; it sends a short Request to Send (RTS) to the access point **[1]**; the access point replies with Clear to Send (CTS), which other devices in range hear and so stay silent **[1]**; the laptop sends the file data and the access point returns an acknowledgement **[1]**. RTS/CTS solves the hidden terminal problem, where two devices cannot hear each other but both reach the access point, so they would transmit at the same time and collide **[1]**.

**10. (a)** Any two of: customers can move around and use their own devices anywhere **[1]**; no cabling is needed at every table **[1]**; easy to add more devices **[1]**. **[2]**
**(b)** Any two of: generally slower and less reliable **[1]**; signal can be affected by walls, distance and interference **[1]**; the signal can be received by anyone in range, so security needs more care **[1]**; devices share the channel, so performance falls as more connect. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.2 Networking.
