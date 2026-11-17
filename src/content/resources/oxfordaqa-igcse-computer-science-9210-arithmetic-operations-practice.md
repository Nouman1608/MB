---
title: "OxfordAQA IGCSE Computer Science (9210): Arithmetic operations in a programming language -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.03
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "arithmetic-operations-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with full answers on arithmetic operators, real division, DIV, MOD and tracing calculations."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Arithmetic operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-arithmetic-operations/) | [Arithmetic operations revision notes](/resources/oxfordaqa-igcse-computer-science-9210-arithmetic-operations-revision-notes/)

These questions cover section 3.2.3 Arithmetic operations in a programming language of the OxfordAQA
International GCSE Computer Science (9210) specification. In all questions, `/` is real division.

---

## Section A

**1.** State the value of each expression:
**(a)** `38 DIV 7` **(b)** `38 MOD 7` **(c)** `38 / 8` **(d)** `6 MOD 9`. **[4]**

**2.** Explain the difference between real division and integer division. **[2]**

**3.** State the value of `x` after `x ← 20 - 12 / 4 * 2`. **[1]**

**4.** Write a condition that is true only when the integer variable `n` is odd. **[1]**

**5.** A student writes `average ← mark1 + mark2 + mark3 / 3`. Explain the error and write a corrected statement.
**[2]**

## Section B

**6.** A theatre has rows of 18 seats. Seats are numbered from 0 upwards, filling row 0 first, then row 1, and so
on. Seat number `s` is in row `s DIV 18` at position `s MOD 18` within the row.

**(a)** State the row and the position for seat number 75. **[2]**
**(b)** Explain why `DIV` rather than `/` is used to find the row. **[2]**

**7.** Write pseudocode that takes a number of minutes as input and outputs it as hours and minutes. For example,
an input of 145 should output 2 and 25. **[4]**

**8.** Study this pseudocode:

```
n ← 3506
count ← 0
WHILE n > 0
  IF n MOD 10 = 0 THEN
    count ← count + 1
  ENDIF
  n ← n DIV 10
ENDWHILE
OUTPUT count
```

**(a)** Complete a trace table with columns `n` and `count`, showing every value taken. **[3]**
**(b)** State what the algorithm outputs and describe its purpose. **[2]**

**9.** A school has `pupils` pupils to put into minibuses that hold 16 each. Every pupil must have a seat.

**(a)** Write an expression using `DIV` for the number of full minibuses. **[1]**
**(b)** Write pseudocode that calculates the total number of minibuses needed, including one that is only
partly full if necessary. **[3]**

**10.** A program outputs the word `"Fizz"` for every number from 1 to 30 that is a multiple of 3, and the number
itself otherwise. Write the pseudocode. **[4]**

**11.** A program stores a price in cents as the integer `priceCents`, for example 1295.

**(a)** Write expressions that give the whole dollars and the remaining cents. **[2]**
**(b)** State the values of your expressions for 1295. **[2]**
**(c)** State the value of `priceCents / 100` and its data type. **[2]**

**12.** Explain why the expression `(a DIV b) * b + (a MOD b)` always equals `a` for positive whole numbers `a`
and `b`, using `a = 50` and `b = 7` as an example. **[3]**

---

## Answers

**1.** (a) 5 [1] (b) 3 [1] (c) 4.75 [1] (d) 6 [1].

**2.** Real division gives a result that can include a fractional part, for example 7 / 2 = 3.5 [1]; integer
division (`DIV`) gives only the whole-number quotient, for example 7 DIV 2 = 3, with the remainder found
separately using `MOD` [1].

**3.** 14 [1] (12 / 4 = 3, 3 * 2 = 6, 20 − 6 = 14).

**4.** `n MOD 2 = 1` [1] (accept `n MOD 2 ≠ 0`).

**5.** Only `mark3` is divided by 3 because division is done before addition [1]; correct version:
`average ← (mark1 + mark2 + mark3) / 3` [1].

**6.** **(a)** Row 4 [1], position 3 [1] (18 × 4 = 72, 75 − 72 = 3).
**(b)** A row number must be a whole number [1]; `75 / 18` would give about 4.17, while `DIV` gives the whole
number of complete rows, 4 [1].

**7.** One possible answer:

```
totalMinutes ← STRING_TO_INT(USERINPUT)
hours ← totalMinutes DIV 60
minutes ← totalMinutes MOD 60
OUTPUT hours
OUTPUT minutes
```

Input taken [1]; hours calculated with `DIV 60` [1]; minutes calculated with `MOD 60` [1]; both output [1].

**8.** **(a)**

| n | count |
|---|---|
| 3506 | 0 |
| 350 | 0 |
| 35 | 1 |
| 3 | 1 |
| 0 | 1 |

Correct values of `n` 3506, 350, 35, 3, 0 [1]; `count` stays 0 after the first digit (6) [1]; `count` becomes 1
when the digit 0 is found and does not change again [1].
**(b)** It outputs 1 [1]. It counts how many digits of the number are zero [1].

**9.** **(a)** `pupils DIV 16` [1].
**(b)** One possible answer:

```
buses ← pupils DIV 16
IF pupils MOD 16 > 0 THEN
  buses ← buses + 1
ENDIF
```

Full buses calculated with `DIV` [1]; remainder tested with `MOD` [1]; one extra bus added only when there is a
remainder [1].

**10.** One possible answer:

```
FOR i ← 1 TO 30
  IF i MOD 3 = 0 THEN
    OUTPUT "Fizz"
  ELSE
    OUTPUT i
  ENDIF
ENDFOR
```

Loop from 1 to 30 [1]; `MOD 3 = 0` test [1]; "Fizz" output when true [1]; the number output otherwise [1].

**11.** **(a)** Dollars: `priceCents DIV 100` [1]; cents: `priceCents MOD 100` [1].
**(b)** 12 [1] and 95 [1].
**(c)** 12.95 [1], a real value, because `/` is real division [1].

**12.** `a DIV b` is the number of whole times `b` fits into `a`, so multiplying it by `b` gives the largest
multiple of `b` not greater than `a` [1]; `a MOD b` is what is left over, so adding it gives back `a` [1]. For
example, 50 DIV 7 = 7 and 50 MOD 7 = 1, and 7 × 7 + 1 = 50 [1].

---

## Where marks are usually lost

- Giving a remainder as a decimal fraction.
- Forgetting that division and multiplication are worked out before subtraction (Question 3).
- Using `/` in Question 9, which gives a fractional number of buses.
- Rounding up with `DIV` alone: an extra bus is only needed when the remainder is not zero.
- In trace tables, losing track of when the loop stops: test `n > 0` after every pass.
