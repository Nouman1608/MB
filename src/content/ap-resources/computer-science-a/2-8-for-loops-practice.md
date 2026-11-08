---
resourceId: "mb-ap-csa-2.8-practice"
title: "for Loops: Practice Questions (Computer Science A 2.8)"
description: "10 original Marlbridge practice questions on for loops, the header's three parts and equivalent while loops, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.8"]
resourceType: "practice-questions"
prerequisites:
  - "while loops (Topic 2.7)"
  - "Compound assignment and increment operators such as i++ and i += 2"
prerequisiteResources: ["mb-ap-csa-2.8-study-guide"]
learningObjectives:
  - "Write a for loop whose header has the correct initialisation, Boolean expression and update"
  - "State the exact order in which the header and the body of a for loop execute"
  - "Count iterations and trace the loop control variable, including loops that step by more than 1 or count down"
  - "Rewrite a for loop as an equivalent while loop and the reverse, and diagnose common for-loop errors"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.8-study-guide", "mb-ap-csa-2.8-revision-notes", "mb-ap-csa-2.8-checklist"]
next: "mb-ap-csa-2.8-checklist"
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

How many times does the body of the loop run?

```java
for (int i = 2; i <= 20; i += 6) {
    System.out.print("*");
}
```

- (A) 3
- (B) 4
- (C) 5
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `i` takes the values 2, 8, 14 and 20 while `i <= 20`. The next value, 26, fails the test. That is 4 iterations.

- (A) forgets that 20 is included (`<=`).
- (C) counts the final false test.
- (D) is the difference 20 - 2, not an iteration count.
</details>

## Question 2 (multiple choice · core)

What is printed?

```java
int total = 0;
for (int i = 5; i > 0; i--) {
    total = total + i;
}
System.out.println(total);
```

- (A) 10
- (B) 15
- (C) 5
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `i` takes the values 5, 4, 3, 2, 1, so the total is 5 + 4 + 3 + 2 + 1 = 15.

- (A) leaves out the 5, as if the loop started at 4.
- (C) is the starting value only.
- (D) would require the body not to run.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
for (int i = 0; i < 10; i++) {
    System.out.print(i + " ");
    i = i + 3;
}
```

- (A) 0 1 2 3 4 5 6 7 8 9
- (B) 0 4 8
- (C) 0 3 6 9
- (D) 3 7

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Print 0, the body sets `i` to 3, the update makes it 4. Print 4, the body makes 7, the update 8. Print 8, the body makes 11, the update 12, and `12 < 10` is false. Output: `0 4 8 `.

- (A) ignores the extra change to `i` in the body.
- (C) steps by 3 each time; the real step is 4 (3 from the body plus 1 from the update).
- (D) prints the values after the body changed them.
</details>

## Question 4 (multiple choice · core)

Which `while` loop is equivalent to the following for loop?

```java
for (int k = 3; k < 9; k += 2) {
    System.out.print(k);
}
```

- (A) `int k = 3; while (k < 9) { System.out.print(k); k += 2; }`
- (B) `int k = 3; while (k < 9) { k += 2; System.out.print(k); }`
- (C) `while (int k = 3; k < 9; k += 2) { System.out.print(k); }`
- (D) `int k = 3; while (k <= 9) { System.out.print(k); k += 2; }`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Initialization before the loop, the same Boolean expression, and the update as the last statement of the body. Both print 357.

- (B) updates before printing, so it would print 579.
- (C) is not valid Java: a while loop has only a condition in its brackets.
- (D) changes the boundary to `<=`; here the values 3, 5, 7 and 9 would be printed, so it prints 3579.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
for (int i = 0; i < 4; i++);
{
    System.out.print("A");
}
```

- (A) A
- (B) AAAA
- (C) AAAAA
- (D) Nothing is printed.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The semicolon is the whole loop body, so the loop runs four times doing nothing. The block that follows is an ordinary block that runs once, printing A.

- (B) assumes the block is the body of the loop.
- (C) adds one extra iteration.
- (D) assumes the block is skipped because the loop body is empty.
</details>

## Question 6 (multiple choice · stretch)

Which statement about the code is true?

```java
for (int n = 1; n <= 3; n++) {
    System.out.print(n);
}
System.out.print(n);
```

- (A) It prints 1234.
- (B) It prints 1233.
- (C) It does not compile because `n` is out of scope on the last line.
- (D) It prints 123 and then throws an exception.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A variable declared in the for header exists only inside the loop. The last line refers to `n` outside it, so the compiler reports an error.

- (A) would be the output if `n` had been declared before the loop, since it ends as 4.
- (B) assumes `n` holds its last value, 3.
- (D) is wrong: the error is detected at compile time, so nothing runs.
</details>

## Question 7 (constructed response · core)

Write a for loop that prints the multiples of 7 from 7 to 70 inclusive, separated by spaces, then complete the questions. (6 marks)

(a) Write the loop. (3 marks)

(b) How many numbers are printed? (1 mark)

(c) Rewrite your loop as an equivalent while loop. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)**

```java
for (int m = 7; m <= 70; m += 7) {
    System.out.print(m + " ");
}
```

**(b)** 10 numbers (7 x 1 up to 7 x 10).

**(c)**

```java
int m = 7;
while (m <= 70) {
    System.out.print(m + " ");
    m += 7;
}
```

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Initialization starts at 7 |
| 1 | Boolean expression includes 70 (`m <= 70` or `m < 71`) |
| 1 | Update adds 7, with a print inside the body |
| 1 | (b) 10 |
| 1 | (c) initialization before the while loop and the same condition |
| 1 | (c) update as the last statement in the loop body |

An equally valid answer counts from 1 to 10 and prints `i * 7`.
</details>

## Question 8 (constructed response · core)

Trace the code and complete the table. (6 marks)

```java
int result = 1;
for (int i = 1; i <= 4; i++) {
    if (i % 2 == 0) {
        result = result * i;
    } else {
        result = result + i;
    }
}
System.out.println(result);
```

| Iteration | `i` | `i % 2 == 0`? | `result` after the body |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

<details>
<summary>Answer and explanation</summary>

| Iteration | `i` | `i % 2 == 0`? | `result` after the body |
|---|---|---|---|
| 1 | 1 | false | 1 + 1 = 2 |
| 2 | 2 | true | 2 * 2 = 4 |
| 3 | 3 | false | 4 + 3 = 7 |
| 4 | 4 | true | 7 * 4 = 28 |

The loop prints **28**.

**Suggested Marlbridge rubric (6 marks).** 1 mark per correct row (4) for the test result and `result`; 1 mark for the final output; 1 mark for showing the test `i % 2 == 0` on each row.
</details>

## Question 9 (constructed response · stretch)

Each loop below should print the integers from 1 to 5, but each has a fault. State the fault and give a corrected header. (6 marks)

```java
// Loop A
for (int i = 1; i < 5; i++) {
    System.out.print(i + " ");
}
```

```java
// Loop B
for (int j = 5; j >= 1; j++) {
    System.out.print(j + " ");
}
```

```java
// Loop C
for (int k = 0; k <= 5; k++) {
    System.out.print(k + " ");
}
```

<details>
<summary>Answer and explanation</summary>

**Loop A** is off by one: it prints 1 to 4 because `i < 5` is false when `i` is 5. Corrected header: `for (int i = 1; i <= 5; i++)`.

**Loop B** counts the wrong way: `j` increases from 5, so `j >= 1` stays true and the loop is effectively endless. Corrected header (counting down): `for (int j = 5; j >= 1; j--)`, which prints 5 4 3 2 1; to print 1 to 5, use `for (int j = 1; j <= 5; j++)`.

**Loop C** starts at 0, so it prints 0 as well as 1 to 5. Corrected header: `for (int k = 1; k <= 5; k++)`.

**Suggested Marlbridge rubric (6 marks).** For each loop, 1 mark for the correct fault and 1 mark for a correct header.
</details>

## Question 10 (constructed response · stretch)

(a) Write the following while loop as a for loop. (2 marks)

```java
int count = 0;
int x = 100;
while (x > 1) {
    x = x / 3;
    count++;
}
System.out.println(count);
```

(b) What is printed? (2 marks)

(c) Explain in one sentence why a for loop with a *counted* header such as `for (int i = 0; i < 4; i++)` would be a poor choice for this task. (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** The initialization is `int x = 100`, the Boolean expression is `x > 1`, and the update is `x = x / 3`. The counter `count` is declared before the loop.

```java
int count = 0;
for (int x = 100; x > 1; x = x / 3) {
    count++;
}
System.out.println(count);
```

**(b)** `x` takes the values 100, 33, 11, 3, then 1, which fails `x > 1`. The body ran for 100, 33, 11 and 3: **4** times. The output is 4.

**(c)** The number of iterations depends on how quickly `x` shrinks, which is not known in advance, so a loop that counts to a fixed number would not follow the problem (a while loop, or a for loop with this kind of update, follows the data).

**Suggested Marlbridge rubric (5 marks).** 1 mark for a correct initialization and test in (a); 1 mark for the update `x = x / 3` in the header (with `count++` in the body); 2 marks for (b) (1 for the sequence 100, 33, 11, 3, 1 and 1 for the answer 4); 1 mark for (c).
</details>

## How did you do?

Questions 1, 2 and 3 test counting iterations and tracing. If you missed Question 3, revisit "Errors to watch for" in the [study guide](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/). If you missed Question 4 or 10, review "A for loop is a while loop in disguise". If you missed Question 5 or 6, review "Scope of the loop control variable". Then use the [checklist](/advanced-course-resources/computer-science-a/2-8-for-loops-checklist/).
