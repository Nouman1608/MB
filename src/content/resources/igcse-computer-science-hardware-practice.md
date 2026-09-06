---
title: "IGCSE Computer Science: Hardware — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
description: "Original exam-style practice questions with full worked answers on computer architecture, input/output devices, sensors, data storage and network hardware, for Cambridge IGCSE Computer Science (0478) Topic 3 Hardware."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> Cambridge International holds copyright in its own papers. Use these alongside the
> official past papers available free from your board.

Related: [Hardware study guide](/resources/igcse-computer-science-hardware/) and
[revision notes](/resources/igcse-computer-science-hardware-revision-notes/)

---

## Section A

**1.** Name the two units within the CPU covered by this topic. **[2]**

**2.** State the key difference between RAM and ROM. **[2]**

**3.** Name the component that gives a computer a MAC address, and state when this address is
assigned. **[2]**

## Section B

**4.** A greenhouse automatically opens vents when the internal temperature rises above a set level,
and automatically waters plants when the soil becomes too dry.

**(a)** Identify the two sensors most suitable for this system, and state what each measures. **[2]**
**(b)** Explain why an embedded system, rather than a general-purpose computer, would typically
control this greenhouse. **[3]**

**5.** Describe the fetch-decode-execute cycle, naming at least three registers and stating their
role. **[5]**

**6.** A student is deciding between an SSD and a traditional HDD for a laptop.

**(a)** State one advantage of solid-state storage over magnetic storage. **[1]**
**(b)** Briefly describe how each technology physically stores data. **[3]**

**7.** Explain why increasing the cache size of a CPU can improve performance, and state one other
factor (besides cache) that affects CPU performance. **[3]**

**8.** Explain one advantage and one disadvantage of storing data in the cloud rather than on local
secondary storage. **[2]**

**9.** A device connects to a home network. Explain the difference between IPv4 and IPv6, and state
one reason IPv6 was introduced. **[3]**

---

## Answers

**1.** The arithmetic logic unit (ALU) and the control unit (CU) [2].

**2.** RAM is volatile and holds data/instructions currently in use; ROM is non-volatile and typically
holds the startup instructions [2].

**3.** The network interface card (NIC) [1]; the MAC address is assigned at the point of manufacture
[1].

**4. (a)** A temperature sensor, to measure the internal temperature of the greenhouse [1], and a
moisture sensor, to measure the moisture level of the soil [1].
**(b)** An embedded system is built to perform one dedicated function, which matches a greenhouse
control system's need to repeatedly perform the same specific tasks (monitoring temperature and soil
moisture, then opening vents or watering) [1–2], whereas a general-purpose computer is designed to run
many different functions and would be unnecessarily complex, costly, and less efficient for a
single, fixed, repetitive task like this [1].

**5.** The address of the next instruction, held in the program counter (PC), is copied into the
memory address register (MAR) [1]. The instruction at that address in memory is fetched and copied
into the memory data register (MDR) [1], and then into the current instruction register (CIR) [1].
The instruction is decoded by the control unit to determine what operation is required [1], and then
executed, which may involve the arithmetic logic unit (ALU) performing a calculation and storing the
result in the accumulator (ACC) [1].

**6. (a)** Solid-state storage has no moving parts, making it generally faster, more durable and more
resistant to physical shock than magnetic storage [1].
**(b)** SSD: uses NAND or NOR flash memory technology, with transistors acting as control gates and
floating gates to store data electronically [1–2]. HDD: uses magnetic platters divided into tracks and
sectors, with data read and written using electromagnets [1].

**7.** A larger cache allows the CPU to store more frequently used instructions and data closer to the
processor, reducing the time spent waiting to fetch information from slower main memory (RAM), which
improves overall processing speed [2]. Another factor affecting performance: the number of cores (or
clock speed) [1].

**8.** Advantage: cloud storage allows data to be accessed remotely from any device with an internet
connection, without needing to carry a physical storage device [1]. Disadvantage: cloud storage
depends on having a reliable internet connection to access the data, and relies on a third-party
provider's physical servers and storage infrastructure, unlike local storage under the user's own
direct control [1].

**9.** IPv4 addresses are shorter and use an older addressing format with a smaller total number of
possible unique addresses, while IPv6 addresses are longer and provide a vastly larger number of
possible unique addresses [1–2]. One reason IPv6 was introduced: the number of devices connecting to
the internet grew beyond what the limited supply of IPv4 addresses could sustainably support, so a
addressing format with far more available addresses was needed [1].

## A note on exam technique for this topic

Question 4 rewards the precise sensor-to-measurement matching the study guide identifies as essential
for 3.2 — knowing what each named sensor actually measures, not just recognising its name, is what
scenario-based questions on this sub-topic test. Question 5 rewards naming the specific register
involved at each stage of the fetch-decode-execute cycle in the correct order, exactly as recommended
for building this skill through repeated diagram practice rather than a single memorised summary. Question 9 rewards the same explicit-comparison habit applied to IPv4 versus IPv6, which the study guide flags as one of several "explain the difference between" pairs that recur across sub-topics 3.3 and 3.4. Building a short reference table for each of these named pairs -- RAM vs ROM, primary vs secondary storage, local vs cloud storage, IPv4 vs IPv6 -- before the exam is a more reliable revision strategy than trying to recall each distinction from a single general description of the topic.
