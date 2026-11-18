---
title: "Cambridge IGCSE Computer Science (0478): Network hardware"
resourceType: "study-guides"
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
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 3.4: the NIC, MAC address structure, static and dynamic IP addresses, IPv4 and IPv6, and routers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.4 of the Cambridge IGCSE Computer Science 0478 syllabus covers the hardware and addresses that let a device join a network. You must understand that a computer needs a **network interface card (NIC)**; the meaning, purpose and **structure** of a **media access control (MAC) address**; the meaning and purpose of an **internet protocol (IP) address**, including **static and dynamic** addresses and the differences between **IPv4 and IPv6**; and the **role of a router**.

The [Hardware study guide](/resources/igcse-computer-science-hardware/) introduces these terms. This guide takes each address format apart, compares MAC and IP addresses directly, and follows one request from a laptop through a router.

## The network interface card (NIC)

A computer needs a NIC to access a network. The NIC is the hardware that connects the device to the network medium, whether a cable or a wireless signal. In most modern computers it is built into the main circuit board rather than being a separate card, but the syllabus still calls it a NIC. Wired and wireless connections each need their own NIC, so a laptop with both an Ethernet port and Wi-Fi has two.

## The MAC address

### Purpose

A MAC address **uniquely identifies a device's NIC**. It is used to deliver data to the correct device within a local network. The syllabus states that the NIC "is given a MAC address at the point of manufacture", so it is normally fixed for the life of the card.

### Structure

- A MAC address is **48 bits** long.
- It is usually written as **12 hexadecimal digits**, in six pairs separated by colons or hyphens, for example `00:1A:2B:3C:4D:5F`.
- The **first half** (six hex digits, `00:1A:2B` in the example) is the **manufacturer code**, which identifies the company that made the NIC.
- The **second half** (`3C:4D:5F`) is the **serial code**, a number the manufacturer gives to that individual card.

Because each manufacturer has its own code and never reuses a serial code, no two NICs should share a MAC address.

### Why hexadecimal?

Each hex digit represents exactly four bits, so 48 bits fit into 12 hex digits instead of 48 binary digits. That makes the address shorter to write and easier for a person to read and check. (The conversions are covered in Topic 1, Data representation.)

## The IP address

### Purpose

An IP address identifies a device's **location on a network**, so that data travelling across networks, including the internet, can be routed to it. The syllabus states that an IP address "is allocated by the network". Join a different network and the device is given a different IP address, even though its MAC address stays the same.

### Static and dynamic addresses

| | Static IP address | Dynamic IP address |
|---|---|---|
| Changes? | Stays the same every time the device connects | Can change each time the device connects |
| Allocated | Set permanently for that device | Allocated automatically by the network (often by the router) from a pool |
| Suits | Servers, network printers, devices others must always find at the same address | Laptops, phones and most home devices |
| Benefit | Always reachable at a known address | Addresses are reused, so fewer are needed; no manual setup |

### IPv4 and IPv6

| | IPv4 | IPv6 |
|---|---|---|
| Size | 32 bits | 128 bits |
| Written as | Four denary numbers from 0 to 255, separated by full stops | Eight groups of four hexadecimal digits, separated by colons |
| Example | `192.168.1.20` | `2001:0db8:0000:0000:0000:ff00:0042:8329` |
| Number of possible addresses | 2 to the power 32, about 4.3 billion | 2 to the power 128, about 3.4 × 10 to the power 38 |

Each IPv4 number is 0 to 255 because it is one byte (8 bits). IPv6 was introduced because the number of devices connected to the internet grew beyond what 32-bit addresses can provide. An IPv6 address can be shortened by dropping leading zeros in each group and replacing one run of all-zero groups with `::`, so the example above can be written `2001:db8::ff00:42:8329`.

## MAC address versus IP address

| | MAC address | IP address |
|---|---|---|
| Identifies | The physical NIC | The device's location on a network |
| Given by | Manufacturer, at the point of manufacture | The network |
| Changes? | Normally never | Can change (dynamic) or be fixed (static) |
| Format | 48 bits, 12 hex digits | IPv4 32 bits, denary; IPv6 128 bits, hex |

A useful analogy: the MAC address is like a person's name, which stays with them; the IP address is like their postal address, which changes when they move.

## The router

The syllabus gives three roles:

1. **A router sends data to a specific destination on a network.** It reads the destination IP address in each packet's header and forwards the packet along a suitable route.
2. **A router can assign IP addresses.** On a home network it gives each device that joins a dynamic IP address.
3. **A router can connect a local network to the internet.** All the devices in a home or school share the router's connection.

## Worked example: following one request

A student's laptop on a school network loads a web page.

1. The laptop's wireless NIC connects to the school network; its MAC address identifies it on that network.
2. The router allocates the laptop a dynamic IP address, for example `10.0.4.37`.
3. The browser's request is split into packets, each with the web server's IP address as destination and the laptop's IP address as originator (see section 2.1 on packets).
4. The router reads the destination address and forwards the packets out to the internet.
5. Replies come back addressed to the school's connection; the router passes them to the laptop's IP address on the local network.

If the student takes the laptop home, step 2 gives a different IP address from the home router, while the MAC address in step 1 is unchanged.

## Annotated model answer

**Question:** Explain **two** differences between IPv4 and IPv6 addresses. [4]

> IPv4 addresses are 32 bits long, while IPv6 addresses are 128 bits long [1], so IPv6 provides far more possible addresses for the growing number of devices [1]. IPv4 is written as four denary numbers separated by full stops [1], whereas IPv6 is written as eight groups of hexadecimal digits separated by colons [1].

**Why it scores 4:** each difference states both sides ("while", "whereas"). Writing only "IPv6 is longer" gives half the credit for that difference.

## Common mistakes

- Saying the MAC address is given by the router or the internet service provider. It is set at manufacture.
- Putting the serial code first. The manufacturer code is the first half.
- Calling IPv6 "64-bit". It is 128 bits.
- Writing an IPv4 number above 255.
- Saying a router "stores websites" or "is the internet". It forwards data and connects networks.
- Mixing static and dynamic: a static address does not change.

## Exam technique

- **State the purpose of a MAC address**: to uniquely identify a device (its NIC) on a network.
- **Describe the structure**: 48 bits, hex, manufacturer code then serial code.
- **Explain why a static address is used**: link it to a device others must find at the same address, such as a printer.
- **Describe the role of a router**: use the three roles from the syllabus.

Next, use the [Network hardware revision notes](/resources/cambridge-igcse-computer-science-0478-network-hardware-revision-notes/) and the [Network hardware practice questions](/resources/cambridge-igcse-computer-science-0478-network-hardware-practice/).
