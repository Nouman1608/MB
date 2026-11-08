---
title: "A Level Computer Science: File Organisation and Access — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "file-organisation-and-access"
description: "Original questions with worked answers on serial, sequential and random files, sequential and direct access, and hashing with collisions, for 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data Representation (A Level) study guide](/resources/a-level-computer-science-data-representation-a-level/) · [Data Representation (A Level) revision notes](/resources/a-level-computer-science-data-representation-a-level-revision-notes/)

---

**What do these questions practise?** Section 13.2 File organisation and access of the Cambridge
International AS & A Level Computer Science 9618 syllabus (2027–2029): serial, sequential and random
file organisation; sequential and direct access; choosing an organisation and access method for a
problem; and hashing algorithms to read and write records in random files.

## Section A

**1.** Describe how records are organised in **(a)** a serial file, **(b)** a sequential file and
**(c)** a random file. **[3]**

**2.** State which access method(s) can be used with each of a serial, sequential and random file. **[3]**

**3.** Explain why a new record is simply appended to the end of a serial file, but not to a
sequential file. **[2]**

## Section B

**4.** A hashing algorithm calculates the address of a record as `key MOD 50`. Records with keys
1234, 2084, 3317 and 1284 are written to the file in that order.
**(a)** Calculate the address for each key. **[2]**
**(b)** Identify which records cause a collision. **[1]**
**(c)** Describe **two** methods of dealing with a collision. **[4]**

**5.** Explain how a record is found in a random file when the next free location method (linear
probing) has been used for collisions. **[3]**

**6.** Describe how a record is found in a sequential file using sequential access, and explain why
the search can stop before the end of the file if the record is not present. **[3]**

**7.** Explain how direct access can be used with a sequential file. **[2]**

**8.** For each scenario, choose the most suitable file organisation and justify your choice:
**(a)** a log of temperature readings added every minute and processed in bulk once a day; **[2]**
**(b)** a payroll master file of employees, processed in employee-number order once a month; **[2]**
**(c)** a hotel booking system where any guest's record must be retrieved immediately. **[2]**

## Section C

**9.** Write pseudocode for a function `GetAddress(Key : INTEGER) RETURNS INTEGER` that returns the
hash address `Key MOD 100` plus 1, so that addresses run from 1 to 100. **[2]**

**10.** Explain why a good hashing algorithm should spread records evenly across the file, and what
happens to access time if many collisions occur. **[3]**

---

## Answers

**1. (a)** Serial: records stored one after another in the order they were added, with no sorting [1].
**(b)** Sequential: records stored in order of a key field, such as customer ID [1].
**(c)** Random: records stored at an address calculated from the record key by a hashing algorithm,
with no overall order [1].

**2.** Serial: sequential access only [1]. Sequential: sequential access, or direct access using an
index [1]. Random: direct access (using the hash of the key) [1].

**3.** A serial file has no order, so the new record can go at the end [1]; a sequential file must
remain in key order, so the record must be inserted in the correct position, usually by copying the
file to a new file with the record inserted [1].

**4. (a)** 1234 → 34; 2084 → 34; 3317 → 17; 1284 → 34 [2 for all four; 1 for two or three].
**(b)** 2084 and 1284 collide with 1234 at address 34 [1].
**(c)** Any two described: **open hashing / next free location**: store the record in the next
available address after the calculated one, wrapping round to the start of the file if necessary
[2]; **overflow area**: store colliding records in a separate overflow area, searched serially when
the record is not at its home address [2]; **chaining**: each address holds a pointer to a linked
list of records with that hash [2].

**5.** Calculate the hash address from the key [1]; read the record at that address and compare its
key with the one sought [1]; if it does not match, read the following addresses one by one until the
record is found or an empty location is reached, which means the record is not in the file [1].

**6.** Start at the first record and read each record in turn, comparing its key with the key sought
[1–2]. Because the file is in key order, once a record with a key greater than the target is read,
the target cannot appear later, so the search can stop [1].

**7.** An index of key values and their record positions is kept [1]; the index is searched for the
key and the record is read directly from that position without reading earlier records [1].

**8. (a)** Serial [1]: readings are simply appended in time order and all processed together, so no
order by key or direct access is needed [1].
**(b)** Sequential [1]: every record is processed in employee-number order, so a file sorted on that
key is efficient for batch processing [1].
**(c)** Random [1]: the hashing algorithm gives direct access to any record without reading others,
so retrieval is fast [1].

**9.** Example answer:

```
FUNCTION GetAddress(Key : INTEGER) RETURNS INTEGER
    RETURN (Key MOD 100) + 1
ENDFUNCTION
```

[1 for MOD 100, 1 for adding 1 and returning the value]

**10.** If records are spread evenly, most can be found at their home address with one read [1]. If
the algorithm maps many keys to the same addresses, there are many collisions [1], so records must be
searched for in following locations or an overflow area, making access slower and less predictable [1].

## Frequently asked questions

**Is a sequential file the same as sequential access?** No. Sequential is a way of organising the
file (in key order); sequential access is a way of reading it (one record after another). A
sequential file can also be accessed directly through an index.

**Which collision method should I use in the exam?** Use the one the question describes. If none is
given, describe either next free location or an overflow area clearly.

*Based on the Cambridge International AS & A Level Computer Science 9618 syllabus for 2027, 2028 and
2029, section 13.2 File organisation and access.*
