---
resourceId: "mb-ap-calcab-5.1-study-guide"
title: "Using the Mean Value Theorem: Study Guide (Calculus AB 5.1)"
description: "Learn what the Mean Value Theorem guarantees, how to check its two conditions, and how to write a complete justification from a formula or a table of values."
course: "calculus-ab"
unit: 5
topics: ["5.1"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Average rate of change and the derivative as an instantaneous rate (Topics 2.1 and 2.2)"
  - "Differentiability implies continuity (Topic 2.4)"
  - "Derivative rules, including the chain rule (Topics 2.5 to 3.1)"
  - "Writing an existence-theorem justification with the Intermediate Value Theorem (Topic 1.16)"
learningObjectives:
  - "State the two conditions of the Mean Value Theorem and the conclusion it gives"
  - "Check continuity on a closed interval and differentiability on the open interval for a given function"
  - "Find every value c that satisfies the conclusion for a function given by a formula"
  - "Use a table of values to justify that a derivative takes a particular value on a sub-interval"
  - "Explain why the conclusion can fail when a condition is not met"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave answers such as √3 exact; decimals are only a check."
related: ["mb-ap-calcab-5.1-revision-notes", "mb-ap-calcab-5.1-practice", "mb-ap-calcab-5.1-checklist"]
next: "mb-ap-calcab-5.1-practice"
prerequisiteResources: ["mb-ap-calcab-4.7-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If f is continuous on [a, b] and differentiable on (a, b), then f′(c) = (f(b) − f(a))/(b − a) for at least one c in (a, b)."
  - "In words: somewhere inside the interval, the instantaneous rate of change equals the average rate of change."
  - "A full justification names both conditions (with a reason), shows the average rate with numbers, and names the theorem."
  - "If a condition fails, the theorem gives no guarantee. The value may or may not occur."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.1 is common content, so the same page serves AB and BC students."
  - question: "Do I need to find c to use the theorem?"
    answer: "No. The theorem is an existence theorem: it tells you a suitable c exists. Some questions ask you to find c as well, and then you solve f′(c) = average rate and keep only solutions inside (a, b)."
  - question: "What is Rolle's theorem?"
    answer: "It is the special case f(a) = f(b). The average rate is then 0, so the Mean Value Theorem gives a point inside the interval where f′(c) = 0, a horizontal tangent."
  - question: "If I know f is differentiable on [a, b], do I still need to say it is continuous?"
    answer: "Differentiability implies continuity, so differentiable on [a, b] covers both conditions. Say so in one line: 'f is differentiable on [a, b], so it is also continuous on [a, b]'."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

**[a, b]** is the closed interval a ≤ x ≤ b, endpoints included. **(a, b)** is the open interval a < x < b, endpoints left out. The **average rate of change** of f on [a, b] is

**(f(b) − f(a))/(b − a)**

which is the gradient (slope) of the **secant line** joining (a, f(a)) and (b, f(b)). We use **MVT** as short for the Mean Value Theorem, but in a written answer name the theorem in full at least once.

## The idea: your average speed was your actual speed at some moment

A fictional train covers 36 km in 30 minutes. Its average speed is 36/30 = 1.2 km per minute, which is 72 km/h. The train speeds up, slows down and maybe stops at a signal. Can you be sure that at some instant its speedometer read exactly 72 km/h?

Yes. If the speed was always below 72 km/h, the train would cover less than 36 km in 30 minutes. If it was always above, it would cover more. So the speed must be at or above 72 km/h at some times and at or below it at others, and a smoothly changing speed must hit 72 km/h exactly at some instant. You do not know when. You only know it happened.

That is the Mean Value Theorem. Like the Intermediate Value Theorem from Topic 1.16, it is an **existence theorem**: it tells you that something happens inside an interval without telling you where.

## The theorem, part by part

> **Mean Value Theorem.** Suppose f is continuous on the closed interval [a, b] and differentiable on the open interval (a, b). Then there is at least one number c in (a, b) with
> **f′(c) = (f(b) − f(a))/(b − a).**

The left side is an instantaneous rate (the gradient of a tangent line). The right side is an average rate (the gradient of the secant line). Geometrically: **somewhere strictly between a and b, the tangent line is parallel to the secant line.**

| Part | What it says | How you check it |
|---|---|---|
| Condition 1 | f is continuous on [a, b] | Name the function type, use a given fact, or check each join of a piecewise function |
| Condition 2 | f is differentiable on (a, b) | Look for corners, cusps, vertical tangents and breaks inside the interval |
| Conclusion | f′(c) = average rate for at least one c in (a, b) | Calculate the average rate with numbers, then name the theorem |

Three details matter.

- **Closed for continuity, open for differentiability.** The function must join up at the endpoints, but it does not need a derivative there. For example, √x is continuous on [0, 4] and differentiable on (0, 4), even though it has no derivative at 0.
- **"At least one".** There may be several suitable values of c. The theorem never says "exactly one".
- **c is strictly inside.** A solution of f′(x) = average rate that lies at an endpoint or outside [a, b] does not count.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="mvt1-title mvt1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mvt1-title">Graph of f(x) = x³ − 6x + 1 on [0, 3] with its secant line and a parallel tangent line at x = √3</title>
<desc id="mvt1-desc">The curve starts at (0, 1), falls to a lowest point near (1.41, −4.66), then rises steeply to (3, 10). A solid straight secant line joins the endpoints (0, 1) and (3, 10); its gradient is 3. A dashed tangent line touches the curve at x = √3, about 1.73, at height about −4.20, and runs parallel to the secant line. A square marker shows the point of tangency, and a dotted guide line drops from it to the x-axis, labelled c = √3.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="204.7" x2="490" y2="204.7" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="315" x2="80" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="200" y="198">1</text><text x="320" y="198">2</text><text x="440" y="221">3</text>
<text x="495" y="200">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="288">−5</text><text x="72" y="209">0</text><text x="72" y="129">5</text><text x="72" y="50">10</text>
<text x="72" y="24">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="200" y1="200.7" x2="200" y2="208.7"/><line x1="320" y1="200.7" x2="320" y2="208.7"/><line x1="440" y1="200.7" x2="440" y2="208.7"/>
<line x1="76" y1="284.1" x2="84" y2="284.1"/><line x1="76" y1="125.3" x2="84" y2="125.3"/><line x1="76" y1="45.9" x2="84" y2="45.9"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,188.8 89.0,196.0 98.0,203.1 107.0,210.1 116.0,217.0 125.0,223.7 134.0,230.3 143.0,236.6 152.0,242.6 161.0,248.3 170.0,253.6 179.0,258.5 188.0,263.0 197.0,267.0 206.0,270.5 215.0,273.4 224.0,275.7 233.0,277.4 242.0,278.4 251.0,278.7 260.0,278.2 269.0,276.9 278.0,274.7 287.0,271.7 296.0,267.7 305.0,262.8 314.0,256.9 323.0,249.9 332.0,241.9 341.0,232.7 350.0,222.3 359.0,210.8 368.0,198.0 377.0,183.9 386.0,168.5 395.0,151.7 404.0,133.5 413.0,113.9 422.0,92.7 431.0,70.1 440.0,45.9"/>
<line x1="80" y1="188.8" x2="440" y2="45.9" stroke="#1d2b44" stroke-width="1.8"/>
<line x1="218" y1="299.1" x2="374" y2="237.1" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="7 5"/>
<line x1="287.8" y1="271.4" x2="287.8" y2="204.7" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<circle cx="80" cy="188.8" r="5" fill="#1d2b44"/>
<circle cx="440" cy="45.9" r="5" fill="#1d2b44"/>
<rect x="282.8" y="266.4" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="288" y="198" font-size="12" fill="#1d2b44" text-anchor="middle">c = √3</text>
<text x="210" y="126" font-size="12" fill="#1d2b44">secant (solid), gradient 3</text>
<text x="350" y="300" font-size="12" fill="#1d2b44">tangent at c (dashed), gradient 3</text>
</svg>
<figcaption>Figure 1. For f(x) = x³ − 6x + 1 on [0, 3], the secant line from (0, 1) to (3, 10) has gradient 3. The tangent at c = √3 ≈ 1.73 (square marker) is parallel to it. Worked example 1 finds this c algebraically. Axes are unitless.</figcaption>
</figure>

**A special case (Rolle's theorem).** If f(a) = f(b), the average rate is 0, so there is a c in (a, b) with f′(c) = 0: a horizontal tangent. For example, r(x) = x² − 4x + 7 has r(1) = r(3) = 4, and r′(2) = 0 with 2 in (1, 3). You do not need the name; it is simply the Mean Value Theorem with a zero average rate.

## Writing a justification

Free-response questions usually say "justify" or "explain why there must be a value…". A complete answer has three parts.

1. **Both conditions, with a reason.** "f is a polynomial, so it is continuous on [a, b] and differentiable on (a, b)." Or: "f is given as differentiable, so it is also continuous." Differentiability implies continuity (Topic 2.4), so one sentence can cover both.
2. **The average rate, with numbers.** "(f(b) − f(a))/(b − a) = … ."
3. **The conclusion, naming the theorem.** "By the Mean Value Theorem, there is at least one c in (a, b) with f′(c) = … ."

Leaving out the conditions, or writing "by MVT" without the numbers, loses the justification.

**Tables of values.** You cannot check a formula, so the question must tell you the function is differentiable (or twice differentiable). Then compute the average rate on each pair of table values. The theorem applies to **any** sub-interval [p, q] of the domain, not only to neighbouring columns. Choose the sub-interval whose average rate matches the value you are asked about.

## Worked example 1: finding c for a polynomial

**Question.** Let f(x) = x³ − 6x + 1. Show that f satisfies the conditions of the Mean Value Theorem on [0, 3], and find every value of c that the theorem guarantees.

1. **Conditions.** f is a polynomial, so it is continuous on [0, 3] and differentiable on (0, 3).
2. **End values.** f(0) = 1. f(3) = 27 − 18 + 1 = 10.
3. **Average rate.** (10 − 1)/(3 − 0) = 9/3 = **3**.
4. **Set the derivative equal to it.** f′(x) = 3x² − 6. Solve 3x² − 6 = 3, so 3x² = 9, x² = 3, x = ±√3.
5. **Keep only values in (0, 3).** −√3 is negative, so reject it. √3 ≈ 1.732 lies in (0, 3).

**Answer.** c = **√3**. Figure 1 shows the tangent there.

**Check.** f′(√3) = 3(3) − 6 = 3, which equals the average rate.

**Notice.** c is not the midpoint 1.5: f′(1.5) = 3(2.25) − 6 = 0.75, not 3. Nor is the average rate the average of f′(0) = −6 and f′(3) = 21, which is 7.5. The theorem compares f′(c) with the **secant gradient**, nothing else.

## Worked example 2: a table in context

**Question.** A fictional train moves along a straight track. Its distance from the station is s(t) km, t minutes after departure. s is differentiable. Some values are shown.

| t (minutes) | 0 | 4 | 10 | 15 | 20 |
|---|---|---|---|---|---|
| s(t) (km) | 0 | 3.2 | 9.8 | 14.8 | 16.0 |

(a) Must there be a time t in (4, 10) at which the train's velocity is 1.1 km per minute? Justify.
(b) Must there be a time t in (10, 20) at which the velocity is 1.0 km per minute? Justify.
(c) Does the Mean Value Theorem guarantee a time in (10, 20) at which the velocity is 1.3 km per minute?

**(a)** s is differentiable, so it is continuous on [4, 10] and differentiable on (4, 10). The average rate is

(s(10) − s(4))/(10 − 4) = (9.8 − 3.2)/6 = 6.6/6 = **1.1** km per minute.

By the Mean Value Theorem there is a time t in (4, 10) with s′(t) = 1.1. Since s′ is the velocity, **yes**: at some time between 4 and 10 minutes the train moves at 1.1 km per minute (66 km/h).

**(b)** On the whole interval [10, 20] the average rate is (16.0 − 9.8)/10 = 0.62, which is not 1.0. Do not stop there. Try a sub-interval: on [10, 15], (14.8 − 9.8)/5 = 5.0/5 = **1.0**. s is continuous on [10, 15] and differentiable on (10, 15), so by the Mean Value Theorem there is a time in (10, 15), and therefore in (10, 20), with velocity 1.0 km per minute. **Yes.**

**(c)** The average rates from the table inside [10, 20] are 1.0, 0.24 and 0.62. None is 1.3, so the theorem gives **no guarantee**. The train may or may not have reached 1.3 km per minute; the table does not say. "No guarantee" is not the same as "impossible".

## Worked example 3: when a condition fails

**Question.** Let f(x) = x^(2/3), the square of the cube root of x, on [−1, 8]. Is there a c in (−1, 8) with f′(c) equal to the average rate? Explain the result.

1. **End values.** f(−1) = ((−1)^(1/3))² = (−1)² = 1. f(8) = 2² = 4.
2. **Average rate.** (4 − 1)/(8 − (−1)) = 3/9 = **1/3**.
3. **Derivative.** For x ≠ 0, f′(x) = (2/3)x^(−1/3) = 2/(3 · x^(1/3)). At x = 0 this is undefined: the graph has a **cusp** (a sharp point with a vertical tangent).
4. **Solve f′(x) = 1/3.** For x > 0: 2/(3x^(1/3)) = 1/3 gives x^(1/3) = 2, so x = 8. For x < 0: x^(1/3) is negative, so f′(x) is negative and cannot equal 1/3.
5. **Check the interval.** The only solution is x = 8, an endpoint. There is **no c in (−1, 8)**.

**Explanation.** This does not contradict the theorem. f is continuous on [−1, 8], but it is **not differentiable at x = 0**, which lies inside the interval. Condition 2 fails, so the theorem never promised anything.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="mvt2-title mvt2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mvt2-title">Graph of y = x^(2/3) on [−1, 8] with a cusp at the origin and its secant line</title>
<desc id="mvt2-desc">The curve falls from (−1, 1) to a sharp point at the origin, then rises more and more gently to (8, 4). A solid secant line joins (−1, 1) and (8, 4); its gradient is 1/3. The curve's tangent lines are steeper than the secant everywhere between 0 and 8, and slope downwards between −1 and 0, so no tangent inside the interval is parallel to the secant. The sharp point at the origin is labelled cusp: no derivative.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="40" y1="280" x2="505" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="108" y1="300" x2="108" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="296">−1</text><text x="204" y="296">2</text><text x="300" y="296">4</text><text x="396" y="296">6</text><text x="492" y="296">8</text>
<text x="510" y="275">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="100" y="224">1</text><text x="100" y="164">2</text><text x="100" y="104">3</text><text x="100" y="44">4</text>
<text x="100" y="22">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="276" x2="60" y2="284"/><line x1="204" y1="276" x2="204" y2="284"/><line x1="300" y1="276" x2="300" y2="284"/><line x1="396" y1="276" x2="396" y2="284"/><line x1="492" y1="276" x2="492" y2="284"/>
<line x1="104" y1="220" x2="112" y2="220"/><line x1="104" y1="160" x2="112" y2="160"/><line x1="104" y1="100" x2="112" y2="100"/><line x1="104" y1="40" x2="112" y2="40"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,220.0 64.8,224.1 69.6,228.3 74.4,232.7 79.2,237.3 84.0,242.2 88.8,247.4 93.6,253.1 98.4,259.5 103.2,267.1 108.0,280.0 117.6,259.5 127.2,247.4 136.8,237.3 146.4,228.3 156.0,220.0 165.6,212.2 175.2,204.9 184.8,197.9 194.4,191.2 204.0,184.8 213.6,178.5 223.2,172.4 232.8,166.6 242.4,160.8 252.0,155.2 261.6,149.7 271.2,144.3 280.8,139.1 290.4,133.9 300.0,128.8 309.6,123.8 319.2,118.9 328.8,114.0 338.4,109.3 348.0,104.6 357.6,99.9 367.2,95.3 376.8,90.8 386.4,86.3 396.0,81.9 405.6,77.5 415.2,73.2 424.8,68.9 434.4,64.6 444.0,60.4 453.6,56.3 463.2,52.2 472.8,48.1 482.4,44.0 492.0,40.0"/>
<line x1="60" y1="220" x2="492" y2="40" stroke="#1d2b44" stroke-width="1.8"/>
<circle cx="60" cy="220" r="5" fill="#1d2b44"/>
<circle cx="492" cy="40" r="5" fill="#1d2b44"/>
<text x="122" y="274" font-size="12" fill="#1d2b44">cusp: no derivative at x = 0</text>
<text x="250" y="200" font-size="12" fill="#1d2b44">secant, gradient 1/3</text>
</svg>
<figcaption>Figure 2. f(x) = x^(2/3) on [−1, 8]. The secant has gradient 1/3, but no tangent strictly inside the interval is parallel to it. The cusp at x = 0 breaks the differentiability condition. Axes are unitless.</figcaption>
</figure>

**Other ways a condition fails.** A corner (as in |x − k| at x = k), a vertical tangent, a jump, a hole or an asymptote inside the interval each break a condition. A function such as 1/x on [−1, 1] is not even continuous, because it is undefined at 0.

**No promise is not the same as impossible.** A function can fail a condition and still have a suitable c by chance. The theorem simply stays silent.

## Common misconceptions

- **"c is the midpoint of [a, b]."** Only by coincidence. In Worked example 1, the midpoint is 1.5 but c = √3.
- **"The average rate is the average of f′(a) and f′(b)."** It is (f(b) − f(a))/(b − a), the secant gradient.
- **"There is exactly one c."** The theorem says at least one. A wiggly graph can have many.
- **Keeping solutions outside (a, b).** Always test each solution against the open interval.
- **Forgetting the chain rule** when you differentiate before solving f′(c) = average rate.
- **Skipping the conditions.** "By MVT, f′(c) = 3" earns nothing without continuity and differentiability, each with a reason.
- **Using only neighbouring table columns.** Any sub-interval [p, q] in the table is allowed.
- **Confusing the Mean Value Theorem with the Intermediate Value Theorem.** The IVT is about values of f (needs only continuity). The MVT is about values of f′ (needs differentiability too).
- **"The condition fails, so there is no such c."** A failed condition only removes the guarantee.

## Where this leads

The Mean Value Theorem is the reason that the sign of f′ controls whether f increases or decreases, which you will use from Topic 5.3 onwards. It is also behind the link between derivatives and accumulation in Unit 6. Next, [Topic 5.2, Extreme Value Theorem, Global Versus Local Extrema, and Critical Points](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/), introduces a second existence theorem and the critical points where extreme values can occur. The previous topic was [Topic 4.7, L'Hospital's Rule](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-checklist/) to consolidate.
