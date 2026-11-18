---
title: "Cambridge IGCSE Computer Science (0478): Data storage -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 3.3: RAM and ROM, HDD, optical and flash storage, virtual memory, cloud storage and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 3.3, Data storage. The full explanations and two worked examples are in the [Data storage study guide](/resources/cambridge-igcse-computer-science-0478-data-storage/).

## Primary or secondary? The one-line test

- **Primary**: directly accessed by the CPU (RAM, ROM).
- **Secondary**: not directly accessed by the CPU; needed for more permanent storage (HDD, CD, DVD, Blu-ray, SSD, SD card, USB drive).

## Key terms

| Term | Definition |
|---|---|
| Volatile | Contents are lost when power is removed |
| Non-volatile | Contents remain without power |
| RAM | Volatile, read-write primary storage for programs and data in use |
| ROM | Non-volatile, read-only primary storage for start-up instructions |
| Platter | Magnetic disk inside an HDD |
| Track / sector | Concentric rings on a platter / divisions of each track |
| Read/write head | Uses an electromagnet to magnetise or detect areas of a platter |
| Pit / land | Burnt and unburnt areas on an optical disc |
| Floating gate | Part of a flash cell where charge is trapped to store a bit |
| Control gate | Part of a flash cell that controls charge onto the floating gate |
| Virtual memory | Area of secondary storage used as an extension of RAM |
| Page | Block of data moved between RAM and virtual memory |
| Cloud storage | Data held on remote servers and accessed over the internet |

## RAM versus ROM in five comparisons

1. RAM is volatile; ROM is non-volatile.
2. RAM is read and write; ROM is read only.
3. RAM holds programs and data currently in use; ROM holds the start-up instructions.
4. RAM contents change constantly; ROM contents are fixed.
5. RAM is usually much larger than ROM.

**Why both?** At switch-on RAM is empty, so the CPU runs start-up instructions from ROM; these load the operating system into RAM, where working data can be written.

## How each secondary storage type works

**Magnetic (HDD)**
- Platters spin; read/write head moves on an arm.
- Surface split into tracks and sectors.
- Electromagnet magnetises areas in one of two directions (1 or 0); reading detects the direction.

**Optical (CD, DVD, Blu-ray)**
- Laser burns pits; unburnt areas are lands.
- Reading laser: lands reflect strongly, pits reflect less.
- Blu-ray uses the shortest wavelength (blue-violet), so smaller pits and the most data.

**Solid-state (SSD, SD card, USB drive)**
- NAND or NOR flash; transistors as control gates and floating gates.
- Charge trapped on the floating gate represents a bit; stays without power.
- No moving parts.

## Comparison table

| | HDD | Optical | Solid-state |
|---|---|---|---|
| Moving parts | Yes | Yes (in the drive) | No |
| Access speed | Medium | Slow | Fast |
| Capacity | High | Low | Medium to high |
| Cost per GiB | Low | Very low per disc | Higher |
| Durability | Damaged by knocks while running | Scratches | Resistant to knocks; limited rewrites |
| Portability | Low (internal) | High | High |

## Virtual memory sequence

1. RAM is full.
2. Pages not currently needed are moved to virtual memory on secondary storage.
3. Space in RAM is freed for the active program.
4. When a moved page is needed, it is transferred back into RAM.

**Why necessary:** stops the computer crashing or refusing to open programs when RAM runs out.
**Drawback:** secondary storage is slower than RAM, so heavy swapping slows the computer.

## Cloud versus local

| Cloud advantages | Cloud disadvantages |
|---|---|
| Access from anywhere with internet | No internet, no access |
| Provider maintains and backs up hardware | Subscription cost |
| Easy sharing and collaboration | Third party holds the data: security and privacy risk |
| Capacity scales easily | Speed depends on connection |

Remember: cloud storage still uses physical servers and storage.

## Capacity reminder

Use 1024: 1 GiB = 1024 MiB. A 128 GiB drive holding 16 MiB videos stores 128 × 1024 ÷ 16 = 8192 videos.

## Exam traps

- **ROM holds the operating system.** No: ROM holds start-up instructions; the OS is on secondary storage.
- **Magnetic versus optical mix-up.** HDDs use electromagnets; discs use lasers.
- **Virtual memory is not the cloud** and not extra RAM chips.
- **"Solid-state is always better."** It costs more per GiB and has limited rewrite cycles.
- **Cloud needs no hardware.** It needs physical servers.
- **Vague advantages.** "Cloud is convenient" scores less than "the files can be opened from any device with an internet connection".

## Self-test

1. What does "directly accessed by the CPU" tell you about a storage device?
2. Give two differences between RAM and ROM.
3. Why must start-up instructions be stored in ROM rather than RAM?
4. Name the parts of a platter surface that organise data on an HDD.
5. How is data written to an HDD?
6. How does an optical drive read the difference between a pit and a land?
7. Why can a Blu-ray disc hold more data than a CD?
8. In a flash memory cell, where is charge trapped to store data?
9. Give two reasons a USB drive is suitable for carrying files between home and school.
10. Describe what happens to data when virtual memory is used.
11. Give one disadvantage of virtual memory.
12. Give one advantage and one disadvantage of cloud storage compared with local storage.

**Answers**

1. It is primary storage, such as RAM or ROM.
2. Any two: RAM is volatile, ROM is not; RAM is read-write, ROM is read only; RAM holds data in use, ROM holds start-up instructions.
3. RAM is volatile and empty at switch-on; ROM keeps its contents without power.
4. Tracks and sectors.
5. An electromagnet in the read/write head magnetises areas of the spinning platter in one of two directions.
6. Lands reflect the laser light back to a sensor; pits reflect less, and the change is read as binary.
7. Its laser has a shorter wavelength, so pits are smaller and tracks closer together.
8. On the floating gate.
9. Any two: small and portable; no moving parts so robust; non-volatile; large enough capacity for school files.
10. Pages not currently needed are moved from RAM to secondary storage, and moved back when needed.
11. It is slower than RAM, so the computer slows down if pages are swapped often.
12. Advantage: access from any device with internet (or provider backs up data). Disadvantage: no access without internet (or security risk from a third party).
