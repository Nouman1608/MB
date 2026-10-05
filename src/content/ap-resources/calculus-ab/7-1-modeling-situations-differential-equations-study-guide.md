---
resourceId: "mb-ap-calcab-7.1-study-guide"
title: "Modeling Situations with Differential Equations: Study Guide (Calculus AB 7.1)"
description: "Learn what a differential equation is and how to turn sentences such as “decreases at a rate proportional to” into an equation, with the right sign, constant and units."
course: "calculus-ab"
unit: 7
topics: ["7.1"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative as a rate of change, with units (Topics 2.1 and 4.1)"
  - "Leibniz notation dy/dx and dy/dt, and the second derivative d²y/dx² (Units 2 and 3)"
  - "Direct and inverse proportion from algebra"
prerequisiteResources: ["mb-ap-calcab-6.14-study-guide"]
learningObjectives:
  - "Explain what a differential equation is: an equation linking a function, its input variable and one or more of its derivatives"
  - "Translate phrases such as “proportional to”, “inversely proportional to” and “the difference between” into a differential equation"
  - "Choose the sign of the constant of proportionality from the wording, and state its units"
  - "Use one piece of given information to find the constant, then use the equation to find a rate at another value"
  - "Read a differential equation back into words and say what its sign tells you"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "The numbers are chosen so that every calculation can be done by hand. Give exact values or simple decimals."
related: ["mb-ap-calcab-7.1-revision-notes", "mb-ap-calcab-7.1-practice", "mb-ap-calcab-7.1-checklist"]
next: "mb-ap-calcab-7.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A differential equation links a function, its input variable and its derivatives. Its solution is a function, not a number."
  - "“The rate of change of y” means dy/dt (or dy/dx). The rate goes on the left; whatever it depends on goes on the right."
  - "“Proportional to Q” means k × Q. “Inversely proportional to Q” means k/Q. “Jointly proportional to P and Q” means k × P × Q."
  - "If the wording says the quantity is decreasing, make the rate negative: either write −k with k > 0, or keep +k and say k < 0. Never both."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 7.1 is common content, so the same page serves AB and BC students."
  - question: "Do I need to solve the equation in this topic?"
    answer: "No. Topic 7.1 is about writing the equation and reading what it says. Checking solutions comes in Topic 7.2 and finding them comes in Topics 7.6 and 7.7."
  - question: "Should I write −k or k for a decreasing quantity?"
    answer: "Either is fine if you say which sign k has. Writing −k and stating k > 0 is the clearest choice. Do not write −k and then also make k negative."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## The big idea

In Units 2 to 5 you started with a function and found its derivative. In Unit 6 you started with a rate and found how much a quantity changed. Unit 7 starts with a sentence that describes **how a rate depends on things**, often on the quantity itself.

Think of a hot drink. It cools quickly when it is much hotter than the room and slowly when it is nearly at room temperature. The rate of cooling depends on the drink's own temperature. You cannot write the temperature as a formula straight away, but you can write a rule for its rate. That rule is a differential equation.

> **Definition.** A **differential equation** is an equation that links a function of an independent variable, that variable, and one or more of the function's derivatives.

Some examples, with t for time:

| Differential equation | What it links |
|---|---|
| dP/dt = 0.03P | The rate of change of P and P itself |
| dy/dx = 2x − y | The rate of change of y, the input x and y |
| dh/dt = −0.4√h | The rate of change of h and the square root of h |
| d²s/dt² = −9.8 | The second derivative of position s (an acceleration) and a constant |

The first three involve only a first derivative. These are **first-order** equations, and they are the ones you will meet most often. The last one involves a second derivative. You will check second-order equations in Topic 7.2.

**What counts as a solution?** A solution is a **function** whose derivatives make the equation true for every input in an interval. This is different from algebra, where the solution of 3x + 1 = 7 is a number. Keep that in mind: in this unit, the unknown is a whole function.

## A note on notation

This page writes derivatives in Leibniz form, such as dy/dt, or with a prime, such as y′. Both mean the same thing here. Write dy/dt when time is the input, because it reminds you that the rate is "per unit of time". Use d²y/dt² or y″ for the second derivative.

## From words to symbols

Most modelling questions use a small set of phrases. Learn the translation for each.

| Words in the question | Symbols |
|---|---|
| "the rate of change of A with respect to t" | dA/dt |
| "A is increasing at 5 units per hour" | dA/dt = 5 |
| "A is decreasing at 5 units per hour" | dA/dt = −5 |
| "proportional to A" | k·A |
| "proportional to the square of A" | k·A² |
| "proportional to the square root of A" | k·√A |
| "inversely proportional to A" | k/A |
| "jointly proportional to A and B" | k·A·B |
| "proportional to the difference between A and 50" | k(A − 50) or k(50 − A), with the sign of k matching the wording |
| "the rate in minus the rate out" | dA/dt = (rate in) − (rate out) |

The letter **k** is the **constant of proportionality**. It does not change as the quantity changes. You usually do not know it at first; the question gives you one fact that lets you find it.

**Three checks before you move on.**

1. **What is changing, and with respect to what?** That decides the left side. "The rate of change of the volume V" gives dV/dt on the left.
2. **What does the rate depend on?** That decides the right side. Read carefully: "proportional to the time since noon" (k·t) is not the same as "proportional to the amount present" (k·V).
3. **Is the quantity going up or down?** That decides the sign.

### Getting the sign right

Suppose a quantity Q is decreasing at a rate proportional to Q, and Q is positive. Two correct ways to write this are:

- dQ/dt = −kQ, where k > 0 (the minus sign shows the decrease), or
- dQ/dt = kQ, where k < 0 (the sign is hidden inside k).

Both are fine, as long as you **say which sign k has**. The first is clearer, so this guide uses it. The mistake is to combine them: dQ/dt = −kQ with k < 0 would make Q increase.

### Units of k

The two sides of a differential equation must have the same units. That fixes the units of k.

If V is in litres and t in minutes, then dV/dt is in litres per minute. In dV/dt = −kV, the right side is k × litres. So k must be in **per minute** (min⁻¹). In dV/dt = −k√V, the right side is k × √litres, so k has the awkward units litres^(1/2) per minute. You will not often be asked for these, but thinking about them is a quick way to catch a wrong model.

## Representations: a rate that depends on the quantity

Figure 1 shows a cooling curve for a drink in a 20 °C room. The curve is one solution of the cooling equation dT/dt = −0.05(T − 20), with t in minutes. (You will learn how to find such curves in Topics 7.6 and 7.7. Here you only need to read it.)

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="cool-title cool-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cool-title">Cooling curve for a drink in a 20 °C room, with tangent lines at two moments</title>
<desc id="cool-desc">Temperature in degrees Celsius against time in minutes from 0 to 60. The curve starts at 90 degrees at time 0 and falls steeply, then levels off towards a dashed horizontal line at 20 degrees, the room temperature. At time 0 the gap between the drink and the room is 70 degrees and a short tangent line shows a steep slope of minus 3.5 degrees per minute. At time 20 the drink is at about 45.8 degrees, the gap is about 25.8 degrees and the tangent line is much flatter, with slope about minus 1.29 degrees per minute. A larger gap goes with a steeper fall.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="70" y1="280" x2="500" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="290" x2="70" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="297">0</text><text x="138" y="297">10</text><text x="206" y="297">20</text><text x="274" y="297">30</text><text x="342" y="297">40</text><text x="410" y="297">50</text><text x="478" y="297">60</text>
<text x="280" y="320">time t (minutes)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="234">20</text><text x="62" y="184">40</text><text x="62" y="134">60</text><text x="62" y="84">80</text><text x="62" y="34">100</text>
<text x="62" y="16">T (°C)</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="138" y1="276" x2="138" y2="284"/><line x1="206" y1="276" x2="206" y2="284"/><line x1="274" y1="276" x2="274" y2="284"/><line x1="342" y1="276" x2="342" y2="284"/><line x1="410" y1="276" x2="410" y2="284"/><line x1="478" y1="276" x2="478" y2="284"/>
<line x1="66" y1="230" x2="74" y2="230"/><line x1="66" y1="180" x2="74" y2="180"/><line x1="66" y1="130" x2="74" y2="130"/><line x1="66" y1="80" x2="74" y2="80"/><line x1="66" y1="30" x2="74" y2="30"/>
</g>
<line x1="70" y1="230" x2="495" y2="230" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<text x="400" y="248" font-size="12" fill="#1d2b44">room temperature 20 °C</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,55.0 83.6,71.7 97.2,86.7 110.8,100.4 124.4,112.7 138.0,123.9 151.6,134.0 165.2,143.1 178.8,151.4 192.4,158.9 206.0,165.6 219.6,171.7 233.2,177.3 246.8,182.3 260.4,186.8 274.0,191.0 287.6,194.7 301.2,198.0 314.8,201.1 328.4,203.8 342.0,206.3 355.6,208.6 369.2,210.6 382.8,212.5 396.4,214.1 410.0,215.6 423.6,217.0 437.2,218.2 450.8,219.4 464.4,220.4 478.0,221.3"/>
<line x1="70" y1="55" x2="131" y2="134" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<line x1="145" y1="137" x2="267" y2="195" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<circle cx="70" cy="55" r="4" fill="#1d2b44"/>
<circle cx="206" cy="165.6" r="4" fill="#1d2b44"/>
<line x1="78" y1="58" x2="78" y2="227" stroke="#1d2b44" stroke-width="1"/>
<line x1="74" y1="58" x2="82" y2="58" stroke="#1d2b44" stroke-width="1"/><line x1="74" y1="227" x2="82" y2="227" stroke="#1d2b44" stroke-width="1"/>
<line x1="214" y1="168" x2="214" y2="227" stroke="#1d2b44" stroke-width="1"/>
<line x1="210" y1="168" x2="218" y2="168" stroke="#1d2b44" stroke-width="1"/><line x1="210" y1="227" x2="218" y2="227" stroke="#1d2b44" stroke-width="1"/>
<text x="86" y="44" font-size="12" fill="#1d2b44">t = 0: gap 70 °C, slope −3.5 °C/min</text>
<text x="222" y="140" font-size="12" fill="#1d2b44">t = 20: gap ≈ 25.8 °C,</text>
<text x="222" y="155" font-size="12" fill="#1d2b44">slope ≈ −1.29 °C/min</text>
</svg>
<figcaption>Figure 1. A drink cooling in a 20 °C room. The dotted lines are tangents, so their slopes are values of dT/dt. Each slope is −0.05 times the gap between the drink and the room: −0.05 × 70 = −3.5 at t = 0 and about −0.05 × 25.8 ≈ −1.29 at t = 20. The vertical bars mark the gaps. Bigger gap, steeper fall.</figcaption>
</figure>

The figure shows the same information in two forms. The equation says "the rate is proportional to the gap". The graph shows it as "the curve is steepest where it is furthest from the dashed line". Being able to move between the sentence, the equation and the graph is the skill this topic tests.

Notice also what happens when T = 20. The gap is 0, so dT/dt = 0. A drink already at room temperature does not change temperature. The equation tells you this without any solving.

## Worked example 1: cooling bread

**Question.** A loaf of bread comes out of an oven at 180 °C and is left in a kitchen kept at 20 °C. The temperature B of the bread, in °C, decreases at a rate proportional to the difference between B and the kitchen temperature. Time t is in minutes.

(a) Write a differential equation for B.
(b) When B = 150 °C, the bread is cooling at 5.2 °C per minute. Find the constant of proportionality, with units.
(c) Find dB/dt when B = 70 °C and interpret it.

**(a)**

1. **What changes, with respect to what?** The temperature B, with respect to time t. Left side: dB/dt.
2. **What does the rate depend on?** "The difference between B and the kitchen temperature": B − 20.
3. **Sign.** The bread is hotter than the kitchen, so B − 20 > 0, and B is decreasing, so dB/dt < 0. Put a minus sign in front and take k > 0.

**dB/dt = −k(B − 20), with k > 0**

**(b)** "Cooling at 5.2 °C per minute" means dB/dt = −5.2 (the temperature is going down). Substitute B = 150:

−5.2 = −k(150 − 20) = −130k, so k = 5.2/130 = **0.04**.

Units: dB/dt is in °C per minute and (B − 20) is in °C, so k is in **per minute** (min⁻¹).

**(c)** dB/dt = −0.04(70 − 20) = −0.04 × 50 = **−2 °C per minute**.

**Interpretation.** When the bread is at 70 °C, its temperature is falling at 2 °C per minute. That is slower than the 5.2 °C per minute at 150 °C, because the gap to room temperature is smaller.

**Check.** Just out of the oven, dB/dt = −0.04 × 160 = −6.4 °C per minute. The rates −6.4, −5.2 and −2 get smaller in size as B falls, which matches the story.

## Worked example 2: rate in minus rate out

**Question.** A pump adds chlorine to a pool at a steady 30 grams per hour. Sunlight breaks chlorine down at a rate proportional to the amount C (grams) in the pool, with constant of proportionality 0.25 per hour.

(a) Write a differential equation for C, with t in hours.
(b) Find dC/dt when C = 80, 120 and 160 grams. Say what each value means.
(c) For what amount of chlorine is the amount not changing?

**(a)** The net rate is the rate in minus the rate out.

- Rate in: 30 g/h (constant).
- Rate out: proportional to C, so 0.25C g/h. The minus sign comes from "out", so the constant itself is positive.

**dC/dt = 30 − 0.25C**

**Check units.** 0.25 per hour × grams = grams per hour. Both terms on the right are in g/h, as they must be.

**(b)**

| C (g) | dC/dt = 30 − 0.25C (g/h) | Meaning |
|---|---|---|
| 80 | 30 − 20 = 10 | Increasing at 10 g/h: more is added than broken down |
| 120 | 30 − 30 = 0 | Not changing at that instant |
| 160 | 30 − 40 = −10 | Decreasing at 10 g/h: more is broken down than added |

**(c)** Set the rate to zero: 30 − 0.25C = 0, so C = **120 grams**. At this amount the pump and the sunlight balance exactly.

**Interpretation.** The sign of dC/dt depends on C. Below 120 g the amount rises; above 120 g it falls. So the amount is always pushed towards 120 g. You found this from the equation alone, without solving it.

**Common slip.** Writing dC/dt = 30 − 0.25 (forgetting C) would say the chlorine is broken down at a fixed 0.25 g/h. The question says the breakdown rate is proportional to the **amount**, so C must appear.

## Worked example 3: from equation to words

**Question.** The depth h, in centimetres, of water in a leaking bucket satisfies dh/dt = −0.6√h, with t in minutes. Describe the model in words, and compare the leak rate at depths 25 cm and 4 cm.

**In words.** The depth of water decreases at a rate proportional to the square root of the depth, with constant of proportionality 0.6.

**Compare.**
- At h = 25: dh/dt = −0.6 × 5 = −3 cm per minute.
- At h = 4: dh/dt = −0.6 × 2 = −1.2 cm per minute.

The water level falls faster when the bucket is fuller. The rate is proportional to √h, so at 25 cm (√h = 5) the level falls 5/2 = 2.5 times as fast as at 4 cm (√h = 2): 3 ÷ 1.2 = 2.5. The rate does not depend on t directly, only on h.

## Common misconceptions

- **Modelling the quantity instead of its rate.** "P grows at a rate proportional to P" is dP/dt = kP, not P = kP or P = kt. The word "rate" means a derivative.
- **Mixing up what the rate depends on.** "Proportional to the time elapsed" gives dy/dt = kt. "Proportional to the amount present" gives dy/dt = ky. Read which quantity follows "proportional to".
- **Double negatives.** Writing dQ/dt = −kQ and then finding k < 0. If you put the minus sign in, k comes out positive. If your k comes out negative, check your signs.
- **Forgetting the constant.** "Proportional to" always needs k (or a given number). dy/dt = y means k = 1, which is a special case, not the general model.
- **"Inversely" means negative.** It does not. "Inversely proportional to A" is k/A. Whether the quantity increases or decreases is a separate question about the sign.
- **"Difference" in the wrong order.** k(B − 20) and k(20 − B) are both acceptable if the sign of k is chosen to match the story. Decide the sign of the rate first, then make the expression agree.
- **Units for a "rate" given as a positive number.** "Cooling at 5.2 °C per minute" means dB/dt = −5.2, not +5.2.
- **Thinking the solution is a number.** A differential equation is solved by a function. Finding k, or a single rate, is not "solving" the equation.

## Where this leads

Writing the equation is the first step of every modelling problem in Unit 7. Next, [Topic 7.2](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-study-guide/) shows how to check whether a given function solves a differential equation, and why there can be infinitely many solutions. Later topics draw slope fields (7.3 and 7.4) and solve equations by separation of variables (7.6 and 7.7). Exponential models (7.8) use the equation dy/dt = ky that you have already written here. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-checklist/) to consolidate.
