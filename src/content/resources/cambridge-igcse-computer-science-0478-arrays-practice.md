---
title: "Cambridge IGCSE Computer Science (0478): Arrays -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8.2
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
  - qualification: "igcse"
    topic: "programming-0478"
    subtopic: "arrays-0478"
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 8.2: 1D and 2D arrays, loops, totals, searching and trace tables."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [Arrays study guide](/resources/cambridge-igcse-computer-science-0478-arrays/) and [Arrays revision notes](/resources/cambridge-igcse-computer-science-0478-arrays-revision-notes/)

---

## Section A

**1.** State what is meant by an **array**. **[2]**

**2.** Write a pseudocode statement to declare a 1D array called `Temperatures` that stores 7 real numbers with the lower bound 1. **[2]**

**3.** The array `Scores` holds: `Scores[1]` = 14, `Scores[2]` = 9, `Scores[3]` = 20, `Scores[4]` = 6. State the value of `Scores[3] + Scores[4]`. **[1]**

**4.** State the number of elements in the array declared `DECLARE Board : ARRAY[1:3, 1:3] OF CHAR`. **[1]**

**5.** State **one** benefit of using an array instead of separate variables. **[1]**

## Section B

**6.** The array `Scores` holds 4, 9, 2, 7, 9, 1 in positions 1 to 6. The code below is run.

```
Count ← 0
Highest ← Scores[1]
FOR Index ← 1 TO 6
    IF Scores[Index] > 5
       THEN
         Count ← Count + 1
    ENDIF
    IF Scores[Index] > Highest
       THEN
         Highest ← Scores[Index]
    ENDIF
NEXT Index
OUTPUT Count, Highest
```

**(a)** Complete a trace table for `Index`, `Count` and `Highest`. **[4]**

**(b)** State the output. **[1]**

**7.** Write pseudocode that stores 5 names input by the user in a 1D array `Names` and then outputs them in reverse order. **[5]**

**8.** A teacher stores the marks of 3 classes of 4 students in a 2D array `ClassMarks[1:3, 1:4]`, where the first index is the class and the second the student.

**(a)** Write a statement that outputs the mark of student 2 in class 3. **[1]**

**(b)** Write pseudocode that uses nested loops to output the total mark for each class. **[5]**

**9.** The array `Table[1:2, 1:3]` holds row 1: 3, 5, 1 and row 2: 8, 2, 6. State the value of `Table[2, 1]` and of `Table[1, 3]`. **[2]**

**10.** Explain why a `FOR` loop is suitable for reading values into an array. **[2]**

**11.** The code below should add 1 to every element of the array `Data[1:5]` but contains an error.

```
FOR Index ← 1 TO 6
    Data[Index] ← Data[Index] + 1
NEXT Index
```

Identify the error and write the corrected first line. **[2]**

**12.** A linear search looks for the value 9 in the array `Marks` holding 12, 18, 9, 20, 15. State how many elements are checked before 9 is found, and explain why the search then stops. **[3]**

---

## Answers

**1.** A data structure that stores a fixed number of elements [1] of the same data type under one name, each found using an index [1].

**2.** `DECLARE Temperatures : ARRAY[1:7] OF REAL` [2: 1 for DECLARE with the name and ARRAY[1:7], 1 for type REAL].

**3.** 26 [1].

**4.** 9 [1].

**5.** Any one from: one loop can process every element; fewer variable names are needed; the size can be changed easily [1].

**6.** **(a)** Trace table:

| Index | Count | Highest |
|---|---|---|
| start | 0 | 4 |
| 1 | 0 | 4 |
| 2 | 1 | 9 |
| 3 | 1 | 9 |
| 4 | 2 | 9 |
| 5 | 3 | 9 |
| 6 | 3 | 9 |

Award [1] for correct `Index` values 1 to 6, [1] for `Count` changing at indexes 2, 4 and 5, [1] for `Highest` changing at index 2 only, [1] for correct start values or final values.

**(b)** Output is 3 and 9 [1].

**7.** Example answer:

```
DECLARE Names : ARRAY[1:5] OF STRING
FOR Index ← 1 TO 5
    INPUT Names[Index]
NEXT Index
FOR Index ← 5 TO 1 STEP -1
    OUTPUT Names[Index]
NEXT Index
```

Array declared with five elements [1]; loop 1 to 5 with input into `Names[Index]` [1]; second loop counting down [1]; correct bounds 5 to 1 with `STEP -1` [1]; output of `Names[Index]` [1].

**8.** **(a)** `OUTPUT ClassMarks[3, 2]` [1].

**(b)** Example answer:

```
FOR Class ← 1 TO 3
    ClassTotal ← 0
    FOR Student ← 1 TO 4
        ClassTotal ← ClassTotal + ClassMarks[Class, Student]
    NEXT Student
    OUTPUT "Class ", Class, " total ", ClassTotal
NEXT Class
```

Outer loop 1 to 3 [1]; inner loop 1 to 4 [1]; `ClassTotal` set to 0 inside the outer loop [1]; correct addition with both indexes [1]; output after the inner loop [1].

**9.** `Table[2, 1]` is 8 [1]; `Table[1, 3]` is 1 [1].

**10.** The number of elements is known [1], so a count-controlled loop can use the loop variable as the index for each element in turn [1].

**11.** The loop goes to 6 but the array only has 5 elements, so `Data[6]` does not exist [1]. Corrected: `FOR Index ← 1 TO 5` [1].

**12.** Three elements are checked (12, 18, 9) [1]. When 9 is found, `Found` is set to TRUE [1] and the loop condition is no longer true, so the remaining elements do not need to be checked [1].

---

## Where marks are usually lost

- Question 2: writing the declaration without the type or with the wrong bounds.
- Question 6: counting the first element twice or forgetting that only one comparison changes `Highest`.
- Question 7: counting down without `STEP -1`.
- Question 8: setting the total to 0 before both loops, so classes are added together.
- Question 9: swapping row and column.
- Question 11: changing the data instead of the loop limit.

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| Elements in a 1D array | upper − lower + 1 |
| Elements in a 2D array | rows × columns |
| 2D loops | Outer for rows, inner for columns |
| Linear search | Stop when found |
