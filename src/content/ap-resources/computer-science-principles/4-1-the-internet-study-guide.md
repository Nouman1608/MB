---
resourceId: "mb-ap-csp-4.1-study-guide"
title: "The Internet: Study Guide (Computer Science Principles 4.1)"
description: "How the Internet works: networks, paths, routing, bandwidth, open protocols, packets, IP, TCP and UDP, and the Internet versus the Web, with a path-finding and a bandwidth worked example."
course: "computer-science-principles"
unit: 4
topics: ["4.1"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 2.1 (data stored as bits)"
  - "Simple unit arithmetic: bits, bytes and seconds"
learningObjectives: 
  - "Define computing device, computing system, computer network, path, routing and bandwidth"
  - "Explain how the Internet works as interconnected networks using open protocols, and how packets carry data"
  - "Distinguish the Internet from the World Wide Web"
  - "Find paths in a network diagram and calculate transfer time from bandwidth"
skills: ["1", "4", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.1-revision-notes", "mb-ap-csp-4.1-practice", "mb-ap-csp-4.1-checklist"]
next: "mb-ap-csp-4.1-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A computer network is a group of interconnected computing devices that can send or receive data; a path is a sequence of directly connected devices from sender to receiver."
  - "The Internet is a network of interconnected networks using standardised, open protocols, so new devices can join easily."
  - "Data are sent as a stream of packets; each packet holds a chunk of data plus metadata for routing and reassembly, and packets may arrive in order, out of order or not at all."
  - "Routing on the Internet is usually dynamic, and the design is scalable."
  - "The World Wide Web is a system of linked pages, programs and files that uses the Internet and the HTTP protocol; it is not the same thing as the Internet."
faqs:
  - question: "Is the Internet the same as the World Wide Web?"
    answer: "No. The Internet is the global network of interconnected networks. The World Wide Web is a system of linked pages, programs and files that uses the Internet and the HTTP protocol. Email also uses the Internet without being part of the Web."
  - question: "What is a protocol?"
    answer: "An agreed-upon set of rules that specifies the behavior of a system. Internet protocols are open, so anyone can build a device that follows them and connect it."
  - question: "What happens if a packet is lost?"
    answer: "Packets may arrive in order, out of order or not at all. A protocol such as TCP can detect a missing packet and request it again; UDP does not, which suits uses where speed matters more than perfect delivery."
  - question: "What is bandwidth?"
    answer: "The maximum amount of data that can be sent in a fixed amount of time, usually measured in bits per second."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

## From one device to a network

A **computing device** is a physical artifact that can run a program: a computer, tablet, server, router or smart sensor. A **computing system** is a group of computing devices and programs working together for a common purpose. A **computer network** is a group of interconnected computing devices that can send or receive data. A network is itself a kind of computing system.

When one device sends data to another, the data travel along a **path**: a sequence of directly connected devices that begins at the **sender** and ends at the **receiver**. **Routing** is the process of finding a path from sender to receiver. In a big network there are usually several possible paths; routing chooses one.

**Bandwidth** is the maximum amount of data that can be sent in a fixed amount of time. It is usually measured in **bits per second**. Think of a pipe: a wider pipe carries more water per second. Bandwidth says how much *can* be sent per second, not how many bits arrive with no delay.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="net-title net-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="net-title">A small network with two possible paths from sender S to receiver T</title>
<desc id="net-desc">Six devices joined by lines. Sender S connects to router R1. R1 connects to R2 and to R3. R2 connects to receiver T. R3 connects to R4, and R4 connects to T. The upper path S, R1, R2, T has three links and is drawn with a thick line. The lower path S, R1, R3, R4, T has four links and is drawn dashed.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g stroke="#1d2b44" fill="none">
<line x1="90" y1="130" x2="200" y2="130" stroke-width="5"/>
<line x1="200" y1="130" x2="320" y2="60" stroke-width="5"/>
<line x1="320" y1="60" x2="520" y2="130" stroke-width="5"/>
<line x1="200" y1="130" x2="300" y2="200" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="300" y1="200" x2="420" y2="200" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="420" y1="200" x2="520" y2="130" stroke-width="2" stroke-dasharray="7 5"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="70" cy="130" r="22"/><circle cx="200" cy="130" r="22"/><circle cx="320" cy="60" r="22"/><circle cx="300" cy="200" r="22"/><circle cx="420" cy="200" r="22"/><circle cx="540" cy="130" r="22"/>
</g>
<g fill="#1d2b44" font-size="15" text-anchor="middle" font-weight="bold">
<text x="70" y="135">S</text><text x="200" y="135">R1</text><text x="320" y="65">R2</text><text x="300" y="205">R3</text><text x="420" y="205">R4</text><text x="540" y="135">T</text>
</g>
<g fill="#1d2b44" font-size="14">
<text x="352" y="42">path 1: S, R1, R2, T (3 links) thick line</text>
<text x="170" y="246">path 2: S, R1, R3, R4, T (4 links) dashed line</text>
<text x="20" y="175">sender</text><text x="515" y="170">receiver</text>
</g>
</svg>
<figcaption>Figure 1. Two paths from S to T. Routing is the process of choosing one of them. If router R2 failed, path 2 would still connect S to T.</figcaption>
</figure>

## What makes the Internet "the Internet"

The **Internet** is a computer network that consists of **interconnected networks** using **standardised, open (nonproprietary) communication protocols**. A **protocol** is an agreed-upon set of rules that specifies the behavior of a system. Because the protocols are **open**, anyone can build a device that follows them, and connecting a new device, as long as it can reach an Internet-connected device, is easy. Access to the Internet depends on the ability to connect a device to an Internet-connected device.

Two design properties matter:

- **Routing is usually dynamic.** The path is not decided in advance. Routers choose a route when each packet is ready to go, so a different route can be used if one is busy or broken.
- **The Internet is scalable.** **Scalability** is the capacity of a system to change in size and scale to meet new demands. The design allows millions of new devices to join without a redesign of the whole system.

## Packets

Information passes through the Internet as a **data stream**. A stream contains chunks of data, and each chunk is **encapsulated in a packet**. A packet holds:

- a **chunk of data**, and
- **metadata** used for routing the packet between the origin and the destination, and for **reassembling** the data (for example, where it is from, where it is going, and which part of the message it is).

Packets travel independently. They may arrive **in order, out of order, or not at all**. The receiving device uses the metadata to put the chunks back in the right order. **IP**, **TCP** and **UDP** are common protocols used on the Internet; broadly, IP handles addressing and getting packets toward their destination, TCP adds checks and resends so that data arrive complete and in order, and UDP skips those checks to send quickly. (The course asks you to know that these protocols exist and to reason about packets; it does not ask you to give protocol internals.)

## The Internet is not the Web

The **World Wide Web** is a **system of linked pages, programs and files**. It uses the Internet, and a protocol called **HTTP**, to fetch them. The Web is one service that runs over the Internet; email, video calls and online games also use the Internet. Saying "the Web is down" and "the Internet is down" mean different things.

## Worked example 1: paths and transfer time

**Scenario.** Use the network in Figure 1. A fictional student at S downloads a 25 MB file from the server T. Every link has a bandwidth of 50 megabits per second (50 Mbps). One byte is 8 bits.

**Task.** (a) How many paths join S and T? Which is shortest? (b) How long does the transfer take if the data travel along the shortest path and the link is the only limit? (c) What if the shortest path fails?

**(a) Paths.** Path 1: S, R1, R2, T (3 links). Path 2: S, R1, R3, R4, T (4 links). So there are **two paths**, and path 1 is shortest (3 links against 4).

**(b) Transfer time.** Convert the file to bits: 25 MB × 8 = **200 megabits**. At 50 megabits per second the time is 200 ÷ 50 = **4 seconds**. (Bandwidth uses *bits*; file sizes are usually given in *bytes*, so the factor 8 is easy to forget.)

**(c) If path 1 fails.** Routing is dynamic, so the packets can use path 2 instead. The data still arrive; the bandwidth of each link is the same, so the transfer still takes about 4 seconds, though each packet crosses one more link, so the delay for the first bits is slightly longer. If **both** paths were cut, the transfer would be impossible.

**Check.** If a link had a bandwidth of 100 Mbps the time would be 200 ÷ 100 = 2 seconds: doubling bandwidth halves the time.

## Worked example 2: packets, reordering and loss

**Scenario.** A fictional message "MEET AT NOON" (12 characters, with underscores for spaces below) is cut into four packets of three characters. Each packet carries its number.

| Packet number | Data chunk |
|---|---|
| 1 | MEE |
| 2 | T_A |
| 3 | T_N |
| 4 | OON |

**Task.** The packets arrive in the order 3, 1, 4, 2. (a) Can the receiver rebuild the message? (b) What if packet 4 never arrives and the protocol is TCP? UDP?

**(a) Out of order.** Yes. The packet number is metadata for reassembly. Sorting by number gives 1, 2, 3, 4: MEE, T_A, T_N, OON, which is **MEET_AT_NOON**.

**(b) A missing packet.** With **TCP**, the receiver notices that packet 4 is missing and asks for it again, so the complete message is eventually rebuilt (more slowly). With **UDP**, there is no such check: the receiver would have the first nine characters, `MEET AT N`, and the loss would not be repaired automatically. UDP suits uses such as a live video call, where a late packet is no use anyway and speed matters more than perfect delivery.

**Check.** The key idea is that packets are independent and can arrive in any order or not at all; the metadata plus the protocol decide how the receiver copes.

## Why break data into packets?

Splitting data into packets may seem like extra work, but it has real advantages.

- **Sharing links.** If a whole video had to travel as one block, nothing else could use the link until it finished. Packets from many senders can be interleaved on the same link.
- **Routing around trouble.** Each packet is routed independently, so if one path is slow or broken, later packets can use another path.
- **Resending only what is lost.** If one packet is lost, only that packet needs to be sent again, not the whole message.
- **Reassembly from metadata.** Each packet carries information such as where it came from, where it is going and which part of the message it is, so the receiver can put the pieces back together.

## A short guide to units

Bandwidth questions are mostly about getting units right. A **bit** is a single 0 or 1; a **byte** is 8 bits. Bandwidth is stated in **bits per second**, and file sizes are usually in **bytes**. Prefixes mean multiples: a kilo is a thousand, a mega is a million. So a 25 megabyte file is 25 × 8 = 200 megabits, and a link of 50 megabits per second carries it in 200 ÷ 50 = 4 seconds. A good habit is to write the unit beside every number as you calculate. If you find yourself dividing megabytes by megabits per second, stop and convert first. The result of a correct calculation has the unit seconds.

## Common misconceptions

- **"The Internet and the Web are the same."** The Web is a system of linked pages that uses the Internet.
- **"Data travel along one fixed route."** Routing on the Internet is usually dynamic; packets may take different paths.
- **"All the packets of a message arrive in order."** They may arrive in order, out of order or not at all.
- **"Bandwidth is speed of a single bit."** Bandwidth is the maximum amount of data per fixed time (bits per second).
- **"Protocols belong to one company."** The Internet's protocols are open, which lets any device join.
- **"File sizes and bandwidth use the same unit."** Files are often in bytes; bandwidth is in bits per second.
- **"A path is just the sender and receiver."** A path is a sequence of directly connected devices from sender to receiver.

## Where this leads

Next, [Fault Tolerance](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/) shows why having more than one path is valuable. Then [Parallel and Distributed Computing](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/) turns to sharing work across several computers. The security of data on networks returns in Unit 5, [Safe Computing](/advanced-course-resources/computer-science-principles/5-6-safe-computing-study-guide/). Practise with the [practice questions](/advanced-course-resources/computer-science-principles/4-1-the-internet-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/4-1-the-internet-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/4-1-the-internet-checklist/).
