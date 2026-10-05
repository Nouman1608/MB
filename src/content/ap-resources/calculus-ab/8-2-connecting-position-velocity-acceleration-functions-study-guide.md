---
resourceId: "mb-ap-calcab-8.2-study-guide"
title: "Connecting Position, Velocity, and Acceleration Using Integrals: Study Guide (Calculus AB 8.2)"
description: "Learn how integrals turn acceleration into velocity and velocity into position, and why the integral of velocity gives displacement while the integral of speed gives total distance."
course: "calculus-ab"
unit: 8
topics: ["8.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Straight-line motion: position, velocity, acceleration and speed as derivatives (Topic 4.2)"
  - "The Fundamental Theorem of Calculus and evaluating definite integrals (Topics 6.4 to 6.7)"
  - "Signed area from a graph (Topics 6.1 to 6.3)"
  - "Average value of a function (Topic 8.1)"
prerequisiteResources: ["mb-ap-calcab-8.1-study-guide"]
learningObjectives:
  - "Find a later position from a starting position and a velocity function, and a later velocity from a starting velocity and an acceleration function"
  - "Explain why ∫ (a to b) v(t) dt is the displacement and ∫ (a to b) |v(t)| dt is the total distance travelled"
  - "Find total distance by splitting at direction changes by hand, or with a calculator"
  - "Read positions, displacement and distance from a velocity graph using signed areas"
  - "Find average velocity and average speed over a time interval"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 are done by hand. Worked example 3 uses a graphing calculator; give calculator answers correct to three decimal places."
related: ["mb-ap-calcab-8.2-revision-notes", "mb-ap-calcab-8.2-practice", "mb-ap-calcab-8.2-checklist"]
next: "mb-ap-calcab-8.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Displacement from t = a to t = b is ∫ (a to b) v(t) dt. It can be negative."
  - "Total distance travelled is ∫ (a to b) |v(t)| dt, the integral of speed. It is never negative."
  - "Position at time b: x(b) = x(a) + ∫ (a to b) v(t) dt. Velocity at time b: v(b) = v(a) + ∫ (a to b) a(t) dt."
  - "Average velocity is displacement ÷ time; average speed is distance ÷ time."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.2 is common content, so the same page serves AB and BC students. BC students later extend the same ideas to motion in a plane."
  - question: "Why do I need a starting position?"
    answer: "Velocity tells you how position changes, not where the object is. The integral gives the change in position; you add it to a known position to get a new one."
  - question: "When are displacement and distance equal?"
    answer: "Distance equals the absolute value of displacement when the velocity never changes sign on the interval, so the object moves in one direction only. If that direction is positive, the two are equal; if it is negative, the displacement is the negative of the distance."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (a to b) v(t) dt** means the definite integral of v(t) from t = a to t = b. On paper, write a at the bottom of the integral sign and b at the top. Throughout, an object moves along a straight line, x(t) is its position, v(t) its velocity and a(t) its acceleration at time t.

## Going backwards: from rates to amounts

In Topic 4.2 you differentiated: velocity is the derivative of position, v(t) = x′(t), and acceleration is the derivative of velocity, a(t) = v′(t). Now you go the other way. Integration undoes differentiation, but it only tells you **how much something changed**, not where it started.

<figure>
<svg viewBox="0 0 520 200" role="img" aria-labelledby="chain-title chain-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="chain-title">How position, velocity and acceleration are linked by derivatives and integrals</title>
<desc id="chain-desc">Three boxes in a row, labelled position x(t), velocity v(t) and acceleration a(t). Solid arrows along the top point from left to right, labelled "differentiate". Dashed arrows along the bottom point from right to left, labelled "integrate, then add a starting value". The bottom left arrow carries the formula x(b) = x(a) + ∫ v dt and the bottom right arrow carries v(b) = v(a) + ∫ a dt.</desc>
<defs><marker id="chain-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="520" height="200" fill="#ffffff"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5">
<rect x="15" y="75" width="120" height="50" rx="6"/><rect x="200" y="75" width="120" height="50" rx="6"/><rect x="385" y="75" width="120" height="50" rx="6"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="75" y="97">position</text><text x="75" y="115">x(t)</text>
<text x="260" y="97">velocity</text><text x="260" y="115">v(t)</text>
<text x="445" y="97">acceleration</text><text x="445" y="115">a(t)</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" fill="none">
<line x1="140" y1="85" x2="195" y2="85" marker-end="url(#chain-arrow)"/>
<line x1="325" y1="85" x2="380" y2="85" marker-end="url(#chain-arrow)"/>
<line x1="195" y1="115" x2="140" y2="115" stroke-dasharray="5 4" marker-end="url(#chain-arrow)"/>
<line x1="380" y1="115" x2="325" y2="115" stroke-dasharray="5 4" marker-end="url(#chain-arrow)"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="260" y="30">solid arrows: differentiate</text>
<text x="167" y="62">d/dt</text><text x="352" y="62">d/dt</text>
<text x="260" y="185">dashed arrows: integrate, then add a starting value</text>
<text x="140" y="150">x(b) = x(a) + ∫ v dt</text>
<text x="380" y="150">v(b) = v(a) + ∫ a dt</text>
</g>
</svg>
<figcaption>Figure 1. Differentiating moves right along the chain. Integrating moves left, but each step needs a known starting value, because an integral gives only the change.</figcaption>
</figure>

## Displacement: the integral of velocity

Since x is an antiderivative of v, the Fundamental Theorem gives

**∫ (a to b) v(t) dt = x(b) − x(a)**

The right side is the **displacement**: the net change in position, final minus initial. It is a signed quantity. Time spent moving in the negative direction (v < 0) cancels some of the time spent moving in the positive direction.

Rearranging gives the formula you will use most:

> **x(b) = x(a) + ∫ (a to b) v(t) dt**
> **v(b) = v(a) + ∫ (a to b) a(t) dt**

The second line is the same idea one step down the chain: v is an antiderivative of a, so the integral of acceleration is the change in velocity.

**Units.** If v is in metres per second and t in seconds, ∫ v(t) dt is in (m/s) × s = metres. If a is in m/s², ∫ a(t) dt is in m/s.

## Total distance: the integral of speed

Displacement can hide motion. An object that goes 5 m forward and 5 m back has displacement 0 but has travelled 10 m. To count every metre, integrate **speed**, |v(t)|, which is never negative:

> **Total distance travelled from t = a to t = b = ∫ (a to b) |v(t)| dt**

**By hand.** You usually cannot find an antiderivative of |v| directly. Instead:

1. Find where v(t) = 0 and check where v changes sign. These are the times the object changes direction.
2. Split [a, b] at those times.
3. Integrate v on each piece and take the absolute value of each result.
4. Add.

**With a calculator.** Enter ∫ (a to b) |v(t)| dt directly, using the absolute value function.

**Average velocity and average speed.** By Topic 8.1, the average value of v on [a, b] is (1/(b − a)) ∫ (a to b) v(t) dt, which is displacement ÷ time. That is the **average velocity**. Similarly, the **average speed** is total distance ÷ time.

**Read the question word by word.** The wording tells you which integral to write:

| The question asks for… | Write |
|---|---|
| the position at time b | x(a) + ∫ (a to b) v(t) dt |
| the displacement, or the change in position | ∫ (a to b) v(t) dt |
| the total distance travelled | ∫ (a to b) \|v(t)\| dt |
| the velocity at time b, given a(t) | v(a) + ∫ (a to b) a(t) dt |

## Worked example 1: from acceleration to position, by hand

**Question.** A particle moves along the x-axis. Its acceleration is a(t) = 6t − 12, in cm/s², for 0 ≤ t ≤ 4 seconds. At t = 0 its velocity is 9 cm/s and its position is x = 2 cm.
(a) Find v(t), and check v(4) using an integral of a.
(b) Find the position at t = 4.
(c) Find the total distance travelled over 0 ≤ t ≤ 4.

**(a)** v(t) = v(0) + ∫ (0 to t) a(s) ds = 9 + [3s² − 12s] from 0 to t = **3t² − 12t + 9**, in cm/s. (The letter s is used inside because t is the upper limit.)

Check: v(4) = v(0) + ∫ (0 to 4) (6t − 12) dt = 9 + (48 − 48) = 9. And 3(16) − 48 + 9 = 9. They agree.

**(b)** x(4) = x(0) + ∫ (0 to 4) (3t² − 12t + 9) dt. An antiderivative is t³ − 6t² + 9t, which equals 64 − 96 + 36 = 4 at t = 4 and 0 at t = 0. So the displacement is 4 cm and **x(4) = 2 + 4 = 6 cm**.

**(c)** Factor: v(t) = 3(t − 1)(t − 3). It is positive on [0, 1), negative on (1, 3) and positive on (3, 4]. The particle changes direction at t = 1 and t = 3. Integrate each piece:

| Time interval | ∫ v(t) dt | Distance on that piece |
|---|---|---|
| 0 to 1 | 4 | 4 |
| 1 to 3 | −4 | 4 |
| 3 to 4 | 4 | 4 |

Total distance = 4 + 4 + 4 = **12 cm**.

**Check with positions.** x(1) = 2 + 4 = 6, x(3) = 6 − 4 = 2 and x(4) = 2 + 4 = 6. The particle goes from 2 to 6, back to 2, then out to 6 again: 4 + 4 + 4 = 12 cm. The displacement is only 4 cm.

**Averages.** Average velocity = 4/4 = 1 cm/s. Average speed = 12/4 = 3 cm/s.

## Worked example 2: reading a velocity graph

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="robot-title robot-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="robot-title">Velocity graph of the robot in Worked example 2, with signed areas</title>
<desc id="robot-desc">Velocity v(t), in metres per second, against time t, in seconds, for 0 ≤ t ≤ 8. The graph is made of straight segments joining (0, 4), (2, 4), (4, 0), (6, −2) and (8, −2). The regions above the t-axis are hatched: a rectangle from t = 0 to 2 labelled area 8, and a triangle from t = 2 to 4 labelled area 4. The regions below the axis are dotted: a triangle from t = 4 to 6 labelled area 2, and a rectangle from t = 6 to 8 labelled area 4.</desc>
<defs><pattern id="robot-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.4"/></pattern><pattern id="robot-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<polygon points="60,190 60,50 170,50 280,190" fill="url(#robot-hatch)" stroke="none"/>
<polygon points="280,190 390,260 500,260 500,190" fill="url(#robot-dots)" stroke="none"/>
<line x1="170" y1="50" x2="170" y2="190" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="390" y1="190" x2="390" y2="260" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="40" y1="190" x2="510" y2="190" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="285" x2="60" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="170" y="206">2</text><text x="280" y="206">4</text><text x="390" y="180">6</text><text x="500" y="180">8</text><text x="512" y="206">t</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="54">4</text><text x="52" y="124">2</text><text x="52" y="264">−2</text><text x="52" y="30">v</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="170" y1="186" x2="170" y2="194"/><line x1="280" y1="186" x2="280" y2="194"/><line x1="390" y1="186" x2="390" y2="194"/><line x1="500" y1="186" x2="500" y2="194"/>
<line x1="56" y1="50" x2="64" y2="50"/><line x1="56" y1="120" x2="64" y2="120"/><line x1="56" y1="260" x2="64" y2="260"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60,50 170,50 280,190 390,260 500,260"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="115" y="130">area 8</text><text x="200" y="150">area 4</text><text x="355" y="285">area 2</text><text x="445" y="285">area 4</text>
</g>
</svg>
<figcaption>Figure 2. The robot's velocity in Worked example 2. Hatched regions are above the t-axis (moving in the positive direction) and count as positive displacement; dotted regions are below (moving in the negative direction) and count as negative. Total distance adds all four areas without signs.</figcaption>
</figure>

**Question.** A robot moves along a straight track. Its velocity v(t), in metres per second, is shown in Figure 2 for 0 ≤ t ≤ 8 seconds. At t = 0 the robot is at x = −5 m.
(a) Find the robot's position at t = 4 and at t = 8.
(b) Find its displacement and its total distance travelled over 0 ≤ t ≤ 8.
(c) At what time is the robot farthest in the positive direction? Justify.
(d) Find its average velocity and average speed over 0 ≤ t ≤ 8.

**(a)** Use signed areas.

- x(4) = −5 + ∫ (0 to 4) v(t) dt = −5 + (8 + 4) = **7 m**.
- x(8) = x(4) + ∫ (4 to 8) v(t) dt = 7 + (−2 − 4) = **1 m**.

**(b)** Displacement = 8 + 4 − 2 − 4 = **6 m** (also x(8) − x(0) = 1 − (−5)). Total distance = 8 + 4 + 2 + 4 = **18 m**.

**(c)** v > 0 on [0, 4) and v < 0 on (4, 8]. So x increases until t = 4 and decreases after. The robot changes direction at t = 4, and that is when it is farthest in the positive direction, at **x = 7 m**.

**(d)** Average velocity = 6/8 = **0.75 m/s**. Average speed = 18/8 = **2.25 m/s**.

**Interpretation.** The robot drove 12 m forward, then 6 m back. It ended 6 m from where it started, after covering 18 m of track.

## Worked example 3: with a graphing calculator

**Question.** A particle moves along a line with velocity v(t) = t²e^(−0.5t) − 1, for 0 ≤ t ≤ 6. At t = 0 it is at x = 3. A graphing calculator is allowed.
(a) Find the position at t = 6.
(b) Find the total distance travelled over 0 ≤ t ≤ 6.
(c) Find the particle's leftmost position on 0 ≤ t ≤ 6.

**(a)** x(6) = 3 + ∫ (0 to 6) v(t) dt. The calculator gives ∫ (0 to 6) v(t) dt ≈ 3.22896. So x(6) ≈ **6.229**.

**(b)** Total distance = ∫ (0 to 6) |v(t)| dt ≈ **4.937** (entered directly with the absolute value).

**Check by splitting.** v(0) = −1, and solving v(t) = 0 on the calculator gives t ≈ 1.430, where v changes from negative to positive. ∫ (0 to 1.430) v(t) dt ≈ −0.854 and ∫ (1.430 to 6) v(t) dt ≈ 4.083. Then 0.854 + 4.083 = 4.937, which agrees.

**(c)** The particle moves left until t ≈ 1.430, then right. So its leftmost position is at t ≈ 1.430: x ≈ 3 − 0.854 ≈ **2.146**. (Compare the end points: x(0) = 3 and x(6) ≈ 6.229 are both larger.)

**Good habits.** Write each integral before giving its value. Store intermediate values in the calculator instead of retyping rounded decimals, and round only at the end.

## Common misconceptions

- **"∫ v(t) dt is the distance."** It is the displacement. Distance needs |v|.
- **Taking |∫ v(t) dt| as the distance.** The absolute value must go inside the integral. |∫ v dt| = |displacement|.
- **Forgetting the starting value.** ∫ (a to b) v(t) dt is a change in position. Add x(a) to get x(b).
- **"x(b) = ∫ (0 to b) v(t) dt."** Only if x(0) = 0.
- **Not splitting at direction changes** when finding distance by hand.
- **Splitting at the wrong times,** such as where a(t) = 0. The object changes direction where v changes sign, not where a does.
- **Mixing up average velocity and average speed.** Average velocity uses displacement; average speed uses distance.
- **Wrong units.** ∫ v dt is in units of length; ∫ a dt is in units of velocity.

## Where this leads

Topic 8.2 is the motion case of a general rule: integrating a rate gives the net change in the amount. In [Topic 8.3, Using Accumulation Functions and Definite Integrals in Applied Contexts](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/), the same reasoning handles water in a tank, people in a queue and many other rates. The averages here use [Topic 8.1, Finding the Average Value of a Function on an Interval](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/), and the derivative relationships come from [Topic 4.2](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-checklist/) to consolidate.
