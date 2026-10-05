---
resourceId: "mb-ap-calcab-1.11-study-guide"
title: "Defining Continuity at a Point: Study Guide (Calculus AB 1.11)"
description: "Learn the three-condition test for continuity at a point and how to write a short justification that names the value of f(c), the limit and whether they match."
course: "calculus-ab"
unit: 1
topics: ["1.11"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation and one-sided limits (Topics 1.2 to 1.4)"
  - "Finding limits by substitution and algebraic rewriting (Topics 1.5 and 1.6)"
  - "Removable, jump and asymptote discontinuities (Topic 1.10)"
prerequisiteResources: ["mb-ap-calcab-1.10-study-guide"]
learningObjectives:
  - "State the three conditions a function must meet to be continuous at x = c"
  - "Use the definition to show that a function is continuous at a given point, quoting the value of f(c) and of the limit"
  - "Identify which condition fails when a function is not continuous at a point"
  - "Use one-sided limits to test continuity where a piecewise function changes formula"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Every example here is done without a calculator. A table of nearby values can support a limit, but it does not prove one."
related: ["mb-ap-calcab-1.11-revision-notes", "mb-ap-calcab-1.11-practice", "mb-ap-calcab-1.11-checklist"]
next: "mb-ap-calcab-1.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "f is continuous at x = c when three things are true: f(c) is defined, lim (x → c) f(x) exists, and the limit equals f(c)."
  - "Check the conditions in order. The first one that fails tells you why f is not continuous at c."
  - "A full justification quotes numbers: the value of f(c), the value of the limit, and the comparison."
  - "Where a piecewise function changes formula, find both one-sided limits before you say the limit exists."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.11 is common content, so the same page serves AB and BC students."
  - question: "Is 'I can draw it without lifting my pencil' a good enough reason?"
    answer: "It is a helpful picture, but it is not a justification. In a written answer, show that f(c) exists, that the limit exists, and that the two are equal, with their values."
  - question: "If the formula for f gives 0/0 at x = c, is f automatically discontinuous there?"
    answer: "Not always. If f(c) is given separately (for example in a piecewise definition) and it equals the limit, f is continuous at c. Always check all three conditions."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

**lim (x → c) f(x)** means "the limit as x approaches c of f(x)". **lim (x → c⁻) f(x)** is the limit from the left (x < c), and **lim (x → c⁺) f(x)** is the limit from the right (x > c).

On paper, write the usual form with "x → c" under "lim".

## What continuity at a point means

In Topic 1.10 you met three kinds of break in a graph: a hole (removable discontinuity), a jump, and a vertical asymptote. Continuity at a point is the opposite: no break at all at that x value.

The everyday picture is "you can draw the graph through x = c without lifting your pencil". That picture is useful, but it cannot be checked with algebra and it cannot be written as a justification. Calculus replaces it with a precise test built from limits.

The idea is simple. Near x = c, the outputs f(x) head towards some height. For no break, the graph must actually **arrive** at that height when x = c. So the value of the function at c must match the value the function is approaching.

## The three-condition definition

> **Definition.** A function f is **continuous at x = c** when all three of these are true:
>
> 1. **f(c) exists.** The number c is in the domain of f.
> 2. **lim (x → c) f(x) exists.** The limit is a finite number. (Both one-sided limits exist and are equal.)
> 3. **lim (x → c) f(x) = f(c).** The limit and the function value are the same number.

If any one condition fails, f is **not** continuous at x = c (we say f is discontinuous at c).

Some notes on each condition:

- **Condition 1** fails when c is outside the domain: dividing by zero, a square root of a negative, a log of zero or a negative, or a piecewise definition that leaves c out.
- **Condition 2** fails when the one-sided limits are different (a jump), when the function grows without bound (an asymptote), or when the function oscillates without settling. An "infinite limit" is not a limit that exists: ∞ is not a number.
- **Condition 3** only makes sense once conditions 1 and 2 hold, because it compares two numbers. It fails when the graph heads to one height but the point at c sits somewhere else.

**Check the conditions in order.** Stop at the first one that fails and name it. That gives a short, exact reason.

## Seeing each condition on a graph

<figure>
<svg viewBox="0 0 530 400" role="img" aria-labelledby="cont-title cont-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cont-title">Four small graphs near x = c: one continuous, and one failing each condition of the definition</title>
<desc id="cont-desc">Panel A: a straight line passes through x = c with a filled point on the line at c, so f is continuous at c. Panel B: the same line with an open circle at c and no filled point, so f(c) is undefined and condition 1 fails. Panel C: a jump. The left piece ends at a filled point at a low height at c, and the right piece starts at an open circle at a higher height, so the one-sided limits differ and condition 2 fails. Panel D: the same line as panel A with an open circle on the line at c and a separate filled point above it, so the limit exists and f(c) exists but they are not equal, and condition 3 fails.</desc>
<rect x="0" y="0" width="530" height="400" fill="#ffffff"/>
<g transform="translate(10,10)">
<rect x="0" y="0" width="250" height="180" fill="none" stroke="#c9d1dc"/>
<text x="12" y="20" font-size="13" font-weight="bold" fill="#1d2b44">A. Continuous at c</text>
<text x="12" y="36" font-size="11" fill="#1d2b44">all three conditions hold</text>
<line x1="15" y1="150" x2="240" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="25" y1="160" x2="25" y2="45" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="130" y1="146" x2="130" y2="154" stroke="#1d2b44"/>
<text x="130" y="168" font-size="12" text-anchor="middle" fill="#1d2b44">c</text>
<line x1="130" y1="103" x2="130" y2="146" stroke="#1d2b44" stroke-dasharray="4 3"/>
<line x1="35" y1="135" x2="235" y2="55" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="130" cy="97" r="5" fill="#1d2b44"/>
</g>
<g transform="translate(270,10)">
<rect x="0" y="0" width="250" height="180" fill="none" stroke="#c9d1dc"/>
<text x="12" y="20" font-size="13" font-weight="bold" fill="#1d2b44">B. Hole, no point at c</text>
<text x="12" y="36" font-size="11" fill="#1d2b44">condition 1 fails: f(c) undefined</text>
<line x1="15" y1="150" x2="240" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="25" y1="160" x2="25" y2="45" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="130" y1="146" x2="130" y2="154" stroke="#1d2b44"/>
<text x="130" y="168" font-size="12" text-anchor="middle" fill="#1d2b44">c</text>
<line x1="130" y1="103" x2="130" y2="146" stroke="#1d2b44" stroke-dasharray="4 3"/>
<line x1="35" y1="135" x2="235" y2="55" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="130" cy="97" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
</g>
<g transform="translate(10,210)">
<rect x="0" y="0" width="250" height="180" fill="none" stroke="#c9d1dc"/>
<text x="12" y="20" font-size="13" font-weight="bold" fill="#1d2b44">C. Jump at c</text>
<text x="12" y="36" font-size="11" fill="#1d2b44">condition 2 fails: no single limit</text>
<line x1="15" y1="150" x2="240" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="25" y1="160" x2="25" y2="45" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="130" y1="146" x2="130" y2="154" stroke="#1d2b44"/>
<text x="130" y="168" font-size="12" text-anchor="middle" fill="#1d2b44">c</text>
<line x1="130" y1="64" x2="130" y2="146" stroke="#1d2b44" stroke-dasharray="4 3"/>
<line x1="35" y1="140" x2="130" y2="112" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="130" y1="70" x2="235" y2="48" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="130" cy="112" r="5" fill="#1d2b44"/>
<circle cx="130" cy="70" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
</g>
<g transform="translate(270,210)">
<rect x="0" y="0" width="250" height="180" fill="none" stroke="#c9d1dc"/>
<text x="12" y="20" font-size="13" font-weight="bold" fill="#1d2b44">D. Point moved away from c</text>
<text x="12" y="36" font-size="11" fill="#1d2b44">condition 3 fails: limit ≠ f(c)</text>
<line x1="15" y1="150" x2="240" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="25" y1="160" x2="25" y2="45" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="130" y1="146" x2="130" y2="154" stroke="#1d2b44"/>
<text x="130" y="168" font-size="12" text-anchor="middle" fill="#1d2b44">c</text>
<line x1="130" y1="103" x2="130" y2="146" stroke="#1d2b44" stroke-dasharray="4 3"/>
<line x1="35" y1="135" x2="235" y2="55" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="130" cy="97" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="130" cy="60" r="5" fill="#1d2b44"/>
</g>
</svg>
<figcaption>Figure 1. Four ways a graph can behave at x = c. Filled dots show the value f(c); open circles show a height the graph approaches but does not take at c. Only panel A passes all three conditions. A vertical asymptote at c (not drawn) fails condition 2, and usually condition 1 too. Axes are unitless.</figcaption>
</figure>

Read the panels with the definition in mind:

- **A.** The filled dot is the value f(c). The graph approaches that same height from both sides. All three conditions hold.
- **B.** The graph approaches a height from both sides, so the limit exists. But there is no filled dot: f(c) does not exist. Condition 1 fails.
- **C.** f(c) exists (the filled dot on the left piece). But the left side approaches one height and the right side another, so the two-sided limit does not exist. Condition 2 fails.
- **D.** f(c) exists (the filled dot) and the limit exists (the height of the open circle). They are different numbers. Condition 3 fails.

Panels B and D are both removable discontinuities, and panel C is a jump, as in Topic 1.10. This topic adds the language you use to prove which case you are in.

## How to write a justification

A good justification is short and quotes values. Use this pattern.

**To show f is continuous at c:**

> f(c) = ___. lim (x → c) f(x) = ___. Since lim (x → c) f(x) = f(c), f is continuous at x = c.

**To show f is not continuous at c:** name the first condition that fails, with numbers.

> f(c) is undefined, so f is not continuous at x = c.
>
> lim (x → c⁻) f(x) = ___ and lim (x → c⁺) f(x) = ___. These are not equal, so lim (x → c) f(x) does not exist, and f is not continuous at x = c.
>
> lim (x → c) f(x) = ___ but f(c) = ___. These are not equal, so f is not continuous at x = c.

Writing "f is continuous because the graph has no break" or "because lim f(x) = f(c)" with no values is not enough. The values are the evidence.

## Worked example 1: a piecewise function

**Question.** Let

- f(x) = 3 − x² for x ≤ 1
- f(x) = 4x − 2 for x > 1

Is f continuous at x = 1? Justify using the definition.

1. **Condition 1: find f(1).** The value x = 1 belongs to the first piece (x ≤ 1). So f(1) = 3 − 1² = **2**. f(1) exists.
2. **Condition 2: find the limit.** The formula changes at x = 1, so find each one-sided limit with the piece that applies on that side.
   - From the left (x < 1): lim (x → 1⁻) (3 − x²) = 3 − 1 = **2**.
   - From the right (x > 1): lim (x → 1⁺) (4x − 2) = 4 − 2 = **2**.
   The one-sided limits are equal, so lim (x → 1) f(x) = **2**.
3. **Condition 3: compare.** lim (x → 1) f(x) = 2 = f(1).

**Answer.** f(1) = 2, lim (x → 1) f(x) = 2, and these are equal, so f is **continuous at x = 1**.

**Interpretation.** The two pieces of the graph meet at the point (1, 2), so there is no break there.

**Why both sides?** Substituting x = 1 into one formula only tells you about one side. If the right-hand piece had been 4x − 1, the right-hand limit would be 3, the limit would not exist, and f would have a jump at x = 1.

## Worked example 2: a formula that gives 0/0, with f(c) defined separately

**Question.** Let

- g(x) = (x² − 2x − 8)/(x − 4) for x ≠ 4
- g(4) = 6

Is g continuous at x = 4?

1. **Condition 1.** g(4) = **6** is given directly, so g(4) exists. Do not substitute 4 into the fraction: the definition says the fraction is used only for x ≠ 4.
2. **Condition 2.** Substituting x = 4 into the fraction gives 0/0, so rewrite (Topic 1.6). Factor: x² − 2x − 8 = (x − 4)(x + 2). For x ≠ 4, g(x) = x + 2. So
   **lim (x → 4) g(x) = lim (x → 4) (x + 2) = 6**.
   The limit exists.
3. **Condition 3.** lim (x → 4) g(x) = 6 and g(4) = 6. They are equal.

**Answer.** g(4) = 6, lim (x → 4) g(x) = 6, and these are equal, so g is **continuous at x = 4**.

**Check.** g(4.01) = (4.01 − 4)(4.01 + 2)/(4.01 − 4) = 6.01, close to 6.

**Change one number.** If instead g(4) = 2, conditions 1 and 2 still hold, but lim (x → 4) g(x) = 6 ≠ 2 = g(4). Condition 3 fails, and the graph looks like panel D of Figure 1: a hole at (4, 6) and a separate point at (4, 2).

## Worked example 3: a jump at an absolute value

**Question.** Let

- h(x) = |x − 3|/(x − 3) for x ≠ 3
- h(3) = 1

Is h continuous at x = 3?

1. **Condition 1.** h(3) = **1**, so h(3) exists.
2. **Condition 2.** Use the meaning of absolute value.
   - For x > 3, x − 3 is positive, so |x − 3| = x − 3 and h(x) = 1. So lim (x → 3⁺) h(x) = **1**.
   - For x < 3, x − 3 is negative, so |x − 3| = −(x − 3) and h(x) = −1. So lim (x → 3⁻) h(x) = **−1**.
   The one-sided limits are different, so lim (x → 3) h(x) **does not exist**.
3. **Stop here.** Condition 2 fails, so condition 3 cannot be checked: there is no limit to compare with h(3).

**Answer.** lim (x → 3⁻) h(x) = −1 and lim (x → 3⁺) h(x) = 1, so lim (x → 3) h(x) does not exist and h is **not continuous at x = 3**. This is a jump discontinuity (panel C).

**Note.** Defining h(3) = 1 makes condition 1 true, but it cannot fix condition 2. No choice of h(3) would make h continuous at 3, because the limit itself does not exist.

## Common misconceptions

- **"f(c) exists, so f is continuous at c."** Condition 1 alone is not enough. In Worked example 3, h(3) exists but h jumps.
- **"The limit exists, so f is continuous at c."** The value at c must also exist and match. In panel D the limit exists, but the point is in the wrong place.
- **"The formula gives 0/0 at c, so f must be discontinuous."** Read the whole definition. In Worked example 2, g(4) is given separately and equals the limit, so g is continuous.
- **"The formula changes at c, so there must be a break."** Pieces can meet. In Worked example 1, both pieces reach height 2 at x = 1.
- **Checking only one side at a piecewise boundary.** Substituting c into one formula gives one one-sided limit. You need both.
- **Using the wrong piece for f(c).** Look at the inequality signs. "x ≤ 1" includes 1; "x < 1" does not.
- **"An infinite limit exists."** If f(x) → ∞, the limit does not exist as a number, so condition 2 fails.
- **Justifying with a picture or a phrase only.** "No hole" or "you can draw it without lifting your pencil" earns little. Quote f(c), the limit, and the comparison.
- **Checking condition 3 when condition 2 has failed.** If the limit does not exist, there is nothing to compare. Name condition 2 as the reason.

## Where this leads

Topic 1.12 builds on this page: a function is continuous on an interval when it is continuous at every point of that interval, and the standard function families are continuous wherever they are defined. Topic 1.13 uses the definition to decide when a discontinuity can be removed by redefining one value. The Intermediate Value Theorem in Topic 1.16 needs continuity as a condition, and in Unit 2 you will see that a function must be continuous at a point before it can have a derivative there. Look back at [Topic 1.10, Exploring Types of Discontinuities](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-study-guide/), or go on to [Topic 1.12, Confirming Continuity over an Interval](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-checklist/) to consolidate.
