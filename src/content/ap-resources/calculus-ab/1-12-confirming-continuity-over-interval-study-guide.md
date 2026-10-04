---
resourceId: "mb-ap-calcab-1.12-study-guide"
title: "Confirming Continuity over an Interval: Study Guide (Calculus AB 1.12)"
description: "Learn what it means for a function to be continuous on an interval, which function families are continuous on their domains, and how to find and justify the intervals of continuity."
course: "calculus-ab"
unit: 1
topics: ["1.12"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definition of continuity at a point (Topic 1.11)"
  - "Types of discontinuity: removable, jump and vertical asymptote (Topic 1.10)"
  - "One-sided limits and the properties of limits (Topics 1.3 to 1.5)"
  - "Domains of polynomial, rational, root, exponential, logarithmic and trigonometric functions"
  - "Interval notation, such as [a, b), (a, ∞) and unions of intervals"
prerequisiteResources: ["mb-ap-calcab-1.11-study-guide"]
learningObjectives:
  - "Explain what it means for a function to be continuous on an open interval and on a closed interval"
  - "Use the fact that the standard function families are continuous at every point of their domains"
  - "Find the largest intervals on which a function built from these families is continuous, by finding its domain"
  - "Check the boundary points of a piecewise function and decide which intervals of continuity include them"
  - "Decide whether a function is continuous on a given closed interval, including one-sided checks at the endpoints"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise without a calculator. Where you need to place a multiple of π on a number line, use π ≈ 3.14."
related: ["mb-ap-calcab-1.12-revision-notes", "mb-ap-calcab-1.12-practice", "mb-ap-calcab-1.12-checklist"]
next: "mb-ap-calcab-1.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A function is continuous on an interval when it is continuous at every point of that interval."
  - "Polynomial, rational, power, exponential, logarithmic and trigonometric functions are continuous at every point of their domains."
  - "For a formula built from these families, the intervals of continuity are the intervals that make up its domain."
  - "For a piecewise function, each piece is handled by its family; then test every boundary point with the three-part definition."
  - "On a closed interval [a, b], only one-sided continuity is needed at the endpoints a and b."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.12 is common content, so the same page serves AB and BC students."
  - question: "Is 1/x a continuous function?"
    answer: "It is continuous at every point of its domain, so it is continuous on (−∞, 0) and on (0, ∞). It is not continuous on any interval that contains 0, such as [−1, 1], because it is not defined at 0."
  - question: "Do I have to check every point of an interval one by one?"
    answer: "No. The family facts cover all the points inside each piece at once. You only test special points: where a piece changes, where the formula is undefined, and the endpoints of the interval you were asked about."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

**lim (x → 3⁻) f(x)** means "the limit as x approaches 3 from the left". **lim (x → 3⁺) f(x)** means "from the right".

Intervals use the usual notation. A square bracket includes the endpoint and a round bracket excludes it: [−4, −1) contains −4 but not −1. The symbol ∪ joins intervals.

## From one point to a whole interval

In Topic 1.11 you checked continuity at a single point x = c with three conditions:

1. f(c) exists;
2. lim (x → c) f(x) exists;
3. the limit equals f(c).

Topic 1.12 scales this up. A function is **continuous on an interval** if it is continuous at **every** point of that interval. On a graph, this means you can trace the graph over the whole interval without lifting your pen: no holes, no jumps, no vertical asymptotes.

An interval has infinitely many points, so you cannot test them one at a time. Instead you use two facts:

- the standard function families are continuous wherever they are defined, and
- functions built from continuous pieces stay continuous, except at a small number of special points that you then test by hand.

## Open and closed intervals

**Open interval (a, b).** Every point inside is an interior point. f is continuous on (a, b) if it is continuous at each c with a < c < b, using the full two-sided definition.

**Closed interval [a, b].** The endpoints need care. At x = a the function may not even be defined to the left of a, so a two-sided limit at a may not exist. The usual convention is:

- f is continuous at every point of the open interval (a, b);
- at the left endpoint, f is **continuous from the right**: lim (x → a⁺) f(x) = f(a);
- at the right endpoint, f is **continuous from the left**: lim (x → b⁻) f(x) = f(b).

**Example.** q(x) = √(9 − x²) is defined only for −3 ≤ x ≤ 3. At x = 3, q(3) = 0, and as x → 3 from the left, 9 − x² → 0⁺, so q(x) → 0. The left-hand limit matches q(3). The same happens at x = −3 from the right. So q is continuous on the closed interval [−3, 3], even though no two-sided limit exists at ±3.

The same rule applies to half-open intervals: [a, b) needs right-continuity at a; (a, b] needs left-continuity at b.

## The function families and where they are continuous

The key fact for this topic: **polynomial, rational, power, exponential, logarithmic and trigonometric functions are continuous at every point of their domains.** So for these families, "where is it continuous?" becomes "where is it defined?".

| Family | Example | Continuous on |
|---|---|---|
| Polynomial | 3x⁴ − x + 7 | all real numbers, (−∞, ∞) |
| Rational | (x + 1)/(x − 2) | every x where the denominator is not 0: (−∞, 2) ∪ (2, ∞) |
| Power (root) | √x | [0, ∞), with right-continuity at 0 |
| Power (odd root) | ∛x | all real numbers |
| Power (negative exponent) | x⁻¹ = 1/x | (−∞, 0) ∪ (0, ∞) |
| Exponential | eˣ, 2ˣ | all real numbers |
| Logarithmic | ln x | (0, ∞) |
| Trigonometric | sin x, cos x | all real numbers |
| Trigonometric | tan x, sec x | every x except odd multiples of π/2, where cos x = 0 |
| Trigonometric | cot x, csc x | every x except multiples of π, where sin x = 0 |

**Combining continuous functions.** The limit properties from Topic 1.5 give these rules. If f and g are both continuous at c, then so are f + g, f − g, kf and fg, and so is f/g provided g(c) ≠ 0. A composite f(g(x)) is continuous at c if g is continuous at c and f is continuous at g(c). That is why a formula such as ln(x² + 1) · cos x is continuous everywhere it is defined.

**Consequence.** For any formula built from these families with +, −, ×, ÷ and composition, the function is continuous on each interval of its domain. Finding the intervals of continuity is mostly a domain problem.

## A procedure you can rely on

1. **Single formula?** Find the domain. List every value that is excluded:
   - a denominator equal to 0;
   - an even root (square root, fourth root) of a negative number;
   - a logarithm of a number that is 0 or negative;
   - tan, sec, cot or csc where they are undefined.
2. **Write the domain as a union of intervals.** Those are the intervals of continuity. Use a square bracket at an endpoint only if the function is defined there and the one-sided limit equals the value.
3. **Piecewise function?** Each piece is continuous on its own open subinterval (if its formula is defined there). Then test **every boundary point** with the three-part definition, using one-sided limits from each piece.
4. **Asked about a given interval [a, b]?** Check that no excluded value or failed boundary point lies in [a, b]. At a and b themselves, one-sided continuity is enough.
5. **Justify.** Name the family facts you used and show the limit calculations at the boundary points.

## Worked example 1: a single formula with a root and a denominator

**Question.** Find all intervals on which h(x) = √(x + 4)/(x² − 1) is continuous.

1. **Identify the families.** The top is a power (square root) function of a polynomial. The bottom is a polynomial. Each is continuous wherever it is defined, so h is continuous at every point of its domain.
2. **Restriction from the root.** √(x + 4) needs x + 4 ≥ 0, so x ≥ −4.
3. **Restriction from the denominator.** x² − 1 = (x − 1)(x + 1) = 0 when x = 1 or x = −1. Both values are at least −4, so both are removed.
4. **Write the domain.** [−4, −1) ∪ (−1, 1) ∪ (1, ∞).
5. **Check the closed endpoint x = −4.** h(−4) = √0/(16 − 1) = 0/15 = 0. As x → −4⁺, the top → 0 and the bottom → 15, so lim (x → −4⁺) h(x) = 0 = h(−4). h is continuous from the right at −4, so the square bracket is correct.

**Answer.** h is continuous on **[−4, −1), (−1, 1) and (1, ∞)**.

**Interpretation.** At x = ±1 the top is not 0 (for example, √3 at x = −1), so the expression is a nonzero number over 0. The graph has vertical asymptotes there, not holes. Either way, h is not defined at ±1, so it is not continuous there.

<figure>
<svg viewBox="0 0 560 170" role="img" aria-labelledby="dom-title dom-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dom-title">Number line showing where h(x) = √(x + 4)/(x² − 1) is continuous</title>
<desc id="dom-desc">A number line from −5 to 3. A thick bar starts at a filled dot at −4 and runs to an open circle at −1. A second thick bar runs between open circles at −1 and 1. A third thick bar starts at an open circle at 1 and continues to an arrow past 3. Labels mark −4 as included, and −1 and 1 as excluded. Nothing is shaded to the left of −4.</desc>
<rect x="0" y="0" width="560" height="170" fill="#ffffff"/>
<line x1="40" y1="100" x2="530" y2="100" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="95" x2="60" y2="105"/><line x1="115" y1="95" x2="115" y2="105"/><line x1="170" y1="95" x2="170" y2="105"/><line x1="225" y1="95" x2="225" y2="105"/><line x1="280" y1="95" x2="280" y2="105"/><line x1="335" y1="95" x2="335" y2="105"/><line x1="390" y1="95" x2="390" y2="105"/><line x1="445" y1="95" x2="445" y2="105"/><line x1="500" y1="95" x2="500" y2="105"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="122">−5</text><text x="115" y="122">−4</text><text x="170" y="122">−3</text><text x="225" y="122">−2</text><text x="280" y="122">−1</text><text x="335" y="122">0</text><text x="390" y="122">1</text><text x="445" y="122">2</text><text x="500" y="122">3</text>
<text x="545" y="104">x</text>
</g>
<line x1="115" y1="70" x2="274" y2="70" stroke="#1d2b44" stroke-width="5"/>
<line x1="286" y1="70" x2="384" y2="70" stroke="#1d2b44" stroke-width="5"/>
<line x1="396" y1="70" x2="515" y2="70" stroke="#1d2b44" stroke-width="5"/>
<polygon points="515,62 530,70 515,78" fill="#1d2b44"/>
<circle cx="115" cy="70" r="6" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280" cy="70" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="390" cy="70" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="115" y="50">filled dot: −4 included</text>
<text x="280" y="30">open circle: −1 excluded</text>
<text x="390" y="50">open circle: 1 excluded</text>
<text x="290" y="150">h is continuous on [−4, −1) ∪ (−1, 1) ∪ (1, ∞)</text>
</g>
</svg>
<figcaption>Figure 1. The intervals of continuity of h. The filled dot at −4 means h(−4) is defined and h is continuous from the right there. The open circles at −1 and 1 mark values where the denominator is 0. The line is unitless.</figcaption>
</figure>

## Worked example 2: a piecewise function

**Question.** Let

- f(x) = x² + 1 for x ≤ 2
- f(x) = 4x − 3 for 2 < x < 5
- f(x) = 20/(x − 4) for x ≥ 5

Find the largest intervals on which f is continuous. Justify your answer.

1. **Each piece on its own interval.**
   - x² + 1 is a polynomial, so it is continuous on (−∞, 2).
   - 4x − 3 is a polynomial, so it is continuous on (2, 5).
   - 20/(x − 4) is rational. Its denominator is 0 only at x = 4, and 4 is **not** in the interval x ≥ 5. So this piece is continuous on (5, ∞).
2. **Boundary x = 2.**
   - f(2) = 2² + 1 = 5 (the first piece includes x = 2).
   - lim (x → 2⁻) f(x) = 2² + 1 = 5.
   - lim (x → 2⁺) f(x) = 4(2) − 3 = 5.
   - Both one-sided limits are 5, so lim (x → 2) f(x) = 5 = f(2). **f is continuous at 2.**
3. **Boundary x = 5.**
   - f(5) = 20/(5 − 4) = 20 (the third piece includes x = 5).
   - lim (x → 5⁻) f(x) = 4(5) − 3 = 17.
   - lim (x → 5⁺) f(x) = 20/(5 − 4) = 20.
   - 17 ≠ 20, so the two-sided limit does not exist. **f is not continuous at 5** (a jump discontinuity of size 3).
4. **Which interval keeps x = 5?** The right-hand limit, 20, equals f(5). So f is continuous from the right at 5, and 5 belongs with the interval to its right.

**Answer.** f is continuous on **(−∞, 5)** and on **[5, ∞)**. It is not continuous on any interval that has 5 inside it.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="pw-title pw-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pw-title">Graph of the piecewise function in Worked example 2</title>
<desc id="pw-desc">For x from −1 to 2 the graph is the parabola y = x² + 1, from (−1, 2) down to (0, 1) and up to a filled point at (2, 5). From x = 2 to x = 5 it is the straight line y = 4x − 3, which joins the parabola at (2, 5) with no gap and rises to an open circle at (5, 17). At x = 5 there is a filled point at (5, 20), and from there the curve y = 20/(x − 4) falls through (6, 10) and (8, 5) to (9, 4). A dashed vertical line at x = 5 marks the jump from height 17 to height 20.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="300" x2="510" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="104" y1="315" x2="104" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="316">−1</text><text x="148" y="316">1</text><text x="192" y="316">2</text><text x="236" y="316">3</text><text x="280" y="316">4</text><text x="324" y="316">5</text><text x="368" y="316">6</text><text x="412" y="316">7</text><text x="456" y="316">8</text><text x="500" y="316">9</text>
<text x="512" y="294">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="97" y="244">5</text><text x="97" y="184">10</text><text x="97" y="124">15</text><text x="97" y="64">20</text>
<text x="97" y="26">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="296" x2="60" y2="304"/><line x1="148" y1="296" x2="148" y2="304"/><line x1="192" y1="296" x2="192" y2="304"/><line x1="236" y1="296" x2="236" y2="304"/><line x1="280" y1="296" x2="280" y2="304"/><line x1="324" y1="296" x2="324" y2="304"/><line x1="368" y1="296" x2="368" y2="304"/><line x1="412" y1="296" x2="412" y2="304"/><line x1="456" y1="296" x2="456" y2="304"/><line x1="500" y1="296" x2="500" y2="304"/>
<line x1="100" y1="240" x2="108" y2="240"/><line x1="100" y1="180" x2="108" y2="180"/><line x1="100" y1="120" x2="108" y2="120"/><line x1="100" y1="60" x2="108" y2="60"/>
</g>
<line x1="324" y1="40" x2="324" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,276.0 71.0,281.2 82.0,285.0 93.0,287.2 104.0,288.0 115.0,287.2 126.0,285.0 137.0,281.2 148.0,276.0 159.0,269.2 170.0,261.0 181.0,251.2 192.0,240.0"/>
<line x1="192" y1="240" x2="320" y2="100" stroke="#1d2b44" stroke-width="2.5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="324.0,60.0 335.0,108.0 346.0,140.0 357.0,162.9 368.0,180.0 379.0,193.3 390.0,204.0 401.0,212.7 412.0,220.0 423.0,226.2 434.0,231.4 445.0,236.0 456.0,240.0 467.0,243.5 478.0,246.7 489.0,249.5 500.0,252.0"/>
<circle cx="192" cy="240" r="5" fill="#1d2b44"/>
<circle cx="324" cy="96" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="324" cy="60" r="6" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="185" y="236" text-anchor="end">(2, 5): pieces meet</text>
<text x="316" y="100" text-anchor="end">open circle (5, 17)</text>
<text x="334" y="56">filled dot (5, 20)</text>
<text x="380" y="150">y = 20/(x − 4)</text>
<text x="262" y="215">y = 4x − 3</text>
<text x="108" y="254">y = x² + 1</text>
</g>
</svg>
<figcaption>Figure 2. The pieces join smoothly at x = 2, so f is continuous there. At x = 5 the graph jumps from height 17 (open circle) to height 20 (filled dot), so f is not continuous at 5. The filled dot sits on the right-hand piece, so f is continuous on [5, ∞). The asymptote of 20/(x − 4) at x = 4 does not matter, because that formula is only used for x ≥ 5. Axes are unitless.</figcaption>
</figure>

## Worked example 3: continuity on a given closed interval

**Question.** Let k(x) = (x + 1)/cos x. Is k continuous on [−1, 1]? Is k continuous on [0, 2]? Use π ≈ 3.14.

1. **Families.** x + 1 is a polynomial and cos x is trigonometric. Both are continuous everywhere, so k is continuous wherever cos x ≠ 0.
2. **Where cos x = 0.** At odd multiples of π/2: …, −π/2 ≈ −1.57, π/2 ≈ 1.57, 3π/2 ≈ 4.71, ….
3. **Interval [−1, 1].** Neither −1.57 nor 1.57 lies in [−1, 1]. So cos x ≠ 0 at every point of [−1, 1], including the endpoints, and k is continuous at each of them. **Yes, k is continuous on [−1, 1].**
4. **Interval [0, 2].** π/2 ≈ 1.57 lies inside [0, 2]. k(π/2) is not defined. **No, k is not continuous on [0, 2].** (In fact, k is unbounded near π/2: the graph has a vertical asymptote there.)

**Check.** One bad point inside an interval is enough to make the answer "no". To answer "yes", you must be sure there are no bad points, which is why you list every zero of the denominator and compare it with the interval.

## Common misconceptions

- **"1/x is continuous, so it is continuous on [−1, 1]."** 1/x is continuous on its domain, but its domain has a gap at 0. An interval containing 0 is not covered.
- **"A function is continuous on an interval if it is continuous at most points."** Every single point counts. One hole, jump or asymptote inside the interval is enough to fail.
- **Forgetting the excluded values of the whole formula.** Check every denominator, every even root and every logarithm, not just the first one you see.
- **Treating an asymptote outside a piece as a problem.** In Worked example 2, 20/(x − 4) is undefined at 4, but that piece is only used for x ≥ 5. Only the values a piece actually uses matter.
- **Checking only one side at a boundary.** At a piecewise boundary you need the left limit, the right limit and the function value. Matching two of the three is not enough.
- **Wrong brackets.** Use a square bracket only when the function is defined at that endpoint **and** the matching one-sided limit equals the value. At an excluded value the bracket must be round.
- **Demanding a two-sided limit at an endpoint of [a, b].** At the endpoints of a closed interval you only need the one-sided limit from inside the interval.
- **Confusing "not continuous" with "no limit".** At a removable discontinuity the limit exists but the function is still not continuous there (Topic 1.11). It still breaks the interval.

## Where this leads

Knowing exactly where a function is continuous is a hypothesis you will check again and again. Topic 1.13, [Removing Discontinuities](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-study-guide/), asks when a discontinuity can be repaired by defining or redefining one value, and how to choose constants that join the pieces of a piecewise function. Topic 1.16 (the Intermediate Value Theorem) and, later, the Extreme Value Theorem in Unit 5 both need continuity on a closed interval [a, b], exactly as defined on this page. If you need to revisit the three-part definition first, go back to [Topic 1.11, Defining Continuity at a Point](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-checklist/) to consolidate.
