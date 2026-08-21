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

## Factorising — check in this order

1. **Common factor** first, always: `6x² + 9x = 3x(2x + 3)`
2. **Difference of two squares**: `x² − 25 = (x + 5)(x − 5)`
3. **Quadratic trinomial**: find two numbers multiplying to *ac* and adding to *b*
4. **Grouping** for four terms: `ax + ay + bx + by = (a + b)(x + y)`

Missing step 1 is the most common cause of a wrong final answer.

## Completing the square

```
x^2 + bx + c   ->   (x + b/2)^2 - (b/2)^2 + c

Example: x^2 + 8x + 3 = (x + 4)^2 - 16 + 3 = (x + 4)^2 - 13
```

Uses: turning point at **(−b/2, the constant)**, minimum value, and solving quadratics.

If the coefficient of x² is not 1, factor it out first.

## Quadratic formula

```
x = [ -b +/- sqrt(b^2 - 4ac) ] / 2a
```

The discriminant b² − 4ac: positive → two roots; zero → one repeated root; negative → no real roots.

## Algebraic fractions

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
