---
title: "Cambridge IGCSE Mathematics (0580): Algebraic manipulation"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.02
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "algebraic-manipulation-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 2.2: simplifying, expanding, choosing a factorising method and completing the square, with Core and Extended worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.2 Algebraic manipulation** in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. Both tiers study it. Core (C2.2) has three statements: collect like terms, expand products, and factorise by extracting common factors. Extended (E2.2) keeps those three, extends expanding to more than two brackets, adds five named factorising forms and adds completing the square.

The [introduction to algebra and manipulation guide](/resources/igcse-mathematics-0580-introduction-to-algebra-and-manipulation/) teaches each technique once. This page goes further: how to choose a method when an expression is not labelled, how to use expansion in "show that" questions, and the harder forms that appear on Papers 2 and 4. When you are ready, condense it with the [algebraic manipulation revision notes](/resources/cambridge-igcse-mathematics-0580-algebraic-manipulation-revision-notes/) and test yourself on the [algebraic manipulation practice questions](/resources/cambridge-igcse-mathematics-0580-algebraic-manipulation-practice/).

## What the syllabus asks for

| Statement | Core (C2.2) | Extended (E2.2) |
|---|---|---|
| 1 Simplify by collecting like terms | yes | yes, with squared and product terms such as 7a² − 6ab + 3 |
| 2 Expand products | single brackets and two brackets in one variable, e.g. (2x + 1)(x − 4) | adds two variables, e.g. (3x + y)(x − 4y), and three or more brackets |
| 3 Factorise by extracting common factors | yes, "factorise means factorise fully" | yes |
| 4 Factorise the forms ax + bx + kay + kby, a²x² − b²y², a² + 2ab + b², ax² + bx + c, ax³ + bx² + cx | no | yes |
| 5 Complete the square for ax² + bx + c | no | yes |

The syllabus defines two command words for this subtopic. **Simplify** means give the answer in its simplest form. **Factorise** means factorise fully: nothing may be left that could be taken out further.

## Simplifying expressions that contain brackets

Many simplification questions mix expanding with collecting. Expand each bracket separately, keeping the sign in front of it attached to the number outside, then collect.

### Worked example 1 (Core and Extended)

Simplify 2a(3a − b) − 3b(a − 2b).

```
2a(3a - b)  = 6a^2 - 2ab
-3b(a - 2b) = -3ab + 6b^2       (-3b times -2b is +6b^2)
Total       = 6a^2 - 2ab - 3ab + 6b^2
            = 6a^2 - 5ab + 6b^2
```

Notice that ab and ba are like terms (multiplication can be done in any order), but a²b and ab² are not.

## Expanding: three brackets and "show that"

### Worked example 2 (Extended): a cube

Expand and simplify (x − 1)³.

```
(x - 1)^2 = x^2 - 2x + 1
(x^2 - 2x + 1)(x - 1) = x^3 - x^2 - 2x^2 + 2x + x - 1
                      = x^3 - 3x^2 + 3x - 1
```

A cube is three equal brackets, not x³ − 1. Square first, then multiply by the third bracket. A check that costs ten seconds: put x = 2 into both forms. (2 − 1)³ = 1 and 8 − 12 + 6 − 1 = 1.

### Worked example 3 (Core): using expansion as a proof

Show that (n + 3)² − (n − 3)² = 12n.

```
(n + 3)^2 = n^2 + 6n + 9
(n - 3)^2 = n^2 - 6n + 9
(n^2 + 6n + 9) - (n^2 - 6n + 9) = n^2 + 6n + 9 - n^2 + 6n - 9
                                = 12n
```

In a "show that" question the answer is given, so the marks are for the working. Write each expansion in full and put the second one in a bracket before you subtract: the minus sign must change every term. Because 12n is a multiple of 12 whenever n is an integer, this also shows that the difference between the squares of two integers that differ by 6 is always a multiple of 12, a typical use of letters as generalised numbers.

## Choosing a factorising method (Extended)

On Paper 4 an expression is rarely labelled with its type. Work through the same checklist every time:

1. **Common factor first.** Take out the highest common factor of the numbers and letters. If every term is negative, take out a negative factor: −6x² − 9x = −3x(2x + 3).
2. **Count the terms left in the bracket.**
   - Two terms, both perfect squares, subtracted: **difference of two squares**.
   - Three terms: a **quadratic**. If the first and last are squares and the middle is twice their product, it is a **perfect square**.
   - Four terms: **grouping**.
3. **Check every bracket again.** A bracket such as (x² − 4) still factorises.

### Worked example 4 (Extended): five expressions, five methods

Factorise fully (a) 3x³ − 12x, (b) 2xy − 6y + x − 3, (c) 4x² − 20x + 25, (d) 10x² − 11x − 6, (e) ab − 6 + 2a − 3b.

```
(a) common factor 3x:      3x(x^2 - 4)
    difference of squares: 3x(x - 2)(x + 2)

(b) group in pairs:        2y(x - 3) + 1(x - 3)
                           (x - 3)(2y + 1)

(c) 4x^2 = (2x)^2, 25 = 5^2, 2(2x)(5) = 20x and the middle sign is minus
                           (2x - 5)^2

(d) ac = 10 x (-6) = -60; numbers with product -60 and sum -11: -15 and 4
    10x^2 - 15x + 4x - 6 = 5x(2x - 3) + 2(2x - 3)
                         = (5x + 2)(2x - 3)

(e) reorder so pairs share a factor: ab + 2a - 3b - 6
    a(b + 2) - 3(b + 2) = (a - 3)(b + 2)
```

Points to notice:

- In (a) stopping at 3x(x² − 4) is a correct factorisation but not a full one, so it would not earn full marks.
- In (b) the second pair needs the factor 1 written in, so that the matching bracket is visible.
- In (e) the terms were given in an order that does not pair up. If your first pairing gives two different brackets, rearrange and try again.

### Worked example 5 (Extended): factorising to calculate

The difference of two squares also speeds up arithmetic on the non-calculator paper. Work out 63² − 37² without a calculator.

```
63^2 - 37^2 = (63 + 37)(63 - 37) = 100 x 26 = 2600
```

## Completing the square (Extended)

Completed square form a(x + p)² + q shows the smallest (or largest) value of a quadratic expression, because a square can never be negative.

### Worked example 6 (Extended)

(a) Write 3x² + 12x − 4 in the form a(x + p)² + q. (b) Hence state the minimum value of 3x² + 12x − 4 and the value of x where it occurs.

```
(a) 3x^2 + 12x - 4 = 3(x^2 + 4x) - 4
    x^2 + 4x = (x + 2)^2 - 4
    3[(x + 2)^2 - 4] - 4 = 3(x + 2)^2 - 12 - 4
                         = 3(x + 2)^2 - 16

(b) (x + 2)^2 >= 0, so the expression is at least -16.
    Minimum value -16, when x = -2.
```

When the coefficient of x is odd, keep halves as fractions or decimals rather than rounding:

```
x^2 + 5x + 1 = (x + 5/2)^2 - 25/4 + 1 = (x + 5/2)^2 - 21/4
```

Check any completed square by expanding it: 3(x + 2)² − 16 = 3x² + 12x + 12 − 16 = 3x² + 12x − 4. The same form is used again for solving quadratic equations and for finding turning points when sketching curves.

## Common mistakes

- Subtracting a bracket without changing every sign inside it, in "show that" questions especially.
- Writing (x − 1)³ = x³ − 1, or (a + b)² = a² + b².
- Stopping after a numerical common factor when a difference of two squares remains.
- Treating a sum of squares, such as 4x² + 9, as if it factorised.
- In the ac method, choosing a pair with the right product but the wrong sum. Expand your brackets to check before moving on.
- In completing the square with a ≠ 1, forgetting to multiply the −p² term by a.

## Exam technique for the command words

- **Simplify / Expand and simplify:** the final line must have no like terms left to collect.
- **Factorise / Factorise completely:** expand your answer mentally to check it gives the original, then look inside each bracket for anything further.
- **Show that:** every step must be written; jumping to the given answer earns nothing for the jump.
- **Write in the form a(x + p)² + q:** state a, p and q clearly, with their signs. If the question gives the form (x + p)² + q, a is 1.
- **Hence:** use the result you have just found, as in Worked example 6(b), rather than starting again.

## Next steps

- Condensed recall and a self-test: [algebraic manipulation revision notes](/resources/cambridge-igcse-mathematics-0580-algebraic-manipulation-revision-notes/).
- Exam-style questions with marked answers: [algebraic manipulation practice questions](/resources/cambridge-igcse-mathematics-0580-algebraic-manipulation-practice/).
- The next subtopic builds directly on factorising: [algebraic fractions study guide](/resources/cambridge-igcse-mathematics-0580-algebraic-fractions/).
- The whole topic in one place: [Algebra and graphs study guide](/resources/igcse-mathematics-algebra-and-graphs/).

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, C2.2 and E2.2 Algebraic manipulation.
