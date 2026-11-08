---
resourceId: "mb-ap-csa-2.11-practice"
title: "Nested Iteration: Practice Questions (Computer Science A 2.11)"
description: "10 original Marlbridge practice questions on nested loops, their order of execution and how often they run, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.11"]
resourceType: "practice-questions"
prerequisites:
  - "for and while loops (Topics 2.7 and 2.8)"
  - "Standard algorithms with loops (Topic 2.9)"
prerequisiteResources: ["mb-ap-csa-2.11-study-guide"]
learningObjectives:
  - "Explain that an inner loop completes all its iterations before the outer loop moves on"
  - "Trace nested loops and predict the output of patterns, tables and pair-counting code"
  - "Work out how many times the innermost statement executes for rectangular and triangular loop bounds"
  - "Diagnose nested-loop faults such as an inner loop variable that is never reset"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.11-study-guide", "mb-ap-csa-2.11-revision-notes", "mb-ap-csa-2.11-checklist"]
next: "mb-ap-csa-2.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Questions 1 to 6 are multiple choice; the rest ask for written code, a trace or an explanation."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Assume every code segment compiles unless a question says otherwise, and that no calculator is allowed.

## Question 1 (multiple choice · foundation)

How many times does `System.out.print("#")` execute?

```java
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 5; j++) {
        System.out.print("#");
    }
}
```

- (A) 8
- (B) 15
- (C) 5
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The inner loop runs 5 times for each of the 3 outer passes: 3 x 5 = 15.

- (A) adds the bounds (3 + 5).
- (C) counts only one outer pass.
- (D) counts only the outer loop.
</details>

## Question 2 (multiple choice · core)

What is printed?

```java
for (int r = 1; r <= 3; r++) {
    for (int c = 1; c <= r; c++) {
        System.out.print(c);
    }
    System.out.println();
}
```

- (A) 1, then 12, then 123, each on its own line
- (B) 123, then 123, then 123, each on its own line
- (C) 1, then 2, then 3, each on its own line
- (D) 111, then 22, then 3, each on its own line

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For each `r`, the inner loop prints `c` from 1 up to `r`, then `println` ends the line: row 1 prints "1", row 2 prints "12", row 3 prints "123".

- (B) assumes the inner loop always runs to 3.
- (C) prints the row number rather than the column counter.
- (D) mixes up the two counters and reverses the row lengths; it does not match any pass of the loops.
</details>

## Question 3 (multiple choice · core)

What is the value of `count` after the code runs?

```java
int count = 0;
for (int i = 0; i < 4; i++) {
    for (int j = i; j < 4; j++) {
        count++;
    }
}
```

- (A) 6
- (B) 10
- (C) 12
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For `i` = 0, 1, 2, 3 the inner loop runs 4, 3, 2, 1 times: 4 + 3 + 2 + 1 = 10.

- (A) is 3 + 2 + 1 + 0, which comes from starting the inner loop at `i + 1`.
- (C) is 4 x 3, which treats the inner loop as running 3 times.
- (D) is 4 x 4, which ignores the dependence on `i`.
</details>

## Question 4 (multiple choice · core)

What is printed?

```java
int i = 1;
int j = 1;
while (i <= 2) {
    while (j <= 3) {
        System.out.print(j);
        j++;
    }
    System.out.print("|");
    i++;
}
```

- (A) 123|123|
- (B) 123||
- (C) 123|
- (D) 112233|

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** In the first outer pass `j` runs 1, 2, 3 and ends at 4, then `|` is printed. In the second outer pass `j` is still 4, so the inner loop does not run, and only `|` is printed. The output is `123||`.

- (A) assumes `j` restarts at 1, which only happens if it is reset.
- (C) forgets the second outer pass.
- (D) is not produced by any pass.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
int total = 0;
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        total += j;
    }
}
System.out.println(total);
```

- (A) 6
- (B) 10
- (C) 3
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The inner sums are 1, then 1 + 2 = 3, then 1 + 2 + 3 = 6, giving 1 + 3 + 6 = 10.

- (A) is only the last row's sum.
- (C) is the number of outer passes, not the total.
- (D) is 3 x 6: it treats the inner loop as always running `j` from 1 to 3, ignoring that the inner bound is `i`.
</details>

## Question 6 (multiple choice · stretch)

Which statement about the code is true?

```java
for (int a = 0; a < 3; a++) {
    for (int b = 0; b < 3; b++) {
        if (a == b) {
            System.out.print("X");
        } else {
            System.out.print(".");
        }
    }
    System.out.println();
}
```

- (A) It prints a 3 by 3 pattern with X on the diagonal.
- (B) It prints a single row of X characters.
- (C) It prints X in every cell.
- (D) It prints a 9 by 9 pattern.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The output has three rows; the X appears where the row number equals the column number, which forms the diagonal: `X..`, `.X.`, `..X`.

- (B) ignores the selection, which prints `.` when `a != b`.
- (C) ignores that the `if` is only true when `a == b`.
- (D) confuses the 9 executions with a 9 by 9 grid.
</details>

## Question 7 (constructed response · core)

Write nested loops that print a rectangle of `#` characters with 4 rows and 6 columns, and then a second block that prints a staircase of 5 rows in which row `r` has `r` characters. (6 marks)

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
for (int row = 1; row <= 4; row++) {
    for (int col = 1; col <= 6; col++) {
        System.out.print("#");
    }
    System.out.println();
}
for (int row = 1; row <= 5; row++) {
    for (int col = 1; col <= row; col++) {
        System.out.print("#");
    }
    System.out.println();
}
```

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Outer loop with 4 passes (rows) |
| 1 | Inner loop with 6 passes, printing one `#` each time |
| 1 | `println` after the inner loop and inside the outer loop |
| 1 | Second block: outer loop with 5 passes |
| 1 | Inner bound depends on the row (`col <= row`) |
| 1 | `println` correctly placed in the second block |
</details>

## Question 8 (constructed response · core)

Write a method `countEvenProducts(int n)` that returns how many pairs of whole numbers `a` and `b` with `1 <= a < b <= n` have an even product. Then give the value for `n = 4`. (5 marks)

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static int countEvenProducts(int n) {
    int count = 0;
    for (int a = 1; a <= n; a++) {
        for (int b = a + 1; b <= n; b++) {
            if (a * b % 2 == 0) {
                count++;
            }
        }
    }
    return count;
}
```

For `n = 4` the pairs are (1,2), (1,3), (1,4), (2,3), (2,4), (3,4). The products are 2, 3, 4, 6, 8 and 12. Five are even; 3 is odd. The result is **5**.

**Suggested Marlbridge rubric (5 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Counter initialised before the loops and returned after them |
| 1 | Outer loop over `a` |
| 1 | Inner loop starting at `a + 1` (so `a < b`) |
| 1 | Test for an even product, inside both loops, incrementing the counter |
| 1 | Value 5 |
</details>

## Question 9 (constructed response · stretch)

This code is intended to print three rows of "ABC", but it prints something else.

```java
int row = 0;
int col = 0;
while (row < 3) {
    while (col < 3) {
        System.out.print("ABC".substring(col, col + 1));
        col++;
    }
    System.out.println();
    row++;
}
```

(a) State what is printed. (2 marks)

(b) Explain the fault in terms of the initial condition of the inner loop. (2 marks)

(c) Give a corrected version. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** The first row prints `ABC`; the second and third rows print nothing, so the output is `ABC` followed by two empty lines.

**(b)** After the first row `col` is 3. The inner loop condition `col < 3` is false for the second and third rows, so the inner loop does not run. The inner loop needs `col` to be 0 each time it starts, but nothing resets it.

**(c)**

```java
int row = 0;
while (row < 3) {
    int col = 0;
    while (col < 3) {
        System.out.print("ABC".substring(col, col + 1));
        col++;
    }
    System.out.println();
    row++;
}
```

Declaring `col` (or assigning `col = 0;`) inside the outer loop restores the starting value for every row. A for loop would do this automatically.

**Suggested Marlbridge rubric (6 marks).** 2 marks for (a) (1 for the first row, 1 for the two empty lines); 1 mark for stating that `col` stays at 3; 1 mark for relating this to the inner loop's initial condition; 2 marks for (c) (1 for the reset position, inside the outer loop but before the inner one, and 1 for the rest unchanged).
</details>

## Question 10 (constructed response · stretch)

Three methods each use nested loops with a counter.

```java
public static int f(int n) {
    int c = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) { c++; }
    }
    return c;
}
public static int g(int n) {
    int c = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) { c++; }
    }
    return c;
}
public static int h(int n) {
    int c = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < 3; j++) { c++; }
    }
    return c;
}
```

(a) Complete the table of return values. (6 marks)

| Method | `n = 5` | `n = 10` |
|---|---|---|
| `f` | | |
| `g` | | |
| `h` | | |

(b) When `n` doubles from 5 to 10, by what factor does the work change for each method? (3 marks)

<details>
<summary>Answer and explanation</summary>

**(a)**

| Method | `n = 5` | `n = 10` |
|---|---|---|
| `f` | 25 | 100 |
| `g` | 10 | 45 |
| `h` | 15 | 30 |

`f` is n x n. `g` is 0 + 1 + ... + (n - 1) = n(n - 1) / 2: 10 for n = 5 and 45 for n = 10. `h` is 3 passes for each of n outer passes: 3n, which is 15 and 30.

**(b)** `f`: 100 / 25 = 4 times as much. `g`: 45 / 10 = 4.5 times as much. `h`: 30 / 15 = 2 times as much. The nested loops whose inner bound grows with `n` (`f` and `g`) grow much faster than `h`, whose inner loop is a fixed 3.

**Suggested Marlbridge rubric (9 marks).** 1 mark for each of the six table values; 1 mark for each of the three factors in (b).
</details>

## How did you do?

Questions 1, 3 and 5 test counting executions. If you missed Question 3, revisit "Counting the inner body" in the [study guide](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/). If you missed Question 4 or 9, review "The inner variable must start again". If you missed Question 2 or 6, review "Rows and columns". Then use the [checklist](/advanced-course-resources/computer-science-a/2-11-nested-iteration-checklist/).
