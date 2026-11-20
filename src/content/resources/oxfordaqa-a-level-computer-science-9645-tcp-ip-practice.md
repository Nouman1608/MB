---
title: "OxfordAQA A-Level Computer Science (9645): The Transmission Control Protocol/Internet Protocol -- Practice Questions"
seoTitle: "OxfordAQA 9645 TCP/IP Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.4
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "the-transmission-control-protocol-internet-protocol-oxfordaqa-alevel-cs"
description: "Thirteen original OxfordAQA 9645 questions on sub-topic 3.14.4 TCP/IP: layers, sockets, application protocols, subnet masks, IPv4 and IPv6, and DHCP."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.14.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the four layers, sockets, MAC addresses, application layer protocols, IP addresses and subnet masks, and DHCP.

Related pages: [TCP/IP study guide](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip/) ·
[TCP/IP revision notes](/resources/oxfordaqa-a-level-computer-science-9645-tcp-ip-revision-notes/)

## Section A

**1.** Name the four layers of the TCP/IP stack, from the top layer to the bottom layer. **[2]**

**2.** State which layer adds the source and destination IP addresses and which layer uses MAC addresses. **[2]**

**3.** State the purpose of the SSH protocol. **[1]**

## Section B

**4.** A programmer says: "Splitting networking into layers just makes it more complicated." Give **two** reasons why networking protocols use layers. **[2]**

**5.** Explain what a **socket** is and why a computer needs sockets. **[3]**

**6.** A packet travels from a laptop in one network to a server in another, passing through three routers. State whether the following change at each router and give a reason.

**(a)** the destination IP address **[1]**
**(b)** the MAC addresses in the frame **[2]**

**7.** Priya sends an email to Tomas. Describe the protocols used and the path the message takes from Priya's computer to Tomas reading it on his phone, where Tomas uses IMAP. **[5]**

**8.** Describe how FTP allows a user to transfer files and explain why SFTP is replacing FTP. **[3]**

**9.** A computer has the IP address 10.77.130.9 and the subnet mask 255.255.192.0.

**(a)** Calculate the network identifier, showing the binary working for the third octet. **[3]**
**(b)** Calculate the number of host bits and the number of addresses that can be given to hosts on this subnet. **[3]**

**10.** Two computers have addresses 192.168.20.45 and 192.168.20.70 and both use the subnet mask 255.255.255.192. Determine whether they are on the same subnet, showing your working. **[3]**

**11.** State whether each address is routable or non-routable: 172.20.4.5, 172.40.4.5, 192.168.1.9. Give the rule you used. **[4]**

**12.** Explain why IPv6 was introduced and state the number of bits in an IPv6 address. **[2]**

**13.** A laptop joins a school network and receives an IP address automatically using DHCP.

**(a)** Describe the four messages exchanged. **[4]**
**(b)** Give **two** advantages of DHCP over manual configuration. **[2]**

## Answers

**1.** Application, transport, internet, link **[2]** (award **[1]** for all four names and **[1]** for the correct order).

**2.** Internet layer adds IP addresses **[1]**; link layer uses MAC addresses **[1]**. **[2]**

**3.** To log in securely (encrypted) to a remote computer and execute commands on it, used for remote management **[1]**.

**4.** Any two of: each layer can be changed or replaced without affecting the others **[1]**; products from different manufacturers work together because each layer follows a standard **[1]**; a big problem is split into smaller, simpler ones that are easier to design and test **[1]**. **[2]**

**5.** A socket is the combination of an IP address and a port number **[1]**. The port identifies the program or service on the computer **[1]**, so the computer can hold many connections at once (for example a browser and an email client) and deliver each incoming segment to the right program **[1]**. **[3]**

**6. (a)** It does **not** change **[1]**: the destination IP address stays the same all the way to the server.
**(b)** The MAC addresses **do** change at each hop **[1]**, because each link between two devices uses the interfaces at its two ends, so the frame is rebuilt with new sender and receiver MAC addresses **[1]**. **[2]**

**7.** Award up to **[5]**: Priya's email client sends the message to her email server using SMTP **[1]**; her server passes it to Tomas's email server using SMTP **[1]**; Tomas's server stores it in his mailbox **[1]**; Tomas's phone retrieves it using IMAP **[1]**; IMAP leaves the message on the server, so all his devices show the same mailbox **[1]**.

**8.** FTP client software connects to an FTP server **[1]**, using anonymous access (no personal account) or authenticated access (username and password) **[1]**, and then files can be uploaded and downloaded. FTP does not encrypt data, so SFTP, which encrypts files for secure transmission, is replacing it **[1]**. **[3]**

**9. (a)** The mask keeps octets 1 and 2 (10.77) **[1]**. Third octet: 130 = 10000010 and 192 = 11000000, AND = 10000000 = 128 **[1]**. Fourth octet: mask 0 gives 0. The network identifier is **10.77.128.0** **[1]**. **[3]**
**(b)** The mask has 8 + 8 + 2 = 18 network bits, so 32 − 18 = **14 host bits** **[1]**. Addresses = 2¹⁴ = 16,384 **[1]**; usable by hosts = 16,384 − 2 = **16,382** **[1]**. **[3]**

**10.** For 192.168.20.45: last octet 45 AND 192 = 0, so network identifier 192.168.20.0 **[1]**. For 192.168.20.70: 70 AND 192 = 64, so network identifier 192.168.20.64 **[1]**. The identifiers differ, so they are on **different subnets** **[1]**. **[3]**

**11.** 172.20.4.5 is **non-routable** (inside the private range 172.16.x.x to 172.31.x.x) **[1]**. 172.40.4.5 is **routable** (outside the private range) **[1]**. 192.168.1.9 is **non-routable** (private range 192.168.x.x) **[1]**. The rule: private address ranges are not forwarded across the Internet, while public addresses are unique and routable **[1]**. **[4]**

**12.** IPv4 addresses were running out because so many devices are connected **[1]**; an IPv6 address has **128 bits** **[1]**. **[2]**

**13. (a)** The laptop broadcasts a **discover** message **[1]**; the DHCP server sends an **offer** of an address and settings **[1]**; the laptop sends a **request** to accept the offer **[1]**; the server sends an **acknowledgement** and the address is leased for a set time **[1]**. **[4]**
**(b)** Any two of: no typing mistakes or duplicate addresses **[1]**; settings managed centrally **[1]**; visiting devices connect automatically **[1]**; addresses are returned to the pool and reused **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.4 The Transmission Control Protocol/Internet Protocol.
