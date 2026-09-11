---
title: "A Level Computer Science: Communication — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Communication"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "communication"
description: "Original exam-style practice questions with full worked answers on network models, topologies, CSMA/CD, IP addressing and DNS, for Cambridge International AS & A Level Computer Science (9618) Topic 2 Communication."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Communication study guide](/resources/a-level-computer-science-communication/) and
[revision notes](/resources/a-level-computer-science-communication-revision-notes/)

---

## Section A

**1.** Distinguish between a thin client and a thick client. **[2]**

**2.** State the difference between the World Wide Web and the internet. **[2]**

**3.** Name the two methods of bit streaming covered in this topic. **[2]**

## Section B

**4.** A small office network connects all its computers through a single central switch.

**(a)** Identify the network topology being described. **[1]**
**(b)** Explain one advantage of this topology compared with a bus topology, in terms of fault
isolation. **[3]**

**5.** Two devices on a shared network medium attempt to transmit data at the same time.

**(a)** Name the mechanism used to detect and manage this situation. **[1]**
**(b)** Describe how this mechanism works, including what happens before and after a collision is
detected. **[4]**

**6.** A user types a website's URL into a browser, and the page loads successfully a moment later.

**(a)** Explain the role of DNS in this process. **[3]**
**(b)** Explain why the browser needs an IP address rather than being able to use the URL directly to
route the request across the network. **[2]**

**7.** A business is deciding between a client-server and a peer-to-peer network model for its office.

**(a)** State one benefit of the client-server model for this scenario. **[1]**
**(b)** State one benefit of the peer-to-peer model for this scenario. **[1]**
**(c)** Recommend, with justification, which model would suit a business needing centralised control
over file access permissions. **[3]**

**8.** A home router is assigned a public IP address by the internet service provider, while each
device inside the home network is assigned a private IP address. Explain one security implication of
this arrangement. **[3]**

---

## Answers

**1.** A thin client relies heavily on a server for processing, performing little processing itself
[1]. A thick client performs most processing locally, relying on the server mainly for services such
as storage [1].

**2.** The World Wide Web is the system of linked documents and resources accessed via HTTP [1]; the
internet is the underlying global network infrastructure that the web runs on [1].

**3.** Real-time and on-demand [2].

**4. (a)** Star topology [1].
**(b)** In a star topology, all traffic is routed through a central switch, so if one connection or
cable fails, only the device on that single connection is affected and the rest of the network
continues working normally [1–2]. In a bus topology, all devices share one communication line, so a
fault on that shared line can disrupt communication for the whole network, making faults harder to
isolate to a single device [1].

**5. (a)** Carrier Sense Multiple Access / Collision Detection (CSMA/CD) [1].
**(b)** Before transmitting, a device using CSMA/CD listens to the shared medium to check whether it
is currently free [1]. If the medium is free, the device transmits its data [1]. If two devices
transmit at the same time and a collision is detected, both devices stop transmitting [1], and each
waits a random period of time before attempting to retransmit, reducing the likelihood of a repeated
collision [1].

**6. (a)** DNS translates the human-readable URL typed into the browser into the numerical IP address
the network actually needs to route the request to the correct server [2–3].
**(b)** Network hardware (such as routers) routes traffic between networks using numerical IP
addresses, not human-readable URLs, so the URL must first be translated into an IP address before the
request can actually be sent across the network to the correct destination [2].

**7. (a)** Client-server: centralised control over data, security, and access permissions, since
dedicated servers manage these functions for the whole network [1].
**(b)** Peer-to-peer: lower cost and simpler setup, since no dedicated server hardware or
administration is required [1].
**(c)** A client-server model is recommended [1], because centralised control over file access
permissions requires a dedicated server to manage and enforce those permissions consistently across
all computers on the network [1–2], which a peer-to-peer model cannot provide in the same way, since
every computer has equal status with no single point of centralised control [1].

**8.** Private IP addresses are not directly routable or visible from the wider internet, so devices
inside the home network are not directly addressable by external attackers in the same way a public
IP address would be [1–2]. Only the router's single public IP address is exposed to the internet,
meaning the router can act as a barrier between external traffic and the individual devices inside
the network, providing an additional layer of protection compared with every device having its own
directly reachable public IP address [1].

## A note on exam technique for this topic

Question 7 illustrates the "justify the use of X for a given situation" skill the study guide
identifies as central to this topic: a strong answer states a specific benefit and ties it directly
to the scenario's stated need (centralised control), rather than listing general advantages of each
model without connecting either to the business's actual requirement. The same justification habit
applies equally to topology and cloud computing questions on this topic, and question 8 shows the same pairing applied to the public/private IP address distinction the study guide flags as a common source of confused answers under exam pressure.
