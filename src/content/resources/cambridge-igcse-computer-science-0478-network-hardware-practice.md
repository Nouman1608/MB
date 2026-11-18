---
title: "Cambridge IGCSE Computer Science (0478): Network hardware -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3.4
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
    subtopic: "network-hardware-0478"
description: "Original questions with answers on Cambridge IGCSE Computer Science 0478 section 3.4: NICs, MAC addresses, static and dynamic IP, IPv4, IPv6 and routers."
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

Related: [Network hardware study guide](/resources/cambridge-igcse-computer-science-0478-network-hardware/) and [Network hardware revision notes](/resources/cambridge-igcse-computer-science-0478-network-hardware-revision-notes/)

---

## Section A

**1.** State the hardware component a computer needs to access a network. **[1]**

**2.** State the purpose of a MAC address. **[1]**

**3.** A NIC has the MAC address `B8:27:0A:6C:41:D3`. Identify the manufacturer code and the serial code. **[2]**

**4.** State how many bits are used in each of: a MAC address, an IPv4 address and an IPv6 address. **[3]**

**5.** Convert the hexadecimal pair `4F` from the MAC address `00:4F:12:A0:B1:C2` into 8-bit binary. **[2]**

**6.** Identify which of these is a valid IPv4 address, and give a reason why each of the other two is not: `10.45.256.7`, `172.16.0.254`, `192.168.1`. **[3]**

## Section B

**7.** Describe the structure of a MAC address. **[4]**

**8.** Explain the difference between a static IP address and a dynamic IP address. **[2]**

**9.** A school has a web server that students reach from home. Explain why the server should have a static IP address. **[2]**

**10.** Explain **two** differences between IPv4 and IPv6. **[4]**

**11.** Explain why IPv6 was introduced. **[2]**

**12.** Describe the role of a router in a home network. **[3]**

**13.** A laptop is used at a café in the morning and at an office in the afternoon. Explain what happens to its MAC address and its IP address. **[4]**

**14.** A student says: "My MAC address and my IP address do the same job, so a computer only needs one of them." Explain **two** ways in which the two addresses differ. **[4]**

---

## Answers

**1.** A network interface card (NIC) [1].

**2.** To uniquely identify a device (its NIC) on a network [1].

**3.** Manufacturer code: `B8:27:0A` [1]; serial code: `6C:41:D3` [1].

**4.** MAC address: 48 bits [1]; IPv4: 32 bits [1]; IPv6: 128 bits [1].

**5.** 4 = `0100` and F = `1111` [1], giving `01001111` [1].

Working note: convert each hex digit to its own 4-bit group. F is 15 in denary, which is 8 + 4 + 2 + 1, so all four bits are 1. There is no need to go via denary for the whole pair.

**6.** `172.16.0.254` is valid [1]. `10.45.256.7` is not valid because 256 is greater than 255, the largest value one byte can hold [1]. `192.168.1` is not valid because it has only three numbers instead of four [1].

**7.** It is 48 bits long [1], usually written as 12 hexadecimal digits in six pairs [1]. The first half is the manufacturer code, identifying who made the NIC [1]. The second half is the serial code, identifying the individual card [1].

**8.** A static IP address stays the same every time the device connects [1], whereas a dynamic IP address is allocated automatically and can change each time the device connects [1].

**9.** Students' computers need to find the server at the same address every time [1]; if the address changed, links or settings pointing to it would stop working [1].

**10.** IPv4 is 32 bits, but IPv6 is 128 bits [1], so IPv6 provides far more possible addresses [1]. IPv4 is written as four denary numbers separated by full stops [1], while IPv6 is written as eight groups of hexadecimal digits separated by colons [1].

**11.** The number of devices connected to the internet has grown so large [1] that the roughly 4.3 billion possible 32-bit IPv4 addresses are not enough, so a larger address space was needed [1].

**12.** It sends data to the correct device / destination on the network using IP addresses [1]. It assigns IP addresses to devices that join the home network [1]. It connects the home network to the internet [1].

**13.** The MAC address stays the same [1], because it was given to the NIC at manufacture [1]. The IP address is likely to change [1], because each network allocates its own (usually dynamic) IP address to the laptop [1].

**14.** Any two developed differences: a MAC address identifies the NIC itself [1], while an IP address identifies the device's location on a network, which is needed to route data between networks [1]. A MAC address is set by the manufacturer and normally never changes [1], while an IP address is allocated by the network and can change [1]. Also accept: MAC is 48 bits in hex, IP is 32 bits (IPv4) or 128 bits (IPv6).

---

## Where marks are usually lost

- Question 3: reversing the two codes. The manufacturer code always comes first.
- Question 6: stating which address is valid but not explaining why the others are not.
- Questions 10 and 14: giving one side of a difference only.
- Question 13: claiming the MAC address changes when the laptop changes network.
- Question 12: describing a router as "the thing that gives you Wi-Fi" without the three roles.
- Question 7: stating "it has a manufacturer part and a serial part" without saying which comes first, or without giving the length and the hexadecimal format.
- Question 9: saying a static address is "faster" or "more secure". The mark is for the address staying the same so that other computers can always find the server.
- Question 11: saying IPv6 is "newer" or "better". Explain that the number of possible IPv4 addresses ran short as more devices connected.

## Quick reference for checking your answers

| Item | Length | Written as |
|---|---|---|
| MAC address | 48 bits | 12 hex digits in six pairs |
| IPv4 address | 32 bits | Four denary numbers, each 0 to 255 |
| IPv6 address | 128 bits | Eight groups of four hex digits |
