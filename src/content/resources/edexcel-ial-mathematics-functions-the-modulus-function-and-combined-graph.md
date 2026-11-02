---
title: "Pearson Edexcel International Advanced Level Mathematics: Functions, modulus and graph transformations (YMA01)"
seoTitle: "Edexcel IAL Maths P3 Functions and Modulus Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Functions, the modulus function and combined graph transformations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 145
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-algebra-and-functions-edexcel-alevel-maths"
description: "Study guide to Edexcel IAL Mathematics P3 section 1: rational expressions, functions and inverses, the modulus function and combined graph transformations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers section 1 (Algebra and functions) of Unit P3 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3 (April 2019): topics 1.1 to 1.4. The specification makes P3 a compulsory unit for IAL Mathematics and IAL Pure Mathematics, and lists its IAS weighting as N/A. It also says that knowledge of P1 and P2 is assumed, so keep the [Pure 1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/) and [Pure 2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/) close.

Next, use the [revision notes](/resources/edexcel-ial-mathematics-functions-the-modulus-function-and-combined-graph-revision-notes/) for recall and the [practice questions](/resources/edexcel-ial-mathematics-functions-the-modulus-function-and-combined-graph-practice/) for timed work. The course pages are the [Edexcel A-level Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/). To find weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## Outcomes in this section

| Topic | Skills this guide builds |
|---|---|
| 1.1 | Simplify rational expressions by factorising, cancelling and algebraic division. Denominators are linear or quadratic. |
| 1.2 | Define a function, and give its domain and range. Compose functions (fg means do g first). Find inverse functions and sketch their graphs. Use f⁻¹f(x) = ff⁻¹(x) = x. |
| 1.3 | Sketch y = \|ax + b\|, y = \|f(x)\| and y = f(\|x\|). Solve equations and inequalities such as \|2x − 1\| = x + 5. |
| 1.4 | Sketch combined transformations such as y = 2f(3x), y = f(−x) + 1, y = 3 + sin 2x and y = −cos(x + π/4). The graph of y = f(ax + b) is not required. |

## 1.1 Rational expressions

A rational expression is a fraction whose top and bottom are both polynomials. To simplify it, factorise the top and bottom completely, then cancel any bracket that appears on both. Brackets cancel; separate terms do not.

**Example 1.** Simplify (3x² − 5x − 12)/(x² − 9).

```
3x² − 5x − 12 = (3x + 4)(x − 3)
x² − 9 = (x − 3)(x + 3)
(3x² − 5x − 12)/(x² − 9) = (3x + 4)/(x + 3),   x ≠ 3
```

The original expression is undefined at x = 3, so the simplified form agrees with it everywhere except x = 3.

When the numerator has degree equal to or greater than the denominator and nothing cancels, use algebraic division. Divide to get a quotient and a remainder, then write numerator/denominator = quotient + remainder/denominator.

**Example 2.** Write (3x³ − 2x² + x − 5)/(x² + 2) as a quotient plus a remainder term.

```
3x³ − 2x² + x − 5 ÷ (x² + 2):
   3x³ ÷ x² = 3x     3x(x² + 2) = 3x³ + 6x       remainder −2x² − 5x − 5
  −2x² ÷ x² = −2    −2(x² + 2) = −2x² − 4       remainder −5x − 1
```

So (3x³ − 2x² + x − 5)/(x² + 2) = 3x − 2 + (−5x − 1)/(x² + 2).

A linear denominator works the same way. Here x³ − 8 = (x − 2)(x² + 2x + 4), so (x³ − 8)/(x − 2) = x² + 2x + 4 with no remainder.

## 1.2 Functions: domain, range, composites and inverses

A function maps each input in its **domain** to exactly one output. The set of outputs is the **range**. The specification uses the notation f: x ↦ … and f(x). A function can be **one-one** (each output comes from one input) or **many-one** (two or more inputs share an output). Always state the domain when it is not all real numbers. Division by zero and square roots of negatives are the usual restrictions.

**Composite functions.** fg(x) means f(g(x)): do g first, then f. In general fg ≠ gf.

**Example 3.** f(x) = x² + 1 for all real x, and g(x) = 3/(x − 2) for x ≠ 2. Find fg(x) and gf(x), solve fg(x) = 10 and state the range of fg.

```
fg(x) = f(3/(x − 2)) = 9/(x − 2)² + 1
gf(x) = g(x² + 1)    = 3/(x² − 1),   x ≠ ±1
fg(x) = 10:  9/(x − 2)² = 9,  (x − 2)² = 1,  x = 1 or x = 3
```

The term 9/(x − 2)² is positive for every x ≠ 2 and can be as large as you like, so the range of fg is fg(x) > 1.

**Inverse functions.** A function has an inverse f⁻¹ only if it is one-one. Then:

- inputs and outputs swap roles: f⁻¹ accepts the outputs of f as its inputs and returns the inputs of f, so a restricted domain on f shows up as a restricted range on f⁻¹
- f⁻¹f(x) = ff⁻¹(x) = x
- reflecting y = f(x) in the line y = x produces the graph of y = f⁻¹(x)

To find f⁻¹: set y equal to f(x), rearrange to give x in terms of y, then rename the variable so that f⁻¹ is written in terms of x. A many-one function such as x² has no inverse unless you restrict its domain.

**Example 4.** f(x) = 3 − √(x + 1) for x ≥ −1. Find the range of f, find f⁻¹(x), and state its domain.

```
x + 1 ≥ 0, so √(x + 1) ≥ 0 and f(x) ≤ 3.  Range of f: f(x) ≤ 3.
y = 3 − √(x + 1)  →  √(x + 1) = 3 − y  →  x = (3 − y)² − 1
f⁻¹(x) = (3 − x)² − 1,   domain x ≤ 3 (the range of f)
```

Check with a point: f(8) = 3 − 3 = 0, so (8, 0) is on y = f(x) and (0, 8) is on y = f⁻¹(x). Indeed f⁻¹(0) = 9 − 1 = 8. The range of f⁻¹ is f⁻¹(x) ≥ −1.

To confirm the algebra, check that f⁻¹f(x) = x. Here f⁻¹(f(x)) = (3 − (3 − √(x + 1)))² − 1 = (x + 1) − 1 = x for x ≥ −1.

To sketch the inverse, reflect key points: swap the x- and y-coordinates, swap any horizontal and vertical asymptotes, and keep the curve symmetrical about y = x.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--01-range-depends-on-domain.webp" width="900" height="830" alt="Graph of f(x) = x squared - 10x + 29. The whole parabola has its turning point at (5, 4) but the domain x at least 6 uses only the solid right-hand part, starting at (6, 5). The range is therefore f(x) at least 5, not at least 4." loading="lazy">
  <figcaption>Restricting the domain can change the range, because the lowest point may fall outside it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--02-horizontal-line-test.webp" width="900" height="960" alt="Two graphs of y = x squared. For all real x a horizontal line crosses twice (x = -2 and 2), so the function is many-one with no inverse. With x at least 0 the same line crosses once, so it is one-one and has an inverse." loading="lazy">
  <figcaption>A horizontal line cutting the graph more than once means no inverse exists.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--03-fg-not-gf.webp" width="900" height="890" alt="With f(x) = 3x - 5 and g(x) = x squared + 2, fg(x) = 3x squared + 1 and gf(x) = (3x - 5) squared + 2 are different curves. They meet only at x = (15 - root 69)/6, about 1.12, and x = (15 + root 69)/6, about 3.88." loading="lazy">
  <figcaption>Composing in a different order gives a different function.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--04-composite-domain.webp" width="900" height="780" alt="f(x) = root(x - 1) needs its input to be at least 1. g(x) = x squared - 10 gives an output of at least 1 only when x is at most minus root 11 or at least root 11, so fg has that domain. The graph of g is solid only where g(x) is at least 1." loading="lazy">
  <figcaption>A composite is only defined where the inner function gives an output the outer function accepts.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--05-inverse-reflection.webp" width="900" height="980" alt="The curve f(x) = 3 - root(x + 1) for x at least -1 and its inverse f^-1(x) = (3 - x) squared - 1 for x at most 3 are mirror images in the line y = x. Point (8, 0) on f becomes (0, 8) on the inverse and the end point (-1, 3) becomes (3, -1). The domain of the inverse is the range of f and vice versa." loading="lazy">
  <figcaption>The graph of f^-1 is the graph of f reflected in y = x, with domain and range swapped.</figcaption>
</figure>


## 1.3 The modulus function

|x| is the non-negative value of x: |x| = x for x ≥ 0, and |x| = −x for x < 0.

- **y = |ax + b|:** draw the line y = ax + b, then reflect the part below the x-axis in the x-axis. The graph is a V with its vertex on the x-axis at x = −b/a.
- **y = |f(x)|:** reflect every part of y = f(x) that lies below the x-axis in the x-axis. Nothing changes where f(x) ≥ 0, and the graph never goes below the axis.
- **y = f(|x|):** keep the part of y = f(x) with x ≥ 0, delete the part with x < 0, and replace it by the reflection of the kept part in the y-axis. The graph is symmetrical about the y-axis.

**Example 5.** Sketch y = |4x − 3| and solve |4x − 3| = x + 6 and |4x − 3| > x + 6.

The V has vertex (3/4, 0) and meets the y-axis at (0, 3). The line y = x + 6 has intercept (0, 6) and gradient 1, so it meets the V twice, once on each arm. Solve each branch:

```
4x − 3 = x + 6          3x = 9           x = 3
−(4x − 3) = x + 6       3 − 4x = x + 6   x = −3/5
Check: x = 3:   |9| = 9 = 3 + 6.   x = −3/5:   |−27/5| = 27/5 = −3/5 + 6.
```

The V is above the line to the left of the first intersection and to the right of the second. So |4x − 3| > x + 6 when x < −3/5 or x > 3.

Always check each solution in the original equation. When you solve by branches, an answer that does not belong to its branch's range of x must be rejected.

**Example 6.** Given f(x) = x² − 3x − 10, sketch y = |f(x)| and y = f(|x|).

f(x) = (x − 5)(x + 2) has roots −2 and 5, y-intercept −10 and minimum point (3/2, −49/4).

```
y = |f(x)|:  the dip below the axis is reflected.
  x-intercepts (−2, 0) and (5, 0); y-intercept (0, 10);
  local maximum (3/2, 49/4).
y = f(|x|) = x² − 3|x| − 10:  keep x ≥ 0, mirror it in the y-axis.
  x-intercepts (−5, 0) and (5, 0); y-intercept (0, −10);
  minimum points (3/2, −49/4) and (−3/2, −49/4).
```

The root x = −2 disappears from y = f(|x|), because the part of the curve with x < 0 is discarded. The y-intercept of y = f(|x|) is −10, but that of y = |f(x)| is 10. Label both intercepts with their correct signs.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--06-modulus-check-roots.webp" width="900" height="870" alt="The V-shaped graph y = |x - 6| and the line y = 3x - 2 meet only at (2, 4). Algebra also gives x = -2, but there the line is at -8 and the V at +8, so it is rejected. A modulus cannot equal a negative number." loading="lazy">
  <figcaption>Always check modulus roots: a root from the wrong branch does not fit the graph.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--07-modulus-inequality.webp" width="900" height="820" alt="Graphs of y = |x + 2| and y = 3|x| meet at x = -1/2 and x = 1. The graph of |x + 2| is below 3|x| for x less than -1/2 and for x greater than 1, so those are the solutions, shown on a number line with open circles." loading="lazy">
  <figcaption>Solve the equation first, then read from the graph where one modulus graph lies below the other.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--08-modulus-transformations.webp" width="900" height="940" alt="The dashed curve is f(x) = x squared - 2x - 3. Top: y = |f(x)| reflects the part below the x-axis upwards, giving a maximum (1, 4) between the roots -1 and 3. Bottom: y = f(|x|) copies the right-hand part onto the left by reflection in the y-axis, giving a symmetric W shape with roots plus and minus 3." loading="lazy">
  <figcaption>|f(x)| flips negative parts up; f(|x|) mirrors the right-hand half into the left.</figcaption>
</figure>


## 1.4 Combining transformations

Start from y = f(x). Each change has a standard effect.

| Equation | What happens to y = f(x) |
|---|---|
| y = f(x) + a | translation up by a, vector (0, a) |
| y = f(x + a) | translation left by a, vector (−a, 0) |
| y = af(x) | stretch in the y-direction, scale factor a |
| y = f(ax) | stretch in the x-direction, scale factor 1/a |
| y = −f(x) | mirror image in the x-axis |
| y = f(−x) | mirror image in the y-axis |

Changes that act on x (inside the brackets) do the opposite of what you expect and change x-coordinates. Changes outside the brackets change y-coordinates as you expect. Asymptotes move in the same way as the curve.

For a combination, work through the order you would use to evaluate the expression for a given x. For y = 2f(x) + 1, stretch first, then translate. For y = 2(f(x) + 1), translate first, then stretch. These two are different graphs. A stretch parallel to the x-axis and one parallel to the y-axis can be done in either order.

**Example 7.** The curve y = f(x) has a minimum at (−2, −5) and crosses the x-axis at (1, 0) and (4, 0). Find the images of these three points on y = 2f(3x) and y = f(−x) + 1.

```
y = 2f(3x): x-coordinate ÷ 3, y-coordinate × 2
  (−2, −5) → (−2/3, −10)   (1, 0) → (1/3, 0)   (4, 0) → (4/3, 0)
y = f(−x) + 1: x-coordinate × (−1), then y-coordinate + 1
  (−2, −5) → (2, −4)       (1, 0) → (−1, 1)     (4, 0) → (−4, 1)
```

**Example 8.** Sketch y = 3 + sin 2x and y = −cos(x + π/4) for 0 ≤ x ≤ 2π.

- y = 3 + sin 2x: the period is 2π/2 = π, so there are two full waves. The graph oscillates about y = 3, with minimum 2 and maximum 4. It passes through (0, 3).
- y = −cos(x + π/4): translate y = cos x left by π/4, then reflect in the x-axis. The maximum value 1 occurs at x = 3π/4, the minimum value −1 at x = 7π/4, and the zeros are at x = π/4 and x = 5π/4. The y-intercept is −√2/2 and the end value at x = 2π is also −√2/2.

## Common errors

- Cancelling a term such as the x² in (x² + 3)/x², which is not a factor of the whole top line.
- Reading fg as "f first". Work from the inside out: g is applied first.
- Giving the domain of f⁻¹ as the domain of f. It is the range of f.
- Finding an inverse of a many-one function without restricting the domain first.
- Forgetting to test solutions of a modulus equation in the original equation.
- Drawing y = f(|x|) by reflecting the part with x < 0 instead of discarding it.
- Translating y = f(x + 2) to the right. It moves left.
- Applying a stretch and a translation in the wrong order.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit P3 content section 1 (Algebra and functions), topics 1.1 to 1.4. Pearson Education Limited.
