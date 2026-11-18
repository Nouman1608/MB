---
title: "Cambridge A Level Computer Science (9618): Algorithms (19.1) -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 19: Computational thinking and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 19.1
syllabusTopics:
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
    subtopic: "algorithms-19-1"
description: "Condensed 9618 notes on searches, bubble and insertion sorts, ADT operations and implementations, graphs and Big O time and space, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 19.1 "Algorithms" of Cambridge International AS & A Level Computer Science 9618: linear and binary search, insertion and bubble sort, finding, inserting and deleting in abstract data types, graphs, implementing ADTs from other types, and Big O notation for time and space. It is assessed in Paper 3 and in program code in Paper 4.

Related: [Algorithms study guide](/resources/cambridge-a-level-computer-science-9618-algorithms-19-1/) · [Algorithms practice questions](/resources/cambridge-a-level-computer-science-9618-algorithms-19-1-practice/) · [Topic 19 revision notes](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-revision-notes/)

## Key terms

| Term | Meaning |
|---|---|
| ADT | Abstract data type: a collection of data with a set of operations, defined independently of how it is stored |
| Stack | LIFO: items added and removed at the top |
| Queue | FIFO: items added at the rear, removed from the front |
| Linked list | Nodes, each holding data and a pointer to the next node |
| Free list | Linked list of the unused nodes available for new items |
| Null pointer | Value (such as −1) showing there is no next node |
| Binary search tree | Each node has at most two children; left subtree smaller, right subtree larger |
| Graph | Vertices joined by edges; edges may be directed and/or weighted |
| Dictionary | Collection of key-value pairs, looked up by key |
| Time complexity | How the number of steps grows with n |
| Space complexity | How the extra memory needed grows with n |

## Searching

| | Linear | Binary |
|---|---|---|
| Data must be sorted? | No | Yes |
| Direct access to any item needed? | No | Yes (array) |
| Method | Check each item in turn | Compare with middle; discard half |
| Worst case | n comparisons, O(n) | about log₂ n + 1 comparisons, O(log n) |

**Binary search maximum comparisons**: 11 items → 4; 500 → 9; 1,000 → 10; 1,000,000 → 20.

## Sorting

**Bubble sort**: compare neighbours, swap if out of order; each pass puts the largest remaining item at the end; shorten each pass by one; stop when a pass makes no swaps (flag).

**Insertion sort**: take the next item; shift larger sorted items right; insert it in the gap.

| Initial order (8 items) | Bubble (with flag) | Insertion |
|---|---|---|
| Sorted | 7 comparisons | 7 comparisons |
| Reversed | 28 comparisons | 28 comparisons |

- Worst case both O(n²): n(n − 1) ÷ 2 comparisons.
- Best case (sorted) both about n − 1 comparisons.
- Both sort in place: extra space O(1).
- Insertion sort is usually better for nearly sorted data.

## ADT operations

| ADT | Insert | Delete | Find |
|---|---|---|---|
| Stack | Push: check not full; increment top pointer; store item | Pop: check not empty; read item at top; decrement top pointer | Not required |
| Queue | Enqueue: check not full; move rear pointer (wrap round if circular); store item | Dequeue: check not empty; read item at front; move front pointer | Not required |
| Linked list | Take node from free list; find position; set new node's pointer; update previous pointer (or start pointer) | Find node; make previous pointer skip it (or move start pointer); return node to free list | Follow pointers from start until found or null |
| Binary tree | Start at root; go left if smaller, right if larger, until a null pointer; attach new node there | Not required | Start at root; go left or right until found or null |

**Pointer order rule for linked-list insertion**: copy the previous node's pointer into the new node *before* changing the previous node's pointer.

## Implementing ADTs from other types

- **Stack**: array + top pointer, or linked list (top = start).
- **Queue**: circular array + front and rear pointers (and a count), or linked list with front and rear pointers.
- **Linked list**: array of records (data, pointer) + start pointer + free pointer.
- **Binary tree**: array of records (data, left pointer, right pointer) + root pointer.
- **Dictionary**: hash table (key hashed to an array index) or binary search tree ordered by key.

## Graphs

- Vertices + edges; directed or undirected; weighted or unweighted.
- May contain cycles; no root, unlike a tree.
- **Justify** by matching to the situation: towns and roads (weighted by distance), web pages and links (directed), people and friendships (undirected).
- Code for graphs is not required.

## Big O summary

| Order | Example in this section |
|---|---|
| O(1) | Push or pop on an array stack; extra space for in-place sorts |
| O(log n) | Binary search; search of a balanced binary tree |
| O(n) | Linear search; linked list search; sorted data through a flagged bubble sort |
| O(n²) | Bubble and insertion sort, worst case |

## Exam traps

- Binary search on unsorted data, or on a linked list without direct access.
- Bubble sort with no early stop when asked for an efficient version.
- Linked list: previous pointer changed first, losing the rest of the list.
- Free pointer not updated after taking a node.
- Pop or dequeue without checking for an empty structure.
- Graph described as a hierarchy.

## Self-test

1. Give the two conditions for using a binary search.
2. What is the maximum number of comparisons for a binary search of 500 items?
3. What does the flag in a bubble sort record?
4. How many comparisons does a flagged bubble sort make on 6 items already in order?
5. What is the worst-case time complexity of insertion sort?
6. Why do bubble and insertion sort have O(1) space complexity?
7. What must be checked before popping a stack?
8. In a linked list insertion, what happens to the free pointer?
9. Describe how to find an item in a binary search tree.
10. Give one way to implement a dictionary.
11. Give two features of a graph that a tree does not have to have.
12. Why might a linked list be chosen over an ordered array for frequent insertions?

### Answers

1. The data must be sorted, and any item must be directly accessible (for example in an array).
2. 9.
3. Whether any swap was made during the pass; no swaps means the list is sorted.
4. 5 (one pass, no swaps).
5. O(n²).
6. They sort in place, needing only a fixed number of extra variables whatever n is.
7. That the stack is not empty (top pointer not below the first position).
8. It moves to the next node in the free list (the pointer of the node just taken).
9. Start at the root; if the target is smaller go left, if larger go right; repeat until found or a null pointer is reached.
10. A hash table with the key hashed to an index, or a binary search tree ordered by key.
11. Any two: cycles; no root; edges with weights; directed edges in both directions; more than one path between vertices.
12. Only pointers are changed; no items need to be moved to make room.
