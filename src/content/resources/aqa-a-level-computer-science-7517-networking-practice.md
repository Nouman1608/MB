---
title: "AQA A-Level Computer Science (7517): Networking -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "networking-7517"
description: "Original AQA 7517 section 4.9.2 questions with answers: network topologies, peer-to-peer and client-server networks, WiFi security and CSMA/CA with RTS/CTS."
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
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Networking study guide](/resources/aqa-a-level-computer-science-7517-networking/) | [Networking revision notes](/resources/aqa-a-level-computer-science-7517-networking-revision-notes/)

---

## Section A

**1.** State what is meant by a wireless access point. **[1]**

**2.** State the purpose of the Service Set Identifier (SSID). **[1]**

**3.** State **one** advantage of a physical star topology over a single shared cable. **[1]**

**4.** State what is meant by a client in a client-server network. **[1]**

**5.** State **one** weakness of using a MAC address allow list to secure a wireless network. **[1]**

## Section B

**6.** Explain the difference between a physical topology and a logical topology. **[2]**

**7.** Explain how a network that is physically wired as a star can behave logically as a bus. **[3]**

**8.** A shared bus network runs at 100 megabits per second. Ten computers are all sending data continuously and share the capacity equally.

**(a)** Calculate the average capacity available to each computer. **[1]**
**(b)** The same ten computers are connected to a switch, each by its own 100 megabit per second cable. Explain why the capacity available to two computers exchanging data can be higher than in part (a). **[2]**

**9.** A small business with six employees currently shares files by copying them between laptops.

**(a)** Describe how a peer-to-peer network could help. **[2]**
**(b)** The business grows to 80 employees. Explain why a client-server network would be more suitable. **[3]**

**10.** Describe **two** measures that can be used to secure a wireless network, and give a weakness of each. **[4]**

**11.** A user says: "If I turn off my SSID broadcast, my wireless network is secure." Evaluate this statement. **[3]**

**12.** Describe how CSMA/CA is used by a wireless device that wants to send a frame, when RTS/CTS is **not** used. **[4]**

**13.** Explain how Request to Send/Clear to Send (RTS/CTS) improves CSMA/CA, referring to the hidden node problem. **[4]**

**14.** A café wants to offer free internet access to customers and also run its own tills and stock system.

Discuss how the café could organise its network, including the type of network, the topology and the wireless security. **[6]**

---

## Answers

**1.** A device that connects wireless devices to each other and to a wired network [1].

**2.** It is the name that identifies a particular wireless network, so that devices can find and join it [1].

**3.** Any one from: a fault in one cable affects only one device; devices are easy to add; faults are easy to locate; with a switch, devices have dedicated links [1].

**4.** A computer that requests services from a server [1].

**5.** MAC addresses can be copied (spoofed) by an attacker who has seen them in transmitted traffic [1].

**6.** Physical topology is the actual layout of the cables and devices [1]; logical topology is the way that data flows between devices, which may differ from the layout [1].

**7.** The devices are cabled to a central hub (or similar device) [1] that repeats each frame to all of its ports, so all devices share one communication path [1] and use a bus protocol to control access to it (for example listening before sending) [1].

**8. (a)** 100 ÷ 10 = 10 megabits per second [1].
**(b)** The switch sends data only to the port of the destination [1], so each computer has a dedicated link and two computers exchanging data can use up to 100 megabits per second without sharing the link with the others [1].

**9. (a)** Each laptop shares the files or folders that others need, so the staff can open them directly over the network without copying [1]; no server needs to be bought, and all computers have equal status [1].
**(b)** With 80 users, files and security are hard to manage when data is spread across many machines [1]; a server gives central control of user accounts, permissions and back-ups [1]; a peer-to-peer network does not scale well and the machines would be slowed by many requests [1].

**10.** Any two measures, each with a weakness [2 marks each]. WPA or WPA2 encryption [1] scrambles the data so that intercepted frames cannot be read; weakness: a weak passphrase can be guessed [1]. Disabling SSID broadcast [1] stops the network name appearing in lists of networks; weakness: the name can be found from the traffic [1]. MAC address allow list [1] allows only approved devices to join; weakness: addresses can be copied [1].

**11.** The statement is incorrect [1]. Disabling the SSID only hides the name from casual users, and the name can still be found by anyone who captures traffic [1]. Security also needs strong encryption such as WPA2, possibly with a MAC allow list [1].

**12.** The device listens to the channel to see if it is idle (carrier sense) [1]; if it has been idle for a set time it sends the frame [1]; if the channel is busy it waits until it is free and then for a random back-off time before trying again [1]; the receiver sends an acknowledgement, and if none arrives the sender repeats the process [1].

**13.** The hidden node problem: two devices in range of the access point cannot sense each other, so both think the channel is free and transmit together [1]. With RTS/CTS the device first sends a short Request to Send [1]; the access point replies with a Clear to Send which all devices in range hear, including the hidden one [1]; they stay silent while the sender transmits, so collisions are reduced [1].

**14.** Indicative content (up to 6 marks, 1 each). The tills and stock system are on a separate wired network, ideally a physical star with a switch, for reliability and so one faulty cable affects one till [1]. A client-server arrangement with a central server for stock data and back-ups gives control and security [1]. A wireless access point provides customer WiFi [1], on a separate network or guest network from the tills so customers cannot reach business data [1]. Wireless security: WPA2 encryption [1] and a strong passphrase or controlled access; the SSID can be broadcast for customers to find [1]; a MAC allow list is not suitable for customers' own devices [1]. (Maximum 6 marks.)

---

## Where marks are usually lost

- Using "bus" and "star" without saying whether they are physical or logical.
- Treating a hub and a switch as the same.
- Calling SSID hiding or MAC filtering a complete security solution.
- Omitting the acknowledgement or the random back-off in CSMA/CA.
- Saying RTS/CTS completely prevents collisions.
