---
title: "Cambridge IGCSE Computer Science (0478): Network hardware -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 3.4: NICs, MAC address structure, static and dynamic IP, IPv4 against IPv6, and routers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 3.4, Network hardware. For full explanations and a step-by-step example, use the [Network hardware study guide](/resources/cambridge-igcse-computer-science-0478-network-hardware/).

## Four facts to start with

1. A computer needs a **NIC** to access a network.
2. Each NIC has a **MAC address**, set at the point of manufacture.
3. Each device on a network is given an **IP address** by the network; it can be static or dynamic.
4. A **router** sends data to a specific destination, can assign IP addresses and connects a local network to the internet.

## Key terms

| Term | Definition |
|---|---|
| NIC | Hardware that connects a device to a network |
| MAC address | 48-bit address that uniquely identifies a NIC |
| Manufacturer code | First half of a MAC address; identifies the maker |
| Serial code | Second half of a MAC address; identifies the individual card |
| IP address | Address allocated by the network to identify a device's location on it |
| Static IP | Does not change each time the device connects |
| Dynamic IP | Allocated automatically and can change on each connection |
| IPv4 | 32-bit address in four denary numbers (0 to 255) |
| IPv6 | 128-bit address in eight groups of four hex digits |
| Router | Forwards data to its destination; can assign IP addresses; connects a LAN to the internet |

## MAC address anatomy

Example: `A4:5B:7C:01:9D:2F`

| Part | Hex digits | Meaning |
|---|---|---|
| `A4:5B:7C` | First 6 | Manufacturer code |
| `01:9D:2F` | Last 6 | Serial code |

- 12 hex digits × 4 bits = **48 bits**.
- Hex is used because it is shorter and easier for people to read than binary.

## IPv4 versus IPv6

| | IPv4 | IPv6 |
|---|---|---|
| Bits | 32 | 128 |
| Notation | Denary, full stops | Hexadecimal, colons |
| Groups | 4 numbers | 8 groups |
| Example | `172.16.254.1` | `2001:db8:85a3::8a2e:370:7334` |
| Possible addresses | About 4.3 billion | About 3.4 × 10 to the power 38 |

Why IPv6 exists: the number of internet-connected devices outgrew the 32-bit address space.

Check an IPv4 address is valid: four numbers, each from 0 to 255. `256.10.3.1` is not valid.

## Static versus dynamic

| Static | Dynamic |
|---|---|
| Same address every time | May change at each connection |
| Used for servers, printers, CCTV cameras that others need to find | Used for phones, laptops, tablets |
| Must be set up and managed | Allocated automatically, addresses reused |

## MAC versus IP: the comparison examiners want

| MAC | IP |
|---|---|
| Identifies the NIC (the hardware) | Identifies the device's location on the network |
| Set by the manufacturer | Allocated by the network |
| Normally fixed | Can change |
| 48 bits | 32 bits (IPv4) or 128 bits (IPv6) |

## Router roles

- Reads the **destination IP address** in each packet and forwards it towards its destination.
- **Assigns IP addresses** to devices joining the local network.
- **Connects the local network to the internet**, so all devices share one connection.

## Reading an IPv6 address

The address `2001:0db8:0000:0000:0000:ff00:0042:8329` has eight groups of four hex digits. Each hex digit is 4 bits, so each group is 16 bits and the whole address is 8 × 16 = 128 bits. Leading zeros in a group can be dropped (`0db8` becomes `db8`), and one run of all-zero groups can be written as `::`, giving `2001:db8::ff00:42:8329`. The `::` can only be used once, or the receiver could not tell how many zero groups each one replaced.

## Hex to binary for MAC questions

Convert each hex digit to a 4-bit group: `9D` is 9 = `1001` and D (13) = `1101`, so `10011101`. Six pairs of two hex digits give 12 digits, and 12 × 4 = 48 bits.

## Exam traps

- **MAC set by the router.** Wrong: set at manufacture.
- **Order of codes.** Manufacturer code first, serial code second.
- **Bit lengths.** MAC 48; IPv4 32; IPv6 128. Do not mix them.
- **IPv4 in hex** or **IPv6 in denary.** IPv4 uses denary; IPv6 uses hex.
- **"Dynamic means it is always changing."** It may change between connections, not constantly while connected.
- **One-sided differences.** "IPv6 is bigger" is half a difference; state both sides.

## Self-test

1. What piece of hardware does a computer need to access a network?
2. When is a MAC address given to a NIC?
3. How many bits are in a MAC address?
4. In `3C:D9:2B:10:4F:A7`, which part is the manufacturer code?
5. Why are MAC addresses usually written in hexadecimal?
6. Who allocates an IP address?
7. Give one reason a network printer is given a static IP address.
8. How many bits are in an IPv6 address?
9. Is `192.168.300.4` a valid IPv4 address? Explain.
10. Give two differences between IPv4 and IPv6.
11. State three roles of a router.
12. A phone moves from home Wi-Fi to school Wi-Fi. Which of its addresses change and which stay the same?

**Answers**

1. A network interface card (NIC).
2. At the point of manufacture.
3. 48.
4. `3C:D9:2B` (the first six hex digits).
5. Each hex digit represents 4 bits, so the address is shorter and easier for people to read than binary.
6. The network (often the router).
7. Devices always need to find it at the same address to send print jobs.
8. 128.
9. No: each number in an IPv4 address must be from 0 to 255, and 300 is too large.
10. Any two: IPv4 is 32 bits, IPv6 is 128 bits; IPv4 is written in denary separated by full stops, IPv6 in hex separated by colons; IPv4 has four groups, IPv6 has eight; IPv6 provides many more addresses.
11. Sends data to a specific destination; assigns IP addresses; connects a local network to the internet.
12. Its IP address changes because a different network allocates it; its MAC address stays the same.
