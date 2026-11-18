---
title: "Cambridge O Level Computer Science (2210): Network hardware -- Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for 2210 sub-topic 3.4: the NIC, MAC address structure in hexadecimal, static and dynamic IP addresses, IPv4 v IPv6 and what a router does."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Sub-topic 3.4 of Cambridge O Level Computer Science (2210) is short, but its questions are precise: who
gives each address, how it is written, and what it identifies. These notes put each fact in a form you
can write straight into an answer.

Full explanations: [network hardware study guide](/resources/cambridge-o-level-computer-science-2210-network-hardware/).
Test yourself: [network hardware practice questions](/resources/cambridge-o-level-computer-science-2210-network-hardware-practice/).
Whole-topic overview: [Topic 3 Hardware revision notes](/resources/o-level-computer-science-hardware-revision-notes/).

## Syllabus coverage (2210, 2026-2028)

| Ref | What you must be able to do |
|---|---|
| 3.4.1 | A computer needs a network interface card (NIC) to access a network |
| 3.4.2 | Meaning, purpose and structure of a MAC address |
| 3.4.3(a) | Meaning and purpose of an IP address; static and dynamic |
| 3.4.3(b) | Characteristics of, and differences between, IPv4 and IPv6 |
| 3.4.4 | The role of a router |

## NIC

- Hardware needed for any device to connect to a network.
- Wired (cable socket) or wireless (radio).
- Holds the device's MAC address.

## MAC address in five facts

1. Given to the NIC **at the point of manufacture**.
2. Identifies the **device** on a network, so data reaches the right hardware.
3. **48 bits**, usually written as **12 hexadecimal digits** in six pairs, for example `00:1A:2B:3C:4D:5E`.
4. First half = **manufacturer code**; second half = **serial code**.
5. Written in hex because it is shorter and easier for people to read than 48 binary digits.

**Hex to binary drill:** each hex digit becomes four bits.

| Pair | Binary | Denary |
|---|---|---|
| `1A` | `0001 1010` | 26 |
| `5E` | `0101 1110` | 94 |
| `C3` | `1100 0011` | 195 |
| `FF` | `1111 1111` | 255 |

## IP address in brief

- Identifies a device's **location** on a network so data can be sent to it.
- **Allocated by the network**, not by the manufacturer.
- **Static**: stays the same; used for servers and shared printers that must always be found at one
  address.
- **Dynamic**: allocated each time a device connects and can change; addresses are reused.

## IPv4 versus IPv6

| | IPv4 | IPv6 |
|---|---|---|
| Bits | 32 | 128 |
| Format | Four denary numbers 0-255, separated by full stops | Eight groups of four hex digits, separated by colons |
| Example | `172.20.9.140` | `2001:db8:85a3::370:b2c` (shortened) |
| Possible addresses | 2^32 (about 4.3 billion) | 2^128 |
| Why it exists | Original format | IPv4 addresses are running out as more devices connect |

**Spot-the-error checks for IPv4:** exactly four groups; every group 0 to 255; full stops, not colons.

**IPv6 shortening rules:** drop leading zeros in a group; replace one run of all-zero groups with `::`.

## Router: three roles

1. **Sends data to a specific destination**: reads the destination IP address in each packet and
   forwards it.
2. **Assigns IP addresses** to devices that join the network.
3. **Connects a local network to the internet.**

## MAC versus IP

| Question | MAC | IP |
|---|---|---|
| Who gives it? | Manufacturer | Network |
| When? | At manufacture | When the device connects |
| Does it change? | Not normally | Can, if dynamic |
| What does it identify? | The device | Where the device is on the network |

## Key terms

| Term | Meaning |
|---|---|
| NIC | Network interface card: hardware that lets a device connect to a network |
| MAC address | Unique identifier given to a NIC at manufacture |
| Manufacturer code | First part of a MAC address, identifying who made the NIC |
| Serial code | Second part of a MAC address, identifying the individual NIC |
| IP address | Address allocated by the network, identifying a device's location |
| Static IP address | IP address that does not change |
| Dynamic IP address | IP address allocated each time a device connects, which can change |
| IPv4 | 32-bit IP address written as four denary numbers |
| IPv6 | 128-bit IP address written as eight groups of hex digits |
| Router | Device that sends data to its destination, assigns IP addresses and connects a network to the internet |

## Exam traps

- "The router gives the MAC address": wrong. The manufacturer does.
- Calling IPv6 "faster" or "more secure" when the question asks for differences in characteristics: give
  length, format and number of addresses.
- Reversing the halves of a MAC address. Manufacturer code first.
- Giving "to connect to the internet" as the purpose of a MAC address. Its purpose is to identify the
  device.
- Saying "a router connects computers": name the role precisely, such as directing packets using IP
  addresses.
- Any IPv4 group above 255 is invalid, because each group is 8 bits.
- Forgetting the word **hexadecimal** when describing how a MAC address is written.

## Self-test

1. What hardware does a computer need before it can access a network?
2. When is a MAC address given to a NIC?
3. Name the **two** parts of a MAC address, in order.
4. How many hexadecimal digits are in a MAC address, and how many bits does that represent?
5. Convert the MAC pair `B7` to binary.
6. Who allocates an IP address?
7. Give **one** reason why a web server would have a static IP address.
8. How many bits are in an IPv4 address and in an IPv6 address?
9. Why is `192.300.1.4` not a valid IPv4 address?
10. Give the reason IPv6 was introduced.
11. State **three** roles of a router.
12. Give **two** differences between a MAC address and an IP address.

**Answers:** 1. A network interface card (NIC). 2. At the point of manufacture. 3. Manufacturer code,
then serial code. 4. 12 hex digits, 48 bits. 5. `1011 0111`. 6. The network the device connects to.
7. Its address never changes, so users and other devices can always find it at the same address.
8. IPv4: 32 bits; IPv6: 128 bits. 9. 300 is greater than 255, the largest value an 8-bit group can
hold. 10. IPv4 addresses are running out because so many devices now connect to the internet; IPv6
gives far more addresses. 11. Sends data to a specific destination; assigns IP addresses; connects a
local network to the internet. 12. Any two: a MAC address is given by the manufacturer but an IP address
is allocated by the network; a MAC address does not normally change but a dynamic IP address can; a MAC
address identifies the device but an IP address identifies its location on the network.

## Official syllabus

Cambridge O Level Computer Science (2210) syllabus for examination 2026-2028, sub-topic 3.4 -
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf).
