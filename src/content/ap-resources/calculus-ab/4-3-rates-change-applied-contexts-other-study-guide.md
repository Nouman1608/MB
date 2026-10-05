---
resourceId: "mb-ap-calcab-4.3-study-guide"
title: "Rates of Change in Applied Contexts Other Than Motion: Study Guide (Calculus AB 4.3)"
description: "Read a derivative as a rate in any setting: tanks, costs, populations, concentrations and density. Units, sign words, second derivatives and full-sentence interpretations."
course: "calculus-ab"
unit: 4
topics: ["4.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative as an instantaneous rate of change and the meaning of f′(a) in context (Topic 4.1)"
  - "Differentiation rules for polynomials, products, quotients and composite functions (Units 2 and 3)"
  - "Estimating a derivative from a table with a difference quotient (Topics 2.1 and 2.2)"
  - "Velocity and acceleration as first and second derivatives of position (Topic 4.2)"
learningObjectives:
  - "Interpret f′(a) in a non-motion context, naming the instant, the quantity, the direction of change and the rate with units"
  - "Work out the units of a first and a second derivative from the units of the function and its input"
  - "Find or estimate a rate of change from a formula, a table or a graph and explain what it means in context"
  - "Interpret the sign of f″(a) as the rate itself speeding up or slowing down"
  - "Recognise the same derivative structure across contexts such as volume, cost, population, concentration and density"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "mixed"
calculatorNote: "The worked examples need no calculator. On the exam, interpretation questions like these appear in both calculator and non-calculator sections."
related: ["mb-ap-calcab-4.3-revision-notes", "mb-ap-calcab-4.3-practice", "mb-ap-calcab-4.3-checklist"]
next: "mb-ap-calcab-4.3-practice"
prerequisiteResources: ["mb-ap-calcab-4.2-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Whatever the context, f′(a) is the rate at which the output changes per one unit of input at the instant a."
  - "Units of f′ = units of f divided by units of the input. Units of f″ = units of f divided by (units of the input)²."
  - "A full interpretation names the instant, the quantity, increasing or decreasing, and the rate with units."
  - "f′(a) < 0 and f″(a) > 0 means the quantity is decreasing, but decreasing more slowly."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 4.3 is common content, so the same page serves AB and BC students."
  - question: "Do I say 'decreasing at a rate of −60' or 'decreasing at a rate of 60'?"
    answer: "Say 'decreasing at a rate of 60 litres per minute'. The word 'decreasing' already carries the minus sign. Alternatively, say 'the rate of change is −60 litres per minute'."
  - question: "Does the input have to be time?"
    answer: "No. The input can be altitude, distance along a rod, number of items made or anything else. The derivative is then a rate per unit of that input."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## One idea, many settings

In Topic 4.2 you met the derivative as velocity: the rate at which position changes with time. This topic uses the same idea everywhere else. The derivative is not "about motion". It is about **how fast one quantity changes when another quantity changes**.

If y = f(x), then f′(a) tells you:

> At the input value x = a, the output y is changing at a rate of f′(a) units of y **per one unit of x**.

The words change with the context. The mathematics does not. That is the skill this topic tests: seeing the common structure under different stories.

| Function and input | Units of the function | Units of the derivative | What the derivative describes |
|---|---|---|---|
| V(t), water in a tank, t in minutes | litres | litres per minute | How fast the tank fills or empties |
| P(t), size of a population, t in years | people | people per year | Growth or decline rate of the population |
| C(q), cost of making q items | dollars | dollars per item | Extra cost per extra item (the "marginal cost") |
| T(h), air temperature at altitude h metres | °C | °C per metre | How temperature changes as you climb |
| m(x), mass of the first x cm of a rod | grams | grams per cm | How dense the rod is at that point (linear density) |
| Q(t), electric charge past a point, t in seconds | coulombs | coulombs per second (amperes) | The electric current |
| [A](t), concentration of a reactant, t in seconds | mol/L | mol/L per second | How fast the reactant is used up |

Notice two things. First, the input is not always time: altitude, number of items and distance along a rod work exactly the same way. Second, the units of the derivative always come from the same rule.

## Units: the quickest check you have

> **Unit rule.** Units of f′(x) = (units of f) ÷ (units of x).

This follows from the definition. A derivative is the limit of a difference quotient, (f(x + h) − f(x))/h. The top is measured in the units of f. The bottom is measured in the units of x. Taking a limit does not change units.

The second derivative is the derivative of the derivative, so you divide by the input unit again:

> Units of f″(x) = (units of f) ÷ (units of x)².

For a tank measured in litres over minutes, V″ is in litres per minute per minute, written L/min². Read it as "how many litres per minute the rate changes by, each minute".

If an answer comes out with the wrong units, something is wrong with the reasoning, not just the label. For example, if you find yourself writing "minutes per litre", you have divided the wrong way round.

## Writing an interpretation that earns credit

A complete interpretation of f′(a) in context has four parts:

1. **When or where:** the input value, with units ("at time t = 10 minutes", "at an altitude of 800 metres").
2. **What:** the quantity, named in words ("the volume of water in the tank").
3. **Direction:** "is increasing" if f′(a) > 0, "is decreasing" if f′(a) < 0.
4. **How fast:** the size of the rate, with units ("at a rate of 60 litres per minute").

Template: *At [input = a, with units], the [quantity] is [increasing/decreasing] at a rate of [|f′(a)|] [units of f] per [unit of input].*

Two equally correct ways to handle the sign:

- "The volume is **decreasing at a rate of 60** litres per minute." (Size only; the word carries the sign.)
- "The **rate of change** of the volume **is −60** litres per minute." (Signed number; no direction word.)

Do not mix them. "Decreasing at a rate of −60" is a double negative and suggests the volume is increasing.

Note what the interpretation does **not** say. It does not say "the tank loses 60 litres in the next minute". A derivative describes one instant. Over the next minute the rate keeps changing, so the actual loss is only approximately 60 litres. (Topic 4.6 turns this into a method called local linear approximation.)

## Worked example 1: a draining tank (formula)

**Situation.** A water tank is being drained. The volume of water in the tank is

**V(t) = 2000 − 90t + 1.5t²** litres, for 0 ≤ t ≤ 30,

where t is measured in minutes. (Invented model.)

**Questions.** (a) Find V′(10) and interpret it. (b) Find V″(10) and interpret it. (c) Compare V′(10) with the average rate of change of V over 0 ≤ t ≤ 10.

**(a)** Differentiate term by term:

1. V′(t) = −90 + 3t.
2. Units: litres ÷ minutes = litres per minute.
3. V′(10) = −90 + 30 = **−60 litres per minute**.

**Interpretation.** At time t = 10 minutes, the volume of water in the tank is decreasing at a rate of 60 litres per minute.

**(b)** Differentiate again:

1. V″(t) = 3, so V″(10) = **3 litres per minute per minute** (L/min²).
2. V″ > 0 means V′ is increasing. V′ is negative but rising towards 0: from −90 at t = 0, to −60 at t = 10, to −30 at t = 20, to 0 at t = 30.

**Interpretation.** At t = 10 minutes, the rate of change of the volume is increasing by 3 litres per minute each minute. In plain words: the tank is still emptying, but the draining is **slowing down**.

**(c)** The average rate over 0 ≤ t ≤ 10 uses two values of V, not a derivative:

1. V(0) = 2000 and V(10) = 2000 − 900 + 150 = 1250.
2. Average rate = (1250 − 2000)/(10 − 0) = −750/10 = **−75 litres per minute**.

**Comparison.** Over the first 10 minutes the tank lost 75 litres per minute on average. At the instant t = 10 it was losing only 60 litres per minute. This fits part (b): the draining slowed down during those 10 minutes, so the rate at the end is smaller in size than the average.

**Check.** The units match in every line: litres, litres per minute, litres per minute². The model gives V′(30) = 0, so the draining stops at t = 30, which is why the model is only used up to 30 minutes.

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="tank-title tank-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tank-title">Graph of the tank volume V(t) with the tangent line at t = 10 minutes</title>
<desc id="tank-desc">The horizontal axis is time t in minutes from 0 to 30. The vertical axis is volume V in litres from 0 to 2000. A solid curve starts at 2000 litres at t = 0 and falls, levelling off to 650 litres at t = 30; it gets less steep as time passes. A dashed straight line touches the curve at the marked point (10, 1250). A small right-angled triangle under the dashed line runs 5 minutes across and 300 litres down, showing a slope of −300 ÷ 5 = −60 litres per minute.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<line x1="70" y1="290" x2="505" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="300" x2="70" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="307">0</text><text x="140" y="307">5</text><text x="210" y="307">10</text><text x="280" y="307">15</text><text x="350" y="307">20</text><text x="420" y="307">25</text><text x="490" y="307">30</text>
<text x="290" y="328">time t (minutes)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="63" y="229">500</text><text x="63" y="164">1000</text><text x="63" y="99">1500</text><text x="63" y="34">2000</text>
<text x="66" y="14">V (litres)</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="140" y1="286" x2="140" y2="294"/><line x1="210" y1="286" x2="210" y2="294"/><line x1="280" y1="286" x2="280" y2="294"/><line x1="350" y1="286" x2="350" y2="294"/><line x1="420" y1="286" x2="420" y2="294"/><line x1="490" y1="286" x2="490" y2="294"/>
<line x1="66" y1="225" x2="74" y2="225"/><line x1="66" y1="160" x2="74" y2="160"/><line x1="66" y1="95" x2="74" y2="95"/><line x1="66" y1="30" x2="74" y2="30"/>
</g>
<polyline points="70,30 98,52.6 126,73.7 154,93.2 182,111.1 210,127.5 238,142.3 266,155.6 294,167.3 322,177.4 350,186 378,193 406,198.5 434,202.4 462,204.7 490,205.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="98" y1="65.1" x2="378" y2="221.1" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="210" y1="127.5" x2="280" y2="127.5" stroke="#1d2b44" stroke-width="1"/>
<line x1="280" y1="127.5" x2="280" y2="166.5" stroke="#1d2b44" stroke-width="1"/>
<circle cx="210" cy="127.5" r="5" fill="#1d2b44"/>
<text x="245" y="121" font-size="12" fill="#1d2b44" text-anchor="middle">5 min</text>
<text x="286" y="152" font-size="12" fill="#1d2b44">−300 L</text>
<text x="150" y="122" font-size="12" fill="#1d2b44" text-anchor="end">(10, 1250)</text>
<text x="300" y="250" font-size="12" fill="#1d2b44">dashed tangent: slope −60 L/min</text>
<text x="380" y="180" font-size="12" fill="#1d2b44">solid curve: V(t)</text>
</svg>
<figcaption>Figure 1. The slope of the tangent line at t = 10 is V′(10) = −300 ÷ 5 = −60 litres per minute. The curve gets less steep as t increases, which is what V″ > 0 means here: the tank keeps emptying, but more slowly. Invented model.</figcaption>
</figure>

## Worked example 2: a medicine in the blood (table)

**Situation.** A patient takes a tablet at time t = 0. The concentration C(t) of the medicine in the blood, in milligrams per litre (mg/L), is measured at a few times t, in hours. (Invented data.)

| t (hours) | 0 | 1 | 2 | 4 | 6 |
|---|---|---|---|---|---|
| C(t) (mg/L) | 0 | 4.2 | 6.0 | 5.1 | 3.4 |

**Questions.** (a) Estimate C′(3) and interpret it. (b) Estimate C′(1.5). (c) What are the units of C″(t)?

**(a)** There is no formula, so estimate the derivative with a difference quotient. Use the two table values closest to t = 3 on either side, t = 2 and t = 4:

1. C′(3) ≈ (C(4) − C(2))/(4 − 2) = (5.1 − 6.0)/2 = −0.9/2 = **−0.45 mg/L per hour**.
2. Units: (mg/L) ÷ hours.

**Interpretation.** At time t = 3 hours, the concentration of the medicine in the blood is decreasing at a rate of approximately 0.45 mg/L per hour.

The word "approximately" matters. A table value gives an estimate of the derivative, not its exact value.

**(b)** The closest values either side of t = 1.5 are at t = 1 and t = 2:

C′(1.5) ≈ (6.0 − 4.2)/(2 − 1) = **1.8 mg/L per hour**. At t = 1.5 hours the concentration is increasing at about 1.8 mg/L per hour. The medicine is still being absorbed.

**(c)** C″ is in (mg/L) per hour per hour, written mg/L per hour². It would describe whether the rate of rise or fall of the concentration is itself speeding up or slowing down.

**Same structure as Example 1.** Replace "litres" with "mg/L" and "minutes" with "hours", and the reasoning is identical: a derivative is a rate, its sign gives the direction, and its units come from the unit rule.

## When the input is not time

A rate does not need a clock. Suppose an (invented) model gives the air temperature T(h), in °C, at altitude h metres above a town, and T′(800) = −0.006.

- Units: °C per metre.
- **Interpretation.** At an altitude of 800 metres, the air temperature is decreasing at a rate of 0.006 °C per metre of height gained.

Here "decreasing" means "decreasing **as altitude increases**", not "decreasing over time". Always say what the input is.

Another non-time example: if C(q) is the cost in dollars of making q chairs and C′(50) = 34, then at a production level of 50 chairs, the cost is increasing at a rate of 34 dollars per chair. Economists call C′(q) the **marginal cost**. It is roughly the extra cost of making the 51st chair. Again, "roughly": the derivative is a rate at one input value, not an exact cost.

## What the second derivative adds

The second derivative is the rate of change of the rate. It tells you whether the change is speeding up or slowing down.

| f′(a) | f″(a) | Meaning at x = a |
|---|---|---|
| positive | positive | Increasing, and increasing faster |
| positive | negative | Increasing, but increasing more slowly |
| negative | positive | Decreasing, but decreasing more slowly |
| negative | negative | Decreasing, and decreasing faster |

"Faster" and "more slowly" refer to the **size** of the rate. In Example 1, V′ went from −90 to −60: the rate rose (V″ > 0), so the size of the rate fell, and the draining slowed.

## Common misconceptions

- **Confusing f(a) with f′(a).** V(10) = 1250 is an amount of water. V′(10) = −60 is how fast that amount is changing. Their units differ, which is a good way to tell them apart.
- **Units upside down.** The derivative of litres with respect to minutes is litres per minute, never minutes per litre.
- **Double negatives.** "Decreasing at a rate of −60 L/min" is wrong. Use "decreasing at a rate of 60 L/min" or "the rate of change is −60 L/min".
- **Leaving out the instant.** "The volume is decreasing at 60 litres per minute" is incomplete. The rate is different at other times, so say "at t = 10 minutes".
- **Treating the derivative as an exact change.** V′(10) = −60 does not mean exactly 60 litres leave in the next minute. The rate changes during that minute.
- **Mixing up average and instantaneous rate.** An average rate uses two values of the function over an interval. A derivative is the rate at one input value.
- **"f″ < 0 means the quantity is decreasing."** No. f″ < 0 means the rate is decreasing. A quantity can rise while f″ < 0; it just rises more slowly.
- **Assuming the input is time.** For T(h) or C(q), the rate is per metre or per item. Name the input in your sentence.
- **Calling a table estimate exact.** From a table you can only estimate the derivative. Say "approximately".

## Where this leads

Topic 4.3 is the general version of the velocity ideas in [Topic 4.2](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/). Next, in [Topic 4.4, Introduction to Related Rates](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/), two or more quantities change at the same time and their rates are linked by an equation. Topic 4.6 uses the derivative to approximate values near a known point, and Units 6 and 8 add up rates to find total change. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-checklist/) to consolidate.
