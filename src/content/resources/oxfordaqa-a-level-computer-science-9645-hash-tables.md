---
title: "OxfordAQA A-Level Computer Science (9645): Hash tables"
seoTitle: "OxfordAQA A-Level CS 9645 Hash Tables Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.10.3 in depth: hash functions using MOD, properties of a good hash, collisions and rehashing to the next free place, and hash tables versus arrays."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.10.3 Hash tables** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.10 Advanced data structures (A-level). The specification asks you to be familiar with the concept of a hash table and its uses (a data structure that creates a **mapping between keys and values**); to know what a **hash function** is and to apply simple hash functions; to understand the **properties of a good hash function**; to know what is meant by a **collision** and how collisions are handled using **rehashing**; and to understand the advantages and disadvantages of using a hash table as an alternative to an array. Per the specification, a hash function uses a record's key to calculate a value that represents the position at which the record is stored; hash functions often use the **MOD** operator so that the result is always in the range 0 to the table size − 1; good hash functions give an even distribution of records and are quick to compute; a collision occurs when two keys compute the same hash; and when a collision occurs the second record is stored in the **next available position**.

For quick recall use the [hash tables revision notes](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-revision-notes/), and test yourself with the [hash tables practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-practice/). The [advanced data structures study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) covers all of topic 3.10. Code is Python, and the results shown were produced by running the code.

## The problem that hashing solves

Suppose a school keeps 5 000 student records, each with a student number as its key. To find a record in an unsorted array you would, on average, check about half of them. A sorted array lets you use a binary search, but keeping it sorted makes insertion slow. A **hash table** goes straight to the record. It **calculates** where a record should be stored from its key, so finding it later takes just one calculation and (usually) one look-up.

A hash table is a data structure that creates a **mapping between keys and values**. The table is an array of fixed size. Each position in it is sometimes called a **slot** or bucket.

## Hash functions

A **hash function** takes a record's key and calculates a number that says which slot of the table the record is stored in. The same key always gives the same result, which is what allows a stored record to be found again.

The most common simple hash function for a numeric key uses **MOD**:

> hash(key) = key MOD table size

MOD gives the remainder after division, so the result is always between 0 and the table size − 1. That is always a valid position in the array.

**Worked example 1.** A table has 10 slots, numbered 0 to 9.

| Key | Calculation | Slot |
|---|---|---|
| 25 | 25 MOD 10 | 5 |
| 36 | 36 MOD 10 | 6 |
| 19 | 19 MOD 10 | 9 |

For a key that is text, first turn it into a number, for example by **adding the character codes**, then apply MOD. For the key "cat" the codes of c, a and t are 99, 97 and 116, which add up to 312. In a table of 7 slots, 312 MOD 7 = 4, so "cat" goes in slot 4. In a table of 7 slots, "dog" (100 + 111 + 103 = 314) goes in slot 6.

## Properties of a good hash function

- **Even distribution.** The records should be spread across the whole table, so that few slots are crowded and few are empty.
- **Quick to compute.** The whole point is speed, so the calculation must be simple.
- **Deterministic.** The same key must always give the same result.
- **Always valid.** The result must be a legal position, which MOD guarantees.

The distribution depends on both the function and the data. A function that looks fine can behave badly on some data.

**Worked example 2: a poor fit.** The keys 10, 20, 30, 40, 50 and 60 are hashed with key MOD 10.

- Hashes: 0, 0, 0, 0, 0, 0. **Every key goes to slot 0.**

Hashing the same keys with key MOD 7 gives 3, 6, 2, 5, 1 and 4, which are all different. Choosing a table size that shares no common factor with the pattern in the keys (a prime number is a common choice) helps to spread the data.

**Worked example 3: a function with a built-in weakness.** The sum-of-character-codes function gives the same value for any word made from the same letters. "tea", "eat" and "ate" all add up to 314, so each hashes to 314 MOD 7 = 6. A better function weights each character by its position, so that anagrams differ.

## Collisions and rehashing

A **collision** occurs when two different keys give the same hash value. Because a table is much smaller than the set of possible keys, collisions are unavoidable.

The specification's method of handling a collision is **rehashing**: when the slot that a key hashes to is already occupied, the record is stored in the **next available position**. Check the next slot, then the one after, and so on. If you reach the end of the table, **wrap round** to slot 0.

**Worked example 4: inserting with collisions.** A table of 10 slots uses key MOD 10. Insert 25, 36, 45, 15, 55, 19 and 29, in that order.

| Key | Hash | Slots checked | Stored in |
|---|---|---|---|
| 25 | 5 | 5 | 5 |
| 36 | 6 | 6 | 6 |
| 45 | 5 | 5 (full), 6 (full), 7 | 7 |
| 15 | 5 | 5, 6, 7 (all full), 8 | 8 |
| 55 | 5 | 5, 6, 7, 8 (all full), 9 | 9 |
| 19 | 9 | 9 (full), then wraps to 0 | 0 |
| 29 | 9 | 9 (full), 0 (full), 1 | 1 |

The final table is:

| Slot | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Key | 19 | 29 | | | | 25 | 36 | 45 | 15 | 55 |

Notice the two things this shows. A group of keys that hash to the same place, such as 25, 45, 15 and 55, ends up in a run of neighbouring slots. And the search for 29 must start at its hash (9) and follow the same trail: 9, 0, then 1.

### Searching a hash table

To find a key, compute its hash, and look in that slot. If the key is there, it has been found. If another key is there, move to the next slot (wrapping round) and repeat. **Stop with "not found" when you reach an empty slot**, because the key would have been placed there. Also stop if you have gone right round the table.

- Search for 55: slot 5 (25), 6 (36), 7 (45), 8 (15), 9 (55). Found after **5 slots**.
- Search for 65: hash 5. The trail is 5, 6, 7, 8, 9, 0, 1 (all occupied by other keys) and then slot 2, which is empty. 65 is **not present**, after checking 8 slots.

A long trail is the cost of crowding. The fuller the table, the more collisions occur and the slower it becomes.

### A hash table in code

```python
class HashTable:
    def __init__(self, size):
        self.size = size
        self.slots = [None] * size

    def hash(self, key):
        return key % self.size

    def insert(self, key):
        i = self.hash(key)
        for _ in range(self.size):
            if self.slots[i] is None:
                self.slots[i] = key
                return i
            i = (i + 1) % self.size
        return None          # table full
```

The loop tries at most `size` slots. `(i + 1) % self.size` moves on and wraps round to 0 at the end. If the loop finishes without finding a gap, the table is full and nothing is stored.

**Worked example 5: full table.** With a table of 3 slots and keys 3, 6, 9, all three hash to 0 and go in slots 0, 1 and 2. The key 12 also hashes to 0, finds every slot occupied, and cannot be stored.

## Hash table or array?

| Feature | Hash table | Array (searched) |
|---|---|---|
| Finding a record | Very fast on average: one calculation | Needs a search (linear or binary) |
| Inserting a record | Fast on average | Slow if the array must stay sorted |
| Memory | Needs spare, empty slots to work well | Can be exactly the size of the data |
| Order | Records are not in key order | Can be kept in order |
| Fixed size | Becomes slow as it fills; cannot take more than its size | Same limit if fixed |
| Weakness | Collisions slow it down; a poor hash function crowds records | Search time grows with the number of items |

Use a hash table for look-up by key when speed matters and order does not, for example a dictionary of usernames or a symbol table in a compiler. Use an array when records are needed in order or accessed by position.

## Exam technique

- **Show the calculation** for each hash: "36 MOD 10 = 6".
- **Show the trail** for each collision: which slots were checked and which was used.
- **Wrap round.** After the last slot, go to slot 0.
- **Define a collision** as two keys that give the same hash value.
- **Describe rehashing** as storing the record in the next available position.
- **When searching, stop at an empty slot.**
- **For "good hash function" questions,** give an even distribution and quick to compute, and explain why each matters.

## Common mistakes

- Putting a colliding record in a random empty slot rather than the next available one.
- Forgetting to wrap round to slot 0.
- Saying that MOD makes collisions impossible. It only keeps the result in range.
- Using the number of keys, not the table size, as the divisor.
- Saying that a hash table keeps its records in order.
- Stopping a search at the first slot that holds a different key, instead of following the trail.

## Next steps

- [Hash tables revision notes](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-revision-notes/)
- [Hash tables practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-practice/)
- [Priority queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.3 Hash tables.
