---
title: "OxfordAQA A-Level Computer Science (9645): Secondary storage"
seoTitle: "OxfordAQA A-Level CS 9645 Secondary Storage Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.7.5 in depth: why secondary storage is needed, how hard disks and SSDs work, comparing them, and cloud versus local storage."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.7.5 Secondary storage** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.7 Computer organisation and architecture (AS). The specification asks you to explain the **need for secondary storage** and to distinguish it from main memory; to know the characteristics, purposes, suitability and **principles of operation** of the **magnetic hard disk** and the **solid-state drive (SSD)**; to make comparisons between them and judge their suitability for different applications; to explain the term **cloud storage**; and to explain the advantages and disadvantages of cloud storage compared with local storage.

For quick recall use the [secondary storage revision notes](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-revision-notes/), and test yourself with the [secondary storage practice questions](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-practice/). The [computer organisation and architecture study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/) covers all of topic 3.7; this page goes further on how the devices work and on the calculations used to compare them.

## Why secondary storage is needed

Main memory holds the programs and data in use now, and it is **volatile**: when the power goes off the contents are lost. A computer therefore needs somewhere to keep programs and files for the long term. That is **secondary storage**. It is **non-volatile**, so the data stays when the power is off, and it is usually much larger and cheaper per byte than main memory.

| Feature | Main memory | Secondary storage |
|---|---|---|
| Volatile? | Yes | No |
| Directly accessed by the processor? | Yes, over the buses | No: data is copied into main memory first |
| Speed | Fast | Much slower |
| Capacity | Smaller | Larger |
| Cost per byte | Higher | Lower |
| Holds | Programs and data in use now | Operating system, programs and files kept long term |

When a program is started, the operating system copies it from secondary storage into main memory. When you save a file, the data goes the other way.

## The magnetic hard disk

### Principles of operation

A hard disk drive has one or more **platters**, rigid disks coated with a magnetic material. The platters are spun at a constant speed, for example 5 400 or 7 200 revolutions per minute, by a motor. Each surface has a **read/write head** carried on a moving arm.

- Data is stored as tiny regions of the surface that are magnetised in one of two directions. The two directions represent the binary values 0 and 1.
- The surface is organised into concentric circles called **tracks**, and each track is divided into **sectors**.
- To read or write, the arm **moves the head to the correct track** (the *seek*), then the head waits until the right sector **rotates underneath it** (the *rotational latency*). To write, the head changes the magnetisation of the surface. To read, it detects the direction of the magnetisation.

**Worked example: rotational latency.** At 7 200 revolutions per minute, one revolution takes 60 ÷ 7 200 s = 8.33 ms. On average the wanted sector is half a revolution away, so the average rotational latency is about **4.17 ms**. At 5 400 revolutions per minute it is 60 ÷ 5 400 = 11.11 ms per revolution, about **5.56 ms** on average. Moving parts therefore set a limit on how quickly a hard disk can respond.

### Characteristics

- **Large capacity at a low cost per gigabyte.**
- **Slower access**, especially for scattered (random) data, because of the seek and rotational latency.
- **Moving parts**: they make noise, use power, produce heat and can be damaged by knocks and drops while running.
- Data stays when the power is off.

## The solid-state drive (SSD)

### Principles of operation

An SSD has **no moving parts**. It stores data in **flash memory** made of electronic cells. Each cell holds an electrical charge, trapped in a layer of the transistor, and the amount of charge represents the stored bit (or bits). The charge stays in place when the power is off, which is why the data is not lost.

- Cells are grouped into **pages**, and pages are grouped into **blocks**.
- Data is read and written a page at a time, but a block must be **erased** before its cells can be rewritten.
- A **controller** inside the drive decides where data goes, keeps track of what is stored where, and spreads writes around so that no cell is worn out too soon (wear levelling).

Because any location can be reached electronically in a similar time, access does not depend on where the data is stored.

### Characteristics

- **Very fast access and transfer**, with no seek or rotational delay.
- **Silent, low power, shock resistant**, because nothing moves.
- **Higher cost per gigabyte** than a hard disk.
- Each cell can be erased and rewritten only a **limited number of times**, so the drive wears with heavy writing. Controllers manage this, and for most users it is not a problem during the useful life of the device.

## Comparing hard disks and SSDs

| Feature | Magnetic hard disk | SSD |
|---|---|---|
| Technology | Magnetised regions on spinning platters | Charge stored in flash memory cells |
| Moving parts | Yes | No |
| Access speed | Slower; depends on seek and rotation | Faster |
| Cost per GB | Lower | Higher |
| Typical capacity | Very large | Large, but often smaller for the same price |
| Robustness | Can be damaged by knocks while running | More robust |
| Noise and power | Noisier; more power | Silent; less power |
| Write wear | Not an issue in the same way | Limited write cycles per cell |

**Worked example: transfer times.** An 8 GB file is copied. The question states that the hard disk transfers data at 150 MB/s and the SSD at 500 MB/s. Using 1 GB = 1 000 MB:

- Hard disk: 8 000 ÷ 150 = **53.3 s**.
- SSD: 8 000 ÷ 500 = **16 s**.

**Worked example: capacity.** How many 5 MB photographs fit on a 256 GB drive? 256 GB = 256 000 MB, and 256 000 ÷ 5 = **51 200** photographs.

### Judging suitability

A good answer ties the device to the **needs of the application**.

- **Laptop, phone or tablet:** SSD (flash). It is light, silent, uses little power and survives being carried around.
- **Computer's system drive:** SSD, because fast start-up and loading matters.
- **Large archive, video library or backup:** hard disk, because the cost per gigabyte is lower and capacity is large.
- **Server with heavy random access:** SSD, because the lack of seek time greatly improves response time.

Many systems use both: an SSD for the operating system and active programs, and a hard disk for bulk storage.

## Cloud storage

The specification defines **cloud storage** as storage of data on **servers at a remote location that is accessed via the Internet**. The user does not own or manage the servers. A provider does, and the data is stored on the provider's servers.

**Advantages compared with local storage**

- Data can be accessed **from any device and any place** with an Internet connection.
- **Capacity can grow** as needed without buying hardware.
- The provider usually looks after **backups and hardware maintenance**.
- Files are easy to **share and collaborate** on.
- Data is held in a different place from the user's equipment, so a fire, theft or failure at home or school does not destroy it.

**Disadvantages compared with local storage**

- An **Internet connection** is needed. Without one the data cannot be reached.
- Speed depends on the **bandwidth** of the connection. Large files take longer to move.
- There is often a **running cost**, such as a subscription, instead of a one-off purchase.
- The user depends on the provider for **security, privacy and availability**. A provider fault can stop access.
- The data is stored on someone else's servers, which may be in another country, raising questions about who can access it.

**Worked example: upload time.** A 1.5 GB video is uploaded at 20 Mbit/s. 1.5 GB = 1.5 × 10^9 × 8 bits = 1.2 × 10^10 bits. Time = 1.2 × 10^10 ÷ 20 × 10^6 = **600 s**, which is 10 minutes. The same file copied to a local SSD at 500 MB/s would take only 3 s, which shows why speed over the Internet matters when comparing cloud and local storage.

## Exam technique

- **Distinguish secondary storage from main memory** using volatility, direct access by the processor, speed and capacity.
- **Describe the principle, not just the name.** For a hard disk: magnetised regions, spinning platter, moving head. For an SSD: charge in flash cells, no moving parts, controller.
- **Compare using the same feature on both sides.** "SSDs are faster because there are no moving parts, whereas hard disks must wait for the head to move and the platter to rotate."
- **Recommend and justify.** Name a device for the application and give the reason from the needs given.
- **For cloud questions, give a balanced pair.** One advantage and one disadvantage, both linked to the scenario.

## Common mistakes

- Saying an SSD "has no memory" or is "just a big USB stick". It is flash memory managed by a controller.
- Saying that hard disks use lasers to read data. Optical discs do; magnetic disks do not.
- Saying main memory is "permanent". It is volatile.
- Writing that cloud storage is "stored in the air" or "on the Internet". It is stored on remote servers accessed over the Internet.
- Giving "cheaper" as an advantage of cloud storage without a reason. Compare like with like: no hardware to buy, but a recurring fee.
- Forgetting to link the answer to the situation described in the question.

## Next steps

- [Secondary storage revision notes](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-revision-notes/)
- [Secondary storage practice questions](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-practice/)
- [Logic gates study guide](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.5 Secondary storage.
