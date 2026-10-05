---
resourceId: "mb-ap-calcab-5.4-study-guide"
title: "Using the First Derivative Test to Determine Relative (Local) Extrema: Study Guide (Calculus AB 5.4)"
description: "Learn how a change of sign in f′ at a critical point shows a relative maximum or minimum, when the test does not apply, and how to write the justification."
course: "calculus-ab"
unit: 5
topics: ["5.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Critical points and the meaning of relative (local) extrema (Topic 5.2)"
  - "Intervals of increase and decrease from the sign of f′ (Topic 5.3)"
  - "Derivative rules, including the product rule and derivatives of powers with fractional exponents"
learningObjectives:
  - "State the First Derivative Test and the conditions it needs"
  - "Use a sign chart for f′ to classify each critical point as a relative maximum, a relative minimum or neither"
  - "Locate relative extrema from a graph of f′"
  - "Find the value of f at a relative extremum, and keep the location (x) separate from the value (y)"
  - "Write a justification based on the change of sign of f′, not on f′(c) = 0 alone"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave values such as e⁻³ exact."
related: ["mb-ap-calcab-5.4-revision-notes", "mb-ap-calcab-5.4-practice", "mb-ap-calcab-5.4-checklist"]
next: "mb-ap-calcab-5.4-practice"
prerequisiteResources: ["mb-ap-calcab-5.3-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "At a critical point c where f is continuous: if f′ changes from positive to negative, f has a relative maximum at c; from negative to positive, a relative minimum."
  - "If f′ does not change sign at c, f has neither a relative maximum nor a relative minimum there."
  - "f′(c) = 0 on its own is not a justification. The change of sign is the reason."
  - "Critical points include points where f′ does not exist, such as a cusp, as long as f is defined there."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.4 is common content, so the same page serves AB and BC students."
  - question: "Does the test work at the endpoints of a closed interval?"
    answer: "The First Derivative Test is about points inside an interval, with f′ checked on both sides. Endpoints are handled with the Candidates Test in Topic 5.5, when you look for absolute extrema."
  - question: "Do I need to give the x-value or the y-value?"
    answer: "Read the question. \"Where does f have a relative maximum?\" asks for the x-value. \"What is the relative maximum value?\" asks for f(c), the y-value."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## Where relative extrema can be

In Topic 5.2 you met two ideas.

- f has a **relative (local) maximum** at x = c if f(c) ≥ f(x) for every x in some open interval around c. A **relative minimum** is the same with ≤.
- A **critical point** of f is a value c in the domain of f where f′(c) = 0 or f′(c) does not exist.

Every relative extremum of f happens at a critical point. But not every critical point is a relative extremum. So you need a test that sorts critical points into three groups: maximum, minimum, or neither. The First Derivative Test does this using the sign chart you built in Topic 5.3.

## The First Derivative Test

> **First Derivative Test.** Let c be a critical point of f, and let f be continuous at c.
>
> - If f′ changes from **positive to negative** at c, then f has a **relative maximum** at c.
> - If f′ changes from **negative to positive** at c, then f has a **relative minimum** at c.
> - If f′ has the **same sign** on both sides of c, then f has **neither** at c.

"Changes from positive to negative at c" means: f′(x) > 0 for x in some interval just to the left of c, and f′(x) < 0 for x in some interval just to the right.

**Why it works.** If f′ > 0 just left of c, Topic 5.3 says f is increasing there, so f climbs up to f(c). If f′ < 0 just right of c, f is decreasing there, so f falls away from f(c). Because f is continuous at c, f(c) is the highest value nearby. That is a relative maximum. The minimum case is the mirror image.

<figure>
<svg viewBox="0 0 540 230" role="img" aria-labelledby="fdt-title fdt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fdt-title">The three outcomes of the First Derivative Test</title>
<desc id="fdt-desc">Three small sketches of a graph of f near a critical point c, each with a dashed line down to a sign row for f′. Left sketch: the curve rises to a peak at c and then falls; the sign row reads plus then minus; the label says relative maximum. Middle sketch: the curve falls to a valley at c and then rises; the sign row reads minus then plus; the label says relative minimum. Right sketch: the curve rises, flattens for an instant at c and keeps rising; the sign row reads plus then plus; the label says neither.</desc>
<rect x="0" y="0" width="540" height="230" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<path d="M 25 150 Q 95 20 165 150"/>
<path d="M 200 60 Q 270 190 340 60"/>
<path d="M 375 150 C 405 105 430 95 455 95 C 480 95 505 90 525 40"/>
</g>
<g fill="#1d2b44"><circle cx="95" cy="85" r="4"/><circle cx="270" cy="125" r="4"/><circle cx="455" cy="95" r="4"/></g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4">
<line x1="95" y1="90" x2="95" y2="178"/><line x1="270" y1="130" x2="270" y2="178"/><line x1="455" y1="100" x2="455" y2="178"/>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="25" y1="178" x2="165" y2="178"/><line x1="200" y1="178" x2="340" y2="178"/><line x1="375" y1="178" x2="525" y2="178"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="172">f′ +</text><text x="130" y="172">f′ −</text>
<text x="235" y="172">f′ −</text><text x="305" y="172">f′ +</text>
<text x="415" y="172">f′ +</text><text x="495" y="172">f′ +</text>
<text x="95" y="194">c</text><text x="270" y="194">c</text><text x="455" y="194">c</text>
<text x="95" y="216">relative maximum</text><text x="270" y="216">relative minimum</text><text x="455" y="216">neither</text>
</g>
</svg>
<figcaption>Figure 1. What the sign of f′ on each side of a critical point c tells you about f. Only a change of sign gives an extremum. The right-hand case has f′(c) = 0 but no maximum or minimum. Sketches are not to scale.</figcaption>
</figure>

## The method

1. **Find f′(x)** and factor it.
2. **Find the critical points:** values of x in the domain of f where f′(x) = 0 or f′(x) does not exist.
3. **Build a sign chart** for f′, including any point where f is undefined (as in Topic 5.3).
4. **Read each critical point:** + to − is a maximum, − to + is a minimum, no change is neither.
5. **If asked for the value**, substitute c into f (not into f′).
6. **Justify** with the change of sign of f′.

## Worked example 1: a critical point that is not an extremum

**Question.** Let f(x) = x⁴ − 4x³ + 10. Find the x-values of all relative extrema of f, classify each one, and find the value of each relative extremum. Justify your answers.

1. **Differentiate.** f′(x) = 4x³ − 12x².
2. **Factor.** f′(x) = 4x²(x − 3).
3. **Critical points.** f′(x) = 0 when x = 0 or x = 3. f′ is a polynomial, so it exists everywhere.
4. **Sign chart.** The factor 4x² is positive except at x = 0, so the sign of f′ is the sign of (x − 3) everywhere except x = 0.

| Interval | Test value | f′(test value) | Sign of f′ |
|---|---|---|---|
| (−∞, 0) | x = −1 | 4(1)(−4) = −16 | − |
| (0, 3) | x = 1 | 4(1)(−2) = −8 | − |
| (3, ∞) | x = 4 | 4(16)(1) = 64 | + |

5. **Classify.**
   - At x = 0, f′ is negative on both sides. f′ does not change sign, so f has **neither** a relative maximum nor a relative minimum at x = 0.
   - At x = 3, f′ changes from negative to positive, so f has a **relative minimum** at x = 3.
6. **Value.** f(3) = 81 − 108 + 10 = **−17**.

**Answer.** f has a relative minimum at x = 3, because f′ changes from negative to positive there. The relative minimum value is −17. There is no relative maximum. At x = 0, f has neither, because f′ < 0 on both sides of x = 0.

**Interpretation.** At x = 0 the graph of f flattens for an instant (f′(0) = 0) while still going down, like the right-hand sketch in Figure 1 turned upside down. Finding f′(c) = 0 tells you where to look. It does not tell you what you will find.

## Worked example 2: a critical point where f′ does not exist

**Question.** Let h(x) = 3x^(2/3) − 2x, defined for all real x. Find and classify all relative extrema of h. Justify your answers.

1. **Differentiate.** h′(x) = 3 · (2/3)x^(−1/3) − 2 = 2x^(−1/3) − 2.
2. **Rewrite as one fraction.** h′(x) = 2/x^(1/3) − 2 = 2(1 − x^(1/3)) / x^(1/3).
3. **Critical points.**
   - h′(x) = 0 when 1 − x^(1/3) = 0, so x^(1/3) = 1 and x = 1.
   - h′(x) does not exist at x = 0 (the denominator is 0). But h(0) = 0 is defined, so x = 0 is also a critical point.
4. **Sign chart.**

| Interval | Test value | x^(1/3) | 1 − x^(1/3) | h′(test value) | Sign |
|---|---|---|---|---|---|
| (−∞, 0) | x = −1 | −1 | 2 | 2(2)/(−1) = −4 | − |
| (0, 1) | x = 1/8 | 1/2 | 1/2 | 2(1/2)/(1/2) = 2 | + |
| (1, ∞) | x = 8 | 2 | −1 | 2(−1)/2 = −1 | − |

5. **Check continuity.** h is built from x^(2/3) and x, which are continuous everywhere, so the test applies at both points.
6. **Classify and find values.**
   - At x = 0, h′ changes from negative to positive: **relative minimum**, value h(0) = 0.
   - At x = 1, h′ changes from positive to negative: **relative maximum**, value h(1) = 3 − 2 = 1.

**Answer.** h has a relative minimum at x = 0 (value 0) and a relative maximum at x = 1 (value 1). In each case the reason is the change of sign of h′ stated above.

**Interpretation.** At x = 0 the graph of h has a sharp point (a cusp). There is no tangent slope there, yet it is a minimum. If you only solve h′(x) = 0, you miss it.

**Check.** h(−1) = 3 + 2 = 5, h(1/8) = 3(1/4) − 1/4 = 1/2 and h(8) = 12 − 16 = −4. So h falls to 0, rises to 1, then falls again, which matches the sign chart.

## Reading extrema from a graph of f′

When you are given the graph of f′ (not f), look only at where it **crosses** the x-axis.

| What the graph of f′ does at x = c | Conclusion about f at c |
|---|---|
| Crosses from above the axis to below | Relative maximum |
| Crosses from below the axis to above | Relative minimum |
| Touches the axis and turns back (same side) | Neither |
| Has a peak or a valley but does not meet the axis | Not an extremum of f (f′(c) ≠ 0) |

The last row is a common trap. A peak on the graph of f′ is where f′ is largest. That is about the steepness of f, and it connects to concavity and points of inflection in Topics 5.6 and 5.9, not to maxima of f.

## When the test does not apply

The test needs **f to be defined and continuous at c**.

Consider k(x) = 1/x². Then k′(x) = −2/x³. Test values: k′(−1) = 2 > 0 and k′(1) = −2 < 0. So k′ changes from positive to negative at x = 0. But k(0) does not exist, so x = 0 is not a critical point, and k has no relative maximum there: the graph shoots up on both sides without a top. A change of sign in f′ only means something at a point where f exists and is continuous. Practice Question 6 shows a jump discontinuity where the same thing goes wrong.

**Endpoints.** The test looks at both sides of c, so it is used at interior points. For a function on a closed interval, endpoint values are compared in Topic 5.5.

## Writing a justification

Use the language of the question, name the function, and give the sign change as the reason.

- Good: "f has a relative maximum at x = −3 because f′ changes from positive to negative at x = −3."
- Good: "g has neither a relative maximum nor a relative minimum at x = 2 because g′ is negative on both sides of x = 2."
- Not enough: "f has a relative maximum at x = −3 because f′(−3) = 0." Many critical points with f′ = 0 are not extrema.
- Not enough: "f′ goes from + to −." State at which x-value and what that means for f.
- Wrong: "f has a maximum because f′ has a maximum." That is about f′, not f.

## Common misconceptions

- **"f′(c) = 0, so there is a maximum or minimum at c."** You must check for a change of sign.
- **Forgetting critical points where f′ does not exist.** Cusps and corners can be extrema (Worked example 2).
- **Mixing up location and value.** "The relative maximum is at x = 1" is a location. "The relative maximum value is 1" is f(1).
- **Substituting into f′ to find the value.** The value of a relative extremum is f(c). f′(c) is usually 0.
- **Reading the wrong graph.** On a graph of f′, a peak is not a maximum of f. Look for crossings of the x-axis.
- **Ignoring continuity.** At a jump or a gap in the domain, a sign change of f′ proves nothing.
- **Using "it".** Write "f has…" or "f′ changes…", never "it changes sign".

## Where this leads

The First Derivative Test finds **relative** extrema. In [Topic 5.5, Using the Candidates Test to Determine Absolute (Global) Extrema](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-study-guide/), you will compare the values of f at critical points and endpoints to find the largest and smallest values on a closed interval. Later, Topic 5.7 gives a second way to classify critical points using f′′. Look back at [Topic 5.3](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-study-guide/) if sign charts still feel slow. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-checklist/) to consolidate.
