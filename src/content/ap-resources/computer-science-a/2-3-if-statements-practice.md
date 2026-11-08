---
resourceId: "mb-ap-csa-2.3-practice"
title: "if Statements: Practice Questions (Computer Science A 2.3)"
description: "10 original Marlbridge practice questions on one-way and two-way if statements, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.3"]
resourceType: "practice-questions"
prerequisites:
  - "Boolean expressions and relational operators (Topic 2.2)"
  - "Declaring variables and printing with System.out.println"
prerequisiteResources: ["mb-ap-csa-2.3-study-guide"]
learningObjectives:
  - "Write one-way (if) and two-way (if-else) selection statements with correct syntax"
  - "Trace an if or if-else statement and state exactly which statements run for given values"
  - "Explain the difference between an if-else and two separate if statements"
  - "Avoid and diagnose common errors: a stray semicolon, missing braces and = used for =="
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.3-study-guide", "mb-ap-csa-2.3-revision-notes", "mb-ap-csa-2.3-checklist"]
next: "mb-ap-csa-2.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Questions 1 to 7 are multiple choice; the rest ask for written code, a trace or an explanation."
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

What is printed?

```java
int x = 7;
if (x > 10) {
    System.out.println("A");
} else {
    System.out.println("B");
}
System.out.println("C");
```

- (A) A
- (B) B
- (C) B then C
- (D) A then C

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 7 > 10 is false, so the else body prints `B`. The statement after the if-else always runs, so `C` is printed next.

- (A) assumes the condition is true.
- (B) forgets that the last `println` is outside the if-else and always runs.
- (D) combines the wrong branch with the right final statement.
</details>

## Question 2 (multiple choice · core)

What is printed?

```java
int n = 8;
if (n > 5) {
    System.out.print("X");
}
if (n > 7) {
    System.out.print("Y");
}
if (n > 9) {
    System.out.print("Z");
}
```

- (A) X
- (B) XY
- (C) XYZ
- (D) Y

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The three `if` statements are independent. 8 > 5 is true (X), 8 > 7 is true (Y), 8 > 9 is false (Z is skipped). The output is `XY`.

- (A) stops after the first true condition, which is what an if-else-if chain would do (Topic 2.4), not separate ifs.
- (C) ignores the third condition.
- (D) prints only the last true condition.
</details>

## Question 3 (multiple choice · core)

What is the value of `n` after the code runs?

```java
int n = 20;
if (n > 15) {
    n = n - 8;
}
if (n > 10) {
    n = n - 8;
}
```

- (A) 4
- (B) 12
- (C) 20
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** First `if`: 20 > 15 is true, so `n` becomes 12. Second `if` is tested on the **new** value: 12 > 10 is true, so `n` becomes 4.

- (B) applies only the first if, forgetting the second condition uses the updated `n`.
- (C) assumes neither body runs.
- (D) is not reachable by either path (20 - 8 - 8 is 4); it comes from subtracting 14.
</details>

## Question 4 (multiple choice · core)

What is printed?

```java
int score = 3;
if (score > 5);
{
    System.out.println("High");
}
System.out.println("End");
```

- (A) End
- (B) High
- (C) High then End
- (D) The code does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The semicolon after the condition is an empty statement that is the whole body of the `if`. The braces that follow form a plain block that always runs. So `High` is printed, then `End`.

- (A) is what the programmer intended, but the stray semicolon makes the block unconditional.
- (B) forgets the final statement.
- (D) is wrong: an empty statement and a block are both legal Java.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
int k = 1;
if (k > 3)
    System.out.println("P");
    System.out.println("Q");
System.out.println("R");
```

- (A) nothing
- (B) R
- (C) Q then R
- (D) P then Q then R

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Without braces only the single statement directly after the condition (`println("P")`) belongs to the `if`. Since 1 > 3 is false, `P` is skipped. `Q` and `R` are not part of the `if`, so both are printed.

- (A) and (B) assume `Q` is inside the `if` because it is indented.
- (D) ignores that the condition is false.
</details>

## Question 6 (multiple choice · core)

Which code segment always has the same effect as the following?

```java
if (x > 3) {
    s = "big";
} else {
    s = "small";
}
```

- (A) `if (x < 3) { s = "small"; } else { s = "big"; }`
- (B) `if (x <= 3) { s = "small"; } else { s = "big"; }`
- (C) `if (x > 3) { s = "big"; } if (x < 3) { s = "small"; }`
- (D) `if (x >= 3) { s = "big"; } else { s = "small"; }`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The original gives "small" for every x that is not greater than 3, that is, for x <= 3. Swapping the branches and reversing the condition to its exact complement gives (B).

- (A) mishandles x = 3: the original gives "small" for 3, but (A) gives "big" because 3 < 3 is false.
- (C) leaves `s` unchanged for x = 3, because neither condition is true.
- (D) gives "big" for x = 3, which differs from the original.
</details>

## Question 7 (multiple choice · stretch)

What is printed?

```java
int a = 5;
int b = 12;
boolean ok = b % a == 2;
if (ok) {
    a = a + b;
} else {
    a = a - b;
}
if (a > 10) {
    b = b / 2;
}
System.out.println(a + " " + b);
```

- (A) 17 6
- (B) -7 12
- (C) 17 12
- (D) -7 6

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `b % a` is 12 % 5 = 2, so `ok` is true and `a` becomes 5 + 12 = 17. The second condition 17 > 10 is true, so `b` becomes 12 / 2 = 6. Output: `17 6`.

- (B) takes the else branch and skips the second body.
- (C) takes the correct first branch but forgets the second selection.
- (D) takes the else branch (a = -7) and wrongly still halves b.
</details>

## Question 8 (constructed response · core)

A courier charges 5.00 dollars for a parcel of 10 kg or less, and 12.50 dollars for a heavier parcel. A parcel marked "fragile" has 3.00 dollars added to the cost.

(a) Write a Java method `shipping` with the header `public static double shipping(double kg, boolean fragile)` that returns the cost. (5 marks)

(b) Give the value returned by `shipping(10, true)` and `shipping(10.5, false)`. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a) Model answer.**

```java
public static double shipping(double kg, boolean fragile) {
    double cost;
    if (kg <= 10) {
        cost = 5.00;
    } else {
        cost = 12.50;
    }
    if (fragile) {
        cost = cost + 3.00;
    }
    return cost;
}
```

**(b)** `shipping(10, true)`: 10 <= 10 is true, so cost is 5.0, and fragile adds 3.0, giving **8.0**. `shipping(10.5, false)`: 10.5 <= 10 is false, so cost is 12.5, and no surcharge: **12.5**.

**Suggested Marlbridge rubric (7 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Correct method header and a return of type `double` |
| 1 | Correct boundary: `kg <= 10` for the light parcel (10 kg is light) |
| 1 | Two-way selection for the base price, with 5.00 and 12.50 on the correct branches |
| 1 | Separate one-way `if (fragile)` adding 3.00, not an `else` of the weight test |
| 1 | `cost` has a value on every path and is returned |
| 2 | (b): 1 mark for each correct result (8.0 and 12.5) |

An answer that uses four nested branches or a different but equivalent structure is correct if it gives the same costs. Penalise `kg < 10` (wrong for exactly 10 kg).
</details>

## Question 9 (constructed response · core)

A student wrote this code to print "Pass" for a mark of 50 or more and "Fail" otherwise. It has three problems.

```java
int mark = 62;
if (mark = 50) {
    System.out.println("Pass")
} else (mark < 50) {
    System.out.println("Fail");
}
```

(a) Identify the three errors. (3 marks)

(b) Write a corrected version that works for every integer mark. (3 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** (1) `mark = 50` is an assignment, not a comparison, and does not produce a boolean. (2) The statement `System.out.println("Pass")` is missing its semicolon. (3) `else` cannot have a condition: `else (mark < 50)` is not valid syntax.

**(b)**

```java
int mark = 62;
if (mark >= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}
```

The condition is `mark >= 50` because "50 or more" includes 50. The else needs no condition: every other mark fails.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Identifies the `=` instead of a comparison |
| 1 | Identifies the missing semicolon |
| 1 | Identifies the condition after `else` |
| 1 | Condition `mark >= 50` (the boundary is included) |
| 1 | Semicolon restored |
| 1 | A plain `else` with no condition |
</details>

## Question 10 (constructed response · stretch)

Two code segments use a variable `points`, starting at 8.

Segment 1:
```java
int points = 8;
if (points > 5) {
    points = points + 4;
}
if (points < 10) {
    points = points + 1;
}
```

Segment 2:
```java
int points = 8;
if (points > 5) {
    points = points + 4;
} else {
    points = points + 1;
}
```

(a) Find the final value of `points` after each segment. Show a trace table for Segment 1. (4 marks)

(b) Segment 1 is changed so that the second `if` becomes an `else` attached to the first `if`. Explain in one sentence why this gives the same result as Segment 2. (1 mark)

(c) A student says "the if-else in Segment 2 is just two separate ifs written differently". Use the two segments (or another example) to show this is false. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** Segment 1 trace:

| Statement | `points` before | Condition | `points` after |
|---|---|---|---|
| first `if` | 8 | `8 > 5` true | 12 |
| second `if` | 12 | `12 < 10` false | 12 |

Segment 1 ends with **12**. Segment 2: 8 > 5 is true, so `points` becomes 12 and the else is skipped. Segment 2 ends with **12**.

**(b)** An if-else makes a single decision: the else body runs only if the if condition is false, so after the if body ran the second action cannot happen.

**(c)** The segments agree here only because the second condition happened to be false after the first body changed `points`. If the second `if` were `points > 10`, then in Segment 1 the second body would also run (12 > 10), but in an if-else it would not. Two separate ifs test their conditions one after the other on the updated values; an if-else decides once.

**Suggested Marlbridge rubric (7 marks).**

| Marks | Awarded for |
|---|---|
| 2 | Trace table for Segment 1: correct before/after values (1 mark for each row) |
| 1 | Segment 1 final value 12 |
| 1 | Segment 2 final value 12 |
| 1 | (b) states a single decision / else skipped when the if ran |
| 1 | (c) gives a valid counter-example or explains independent testing on updated values |
| 1 | (c) correct outcome of the counter-example |
</details>

## How did you do?

Questions 1 to 5 test the central skill: knowing which statements run. If you missed Question 2 or 3, revisit "If-else is not two ifs" in the [study guide](/advanced-course-resources/computer-science-a/2-3-if-statements-study-guide/). If you missed Question 4 or 5, review "Braces and layout" and "The stray semicolon". Then use the [checklist](/advanced-course-resources/computer-science-a/2-3-if-statements-checklist/).
