---
title: "Algebraic Manipulation"
resourceType: "study-guides"
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
description: "Simplifying, expanding, factorising and completing the square, plus algebraic fractions, for Cambridge O Level Mathematics (Syllabus D) 4024."
author: "muhammad-ghazali-siddiqui"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-07-01
updatedDate: 2026-08-18
featured: false
---

This guide covers subtopics **2.1 to 2.3** of Topic 2, Algebra and graphs, for
Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027 series.

## Where this fits in 4024

Algebraic manipulation is the working vocabulary for almost everything that
follows in 4024 — equations (2.5), inequalities (2.6), graphs of functions
(2.10), and later, coordinate geometry and mensuration problems that reduce to
an algebraic equation once the geometry is stripped away. Before any of that
is worth attempting, you need to simplify, expand, factorise and rearrange
algebraic expressions confidently and without a calculator.

**A note on scope.** This page is written specifically against Cambridge
**O Level** Mathematics 4024, which has one flat, untiered set of outcomes.
Cambridge **IGCSE** Mathematics 0580 covers algebra under the same topic name
but splits it into Core and Extended tiers with different subtopic numbering,
and its Core tier does not include everything below (completing the square
and the full set of factorising forms are Extended-only at IGCSE). If you're
studying 0580, check your tier before assuming this page matches your syllabus
exactly — a dedicated IGCSE resource is planned separately.

## Syllabus coverage

**CAMBRIDGE O LEVEL MATHEMATICS (SYLLABUS D) 4024**

- Know that letters can represent generalised numbers, and substitute numbers
into expressions and formulas (2.1)
- Simplify expressions by collecting like terms (2.2)
- Expand products of algebraic expressions, including products of more than
two brackets (2.2)
- Factorise by extracting common factors (2.2)
- Factorise expressions of the form *ax + bx + kay + kby*, *a²x² − b²y²*,
*a² + 2ab + b²*, *ax² + bx + c*, and *ax³ + bx² + cx* (2.2)
- Complete the square for expressions of the form *ax² + bx + c* (2.2)
- Manipulate algebraic fractions, including factorising and simplifying
rational expressions (2.3)

4024 is **not tiered** — every candidate is assessed on all of the above,
across Paper 1 and Paper 2.

## Introduction to algebra

Algebra uses letters to stand for numbers whose value isn't fixed, or isn't
known yet. Two things you'll do constantly:

- **Substitute** — replace a letter with a given number and work out the
result. If *V = IR* and *I = 4*, *R = 6*, then *V = 4 × 6 = 24*.
- **Generalise** — write an expression that works for *any* number, not just
one example. "The product of two consecutive even numbers" becomes
*n(n + 2)*, where *n* is any even number.

## Simplifying by collecting like terms

**Like terms** have exactly the same letters raised to exactly the same
powers — *3a²* and *5a²* are like terms; *3a²* and *3a* are not. To simplify,
add or subtract the coefficients of like terms and leave everything else
unchanged.

**Worked example.** Simplify 2a² + 3ab − 1 + 5a² − 9ab + 4.

```
a² terms:  2a² + 5a²  = 7a²
ab terms:  3ab − 9ab  = −6ab
numbers:   −1 + 4      = 3

answer: 7a² − 6ab + 3
```

## Expanding products

<!-- marlbridge-diagram:maths-o-level-algebraic-manipulation-map -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-o-level-algebraic-manipulation-map.svg" aria-label="Open full-size diagram: maths-o-level-algebraic-manipulation-map"><img src="/images/learning/mathematics/maths-o-level-algebraic-manipulation-map.svg" width="1600" height="1050" alt="Four examples drawn from the Cambridge O Level Algebraic Manipulation guide show each operation and its result." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Four examples drawn from the Cambridge O Level Algebraic Manipulation guide show each operation and its result. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-o-level-algebraic-manipulation-map -->


Expanding means multiplying out brackets. Multiply every term inside the
bracket by whatever sits outside it — and when two brackets are multiplied
together, every term in the first multiplies every term in the second.

**Worked example.** Expand 3x(2x − 4y).

```
3x(2x − 4y) = 3x × 2x − 3x × 4y = 6x² − 12xy
```

**Worked example.** Expand (3x + y)(x − 4y).

```
(3x + y)(x − 4y)
= 3x·x + 3x·(−4y) + y·x + y·(−4y)
= 3x² − 12xy + xy − 4y²
= 3x² − 11xy − 4y²
```

4024 also expects products of **more than two brackets**, expanded one pair
at a time.

**Worked example.** Expand (x − 2)(x + 3)(2x + 1).

```
Step 1 — expand the first two brackets:
(x − 2)(x + 3) = x² + 3x − 2x − 6 = x² + x − 6

Step 2 — multiply that result by the third bracket:
(x² + x − 6)(2x + 1)
= 2x³ + x² + 2x² + x − 12x − 6
= 2x³ + 3x² − 11x − 6
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--01-expand-area-grid.webp" width="900" height="820" alt="An area grid for (3x + y)(x minus 4y) with columns 3x and y and rows x and minus 4y. The cells are 3x squared, xy, minus 12xy and minus 4y squared. Adding them and combining the xy terms gives 3x squared minus 11xy minus 4y squared." loading="lazy">
  <figcaption>Every term in the first bracket multiplies every term in the second.</figcaption>
</figure>


## Factorising

**Factorise** means the reverse of expanding — write an expression as a
product of brackets, taken as far as it will go ("factorise fully").

**Common factors.** Look for the highest common factor of every term and take
it outside a bracket.

```
9x² + 15xy = 3x(3x + 5y)
```

**Grouping — *ax + bx + kay + kby*.** Group terms in pairs that share a
common factor, factorise each pair, then take out the bracket they now share.

```
ax + bx + kay + kby
= x(a + b) + ky(a + b)
= (a + b)(x + ky)
```

**Difference of two squares — *a²x² − b²y²*.** This always factorises as the
product of a sum and a difference.

```
a²x² − b²y² = (ax − by)(ax + by)
```

**Perfect square — *a² + 2ab + b²*.** This is a squared bracket in disguise.

```
a² + 2ab + b² = (a + b)²
```

**Quadratic trinomial — *ax² + bx + c*.** Find two numbers that multiply to
give *ac* and add to give *b*, then split the middle term and group.

```
x² + 5x + 6:  need two numbers multiplying to 6, adding to 5 → 2 and 3
x² + 5x + 6 = (x + 2)(x + 3)
```

**Common factor plus quadratic — *ax³ + bx² + cx*.** Take out the common
factor first, then factorise what's left if it will factorise further.

```
2x³ + 10x² + 12x
= 2x(x² + 5x + 6)
= 2x(x + 2)(x + 3)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--02-factorise-trinomial-tiles.webp" width="900" height="670" alt="Tiles for x squared plus 5x plus 6 fit into a rectangle of width x plus 3 and height x plus 2. The six unit tiles fill the corner, which is why the numbers must multiply to 6 and add to 5. So the expression equals (x + 2)(x + 3)." loading="lazy">
  <figcaption>The tiles for x² + 5x + 6 build a rectangle with sides x + 2 and x + 3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--03-difference-of-squares.webp" width="900" height="886" alt="A square of side a with a b-by-b square removed leaves a shape of area a squared minus b squared. Cut and rearranged it forms a rectangle a plus b by a minus b. With a = 5 and b = 3, 25 minus 9 equals 2 times 8." loading="lazy">
  <figcaption>a² − b² is the area of a rectangle with sides (a − b) and (a + b).</figcaption>
</figure>


## Completing the square

Writing *ax² + bx + c* as a squared bracket plus (or minus) a constant makes
it possible to solve equations, find a minimum or maximum, and sketch a graph
without plotting points. For *x² + bx + c* (coefficient of *x²* equal to 1),
halve the coefficient of *x*, and correct for the difference between the
square you've made and the original expression. When the coefficient of *x²*
is not 1, factor it out of the *x²* and *x* terms first, complete the square
inside the bracket, then multiply back out.

**Worked example.** Write x² + 6x + 5 in completed square form.

```
half of 6 is 3, so start from (x + 3)²
(x + 3)² = x² + 6x + 9

that has 9 where the original only has 5, so subtract 4:
x² + 6x + 5 = (x + 3)² − 4
```

Check by expanding: (x + 3)² − 4 = x² + 6x + 9 − 4 = x² + 6x + 5. ✓

**Worked example (leading coefficient not 1).** Write 2x² + 8x + 3 in
completed square form.

```
factor 2 out of the x² and x terms only:
2x² + 8x + 3 = 2(x² + 4x) + 3

complete the square inside the bracket:
half of 4 is 2, so (x + 2)² = x² + 4x + 4
x² + 4x = (x + 2)² − 4

substitute back and multiply the −4 by the 2 that was factored out:
2x² + 8x + 3 = 2[(x + 2)² − 4] + 3 = 2(x + 2)² − 8 + 3 = 2(x + 2)² − 5
```

Check by expanding: 2(x + 2)² − 5 = 2(x² + 4x + 4) − 5 = 2x² + 8x + 8 − 5 =
2x² + 8x + 3. ✓

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--04-complete-square-tiles.webp" width="900" height="730" alt="Tiles for x squared plus 6x plus 5 nearly make a square of side x plus 3, but the 3 by 3 corner needs 9 unit squares and only 5 are there. So 4 are missing and x squared plus 6x plus 5 equals (x + 3) squared minus 4." loading="lazy">
  <figcaption>Completing the square fills the corner of (x + 3)² and then takes away what was never there.</figcaption>
</figure>


## Algebraic fractions

The rules are the same as for ordinary fractions — but factorising first is
usually what makes a fraction simplify at all.

**Adding fractions with different denominators.** Find a common denominator,
then combine the numerators.

```
x/3 + (x − 4)/2
= 2x/6 + 3(x − 4)/6
= (2x + 3x − 12)/6
= (5x − 12)/6
```

**Multiplying and dividing.** Multiply numerators together and denominators
together; to divide, multiply by the reciprocal of the second fraction.

```
3a/4 × 9a/10 = 27a²/40

3a/4 ÷ 9a/10 = 3a/4 × 10/9a = 30a/36a = 5/6
```

**Simplifying rational expressions.** Factorise the numerator and
denominator first, then cancel any factor common to both.

**Worked example.** Simplify (x² − 2x) / (x² − 5x + 6).

```
numerator:   x² − 2x = x(x − 2)
denominator: x² − 5x + 6 = (x − 2)(x − 3)

(x² − 2x) / (x² − 5x + 6) = x(x − 2) / (x − 2)(x − 3) = x / (x − 3),  x ≠ 2, 3
```

Cancelling is only ever valid for a **factor** of the whole numerator and the
whole denominator — never for a term that's merely added or subtracted
somewhere inside an unfactorised expression.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--05-cancel-factors-graph.webp" width="900" height="1060" alt="The fraction factorises to x(x minus 2) over (x minus 2)(x minus 3), which cancels to x over (x minus 3), x not 2 or 3. The graph of x over (x minus 3) has dashed lines at x = 3 and y = 1; the original fraction has the same graph with an open circle gap at (2, minus 2)." loading="lazy">
  <figcaption>Cancelling a common factor gives the same graph, except the original has a gap where the factor was zero.</figcaption>
</figure>


## Common mistakes

- **Cancelling terms instead of factors.** (x + 4)/x is *not* equal to
4 — you can only cancel something that multiplies the *entire* numerator and
the *entire* denominator, which means factorising first.
- **Forgetting to multiply every term** when expanding a bracket, especially
the sign of the last term in a product like (x − 2)(x + 3).
- **Losing a negative sign** when subtracting one bracket from another, e.g.
treating 2x − 3(x − 5) as 2x − 3x − 15 instead of 2x − 3x + 15.
- **Stopping a factorisation too early.** "Factorise" in 4024 always means
factorise *fully* — 2x² + 4x should become 2x(x + 2), not just x(2x + 4).
- **Getting the sign wrong when completing the square**, e.g. writing
x² + 6x + 5 = (x + 3)² + 4 instead of (x + 3)² − 4. Expanding your answer
back out is the fastest way to check.

## Quick revision checklist

- Collecting like terms to simplify an expression
- Expanding a single bracket, a product of two brackets, and a product of
three brackets
- Factorising by common factor, by grouping, as a difference of two squares,
as a perfect square, and as a quadratic trinomial
- Completing the square for *x² + bx + c*
- Adding, multiplying, dividing and simplifying algebraic fractions,
including factorising before cancelling

## Related resources

Once expanding, factorising and completing the square feel automatic, they
carry straight into 2.5 Equations — solving quadratic equations by
factorisation, by completing the square, and with the quadratic formula all
build directly on the skills above.

- [Indices and Equations](/resources/indices-and-equations/) — subtopics
2.4-2.5, continuing directly from this page
- [Cambridge O Level Mathematics subject hub](/subjects/mathematics/)

*Written against Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027
series. Always check the current syllabus for your examination year.*
