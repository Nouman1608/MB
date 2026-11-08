---
title: "AQA A-Level Computer Science: Queues, Stacks, Graphs, Trees, Hash Tables and Vectors — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "fields-records-and-files-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "abstract-data-types-data-structures-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "queues-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "stacks-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "graphs-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "trees-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "hash-tables-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "dictionaries-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "vectors-7517"
description: "Original practice questions with worked answers on files, queues, stacks, graphs, trees, hash tables, dictionaries and vectors for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/) | [Abstract data types revision notes](/resources/aqa-a-level-computer-science-abstract-data-types-revision-notes/)

These questions cover 4.2.1.3–4.2.8 of AQA A-Level Computer Science
(7517). Arrays are practised in the [Data Structures and Arrays practice
questions](/resources/aqa-a-level-computer-science-data-structures-practice/).

---

## Section A

**1.** State **one** difference between a text file and a binary file. **[1]**

**2.** Explain **one** advantage and **one** disadvantage of a static data structure compared with a dynamic one. **[2]**

**3.** State what is meant by a **collision** in a hash table. **[1]**

**4.** Define a **tree** as AQA uses the term. **[2]**

**5.** State the conditions on α and β for αu + βv to be a convex combination of u and v. **[2]**

## Section B

**6.** A circular queue is held in an array of 5 elements, indexed 0 to 4. It currently holds 3 items, with front = 3 and rear = 0.

**(a)** State the indices of the three occupied elements. **[1]**
**(b)** Two items are added. Give the new value of rear after each addition, and state whether the queue is then full. **[3]**
**(c)** Explain why a linear queue in the same array could not have accepted these items without moving data. **[2]**

**7.** A stack, implemented with an array of size 4 and a top pointer, is empty (top = −1). The following operations are carried out in order:

push(8), push(3), pop(), push(5), peek(), push(1)

**(a)** State the values returned by pop() and peek(). **[2]**
**(b)** State the contents of the stack from bottom to top and the final value of top. **[2]**

**8.** A graph has vertices A, B, C and D and the undirected weighted edges A–B (4), A–C (2), B–D (5) and C–D (8).

**(a)** Draw the adjacency matrix for this graph. **[3]**
**(b)** Give the adjacency list for vertex D. **[1]**
**(c)** A transport company models 2000 bus stops, each connected to about three others. Justify which representation it should use. **[2]**

**9.** The keys 31, 18, 44 and 57 are inserted in that order into a hash table with 13 slots (0–12) using hash = key MOD 13 and rehashing to the next free slot.

**(a)** State the slot in which each key is stored. **[4]**
**(b)** Describe how the program would find key 57 later. **[2]**

## Section C

**10.** The numbers 50, 30, 70, 20, 40 and 60 are inserted in that order into an empty binary search tree.

**(a)** Draw the tree. **[3]**
**(b)** Explain why the tree is a rooted tree and a binary tree. **[2]**

**11.** A program counts word frequencies to compare documents.

**(a)** Write the dictionary for the text "To be or not to be", ignoring case. **[2]**
**(b)** Explain why a dictionary suits this task. **[2]**

**12.** u = [2, 1] and v = [1, 3].

**(a)** Calculate u + v and 3u, and state the geometric effect of each operation. **[3]**
**(b)** Calculate u · v and hence the angle between u and v, to the nearest degree. **[4]**

---

## Answers

**1.** A text file stores data as characters that can be read in a text editor; a binary file stores data in its internal (non-text) format [1].

**2.** Advantage: no memory is needed for pointers, and items can be accessed directly by index [1]. Disadvantage: memory is reserved in advance, so space may be wasted, and it cannot grow when full [1].

**3.** Two different keys produce the same hash value (address) [1].

**4.** A connected [1], undirected graph with no cycles [1].

**5.** α ≥ 0 and β ≥ 0 [1]; α + β = 1 [1].

**6.** **(a)** 3, 4 and 0 [1].
**(b)** First addition: rear = (0 + 1) MOD 5 = **1** [1]; second: rear = **2** [1]; the queue now holds 5 items and is **full** [1].
**(c)** In a linear queue the rear only moves forward; once it reaches index 4 no more items can be added [1], even though slots before the front are free, unless items are shuffled forward [1].

**7.** **(a)** pop() returns **3** [1]; peek() returns **5** [1].
**(b)** Bottom to top: **8, 5, 1** [1]; top = **2** [1].

**8.** **(a)**

| | A | B | C | D |
|---|---|---|---|---|
| A | – | 4 | 2 | – |
| B | 4 | – | – | 5 |
| C | 2 | – | – | 8 |
| D | – | 5 | 8 | – |

Correct vertices on both axes [1]; correct weights [1]; symmetric because the graph is undirected [1]. (Accept 0 or ∞ for no edge.)
**(b)** D: B (5), C (8) [1].
**(c)** An **adjacency list** [1]: the graph is sparse (about 3 edges per stop), so a 2000 × 2000 matrix would be mostly empty and waste memory [1].

**9.** **(a)** 31 MOD 13 = 5 → slot **5** [1]. 18 MOD 13 = 5 → collision → slot **6** [1]. 44 MOD 13 = 5 → 5 and 6 taken → slot **7** [1]. 57 MOD 13 = 5 → 5, 6, 7 taken → slot **8** [1].
**(b)** Compute 57 MOD 13 = 5 and check slot 5 [1]; move to the next slot each time until 57 is found (slot 8) or an empty slot shows it is not present [1].

**10.** **(a)** Root 50 [1]; 30 left and 70 right of 50 [1]; 20 and 40 as left and right children of 30, 60 as left child of 70 [1].
**(b)** It is rooted because one node (50) is designated the root, with no parent [1]; it is binary because every node has at most two children [1].

**11.** **(a)** {'to': 2, 'be': 2, 'or': 1, 'not': 1} [2] (1 mark for correct keys, 1 for correct counts).
**(b)** Each word is a unique key whose count is the value [1], so a count can be found and updated directly by its word without searching the whole collection [1].

**12.** **(a)** u + v = [3, 4]; 3u = [6, 3] [1]. Addition achieves a **translation** [1]; multiplying by a scalar achieves **scaling** [1].
**(b)** u · v = 2 × 1 + 1 × 3 = **5** [1]. |u| = √5, |v| = √10 [1]. cos θ = 5 ÷ √50 = 0.7071 [1]. θ = **45°** [1].

---

## Where marks are usually lost

- Forgetting to wrap the rear pointer with MOD in a circular queue trace.
- Treating peek as removing the item, which changes every later answer.
- Drawing a non-symmetric adjacency matrix for an undirected graph.
- Rehashing correctly but not explaining how a key is found again.
- Rounding the cosine too early in vector angle questions.

## Frequently asked questions

**Which parts of the AQA 7517 specification do these questions cover?**
These questions cover sections 4.2.1.3 to 4.2.8 of AQA A-Level Computer Science 7517, including files, queues, stacks, graphs, trees, hash tables, dictionaries and vectors. Arrays are practised separately.

**What is a common mistake in circular queue questions?**
Forgetting to wrap the rear pointer round with MOD when it reaches the end of the array.

**When should a graph use an adjacency list rather than an adjacency matrix?**
An adjacency list suits a sparse graph with few edges per vertex, because a matrix for a large sparse graph would be mostly empty and waste memory.

**What is the difference between pop and peek on a stack?**
Pop removes and returns the top item, while peek returns the top item without removing it. Treating peek as removing the item is a common error.
