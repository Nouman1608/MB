---
title: "OxfordAQA A-Level Computer Science (9645): Secondary storage -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Secondary Storage Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.5
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "secondary-storage-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.7.5: need for secondary storage, hard disk and SSD operation, comparisons, cloud storage and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.7.5 Secondary storage** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.7 Computer organisation and architecture). For explanations and worked examples, see the [secondary storage study guide](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage/); then practise with the [secondary storage practice questions](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-practice/).

## What the specification requires

- Explain the **need for secondary storage** and distinguish it from **main memory**.
- Know the main **characteristics, purposes, suitability** and **principles of operation** of the **magnetic hard disk** and the **solid-state drive (SSD)**.
- **Compare** hard disks and SSDs and **judge suitability** for different applications.
- Explain the term **cloud storage**: data stored on servers at a remote location, accessed via the Internet.
- Explain the **advantages and disadvantages** of cloud storage compared with local storage.

## Key terms

| Term | Meaning |
|---|---|
| Secondary storage | Non-volatile, high-capacity storage for programs and files kept long term |
| Volatile | Contents are lost when the power is removed |
| Platter | Rigid disk coated with magnetic material in a hard drive |
| Track / sector | A concentric circle on a platter / a division of a track |
| Read/write head | Part on a moving arm that reads or changes the magnetisation of the surface |
| Seek time | Time for the head to move to the correct track |
| Rotational latency | Time for the wanted sector to rotate under the head |
| Flash memory | Electronic memory that stores bits as trapped charge in cells; used in SSDs |
| Wear levelling | Controller spreads writes so cells wear evenly |
| Cloud storage | Storage on remote servers accessed via the Internet |

## Main memory or secondary storage?

| | Main memory | Secondary storage |
|---|---|---|
| Volatile | Yes | No |
| Processor reads it directly | Yes | No; copied to main memory first |
| Speed | Fast | Slower |
| Capacity | Smaller | Larger |
| Cost per byte | Higher | Lower |

## How they work

**Magnetic hard disk**

- Platters coated with magnetic material spin at a constant speed.
- Data is stored as regions magnetised in one of two directions (0 and 1), arranged in tracks and sectors.
- A read/write head on a moving arm **seeks** the track, then waits for the sector to rotate underneath.
- Average rotational latency is half a revolution: at 7 200 rpm, 60 ÷ 7 200 = 8.33 ms per revolution, so about 4.17 ms.

**Solid-state drive**

- Flash memory cells trap electrical charge; the charge represents the stored bit.
- No moving parts. Access time does not depend on where the data is.
- Cells are grouped into pages and blocks; a block must be erased before rewriting.
- A controller manages placement and wear levelling. Cells survive a limited number of erase and write cycles.

## Hard disk against SSD

| Feature | Hard disk | SSD |
|---|---|---|
| Access speed | Slower | Faster |
| Cost per GB | Lower | Higher |
| Moving parts | Yes | No |
| Robust when moved | Less | More |
| Noise and power | Noisier, more power | Silent, less power |
| Best for | Bulk storage, archives, backups, large media libraries | Laptops, phones, system drives, servers needing fast random access |

## Calculations to practise

- **Capacity:** number of files = drive size ÷ file size (state whether 1 GB = 1 000 MB or 1 024 MB).
- **Transfer time (storage):** size ÷ transfer rate. An 8 GB file at 150 MB/s takes 8 000 ÷ 150 = 53.3 s; at 500 MB/s it takes 16 s.
- **Transfer time (network):** size in bits ÷ bandwidth in bits per second. A 1.5 GB upload at 20 Mbit/s takes 1.5 × 10^9 × 8 ÷ 20 × 10^6 = 600 s.
- Convert bytes to bits by multiplying by 8, and check whether the rate is in bytes (B) or bits (b) per second.

## Cloud storage against local storage

| | Cloud storage | Local storage |
|---|---|---|
| Access | Any device with an Internet connection | Only where the device is, or on the local network |
| Capacity | Easy to increase | Buy more hardware |
| Backups and maintenance | Usually looked after by the provider | Owner's responsibility |
| Cost | Usually a recurring fee | Mostly a one-off purchase |
| Speed | Limited by Internet bandwidth | Limited by the drive or local network |
| Without Internet | Cannot be reached | Still works |
| Control and privacy | Depends on the provider | Owner has direct control |

## Choosing a device: scenarios

| Scenario | Choice | Reason to give |
|---|---|---|
| Phone or tablet | SSD (flash) | No moving parts, low power, small and light |
| Laptop operating system drive | SSD | Fast start-up and program loading; survives movement |
| Home backup of a large photo library | Hard disk | Low cost per GB and large capacity; speed matters less |
| Company file server with many small random requests | SSD | No seek time, so quick responses |
| Sharing a document with a group in different places | Cloud storage | Accessible from anywhere; easy to share |
| Working with confidential data in a place with no Internet | Local storage | No connection needed; owner controls the data |

## Four-mark pattern for "compare"

1. Name the feature (for example, access speed).
2. Say what is true of the first device.
3. Say what is true of the second device.
4. Give the reason (for example, moving parts against electronic access).

Example: "An SSD gives faster access than a hard disk. An SSD reads data electronically with no moving parts, whereas a hard disk must move the head to the track and wait for the sector to rotate under it."

## Exam traps

- **Volatile and non-volatile.** Main memory is volatile. Secondary storage keeps its data without power.
- **Hard disks do not use lasers.** That is optical media.
- **SSD wear.** Limited write cycles, not limited reads.
- **Compare like with like.** Say what each device does for the same feature.
- **Bits and bytes.** Network speeds are quoted in bits per second; file sizes in bytes.
- **Link to the scenario.** A recommendation without a reason from the question scores little.

## Quick self-test

1. Why does a computer need secondary storage?
2. How are bits stored on a magnetic hard disk?
3. What is rotational latency?
4. How does an SSD store a bit?
5. Why is an SSD silent?
6. Give two reasons why an SSD suits a smartphone.
7. Give one reason why a hard disk suits an archive of video.
8. Define cloud storage.
9. Give two advantages of cloud storage over local storage.
10. Give two disadvantages of cloud storage.
11. How long does it take to upload 2 GB at 50 Mbit/s?
12. What is wear levelling?

### Answers

1. Main memory is volatile and limited, so programs and files need non-volatile storage for the long term.
2. As tiny regions of the platter surface magnetised in one of two directions.
3. The time spent waiting for the required sector to rotate under the read/write head.
4. As electrical charge trapped in a flash memory cell.
5. It has no moving parts.
6. Any two from: no moving parts so it survives being carried around, low power use, small and light, fast access.
7. Lower cost per gigabyte, and very large capacity.
8. Storage of data on servers at a remote location that is accessed via the Internet.
9. Any two from: access from anywhere, easy to expand, provider looks after backups, easy sharing, data is safe from local damage.
10. Any two from: needs an Internet connection, speed limited by bandwidth, running costs, depends on the provider for security and availability.
11. 2 × 10^9 × 8 ÷ 50 × 10^6 = 320 s.
12. The controller spreads writes across the cells so that no cell wears out sooner than the others.

## More on this topic

- [Secondary storage study guide](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage/)
- [Secondary storage practice questions](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-practice/)
- [Logic gates revision notes](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.5 Secondary storage.
