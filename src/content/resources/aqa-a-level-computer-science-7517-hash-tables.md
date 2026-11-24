---
title: "AQA A-Level Computer Science (7517): Hash Tables"
resourceType: "study-guides"
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
description: "Hash tables for AQA A-Level Computer Science 7517 4.2.6: hashing algorithms, collisions, rehashing, searching and deleting, with worked traces."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on 4.2.6 Hash tables in AQA A-Level Computer
Science (7517). The specification asks you to be familiar with the
concept of a hash table and its uses, describing it as "a data structure
that creates a mapping between keys and values"; to be able to apply
simple hashing algorithms; and to know what is meant by a collision
("when two key values compute the same hash") and how collisions are
handled using rehashing. Section 4.2.1.4 also asks you to describe the
creation and maintenance of data within hash tables. The short overview
of all the 4.2 structures is in the
[abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/).

## Why hash tables exist

To find a record in an unsorted list you may have to check every item
(linear search, O(*n*)). Sorting the list allows binary search
(O(log *n*)) but makes every insertion slower. A hash table aims to go
straight to the right place: a **hashing algorithm** (hash function)
takes the key and calculates the index where the record belongs. If
there are no collisions, inserting, searching and deleting each take
one calculation and one memory access, however many records are stored.

A hash table is usually built from a fixed-size array. Each slot (often
called a bucket) holds a record, or is empty.

## Typical uses

- **Indexing records in a database or file**, so a record can be
  located from its key (for example a customer number) without
  searching.
- **Implementing dictionaries**: many languages build their dictionary
  type on a hash table (see the
  [Dictionaries study guide](/resources/aqa-a-level-computer-science-7517-dictionaries/)).
- **Symbol tables in compilers and interpreters**, where every
  identifier the program uses must be looked up quickly.
- **Caches**, where a program checks quickly whether a result has
  already been worked out.

In each case the benefit is the same: very fast lookup by key, when the
data does not need to be kept in order.

## Simple hashing algorithms

A good hashing algorithm is quick to calculate, always gives the same
index for the same key, produces an index inside the table and spreads
keys evenly so that collisions are rare.

**The division (MOD) method.** index = key MOD tableSize. With 10
slots, key 73 gives 3. Table sizes are often chosen to be prime, which
helps spread keys that share a pattern (for example, keys that are all
multiples of 10 would all land in slot 0 of a 10-slot table).

**Folding.** Split the key into equal parts, add them, then take the
result MOD tableSize. Key 472931 split into pairs is 47 + 29 + 31 = 107;
with 100 slots, 107 MOD 100 = **7**.

**Hashing a string.** Convert each character to its character code and
combine them. Using ASCII codes, "CAT" gives 67 + 65 + 84 = 216, and
216 MOD 11 = **7**. But "ACT" has the same letters, so it also gives 7:
a simple sum makes every anagram collide. Weighting each code by its
position fixes this. C × 1 + A × 2 + T × 3 = 67 + 130 + 252 = 449, and
449 MOD 11 = **9**; for "ACT", 65 + 134 + 252 = 451, and 451 MOD 11 =
**0**.

## Collisions and rehashing

A **collision** happens when two different keys compute the same hash.
It cannot be avoided completely, because there are far more possible
keys than slots. **Rehashing** means applying a further rule to find
another slot. The simplest rule, often called linear probing, is to try
the next slot, wrapping round to the start of the table with MOD:
next = (index + 1) MOD tableSize. A variation steps on by a fixed
amount, such as 3, each time.

### Worked example: building the table

A table has 10 slots (0-9) and hash = key MOD 10. Insert 52, 73, 12,
99, 42 and 19, rehashing to the next free slot.

| Key | Hash | Slots tried | Stored in |
|---|---|---|---|
| 52 | 2 | 2 | 2 |
| 73 | 3 | 3 | 3 |
| 12 | 2 | 2 (taken), 3 (taken), 4 | 4 |
| 99 | 9 | 9 | 9 |
| 42 | 2 | 2, 3, 4 (all taken), 5 | 5 |
| 19 | 9 | 9 (taken), (9 + 1) MOD 10 = 0 | 0 |

Notice that collisions build up into a **cluster** in slots 2-5. Any
later key hashing to 2, 3, 4 or 5 will collide several times, so
clusters grow and lookups slow down as the table fills.

## Searching a hash table

Searching follows exactly the same path as insertion:

1. Calculate the hash of the key and look in that slot.
2. If the slot holds the key, the record is found.
3. If the slot is empty, the key is not in the table.
4. Otherwise rehash to the next slot and repeat.

In the table above, finding 42 checks slots 2, 3, 4 and 5 (four
probes). Searching for 62 checks 2, 3, 4, 5 and then 6, which is empty,
so 62 is not present after five probes. A search must also stop if it
returns to the starting slot, because the table is then full and the key
is absent.

## Maintaining data: insertion and deletion

An insertion routine in AQA-style pseudocode, with the table full check
the specification's "creation and maintenance" wording expects:

```
SUBROUTINE Insert(key)
  index ← key MOD tableSize
  start ← index
  WHILE Table[index] <> Empty
    index ← (index + 1) MOD tableSize
    IF index = start THEN
      OUTPUT "Table full"
      RETURN
    ENDIF
  ENDWHILE
  Table[index] ← key
ENDSUBROUTINE
```

**Deletion needs care.** Suppose 12 is deleted from slot 4 by simply
emptying the slot. A search for 42 would hash to 2, find 52, move to 3,
find 73, move to 4 and find it empty, and would wrongly report that 42
is missing, even though it is still in slot 5. The fix is to mark the
slot as **deleted** rather than empty. Searches treat a deleted marker
as "keep going"; insertions may reuse the slot.

**When the table gets too full.** As free slots run out, clusters grow
and every operation slows. A common response is to create a larger
table and re-insert every item using the new table size, which also
spreads out the clusters. Some textbooks also call this rehashing, so
make clear in an answer whether you mean finding an alternative slot or
rebuilding the table.

**An alternative: chaining.** Instead of looking for another slot, each
slot can hold a list of every item that hashed there. A collision simply
adds to that slot's list. Questions on this subtopic usually expect
rehashing, but chaining is a correct description of collision handling
if a question allows any method.

## Common mistakes

- Defining a collision as "two items stored in the same place". The
  point is that two keys **compute the same hash**; good collision
  handling stops them being stored in the same place.
- Rehashing past the last slot without wrapping round to slot 0.
- Explaining how a colliding item is stored but not how it is found
  again.
- Stopping a search at a deleted slot.
- Claiming a hash table keeps data in order. It does not; that is why a
  binary search tree or sorted list is used when ordered output matters.

## Exam technique for AQA command words

- **Calculate / state the index**: show the hash calculation, for
  example 73 MOD 10 = 3, so a method mark is available even if a later
  slot is wrong.
- **Complete the table**: write each key in its final slot, and work
  through the keys in the order given, because order changes where
  collisions go.
- **Describe**: give the steps in sequence, as in the search steps
  above.
- **Explain**: link cause and effect, for example "a prime table size
  reduces collisions because keys with a common factor are spread over
  more slots".

## More on this topic

- Recall tables, traps and a self-test are in the
  [Hash tables revision notes](/resources/aqa-a-level-computer-science-7517-hash-tables-revision-notes/).
- Original exam-style questions with answers are in the
  [Hash tables practice questions](/resources/aqa-a-level-computer-science-7517-hash-tables-practice/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.6 Hash tables -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
