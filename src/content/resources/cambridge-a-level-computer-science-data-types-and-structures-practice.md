---
title: "Cambridge A Level Computer Science (9618): Data Types and Structures -- Practice Questions"
seoTitle: "Cambridge 9618 Data Types and Structures Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Data Types and Structures"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "data-types-and-structures"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "data-types-and-records"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "arrays"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "files"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "introduction-to-abstract-data-types-adt"
description: "Practice questions with answers on data types, records, 2D arrays, bubble sort, linear search, text files, stacks, queues and linked lists for Cambridge 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Data Types and Structures revision notes](/resources/cambridge-a-level-computer-science-data-types-and-structures-revision-notes/) · [study guide](/resources/cambridge-a-level-computer-science-data-types-and-structures-study-guide/)

These questions cover Topic 10 Data Types and Structures of Cambridge International AS & A Level Computer Science 9618 (sections 10.1 to 10.4), assessed in Paper 2. Use Cambridge pseudocode from the 9618 Pseudocode Guide. Model answers show one correct solution; equivalent correct algorithms earn full marks.

---

## Questions

**1.** A gym stores data about each member. State the most appropriate data type for each item.

**(a)** membership number, such as 004172 **[1]**
**(b)** monthly fee, such as 34.99 **[1]**
**(c)** whether the member has paid this month **[1]**
**(d)** the member's level, one of 'B', 'S' or 'G' **[1]**

**2.** **(a)** Explain the purpose of a record structure. **[2]**
**(b)** Write pseudocode to define a record type Member with fields MemberID, Fee, Paid and Level, using your answers to question 1. **[3]**
**(c)** An array Members[1:200] of type Member has been declared. Write pseudocode to output the MemberID of every member who has not paid. **[3]**

**3.** A weather station records the rainfall in millimetres for each of 12 months over 5 years.

**(a)** Write a declaration for a suitable array Rain. **[2]**
**(b)** State the lower bound and upper bound of the first dimension in your declaration. **[1]**
**(c)** Write pseudocode to output the total rainfall for each year. **[4]**

**4.** An array Codes[1:50] of STRING holds product codes. Write pseudocode for a function FindCode(Target : STRING) RETURNS INTEGER that uses a linear search and returns the index of Target, or −1 if it is not found. **[5]**

**5.** The array Values[1:5] contains 15, 9, 22, 4, 11.

**(a)** Show the contents of the array after each pass of a bubble sort into ascending order. **[3]**
**(b)** Explain how a flag can make the bubble sort more efficient. **[2]**

**6.** **(a)** Explain why programs store data in files. **[2]**
**(b)** A text file Visitors.txt contains one name per line. Write pseudocode to count the number of lines in the file and output the count. **[5]**
**(c)** State the file mode that adds a new name without losing existing names. **[1]**

**7.** Explain what is meant by an abstract data type. **[2]**

**8.** A stack is held in an array StackData[1:6] with a pointer TopOfStack that holds the index of the top item (0 when empty). The stack holds 18, 25, 7 with 7 at the top.

**(a)** State the value of TopOfStack. **[1]**
**(b)** Show the stack and TopOfStack after: push 30, pop, pop, push 12. State the values returned by the pops. **[3]**
**(c)** Justify the use of a stack to store the pages visited in a web browser, for a Back button. **[2]**

**9.** A circular queue is held in an array Q[1:5] with FrontPointer, RearPointer and a count of items. Q contains A at index 4 and B at index 5; FrontPointer = 4, RearPointer = 5.

**(a)** Describe how C is added to the queue. **[3]**
**(b)** Explain why a circular queue makes better use of the array than a linear queue. **[2]**

**10.** The linked list below stores names in alphabetical order. StartPointer = 2, FreePointer = 5, and −1 is the null pointer.

| Index | Name | Pointer |
|---|---|---|
| 1 | Kofi | 4 |
| 2 | Ana | 3 |
| 3 | Ben | 1 |
| 4 | Sara | −1 |
| 5 | | 6 |
| 6 | | −1 |

**(a)** Write the names in the order they are linked. **[1]**
**(b)** Show the changes to the table and pointers when Mei is added in the correct position. **[4]**
**(c)** Describe how Ben would be deleted from the list. **[2]**

---

## Answers

**1. (a)** STRING (keeps the leading zeros; no arithmetic is done on it) [1]. **(b)** REAL [1]. **(c)** BOOLEAN [1]. **(d)** CHAR [1].

**2. (a)** A record groups several related data items, which can be of different data types [1], under one identifier, so all the data about one item (e.g. one member) can be stored, passed and processed together [1].

**(b)**

```
TYPE Member
   DECLARE MemberID : STRING
   DECLARE Fee : REAL
   DECLARE Paid : BOOLEAN
   DECLARE Level : CHAR
ENDTYPE
```

Marks: TYPE ... ENDTYPE [1]; four DECLARE statements [1]; correct data types [1].

**(c)**

```
FOR Index ← 1 TO 200
   IF Members[Index].Paid = FALSE THEN
      OUTPUT Members[Index].MemberID
   ENDIF
NEXT Index
```

Marks: loop 1 to 200 [1]; correct test on the Boolean field using dot notation [1]; output of MemberID [1].

**3. (a)** `DECLARE Rain : ARRAY[1:5, 1:12] OF REAL` [2] (one mark for two dimensions with correct sizes, one for REAL).
**(b)** Lower bound 1, upper bound 5 [1].
**(c)**

```
FOR Year ← 1 TO 5
   YearTotal ← 0.0
   FOR Month ← 1 TO 12
      YearTotal ← YearTotal + Rain[Year, Month]
   NEXT Month
   OUTPUT "Year ", Year, ": ", YearTotal
NEXT Year
```

Marks: outer loop over years [1]; total reset for each year [1]; inner loop adding each month's value [1]; output inside the outer loop after the inner loop [1].

**4.**

```
FUNCTION FindCode(Target : STRING) RETURNS INTEGER
   DECLARE Index : INTEGER
   Index ← 1
   WHILE Index <= 50
      IF Codes[Index] = Target THEN
         RETURN Index
      ENDIF
      Index ← Index + 1
   ENDWHILE
   RETURN -1
ENDFUNCTION
```

Marks: function header with RETURNS INTEGER [1]; loop through 1 to 50 [1]; comparison of each element with Target [1]; RETURN the index when found (the loop stops) [1]; RETURN −1 after the loop [1]. Using OUTPUT instead of RETURN loses the last two marks.

**5. (a)** Pass 1: 9, 15, 4, 11, 22 [1]. Pass 2: 9, 4, 11, 15, 22 [1]. Pass 3: 4, 9, 11, 15, 22; pass 4 makes no swaps [1].
**(b)** A Boolean flag is set to FALSE (no swaps) at the start of each pass and set to TRUE when a swap is made [1]. If a whole pass ends with no swaps, the array is sorted, so the sort stops early instead of making the remaining passes [1].

**6. (a)** Data in variables is held in RAM and lost when the program ends; a file stores data permanently [1] so it can be used next time the program runs, or by another program [1].

**(b)**

```
DECLARE LineOfText : STRING
DECLARE Count : INTEGER
Count ← 0
OPENFILE "Visitors.txt" FOR READ
WHILE NOT EOF("Visitors.txt")
   READFILE "Visitors.txt", LineOfText
   Count ← Count + 1
ENDWHILE
CLOSEFILE "Visitors.txt"
OUTPUT Count
```

Marks: open for READ [1]; loop until end of file with EOF and the filename [1]; READFILE inside the loop [1]; count incremented [1]; CLOSEFILE and output [1].

**(c)** APPEND [1].

**7.** A collection of data together with a set of operations on those data [1], defined by what it does rather than how it is implemented (e.g. a stack with push and pop) [1].

**8. (a)** 3 [1].
**(b)** Push 30: StackData[4] = 30, TopOfStack = 4. Pop returns 30, TopOfStack = 3 [1]. Pop returns 7, TopOfStack = 2 [1]. Push 12: StackData[3] = 12, TopOfStack = 3; stack is 18, 25, 12 [1].
**(c)** A stack is last in, first out [1]; the most recently visited page is the one the Back button must return to first, so it is always at the top [1].

**9. (a)** Check the queue is not full (count < 5) [1]. Add 1 to RearPointer; since 6 is past the upper bound it wraps round to 1 [1]. Store C in Q[1] and add 1 to the count [1].
**(b)** In a linear queue, positions freed at the front by dequeuing cannot be reused, so the queue can appear full while space is empty [1]; a circular queue wraps the pointers round so that freed positions are reused [1].

**10. (a)** Ana, Ben, Kofi, Sara [1].
**(b)** Mei is stored in node 5 (the first free node) [1]; FreePointer changes to 6 [1]; Mei's pointer is set to 4 (Sara), Kofi's old pointer [1]; Kofi's pointer (index 1) changes to 5 [1]. Order: Ana, Ben, Kofi, Mei, Sara.
**(c)** Change the pointer of the node before Ben (Ana, index 2) to Ben's pointer, 1, so the list skips Ben [1]. Return node 3 to the free list: its pointer is set to the current FreePointer and FreePointer becomes 3 [1].

---

## Where marks are usually lost

- Declaring an identifier code with leading zeros as INTEGER.
- Writing OUTPUT in a function that must RETURN a value.
- Using a FOR loop over a fixed number of lines when the length of the file is unknown; use WHILE NOT EOF.
- Leaving out CLOSEFILE, or writing EOF() without the filename.
- Letting a linear queue wrap round, or not wrapping a circular one.

## Frequently asked questions

**Can I use a FOR loop for a linear search?**
Yes, but it keeps going after the item is found unless you RETURN or use a flag. A WHILE loop that stops on finding the item is more efficient.

**Should a linked list's null pointer be −1 or 0?**
Use whatever the question defines. If your own answer needs one, state it, and make sure it cannot be confused with a real index.

**Do bubble sort questions always use ascending order?**
No. Read the question; for descending order, swap when the first value is smaller than the next.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 10, using the Cambridge 9618 Pseudocode Guide for Teachers. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
