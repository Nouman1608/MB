---
resourceId: "mb-ap-calcab-5.7-study-guide"
title: "Using the Second Derivative Test to Determine Extrema: Study Guide (Calculus AB 5.7)"
description: "Learn how the sign of f″ at a critical point where f′ = 0 identifies a relative maximum or minimum, when the test gives no answer, and when one critical point gives an absolute extremum."
course: "calculus-ab"
unit: 5
topics: ["5.7"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Critical points and the first derivative test (Topics 5.2 and 5.4)"
  - "Concavity and the second derivative (Topic 5.6)"
  - "Derivatives of polynomial, trigonometric, exponential and logarithmic functions (Units 2 and 3)"
learningObjectives:
  - "Use the sign of f″(c) at a critical point where f′(c) = 0 to decide whether f has a relative maximum or a relative minimum there"
  - "Recognise when the second derivative test cannot be used or gives no conclusion, and switch to the first derivative test"
  - "Write a justification that names both f′(c) = 0 and the sign of f″(c)"
  - "Explain why a continuous function with exactly one critical point on an interval, where that point is a relative extremum, has its absolute extremum there"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave π, e and logarithms in exact answers."
related: ["mb-ap-calcab-5.7-revision-notes", "mb-ap-calcab-5.7-practice", "mb-ap-calcab-5.7-checklist"]
next: "mb-ap-calcab-5.7-practice"
prerequisiteResources: ["mb-ap-calcab-5.6-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If f′(c) = 0 and f″(c) > 0, f has a relative minimum at x = c. If f′(c) = 0 and f″(c) < 0, f has a relative maximum at x = c."
  - "If f″(c) = 0, the test gives no conclusion. Use the first derivative test instead."
  - "The test only applies where f′(c) = 0. At a critical point where f′(c) does not exist, use the first derivative test."
  - "If a continuous function has only one critical point on an interval and it is a relative extremum, it is also the absolute extremum on that interval."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.7 is common content, so the same page serves AB and BC students."
  - question: "Which is better, the first or the second derivative test?"
    answer: "Neither always wins. The second derivative test is quick when f″ is easy to find and nonzero at the critical point. The first derivative test always works for a continuous function and also handles points where f′ does not exist or f″(c) = 0."
  - question: "Does f″(c) = 0 mean there is a point of inflection at c?"
    answer: "Not necessarily. f″(c) = 0 is only a candidate. A point of inflection needs f″ (or the concavity) to change sign. And at a critical point, f″(c) = 0 tells you nothing about a maximum or minimum either."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

Notation: f′ is the first derivative and f″ is the second derivative. A **critical point** of f is a value x = c in the domain where f′(c) = 0 or f′(c) does not exist.

## The idea: a flat point on a cup or a cap

In Topic 5.4 you classified a critical point by checking the sign of f′ on each side of it. That needs a sign chart. Topic 5.6 gave you a second tool: the sign of f″ tells you the concavity of the graph.

Put the two ideas together. Suppose f′(c) = 0, so the tangent line at x = c is horizontal.

- If the graph is **concave up** at c, it bends upwards like a cup. Near c the curve lies above its horizontal tangent, so f(c) is lower than the nearby values. That is a **relative minimum**.
- If the graph is **concave down** at c, it bends downwards like a cap. Near c the curve lies below its horizontal tangent, so f(c) is higher than the nearby values. That is a **relative maximum**.

<figure>
<svg viewBox="0 0 520 260" role="img" aria-labelledby="sdt-title sdt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sdt-title">A horizontal tangent on a concave-up curve and on a concave-down curve</title>
<desc id="sdt-desc">Two panels. Left panel: a curve shaped like a cup. At its lowest point, x = c, a dashed horizontal tangent line touches it, and the curve rises above the tangent on both sides. Labels read f′(c) = 0, f″(c) > 0, concave up, relative minimum. Right panel: a curve shaped like a cap. At its highest point, x = c, a dashed horizontal tangent line touches it, and the curve falls below the tangent on both sides. Labels read f′(c) = 0, f″(c) &lt; 0, concave down, relative maximum.</desc>
<rect x="0" y="0" width="520" height="260" fill="#ffffff"/>
<line x1="260" y1="10" x2="260" y2="250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<path d="M 40 50 Q 130 270 220 50" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="70" y1="160" x2="190" y2="160" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<circle cx="130" cy="160" r="5" fill="#1d2b44"/>
<text x="130" y="180" font-size="12" fill="#1d2b44" text-anchor="middle">x = c</text>
<text x="130" y="205" font-size="13" fill="#1d2b44" text-anchor="middle">f′(c) = 0 and f″(c) &gt; 0</text>
<text x="130" y="222" font-size="13" fill="#1d2b44" text-anchor="middle">concave up (cup)</text>
<text x="130" y="240" font-size="13" font-weight="bold" fill="#1d2b44" text-anchor="middle">relative minimum</text>
<path d="M 300 190 Q 390 -20 480 190" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="330" y1="85" x2="450" y2="85" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<circle cx="390" cy="85" r="5" fill="#1d2b44"/>
<text x="390" y="105" font-size="12" fill="#1d2b44" text-anchor="middle">x = c</text>
<text x="390" y="205" font-size="13" fill="#1d2b44" text-anchor="middle">f′(c) = 0 and f″(c) &lt; 0</text>
<text x="390" y="222" font-size="13" fill="#1d2b44" text-anchor="middle">concave down (cap)</text>
<text x="390" y="240" font-size="13" font-weight="bold" fill="#1d2b44" text-anchor="middle">relative maximum</text>
</svg>
<figcaption>Figure 1. At a point with a horizontal tangent (dashed), concavity decides the type of extremum. A cup sits above its tangent, so the point is a relative minimum. A cap sits below its tangent, so the point is a relative maximum. Axes are omitted; only the shapes matter.</figcaption>
</figure>

## The second derivative test

Let c be a critical point of f with **f′(c) = 0**, and suppose f″(c) exists.

| f′(c) | f″(c) | Conclusion |
|---|---|---|
| 0 | positive | relative minimum at x = c |
| 0 | negative | relative maximum at x = c |
| 0 | 0 | **no conclusion**: use the first derivative test |

A memory aid: positive f″ means "holds water", a cup, so a minimum. Many students instinctively link "positive" with "top". Resist that.

### Why the test works

Suppose f′(c) = 0 and f″(c) > 0. Since f″ is the derivative of f′, a positive f″(c) means f′ is increasing as x passes through c. An increasing function that equals 0 at c must be negative just to the left of c and positive just to the right. So f′ changes from negative to positive at c. By the first derivative test (Topic 5.4), f has a relative minimum at c. The case f″(c) < 0 works the same way: f′ is decreasing through 0, so it changes from positive to negative, giving a relative maximum.

So the second derivative test is a shortcut to the first derivative test. It reads the sign change of f′ from one number, f″(c), instead of a sign chart.

## When the test says nothing

There are two situations where you must go back to the first derivative test.

**1. f″(c) = 0.** The test is **inconclusive**. Anything can happen. Look at three functions, each with f′(0) = 0 and f″(0) = 0:

- y = x⁴ has a relative minimum at x = 0;
- y = −x⁴ has a relative maximum at x = 0;
- y = x³ has no extremum at x = 0.

<figure>
<svg viewBox="0 0 520 240" role="img" aria-labelledby="inc-title inc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="inc-title">Three functions with f′(0) = 0 and f″(0) = 0 that behave differently at x = 0</title>
<desc id="inc-desc">Three small graphs side by side, each drawn for x from −1.1 to 1.1 with the origin marked by a dot. Left: y = x⁴, a flat-bottomed U shape with its lowest point at the origin, labelled relative minimum. Middle: y = −x⁴, a flat-topped upside-down U with its highest point at the origin, labelled relative maximum. Right: y = x³, which rises from bottom left to top right and flattens at the origin, labelled no extremum. Under all three: f′(0) = 0 and f″(0) = 0.</desc>
<rect x="0" y="0" width="520" height="240" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="20" y1="150" x2="160" y2="150"/><line x1="90" y1="60" x2="90" y2="190"/>
<line x1="195" y1="110" x2="335" y2="110"/><line x1="265" y1="40" x2="265" y2="190"/>
<line x1="370" y1="130" x2="510" y2="130"/><line x1="440" y1="55" x2="440" y2="200"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="24.0,76.8 30.0,100.0 36.0,117.2 42.0,129.5 48.0,138.0 54.0,143.5 60.0,146.9 66.0,148.7 72.0,149.6 78.0,149.9 84.0,150.0 90.0,150.0 96.0,150.0 102.0,149.9 108.0,149.6 114.0,148.7 120.0,146.9 126.0,143.5 132.0,138.0 138.0,129.5 144.0,117.2 150.0,100.0 156.0,76.8"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="199.0,183.2 205.0,160.0 211.0,142.8 217.0,130.5 223.0,122.0 229.0,116.5 235.0,113.1 241.0,111.3 247.0,110.4 253.0,110.1 259.0,110.0 265.0,110.0 271.0,110.0 277.0,110.1 283.0,110.4 289.0,111.3 295.0,113.1 301.0,116.5 307.0,122.0 313.0,130.5 319.0,142.8 325.0,160.0 331.0,183.2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="374.0,196.6 380.0,180.0 386.0,166.5 392.0,155.6 398.0,147.2 404.0,140.8 410.0,136.2 416.0,133.2 422.0,131.3 428.0,130.4 434.0,130.1 440.0,130.0 446.0,129.9 452.0,129.6 458.0,128.7 464.0,126.8 470.0,123.8 476.0,119.2 482.0,112.9 488.0,104.4 494.0,93.6 500.0,80.0 506.0,63.4"/>
<circle cx="90" cy="150" r="4.5" fill="#1d2b44"/><circle cx="265" cy="110" r="4.5" fill="#1d2b44"/><circle cx="440" cy="130" r="4.5" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="90" y="30">y = x⁴</text><text x="265" y="30">y = −x⁴</text><text x="440" y="30">y = x³</text>
<text x="90" y="210" font-weight="bold">relative minimum</text><text x="265" y="210" font-weight="bold">relative maximum</text><text x="440" y="220" font-weight="bold">no extremum</text>
</g>
<text x="260" y="235" font-size="12" fill="#1d2b44" text-anchor="middle">In all three: f′(0) = 0 and f″(0) = 0</text>
</svg>
<figcaption>Figure 2. Three functions with identical information at x = 0 (f′(0) = 0 and f″(0) = 0) but three different outcomes. This is why f″(c) = 0 gives no conclusion. Each graph uses the same scale; axes are unitless.</figcaption>
</figure>

**2. f′(c) does not exist.** The test needs f′(c) = 0, so it does not apply at corners, cusps or vertical tangents. For example, y = |x| and y = x^(2/3) both have a relative minimum at x = 0, but neither has a derivative there, so there is no f″(0) to test. Use the first derivative test.

## Writing the justification

A conclusion from this test needs **both** facts, and it should name the function and the point:

> f has a relative maximum at x = c because f′(c) = 0 and f″(c) < 0.

Weak versions lose credit. "f″ is negative" (where? and is f′(c) zero?) is incomplete. "The second derivative changes sign" describes a point of inflection, not an extremum. "The derivative is negative" is ambiguous: say f′ or f″.

## Worked example 1: three critical points on an open interval

**Question.** Let f(x) = 2 sin x + cos 2x for 0 < x < π. Find the critical points of f and use the second derivative test to classify each one.

1. **Differentiate.** f′(x) = 2 cos x − 2 sin 2x. Use sin 2x = 2 sin x cos x:
   **f′(x) = 2 cos x − 4 sin x cos x = 2 cos x (1 − 2 sin x)**
2. **Solve f′(x) = 0 on 0 < x < π.**
   - cos x = 0 gives x = π/2.
   - 1 − 2 sin x = 0 gives sin x = 1/2, so x = π/6 or x = 5π/6.
   f′ exists for every x, so these three are the only critical points.
3. **Second derivative.** f″(x) = −2 sin x − 4 cos 2x.
4. **Test each point.**
   - x = π/6: f″ = −2(1/2) − 4 cos(π/3) = −1 − 4(1/2) = **−3 < 0**.
   - x = π/2: f″ = −2(1) − 4 cos π = −2 + 4 = **2 > 0**.
   - x = 5π/6: f″ = −2(1/2) − 4 cos(5π/3) = −1 − 2 = **−3 < 0**.
5. **Values.** f(π/6) = 2(1/2) + cos(π/3) = 3/2. f(π/2) = 2 + cos π = 1. f(5π/6) = 1 + cos(5π/3) = 3/2.

**Answer.** f has relative maxima at x = π/6 and x = 5π/6 (value 3/2 each) because f′ = 0 and f″ < 0 there. f has a relative minimum at x = π/2 (value 1) because f′(π/2) = 0 and f″(π/2) > 0.

**Check.** A maximum, then a minimum, then a maximum: the extrema alternate, as they must for a smooth curve.

## Worked example 2: when f″(c) = 0

**Question.** Let g(x) = x⁴ − 8x³ + 18x² − 5. Classify each critical point of g.

1. **Differentiate and factor.** g′(x) = 4x³ − 24x² + 36x = 4x(x² − 6x + 9) = **4x(x − 3)²**. Critical points: x = 0 and x = 3.
2. **Second derivative.** g″(x) = 12x² − 48x + 36 = **12(x − 1)(x − 3)**.
3. **x = 0.** g″(0) = 36 > 0 and g′(0) = 0, so g has a **relative minimum** at x = 0, with g(0) = −5.
4. **x = 3.** g″(3) = 0. **The test is inconclusive.** Switch to the first derivative test.
5. **First derivative test at x = 3.** In g′(x) = 4x(x − 3)², the factor (x − 3)² is positive on both sides of 3, and 4x is positive near 3. So g′ > 0 just left of 3 and just right of 3. g is increasing on both sides, so there is **no extremum** at x = 3.

**Answer.** Relative minimum at x = 0 (value −5); no relative extremum at x = 3.

**Interpretation.** At x = 3 the graph is momentarily flat, at height g(3) = 22, but keeps rising. Because g″ = 12(x − 1)(x − 3) changes sign at x = 3, that point is a point of inflection with a horizontal tangent, like the centre of y = x³ in Figure 2.

## From relative to absolute: the one-critical-point rule

The second derivative test finds **relative** extrema. Sometimes you need the **absolute** (global) maximum or minimum on an interval that has no endpoints, or only one, so the candidates test from Topic 5.5 cannot be used. This rule helps:

> **One-critical-point rule.** Suppose f is continuous on an interval and has **only one** critical point c in that interval. If f has a relative minimum (maximum) at c, then f(c) is the absolute minimum (maximum) of f on the whole interval.

Why it is true: say f has a relative minimum at c but some other point d in the interval has f(d) < f(c). Travelling from c to d, the graph first rises (c is a relative minimum) and later must fall to below f(c). So it turns around somewhere in between, which creates a relative maximum, and that is another critical point. That contradicts "only one critical point".

Check the conditions every time: **continuous**, **one interval**, **exactly one** critical point inside it.

## Worked example 3: lowest energy use on an open interval

**Question.** A small delivery robot (a fictional model) uses energy at a rate of E(v) = v²/20 + 100/v watt-hours per kilometre when it travels at v kilometres per hour, for v > 0. Find the speed that minimises E, and justify that it gives the absolute minimum.

1. **Differentiate.** E′(v) = v/10 − 100/v².
2. **Critical points.** E′(v) = 0 gives v/10 = 100/v², so v³ = 1000 and **v = 10**. E′ exists for all v > 0, so this is the only critical point.
3. **Second derivative test.** E″(v) = 1/10 + 200/v³. E″(10) = 0.1 + 0.2 = 0.3 > 0. With E′(10) = 0, E has a relative minimum at v = 10.
4. **Absolute.** E is continuous on the interval v > 0, and v = 10 is its only critical point there. By the one-critical-point rule, the relative minimum is the **absolute minimum** on v > 0.
5. **Value.** E(10) = 100/20 + 100/10 = 5 + 10 = **15 watt-hours per kilometre**.

**Answer.** The robot uses least energy per kilometre at 10 km/h, where E = 15 Wh/km.

**Check.** E(5) = 21.25 and E(20) = 25. Both are larger than 15.

**Why not the candidates test?** The interval v > 0 has no endpoints, so there is no finite list of candidates to compare.

## Common misconceptions

- **"f″(c) > 0 means a maximum."** It is the other way round. Positive f″ means concave up, a cup, so a minimum.
- **Using the test where f′(c) ≠ 0.** A negative f″ at a point where the graph is still rising tells you about concavity only. The test starts with f′(c) = 0.
- **"f″(c) = 0, so there is no extremum."** Wrong: y = x⁴ has f″(0) = 0 and a minimum. The test simply gives no answer.
- **"f″(c) = 0, so there is a point of inflection."** Also wrong: y = x⁴ is concave up on both sides of 0. A point of inflection needs a change in concavity.
- **Applying the test at a cusp or corner.** If f′(c) does not exist, f″(c) does not exist either. Use the first derivative test.
- **Calling a relative extremum absolute without checking.** The one-critical-point rule needs exactly one critical point on the interval. With two or more, compare values or use the candidates test.
- **Mixing up location and value.** "The maximum is at x = π/6" gives the location; "the maximum value is 3/2" gives the height. Answer what the question asks.

## Where this leads

The second derivative test is a fast way to classify critical points. It returns in Topic 5.11, where optimisation problems often take place on intervals with no endpoints and the one-critical-point rule justifies an absolute answer. In [Topic 5.8, Sketching Graphs of Functions and Their Derivatives](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-study-guide/), you combine the first and second derivatives to draw the whole graph. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-checklist/) to consolidate.
