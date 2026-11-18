---
title: "Cambridge A Level Computer Science (9618): File Organisation and Access"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 13.2: serial, sequential and random files, sequential and direct access, choosing a method, and remainder and folding hashing algorithms."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
reviewNeeded: true
reviewNote: "Please check the short paragraph on using a hash with a sequential file (locating a block of records), and confirm that the folding method is an acceptable example of a second hashing algorithm for 9618."
---

Section 13.2 File organisation and access of Cambridge International AS & A Level Computer Science 9618 asks you to understand serial, sequential (using a key field) and random (using a record key) file organisation, to select an appropriate organisation and access method for a problem, to understand sequential access (for serial and sequential files) and direct access (for sequential and random files), and to "describe and use different hashing algorithms to read from and write data to a random / sequential file". It is A Level content, examined in Paper 3.

Related: [File Organisation and Access revision notes](/resources/cambridge-a-level-computer-science-9618-file-organisation-and-access-revision-notes/) · [File Organisation and Access practice questions](/resources/a-level-computer-science-file-organisation-and-access-practice/) · [Data Representation (A Level) study guide](/resources/a-level-computer-science-data-representation-a-level/)

## Organisation and access are different ideas

**File organisation** is how the records are arranged in the file. **File access** is how a program reaches a particular record. Keeping the two apart avoids the most common confusion in this topic: a *sequential file* is an organisation, while *sequential access* is a way of reading.

| Organisation | Arrangement | Access methods |
|---|---|---|
| Serial | In the order records were added | Sequential only |
| Sequential | In order of a key field | Sequential, or direct through an index |
| Random | At an address calculated from the record key | Direct |

## Adding, deleting and finding records

**Serial file**

- *Add*: append the record at the end; no position needs to be found.
- *Find*: read from the first record until the key matches or the end of the file is reached. On average half the file is read for a record that is present, and all of it for one that is not.
- *Delete*: copy every record except the one being deleted to a new file.

**Sequential file**

- *Add*: the key order must be kept, so records are copied to a new file in order and the new record is written in its correct position.
- *Find* (sequential access): read from the start; stop when the key matches or when a key greater than the target is read, because the target cannot appear later.
- *Delete*: copy every record except the deleted one to a new file.
- *Direct access*: an **index** holds key values with their positions in the file. The index is searched, and the program goes straight to the record.

**Random file**

- *Add*: apply the hashing algorithm to the record key to get an address and write the record there, dealing with any collision.
- *Find*: apply the same hashing algorithm to the key and read the record at that address directly.

## Choosing an organisation and access method

The key question is how the records will be used.

- **Most records processed in one run, in key order** (payroll, end-of-month bills): a sequential file read by sequential access. The proportion of records used in each run, the **hit rate**, is high, so reading every record in turn wastes little.
- **Individual records needed quickly, in no predictable order** (a stock record at a till, a passenger booking): a random file with direct access. The hit rate of each request is low, so reading the file from the start would be slow.
- **Records simply collected as they happen and processed later** (a log of events or sensor readings): a serial file, because adding at the end is the fastest possible write.
- **Both kinds of use**: a sequential file with an index allows batch processing in key order and direct access to single records.

## Hashing algorithms

A **hashing algorithm** takes a record's key and calculates the address at which the record is stored. Because the same calculation is applied when reading, the address does not need to be stored anywhere.

### Remainder (division) method

address = key MOD number of addresses

With 1000 addresses numbered 0 to 999, key 48 213 goes to 48 213 MOD 1000 = 213.

### Folding method

Split the key into parts, add the parts, then take the remainder to fit the file.

With 1000 addresses, key 572 841 splits into 572 and 841; 572 + 841 = 1413; 1413 MOD 1000 = 413.

Folding uses every digit of the key, so keys that share their last digits are still spread out, which the plain remainder method on 1000 addresses would not do.

### What makes a good hashing algorithm

- It is quick to calculate.
- It spreads keys evenly over all addresses, so collisions are rare.
- It always gives an address within the file.

### Collisions

A **collision** happens when two keys hash to the same address. With folding, 841 572 also gives 841 + 572 = 1413 and address 413.

- **Linear probing (next free address)**: store the record in the next empty address, wrapping round from the last address to the first. To read it, hash the key, then check each address in turn until the key matches, or an empty address shows the record is not in the file.
- **Overflow area**: store the colliding record in a separate area, searched serially if the record is not at its home address.

Deleting from a file that uses linear probing needs care: if a record is simply removed, a later search can stop at the empty slot and miss a record stored beyond it. The slot is therefore usually marked as deleted rather than made empty.

### Hashing with a sequential file

The specification also mentions hashing with a sequential file. Here a hash of the key can be used to find the **block** (group) of records where the target belongs, and that block is then searched, which avoids reading the file from the start.

## Worked example 1: writing records with linear probing

A random file has 100 addresses, numbered 0 to 99. The hashing algorithm is key MOD 100. Records with keys 3405, 1205, 7799 and 1399 are written in that order.

| Key | Hash | Result |
|---|---|---|
| 3405 | 5 | Address 5 is empty: stored at 5 |
| 1205 | 5 | Collision; next address 6 is empty: stored at 6 |
| 7799 | 99 | Stored at 99 |
| 1399 | 99 | Collision; wraps round to 0, which is empty: stored at 0 |

**Reading key 1399**: hash to 99; the key there is 7799, not a match; move to address 0; key 1399 matches, so the record is found with two reads instead of one.

**Reading key 2205** (not in the file): hash to 5 (3405, no match), then 6 (1205, no match), then 7, which is empty, so the search stops and reports that the record does not exist.

## Worked example 2: choosing for a scenario

**Question.** An electricity company bills all 80 000 customers at the end of each quarter, in customer number order. Customer service staff also need to bring up any one customer's record during a phone call. Recommend a file organisation and access method.

**Model answer.** A sequential file ordered on customer number, with an index. Billing processes every record in key order, so sequential access through the sorted file is efficient for that high hit rate. During phone calls only one record is needed, so the index is searched for the customer number and the record is read directly, without reading the records before it.

*Why it scores:* the organisation is named with its key, each use in the scenario is matched to an access method, and the reason refers to how many records each task needs.

## Common mistakes

- Using "sequential" for both the organisation and the access method without saying which.
- Saying a serial file is in key order; it is in the order the records were added.
- Hashing "the file" instead of a record's key.
- Forgetting the wrap-around when linear probing reaches the last address.
- Ending a search at the first non-matching record instead of at an empty address.
- Choosing a random file for a task that processes every record in order.

## Exam technique

**Describe** an organisation: say how records are arranged and how one is added. **Explain** an access method: say what is read, in what order, and when the search stops. **Choose and justify**: link the organisation to how many records each task uses and in what order. **Use** a hashing algorithm: show the calculation for each key, state any collision and where the record ends up, and for reading, describe each address checked.
