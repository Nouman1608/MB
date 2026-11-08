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
reviewStatus: "review-pending"
publishedDate: 2026-08-22
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
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

**Proof by contradiction needs the most care.** The classic results are the irrationality of √2 and the infinitude of primes. The structure must be explicit: *assume the opposite*, derive a contradiction, conclude the original statement.

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--02-horizontal-line-test.webp" width="900" height="960" alt="Two graphs of y = x squared. For all real x a horizontal line crosses twice (x = -2 and 2), so the function is many-one with no inverse. With x at least 0 the same line crosses once, so it is one-one and has an inverse." loading="lazy">
  <figcaption>A horizontal line cutting the graph more than once means no inverse exists.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--05-inverse-reflection.webp" width="900" height="980" alt="The curve f(x) = 3 - root(x + 1) for x at least -1 and its inverse f^-1(x) = (3 - x) squared - 1 for x at most 3 are mirror images in the line y = x. Point (8, 0) on f becomes (0, 8) on the inverse and the end point (-1, 3) becomes (3, -1). The domain of the inverse is the range of f and vice versa." loading="lazy">
  <figcaption>The graph of f^-1 is the graph of f reflected in y = x, with domain and range swapped.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-transformations-of-graphs--01-four-building-blocks.webp" width="900" height="1170" alt="Four graphs of the cubic x^2(x-3) with its dashed original: f(x)+2 moves it up 2, f(x-1) right 1, 3f(x) makes it three times as tall and f(2x) half as wide, with the image of the minimum labelled in each." loading="lazy">
  <figcaption>Outside the brackets acts on y as expected; inside acts on x and does the opposite.</figcaption>
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--03-gp-sum-to-infinity.webp" width="900" height="1030" alt="A graph of the partial sums of 81 + 54 + 36 + ... (first term 81, ratio 2/3) for n = 1 to 20. The points rise then flatten towards a dashed line at 243, the sum to infinity. At n = 5 the sum is 211, a gap of 32. The gap 243(2/3)^n first drops below 1 at n = 14." loading="lazy">
  <figcaption>Partial sums of a convergent geometric series level off at S_infinity = a/(1 - r).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--04-gp-convergence.webp" width="900" height="1230" alt="Four stem plots of the first eight terms of a geometric series with first term 1. For r = 0.6 and r = minus 0.6 the terms shrink to zero (convergent). For r = 1.2 and r = minus 1.2 they grow (divergent). A number line shows convergence exactly when r is between minus 1 and 1." loading="lazy">
  <figcaption>A geometric series has a sum to infinity only when |r| &lt; 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--08-binomial-validity.webp" width="900" height="980" alt="A graph of y = (1 - 3x)^(-1/2) with its series up to x cubed, 1 + 3x/2 + 27x^2/8 + 135x^3/16. A shaded band shows the range of validity, x between minus one third and one third. The series matches near zero but the curves separate outside the band and near the asymptote at x = 1/3." loading="lazy">
  <figcaption>The series for a rational power only represents the function when |bx/a| &lt; 1.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--06-three-triangles.webp" width="900" height="770" alt="A quarter unit circle with a ray at 35°. The triangle with hypotenuse 1 gives sin² + cos² = 1; the triangle on the tangent line gives 1 + tan² = sec²; the triangle on the line y = 1 gives 1 + cot² = cosec²." loading="lazy">
  <figcaption>Pythagoras in three similar triangles gives all three identities.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--08-r-form-wave.webp" width="900" height="1100" alt="y = 7 sin x − 24 cos x equals 25 sin(x − 73.74°): a sine wave of amplitude 25 shifted right by α. The 7, 24, 25 triangle gives R cos α = 7 and R sin α = 24. The line y = 10 meets the curve at 97.3° and 230.2°." loading="lazy">
  <figcaption>R is the amplitude and α the shift of the combined wave.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--03-sector-triangle-segment.webp" width="900" height="765" alt="A sector of radius 10 cm and angle π/3 has area 50π/3. Subtracting the triangle of area 25√3 leaves the segment, ½r²(θ − sin θ), about 9.06 cm². The arc length is rθ = 10π/3 cm and θ must be in radians." loading="lazy">
  <figcaption>Segment area is sector area minus triangle area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--07-small-angle-approximations.webp" width="900" height="1100" alt="For θ from 0 to 1 radian, sin θ and tan θ hug the line y = θ near zero and cos θ hugs 1 − θ²/2. At θ = 0.2, sin = 0.1987, tan = 0.2027, cos = 0.9801 and 1 − θ²/2 = 0.9800." loading="lazy">
  <figcaption>For small θ in radians, sin θ and tan θ are close to θ and cos θ is close to 1 − θ²/2.</figcaption>
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--06-product-rule-area.webp" width="900" height="650" alt="A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9." loading="lazy">
  <figcaption>Why the product rule has two terms: the rectangle area uv grows by v du + u dv.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
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

## Frequently asked questions

**When does a geometric series have a sum to infinity?**
A sum to infinity exists only when |r| < 1. State the condition as part of your answer, because giving the sum without it is incomplete.

**When is a binomial expansion valid for a negative or fractional power?**
For negative or fractional n, the expansion of (1 + x)ⁿ is infinite and valid only for |x| < 1. You need to state this range of validity.

**What are the small angle approximations?**
For θ in radians, sin θ ≈ θ, tan θ ≈ θ and cos θ ≈ 1 − θ²/2.

**How do you choose u when integrating by parts?**
Pick the term that simplifies when differentiated, with logarithms first and then polynomials. Choosing the wrong way round makes the integral harder.

**What do you need to remember with integration by substitution in OCR A Level Mathematics?**
Change the variable and the limits together, or convert back to the original variable before evaluating. Forgetting to change the limits is a routine loss of marks.
