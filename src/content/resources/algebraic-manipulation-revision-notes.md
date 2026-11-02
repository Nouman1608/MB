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
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "equations"
description: "Condensed recall notes on expanding, factorising, completing the square, algebraic fractions, and the quadratic formula and discriminant for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--01-expand-area-grid.webp" width="900" height="820" alt="An area grid for (3x + y)(x minus 4y) with columns 3x and y and rows x and minus 4y. The cells are 3x squared, xy, minus 12xy and minus 4y squared. Adding them and combining the xy terms gives 3x squared minus 11xy minus 4y squared." loading="lazy">
  <figcaption>Every term in the first bracket multiplies every term in the second.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--02-factorise-trinomial-tiles.webp" width="900" height="670" alt="Tiles for x squared plus 5x plus 6 fit into a rectangle of width x plus 3 and height x plus 2. The six unit tiles fill the corner, which is why the numbers must multiply to 6 and add to 5. So the expression equals (x + 2)(x + 3)." loading="lazy">
  <figcaption>The tiles for x² + 5x + 6 build a rectangle with sides x + 2 and x + 3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--03-difference-of-squares.webp" width="900" height="886" alt="A square of side a with a b-by-b square removed leaves a shape of area a squared minus b squared. Cut and rearranged it forms a rectangle a plus b by a minus b. With a = 5 and b = 3, 25 minus 9 equals 2 times 8." loading="lazy">
  <figcaption>a² − b² is the area of a rectangle with sides (a − b) and (a + b).</figcaption>
</figure>


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

Uses: turning point at **(−b/2, the constant outside the bracket in the completed-square form)**, minimum value, and solving quadratics.

Always check a completed-square answer by expanding it back out — if it does
not return the original expression, an arithmetic slip has been made
somewhere in the process, and it is far better to catch this before moving
on to using the result than after.

If the coefficient of x² is not 1, factor it out first.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--04-complete-square-tiles.webp" width="900" height="730" alt="Tiles for x squared plus 6x plus 5 nearly make a square of side x plus 3, but the 3 by 3 corner needs 9 unit squares and only 5 are there. So 4 are missing and x squared plus 6x plus 5 equals (x + 3) squared minus 4." loading="lazy">
  <figcaption>Completing the square fills the corner of (x + 3)² and then takes away what was never there.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--05-cancel-factors-graph.webp" width="900" height="1060" alt="The fraction factorises to x(x minus 2) over (x minus 2)(x minus 3), which cancels to x over (x minus 3), x not 2 or 3. The graph of x over (x minus 3) has dashed lines at x = 3 and y = 1; the original fraction has the same graph with an open circle gap at (2, minus 2)." loading="lazy">
  <figcaption>Cancelling a common factor gives the same graph, except the original has a gap where the factor was zero.</figcaption>
</figure>


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
