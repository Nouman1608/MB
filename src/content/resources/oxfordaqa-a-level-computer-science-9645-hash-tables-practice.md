---
title: "OxfordAQA A-Level Computer Science (9645): Hash tables -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Hash Tables Practice Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.10.3 Hash tables: hash functions, collisions, rehashing, searching and hash tables versus arrays, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.10.3 Hash tables** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: hash functions, the properties of a good hash function, collisions, rehashing to the next available position, and hash tables compared with arrays. Slots are numbered from 0. When a record collides, it is stored in the next available position, wrapping round to slot 0 after the last slot.

Related pages: [hash tables study guide](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables/) ·
[hash tables revision notes](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-revision-notes/) ·
[advanced data structures practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/)

## Section A

**1.** State what a hash function does. **[1]**

**2.** State two properties of a good hash function. **[2]**

**3.** A hash table has 12 slots and uses the hash function key MOD 12. Calculate the slot for the keys 40 and 127. **[2]**

**4.** State what is meant by a collision. **[1]**

## Section B

**5.** A hash table has 8 slots and uses the hash function key MOD 8. The keys 16, 24, 7, 15 and 31 are inserted in that order into an empty table.

**(a)** State the slot in which each key is stored. **[5]**
**(b)** Show the final contents of the table. **[2]**
**(c)** Describe the steps to search for the key 23 and state the result. **[3]**

**6.** A hash table with 6 slots stores words. The hash function adds the character codes (a = 97, b = 98 and so on) and applies MOD 6. Insert "ant", "bee" and "cow" in that order into an empty table. The character code totals are ant = 323, bee = 300 and cow = 329.

**(a)** Calculate the hash value for each word. **[3]**
**(b)** State the slot used for each word. **[3]**

**7.** A hash table has 11 slots and uses key MOD 11. The keys 34, 56, 12, 23, 45, 67 and 89 are inserted in that order.

**(a)** State the hash value for each key. **[2]**
**(b)** State the slots in which 12 and 89 are stored. **[2]**
**(c)** Explain what this shows about the distribution of keys and why a different table size might help. **[3]**

**8.** Explain why a hash table needs some empty slots to work efficiently. **[2]**

**9.** A function hashes a word by adding the character codes and applying MOD. Explain one weakness of this function. **[2]**

**10.** Compare the use of a hash table with the use of an unsorted array for storing 5 000 customer records that are looked up by customer number. **[4]**

## Answers

**1.** It uses a record's key to calculate the position (slot) in which the record is stored [1]. **[1]**

**2.** Any two from: gives an even distribution of records across the table; quick to compute; always gives the same result for the same key; gives a result in the valid range [1 each]. **[2]**

**3.** 40 MOD 12 = **4** [1]; 127 MOD 12 = **7** (127 = 10 × 12 + 7) [1]. **[2]**

**4.** Two different keys produce the same hash value [1]. **[1]**

**5. (a)**

| Key | Hash | Trail | Stored in |
|---|---|---|---|
| 16 | 0 | 0 | slot **0** |
| 24 | 0 | 0, 1 | slot **1** |
| 7 | 7 | 7 | slot **7** |
| 15 | 7 | 7, 0, 1, 2 | slot **2** |
| 31 | 7 | 7, 0, 1, 2, 3 | slot **3** |

One mark for each correct slot. **[5]**
**(b)**

| Slot | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| Key | 16 | 24 | 15 | 31 | | | | 7 |

Keys in slots 0 to 3 correct [1]; key 7 in slot 7 and slots 4 to 6 empty [1]. **[2]**
**(c)** 23 MOD 8 = 7, so slot 7 is checked first [1]. It holds 7, not 23, so the search moves on to slots 0, 1, 2 and 3 (wrapping round), each holding a different key [1]. Slot 4 is empty, so 23 is **not in the table** [1]. **[3]**

**6. (a)** ant: 323 MOD 6 = **5** [1]; bee: 300 MOD 6 = **0** [1]; cow: 329 MOD 6 = **5** [1]. **[3]**
**(b)** ant is stored in slot **5** [1]. bee is stored in slot **0** [1]. cow hashes to 5, which is occupied, so it moves on to the next position, wrapping round to slot 0, which is occupied, and is stored in slot **1** [1]. **[3]**

**7. (a)** 34 MOD 11 = 1, 56 MOD 11 = 1, 12 MOD 11 = 1, 23 MOD 11 = 1, 45 MOD 11 = 1, 67 MOD 11 = 1 and 89 MOD 11 = 1, so every key has a hash value of **1** [1 for the values, 1 for noting that they are all the same]. **[2]**
**(b)** 12 is stored in slot **3** [1]; 89 is stored in slot **7** [1]. **[2]**
**(c)** All the keys collide, because they differ by multiples of 11, so they form a long run of slots and each search must follow a long trail [1]. The distribution is very uneven [1]. A different table size, such as 10 or 13, would give different remainders and spread the keys more evenly [1]. **[3]**

**8.** Collisions occur more often as the table fills [1], so records are placed further from their hash positions and searches follow longer trails, which removes the speed advantage [1]. **[2]**

**9.** Words made from the same letters, such as "tea", "eat" and "ate", have the same total [1] and so always collide, which gives an uneven distribution [1]. **[2]**

**10.** Hash table: the position of a record is calculated from the customer number, so a record is found with one calculation and (usually) one look-up, which is very fast [1]. Unsorted array: each look-up needs a linear search, which could mean checking up to 5 000 records [1]. The hash table uses extra memory for empty slots, can suffer from collisions and does not keep the records in order, whereas an array can be compact and can be sorted [1]. Conclusion: for look-up by customer number, the hash table is the better choice, with a justification [1]. **[4]**

## Frequently asked questions

**Do I need to know other ways of handling collisions?**
The specification describes rehashing by storing the second record in the next available position. Learn that method and be able to use it.

**What if the table is full?**
A new record cannot be stored. In practice a larger table would be created, but this is beyond what the specification asks.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.3 Hash tables.
