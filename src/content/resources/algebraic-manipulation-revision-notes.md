---
title: "Algebraic Manipulation: Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.2
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "introduction-to-algebra"
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "algebraic-manipulation"
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "algebraic-fractions"
description: "Condensed recall notes on expanding, factorising, completing the square and algebraic fractions for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For worked examples, use the
[Algebraic Manipulation study guide](/resources/algebraic-manipulation/).

## Expanding

```
a(b + c)            = ab + ac
(x + a)(x + b)      = x^2 + (a+b)x + ab
(x + a)^2           = x^2 + 2ax + a^2
(x - a)^2           = x^2 - 2ax + a^2
(x + a)(x - a)      = x^2 - a^2        <- difference of two squares
```

## Expanding more than two brackets

4024 also expects products of more than two brackets, expanded one pair at a
time rather than all at once:

```
(x - 2)(x + 3)(2x + 1)
Step 1: (x - 2)(x + 3) = x^2 + x - 6
Step 2: (x^2 + x - 6)(2x + 1) = 2x^3 + 3x^2 - 11x - 6
```

Always expand the first two brackets completely before bringing in the
third — attempting all three at once is the most common source of a dropped
term.

## Factorising — check in this order

1. **Common factor** first, always: `6x² + 9x = 3x(2x + 3)`
2. **Difference of two squares**: `x² − 25 = (x + 5)(x − 5)`
3. **Quadratic trinomial**: find two numbers multiplying to *ac* and adding to *b*
4. **Grouping** for four terms: `ax + ay + bx + by = (a + b)(x + y)`

Missing step 1 is the most common cause of a wrong final answer.

## Grouping and cubic factorising worked examples

Grouping for four terms works by pairing terms that share a common factor:

```
ax + bx + kay + kby = x(a + b) + ky(a + b) = (a + b)(x + ky)
```

A common factor plus quadratic, of the form ax^3 + bx^2 + cx, is handled by
taking out the common factor first, then factorising what remains if it
will factorise further:

```
2x^3 + 10x^2 + 12x
= 2x(x^2 + 5x + 6)
= 2x(x + 2)(x + 3)
```

Skipping the common-factor step first here is the single most common reason
a cubic factorisation is left incomplete.

## Completing the square

```
x^2 + bx + c   ->   (x + b/2)^2 - (b/2)^2 + c

Example: x^2 + 8x + 3 = (x + 4)^2 - 16 + 3 = (x + 4)^2 - 13
```

Uses: turning point at **(−b/2, the constant)**, minimum value, and solving quadratics.

Always check a completed-square answer by expanding it back out — if it does
not return the original expression, an arithmetic slip has been made
somewhere in the process, and it is far better to catch this before moving
on to using the result than after.

If the coefficient of x² is not 1, factor it out first.

## Where this fits in 4024

Algebraic manipulation is the working vocabulary for almost everything else
in 4024 — equations, inequalities, graphs of functions, and coordinate
geometry and mensuration problems that reduce to an algebraic equation once
the geometry is stripped away. Before tackling any of that, simplifying,
expanding, factorising and rearranging expressions confidently and without
a calculator needs to be automatic, since a candidate who has to stop and
think through a factorisation step from scratch mid-question loses time
that later, harder parts of a problem need.

## Quadratic formula

```
x = [ -b +/- sqrt(b^2 - 4ac) ] / 2a
```

The discriminant b² − 4ac: positive → two roots; zero → one repeated root; negative → no real roots.

Checking the sign of the discriminant before attempting to solve a quadratic
by formula can save time — if it is negative, no real solution exists, so
there is no point continuing the calculation any further.

## Algebraic fraction worked examples

Adding fractions with different denominators uses a common denominator,
then combines the numerators:

```
x/3 + (x - 4)/2 = 2x/6 + 3(x-4)/6 = (2x + 3x - 12)/6 = (5x - 12)/6
```

Multiplying and dividing follows the same rule as ordinary fractions:
multiply numerators together and denominators together, and to divide,
multiply by the reciprocal of the second fraction:

```
3a/4 x 9a/10 = 27a^2/40
3a/4 / 9a/10 = 3a/4 x 10/9a = 30a/36a = 5/6
```

- **Simplify** by factorising top and bottom, then cancelling **factors** — never individual terms.
- **Add or subtract** using a common denominator.
- **Divide** by multiplying by the reciprocal.

## Exam traps

- `(x + a)² ≠ x² + a²` — the middle term 2ax is compulsory.
- You may only cancel a whole factor: in (x + 2)/(x + 4) nothing cancels.
- Watch signs when expanding a bracket preceded by a minus.
- When completing the square with a negative b, b/2 is negative: x² − 6x → (x − 3)² − 9.
- Factorise fully — `2x² − 8` is `2(x + 2)(x − 2)`, not `2(x² − 4)`.

## Self-test

1. Expand and simplify (2x − 3)(x + 5).
2. Factorise fully 3x² − 27.
3. Write x² − 10x + 7 in completed square form.
4. Simplify (x² − 9)/(x² + 4x + 3).
5. How many real roots has 2x² + 3x + 5?

**Answers:** 1. 2x² + 10x − 3x − 15 = **2x² + 7x − 15**. 2. 3(x² − 9) = **3(x + 3)(x − 3)**. 3. **(x − 5)² − 18**. 4. (x+3)(x−3) / (x+3)(x+1) = **(x − 3)/(x + 1)**. 5. b² − 4ac = 9 − 40 = −31, negative → **no real roots**.
