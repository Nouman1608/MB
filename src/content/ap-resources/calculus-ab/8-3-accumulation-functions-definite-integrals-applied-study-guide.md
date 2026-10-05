---
resourceId: "mb-ap-calcab-8.3-study-guide"
title: "Accumulation Functions and Definite Integrals in Applied Contexts: Study Guide (Calculus AB 8.3)"
description: "Learn how integrating a rate gives a net change, how to build an amount function from a starting value and a rate, and how to interpret every integral in context with units."
course: "calculus-ab"
unit: 8
topics: ["8.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definite integral as signed area and as a limit of Riemann sums (Topics 6.1 to 6.3)"
  - "Accumulation functions and the Fundamental Theorem of Calculus (Topics 6.4 and 6.7)"
  - "The candidates test for absolute extrema (Topic 5.5)"
  - "Displacement and distance from velocity (Topic 8.2)"
prerequisiteResources: ["mb-ap-calcab-8.2-study-guide"]
learningObjectives:
  - "Explain why integrating the rate of change of a quantity over an interval gives the net change in that quantity"
  - "Write an amount at time x as a starting value plus an accumulation function of the rate, and interpret its derivative"
  - "Combine a rate in and a rate out into a net rate, and decide when an amount increases or decreases"
  - "Find the greatest or least amount using the sign of the rate and the candidates test"
  - "Interpret definite integrals and accumulation functions in context, with units and the time interval"
skills: ["3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked example 1 uses no calculator (areas from geometry). Worked example 2 is calculator-active: evaluate integrals and solve equations with a graphing calculator, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.3-revision-notes", "mb-ap-calcab-8.3-practice", "mb-ap-calcab-8.3-checklist"]
next: "mb-ap-calcab-8.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If Q′(t) is the rate of change of a quantity Q, then ∫ (a to b) Q′(t) dt = Q(b) − Q(a): the integral of a rate is the net change."
  - "Amount at time x = starting amount + ∫ (a to x) rate dt. The derivative of this amount function is the rate itself."
  - "With a rate in and a rate out, integrate (rate in − rate out). The amount increases exactly when rate in > rate out."
  - "The greatest or least amount occurs where the net rate changes sign or at an endpoint. Compare all candidates."
  - "Every interpretation needs three things: what quantity, over which interval, and in which units."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.3 is common content, so the same page serves AB and BC students."
  - question: "How do I know whether to integrate or differentiate?"
    answer: "Look at what you are given. If you have a rate and want an amount or a change in amount, integrate. If you have an amount and want how fast it changes, differentiate."
  - question: "What is the difference between net change and total change?"
    answer: "Net change, ∫ (a to b) r(t) dt, lets increases and decreases cancel. Total change, ∫ (a to b) |r(t)| dt, adds up every increase and every decrease as positive amounts."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (a to b) r(t) dt** means the definite integral of r(t) from t = a to t = b. On paper, write a at the bottom of the integral sign and b at the top. **|r(t)|** means the absolute value of r(t).

## The big idea: a rate in, a change out

Many real quantities are hard to measure directly but easy to measure as a rate: litres per minute through a pipe, people per hour through a gate, kilowatts drawn by a charger. Calculus turns such a rate into a change in the amount.

Here is the reasoning. Let Q(t) be an amount and Q′(t) its rate of change. Cut the interval [a, b] into short pieces of length Δt. On one short piece the rate is almost constant, so the amount changes by about

**rate × time = Q′(t) · Δt**

Adding all these small changes gives a Riemann sum. As the pieces get shorter, the sum becomes a definite integral, and the small changes add up to the whole change from a to b. The Fundamental Theorem of Calculus says the same thing exactly, because Q is an antiderivative of Q′:

> **Net change.** If Q′ is continuous on [a, b], then ∫ (a to b) Q′(t) dt = Q(b) − Q(a).

The word **net** matters. Where the rate is positive the amount rises; where it is negative the amount falls. The integral adds the rises and subtracts the falls, so it gives the overall change only. It does not tell you how much happened in each direction.

**Units.** The units of the integral are the units of the rate multiplied by the units of the input. Litres per minute × minutes = litres. Kilowatts × hours = kilowatt-hours. People per hour × hours = people. Checking units is the fastest way to catch an integral of the wrong thing.

## From net change to an amount function

Rearranging the net-change statement gives the amount at any later time x:

**Q(x) = Q(a) + ∫ (a to x) Q′(t) dt**

Read it as "amount now = amount at the start + everything that has accumulated since". The integral is an **accumulation function** of x, the kind you met in Topic 6.4. So the same facts apply:

- At x = a the integral is 0, so the formula gives Q(a). The starting value is built in.
- By the Fundamental Theorem, d/dx of the integral is Q′(x). So the derivative of the amount function is the rate. In context: "Q′(x) is how fast the amount is changing at time x, in units of amount per unit time."

Two common forms of the rate:

1. **A single net rate r(t)**, positive for gains and negative for losses. Then Q(x) = Q(a) + ∫ (a to x) r(t) dt.
2. **A rate in, I(t), and a rate out, O(t)**, both positive. Then the net rate is I(t) − O(t), and Q(x) = Q(a) + ∫ (a to x) [I(t) − O(t)] dt.

In the second form, Q′(x) = I(x) − O(x). So the amount is **increasing when the rate in is greater than the rate out** and decreasing when it is less. Comparing the size of two rates at one instant answers an "increasing or decreasing?" question without any integration.

## Greatest and least amounts

To find the greatest or least amount on [a, b], use the candidates test from Topic 5.5 on Q:

1. Find where Q′ = 0 (or the net rate changes sign). These are the critical points inside the interval.
2. List the endpoints a and b as candidates too.
3. Find Q at every candidate using the starting value and the integral.
4. The largest value is the absolute maximum; the smallest is the absolute minimum.

A sign chart explains the result: Q rises while the net rate is positive and falls while it is negative, so a local maximum occurs where the net rate changes from positive to negative. Still compare with the endpoints. A long period of loss after a peak can make an endpoint the overall minimum.

## Reading a rate graph

When the rate is given as a graph, each net change is a signed area. Figure 1 shows the net rate at a bike-share dock, used in Worked example 1.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="dock-title dock-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dock-title">Graph of the net rate r(t) of bikes at a dock, with signed areas labelled</title>
<desc id="dock-desc">The horizontal axis is t in hours from 0 to 8. The vertical axis is r(t) in bikes per hour from −6 to 6. The graph is horizontal at 6 from t = 0 to t = 2, falls in a straight line through (3, 0) to (4, −6), stays at −6 until t = 6, then rises in a straight line to (8, 0). Regions above the axis are lightly shaded and labelled +12 for 0 to 2 and +3 for 2 to 3. Regions below the axis are hatched and labelled −3 for 3 to 4, −12 for 4 to 6 and −6 for 6 to 8.</desc>
<defs>
<pattern id="dock-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.2"/>
</pattern>
</defs>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<polygon points="60,170 60,98 170,98 225,170" fill="#dfe7f3"/>
<polygon points="225,170 280,242 390,242 500,170" fill="url(#dock-hatch)" opacity="0.55"/>
<line x1="40" y1="170" x2="510" y2="170" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="300" x2="60" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="60,98 170,98 280,242 390,242 500,170" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="115" y1="166" x2="115" y2="174"/><line x1="170" y1="166" x2="170" y2="174"/><line x1="225" y1="166" x2="225" y2="174"/><line x1="280" y1="166" x2="280" y2="174"/><line x1="335" y1="166" x2="335" y2="174"/><line x1="390" y1="166" x2="390" y2="174"/><line x1="445" y1="166" x2="445" y2="174"/><line x1="500" y1="166" x2="500" y2="174"/>
<line x1="56" y1="98" x2="64" y2="98"/><line x1="56" y1="242" x2="64" y2="242"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="115" y="187">1</text><text x="170" y="187">2</text><text x="225" y="187">3</text><text x="335" y="187">5</text><text x="445" y="187">7</text><text x="500" y="187">8</text>
<text x="280" y="160">4</text><text x="390" y="160">6</text>
<text x="505" y="160">t</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="102">6</text><text x="52" y="246">−6</text><text x="52" y="174">0</text>
</g>
<text x="66" y="40" font-size="12" fill="#1d2b44">r(t), bikes per hour</text>
<g font-size="15" font-weight="700" fill="#1d2b44" text-anchor="middle">
<text x="112" y="140">+12</text><text x="190" y="150">+3</text><text x="253" y="206">−3</text><text x="335" y="214">−12</text><text x="445" y="214">−6</text>
</g>
<text x="300" y="290" font-size="12" fill="#1d2b44" text-anchor="middle">shaded: bikes gained · hatched: bikes lost · t = hours after 06:00</text>
</svg>
<figcaption>Figure 1. Net rate r(t) at a bike-share dock. Each label is the signed area of that piece, in bikes. Areas above the axis are gains; areas below are losses. The rate changes sign at t = 3. Data invented for this guide.</figcaption>
</figure>

## Worked example 1: a bike-share dock (no calculator)

**Question.** The number of bikes at a dock is B(t), where t is hours after 06:00, for 0 ≤ t ≤ 8. The net rate of change of B is r(t) bikes per hour, shown in Figure 1. At 06:00 there are 10 bikes. The model treats the number of bikes as a continuous quantity.

(a) Find B(4).
(b) At what time is the number of bikes greatest? Justify your answer.
(c) Find ∫ (0 to 8) r(t) dt and explain its meaning in context.
(d) Find B′(5) and explain its meaning.

**(a)** B(4) = B(0) + ∫ (0 to 4) r(t) dt. The areas from 0 to 4 are +12 (rectangle 2 × 6), +3 (triangle ½ × 1 × 6) and −3 (triangle ½ × 1 × 6). So

**B(4) = 10 + 12 + 3 − 3 = 22 bikes**

**(b)** B′(t) = r(t). The rate is positive on 0 < t < 3 and negative on 3 < t < 8, so r changes from positive to negative at t = 3: B increases and then decreases. Candidates:

| t | B(t) |
|---|---|
| 0 | 10 |
| 3 | 10 + 12 + 3 = 25 |
| 8 | 10 + 12 + 3 − 3 − 12 − 6 = 4 |

The greatest number is **25 bikes, at t = 3 (09:00)**. Justification: B′ = r changes sign from positive to negative only at t = 3, and B(3) is larger than both endpoint values.

**(c)** ∫ (0 to 8) r(t) dt = 12 + 3 − 3 − 12 − 6 = **−6**. Meaning: between 06:00 and 14:00 the number of bikes at the dock decreased by a net 6 bikes. It is consistent with (b): B(8) − B(0) = 4 − 10 = −6.

**(d)** B′(5) = r(5) = −6. At 11:00 the number of bikes at the dock is decreasing at 6 bikes per hour.

**Extension: total change.** ∫ (0 to 8) |r(t)| dt = 12 + 3 + 3 + 12 + 6 = 36. The count went up by 15 and down by 21, a total of 36 bikes of change in the count. Net change (−6) and total change (36) answer different questions.

## Worked example 2: a grain silo (calculator)

**Question.** A silo holds 400 tonnes of grain at t = 0, where t is in hours, 0 ≤ t ≤ 10. Grain is loaded in at L(t) = 60 + 25 sin(t/2) tonnes per hour and unloaded at U(t) = 8t + 30 tonnes per hour. Let G(t) be the amount of grain in the silo. Use radians. (Invented model.)

(a) How many tonnes of grain are loaded in during the 10 hours?
(b) Find G(10).
(c) Is the amount of grain increasing or decreasing at t = 6? Give a reason.
(d) At what time is the amount of grain greatest? Find that amount and justify your answer.

**(a)** ∫ (0 to 10) L(t) dt ≈ **635.817 tonnes**. (Exact value: 650 − 50 cos 5, but on a calculator question the decimal is enough.)

**(b)** G(10) = 400 + ∫ (0 to 10) [L(t) − U(t)] dt. The unloaded total is ∫ (0 to 10) (8t + 30) dt = 700. So

**G(10) ≈ 400 + 635.817 − 700 = 335.817 tonnes**

**(c)** G′(6) = L(6) − U(6) ≈ 63.528 − 78 = −14.472 < 0. The amount is **decreasing** at t = 6, because grain is being unloaded faster than it is loaded.

**(d)** G′(t) = L(t) − U(t). Solve L(t) = U(t) with the calculator: the only solution in [0, 10] is t = c ≈ 5.268. L − U is positive before c (for example 30 at t = 0) and negative after c (about −73.973 at t = 10), so G increases then decreases. Candidates:

| t | G(t) |
|---|---|
| 0 | 400 |
| c ≈ 5.268 | 400 + ∫ (0 to c) [L(t) − U(t)] dt ≈ 540.729 |
| 10 | ≈ 335.817 |

The greatest amount is **about 540.729 tonnes, at t ≈ 5.268 hours**. Use the stored value of c, not 5.268, in the integral.

**What to write on paper.** Show the integral expression before the number, for example "400 + ∫ (0 to 10) [L(t) − U(t)] dt = 335.817". A bare decimal shows no method.

## Worked example 3: writing interpretations

Interpretation questions test whether you know what an integral measures. A complete answer names the **quantity**, the **interval** and the **units**.

**Charging an electric car.** P(t) is the power delivered to a car battery, in kilowatts, t hours after charging starts. You are told ∫ (0 to 1.5) P(t) dt = 54.

- Correct: "During the first 1.5 hours of charging, 54 kilowatt-hours of energy are delivered to the battery."
- Wrong: "The power is 54 kW at t = 1.5." That describes P(1.5), a rate at one instant.
- Wrong: "The power increased by 54." That would be P(1.5) − P(0), which equals ∫ (0 to 1.5) P′(t) dt, a change in the rate itself, in kilowatts.

If the battery held 12 kWh at the start, E(x) = 12 + ∫ (0 to x) P(t) dt is the energy stored after x hours, and E′(1) = P(1) is the rate at which energy is being stored at t = 1, in kilowatt-hours per hour, which is kilowatts.

**A river level.** h′(t) is the rate of change of a river's water level, in centimetres per hour, t hours after midnight, and the level both rises and falls between t = 0 and t = 12.

- ∫ (0 to 12) h′(t) dt = −18 means: at noon the water level is 18 cm lower than at midnight.
- ∫ (0 to 12) |h′(t)| dt = 40 means: the level moved a total of 40 cm, counting every rise and every fall as positive.

## Common misconceptions

- **Integrating the amount instead of the rate.** ∫ Q(t) dt has the wrong units (for example tonne-hours). Integrate the rate to get a change in amount.
- **Forgetting the starting value.** ∫ (0 to x) r(t) dt is only the change since t = 0. The amount is the starting value plus that change.
- **Using r(b) − r(a) as the net change.** That is the change in the rate. The net change in the amount is ∫ (a to b) r(t) dt.
- **"The amount is greatest when the rate is greatest."** The amount keeps growing while the rate is positive, even after the rate has peaked. The amount is greatest where the net rate changes from positive to negative, or at an endpoint.
- **Ignoring endpoints.** A critical point inside the interval may not be the absolute extremum. Always include a and b in the candidates.
- **Mixing up net and total change.** Use ∫ r(t) dt for net change and ∫ |r(t)| dt for the total of all increases and decreases.
- **Rate in minus rate out the wrong way round.** Gains are positive. Write I(t) − O(t), not O(t) − I(t).
- **Rounding too early.** Store the calculator value of a critical point and use it in later integrals.
- **Interpretations without units or interval.** "It is 54" earns nothing; name what is measured, between which times, in which units.

## Where this leads

Topic 8.2 applied the same idea to motion, where velocity is the rate and displacement the net change. In Topic 8.4 the expression ∫ (a to b) [I(t) − O(t)] dt reappears as the area between two curves: the difference of two functions, integrated over an interval. Continue with [Finding the Area Between Curves Expressed as Functions of x](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-study-guide/), or return to [Topic 8.2](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-checklist/) to consolidate.
