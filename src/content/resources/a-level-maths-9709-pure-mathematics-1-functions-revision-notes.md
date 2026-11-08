---
title: "Cambridge International AS & A Level Mathematics 9709: Functions -- Revision Notes"
seoTitle: "Cambridge 9709 Functions Revision Notes (Pure Maths 1)"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Functions"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 30
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "functions-cambridge-alevel-maths"
description: "Revision notes for Cambridge 9709 Pure Mathematics 1 section 1.2 Functions: range, composites, inverses, transformations and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

These revision notes cover section 1.2 Functions of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 1.2 is part of Pure Mathematics 1, which is examined on Paper 1 (1 hour 50 minutes, 75 marks). Paper 1 is compulsory for both AS Level and A Level, and this section has no optional or higher-tier parts. A scientific calculator is allowed on every 9709 paper, but unsupported calculator answers earn no marks, so show your working.

For full explanations, see the [Functions study guide](/resources/a-level-mathematics-pure-mathematics-1-functions/); to test yourself, use the [Functions practice questions](/resources/a-level-maths-9709-pure-mathematics-1-functions-practice/). Completing the square comes up throughout, so keep the [Quadratics revision notes](/resources/a-level-mathematics-quadratics-revision-notes/) to hand. Also useful: the [Pure Mathematics 1 overview](/resources/a-level-mathematics-pure-mathematics-1-quadratics/), the [Pure 1 mixed practice set](/resources/a-level-mathematics-pure-1-mixed-practice/), the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/), the free [AS diagnostic](/practice/9709/diagnostic/as/) and the [9709 self-check bank](/practice/9709/).

## 1. Key terms

| Term | What it means |
|---|---|
| Function | A rule that maps every member of the domain to exactly one output |
| Domain | The set of input values the function is defined for (always given with the function) |
| Range | The set of output values the function actually takes on its domain |
| One-one function | Different inputs always give different outputs |
| Inverse function f⁻¹ | The function that undoes f; it exists only when f is one-one |
| Composite function fg | Apply g first, then f: fg(x) = f(g(x)) |

**Notation.** Cambridge writes f : x ↦ 3x − 1 for x ∈ ℝ, or f(x) = 3x − 1 for x ∈ ℝ. Both mean the same. ff(x) means f(f(x)). State a range with f(x), y or f, not with x: write "f(x) ≥ 2", not "x ≥ 2".

**Many-one.** x ↦ x² for x ∈ ℝ is a function but not one-one (2 and −2 both map to 4), so it has no inverse unless its domain is restricted.

## 2. Finding a range

**Method in steps**

1. Picture the graph on the given domain (line, parabola, reciprocal, trig curve).
2. For a quadratic, complete the square and check whether the vertex lies inside the domain.
3. Evaluate f at each end of the domain. An end that is not included gives a strict inequality.
4. Write the range as an inequality in f(x).

**Worked reminder.** f(x) = 2x² − 12x + 7 = 2(x − 3)² − 11.

- For x ∈ ℝ: the vertex (3, −11) is in the domain, so the range is **f(x) ≥ −11**.
- For x ≥ 4: the vertex is outside the domain and f is increasing there, so the least value is f(4) = −9. The range is **f(x) ≥ −9**.

**Ranges to recognise quickly**

| Function and domain | Range |
|---|---|
| Linear, on an interval | Values at the two ends (watch strict and non-strict ends) |
| a(x − p)² + q, a > 0, x ∈ ℝ | f(x) ≥ q |
| a(x − p)² + q, a < 0, x ∈ ℝ | f(x) ≤ q |
| k/(x + b) with k > 0, for x ≥ c where c > −b | 0 < f(x) ≤ k/(c + b) |
| a sin x + b or a cos x + b (a > 0), full cycle | b − a ≤ f(x) ≤ b + a |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--01-range-depends-on-domain.webp" width="900" height="830" alt="Graph of f(x) = x squared - 10x + 29. The whole parabola has its turning point at (5, 4) but the domain x at least 6 uses only the solid right-hand part, starting at (6, 5). The range is therefore f(x) at least 5, not at least 4." loading="lazy">
  <figcaption>Restricting the domain can change the range, because the lowest point may fall outside it.</figcaption>
</figure>


## 3. Composite functions

**The condition.** The composite gf can only be formed when the **range of f lies within the domain of g**. Check this before you write gf(x).

**Method in steps**

1. Find the range of the inner function (the one applied first).
2. Compare it with the domain of the outer function. If any output falls outside, the composite cannot be formed.
3. Substitute and simplify. The composite's domain is the inner function's domain.
4. For the composite's range, apply the outer function to the inner function's range.

**Worked reminder.** f(x) = 2x + 1 for x ≥ 1, and g(x) = 12/(x + 3) for x ≥ −2.

- Range of f is f(x) ≥ 3. This lies within the domain of g (x ≥ −2), so **gf exists**.
- gf(x) = 12/(2x + 1 + 3) = 12/(2x + 4) = **6/(x + 2)** for x ≥ 1.
- gf(1) = 2 and gf(x) → 0 as x grows, so the range of gf is **0 < gf(x) ≤ 2**.
- Range of g is 0 < g(x) ≤ 12. The domain of f is x ≥ 1, and values such as g(x) = 0.5 are not in it. So **fg cannot be formed**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--04-composite-domain.webp" width="900" height="780" alt="f(x) = root(x - 1) needs its input to be at least 1. g(x) = x squared - 10 gives an output of at least 1 only when x is at most minus root 11 or at least root 11, so fg has that domain. The graph of g is solid only where g(x) is at least 1." loading="lazy">
  <figcaption>A composite is only defined where the inner function gives an output the outer function accepts.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--03-fg-not-gf.webp" width="900" height="890" alt="With f(x) = 3x - 5 and g(x) = x squared + 2, fg(x) = 3x squared + 1 and gf(x) = (3x - 5) squared + 2 are different curves. They meet only at x = (15 - root 69)/6, about 1.12, and x = (15 + root 69)/6, about 3.88." loading="lazy">
  <figcaption>Composing in a different order gives a different function.</figcaption>
</figure>


## 4. One-one functions and inverses

**Is it one-one?** Use the horizontal line test on the graph over the given domain. A quadratic is one-one only if its domain lies entirely on one side of the vertex. So for x² + 6x − 2 (vertex at x = −3), the domain x ≥ k gives a one-one function only when k ≥ −3.

**Method in steps for f⁻¹(x)**

1. Confirm f is one-one on its domain.
2. Write y = f(x).
3. Rearrange to make x the subject.
4. If you take a square root, choose the sign that matches the **domain of f**.
5. Swap letters to write f⁻¹(x) in terms of x.
6. State the domain of f⁻¹: it is the **range of f**.

**Key swap.** Domain of f⁻¹ = range of f. Range of f⁻¹ = domain of f.

**Worked reminder (reciprocal type).** f(x) = (2x + 1)/(x − 3) for x > 3. Writing f(x) = 2 + 7/(x − 3) shows the range is f(x) > 2.

```
y(x − 3) = 2x + 1
xy − 3y = 2x + 1
x(y − 2) = 3y + 1
x = (3y + 1)/(y − 2)
```

So **f⁻¹(x) = (3x + 1)/(x − 2) for x > 2**.

**Worked reminder (negative root).** f(x) = 3 − (x + 2)² for x ≤ −2. The range is f(x) ≤ 3.

```
(x + 2)² = 3 − y
x + 2 = −√(3 − y)     (negative, because x ≤ −2 means x + 2 ≤ 0)
```

So **f⁻¹(x) = −2 − √(3 − x) for x ≤ 3**. Check: f(−4) = −1 and f⁻¹(−1) = −2 − 2 = −4.

**Inverse trig functions.** sin⁻¹x, cos⁻¹x and tan⁻¹x (section 1.5) are inverse functions on restricted domains. For example, cos x on 0 ≤ x ≤ π is one-one, so cos⁻¹x has domain −1 ≤ x ≤ 1 and range 0 ≤ cos⁻¹x ≤ π.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-functions-revision-notes--02-fn-inverse-negative-root.webp" width="900" height="950" alt="f(x) = 3 - (x+2) squared for x at most -2 and its inverse -2 - sqrt(3 - x) for x at most 3 are mirror images in y = x. (-4, -1) on f maps to (-1, -4). The negative root is chosen because x + 2 is at most 0." loading="lazy">
  <figcaption>Because x + 2 is zero or negative, the inverse takes the negative square root.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--02-horizontal-line-test.webp" width="900" height="960" alt="Two graphs of y = x squared. For all real x a horizontal line crosses twice (x = -2 and 2), so the function is many-one with no inverse. With x at least 0 the same line crosses once, so it is one-one and has an inverse." loading="lazy">
  <figcaption>A horizontal line cutting the graph more than once means no inverse exists.</figcaption>
</figure>


## 5. The graph of f⁻¹

- The graph of y = f⁻¹(x) is the **reflection of y = f(x) in the line y = x**.
- On a sketch, draw and label the line y = x. The syllabus says sketches should show this mirror line.
- Points swap coordinates: (a, b) on f becomes (b, a) on f⁻¹. An end point such as (−2, 3) on f becomes (3, −2) on f⁻¹.
- Asymptotes swap too: y = 2 on f becomes x = 2 on f⁻¹.
- **Increasing functions only:** if f is increasing, the graphs of f and f⁻¹ can only meet on y = x, so solve f(x) = x instead of f(x) = f⁻¹(x). This can fail for a decreasing function.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-functions--05-inverse-reflection.webp" width="900" height="980" alt="The curve f(x) = 3 - root(x + 1) for x at least -1 and its inverse f^-1(x) = (3 - x) squared - 1 for x at most 3 are mirror images in the line y = x. Point (8, 0) on f becomes (0, 8) on the inverse and the end point (-1, 3) becomes (3, -1). The domain of the inverse is the range of f and vice versa." loading="lazy">
  <figcaption>The graph of f^-1 is the graph of f reflected in y = x, with domain and range swapped.</figcaption>
</figure>


## 6. Transformations of y = f(x)

| New graph | Transformation | Point (p, q) moves to |
|---|---|---|
| y = f(x) + a | Translation by the vector (0, a) | (p, q + a) |
| y = f(x + a) | Translation by the vector (−a, 0) | (p − a, q) |
| y = af(x) | Stretch parallel to the y-axis, scale factor a | (p, aq) |
| y = f(ax) | Stretch parallel to the x-axis, scale factor 1/a | (p/a, q) |
| y = −f(x) | Reflection in the x-axis | (p, −q) |
| y = f(−x) | Reflection in the y-axis | (−p, q) |

In the exam, write translation vectors as column vectors (x-component on top).

**Describe fully** means name the transformation and give its details: the vector for a translation; the scale factor and direction for a stretch; the mirror line for a reflection.

**Combinations.**

- Changes **outside** f (to y) happen in the natural order: y = af(x) + b is stretch by a, then translate by b.
- Changes **inside** f (to x) work in reverse and with the inverse operation: in y = f(x + a), the graph moves by −a; in y = f(ax), the scale factor is 1/a.
- Changes to x and changes to y are independent, so their order does not matter.
- When in doubt, track one point through each step.

**Worked reminder (order matters).** Start with y = x² − 4x + 1.

- Reflect in the x-axis, then translate by (0, 3): y = −(x² − 4x + 1) + 3 = **−x² + 4x + 2**.
- Translate by (0, 3), then reflect in the x-axis: y = −(x² − 4x + 1 + 3) = **−x² + 4x − 4**.

**Worked reminder (tracking a point).** The point (2, 5) lies on y = f(x).

- On y = 3f(2x) − 1 it moves to **(1, 14)**: halve the x-coordinate; multiply the y-coordinate by 3, then subtract 1.
- On y = f(x − 4) + 2 it moves to **(6, 7)**.

For a graph given only by its features (intercepts, turning points, asymptotes), track each feature separately.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-functions-revision-notes--01-fn-order-matters.webp" width="900" height="950" alt="The dashed parabola y = x squared - 4x + 1 has minimum (2, -3). Reflecting in the x-axis then translating up 3 gives a maximum at (2, 6); translating up 3 then reflecting gives a maximum at (2, 0). The curves differ." loading="lazy">
  <figcaption>Reflecting then translating is not the same as translating then reflecting.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-transformations-of-graphs--01-four-building-blocks.webp" width="900" height="1170" alt="Four graphs of the cubic x^2(x-3) with its dashed original: f(x)+2 moves it up 2, f(x-1) right 1, 3f(x) makes it three times as tall and f(2x) half as wide, with the image of the minimum labelled in each." loading="lazy">
  <figcaption>Outside the brackets acts on y as expected; inside acts on x and does the opposite.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-transformations-of-graphs--02-reflections.webp" width="900" height="880" alt="y = -f(x) reflects the cubic in the x-axis so the maximum becomes a minimum and vice versa, while (3, 0) stays put. y = f(-x) reflects in the y-axis so the minimum moves to (-2, -4) and is still a minimum." loading="lazy">
  <figcaption>Reflections are stretches with scale factor -1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-transformations-of-graphs--03-tracking-points.webp" width="900" height="1050" alt="The cubic x^2(x-3) and the curve y = -2f(x+1)+5 with gold arrows carrying (0,0), (2,-4) and (3,0) to (-1,5), (1,13) and (2,5). The y-intercept (0,9) is marked separately because it is found from the new equation." loading="lazy">
  <figcaption>Track each key point through the map (x, y) to (x-1, -2y+5).</figcaption>
</figure>


## 7. Must-know distinctions

- **fg(x) vs gf(x).** fg means g first. They are usually different.
- **f⁻¹(x) vs 1/f(x).** f⁻¹ is the inverse function; 1/f(x) is the reciprocal. For f(x) = 2x, f⁻¹(x) = x/2 but 1/f(x) = 1/(2x).
- **f(x + a) vs f(x) + a.** Inside moves the graph sideways (by −a). Outside moves it up or down (by a).
- **f(ax) vs af(x).** f(ax) is a stretch parallel to the x-axis with scale factor 1/a. af(x) is a stretch parallel to the y-axis with scale factor a.

## Quick self-test

1. Find the range of f(x) = 7 − 3x for −2 < x ≤ 4.
2. Find the range of f(x) = x² + 6x + 1 for x ∈ ℝ.
3. f(x) = x + 4 and g(x) = x² for x ∈ ℝ. Find fg(x) and gf(x).
4. Find f⁻¹(x) for f(x) = (5x − 2)/3, x ∈ ℝ.
5. f(x) = 4 + √(x − 1) for x ≥ 1. Find f⁻¹(x) and its domain.
6. f(x) = x² − 10x + 3 for x ≤ k. Find the largest value of k for which f has an inverse.
7. (3, −2) lies on y = f(x). Find its image on (a) y = f(x + 1) − 4, (b) y = 2f(−x).
8. Describe fully the transformation that maps y = sin x onto y = sin(x/3).
9. Find the range of f(x) = 1/(x + 1) for x ≥ 0.
10. f(x) = 3x − 4 for x ∈ ℝ. Find the point where y = f(x) meets y = f⁻¹(x).
11. Find the range of f(x) = 2 + 5 sin x for x ∈ ℝ.
12. f(x) = 2x − 5 for x ∈ ℝ. Find ff(x) and solve ff(x) = x.

### Answers

1. f(−2) = 13 (not included) and f(4) = −5, so **−5 ≤ f(x) < 13**.
2. (x + 3)² − 8, so **f(x) ≥ −8**.
3. **fg(x) = x² + 4**; **gf(x) = (x + 4)² = x² + 8x + 16**.
4. **f⁻¹(x) = (3x + 2)/5**.
5. **f⁻¹(x) = (x − 4)² + 1**, domain **x ≥ 4** (the range of f).
6. The vertex is at x = 5, so **k = 5**.
7. (a) **(2, −6)**; (b) **(−3, −4)**.
8. **Stretch parallel to the x-axis, scale factor 3.**
9. f(0) = 1 and f(x) → 0, so **0 < f(x) ≤ 1**.
10. f is increasing, so solve 3x − 4 = x: **(2, 2)**.
11. **−3 ≤ f(x) ≤ 7**.
12. **ff(x) = 4x − 15**; 4x − 15 = x gives **x = 5**.

## Where marks are usually lost

- Giving a range in terms of x ("x ≥ −8") instead of f(x), or using ≤ where the end point is not included.
- Finding a quadratic's range from its vertex when the vertex lies outside the given domain.
- Forming a composite without checking that the inner function's range lies within the outer function's domain.
- Leaving "±" in an inverse, or choosing the wrong sign of the square root.
- Forgetting to state the domain of f⁻¹, or giving the domain of f instead of its range.
- Sketching f and f⁻¹ without drawing the line y = x, or drawing curves that are not mirror images.
- Moving y = f(x + a) by +a, or using scale factor a for y = f(ax).
- Describing a transformation as "move" or "shift", or leaving out the vector, scale factor or direction.

## Frequently asked questions

**What is the difference between fg(x) and gf(x)?**
fg(x) means apply g first and then f, so fg(x) = f(g(x)). The two composites are usually different.

**What is the difference between f⁻¹(x) and 1/f(x)?**
f⁻¹ is the inverse function that undoes f, while 1/f(x) is the reciprocal. For f(x) = 2x, f⁻¹(x) = x/2 but 1/f(x) = 1/(2x).

**How do you find the range of a quadratic on a restricted domain?**
Complete the square and check whether the vertex lies inside the domain. If it does not, the least or greatest value comes from the end of the domain instead.

**Where do the graphs of f and f⁻¹ meet?**
If f is increasing, the graphs can only meet on the line y = x, so you can solve f(x) = x. This shortcut can fail for a decreasing function.

**How do you describe a transformation fully in Cambridge 9709?**
Name the transformation and give its details: the column vector for a translation, the scale factor and direction for a stretch, or the mirror line for a reflection.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Subject content, topic 1 Pure Mathematics 1 (for Paper 1), section 1.2 Functions.
