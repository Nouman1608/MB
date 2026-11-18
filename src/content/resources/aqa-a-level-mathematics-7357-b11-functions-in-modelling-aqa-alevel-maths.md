---
title: "AQA A-Level Mathematics (7357): Functions in modelling"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.11
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b11-functions-in-modelling-aqa-alevel-maths"
description: "AQA A-level Maths 7357 B11 in depth: choosing a function from data, fitting constants, comparing models, modulus models, limitations and refinements."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers content statement **B11** of AQA A-level Mathematics (7357), Section B: Algebra and functions: **"Use of functions in modelling, including consideration of limitations and refinements of the models."** It works alongside the overarching theme OT3 in the specification, which asks you to translate a situation into a model with simplifying assumptions, use it with suitable inputs, interpret its outputs in context, and understand that a model can be refined by considering its outputs and assumptions.

The [partial fractions and functions in modelling study guide](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling/) shows a range of ready-made models (quadratic profit, growth to a limit, piecewise charges, tides). This page concentrates on the decisions **you** make: which family of functions fits a set of data, how to find the constants, how to compare two competing models, and how to write a limitation and a refinement that earn the mark. All contexts and figures here are invented. Recall the ideas with the [B11 revision notes](/resources/aqa-a-level-mathematics-7357-b11-functions-in-modelling-aqa-alevel-maths-revision-notes/) and practise with the [B11 practice questions](/resources/aqa-a-level-mathematics-7357-b11-functions-in-modelling-aqa-alevel-maths-practice/).

## The modelling cycle in exam questions

| Stage | What the question asks | What you write |
|---|---|---|
| Formulate | "Show that the model is ..." or "Find the values of a and b" | The function, with constants found from given data |
| Use | "Find", "Predict", "Calculate" | A value from the model, with units |
| Interpret | "Interpret ... in context", "Explain the significance of" | A sentence about the real situation |
| Evaluate | "Comment on", "State a limitation" | Where and why the model fails |
| Refine | "Suggest a refinement" | A specific change to the function or its assumptions |

Most modelling questions move through all five stages in order. Recognising the stage tells you what kind of answer gets the mark.

## Choosing a function family from data

When values are given at equal steps of the input, look at differences.

| Pattern in the outputs | Suggests |
|---|---|
| Constant first differences | Linear: y = mx + c |
| Constant second differences | Quadratic: y = ax² + bx + c |
| Product x × y roughly constant | Reciprocal: y = k/x |
| A rule that changes at a boundary | Piecewise, possibly modulus |

**Worked example 1.** The height h decimetres of a sunflower t weeks after a measuring period starts is recorded.

| t | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| h | 2.0 | 9.1 | 14.2 | 17.3 | 18.4 |

First differences are 7.1, 5.1, 3.1, 1.1. Second differences are all −2.0, so a quadratic fits exactly. With h = a + bt + ct²:

```
t = 0:  a = 2
second difference = 2c = −2, so c = −1
t = 1:  2 + b − 1 = 9.1, so b = 8.1
h = 2 + 8.1t − t²
```

Now evaluate the model. Its maximum is at t = 4.05 (the vertex of the parabola), after which it predicts the plant **shrinks**, reaching zero height at about t = 8.3. A sunflower does not shrink back into the ground, so the quadratic is only valid for roughly 0 ≤ t ≤ 4. A refinement is a function that levels off at a maximum height instead of falling, or a piecewise model that stays constant once growth stops.

The lesson: a function that fits the data perfectly can still be a poor model outside the data range.

## Finding the constants of a given model

If the form of the model is given, use the data points to write simultaneous equations.

**Worked example 2.** A workshop's average cost per item, £C, when it makes n items is modelled by C = a + b/n. Making 10 items costs £14 each on average; making 50 costs £6 each.

```
a + b/10 = 14
a + b/50 = 6
Subtract:  b(1/10 − 1/50) = 8,  so  b × 4/50 = 8,  b = 100
Then a = 14 − 10 = 4
C = 4 + 100/n
```

**Interpret.** Multiplying by n gives total cost nC = 4n + 100. So the model assumes a fixed cost of £100 (for set-up) plus £4 for each item. That interpretation is what "in context" means.

**Use.** For n = 200, C = 4 + 0.5 = £4.50.

**Limitations.** n must be a positive whole number, though the function is defined for any n ≠ 0. As n grows, C approaches £4, so the model assumes the cost of each extra item never changes: no bulk discounts, overtime or extra machines.

**Refinement.** Let the cost per item fall beyond a certain order size, or add a step in the fixed cost when a second machine is needed.

## Comparing two models

A good comparison uses the data, then the behaviour outside the data.

**Worked example 3.** A town's population P (hundreds) is recorded x years after a survey began: 50, 58, 70, 86 at x = 0, 2, 4, 6. Two models are proposed:

- Model A: P = 50 + 6x (a straight line through the first and last points).
- Model B: P = 50 + 3x + 0.5x².

| x | Data | Model A | Model B |
|---|---|---|---|
| 0 | 50 | 50 | 50 |
| 2 | 58 | 62 | 58 |
| 4 | 70 | 74 | 70 |
| 6 | 86 | 86 | 86 |

Model B matches every point; Model A is out by 4 (about 7% of 58) at two points. Within the data, B is better.

Now extrapolate to x = 20. Model A gives 170 hundred; Model B gives 50 + 60 + 200 = 310 hundred. The two predictions differ by a factor of almost 2. B fits the past better, but nothing in four data points shows the growth will keep accelerating, and space or housing may limit it. A balanced comment: "Model B is more accurate for 0 ≤ x ≤ 6, but both predictions for x = 20 are unreliable because they are extrapolation; B's predicted growth would need checking against more data."

## A modulus model

The modulus of a linear function (from B7) models a distance that decreases and then increases.

**Worked example 4.** A runner on a straight path passes a marker post. Her distance d metres from the post t seconds after a timer starts is modelled by d = |120 − 4t|, for 0 ≤ t ≤ 60.

```
d = 0 when t = 30, so she passes the post after 30 seconds
d = 40: 120 − 4t = ±40, so t = 20 or t = 40
```

So she is within 40 m of the post for 20 seconds. The gradient magnitude, 4, means a speed of 4 m/s. Limitations: constant speed is assumed, including through the point where she passes the post, and the path is assumed to be a straight line through the post. A refinement could use different speeds before and after the post, which gives a V with arms of different steepness.

## Writing limitations and refinements that score

Generic comments such as "it is only a model" or "real life is more complicated" gain nothing. Tie each comment to a feature of the function and to the context.

| Feature of the function | Limitation in context | Matching refinement |
|---|---|---|
| Quadratic has a maximum then falls | Predicts the plant shrinks after week 4 | Use a function that levels off, or restrict the domain |
| Linear grows without limit | Predicts unlimited sales | Add a maximum value or a piecewise cap |
| Continuous input | Items, people or days are whole numbers | State the domain as whole numbers |
| Constants fitted from two points | Sensitive to an error in either point | Use more data points to fit the constants |
| Assumed constant rate | Speed, price or cost per item changes | Allow the rate to change at a stated value |

A strong answer has three parts: **what** the model assumes, **why** that fails here, and **what** to change.

## Common mistakes

- Giving an answer from the model without units or a sentence in context.
- Choosing a family by eye instead of checking differences or products.
- Using only two data points when more are given, then not checking the others.
- Accepting a negative or impossible output, such as a negative height, without comment.
- Calling a model "accurate" because it fits the data, while ignoring how it behaves beyond them.
- Writing a refinement that is just the opposite of the limitation ("make it more realistic").

## Exam technique for AQA command words

- **"Show that"**: substitute the given data into the model and reach the printed constants.
- **"Interpret"**: explain what a constant, gradient or output means for the real situation, with units.
- **"Comment on the reliability"**: say whether the input is inside or outside the data range, and what that means.
- **"State a limitation"**: name one assumption and explain why it fails in this context.
- **"Suggest a refinement"**: name a specific change to the function, the domain or the data used.

## Where to go next

Recall the key moves with the [B11 revision notes](/resources/aqa-a-level-mathematics-7357-b11-functions-in-modelling-aqa-alevel-maths-revision-notes/), then try the [B11 practice questions](/resources/aqa-a-level-mathematics-7357-b11-functions-in-modelling-aqa-alevel-maths-practice/). Straight-line models are also met in [coordinate geometry](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B11, with overarching theme OT3 (mathematical modelling).
