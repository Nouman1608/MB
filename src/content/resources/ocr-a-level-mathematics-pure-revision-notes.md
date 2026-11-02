---
title: "OCR A Level Mathematics: Pure Mathematics — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure mathematics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
description: "Condensed recall notes on proof, algebra, functions, sequences, trigonometry, calculus and vectors for OCR A Level Mathematics H240."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Mathematics study guide](/resources/ocr-a-level-mathematics-pure-mathematics/).

## Proof

| Method | Approach |
|---|---|
| **Deduction** | Argue directly from known results |
| **Exhaustion** | Check every case |
| **Counter-example** | One case disproves a general statement |
| **Contradiction** | Assume the negation, derive an impossibility |

**Contradiction is the one examined most.** The classic results are the irrationality of √2 and the infinitude of primes. The structure must be explicit: *assume the opposite*, derive a contradiction, conclude the original statement.

**A single counter-example disproves a statement, but no number of examples proves one.** Stating that explicitly is often worth a mark.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--01-proof-anatomy.webp" width="900" height="680" alt="A 7 by 7 grid with a 5 by 5 square in one corner shows 7² − 5² = 24 left over. Beside it are the three parts of a proof: assume 2n+1 and 2n+3, show (2n+3)² − (2n+1)² = 8(n+1), conclude a multiple of 8 for every n. For n = 2 this is 49 − 25 = 24 = 8 × 3." loading="lazy">
  <figcaption>A proof starts from stated assumptions, makes valid steps and ends with a conclusion that holds for every n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--03-remainder-lanes.webp" width="900" height="1075" alt="The integers 0 to 39 are arranged in four columns by remainder on division by 4. Squares sit only in the 4k and 4k+1 columns. Cubes (OCR only) sit in 4k, 4k+1 and 4k+3 but never 4k+2." loading="lazy">
  <figcaption>Every integer lies in one of four remainder lanes, so four cases cover them all.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--05-counter-example-graph.webp" width="900" height="920" alt="The graph of y = x² with the line y = 25 shows x² &gt; 25 for x &lt; −5 or x &gt; 5. The claim only fits x &gt; 5. The point (−6, 36) is above the line but −6 is not greater than 5, so it disproves the claim." loading="lazy">
  <figcaption>One case that meets the condition but breaks the conclusion disproves a general claim.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--07-root2-contradiction.webp" width="900" height="830" alt="Assume √2 = p/q in lowest terms. Squaring gives p² = 2q², so p is even, and p = 2r then gives q even. Both are even so they share the factor 2, shown as a Venn overlap, which clashes with lowest terms. So √2 is irrational." loading="lazy">
  <figcaption>The assumption of lowest terms is what the contradiction clashes with.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--08-infinite-primes.webp" width="900" height="880" alt="Six primes 2 to 13 each leave remainder 1 into N = 30031. N = 59 × 509, two primes not on the list. N need not be prime, only have a prime factor missing from the list." loading="lazy">
  <figcaption>Multiplying the listed primes and adding 1 always yields a prime factor not on the list.</figcaption>
</figure>


## Functions

- **Domain** — the set of permitted inputs. **Range** — the set of outputs.
- `fg(x)` means "do **g first**". The order is the most common error.
- **Inverse f⁻¹** exists only if f is **one-to-one**; the graph of f⁻¹ is the reflection of f in `y = x`, and the domain and range swap.
- **Modulus:** `|f(x)|` reflects negative parts above the axis; `f(|x|)` reflects the right-hand side into the left.

**Transformations:**

| | Effect |
|---|---|
| `f(x) + a` | Up by a |
| `f(x + a)` | **Left** by a |
| `af(x)` | Vertical stretch, factor a |
| `f(ax)` | Horizontal stretch, factor **1/a** |

Changes **inside** the bracket affect x and behave opposite to expectation. That is the trap.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-pure-revision-notes--06-modulus-reflections.webp" width="900" height="1040" alt="From f(x) = x squared plus 2x minus 3: |f(x)| flips the part below the x-axis upward, peaking at (-1, 4); f(|x|) copies the right-hand side into the left, crossing the y-axis at (0, -3)." loading="lazy">
  <figcaption>|f(x)| reflects negative parts above the axis; f(|x|) reflects the right side into the left.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--01-range-depends-on-domain.webp" width="900" height="830" alt="Graph of f(x) = x squared - 10x + 29. The whole parabola has its turning point at (5, 4) but the domain x at least 6 uses only the solid right-hand part, starting at (6, 5). The range is therefore f(x) at least 5, not at least 4." loading="lazy">
  <figcaption>Restricting the domain can change the range, because the lowest point may fall outside it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--03-fg-not-gf.webp" width="900" height="890" alt="With f(x) = 3x - 5 and g(x) = x squared + 2, fg(x) = 3x squared + 1 and gf(x) = (3x - 5) squared + 2 are different curves. They meet only at x = (15 - root 69)/6, about 1.12, and x = (15 + root 69)/6, about 3.88." loading="lazy">
  <figcaption>Composing in a different order gives a different function.</figcaption>
</figure>


## Sequences and series

```
arithmetic:  u_n = a + (n-1)d       S_n = (n/2)[2a + (n-1)d]
geometric:   u_n = ar^(n-1)         S_n = a(1-r^n)/(1-r)
sum to infinity:  S = a/(1-r)       ONLY if |r| < 1
```

**The convergence condition is a mark in itself.** A sum to infinity exists only when `|r| < 1`; stating the answer without the condition is incomplete.

**Binomial expansion:**

```
(1 + x)^n = 1 + nx + n(n-1)x^2/2! + ...
```

For **negative or fractional n** the expansion is infinite and valid only for **|x| < 1**. Stating the validity range is required.

## Trigonometry

```
sin^2 + cos^2 = 1      1 + tan^2 = sec^2      1 + cot^2 = cosec^2
sin2A = 2 sinA cosA    cos2A = cos^2A - sin^2A = 2cos^2A - 1 = 1 - 2sin^2A
R form:  a sinx + b cosx = R sin(x + alpha)
```

**Radians:** π rad = 180°. Arc length `s = rθ`; sector area `= ½r²θ`. **These formulae only work in radians** — using degrees is the standard error.

**Small angle approximations** (θ in radians): `sin θ ≈ θ`, `tan θ ≈ θ`, `cos θ ≈ 1 − θ²/2`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-pure-revision-notes--08-what-is-a-radian.webp" width="900" height="960" alt="A semicircle is marked off in arcs each as long as the radius. One radian is about 57.3 degrees; three arcs plus 0.14 of a radian make pi radians, which is 180 degrees. This is why arc length rθ and sector area half r squared θ need radians." loading="lazy">
  <figcaption>One radian is the angle whose arc equals the radius.</figcaption>
</figure>


## Differentiation

```
chain:     dy/dx = dy/du x du/dx
product:   (uv)' = u'v + uv'
quotient:  (u/v)' = (u'v - uv')/v^2

d/dx(e^x) = e^x        d/dx(ln x) = 1/x
d/dx(sin x) = cos x    d/dx(cos x) = -sin x
```

Trigonometric derivatives require **radians**.

**Implicit differentiation:** differentiate both sides with respect to x, applying the chain rule to every y term, so `d/dx(y²) = 2y·dy/dx`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-pure-revision-notes--09-sine-slope-radians-degrees.webp" width="900" height="960" alt="Sine against angle in degrees. The tangent at 0 rises 1 over a run of 57.3 degrees, i.e. 1 radian, so the slope is 1 per radian but 0.0175 per degree. Hence d/dx sin x = cos x only in radians; in degrees it is (pi/180) cos x." loading="lazy">
  <figcaption>The slope of sine at 0 is 1 only when x is in radians.</figcaption>
</figure>


## Integration

```
integral of 1/x dx = ln|x| + c
integral of e^x = e^x + c
by parts:  integral of u dv = uv - integral of v du
```

**Choosing u for parts:** pick the term that **simplifies on differentiation** — logs first, then polynomials. Choosing the wrong way round makes the integral harder rather than easier.

**Substitution:** change the variable *and* the limits, or convert back before evaluating. Forgetting to change the limits is a routine loss.

## Numerical methods

**Locating a root:** if `f(x)` changes sign over an interval (one value positive, one negative) and `f` is continuous, a root lies between them.

**Iteration:** rearrange `f(x) = 0` into `x = g(x)` and iterate `x_(n+1) = g(x_n)` from a starting value. A **staircase diagram** shows convergence to the root; a **cobweb diagram** shows convergence that spirals in from both sides. Some rearrangements diverge — this must be checked, not assumed.

**Newton-Raphson:**

```
x_(n+1) = x_n - f(x_n)/f'(x_n)
```

Fails or converges to the wrong root if the starting value is chosen near a stationary point, where `f'(x_n)` is close to zero.

**Trapezium rule** approximates the area under a curve using `n` trapezia of equal width `h = (b-a)/n`:

```
integral ≈ (h/2)[y_0 + y_n + 2(y_1 + y_2 + ... + y_(n-1))]
```

For a **convex** (concave up) curve the rule **over-estimates** the true area; for a **concave** (concave down) curve it **under-estimates**. Stating which way the error runs, not just quoting the formula, is what the "comment on accuracy" mark requires.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-pure-revision-notes--07-trapezium-over-under.webp" width="900" height="1050" alt="Two-strip trapezium rule on y = x squared (0 to 2) gives 3.00 against an exact 2.67, an over-estimate because the curve bends up. On y = square root of x (0 to 4) it gives 4.83 against 5.33, an under-estimate because the curve bends down." loading="lazy">
  <figcaption>Convex curves are over-estimated and concave curves under-estimated.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-pure-revision-notes--10-staircase-cobweb-converge-diverge.webp" width="900" height="1000" alt="Four iteration graphs: a staircase and a cobweb that converge to the root (g-prime 0.25 and about -0.57) and a staircase and a cobweb that diverge (g-prime 4 and -2)." loading="lazy">
  <figcaption>Some rearrangements converge as staircases or cobwebs; others diverge, so check.</figcaption>
</figure>


## Vectors

```
magnitude  |a| = sqrt(x^2 + y^2 + z^2)
unit vector = a / |a|
```

Vectors are **parallel** if one is a scalar multiple of the other. Position vectors describe points; direction vectors describe lines.

## Exam traps

- Doing f before g in `fg(x)`.
- Getting `f(x + a)` the wrong way round.
- Omitting the `|r| < 1` condition for a sum to infinity.
- Omitting the validity range for a binomial expansion with fractional n.
- Using degrees in arc length, sector area, or calculus.
- Forgetting to change limits after a substitution.
- Omitting `+ c`.

## Self-test

1. Give the structure of a proof by contradiction.
2. In `fg(x)`, which function is applied first?
3. When does a geometric series have a sum to infinity?
4. Which term should you choose as u in integration by parts, and why?
5. Why must arc length and sector area formulae use radians?

**Answers:** 1. Assume the opposite of the statement, derive a logical contradiction, and conclude that the original statement must be true. 2. g. 3. Only when |r| < 1. 4. The one that simplifies when differentiated — logarithms first, then polynomials — because the aim is to make the remaining integral easier. 5. The formulae s = rθ and ½r²θ are derived from the definition of the radian as the angle subtending an arc equal in length to the radius, so they are only valid with θ in radians.
