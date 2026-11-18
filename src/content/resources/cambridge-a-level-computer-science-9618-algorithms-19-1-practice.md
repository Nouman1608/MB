---
title: "Cambridge A Level Computer Science (9618): Algorithms (19.1) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 practice questions with answers on linear search, bubble sort traces, sort performance, linked list pointers, array stacks, graphs and Big O."
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

Related: [Algorithms study guide](/resources/cambridge-a-level-computer-science-9618-algorithms-19-1/) · [Algorithms revision notes](/resources/cambridge-a-level-computer-science-9618-algorithms-19-1-revision-notes/)

---

## Section A

**1.** State **two** conditions that must be met before a binary search can be used. **[2]**

**2.** A sorted array holds 500 items. State the maximum number of comparisons a binary search needs to find an item or show it is absent. **[1]**

**3.** State the worst-case time complexity, in Big O notation, of **(a)** a linear search and **(b)** a bubble sort. **[2]**

**4.** State **one** difference between the way items are deleted from a stack and from a queue. **[2]**

**5.** Explain how a dictionary ADT could be implemented using a built-in array. **[2]**

**6.** A bus company wants to store its routes between stops so that it can find the quickest journey. Describe the key features of a graph and justify its use here. **[3]**

## Section B

**7.** The array Names[1:200] holds 200 unsorted names. Write a pseudocode function LinearSearch(Target : STRING) RETURNS INTEGER that returns the index of Target, or −1 if it is not present. The search must stop as soon as the name is found. **[5]**

**8.** A bubble sort that shortens each pass by one and stops when a pass makes no swaps is used on the list 12, 7, 19, 3, 15, 10.

**(a)** Show the list after each pass. **[3]**

**(b)** State the total number of comparisons made. **[1]**

**9.** The list 2, 3, 5, 9, 4 is nearly sorted.

**(a)** A flagged bubble sort makes 9 comparisons on this list and an insertion sort makes 6. Explain why the insertion sort needs fewer. **[2]**

**(b)** Explain how the number of comparisons made by both sorts changes if the list is in reverse order and the number of items is doubled. **[2]**

**10.** A linked list is stored in the array List[0:7]. Each element has the fields Data and Pointer. StartPtr = 1, FreePtr = 2 and the null pointer is −1.

| Index | Data | Pointer |
|---|---|---|
| 0 | Kiwi | 3 |
| 1 | Apple | 4 |
| 2 | | 5 |
| 3 | Lime | 6 |
| 4 | Fig | 0 |
| 5 | | 7 |
| 6 | Pear | −1 |
| 7 | | −1 |

**(a)** State the items in the order they are reached by following the pointers from StartPtr. **[1]**

**(b)** "Lime" is deleted and its node is returned to the front of the free list. State every value that changes. **[3]**

**(c)** After the deletion, "Grape" is inserted in alphabetical order. State every value that changes. **[3]**

**11.** A stack of up to 50 integers is implemented using the array Stack[1:50] and the integer TopPtr, which is 0 when the stack is empty.

Write pseudocode for a procedure Push(NewItem : INTEGER) that adds an item to the stack, or outputs an error message if the stack is full. **[4]**

**12.** A school stores 1,000,000 exam records sorted by candidate number in an array.

**(a)** Compare the time complexity of a linear search and a binary search for this data, using the number of comparisons in the worst case. **[2]**

**(b)** Explain what is meant by space complexity, and state the space complexity of an iterative binary search. **[2]**

---

## Answers

**1.** The data must be sorted (in order of the search key) [1]; the data must be held in a structure that allows direct access to any item, such as an array, so the middle item can be found [1].

**2.** **9** (2⁸ = 256 is fewer than 500, 2⁹ = 512 is not) [1].

**3. (a)** **O(n)** [1]. **(b)** **O(n²)** [1].

**4.** A stack deletes (pops) the item added most recently, from the top (LIFO) [1]; a queue deletes (dequeues) the item that has been there longest, from the front (FIFO) [1].

**5.** Each key is put through a hashing function to give an array index [1]; the key-value pair is stored at that index, so a value can be found by hashing its key, with a method (such as using the next free position) for keys that give the same index [1].

**6.** A graph has vertices (nodes) joined by edges [1]; edges can be weighted and can be directed [1]. Justification: each stop is a vertex and each direct route between stops is an edge weighted with the journey time (directed where a route runs one way), so the connections between stops, which do not form a hierarchy, can be represented and searched for the quickest journey [1].

**7.** Example answer:

```
FUNCTION LinearSearch(Target : STRING) RETURNS INTEGER
   DECLARE Index, Position : INTEGER
   Index ← 1
   Position ← -1
   WHILE Index <= 200 AND Position = -1
      IF Names[Index] = Target THEN
         Position ← Index
      ENDIF
      Index ← Index + 1
   ENDWHILE
   RETURN Position
ENDFUNCTION
```

Function header with parameter and return type [1]; index initialised to 1 [1]; loop that ends at 200 **or** when the item is found [1]; comparison of Names[Index] with Target, recording the index [1]; returns the index, or −1 if not found [1].

**8. (a)** Pass 1: **7, 12, 3, 15, 10, 19** [1]. Pass 2: **7, 3, 12, 10, 15, 19** [1]. Pass 3: **3, 7, 10, 12, 15, 19**; pass 4: no swaps, so the sort stops [1].

**(b)** 5 + 4 + 3 + 2 = **14 comparisons** [1].

**9. (a)** Insertion sort compares each item only until it meets a smaller one, so the items already in place need one comparison each and only 4 moves a short distance [1]. The bubble sort must keep making passes, and needs a final full pass with no swaps to confirm the list is sorted [1].

**(b)** In reverse order both make n(n − 1) ÷ 2 comparisons, the worst case [1]; this is O(n²), so doubling the number of items roughly quadruples the number of comparisons [1].

**10. (a)** **Apple, Fig, Kiwi, Lime, Pear** [1].

**(b)** List[0].Pointer (Kiwi) changes from 3 to **6**, so Kiwi now points to Pear [1]. List[3].Pointer changes to **2**, the old FreePtr [1]. FreePtr changes to **3** [1].

**(c)** Grape is stored in node 3, taken from the free list: List[3].Data = **Grape** and FreePtr changes to **2** (List[3]'s old pointer) [1]. Grape belongs between Fig and Kiwi, so List[3].Pointer = **0** [1] and List[4].Pointer (Fig) changes from 0 to **3** [1].

**11.** Example answer:

```
PROCEDURE Push(NewItem : INTEGER)
   IF TopPtr = 50 THEN
      OUTPUT "Stack is full"
   ELSE
      TopPtr ← TopPtr + 1
      Stack[TopPtr] ← NewItem
   ENDIF
ENDPROCEDURE
```

Checks whether the stack is full (TopPtr = 50) [1]; outputs an error if full [1]; increments TopPtr [1]; stores NewItem at Stack[TopPtr], after incrementing [1].

**12. (a)** A linear search may need to check every record, up to 1,000,000 comparisons, O(n) [1]. A binary search halves the records each time, so at most 20 comparisons are needed, O(log n) [1].

**(b)** Space complexity describes how the amount of memory an algorithm needs (beyond the data) grows as the number of items grows [1]. An iterative binary search uses a fixed number of variables (low, high, middle), so it is **O(1)** [1].

---

## Where marks are usually lost

- A linear search that continues after finding the item, when the question asks it to stop.
- Bubble sort passes that do not shrink, or that stop without the no-swap check.
- Changing a linked list pointer before saving the value it held.
- Forgetting to update FreePtr when a node is taken or returned.
- Storing the new item before incrementing TopPtr, which overwrites the top item.
- Quoting Big O without linking it to the number of items in the question.
