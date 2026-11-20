---
title: "Cambridge A Level Information Technology (9626): Networks -- Practice Questions"
seoTitle: "A Level IT 9626 Networks: Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.1
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "networks"
description: "Thirteen original Cambridge 9626 IT section 14.1 questions with answers on network types, topologies, uses and choosing a network for a scenario."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Networks study guide](/resources/cambridge-a-level-ict-9626-networks/) | [Communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/)

These questions are for **section 14.1 Networks** (Topic 14, A Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** Describe the difference between a LAN and a WAN. **[2]**

**2.** State what is meant by a peer-to-peer network. **[2]**

**3.** Distinguish between a physical topology and a logical topology. **[2]**

**4.** Identify **two** disadvantages of a bus topology. **[2]**

**5.** Explain the purpose of a virtual private network (VPN). **[2]**

**6.** State **two** uses of BitTorrent. **[2]**

## Section B

**7.** A computer room has six computers that are to be connected in a full mesh.

**(a)** Calculate the number of links needed. Show your working. **[2]**

**(b)** State the number of cables needed if the same six computers were connected in a star topology. **[1]**

**(c)** Explain **one** advantage of a mesh over a star topology. **[2]**

**8.** A file of 600 megabytes is sent across a network at 50 megabits per second.

**(a)** Calculate the time taken, in seconds, assuming the full speed is used. **[3]**

**(b)** Explain why the actual time will usually be longer. **[2]**

**9.** A 2 gigabyte (16,000 megabit) software update is downloaded by BitTorrent from five peers, each supplying 4 megabits per second.

**(a)** Calculate the time taken in seconds. **[2]**

**(b)** Calculate the time if the file came from one server at 4 megabits per second. **[1]**

**(c)** Give **one** risk of downloading a file from peers. **[1]**

**10.** A school has 800 students and 60 staff who log in to shared files and a shared printing system. Compare a peer-to-peer network with a client-server network for this school and recommend one. **[6]**

**11.** A firm has offices in London and Singapore, and staff who sometimes work from home. Recommend a combination of network types and justify your choice. **[6]**

**12.** Describe how a star network operates and explain **two** advantages of this arrangement. **[4]**

**13.** Explain how a content delivery service uses a network to deliver streaming video to viewers. **[3]**

---

## Answers

**1.** A LAN covers a small area such as a building, owned and managed by one organisation [1]. A WAN covers a large area, such as a country, using lines usually owned by telecommunications companies, and links LANs together [1]. **[2]**

**2.** A network in which every computer has equal status [1] and can act as both client and server, with no central server [1]. **[2]**

**3.** The physical topology is the actual layout of devices and cables [1]; the logical topology is the way data flows between devices, however the cables are arranged [1]. **[2]**

**4.** Any two from: a break in the main cable stops the whole network [1]; collisions slow the network as traffic increases [1]; difficult to find faults [1]; limited cable length [1]. **[2]**

**5.** It creates a private encrypted connection across a public network such as the internet [1], so that remote users or sites can connect securely to a private network and others cannot read the data [1]. **[2]**

**6.** Any two from: sharing large files [1]; downloading software or media from many users at once [1]; spreading load across many computers [1]. **[2]**

**7. (a)** Links = n × (n − 1) ÷ 2 [1] = 6 × 5 ÷ 2 = 15 [1].

**(b)** 6 [1].

**(c)** Data has several routes, so if one link or device fails, the others continue to communicate [1]; a star fails completely if the central device fails [1]. **[5]**

**8. (a)** 600 × 8 = 4,800 megabits [1]; 4,800 ÷ 50 [1] = 96 seconds [1].

**(b)** Other users share the network, which reduces the speed available [1]; extra data such as addresses and error checks is sent along with the file [1]. **[5]**

**9. (a)** 5 × 4 = 20 megabits per second [1]; 16,000 ÷ 20 = 800 seconds [1].

**(b)** 16,000 ÷ 4 = 4,000 seconds [1].

**(c)** For example: the file may contain malware, or may be corrupted, or copyright material may be shared [1]. **[4]**

**10.** Peer-to-peer: cheap, with no server needed [1]; but no central control of security or accounts [1]; no central backup [1]; slow and hard to manage for 860 users [1]. Client-server: central management of user accounts and permissions [1]; shared files and printing are controlled and backed up from a server [1]; copes with large numbers of users [1]; but servers and technical staff are costly [1]. Recommendation: client-server, since the number of users and the need for security justify the cost [1]. Maximum 6 marks. **[6]**

**11.** WAN [1] to link the London and Singapore offices, using leased lines or the internet [1]. LAN in each office [1] for fast sharing of files and printers [1]. VPN for staff at home [1], so that they can reach company files through an encrypted tunnel [1]. Client-server within the LANs for central security [1]. Maximum 6 marks. **[6]**

**12.** Each device is connected by its own cable to a central switch (or hub) [1]. Data from one device goes to the switch, which passes it to the destination device [1]. Advantages: a fault in one cable affects only one device [1]; devices can be added or removed without disturbing the others [1]; with a switch, traffic is sent only to the intended device so speed is high [1]. Any two advantages. **[4]**

**13.** Copies of popular video are stored on servers placed in many locations [1]. A viewer is sent the video from the nearest server, which shortens the path [1], so the video starts quickly with little delay, and no single server is overloaded [1]. **[3]**

## Where marks are usually lost

- Describing LAN and WAN by size only, without ownership or the type of lines.
- Mixing up physical and logical topology.
- Forgetting to multiply by 8 when converting megabytes to megabits.
- Stating advantages that are true of every network, such as "it shares files".
- Recommending a network without linking it to the scenario's size and needs.
