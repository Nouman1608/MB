---
resourceId: "mb-ap-calcab-3.1-study-guide"
title: "The Chain Rule: Study Guide (Calculus AB 3.1)"
description: "Learn to spot a function inside a function, split it into outer and inner parts, and differentiate it with the chain rule, from formulas, tables and rates with units."
course: "calculus-ab"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The power rule and the constant, sum and constant multiple rules (Topics 2.5 and 2.6)"
  - "Derivatives of sin x, cos x, eˣ and ln x (Topic 2.7)"
  - "The product and quotient rules (Topics 2.8 and 2.9)"
  - "Derivatives of tan x, cot x, sec x and csc x (Topic 2.10)"
  - "Composite function notation f(g(x))"
prerequisiteResources: ["mb-ap-calcab-2.10-study-guide"]
learningObjectives:
  - "Recognise when an expression is a composite function and name its outer and inner parts"
  - "Differentiate a composite of differentiable functions using the chain rule in function notation and in Leibniz notation"
  - "Apply the chain rule more than once for functions with several layers, and together with the product and quotient rules"
  - "Find the derivative of a composite at a point from a table of values"
  - "Use units to explain why rates of change multiply along a chain"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator. Angles are in radians. A difference quotient on a calculator is a check, not a method."
related: ["mb-ap-calcab-3.1-revision-notes", "mb-ap-calcab-3.1-practice", "mb-ap-calcab-3.1-checklist"]
next: "mb-ap-calcab-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If h(x) = f(g(x)), then h′(x) = f′(g(x)) · g′(x): differentiate the outer function, keep the inside unchanged, then multiply by the derivative of the inside."
  - "In Leibniz notation, dy/dx = (dy/du) · (du/dx), where u is the inner function. Rates along a chain multiply, and their units cancel like fractions."
  - "The most common error is forgetting the factor g′(x). Say \"times the derivative of the inside\" every time."
  - "With several layers, work from the outside in and multiply one factor for each layer."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 3.1 is common content, so the same page serves AB and BC students. The chain rule is used in almost every later unit of both courses."
  - question: "How do I know which part is the inside?"
    answer: "Ask what you would calculate first if you were given a number for x. That first step is the inner function. The last step you would do is the outer function."
  - question: "Do I need the chain rule for sin(5x)? It looks simple."
    answer: "Yes. 5x is an inner function, so the derivative is cos(5x) · 5 = 5 cos(5x). Only when the inside is exactly x is the extra factor 1."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so derivatives are written in a compact form:

- **f′(x)** is the derivative of f with respect to x.
- **dy/dx** is the derivative of y with respect to x. **d/dx [ … ]** means "the derivative of the bracket with respect to x".
- **f(g(x))** is a composite function: first apply g to x, then apply f to the result. It is also written (f ∘ g)(x).
- **sin³x** means (sin x)³. **e^(1 − x²)** means e raised to the power 1 − x².

## Why a new rule is needed

Take y = (3x + 1)². You could expand first: y = 9x² + 6x + 1, so dy/dx = 18x + 6 = **6(3x + 1)**.

Now try a shortcut that only uses the power rule: "bring down the 2 and lower the power", giving 2(3x + 1). That is wrong. It is too small by a factor of **3**.

Where does the 3 come from? The bracket 3x + 1 changes 3 times as fast as x. The square then changes 2(3x + 1) times as fast as the bracket. So y changes 2(3x + 1) × 3 times as fast as x. The rates **multiply**.

Expanding worked here, but it fails for (3x + 1)⁵⁰ (too long) and for √(3x + 1) or sin(3x + 1) (there is nothing to expand). The chain rule handles all of these in one step.

## Outer and inner functions

A **composite function** is a function applied to the output of another function. To use the chain rule you must first split it into two parts:

- the **inner function** u = g(x): what you would calculate first if someone gave you a value of x;
- the **outer function** f(u): what you do to that result last.

| Function h(x) | Outer f(u) | Inner u = g(x) | h′(x) |
|---|---|---|---|
| √(1 + 5x) | √u | 1 + 5x | 5/(2√(1 + 5x)) |
| e^(1 − x²) | eᵘ | 1 − x² | −2x e^(1 − x²) |
| cos(πx) | cos u | πx | −π sin(πx) |
| ln(sin x), for sin x > 0 | ln u | sin x | cos x / sin x = cot x |
| tan³x | u³ | tan x | 3 tan²x sec²x |
| 1/(x² + 1) | u⁻¹ | x² + 1 | −2x/(x² + 1)² |

Watch the last two rows closely. **tan³x** is a power of tan x, so the outer function is "cube" and the inner is tan x. **1/(x² + 1)** needs no quotient rule: write it as (x² + 1)⁻¹ and use the chain rule.

## The chain rule

> **Chain rule.** If g is differentiable at x and f is differentiable at g(x), then h(x) = f(g(x)) is differentiable at x and
> **h′(x) = f′(g(x)) · g′(x)**

Read it in three moves:

1. **Differentiate the outer function**, f′.
2. **Keep the inside exactly as it was**: evaluate f′ at g(x), not at x.
3. **Multiply by the derivative of the inside**, g′(x).

The phrase to say every time is: "derivative of the outside, inside left alone, **times the derivative of the inside**."

### Leibniz form and units

Write y = f(u) and u = g(x). Then

**dy/dx = (dy/du) · (du/dx)**

This looks like cancelling du, and that is a good memory aid (it is not a proof). It also explains units. Suppose, in a fictional greenhouse model, relative humidity H (in percentage points) depends on temperature T (in °C), and T depends on time t (in hours). At one moment:

- dH/dT = −1.5 percentage points per °C,
- dT/dt = 2 °C per hour.

Then **dH/dt = (dH/dT) · (dT/dt) = (−1.5)(2) = −3 percentage points per hour**. The units show why: (points/°C) × (°C/hour) = points/hour.

One detail matters: dH/dT must be the rate **at the temperature the greenhouse has at that moment**. That is the Leibniz version of "evaluate f′ at g(x)".

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="chain-title chain-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="chain-title">Flow diagram of the chain rule: x feeds into g to give u, u feeds into f to give y</title>
<desc id="chain-desc">Three labelled boxes in a row. The left box is x (time t in hours). An arrow labelled g goes to the middle box, u = g(x) (temperature T in degrees Celsius); under this arrow is the rate du/dx = g′(x), for example 2 degrees Celsius per hour. A second arrow labelled f goes to the right box, y = f(u) (humidity H in percentage points); under it is the rate dy/du = f′(u), evaluated at u = g(x), for example minus 1.5 points per degree. A long dashed arrow underneath runs from x straight to y and is labelled dy/dx equals dy/du times du/dx, for example minus 1.5 times 2 equals minus 3 points per hour.</desc>
<rect x="0" y="0" width="560" height="270" fill="#ffffff"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="40" width="110" height="64" rx="8"/>
<rect x="225" y="40" width="110" height="64" rx="8"/>
<rect x="430" y="40" width="110" height="64" rx="8"/>
</g>
<g font-size="15" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="75" y="70">x</text>
<text x="280" y="70">u = g(x)</text>
<text x="485" y="70">y = f(u)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="75" y="90">time t (h)</text>
<text x="280" y="90">temperature T (°C)</text>
<text x="485" y="90">humidity H (points)</text>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="132" y1="72" x2="215" y2="72"/>
<polyline points="207,66 217,72 207,78"/>
<line x1="337" y1="72" x2="420" y2="72"/>
<polyline points="412,66 422,72 412,78"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle" font-style="italic">
<text x="175" y="62">g</text>
<text x="380" y="62">f</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="175" y="128">du/dx = g′(x)</text>
<text x="175" y="144">e.g. 2 °C per h</text>
<text x="380" y="128">dy/du = f′(u), at u = g(x)</text>
<text x="380" y="144">e.g. −1.5 points per °C</text>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none" stroke-dasharray="6 4">
<polyline points="75,106 75,200 485,200 485,112"/>
</g>
<polyline points="479,120 485,108 491,120" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="280" y="222" font-weight="bold">dy/dx = (dy/du) · (du/dx) = f′(g(x)) · g′(x)</text>
<text x="280" y="242">e.g. (−1.5)(2) = −3 points per hour; units: (points/°C)(°C/h) = points/h</text>
</g>
</svg>
<figcaption>Figure 1. The chain rule as a chain of rates. Each arrow carries a rate of change. To get from x straight to y (dashed path), multiply the rates along the way. The example numbers come from the fictional greenhouse model in the text.</figcaption>
</figure>

## More than two layers

Some functions have three or more layers. Work **from the outside in**, and write one factor for each layer.

Example: y = [ln(2x + 1)]³. The layers are "cube", then "ln", then "2x + 1".

- Cube: 3[ln(2x + 1)]²
- times ln: 1/(2x + 1)
- times 2x + 1: 2

So **dy/dx = 3[ln(2x + 1)]² · 1/(2x + 1) · 2 = 6[ln(2x + 1)]²/(2x + 1)**.

Each factor's inside is still left alone. Stop when the innermost function has been differentiated; for 2x + 1 that factor is just 2.

## Worked example 1: a square root and a tangent line

**Question.** Let f(x) = √(x² + 9). Find f′(x), then the equation of the tangent line to the graph of f at x = 4.

1. **Identify the layers.** Outer: √u = u^(1/2). Inner: u = x² + 9.
2. **Differentiate the outer function, inside unchanged.** d/du [u^(1/2)] = (1/2)u^(−1/2), so this factor is 1/(2√(x² + 9)).
3. **Multiply by the derivative of the inside.** d/dx [x² + 9] = 2x.
   **f′(x) = 2x/(2√(x² + 9)) = x/√(x² + 9)**
4. **Evaluate at x = 4.** f(4) = √(16 + 9) = √25 = 5, and f′(4) = 4/5.
5. **Write the tangent line** through (4, 5) with slope 4/5:
   **y = 5 + (4/5)(x − 4)**, which is y = (4/5)x + 9/5.

**Check.** (f(4.001) − f(4))/0.001 ≈ 0.80004, which is close to 4/5 = 0.8.

**Common slip.** Writing f′(x) = 1/(2√(x² + 9)) forgets the factor 2x. That answer would give slope 1/10 at x = 4, which is far too small.

## Worked example 2: the chain rule from a table

Questions often give only values, not formulas. The table shows values of two differentiable functions f and g.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 1 | 3 | −2 | 2 | 5 |
| 2 | 4 | 6 | 3 | −1 |
| 3 | 1 | 7 | 1 | 4 |

**(a)** h(x) = f(g(x)). Find h′(1).

1. Chain rule: h′(1) = f′(g(1)) · g′(1).
2. **Inside first:** g(1) = 2. So the outer derivative is f′(2) = 6.
3. Derivative of the inside: g′(1) = 5.
4. **h′(1) = 6 × 5 = 30.**

Two tempting errors: f′(1) · g′(1) = (−2)(5) = −10 evaluates f′ at the wrong input. And f′(g′(1)) = f′(5) is not even in the table, which is a strong hint that it is the wrong expression.

**(b)** k(x) = g(f(x)). Find k′(3).

The order is reversed, so the roles swap: k′(3) = g′(f(3)) · f′(3) = g′(1) · 7 = 5 × 7 = **35**.

**(c)** p(x) = [g(x)]². Find p′(2).

Outer: u², inner: g(x). p′(2) = 2g(2) · g′(2) = 2(3)(−1) = **−6**. Writing 2g′(2) = −2 confuses "the derivative of the square" with "the square of the derivative".

**Interpretation.** In (a), h′(1) = 30 means that near x = 1, h(x) increases about 30 units for each unit increase in x.

## Worked example 3: chain rule inside a product

**Question.** Let f(x) = x√(4 − x²) for −2 < x < 2. Find f′(x) and the x-values where the tangent line is horizontal.

1. **Classify.** f is a **product**: x times √(4 − x²). The second factor is a composite. So use the product rule, and the chain rule inside it.
2. **Product rule:** f′(x) = (1) · √(4 − x²) + x · d/dx [√(4 − x²)].
3. **Chain rule for the second factor.** Outer √u, inner 4 − x²:
   d/dx [√(4 − x²)] = 1/(2√(4 − x²)) · (−2x) = −x/√(4 − x²).
4. **Combine:** f′(x) = √(4 − x²) − x²/√(4 − x²).
5. **Write over one denominator:** f′(x) = ((4 − x²) − x²)/√(4 − x²) = **(4 − 2x²)/√(4 − x²)**.
6. **Horizontal tangent where f′(x) = 0.** The denominator is positive on −2 < x < 2, so set the top to 0: 4 − 2x² = 0, so x² = 2 and **x = √2 or x = −√2**.

**Check.** f(√2) = √2 · √2 = 2 and f(−√2) = −2, so the horizontal tangents are at (√2, 2) and (−√2, −2). As a spot check, f′(1) = 2/√3 ≈ 1.15 is positive, which fits a graph that is still rising before x = √2 ≈ 1.41.

**Order of operations.** Decide the **last** operation first. Here the last step in computing f(x) is "multiply", so the product rule is the outer structure and the chain rule sits inside it.

## Common misconceptions

- **Forgetting the derivative of the inside.** d/dx [sin(5x)] is 5 cos(5x), not cos(5x). This is the most frequent error in the whole topic.
- **Changing the inside when differentiating the outside.** d/dx [cos(x²)] is −sin(x²) · 2x, not −sin(2x) or −sin(2x) · 2x. The inside stays x² in the outer factor.
- **Evaluating f′ at x instead of at g(x).** In tables, h′(a) = f′(g(a)) · g′(a). Find g(a) first.
- **Missing a hidden composite.** sin²x, e^(4x), ln(3x) and 1/(x² + 1) are all composites. Ask "is the input exactly x?"
- **Stopping too early, or too late.** With e^(1 − x²), the derivative of the outer eᵘ is eᵘ itself, kept as e^(1 − x²). Multiply by −2x once and stop. Do not differentiate e^(1 − x²) a second time.
- **Mixing up sin²x and sin(x²).** d/dx [sin²x] = 2 sin x cos x; d/dx [sin(x²)] = 2x cos(x²). Different inner functions, different answers.
- **Using the product rule on a composite.** (3x + 1)⁵ is not a product of two different functions; it is a power of one inner function.
- **Cancelling du as if it proves the rule.** dy/du · du/dx is a helpful pattern, but dy/dx is not a fraction. Use the pattern to remember the rule and track units.

## Where this leads

The chain rule is behind almost everything in the rest of Unit 3. Topic 3.2, [implicit differentiation](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/), uses it every time you differentiate a term containing y. Topics 3.3 and 3.4 use it to find derivatives of inverse functions, and Unit 4 uses it for related rates. In Unit 6 you will reverse it when you integrate by substitution. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/3-1-chain-rule-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/3-1-chain-rule-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/3-1-chain-rule-checklist/) to consolidate.
