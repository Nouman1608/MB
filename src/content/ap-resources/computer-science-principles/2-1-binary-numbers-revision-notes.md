---
resourceId: "mb-ap-csp-2.1-revision-notes"
title: "Binary Numbers: Revision Notes (Computer Science Principles 2.1)"
description: "One-page recap of bits and bytes, binary place values, conversion methods, the 2 to the n rule, analog versus digital data, overflow and round-off."
course: "computer-science-principles"
unit: 2
topics: ["2.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-2.1-study-guide"]
learningObjectives: 
  - "Recall the key ideas of binary numbers without notes"
  - "Spot the common errors before making them"
skills: ["1", "3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.1-study-guide", "mb-ap-csp-2.1-practice", "mb-ap-csp-2.1-checklist"]
next: "mb-ap-csp-2.1-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A bit is a binary digit (0 or 1); a byte is 8 bits; every digital value is built from bits."
  - "In binary, each place is worth a power of 2: 1, 2, 4, 8, 16 and so on, from the right."
  - "n bits can represent 2 to the power n different values, so each extra bit doubles the number of values."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/).

## Recap

- A **bit** is a binary digit, 0 or 1. A **byte** is 8 bits.
- Computers use **abstraction**: groups of bits represent numbers, characters, colours and more.
- **Place values** in binary, from the right: 1, 2, 4, 8, 16, 32, 64, 128, and so on.
- **n bits** can represent **2 to the power n** different values; each extra bit doubles the count.
- The **same bits** can mean different things in different contexts.
- **Analog** data change smoothly; **digital** data are discrete. **Sampling** measures analog data at regular intervals to approximate it.
- A fixed number of bits limits whole-number range (**overflow**) and the precision of real numbers (**round-off**).

## Key relationships

| Idea | How to do it |
|---|---|
| Binary to decimal | Add the place values above each 1 |
| Decimal to binary | Greedy largest place value first, or divide by 2 and read remainders from last to first |
| Values with n bits | 2 to the power n; the largest non-negative whole number is 2 to the power n, minus 1 |
| Bits needed for k values | The smallest n with 2 to the power n at least k |
| Compare binary numbers | The first place from the left where they differ decides; more digits (no leading zeros) means larger |
| Better analog approximation | More samples per second and more bits per sample |

## Assumptions and conventions

- Binary numbers in these resources are non-negative whole numbers, with the left-most bit the largest place value.
- Powers of 2 to know: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.
- Leading zeros do not change a value.

## Mistakes to avoid

1. Reading a binary number as if it were decimal.
2. Mixing up place-value order (the left-most bit is the largest place).
3. Saying n bits give n values.
4. Forgetting that the largest value with n bits is one less than 2 to the power n (the count starts at 0).
5. Confusing overflow with round-off.
6. Treating sampled data as exact.

## Two quick worked examples

**1.** Convert 100110 to decimal: the 1s are at 32, 4 and 2, so the value is 32 + 4 + 2 = 38. Check by converting back: 38 - 32 = 6; 6 - 4 = 2; 2 - 2 = 0, giving 100110.

**2.** A game needs 200 different character codes. Seven bits give 128 patterns (too few); eight bits give 256 (enough), so **8 bits** are needed, and 56 patterns are unused.

## A revision routine

Write the place values 128, 64, 32, 16, 8, 4, 2, 1 from memory, then convert three binary numbers to decimal and three decimal numbers to binary. Check each by converting back. Finish by working out the bits needed for 50, 100 and 300 different values.

## Quick self-check

1. Convert 1101 to decimal. *(8 + 4 + 0 + 1 = 13)*
2. How many bits are needed to give 40 different patterns? *(6 bits: 32 is too few, 64 is enough)*
3. What is 10 in decimal as binary? *(1010)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-practice/).
