---
title: "AQA GCSE Mathematics: Algebra — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Algebra"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 1
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
description: "Condensed recall notes on notation, graphs, solving equations and inequalities, and sequences for AQA GCSE Mathematics (8300), Topic 2 Algebra."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Algebra study guide](/resources/aqa-gcse-mathematics-algebra/).

## Notation, vocabulary and manipulation (3.2.1)

**Vocabulary:** expression, equation, formula, inequality, term, factor, and (Higher) **identity** (true for every value, unlike an equation which is only true for specific values — tested directly).

**Notation:** ab, 3y, a², 1/a in place of the longer expressions. **Simplest form always expected** — leaving "2×x + 3×x" instead of "5x" loses marks even with correct method.

**Manipulation:** collecting like terms, expanding brackets, factorising; Higher tier — expanding products of two+ binomials, factorising quadratics ax²+bx+c; rearranging a formula to change the subject; (Higher) function notation — f(x), inverse f⁻¹(x), composite fg(x).

## Graphs (3.2.2)

```
y = mx + c    -- m = gradient, c = y-intercept
```

**Common trap:** given 2y = 4x + 6, the gradient is **2**, not 4 — rearrange to y = mx + c form first.

| Function type | Shape |
|---|---|
| Linear | Straight line |
| Quadratic | Parabola — roots, intercepts, turning point |
| Cubic | S-curve |
| Reciprocal | Two curved branches |
| Exponential | Curve growing/decaying |
| Trigonometric (Higher) | Periodic wave |

**Higher tier also:** gradients/areas under graphs (kinematics, financial contexts), equation of a circle centred at the origin, tangent to a circle.

## Solving equations and inequalities (3.2.3)

| Method | When |
|---|---|
| **Factorising** | Quadratic has clean integer roots |
| **Completing the square** | No clean roots, or need the turning point |
| **Quadratic formula** | Always works, any quadratic |
| **Graph** | Approximate solutions, any case |
| **Iteration (Higher)** | Numerical approximation |

**Simultaneous equations:** linear/linear (Foundation); linear/quadratic (Higher) — substitute the linear equation into the quadratic.

**Inequalities:** linear (all tiers), quadratic (Higher) — represent on a number line; Higher tier also uses **set notation**.

**Practise solving the SAME equation both algebraically and graphically** — the specification deliberately tests both, since graphical solutions are approximate and algebraic ones exact.

## Sequences (3.2.4)

| Sequence type | Rule |
|---|---|
| **Arithmetic** | Constant common difference |
| **Triangular/square/cube** | Named number patterns |
| **Fibonacci-type (Higher)** | Each term = sum of previous two |
| **Quadratic (Higher)** | nth term includes n² |
| **Geometric (Higher)** | Constant common ratio, possibly a surd |

**nth term of a linear sequence:** the coefficient of n is always the **common difference** — check quickly against the first few terms rather than memorising per question.

## Worked example: nth term

Find the nth term of 5, 8, 11, 14, ...

```
Common difference = 3, so coefficient of n is 3
3n gives: 3, 6, 9, 12 -- each 2 less than the actual sequence
So nth term = 3n + 2
Check: n=1 -> 5, n=2 -> 8 (correct)
```

## Worked example: solving a linear-quadratic simultaneous pair

Solve y = x + 1 and y = x² − 1 simultaneously.

```
x + 1 = x^2 - 1
0 = x^2 - x - 2
0 = (x - 2)(x + 1)
x = 2 or x = -1

Substitute back: x=2 -> y=3;  x=-1 -> y=0
Solutions: (2, 3) and (-1, 0)
```

## How the four sub-sections connect

**Notation/manipulation (3.2.1)** is the toolkit everything else depends on. **Graphs (3.2.2)** is manipulation made visual — y = mx + c *is* a straight-line graph; a quadratic's roots *are* the solutions from factorising/the formula. **Solving (3.2.3)** is manipulation used to find an answer, testable algebraically *and* graphically. **Sequences (3.2.4)** use the same algebraic skills to build and rearrange nth-term expressions.

## Worked example: quadratic sequence nth term (Higher)

Find the nth term of 3, 8, 15, 24, 35, ...

```
First differences:  5, 7, 9, 11        (not constant -- not linear)
Second differences: 2, 2, 2            (constant -- quadratic sequence)

Coefficient of n^2 = second difference / 2 = 2 / 2 = 1
So the sequence starts from n^2: 1, 4, 9, 16, 25
Compare to actual: 3, 8, 15, 24, 35
Difference each time: +2, +4, +6, +8, +10 -- this is 2n

So nth term = n^2 + 2n
Check: n=1 -> 1+2=3 (correct); n=2 -> 4+4=8 (correct)
```

Finding the second differences first, using them to identify the n² coefficient, and then finding the remaining linear part by comparison is the standard, reliable method for quadratic nth-term questions -- attempting to spot the pattern directly, without this structured approach, is where most errors happen under exam pressure.

## Key terms

**Equation** — true only for specific values of the unknown. **Identity** — true for every value. **Gradient** — rate of change; the m in y = mx + c. **nth term** — a formula generating any term in a sequence from its position.

## Common mistakes

- Leaving an answer not in simplest form.
- Confusing an equation with an identity.
- Misreading gradient from a rearranged equation (2y = 4x + 6 → gradient is 2, not 4).
- Forgetting which content is **Higher-tier-only** — wastes revision time (Foundation) or leaves gaps (Higher).
- Memorising nth-term formulas per question instead of deriving from the common difference.

## Quick self-test

- Simplify 4a × 3b, and rearrange 2y = 6x − 8 to identify the gradient and y-intercept.
- Solve x² − x − 6 = 0 by factorising.
- Find the nth term of 7, 11, 15, 19.
- Solve the simultaneous pair y = 2x − 1 and y = x² + 1.
- List three pieces of Higher-tier-only Algebra content from memory.

## Official syllabus

AQA, *GCSE Mathematics (8300) Specification*, for first teaching
2015, subject content section 3.2 Algebra,
https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/subject-content/3.2-algebra,
fetched and verified in full 2026-09-02.
