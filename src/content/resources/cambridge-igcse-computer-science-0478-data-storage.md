---
title: "Cambridge IGCSE Computer Science (0478): Data storage"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3.3
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
    subtopic: "data-storage-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 3.3: RAM and ROM, magnetic, optical and solid-state storage, virtual memory and cloud storage."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.3 of the Cambridge IGCSE Computer Science 0478 syllabus covers where data is kept. You must understand **primary storage** (the roles of RAM and ROM, why a computer needs both, and how they differ), **secondary storage**, the operation of **magnetic, optical and solid-state** storage with examples of each, **virtual memory**, and **cloud storage** with its advantages and disadvantages compared with storing data locally.

The [Hardware study guide](/resources/igcse-computer-science-hardware/) summarises these. This guide explains each technology step by step, works through two scenario questions and points out where marks are lost.

## Primary storage

The syllabus defines primary storage as storage that is **directly accessed by the CPU**. It holds the instructions and data the processor is using or will need very soon.

### RAM (random access memory)

- Holds the operating system, programs and data **currently in use**.
- Can be **read from and written to**.
- Is **volatile**: its contents are lost when the power is switched off.
- The more RAM a computer has, the more programs and data can be held ready for the CPU at once.

### ROM (read only memory)

- Holds data and instructions that must **not change**, especially the **start-up instructions** (the bootstrap) that run when the computer is switched on.
- Can be **read** but not normally written to.
- Is **non-volatile**: its contents remain without power.

### Why a computer needs both

When a computer is switched on, RAM is empty, because it is volatile. The CPU needs instructions straight away, so it reads them from ROM. Those start-up instructions then load the operating system from secondary storage into RAM. RAM is needed because programs and data change constantly and must be written as well as read, which ROM cannot do.

| | RAM | ROM |
|---|---|---|
| Volatile? | Yes | No |
| Read and write? | Read and write | Read only |
| Typical contents | Programs and data in use | Start-up instructions |
| Size in a PC | Several gibibytes | Small |

## Secondary storage

Secondary storage is **not directly accessed by the CPU** and is "necessary for more permanent storage of data". Files must be copied into RAM before the CPU can use them. Secondary storage is non-volatile, so it keeps files, applications and the operating system when the power is off.

### Magnetic storage: the hard disk drive (HDD)

1. Data is stored on circular **platters** coated with a magnetic material.
2. Each platter surface is divided into concentric **tracks**, and each track into **sectors**.
3. The platters spin at high speed.
4. A **read/write head** on an arm moves across the surface to the correct track.
5. To write, an **electromagnet** in the head magnetises tiny areas of the surface in one of two directions, representing 1 and 0.
6. To read, the head detects the direction of magnetisation as the areas pass under it.

Because the head must move and the platter must rotate to the right sector, access is slower than solid-state storage. Moving parts can be damaged if the drive is dropped while working. HDDs offer large capacities at a low cost per gibibyte.

### Optical storage: CD, DVD and Blu-ray

1. A laser **burns** a spiral track into the disc's surface, creating **pits** (lower areas) and **lands** (unchanged areas).
2. To read, a lower-power laser shines on the spinning disc.
3. Lands reflect the light back to a sensor; pits scatter it, so less is reflected.
4. The changes in reflection are interpreted as binary data.

DVDs use a shorter-wavelength laser than CDs, and Blu-ray uses a shorter wavelength still (a blue-violet laser). A shorter wavelength allows **smaller pits and a tighter track**, so more data fits on a disc of the same size. Optical discs are cheap and portable but have low capacity compared with modern drives, and they can be scratched.

### Solid-state (flash memory): SSD, SD card and USB drive

- Data is stored in a grid of cells built from **transistors**.
- The syllabus names **NAND or NOR** technology. NAND flash stores data densely and is used in most SSDs, SD cards and USB drives; NOR flash allows individual bytes to be read quickly and is often used to hold program code.
- Each cell has a **control gate** and a **floating gate**. Applying a voltage to the control gate can push electrons onto the floating gate, where they are trapped by an insulating layer. Whether charge is trapped or not represents a binary value.
- Because the charge stays trapped without power, flash memory is **non-volatile**.

There are **no moving parts**, so solid-state storage has fast access, uses little power, makes no noise and is resistant to knocks. It is more expensive per gibibyte than an HDD, and each cell can only be rewritten a limited number of times.

## Virtual memory

When RAM is full, the operating system uses part of **secondary storage** as if it were extra RAM. This area is called **virtual memory**.

1. RAM fills up with open programs and data.
2. Data that is not needed right now is moved out of RAM, in blocks called **pages**, to virtual memory.
3. This frees space in RAM for the program the user is working on.
4. When a page in virtual memory is needed again, it is transferred back into RAM, and another page may be moved out to make room.

Virtual memory is necessary because without it a computer would stop or crash when RAM ran out. Its drawback is speed: secondary storage is much slower than RAM, so if pages are swapped constantly the computer slows down. Adding more RAM reduces the need for it.

## Cloud storage

Cloud storage keeps data on **remote servers** owned by a provider, reached through the internet, rather than on a device the user owns ("locally"). The syllabus stresses that **physical servers and storage are still needed**: the cloud is someone else's hardware in a data centre.

| Advantages of cloud storage | Disadvantages of cloud storage |
|---|---|
| Files can be accessed from any device with an internet connection | No internet connection means no access |
| Provider handles backups and hardware maintenance | Ongoing subscription cost for larger amounts |
| Easy to share files and work on them together | Data is held by a third party, raising security and privacy concerns |
| Capacity can be increased without buying new drives | Upload and download speed depends on the connection |

## Worked example 1: a capacity calculation

A photographer's camera saves each photo as 8 MiB. How many photos fit on a 64 GiB SD card?

- 64 GiB = 64 × 1024 MiB = 65 536 MiB.
- 65 536 ÷ 8 = **8192 photos**.

The answer uses 1024 because the syllabus uses binary prefixes (kibi, mebi, gibi).

## Worked example 2: choosing storage

**Question:** A geologist records data on a laptop while working outdoors on rough ground. Explain why a solid-state drive is more suitable than a hard disk drive. [4]

**Model answer:** An SSD has no moving parts [1], so it is less likely to be damaged if the laptop is knocked or dropped on rough ground [1]. It uses less power than an HDD [1], so the laptop's battery lasts longer when there is no mains supply [1].

Each point is a feature followed by its effect in the scenario. "SSDs are better" or "SSDs are faster" alone would score little.

## Common mistakes

- Calling secondary storage "memory". Memory usually means RAM; an HDD is storage.
- Saying ROM stores "the operating system". Most of the operating system is stored on secondary storage and loaded into RAM; ROM holds the start-up instructions.
- Saying optical discs are read by magnetism, or HDDs by laser.
- Describing virtual memory as "using the cloud" or "extra RAM chips". It is space on secondary storage.
- Claiming cloud storage needs no hardware.
- Saying flash memory is volatile because it uses transistors.

## Exam technique

- **Describe the operation of** a storage type: give the physical steps in order (platter, tracks and sectors, electromagnet; laser, pits and lands; control and floating gates).
- **Explain why** a computer needs RAM and ROM: tie volatility to start-up.
- **Explain** a storage choice: feature, then effect in the scenario.
- **Advantages and disadvantages** of cloud storage: compare directly with local storage, as the syllabus does.

Revise with the [Data storage revision notes](/resources/cambridge-igcse-computer-science-0478-data-storage-revision-notes/) and test yourself with the [Data storage practice questions](/resources/cambridge-igcse-computer-science-0478-data-storage-practice/).
