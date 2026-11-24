---
title: "AQA A-Level Computer Science (7517): Number systems -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Number Systems Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.5.1 recall: natural, integer, rational, irrational, real and ordinal numbers, counting and measurement, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.5.1 Number systems**, AQA A-Level Computer Science (7517): natural numbers, integers, rational numbers, irrational numbers, real numbers, ordinal numbers, and the use of natural numbers for counting and real numbers for measurement. Fuller explanations are in the [number systems study guide](/resources/aqa-a-level-computer-science-7517-number-systems/); exam-style questions are in the [number systems practice questions](/resources/aqa-a-level-computer-science-7517-number-systems-practice/).

## The sets at a glance

| Set | Symbol | Description | Examples |
|---|---|---|---|
| Natural numbers | ℕ | {0, 1, 2, 3, …}: whole numbers from **zero** upwards | 0, 7, 400 |
| Integers | ℤ | {…, −2, −1, 0, 1, 2, …}: whole numbers, positive, negative or zero | −9, 0, 15 |
| Rational numbers | ℚ | Can be written as a **fraction of integers** (a ratio) | 3/4, −2/5, 7 (= 7/1), 0.75 |
| Irrational numbers | none | **Cannot** be written as a fraction | √2, π |
| Real numbers | ℝ | All "possible real world quantities": includes ℕ, ℚ and the irrationals | all of the above |

The sets nest: **ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ**. Irrational numbers lie in ℝ but not in ℚ. Every real number is either rational or irrational.

## Decimal forms

- **Rational:** the decimal **terminates** (0.125) or **repeats** for ever (0.333…, 0.142857142857…).
- **Irrational:** the decimal **never terminates and never repeats** (√2 = 1.41421356…).
- A long decimal is not automatically irrational. Look for a repeating pattern.

## Classification table

| Number | ℕ | ℤ | ℚ | Irrational | ℝ |
|---|---|---|---|---|---|
| 0 | yes | yes | yes | no | yes |
| −5 | no | yes | yes | no | yes |
| 3/8 | no | no | yes | no | yes |
| 0.333… | no | no | yes | no | yes |
| √16 | yes | yes | yes | no | yes |
| √2 | no | no | no | yes | yes |
| π | no | no | no | yes | yes |

**Traps:** √16 = 4 is natural. √2 is irrational. 7 is rational because 7 = 7/1.

## Worked classification

Place 18, −7, 5/6, √9, √7 and 0.125 in the smallest of ℕ, ℤ, ℚ or "irrational" that holds each one.

1. 18 is a whole number from zero upwards, so it is in ℕ.
2. −7 is a whole number but negative, so it is in ℤ and not in ℕ.
3. 5/6 is a fraction of integers, so it is in ℚ.
4. √9 = 3, so it is in ℕ.
5. √7 = 2.6457…, which does not end or repeat, and 7 is not a perfect square, so it is irrational.
6. 0.125 = 1/8, a terminating decimal, so it is in ℚ.

The method: ask "natural?", then "integer?", then "fraction of integers?", and if none, "irrational?".

## Ordinal numbers

- An **ordinal number** tells the **position** of an object in an ordered arrangement: 1st, 2nd, 3rd.
- If S = {'a', 'b', 'c', 'd'} is a well-ordered set, 'a' is the 1st object, 'b' the 2nd and so on.
- In programs the nearest idea is an **index**. The 3rd item is at index 2 in a language that counts from 0.
- A **cardinal** number tells how many ("three items").

## Counting and measurement

| | Counting | Measurement |
|---|---|---|
| Uses | **Natural numbers** | **Real numbers** |
| Result | Exact whole number | Any value on a continuous scale |
| Example | Number of students | Height, mass, time, temperature |
| Data type | Integer | Real (floating point) |

A count is exact. A measurement has limited precision, set by the instrument and the number of digits recorded.

## Infinite sets and countability

- ℕ, ℤ and ℚ are **countably infinite**: they can be matched one-for-one with ℕ.
- ℝ is **not countable**.
- A computer has finite memory, so it can store only a **finite** number of values. Irrational numbers can only be stored as approximations.

## Which data type?

| Quantity | Number kind | Representation |
|---|---|---|
| Items in a basket | Natural | Integer |
| Change in score (can be negative) | Integer | Signed integer |
| Price to the nearest penny | Rational | Fixed point or integer pence |
| Length of a table | Real | Floating point |
| Finishing position | Ordinal | Integer rank |

## Exam traps

- **Zero is natural** in this specification.
- **Integers are rational**, not outside ℚ.
- **Repeating decimals are rational.**
- **Perfect-square roots** are not irrational.
- **Ordinal against cardinal:** position against quantity.
- **Real numbers contain** the rationals and irrationals; they are not an extra family.
- **Counting is natural, measurement is real.** State both when asked.

## Key terms

| Term | Definition |
|---|---|
| Natural number | A whole number from zero upwards (member of ℕ) |
| Integer | A whole number, positive, negative or zero (member of ℤ) |
| Rational number | A number that can be written as a fraction of two integers (member of ℚ) |
| Irrational number | A number that cannot be written as a fraction |
| Real number | Any number on the continuous number line (member of ℝ) |
| Ordinal number | A number giving the position of an object in an ordered set |
| Countably infinite | Infinite, but able to be matched one-for-one with the natural numbers |
| Measurement | Finding the size of a continuous quantity, giving a real number |

## Self-test

1. Write ℕ using set notation.
2. Is zero a natural number in this specification?
3. Which set contains −3 but not 2.5?
4. Why is 9 a rational number?
5. Give two examples of irrational numbers.
6. Is √49 rational or irrational?
7. Is 0.272727… rational or irrational?
8. State the relationship between ℕ, ℤ, ℚ and ℝ.
9. What does an ordinal number describe?
10. Which type of number is used for counting and which for measurement?

**Answers**

1. {0, 1, 2, 3, …}.
2. Yes.
3. ℤ, the integers.
4. It can be written as the fraction 9/1.
5. Any two, for example √2 and π.
6. Rational: √49 = 7, a whole number.
7. Rational: it is a repeating decimal (27/99 = 3/11).
8. ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ: each set is contained in the next.
9. The position of an object in an ordered arrangement, such as 1st or 2nd.
10. Natural numbers for counting and real numbers for measurement.

## More resources on this topic

- [Number systems study guide](/resources/aqa-a-level-computer-science-7517-number-systems/)
- [Number systems practice questions](/resources/aqa-a-level-computer-science-7517-number-systems-practice/)
- [Number bases revision notes](/resources/aqa-a-level-computer-science-7517-number-bases-revision-notes/)
- [Binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/)
