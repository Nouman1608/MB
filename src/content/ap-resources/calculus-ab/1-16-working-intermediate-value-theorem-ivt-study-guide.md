---
resourceId: "mb-ap-calcab-1.16-study-guide"
title: "Working with the Intermediate Value Theorem: Study Guide (Calculus AB 1.16)"
description: "Learn what the Intermediate Value Theorem guarantees, why continuity on a closed interval matters, and how to write a full justification from a formula, table or graph."
course: "calculus-ab"
unit: 1
topics: ["1.16"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Continuity at a point and on an interval (Topics 1.11 and 1.12)"
  - "Which familiar functions are continuous on their domains: polynomials, rational, root, exponential, log and trig functions"
  - "Reading values from a table or a graph"
prerequisiteResources: ["mb-ap-calcab-1.15-study-guide"]
learningObjectives:
  - "State the Intermediate Value Theorem with both of its conditions and its conclusion"
  - "Check the conditions for a function given by a formula, a piecewise definition, a table or a graph"
  - "Use the theorem to show that an equation has a solution in a given interval, and to give a lower bound on the number of solutions"
  - "Explain what the theorem does not tell you: where the value occurs, how many times, or anything when a condition fails"
  - "Write a complete justification that names the theorem, the continuity reason and the values that trap the target"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "none-needed"
calculatorNote: "All arithmetic here can be done by hand."
related: ["mb-ap-calcab-1.16-revision-notes", "mb-ap-calcab-1.16-practice", "mb-ap-calcab-1.16-checklist"]
next: "mb-ap-calcab-1.16-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If f is continuous on [a, b] and d lies between f(a) and f(b), then f(c) = d for at least one c between a and b."
  - "Both conditions matter: continuity on the whole closed interval, and a target value d trapped between the two end values."
  - "The theorem proves that a value exists. It does not say where it is or how many times it occurs."
  - "A full justification names the continuity reason, gives f(a) and f(b), shows d is between them and then cites the theorem."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.16 is common content, so the same page serves AB and BC students. The way of writing an existence argument here is reused for the Extreme Value Theorem and the Mean Value Theorem later in both courses."
  - question: "Does the theorem tell me the value of c?"
    answer: "No. It only tells you that at least one such c exists between a and b. To find c you need algebra or a calculator; to narrow down where it is you can apply the theorem again on smaller intervals."
  - question: "If the function is not continuous, does that mean f(c) = d has no solution?"
    answer: "Not necessarily. When a condition fails, the theorem simply makes no promise. The value might still be reached, or it might be skipped."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

**[a, b]** is the closed interval: every x with a ≤ x ≤ b, endpoints included. **(a, b)** is the open interval: a < x < b, endpoints left out. "d is between f(a) and f(b)" means d lies in the interval from the smaller of the two values to the larger one. We use **IVT** as short for the Intermediate Value Theorem, but in a written answer it is safest to name the theorem in full at least once.

## The idea: a continuous graph cannot skip a height

Imagine a fictional greenhouse. A sensor records 6 °C at 05:00 and 14 °C at 09:00. Temperature changes continuously: it cannot jump from 9.9 °C to 10.1 °C without passing 10 °C. So at some moment between 05:00 and 09:00 the temperature was exactly 10 °C. You do not know when. It might have passed 10 °C once, or it might have risen, dipped and risen again, passing 10 °C three times. But it must have happened at least once.

That is the whole idea of this topic. If you draw the graph of a continuous function from the point (a, f(a)) to the point (b, f(b)) without lifting your pen, your pen must cross every horizontal line in between.

The Intermediate Value Theorem is an **existence theorem**. It lets you conclude that something happens on an interval without finding exactly where. This is a new kind of conclusion in calculus. Up to now you have mostly calculated values; here you prove that a value exists.

## The theorem, part by part

> **Intermediate Value Theorem.** Suppose f is continuous on the closed interval [a, b], and d is any number between f(a) and f(b). Then f(c) = d for at least one number c between a and b.

Read it as two conditions (the "if" part) and one conclusion (the "then" part).

| Part | What it says | How you check it |
|---|---|---|
| Condition 1 | f is continuous on [a, b] | Name the type of function (polynomial, sum of continuous functions, and so on), use information given in the question, or check every join of a piecewise function |
| Condition 2 | d is between f(a) and f(b) | Calculate or read off f(a) and f(b), then write an inequality such as f(b) < d < f(a) |
| Conclusion | f(c) = d for at least one c between a and b | Write "by the Intermediate Value Theorem, there is a value c in (a, b) such that f(c) = d" |

Three details are worth noticing.

- **Continuity on the closed interval.** f must be continuous at every point inside (a, b), and also at each endpoint from the inside (from the right at a, from the left at b). One break anywhere in the interval is enough to cancel the guarantee.
- **The target d sits between the outputs.** The condition is about f(a) and f(b), the values at the ends. It is not about a and b themselves. Do not mix up "d between f(a) and f(b)" with "c between a and b".
- **"At least one".** The theorem never says "exactly one". When d is strictly between f(a) and f(b), each c lies strictly inside (a, b), because the endpoints give f(a) and f(b), not d.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="ivt1-title ivt1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ivt1-title">A continuous curve from (a, f(a)) to (b, f(b)) crossing the line y = d three times</title>
<desc id="ivt1-desc">Axes with no numerical scale. A smooth unbroken curve starts at a filled point above the line y = d at x = a, falls below the line, rises above it, then falls below it again, ending at a filled point at x = b. The dashed horizontal line y = d lies between the heights f(a) and f(b). The curve meets the dashed line at three places, marked c₁, c₂ and c₃, each with a small square marker. All three lie between a and b.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="290" x2="500" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="310" x2="60" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<text x="505" y="285" font-size="12" fill="#1d2b44">x</text>
<text x="48" y="22" font-size="12" fill="#1d2b44" text-anchor="end">y</text>
<line x1="60" y1="155" x2="480" y2="155" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4"/>
<text x="52" y="159" font-size="13" fill="#1d2b44" text-anchor="end">d</text>
<text x="484" y="151" font-size="12" fill="#1d2b44">y = d</text>
<line x1="95" y1="92" x2="95" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="445" y1="218" x2="445" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="60" y1="92" x2="95" y2="92" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="60" y1="218" x2="445" y2="218" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<text x="52" y="96" font-size="12" fill="#1d2b44" text-anchor="end">f(a)</text>
<text x="52" y="222" font-size="12" fill="#1d2b44" text-anchor="end">f(b)</text>
<text x="95" y="306" font-size="13" fill="#1d2b44" text-anchor="middle">a</text>
<text x="445" y="306" font-size="13" fill="#1d2b44" text-anchor="middle">b</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="95.0,91.7 103.8,111.2 112.5,128.1 121.2,142.7 130.0,155.0 138.8,165.2 147.5,173.5 156.2,179.9 165.0,184.5 173.8,187.6 182.5,189.3 191.2,189.6 200.0,188.8 208.8,186.8 217.5,184.0 226.2,180.4 235.0,176.1 243.8,171.3 252.5,166.1 261.2,160.6 270.0,155.0 278.8,149.4 287.5,143.9 296.2,138.7 305.0,133.9 313.8,129.6 322.5,126.0 331.2,123.2 340.0,121.2 348.8,120.4 357.5,120.7 366.2,122.4 375.0,125.5 383.8,130.1 392.5,136.5 401.2,144.8 410.0,155.0 418.8,167.3 427.5,181.9 436.2,198.8 445.0,218.3"/>
<circle cx="95" cy="92" r="5" fill="#1d2b44"/>
<circle cx="445" cy="218" r="5" fill="#1d2b44"/>
<rect x="125" y="150" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="265" y="150" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="405" y="150" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="116" y="176" font-size="13" fill="#1d2b44" text-anchor="middle">c₁</text>
<text x="256" y="142" font-size="13" fill="#1d2b44" text-anchor="middle">c₂</text>
<text x="396" y="176" font-size="13" fill="#1d2b44" text-anchor="middle">c₃</text>
</svg>
<figcaption>Figure 1. f is continuous on [a, b] and d lies between f(b) and f(a). The theorem promises at least one crossing of y = d; this curve has three (square markers). The theorem does not tell you which picture you are in. Axes are unitless.</figcaption>
</figure>

## When the theorem does not apply

The guarantee needs both conditions. If either one fails, the theorem says nothing.

**A break in the interval.** Take f(x) = 1/x on [−1, 1]. Then f(−1) = −1 and f(1) = 1, so 0 is between them. But f(x) = 1/x is never 0. There is no contradiction: f is not continuous on [−1, 1], because it is undefined at x = 0. The theorem was never allowed to start.

A jump does the same thing. In Figure 2 the function climbs from height 1 to height 7, but it jumps over every height from 3 up to (but not including) 5. The value 4 is never reached.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="ivt2-title ivt2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ivt2-title">A function with a jump at x = 2 that never takes the value 4</title>
<desc id="ivt2-desc">Graph for x from 0 to 4. On the left, the line y = x + 1 rises from a filled point at (0, 1) to an open circle at (2, 3). On the right, the line y = x + 3 starts at a filled point at (2, 5) and rises to a filled point at (4, 7). A dashed horizontal line at y = 4 passes through the gap between the open circle at height 3 and the filled point at height 5 without touching the graph. The label reads: y = 4 is never reached.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="285" x2="500" y2="285" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="305" x2="80" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="301">0</text><text x="170" y="301">1</text><text x="260" y="301">2</text><text x="350" y="301">3</text><text x="440" y="301">4</text>
<text x="505" y="280">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="259">1</text><text x="72" y="199">3</text><text x="72" y="169">4</text><text x="72" y="139">5</text><text x="72" y="79">7</text>
<text x="72" y="22">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="170" y1="281" x2="170" y2="289"/><line x1="260" y1="281" x2="260" y2="289"/><line x1="350" y1="281" x2="350" y2="289"/><line x1="440" y1="281" x2="440" y2="289"/>
<line x1="76" y1="255" x2="84" y2="255"/><line x1="76" y1="195" x2="84" y2="195"/><line x1="76" y1="165" x2="84" y2="165"/><line x1="76" y1="135" x2="84" y2="135"/><line x1="76" y1="75" x2="84" y2="75"/>
</g>
<line x1="80" y1="165" x2="480" y2="165" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4"/>
<text x="300" y="160" font-size="12" fill="#1d2b44">y = 4 is never reached</text>
<line x1="80" y1="255" x2="255" y2="196.7" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="260" y1="135" x2="440" y2="75" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="80" cy="255" r="5" fill="#1d2b44"/>
<circle cx="260" cy="195" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="260" cy="135" r="5" fill="#1d2b44"/>
<circle cx="440" cy="75" r="5" fill="#1d2b44"/>
<text x="120" y="230" font-size="12" fill="#1d2b44">y = x + 1</text>
<text x="330" y="100" font-size="12" fill="#1d2b44">y = x + 3</text>
</svg>
<figcaption>Figure 2. f(0) = 1 and f(4) = 7, and 4 is between them, yet f(x) = 4 has no solution. f is not continuous at x = 2 (open circle at height 3, filled point at height 5), so the Intermediate Value Theorem does not apply. Axes are unitless.</figcaption>
</figure>

**A target outside the end values.** If f is continuous on [0, 5] with f(0) = 2 and f(5) = 9, the theorem says nothing about the value 12. The graph might climb above 12 somewhere in the middle, or it might not. The theorem only covers values between f(a) and f(b).

**No promise is not the same as impossible.** When a condition fails, the value d may still be reached. For example, the function in Figure 2 does take the value 2 (at x = 1), even though it is not continuous on [0, 4]. "The theorem does not apply" means "no guarantee", never "no solution".

## Writing a justification

Exam questions on this topic usually ask you to **justify** that a value occurs. A complete answer has three parts:

1. **Continuity, with a reason.** "f is continuous on [a, b] because f is a polynomial" (or "because the question states f is continuous", or "because f is a sum of continuous functions", and so on).
2. **The trapped value, with numbers.** "f(a) = …, f(b) = …, and f(b) < d < f(a)."
3. **The conclusion, naming the theorem.** "So by the Intermediate Value Theorem there is at least one c in (a, b) with f(c) = d."

Leaving out any part loses the justification. Writing "by IVT, yes" with no numbers is not enough, and nor is a sign change with no mention of continuity.

**Background: where continuity reasons come from.** In Unit 2 you will learn that a function that is differentiable on an interval is also continuous there (Topic 2.4). Free-response questions often give that information instead of saying "continuous" directly.

## Using the theorem to locate solutions

**Equations of the form f(x) = 0.** If f is continuous on [a, b] and f(a), f(b) have opposite signs, then 0 lies between them, so f has a zero in (a, b). This is the most common use of the theorem.

**Equations of the form "left side = right side".** Move everything to one side. To show that g(x) = h(x) has a solution, apply the theorem to the difference g(x) − h(x) and the target 0. The difference is continuous whenever g and h are.

**Narrowing down.** Once you know a solution lies in (a, b), test the midpoint (or any convenient point inside). The sign tells you which half still contains a solution. Each step halves the interval. This is background, not an exam requirement, but it shows how the theorem gives location information without solving the equation.

**Counting.** From a table of a continuous function you can find the **minimum** number of solutions of f(x) = d. Check each pair of neighbouring table values. Every pair that traps d guarantees a solution in that sub-interval, and the open sub-intervals do not overlap, so these solutions are different from each other. The true number could be larger.

## Worked example 1: exactly three real roots

**Question.** Let p(x) = x³ − 4x + 1. Show that the equation p(x) = 0 has exactly three real solutions, and find an interval of width 0.05 that contains the positive solution closest to 0.

1. **Continuity.** p is a polynomial, so it is continuous on every closed interval.
2. **Table of values.** Calculate p at whole numbers:

| x | −3 | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|---|
| p(x) | −14 | 1 | 4 | 1 | −2 | 1 |

3. **Find the sign changes.** On [−3, −2], p(−3) = −14 < 0 < 1 = p(−2). On [0, 1], p(1) = −2 < 0 < 1 = p(0). On [1, 2], p(1) = −2 < 0 < 1 = p(2).
4. **Apply the theorem three times.** By the Intermediate Value Theorem, p has a zero in each of (−3, −2), (0, 1) and (1, 2). These open intervals do not overlap, so there are **at least three** different solutions.
5. **Upper limit.** A polynomial of degree 3 has at most three real zeros. So there are **exactly three**.
6. **Narrow the solution in (0, 1).** p(0.25) = 0.015625 − 1 + 1 = 0.015625 > 0. p(0.3) = 0.027 − 1.2 + 1 = −0.173 < 0. p is continuous on [0.25, 0.3], and 0 is between these values, so by the theorem there is a zero in **(0.25, 0.3)**.

**Answer.** Exactly three real solutions, one in each of (−3, −2), (0, 1) and (1, 2). The one in (0, 1) lies in (0.25, 0.3).

**Check.** A calculator gives the roots as about −2.115, 0.254 and 1.861, one in each interval. The theorem found them without solving the cubic.

**Note.** The theorem alone gave "at least three". The word "exactly" needed a second fact, about the degree of the polynomial.

## Worked example 2: a table in context

**Question.** The water depth in a fictional storage tank is h(t) metres, t hours after midnight. h is continuous. Some values are shown.

| t (hours) | 0 | 2 | 5 | 7 | 10 |
|---|---|---|---|---|---|
| h(t) (metres) | 4.0 | 6.5 | 3.2 | 5.8 | 2.9 |

(a) Explain why there must be a time t in (0, 2) at which the depth is 5 metres.
(b) What is the least number of times in (0, 10) at which the depth must be exactly 5 metres?
(c) Must the depth ever be 7 metres between t = 0 and t = 10?

**(a)** h is continuous on [0, 2] (given). h(0) = 4.0 and h(2) = 6.5, and 4.0 < 5 < 6.5. So by the Intermediate Value Theorem there is a time c in (0, 2) with h(c) = 5.

**(b)** Check each neighbouring pair:

- [0, 2]: 4.0 to 6.5, traps 5.
- [2, 5]: 6.5 to 3.2, traps 5.
- [5, 7]: 3.2 to 5.8, traps 5.
- [7, 10]: 5.8 to 2.9, traps 5.

Each sub-interval gives a solution by the theorem, and the open sub-intervals do not overlap. So the depth equals 5 metres **at least 4 times**. (It could be more: the table does not show what happens between the recorded times.)

**(c)** No conclusion is possible. The largest table value is 6.5, so 7 is not between any two recorded values, and the theorem gives no guarantee. The depth might have gone above 7 m between readings, or it might not. The correct answer is "not necessarily", not "no".

**Units.** c is a time in hours; the value d = 5 is a depth in metres. Keep them apart in your sentence: "there is a time c, 0 < c < 2, at which h(c) = 5 metres".

## Worked example 3: checking a piecewise function

**Question.** Let f(x) = x² + k for x ≤ 1, and f(x) = 3x − 1 for x > 1, where k is a constant.
(a) Find the value of k that makes f continuous on [0, 3].
(b) For that k, show that f(c) = 5 for some c in (0, 3).

**(a)** Each piece is a polynomial, so the only point to check is the join at x = 1. f(1) = 1 + k. The limit from the left is also 1 + k. The limit from the right is 3(1) − 1 = 2. For continuity these must be equal: 1 + k = 2, so **k = 1**.

**(b)** With k = 1, f is continuous on [0, 3] by part (a). f(0) = 0 + 1 = 1 and f(3) = 9 − 1 = 8, and 1 < 5 < 8. So by the Intermediate Value Theorem there is a c in (0, 3) with f(c) = 5. (Here you can even find it: 3c − 1 = 5 gives c = 2.)

**Why part (a) matters.** With k = 3 instead, f(1) = 4 but values just to the right of 1 are close to 2: a jump. Then f(0) = 3 and f(3) = 8 still trap 5, but the theorem may not be used, because f is not continuous on [0, 3]. Always check every join of a piecewise function before citing the theorem.

## Common misconceptions

- **"The theorem finds c."** It only proves that c exists. Finding c is a separate job.
- **"There is exactly one c."** The conclusion is "at least one". Figure 1 has three.
- **"Same signs at the ends means no zero."** If f(a) and f(b) are both positive, the theorem says nothing. The graph could dip below the axis and come back, giving two zeros.
- **"The theorem failed, so there is no solution."** A failed condition removes the guarantee only. The value may still occur (Figure 2 still takes the value 2).
- **Forgetting continuity.** "f(0) < 0 < f(1), so there is a zero" is incomplete. Without continuity the graph could jump over 0.
- **Checking continuity only at the ends.** Continuity is needed on the whole interval, including any join of a piecewise function and any point where a denominator is 0.
- **Mixing up c and d.** c is an input between a and b; d is an output between f(a) and f(b).
- **Using a table value as the target when it is not trapped.** In Worked example 2, 7 m is larger than every recorded value, so no guarantee follows.
- **Treating the table as the whole function.** A table shows a few values. It gives a minimum count of solutions, never the exact count.

## Where this leads

This is the last topic of Unit 1. The same style of argument returns later in both courses. In Unit 2 you will connect differentiability to continuity (Topic 2.4), which gives you a new continuity reason. In Unit 5 the Mean Value Theorem (Topic 5.1) and the Extreme Value Theorem (Topic 5.2) are also existence theorems: check the conditions, state the numbers, name the theorem, conclude. For the topic just before this one, see [Connecting Limits at Infinity and Horizontal Asymptotes](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-checklist/) to consolidate.
