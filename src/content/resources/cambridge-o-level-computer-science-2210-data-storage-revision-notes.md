---
title: "Cambridge O Level Computer Science (2210): Data storage -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3.3
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "data-storage-2210"
description: "Recall notes for 2210 sub-topic 3.3: RAM v ROM, how HDDs, optical discs and flash memory work, virtual memory pages, and cloud v local storage."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Sub-topic 3.3 of Cambridge O Level Computer Science (2210) is about where a computer keeps data and how
each kind of storage works. Most questions come back to two tests: **can the CPU access it directly?**
and **is it volatile?**

Full explanations: [data storage study guide](/resources/cambridge-o-level-computer-science-2210-data-storage/).
Test yourself: [data storage practice questions](/resources/cambridge-o-level-computer-science-2210-data-storage-practice/).
Whole-topic overview: [Topic 3 Hardware revision notes](/resources/o-level-computer-science-hardware-revision-notes/).

## Syllabus coverage (2210, 2026-2028)

| Ref | What you must be able to do |
|---|---|
| 3.3.1 | Primary storage: directly accessed by the CPU; roles of RAM and ROM; why both are needed |
| 3.3.2 | Secondary storage: not directly accessed by the CPU; needed for more permanent storage |
| 3.3.3 | How magnetic, optical and solid-state storage work, with examples |
| 3.3.4 | Virtual memory: what it is, how it is created and used, why it is needed |
| 3.3.5 | What cloud storage is |
| 3.3.6 | Advantages and disadvantages of cloud storage compared with local storage |

## Primary storage in four lines

- **RAM**: volatile; read and write; holds the programs and data currently in use.
- **ROM**: non-volatile; read only; holds the start-up instructions (bootloader).
- Need ROM because RAM is empty at switch-on.
- Need RAM because ROM cannot be written to, so it cannot hold the user's changing work.

## Secondary storage: the three mechanisms

**Magnetic (HDD)**

1. Platters coated in magnetic material spin.
2. Each surface is divided into tracks (rings) and sectors (segments of a track).
3. A read/write head on a moving arm uses an electromagnet to magnetise areas one way or the other (1 or 0).
4. Reading detects the direction of magnetisation.

**Optical (CD, DVD, Blu-ray)**

1. A laser burns pits into the reflective layer; unburnt areas are lands.
2. Data runs along one spiral track from the centre outwards.
3. A laser reads the disc: pits and lands reflect differently and a sensor converts this to binary.
4. Blu-ray has a shorter-wavelength laser, so smaller pits and the greatest capacity.

**Solid-state / flash (SSD, SD card, USB drive)**

1. NAND or NOR technology; no moving parts.
2. Grid of transistors, each with a control gate and a floating gate.
3. Writing traps electrons on the floating gate; charge or no charge is the bit.
4. The charge stays without power, so it is non-volatile.

## Comparison grid

| | Magnetic | Optical | Solid-state |
|---|---|---|---|
| Moving parts | Yes (platters, arm) | Yes (spinning disc) | None |
| Access speed | Slower than SSD | Slowest | Fastest |
| Durability | Can be damaged by knocks | Scratches easily | Survives knocks |
| Portability | Bulky | Thin, light discs | Very small |
| Typical use | Large, cheap storage in desktops and servers | Distributing films, software, archives | Laptops, phones, cameras |
| Main drawback | Moving parts wear and fail | Low capacity, slow | Limited rewrites; higher cost per unit of storage |

## Virtual memory chain

RAM is full → operating system uses an area of **secondary storage** as virtual memory → data is split
into **pages** → pages not in use are moved from RAM to virtual memory → needed pages are moved into
RAM → pages are transferred back and forth **when needed**.

- **Why needed:** lets more or larger programs run than physical RAM allows, so programs do not crash or
  refuse to open.
- **Drawback:** secondary storage is much slower than RAM, so heavy swapping slows the computer down.
- **Real fix:** add more RAM.

## Cloud storage in brief

- Data stored on **remote physical servers** run by a third party, accessed over the internet.
- The syllabus point: **physical servers and storage are still needed**.

| Advantages of the cloud over local | Disadvantages of the cloud compared with local |
|---|---|
| Access from anywhere on any connected device | No internet connection means no access |
| No need to buy extra drives; easy to add capacity | Usually an ongoing subscription |
| Provider makes back-up copies | Data held by a third party: risk of hacking or loss of privacy |
| Easy to share files with others | Upload and download speed limited by the connection |
| Data survives if the user's own device is lost | User depends on the provider staying in business and secure |

## Key terms

| Term | Meaning |
|---|---|
| Primary storage | Storage the CPU can access directly (RAM and ROM) |
| Secondary storage | Non-volatile storage not directly accessed by the CPU |
| Volatile | Loses its contents when the power is switched off |
| Bootloader | Start-up instructions, held in ROM, that load the operating system |
| Platter | Spinning magnetic disc inside an HDD |
| Track | A ring on the surface of a platter or a disc |
| Sector | A section of a track |
| Pit / land | Burnt and unburnt areas on an optical disc |
| Floating gate | Part of a flash transistor that traps electrons to store a bit |
| Control gate | Part of a flash transistor that controls the charge on the floating gate |
| Page | Fixed-size block of data moved between RAM and virtual memory |
| Virtual memory | Area of secondary storage used as extra RAM when RAM is full |
| Cloud storage | Data kept on remote servers, reached over the internet |

## Exam traps

- "Virtual memory is extra RAM" scores nothing: it is part of **secondary storage** used **as if** it
  were RAM.
- In a RAM/ROM comparison, each sentence needs both sides: "RAM is volatile **but** ROM is non-volatile".
- Using "memory" for secondary storage: hard disks and SSDs are storage, not memory.
- Mixing mechanisms: HDDs use electromagnets, optical discs use lasers, flash uses transistors.
- Writing "the cloud does not use hardware". The syllabus says physical servers are needed.
- One-word cloud answers such as "cost" or "security": say who pays, for what, and why it matters.
- For a "suggest a storage device" question, link every reason to the scenario (portable, rugged, large
  capacity, cheap).

## Self-test

1. Which type of storage can the CPU access directly?
2. Give **two** differences between RAM and ROM.
3. Why can a computer not start using RAM alone?
4. Name the two divisions of a platter's surface used to locate data.
5. What creates the pits on a writable optical disc?
6. Why does Blu-ray hold more data than DVD?
7. Name the **two** gates in a flash memory transistor.
8. Why does an SD card keep its data when removed from a camera?
9. What is the name of the blocks of data moved in and out of virtual memory?
10. Give **one** reason why heavy use of virtual memory slows a computer down.
11. State the syllabus point about the hardware used by cloud storage.
12. Give **one** advantage and **one** disadvantage of storing school work on the cloud rather than on a
    USB drive.

**Answers:** 1. Primary storage (RAM and ROM). 2. Any two: RAM is volatile, ROM is non-volatile; RAM can
be written to, ROM is read only; RAM holds programs and data in use, ROM holds start-up instructions.
3. RAM is volatile, so it is empty at switch-on and there are no instructions to load the operating
system. 4. Tracks and sectors. 5. A laser. 6. It uses a laser with a shorter wavelength, so pits are
smaller and closer together. 7. Control gate and floating gate. 8. Flash memory is non-volatile: the
electrons stay trapped on the floating gates without power. 9. Pages. 10. Secondary storage is much slower
to access than RAM, so time is spent transferring pages. 11. Physical servers and storage are needed to
store data in cloud storage. 12. Advantage: it can be accessed from any device with an internet
connection, or it will not be lost if the USB drive is lost. Disadvantage: it cannot be accessed without
an internet connection, or the data is held by a third party and could be hacked.

## Official syllabus

Cambridge O Level Computer Science (2210) syllabus for examination 2026-2028, sub-topic 3.3 -
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf).
