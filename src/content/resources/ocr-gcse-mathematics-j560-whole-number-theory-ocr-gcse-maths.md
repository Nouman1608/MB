---
title: "OCR GCSE Mathematics (J560): Whole number theory"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 1 – Number operations and integers"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 1.2
syllabusTopics:
  - qualification: "gcse"
    topic: "number-operations-and-integers-ocr-gcse-maths"
    subtopic: "whole-number-theory-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 1.02 in depth: factors, primes, prime factorisation in power notation, square and cube tests, and HCF and LCM problems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1.02, Whole number theory, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Every statement in 1.02 sits in the first two columns of the specification, so all of it is content for **both tiers**. Nothing here is Higher tier only.

The [integer arithmetic, number theory, priority of operations and inverse operations guide](/resources/ocr-gcse-mathematics-integer-arithmetic-number-theory-priority-of/) introduces 1.02 alongside the rest of Topic 1. This page goes further: systematic factor lists, divisibility tests, squares and cubes from a prime factorisation, the Venn diagram method and reverse HCF and LCM problems. Condense it with the [1.02 revision notes](/resources/ocr-gcse-mathematics-j560-whole-number-theory-ocr-gcse-maths-revision-notes/) and test yourself with the [1.02 practice questions](/resources/ocr-gcse-mathematics-j560-whole-number-theory-ocr-gcse-maths-practice/).

## What the specification asks

| Ref | Statement | Column |
|---|---|---|
| 1.02a | Understand and use the terms odd, even, prime, factor (divisor), multiple, common factor (divisor), common multiple, square, cube, root. Understand and use place value. | First (both tiers) |
| 1.02b | Identify prime numbers less than 20. Express a whole number as a product of its prime factors. Understand that each number can be expressed as a product of prime factors in only one way. | First (both tiers) |
| 1.02b | Identify prime numbers. Use power notation in expressing a whole number as a product of its prime factors. | Second (both tiers) |
| 1.02c | Find the HCF and LCM of two whole numbers by listing. | First (both tiers) |
| 1.02c | Find the HCF and LCM of two whole numbers from their prime factorisations. | Second (both tiers) |

## Finding every factor: work in pairs

Factors come in pairs that multiply to the number. Start at 1 and work upwards until the pairs meet.

**Worked example 1.** List all the factors of 96.

```
1 × 96
2 × 48
3 × 32
4 × 24
6 × 16      (5 is not a factor)
8 × 12      (7 is not a factor; 9, 10 and 11 are not factors)
next would be 12 × 8, a repeat, so stop
```

The factors are **1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96**: twelve of them.

A square number has an odd number of factors, because one pair is a number times itself. The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36: nine factors, with 6 × 6 counted once.

## Divisibility tests

These speed up factor lists, prime tests and factor trees.

| Divisible by | Test | Example |
|---|---|---|
| 2 | Last digit even | 3 718 |
| 3 | Digit sum divisible by 3 | 4 + 0 + 2 = 6, so 402 |
| 4 | Last two digits divisible by 4 | 1 316 (16) |
| 5 | Last digit 0 or 5 | 2 405 |
| 6 | Divisible by 2 and by 3 | 714 |
| 9 | Digit sum divisible by 9 | 7 + 2 + 9 = 18, so 729 |
| 10 | Last digit 0 | 5 430 |

## Identifying primes beyond 20

The first-column statement only needs the primes below 20: 2, 3, 5, 7, 11, 13, 17, 19. The second column asks you to identify primes in general. Test every prime up to the square root of the number.

**Worked example 2.** Decide whether 391 and 409 are prime.

```
391: 19² = 361 and 20² = 400, so test primes up to 19.
     2, 3, 5, 7, 11, 13 do not divide 391.
     17 × 23 = 391, so 391 is NOT prime.

409: 20² = 400 and 21² = 441, so test primes up to 19.
     not even; digit sum 13 (not 3); does not end in 0 or 5
     7 × 58 = 406 (r 3)   11 × 37 = 407 (r 2)   13 × 31 = 403 (r 6)
     17 × 24 = 408 (r 1)  19 × 21 = 399 (r 10)
     409 IS prime.
```

391 catches people out: it passes no quick test and only reveals itself at 17.

## Prime factorisation and what it tells you

Write the number as a product of primes, then collect repeats into powers. Different factor trees always end at the same primes, which is the uniqueness statement in 1.02b.

**Worked example 3.** Write 2 160 as a product of prime factors in power notation.

```
2 160 = 10 × 216
      = 2 × 5 × 2 × 2 × 2 × 27
      = 2 × 5 × 2 × 2 × 2 × 3 × 3 × 3
      = 2⁴ × 3³ × 5
```

Check by multiplying back: 16 × 27 = 432, and 432 × 5 = 2 160.

**Uniqueness in action.** A student writes 144 = 2² × 6². That is not a prime factorisation, because 6 is not prime. Replacing 6² by 2² × 3² gives 2⁴ × 3², the only prime factorisation of 144.

**Squares, cubes and roots from a factorisation.** In a square number every prime appears to an even power. In a cube number every power is a multiple of 3.

**Worked example 4.**

```
1 764 = 2² × 3² × 7²       all powers even → a square number
        √1 764 = 2 × 3 × 7 = 42

3 375 = 3³ × 5³             all powers multiples of 3 → a cube number
        ∛3 375 = 3 × 5 = 15
```

**Worked example 5.** Find the smallest whole number you can multiply 2 160 by to make a square number.

```
2 160 = 2⁴ × 3³ × 5
2⁴ is already even; 3³ needs one more 3; 5 needs one more 5
multiply by 3 × 5 = 15
2 160 × 15 = 32 400 = 2⁴ × 3⁴ × 5² = 180²
```

The answer is **15**.

## HCF and LCM with a Venn diagram

From prime factorisations, a two-circle Venn diagram sorts the primes for you. Shared primes go in the overlap.

**Worked example 6.** Find the HCF and LCM of 84 and 90.

```
84 = 2 × 2 × 3 × 7
90 = 2 × 3 × 3 × 5

only 84:   2, 7
overlap:   2, 3
only 90:   3, 5

HCF = product of the overlap        = 2 × 3                 = 6
LCM = product of everything shown   = 2 × 7 × 2 × 3 × 3 × 5 = 1 260
```

Check: HCF × LCM = 6 × 1 260 = 7 560, and 84 × 90 = 7 560.

**In index form.** When the numbers are already written in power notation, compare powers prime by prime.

```
A = 2⁴ × 3 × 7        B = 2² × 3³ × 5

HCF: lowest power of each shared prime   = 2² × 3          = 12
LCM: highest power of every prime        = 2⁴ × 3³ × 5 × 7 = 15 120
```

Leave the LCM as 2⁴ × 3³ × 5 × 7 if the question asks for a product of primes.

## Problems: choosing HCF or LCM

| Clue in the question | Use |
|---|---|
| Largest equal groups, longest equal pieces, as many identical kits as possible | HCF |
| Next time two cycles coincide, smallest square from rectangles, fewest packs to have equal numbers | LCM |

**Worked example 7.** Rectangular tiles measure 18 cm by 30 cm. They are laid the same way round, with no gaps, to make the smallest possible square. How many tiles are needed?

```
the side of the square must be a multiple of 18 and of 30
LCM(18, 30): 18 = 2 × 3², 30 = 2 × 3 × 5, LCM = 2 × 3² × 5 = 90 cm
tiles along one side: 90 ÷ 18 = 5     along the other: 90 ÷ 30 = 3
total: 5 × 3 = 15 tiles
```

**Worked example 8.** 168 red beads and 120 blue beads are shared into identical craft kits with none left over. Find the greatest number of kits and the contents of each.

```
168 = 2³ × 3 × 7      120 = 2³ × 3 × 5
HCF = 2³ × 3 = 24 kits
each kit: 168 ÷ 24 = 7 red,  120 ÷ 24 = 5 blue
```

**Worked example 9 (a reverse problem).** Two numbers have HCF 6 and LCM 72. One of them is 18. Find the other.

```
HCF × LCM = product of the two numbers
6 × 72 = 432, so the other number is 432 ÷ 18 = 24
check: HCF(18, 24) = 6 and LCM(18, 24) = 72
```

## Place value with whole numbers

The specification asks you to "understand and use place value". One common use: from a known fact, write down related facts by moving digits between columns.

```
Given 47 × 23 = 1 081:
470 × 23    = 10 810       (one factor ten times larger)
470 × 2 300 = 1 081 000    (×10 and ×100, so ×1 000 overall)
10 810 ÷ 23 = 470
```

## Common mistakes

- Calling 1 a prime. It has only one factor.
- Stopping a factor list early and missing a pair, such as 8 × 12 for 96.
- Writing a "prime factorisation" with a composite factor such as 6 or 9 still in it.
- Taking the highest powers for the HCF, or the lowest for the LCM. HCF uses lowest powers of shared primes; LCM uses highest powers of all primes.
- Answering an LCM tiling question with the side length, when it asks for the number of tiles.

## Exam technique

- **"Write as a product of prime factors"**: the final line must show only primes, multiplied together. If the question says "in index form" or "using powers", use power notation.
- **"Use your answer to part (a)"**: build on your factorisation. Listing instead may still give the right answer but can lose the method marks the question is targeting.
- **"Show that"** or **"Explain"** for a prime: either give a factor pair, or show every prime up to the square root has been tested.
- Multiply your factorisation back as a check.

## Where to go next

Condense the methods with the [1.02 revision notes](/resources/ocr-gcse-mathematics-j560-whole-number-theory-ocr-gcse-maths-revision-notes/), then try the [1.02 practice questions](/resources/ocr-gcse-mathematics-j560-whole-number-theory-ocr-gcse-maths-practice/). See the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/) for other topics.

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 1.02, Whole number theory (1.02a to 1.02c).
