---
title: "Cambridge A Level Computer Science (9618): Algorithms (19.1)"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 19.1: linear search, bubble sort with a flag, sort performance, linked list insertion, binary tree search, graphs and Big O."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 19.1 "Algorithms" of Cambridge International AS & A Level Computer Science 9618 asks you to write algorithms for a linear search, a binary search, an insertion sort and a bubble sort; to know "the conditions necessary for the use of a binary search" and that the "performance of a sorting routine may depend on the initial order of the data and the number of data items"; to write algorithms to find, insert and delete items in stacks, queues, linked lists and binary trees; to describe a graph and justify its use; to show how ADTs can be "implemented from appropriate built-in types or other ADTs"; and to compare algorithms using Big O notation for "time and space complexity". It is assessed in Paper 3 and, in program code, in Paper 4.

Related: [Algorithms revision notes](/resources/cambridge-a-level-computer-science-9618-algorithms-19-1-revision-notes/) · [Algorithms practice questions](/resources/cambridge-a-level-computer-science-9618-algorithms-19-1-practice/) · [Topic 19 Computational thinking and Problem-solving study guide](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-study-guide/)

This guide concentrates on the algorithms the topic guide treats briefly: linear search, bubble sort, how initial order changes performance, linked-list insertion with a free list, binary tree search, graphs and space complexity. Pseudocode follows the Cambridge conventions.

## Linear search

A linear search checks each item in turn until the target is found or the list ends. It works on unsorted data.

```
DECLARE Index : INTEGER
DECLARE Found : BOOLEAN
Index ← 1
Found ← FALSE
WHILE Index <= MaxItems AND Found = FALSE
   IF Data[Index] = Target THEN
      Found ← TRUE
   ELSE
      Index ← Index + 1
   ENDIF
ENDWHILE
IF Found = TRUE THEN
   OUTPUT "Found at position ", Index
ELSE
   OUTPUT "Not found"
ENDIF
```

The Found flag stops the loop early. In the worst case (target last, or absent) all n items are checked, so the time complexity is O(n).

## When a binary search can be used, and how it scales

A binary search needs the data to be **sorted** and held in a structure where any position can be reached directly, such as an array. Each comparison halves the part still to be searched, so the maximum number of comparisons is the number of times n can be halved before one item is left, plus one: for 1,000 items at most 10, for 1,000,000 items at most 20. Multiplying the data by 1,000 adds only 10 comparisons. That is O(log n) behaviour; a linear search on a million items may need a million comparisons.

## Bubble sort with a flag

A bubble sort compares each pair of neighbours and swaps them if they are in the wrong order. After each pass, the largest remaining item has "bubbled" to the end, so the next pass can stop one place earlier. A flag records whether any swap happened; a pass with no swaps means the list is sorted.

```
Boundary ← MaxItems - 1
REPEAT
   Swapped ← FALSE
   FOR j ← 1 TO Boundary
      IF Data[j] > Data[j + 1] THEN
         Temp ← Data[j]
         Data[j] ← Data[j + 1]
         Data[j + 1] ← Temp
         Swapped ← TRUE
      ENDIF
   NEXT j
   Boundary ← Boundary - 1
UNTIL Swapped = FALSE OR Boundary = 0
```

### Worked example 1: tracing a bubble sort

Sort 5, 1, 4, 2, 8.

| Pass | Comparisons | List after pass | Swapped? |
|---|---|---|---|
| 1 | 4 (5/1 swap, 5/4 swap, 5/2 swap, 5/8) | 1, 4, 2, 5, 8 | Yes |
| 2 | 3 (1/4, 4/2 swap, 4/5) | 1, 2, 4, 5, 8 | Yes |
| 3 | 2 (1/2, 2/4) | 1, 2, 4, 5, 8 | No, so stop |

Nine comparisons in total. Without the flag, a fourth pass would be made for nothing.

## How the initial order and number of items affect performance

Counting comparisons for eight items shows why the syllabus says performance "may depend on the initial order of the data":

| Initial order | Bubble sort (with flag) | Insertion sort |
|---|---|---|
| Already sorted | 7 (one pass, no swaps) | 7 (each item compared once) |
| Reverse order | 28 | 28 |

For n items in reverse order both sorts make n(n − 1) ÷ 2 comparisons, so doubling n roughly quadruples the work: O(n²) in the worst case. On sorted or nearly sorted data both approach n − 1 comparisons, O(n). Insertion sort is usually the better of the two on nearly sorted data, because each item stops moving as soon as it meets a smaller one, while a bubble sort needs a complete extra pass to confirm order.

## Linked list insertion using a free list

A linked list can be implemented from built-in types: an array of records, each with a Data field and a Pointer field. StartPtr gives the first node; FreePtr gives the first unused node; unused nodes are themselves linked together as the **free list**; NullPtr (such as −1) marks the end of a list.

To insert a new item in order:

```
PROCEDURE InsertItem(NewItem : STRING)
   DECLARE NewPtr, ThisPtr, PrevPtr : INTEGER
   IF FreePtr = NullPtr THEN
      OUTPUT "List is full"
   ELSE
      NewPtr ← FreePtr
      List[NewPtr].Data ← NewItem
      FreePtr ← List[FreePtr].Pointer
      ThisPtr ← StartPtr
      PrevPtr ← NullPtr
      WHILE ThisPtr <> NullPtr AND List[ThisPtr].Data < NewItem
         PrevPtr ← ThisPtr
         ThisPtr ← List[ThisPtr].Pointer
      ENDWHILE
      IF PrevPtr = NullPtr THEN
         List[NewPtr].Pointer ← StartPtr
         StartPtr ← NewPtr
      ELSE
         List[NewPtr].Pointer ← List[PrevPtr].Pointer
         List[PrevPtr].Pointer ← NewPtr
      ENDIF
   ENDIF
ENDPROCEDURE
```

The node is taken from the front of the free list, the loop finds where the new item belongs, and two pointers are changed. No data is moved, which is the advantage of a linked list over an ordered array. Deleting reverses the idea: find the node, make the previous node's pointer skip it (or move StartPtr if it is first), then link the freed node to the front of the free list.

## Finding an item in a binary search tree

The same array-of-records approach implements a binary tree, with LeftPtr and RightPtr in place of a single pointer.

```
FUNCTION FindNode(Target : INTEGER) RETURNS INTEGER
   DECLARE ThisPtr : INTEGER
   ThisPtr ← RootPtr
   WHILE ThisPtr <> NullPtr AND Tree[ThisPtr].Data <> Target
      IF Target < Tree[ThisPtr].Data THEN
         ThisPtr ← Tree[ThisPtr].LeftPtr
      ELSE
         ThisPtr ← Tree[ThisPtr].RightPtr
      ENDIF
   ENDWHILE
   RETURN ThisPtr
ENDFUNCTION
```

It returns the index of the node, or NullPtr if the target is absent. Each step discards one subtree, so a balanced tree is searched in O(log n) steps; a tree built from already sorted data is one long branch and needs O(n).

## Implementing one ADT from another

| ADT | Possible implementation |
|---|---|
| Stack | An array with a top pointer; or a linked list with insertions and deletions at the start |
| Queue | An array used circularly with front and rear pointers; or a linked list with a pointer to each end |
| Linked list | An array of records with data and pointer fields, plus a free list |
| Binary tree | An array of records with data, left and right pointers |
| Dictionary | Key-value pairs held in a hash table (an array indexed by a hash of the key), or in a binary search tree ordered by key |

## Graphs

A **graph** is an ADT made of **vertices** (nodes) joined by **edges**. Edges may be **directed** (one way) and may be **weighted** (carrying a value such as distance or cost). Justify a graph whenever the problem is about connections that do not form a simple hierarchy: roads between towns (weighted, possibly directed for one-way streets), links between web pages (directed), or friendships in a social network (undirected). The syllabus does not require you to write code for a graph.

## Big O for time and space

| Algorithm | Time (worst case) | Extra space |
|---|---|---|
| Linear search | O(n) | O(1) |
| Binary search (iterative) | O(log n) | O(1) |
| Bubble sort | O(n²) | O(1): sorts in place, one temporary variable |
| Insertion sort | O(n²) | O(1) |
| Binary tree search (balanced) | O(log n) | O(1) |

**Space complexity** describes how the memory an algorithm needs grows with n, beyond the data itself. Both sorts here work in place, so they need only a fixed amount of extra memory, whatever n is.

## Common mistakes

- Using a binary search on unsorted data, or forgetting that it needs direct access to the middle item.
- A bubble sort that never shortens the passes, or that has no way to stop early.
- Linked list insertion that changes the previous node's pointer before copying it into the new node, which loses the rest of the list.
- Forgetting to update FreePtr, so the same node is used twice.
- Describing a graph as a tree; a graph can contain cycles and need have no root.
- Giving Big O for time when the question asks about space.

## Exam technique

- **Write an algorithm**: declare variables, use the Cambridge keywords, and test it mentally on an empty list, a one-item list and a target at each end.
- **Trace**: one row per pass or loop iteration, with every variable that changes.
- **Explain** how performance varies: refer to n and to the initial order, with a worked count if you can.
- **Justify** a graph: name the vertices, the edges and whether they are weighted or directed in that situation.
