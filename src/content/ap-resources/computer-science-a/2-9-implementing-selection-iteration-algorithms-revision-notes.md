---
resourceId: "mb-ap-csa-2.9-revision-notes"
title: "Implementing Selection and Iteration Algorithms: Revision Notes (Computer Science A 2.9)"
description: "One-page recap of standard algorithms that combine selection and iteration: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.9-study-guide"]
learningObjectives:
  - "Write loops that test divisibility, extract the digits of an integer, count items that meet a criterion, find a minimum or maximum, and compute a sum or average"
  - "Choose a correct starting value for each kind of accumulator"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.9-study-guide", "mb-ap-csa-2.9-practice", "mb-ap-csa-2.9-checklist"]
next: "mb-ap-csa-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Five standard algorithms need no data structures: divisibility, digits, frequency, minimum or maximum, and sum or average."
  - "n % d == 0 tests whether d divides n; n % 10 is the last digit and n / 10 removes it."
  - "A counter starts at 0, a sum starts at 0, a product starts at 1, and a minimum or maximum starts at the first value or an extreme."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

Selection and iteration combine in five standard algorithms that need no data structures.

| Algorithm | Key code |
|---|---|
| Divisibility | `n % d == 0` |
| Last digit and the rest | `n % 10` and `n / 10` |
| Frequency (count) | `if (criterion) { count++; }` |
| Minimum / maximum | `if (v < min) { min = v; }` / `if (v > max) { max = v; }` |
| Sum / average | `sum += v;` then `(double) sum / count` |

## Key relationships

| Idea | Rule |
|---|---|
| Start values | count and sum 0; product 1; min `Integer.MAX_VALUE` (or first value); max `Integer.MIN_VALUE` (or first value) |
| Where accumulators live | declared before the loop, updated in it, used after it |
| Digit loop | `while (n > 0) { digit = n % 10; ... n = n / 10; }` |
| Reverse a number | `rev = rev * 10 + n % 10;` inside the digit loop |
| Average | cast first: `(double) sum / count` |
| Prime check | false if `n < 2`; false if any `d` from 2 to n - 1 divides n |

## Assumptions

- The integer is positive (a negative or zero `n` skips the digit loop).
- The data set is not empty when computing an average.
- Integer arithmetic truncates; a double is needed for fractions.

## Mistakes to avoid

- Starting a minimum at 0 (or a maximum at a value that can be beaten by the data).
- Dividing two ints and expecting a fractional average.
- Resetting the accumulator inside the loop.
- Using `n / 10` where `n % 10` is meant, or the reverse.
- Forgetting that a method parameter is a copy, so changing it does not change the argument.
- Testing the divisor loop with the wrong upper bound.

## Worked mini-example

Count how many numbers from 1 to 30 are divisible by both 3 and 5.

```java
int count = 0;
for (int i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        count++;
    }
}
```

The numbers divisible by both are the multiples of 15 up to 30: 15 and 30, so `count` is 2. The loop is the counting pattern, with a compound criterion. The accumulator `count` is declared before the loop and used after it. To also add up those numbers you would add `sum += i;` inside the `if` (a sum of 45).

## Quick self-check

1. What is `7305 % 10`, and what is `7305 / 10`? *Answer: 5 and 730.*
2. What should a running product start at? *Answer: 1.*
3. What does `int s = 7; int c = 2; System.out.println(s / c);` print? *Answer: 3, because int division truncates; `(double) s / c` gives 3.5.*
4. Why start a maximum at `Integer.MIN_VALUE`? *Answer: so that the first value is guaranteed to replace it, even if every value is negative.*

Full explanations and diagrams are in the [Topic 2.9 study guide](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-study-guide/).
