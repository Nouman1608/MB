---
title: "AQA A-Level Computer Science (7517): Number systems"
seoTitle: "AQA A-Level Computer Science Number Systems Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "number-systems-7517"
description: "Deeper guide to AQA 7517 section 4.5.1 Number systems: natural, integer, rational, irrational, real and ordinal numbers, and the use of numbers for counting and measurement."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.5.1 Number systems** in AQA A-Level Computer Science (7517). The specification names seven ideas that you need to be familiar with:

- **4.5.1.1** natural numbers and the set ℕ;
- **4.5.1.2** integers and the set ℤ;
- **4.5.1.3** rational numbers and the set ℚ;
- **4.5.1.4** irrational numbers;
- **4.5.1.5** real numbers and the set ℝ;
- **4.5.1.6** ordinal numbers;
- **4.5.1.7** the use of natural numbers for counting and real numbers for measurement.

The wider [fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) covers all of section 4.5. This page concentrates on the mathematical sets of numbers, how to place a given number in them, and why they matter when a computer stores a value. Condensed notes are in the [number systems revision notes](/resources/aqa-a-level-computer-science-7517-number-systems-revision-notes/), and exam-style questions are in the [number systems practice questions](/resources/aqa-a-level-computer-science-7517-number-systems-practice/).

## Why this matters in computer science

A computer stores every value as a pattern of bits, and the pattern must be chosen to suit the kind of number. A count of items needs a different representation from a temperature, and a value such as √2 cannot be stored exactly in any finite number of bits. Knowing the families of number tells you which data type to use and when a stored value can only be an approximation.

## Natural numbers: ℕ

The **natural numbers** are the whole numbers from zero upwards:

ℕ = {0, 1, 2, 3, …}

The AQA specification **includes zero** in ℕ. Natural numbers have no negative values and no fractional parts. They are the numbers used for **counting**: how many people are in a room, how many items are in a list. They go on for ever, so ℕ is an **infinite** set, but it is **countably infinite**, because each member can be matched with a position in the list 0, 1, 2, 3, …

## Integers: ℤ

The **integers** are the whole numbers, positive, negative and zero:

ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}

Every natural number is an integer, so ℕ is a subset of ℤ. Integers are needed when a quantity can fall below zero or when differences are taken: a change in score, a temperature below freezing, an overdraft. Programming languages offer an integer data type, often with a limited range set by the number of bits used.

## Rational numbers: ℚ

A **rational number** is a number that can be written as a **fraction** (a ratio of two integers), a/b with b not zero.

- 3/4 is rational, and so is its decimal form 0.75.
- −2/5 is rational, and so is −0.4.
- 7 is rational because it can be written as 7/1. So **every integer is a rational number**, and ℤ is a subset of ℚ.
- 1/3 is rational. Its decimal form 0.333… never ends but repeats, which is allowed.

The test for a rational number in decimal form is that the decimal either **terminates** (0.75) or **repeats a pattern** for ever (0.333…, 0.142857142857…).

## Irrational numbers

An **irrational number** is a number that **cannot be written as a fraction**. When written as a decimal it never terminates and never repeats. Examples are √2 (1.41421356…), π (3.14159265…) and e (2.71828…).

Be careful with square roots. √2 is irrational, but √16 = 4 is a natural number and √0.25 = 0.5 is rational. A square root is irrational only when the number is not a perfect square of a rational.

## Real numbers: ℝ

The **real numbers** are all the numbers that lie on the continuous number line. ℝ **includes the natural numbers, the integers, the rational numbers and the irrational numbers**. The specification describes ℝ as the set of all "possible real world quantities".

The sets nest inside each other:

ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

and the irrational numbers are the part of ℝ that is not in ℚ. Every real number is therefore either rational or irrational, but never both.

| Number | ℕ | ℤ | ℚ | Irrational | ℝ |
|---|---|---|---|---|---|
| 12 | yes | yes | yes | no | yes |
| 0 | yes | yes | yes | no | yes |
| −5 | no | yes | yes | no | yes |
| 3/8 | no | no | yes | no | yes |
| 0.6 | no | no | yes | no | yes |
| 0.333… | no | no | yes | no | yes |
| √2 | no | no | no | yes | yes |
| √25 | yes | yes | yes | no | yes |
| π | no | no | no | yes | yes |

The real numbers are **uncountable**: unlike ℕ, ℤ and ℚ, they cannot be matched one-for-one with the natural numbers. This links to the set theory in the [regular languages study guide](/resources/aqa-a-level-computer-science-7517-regular-languages/).

### Worked example: classifying numbers

Place each of these in the smallest set that contains it from ℕ, ℤ, ℚ, or "irrational": 18, −7, 5/6, √9, √7, 0.125.

1. 18 is a whole number from zero up: **ℕ**.
2. −7 is a whole number but negative: **ℤ** (and not ℕ).
3. 5/6 is a fraction of integers: **ℚ**.
4. √9 = 3, which is a whole number: **ℕ**.
5. √7 is 2.6457…, which does not terminate or repeat and is not a perfect square: **irrational**.
6. 0.125 = 1/8, a terminating decimal: **ℚ**.

## Ordinal numbers

An **ordinal number** says the **position** of an item in an ordered arrangement: 1st, 2nd, 3rd and so on. Compare this with a cardinal number, which says *how many* ("three apples").

When objects are placed in order, ordinal numbers tell their position. If S = {'a', 'b', 'c', 'd'} is a well-ordered set, then 'a' is the 1st object, 'b' the 2nd, 'c' the 3rd and 'd' the 4th.

In computing, ordinal numbers match the idea of an **index**: the position of an element in an array, a queue or a sorted list. The 3rd item of a list in a language that counts from zero is stored at index 2, which shows that you must be careful to separate the ordinal position from the index value that the language uses.

## Counting and measurement

The specification expects you to be familiar with:

- **natural numbers for counting**. Counting gives whole-number results, such as the number of students in a class. In a program this suggests an integer data type;
- **real numbers for measurement**. Measuring a length, a mass, a time or a temperature can give any value on a continuous scale, with fractions of a unit. A measurement is a real quantity, and in a program it needs a real (floating point) data type.

A count is exact, whereas a measurement is only as precise as the instrument and the number of digits recorded. The height of a plant might be recorded as 12.4 cm, even though its true height has more digits.

**Choosing a data type.**

| Quantity | Kind of number | Suitable representation |
|---|---|---|
| Number of pages in a book | Natural | Integer |
| Bank balance that may be overdrawn (in pence) | Integer | Signed integer |
| Price of fuel per litre | Rational (to a fixed number of decimal places) | Fixed point or decimal |
| Distance of a runner from the start | Real (measurement) | Floating point |
| Position of a runner in a race | Ordinal | Integer rank |

The way these numbers are stored in binary is covered in the study guides for [number bases](/resources/aqa-a-level-computer-science-7517-number-bases/) and the [binary number system](/resources/aqa-a-level-computer-science-7517-binary-number-system/).

A useful habit is to ask what would go wrong if the wrong set were chosen. Storing a count of people as a real number invites a result such as 12.5 people, which has no meaning. Storing a length as an integer throws away the fractional part and the result is wrong. The choice of number set is the first step in choosing a data type.

## Common mistakes

- Saying that natural numbers start at 1. In this specification they start at **0**.
- Saying an integer is not rational. Every integer is rational (7 = 7/1).
- Thinking that any decimal with many digits is irrational. A decimal that repeats, like 0.333…, is rational.
- Claiming √n is always irrational, forgetting perfect squares such as √16.
- Calling the set of irrational numbers a subset of ℚ.
- Confusing ordinal numbers (position) with cardinal numbers (quantity).
- Using integers for measurements or reals for counts without thought for the consequences.

## Exam technique

- **Classify** a number by working down the sets: is it a natural number, an integer, a fraction of integers, a non-repeating infinite decimal?
- **Define** each set in one sentence and give one example, as the specification does.
- **State relationships** with ⊂: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.
- **Link** counting to natural numbers and measurement to real numbers, with an example from the question.

## Related resources

- [Number systems revision notes](/resources/aqa-a-level-computer-science-7517-number-systems-revision-notes/)
- [Number systems practice questions](/resources/aqa-a-level-computer-science-7517-number-systems-practice/)
- [Number bases study guide](/resources/aqa-a-level-computer-science-7517-number-bases/)
- [Binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/)

*Written against the AQA A-level Computer Science (7517) specification, 4.5.1 Number systems. Always check the current specification on the AQA website.*
