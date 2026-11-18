---
title: "AQA A-Level Computer Science (7517): Hash Tables -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.6
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "hash-tables-7517"
description: "Condensed AQA A-Level Computer Science 7517 notes on 4.2.6 Hash tables: hashing methods, collisions, rehashing, lookup, deletion, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.6 Hash tables** in AQA A-Level Computer
Science (7517). For full explanations and worked traces, use the
[Hash tables study guide](/resources/aqa-a-level-computer-science-7517-hash-tables/).

## The core idea in four lines

- A hash table creates a **mapping between keys and values**.
- A **hashing algorithm** turns a key into an index in an array.
- A **collision** occurs when two key values compute the same hash.
- Collisions are handled by **rehashing**: applying a rule to find
  another slot.

## Key terms

| Term | Definition |
|---|---|
| **Key** | The value used to identify a record, such as an account number |
| **Hash function / hashing algorithm** | Calculation that converts a key into a table index |
| **Slot (bucket)** | One position in the table |
| **Collision** | Two different keys compute the same hash |
| **Rehashing** | Applying a further rule to find an alternative slot after a collision |
| **Linear probing** | Rehashing by trying the next slot: (index + 1) MOD size |
| **Cluster** | A run of filled neighbouring slots built up by collisions |
| **Chaining** | Alternative to rehashing: each slot holds a list of the items that hash there |
| **Deleted marker** | Flag left in a slot after deletion so searches keep going |

## Properties of a good hashing algorithm

| Property | Why it matters |
|---|---|
| Quick to calculate | Lookup speed is the reason for using a hash table |
| Deterministic | The same key must always give the same index, or records are lost |
| Range | Every result must be a valid index in the table |
| Even spread | Fewer collisions, so fewer extra probes |

## Simple hashing methods

| Method | Rule | Example |
|---|---|---|
| Division | key MOD size | 73 MOD 10 = 3 |
| Folding | Split key into parts, add, then MOD size | 472931: 47 + 29 + 31 = 107; 107 MOD 100 = 7 |
| Character codes | Add (or weight and add) codes, then MOD size | "CAT": 67 + 65 + 84 = 216; 216 MOD 11 = 7 |

A plain sum of character codes makes anagrams collide ("ACT" also gives
7). Multiplying each code by its position spreads them out.

Prime table sizes help avoid patterns: in a 10-slot table using MOD, all
multiples of 10 would land in slot 0.

## Insert, search, delete

**Insert:** hash the key; if the slot is free, store it; otherwise
rehash, wrapping with MOD, until a free slot is found; if you return to
the start slot, the table is full.

**Search:** hash the key; if the slot holds the key, found; if it is
empty, not present; otherwise rehash and repeat (stop if you return to
the start).

**Delete:** find the item, then replace it with a **deleted marker**, not
an empty slot, so later searches do not stop too early.

Trace to learn: 10 slots, key MOD 10, insert 52, 73, 12, 99, 42, 19.

| Slot | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Key | 19 | – | 52 | 73 | 12 | 42 | – | – | – | 99 |

Finding 42 takes four probes (2, 3, 4, 5). A search for 62 ends at empty
slot 6 after five probes.

## Uses

- Database and file indexing: go straight to a record from its key.
- Implementing dictionaries in programming languages.
- Symbol tables in compilers and interpreters.
- Caches of results already calculated.

Hash tables do **not** keep data in order; use a sorted structure if
ordered output is needed.

## Exam traps

- A collision is two keys computing the **same hash**, not just "two
  items in one slot".
- Forgetting the wrap-round: after the last slot comes slot 0.
- Inserting keys out of the order given in the question; order decides
  who collides with whom.
- Describing how an item is placed after a collision but not how it is
  retrieved.
- Emptying a slot on deletion, which breaks the search path of later
  items.
- Using "rehashing" for rebuilding a bigger table without saying so;
  define what you mean.

## Self-test

1. What does a hash table map?
2. Define a collision.
3. Using hash = key MOD 7, what is the hash of 45?
4. Using folding into pairs and a 100-slot table, what is the index of
   key 813427?
5. Why do anagrams collide when string character codes are simply added?
6. A 7-slot table uses key MOD 7 and linear probing. Insert 10, 24, 17
   and 3. In which slot is 3 stored?
7. In that table, how many probes are needed to find 17?
8. How does a search know a key is not in the table?
9. Why should a deleted item be replaced by a marker rather than left
   empty?
10. Give two uses of hash tables.
11. Why are prime table sizes often used?
12. Name one method of handling collisions other than rehashing.

**Answers:** 1. Keys to values (each key to the location of its record).
2. Two different keys compute the same hash value. 3. 45 MOD 7 = 3. 4.
81 + 34 + 27 = 142; 142 MOD 100 = 42. 5. Addition gives the same total
whatever order the letters are in. 6. Slot 6 (10 → 3; 24 → 3, rehashed
to 4; 17 → 3, 4 taken, stored in 5; 3 → 3, 4, 5 taken, stored in 6). 7.
Three (slots 3, 4, 5). 8. It reaches an empty slot, or returns to its
starting slot. 9. An empty slot would stop later searches early, so
items stored beyond it after collisions would be reported missing. 10.
For example database indexing, implementing dictionaries, compiler
symbol tables, caches. 11. They spread keys with common factors across
more slots, reducing collisions. 12. Chaining: each slot holds a list of
all items that hash to it.

## Next steps

- Apply these steps under exam conditions with the
  [Hash tables practice questions](/resources/aqa-a-level-computer-science-7517-hash-tables-practice/).
- See how a dictionary uses a hash table in the
  [Dictionaries revision notes](/resources/aqa-a-level-computer-science-7517-dictionaries-revision-notes/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.6 Hash tables -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
