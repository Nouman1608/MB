---
resourceId: "mb-ap-csa-1.5-practice"
title: "Casting and Range of Variables: Practice Questions (Computer Science A 1.5)"
description: "Ten original Marlbridge practice questions on casting with (int) and (double), rounding, integer overflow and round-off error, with full explanations and rubrics."
course: "computer-science-a"
unit: 1
topics: ["1.5"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.5 study guide"]
learningObjectives: ["Evaluate expressions containing casts, taking precedence into account", "Round doubles to the nearest int with a cast", "Recognise integer overflow and round-off error and describe their effects", "Write expressions that keep a fractional part where it is needed"]
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.5-study-guide", "mb-ap-csa-1.5-revision-notes", "mb-ap-csa-1.5-checklist"]
next: "mb-ap-csa-1.5-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 6 are multiple choice; 7 to 10 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
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

What is displayed by `System.out.println((int) 7.9);`?

- (A) `8`
- (B) `7.0`
- (C) `7`
- (D) `7.9`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Casting a `double` to an `int` truncates: the digits to the right of the decimal point are dropped.

- (A) rounds to the nearest integer, which a cast never does.
- (B) forgets that the cast gives an `int`, which prints without a decimal point.
- (D) ignores the cast altogether.
</details>

## Question 2 (multiple choice · foundation)

What is displayed by the following statements?

```java
System.out.println((double) 9 / 4);
System.out.println((double) (9 / 4));
```

- (A) `2.25` then `2.25`
- (B) `2.0` then `2.25`
- (C) `2` then `2`
- (D) `2.25` then `2.0`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** In the first statement the cast applies to 9 alone, giving 9.0, so the division is 9.0 / 4 = 2.25. In the second, the brackets force `9 / 4` to be worked out first as integer division (2); the result is then converted to 2.0.

- (A) assumes both casts have the same effect, forgetting the effect of the brackets.
- (B) has the two results in the wrong order.
- (C) forgets that a `double` prints with a decimal point.
</details>

## Question 3 (multiple choice · core)

Which expression rounds the **negative** `double` variable `x`, which holds -3.6, to the nearest `int`?

- (A) `(int) x`
- (B) `(int) (x - 0.5)`
- (C) `(int) (x + 0.5)`
- (D) `(int) x + 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `x - 0.5` is -4.1 and truncating toward zero gives -4, the nearest integer to -3.6.

- (A) truncates to -3, which is not the nearest integer.
- (C) is the formula for non-negative numbers. Here it gives `(int) (-3.1)`, which is -3.
- (D) is -3 + 1 = -2, which is further away.
</details>

## Question 4 (multiple choice · core)

What is the value of `Integer.MAX_VALUE + 1`?

- (A) `2147483648`
- (B) `Integer.MIN_VALUE`
- (C) The statement throws an `ArithmeticException`
- (D) The statement does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The sum is outside the range of `int`, so an integer overflow occurs. The result is an `int` within the allowed range: here it wraps around to the smallest value, `Integer.MIN_VALUE`.

- (A) is not a legal `int`; an `int` can never hold a value above `Integer.MAX_VALUE`.
- (C) is wrong: overflow does not throw an exception. `ArithmeticException` is for integer division by zero.
- (D) is wrong: the code compiles, and the overflow happens silently at run time.
</details>

## Question 5 (multiple choice · core)

A student prints the result of adding 0.1 and 0.2 as `double` values and is surprised by the output. Which output is most likely?

- (A) `0.3`
- (B) `0.30`
- (C) A compile-time error
- (D) `0.30000000000000004`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Values such as 0.1 and 0.2 cannot be stored exactly in a `double`, so the sum is rounded to the nearest representable value. That is a round-off error.

- (A) is the mathematically exact answer, which a `double` cannot always give.
- (B) is wrong because Java does not print trailing zeros in that style.
- (C) is wrong: adding two `double` values is perfectly legal.
</details>

## Question 6 (multiple choice · core)

What value is stored in `r`?

```java
double r = (double) (7 / 2) * 2;
```

- (A) `6.0`
- (B) `7.0`
- (C) `6`
- (D) `7`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Inside the brackets, `7 / 2` is integer division: 3. The cast turns it into 3.0, and `3.0 * 2` is 6.0.

- (B) would result from `(double) 7 / 2 * 2` (3.5 * 2), where the cast applies to 7 only.
- (C) and (D) are `int` values; `r` is a `double`, so it holds 6.0.
</details>

## Question 7 (percentages · core)

A quiz has 16 questions and a student answers 13 correctly. The variables `int correct = 13;` and `int total = 16;` are declared.

(a) Write one statement that stores the exact percentage correct in a `double` variable `percent`. State its value.

(b) Write one statement that stores the percentage rounded to the nearest whole number in an `int` variable `rounded`. State its value.

(c) A student writes `double percent = correct / total * 100;`. State the value stored and explain the error.

<details>
<summary>Worked solution</summary>

**(a)** `double percent = 100.0 * correct / total;` The `100.0` makes the arithmetic `double` from the start: 100.0 * 13 is 1300.0 and 1300.0 / 16 is **81.25**.

**(b)** `int rounded = (int) (100.0 * correct / total + 0.5);` The value in brackets is 81.25 + 0.5 = 81.75, and truncating gives **81**.

**(c)** `correct / total` is integer division: 13 / 16 is 0, then `0 * 100` is 0, and the value stored is **0.0**. The fraction was thrown away before the multiplication.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) An expression that avoids integer division (a `double` operand or a cast placed correctly) |
| 1 | (a) Value 81.25 |
| 1 | (b) Adds 0.5 and casts to `int` |
| 1 | (b) Value 81 |
| 1 | (c) 0.0, with the reason that `13 / 16` is an integer division giving 0 |
</details>

## Question 8 (overflow · core)

An `int` variable `a` holds 2000000000. A programmer writes `int b = a + a;`.

(a) Explain why the true sum cannot be stored in `b`.

(b) State what happens when the statement executes: is there a compile-time error, an exception, or neither?

(c) Does the value stored in `b` equal 4000000000? What can you say about its value?

<details>
<summary>Worked solution</summary>

**(a)** The true sum is 4,000,000,000. An `int` is stored in 4 bytes, so its largest value is `Integer.MAX_VALUE`, 2,147,483,647. The sum is larger, so it is out of range.

**(b)** Neither. The code compiles (both operands and the result are `int` values) and no exception is thrown at run time. An integer overflow occurs.

**(c)** No. The result is an `int` value in the allowed range but not the value expected. (For reference, it is -294967296, but you are not expected to calculate that by hand.) The program continues with a wrong value and gives no warning.

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | Identifies that 4,000,000,000 exceeds `Integer.MAX_VALUE` |
| 1 | States that there is no compile-time error and no exception |
| 1 | Names the effect as integer overflow |
| 1 | States that `b` is an in-range value that is not 4000000000 (accept a negative value) |
</details>

## Question 9 (fixing cast bugs · stretch)

For each segment, state the value stored in `avg`, say what is wrong, and rewrite the statement so that `avg` is the exact average of the `int` variables `sum` and `count`. In both segments `sum` is 9 and `count` is 2.

(a) `double avg = (double) (sum / count);`

(b) `double avg = sum / count;`

<details>
<summary>Worked solution</summary>

**(a)** `sum / count` is evaluated first, as integer division: 9 / 2 is 4. The cast then makes it 4.0. So `avg` holds **4.0**, not 4.5. Fix: `double avg = (double) sum / count;` so the cast converts `sum` before the division, and `avg` holds 4.5.

**(b)** Integer division gives 4, and 4 is widened to 4.0 when stored. `avg` holds **4.0**. Fix: `double avg = (double) sum / count;` (or `sum / (double) count`, or `1.0 * sum / count`).

**Suggested Marlbridge rubric (4 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) value 4.0 |
| 1 | (a) explains that the cast comes after the integer division, and gives a correct fix |
| 1 | (b) value 4.0, with the reason that both operands are `int` |
| 1 | (b) a correct fix that gives 4.5 |
</details>

## Question 10 (tracing casts · stretch)

Complete the table with the value of each expression. Show the working that decides each one.

| Expression | Value |
|---|---|
| `(int) 4.99` | |
| `(int) -0.5` | |
| `(int) (2.5 * 2)` | |
| `(int) 2.5 * 2` | |
| `(int) (7 / 2.0)` | |
| `(double) 7 / 2` | |
| `(double) (7 / 2)` | |

<details>
<summary>Worked solution</summary>

| Expression | Value | Working |
|---|---|---|
| `(int) 4.99` | `4` | truncation |
| `(int) -0.5` | `0` | truncation toward zero |
| `(int) (2.5 * 2)` | `5` | bracket first: 5.0, then the cast |
| `(int) 2.5 * 2` | `4` | cast on 2.5 gives 2, then 2 * 2 |
| `(int) (7 / 2.0)` | `3` | 7 / 2.0 is 3.5, truncated |
| `(double) 7 / 2` | `3.5` | cast on 7 first |
| `(double) (7 / 2)` | `3.0` | integer division first, giving 3 |

**Suggested Marlbridge rubric (7 marks):** one mark for each correct value (the values must be shown in the correct form: `3.5` and `3.0` with decimal points, the others without).
</details>

## How did you do?

- **Questions 1 to 3:** re-read "Changing a value from one type to another" in the [study guide](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/), then practise the two rounding formulas.
- **Questions 2, 6, 9 and 10:** these test where the cast goes. Mark each cast's reach with a bracket.
- **Questions 4 and 8:** revisit "The range of int".
- **Question 5:** revisit "Round-off error in double".
- **Question 7:** practise writing percentage and average expressions on other numbers.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-5-casting-range-checklist/).
