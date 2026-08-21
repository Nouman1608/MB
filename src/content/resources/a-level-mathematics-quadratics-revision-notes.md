---
title: "A Level Mathematics: Quadratics — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
description: "Condensed recall notes on completing the square, the discriminant, quadratic inequalities and disguised quadratics for Cambridge AS & A Level Mathematics 9709."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Quadratics study guide](/resources/a-level-mathematics-pure-mathematics-1-quadratics/).

## Completed square form

```
a x^2 + b x + c  =  a(x + p)^2 + q
```

Reading it off immediately:

- **Vertex** at `(−p, q)`.
- **Line of symmetry** `x = −p`.
- If `a > 0`, `q` is the **minimum** value; if `a < 0`, it is the **maximum**.

Method when a ≠ 1: **factor a out of the x² and x terms only**, complete the square inside, then multiply back.

```
2x^2 - 12x + 5  =  2(x^2 - 6x) + 5  =  2[(x-3)^2 - 9] + 5  =  2(x-3)^2 - 13
```

Vertex `(3, −13)`, minimum value −13. Forgetting to multiply the −9 by 2 is the classic slip.

## The discriminant

```
b^2 - 4ac  >  0    two distinct real roots
b^2 - 4ac  =  0    one repeated root  (curve TOUCHES the x-axis)
b^2 - 4ac  <  0    no real roots       (curve never meets the x-axis)
```

Almost every "find the values of k" question is a discriminant question in disguise. The standard patterns:

- **Tangent to a line** → substitute, form a quadratic, set the discriminant to **zero**.
- **Two intersections** → discriminant **> 0**.
- **Never touches / no intersection** → discriminant **< 0**.
- **Always positive** → `a > 0` **and** discriminant **< 0**. Both conditions are needed; giving only the discriminant loses a mark.

## Quadratic inequalities

**Always sketch.** Solving algebraically without a sketch produces wrong inequality directions more often than not.

1. Rearrange so one side is zero.
2. Factorise to find the critical values.
3. Sketch the parabola.
4. Read off the region.

```
(x - 2)(x - 5) < 0    ->    2 < x < 5        (below the axis, BETWEEN the roots)
(x - 2)(x - 5) > 0    ->    x < 2  or  x > 5  (above the axis, OUTSIDE the roots)
```

For an upward parabola: **"less than zero" gives one interval between the roots; "greater than zero" gives two separate intervals.** Writing `5 < x < 2` is impossible — if the answer looks like that, it should be two intervals joined by "or".

## Disguised quadratics

If an equation contains a term and its square, substitute.

```
x^4 - 5x^2 + 4 = 0        let u = x^2      ->  u^2 - 5u + 4 = 0
x - 7 sqrt(x) + 12 = 0    let u = sqrt(x)  ->  u^2 - 7u + 12 = 0
2^(2x) - 5(2^x) + 4 = 0   let u = 2^x      ->  u^2 - 5u + 4 = 0
```

**Two things must follow:** substitute back to find x, and **reject impossible values** — √x cannot be negative, and 2^x is always positive. Marks are routinely lost by stopping at u, or by keeping a negative root for u = √x.

## Exam traps

- Not multiplying `q` by `a` when completing the square with a ≠ 1.
- Sign error on the vertex: `a(x + p)² + q` has vertex at `(−p, q)`.
- Solving inequalities without sketching.
- Writing an impossible double inequality instead of two intervals.
- Giving only the discriminant condition for "always positive".
- Forgetting to substitute back, or keeping invalid roots.

## Self-test

1. Write `2x² − 12x + 5` in completed square form and state the minimum point.
2. What does `b² − 4ac = 0` mean geometrically?
3. Solve `x² − 7x + 10 > 0`.
4. What two conditions make `ax² + bx + c` positive for all x?
5. Solve `x − 7√x + 12 = 0`.

**Answers:** 1. `2(x − 3)² − 13`, minimum at (3, −13). 2. The curve touches the x-axis at exactly one point — a repeated root, so the line is a tangent. 3. Roots 2 and 5; the parabola is above the axis outside them, so x < 2 or x > 5. 4. a > 0 and b² − 4ac < 0. 5. Let u = √x: u² − 7u + 12 = 0, so u = 3 or 4, both valid as they are positive; x = 9 or x = 16.
