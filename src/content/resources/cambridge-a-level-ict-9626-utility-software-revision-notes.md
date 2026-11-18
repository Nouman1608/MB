---
title: "Cambridge A Level Information Technology (9626): Utility software -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 2.3: anti-virus, back-up types, compression, disk structure, defragmentation, formatting and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.3 Utility software** (Topic 2 Hardware and software) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. Worked examples are in the [utility software study guide](/resources/cambridge-a-level-ict-9626-utility-software/); for exam-style questions use the [utility software practice questions](/resources/a-level-ict-utility-software-practice/).

## Seven needs the syllabus names

Anti-virus · back-up · data compression · disk defragmentation (with hard disk structure) · formatting (low-level, partitioning, high-level) · file copying · deleting files.

## Three types the syllabus names

File management systems · disk management systems · data compression utilities.

## Key terms

| Term | Meaning |
|---|---|
| Utility | System software that performs one maintenance, protection or housekeeping task |
| Signature | A known pattern of code used to identify a piece of malware |
| Heuristic checking | Detecting malware from suspicious behaviour or structure, not a known signature |
| Quarantine | Isolating a suspect file so it cannot run |
| Full back-up | A copy of all selected data |
| Incremental back-up | A copy of data changed since the last back-up of any kind |
| Differential back-up | A copy of data changed since the last full back-up |
| Lossless compression | Smaller file that can be rebuilt exactly |
| Lossy compression | Much smaller file with some data permanently removed |
| Track | A concentric ring on a disk surface |
| Sector | A section of a track; the smallest unit the drive reads or writes |
| Cluster | A group of sectors used by the file system to store files |
| Fragmentation | A file stored in non-adjacent clusters |
| Partition | A section of a drive treated as a separate drive |
| Secure deletion | Overwriting a file's clusters so it cannot be recovered |

## Recall by utility

**Anti-virus.** Signature and heuristic checks; real-time and scheduled scans; quarantine or delete. Needs frequent updates; uses processor time and memory.

**Back-up.** Protects against failure, deletion, theft, fire and ransomware. Store copies away from the original.

| | Speed of back-up | Storage | Restore |
|---|---|---|---|
| Full | Slowest | Most | Fastest: one set |
| Incremental | Fastest | Least | Slowest: full + every incremental |
| Differential | Middle, grows through the week | Middle | Full + latest differential |

**Compression.** Saves storage and transfer time. Lossless for text and programs; lossy for photos, audio and video. Run-length encoding: AAAAABBB becomes 5A3B.

**Hard disk structure.** Platters → surfaces → tracks → sectors; heads on an arm; cylinders; clusters of sectors.

**Defragmentation.** Moves each file's clusters together and groups free space, so the head moves less and access is faster. Not for SSDs: no moving head, and extra writes shorten their life.

**Formatting.** Low-level: marks tracks and sectors (manufacturer). Partitioning: divides the drive into logical drives. High-level: creates the file system; quick format leaves old data recoverable.

**File copying.** Duplicates files, often with a check that the copy matches.

**Deleting.** Normal deletion removes the directory entry and frees the clusters; data remains until overwritten. Secure deletion overwrites it.

## Types: uses, advantages, disadvantages

- **File management systems:** organise, find, copy, move, rename, delete, set permissions. Easy organisation and access control; user mistakes can delete or overwrite work.
- **Disk management systems:** partition, format, error-check, defragment, report free space. Keep drives healthy; errors can wipe a drive.
- **Data compression utilities:** create and extract archives. Save space and bundle files; must extract before use; lossy methods lose quality.

## Which utility solves which problem?

| Problem in the scenario | Utility |
|---|---|
| Files load slowly on an old hard disk | Defragmenter (disk management) |
| Email attachment too large to send | Data compression utility |
| New drive must be split for system and data | Partitioning (disk management) |
| Ransomware encrypted the office files | Restore from back-up |
| Old laptop being sold | Secure deletion |

## Quick calculations

- **Cluster use:** a 9 KB file with 4 KB clusters needs 3 clusters (12 KB); 3 KB is unused.
- **Weekly back-up storage:** full 120 GB on Sunday, 4 GB changed daily, incrementals Monday to Saturday: 120 + 6 × 4 = 144 GB.
- **Compression ratio:** a 50 MB file compressed to 20 MB is reduced by 60%.

## Exam traps

- Saying defragmentation frees space or deletes files.
- Recommending defragmentation for an SSD.
- Swapping incremental and differential.
- Claiming normal deletion removes the data.
- Listing low-level, partitioning and high-level formatting in the wrong order or with the wrong jobs.
- Naming a utility without saying what problem it solves.

## Self-test

1. What is a utility?
2. Distinguish signature checking from heuristic checking.
3. What does quarantine do?
4. Which back-up method needs the full back-up plus every later set to restore?
5. Why should back-ups be stored away from the original computer?
6. Give one use of lossless compression and one of lossy compression.
7. Encode WWWWBBBBBBW with run-length encoding.
8. Name, in order from largest to smallest, the parts of a disk surface used to locate data.
9. Why does fragmentation slow a hard disk?
10. Why is defragmenting an SSD not recommended?
11. What does high-level formatting create?
12. Why might a business use secure deletion before selling old computers?

### Answers

1. System software that carries out one maintenance, protection or housekeeping task.
2. Signature checking compares files with known malware patterns; heuristic checking looks for suspicious behaviour, so it can catch new malware.
3. Isolates a suspect file so it cannot run until it is deleted or restored.
4. Incremental.
5. So that one event, such as fire or theft, cannot destroy both copies.
6. Lossless: a spreadsheet or program file. Lossy: a photo or music file.
7. 4W6B1W.
8. Track, then sector (files are stored in clusters of sectors).
9. The head must move to many places and wait for each piece to spin round, increasing access time.
10. It has no moving head, so access is not slowed, and the extra writing reduces its life.
11. The file system: the structure that records which clusters belong to which file.
12. Normal deletion leaves data recoverable, so personal or confidential data could be read by the buyer.
