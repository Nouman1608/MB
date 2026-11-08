---
title: "Cambridge A Level Computer Science (9618): Computational thinking and Problem-solving -- Practice Questions"
seoTitle: "Cambridge 9618 Algorithms and Recursion Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 19: Computational thinking and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 19
syllabusTopics:
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
    subtopic: "algorithms-19-1"
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
    subtopic: "recursion"
description: "Questions with answers on binary search, insertion sort, linked lists, binary trees, stacks, queues, Big O and recursion traces for Cambridge A Level 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Computational thinking and Problem-solving revision notes](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-revision-notes/) · [study guide](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-study-guide/)

These questions cover Topic 19 of Cambridge International AS & A Level Computer Science 9618: algorithms (19.1) and recursion (19.2). The topic is assessed in Paper 3 and, as program code, in Paper 4. Write algorithms in Cambridge pseudocode; model answers show one correct version.

---

## Questions

**1.** **(a)** State the condition that must be met before a binary search can be used. **[1]**
**(b)** Write a pseudocode function that performs an **iterative** binary search of the global array Names[1:500] of STRING for the parameter SearchName, returning its index or −1. **[6]**
**(c)** State the maximum number of comparisons a binary search needs for 500 items, and explain how this changes if the number of items doubles. **[2]**

**2.** The array Data[1:6] contains 14, 6, 11, 3, 18, 9.

**(a)** Show the contents of the array after each pass of an insertion sort into ascending order. **[3]**
**(b)** Explain why insertion sort is efficient for data that is nearly in order. **[2]**

**3.** Explain why the performance of a sorting routine depends on the initial order of the data and on the number of items. Use Big O notation in your answer. **[3]**

**4.** A linked list is stored in the arrays Item[1:20] and NextPtr[1:20], with StartPtr holding the index of the first node and −1 as the null pointer. Write a pseudocode function Find(Target : STRING) RETURNS INTEGER that returns the index of the node holding Target, or −1. **[5]**

**5.** The values 45, 22, 67, 12, 30, 51, 89, 27 are inserted, in that order, into an empty binary search tree.

**(a)** Draw up the tree as a table with columns Index, LeftPtr, Data, RightPtr, using −1 for null. **[4]**
**(b)** List the nodes visited when searching for 27. **[1]**

**6.** A queue of up to 8 integers is held as a circular queue in the array Queue[1:8], with FrontPtr, RearPtr and NumItems. Write a pseudocode procedure Enqueue(NewItem : INTEGER). **[5]**

**7.** Describe how a stack can be implemented using a linked list. **[3]**

**8.** Describe the key features of a graph, and justify the use of a graph to store the links between pages of a website. **[3]**

**9.** Describe how a dictionary ADT could be implemented. **[2]**

**10.** Study the recursive function below.

```
FUNCTION Mystery(X : INTEGER) RETURNS INTEGER
   IF X < 10 THEN
      RETURN X
   ELSE
      RETURN (X MOD 10) + Mystery(X DIV 10)
   ENDIF
ENDFUNCTION
```

**(a)** Identify the base case and the general case. **[2]**
**(b)** Trace the call Mystery(4706) and state the value returned. **[3]**
**(c)** State the purpose of the function. **[1]**

**11.** Explain what a compiler has to do to translate recursive code, referring to the stack and unwinding. **[4]**

**12.** Write a recursive pseudocode function Power(Base : INTEGER, Exponent : INTEGER) RETURNS INTEGER that returns Base raised to Exponent, for Exponent ≥ 0. **[4]**

---

## Answers

**1. (a)** The data must be sorted (in order) [1].
**(b)**

```
FUNCTION BinarySearch(SearchName : STRING) RETURNS INTEGER
   DECLARE Lower, Upper, Mid : INTEGER
   Lower ← 1
   Upper ← 500
   WHILE Lower <= Upper
      Mid ← (Lower + Upper) DIV 2
      IF Names[Mid] = SearchName THEN
         RETURN Mid
      ENDIF
      IF Names[Mid] < SearchName THEN
         Lower ← Mid + 1
      ELSE
         Upper ← Mid - 1
      ENDIF
   ENDWHILE
   RETURN -1
ENDFUNCTION
```

Marks: bounds initialised [1]; loop while Lower <= Upper [1]; middle index calculated with DIV [1]; middle element compared and index returned when found [1]; bounds moved past Mid in the correct direction [1]; −1 returned after the loop [1].

**(c)** 9 comparisons (2⁹ = 512 ≥ 500) [1]. Doubling the items to 1000 adds only one comparison (10), because each comparison halves the remaining data / it is O(log n) [1].

**2. (a)** After inserting 6: 6, 14, 11, 3, 18, 9. After inserting 11: 6, 11, 14, 3, 18, 9 [1]. After inserting 3: 3, 6, 11, 14, 18, 9. After inserting 18: unchanged [1]. After inserting 9: 3, 6, 9, 11, 14, 18 [1].
**(b)** Each item is compared with the sorted items to its left only until its place is found [1]; when the data is nearly sorted most items are already in place or move only one or two positions, so few comparisons and shifts are needed, close to O(n) [1].

**3.** More items means more comparisons: for bubble and insertion sort the worst-case time grows as O(n²), so doubling n roughly quadruples the time [1]. If the data is already sorted (or nearly sorted), insertion sort or a bubble sort with a no-swaps flag needs only about n comparisons, O(n) [1]. If the data is in reverse order every item must be moved the maximum distance, the worst case of O(n²) [1].

**4.**

```
FUNCTION Find(Target : STRING) RETURNS INTEGER
   DECLARE Current : INTEGER
   Current ← StartPtr
   WHILE Current <> -1
      IF Item[Current] = Target THEN
         RETURN Current
      ENDIF
      Current ← NextPtr[Current]
   ENDWHILE
   RETURN -1
ENDFUNCTION
```

Marks: start at StartPtr [1]; loop until the null pointer [1]; compare the item at the current node [1]; follow NextPtr to the next node [1]; return −1 if not found [1].

**5. (a)**

| Index | LeftPtr | Data | RightPtr |
|---|---|---|---|
| 1 | 2 | 45 | 3 |
| 2 | 4 | 22 | 5 |
| 3 | 6 | 67 | 7 |
| 4 | −1 | 12 | −1 |
| 5 | 8 | 30 | −1 |
| 6 | −1 | 51 | −1 |
| 7 | −1 | 89 | −1 |
| 8 | −1 | 27 | −1 |

Marks: root 45 with children 22 and 67 [1]; 12 and 30 under 22 [1]; 51 and 89 under 67 [1]; 27 as left child of 30, all other pointers −1 [1].

**(b)** 45, 22, 30, 27 [1].

**6.**

```
PROCEDURE Enqueue(NewItem : INTEGER)
   IF NumItems = 8 THEN
      OUTPUT "Queue full"
   ELSE
      RearPtr ← RearPtr + 1
      IF RearPtr > 8 THEN
         RearPtr ← 1
      ENDIF
      Queue[RearPtr] ← NewItem
      NumItems ← NumItems + 1
   ENDIF
ENDPROCEDURE
```

Marks: check for full queue [1]; increment RearPtr [1]; wrap RearPtr round to 1 [1]; store the item at RearPtr [1]; increment NumItems [1].

**7.** The top of the stack is the head (start) of the linked list, held by a top / start pointer [1]. Push: create a new node, set its pointer to the current head, and make the start pointer point to the new node [1]. Pop: if the list is not empty, read the head node's data and set the start pointer to that node's pointer (returning the node to free space) [1].

**8.** A graph has nodes (vertices) connected by edges, which can be directed and/or weighted [1]. Each page is a node and each hyperlink is a directed edge from one page to another [1]. A graph suits this because pages can link to any number of other pages in any pattern (not a hierarchy), and it can be searched to find routes between pages [1].

**9.** A dictionary holds key-value pairs [1]. It can be implemented with a hash table: the key is hashed to give an array index where the value (or key and value record) is stored, so it can be found directly; alternatively two parallel arrays of keys and values can be searched [1].

**10. (a)** Base case: X < 10, returning X [1]. General case: return (X MOD 10) + Mystery(X DIV 10) [1].
**(b)** Mystery(4706) = 6 + Mystery(470); Mystery(470) = 0 + Mystery(47); Mystery(47) = 7 + Mystery(4) [1]; Mystery(4) = 4 (base case) [1]. Unwinding: 7 + 4 = 11, 0 + 11 = 11, 6 + 11 = **17** [1].
**(c)** It returns the sum of the digits of X [1].

**11.** Each recursive call is handled with a stack [1]. On each call, a stack frame holding the return address, the parameter values and the local variables is pushed onto the stack [1]. When the base case is reached, calls start to return: each return pops the top frame, restoring the caller's values and passing back the result to the return address [1]. This popping back through the calls is unwinding; if the base case is never reached, the stack runs out of space (stack overflow) [1].

**12.**

```
FUNCTION Power(Base : INTEGER, Exponent : INTEGER) RETURNS INTEGER
   IF Exponent = 0 THEN
      RETURN 1
   ELSE
      RETURN Base * Power(Base, Exponent - 1)
   ENDIF
ENDFUNCTION
```

Marks: function header [1]; base case Exponent = 0 returning 1 [1]; recursive call with Exponent − 1 [1]; result multiplied by Base and returned [1].

---

## Where marks are usually lost

- Binary search that compares Mid itself with the target, or sets Lower ← Mid instead of Mid + 1.
- Insertion sorts that swap adjacent pairs repeatedly, becoming bubble sorts.
- A circular queue whose rear pointer never wraps, or no check for a full or empty queue.
- Recursive functions with no base case, or OUTPUT instead of RETURN.
- Traces that show the calls but not the values returned as the stack unwinds.

## Frequently asked questions

**Should I check the queue is empty before every dequeue?** Yes. Examiners have noted answers that only checked once at the start; the check belongs inside each operation.

**Can a recursive algorithm always be written iteratively?** Yes, though the iterative version may need its own stack. Write whichever form the question asks for.

**How is Big O used in the exam?** To compare algorithms: say how the time or memory grows as n increases, for example O(log n) for binary search against O(n) for linear search.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 19, using the Cambridge 9618 Pseudocode Guide for Teachers. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
