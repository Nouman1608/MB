---
title: "OxfordAQA International GCSE Mathematics: Sequences and nth terms (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Sequences Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Sequences, nth terms and quadratic sequences"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 85
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-oxfordaqa-igcse-maths"
    subtopic: "sequences-oxfordaqa-igcse-maths"
description: "Condensed revision notes on sequences, nth terms, triangular, square and cube numbers and quadratic sequences for OxfordAQA International GCSE Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes cover references A24, A25 and A26 in section 3.2.4 (Sequences) of the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). Quadratic sequences are Extension only; everything else is Core, and Core content can also be assessed on the Extension tier question papers. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-igcse-mathematics-sequences-nth-terms-and-quadratic-sequences/), then test yourself with the [practice questions](/resources/oxfordaqa-igcse-mathematics-sequences-nth-terms-and-quadratic-sequences-practice/).

Related pages: the [course page](/boards/oxfordaqa/igcse/mathematics/), the [checklist](/checklists/oxfordaqa/igcse/mathematics/), a [free 10-minute diagnostic](/diagnostics/), and [algebra notation and manipulation](/resources/igcse-oxfordaqa-mathematics-algebra-notation-and-manipulation/).

## Key definitions

| Term | Meaning |
|---|---|
| Sequence | An ordered list of numbers |
| Term | A single number that appears in the sequence |
| Position (n) | The place of a term in the list: 1st, 2nd, 3rd, ... |
| Term-to-term rule | Builds each term from the previous one. Needs a starting term |
| Position-to-term rule | A formula giving a term from its position, also called the nth term |
| Common difference (d) | The constant gap between terms of an arithmetic progression |
| First difference | Term minus the term before it |
| Second difference | Gaps found by subtracting neighbouring first differences |

## A24: generating terms

- Term-to-term: write the starting term, then apply the rule repeatedly, one line per step.
- Position-to-term: put n = 1, 2, 3, ... into the formula, using brackets around negative values.
- To find the first term above or below a target, solve the inequality, then round to the next whole number in the right direction.

Quick reminder. Start at 4 with the rule "multiply by 3, then subtract 2": 4, then 3 × 4 − 2 = 10, then 3 × 10 − 2 = 28. The nth term 9 − 2n gives 7, 5, 3, ... and the 6th term is 9 − 12 = −3.

## A25: special sequences

| Family | Terms | nth term | Differences |
|---|---|---|---|
| Triangular | 1, 3, 6, 10, 15, 21, 28, 36 | n(n + 1)/2 | 2, 3, 4, 5, ... |
| Square | 1, 4, 9, 16, 25, 36, 49, 64 | n² | 3, 5, 7, 9, ... |
| Cube | 1, 8, 27, 64, 125, 216, 343, 512 | n³ | 7, 19, 37, ... |

Learn the squares up to 15² = 225 and the cubes up to 10³ = 1000.

To test whether a number N is triangular, solve n(n + 1) = 2N. For N = 66 this gives n(n + 1) = 132 = 11 × 12, so 66 is the 11th triangular number. To test for a square or cube, take the square root or cube root and see whether you get a whole number.

Useful link: two consecutive triangular numbers add to a square. The 9th and 10th triangular numbers are 45 and 55, which add to 100 = 10².

## A25 and A26: arithmetic progressions and linear nth terms

### Must-know distinctions

| Arithmetic (linear) | Not arithmetic |
|---|---|
| Same difference every time | Differences change |
| nth term has the form dn + c | nth term may contain n² or n³ |
| Plots as points on a straight line | Plots on a curve |

### Method in steps

1. Find d from two neighbouring terms and check it is constant.
2. Write dn.
3. Find the constant: c = first term − d.
4. Write dn + c and test it on the second term.

| Sequence | d | Constant | nth term |
|---|---|---|---|
| 7, 10, 13, 16 | 3 | 7 − 3 = 4 | 3n + 4 |
| 30, 25, 20, 15 | −5 | 30 + 5 = 35 | 35 − 5n |
| 2.5, 4, 5.5, 7 | 1.5 | 2.5 − 1.5 = 1 | 1.5n + 1 |

### Worked reminder: from a term and a difference

The 7th term of an arithmetic progression is 40 and the common difference is −3. The nth term is −3n + c. Use the 7th term: −3(7) + c = 40, so c = 61. The nth term is **61 − 3n**. Check: n = 1 gives 58, n = 2 gives 55, n = 7 gives 40.

### Is a number in the sequence?

Set the nth term equal to the number and solve for n. If n is a positive whole number, the number is a term and n is its position. If n is a fraction, or negative, it is not a term.

For 4n − 1: is 99 a term? 4n − 1 = 99 gives 4n = 100, so n = 25. Yes, it is the 25th term. Is 60 a term? 4n = 61, n = 15.25. No.

## Quadratic sequences (Extension only)

### Spotting one

Write the first differences. If they are not constant, write the second differences. If those are constant, the sequence is quadratic and its nth term is an² + bn + c.

### The key link

Second difference = 2a, so a = half the second difference.

| Second difference | a | Leading term |
|---|---|---|
| 1 | 1/2 | n²/2 |
| 2 | 1 | n² |
| 4 | 2 | 2n² |
| 6 | 3 | 3n² |
| −2 | −1 | −n² |
| −4 | −2 | −2n² |

### Method in steps

1. Find first and second differences. Check the second differences all match.
2. Halve the second difference to get a.
3. Write out the terms of an² for n = 1, 2, 3, ...
4. Subtract them from the sequence. The result is linear.
5. Find the nth term bn + c of the remainder.
6. Write an² + bn + c. Test with n = 1 and n = 2.

### Worked reminder

Find the nth term of 6, 15, 28, 45, 66, ...

```
Sequence:     6    15    28    45    66
First diffs:     9     13    17    21
Second diffs:       4     4     4
```

So a = 2 and the terms of 2n² are 2, 8, 18, 32, 50.

```
Sequence − 2n²:   4    7   10   13   16
```

This is 3n + 1. The nth term is **2n² + 3n + 1**, which factorises as (2n + 1)(n + 1).

Check: n = 1 gives 6 and n = 2 gives 8 + 6 + 1 = 15.

### Worked reminder: a fractional a

For 2, 5, 9, 14, 20, ... the first differences are 3, 4, 5, 6 and the second differences are all 1, so a = 1/2. The terms of n²/2 are 0.5, 2, 4.5, 8, 12.5. Subtracting leaves 1.5, 3, 4.5, 6, 7.5, which is 1.5n. The nth term is **n²/2 + 3n/2**, or n(n + 3)/2. Check: n = 3 gives 9.

### Using the nth term

To find the 10th term, substitute n = 10: 200 + 30 + 1 = 231. To test whether a number is a term, set the nth term equal to it, rearrange to equal zero and solve the quadratic (see [solving quadratic equations](/resources/oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing/)). A term exists only if you get a positive whole number for n. Reject any negative root.

## Quick self-test

1. A sequence starts at 5 and the rule is "add 4 to the previous term, then double". Write the first three terms.
2. The nth term is 2n + 9. Find the 20th term.
3. Write down the two triangular numbers after 36.
4. Which cube number lies between 200 and 300?
5. Find the nth term of 11, 8, 5, 2, ...
6. Is 130 a term of the sequence with nth term 6n − 8?
7. The 3rd term of an arithmetic progression is 17 and the 8th term is 37. Find the nth term.
8. (Extension only) The second difference of a sequence is 10. What is a?
9. (Extension only) Find the nth term of 5, 10, 19, 32, 49, ...
10. (Extension only) Is 70 a term of the sequence with nth term n² + 6?

### Answers

1. (5 + 4) × 2 = 18, then (18 + 4) × 2 = 44. The terms are **5, 18, 44**.
2. 2(20) + 9 = **49**.
3. **45 and 55**.
4. 6³ = 216, and 7³ = 343 is too big, so **216**.
5. d = −3, constant = 11 + 3 = 14, so **14 − 3n**. Check n = 4: 14 − 12 = 2.
6. 6n − 8 = 130 gives 6n = 138, n = 23. **Yes**, it is the 23rd term.
7. Five steps give a rise of 20, so d = 4. Then 4(3) + c = 17 gives c = 5. The nth term is **4n + 5**. Check the 8th term: 37.
8. a = 10 ÷ 2 = **5**.
9. First differences 5, 9, 13, 17 and second differences 4, so a = 2. The terms of 2n² are 2, 8, 18, 32, 50, and subtracting leaves 3, 2, 1, 0, −1, which is 4 − n. The nth term is **2n² − n + 4**.
10. n² + 6 = 70 gives n² = 64, so n = 8 (reject −8). **Yes**, it is the 8th term.

## Where marks are usually lost

- Giving the first term, rather than the common difference, as the coefficient of n.
- Writing +c when the constant is negative, or the other way round.
- Not testing the nth term on the first two terms, so a sign slip goes unnoticed.
- Giving a rule in words such as "add 3" when the question asks for the nth term.
- Halving incorrectly: a is half the second difference, not equal to it.
- Subtracting the wrong sequence when finding the linear remainder.
- Accepting a non-integer or negative n as a valid position.
- Giving n as the answer when the question asks for the term, or the term when it asks for the position.
- Rounding the wrong way in "first term greater than" problems.
- Stating that a pattern continues from three terms without checking the differences.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. Section 3.2.4, references A24, A25 and A26.
