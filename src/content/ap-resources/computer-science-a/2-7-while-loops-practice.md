---
resourceId: "mb-ap-csa-2.7-practice"
title: "while Loops: Practice Questions (Computer Science A 2.7)"
description: "10 original Marlbridge practice questions on while loops, their condition, and how to trace them, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.7"]
resourceType: "practice-questions"
prerequisites:
  - "Boolean expressions and compound conditions (Topics 2.2 and 2.5)"
  - "Variables, assignment and compound assignment such as i++ and sum += i"
prerequisiteResources: ["mb-ap-csa-2.7-study-guide"]
learningObjectives:
  - "Write a while loop with correct initialisation, condition and update"
  - "Trace a while loop with a table and say how many times its body runs, including zero"
  - "Explain why the condition is tested before every iteration, including the first"
  - "Recognise infinite loops and off-by-one errors, and state the initial conditions a loop needs to work as intended"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.7-study-guide", "mb-ap-csa-2.7-revision-notes", "mb-ap-csa-2.7-checklist"]
next: "mb-ap-csa-2.7-checklist"
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

How many times does the body of the loop execute?

```java
int i = 0;
while (i < 4) {
    i = i + 1;
}
```

- (A) 3
- (B) 4
- (C) 5
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `i` takes the values 0, 1, 2 and 3 when the test is true, so the body runs 4 times. The test `4 < 4` is then false and the loop ends with `i` equal to 4.

- (A) is the largest value of `i` inside the loop, not the number of iterations.
- (C) counts the number of condition tests (5), not the iterations.
- (D) would need the condition to be false at the start.
</details>

## Question 2 (multiple choice · core)

What is printed?

```java
int n = 20;
int count = 0;
while (n > 3) {
    n = n - 6;
    count++;
}
System.out.println(n + " " + count);
```

- (A) 2 3
- (B) 8 2
- (C) 2 4
- (D) -4 4

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Trace: n = 20 (true) becomes 14, count 1; 14 (true) becomes 8, count 2; 8 (true) becomes 2, count 3; 2 > 3 is false. The output is `2 3`.

- (B) stops one pass too early (8 and 2).
- (C) has the right n but counts one too many.
- (D) assumes the loop continues once more with n = 2.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
int x = 7;
while (x < 5) {
    System.out.println("loop");
    x--;
}
System.out.println("x = " + x);
```

- (A) x = 7
- (B) loop, then x = 6
- (C) loop printed five times, then x = 2
- (D) The loop never ends.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `7 < 5` is false at the first test, so the body never runs. Only the last line prints.

- (B) assumes at least one pass.
- (C) assumes the loop counts down until it reaches a boundary.
- (D) would apply if the condition were true and the update moved the wrong way; here the condition is false at the start.
</details>

## Question 4 (multiple choice · core)

Which loop never ends?

- (A) `int k = 10; while (k > 0) { k = k - 3; }`
- (B) `int k = 1; while (k != 10) { k = k + 2; }`
- (C) `int k = 1; while (k < 10) { k = k + 3; }`
- (D) `int k = 0; while (k <= 0) { k = k + 1; }`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `k` takes the values 1, 3, 5, 7, 9, 11, ... : always odd, so it jumps over 10 and `k != 10` is true for ever. Using `!=` as a loop test is risky for exactly this reason: a value that skips the target never stops the loop.

- (A) takes the values 10, 7, 4, 1, -2, so `k > 0` becomes false.
- (C) takes the values 1, 4, 7, 10, so `k < 10` becomes false at 10.
- (D) runs once: `k` becomes 1, and `1 <= 0` is false.
</details>

## Question 5 (multiple choice · core)

How many times does `System.out.print` execute?

```java
int j = 3;
while (j <= 12) {
    System.out.print("*");
    j = j + 3;
}
```

- (A) 3
- (B) 4
- (C) 5
- (D) 12

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `j` takes the values 3, 6, 9 and 12 when the test is true. At 12, `12 <= 12` is true, so the body runs for 12 too. After that `j` is 15 and the test fails. That is 4 iterations.

- (A) forgets that `<=` includes 12.
- (C) counts the tests, not the iterations.
- (D) is the final boundary, not a count.
</details>

## Question 6 (multiple choice · stretch)

What is printed?

```java
int a = 1;
int b = 100;
while (a < b) {
    a = a * 3;
    b = b - 10;
}
System.out.println(a + " " + b);
```

- (A) 27 70
- (B) 81 60
- (C) 81 70
- (D) 243 50

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Trace: (a, b) = (1, 100) true, becomes (3, 90); (3, 90) true, becomes (9, 80); (9, 80) true, becomes (27, 70); (27, 70) true, becomes (81, 60); 81 < 60 is false. Output `81 60`.

- (A) stops one pass early.
- (C) updates a but not b on the last pass.
- (D) runs one pass too many, although the test `81 < 60` is false.
</details>

## Question 7 (constructed response · core)

Write a `while` loop (with all declarations) that adds the whole numbers from 1 up to and including `n`, and then prints the total. Use `n = 6`. (5 marks)

Then complete the trace table. (3 marks)

| Test | `i` | `i <= n`? | `sum` after the body |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
int n = 6;
int i = 1;
int sum = 0;
while (i <= n) {
    sum = sum + i;
    i++;
}
System.out.println(sum);
```

| Test | `i` | `i <= n`? | `sum` after the body |
|---|---|---|---|
| 1 | 1 | true | 1 |
| 2 | 2 | true | 3 |
| 3 | 3 | true | 6 |
| 4 | 4 | true | 10 |
| 5 | 5 | true | 15 |
| 6 | 6 | true | 21 |
| 7 | 7 | false | loop ends |

The output is 21, which matches the formula 6 x 7 / 2.

**Suggested Marlbridge rubric (8 marks).**

| Marks | Awarded for |
|---|---|
| 1 | `sum` initialised to 0 and `i` initialised to 1 |
| 1 | Condition `i <= n` (includes `n`) |
| 1 | `sum` accumulates `i` in the body |
| 1 | `i` updated inside the body so the loop ends |
| 1 | Output after the loop, not inside it |
| 1 | Trace: `i` and the test results correct |
| 1 | Trace: `sum` column correct through 21 |
| 1 | Trace shows the false test at `i` = 7 |
</details>

## Question 8 (constructed response · core)

Each loop is meant to print the numbers from 10 down to 1, separated by spaces. Describe the fault in each and write a correction. (6 marks)

```java
// Loop A
int p = 10;
while (p > 1) {
    System.out.print(p + " ");
    p--;
}
```

```java
// Loop B
int q = 10;
while (q >= 1) {
    System.out.print(q + " ");
}
```

```java
// Loop C
int r = 0;
while (r >= 1) {
    System.out.print(r + " ");
    r--;
}
```

<details>
<summary>Answer and explanation</summary>

**Loop A** is off by one: it prints 10 to 2 and omits 1, because `p > 1` is false when `p` is 1. Fix: `while (p >= 1)`.

**Loop B** is infinite: `q` never changes, so `q >= 1` stays true and 10 is printed for ever. Fix: add `q--;` inside the loop.

**Loop C** never runs: `r` starts at 0, so `0 >= 1` is false at the first test and nothing is printed. Fix: initialise `int r = 10;`.

**Suggested Marlbridge rubric (6 marks).** For each loop: 1 mark for naming the correct fault (off by one, infinite, zero iterations) and 1 mark for a correct fix.
</details>

## Question 9 (constructed response · stretch)

(a) Trace the following code and give its output. (3 marks)

```java
int num = 4093;
int digitSum = 0;
while (num > 0) {
    digitSum = digitSum + num % 10;
    num = num / 10;
}
System.out.println(digitSum);
```

(b) How many times is the condition tested? (1 mark)

(c) What would the code print if `num` started as 0? Explain. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)**

| Test | `num` before | `num > 0`? | digit `num % 10` | `digitSum` after | `num` after |
|---|---|---|---|---|---|
| 1 | 4093 | true | 3 | 3 | 409 |
| 2 | 409 | true | 9 | 12 | 40 |
| 3 | 40 | true | 0 | 12 | 4 |
| 4 | 4 | true | 4 | 16 | 0 |
| 5 | 0 | false | | | |

The output is **16** (4 + 0 + 9 + 3).

**(b)** The condition is tested **5** times (four true, one false).

**(c)** It prints 0. The test `0 > 0` is false at the start, so the body never runs and `digitSum` keeps its initial value 0.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Correct digits extracted in the trace (3, 9, 0, 4) |
| 1 | Correct `digitSum` and `num` columns |
| 1 | Output 16 |
| 1 | (b) 5 tests |
| 1 | (c) output 0 |
| 1 | (c) explanation: zero iterations because the condition is false initially |
</details>

## Question 10 (constructed response · stretch)

A programmer writes a loop that is meant to find the smallest power of 2 that is greater than 1000.

```java
int power = 1;
while (power <= 1000) {
    power = power * 2;
}
System.out.println(power);
```

(a) What is printed? (1 mark)

(b) How many times does the body execute? (1 mark)

(c) A student changes the condition to `power < 1000`. Does the output change? Then say what goes wrong if the target is 1024 and the condition is `power < 1024`. (2 marks)

(d) State the initial condition that this loop needs in order to work as described. (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** 1024. **(b)** `power` takes the values 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 when the test is true: that is 10 iterations, ending with `power` equal to 1024.

**(c)** The output does not change for the target 1000: 1000 is not a power of 2, so `power < 1000` and `power <= 1000` agree on every power of 2 in the sequence. For the target 1024 the two conditions differ. With `power < 1024` the loop stops as soon as `power` is 1024, but 1024 is not *greater than* the target, so the answer is wrong; `power <= 1024` carries on to 2048, the smallest power of 2 that is strictly greater.

**(d)** `power` must start at a positive value (1 here), with all values of the sequence being powers of 2. If `power` started at 0 the loop would never end, because 0 times 2 is still 0.

**Suggested Marlbridge rubric (5 marks).** 1 mark each for (a) and (b), 1 mark for (c) saying the output is unchanged for 1000 because 1000 is not a power of 2, 1 mark for (c) explaining the 1024 case, 1 mark for (d).
</details>

## How did you do?

Questions 1 to 3 and 5 test counting iterations and tracing. If you missed Question 1 or 5, revisit "Tracing a loop" in the [study guide](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/). If you missed Question 3 or 8, review "Zero iterations" and "Infinite loops". Then use the [checklist](/advanced-course-resources/computer-science-a/2-7-while-loops-checklist/).
