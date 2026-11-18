---
title: "AQA A-Level Computer Science (7517): Hash Tables -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA A-Level Computer Science 7517 hash table questions: hashing calculations, collisions, rehashing traces, deletion and code, with full answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Hash tables study guide](/resources/aqa-a-level-computer-science-7517-hash-tables/) | [Hash tables revision notes](/resources/aqa-a-level-computer-science-7517-hash-tables-revision-notes/)

These questions cover 4.2.6 Hash tables of AQA A-Level Computer Science
(7517), including the creation and maintenance of data in a hash table
(4.2.1.4). Where a question uses character codes, the codes are given.

---

## Section A

**1.** State what is meant by a **hash table**. **[1]**

**2.** Define the term **collision** in the context of hash tables. **[1]**

**3.** State **two** properties of a good hashing algorithm. **[2]**

**4.** Give **two** uses of hash tables. **[2]**

**5.** Explain why a hash table is not a suitable structure when records must regularly be output in key order. **[2]**

## Section B

**6.** A hash table has 11 slots, numbered 0 to 10. The hashing algorithm is key MOD 11. Collisions are handled by rehashing to the next slot, wrapping from slot 10 to slot 0. The keys 25, 47, 14, 32, 21 and 54 are inserted in that order into the empty table.

**(a)** State the slot in which each key is stored. **[4]**
**(b)** State how many slots are examined when searching for 54. **[1]**
**(c)** Describe how a search for the key 43 would end. **[2]**

**7.** A company hashes six-digit part numbers by splitting each into three pairs of digits, adding the pairs, and taking the result MOD 50.

**(a)** Calculate the index for each of the part numbers 120734, 250328 and 401201. **[3]**
**(b)** Identify the two part numbers that collide. **[1]**

**8.** A program hashes three-letter words by adding the ASCII codes of the letters and taking the result MOD 13. The codes needed are D = 68, G = 71 and O = 79.

**(a)** Calculate the hash of "DOG", showing your working. **[2]**
**(b)** Explain why the word "GOD" causes a problem for this algorithm, and suggest a change to the algorithm that would reduce the problem. **[2]**

**9.** Using the completed table from Question 6, a programmer deletes the key 47 by making its slot empty. Explain what goes wrong when the program then searches for 14, and describe how deletion should be handled instead. **[3]**

## Section C

**10.** A hash table is stored in an array called Table, with size tableSize. Empty slots hold the value Empty. The hashing algorithm is key MOD tableSize, and collisions are handled by rehashing to the next slot with wrap-round.

Write a subroutine in pseudocode, Find(key), that returns the index of the slot holding key, or −1 if the key is not in the table. Your subroutine must terminate even if the table is full. **[6]**

**11.** A school system looks up student records by a unique student ID. Compare a hash table with a binary search tree for storing these records. **[4]**

**12.** A hash table with 1000 slots, using rehashing to the next free slot, has become almost full. Explain the effect this has on the performance of the table, and describe what could be done about it. **[4]**

---

## Answers

**1.** A data structure that creates a mapping between keys and values, using a hashing algorithm to calculate where each key's record is stored [1].

**2.** Two different key values compute the same hash value (index) [1].

**3.** It always produces the same index for the same key [1]. It spreads keys evenly over the table so that collisions are rare [1]. Also credit: quick to calculate; always produces a valid index within the table.

**4.** Indexing records in a database or file so they can be found directly from their key [1]. Implementing a dictionary data type in a programming language [1]. Also credit symbol tables in compilers or interpreters, and caches.

**5.** A good hashing algorithm deliberately scatters keys across the table, so neighbouring slots do not hold keys in order [1]. Producing ordered output would mean extracting and sorting all the keys each time, losing the speed advantage; a sorted structure such as a binary search tree would be better [1].

**6.** **(a)** 25 → 3 and 47 → 4 (47 MOD 11 = 3, collision) [1]. 14 → 5 (14 MOD 11 = 3; 3 and 4 taken) [1]. 32 → 10 (32 MOD 11 = 10) [1]. 21 → 0 (21 MOD 11 = 10, taken, wraps to 0) and 54 → 1 (54 MOD 11 = 10; 10 and 0 taken) [1].
**(b)** Three (slots 10, 0 and 1) [1].
**(c)** 43 MOD 11 = 10, so slots 10 (32), 0 (21) and 1 (54) are examined in turn [1]. Slot 2 is empty, so the search ends and reports that 43 is not in the table [1].

**7.** **(a)** 12 + 07 + 34 = 53, and 53 MOD 50 = **3** [1]. 25 + 03 + 28 = 56, and 56 MOD 50 = **6** [1]. 40 + 12 + 01 = 53, and 53 MOD 50 = **3** [1].
**(b)** 120734 and 401201 [1].

**8.** **(a)** 68 + 79 + 71 = 218 [1]; 218 MOD 13 = **10** [1].
**(b)** "GOD" contains the same letters, so the sum and therefore the hash are the same, and it collides with "DOG" (every anagram collides) [1]. Multiply each character code by its position in the word (or another weighting) before adding, so the order of the letters affects the result [1].

**9.** 14 hashes to slot 3, which holds 25, so the search moves to slot 4 [1]. Slot 4 is now empty, so the search stops and wrongly reports that 14 is not present, although it is stored in slot 5 [1]. Instead, the deleted slot should be given a special "deleted" marker, which searches skip past and insertions may reuse [1].

**10.** Example answer:

```
SUBROUTINE Find(key)
  index ← key MOD tableSize
  start ← index
  REPEAT
    IF Table[index] = key THEN
      RETURN index
    ENDIF
    IF Table[index] = Empty THEN
      RETURN -1
    ENDIF
    index ← (index + 1) MOD tableSize
  UNTIL index = start
  RETURN -1
ENDSUBROUTINE
```

Marking points: calculates the hash with key MOD tableSize [1]; records the starting index [1]; returns the index when the slot holds the key [1]; returns −1 when an empty slot is reached [1]; moves to the next slot using MOD tableSize to wrap round [1]; stops and returns −1 on returning to the starting slot [1].

**11.** A hash table can usually go straight to a record in one step whatever the number of students, whereas a binary search tree needs about log₂ *n* comparisons even when balanced [1]. A binary search tree keeps the IDs in order, so records can be output in ID order by an in-order traversal, whereas a hash table cannot [1]. A hash table's speed falls as collisions increase, whereas a binary search tree's speed falls if it becomes unbalanced [1]. An array-based hash table has a fixed size set in advance, whereas a binary search tree can grow one node at a time [1]. Each mark needs both structures compared.

**12.** Most slots are filled, so collisions become far more frequent [1], and long clusters of filled slots build up, so inserting and searching need many probes; performance moves towards that of a linear search [1]. A larger table could be created [1], and every item re-inserted into it using a hashing algorithm based on the new size, which spreads out the clusters [1].

---

## Where marks are usually lost

- Working the keys out of order, so collisions appear in the wrong places.
- Forgetting the wrap-round from the last slot to slot 0.
- Leaving out the working in a hashing calculation, so no method mark can be given.
- Search code with no stopping condition for a full table.
- Comparison answers that describe only the hash table.
