---
title: "Cambridge O Level Computer Science (2210): Network hardware -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 2210 practice questions with mark-scheme answers on NICs, MAC address structure, hex conversion, static and dynamic IP, IPv4, IPv6 and routers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

These questions cover every learning outcome in sub-topic 3.4 Network hardware of Cambridge O Level
Computer Science (2210). Section A checks recall and conversions; Section B asks you to explain and
compare in context. All addresses used are invented examples.

Related: [network hardware study guide](/resources/cambridge-o-level-computer-science-2210-network-hardware/) |
[network hardware revision notes](/resources/cambridge-o-level-computer-science-2210-network-hardware-revision-notes/)

---

## Section A

**1.** State the name of the hardware component a computer needs to access a network. **[1]**

**2.** State **two** facts about how a MAC address is created. **[2]**

**3.** A MAC address is `3C:07:71:A9:2E:F4`.

(a) Identify the part of the address that is the serial code.

(b) Convert `A9` to an 8-bit binary number. **[2]**

**4.** Give **two** characteristics of an IPv4 address. **[2]**

**5.** State whether each of these is a valid IPv4 address.

(a) `203.0.113.45`

(b) `10.256.0.1`

(c) `192.168.4.7.2` **[3]**

**6.** State what is meant by a dynamic IP address. **[2]**

## Section B

**7.** Describe the structure of a MAC address. **[4]**

**8.** Explain why MAC addresses are usually written in hexadecimal rather than binary. **[2]**

**9.** Describe **three** differences between IPv4 and IPv6 addresses. **[3]**

**10.** A school network has a file server and a printer that every computer must be able to find, and
students connect their own laptops during the day.

(a) Explain why the file server should have a static IP address.

(b) Explain why students' laptops are given dynamic IP addresses. **[4]**

**11.** A family connects two laptops, a tablet and a games console to a router at home. Describe the role
of the router in this home network. **[3]**

**12.** A student says: "A device's MAC address and its IP address do the same job, so a computer only
needs one of them." Explain why the student is wrong. **[4]**

**13.** The IPv6 address `2001:0db8:0000:0000:0000:0000:1428:57ab` can be written in a shorter form.

(a) Write the address in its shortest form.

(b) Explain why IPv6 addresses were introduced. **[4]**

---

## Answers

**1.** Network interface card (NIC) [1].

**2.** Any two:

- It is given to the NIC at the point of manufacture [1].
- It is made from the manufacturer code and the serial code [1].
- It is unique to that NIC [1].

**3.** (a) `A9:2E:F4` [1].
(b) `A` = 10 = `1010` and `9` = `1001`, so `10101001` [1].

*Check:* 128 + 32 + 8 + 1 = 169, and A9 = 10 x 16 + 9 = 169.

**4.** Any two:

- 32 bits long [1].
- Written as four groups (of denary numbers) [1].
- Each group is from 0 to 255 [1].
- Groups are separated by full stops [1].

**5.** (a) Valid [1]. (b) Not valid, because 256 is greater than 255 [1]. (c) Not valid, because it has
five groups instead of four [1].

**6.** An IP address that is allocated to a device by the network each time it connects [1] and that can
change from one connection to the next [1].

**7.** Any four:

- It is 48 bits long [1].
- It is usually written as 12 hexadecimal digits [1].
- The digits are written in six pairs separated by hyphens or colons [1].
- The first half (first six hex digits) is the manufacturer code [1].
- The second half (last six hex digits) is the serial code [1].

**8.** Hexadecimal is shorter: each hex digit represents four bits, so 48 bits become 12 characters [1].
This makes the address easier for people to read, write and check, with fewer errors when copying it [1].

**9.** Any three:

- IPv4 is 32 bits, whereas IPv6 is 128 bits [1].
- IPv4 is written in denary, whereas IPv6 is written in hexadecimal [1].
- IPv4 has four groups, whereas IPv6 has eight groups [1].
- IPv4 groups are separated by full stops, whereas IPv6 groups are separated by colons [1].
- IPv6 allows far more possible addresses than IPv4 [1].

*Tip:* "IPv6 is newer" is not a characteristic and scores nothing.

**10.** (a) A static address stays the same [1], so every computer can always find the server at the same
address to open and save files [1].
(b) Laptops join and leave the network during the day [1], so allocating addresses dynamically means
addresses can be reused and do not have to be set up by hand for each laptop [1].

**11.** Any three:

- The router assigns an IP address to each device when it joins the network [1].
- It receives data and sends it to the specific device it is addressed to, using the destination IP
  address [1].
- It connects the home network to the internet, passing data between the devices and the internet [1].

*Tip:* the question names four devices, so link at least one point to them, for example sending a video
stream to the tablet and not to the console.

**12.** Any four:

- A MAC address is given to the NIC by the manufacturer [1], whereas an IP address is allocated by the
  network [1].
- A MAC address identifies the device itself [1], whereas an IP address identifies the device's location
  on the network [1].
- A MAC address does not normally change [1], whereas a dynamic IP address can change each time the
  device connects [1].
- Both are needed: the IP address is used to send data to the right network location, and the MAC address
  identifies the right hardware [1].

Maximum 4 marks.

**13.** (a) `2001:db8::1428:57ab` [2]: one mark for removing the leading zeros (`db8`), one mark for
replacing the run of zero groups with `::`.
(b) The number of devices connected to the internet has grown so much [1] that IPv4 addresses are running
out, and IPv6's 128 bits give far more possible addresses [1].

---

## Where marks are usually lost

- Saying that the router or the network gives a device its MAC address.
- Reversing the two halves of a MAC address.
- Using colons in an IPv4 address or full stops in an IPv6 address.
- Listing "newer", "faster" or "better" as differences between IPv4 and IPv6.
- Describing static and dynamic addresses without linking the choice to how the device is used.
