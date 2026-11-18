---
title: "AQA A-Level Computer Science (7517): Abstract Data Types and Data Structures -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.14
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "abstract-data-types-data-structures-7517"
description: "Condensed AQA 7517 section 4.2.1.4 recall: ADT concept, uses, representations, static versus dynamic, creating and maintaining queues, stacks and hash tables."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.1.4 Abstract data types/data structures**, AQA A-Level Computer Science (7517). Worked examples, including a dynamic stack and a hash table trace, are in the [abstract data types study guide](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/); exam-style questions are in the [abstract data types practice questions](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-practice/).

## The four things 4.2.1.4 asks

1. Concept and uses of **queue, stack, graph, tree, hash table, dictionary, vector**; use them in simple contexts.
2. How to **represent** them when a language has no built-in type.
3. **Static vs dynamic**: distinguish, compare uses, advantages and disadvantages.
4. **Creation and maintenance** of data in queues (linear, circular, priority), stacks and hash tables.

## ADT in one sentence

An **abstract data type** is defined by its **operations and their behaviour**, not by how its data is stored.

Why separate interface from implementation: simpler use; the implementation can be replaced without changing calling code; data can only be changed through valid operations.

## Uses

| ADT | Rule or shape | Use |
|---|---|---|
| Queue | FIFO | Print spooling, buffers, scheduling |
| Stack | LIFO | Return addresses, undo, reversing |
| Graph | Vertices and edges | Networks, maps |
| Tree | Connected, undirected, no cycles | Folders, binary search trees |
| Hash table | Key → location by hashing | Fast lookup by key |
| Dictionary | Key-value pairs | Word counts, settings |
| Vector | Ordered numbers from one field | Positions, directions |

## Representations without built-in support

```
queue        array + front + rear (+ size)     | linked nodes + front/rear refs
stack        array + top                       | linked nodes + top ref
graph        adjacency matrix (2-D array)      | adjacency list
tree         arrays: data, left, right         | node records with child refs
hash table   array of slots marked empty       | array of linked lists
dictionary   hash table, or array of records   |
vector       1-D array                         | list or dictionary index → value
             STATIC                            | DYNAMIC
```

Pointers (array indices) and references (addresses of objects created at runtime) link the parts.

## Dynamic stack in four lines

- Push: new node; node.next ← top; top ← node.
- Pop: if top = null, empty; else item ← top.data; top ← top.next.
- Empty test: top = null.
- "Full" only when the heap cannot supply another node.

## Static vs dynamic

| | Static | Dynamic |
|---|---|---|
| Size | Fixed at creation | Changes at run time |
| Memory | Reserved in advance; may be wasted | Taken from the heap as needed |
| Overhead | None for pointers | Each item needs space for references |
| Limit | Full at declared size | Heap exhaustion |
| Access | Direct by index | Usually follow references |
| Complexity | Simpler | Harder to implement correctly |
| Suits | Known, stable number of items | Unpredictable, varying numbers |

## Creation and maintenance

| Structure | Creation | Maintenance |
|---|---|---|
| Linear queue | Reserve array; front ← 0; rear ← −1; size ← 0 | Test full before add, empty before remove; rear and front only move forward |
| Circular queue | As linear | As linear, but pointers wrap with MOD so freed slots are reused |
| Priority queue | As linear | Insert in priority order (or search for highest priority on removal); equal priorities keep arrival order |
| Stack | Reserve array; top ← −1 | Test full before push, empty before pop or peek; top moves up or down by one |
| Hash table | Reserve array; mark every slot empty | Hash the key; on a collision rehash (for example next slot) until free; retrieve by the same sequence until the key or an empty slot |

## Key terms

| Term | Definition |
|---|---|
| Abstract data type | Data type defined by its operations and behaviour, independent of implementation |
| Implementation | The concrete data structure and algorithms that provide the ADT's operations |
| Static structure | Size fixed when created |
| Dynamic structure | Size changes during execution, using heap memory |
| Heap | Pool of memory from which dynamic structures are allocated at run time |
| Node | Record in a dynamic structure holding data and one or more references |
| Collision | Two keys hash to the same location |
| Rehashing | Finding another location after a collision |
| Clustering | Keys bunching in neighbouring slots, slowing insertion and search |

## Exam traps

- An ADT is described by its operations, not "an array".
- Dynamic does not mean unlimited: the heap can run out.
- Static is often **faster** to access, not slower.
- Forgetting the full and empty tests when describing maintenance.
- A hash table must mark slots empty at creation, or a failed search cannot stop.
- Dynamic structures use extra memory for references.

## Self-test

1. Define an abstract data type.
2. Give two benefits of separating an ADT's interface from its implementation.
3. How can a graph be represented without a built-in graph type? Give two methods.
4. What is stored in each node of a dynamic stack?
5. Give the condition for a dynamic stack being empty.
6. State one advantage and one disadvantage of a static structure.
7. Why might a dynamic structure use more memory per item?
8. A shop's 24 fixed lockers must each record whether they are in use. Static or dynamic?
9. What are the initial values of top for an array-based stack and of size for an array-based queue?
10. Why must every slot be marked empty when a hash table is created?
11. What is a collision, and what is rehashing?
12. Name a suitable static representation for a vector.

**Answers**

1. A data type defined by the operations that can be performed on it and their behaviour, independent of how it is stored.
2. Any two: code using it is simpler; the implementation can be changed without changing calling code; data can only be altered through valid operations.
3. An adjacency matrix and an adjacency list.
4. The data item and a reference to the next node (the one below it).
5. top = null.
6. Advantage: direct access by index or no pointer overhead or simpler to implement. Disadvantage: memory reserved may be wasted, or it cannot grow when full.
7. Each item must also store one or more references to other items.
8. Static: the number is fixed and known, and each locker can be accessed directly by its number.
9. top = −1; size = 0.
10. So that inserting and searching can tell an unused slot from a stored key; a search stops when it reaches an empty slot.
11. A collision is when two keys hash to the same location; rehashing finds an alternative location, for example the next free slot.
12. A one-dimensional array.

## Related resources

- [Abstract data types study guide](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/)
- [Abstract data types practice questions](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-practice/)
- [Queues revision notes](/resources/aqa-a-level-computer-science-7517-queues-revision-notes/)
- [Stacks revision notes](/resources/aqa-a-level-computer-science-7517-stacks-revision-notes/)
