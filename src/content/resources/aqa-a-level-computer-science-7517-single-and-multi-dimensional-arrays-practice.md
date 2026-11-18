---
title: "AQA A-Level Computer Science (7517): Single- and Multi-Dimensional Arrays -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.12
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "single-and-multi-dimensional-arrays-7517"
description: "Original AQA 7517 section 4.2.1.2 questions with full answers: array traces, writing 1-D and 2-D algorithms, matrices, tuples and 3-D array sizing."
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

Related: [Arrays study guide](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays/) | [Arrays revision notes](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays-revision-notes/)

All arrays in these questions are indexed from 0. `LEN(a)` returns the number of elements in a one-dimensional array.

---

## Section A

**1.** State what a one-dimensional array is a useful way of representing, and what a two-dimensional array is a useful way of representing. **[2]**

**2.** State what is meant by a **tuple**, as used in the definition of an n-dimensional array. **[1]**

**3.** An array is declared as `results[4][30][6]`.

**(a)** State how many dimensions it has. **[1]**
**(b)** Calculate how many elements it holds. **[1]**

**4.** A student writes `FOR i ← 0 TO LEN(a)` to visit every element of a. Explain the error and state the correction. **[2]**

**5.** State **two** reasons why an array is a suitable structure for storing 52 weekly rainfall totals. **[2]**

## Section B

**6.** The algorithm below is run with a = [3, 8, 1, 8, 6].

```
best ← a[0]
pos ← 0
FOR i ← 1 TO 4
    IF a[i] >= best THEN
        best ← a[i]
        pos ← i
    ENDIF
ENDFOR
OUTPUT best, pos
```

**(a)** Complete a trace table with columns i, a[i], best and pos. **[4]**
**(b)** State the output. **[1]**
**(c)** State the change needed so that the algorithm outputs the position of the **first** occurrence of the largest value. **[1]**

**7.** The algorithm below is run with a = [6, 1, 9, 4].

```
temp ← a[0]
FOR i ← 0 TO 2
    a[i] ← a[i + 1]
ENDFOR
a[3] ← temp
```

**(a)** Show the contents of a after each pass of the loop and after the final line. **[3]**
**(b)** Describe in one sentence what the algorithm does. **[1]**

**8.** Write an algorithm that takes a one-dimensional array of integers called `scores` and outputs how many values are greater than the mean of the array. **[5]**

**9.** A 3 × 3 array `g` holds:

| | col 0 | col 1 | col 2 |
|---|---|---|---|
| row 0 | 2 | 0 | 5 |
| row 1 | 1 | 4 | 3 |
| row 2 | 6 | 2 | 0 |

**(a)** State the value of `g[2][1]`. **[1]**
**(b)** Write an algorithm that outputs the sum of the elements `g[0][0]`, `g[1][1]` and `g[2][2]` using a single loop, and state its output. **[3]**

**10.** A two-dimensional array `sales[5][7]` holds the sales of 5 products (rows) on each of 7 days (columns). Write an algorithm that outputs the index of the day with the largest total sales across all products. **[6]**

**11.** The array `results[4][30][6]` from Question 3 stores marks for 4 classes, 30 students per class and 6 subjects, in that order of indices. Write an algorithm to output the mean mark in subject 2 for class 1. **[3]**

**12.** Write an algorithm that transposes a square two-dimensional array `m` of size n × n into a second array `t`, so that each row of m becomes a column of t. **[3]**

---

## Answers

**1.** A vector [1]; a matrix [1].

**2.** An ordered list of elements (here, the n integers that index one element) [1].

**3. (a)** Three [1]. **(b)** 4 × 30 × 6 = **720** [1].

**4.** With 0-based indexing the last index is LEN(a) − 1, so the loop tries to access an element that does not exist (out of range) [1]; correct it to `FOR i ← 0 TO LEN(a) - 1` [1].

**5.** Any two [1 each]: all 52 values are the same data type; the number of values is fixed and known; each week's value can be accessed directly by its index; one loop can process every value.

**6. (a)**

| i | a[i] | best | pos |
|---|---|---|---|
| 1 | 8 | 8 | 1 |
| 2 | 1 | 8 | 1 |
| 3 | 8 | 8 | 3 |
| 4 | 6 | 8 | 3 |

Row i = 1 correct [1]; row i = 2 unchanged [1]; row i = 3 with pos updated to 3 because 8 ≥ 8 [1]; row i = 4 unchanged [1].
**(b)** 8, 3 [1].
**(c)** Change `>=` to `>` [1].

**7. (a)** After i = 0: [1, 1, 9, 4] [1]; after i = 1: [1, 9, 9, 4]; after i = 2: [1, 9, 4, 4] [1]; after the final line: [1, 9, 4, 6] [1].
**(b)** It rotates the array one place to the left, moving the first element to the end [1].

**8.**
```
total ← 0
FOR i ← 0 TO LEN(scores) - 1
    total ← total + scores[i]
ENDFOR
mean ← total / LEN(scores)
count ← 0
FOR i ← 0 TO LEN(scores) - 1
    IF scores[i] > mean THEN
        count ← count + 1
    ENDIF
ENDFOR
OUTPUT count
```
Total initialised and accumulated over every element [1]; mean calculated after the first loop using real division [1]; count initialised to 0 [1]; second loop compares each element with the mean using > [1]; count incremented and output after the loop [1].

**9. (a)** 2 [1].
**(b)**
```
sum ← 0
FOR i ← 0 TO 2
    sum ← sum + g[i][i]
ENDFOR
OUTPUT sum
```
Single loop using the same variable for both indices [1]; accumulator initialised and output after the loop [1]; output **6** (2 + 4 + 0) [1].

**10.**
```
bestDay ← 0
bestTotal ← -1
FOR d ← 0 TO 6
    dayTotal ← 0
    FOR p ← 0 TO 4
        dayTotal ← dayTotal + sales[p][d]
    ENDFOR
    IF dayTotal > bestTotal THEN
        bestTotal ← dayTotal
        bestDay ← d
    ENDIF
ENDFOR
OUTPUT bestDay
```
Outer loop over the 7 days [1]; day total reset inside the outer loop [1]; inner loop over the 5 products [1]; correct indexing `sales[p][d]` with the product as row [1]; comparison with the best so far and both best total and day updated [1]; output of the day index after both loops [1]. (Accept initialising bestTotal from day 0's total.)

**11.**
```
total ← 0
FOR s ← 0 TO 29
    total ← total + results[1][s][2]
ENDFOR
OUTPUT total / 30
```
Loop over all 30 students [1]; class index fixed at 1 and subject index fixed at 2 in the correct positions [1]; total divided by 30 and output after the loop [1].

**12.**
```
FOR r ← 0 TO n - 1
    FOR c ← 0 TO n - 1
        t[c][r] ← m[r][c]
    ENDFOR
ENDFOR
```
Nested loops over rows and columns [1]; both loops run from 0 to n − 1 [1]; indices swapped in the assignment `t[c][r] ← m[r][c]` [1].

---

## Where marks are usually lost

- Off-by-one loop bounds with 0-based indexing.
- Resetting a running total outside the outer loop.
- Swapping row and column in `sales[p][d]`.
- Initialising a maximum to a value that may be larger than every element.
- Forgetting that `>=` and `>` give different positions when values tie.
