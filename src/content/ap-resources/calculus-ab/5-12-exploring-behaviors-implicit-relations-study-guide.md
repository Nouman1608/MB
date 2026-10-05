---
resourceId: "mb-ap-calcab-5.12-study-guide"
title: "Exploring Behaviors of Implicit Relations: Study Guide (Calculus AB 5.12)"
description: "Learn to find critical points of curves defined implicitly and to justify where y increases, decreases, has a relative maximum or minimum, or is concave up or down."
course: "calculus-ab"
unit: 5
topics: ["5.12"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Implicit differentiation, including horizontal and vertical tangents (Topic 3.2)"
  - "Second derivatives of implicit curves (Topic 3.6)"
  - "The first derivative test, the second derivative test and concavity (Topics 5.4, 5.6 and 5.7)"
learningObjectives:
  - "Find the critical points of an implicitly defined curve, where dy/dx is 0 or does not exist, and check that each lies on the curve"
  - "Decide whether a tangent is horizontal, vertical or not determined by the dy/dx formula"
  - "Use the sign of dy/dx, which may depend on both x and y, to justify where y is increasing or decreasing"
  - "Find d²y/dx² in terms of x, y and dy/dx and use it to classify a critical point or describe concavity"
  - "Write a justification that names the derivative evidence and the point on the curve"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave square roots exact."
related: ["mb-ap-calcab-5.12-revision-notes", "mb-ap-calcab-5.12-practice", "mb-ap-calcab-5.12-checklist"]
next: "mb-ap-calcab-5.12-practice"
prerequisiteResources: ["mb-ap-calcab-5.11-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A critical point of an implicit relation is a point on the curve where dy/dx = 0 or dy/dx does not exist."
  - "Write dy/dx = N/D. N = 0 with D ≠ 0 gives a horizontal tangent; D = 0 with N ≠ 0 gives a vertical tangent; N = D = 0 needs more work."
  - "The first and second derivative tests still work: dy/dx and d²y/dx² are simply expressions in x and y (and dy/dx)."
  - "At a horizontal tangent, every term containing dy/dx in d²y/dx² is 0, which makes classifying the point quick."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.12 is common content, so the same page serves AB and BC students."
  - question: "How is this different from Topic 3.2?"
    answer: "Topic 3.2 taught you to find dy/dx and the points with horizontal or vertical tangents. Topic 5.12 uses that dy/dx, and d²y/dx², as evidence: to say where y increases or decreases, where it has a relative maximum or minimum and how the curve bends, with a written justification."
  - question: "Can I use the second derivative test if d²y/dx² contains y?"
    answer: "Yes. Substitute the coordinates of the point, and dy/dx = 0 if it is a horizontal tangent. You get a number, and its sign classifies the point."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page writes derivatives as **dy/dx** (or y′) and **d²y/dx²** (or y″). On an implicit curve both are usually expressions in x and y, so you need the **coordinates of a point**, not just its x-value, to evaluate them.

## Applying derivative tests to curves

In Topics 5.4 to 5.7 you used f′ and f″ to describe the graph of y = f(x). Many curves are not written that way. A curve such as y² − 2xy + 2x² = 8 is an **implicit relation**: x and y are tied together by an equation, and for some x-values there are two y-values.

The good news is that the ideas carry over. Near any point where implicit differentiation gives a value for dy/dx (its denominator is not 0), a small piece of the curve is the graph of a function y(x). On that piece:

- dy/dx > 0 means y is increasing as x increases; dy/dx < 0 means y is decreasing;
- a sign change of dy/dx from + to − is a relative maximum of y; from − to + a relative minimum;
- d²y/dx² > 0 means the piece is concave up; d²y/dx² < 0 means concave down.

The only difference is the algebra. dy/dx and d²y/dx² come from implicit differentiation, so they contain y as well as x.

## Critical points of an implicit relation

A **critical point** of an implicit relation is a point **on the curve** where dy/dx = 0 or dy/dx does not exist.

Implicit differentiation usually gives dy/dx as a fraction, dy/dx = N/D, where N and D are expressions in x and y. Then:

| At a point on the curve | dy/dx is… | The tangent is… |
|---|---|---|
| N = 0 and D ≠ 0 | 0 | horizontal |
| D = 0 and N ≠ 0 | undefined (a nonzero number over 0) | vertical |
| N = 0 and D = 0 | 0/0, not determined | not decided by the formula; investigate another way |

**Finding the points.** Setting N = 0 gives an equation such as y = 2x. That is a line, not a point. Solve it **together with** the curve's equation to find the actual points on the curve. Then check D at each point.

**Vertical tangents.** These are critical points too, because dy/dx does not exist there. When N ≠ 0, the curve near such a point contains points just above it and just below it, so y has no relative maximum or minimum there; you do not classify them that way. Often the curve folds back at a vertical tangent (it fails the vertical-line test nearby), and then x reaches its greatest or least value there, as in Worked example 1.

**When both N and D are 0.** The formula gives 0/0, which tells you nothing (just like 0/0 in a limit). For example, on the curve y³ = x², implicit differentiation gives dy/dx = 2x/(3y²), which is 0/0 at the origin. The curve has a sharp point (a cusp) there. Do not call such a point a horizontal or vertical tangent without more evidence.

## Increasing, decreasing and concavity

Because dy/dx depends on both x and y, its sign can change across the plane, not just along the x-axis. A useful habit: **find where N and D are positive or negative**, then combine.

For example, if dy/dx = −3x/y, then dy/dx > 0 exactly when x and y have **opposite signs**. So on any part of the curve in the second or fourth quadrant, y increases as x increases.

**Second derivatives.** Differentiate dy/dx again with respect to x. Every y becomes a function of x, so the chain rule produces dy/dx terms. The result is an expression in x, y and dy/dx. Substitute the known dy/dx (or its value at the point) to evaluate it.

At a **horizontal tangent**, dy/dx = 0. Every term containing dy/dx vanishes, so d²y/dx² is often a very short expression. That makes the second derivative test quick.

<figure>
<svg viewBox="0 0 600 330" role="img" aria-labelledby="ell-title ell-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ell-title">The tilted ellipse y² − 2xy + 2x² = 8 with its four critical points</title>
<desc id="ell-desc">An ellipse tilted so that it leans up to the right, centred at the origin. It reaches its highest point at (2, 4), where a short dashed horizontal tangent line is drawn and a filled circle marks the point. It reaches its lowest point at (−2, −4), also with a dashed horizontal tangent and a filled circle. Its rightmost point is about (2.83, 2.83), that is (2√2, 2√2), with a dashed vertical tangent and an open square marker. Its leftmost point is (−2√2, −2√2), with a dashed vertical tangent and an open square marker. Axes run from −4 to 4 in both directions.</desc>
<rect x="0" y="0" width="600" height="330" fill="#ffffff"/>
<line x1="80" y1="170" x2="440" y2="170" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="315" x2="260" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="186">−4</text><text x="180" y="186">−2</text><text x="340" y="186">2</text><text x="420" y="186">4</text><text x="448" y="174">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="254" y="54">4</text><text x="254" y="114">2</text><text x="254" y="234">−2</text><text x="254" y="294">−4</text><text x="256" y="20">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="100" y1="166" x2="100" y2="174"/><line x1="180" y1="166" x2="180" y2="174"/><line x1="340" y1="166" x2="340" y2="174"/><line x1="420" y1="166" x2="420" y2="174"/>
<line x1="256" y1="50" x2="264" y2="50"/><line x1="256" y1="110" x2="264" y2="110"/><line x1="256" y1="230" x2="264" y2="230"/><line x1="256" y1="290" x2="264" y2="290"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="373.1,85.1 372.7,78.1 371.4,71.7 369.3,66.1 366.3,61.2 362.5,57.2 358.0,54.1 352.7,51.8 346.7,50.5 340.0,50.0 332.7,50.5 324.9,51.8 316.6,54.1 307.8,57.2 298.7,61.2 289.3,66.1 279.6,71.7 269.9,78.1 260.0,85.1 250.1,92.9 240.4,101.2 230.7,110.0 221.3,119.3 212.2,129.0 203.4,138.9 195.1,149.2 187.3,159.5 180.0,170.0 173.3,180.5 167.3,190.8 162.0,201.1 157.5,211.0 153.7,220.7 150.7,230.0 148.6,238.8 147.3,247.1 146.9,254.9 147.3,261.9 148.6,268.3 150.7,273.9 153.7,278.8 157.5,282.8 162.0,285.9 167.3,288.2 173.3,289.5 180.0,290.0 187.3,289.5 195.1,288.2 203.4,285.9 212.2,282.8 221.3,278.8 230.7,273.9 240.4,268.3 250.1,261.9 260.0,254.9 269.9,247.1 279.6,238.8 289.3,230.0 298.7,220.7 307.8,211.0 316.6,201.1 324.9,190.8 332.7,180.5 340.0,170.0 346.7,159.5 352.7,149.2 358.0,138.9 362.5,129.0 366.3,119.3 369.3,110.0 371.4,101.2 372.7,92.9 373.1,85.1"/>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4">
<line x1="295" y1="50" x2="385" y2="50"/><line x1="135" y1="290" x2="225" y2="290"/>
<line x1="373.1" y1="45" x2="373.1" y2="125"/><line x1="146.9" y1="215" x2="146.9" y2="295"/>
</g>
<circle cx="340" cy="50" r="6" fill="#1d2b44"/>
<circle cx="180" cy="290" r="6" fill="#1d2b44"/>
<rect x="367.1" y="79.1" width="12" height="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="140.9" y="248.9" width="12" height="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="392" y="46">horizontal tangent at (2, 4)</text>
<text x="392" y="62">y″ = −1: relative maximum</text>
<text x="388" y="90">vertical tangent at (2√2, 2√2)</text>
<text x="388" y="106">dy/dx undefined</text>
<text x="196" y="318">horizontal tangent at (−2, −4); y″ = 1: relative minimum</text>
<text x="134" y="232" text-anchor="end">vertical tangent at</text>
<text x="134" y="246" text-anchor="end">(−2√2, −2√2)</text>
</g>
</svg>
<figcaption>Figure 1. The curve from Worked example 1. Filled circles mark the horizontal tangents (dy/dx = 0), where y has its relative maximum and minimum. Open squares mark the vertical tangents (dy/dx undefined), which are also critical points; there x is greatest or least. The markers differ in shape, so the picture does not rely on colour.</figcaption>
</figure>

## Worked example 1: find and classify critical points

**Question.** Consider the curve y² − 2xy + 2x² = 8.

(a) Show that dy/dx = (y − 2x)/(y − x).
(b) Find every point where the tangent is horizontal and every point where it is vertical.
(c) Use the second derivative to decide whether y has a relative maximum or a relative minimum at each horizontal tangent.

1. **Differentiate (a).** Differentiate each term with respect to x. The term −2xy needs the product rule:
   2y·y′ − (2y + 2x·y′) + 4x = 0.
   Collect the y′ terms: y′(2y − 2x) = 2y − 4x. Divide by 2(y − x):
   **dy/dx = (y − 2x)/(y − x)**.
2. **Horizontal tangents (b).** N = y − 2x = 0 gives y = 2x. Substitute into the curve: 4x² − 4x² + 2x² = 8, so x² = 4 and x = ±2. The points are **(2, 4)** and **(−2, −4)**. Check D = y − x: it is 2 at (2, 4) and −2 at (−2, −4), both nonzero. So both are horizontal tangents.
3. **Vertical tangents (b).** D = y − x = 0 gives y = x. Substitute: x² − 2x² + 2x² = 8, so x² = 8 and x = ±2√2. The points are **(2√2, 2√2)** and **(−2√2, −2√2)**. Check N = y − 2x: it is −2√2 and 2√2, both nonzero. So both are vertical tangents.
4. **Second derivative (c).** Use the quotient rule on y′ = (y − 2x)/(y − x), remembering that y depends on x:
   y″ = [(y′ − 2)(y − x) − (y − 2x)(y′ − 1)] / (y − x)².
   This is an expression in x, y and y′.
5. **Evaluate at the horizontal tangents.** There y′ = 0 and y − 2x = 0, so the second term in the numerator is 0 and
   y″ = −2(y − x)/(y − x)² = −2/(y − x).
   At (2, 4): y″ = −2/2 = **−1 < 0**. At (−2, −4): y″ = −2/(−2) = **1 > 0**.
6. **Conclude.** At (2, 4), dy/dx = 0 and d²y/dx² < 0, so y has a **relative maximum** of 4 there. At (−2, −4), dy/dx = 0 and d²y/dx² > 0, so y has a **relative minimum** of −4 there.

**Check.** On the upper part of the curve, y = x + √(8 − x²). At x = 1.5, dy/dx ≈ 0.37 > 0; at x = 2.5, dy/dx ≈ −0.89 < 0. The sign change from + to − agrees with a maximum at x = 2. Figure 1 shows the same thing.

**What about the vertical tangents?** They are critical points because dy/dx does not exist. They are not maxima or minima of y. On this curve they are where x is greatest (2√2) and least (−2√2).

## Worked example 2: a justification with the first derivative test

**Question.** The curve y³ + 3y = 6x − x² + 5 passes through (3, 2).

(a) Find dy/dx.
(b) Show that the curve has a horizontal tangent at (3, 2) and no vertical tangents.
(c) Justify that y has a relative maximum at x = 3, and say whether it is the absolute maximum of y on the curve.
(d) Confirm with d²y/dx².

1. **Check the point.** 2³ + 3(2) = 14 and 6(3) − 9 + 5 = 14. The point is on the curve.
2. **Differentiate (a).** 3y²·y′ + 3y′ = 6 − 2x, so y′(3y² + 3) = 6 − 2x and
   **dy/dx = (6 − 2x)/(3y² + 3) = 2(3 − x)/(3(y² + 1))**.
3. **Tangents (b).** At (3, 2): N = 6 − 6 = 0 and D = 3(4) + 3 = 15 ≠ 0, so the tangent is horizontal. The denominator 3(y² + 1) is at least 3 for every y, so it is **never 0**: there are no vertical tangents.
4. **Sign of dy/dx (c).** The denominator is always positive, so dy/dx has the same sign as 3 − x. For x < 3, dy/dx > 0, so y is increasing; for x > 3, dy/dx < 0, so y is decreasing. dy/dx changes from positive to negative at x = 3, so **y has a relative maximum at x = 3**.
5. **Absolute?** The only point where dy/dx = 0 is at x = 3 (and dy/dx always exists). y increases for **all** x < 3 and decreases for **all** x > 3. So y = 2 is the **absolute maximum** value of y on the curve.
6. **Second derivative (d).** Differentiate y′(3y² + 3) = 6 − 2x with the product rule:
   y″(3y² + 3) + y′·6y·y′ = −2.
   At (3, 2), y′ = 0, so 15y″ = −2 and **y″ = −2/15 < 0**. The curve is concave down there, which agrees with a maximum.

**Why this works.** The left side y³ + 3y always increases as y increases, so each x gives exactly one y. Here the curve really is the graph of a function, even though you cannot easily solve for y. The derivative tests apply everywhere.

**Answer sentence.** "y has a relative maximum at x = 3 because dy/dx = 2(3 − x)/(3(y² + 1)) changes from positive to negative there; the denominator is always positive. Since this is the only critical point, y = 2 is the absolute maximum."

## Common misconceptions

- **Stopping at a line.** "y = 2x" is the set where dy/dx could be 0. Solve it with the curve's equation to get points.
- **Forgetting to check the other part of the fraction.** N = 0 gives a horizontal tangent only if D ≠ 0 at that point.
- **Calling 0/0 a horizontal tangent.** When N and D are both 0, the formula says nothing. Investigate another way.
- **Using only x to evaluate dy/dx.** On most implicit curves one x has two points. You need both coordinates.
- **Treating y as a constant when finding d²y/dx².** y depends on x, so each y gives a y′ term by the chain rule.
- **Ignoring vertical tangents.** dy/dx not existing also makes a critical point.
- **Writing "it has a maximum".** Name what has the maximum: "y has a relative maximum of 4 at x = 2".
- **Giving the sign of dy/dx without the reason.** Show why the sign is what it is, for example "the denominator 3(y² + 1) is always positive".

## Where this leads

This topic completes Unit 5. You have now used derivatives to describe functions given by formulas, graphs, tables, contexts and implicit equations. If you need a refresher, see [Topic 3.2, Implicit Differentiation](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/) and [Topic 5.11, Solving Optimization Problems](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-study-guide/). Unit 6 begins with [Topic 6.1, Exploring Accumulations of Change](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-study-guide/), where you turn from rates of change to the amounts that build up from them. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-checklist/) to consolidate.
