---
resourceId: "mb-ap-csa-1.6-practice"
title: "Compound Assignment Operators: Practice Questions (Computer Science A 1.6)"
description: "Nine original Marlbridge practice questions on compound assignment operators and the ++ and -- operators, including tracing, equivalent statements and writing short update code."
course: "computer-science-a"
unit: 1
topics: ["1.6"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.6 study guide"]
learningObjectives: ["Evaluate compound assignments on int and double variables", "Rewrite a compound assignment as an ordinary assignment, bracketing the right side", "Trace a sequence of updates in a table", "Write short code using compound assignment to update, accumulate and split values"]
skills: ["2", "3"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.6-study-guide", "mb-ap-csa-1.6-revision-notes", "mb-ap-csa-1.6-checklist"]
next: "mb-ap-csa-1.6-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 6 are multiple choice; 7 to 9 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method.

## Question 1 (multiple choice · foundation)

What is the value of `x` after the following code segment?

```java
int x = 8;
x += 4;
```

- (A) `4`
- (B) `8`
- (C) `12`
- (D) `32`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `x += 4;` adds 4 to the current value: 8 + 4 = 12.

- (A) subtracts the wrong way round, as if the statement were `x -= 4;`.
- (B) assumes that the statement had no effect on `x`.
- (D) multiplies instead of adding.
</details>

## Question 2 (multiple choice · foundation)

What is the value of `x` after the following code segment?

```java
int x = 4;
x *= 2 + 3;
```

- (A) `9`
- (B) `11`
- (C) `24`
- (D) `20`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The right side `2 + 3` is evaluated first, giving 5, then 4 * 5 = 20. The statement means `x = x * (2 + 3);`.

- (A) adds all three numbers.
- (B) reads the statement as `x = x * 2 + 3;`, which is (4 * 2) + 3. The right side of a compound assignment is evaluated in full first.
- (C) is 4 * 2 * 3: it multiplies by both numbers instead of adding them first.
</details>

## Question 3 (multiple choice · core)

What is the value of `a` after the following code segment?

```java
int a = 17;
a %= 5;
a++;
```

- (A) `2`
- (B) `3`
- (C) `4`
- (D) `18`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `17 % 5` is 2 (17 = 3 * 5 + 2), so `a` is 2. Then `a++` adds 1, giving 3.

- (A) forgets the increment.
- (C) uses the quotient 3 instead of the remainder, then adds 1.
- (D) ignores the `%=` and applies only the increment to 17.
</details>

## Question 4 (multiple choice · core)

What is the value of `n` after the following code segment?

```java
int n = 9;
n /= 2;
n--;
```

- (A) `3.5`
- (B) `4`
- (C) `3`
- (D) `3.0`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `n` is an `int`, so `n /= 2;` is integer division: 9 / 2 is 4. Then `n--;` subtracts 1, giving 3.

- (A) keeps a fraction, which an `int` cannot hold.
- (B) forgets the decrement.
- (D) would be a `double` value; `n` is an `int` and prints as `3`.
</details>

## Question 5 (multiple choice · core)

Which statement is equivalent to `total -= discount + 1;`?

- (A) `total = total - (discount + 1);`
- (B) `total = total - discount + 1;`
- (C) `total = (total - discount) + 1;`
- (D) `total = discount + 1 - total;`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A compound assignment evaluates the whole right side first, so `discount + 1` is a single value that is subtracted from `total`.

- (B) and (C) both subtract only `discount` and then **add** 1. The two are the same thing written differently, and neither subtracts the 1.
- (D) reverses the order of the subtraction, so it works out `discount + 1` minus `total`.
</details>

## Question 6 (multiple choice · core)

What is printed by the following code segment?

```java
double d = 9;
d /= 2;
d += 1;
System.out.println(d);
```

- (A) `5.5`
- (B) `5`
- (C) `5.0`
- (D) `4.5`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `d` is a `double` holding 9.0. `d /= 2;` is real division: 4.5. Then `d += 1;` gives 5.5.

- (B) assumes integer division and an `int` result.
- (C) assumes that the division truncated to 4.0 and then 1 was added.
- (D) forgets the final addition.
</details>

## Question 7 (tracing · core)

Trace the following code segment and state the final values of `p` and `q`.

```java
int p = 12;
int q = 5;
p -= q;
q *= p;
p /= 2;
q %= p + 1;
p++;
q--;
```

<details>
<summary>Worked solution</summary>

| After statement | p | q | Working |
|---|---|---|---|
| `int p = 12;` | 12 | - | |
| `int q = 5;` | 12 | 5 | |
| `p -= q;` | 7 | 5 | 12 - 5 |
| `q *= p;` | 7 | 35 | 5 * 7 |
| `p /= 2;` | 3 | 35 | integer division 7 / 2 |
| `q %= p + 1;` | 3 | 3 | right side first: 3 + 1 = 4; 35 % 4 = 3 (35 = 8 * 4 + 3) |
| `p++;` | 4 | 3 | |
| `q--;` | 4 | 2 | |

The final values are `p = 4` and `q = 2`.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `p` is 7 and `q` is 35 after the first two updates |
| 1 | `p` is 3 (integer division) |
| 1 | `q` is 3 (the right side `p + 1` evaluated first, then the remainder) |
| 1 | `p` is 4 |
| 1 | `q` is 2 |
</details>

## Question 8 (writing code · core)

A program has stored a duration of 7384 seconds in the `int` variable `s`. Using `/` and `%=` only (no new calculation methods), write statements that leave the hours in `h`, the minutes in `mi` and the leftover seconds in `s`, and state their values.

<details>
<summary>Worked solution</summary>

```java
int s = 7384;
int h = s / 3600;
s %= 3600;
int mi = s / 60;
s %= 60;
System.out.println(h + " " + mi + " " + s);
```

7384 / 3600 is 2 (2 * 3600 = 7200), so `h` is 2 and `s %= 3600` leaves 7384 - 7200 = 184. Then 184 / 60 is 3 (180), so `mi` is 3, and `s %= 60` leaves 184 - 180 = 4. The final values are `h = 2`, `mi = 3` and `s = 4`, so the line printed is `2 3 4`. Check: 2 * 3600 + 3 * 60 + 4 = 7384.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Hours found with `s / 3600` (value 2) |
| 1 | `s %= 3600;` leaves 184, **after** the hours were taken |
| 1 | Minutes found with `s / 60` (value 3) |
| 1 | `s %= 60;` leaves 4 |
| 1 | Final values 2, 3, 4 (order of statements preserved) |
</details>

## Question 9 (a quiet conversion · stretch)

A programmer writes the following. The code compiles.

```java
int n = 5;
n *= 1.5;
System.out.println(n);
```

(a) State what is printed.

(b) Explain why this compiles, although `1.5` is a `double`, while the statement `n = n * 1.5;` in the same place would not.

(c) The programmer wanted `n` to hold 7.5. What should the type of `n` be?

<details>
<summary>Worked solution</summary>

**(a)** `7` is printed. The product 5 * 1.5 is 7.5, and it is converted to an `int` as it is stored, which truncates the fraction.

**(b)** A compound assignment converts the result of the operation back to the type of the variable on the left, so a `double` result stored in an `int` variable is allowed. In the ordinary form `n = n * 1.5;`, the right side is a `double` and the compiler rejects storing a `double` in an `int` (it reports a possible lossy conversion).

**(c)** `n` should be a `double`, declared as `double n = 5;`; then `n *= 1.5;` leaves 7.5.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Output 7 |
| 1 | Notes that 7.5 is truncated (not rounded) when stored |
| 1 | Explains that the compound form stores the result back in the variable's type, while the plain form needs a cast |
| 1 | Says `n` should be a `double` |
</details>

## How did you do?

- **Questions 1 to 3:** re-read "Updating a variable from its own value" in the [study guide](/advanced-course-resources/computer-science-a/1-6-compound-assignment-study-guide/).
- **Questions 2 and 5:** these test the idea that the whole right side is evaluated first.
- **Questions 4 and 6:** the variable's type decides whether `/=` is an integer division.
- **Questions 7 and 8:** practise tracing with a table, one row per statement.
- **Question 9:** revisit "A detail to notice".

Then try the [checklist](/advanced-course-resources/computer-science-a/1-6-compound-assignment-checklist/).
