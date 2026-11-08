---
resourceId: "mb-ap-csa-2.9-practice"
title: "Implementing Selection and Iteration Algorithms: Practice Questions (Computer Science A 2.9)"
description: "10 original Marlbridge practice questions on standard algorithms that combine selection and iteration, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.9"]
resourceType: "practice-questions"
prerequisites:
  - "while and for loops (Topics 2.7 and 2.8)"
  - "if statements and compound conditions (Topics 2.3 to 2.5)"
prerequisiteResources: ["mb-ap-csa-2.9-study-guide"]
learningObjectives:
  - "Write loops that test divisibility, extract the digits of an integer, count items that meet a criterion, find a minimum or maximum, and compute a sum or average"
  - "Choose a correct starting value for each kind of accumulator"
  - "Trace an algorithm by hand and describe what it computes"
  - "Spot the common faults: integer division in an average, a bad initial minimum, and an accumulator reset inside the loop"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.9-study-guide", "mb-ap-csa-2.9-revision-notes", "mb-ap-csa-2.9-checklist"]
next: "mb-ap-csa-2.9-checklist"
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

What is printed?

```java
int n = 7305;
int sum = 0;
while (n > 0) {
    sum = sum + n % 10;
    n = n / 10;
}
System.out.println(sum);
```

- (A) 5
- (B) 15
- (C) 7305
- (D) 12

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The loop adds the digits 5, 0, 3 and 7: 5 + 0 + 3 + 7 = 15.

- (A) is only the first (last) digit.
- (C) is the original number.
- (D) leaves out the digit 3, or confuses the digits.
</details>

## Question 2 (multiple choice · core)

How many values does `count` hold at the end?

```java
int count = 0;
for (int d = 1; d <= 20; d++) {
    if (20 % d == 0) {
        count++;
    }
}
```

- (A) 4
- (B) 5
- (C) 6
- (D) 20

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The divisors of 20 are 1, 2, 4, 5, 10 and 20: 6 values.

- (A) forgets 1 and 20 (or counts only the proper divisors 2, 4, 5, 10).
- (B) forgets one of the divisors, usually 20 itself.
- (D) counts every iteration of the loop.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
int total = 0;
int count = 0;
for (int i = 1; i <= 4; i++) {
    total = total + i * 2;
    count++;
}
System.out.println(total / count);
```

- (A) 5
- (B) 5.0
- (C) 20
- (D) 2.5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `total` = 2 + 4 + 6 + 8 = 20 and `count` = 4. Both are `int`, so `20 / 4` is the int 5, and `5` is printed.

- (B) would need a double result and would print `5.0`. Here both operands are ints.
- (C) is the total, not the average.
- (D) is 10 / 4, using the wrong total.
</details>

## Question 4 (multiple choice · core)

A programmer wants the **smallest** digit of a positive integer `n`. For which initial value of `smallest` does the code give the wrong answer when `n` is 253?

```java
int smallest = /* initial value */;
while (n > 0) {
    if (n % 10 < smallest) {
        smallest = n % 10;
    }
    n = n / 10;
}
```

- (A) 0
- (B) 9
- (C) 10
- (D) `Integer.MAX_VALUE`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The digits of 253 are 3, 5 and 2, none of which is below 0, so the test `n % 10 < smallest` is never true and `smallest` stays 0, which is not a digit of 253. The right answer is 2.

- (B) 9 is at least as large as every digit, so the first digit 3 replaces it, then 2 replaces 3: the result is 2, correct.
- (C) 10 is larger than every digit, so the result is 2, correct.
- (D) `Integer.MAX_VALUE` is larger than every digit, so the result is 2, correct.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
int n = 2150;
int rev = 0;
while (n > 0) {
    rev = rev * 10 + n % 10;
    n = n / 10;
}
System.out.println(rev);
```

- (A) 512
- (B) 0512
- (C) 5120
- (D) 2150

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The digits come off as 0, 5, 1, 2. `rev` becomes 0, then 5, then 51, then 512. The leading zero of the reversed number is lost.

- (B) shows a leading zero, which an `int` cannot hold.
- (C) is the reverse of 215, not 2150.
- (D) is the original number.
</details>

## Question 6 (multiple choice · stretch)

What is printed?

```java
int sum = 0;
for (int i = 1; i <= 5; i++) {
    int term = 0;
    term = term + i;
    sum = term;
}
System.out.println(sum);
```

- (A) 15
- (B) 5
- (C) 1
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `term` is reset to 0 on every pass and `sum = term` replaces the previous total, so after the last pass `sum` is just the last value of `i`.

- (A) is what a correct accumulation gives (`sum = sum + i`), but this code does not accumulate.
- (C) is the first value.
- (D) would need the loop not to run.
</details>

## Question 7 (constructed response · core)

Write a method `countEvenDigits(int n)` that returns the number of even digits in the positive integer `n`. The digit 0 counts as even. (5 marks)

Then give the value of `countEvenDigits(40672)`. (1 mark)

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static int countEvenDigits(int n) {
    int count = 0;
    while (n > 0) {
        int digit = n % 10;
        if (digit % 2 == 0) {
            count++;
        }
        n = n / 10;
    }
    return count;
}
```

For 40672 the digits are 2, 7, 6, 0, 4; the even ones are 2, 6, 0 and 4: **4**.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Counter initialised to 0 before the loop |
| 1 | Loop condition `n > 0` (visits every digit) |
| 1 | Extracts the last digit with `n % 10` |
| 1 | Tests whether the digit is even and increments the counter only then |
| 1 | Removes the digit with `n / 10` and returns the count after the loop |
| 1 | Correct value 4 |
</details>

## Question 8 (constructed response · core)

The following method is intended to return the average of the whole numbers from `lo` to `hi` inclusive (assume `lo <= hi`).

```java
public static double average(int lo, int hi) {
    int sum = 0;
    int count = 0;
    for (int i = lo; i <= hi; i++) {
        sum += i;
        count++;
    }
    return sum / count;
}
```

(a) State the value returned by `average(1, 4)`, and what it should be. (2 marks)

(b) Explain the fault. (1 mark)

(c) Give the corrected return statement. (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** `sum` = 10 and `count` = 4, so `sum / count` is the int division 10 / 4 = 2, and the method returns 2.0. It should return 2.5.

**(b)** Both `sum` and `count` are `int`, so the division is integer division and the fractional part is discarded before the result is converted to `double` for the return.

**(c)** `return (double) sum / count;`

**Suggested Marlbridge rubric (4 marks).** 1 mark for each of: 2.0 returned; 2.5 expected; integer division identified as the fault; the cast placed on an operand (not around the whole quotient: `(double) (sum / count)` is still wrong).
</details>

## Question 9 (constructed response · core)

Write a method `smallestDivisor(int n)` that returns the smallest divisor of `n` that is greater than 1, for `n >= 2`. Use a loop. (4 marks) Then give `smallestDivisor(35)` and `smallestDivisor(13)`. (2 marks)

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static int smallestDivisor(int n) {
    for (int d = 2; d < n; d++) {
        if (n % d == 0) {
            return d;
        }
    }
    return n;
}
```

`smallestDivisor(35)`: 2 does not divide 35, 3 does not, 4 does not, 5 does, so **5**. `smallestDivisor(13)`: no value from 2 to 12 divides 13, so the loop ends and the method returns 13 itself, **13**.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Loop starting at 2 |
| 1 | Test `n % d == 0` |
| 1 | Returns `d` as soon as the first divisor is found |
| 1 | Handles the no-divisor case by returning `n` (a prime) after the loop |
| 1 | 5 |
| 1 | 13 |

Accept a version with `d <= n` in the loop and no final return after it, provided every path returns.
</details>

## Question 10 (constructed response · stretch)

A loop must find the **largest** multiple of 7 that is less than 100 and whose digits add up to an even number.

```java
int best = 0;
for (int n = 7; n < 100; n += 7) {
    int sum = n % 10 + n / 10;
    if (sum % 2 == 0) {
        best = n;
    }
}
System.out.println(best);
```

(a) Explain why this code finds the largest such number even though it never compares values with `>`. (2 marks)

(b) Trace the last five iterations, `n` = 63, 70, 77, 84, 91, showing the digit sum and whether `best` changes. (4 marks)

(c) What is printed? (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** `n` increases on every pass, so each qualifying value is larger than the previous one. Overwriting `best` each time a number qualifies means that the last number to qualify, which is also the largest, is the one left in `best`. The loop only needs to remember the most recent qualifying value.

**(b)**

| `n` | digits | digit sum | even? | `best` after |
|---|---|---|---|---|
| 63 | 6, 3 | 9 | no | unchanged (still 42) |
| 70 | 7, 0 | 7 | no | unchanged (still 42) |
| 77 | 7, 7 | 14 | yes | 77 |
| 84 | 8, 4 | 12 | yes | 84 |
| 91 | 9, 1 | 10 | yes | 91 |

**(c)** The loop ends after `n` = 98 (the next multiple, 105, is not less than 100): 98 has digit sum 17 (odd), so `best` stays 91. The program prints **91**.

**Suggested Marlbridge rubric (7 marks).** 2 marks for (a) (ascending order, last qualifying value kept); 4 marks for (b) (1 per correct row of digit sum and decision, with the unchanged rows for 63 and 70 counting as one mark together); 1 mark for 91.
</details>

## How did you do?

Questions 1, 2, 3 and 5 test the standard algorithms. If you missed Question 1 or 5, revisit "The digits of an integer" in the [study guide](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-study-guide/). If you missed Question 3 or 8, review "Frequency, minimum, maximum, sum and average". If you missed Question 4 or 6, review "Worked example 2" (choosing the right start value). Then use the [checklist](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-checklist/).
