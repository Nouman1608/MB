---
title: "OxfordAQA A-Level Computer Science (9645): Hash tables -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Hash Tables Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "hash-tables-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.10.3: hash functions with MOD, good hash properties, collisions, rehashing, searching and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.10.3 Hash tables** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.10 Advanced data structures). For explanations and worked examples, see the [hash tables study guide](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables/); then practise with the [hash tables practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-practice/).

## What the specification requires

- Be familiar with the **hash table** and its uses: a structure that creates a **mapping between keys and values**.
- Know what a **hash function** is and apply simple ones. It uses a record's key to calculate the position at which the record is stored.
- Understand the properties of a **good hash function**: an **even distribution** of records and **quick to compute**. Hash functions often use **MOD**, so the result is in the range 0 to table size − 1.
- Know what a **collision** is (two keys with the same hash) and how it is handled by **rehashing**: the second record is stored in the **next available position**.
- Understand the **advantages and disadvantages** of a hash table compared with an array.

## Key terms

| Term | Meaning |
|---|---|
| Hash table | An array in which each record's position is calculated from its key |
| Key | The value that identifies a record |
| Hash function | Calculates a position from a key |
| Hash value | The position that the function returns |
| Collision | Two keys giving the same hash value |
| Rehashing | Finding another position after a collision (here: the next available one) |
| Slot | One position in the table |

## Hash function with MOD

hash(key) = key MOD table size

- 36 MOD 10 = 6; 19 MOD 10 = 9; 120 MOD 7 = 1.
- For text, add the character codes first. "cat" = 99 + 97 + 116 = 312; in 7 slots, 312 MOD 7 = 4.

## Properties of a good hash function

| Property | Why it matters |
|---|---|
| Even distribution | Few collisions, so look-ups stay fast |
| Quick to compute | Speed is the reason for hashing |
| Same key, same result | The record can be found again |
| Result always in range | MOD guarantees a valid slot |

Sum-of-character-codes gives anagrams the same hash ("tea", "eat" and "ate" all total 314). Keys that are all multiples of the table size all land in slot 0.

## Collision handling: next available position

1. Compute the hash and look at that slot.
2. If it is occupied, check the next slot, then the next.
3. **Wrap round** to slot 0 after the last slot.
4. Store the record in the first empty slot found.
5. If every slot has been tried, the table is full.

## Worked reminder: wrap-around

Table of 8 slots, hash = key MOD 8. Insert 16, 24, 7, 15, 31.

| Key | Hash | Trail | Stored in |
|---|---|---|---|
| 16 | 0 | 0 | 0 |
| 24 | 0 | 0, 1 | 1 |
| 7 | 7 | 7 | 7 |
| 15 | 7 | 7, 0, 1, 2 | 2 |
| 31 | 7 | 7, 0, 1, 2, 3 | 3 |

| Slot | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| Key | 16 | 24 | 15 | 31 | | | | 7 |

## Searching

1. Compute the key's hash.
2. Check that slot. If the key is there, it is found.
3. If a different key is there, move to the next slot (wrapping round) and repeat.
4. **An empty slot means not found.**

Search for 31: 7, 0, 1, 2, 3, found after 5 slots. Search for 23 (hash 7): 7, 0, 1, 2, 3, then slot 4 is empty, so 23 is not present.

## Hash table against array

| | Hash table | Array |
|---|---|---|
| Find by key | Fast on average | Search needed |
| Insert | Fast on average | Slow if kept sorted |
| Order | Not in key order | Can be sorted |
| Memory | Needs empty slots to work well | Compact |
| Weakness | Collisions; slows as it fills | Search grows with size |

## Insert in code

```python
def insert(slots, key):
    i = key % len(slots)
    for _ in range(len(slots)):
        if slots[i] is None:
            slots[i] = key
            return i
        i = (i + 1) % len(slots)     # next slot, wrapping round
    return None                      # table full
```

## Typical uses

- Looking up a record by key, such as a username or a customer number.
- Symbol tables in compilers, which map names to information.
- Caches that map a request to a stored result.
- Any mapping where speed of look-up matters more than keeping an order.

## Choosing a table size

A table that is only just big enough fills up quickly, causing many collisions. A table with spare slots keeps trails short. The size also matters for the pattern in the keys: with MOD 10, keys that are all multiples of 10 land in slot 0, while a size such as 7 or 11 spreads them out. In the exam you will normally be told the size, but you may be asked to comment on the effect.

## Exam traps

- **Next available position.** Not any empty slot, and not the end of the table.
- **Wrap round** after the last slot.
- **Divide by the table size,** not by the number of keys.
- **MOD does not prevent collisions.**
- **A hash table is not ordered.**
- **Search stops at an empty slot,** not at the first different key.
- **Show every step** of the trail.

## Quick self-test

1. What is a hash function?
2. What is the hash of 47 in a table of 10 slots using MOD?
3. What is a collision?
4. What does rehashing do in this specification?
5. Why is MOD used?
6. State two properties of a good hash function.
7. In the 8-slot example, where would 39 be stored after the five keys above? (39 MOD 8 = 7.)
8. When does a search of a hash table stop with "not found"?
9. Give one advantage of a hash table over an array.
10. Give one disadvantage of a hash table.
11. Why do the keys 20, 40, 60 and 80 all collide in a table of 10 slots?
12. What does a hash table do when it is full?

### Answers

1. It uses a record's key to calculate the position at which the record is stored.
2. 47 MOD 10 = 7.
3. Two different keys that give the same hash value.
4. It stores the second record in the next available position.
5. It keeps the result in the range 0 to table size − 1, so it is always a valid slot.
6. Any two from: even distribution, quick to compute, same key gives same result.
7. Slot 4 (7, 0, 1, 2 and 3 are all occupied).
8. When an empty slot is reached (or when it has gone all the way round the table).
9. Finding a record by key is fast on average, without searching.
10. Any one from: collisions slow it down; it is not in order; it needs spare slots; it becomes slow as it fills.
11. Each is a multiple of 10, so each MOD 10 gives 0.
12. It cannot store another record.

## Next steps

- [Hash tables study guide](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables/)
- [Hash tables practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-practice/)
- [Priority queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.3 Hash tables.
