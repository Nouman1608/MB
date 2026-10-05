---
resourceId: "mb-ap-calcab-5.2-study-guide"
title: "Extreme Value Theorem, Global Versus Local Extrema, and Critical Points: Study Guide (Calculus AB 5.2)"
description: "Learn when a function must have a highest and lowest value, how local and global extrema differ, and how to find critical points where f′ is zero or undefined."
course: "calculus-ab"
unit: 5
topics: ["5.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Continuity on an interval and types of discontinuity (Topics 1.10 to 1.12)"
  - "Points where a function is not differentiable: corners, cusps, vertical tangents (Topic 2.4)"
  - "Derivative rules, including the power rule with fractional powers (Topics 2.5 to 3.1)"
  - "The Mean Value Theorem as an existence theorem (Topic 5.1)"
learningObjectives:
  - "State the Extreme Value Theorem and check its conditions on a given interval"
  - "Explain the difference between a global (absolute) extremum and a local (relative) extremum"
  - "Find all critical points of a function, including points where the derivative does not exist"
  - "Explain why every local extremum inside an interval occurs at a critical point, and give a critical point that is not an extremum"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave values such as −12∛2 exact; decimals are only a check."
related: ["mb-ap-calcab-5.2-revision-notes", "mb-ap-calcab-5.2-practice", "mb-ap-calcab-5.2-checklist"]
next: "mb-ap-calcab-5.2-practice"
prerequisiteResources: ["mb-ap-calcab-5.1-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Extreme Value Theorem: if f is continuous on a closed interval [a, b], then f has at least one maximum value and at least one minimum value on [a, b]."
  - "A global extremum is the highest or lowest value on the whole interval; a local extremum is highest or lowest only compared with nearby points."
  - "A critical point is an x in the domain of f where f′(x) = 0 or f′(x) does not exist."
  - "Every local extremum occurs at a critical point, but not every critical point is a local extremum."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.2 is common content, so the same page serves AB and BC students."
  - question: "Can an endpoint be an extremum?"
    answer: "An endpoint can be a global (absolute) maximum or minimum. With the definition used on this page, which needs points on both sides, an endpoint is not a local extremum. If a question gives its own definition, follow the question."
  - question: "Does the Extreme Value Theorem tell me where the maximum is?"
    answer: "No. It only guarantees that a maximum and a minimum exist. Topic 5.5 (the Candidates Test) shows how to find them."
  - question: "Is a point where f′ does not exist really a critical point?"
    answer: "Yes, as long as f itself is defined there. A corner or a cusp can be a maximum or minimum, so these points must be on your list."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation and words

**Extremum** (plural **extrema**) means a maximum or a minimum. Two pairs of words mean the same thing:

- **global** = **absolute**: the highest or lowest value on the whole interval or domain;
- **local** = **relative**: the highest or lowest value compared with nearby points only.

The maximum **value** is a y-value, f(c). It **occurs at** an x-value, c. Keep these apart in written answers: "the maximum value is 16, at x = 4".

## The idea: a closed journey has a highest point

A fictional hiker walks a trail for 3 hours. Her altitude changes continuously. Somewhere on the walk she was at her highest point, and somewhere at her lowest. That sounds obvious, but it needs two things: the altitude cannot jump, and the walk includes its start and its finish.

The **Extreme Value Theorem** (EVT) turns this into mathematics. It is the third existence theorem in the course, after the Intermediate Value Theorem (Topic 1.16) and the Mean Value Theorem (Topic 5.1).

## The Extreme Value Theorem, part by part

> **Extreme Value Theorem.** If f is continuous on the closed interval [a, b], then f has at least one maximum value and at least one minimum value on [a, b].

| Part | What it says | How you check it |
|---|---|---|
| Condition | f is continuous on the **closed** interval [a, b] | Name the function type, use a given fact, or check every join and every point where a formula is undefined |
| Conclusion | Numbers c and d in [a, b] exist with f(d) ≤ f(x) ≤ f(c) for every x in [a, b] | Name the theorem; the extrema may be at endpoints or inside |

**Both parts of the condition matter.**

- **Open intervals break it.** On (0, 1), f(x) = x has no maximum. It gets as close to 1 as you like, but never reaches 1, because x = 1 is not allowed.
- **Discontinuities break it.** f(x) = 1/x² on [−1, 1] is undefined at 0 and grows without bound near 0. It has no maximum value.

**No guarantee is not the same as impossible.** f(x) = x² on the open interval (−1, 2) still has a minimum value, 0 at x = 0. The theorem just did not promise it.

The theorem says nothing about **where** the extrema are, or how many times each is reached. That is the job of the critical points below and of Topic 5.5.

## Global versus local extrema

Let c be in the domain of f.

- f(c) is a **global maximum** on an interval if f(c) ≥ f(x) for **every** x in the interval. (Global minimum: f(c) ≤ f(x).)
- f(c) is a **local maximum** if f(c) ≥ f(x) for every x in **some open interval around c**. (Local minimum: f(c) ≤ f(x).)

A local maximum is a "hilltop": higher than its neighbours on both sides. A global maximum is the highest point of all. A point can be both.

Because the local definition needs an open interval around c, **an endpoint is not a local extremum** under this definition. It can still be a global one.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="evt1-title evt1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="evt1-title">Graph of f(x) = x³ − 3x² on [−1, 4] showing global and local extrema</title>
<desc id="evt1-desc">The curve starts at the filled endpoint (−1, −4), rises to a hilltop at (0, 0), falls to a valley at (2, −4), then rises steeply to the filled endpoint (4, 16). The hilltop at (0, 0) is marked with a triangle and labelled local maximum, not global. The valley at (2, −4) is marked with a square and labelled local minimum and global minimum. The left endpoint (−1, −4) is labelled global minimum, endpoint, because its height equals the valley's. The right endpoint (4, 16) is labelled global maximum, endpoint. A dashed horizontal line at y = −4 joins the two lowest points.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="237.5" x2="495" y2="237.5" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="140" y1="315" x2="140" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="231">−1</text><text x="220" y="231">1</text><text x="300" y="231">2</text><text x="380" y="231">3</text><text x="460" y="254">4</text>
<text x="500" y="233">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="133" y="291">−4</text><text x="133" y="191">4</text><text x="133" y="141">8</text><text x="133" y="91">12</text><text x="133" y="41">16</text>
<text x="133" y="19">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="233.5" x2="60" y2="241.5"/><line x1="220" y1="233.5" x2="220" y2="241.5"/><line x1="300" y1="233.5" x2="300" y2="241.5"/><line x1="380" y1="233.5" x2="380" y2="241.5"/><line x1="460" y1="233.5" x2="460" y2="241.5"/>
<line x1="136" y1="287.5" x2="144" y2="287.5"/><line x1="136" y1="187.5" x2="144" y2="187.5"/><line x1="136" y1="137.5" x2="144" y2="137.5"/><line x1="136" y1="87.5" x2="144" y2="87.5"/><line x1="136" y1="37.5" x2="144" y2="37.5"/>
</g>
<line x1="60" y1="287.5" x2="300" y2="287.5" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,287.5 68.0,277.0 76.0,267.9 84.0,260.2 92.0,253.7 100.0,248.4 108.0,244.3 116.0,241.2 124.0,239.1 132.0,237.9 140.0,237.5 148.0,237.9 156.0,238.9 164.0,240.5 172.0,242.7 180.0,245.3 188.0,248.3 196.0,251.6 204.0,255.1 212.0,258.8 220.0,262.5 228.0,266.2 236.0,269.9 244.0,273.4 252.0,276.7 260.0,279.7 268.0,282.3 276.0,284.5 284.0,286.1 292.0,287.1 300.0,287.5 308.0,287.1 316.0,285.9 324.0,283.8 332.0,280.7 340.0,276.6 348.0,271.3 356.0,264.8 364.0,257.1 372.0,248.0 380.0,237.5 388.0,225.5 396.0,211.9 404.0,196.7 412.0,179.7 420.0,160.9 428.0,140.3 436.0,117.7 444.0,93.1 452.0,66.4 460.0,37.5"/>
<circle cx="60" cy="287.5" r="5" fill="#1d2b44"/>
<circle cx="460" cy="37.5" r="5" fill="#1d2b44"/>
<polygon points="140,229 134,240 146,240" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="295" y="282.5" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150" y="215" font-size="12" fill="#1d2b44">local max (0, 0), not global</text>
<text x="310" y="310" font-size="12" fill="#1d2b44">local and global min (2, −4)</text>
<text x="48" y="310" font-size="12" fill="#1d2b44">global min (−1, −4), endpoint</text>
<text x="300" y="42" font-size="12" fill="#1d2b44">global max (4, 16), endpoint</text>
</svg>
<figcaption>Figure 1. f(x) = x³ − 3x² on [−1, 4]. The global maximum value is 16, at the endpoint x = 4. The global minimum value is −4, reached twice: at the endpoint x = −1 and at x = 2. The hilltop at x = 0 (triangle) is a local maximum but not a global one. Axes are unitless.</figcaption>
</figure>

Figure 1 shows three facts worth remembering. A global extremum can sit at an endpoint. A global extremum value can be reached at more than one x. And a local maximum need not be the highest point: here the local maximum value 0 is far below the global maximum value 16.

## Critical points

> **Critical point.** A number c in the domain of f is a critical point of f if f′(c) = 0 or f′(c) does not exist.

The key link with extrema is this:

> **If f has a local extremum at c, then c is a critical point of f.**

**Why it is true.** Suppose f has a local maximum at c (so f is defined on both sides of c) and f′(c) exists. For x just to the right of c, f(x) ≤ f(c), so the difference quotient (f(x) − f(c))/(x − c) is ≤ 0. For x just to the left, the top is ≤ 0 and the bottom is negative, so the quotient is ≥ 0. The derivative is the limit of both, so f′(c) is both ≤ 0 and ≥ 0. Hence f′(c) = 0. If f′(c) does not exist, c is a critical point anyway.

**The converse is false.** A critical point is only a **candidate**. Figure 2 shows the three standard cases.

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="crit-title crit-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="crit-title">Three functions with a critical point at x = 0: y = x³, y = |x| and y = cube root of x</title>
<desc id="crit-desc">Three side-by-side panels, each with axes crossing at the origin. Left panel: y = x³, which flattens to a horizontal tangent at the origin but keeps rising, so the derivative is 0 there and there is no extremum. Middle panel: y = |x|, a V shape with a sharp corner at the origin, which is the lowest point, so the derivative does not exist and there is a local minimum. Right panel: y = cube root of x, which passes through the origin with a vertical tangent and keeps rising, so the derivative does not exist and there is no extremum. Each panel has a caption beneath it stating these facts.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1">
<rect x="10" y="20" width="170" height="220" fill="none"/>
<rect x="180" y="20" width="170" height="220" fill="none"/>
<rect x="350" y="20" width="160" height="220" fill="none"/>
<line x1="25" y1="140" x2="165" y2="140"/><line x1="95" y1="30" x2="95" y2="230"/>
<line x1="195" y1="140" x2="335" y2="140"/><line x1="265" y1="30" x2="265" y2="230"/>
<line x1="365" y1="140" x2="500" y2="140"/><line x1="435" y1="30" x2="435" y2="230"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="43.0,227.9 47.0,209.1 51.0,193.2 55.0,180.0 59.0,169.2 63.0,160.5 67.0,153.7 71.0,148.6 75.0,145.0 79.0,142.6 83.0,141.1 87.0,140.3 91.0,140.0 95.0,140.0 99.0,140.0 103.0,139.7 107.0,138.9 111.0,137.4 115.0,135.0 119.0,131.4 123.0,126.3 127.0,119.5 131.0,110.8 135.0,100.0 139.0,86.8 143.0,70.9 147.0,52.1"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="205.0,80.0 265.0,140.0 325.0,80.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="375.0,185.8 379.0,184.7 383.0,183.7 387.0,182.5 391.0,181.3 395.0,180.0 399.0,178.6 403.0,177.1 407.0,175.5 411.0,173.7 415.0,171.7 419.0,169.5 423.0,166.8 427.0,163.4 431.0,158.6 431.8,157.2 432.6,155.7 433.4,153.7 434.2,150.9 435.0,140.0 435.8,129.1 436.6,126.3 437.4,124.3 438.2,122.8 439.0,121.4 443.0,116.6 447.0,113.2 451.0,110.5 455.0,108.3 459.0,106.3 463.0,104.5 467.0,102.9 471.0,101.4 475.0,100.0 479.0,98.7 483.0,97.5 487.0,96.3 491.0,95.3 495.0,94.2"/>
<circle cx="95" cy="140" r="4.5" fill="#1d2b44"/><circle cx="265" cy="140" r="4.5" fill="#1d2b44"/><circle cx="435" cy="140" r="4.5" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="95" y="258">y = x³</text><text x="95" y="274">f′(0) = 0</text><text x="95" y="290">no extremum</text>
<text x="265" y="258">y = |x|</text><text x="265" y="274">f′(0) does not exist</text><text x="265" y="290">local minimum</text>
<text x="435" y="258">y = ∛x</text><text x="435" y="274">f′(0) does not exist</text><text x="435" y="290">no extremum</text>
</g>
</svg>
<figcaption>Figure 2. Each function has a critical point at x = 0 (filled dot). Only |x| has an extremum there. A critical point tells you where to look, not what you will find. Axes are unitless.</figcaption>
</figure>

**How to find critical points.**

1. Find f′(x) and simplify it into a single fraction or a factored form.
2. Solve f′(x) = 0 (set the top of the fraction to 0).
3. Find where f′(x) does not exist (the bottom is 0, or a corner or join in a piecewise function).
4. **Keep only x-values in the domain of f.** If f itself is undefined at c, then c is not a critical point.

Deciding whether each critical point is a maximum, a minimum or neither comes in Topics 5.4 and 5.7.

## Worked example 1: a critical point that is not an extremum

**Question.** Let f(x) = x⁴ − 4x³. Find the critical points of f, and show that f has no local extremum at x = 0.

1. **Differentiate.** f′(x) = 4x³ − 12x² = 4x²(x − 3).
2. **Where f′ = 0.** 4x²(x − 3) = 0 gives x = 0 or x = 3.
3. **Where f′ does not exist.** f′ is a polynomial, so it exists everywhere. No extra points.
4. **Critical points:** **x = 0 and x = 3.**
5. **Test x = 0 with nearby values.** f(0) = 0. Write f(x) = x³(x − 4). Just left of 0 (say x = −0.1), x³ < 0 and x − 4 < 0, so f(x) > 0: f(−0.1) = 0.0041. Just right of 0 (say x = 0.1), x³ > 0 and x − 4 < 0, so f(x) < 0: f(0.1) = −0.0039. Points arbitrarily close to 0 lie both above and below f(0).

**Answer.** The critical points are x = 0 and x = 3. At x = 0 there is **no local extremum**, because f takes values larger than f(0) on the left and smaller on the right. (You will see in Topic 5.4 that x = 3 gives a local minimum, f(3) = −27.)

**Why this matters.** The factor x² makes f′ zero at 0 without changing sign: f′ is negative on both sides (f′(−0.5) = −3.5, f′(0.5) = −2.5). The graph flattens and keeps falling, like x³ in Figure 2 but downhill.

## Worked example 2: a critical point where f′ does not exist

**Question.** Let g(x) = x^(2/3)(x − 10), where x^(2/3) means the square of the cube root of x. Find all critical points of g.

1. **Expand** to use the power rule: g(x) = x^(5/3) − 10x^(2/3).
2. **Differentiate.** g′(x) = (5/3)x^(2/3) − (20/3)x^(−1/3).
3. **Write as one fraction.** Multiply the first term by x^(1/3)/x^(1/3):
   g′(x) = (5x − 20)/(3x^(1/3)) = **5(x − 4)/(3x^(1/3))**, for x ≠ 0.
4. **Where g′ = 0.** The top is 0 when x = 4.
5. **Where g′ does not exist.** The bottom is 0 when x = 0. Check the domain: g(0) = 0 × (−10) = 0, so g is defined at 0.
6. **Critical points:** **x = 0 and x = 4.**

**Interpretation at x = 0.** For x close to 0 (on either side), x^(2/3) > 0 and x − 10 < 0, so g(x) < 0 = g(0). For example, g(−1) = −11 and g(1) = −9. So g has a **local maximum value of 0 at x = 0**, at a cusp where the derivative does not exist. If you had only solved g′(x) = 0, you would have missed it.

**At x = 4.** g(4) = 4^(2/3)(−6) = −12∛2 ≈ −15.12. Its type is decided in Topic 5.4.

**Common slip.** Cancelling or ignoring x^(1/3) in the denominator loses the critical point at 0. Always look at the bottom of f′ as well as the top.

## Worked example 3: does the Extreme Value Theorem apply?

**Question.** For each function, say whether the Extreme Value Theorem guarantees both a maximum value and a minimum value on the given interval. Explain.

(a) f(x) = 1/(x − 2) on [3, 5]
(b) f(x) = 1/(x − 2) on [0, 3]
(c) f(x) = x² on (−1, 2)

**(a) Yes.** The only discontinuity of f is at x = 2, which is outside [3, 5]. So f is continuous on the closed interval [3, 5], and the theorem applies. (The values are f(3) = 1 and f(5) = 1/3; f decreases, so these are the maximum and minimum.)

**(b) No guarantee.** x = 2 is inside [0, 3], and f is undefined there. The condition fails. In fact f grows without bound as x → 2 from the right, so there is no maximum.

**(c) No guarantee.** The interval is open. f has a minimum value, 0 at x = 0, but no maximum: f(x) gets close to 4 as x → 2, yet x = 2 is not in the interval. On the closed interval [−1, 2], the maximum value 4 would be reached at x = 2.

**What to write.** A full answer names the condition (continuous on a **closed** interval), says whether it holds with a reason, and only then names the theorem.

## Common misconceptions

- **"A critical point is always a maximum or minimum."** x³ and ∛x at 0 are counterexamples.
- **Only solving f′(x) = 0.** Points where f′ does not exist are critical points too, if f is defined there.
- **Including points outside the domain.** If f(c) is undefined, c is not a critical point.
- **"The global maximum is at a critical point."** It can be at an endpoint instead (Figure 1).
- **Mixing up value and location.** "The maximum is x = 4" is wrong; "the maximum value is 16, at x = 4" is right.
- **"The theorem says the extremum happens once."** A maximum value can be reached at several x-values.
- **Applying the theorem on an open interval or across a break.** Check closed and continuous every time.
- **"No guarantee, so no maximum."** The theorem can be silent while an extremum still exists.

## Where this leads

Critical points are the starting point for the rest of Unit 5. In [Topic 5.3, Determining Intervals on Which a Function Is Increasing or Decreasing](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-study-guide/), you will use the sign of f′ between critical points. Topic 5.4 classifies critical points with the First Derivative Test, and Topic 5.5 combines the Extreme Value Theorem with critical points to find global extrema. For the earlier existence theorem, see [Topic 5.1, Using the Mean Value Theorem](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-checklist/) to consolidate.
