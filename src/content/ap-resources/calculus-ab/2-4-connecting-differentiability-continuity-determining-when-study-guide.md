---
resourceId: "mb-ap-calcab-2.4-study-guide"
title: "Connecting Differentiability and Continuity: Study Guide (Calculus AB 2.4)"
description: "Learn why differentiability implies continuity, why the reverse fails, and how to justify that a derivative does not exist at a corner, cusp, vertical tangent or discontinuity."
course: "calculus-ab"
unit: 2
topics: ["2.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Continuity at a point and types of discontinuity (Topics 1.10 and 1.11)"
  - "One-sided limits and infinite limits (Topics 1.2 and 1.14)"
  - "The derivative at a point as a limit of a difference quotient (Topic 2.2)"
  - "Estimating derivatives from tables and difference quotients (Topic 2.3)"
prerequisiteResources: ["mb-ap-calcab-2.3-study-guide"]
learningObjectives:
  - "Explain why a function that is differentiable at a point must be continuous there"
  - "Use the contrapositive: a discontinuity, or a point missing from the domain, rules out a derivative there"
  - "Give and recognise examples of functions that are continuous at a point but not differentiable there"
  - "Justify that f′(a) does not exist using one-sided limits of the difference quotient"
  - "Decide whether a piecewise function is differentiable where its rule changes"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work without a calculator. The calculator section shows why a numerical derivative can mislead at a corner."
related: ["mb-ap-calcab-2.4-revision-notes", "mb-ap-calcab-2.4-practice", "mb-ap-calcab-2.4-checklist"]
next: "mb-ap-calcab-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If f is differentiable at a, then f is continuous at a. So a discontinuity at a means f′(a) does not exist."
  - "The reverse is false: a continuous function can fail to be differentiable at a corner, a cusp or a vertical tangent."
  - "If a is not in the domain of f, then a is not in the domain of f′."
  - "To justify that f′(a) does not exist, show the one-sided limits of the difference quotient differ, or that the quotient is unbounded."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.4 is common content, so the same page serves AB and BC students."
  - question: "If the two pieces of a piecewise function have the same slope at the join, is it differentiable there?"
    answer: "Only if the function is also continuous there. Matching slopes with a jump between the pieces still gives no derivative. Check continuity first."
  - question: "Can a calculator tell me whether a derivative exists?"
    answer: "No. A numerical derivative can return a number at a corner, where the derivative does not exist. Use the definition and one-sided limits to decide."
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

This page has no equation renderer, so limits are written in a compact form:

- **f′(a) = lim (h → 0) (f(a + h) − f(a))/h**, provided the limit exists.
- **lim (h → 0⁻)** means h approaches 0 through negative values (points to the left of a); **lim (h → 0⁺)** means through positive values (points to the right).

The two one-sided limits of the difference quotient are sometimes called the **left-hand** and **right-hand derivatives**. f′(a) exists only when both exist, are finite, and are equal.

## Differentiable means continuous

A function is **differentiable at a** when f′(a) exists as a finite number. The key fact of this topic:

> **If f is differentiable at x = a, then f is continuous at x = a.**

**Why it is true.** For x ≠ a, write

**f(x) − f(a) = [(f(x) − f(a))/(x − a)] × (x − a)**

As x → a, the bracket tends to f′(a), a finite number, and (x − a) tends to 0. So f(x) − f(a) tends to f′(a) × 0 = 0. That says lim (x → a) f(x) = f(a), which is exactly continuity at a.

The argument needs f(a) to exist in the first place. So there is a simpler consequence too:

> **If a is not in the domain of f, then a is not in the domain of f′.**

For example, r(x) = (x² − 9)/(x − 3) equals x + 3 for every x ≠ 3, so its graph is a line of gradient 1 with a hole at x = 3. It is tempting to say r′(3) = 1. But r(3) does not exist, so the difference quotient (r(3 + h) − r(3))/h cannot even be written down. **r′(3) does not exist.**

### The contrapositive: a fast test

"Differentiable implies continuous" is logically the same as "**not continuous implies not differentiable**". So whenever f has a removable discontinuity, a jump or a vertical asymptote at a, you can say at once that f′(a) does not exist. No difference quotient is needed; name the discontinuity and quote the theorem.

### The converse is false

"Continuous implies differentiable" is **not** true. Continuity only says the graph has no break at a. A derivative needs more: the graph must have a single, non-vertical tangent line there. Zoom in on a differentiable function and the graph looks more and more like a straight line. Zoom in on a corner and it still looks like a corner, however far you go.

## Four ways a derivative fails to exist

<figure>
<svg viewBox="0 0 520 380" role="img" aria-labelledby="fail-title fail-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fail-title">Four graphs showing a corner, a cusp, a vertical tangent and a jump discontinuity at x = a</title>
<desc id="fail-desc">Four panels. Top left, corner: a V shape made of two straight lines meeting at a point, with gradient −1 on the left and +1 on the right. Top right, cusp: two curves that both come down steeply to a sharp point, the left curve getting steeper downwards and the right curve getting steeper upwards, so the gradient goes to minus infinity on the left and plus infinity on the right. Bottom left, vertical tangent: a curve shaped like a stretched S that passes through the point with a vertical tangent, drawn as a dotted vertical line; the curve rises on both sides. Bottom right, jump: a line segment ending at a filled dot, and a second, higher segment starting at an open circle directly above it, so the graph breaks at x = a.</desc>
<rect x="0" y="0" width="520" height="380" fill="#ffffff"/>
<g fill="none" stroke="#c9d1dc" stroke-width="1">
<rect x="20" y="40" width="230" height="145" rx="6"/><rect x="270" y="40" width="230" height="145" rx="6"/>
<rect x="20" y="210" width="230" height="160" rx="6"/><rect x="270" y="210" width="230" height="160" rx="6"/>
</g>
<path d="M35.0 70.0 L135.0 160.0 L235.0 70.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="135" cy="160" r="4.5" fill="#1d2b44"/>
<path d="M285.0 72.7 L290.0 75.6 L295.0 78.6 L300.0 81.7 L305.0 84.8 L310.0 87.9 L315.0 91.2 L320.0 94.5 L325.0 97.9 L330.0 101.4 L335.0 105.0 L340.0 108.7 L345.0 112.6 L350.0 116.6 L355.0 120.9 L360.0 125.4 L365.0 130.1 L370.0 135.4 L375.0 141.2 L380.0 148.2 L385.0 160.0 L390.0 148.2 L395.0 141.2 L400.0 135.4 L405.0 130.1 L410.0 125.4 L415.0 120.9 L420.0 116.6 L425.0 112.6 L430.0 108.7 L435.0 105.0 L440.0 101.4 L445.0 97.9 L450.0 94.5 L455.0 91.2 L460.0 87.9 L465.0 84.8 L470.0 81.7 L475.0 78.6 L480.0 75.6 L485.0 72.7" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="385" cy="160" r="4.5" fill="#1d2b44"/>
<line x1="135" y1="230" x2="135" y2="330" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<path d="M35.0 330.4 L49.3 327.9 L62.1 325.4 L73.6 322.8 L83.8 320.3 L92.8 317.8 L100.7 315.3 L107.5 312.8 L113.4 310.2 L118.4 307.7 L122.5 305.2 L125.9 302.7 L128.6 300.2 L130.7 297.6 L132.3 295.1 L133.4 292.6 L134.2 290.1 L134.7 287.6 L134.9 285.0 L135.0 282.5 L135.0 280.0 L135.0 277.5 L135.1 275.0 L135.3 272.4 L135.8 269.9 L136.6 267.4 L137.7 264.9 L139.3 262.4 L141.4 259.8 L144.1 257.3 L147.5 254.8 L151.6 252.3 L156.6 249.8 L162.5 247.2 L169.3 244.7 L177.2 242.2 L186.2 239.7 L196.4 237.2 L207.9 234.6 L220.7 232.1 L235.0 229.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="135" cy="280" r="4.5" fill="#1d2b44"/>
<line x1="285" y1="340" x2="385" y2="300" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="391" y1="257.6" x2="485" y2="220" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="385" cy="300" r="5" fill="#1d2b44"/>
<circle cx="385" cy="260" r="5.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44">
<text x="30" y="30">1. Corner (continuous)</text>
<text x="280" y="30">2. Cusp (continuous)</text>
<text x="30" y="205">3. Vertical tangent (continuous)</text>
<text x="280" y="205">4. Jump (not continuous)</text>
</g>
<g font-size="11" fill="#1d2b44">
<text x="30" y="178">slopes: −1 on left, +1 on right</text>
<text x="280" y="178">slopes → −∞ on left, +∞ on right</text>
<text x="145" y="300">dotted: vertical tangent</text>
<text x="395" y="306">filled: f(a)</text>
<text x="395" y="280">open: not included</text>
</g>
</svg>
<figcaption>Figure 1. Four ways f′(a) can fail to exist; the marked point is at x = a in each panel. Panels 1–3 are continuous at a, yet not differentiable there. Panel 4 is not continuous, so it cannot be differentiable. Axes are omitted; only the shape matters.</figcaption>
</figure>

| Type | Continuous at a? | What the difference quotient does | Example |
|---|---|---|---|
| Corner | Yes | Left and right limits are finite but different | \|x + 1\| at x = −1: −1 and +1 |
| Cusp | Yes | Left and right limits are infinite with opposite signs | (x − 2)^(2/3) at x = 2: −∞ and +∞ |
| Vertical tangent | Yes | Quotient grows without bound, same sign on both sides | ∛(x − 1) + 2 at x = 1: +∞ on both sides |
| Discontinuity | No | No derivative, by the theorem above | any jump, hole or asymptote |

**Corner.** For f(x) = |x + 1| at a = −1: f(−1 + h) − f(−1) = |h|, so the quotient is |h|/h. That is −1 for h < 0 and +1 for h > 0. The one-sided limits are −1 and 1. They differ, so f′(−1) does not exist.

**Cusp.** For f(x) = (x − 2)^(2/3) at a = 2: the quotient is h^(2/3)/h = 1/h^(1/3). As h → 0⁻ this tends to −∞; as h → 0⁺ it tends to +∞. No finite limit, so f′(2) does not exist.

**Vertical tangent.** For f(x) = ∛(x − 1) + 2 at a = 1: the quotient is ∛h/h = 1/h^(2/3), which is positive on both sides and tends to +∞. For example, h = 0.1 gives about 4.64 and h = 0.001 gives 100. The tangent line is vertical and a vertical line has no gradient, so f′(1) does not exist.

## Writing a justification

When a question asks you to justify, give the reason in words tied to the definition or the theorem:

- **Discontinuity:** "f is not continuous at x = a because [limit and value disagree / one-sided limits differ / f(a) is undefined]. A function that is differentiable at a point must be continuous there, so f′(a) does not exist."
- **Corner:** "The left-hand limit of the difference quotient is ___ and the right-hand limit is ___. They are not equal, so f′(a) does not exist."
- **Cusp or vertical tangent:** "The difference quotient is unbounded as h → 0, so its limit is not a finite number and f′(a) does not exist."

"It has a sharp point" is a description, not a justification. Pair it with the one-sided limits.

## Worked example 1: a corner from an absolute value

**Question.** Let f(x) = |x² − 4|. Is f differentiable at x = 2? Justify your answer.

1. **Continuity first.** f is the absolute value of a polynomial, so it is continuous everywhere. f(2) = |4 − 4| = 0. Continuity does not settle the question.
2. **Remove the absolute value near 2.** For x just above 2, x² − 4 > 0, so f(x) = x² − 4. For x just below 2 (but above −2), x² − 4 < 0, so f(x) = 4 − x².
3. **Right-hand limit** (h > 0): (f(2 + h) − f(2))/h = ((2 + h)² − 4)/h = (4h + h²)/h = 4 + h → **4**.
4. **Left-hand limit** (h < 0): (f(2 + h) − f(2))/h = (4 − (2 + h)²)/h = (−4h − h²)/h = −4 − h → **−4**.
5. **Compare.** The one-sided limits are 4 and −4. They are not equal.

**Answer.** f is continuous at x = 2 but **not differentiable** there: the graph has a corner.

**Numerical check (Topic 2.3 style).**

| h | −0.1 | −0.01 | 0.01 | 0.1 |
|---|---|---|---|---|
| (f(2 + h) − f(2))/h | −3.9 | −3.99 | 4.01 | 4.1 |

The left values head to −4 and the right values to 4, agreeing with the algebra.

**Contrast.** At x = 0, f(x) = 4 − x² on a whole interval around 0, a smooth curve. There the difference quotient is −h → 0, so f′(0) = 0. The absolute value only causes trouble where x² − 4 changes sign: x = 2 and x = −2.

## Worked example 2: a piecewise function with a parameter

**Question.** Let g(x) = x² + 1 for x ≤ 2, and g(x) = kx − 1 for x > 2, where k is a constant.

(a) Find k so that g is continuous at x = 2. (b) With that k, is g differentiable at x = 2? (c) Is there any k that makes g differentiable at x = 2?

**(a)** g(2) = 2² + 1 = 5, and this is also the left-hand limit. The right-hand limit is 2k − 1. Continuity needs 2k − 1 = 5, so **k = 3**.

**(b)** Use the difference quotient with g(2) = 5.

- Left (h < 0), so 2 + h is in the first piece: ((2 + h)² + 1 − 5)/h = (4h + h²)/h = 4 + h → **4**.
- Right (h > 0), so 2 + h is in the second piece: (3(2 + h) − 1 − 5)/h = 3h/h = **3**.

The one-sided limits, 4 and 3, differ. So g is **continuous but not differentiable** at x = 2: there is a corner.

**(c)** Differentiability needs continuity (k = 3) **and** equal one-sided limits (k = 4, the slope of the second piece must match 4). No single k does both, so **no value of k** makes g differentiable at x = 2.

**The two-step method for piecewise functions.**

1. **Check continuity** at the join. If it fails, stop: the function is not differentiable there.
2. If it is continuous, find both one-sided limits of the difference quotient, **always using f(a) from the actual definition**. Differentiable only if they are equal and finite.

Skipping step 1 is the classic trap. Two pieces can have the same slope at the join and still be separated by a jump. The difference quotient on the side that does not contain f(a) then blows up.

## A warning about calculators

Many calculators estimate a derivative with a symmetric difference quotient, (f(a + h) − f(a − h))/(2h), using a small h. At a corner this averages the left and right slopes. For f(x) = |x² − 4| at x = 2 with h = 0.001:

(f(2.001) − f(1.999))/0.002 = (0.004001 − 0.003999)/0.002 = **0.001**

The calculator reports a tiny number, although f′(2) does not exist. A numerical derivative tells you nothing about **whether** the derivative exists. Decide that with continuity and one-sided limits.

## Common misconceptions

- **"Continuous means differentiable."** Corners, cusps and vertical tangents are all continuous yet not differentiable.
- **"Not differentiable means not continuous."** Same error, the other way round. Only "not continuous ⇒ not differentiable" is valid.
- **"The slopes of the pieces match, so it is differentiable."** Check continuity first. A jump kills the derivative.
- **"The graph is a line with a hole, so the derivative at the hole is the line's gradient."** If f(a) does not exist, f′(a) does not exist.
- **Using the wrong value of f(a)** in a one-sided quotient. f(a) comes from whichever piece actually includes a.
- **"A vertical tangent has an infinite derivative, so f′(a) = ∞."** ∞ is not a number. Say f′(a) does not exist because the quotient is unbounded.
- **"x|x| has a corner at 0."** It does not: its quotient is |h|, which tends to 0 from both sides, so the derivative there is 0. Check with limits, not with the look of the formula.
- **Trusting a numerical derivative** at a corner (see the calculator warning above).

## Where this leads

From Topic 2.5 onwards you will differentiate with rules such as the power rule. Those rules only apply where the derivative exists, so keep checking for corners, cusps and discontinuities. Later theorems, such as the Mean Value Theorem in Unit 5, list differentiability on an interval as a condition, and this topic is how you verify it. Read on with [Topic 2.5: Applying the Power Rule](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-study-guide/), or return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-checklist/) to consolidate. For estimating derivatives from data, revisit [Topic 2.3](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-study-guide/).
