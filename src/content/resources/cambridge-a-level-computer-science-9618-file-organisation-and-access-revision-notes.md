---
title: "Cambridge A Level Computer Science (9618): File Organisation and Access -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13: Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 13.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "file-organisation-and-access"
description: "Revision notes for 9618 section 13.2: file organisations, access methods, hit rate, remainder and folding hashes, collisions, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
reviewNeeded: true
reviewNote: "Please confirm that the folding method is an acceptable example of a second hashing algorithm for 9618, and check the note on hashing with a sequential file."
---

Condensed notes for 13.2 File organisation and access, A Level content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 3. You need the three organisations (serial, sequential, random), the two access methods (sequential, direct), how to choose between them for a problem, and how hashing algorithms are used to write and read records.

Related: [File Organisation and Access study guide](/resources/cambridge-a-level-computer-science-9618-file-organisation-and-access/) · [File Organisation and Access practice questions](/resources/a-level-computer-science-file-organisation-and-access-practice/) · [Data Representation (A Level) revision notes](/resources/a-level-computer-science-data-representation-a-level-revision-notes/)

## Organisation vs access

- **Organisation** = how records are arranged. **Access** = how a record is reached.
- Sequential access is used for **serial** and **sequential** files.
- Direct access is used for **sequential** files (through an index) and **random** files (through a hash).

## The three organisations

| | Serial | Sequential | Random |
|---|---|---|---|
| Order | Order of arrival | Key field order | Hashed address from record key |
| Add a record | Append at the end | Copy to a new file, inserting in key order | Hash the key, write at that address (handle collision) |
| Find a record | Read from start until found or end of file | Read from start; stop at match or at a greater key; or use an index | Hash the key, read that address |
| Delete a record | Copy all others to a new file | Copy all others to a new file | Mark the slot as deleted |
| Typical use | Logs, transaction records | Payroll, billing master files | Stock look-up, bookings |

## Choosing

- **High hit rate**, records processed in key order → sequential file, sequential access.
- **Low hit rate**, single records needed quickly → random file, direct access.
- Records collected and processed later → serial file.
- Both whole-file processing and single-record look-ups → sequential file with an index.

## Hashing algorithms

- **Remainder**: address = key MOD number of addresses. 48 213 MOD 1000 = 213.
- **Folding**: split the key into parts, add them, then MOD. 572 841 → 572 + 841 = 1413 → 1413 MOD 1000 = 413.
- A good hash is fast, spreads keys evenly and always gives a valid address.
- The **same** algorithm is used to write and read, so addresses are never stored.

## Collisions

- Two keys giving the same address.
- **Linear probing**: use the next empty address, wrapping from the last to the first. To read: hash, then step forward until the key matches or an empty slot is found.
- **Overflow area**: colliding records go to a separate area, searched serially.
- Deleting under linear probing: mark the slot as deleted, or later searches may stop too early.

## Linear probing walk-through

File of 10 addresses (0 to 9), hash = key MOD 10. Keys written in order: 47, 87, 59, 69.

- 47 → 7: stored at 7.
- 87 → 7: full; 8 empty: stored at 8.
- 59 → 9: stored at 9.
- 69 → 9: full; wrap to 0: stored at 0.

Finding 69: read 9 (59), then 0 (69): found in two reads. Finding 97: read 7 (47), 8 (87), 9 (59), 0 (69), then 1 is empty, so 97 is not in the file.

## Key terms

| Term | Meaning |
|---|---|
| Key field | A field whose value identifies the record, used for ordering or hashing |
| Serial file | Records stored in the order they were added |
| Sequential file | Records stored in order of a key field |
| Random file | Records stored at addresses calculated from their keys |
| Sequential access | Reading records one after another from the start |
| Direct access | Going straight to a record without reading the ones before it |
| Index | A table of key values and record positions, used for direct access |
| Hashing algorithm | A calculation on a record key that gives its storage address |
| Collision | Two different keys hashing to the same address |
| Hit rate | The proportion of a file's records used in one processing run |

## Exam traps

- "Sequential" for organisation and access: say which.
- A serial file is not sorted.
- The hash is applied to the key, not to the file or the whole record.
- Linear probing must wrap round at the end of the file.
- A search under linear probing stops at an empty slot, not at the first mismatch.
- A random file is a poor choice when every record is processed in order.

## Self-test

1. State how records are arranged in a sequential file.
2. Which access method can be used with a serial file?
3. How can direct access be achieved with a sequential file?
4. Why can a search of a sequential file stop before the end when the record is absent?
5. Calculate 63 478 MOD 500.
6. Using folding with 1000 addresses, find the address for key 305 118.
7. What is a collision?
8. With 50 addresses (0 to 49) and linear probing, a record hashes to 49, which is full, and so is 0. Where does it go if 1 is empty?
9. Why is the address of a record not stored in a random file?
10. Give a suitable organisation for a file of supermarket till transactions, recorded as they happen.
11. What does a high hit rate suggest about the best organisation?
12. Why is a deleted slot marked rather than emptied under linear probing?

**Answers:** 1. In order of a key field. 2. Sequential access only. 3. By keeping an index of key values and record positions. 4. The file is in key order, so once a greater key is read the target cannot appear later. 5. 478 (500 × 126 = 63 000; 63 478 − 63 000 = 478). 6. 305 + 118 = 423; 423 MOD 1000 = 423. 7. Two different keys producing the same hashed address. 8. Address 1. 9. Applying the same hashing algorithm to the key recalculates it whenever needed. 10. Serial. 11. A sequential file read by sequential access, since most records are processed. 12. An empty slot would stop a later search early, so records stored beyond it would not be found.
