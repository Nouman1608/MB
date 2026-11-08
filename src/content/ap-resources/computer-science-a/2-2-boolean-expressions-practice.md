---
resourceId: "mb-ap-csa-2.2-practice"
title: "Boolean Expressions: Practice Questions (Computer Science A 2.2)"
description: "10 original Marlbridge practice questions on Boolean expressions built with the relational operators, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.2"]
resourceType: "practice-questions"
prerequisites:
  - "Arithmetic operators, including integer division and the remainder operator %"
  - "Declaring and assigning int, double and boolean variables"
prerequisiteResources: ["mb-ap-csa-2.2-study-guide"]
learningObjectives:
  - "Write Boolean expressions with ==, !=, <, >, <= and >= and say what value each evaluates to"
  - "Evaluate an expression that mixes arithmetic and relational operators using precedence"
  - "Explain that a relational expression always evaluates to true or false and can be stored in a boolean variable"
  - "Spot the common errors: = for ==, chained comparisons, integer division and comparing doubles with =="
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.2-study-guide", "mb-ap-csa-2.2-revision-notes", "mb-ap-csa-2.2-checklist"]
next: "mb-ap-csa-2.2-checklist"
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
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Assume that variables are declared and initialised as shown, and that no calculator is allowed.

## Question 1 (multiple choice · foundation)

What is the value of the expression `17 % 5 == 2`?

- (A) 2
- (B) true
- (C) false
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `17 % 5` is the remainder when 17 is divided by 5: 17 = 3 × 5 + 2, so the remainder is 2. Then `2 == 2` is true.

- (A) is the value of `17 % 5`, but the whole expression compares it with 2, so the result is a boolean, not 2.
- (C) would be right if the remainder were different from 2.
- (D) is the quotient 17 / 5. A relational expression never produces a number.
</details>

## Question 2 (multiple choice · foundation)

Which of the following statements does **not** compile?

- (A) `boolean ok = 7 > 3;`
- (B) `boolean ok = 5 != 5;`
- (C) `boolean ok = 2 < 4 < 6;`
- (D) `boolean ok = 10 % 2 == 0;`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `2 < 4 < 6` is evaluated as `(2 < 4) < 6`. The first comparison gives `true`, and `true < 6` compares a boolean with an int, which is not allowed.

- (A) is valid and stores true.
- (B) is valid and stores false: a legal expression can be false.
- (D) is valid and stores true.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
int a = 9;
int b = 2;
System.out.println(a / b > 4);
System.out.println(a / (double) b > 4);
```

- (A) true then true
- (B) false then false
- (C) false then true
- (D) true then false

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** In the first line `a / b` is int division: 9 / 2 = 4, and 4 > 4 is false. In the second, `(double) b` makes the division a double division: 9 / 2.0 = 4.5, and 4.5 > 4 is true.

- (A) treats the first division as 4.5.
- (B) treats the second division as truncated.
- (D) reverses the two results.
</details>

## Question 4 (multiple choice · core)

What is printed?

```java
int x = 6;
boolean p = x + 2 * 3 >= 12;
boolean q = (x + 2) * 3 >= 12;
System.out.println(p + " " + q);
```

- (A) true true
- (B) true false
- (C) false true
- (D) false false

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For `p`, multiplication comes first: 6 + 6 = 12, and 12 >= 12 is true. For `q`, the brackets force the addition first: 8 * 3 = 24, and 24 >= 12 is true.

- (B) wrongly gives q false, for example by evaluating `(x + 2) * 3` as 8 + 3.
- (C) wrongly gives p false, for example by reading `>=` as `>` (12 > 12 is false).
- (D) gets both wrong.
</details>

## Question 5 (multiple choice · core)

A program must be true when a ticket price `p` is **at most** 20. Which expression is correct?

- (A) `p < 20`
- (B) `p <= 20`
- (C) `p > 20`
- (D) `p == 20`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** "At most 20" means 20 or less, so `p <= 20`. A price of exactly 20 must make the expression true.

- (A) leaves out the boundary value 20.
- (C) is the opposite condition ("more than 20").
- (D) is true only for exactly 20, and excludes cheaper tickets.
</details>

## Question 6 (multiple choice · core)

What is printed?

```java
double d = 0.1 + 0.2;
System.out.println(d == 0.3);
System.out.println(Math.abs(d - 0.3) < 0.0001);
```

- (A) true then true
- (B) false then true
- (C) false then false
- (D) true then false

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The sum 0.1 + 0.2 is stored with a tiny round-off error, so it is not exactly equal to the stored value of 0.3, and `d == 0.3` is false. The difference is far smaller than 0.0001, so the tolerance test is true.

- (A) assumes decimal arithmetic is exact.
- (C) rejects the tolerance test; the difference is about 0.00000000000000005, which is less than 0.0001.
- (D) reverses the two results.
</details>

## Question 7 (multiple choice · stretch)

Which statement is true about the code below?

```java
int n = 12;
boolean r = n = 12;
```

- (A) It compiles and r is true.
- (B) It compiles and r is false.
- (C) It does not compile because `n = 12` is an int, not a boolean.
- (D) It does not compile because n is declared twice.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `n = 12` is an assignment, and its value is the int 12. A `boolean` variable cannot hold an int, so Java reports an incompatible-types error. The programmer almost certainly meant `n == 12`.

- (A) and (B) assume the assignment produces a boolean. In Java the value of an assignment is the assigned value, here an int.
- (D) is wrong: `n` is declared once.
</details>

## Question 8 (constructed response · core)

Write a Java Boolean expression for each description. Use the variable names given. (5 marks)

(a) `score` is at least 40.
(b) `n` is not a multiple of 3.
(c) The average of the two int values `x` and `y` is greater than 10. (Be careful with integer division.)
(d) `count` is exactly 1 more than `limit`.
(e) `temp` is below freezing, where freezing is 0.

<details>
<summary>Answer and explanation</summary>

**Model answers.**

(a) `score >= 40`
(b) `n % 3 != 0`
(c) `(x + y) / 2.0 > 10`
(d) `count == limit + 1`
(e) `temp < 0`

**Suggested Marlbridge rubric (5 marks).**

| Marks | Awarded for |
|---|---|
| 1 | (a) correct operator (`>=`) with the boundary included |
| 1 | (b) uses `% 3` and `!= 0` (or equivalent such as `n % 3 > 0` for non-negative n) |
| 1 | (c) uses a double division (`2.0` or a cast) so 10.5 is not truncated to 10 |
| 1 | (d) uses `==` (not `=`) with `limit + 1` on the right |
| 1 | (e) correct operator `<` with 0 |

For (c), `(x + y) / 2 > 10` is incorrect: with x = 10 and y = 11 the true average is 10.5 but the int quotient 10 is not greater than 10.
</details>

## Question 9 (constructed response · core)

Let `a = 12`, `b = 5`, `c = 3`. Evaluate each expression and give its value. Show the value of each side. (6 marks)

(a) `a / b == 2`
(b) `a % b >= c`
(c) `a - b * c < 0`
(d) `a / c != b - 1`
(e) `(a + b) / c > 5`
(f) `a / (double) b > 2.4`

<details>
<summary>Answer and explanation</summary>

| Expression | Left side | Right side | Result |
|---|---|---|---|
| (a) `a / b == 2` | 12 / 5 = 2 (int) | 2 | true |
| (b) `a % b >= c` | 12 % 5 = 2 | 3 | false (2 >= 3) |
| (c) `a - b * c < 0` | 12 - 15 = -3 | 0 | true |
| (d) `a / c != b - 1` | 12 / 3 = 4 | 5 - 1 = 4 | false (4 != 4) |
| (e) `(a + b) / c > 5` | 17 / 3 = 5 (int) | 5 | false (5 > 5) |
| (f) `a / (double) b > 2.4` | 12 / 5.0 = 2.4 | 2.4 | false (a double 2.4 is not greater than 2.4) |

**Suggested Marlbridge rubric (6 marks).** One mark for each correct result with supporting working. In (e), accept an answer that shows 17 / 3 = 5 before comparing. For (f), a candidate who says "true" has treated 2.4 as larger than itself; the quotient equals 2.4 so `>` is false.
</details>

## Question 10 (constructed response · stretch)

A student writes this code to print a message when a quiz mark is between 5 and 10 inclusive and the mark is even.

```java
int mark = 8;
boolean ok = 5 <= mark <= 10;
if (mark % 2 = 0) {
    System.out.println("Even mark in range");
}
```

(a) Identify two compile-time errors. (2 marks)

(b) Explain why each is an error. (2 marks)

(c) Rewrite the first error line so it compiles and means the same as the student intended, using only the operators from this topic and a logical operator (`&&`). (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** Error 1: `5 <= mark <= 10` (chained comparison). Error 2: `mark % 2 = 0` (assignment instead of comparison).

**(b)** Error 1: Java evaluates `5 <= mark` first, producing a boolean, and then tries to evaluate `boolean <= 10`, which is not allowed. Error 2: `=` is an assignment, and `mark % 2` is not a variable that can be assigned to; the condition would also not be a boolean. The comparison operator is `==`.

**(c)** `boolean ok = 5 <= mark && mark <= 10;` and `if (mark % 2 == 0)`. The logical operator `&&` is covered in Topic 2.5, but this is the standard way to express a range.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Identifies the chained comparison |
| 1 | Identifies `=` used instead of `==` |
| 1 | Explains that `5 <= mark` is a boolean that cannot be compared with an int |
| 1 | Explains that `=` assigns, and the condition must be a boolean |
| 2 | Rewrite: 1 mark for `5 <= mark && mark <= 10`, 1 mark for two separate comparisons each with the right boundary |
</details>

## How did you do?

Questions 1 to 7 cover the core skills: evaluating, precedence, integer division, boundary words and compile errors. If you missed Question 3 or 8(c), revisit "Integer division inside a comparison" in the [study guide](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-study-guide/). If you missed Question 2, 7 or 10, review "Two errors the compiler catches". Then use the [checklist](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-checklist/).
