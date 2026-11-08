---
resourceId: "mb-ap-csa-u2-diagnostic"
title: "Selection and Iteration: Unit Diagnostic (Computer Science A Unit 2)"
description: "A 30-minute check with at least one short question per topic of Unit 2, from algorithms and Boolean expressions to loops and run-time counts, showing which topics to revisit."
course: "computer-science-a"
unit: 2
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 2.1 to 2.12"
learningObjectives:
  - "Find out which Unit 2 topics are secure and which need more work"
  - "Practise short tracing, Boolean-logic and code-writing questions on selection and iteration"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["1", "2", "3", "4"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-u2-review"]
next: "mb-ap-csa-u2-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Fifteen short questions: at least one for each of the 12 topics in Unit 2."
  - "Thirteen are multiple choice; two ask for short written Java."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Use this diagnostic to find **which Unit 2 topics to revisit**: one short question per topic, with two for Topic 2.6.

These are **original Marlbridge practice questions**, not past exam questions. The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow 30 minutes and answer every question before you open any answer. No calculator. Assume every code segment compiles unless a question says otherwise. Use only the String methods length, substring, indexOf, equals and compareTo.

## Question 1 (multiple choice · 2.1)

An algorithm says: "Repeat for each of six doors: if the door is unlocked, lock it." Which statement describes how the building blocks are arranged?

- (A) A repetition inside a selection
- (B) A selection inside a repetition
- (C) Sequencing only
- (D) Two separate selections

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The "repeat for each door" is the repetition, and the decision "if the door is unlocked" is asked on every pass, so the selection is inside the repetition.

- (A) would mean one decision is made first and the repeat only happens if it is true.
- (C) ignores the repeat and the decision.
- (D) ignores the repeat.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-study-guide/).
</details>

## Question 2 (multiple choice · 2.2)

Let `a = 14` and `b = 4`. Which expression is true?

- (A) `a / b > 3.5`
- (B) `a % b == 2`
- (C) `a / b == 3.5`
- (D) `a - b * 3 > 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 14 % 4 is 2, so `2 == 2` is true.

- (A) `a / b` is int division: 14 / 4 = 3, and 3 > 3.5 is false.
- (C) 3 == 3.5 is false.
- (D) 14 - 4 * 3 = 2, and 2 > 3 is false.

**If you missed this:** [Topic 2.2 study guide](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-study-guide/).
</details>

## Question 3 (multiple choice · 2.3)

What is printed?

```java
int x = 5;
if (x > 3) {
    x = x * 2;
}
if (x > 8) {
    x = x - 7;
}
System.out.println(x);
```

- (A) 3
- (B) 5
- (C) 10
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The first `if` is true, so `x` becomes 10. The second condition is tested on the new value: 10 > 8 is true, so `x` becomes 3.

- (B) assumes neither body runs.
- (C) forgets the second `if`.
- (D) treats the second `if` as an `else`.

**If you missed this:** [Topic 2.3 study guide](/advanced-course-resources/computer-science-a/2-3-if-statements-study-guide/).
</details>

## Question 4 (multiple choice · 2.4)

What is printed?

```java
int n = 10;
String r;
if (n > 20) {
    r = "A";
} else if (n > 10) {
    r = "B";
} else if (n > 5) {
    r = "C";
} else {
    r = "D";
}
System.out.println(r);
```

- (A) B
- (B) C
- (C) D
- (D) A

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `10 > 20` false; `10 > 10` false (the boundary is not included); `10 > 5` true, so `r` is "C".

- (A) treats `n > 10` as `n >= 10`.
- (C) skips the third test.
- (D) assumes the first condition is true.

**If you missed this:** [Topic 2.4 study guide](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-study-guide/).
</details>

## Question 5 (multiple choice · 2.5)

What is the value of `r`?

```java
int a = 3;
int b = 0;
boolean r = b != 0 && a / b > 1 || a > 2;
System.out.println(r);
```

- (A) false
- (B) true
- (C) The program throws an ArithmeticException.
- (D) The program does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `&&` is evaluated before `||`. `b != 0` is false, so the division is skipped by short-circuit evaluation. That leaves `false || a > 2`, which is `false || true`: true.

- (A) ignores the right side of the `||`.
- (C) assumes the division is evaluated.
- (D) is wrong: the code is valid.

**If you missed this:** [Topic 2.5 study guide](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-study-guide/).
</details>

## Question 6 (multiple choice · 2.6)

Which expression is equivalent to `!(x < 5 || y >= 8)`?

- (A) `x >= 5 || y < 8`
- (B) `x > 5 && y <= 8`
- (C) `x >= 5 && y < 8`
- (D) `x < 5 && y >= 8`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** De Morgan's law turns `||` into `&&` and negates each part: `!(x < 5)` is `x >= 5`, and `!(y >= 8)` is `y < 8`.

- (A) keeps the `||`.
- (B) uses the wrong complements (`>` and `<=` lose the boundary values).
- (D) negates nothing.

**If you missed this:** [Topic 2.6 study guide](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-study-guide/).
</details>

## Question 7 (multiple choice · 2.6)

What is printed?

```java
String a = new String("hi");
String b = a;
String c = new String("hi");
System.out.println((a == b) + " " + (a == c) + " " + a.equals(c));
```

- (A) true true true
- (B) true false true
- (C) false false true
- (D) true false false

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `b = a` copies the reference, so `a == b` is true. `c` is a separate object, so `a == c` is false, but the characters are the same, so `a.equals(c)` is true.

- (A) treats `a == c` as a content comparison.
- (C) says that a copied reference is a different object.
- (D) says that equals is false for identical text.

**If you missed this:** [Topic 2.6 study guide](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-study-guide/), section "Comparing object references".
</details>

## Question 8 (multiple choice · 2.7)

What is printed?

```java
int n = 1;
int steps = 0;
while (n < 50) {
    n = n * 3;
    steps++;
}
System.out.println(n + " " + steps);
```

- (A) 27 3
- (B) 81 4
- (C) 81 5
- (D) 243 5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `n` goes 1, 3, 9, 27, 81. The body runs while `n` is 1, 3, 9 and 27, which is 4 times, and then `81 < 50` is false.

- (A) stops before the pass that produces 81.
- (C) counts the final test as an iteration.
- (D) continues too far.

**If you missed this:** [Topic 2.7 study guide](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/).
</details>

## Question 9 (multiple choice · 2.8)

How many times does the body of this loop run?

```java
for (int i = 4; i <= 30; i += 5) {
    System.out.print("*");
}
```

- (A) 5
- (B) 6
- (C) 7
- (D) 26

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `i` takes the values 4, 9, 14, 19, 24 and 29; the next value, 34, fails the test. That is 6 iterations.

- (A) stops at 24.
- (C) counts the failing test.
- (D) is the difference 30 - 4.

**If you missed this:** [Topic 2.8 study guide](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/).
</details>

## Question 10 (multiple choice · 2.9)

What is printed?

```java
int n = 5280;
int count = 0;
while (n > 0) {
    if (n % 10 > 1) {
        count++;
    }
    n = n / 10;
}
System.out.println(count);
```

- (A) 2
- (B) 3
- (C) 4
- (D) 15

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The digits are 0, 8, 2 and 5 (last first). Those greater than 1 are 8, 2 and 5: 3 digits.

- (A) misses one of them.
- (C) counts every digit, including 0.
- (D) is the sum of the digits 8 + 2 + 5, not the count.

**If you missed this:** [Topic 2.9 study guide](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-study-guide/).
</details>

## Question 11 (multiple choice · 2.10)

What is printed?

```java
String s = "mississippi";
int count = 0;
for (int i = 0; i <= s.length() - 2; i++) {
    if (s.substring(i, i + 2).equals("ss")) {
        count++;
    }
}
System.out.println(count);
```

- (A) 2
- (B) 4
- (C) 1
- (D) The code throws an exception.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** "mississippi" has "ss" starting at index 2 and at index 5, so 2 windows match. The loop stops at `i = length - 2`, so no window runs past the end.

- (B) is the number of letter s in the word, not the number of "ss" windows.
- (C) misses one occurrence.
- (D) would happen with `i < s.length()`, but the bound here is correct.

**If you missed this:** [Topic 2.10 study guide](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-study-guide/).
</details>

## Question 12 (multiple choice · 2.11)

What is the value of `count`?

```java
int count = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        if (i != j) {
            count++;
        }
    }
}
```

- (A) 12
- (B) 9
- (C) 7
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** There are 3 x 4 = 12 pairs `(i, j)`. The pairs with `i == j` are (0,0), (1,1) and (2,2): 3 pairs. So 12 - 3 = 9 pairs pass the test.

- (A) forgets the `if`.
- (C) subtracts 5.
- (D) counts only the pairs that fail the test.

**If you missed this:** [Topic 2.11 study guide](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/).
</details>

## Question 13 (multiple choice · 2.12)

For `n = 6`, how many times does `c++` execute?

```java
int c = 0;
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        c++;
    }
}
```

- (A) 15
- (B) 21
- (C) 30
- (D) 36

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The inner loop runs 6, 5, 4, 3, 2 and 1 times as `i` goes from 0 to 5: 6 + 5 + 4 + 3 + 2 + 1 = 21 = 6 x 7 / 2.

- (A) is 5 + 4 + 3 + 2 + 1, which would be the count if the inner loop started at `i + 1`.
- (C) is 6 x 5, which treats the inner loop as running 5 times each.
- (D) is 6 x 6, which ignores the dependence on `i`.

**If you missed this:** [Topic 2.12 study guide](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-study-guide/), with [Topic 2.11](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/) for nested bounds.
</details>

## Question 14 (short answer · 2.3 and 2.4)

Write a method `category(int age)` that returns the String "child" for ages below 13, "teen" for ages 13 to 19 inclusive, and "adult" for any other age. Use an if-else-if chain. (4 marks)

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static String category(int age) {
    if (age < 13) {
        return "child";
    } else if (age <= 19) {
        return "teen";
    } else {
        return "adult";
    }
}
```

The second condition does not need to repeat `age >= 13`, because it is only reached when `age < 13` was false.

**Suggested Marlbridge rubric (4 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Correct header with a `String` return type |
| 1 | "child" for `age < 13` (boundary 13 excluded) |
| 1 | "teen" up to and including 19 |
| 1 | "adult" in the final `else` and every path returns a value |

**If you missed this:** [Topic 2.4 study guide](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-study-guide/) and [Topic 2.3 study guide](/advanced-course-resources/computer-science-a/2-3-if-statements-study-guide/).
</details>

## Question 15 (short answer · 2.7, 2.8 and 2.9)

(a) Trace the loop and state what is printed. (2 marks)

```java
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 1) {
        total = total + i;
    } else {
        total = total - 1;
    }
}
System.out.println(total);
```

(b) Rewrite the loop as an equivalent `while` loop. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)**

| `i` | `i % 2 == 1`? | `total` after |
|---|---|---|
| 1 | true | 1 |
| 2 | false | 0 |
| 3 | true | 3 |
| 4 | false | 2 |
| 5 | true | 7 |

The output is **7**.

**(b)**

```java
int total = 0;
int i = 1;
while (i <= 5) {
    if (i % 2 == 1) {
        total = total + i;
    } else {
        total = total - 1;
    }
    i++;
}
System.out.println(total);
```

**Suggested Marlbridge rubric (4 marks).** 1 mark for a correct trace table (the decisions and the `total` column); 1 mark for 7; 1 mark for the initialization before the `while` and the same condition; 1 mark for the update `i++` as the last statement in the body.

**If you missed this:** [Topic 2.8 study guide](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/) and [Topic 2.7 study guide](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/).
</details>

## What next?

Make a list of the topics for which you missed a question. Read those study guides, work through the matching practice questions, and then try the [Unit 2 review](/advanced-course-resources/computer-science-a/unit-2-review/), which mixes topics together.
