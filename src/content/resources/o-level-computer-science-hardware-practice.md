---
title: "O Level Computer Science: Hardware — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
description: "Original exam-style practice questions with full worked answers on the fetch-decode-execute cycle, sensors, data storage and network hardware, for Cambridge O Level Computer Science (2210) Topic 3 Hardware."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Hardware study guide](/resources/o-level-computer-science-hardware/) and
[revision notes](/resources/o-level-computer-science-hardware-revision-notes/)

---

## Section A

**1.** Name the three families of internal CPU component covered by this topic. **[3]**

**2.** State what an embedded system is, and give one example. **[2]**

**3.** Name the two parts that make up a MAC address. **[2]**

## Section B

**4.** A swimming pool monitoring system automatically adds chemicals when the water's acidity moves
outside a safe range, and raises an alert if the water level drops too low.

**(a)** Identify the two sensors most suitable for this system, and state what each measures. **[2]**
**(b)** Explain why a general-purpose computer would be an unnecessarily complex choice to control
this system. **[3]**

**5.** Describe what happens during the fetch stage of the fetch-decode-execute cycle, naming the
registers involved in the correct order. **[4]**

**6.** A photographer needs to back up thousands of large photo files and is deciding between an
external HDD and cloud storage.

**(a)** State one advantage of cloud storage over the HDD for this purpose. **[1]**
**(b)** State one advantage of the HDD over cloud storage for this purpose. **[1]**
**(c)** Explain why the photographer might reasonably decide to use both, rather than choosing only
one. **[3]**

**7.** A laptop's performance is upgraded by increasing the number of processor cores from two to
four, without changing the clock speed or cache size.

**(a)** Explain why this change is likely to improve the laptop's performance for tasks that can run
in parallel. **[3]**
**(b)** State one other factor, besides the number of cores, that affects CPU performance. **[1]**

**8.** A company migrates its office network from IPv4 to IPv6. Explain one reason for this
migration, and state one difference between the two addressing formats. **[3]**

---

## Answers

**1.** Units, registers, buses [3].

**2.** An embedded system is a device built to perform one dedicated function [1] — for example, a
system controlling a washing machine, a car's engine management, or a vending machine [1].

**3.** A manufacturer code and a serial code [2].

**4. (a)** A pH sensor, to measure the acidity of the water [1], and a level sensor, to measure the
water level [1].
**(b)** An embedded system is built to perform this one dedicated, repetitive monitoring and control
function reliably and efficiently [1–2], whereas a general-purpose computer is designed to run many
different applications and would be unnecessarily costly, complex, and less efficient for a single,
fixed task like continuously monitoring pool chemistry and water level [1].

**5.** The address of the next instruction, held in the program counter (PC), is copied into the
memory address register (MAR) [1]. The instruction stored at that address in memory is fetched and
copied into the memory data register (MDR) [1]. The program counter is incremented to point to the
next instruction [1]. The instruction is then copied from the MDR into the current instruction
register (CIR), ready to be decoded [1].

**6. (a)** Cloud storage allows the photographer to access the photo files remotely from any device
with an internet connection, without needing to carry a physical drive [1].
**(b)** An external HDD does not depend on an internet connection to access the files, and gives the
photographer direct physical control over where the data is stored [1].
**(c)** Using both provides a backup in each direction: if the HDD is lost, damaged, or fails, the
cloud copy remains available [1–2], while if the cloud service becomes unavailable or the photographer
has no internet access, the local HDD copy can still be accessed directly [1] — combining the two
reduces the risk of losing the photo files to a single point of failure.

**7. (a)** Increasing the number of cores allows the CPU to process multiple instructions or tasks
genuinely simultaneously, rather than switching rapidly between them on a single core [1–2], so tasks
that can be split into parts and run in parallel across multiple cores can complete faster than on a
CPU with fewer cores [1].
**(b)** Clock speed (or cache size) [1].

**8.** One reason for the migration: the number of devices connecting to the internet has grown far
beyond what the limited supply of IPv4 addresses can sustainably support, so a format offering a much
larger number of available addresses is needed [1–2]. One difference: IPv6 addresses are longer than
IPv4 addresses and can represent a vastly greater number of unique addresses [1].

## A note on exam technique for this topic

Question 4 rewards precise sensor-to-measurement matching from the syllabus's named sensor list,
exactly as the study guide recommends, rather than guessing a sensor from its name alone. Question 5
rewards naming each register in the correct order during the fetch stage specifically — a frequent
exam format asks for one stage of the cycle in isolation, so practising each stage separately, not just
the cycle as a whole, is worth building into revision for this sub-topic. Question 8 shows the same explicit-comparison habit applied to IPv4 versus IPv6, one of several named pairs (alongside RAM vs ROM, primary vs secondary storage, and local vs cloud storage) that the study guide recommends preparing as short, structured comparisons rather than isolated facts.
