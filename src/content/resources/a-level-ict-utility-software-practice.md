---
title: "Cambridge A Level Information Technology (ICT): Utility Software — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "utility-software"
description: "Original questions with mark-scheme answers on anti-virus, backup, compression, defragmentation, formatting and file utilities for Cambridge 9626 2.3."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Utility Software and User Interfaces study guide](/resources/a-level-cambridge-ict-utility-software-and-user-interfaces/) · [Hardware and Software revision notes](/resources/a-level-ict-hardware-software-revision-notes/)

---

**What do these questions practise?** Section 2.3 Utility software of Cambridge International AS &
A Level Information Technology 9626 (2025–2027): why utilities are needed (anti-virus, back-up,
data compression, disk defragmentation and hard disk structure, formatting, file copying and
deleting), the types of utility software (file management, disk management, data compression), their
uses, and their advantages and disadvantages.

## Section A

**1.** State what is meant by *utility software*. **[1]**

**2.** Describe **two** methods an anti-virus utility uses to detect malware. **[4]**

**3.** Describe the structure of data storage on a hard disk, using the terms *track*, *sector* and
*cluster*. **[3]**

**4.** Name the **three** levels of formatting and state what each does. **[6]**

## Section B

**5.** Explain why a hard disk becomes fragmented, and how defragmentation improves performance. **[4]**

**6.** Explain why defragmenting a solid-state drive is not recommended. **[2]**

**7.** A small accountancy firm keeps client records on an office server. Describe a suitable backup
strategy, and explain why it is needed. **[5]**

**8.** Explain the difference between deleting a file normally and using a secure deletion utility. **[3]**

**9.** Describe **two** uses of a data compression utility, and give **one** disadvantage. **[3]**

**10.** Compare a file management system with a disk management system, giving **two** tasks each
performs. **[4]**

## Section C

**11.** A school is deciding whether to rely on the utilities built into its operating system or to
buy a third-party utility suite. Discuss the advantages and disadvantages of each option. **[6]**

---

## Answers

**1.** System software that helps to maintain, protect, manage or optimise a computer system and its
data [1].

**2.** Any two described: **signature-based detection**: files are compared with a database of known
malware signatures, which must be kept up to date [2]; **heuristic / behaviour-based detection**:
programs are monitored for suspicious actions, such as modifying system files, so new malware can be
caught [2]; **real-time scanning** of files as they are opened or downloaded [2]. Credit
**quarantine** of suspect files as part of a description.

**3.** The disk's platters are divided into concentric circles called tracks [1]; each track is
divided into sectors, the smallest units that can be read or written [1]; a cluster (block) is a
group of sectors that the file system allocates to a file as a unit [1].

**4.** Low-level formatting marks out tracks and sectors on the medium [2]; partitioning divides the
disk into separate logical drives [2]; high-level formatting sets up a file system on a partition,
including the directory and allocation table [2].

**5.** When files are saved, edited and deleted, free space becomes scattered, so new or enlarged
files are stored in clusters in different places on the disk [1–2]. Reading a fragmented file needs
the read/write head to move to many locations, which is slow [1]. Defragmentation moves each file's
clusters next to each other and gathers free space, so files can be read with less head movement and
load faster [1].

**6.** SSDs have no moving read/write head, so access time is the same wherever data is stored, so
there is little speed gain [1]; defragmentation causes many unnecessary write operations, which wear
the flash memory and shorten its life [1].

**7.** Full backup of the server weekly, with incremental or differential backups each night [1–2];
backups stored off-site or in the cloud as well as on site [1]; encryption of backup copies because
client data is confidential [1]; regular test restores [1]. Needed so data can be recovered after
hardware failure, accidental deletion, fire, theft or a ransomware attack, and to meet the firm's
legal duty to protect client records [1]. Maximum 5.

**8.** Normal deletion removes the file's entry from the directory and marks its space as free, but
the data remains on the disk until overwritten [1], so it can often be recovered with recovery
software [1]. Secure deletion overwrites the data, sometimes several times, so it cannot be
recovered, protecting confidential information [1].

**9.** Uses, any two: reduce file size to save storage space [1]; make files quicker to send by email
or upload [1]; combine many files into one archive [1]. Disadvantage, any one: lossy compression loses
data and reduces quality [1]; time is needed to compress and decompress [1].

**10.** File management: create, rename, move, copy, delete and search for files and folders; set
permissions [2 for two tasks]. Disk management: partition and format drives; check for and repair
errors; defragment; show free space [2 for two tasks].

**11.** Built-in, advantages: free with the operating system [1]; fully compatible and updated with
the system [1]; simple for staff to use [1]. Disadvantages: fewer features, for example limited
scheduling or reporting [1]; may be less effective than specialist products [1]. Third-party,
advantages: more advanced features, central management across many computers, better reporting [1];
often stronger protection, such as anti-virus with extra layers [1]. Disadvantages: licence cost [1];
possible conflicts with the operating system or other software [1]; may use more resources and slow
older computers [1]. A justified conclusion for the school is needed for full marks. Maximum 6.

## Frequently asked questions

**Is backing up the same as file copying?**
Copying duplicates files once; a backup utility usually
automates copies on a schedule, keeps versions and supports restoration.

**Does a quick format erase data?**
No. It rebuilds the file system structures, so the old data can
often still be recovered until overwritten.

*Based on the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025,
2026 and 2027, section 2.3.*
