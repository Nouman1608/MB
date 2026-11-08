---
title: "OxfordAQA IGCSE Computer Science: Computer Networks — Practice Questions (9210)"
resourceType: "practice-questions"
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
description: "Original practice questions with answers on LANs, WANs, wireless networks, topologies, protocols, security and TCP/IP layers for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Computer networks study guide](/resources/oxfordaqa-igcse-computer-science-computer-networks-study-guide/) | [Computer networks revision notes](/resources/oxfordaqa-igcse-computer-science-computer-networks-revision-notes/)

These questions cover section 3.5 of the OxfordAQA International GCSE Computer Science (9210) specification,
which is assessed on Paper 2.

---

## Section A: networks

**1.** Define the term **computer network**. **[1]**

**2.** A small business is deciding whether to network its eight computers. Discuss two benefits and two risks.
**[4]**

**3.** **(a)** Give two differences between a LAN and a WAN. **[2]**
**(b)** State the biggest example of a WAN. **[1]**

**4.** A college is connecting two buildings 800 metres apart, and computers within each building. State, with a
reason, the type of cable you would use for (a) the link between the buildings (b) the connections inside a
classroom. **[4]**

**5.** A café wants to offer customers a wireless network. Discuss one benefit and two risks of a wireless network
compared with a wired one. **[3]**

**6.** Explain what the term **WLAN** means and how it relates to Wi-Fi. **[2]**

## Section B: topologies

**7.** **(a)** Draw (or describe) a star topology with four computers and a printer. **[2]**
**(b)** Explain one advantage of a star topology over a bus topology. **[2]**
**(c)** Explain one disadvantage of a bus topology. **[2]**

## Section C: protocols

**8.** Define the term **protocol**. **[1]**

**9.** State the most suitable protocol for each task:
(a) uploading files to a web server (b) sending an email from a phone to a mail server (c) reading the same email
inbox on a phone and a laptop (d) paying for goods on a shopping website. **[4]**

**10.** Explain why a video call application might use UDP rather than TCP. **[3]**

**11.** Explain what is meant by saying that Ethernet is a "family of protocols". **[1]**

## Section D: security and the TCP/IP model

**12.** For each security method, explain what it is and give an example of when it would be used:
(a) authentication (b) encryption (c) firewall (d) MAC address filtering. **[8]**

**13.** Explain how two of these methods can work together to protect a school network. **[2]**

**14.** **(a)** Name the four layers of the TCP/IP model in order, starting with the layer nearest the user. **[1]**
**(b)** Describe the main function of the transport layer and the network layer. **[2]**
**(c)** State the layer at which each operates: (i) IMAP (ii) IP (iii) UDP. **[3]**
**(d)** State which layer contains the network interface card (NIC). **[1]**

---

## Answers

**1.** Two or more computers or devices connected together so that they can communicate and share resources [1].

**2.** Benefits (any two): files can be shared and stored centrally; a printer and Internet connection can be
shared; staff can communicate by email or messaging; central backups [2]. Risks (any two): malware can spread from
one computer to the others; hackers may gain unauthorised access to data; if the server or switch fails, everyone
is affected; setting up and managing the network costs money [2].

**3. (a)** Any two: a LAN covers a relatively small geographical area, a WAN a wide area [1]; a LAN is usually owned
and managed by a single person or organisation, a WAN is often under collective or distributed ownership [1].
**(b)** The Internet [1].

**4. (a)** Fibre-optic cable [1]: it carries data over long distances with high bandwidth and is not affected by
electrical interference [1].
**(b)** Copper cable [1]: it is cheaper and easier to install, and the short distances within a room do not need the
performance of fibre [1].

**5.** Benefit: customers can connect any device without cables and move around the café [1]. Risks (any two):
signals can be intercepted by anyone within range, so data could be read if not encrypted [1]; unauthorised users
might connect; slower or less reliable connection due to distance, walls or interference [1].

**6.** WLAN stands for wireless local area network -- the generic term for this type of network [1]. Wi-Fi is a
trademark for a family of related wireless networking protocols used to create a WLAN [1].

**7. (a)** Each of the four computers and the printer is connected by its own cable to a central switch [2] (1 for the
central switch, 1 for separate cables to each device).
**(b)** If one cable fails only that device is affected [1], whereas a break in a bus backbone stops the whole
network [1]. (Or: the switch sends data only to the destination device, so performance is better and there are fewer
collisions.)
**(c)** All devices share one cable, so data collisions increase and performance falls as traffic grows [1]; a fault
in the main cable stops every device communicating [1].

**8.** A set of rules that govern how data is transmitted and received by devices [1].

**9.** (a) FTP [1] (b) SMTP [1] (c) IMAP [1] (d) HTTPS [1].

**10.** UDP does not set up a connection or check that every packet arrives [1], so it has less delay than TCP [1]. In
a video call, a few lost packets cause only a brief glitch, while waiting for lost packets to be resent would make
the call lag [1].

**11.** Ethernet is not one single protocol but a group of related protocols for wired networks [1].

**12.** 2 marks each (1 for the explanation, 1 for a suitable example):
**(a)** Checking a user's identity before access is given, e.g. a username and password when logging on to a school
computer, or a code sent to a phone.
**(b)** Scrambling data using a key so that if it is intercepted it cannot be understood, e.g. encrypting Wi-Fi
traffic with WPA2, or HTTPS for online banking.
**(c)** Hardware or software that monitors incoming and outgoing traffic and blocks it according to rules, e.g.
blocking connections from unknown external addresses.
**(d)** Allowing or blocking devices based on the physical (MAC) address in their network adapter, e.g. only allowing
school-owned laptops to join the network.

**13.** E.g. MAC address filtering ensures only school devices can connect [1], and authentication then ensures only
registered students and staff can log on, so an attacker would need both an approved device and valid login
details [1].

**14. (a)** Application, transport, network, link [1].
**(b)** Transport: sets up the communication between the two hosts, which agree settings such as the size of packets
[1]. Network: addresses and packages the data for transmission and routes the packets across the network [1].
**(c)** (i) Application [1] (ii) Network [1] (iii) Transport [1].
**(d)** Link layer [1].

---

## Where marks are usually lost

- Answering "which protocol" questions with HTTP when the task needs security (HTTPS).
- Saying IMAP sends email: SMTP sends, IMAP retrieves.
- Giving security methods without an example of when each is used, when the question asks for both.
- Stating benefits of wireless without any risk when asked to "discuss".

## Frequently asked questions

**Does 9210 include POP3?**
No. The email protocols named in the 9210 specification are SMTP and IMAP.

**Do I need to know the alternative names for the TCP/IP layers?**
No. The specification uses application, transport, network and link, and says students will not be expected to
know the alternative names.
