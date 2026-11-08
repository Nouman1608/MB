---
resourceId: "mb-ap-csa-2.12-practice"
title: "Informal Run-Time Analysis: Practice Questions (Computer Science A 2.12)"
description: "10 original Marlbridge practice questions on statement execution counts and informal run-time comparison, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.12"]
resourceType: "practice-questions"
prerequisites:
  - "while and for loops (Topics 2.7 and 2.8)"
  - "Nested iteration (Topic 2.11)"
prerequisiteResources: ["mb-ap-csa-2.12-study-guide"]
learningObjectives:
  - "Define a statement execution count and calculate it for single loops, nested loops and loops with early exits"
  - "Count the initialization, tests and updates of a for loop, and the body executions"
  - "Compare two algorithms for the same task by how their execution counts grow with the size of the input"
  - "Explain why the count can depend on the data as well as on the size of the input"
skills: ["4", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.12-study-guide", "mb-ap-csa-2.12-revision-notes", "mb-ap-csa-2.12-checklist"]
next: "mb-ap-csa-2.12-checklist"
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
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Assume every code segment compiles unless a question says otherwise, and that no calculator is allowed.

## Question 1 (multiple choice · foundation)

How many times does `count++` execute?

```java
int count = 0;
for (int i = 1; i <= 20; i += 3) {
    count++;
}
```

- (A) 6
- (B) 7
- (C) 20
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `i` takes the values 1, 4, 7, 10, 13, 16 and 19; the next value, 22, fails `i <= 20`. That is 7 iterations.

- (A) stops at 16 and misses 19.
- (C) is the upper bound, not a count.
- (D) counts the final value 22, or the false test.
</details>

## Question 2 (multiple choice · core)

How many times is the Boolean expression `k < 6` evaluated?

```java
for (int k = 0; k < 6; k++) {
    System.out.print("x");
}
```

- (A) 5
- (B) 6
- (C) 7
- (D) 12

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The body runs 6 times, for `k` = 0 to 5, and the test is evaluated once more when `k` is 6 and the result is false: 7 evaluations.

- (A) is one fewer than the body count.
- (B) is the number of body executions, not tests.
- (D) counts the tests and the updates together.
</details>

## Question 3 (multiple choice · core)

For `n = 8`, how many times does `c++` execute?

```java
int c = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        c++;
    }
}
```

- (A) 8
- (B) 16
- (C) 64
- (D) 28

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Both loops run `n` times, independently: 8 x 8 = 64.

- (A) counts only one loop.
- (B) adds the bounds.
- (D) is the count for a triangle, 8 x 7 / 2.
</details>

## Question 4 (multiple choice · core)

For `n = 8`, how many times does `c++` execute?

```java
int c = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) {
        c++;
    }
}
```

- (A) 28
- (B) 36
- (C) 64
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The inner loop runs `i` times on pass `i`: 0, 1, 2, ..., 7. The total is 0 + 1 + ... + 7 = 28 = 8 x 7 / 2.

- (B) is 1 + 2 + ... + 8, which would be the count for `j <= i` starting at `i = 1`.
- (C) is the count when both bounds are `n`.
- (D) is the number of outer passes.
</details>

## Question 5 (multiple choice · core)

Which segment executes `count++` the most times?

- (A) `for (int i = 0; i < 40; i++) { count++; }`
- (B) `for (int i = 0; i < 40; i += 4) { count++; }`
- (C) `for (int i = 1; i < 40; i *= 2) { count++; }`
- (D) `for (int i = 0; i < 6; i++) { for (int j = 0; j < 6; j++) { count++; } }`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Segment A runs 40 times. B runs 10 times (0, 4, ..., 36). C runs 6 times (1, 2, 4, 8, 16, 32). D runs 6 x 6 = 36 times.

- (B), (C) and (D) all run fewer times than 40, though D is close (36).
</details>

## Question 6 (multiple choice · stretch)

A method returns the first index where a multiple of 7 is found, by testing the numbers 1, 2, 3, ... up to `limit` in order, and stops as soon as it finds one.

```java
public static int firstMultiple(int start, int limit) {
    for (int k = start; k <= limit; k++) {
        if (k % 7 == 0) {
            return k;
        }
    }
    return -1;
}
```

For which call is the number of `k % 7 == 0` tests largest?

- (A) `firstMultiple(14, 100)`
- (B) `firstMultiple(8, 100)`
- (C) `firstMultiple(8, 13)`
- (D) They all do the same amount of work.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For (A), 14 is a multiple of 7, so the first test succeeds: 1 test. For (B), the loop tests 8, 9, 10, 11, 12, 13 and then 14, which succeeds: 7 tests. For (C), the loop tests 8 to 13, and finds nothing: 6 tests. So (B) does the most.

- (A) is the best case with 1 test.
- (C) does 6 tests, one fewer than (B), because it runs out of values before 14.
- (D) is wrong: the data and the bounds decide the count.
</details>

## Question 7 (constructed response · core)

Consider the code below.

```java
int p = 0;
int q = 0;
for (int i = 1; i <= 8; i++) {
    p++;
    for (int j = 1; j <= 3; j++) {
        q++;
    }
}
```

(a) How many times does `p++` execute? (1 mark)
(b) How many times does `q++` execute? (1 mark)
(c) How many times is the test `j <= 3` evaluated in total? (2 marks)
(d) If the outer loop bound changes from 8 to 16, by what factor do the answers to (a) and (b) change? (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** 8. **(b)** 8 x 3 = 24. **(c)** The inner test is evaluated 4 times on every outer pass (3 true, 1 false): 8 x 4 = 32. **(d)** Both double (factor 2): 16 and 48.

**Suggested Marlbridge rubric (5 marks).** 1 mark each for (a), (b) and (d); 2 marks for (c) (1 for 4 tests per pass, 1 for the total 32).
</details>

## Question 8 (constructed response · core)

A method `countDivisors1` tests every `d` from 1 to `n`, and `countDivisors2` tests every `d` from 1 to `n / 2` and then adds 1 for `n` itself.

```java
public static int countDivisors1(int n) {
    int count = 0;
    for (int d = 1; d <= n; d++) {
        if (n % d == 0) { count++; }
    }
    return count;
}
public static int countDivisors2(int n) {
    int count = 0;
    for (int d = 1; d <= n / 2; d++) {
        if (n % d == 0) { count++; }
    }
    return count + 1;
}
```

(a) For `n = 36`, how many times is the test `n % d == 0` evaluated by each method? (2 marks)
(b) Do both methods return the same value for n = 36? Explain. (2 marks)
(c) By roughly what factor does Method 2 reduce the number of tests? Give the number of tests each method makes when `n = 1000000`. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** Method 1 evaluates the test 36 times (d = 1 to 36). Method 2 evaluates it 18 times (d = 1 to 18).

**(b)** Yes: both return 9. The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18 and 36; no divisor of 36 is bigger than 18 except 36 itself, which Method 2 adds at the end.

**(c)** For every `n` Method 2 does about half the work. For n = 1000000, Method 1 makes 1,000,000 tests and Method 2 makes 500,000. The saving is a constant factor of 2: it halves the work, but the count still grows in proportion to `n`.

**Suggested Marlbridge rubric (6 marks).** 1 mark each for 36 and 18; 1 mark for returning 9 for both; 1 mark for the explanation about the largest proper divisor; 1 mark for 500,000 versus 1,000,000; 1 mark for observing the factor of 2.
</details>

## Question 9 (constructed response · core)

For each segment, give the number of times `count++` executes when `n = 16`, and the number when `n = 32`. (6 marks)

```java
// Segment P
for (int i = 0; i < n; i++) { count++; }

// Segment Q
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) { count++; }
}

// Segment R
for (int i = 1; i < n; i *= 2) { count++; }
```

<details>
<summary>Answer and explanation</summary>

| Segment | n = 16 | n = 32 | Change when n doubles |
|---|---|---|---|
| P | 16 | 32 | doubles |
| Q | 256 | 1024 | four times as much |
| R | 4 (i = 1, 2, 4, 8) | 5 (i = 1, 2, 4, 8, 16) | one more pass |

**Suggested Marlbridge rubric (6 marks).** 1 mark for each of the six counts.
</details>

## Question 10 (constructed response · stretch)

Two algorithms decide whether a number `n` (at least 2) is prime. Algorithm 1 tests every `d` from 2 to `n - 1` and stops at the first divisor. Algorithm 2 tests `d` from 2 while `d * d <= n` and stops at the first divisor.

(a) For `n = 49`, how many divisibility tests does each algorithm make? (3 marks)

(b) For `n = 50`, how many does each make? (2 marks)

(c) Explain why neither the best case nor a single input is enough to say which algorithm is better. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** Algorithm 1: d = 2, 3, 4, 5, 6, 7: stops at 7 (49 = 7 x 7): **6** tests. Algorithm 2: d = 2 (4 <= 49), 3 (9), 4 (16), 5 (25), 6 (36), 7 (49 <= 49), and 7 divides 49: **6** tests. They make the same number here because the smallest divisor of 49 is 7 and 7 x 7 = 49 exactly.

**(b)** `n = 50`: 2 divides 50, so both stop at the first test: **1** test each.

**(c)** The count depends on the data: for numbers with a small divisor, both stop at once. The difference appears for primes and for numbers whose smallest divisor is large, where Algorithm 1 may test about `n` values while Algorithm 2 tests about the square root of `n`. To compare algorithms we look at the **worst case** and at how the counts grow as `n` grows (for the prime 1009: 1007 tests against 30).

**Suggested Marlbridge rubric (7 marks).** 3 marks for (a) (1 for each correct test list or count and 1 for noticing they are equal); 2 marks for (b); 2 marks for (c) (1 for the count depending on the data, 1 for the worst case or growth argument).
</details>

## How did you do?

Questions 1 to 4 test counting iterations for single and nested loops. If you missed Question 2, revisit "Counting a single loop" in the [study guide](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-study-guide/). If you missed Question 3 or 4, review "Counting nested loops". If you missed Question 6, 8 or 10, review "Early exits" and "Comparing two algorithms". Then use the [checklist](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-checklist/).
