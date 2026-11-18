---
title: "Cambridge O Level Computer Science (2210): Data storage"
resourceType: "study-guides"
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
description: "Sub-topic 3.3 of Cambridge O Level Computer Science 2210: RAM and ROM, magnetic, optical and solid-state storage, virtual memory and cloud storage."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **sub-topic 3.3 Data storage** in Cambridge O Level Computer Science (2210), for
examination 2026-2028. It goes deeper than the overview in the
[Topic 3 Hardware guide](/resources/o-level-computer-science-hardware/): each storage technology is
followed from the physical mechanism to the exam answer, with the comparisons Cambridge most often asks
you to make.

## What the syllabus asks

The 2210 syllabus lists six learning outcomes for 3.3:

1. Understand what is meant by **primary storage**: storage directly accessed by the CPU, including the
   role of RAM and ROM, why a computer needs both and the difference between them.
2. Understand what is meant by **secondary storage**: storage not directly accessed by the CPU and
   necessary for more permanent storage of data.
3. Describe the operation of **magnetic, optical and solid-state (flash memory)** storage, with examples
   of each.
4. Describe what is meant by **virtual memory**, how it is created and used and why it is necessary.
5. Understand what is meant by **cloud storage**.
6. Explain the **advantages and disadvantages** of storing data on the cloud compared with storing it
   locally.

The dividing line running through all six is the CPU. If the CPU can read a location directly by its
address, it is primary storage; if the data must first be copied into RAM, it is secondary.

## Primary storage: RAM and ROM

**Random access memory (RAM)** holds the instructions and data that are currently in use: the operating
system, the programs that are open and the files being worked on. During the fetch-decode-execute cycle
the CPU fetches every instruction from RAM. RAM can be read from and written to, and it is **volatile**:
its contents are lost when the power is switched off.

**Read only memory (ROM)** holds instructions that must never change and must be present the moment the
computer is switched on, such as the start-up instructions (the bootloader) that load the operating
system from secondary storage into RAM. ROM is **non-volatile**, and in normal use it can only be read.

**Why a computer needs both.** Neither can do the other's job:

- ROM alone is not enough because it cannot be written to, so it cannot hold the programs and data the
  user opens and changes.
- RAM alone is not enough because it is empty when the power comes on, so there would be no instructions
  telling the CPU how to start.

Together, ROM supplies the fixed start-up instructions and RAM supplies a fast, changeable working area.

| Feature | RAM | ROM |
|---|---|---|
| Volatile? | Yes, contents lost without power | No, contents kept without power |
| Can it be written to in normal use? | Yes | No, read only |
| Typical contents | Programs and data currently in use | Start-up instructions (bootloader) |
| Changes while the computer runs? | Constantly | Not in normal use |

## Secondary storage

Secondary storage is **non-volatile** and is where programs and files are kept when they are not in use.
Because the CPU cannot access it directly, a program must be copied from secondary storage into RAM
before it can run. The syllabus names three technologies.

### Magnetic storage: hard disk drive (HDD)

- Data is stored on one or more **platters** coated with a magnetic material. The platters spin at high
  speed.
- Each surface is divided into concentric rings called **tracks**, and each track is divided into
  **sectors**, so every block of data has a physical location.
- A **read/write head** on a moving arm sits just above each surface. To write, an **electromagnet** in
  the head magnetises tiny areas of the surface in one of two directions, representing 1 and 0. To read,
  the head detects the direction of magnetisation as the area passes underneath.
- Because the head must move to the right track and wait for the right sector to spin round, an HDD is
  slower to access data than solid-state storage, and its moving parts can be damaged if the drive is
  dropped while running.

### Optical storage: CD, DVD and Blu-ray

- A **laser** writes data by creating **pits** in the reflective surface of the disc; the flat areas left
  between them are **lands**.
- The data is laid out along a single **spiral track** that runs from the centre of the disc outwards.
- To read, a lower-power laser is shone onto the spinning disc. Lands and pits reflect the light
  differently, and a sensor detects the change as binary data.
- Blu-ray uses a laser with a shorter wavelength than CD and DVD, so its pits can be smaller and packed
  more closely, giving the largest capacity of the three.
- Optical discs are cheap, light and easy to post, but they are slow to access, scratch easily and hold
  far less than a modern hard disk or SSD.

### Solid-state (flash memory): SSD, SD card and USB drive

- Flash memory uses **NAND or NOR** technology and has **no moving parts**.
- Data is stored in a grid of **transistors**. Each one has a **control gate** and a **floating gate**,
  separated by a thin insulating layer.
- To write, a voltage applied to the control gate pushes electrons onto the floating gate, where the
  insulating layer traps them. Whether a floating gate holds charge or not represents the bit stored.
- The trapped charge stays put when the power is removed, which is why flash memory is non-volatile.
- With no moving parts, solid-state storage gives faster access than an HDD, uses less power, runs
  silently and survives knocks, which suits laptops, phones and cameras. Each cell can only be rewritten
  a limited number of times, and it usually costs more per unit of storage than magnetic storage.

## Virtual memory

**What it is.** When RAM is full, part of secondary storage (an HDD or SSD) is used as if it were extra
RAM. That area is virtual memory.

**How it is created and used.** The operating system sets aside space on secondary storage. Programs and
data are divided into fixed-size blocks called **pages**. When RAM is full and a new page is needed, a
page that is not currently being used is moved out of RAM into virtual memory, freeing space; the needed
page is moved into RAM. When the moved-out page is needed again, it is transferred back. The syllabus
wording to remember is: **pages of data are transferred between RAM and virtual memory when needed.**

**Why it is necessary.** Without it, a computer that runs out of RAM could not open another program, or
programs could crash. Virtual memory lets more programs, or larger programs, run than physical RAM alone
would allow.

**The cost.** Secondary storage is much slower than RAM, so the more pages are swapped, the slower the
computer becomes. If pages are swapped constantly, the computer spends more time moving data than
processing it. The lasting fix is to install more RAM.

## Cloud storage

Cloud storage means saving data on **remote physical servers** owned and run by a third party, which the
user reaches over the internet. The syllabus is explicit that the cloud is not storage-free: **physical
servers and storage are needed** to hold the data, they are just somewhere else, and data is usually
copied onto more than one of them.

| | Storing on the cloud | Storing locally |
|---|---|---|
| Access | From any device with an internet connection, anywhere | Only from the device or drive holding the data |
| Hardware cost | No need to buy extra drives; capacity can be increased | Must buy and replace drives yourself |
| Back-up | Provider keeps copies on several servers | User must make their own back-ups |
| Needs internet? | Yes; no connection means no access | No |
| Security and control | Data is held by a third party and could be hacked or seen by others | User controls who has physical access |
| Ongoing cost | Usually a subscription for larger amounts | No ongoing fee once drives are bought |
| Speed | Limited by the connection when uploading and downloading | Usually faster to read and write |

## Worked example: choosing storage

*Question (original):* A photographer takes several hundred high-resolution images at outdoor events and
edits them on a laptop at home. Recommend a type of secondary storage for the camera and explain your
choice. [3]

*Model answer:* Solid-state storage, such as an SD card [1]. It has no moving parts, so it will not be
damaged if the camera is knocked or dropped outdoors [1]. It is small and light enough to fit inside the
camera, and its fast write speed lets images be saved quickly between shots [1].

*Why it scores:* the type is named, and each reason is tied to the scenario (outdoors, inside a camera,
many shots in a row). "SSDs are better" with no link to the camera would not score the explanation marks.

## Common mistakes

- Calling ROM "memory that cannot be changed at all" and RAM "memory that stores everything". Say what
  each holds and whether it is volatile.
- Saying that an HDD reads data with a laser, or that an optical disc uses magnets.
- Describing flash memory as having "a disk inside". It has no moving parts.
- Saying virtual memory is "on the cloud" or "extra RAM chips". It is part of secondary storage on the
  computer itself.
- Leaving out the word **pages** when describing how virtual memory is used.
- Writing that cloud storage needs no hardware. The data still sits on physical servers.
- Giving "it is more secure" as an advantage of the cloud without saying why; security is usually given
  as a disadvantage, because a third party holds the data.

## Exam technique

- **State** or **identify**: a word or phrase is enough, for example "ROM" or "a floating gate".
- **Describe** the operation of a storage type: give the steps in order and use the syllabus's own terms
  (platters, tracks, sectors, electromagnets; pits, lands, laser; control gate, floating gate).
- **Explain**: give the point and then the reason, often linked with "so" or "because".
- **Compare**: make each sentence two-sided, such as "RAM is volatile, whereas ROM is non-volatile".
- **Explain the advantages and disadvantages**: give both sides, and say what the cloud is being compared
  with (local storage).

Condensed recall and a self-test are in the
[data storage revision notes](/resources/cambridge-o-level-computer-science-2210-data-storage-revision-notes/),
and exam-style questions with full answers are in the
[data storage practice questions](/resources/cambridge-o-level-computer-science-2210-data-storage-practice/).

## Official syllabus

Cambridge O Level Computer Science (2210) syllabus for examination 2026-2028, sub-topic 3.3 -
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf).
