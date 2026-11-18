---
title: "Cambridge A Level Information Technology (9626): Utility software"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2.3
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "utility-software"
description: "Cambridge 9626 IT section 2.3 study guide: why utilities are needed, hard disk structure, defragmentation, formatting, backup and compression, worked through."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches **section 2.3 Utility software** of Topic 2 Hardware and software in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [utility software and user interfaces overview](/resources/a-level-cambridge-ict-utility-software-and-user-interfaces/) summarises each utility in a table; this page works through how each one operates, with examples you can reuse in answers. Condense it with the [utility software revision notes](/resources/cambridge-a-level-ict-9626-utility-software-revision-notes/) and test yourself with the [utility software practice questions](/resources/a-level-ict-utility-software-practice/).

## What section 2.3 covers

| Syllabus point | Content |
|---|---|
| The need for utility software | Anti-virus; back-up; data compression; disk defragmentation, including the structure of hard disk storage; formatting (low-level, partitioning, high-level); file copying; deleting files |
| Types of utility software | File management systems; disk management systems; data compression utilities |
| Uses | What each type is used for |
| Evaluation | Advantages and disadvantages of the different types |

A **utility** is a small piece of system software that carries out one maintenance, protection or housekeeping task, so the computer stays secure, organised and efficient. Section 2.2 lists utilities as a type of system software; 2.3 asks why each is needed.

## Anti-virus

Malware can delete or encrypt files, steal data or use the computer to attack others. Anti-virus software protects against it in several ways:

- **Signature checking:** compares files with a database of known malware patterns. This only catches known threats, so the database must be updated frequently.
- **Heuristic checking:** looks for suspicious behaviour or code structures, such as a program trying to change system files, which can catch new malware but may raise false alarms.
- **Real-time scanning:** checks files as they are opened, downloaded or received.
- **Scheduled full scans:** check every file at a set time, often overnight.
- **Quarantine:** moves a suspect file to a secure area where it cannot run, so the user can delete it or restore it if it was a false alarm.

**Trade-off:** constant scanning uses processor time and memory, and an out-of-date signature database leaves the system exposed.

## Back-up

A back-up is a copy of data kept separately so it can be **restored** after hardware failure, accidental deletion, theft, fire or ransomware. Back-up utilities can copy automatically to a schedule.

| Method | What is copied | Restoring needs |
|---|---|---|
| Full | All selected data | The latest full back-up only |
| Incremental | Only data changed since the last back-up of any kind | The last full back-up plus every incremental since |
| Differential | Data changed since the last full back-up | The last full back-up plus the latest differential |

### Worked example 1: planning back-up storage

An office holds 200 GB of data, and about 5 GB changes each working day (figures invented). It runs a full back-up on Monday and incrementals Tuesday to Sunday.

- Storage used in a week = 200 + 6 × 5 = **230 GB**.
- Daily full back-ups would use 7 × 200 = 1,400 GB.
- If the disk fails on Thursday afternoon, restoring needs Monday's full back-up, then the Tuesday, Wednesday and Thursday incrementals, applied in order.

Incremental back-ups save storage and time each night but make restoring slower, and one damaged incremental breaks the chain. Back-ups should be stored away from the original, for example off-site or in the cloud, so one fire does not destroy both.

## Data compression

Compression reduces the size of a file so it takes less storage and transfers faster.

- **Lossless** compression rebuilds the original exactly. It is essential for text, program files and spreadsheets.
- **Lossy** compression permanently removes data people are unlikely to notice, such as detail in photographs or sounds outside normal hearing. Files become much smaller, but the original cannot be rebuilt.

### Worked example 2: run-length encoding

Run-length encoding is a simple lossless method that replaces a run of identical values with a count and the value. A row of pixels in a black-and-white image:

WWWWWWBBBWWWW (13 characters) becomes **6W3B4W** (6 characters).

It works well where data has long runs, such as simple graphics, and badly where values change constantly, where the encoded version can even be larger than the original.

## Hard disk structure and defragmentation

The syllabus asks you to understand how hard disk storage is organised, because defragmentation only makes sense with it.

- A hard disk contains one or more **platters**, coated with magnetic material, that spin at high speed.
- Each surface has a **read/write head** on a moving arm.
- Each surface is divided into concentric rings called **tracks**, and each track into **sectors**, traditionally 512 bytes, with many modern drives using 4,096 bytes.
- The same track on every surface forms a **cylinder**, which can be read without moving the heads.
- The operating system stores files in **clusters** (blocks) of one or more sectors.

### Worked example 3: clusters and wasted space

With clusters of 8 sectors of 512 bytes, each cluster holds 8 × 512 = 4,096 bytes (4 KB). A 10 KB file needs 10 ÷ 4 = 2.5 clusters, so it occupies **3 clusters (12 KB)**, wasting 2 KB at the end of the last cluster.

### How fragmentation happens

1. Files A, B and C are saved one after another in neighbouring clusters.
2. File A is deleted, leaving a gap.
3. A new file D, larger than the gap, is saved: part of it fills the gap and the rest goes after C.
4. File B grows when edited, and its extra clusters go wherever space is free.

Now files D and B are each scattered in pieces. Reading them makes the head move back and forth and wait for the right sectors to spin round, so access slows.

**Defragmentation** moves the clusters of each file so they are next to each other, and gathers free space together, so the head moves less and new files can be saved in one piece.

**Solid-state drives** have no moving heads, so scattered blocks do not slow access, and the extra writing of defragmentation shortens their life. Defragmentation is therefore not recommended for them.

## Formatting

1. **Low-level formatting** marks out the tracks and sectors on the physical surface. It is normally done by the manufacturer.
2. **Partitioning** divides a drive into separate sections that the operating system treats as separate drives, for example one for the operating system and one for data.
3. **High-level formatting** creates the file system on a partition: the structure that records which clusters belong to which file. A quick format only replaces this structure, so old data may still be recoverable; a full format also checks the surface for bad sectors.

## File copying and deleting files

- **File copying** utilities duplicate files or folders, often checking that the copy matches the original. Uses: moving work to another device, sharing, or making a quick extra copy.
- **Deleting** normally only removes the file's entry and marks its clusters as free, often via a recycle bin. The data stays on the disk until overwritten, so it can sometimes be recovered. **Secure deletion** utilities overwrite the clusters so the data cannot be recovered, which matters before selling or disposing of a computer that held personal data.

## Types of utility software

| Type | Uses | Advantages | Disadvantages |
|---|---|---|---|
| File management system | Create, copy, move, rename, search, delete files and folders; set permissions | Keeps work organised and easy to find; controls who can access files | Mistakes such as deleting or overwriting are easy; poor folder structures still cause confusion |
| Disk management system | Partition, format, check for errors, defragment, show free space | Keeps drives efficient and healthy; prepares new drives | Formatting or partitioning errors can wipe data; defragmenting takes time and is harmful to SSDs |
| Data compression utility | Create and extract archives such as zip files; shrink attachments | Saves storage and transfer time; bundles many files into one | Files must be extracted before use; lossy methods lose quality permanently |

## Common mistakes

- Saying defragmentation "deletes unwanted files" or "creates more space". It rearranges files; it does not free space.
- Recommending defragmentation for an SSD.
- Confusing incremental and differential back-ups.
- Saying deleting a file removes the data from the disk.
- Mixing up the three levels of formatting.

## Exam technique

- **Explain the need**: state the problem the utility solves, then how it solves it ("fragmented files make the head move more, so defragmenting reduces access time").
- **Describe** a process step by step, using the correct terms: track, sector, cluster, head.
- **Advantages and disadvantages**: tie each to the scenario, such as a school, an office or a home user, and finish with a recommendation if asked to evaluate.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 2 Hardware and software, section 2.3 Utility software.
