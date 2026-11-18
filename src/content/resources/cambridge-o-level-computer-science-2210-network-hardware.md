---
title: "Cambridge O Level Computer Science (2210): Network hardware"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3.4
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "network-hardware-2210"
description: "Sub-topic 3.4 of Cambridge O Level Computer Science 2210: network interface cards, MAC address structure, static and dynamic IP, IPv4, IPv6 and routers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **sub-topic 3.4 Network hardware** in Cambridge O Level Computer Science (2210), for
examination 2026-2028. The [Topic 3 Hardware guide](/resources/o-level-computer-science-hardware/) lists
the facts in a few lines; here each one is explained, with worked examples of reading and checking MAC
and IP addresses, which is where most marks in this sub-topic are won or lost.

## What the syllabus asks

The 2210 syllabus lists four learning outcomes for 3.4:

1. Understand that a computer needs a **network interface card (NIC)** to access a network.
2. Understand what is meant by, and the purpose of, a **media access control (MAC) address**, including
   its structure: it is given to the NIC at the point of manufacture, is usually written as hexadecimal,
   and is created from the manufacturer code and the serial code.
3. (a) Understand what is meant by, and the purpose of, an **internet protocol (IP) address**: it is
   allocated by the network and can be static or dynamic. (b) Understand that there are different types
   of IP address, including the characteristics of, and differences between, **IPv4 and IPv6**.
4. Describe the **role of a router** in a network: it sends data to a specific destination on a network,
   can assign IP addresses and can connect a local network to the internet.

## The network interface card (NIC)

A NIC is the hardware component that lets a device connect to a network. It prepares data to be sent
over the network medium and receives data arriving for the device. A NIC can be wired, with a socket for
a network cable, or wireless, using radio waves. In most modern computers the NIC is built into the main
circuit board rather than being a separate card, but it is still called a NIC. Without one, a device
cannot join a network at all, which is why the syllabus starts here.

## MAC addresses

**What it is.** A MAC address is a unique identifier given to a NIC **when it is manufactured**. It is
stored on the NIC and does not normally change for the life of the device.

**Purpose.** It identifies a particular device on a network, so that data sent across the local network
reaches the right piece of hardware. Because it belongs to the hardware, it identifies the device itself,
not where the device is.

**Structure.** A MAC address is 48 bits long. It is usually written as **12 hexadecimal digits**, in six
pairs separated by hyphens or colons. It has two halves:

```
00:1A:2B : 3C:4D:5E
--------   --------
manufacturer   serial
   code         code
```

- The **manufacturer code** (first six hex digits) identifies the company that made the NIC.
- The **serial code** (last six hex digits) is the number the manufacturer gives that particular card.

Together they make the address unique: no two manufacturers share a code, and one manufacturer never
reuses a serial code.

**Why hexadecimal?** 48 binary digits are long and easy to copy wrongly. Each hex digit stands for exactly
four bits, so 48 bits become 12 characters, which are shorter and easier for people to read and check.
The computer itself still stores the address in binary.

### Worked example: reading a MAC address

*Question (original):* A NIC has the MAC address `A4:5F:01:9C:3B:E2`. Identify the manufacturer code,
and convert the pair `9C` to binary. [3]

*Answer:* The manufacturer code is `A4:5F:01` [1]. `9` is `1001` [1] and `C` (12) is `1100`, so `9C` is
`10011100` [1].

*Check:* `10011100` = 128 + 16 + 8 + 4 = 156, and `9C` = 9 x 16 + 12 = 156.

## IP addresses

**What it is.** An IP address is a number that identifies a device's location on a network so that data
can be sent to it, in the same way that a postal address identifies where a house is. Unlike a MAC
address, it is **allocated by the network** the device joins, not by the manufacturer.

**Static and dynamic.**

| | Static IP address | Dynamic IP address |
|---|---|---|
| Changes? | Stays the same every time the device connects | Can change each time the device connects |
| How given | Permanently assigned to the device | Allocated automatically from a pool when the device joins |
| Suits | Servers and shared printers that others must always find at the same address | Phones and laptops that join and leave the network |
| Benefit | Reliable to find and connect to | Addresses are reused, so fewer are needed; no manual setting up |

### IPv4 and IPv6

| | IPv4 | IPv6 |
|---|---|---|
| Length | 32 bits | 128 bits |
| Written as | Four groups of denary numbers, each 0 to 255, separated by full stops | Eight groups of four hexadecimal digits, separated by colons |
| Example | `192.168.1.20` | `2001:0db8:0000:0000:0000:ff00:0042:8329` |
| Number of possible addresses | 2^32, about 4.3 billion | 2^128, vastly more |

**Why IPv6 was introduced.** The number of devices connected to the internet has grown so large that the
supply of IPv4 addresses is running out. Making the address four times longer, 128 bits instead of 32,
gives enough addresses for far more devices.

**Shortening IPv6.** Leading zeros in a group can be left out, and one run of groups that are all zero
can be replaced by `::`, used only once in an address. So the example above can also be written
`2001:db8::ff00:42:8329`.

### Worked example: checking an IPv4 address

*Question (original):* State whether each of these is a valid IPv4 address, giving a reason.
(a) `172.16.254.1` (b) `192.168.1.256` (c) `10.0.5` [3]

*Answer:* (a) Valid: four groups, each between 0 and 255 [1]. (b) Not valid: 256 is greater than 255,
the largest number that 8 bits can hold [1]. (c) Not valid: it has only three groups; IPv4 needs four
[1].

*Why 255?* Each group is 8 bits, and the largest 8-bit number is `11111111` = 255.

## The router

A router does three jobs named in the syllabus:

- **Sends data to a specific destination.** Data travels in packets. The router reads the destination IP
  address in each packet and forwards it towards that device, either to a device on its own network or
  on to another network.
- **Assigns IP addresses.** When a device joins the network, the router can allocate it a dynamic IP
  address, so every device on the local network has a different address.
- **Connects a local network to the internet.** The router is the link between the devices in a home,
  school or office and the wider internet, passing data in both directions.

## MAC address or IP address?

| | MAC address | IP address |
|---|---|---|
| Given by | Manufacturer, at manufacture | The network the device connects to |
| Can it change? | Not normally | Yes, if dynamic |
| Identifies | The device (its NIC) | The device's location on the network |
| Usually written in | Hexadecimal | Denary (IPv4) or hexadecimal (IPv6) |

## Common mistakes

- Saying a MAC address is given by the router or the network. It is given at manufacture.
- Saying an IP address is "fixed when the computer is made". It is allocated by the network.
- Mixing the two halves of a MAC address: the manufacturer code comes first.
- Describing IPv6 as "faster" than IPv4. The difference examined is length, format and the number of
  addresses.
- Writing an IPv4 group above 255, or an IPv6 address with full stops.
- Describing a router as "connecting computers together" with no mention of directing data, assigning IP
  addresses or connecting to the internet.

## Exam technique

- **State** the purpose of a MAC or IP address in one precise sentence: what it identifies.
- **Describe** the structure of a MAC address: length, hexadecimal, manufacturer code then serial code.
- **Compare** or **give differences between** IPv4 and IPv6: two-sided sentences, such as "IPv4 is 32 bits
  whereas IPv6 is 128 bits".
- **Describe the role** of a router: give each job as a separate point.
- **Explain** why IPv6 is needed: the point (more addresses) and the reason (IPv4 is running out because
  of the growth in connected devices).

Quick recall and a self-test are in the
[network hardware revision notes](/resources/cambridge-o-level-computer-science-2210-network-hardware-revision-notes/),
and exam-style questions with full answers are in the
[network hardware practice questions](/resources/cambridge-o-level-computer-science-2210-network-hardware-practice/).

## Official syllabus

Cambridge O Level Computer Science (2210) syllabus for examination 2026-2028, sub-topic 3.4 -
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf).
