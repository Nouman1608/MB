---
title: "Cambridge A Level Computer Science (9618): Circuit Switching, Packet Switching -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14: Communication and internet technologies"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 14.2
syllabusTopics:
  - qualification: "a-level"
    topic: "communication-and-internet-technologies"
    subtopic: "circuit-switching-packet-switching"
description: "Original 9618 practice questions with mark-scheme answers on circuit switching, packet switching, packet headers, routers and choosing a method."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Circuit switching and packet switching study guide](/resources/cambridge-a-level-computer-science-9618-circuit-switching-packet-switching/) · [Circuit switching and packet switching revision notes](/resources/cambridge-a-level-computer-science-9618-circuit-switching-packet-switching-revision-notes/)

---

## Section A

**1.** State what is meant by circuit switching. **[2]**

**2.** Identify **three** items of data held in the header of a packet and state the purpose of each. **[3]**

**3.** State **two** benefits of circuit switching. **[2]**

**4.** State **two** drawbacks of packet switching. **[2]**

**5.** A packet has a hop limit of 3 when it leaves the sender. It passes through four routers on its way. State what happens to the packet, and why the hop limit is used. **[2]**

**6.** A message of 4,800 bytes is sent across a network that carries 600 bytes of payload in each packet. Each packet also has a 40-byte header.

**(a)** Calculate the number of packets needed. **[1]**

**(b)** Calculate the total number of bytes transmitted, including headers. **[2]**

## Section B

**7.** Describe the function of a router in packet switching. **[4]**

**8.** A journalist sends a long article and some photographs from a hotel to a newspaper office using the internet.

Explain how packet switching is used to pass the article and photographs across the internet. **[6]**

**9.** Explain why packet switching is more resilient than circuit switching when a link in the network fails. **[3]**

**10.** A bank has two offices in the same city. They exchange account data continuously throughout the working day. The bank is choosing between a circuit-switched dedicated link and sending data over the internet using packet switching.

**(a)** Justify why a circuit-switched link may be suitable for this bank. **[3]**

**(b)** Give **one** drawback to the bank of using the circuit-switched link. **[1]**

**11.** A video-calling app sends sound and pictures over a packet-switched network. Users sometimes see the picture freeze, even though the same network downloads files without errors.

Explain why this happens. **[3]**

**12.** Compare circuit switching and packet switching under the headings **use of network capacity**, **order of arrival** and **effect of high traffic**. **[6]**

---

## Answers

**1.** A dedicated path (circuit) is set up between the sender and receiver **before** any data is sent [1]; the path is reserved for that communication only, used for all its data and released at the end [1].

**2.** Any three, 1 mark each for item and purpose:
- Source IP address: identifies the sender, so replies and resend requests can be returned [1].
- Destination IP address: lets each router decide where to forward the packet [1].
- Sequence number: lets the receiver put the packets back into the correct order [1].
- Hop limit / time to live: stops undeliverable packets circulating for ever [1].
- Checksum: lets the receiver detect whether the packet has been corrupted [1].

**3.** Any two: bandwidth is guaranteed for the whole communication [1]; delay is constant / predictable [1]; data arrives in the order it was sent, so no reassembly is needed [1].

**4.** Any two: packets can arrive out of order and must be reassembled [1]; delay varies because packets queue at busy routers [1]; packets can be lost and need resending [1]; each packet carries header overhead [1]; uneven arrival is a problem for real-time data [1].

**5.** Each router reduces the hop limit by 1; it reaches 0 at the third router, which **discards** the packet, so it never reaches the fourth router [1]. The hop limit stops packets that cannot be delivered from circulating round the network for ever, wasting capacity [1].

**6. (a)** 4,800 ÷ 600 = **8 packets** [1].

**(b)** Header bytes = 8 × 40 = 320 [1]; total = 4,800 + 320 = **5,120 bytes** [1].

**7.** Any four:
- It receives each packet arriving from a connected network [1].
- It reads the destination IP address in the packet header [1].
- It looks up the destination in its routing table [1] to decide the next hop, the best next router towards the destination [1].
- It can choose a different route if a link is busy or has failed [1].
- It reduces the hop limit and discards the packet if the limit reaches zero [1].
- It forwards the packet onto the chosen link [1].

**8.** Any six, in a logical order:
- The article and photographs are split into packets [1].
- Each packet is given a header with the source and destination IP addresses [1] and a sequence number [1].
- Each packet is sent independently onto the internet [1].
- At each router, the destination address is read and the routing table is used to forward the packet to the next hop [1].
- Packets can take different routes, depending on traffic, and may arrive out of order [1].
- At the newspaper office, the packets are checked for errors and reordered using the sequence numbers [1].
- Missing or corrupted packets are requested again (resent) [1].
- The article and photographs are then reassembled complete [1].

**9.** In circuit switching all data uses the one reserved path, so if a link on it fails, the communication is lost and must be set up again [1]. In packet switching no path is reserved; routers can send later packets by a different route that avoids the failed link [1], and any packets lost at the failure are detected as missing and resent, so the message still arrives complete [1].

**10. (a)** Any three, linked to the bank:
- The data flows continuously all day, so the reserved capacity would not sit idle / be wasted [1].
- Bandwidth is guaranteed, so the transfer rate does not fall when other traffic is heavy [1].
- Delay is constant and data arrives in order, so account updates are not held up or reordered [1].
- The dedicated path is not shared with other internet traffic [1].

**(b)** Any one: if a link on the path fails, the connection is lost until a circuit is set up again [1]; the reserved capacity must be paid for even at quieter times [1].

**11.** In packet switching, each packet can take a different route and may queue at busy routers, so packets arrive with **variable delay** and out of order [1]. A file download simply waits for late packets and resends lost ones, so it ends up complete [1]. A live call needs each packet at a particular moment; a packet that arrives late is too late to be shown, so the picture freezes until later packets arrive [1].

**12.** Two marks per heading, one for each method:
- **Use of network capacity**: circuit switching reserves capacity for one communication, so it is wasted when idle [1]; packet switching shares links between many users, so capacity is used efficiently [1].
- **Order of arrival**: in circuit switching data arrives in the order sent along one path [1]; in packet switching packets may arrive out of order and are reassembled using sequence numbers [1].
- **Effect of high traffic**: in circuit switching an established call keeps its guaranteed bandwidth, but new connections may be refused when capacity is all reserved [1]; in packet switching everyone can still send, but packets queue at routers so delay rises and some may be lost and resent [1].

---

## Where marks are usually lost

- Writing that all packets in a packet-switched message follow the same route.
- Saying the router reassembles the message; that is done by the receiving host.
- Listing header fields without saying what each one is for.
- Answering a "justify" question with general advantages that do not mention the scenario.
- Forgetting to add header bytes when a question asks for the total transmitted.
- Describing only half of a comparison, so each heading earns one mark instead of two.
