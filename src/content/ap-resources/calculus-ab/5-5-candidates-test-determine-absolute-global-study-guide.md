---
resourceId: "mb-ap-calcab-5.5-study-guide"
title: "Using the Candidates Test to Find Absolute Extrema: Study Guide (Calculus AB 5.5)"
description: "Learn why absolute extrema on a closed interval can only sit at critical points or endpoints, and how to list, test and compare those candidates."
course: "calculus-ab"
unit: 5
topics: ["5.5"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The Extreme Value Theorem and critical points (Topic 5.2)"
  - "Using f′ to find where f increases or decreases, and the First Derivative Test (Topics 5.3 and 5.4)"
  - "Derivative rules, including the chain rule (Units 2 and 3)"
learningObjectives:
  - "Explain why an absolute extremum on a closed interval can only occur at a critical point inside the interval or at an endpoint"
  - "Check that the Candidates Test applies: the function is continuous on a closed interval"
  - "Find every candidate, including points where f′ does not exist, and discard critical points outside the interval"
  - "Evaluate f at each candidate and state the absolute maximum and minimum values and where they occur"
  - "Use a calculator to evaluate candidates when the values are not exact"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 need no calculator. Some practice questions allow a graphing calculator to evaluate candidates; give decimals to 3 places."
related: ["mb-ap-calcab-5.5-revision-notes", "mb-ap-calcab-5.5-practice", "mb-ap-calcab-5.5-checklist"]
next: "mb-ap-calcab-5.5-practice"
prerequisiteResources: ["mb-ap-calcab-5.4-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "On a closed interval [a, b], the absolute maximum and minimum of a continuous function can only occur at critical points inside the interval or at the endpoints."
  - "Candidates Test: list those points, work out f at each one, then compare. The largest value is the absolute maximum; the smallest is the absolute minimum."
  - "A critical point is where f′ = 0 or where f′ does not exist. Ignore critical points outside the interval."
  - "Report the value (a y-value) and say where it occurs (an x-value)."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.5 is common content, so the same page serves AB and BC students."
  - question: "Do I need the First Derivative Test as well?"
    answer: "No. The Candidates Test compares values directly, so you do not need to classify each critical point as a local maximum or minimum. You only need the list of candidates and the value of f at each one."
  - question: "What if the interval is open, or the function has a break?"
    answer: "Then the Candidates Test is not guaranteed to work. The function may have no absolute maximum or minimum at all. You would need to study how f behaves near the ends or near the break instead."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## Local versus absolute: a quick reminder

In Topic 5.2 you met two kinds of extreme value.

- A **relative (local) maximum** at x = c means f(c) is the highest value of f **near** c.
- An **absolute (global) maximum** on an interval means f(c) is the highest value of f **anywhere** on that interval.

Minimums work the same way. A function can have several local maximums but only one absolute maximum **value**. That value may occur at more than one x.

The Extreme Value Theorem tells you when an absolute maximum and minimum must exist: if f is **continuous** on a **closed** interval [a, b], then f has both. It does not tell you where they are. This topic gives you a short, reliable method to find them.

## Where can an absolute extremum be?

Suppose f is continuous on [a, b] and its absolute maximum is at x = c. There are only two possibilities.

1. **c is an endpoint**, a or b.
2. **c is inside the interval**, a < c < b. Then f(c) is the highest value on the whole interval, so it is certainly the highest value near c. That makes it a local maximum too. In Topic 5.2 you saw that every local extremum occurs at a critical point. So c is a critical point: f′(c) = 0 or f′(c) does not exist.

The same argument works for the absolute minimum. So:

> **Key fact.** If f is continuous on [a, b], its absolute extrema on [a, b] can only occur at critical points in (a, b) or at the endpoints a and b.

These points are called **candidates**. Usually there are only a few of them. Every other x in the interval is ruled out, because at those points f is either rising or falling, so a nearby point is higher and another nearby point is lower.

## The Candidates Test, step by step

The method is sometimes called the closed interval method. You apply it in four steps.

1. **Check the conditions.** Is f continuous on a closed interval [a, b]? If yes, the Extreme Value Theorem guarantees the extrema exist and the test will find them.
2. **Find the critical points.** Solve f′(x) = 0 and find where f′(x) does not exist. Keep only the ones strictly between a and b.
3. **Evaluate f** at each critical point you kept and at both endpoints. A table helps.
4. **Compare.** The largest value of f is the absolute maximum. The smallest is the absolute minimum.

Notice what the test does **not** need. You do not have to check the sign of f′ around each critical point, and you do not need f″. You simply compare heights.

**How to write the answer.** The absolute maximum is a **value of f** (a y-value). Say where it occurs (an x-value). For example: "The absolute maximum value of f on [−1, 3] is 12, at x = 3." Writing only "x = 3" answers a different question.

**Justification on written questions.** A short sentence is enough: name the candidates, show the values, and state that f is continuous on the closed interval. For example: "f is continuous on [−1, 3]. The candidates are the endpoints and the critical points in the interval. Comparing f at these points, the largest value is 12."

**With and without technology.** Sometimes f′(x) = 0 cannot be solved by hand. On calculator questions you may use a graphing calculator to find the zeros of f′ and to evaluate f at each candidate. Store unrounded values and round only the final answer, normally to 3 decimal places. The method itself does not change.

## A picture of the candidates

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="cand-title cand-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cand-title">Graph of f(x) = x⁴ − 8x² + 3 on the interval from −1 to 3, with the candidates marked</title>
<desc id="cand-desc">A solid curve for x from −1 to 3. It starts at the endpoint (−1, −4), rises to a local maximum at (0, 3), falls to a local minimum at (2, −13), then rises steeply to the endpoint (3, 12). The endpoints are marked with squares and the two critical points inside the interval with circles. A dashed curve to the left, outside the interval, dips to (−2, −13), which is marked with a cross and labelled as not a candidate. The highest candidate is (3, 12), the absolute maximum. The lowest is (2, −13), the absolute minimum.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="50" y1="155.2" x2="505" y2="155.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="243.3" y1="315" x2="243.3" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="96.7" y1="151" x2="96.7" y2="159"/><line x1="170" y1="151" x2="170" y2="159"/><line x1="316.7" y1="151" x2="316.7" y2="159"/><line x1="390" y1="151" x2="390" y2="159"/><line x1="463.3" y1="151" x2="463.3" y2="159"/>
<line x1="239" y1="251.7" x2="247.5" y2="251.7"/><line x1="239" y1="203.4" x2="247.5" y2="203.4"/><line x1="239" y1="106.9" x2="247.5" y2="106.9"/><line x1="239" y1="58.6" x2="247.5" y2="58.6"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="96.7" y="172">−2</text><text x="160" y="172">−1</text><text x="316.7" y="172">1</text><text x="400" y="172">2</text><text x="473" y="172">3</text><text x="505" y="150">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="236" y="255.7">−10</text><text x="236" y="207.4">−5</text><text x="236" y="110.9">5</text><text x="236" y="62.6">10</text><text x="236" y="22">y</text>
</g>
<line x1="170" y1="15" x2="170" y2="315" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="463.3" y1="15" x2="463.3" y2="315" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<path d="M74.7 264.6 L78.0 269.3 L81.2 273.1 L84.5 276.1 L87.8 278.3 L91.1 279.8 L94.4 280.5 L97.7 280.7 L101.0 280.2 L104.3 279.1 L107.5 277.5 L110.8 275.5 L114.1 273.0 L117.4 270.0 L120.7 266.7 L124.0 263.1 L127.3 259.1 L130.6 254.9 L133.8 250.4 L137.1 245.7 L140.4 240.9 L143.7 235.9 L147.0 230.8 L150.3 225.6 L153.6 220.3 L156.9 215.0 L160.1 209.6 L163.4 204.3 L166.7 199.0 L170.0 193.8" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<path d="M170.0 193.8 L175.0 186.0 L179.9 178.5 L184.9 171.3 L189.9 164.5 L194.9 158.1 L199.8 152.2 L204.8 146.8 L209.8 142.0 L214.7 137.7 L219.7 134.1 L224.7 131.2 L229.7 128.9 L234.6 127.3 L239.6 126.4 L244.6 126.2 L249.5 126.8 L254.5 128.0 L259.5 129.9 L264.5 132.6 L269.4 135.8 L274.4 139.8 L279.4 144.3 L284.4 149.4 L289.3 155.1 L294.3 161.3 L299.3 167.9 L304.2 174.9 L309.2 182.2 L314.2 189.9 L319.2 197.7 L324.1 205.7 L329.1 213.8 L334.1 221.8 L339.0 229.8 L344.0 237.5 L349.0 244.9 L354.0 252.0 L358.9 258.5 L363.9 264.4 L368.9 269.6 L373.8 274.0 L378.8 277.4 L383.8 279.6 L388.8 280.6 L393.7 280.3 L398.7 278.4 L403.7 274.8 L408.6 269.4 L413.6 262.0 L418.6 252.4 L423.6 240.5 L428.5 226.1 L433.5 209.0 L438.5 189.0 L443.4 166.0 L448.4 139.7 L453.4 110.0 L458.4 76.6 L463.3 39.3" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="164" y="187.8" width="12" height="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="457.3" y="33.3" width="12" height="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="243.3" cy="126.2" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="390" cy="280.7" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2"><line x1="91.7" y1="275.7" x2="101.7" y2="285.7"/><line x1="91.7" y1="285.7" x2="101.7" y2="275.7"/></g>
<g font-size="12" fill="#1d2b44">
<text x="58" y="180">(−1, −4) endpoint</text>
<text x="252" y="115">(0, 3) critical point</text>
<text x="330" y="304">(2, −13) absolute min</text>
<text x="450" y="44" text-anchor="end">(3, 12) endpoint: absolute max</text>
<text x="56" y="322">x = −2: outside, not a candidate</text>
</g>
</svg>
<figcaption>Figure 1. f(x) = x⁴ − 8x² + 3 on [−1, 3] (solid). Squares mark the endpoints, circles mark the critical points inside the interval, and the cross marks a critical point outside the interval, which is ignored. The dotted vertical lines show the ends of the interval. The highest candidate is the absolute maximum; the lowest is the absolute minimum.</figcaption>
</figure>

Two things stand out in the picture. The local maximum at (0, 3) is **not** the absolute maximum: the curve climbs much higher at the right endpoint. And the critical point at x = −2 is just as low as the one at x = 2, but it lies outside the interval, so it plays no part.

## Worked example 1: a polynomial with an endpoint maximum

**Question.** Find the absolute maximum and minimum values of f(x) = x⁴ − 8x² + 3 on [−1, 3]. No calculator.

1. **Check the conditions.** f is a polynomial, so it is continuous everywhere, including on the closed interval [−1, 3]. The Candidates Test applies.
2. **Differentiate and factor.** f′(x) = 4x³ − 16x = 4x(x² − 4) = 4x(x − 2)(x + 2).
3. **Find the critical points.** f′(x) = 0 when x = −2, 0 or 2. f′ exists everywhere because it is a polynomial. Only x = 0 and x = 2 lie inside (−1, 3). Discard x = −2.
4. **Evaluate f at every candidate.**

| Candidate | Type | f(x) |
|---|---|---|
| x = −1 | endpoint | 1 − 8 + 3 = −4 |
| x = 0 | critical point | 0 − 0 + 3 = 3 |
| x = 2 | critical point | 16 − 32 + 3 = −13 |
| x = 3 | endpoint | 81 − 72 + 3 = 12 |

5. **Compare.** The largest value is 12. The smallest is −13.

**Answer.** On [−1, 3], the absolute maximum value of f is **12**, at x = 3. The absolute minimum value is **−13**, at x = 2.

**Check.** The answer matches Figure 1. It also shows why you must test the endpoints: the absolute maximum is at an endpoint where f′(3) = 4(3)(1)(5) = 60 ≠ 0. If you looked only for f′ = 0 you would wrongly say the maximum is 3.

## Worked example 2: a critical point where f′ does not exist

**Question.** Let g(x) = x^(2/3)(x − 5), where x^(2/3) means (∛x)². Find the absolute extrema of g on [−1, 4]. No calculator.

1. **Check the conditions.** ∛x is defined and continuous for every real x, so g is continuous on [−1, 4]. The test applies.
2. **Differentiate.** Expand first: g(x) = x^(5/3) − 5x^(2/3). Then
   g′(x) = (5/3)x^(2/3) − (10/3)x^(−1/3).
   Factor out (5/3)x^(−1/3):
   **g′(x) = (5/3)x^(−1/3)(x − 2) = 5(x − 2)/(3∛x)**
3. **Find the critical points.**
   - g′(x) = 0 when the top is 0: x = 2.
   - g′(x) does not exist when the bottom is 0: x = 0. g(0) is defined, so x = 0 is a critical point (the graph has a sharp point, a cusp, there).
   Both 0 and 2 lie inside (−1, 4).
4. **Evaluate g at every candidate.**

| Candidate | Type | g(x) |
|---|---|---|
| x = −1 | endpoint | (∛(−1))² × (−6) = 1 × (−6) = −6 |
| x = 0 | g′ does not exist | 0 |
| x = 2 | g′ = 0 | (∛2)² × (−3) = −3∛4 |
| x = 4 | endpoint | (∛4)² × (−1) = −∛16 |

5. **Compare without a calculator.** ∛4 is between 1 and 2 (because 1³ = 1 and 2³ = 8), so −3∛4 is between −6 and −3. ∛16 is between 2 and 3, so −∛16 is between −3 and −2. The values in order are −6 < −3∛4 < −∛16 < 0.

**Answer.** On [−1, 4], the absolute maximum value of g is **0**, at x = 0. The absolute minimum value is **−6**, at x = −1.

**Check.** With a calculator, −3∛4 ≈ −4.762 and −∛16 ≈ −2.520. The order agrees.

**Lesson.** The absolute maximum is at x = 0, where g′ **does not exist**. Solving only g′(x) = 0 would have missed it, and you would have reported a wrong maximum of −∛16.

## When the test does not apply

The guarantee needs both conditions. Look at what goes wrong without them.

- **Open interval.** On (−1, 2), the function x² takes values close to 4 as x approaches 2, but x = 2 is not in the interval, so it never reaches 4. There is no absolute maximum. (The absolute minimum, 0 at x = 0, does exist.)
- **A break in the graph.** 1/x on [−1, 1] is not defined, so not continuous, at x = 0. It grows without bound near 0, so there is no absolute maximum or minimum.

In both cases a list of "candidates" would give you numbers, but they would not be the answer. Always check the conditions first. Later, in optimisation problems, you will learn other ways to argue about extrema on open intervals.

## Common misconceptions

- **Forgetting the endpoints.** The absolute maximum or minimum is often at an endpoint, where f′ need not be 0 (Worked example 1).
- **Forgetting points where f′ does not exist.** Cusps and corners are critical points too (Worked example 2).
- **Keeping critical points outside the interval.** They are not candidates, even if f is very large or very small there.
- **Answering with x instead of f(x).** "The absolute maximum is at x = 3" gives a location. "The absolute maximum value is 12" gives the value. Questions usually want the value; give both to be safe.
- **"Every critical point is an extremum."** Not true. The Candidates Test simply compares values, so a critical point that is not an extremum just loses the comparison.
- **"The local maximum must be the absolute maximum."** A local maximum is only the highest point nearby. In Figure 1, f(0) = 3 is a local maximum, but f(3) = 12 is higher.
- **Using the test on an open interval or across a break.** The Extreme Value Theorem no longer guarantees an answer exists.
- **Rounding too early on calculator questions.** Two candidates can be close in value. Keep full calculator precision until you compare.

## Where this leads

The Candidates Test is the main tool for "find the maximum" questions on a closed interval, and it returns in optimisation (Topics 5.10 and 5.11), where you first build the function from a context. Next, Topic 5.6 turns from the first derivative to the **second** derivative and asks how a graph bends: [Determining Concavity of Functions over Their Domains](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-checklist/) to consolidate.
