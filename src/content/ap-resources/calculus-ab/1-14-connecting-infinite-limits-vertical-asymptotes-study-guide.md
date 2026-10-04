---
resourceId: "mb-ap-calcab-1.14-study-guide"
title: "Connecting Infinite Limits and Vertical Asymptotes: Study Guide (Calculus AB 1.14)"
description: "Learn what it means for a limit to be infinite, how to find one-sided infinite limits with a sign check, and how to use them to justify a vertical asymptote."
course: "calculus-ab"
unit: 1
topics: ["1.14"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "One-sided limits and the ways a limit can fail to exist (Topics 1.2 to 1.4)"
  - "Factoring and cancelling in 0/0 limits (Topic 1.6)"
  - "Types of discontinuity: removable, jump and vertical asymptote (Topics 1.11 and 1.13)"
  - "Graphs of ln x, eˣ and tan x"
prerequisiteResources: ["mb-ap-calcab-1.13-study-guide"]
learningObjectives:
  - "Explain what it means to write that a limit equals +∞ or −∞, and why such a limit still does not exist as a number"
  - "Find one-sided infinite limits by checking the sign of the numerator and the denominator near the point"
  - "Use a one-sided infinite limit to justify that a line x = a is a vertical asymptote"
  - "Tell a hole from a vertical asymptote in a rational function by cancelling common factors first"
  - "Describe unbounded behaviour near a point from a formula, a table or a graph"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every limit here without a calculator. A table of values can support a conclusion; it does not prove one."
related: ["mb-ap-calcab-1.14-revision-notes", "mb-ap-calcab-1.14-practice", "mb-ap-calcab-1.14-checklist"]
next: "mb-ap-calcab-1.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Writing lim (x → a) f(x) = ∞ means f(x) grows without bound as x gets close to a. It describes how the limit fails to exist; ∞ is not a number."
  - "The line x = a is a vertical asymptote of f if at least one one-sided limit at a is +∞ or −∞."
  - "Substitution giving a nonzero number over 0 signals an infinite limit. Check the sign of the bottom on each side to decide +∞ or −∞."
  - "A zero of the denominator gives a hole, not an asymptote, if the factor cancels. Always simplify first."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.14 is common content, so the same page serves AB and BC students."
  - question: "If I write lim (x → 2) f(x) = ∞, does the limit exist?"
    answer: "No. The limit does not exist as a real number. Writing = ∞ gives extra information: it says why it fails to exist (the values grow without bound and are all positive)."
  - question: "Does a vertical asymptote need both one-sided limits to be infinite?"
    answer: "No. One infinite one-sided limit is enough. For example, e^(1/x) → +∞ as x → 0 from the right but → 0 from the left, and x = 0 is still a vertical asymptote."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

- **lim (x → a) f(x)** means "the limit as x approaches a of f(x)".
- **x → a⁻** means x approaches a **from the left** (x < a). **x → a⁺** means x approaches a **from the right** (x > a).
- **∞** is read "infinity". It is a symbol for "without bound", not a number you can calculate with.

On paper, write the usual form with "x → a⁺" under "lim".

## What an infinite limit means

Look at f(x) = 1/x² near x = 0.

| x | ±0.1 | ±0.01 | ±0.001 |
|---|---|---|---|
| 1/x² | 100 | 10 000 | 1 000 000 |
| 1/x | ±10 | ±100 | ±1000 |

As x gets closer to 0 from either side, 1/x² does not settle near any number. It becomes larger than any value you choose, and it stays positive. We record this as

**lim (x → 0) 1/x² = ∞**

This is an **infinite limit**. The limit idea from Topic 1.2 asked "which number do the values approach?" An infinite limit extends that idea: the values do not approach a number, but they do move in a definite way, growing without bound in one direction.

Be careful with what the statement claims. The limit **does not exist** as a real number, because ∞ is not a number. Writing "= ∞" is a precise way of saying *how* it fails to exist: the function is unbounded, and its values are positive near 0. "= −∞" means unbounded and negative.

Now look at 1/x. From the right, 1/x is positive and grows: lim (x → 0⁺) 1/x = ∞. From the left, 1/x is negative and grows in size: lim (x → 0⁻) 1/x = −∞. The two sides behave differently, so you **cannot** write a single two-sided statement such as "lim (x → 0) 1/x = ∞". Give the two one-sided limits instead.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="inf-title inf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="inf-title">Graphs of y = 1/x and y = 1/x² near x = 0</title>
<desc id="inf-desc">Two side-by-side graphs, each for x from −3 to 3 and y from −5 to 5. Left panel, y = 1/x: the right-hand branch rises steeply upward as x approaches 0 from the right, and the left-hand branch drops steeply downward as x approaches 0 from the left. Right panel, y = 1/x²: both branches rise steeply upward as x approaches 0 from either side. In both panels the y-axis, the line x = 0, is the vertical asymptote.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="20" y1="160" x2="236" y2="160"/><line x1="128" y1="40" x2="128" y2="280"/>
<line x1="280" y1="160" x2="496" y2="160"/><line x1="388" y1="40" x2="388" y2="280"/>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="56" y1="156" x2="56" y2="164"/><line x1="92" y1="156" x2="92" y2="164"/><line x1="164" y1="156" x2="164" y2="164"/><line x1="200" y1="156" x2="200" y2="164"/>
<line x1="124" y1="64" x2="132" y2="64"/><line x1="124" y1="112" x2="132" y2="112"/><line x1="124" y1="208" x2="132" y2="208"/><line x1="124" y1="256" x2="132" y2="256"/>
<line x1="316" y1="156" x2="316" y2="164"/><line x1="352" y1="156" x2="352" y2="164"/><line x1="424" y1="156" x2="424" y2="164"/><line x1="460" y1="156" x2="460" y2="164"/>
<line x1="384" y1="64" x2="392" y2="64"/><line x1="384" y1="112" x2="392" y2="112"/><line x1="384" y1="208" x2="392" y2="208"/><line x1="384" y1="256" x2="392" y2="256"/>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="56" y="176">−2</text><text x="92" y="176">−1</text><text x="164" y="176">1</text><text x="200" y="176">2</text>
<text x="316" y="176">−2</text><text x="352" y="176">−1</text><text x="424" y="176">1</text><text x="460" y="176">2</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="end">
<text x="121" y="68">4</text><text x="121" y="116">2</text><text x="121" y="212">−2</text><text x="121" y="260">−4</text>
<text x="381" y="68">4</text><text x="381" y="116">2</text><text x="381" y="212">−2</text><text x="381" y="260">−4</text>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<polyline points="20.0,168.0 29.0,168.7 38.0,169.6 47.0,170.7 56.0,172.0 65.0,173.7 74.0,176.0 83.0,179.2 92.0,184.0 99.2,190.0 104.0,196.0 107.4,202.0 110.0,208.0 112.0,214.0 113.6,220.0 114.9,226.0 116.0,232.0 116.9,238.0 117.7,244.0 118.4,250.0 119.0,256.0 119.5,262.0 120.0,268.0 120.4,274.0 120.8,280.0"/>
<polyline points="135.2,40.0 135.6,46.0 136.0,52.0 136.5,58.0 137.0,64.0 137.6,70.0 138.3,76.0 139.1,82.0 140.0,88.0 141.1,94.0 142.4,100.0 144.0,106.0 146.0,112.0 148.6,118.0 152.0,124.0 156.8,130.0 164.0,136.0 173.0,140.8 182.0,144.0 191.0,146.3 200.0,148.0 209.0,149.3 218.0,150.4 227.0,151.3 236.0,152.0"/>
<polyline points="280.0,157.3 289.0,156.8 298.0,156.2 307.0,155.3 316.0,154.0 325.0,152.2 334.0,149.3 343.0,144.6 352.0,136.0 355.8,130.0 358.6,124.0 360.8,118.0 362.5,112.0 364.0,106.0 365.2,100.0 366.3,94.0 367.2,88.0 368.0,82.0 368.8,76.0 369.4,70.0 370.0,64.0 370.5,58.0 371.0,52.0 371.5,46.0 371.9,40.0"/>
<polyline points="404.1,40.0 404.5,46.0 405.0,52.0 405.5,58.0 406.0,64.0 406.6,70.0 407.2,76.0 408.0,82.0 408.8,88.0 409.7,94.0 410.8,100.0 412.0,106.0 413.5,112.0 415.2,118.0 417.4,124.0 420.2,130.0 424.0,136.0 433.0,144.6 442.0,149.3 451.0,152.2 460.0,154.0 469.0,155.3 478.0,156.2 487.0,156.8 496.0,157.3"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="128" y="24" text-anchor="middle" font-weight="bold">y = 1/x (odd power)</text>
<text x="388" y="24" text-anchor="middle" font-weight="bold">y = 1/x² (even power)</text>
<text x="145" y="52">→ +∞ as x → 0⁺</text>
<text x="112" y="276" text-anchor="end">→ −∞ as x → 0⁻</text>
<text x="410" y="52">→ +∞ as x → 0⁺</text>
<text x="366" y="52" text-anchor="end">→ +∞ as x → 0⁻</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="128" y="304">sides go opposite ways</text>
<text x="388" y="304">both sides go up</text>
</g>
</svg>
<figcaption>Figure 1. Left: 1/x heads to +∞ from the right and −∞ from the left, so only one-sided infinite limits can be stated. Right: 1/x² heads to +∞ from both sides, so lim (x → 0) 1/x² = ∞. In both graphs the y-axis (x = 0) is a vertical asymptote. Axes are unitless.</figcaption>
</figure>

The difference comes from the power in the denominator. An odd power such as x or x³ changes sign at 0. An even power such as x² never goes negative.

## Vertical asymptotes, defined with limits

> **Definition.** The line x = a is a **vertical asymptote** of the graph of f if **at least one** of these is true:
> lim (x → a⁻) f(x) = ∞, lim (x → a⁻) f(x) = −∞, lim (x → a⁺) f(x) = ∞, lim (x → a⁺) f(x) = −∞.

So a vertical asymptote is not just "a place where the denominator is 0". It is a claim about **unbounded behaviour**, and a one-sided infinite limit is the evidence. On a free-response answer, write that evidence down: "Because lim (x → 3⁺) f(x) = ∞, the line x = 3 is a vertical asymptote."

Vertical asymptotes are not only for fractions:

| Function | Infinite limit | Vertical asymptote |
|---|---|---|
| ln x | lim (x → 0⁺) ln x = −∞ | x = 0 (graph exists only on the right) |
| tan x | lim (x → π/2⁻) tan x = ∞ and lim (x → π/2⁺) tan x = −∞ | x = π/2 (and every odd multiple of π/2) |
| e^(1/x) | lim (x → 0⁺) e^(1/x) = ∞, but lim (x → 0⁻) e^(1/x) = 0 | x = 0, from one side only |

The last row shows why the definition says "at least one". The left-hand limit is a finite number, yet x = 0 is still a vertical asymptote.

A vertical asymptote at x = a always means f is **not continuous** at a. This is the third type of discontinuity from Topic 1.11, and unlike a hole it cannot be removed by redefining one value (Topic 1.13): no single number can fill a gap that runs off to infinity.

## Finding one-sided infinite limits: the sign check

When direct substitution at x = a gives a **nonzero number over 0**, the expression is unbounded near a. Topic 1.6 told you this means "no finite limit". Now you can say more.

1. **Substitute.** Confirm the top tends to a nonzero number c and the bottom tends to 0.
2. **Find the sign of the bottom on each side.** Pick a value just to the left of a and just to the right, or reason from the factors.
3. **Combine signs.** (sign of c) × (sign of the bottom) gives the sign of f(x) on that side.
4. **Write the limits.** Positive and unbounded gives +∞; negative and unbounded gives −∞.

Example: (x + 4)/(x − 2) as x → 2. The top tends to 6, which is positive. For x slightly more than 2, x − 2 is a small positive number, so the fraction is large and positive: lim (x → 2⁺) = ∞. For x slightly less than 2, x − 2 is small and negative, so lim (x → 2⁻) = −∞.

**Odd and even powers.** If the factor (x − a) in the bottom appears to an **even** power, the bottom has the same sign on both sides, so both one-sided limits match. If it appears to an **odd** power, the sign flips and the one-sided limits are opposite.

## Holes versus asymptotes

A zero of the denominator gives one of two pictures. Decide which by simplifying **first**.

| Substitution at x = a gives | After cancelling common factors | Graph at x = a | Limit at a |
|---|---|---|---|
| 0/0 | The bottom is no longer 0 at a | Hole | A finite number (Topic 1.6) |
| 0/0 | The bottom is still 0 at a, top is not | Vertical asymptote | Infinite, check each side |
| nonzero/0 | (nothing cancels) | Vertical asymptote | Infinite, check each side |

For example, (x² − 9)/(x − 3) has a hole at x = 3 with limit 6, while (x + 3)/(x − 3) has a vertical asymptote at x = 3.

## Worked example 1: a hole and an asymptote in one function

**Question.** Let f(x) = (x² + x − 6)/(x² − 5x + 6). Find every vertical asymptote of the graph of f and every hole. Describe the behaviour of f near each asymptote using limits.

1. **Find where f is undefined.** The bottom factors as (x − 2)(x − 3), so f is undefined at x = 2 and x = 3.
2. **Factor the top.** x² + x − 6 = (x − 2)(x + 3).
3. **Cancel the common factor**, valid for x ≠ 2:
   **f(x) = (x + 3)/(x − 3)** for x ≠ 2.
4. **At x = 2.** The simplified bottom is 2 − 3 = −1, not 0. So
   **lim (x → 2) f(x) = (2 + 3)/(2 − 3) = −5**
   The limit is finite, so there is a **hole** at (2, −5), not an asymptote.
5. **At x = 3.** The simplified form gives 6/0: nonzero over 0.
   - Right of 3: x − 3 > 0 and x + 3 ≈ 6 > 0, so the fraction is positive. **lim (x → 3⁺) f(x) = ∞**.
   - Left of 3: x − 3 < 0, so the fraction is negative. **lim (x → 3⁻) f(x) = −∞**.
6. **Conclude with the definition.** Because lim (x → 3⁺) f(x) = ∞, the line **x = 3 is a vertical asymptote**. It is the only one.

**Check.** f(3.001) = 6.001/0.001 = 6001 and f(2.999) = 5.999/(−0.001) = −5999. Large, with the predicted signs.

<figure>
<svg viewBox="0 0 520 360" role="img" aria-labelledby="we1-title we1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="we1-title">Graph of f(x) = (x² + x − 6)/(x² − 5x + 6) with a hole at (2, −5) and a vertical asymptote at x = 3</title>
<desc id="we1-desc">Axes for x from −4 to 10 and y from −10 to 10. A dashed vertical line marks x = 3. The left branch starts near height 0.1 at x = −4, falls slowly, then drops steeply toward the bottom of the graph as x approaches 3 from the left. On this branch an open circle sits at (2, −5), marking a hole. The right branch starts at the top of the graph just right of x = 3 and falls, levelling off toward height 1 as x increases to 10. A faint dashed horizontal line at y = 1 is labelled for the next topic.</desc>
<rect x="0" y="0" width="520" height="360" fill="#ffffff"/>
<line x1="40" y1="180" x2="500" y2="180" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="168" y1="340" x2="168" y2="24" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="40" y1="176" x2="40" y2="184"/><line x1="104" y1="176" x2="104" y2="184"/><line x1="232" y1="176" x2="232" y2="184"/><line x1="296" y1="176" x2="296" y2="184"/><line x1="360" y1="176" x2="360" y2="184"/><line x1="424" y1="176" x2="424" y2="184"/><line x1="488" y1="176" x2="488" y2="184"/>
<line x1="164" y1="30" x2="172" y2="30"/><line x1="164" y1="105" x2="172" y2="105"/><line x1="164" y1="255" x2="172" y2="255"/><line x1="164" y1="330" x2="172" y2="330"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="197">−4</text><text x="104" y="197">−2</text><text x="232" y="197">2</text><text x="296" y="197">4</text><text x="360" y="197">6</text><text x="424" y="197">8</text><text x="488" y="197">10</text>
<text x="508" y="184">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="160" y="34">10</text><text x="160" y="109">5</text><text x="160" y="259">−5</text><text x="160" y="334">−10</text><text x="160" y="20">y</text>
</g>
<line x1="264" y1="24" x2="264" y2="340" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<line x1="40" y1="165" x2="500" y2="165" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<polyline points="40.0,177.9 56.0,178.8 72.0,180.0 88.0,181.4 104.0,183.0 120.0,185.0 136.0,187.5 152.0,190.7 168.0,195.0 184.0,201.0 200.0,210.0 209.1,217.5 216.0,225.0 221.3,232.5 225.6,240.0 229.1,247.5 232.0,255.0 234.5,262.5 236.6,270.0 238.4,277.5 240.0,285.0 241.4,292.5 242.7,300.0 243.8,307.5 244.8,315.0 245.7,322.5 246.5,330.0"/>
<polyline points="285.3,30.0 286.6,37.5 288.0,45.0 289.6,52.5 291.4,60.0 293.5,67.5 296.0,75.0 298.9,82.5 302.4,90.0 306.7,97.5 312.0,105.0 318.9,112.5 328.0,120.0 340.8,127.5 360.0,135.0 376.0,139.3 392.0,142.5 408.0,145.0 424.0,147.0 440.0,148.6 456.0,150.0 472.0,151.2 488.0,152.1"/>
</g>
<circle cx="232" cy="255" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" paint-order="stroke">
<text x="222" y="275" text-anchor="end">open circle: hole at (2, −5)</text>
<text x="272" y="20">x = 3 (dashed)</text>
<text x="300" y="44">f(x) → +∞ as x → 3⁺</text>
<text x="238" y="352" text-anchor="end">f(x) → −∞ as x → 3⁻</text>
<text x="44" y="160">y = 1 (dotted, Topic 1.15)</text>
</g>
</svg>
<figcaption>Figure 2. The graph of f from Worked example 1. The factor (x − 2) cancels, leaving a hole (open circle) at (2, −5). The factor (x − 3) does not cancel, giving a vertical asymptote (dashed line) at x = 3, with the curve falling to −∞ on the left and rising to +∞ on the right. The dotted line y = 1 is a horizontal asymptote, covered in Topic 1.15. Axes are unitless.</figcaption>
</figure>

## Worked example 2: an even power gives a two-sided infinite limit

**Question.** Let g(x) = (2x − 7)/(x − 1)². Describe the behaviour of g as x → 1, and state whether x = 1 is a vertical asymptote.

1. **Substitute.** Top: 2(1) − 7 = −5. Bottom: (1 − 1)² = 0. Nonzero over 0, so g is unbounded near 1.
2. **Sign of the bottom.** (x − 1)² is a square, so it is **positive on both sides** of 1 (for x ≠ 1).
3. **Combine signs.** Negative top ÷ small positive bottom = large negative number, on both sides.
4. **Write the limits.**
   **lim (x → 1⁻) g(x) = −∞ and lim (x → 1⁺) g(x) = −∞**
   The two sides agree, so you may write the two-sided statement **lim (x → 1) g(x) = −∞**.
5. **Conclude.** Since lim (x → 1) g(x) = −∞, the line **x = 1 is a vertical asymptote**. Near x = 1 the graph plunges downward on both sides.

**Check.** g(1.01) = −4.98/0.0001 = −49 800 and g(0.99) = −5.02/0.0001 = −50 200. Both large and negative.

**Interpretation.** "lim (x → 1) g(x) = −∞" still means the limit does not exist as a number. The statement just tells you the way it fails: every value near 1 is a large negative number.

## Worked example 3: a vertical asymptote without a polynomial

**Question.** Let q(x) = x/ln x, for x > 0 and x ≠ 1. Show that x = 1 is a vertical asymptote of the graph of q, and decide whether x = 0 is one too.

1. **Where is q undefined?** ln x is defined only for x > 0, and ln x = 0 only at x = 1. So the candidates are x = 1 and the edge x = 0.
2. **At x = 1, substitute.** Top: 1. Bottom: ln 1 = 0. Nonzero over 0.
3. **Sign of ln x near 1.** ln x > 0 for x > 1, and ln x < 0 for 0 < x < 1.
4. **Write the limits.**
   - **lim (x → 1⁺) x/ln x = ∞** (positive ÷ small positive).
   - **lim (x → 1⁻) x/ln x = −∞** (positive ÷ small negative).
5. **Justify.** Because lim (x → 1⁺) q(x) = ∞, the line **x = 1 is a vertical asymptote** of the graph of q.
6. **At x = 0 (from the right only).** The top x → 0. The bottom ln x → −∞, so its size grows without bound. A quantity near 0 divided by a huge number is near 0: **lim (x → 0⁺) x/ln x = 0**. That is finite, so **x = 0 is not a vertical asymptote**, even though q is undefined there.

**Check.** q(1.01) ≈ 101.5 and q(0.99) ≈ −98.5. The signs and sizes fit.

Step 6 is the lesson: being undefined at a point is not enough. You need an infinite limit.

## Common misconceptions

- **"lim (x → a) f(x) = ∞ means the limit exists and equals infinity."** The limit does not exist. "= ∞" names the way it fails: unbounded, positive.
- **"Every zero of the denominator is a vertical asymptote."** Not if the factor cancels. (x² − 9)/(x − 3) has a hole at x = 3. Simplify first.
- **"Nonzero over 0 means the limit is 0."** A fixed number divided by something tiny is huge, not 0.
- **Writing a two-sided infinite limit when the sides disagree.** For 1/x at 0, the sides go to +∞ and −∞. Write the one-sided limits separately.
- **Guessing the sign.** Do not assume +∞. Check the sign of the top and of the bottom on each side. A squared factor in the bottom is positive on both sides.
- **"A vertical asymptote needs both sides to be infinite."** One infinite one-sided limit is enough, as with ln x at 0 or e^(1/x) at 0.
- **"The function can never be defined at an asymptote."** The definition is about nearby values. A function such as f(x) = 1/x² for x ≠ 0, with f(0) = 5, is defined at 0, yet x = 0 is still a vertical asymptote because lim (x → 0) f(x) = ∞.
- **Trusting a calculator graph alone.** A graphing window can draw a near-vertical line joining the two branches, or miss the asymptote between plotted points. Use the sign check to confirm.

## Where this leads

Topic 1.15, [Connecting Limits at Infinity and Horizontal Asymptotes](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/), turns the question around: instead of x → a with f(x) unbounded, it asks what f(x) does as x itself grows without bound. Infinite limits return later too. In Unit 5 they help you sketch graphs, and in Unit 6 improper integrals (BC only) handle areas next to a vertical asymptote. The previous topic, [Removing Discontinuities](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-study-guide/), explains why a hole can be filled but an asymptote cannot. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-checklist/) to consolidate.
