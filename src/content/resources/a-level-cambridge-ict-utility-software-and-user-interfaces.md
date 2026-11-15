---
title: "Cambridge A Level Information Technology (ICT): Utility Software and User Interfaces (9626)"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "utility-software"
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "user-interfaces"
description: "Study guide to 9626 sections 2.3 and 2.5: anti-virus, backup, compression, defragmentation and formatting, and CLI, GUI, dialogue and gesture interfaces."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

**Utility software (2.3) and user interfaces (2.5) are two sections of Topic 2 Hardware and software
in Cambridge International AS & A Level Information Technology 9626.** Utilities are system programs
that maintain, protect and organise a computer, such as anti-virus, backup, compression,
defragmentation and formatting tools. User interfaces are the ways people interact with a computer:
command line, graphical, dialogue and gesture-based. For both, the syllabus asks for their uses and
their advantages and disadvantages, so exam answers must be applied to a scenario.

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL INFORMATION TECHNOLOGY (9626), 2025–2027**

**2.3 Utility software**
- The need for utility software, including anti-virus, back-up, data compression, disk defragmentation (including the structure of hard disk storage), formatting (low-level, partitioning and high-level), file copying and deleting files
- Types of utility software, including file management systems, disk management systems and data compression utilities
- Uses of the different types of utility software
- Advantages and disadvantages of different types of utility software

**2.5 User interfaces**
- Types: command line interface, graphical user interface, dialogue interface, gesture-based interface
- Uses of the different types
- Advantages and disadvantages of the different types

## Why is utility software needed?

| Utility | What it does | Why it is needed |
|---|---|---|
| Anti-virus | Scans files and memory for malware by comparing them with signatures and by watching for suspicious behaviour (heuristics); quarantines or deletes threats | Malware can corrupt or steal data and slow the system |
| Back-up | Copies files to another medium or location, fully or incrementally, often on a schedule | Allows data to be restored after hardware failure, deletion or ransomware |
| Data compression | Reduces file size with lossless or lossy methods | Saves storage and speeds up transmission |
| Disk defragmentation | Rearranges fragmented file blocks on a hard disk into contiguous sectors and groups free space | Reduces read-head movement, so files load faster |
| Formatting | Prepares a storage medium for use | Sets up the structure the operating system needs |
| File copying | Duplicates files or folders to another location | Making copies for sharing or for safety |
| Deleting files | Removes the file's entry so its space can be reused; secure deletion overwrites the data | Frees space and protects confidential data |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--04-backup-full-incremental.webp" width="900" height="810" alt="Four days of backups with six files each. Full backups copy 24 files over four days. Incremental backups copy 6, then 1, 2 and 1 files, 10 in total. Restoring Thursday needs the Monday full backup plus the Tuesday, Wednesday and Thursday sets." loading="lazy">
  <figcaption>An incremental backup copies only changes, but a restore needs every set (file numbers are illustrative).</figcaption>
</figure>


## How does defragmentation relate to hard disk structure?

A hard disk stores data on spinning **platters** divided into concentric **tracks**, each split into
**sectors**; groups of sectors form **clusters** (blocks). As files are created, edited and deleted,
a file's clusters become scattered across the disk (**fragmentation**). Reading a fragmented file
needs many movements of the read/write head, slowing access. A defragmenter moves the clusters of
each file next to each other. Solid-state drives have no moving head, so defragmentation gives little
benefit and adds unnecessary write cycles; operating systems use other optimisation (such as TRIM)
for them instead.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--01-disk-structure.webp" width="900" height="760" alt="A hard disk platter seen from above with rings called tracks cut into slices called sectors. One sector is shaded gold and a group of three neighbouring sectors is outlined as a cluster. A read/write head on an arm sits over one track." loading="lazy">
  <figcaption>Tracks, sectors and clusters on a spinning platter, with the read/write head.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--02-defrag.webp" width="900" height="830" alt="Two rows of twelve disk clusters. Before defragmentation, file A is split into three pieces and the head moves twice to read it. After, file A is one piece, the head moves zero times and free space is grouped together. A note says SSDs gain little because they have no moving head." loading="lazy">
  <figcaption>Defragmenting moves a file's clusters together so the head moves less (the cluster layout is illustrative).</figcaption>
</figure>


## What are the three levels of formatting?

1. **Low-level formatting** marks out the tracks and sectors on the physical medium; on modern
   drives it is normally done by the manufacturer.
2. **Partitioning** divides the disk into one or more logical sections, each of which the operating
   system treats as a separate drive.
3. **High-level formatting** creates the file system on a partition, such as the directory
   structure and file allocation table, so files can be stored; a quick format does not erase the
   data, so it may be recoverable.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--03-formatting-levels.webp" width="900" height="850" alt="Three stacked steps: low-level formatting marks tracks and sectors (normally by the manufacturer), partitioning divides the disk into logical drives, and high-level formatting creates the file system with directories and a file allocation table. A quick format keeps the data, so it may be recoverable." loading="lazy">
  <figcaption>Low-level, partitioning and high-level formatting in order.</figcaption>
</figure>


## What are the types of utility software?

- **File management systems:** create, copy, move, rename, search and delete files and folders, and
  set permissions; for example the operating system's file explorer.
- **Disk management systems:** partition, format, check for errors, defragment and monitor disk
  space.
- **Data compression utilities:** create compressed archives, such as zip files, and extract them.

| | Advantages | Disadvantages |
|---|---|---|
| Built into the operating system | Free; compatible; regularly updated | May lack advanced features |
| Third-party utilities | More features and control | Cost; compatibility risks; may slow the system |
| Automatic scheduling | Tasks happen without user effort | Can run at inconvenient times or use resources |

## What types of user interface are there?

**Command line interface (CLI).** The user types commands, such as file or network commands, at a
prompt. *Uses:* system administration, programming, scripting and controlling servers remotely.
*Advantages:* fast for expert users; precise control; uses few system resources; commands can be
combined in scripts. *Disadvantages:* commands must be learned and typed exactly; errors are easy to
make; unsuitable for beginners.

**Graphical user interface (GUI).** Uses windows, icons, menus and a pointer (WIMP), or touch
screens. *Uses:* general home and office computing, tablets and phones. *Advantages:* intuitive and
easy to learn; no need to remember commands; supports multitasking with several windows.
*Disadvantages:* uses more memory and processing power; can be slower than a CLI for repetitive tasks;
less precise control of system settings.

**Dialogue interface.** The user interacts by spoken or typed conversation, and the system replies,
for example voice assistants, telephone banking menus and in-car voice control. *Uses:* hands-free
operation, accessibility for users with limited mobility or sight. *Advantages:* natural; hands
remain free, for example while driving. *Disadvantages:* recognition errors with accents or
background noise; limited vocabulary; privacy concerns when speaking aloud.

**Gesture-based interface.** The system recognises body or hand movements through cameras, sensors
or touch screens, for example swiping and pinching on phones or motion-controlled games. *Uses:*
mobile devices, gaming, interactive displays, sterile environments where touching is undesirable.
*Advantages:* intuitive and engaging; no extra input device needed. *Disadvantages:* gestures can be
misinterpreted; tiring over long periods; needs suitable sensors and lighting.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--05-interface-types.webp" width="900" height="1090" alt="Four panels showing a command line terminal, a GUI window with icons and a pointer, a spoken conversation with replies, and a phone being pinched and swiped. Each lists where it is used." loading="lazy">
  <figcaption>The four interface types and what each is used for.</figcaption>
</figure>


## How should you answer scenario questions?

Name the utility or interface, describe what it does, then link an advantage or disadvantage to the
situation given. For example: "A network technician managing many servers would use a CLI because
commands can be scripted to configure all servers at once, which is quicker than using a GUI on each."

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--06-scenario-answer.webp" width="900" height="890" alt="Three steps for scenario answers using the lesson's server example: name the interface (CLI), say what it does (typed commands can be scripted), then link it to the situation (one script configures all servers, quicker than a GUI on each)." loading="lazy">
  <figcaption>Name, describe, then link to the situation.</figcaption>
</figure>


## Frequently asked questions

**Is defragmentation needed on an SSD?**
Generally no: SSDs have no moving read/write head, so
scattered blocks do not slow access, and unnecessary rewriting shortens their life.

**What is the difference between a full and an incremental backup?**
A full backup copies all
selected data; an incremental backup copies only data changed since the last backup, which is faster
but needs every incremental set to restore.

**Is a touch screen a GUI or a gesture interface?**
Touch screens display a GUI; swipes, pinches
and other movements on them are gestures.

## Related pages

- [Utility Software practice questions](/resources/a-level-ict-utility-software-practice/)
- [Hardware and Software study guide](/resources/a-level-cambridge-ict-hardware-and-software/)
- [Hardware and Software revision notes](/resources/a-level-ict-hardware-software-revision-notes/)

*Source: Cambridge International, Cambridge International AS & A Level Information Technology 9626
syllabus for 2025, 2026 and 2027, sections 2.3 and 2.5.*
