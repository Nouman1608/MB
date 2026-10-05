---
resourceId: "mb-ap-calcab-5.3-study-guide"
title: "Determining Intervals on Which a Function Is Increasing or Decreasing: Study Guide (Calculus AB 5.3)"
description: "Learn how the sign of the first derivative tells you where a function rises or falls, how to build a sign chart, and how to write a justification that earns credit."
course: "calculus-ab"
unit: 5
topics: ["5.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Critical points: where f′(x) = 0 or f′(x) does not exist (Topic 5.2)"
  - "The Mean Value Theorem (Topic 5.1)"
  - "Derivative rules, including the product, quotient and chain rules (Units 2 and 3)"
  - "Factoring polynomials and solving simple equations"
learningObjectives:
  - "State what it means for a function to be increasing or decreasing on an interval"
  - "Explain why f′(x) > 0 on an interval makes f increasing there, and f′(x) < 0 makes f decreasing"
  - "Find the intervals where f is increasing or decreasing from a formula for f, using a sign chart for f′"
  - "Read the intervals of increase and decrease of f from a graph of f′, without confusing the behaviour of f′ with the behaviour of f"
  - "Write a justification that names f′ and its sign on the interval"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. A graphing calculator can confirm a sign chart, but the justification must come from f′."
related: ["mb-ap-calcab-5.3-revision-notes", "mb-ap-calcab-5.3-practice", "mb-ap-calcab-5.3-checklist"]
next: "mb-ap-calcab-5.3-practice"
prerequisiteResources: ["mb-ap-calcab-5.2-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If f′(x) > 0 for every x in an interval, f is increasing on that interval. If f′(x) < 0, f is decreasing."
  - "To find the intervals, mark every point where f′ is 0 or undefined (and every point not in the domain of f), then test the sign of f′ between them."
  - "On a graph of f′, look at where the graph is above or below the x-axis, not at whether it is going up or down."
  - "A justification names f′ and its sign: \"f is increasing on (2, ∞) because f′(x) > 0 there.\""
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.3 is common content, so the same page serves AB and BC students."
  - question: "Should I write open or closed intervals?"
    answer: "Open intervals between the points on your sign chart are always correct. If f is continuous at an endpoint, the closed interval is also correct, but open intervals avoid any doubt."
  - question: "If f′(c) = 0 at one point, does f stop increasing there?"
    answer: "Not necessarily. f(x) = x³ has f′(0) = 0, but f′(x) > 0 on both sides, so f is increasing on the whole real line. A single zero of f′ does not break an interval of increase if f′ has the same sign on both sides."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## What "increasing" and "decreasing" mean

A function f is **increasing** on an interval if, whenever x₁ < x₂ in that interval, f(x₁) < f(x₂). Moving right, the output goes up.

A function f is **decreasing** on an interval if, whenever x₁ < x₂ in that interval, f(x₁) > f(x₂). Moving right, the output goes down.

Notice that this is a statement about an **interval**, not about a single point. You compare outputs at two inputs. That is why the answers in this topic are always intervals, such as (−∞, −3) or (2, 5).

## The link to the derivative

In Topic 5.1 you met the Mean Value Theorem. It gives the reason the derivative controls increase and decrease.

Suppose f′(x) > 0 for every x in an open interval I. Pick any x₁ < x₂ in I. On [x₁, x₂], f is differentiable, so it is also continuous, and the Mean Value Theorem gives a number c between x₁ and x₂ with

**f(x₂) − f(x₁) = f′(c) · (x₂ − x₁)**

Here f′(c) > 0 and x₂ − x₁ > 0, so f(x₂) − f(x₁) > 0. That is, f(x₂) > f(x₁). So f is increasing on I.

The same argument with f′(c) < 0 shows f is decreasing.

> **Key fact.** If f′(x) > 0 for every x in an interval, then f is increasing on that interval. If f′(x) < 0 for every x in an interval, then f is decreasing on that interval.

In words: the sign of the derivative is the sign of the slope of the graph of f. Positive slope means the graph rises; negative slope means it falls.

**A single zero does not break the pattern.** Look at f(x) = x³. Its derivative is f′(x) = 3x². This is 0 at x = 0 but positive everywhere else. f is still increasing on the whole real line: the graph flattens for an instant at the origin and keeps rising. So if f′ has the same sign on both sides of an isolated zero, and f is continuous there, the two intervals join into one.

## The method: a sign chart for f′

A continuous f′ can only change sign where it passes through 0. It can also change sign where it is undefined. So those are the only places you need to look.

1. **Find f′(x)** and factor it as far as you can.
2. **List the split points:** every x where f′(x) = 0, every x where f′(x) is undefined, and every x that is not in the domain of f. (The first two are the critical points from Topic 5.2. The third matters because f might not even exist there.)
3. **Mark the split points on a number line.** They cut the domain into open intervals.
4. **Test the sign of f′** in each interval. Substitute one test value, or use the signs of the factors.
5. **Conclude** with a sentence that names f′ and its sign.

Testing factors is often faster than substituting. For f′(x) = 6(x + 3)(x − 2), the factor x + 3 is negative to the left of −3 and positive to the right, and x − 2 changes sign at 2. Multiply the signs in each interval.

### When the domain has a gap

Take h(x) = x + 4/x. Then

**h′(x) = 1 − 4/x² = (x² − 4)/x²**

- h′(x) = 0 when x² = 4, so x = −2 or x = 2.
- h′ is undefined at x = 0, and h itself is not defined at x = 0.

So the split points are −2, 0 and 2. Test values: h′(−3) = 5/9 > 0, h′(−1) = −3 < 0, h′(1) = −3 < 0, h′(3) = 5/9 > 0.

h is increasing on (−∞, −2) and on (2, ∞), and decreasing on (−2, 0) and on (0, 2).

Do **not** write "decreasing on (−2, 2)". The function is not defined at 0, and the two pieces do not join: h(−1) = −5 but h(1) = 5, so h(1) > h(−1) even though 1 > −1. Write two separate intervals, joined by "and".

## Worked example 1: intervals from a formula

**Question.** Let f(x) = 2x³ + 3x² − 36x + 5. Find the intervals on which f is increasing and the intervals on which f is decreasing. Justify your answer.

1. **Differentiate.** f′(x) = 6x² + 6x − 36.
2. **Factor.** f′(x) = 6(x² + x − 6) = 6(x + 3)(x − 2).
3. **Split points.** f′(x) = 0 at x = −3 and x = 2. f′ is a polynomial, so it is never undefined, and f is defined for all x.
4. **Test each interval.**

| Interval | Test value | Sign of x + 3 | Sign of x − 2 | f′(test value) | Sign of f′ |
|---|---|---|---|---|---|
| (−∞, −3) | x = −4 | − | − | 6(−1)(−6) = 36 | + |
| (−3, 2) | x = 0 | + | − | 6(3)(−2) = −36 | − |
| (2, ∞) | x = 3 | + | + | 6(6)(1) = 36 | + |

5. **Conclude.**

**Answer.** f is increasing on (−∞, −3) and on (2, ∞), because f′(x) > 0 on those intervals. f is decreasing on (−3, 2), because f′(x) < 0 on that interval.

**Check.** f(−3) = 86 and f(2) = −39. The output drops from 86 to −39 as x goes from −3 to 2, which fits "decreasing on (−3, 2)".

**Interpretation.** The graph of f rises, turns at x = −3, falls until x = 2, then rises again. The turning points themselves are the subject of Topic 5.4.

## Worked example 2: intervals from a graph of f′

On the exam you are often given a graph of the **derivative** f′, not of f. Read it with one question in mind: **is the graph of f′ above or below the x-axis?**

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="fp-title fp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fp-title">Graph of the derivative f′ on −4 ≤ x ≤ 6, with a sign row and the behaviour of f underneath</title>
<desc id="fp-desc">A graph made of straight segments joining the points (−4, −2), (−2, 0), (0, 2), (2, 0), (3, 2), (5, −2) and (6, −1). The graph is below the x-axis from x = −4 to x = −2, above the axis from −2 to 4 except that it touches the axis at x = 2, and below the axis from 4 to 6. Dashed lines drop from x = −2, 2 and 4 to a sign row. The sign row reads: minus on (−4, −2), plus on (−2, 2), plus on (2, 4), minus on (4, 6). Under it a row reads: f decreasing, f increasing, f increasing, f decreasing.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="150" x2="490" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="220" y1="235" x2="220" y2="55" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="146" x2="60" y2="154"/><line x1="100" y1="146" x2="100" y2="154"/><line x1="140" y1="146" x2="140" y2="154"/><line x1="180" y1="146" x2="180" y2="154"/><line x1="260" y1="146" x2="260" y2="154"/><line x1="300" y1="146" x2="300" y2="154"/><line x1="340" y1="146" x2="340" y2="154"/><line x1="380" y1="146" x2="380" y2="154"/><line x1="420" y1="146" x2="420" y2="154"/><line x1="460" y1="146" x2="460" y2="154"/>
<line x1="216" y1="90" x2="224" y2="90"/><line x1="216" y1="120" x2="224" y2="120"/><line x1="216" y1="180" x2="224" y2="180"/><line x1="216" y1="210" x2="224" y2="210"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="168">−4</text><text x="100" y="168">−3</text><text x="150" y="168">−2</text><text x="180" y="168">−1</text><text x="260" y="168">1</text><text x="300" y="168">2</text><text x="340" y="168">3</text><text x="370" y="168">4</text><text x="420" y="168">5</text><text x="460" y="168">6</text>
<text x="500" y="154">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="212" y="94">2</text><text x="212" y="124">1</text><text x="212" y="184">−1</text><text x="212" y="214">−2</text><text x="236" y="52">y</text>
</g>
<polyline points="60,210 140,150 220,90 300,150 340,90 420,210 460,180" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="350" y="80" font-size="13" fill="#1d2b44">y = f′(x)</text>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4">
<line x1="140" y1="150" x2="140" y2="262"/><line x1="300" y1="150" x2="300" y2="262"/><line x1="380" y1="150" x2="380" y2="262"/>
</g>
<line x1="60" y1="262" x2="460" y2="262" stroke="#1d2b44" stroke-width="1"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="30" y="258" text-anchor="start" font-size="11">f′</text>
<text x="100" y="257">−</text><text x="220" y="257">+</text><text x="340" y="257">+</text><text x="420" y="257">−</text>
<g font-size="11"><text x="100" y="285">f decreasing</text><text x="220" y="285">f increasing</text><text x="340" y="285">f increasing</text><text x="420" y="285">f decreasing</text></g>
</g>
</svg>
<figcaption>Figure 1. A graph of f′, not of f. The sign row records whether the graph of f′ is above (+) or below (−) the x-axis. That sign, not the direction the f′ graph is moving, decides whether f is increasing or decreasing. At x = 2 the graph of f′ touches the axis without crossing it.</figcaption>
</figure>

**Question.** The graph of f′, the derivative of a continuous function f, is shown in Figure 1 for −4 < x < 6. Find the intervals on which f is increasing. Justify your answer.

1. **Find where f′ is zero.** The graph of f′ meets the x-axis at x = −2, x = 2 and x = 4.
2. **Read the sign of f′** between those points:
   - on (−4, −2) the graph of f′ is below the axis, so f′(x) < 0;
   - on (−2, 2) it is above the axis, so f′(x) > 0;
   - on (2, 4) it is above the axis again, so f′(x) > 0;
   - on (4, 6) it is below the axis, so f′(x) < 0.
3. **Deal with x = 2.** f′(2) = 0, but f′ is positive on both sides. f is continuous, so the two intervals join, just like x³ at x = 0.

**Answer.** f is increasing on (−2, 4), because f′(x) > 0 on (−2, 4) except at the single point x = 2, where f′(2) = 0. (Writing "(−2, 2) and (2, 4)" is also correct.) f is decreasing on (−4, −2) and on (4, 6), because f′(x) < 0 there.

**The trap.** On (0, 2) the graph of f′ is **going down**: f′ falls from 2 to 0. Many students write "f is decreasing on (0, 2)". That is wrong. f′ is falling, but f′ is still **positive**, so f is still rising, just less steeply. Whether f′ is going up or down is information about f′′ and the concavity of f, which you will meet in Topic 5.6.

## Increasing and decreasing in context

When a quantity changes with time, the same rule applies to its rate. If P(t) is the number of people in a building and P′(t) > 0 for 9 < t < 11, then the number of people is increasing over that time. The justification is the same shape: "P is increasing on 9 < t < 11 because P′(t) > 0 there."

In context, say what is increasing ("the number of people in the building"), not "it".

## Writing a justification

A good justification has three parts: the function, the interval, and the sign of the derivative as the reason.

- Good: "f is decreasing on (−3, 2) because f′(x) < 0 for −3 < x < 2."
- Good (from a graph of f′): "g is increasing on (1, 4) because the graph of g′ is above the x-axis on that interval."
- Not enough: "f is decreasing because it goes down." This describes the graph of f; it does not use the derivative.
- Not enough: "It is increasing because the slope is positive." Which function? Which interval? Name f or f′.
- Wrong reason: "f is increasing on (−2, 0) because f′ is increasing." The sign of f′ is what matters, not its direction.

## Common misconceptions

- **"f′ is going down, so f is going down."** The behaviour of f depends on the **sign** of f′, not on whether f′ is rising or falling.
- **"Critical points are the only split points."** You must also include x-values where f itself is undefined, such as x = 0 for x + 4/x.
- **Joining intervals across a gap in the domain.** If f is undefined between two pieces, write the intervals separately.
- **"f′(c) = 0, so f stops increasing at c."** A single zero with the same sign on both sides does not end an interval of increase.
- **Testing only one side.** Each interval needs its own sign. Signs do not always alternate: (x − 1)² does not change sign at x = 1.
- **Giving points instead of intervals.** "f is increasing at x = 3" is not the answer to "on which intervals".
- **Using a table of f values.** A few values going up do not prove f is increasing between them. Use f′.
- **Vague language.** "It" could mean f or f′. Name the function every time.

## Where this leads

The split points on your sign chart are exactly where f can turn. In [Topic 5.4, Using the First Derivative Test to Determine Relative (Local) Extrema](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-study-guide/), you will use the change of sign of f′ at a critical point to decide whether f has a relative maximum, a relative minimum or neither there. The sign charts you build here are the first step of every one of those arguments. You can also look back at [Topic 5.2](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/) for critical points. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-checklist/) to consolidate.
