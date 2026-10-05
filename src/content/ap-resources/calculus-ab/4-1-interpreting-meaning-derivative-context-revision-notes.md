---
resourceId: "mb-ap-calcab-4.1-revision-notes"
title: "Interpreting the Meaning of the Derivative in Context: Revision Notes (Calculus AB 4.1)"
description: "One-page recap of derivatives in context: what f′(a) means, how to find its units, the four-part interpretation sentence and the mistakes that cost marks."
course: "calculus-ab"
unit: 4
topics: ["4.1"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-4.1-study-guide"]
learningObjectives:
  - "Recall what a derivative value means in context and how to find its units"
  - "Write a complete interpretation sentence without the common slips"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-4.1-study-guide", "mb-ap-calcab-4.1-practice", "mb-ap-calcab-4.1-checklist"]
next: "mb-ap-calcab-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f′(a) is the rate of change of f per unit of input, at the input value a."
  - "Units of f′ = units of f ÷ units of the input."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: f′(x), dy/dx and df/dx all name the same derivative. dV/dt is the rate of change of V with respect to t.

## Recap

- f′(a) is the **instantaneous rate of change** of f with respect to its input, at the input value a.
- **Sign:** f′(a) > 0 means f is increasing there; f′(a) < 0 means decreasing; f′(a) = 0 means momentarily not changing.
- **Units:** (units of f) ÷ (units of input). Second derivative: (units of f) ÷ (units of input)².
- The input is often time, but it can be anything: price, distance, altitude, quantity.
- From a table, estimate f′(a) by an average rate of change over the closest interval around a.

## Key relationships

| Quantity | Meaning | Example units (W in litres, t in minutes) |
|---|---|---|
| W(a) | The amount at input a | litres |
| (W(b) − W(a))/(b − a) | Average rate over [a, b] | litres per minute |
| W′(a) | Rate at the single input a | litres per minute |
| W″(a) | How fast the rate W′ is changing at a | litres per minute per minute |
| W′(a) × Δt | Approximate change in W over a short step Δt | litres |

**Four-part interpretation sentence:** quantity + input value (with units) + increasing/decreasing + rate with units.
*"At t = 10 minutes, the amount of water in the tank is increasing at a rate of 3 litres per minute."*

## Assumptions behind the method

- The function is differentiable at the input value you are interpreting.
- A table only gives an *estimate* of the derivative. Use the closest data points on either side.
- "Change ≈ rate × step" works only for small steps, because the rate itself may change.

## Mistakes to avoid

1. **Writing f(a) when you mean f′(a)** (an amount instead of a rate).
2. **Units that are a product**, or no units at all.
3. **"Decreasing at a rate of −5"**: a double negative. Drop the minus sign after "decreasing".
4. **Claiming f′(a) is the exact change** over the next unit of input.
5. **Leaving out the input value** ("at t = 10 minutes").
6. **Mentioning time** when the input is something else, such as price.

## Quick self-check

1. h(t) is the height of a plant in centimetres, t in days, and h′(10) = 0.8. Interpret, then give the rate in millimetres per day. *(On day 10 the plant is growing at 0.8 cm per day; that is 8 mm per day.)*
2. P(x) is profit in dollars from selling x items. What are the units of P′(x)? Of P″(x)? *(Dollars per item; dollars per item per item.)*
3. W(t) is the water in a tank in litres, t in hours. The tank holds 500 litres at t = 4 and W′(4) = −20. Is the tank empty soon after t = 4? *(No. It is losing water at 20 litres per hour at that instant, but it still holds about 500 litres.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-practice/).
