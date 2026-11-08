---
title: "IB DP Mathematics: Analysis and Approaches -- Polynomials, rational functions, odd/even functions and modulus graphs (HL) Study Guide"
seoTitle: "IB Maths AA HL Polynomials and Rational Functions Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Polynomials, rational functions, odd/even functions and modulus graphs (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-16"
description: "Study guide to IB DP Maths AA HL further functions: factor theorem, roots of polynomials, rational graphs, odd/even and inverse functions, modulus."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-27
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
---

This study guide teaches the HL further functions unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 2.12–2.16. All of this content is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you have worked through it, use the [further functions revision notes](/resources/ib-dp-mathematics-aa-hl-further-functions-revision-notes/) for final-weeks recall and the [further functions practice questions](/resources/ib-dp-mathematics-aa-hl-further-functions-practice/) to test yourself. The SL groundwork (domain, range, composite functions, transformations, the reciprocal function) is in the [functions study guide](/resources/ib-dp-mathematics-aa-functions/). For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 2.12 | Work with polynomial graphs, zeros, roots and factors; use the factor and remainder theorems; use the sum and product of the roots | HL only |
| 2.13 | Sketch rational functions (ax + b)/(cx² + dx + e) and (ax² + bx + c)/(dx + e) with all asymptotes (horizontal, vertical, oblique) and intercepts | HL only |
| 2.14 | Test for odd and even functions, including periodic ones; find f⁻¹(x) with a domain restriction; recognise self-inverse functions | HL only |
| 2.15 | Solve g(x) ≥ f(x) graphically and analytically (by hand for simple polynomials up to degree 3; with technology otherwise) | HL only |
| 2.16 | Sketch y = \|f(x)\|, y = f(\|x\|), y = 1/f(x), y = f(ax + b) and y = [f(x)]²; solve modulus equations and inequalities | HL only |

## 2.12 Polynomials

A polynomial of degree n is p(x) = aₙxⁿ + … + a₁x + a₀ with aₙ ≠ 0. Its graph has at most n x-intercepts and at most n − 1 turning points.

- A **zero** of p is where p(x) = 0; a **root** solves p(x) = 0. They are the same numbers.
- A single **factor** (x − r) means the graph crosses the x-axis at r; (x − r)² means it touches; (x − r)³ means it crosses with a point of inflection.

### Factor and remainder theorems

- **Remainder theorem:** when p(x) is divided by (x − r), the remainder is p(r). Dividing by (ax − b) gives remainder p(b/a).
- **Factor theorem:** (x − r) is a factor of p(x) if and only if p(r) = 0.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--02-remainder-theorem-graph.webp" width="900" height="890" alt="Graph of p(x) = 2x^3 + 3x^2 - 11x - 6 = (x - 2)(2x + 1)(x + 3) with zeros at -3, -1/2 and 2. A dashed line at x = -1, the zero of the divisor (x + 1), meets the curve at (-1, 6), so the remainder on dividing by (x + 1) is 6." loading="lazy">
  <figcaption>The remainder on dividing by (x + 1) is the height of the graph at x = -1.</figcaption>
</figure>


### Worked example 1

p(x) = 2x³ + ax² + bx − 6. (x − 2) is a factor, and the remainder on dividing by (x + 1) is 6. Find a and b and factorise p(x) fully.

```
p(2) = 0:   16 + 4a + 2b − 6 = 0   →  2a + b = −5
p(−1) = 6:  −2 + a − b − 6 = 6     →  a − b = 14
Add:        3a = 9                 →  a = 3, b = −11
```

So **a = 3** and **b = −11**.

Divide by (x − 2): 2x³ + 3x² − 11x − 6 = (x − 2)(2x² + 7x + 3) = **(x − 2)(2x + 1)(x + 3)**.

Check: p(−1) = −2 + 3 + 11 − 6 = 6. Correct.

### Sum and product of the roots

For the polynomial equation aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀ = 0, counting complex roots and repeated roots:

- sum of the roots = −aₙ₋₁/aₙ
- product of the roots = (−1)ⁿa₀/aₙ

For a cubic ax³ + bx² + cx + d = 0 this gives sum −b/a and product −d/a. For a quartic the product is +a₀/a₄. Complex roots of real polynomials come in conjugate pairs (section 1.14 — see the [complex numbers study guide](/resources/ib-dp-mathematics-aa-hl-complex-numbers/)).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--03-sum-product-of-roots.webp" width="900" height="960" alt="Graph of x^3 - 6x^2 + 11x - 6 with roots 1, 2 and 3 at spacing d = 1 about the centre root m = 2; the curve has half-turn symmetry about (2, 0). Bars 1, 2 and 3 add to 6 = -b/a, and a 1 by 2 by 3 block has 6 cells, matching the product -d/a = 6." loading="lazy">
  <figcaption>Roots in arithmetic sequence centre on m = sum/3, and sum and product read straight from the coefficients.</figcaption>
</figure>


### Worked example 2

The roots of x³ − 6x² + kx − 6 = 0 form an arithmetic sequence. Find k and the roots.

Let the roots be m − d, m, m + d. Their sum is 3m = −(−6)/1 = 6, so m = 2. Since 2 is a root, 8 − 24 + 2k − 6 = 0, so **k = 11**. Then x³ − 6x² + 11x − 6 = (x − 2)(x² − 4x + 3) = (x − 1)(x − 2)(x − 3), so the roots are **1, 2 and 3**. Check the product: (−1)³(−6)/1 = 6 = 1 × 2 × 3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--01-repeated-factors.webp" width="900" height="650" alt="Three small graphs, each with the factor (x - 1) to the power 1, 2 or 3 times (x + 2). Power 1 crosses the x-axis at x = 1 with non-zero slope, power 2 touches the axis and turns back, and power 3 crosses while flattening, a point of inflection. Odd powers cross and even powers touch." loading="lazy">
  <figcaption>The power of a factor decides whether the graph crosses, touches or flattens at its root.</figcaption>
</figure>


## 2.13 Rational functions

HL adds two shapes to the SL reciprocal and (ax + b)/(cx + d) functions.

**Type 1: f(x) = (ax + b)/(cx² + dx + e)**

- Vertical asymptotes where the denominator is zero (and the numerator is not).
- Horizontal asymptote **y = 0**. The graph can cross it at the zero of the numerator.

**Type 2: f(x) = (ax² + bx + c)/(dx + e)**

- One vertical asymptote at x = −e/d.
- An **oblique asymptote** found by division: write f(x) = mx + k + R/(dx + e). The line y = mx + k is the asymptote, since R/(dx + e) → 0 as x → ±∞.

Give asymptotes as equations and intercepts as coordinates.

### Worked example 3

Sketch y = (2x − 1)/(x² − x − 6).

- Denominator: (x − 3)(x + 2), so vertical asymptotes **x = 3** and **x = −2**.
- Horizontal asymptote **y = 0**.
- x-intercept: 2x − 1 = 0 gives **(1/2, 0)**. y-intercept: −1/−6 gives **(0, 1/6)**.
- Signs: negative for x < −2, positive on (−2, 1/2), negative on (1/2, 3), positive for x > 3. This places each branch.

### Worked example 4

Find the asymptotes and intercepts of y = (x² + x − 2)/(x − 2).

Divide: x² + x − 2 = (x − 2)(x + 3) + 4, so y = x + 3 + 4/(x − 2).

- Vertical asymptote **x = 2**; oblique asymptote **y = x + 3**.
- Numerator (x + 2)(x − 1): x-intercepts **(−2, 0)** and **(1, 0)**. y-intercept **(0, 1)**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--04-rational-asymptotes.webp" width="900" height="1100" alt="Top: y = (2x - 1)/(x^2 - x - 6) has vertical asymptotes x = -2 and x = 3, horizontal asymptote y = 0 and intercepts (1/2, 0) and (0, 1/6). Bottom: y = (x^2 + x - 2)/(x - 2) = x + 3 + 4/(x - 2) has vertical asymptote x = 2, oblique asymptote y = x + 3 and intercepts (-2, 0), (1, 0) and (0, 1)." loading="lazy">
  <figcaption>The two HL rational types, with their vertical, horizontal and oblique asymptotes and intercepts.</figcaption>
</figure>


## 2.14 Odd, even, inverse and self-inverse functions

- **Even:** f(−x) = f(x) for all x in the domain. The graph is symmetric in the y-axis. Examples: x², x⁴ − 3x², cos x.
- **Odd:** f(−x) = −f(x). The graph has rotational symmetry of order 2 about the origin. Examples: x³, 1/x, sin x, tan x.
- Most functions are neither: show this with one value where both tests fail.

The guide includes periodic functions: sin 2x is odd, cos 3x is even, and sin x + cos x is neither.

### Worked example 5

Show that f(x) = x³ sin x is even and g(x) = x/(x² + 1) is odd.

f(−x) = (−x)³ sin(−x) = (−x³)(−sin x) = x³ sin x = f(x), so f is even.

g(−x) = (−x)/((−x)² + 1) = −x/(x² + 1) = −g(x), so g is odd.

### Inverses with a domain restriction

f⁻¹ exists only when f is one-to-one, so restrict the domain to one side of any turning point. Swap x and y, rearrange, and state the domain of f⁻¹ (the range of f).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--06-inverse-restricted-domain.webp" width="900" height="970" alt="Equal-scale graph of f(x) = x^2 - 4x + 1 for x &gt;= 2 (from (2, -3)) and its inverse 2 + sqrt(x + 3) for x &gt;= -3 (from (-3, 2)), reflections in the dashed line y = x, for example (4, 1) and (1, 4). The left part of the parabola is dropped so f is one-to-one." loading="lazy">
  <figcaption>Restrict the domain so f is one-to-one; the inverse is the reflection in y = x with its domain equal to the range of f.</figcaption>
</figure>


### Worked example 6

f(x) = x² − 4x + 1, x ≥ 2. Find f⁻¹(x) and its domain.

Complete the square: f(x) = (x − 2)² − 3. With x ≥ 2 the range is f(x) ≥ −3.

Let y = (x − 2)² − 3, so x − 2 = √(y + 3) (positive root, since x ≥ 2). Hence **f⁻¹(x) = 2 + √(x + 3), x ≥ −3**.

### Self-inverse functions

f is self-inverse when f(f(x)) = x, so f⁻¹ = f and the graph is symmetric in y = x. Examples: 1/x, c − x and (ax + b)/(cx − a).

### Worked example 7

Show that f(x) = (3x + 5)/(x − 3), x ≠ 3, is self-inverse.

```
f(f(x)) = [3(3x + 5)/(x − 3) + 5] / [(3x + 5)/(x − 3) − 3]
        = [(9x + 15 + 5x − 15)/(x − 3)] / [(3x + 5 − 3x + 9)/(x − 3)]
        = 14x / 14 = x
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--05-odd-even-symmetry.webp" width="900" height="1040" alt="Top: f(x) = x^3 sin x is even; points at x = -2 and 2 have equal height (about 7.3), a mirror in the y-axis. Bottom: g(x) = x/(x^2 + 1) is odd; (2, 0.4) and (-2, -0.4) lie on a line through the origin, a half-turn symmetry." loading="lazy">
  <figcaption>Even graphs mirror in the y-axis; odd graphs have half-turn symmetry about the origin.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--07-self-inverse.webp" width="900" height="970" alt="Equal-scale graph of y = (3x + 5)/(x - 3), symmetric in y = x with asymptotes x = 3 and y = 3. Points (4, 17) and (17, 4) are on the curve and mirror each other in y = x, so f(f(x)) = x and f is its own inverse." loading="lazy">
  <figcaption>A self-inverse function has a graph that is symmetric in the line y = x.</figcaption>
</figure>


## 2.15 Solving g(x) ≥ f(x)

Move everything to one side: g(x) − f(x) ≥ 0. Find the zeros, then use a sketch or a sign table.

### Worked example 8 (by hand)

Solve x³ ≥ 2x² + 5x − 6.

x³ − 2x² − 5x + 6 ≥ 0. Test x = 1: 1 − 2 − 5 + 6 = 0, so (x − 1) is a factor. Then x³ − 2x² − 5x + 6 = (x − 1)(x + 2)(x − 3).

The cubic is positive on (−2, 1) and for x > 3, so **−2 ≤ x ≤ 1 or x ≥ 3**.

### Worked example 9 (technology)

Solve eˣ ≥ x + 2.

Graph y = eˣ and y = x + 2 and find the intersections: x = −1.84 and x = 1.15 (3 s.f.). The exponential is above the line outside these values, so **x ≤ −1.84 or x ≥ 1.15**.

## 2.16 Modulus and related graphs

| Graph | How to get it from y = f(x) |
|---|---|
| y = \|f(x)\| | Reflect any part below the x-axis in the x-axis |
| y = f(\|x\|) | Keep the part for x ≥ 0, delete x < 0, reflect the kept part in the y-axis (the result is even) |
| y = 1/f(x) | Zeros of f become vertical asymptotes; vertical asymptotes of f become zeros; a maximum at (p, q) with q ≠ 0 becomes a minimum at (p, 1/q), and vice versa; points with y = ±1 stay put; the sign is unchanged |
| y = f(ax + b) | A point (p, q) moves to ((p − b)/a, q): translate by b units left, then stretch horizontally by scale factor 1/a |
| y = [f(x)]² | Never negative; zeros of f become points where the graph touches the x-axis; points with y = ±1 go to y = 1; values with \|f\| > 1 grow, values with \|f\| < 1 shrink |

The composite f(ax + b) is HL only; SL excludes it.

### Worked example 10

f(x) = x² − 2x − 3 = (x + 1)(x − 3), with minimum point (1, −4).

- y = f(2x − 4): points map to ((p + 4)/2, q). The minimum goes to **(5/2, −4)** and the zeros to x = **3/2** and **7/2**.
- y = 1/f(x): vertical asymptotes **x = −1** and **x = 3**; the minimum (1, −4) becomes a local maximum **(1, −1/4)**.
- y = [f(x)]²: touches the axis at x = −1 and x = 3; local maximum **(1, 16)**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--08-reciprocal-and-square.webp" width="900" height="1120" alt="From f(x) = x^2 - 2x - 3 (dotted): y = 1/f(x) has asymptotes x = -1 and x = 3 and the minimum (1, -4) becomes a local maximum (1, -1/4); y = [f(x)]^2 touches the x-axis at -1 and 3 with maximum (1, 16). Points where f = +/-1 stay on 1/f and sit at height 1 on f squared." loading="lazy">
  <figcaption>1/f flips minima to maxima and turns zeros into asymptotes; f squared is never negative and touches at the zeros.</figcaption>
</figure>


### Modulus equations and inequalities

For \|f(x)\| = g(x), solve f(x) = g(x) and f(x) = −g(x), then **reject** any solution with g(x) < 0. For \|f(x)\| < \|g(x)\|, both sides are non-negative, so you can square both sides.

### Worked example 11

Solve \|2x − 3\| = x + 1.

- 2x − 3 = x + 1 gives x = 4 (x + 1 = 5 > 0, valid).
- 2x − 3 = −(x + 1) gives 3x = 2, x = 2/3 (x + 1 = 5/3 > 0, valid).

So **x = 4 or x = 2/3**.

### Worked example 12

Solve \|x − 2\| < \|2x + 1\|.

Square: x² − 4x + 4 < 4x² + 4x + 1, so 0 < 3x² + 8x − 3 = (3x − 1)(x + 3). Hence **x < −3 or x > 1/3**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--09-cubic-inequality.webp" width="900" height="880" alt="Graphs of y = x^3 and y = 2x^2 + 5x - 6 meet at x = -2, 1 and 3. Teal shading marks where the cubic is above the quadratic (-2 &lt;= x &lt;= 1 and x &gt;= 3), gold where it is below. So x^3 &gt;= 2x^2 + 5x - 6 for -2 &lt;= x &lt;= 1 or x &gt;= 3." loading="lazy">
  <figcaption>The solution of g(x) &gt;= f(x) is where the graph of g lies on or above the graph of f.</figcaption>
</figure>


## Using your GDC

HL Paper 1 allows no technology; Papers 2 and 3 require it. So you must factorise, find asymptotes, test odd/even, find inverses and solve polynomial inequalities up to degree 3 by hand. The guide expects technology for inequalities involving other functions (as in example 9). On a GDC, graph both sides, use the intersect tool and give endpoints to 3 s.f.

## Common errors

- Using p(r) for a divisor (x + r). The remainder on dividing by (x + 1) is p(−1).
- Forgetting the (−1)ⁿ in the product of roots: for a cubic the product is −a₀/a₃, not +a₀/a₃.
- Giving y = 0 as the asymptote of (ax² + bx + c)/(dx + e). It has an oblique asymptote.
- Writing an asymptote as "3" instead of the equation x = 3.
- Testing odd/even with one number and claiming "even". A single value can only prove "neither".
- Leaving out the domain of f⁻¹, or choosing the wrong sign of the square root.
- Dividing an inequality by an expression that could be negative, such as (x − 1).
- Keeping modulus solutions that make the right-hand side negative.
- For f(ax + b), stretching first and then translating by b instead of b/a.

## Where to go next

Use the [revision notes](/resources/ib-dp-mathematics-aa-hl-further-functions-revision-notes/) and the [practice questions](/resources/ib-dp-mathematics-aa-hl-further-functions-practice/) next. These functions reappear in the [calculus study guide](/resources/ib-dp-mathematics-aa-calculus/). See also the [syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/), [subject guide](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/) and [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/).

## Frequently asked questions

**What is an oblique asymptote?**
For a rational function (ax² + bx + c)/(dx + e), divide to write it as mx + k + R/(dx + e). The line y = mx + k is the oblique asymptote, because the remainder term tends to zero.

**How many turning points can a polynomial have?**
A polynomial of degree n has at most n x-intercepts and at most n − 1 turning points.

**How do you find an inverse when the function is not one-to-one?**
Restrict the domain to one side of any turning point, for example by completing the square to find it, then swap x and y and rearrange. State the domain of f⁻¹, which is the range of f.

**Is this further functions unit HL only in IB Maths AA?**
Yes. Syllabus sections 2.12 to 2.16, covering polynomials, rational functions, odd, even and inverse functions, inequalities and modulus graphs, are HL only in IB DP Mathematics: Analysis and Approaches.

**Are periodic functions odd or even?**
They can be either or neither. sin 2x is odd, cos 3x is even, and sin x + cos x is neither.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), syllabus sections AHL 2.12–2.16.
