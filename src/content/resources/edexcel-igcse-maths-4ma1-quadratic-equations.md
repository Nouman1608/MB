---
title: "Pearson Edexcel International GCSE Mathematics A 4MA1: Quadratic equations -- Study Guide"
seoTitle: "Edexcel IGCSE Maths 4MA1 Quadratic Equations Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Quadratic equations"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 2
syllabusTopics:
  - qualification: "igcse"
    topic: "equations-formulae-and-identities-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "equations-formulae-and-identities-edexcel-igcse-maths"
    subtopic: "quadratic-equations-edexcel-igcse-maths"
description: "Study guide to 4MA1 section 2.7: solving quadratics by factorising, the formula and completing the square, in context and as simultaneous equations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches section 2.7, **Quadratic equations**, from Topic 2 (Equations, formulae and identities) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017), for the January and June series examined on that specification. On the Foundation tier, 2.7 is limited to solving x² + bx + c = 0 by factorisation. Everything else in this guide -- factorising when the x² coefficient is not 1, the quadratic formula, completing the square, forming equations from a context, and linear-quadratic simultaneous equations -- appears only in the Higher tier content, so it is labelled **Higher tier only**. A calculator may be used on all four papers (1F, 2F, 1H, 2H).

When you have worked through it, test your recall with the [quadratic equations revision notes](/resources/edexcel-igcse-maths-4ma1-quadratic-equations-revision-notes/) and then try the [quadratic equations practice questions](/resources/edexcel-igcse-maths-4ma1-quadratic-equations-practice/). Factorising and completing the square as *expressions* (section 2.2) are taught in the [use of symbols and algebraic manipulation study guide](/resources/igcse-edexcel-mathematics-use-of-symbols-and-algebraic-manipulation/), with [revision notes](/resources/edexcel-igcse-mathematics-algebraic-manipulation-revision-notes/) and [practice questions](/resources/edexcel-igcse-mathematics-algebraic-manipulation-practice/) of their own. This guide uses those skills to *solve equations*. The [Edexcel IGCSE Mathematics course hub](/boards/edexcel/igcse/mathematics/) links the rest of the course, and the [printable checklist](/checklists/edexcel/igcse/mathematics/) lists every specification statement.

## What section 2.7 covers

| Statement | What you must be able to do | Tier |
|---|---|---|
| 2.7A (Foundation) | Solve quadratic equations by factorisation, limited to x² + bx + c = 0 | Both tiers |
| 2.7A (Higher) | Solve quadratic equations by factorisation, including ax² + bx + c = 0 and equations that must be rearranged first | Higher tier only beyond x² + bx + c |
| 2.7B | Solve quadratic equations using the quadratic formula or completing the square | Higher tier only |
| 2.7C | Form and solve quadratic equations from data given in a context | Higher tier only |
| 2.7D | Solve simultaneous equations in two unknowns, one linear and one quadratic | Higher tier only |

Higher tier questions assume the Foundation content, so Higher candidates need all of it.

## The key idea: make one side zero

A quadratic equation can always be written as ax² + bx + c = 0, where a ≠ 0. Every method in 2.7 starts from this form.

Factorising works because of one fact: **if two numbers multiply to give 0, at least one of them is 0.** So if (x − 3)(x + 8) = 0, then x − 3 = 0 or x + 8 = 0, giving x = 3 or x = −8.

This only works when the right-hand side is **zero**. (x − 3)(x + 8) = 10 does not mean x − 3 = 10. You must expand, collect everything on one side, and factorise again.

## 2.7A Solving by factorisation (both tiers)

### Equations of the form x² + bx + c = 0

Find two numbers that **multiply to c** and **add to b**. Write the brackets, then set each bracket equal to zero.

**Worked example 1.** Solve x² − 2x − 35 = 0.

```
Pairs that multiply to -35:  1 and -35,  -1 and 35,  5 and -7,  -5 and 7
Which pair adds to -2?        5 + (-7) = -2

x^2 - 2x - 35 = (x + 5)(x - 7) = 0
x + 5 = 0   or   x - 7 = 0
x = -5      or   x = 7
```

Check by substituting x = 7: 49 − 14 − 35 = 0. Correct.

### Two special cases

**No constant term.** x² = 7x becomes x² − 7x = 0, so x(x − 7) = 0, giving **x = 0 or x = 7**. Do not divide both sides by x: that loses the solution x = 0.

**Difference of two squares.** 9x² − 16 = 0 factorises as (3x − 4)(3x + 4) = 0, so x = 4/3 or x = −4/3. You can also write 9x² = 16, x² = 16/9, x = ±4/3. Remember the ± -- a square root gives a positive *and* a negative answer. (On the Foundation tier the x² coefficient is 1, for example x² − 25 = 0 gives x = ±5.)

### When a is not 1 -- Higher tier only

To factorise ax² + bx + c, find two numbers that multiply to **a × c** and add to **b**. Use them to split the middle term, then factorise in pairs.

**Worked example 2 (Higher tier only).** Solve x(2x + 5) = 12.

```
Expand and make one side zero:
2x^2 + 5x = 12
2x^2 + 5x - 12 = 0

a x c = 2 x (-12) = -24.  Need two numbers multiplying to -24 and adding to 5: 8 and -3

2x^2 + 8x - 3x - 12 = 0
2x(x + 4) - 3(x + 4) = 0
(2x - 3)(x + 4) = 0

2x - 3 = 0   or   x + 4 = 0
x = 3/2      or   x = -4
```

The bracket (2x − 3) gives x = 3/2, not x = 3. Solve each bracket properly.

## 2.7B The quadratic formula -- Higher tier only

The solutions of ax² + bx + c = 0, where a ≠ 0, are

```
x = ( -b ± √(b^2 - 4ac) ) / 2a
```

This formula is printed on the **Higher tier formulae sheet**, so you do not need to memorise it, but you do need to use it accurately. Use it when the quadratic does not factorise, or when a question asks for answers to a given number of decimal places or significant figures -- that is a strong hint that the solutions are not whole numbers.

The expression under the square root, b² − 4ac, decides what happens. If it is positive there are two solutions. If it is zero the two solutions are equal. If it is negative there are no real solutions, because you cannot take the square root of a negative number.

**Worked example 3 (Higher tier only).** Solve 3x² − 7x + 1 = 0. Give your answers correct to 3 significant figures.

```
a = 3,  b = -7,  c = 1

b^2 - 4ac = (-7)^2 - 4(3)(1) = 49 - 12 = 37

x = ( 7 ± √37 ) / 6

x = (7 + √37)/6 = 2.1804...  ->  x = 2.18
x = (7 - √37)/6 = 0.1528...  ->  x = 0.153
```

Two habits stop most errors. First, write a, b and c down **with their signs** before substituting. Second, put negative values in brackets: (−7)² is 49, but typing −7² into a calculator gives −49. Write the exact form (7 ± √37)/6 before rounding, so a mark is still available if a keying slip spoils the decimals.

## 2.7B Completing the square -- Higher tier only

Completing the square rewrites x² + bx + c as (x + b/2)² − (b/2)² + c. Once the equation is in the form (x + p)² = q, you square-root both sides.

**Worked example 4 (Higher tier only).** Solve x² − 10x + 18 = 0 by completing the square. Give exact answers.

```
x^2 - 10x = (x - 5)^2 - 25

x^2 - 10x + 18 = (x - 5)^2 - 25 + 18 = (x - 5)^2 - 7

(x - 5)^2 - 7 = 0
(x - 5)^2 = 7
x - 5 = ±√7
x = 5 + √7   or   x = 5 - √7
```

Exact answers keep the surd. As decimals they are 7.65 and 2.35 to 3 significant figures.

When the x² coefficient is not 1, take it out as a factor of the x terms first. For 2x² − 12x + 7 = 0:

```
2(x^2 - 6x) + 7 = 0
2[(x - 3)^2 - 9] + 7 = 0
2(x - 3)^2 - 11 = 0
(x - 3)^2 = 11/2
x = 3 ± √(11/2)
```

Completing the square is the better choice when the question asks for answers "in the form a ± √b", or when part (a) has already asked you to write the expression as (x + p)² + q. The word **"hence"** means you must use that earlier result.

## 2.7C Forming equations from a context -- Higher tier only

Here the equation is not given. You have to build it from the information, solve it, and then decide which solutions make sense.

**Method:**

1. Use the letter given in the question (or define one).
2. Write an equation from the facts -- area, Pythagoras, speed-distance-time, or a stated relationship.
3. Expand and rearrange to ax² + bx + c = 0.
4. Solve by the most efficient method.
5. Reject any solution that is impossible in the context (a negative length, a negative time), and say why.
6. Answer the question that was asked, with units.

**Worked example 5 (Higher tier only).** A rectangle has length (x + 5) cm and width (x − 2) cm. Its area is 60 cm². Find the length and width of the rectangle.

```
(x + 5)(x - 2) = 60
x^2 + 3x - 10 = 60
x^2 + 3x - 70 = 0
(x + 10)(x - 7) = 0
x = -10   or   x = 7

x = -10 gives a width of -12 cm, which is impossible, so x = 7.

Length = 7 + 5 = 12 cm,  width = 7 - 2 = 5 cm.   Check: 12 x 5 = 60
```

The question asked for the dimensions, not x, so do not stop at x = 7.

## 2.7D Linear and quadratic simultaneous equations -- Higher tier only

When one equation is linear and the other is quadratic, you cannot use elimination as you would for two straight lines. Use **substitution**:

1. Rearrange the linear equation to make x or y the subject (often it already is).
2. Substitute it into the quadratic equation.
3. Expand, simplify to a quadratic in one letter, and solve it.
4. Substitute **each** value back into the **linear** equation to find the partner value.
5. Write the answers as matching pairs.

Each pair is the coordinates of a point where the straight line meets the curve. Two solutions mean the line crosses the curve twice.

**Worked example 6 (Higher tier only).** Solve the simultaneous equations y = x + 1 and x² + y² = 13.

```
Substitute y = x + 1 into x^2 + y^2 = 13:
x^2 + (x + 1)^2 = 13
x^2 + x^2 + 2x + 1 = 13
2x^2 + 2x - 12 = 0
x^2 + x - 6 = 0            (divide by 2)
(x + 3)(x - 2) = 0
x = -3   or   x = 2

Using y = x + 1:
x = 2  ->  y = 3
x = -3 ->  y = -2

Solutions: x = 2, y = 3   and   x = -3, y = -2
```

Check one pair in the quadratic: 2² + 3² = 4 + 9 = 13. Correct.

**Worked example 7 (Higher tier only).** Solve y = x² − 3x + 4 and y = 2x − 2.

```
Both equal y, so:  x^2 - 3x + 4 = 2x - 2
x^2 - 5x + 6 = 0
(x - 2)(x - 3) = 0
x = 2  ->  y = 2(2) - 2 = 2
x = 3  ->  y = 2(3) - 2 = 4

Solutions: x = 2, y = 2   and   x = 3, y = 4
```

The commonest error is squaring (x + 1) as x² + 1. Write (x + 1)² as (x + 1)(x + 1) and expand all four terms.

## Choosing a method

| Situation | Best method |
|---|---|
| Whole-number coefficients and the expression factorises | Factorise |
| Answers wanted to 3 s.f. or 2 d.p. | Quadratic formula |
| Answers wanted "in the form a ± √b", or "hence" after writing (x + p)² + q | Completing the square |
| Equation of the form x² = k | Square-root both sides, keep ± |
| One linear and one quadratic equation | Substitute, then use any of the above |

If you cannot find the factors within a few seconds, move to the formula.

## Common errors

- Setting each bracket equal to a non-zero number, as in (x − 3)(x + 8) = 10 so x = 13.
- Dividing both sides by x and losing the solution x = 0.
- Giving x = 3 from the bracket (2x − 3) instead of x = 3/2.
- Losing the ± when square-rooting, which drops one solution.
- Typing −7² instead of (−7)² in the formula, or dividing only the square root by 2a.
- Expanding (x + 1)² as x² + 1 in a simultaneous equations question.
- Pairing an x-value with the wrong y-value, or finding y from the quadratic and getting an extra, wrong pair.
- Keeping a negative length or time in a context question.

## Where next

Use the [revision notes](/resources/edexcel-igcse-maths-4ma1-quadratic-equations-revision-notes/) for a fast recap and self-test, then the [practice questions](/resources/edexcel-igcse-maths-4ma1-quadratic-equations-practice/) for full worked answers with mark allocations. Graphs of quadratic functions are covered in the [sequences, functions and graphs study guide](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs/). To find your weakest topics across the course, try the [free diagnostics](/diagnostics/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, first examination June 2018, published by Pearson Education Limited. Section 2.7 Quadratic equations (Foundation tier statement A; Higher tier statements A to D).
