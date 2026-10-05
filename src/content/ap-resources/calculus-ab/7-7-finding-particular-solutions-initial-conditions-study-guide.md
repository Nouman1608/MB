---
resourceId: "mb-ap-calcab-7.7-study-guide"
title: "Finding Particular Solutions Using Initial Conditions and Separation of Variables: Study Guide (Calculus AB 7.7)"
description: "Learn how an initial condition picks one solution from a family, how to find the constant and the sign, how to state the domain, and how to write a solution as an integral."
course: "calculus-ab"
unit: 7
topics: ["7.7"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "General solutions by separation of variables (Topic 7.6)"
  - "Slope fields and solution curves through a given point (Topic 7.4)"
  - "The Fundamental Theorem of Calculus for accumulation functions (Topic 6.4)"
  - "Domains of square roots, logarithms and rational functions"
prerequisiteResources: ["mb-ap-calcab-7.6-study-guide"]
learningObjectives:
  - "Explain the difference between a general solution (a family) and a particular solution (one member)"
  - "Use an initial condition to find the constant of integration in a separable differential equation"
  - "Use the initial condition to choose the correct sign after a square root or an absolute value"
  - "State the largest open interval, containing the initial value, on which a particular solution is valid"
  - "Write the particular solution of dy/dx = f(x) through (a, y₀) as y = y₀ + ∫ (a to x) f(t) dt, and use it to find values"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 to 3 are done without a calculator. The integral-form example needs a calculator to evaluate a definite integral; give decimals to 3 places."
related: ["mb-ap-calcab-7.7-revision-notes", "mb-ap-calcab-7.7-practice", "mb-ap-calcab-7.7-checklist"]
next: "mb-ap-calcab-7.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A general solution is a family of curves. An initial condition y(a) = y₀ picks out the one curve through (a, y₀): the particular solution."
  - "Substitute the initial condition straight after integrating, while the constant is still added on. Then solve for y."
  - "The initial condition also decides the sign: after y² = … or |y| = …, keep the sign that matches y₀."
  - "A particular solution lives on one interval containing a. Stop at any x where the formula or the differential equation breaks down."
  - "For dy/dx = f(x), the particular solution through (a, y₀) is y = y₀ + ∫ (a to x) f(t) dt."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 7.7 is common content, so the same page serves AB and BC students."
  - question: "Should I find C before or after solving for y?"
    answer: "Either gives the same answer if done correctly. Finding C straight after integrating is usually simpler and avoids losing a sign or a constant during rearranging."
  - question: "Is the constant always equal to y₀?"
    answer: "No. C = y₀ only when the integrated expressions happen to make everything else zero at the initial point. Always substitute and solve for C."
  - question: "Why does the domain matter?"
    answer: "A solution must be a differentiable function on an interval that contains the initial point. A formula may also give values on the far side of an asymptote, but that piece is not connected to the initial point, so it is not part of the particular solution."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer. **y(a) = y₀** means "y equals y₀ when x = a"; this is called an **initial condition**. **∫ (a to x) f(t) dt** is the definite integral of f from a to x. ∛ is the cube root.

## From a family to one curve

In Topic 7.6 you found **general solutions**. Each one contains an arbitrary constant, so it describes infinitely many functions. In a slope field they appear as a whole family of curves.

A real problem usually gives one extra fact: a point the solution passes through. For example, "y = 1 when x = 0". This is an initial condition. Only **one** member of the family passes through that point. That member is the **particular solution**.

So a general solution may describe infinitely many functions, but there is only one particular solution through a given point. For example, in Topic 7.6's Figure 1, each point (a, b) lies on exactly one curve y = A e^(−x²): the one with A = b e^(a²).

## The method

1. **Separate** the variables.
2. **Antidifferentiate** both sides and add **one** constant C.
3. **Substitute the initial condition now** and solve for C.
4. **Solve for y.** If a square root or an absolute value appears, use the initial condition to choose the sign.
5. **State the domain**: the largest open interval containing the initial x-value on which the solution is defined and satisfies the differential equation.
6. **Check**: the solution passes through the initial point, and its derivative matches the equation.

Steps 3 and 4 can be swapped, but substituting early keeps the algebra short. One rule is fixed: you must have the constant before you can use the initial condition. A solution without C has nothing to adjust.

## Worked example 1: choosing the sign of a square root

**Question.** Find the particular solution of dy/dx = 4x³/y with y(1) = −3.

1. **Separate:** y dy = 4x³ dx.
2. **Antidifferentiate:** y²/2 = x⁴ + C.
3. **Use the initial condition** x = 1, y = −3: (−3)²/2 = 1⁴ + C, so 9/2 = 1 + C and **C = 7/2**.
4. **Solve for y.** y²/2 = x⁴ + 7/2, so y² = 2x⁴ + 7 and y = ±√(2x⁴ + 7). The initial value y(1) = −3 is negative, so take the **negative** root:
   **y = −√(2x⁴ + 7)**
5. **Domain.** 2x⁴ + 7 ≥ 7 > 0 for every x, so the root is always defined and y is never 0 (the equation divides by y). The solution is valid for **all real x**.

**Check.** At x = 1: −√(2 + 7) = −3. Correct. Derivative: dy/dx = −8x³/(2√(2x⁴ + 7)) = −4x³/√(2x⁴ + 7) = 4x³/y, because y = −√(2x⁴ + 7).

**Why not the positive root?** y = +√(2x⁴ + 7) gives y(1) = +3. It solves the equation but passes through (1, 3), not (1, −3).

**Alternative order.** You can solve for y first: y² = 2x⁴ + K, so y = ±√(2x⁴ + K). Then −√(2 + K) = −3 gives K = 7. Same answer. Notice that K = 2C here, so the constant changes its value when you rearrange. That is why it is safer to find it once, at one stage, and not mix the two routes.

## Worked example 2: absolute values and a negative starting value

**Question.** Find the particular solution of dy/dx = (2x − 1)y with y(1) = −5.

1. **Separate:** (1/y) dy = (2x − 1) dx.
2. **Antidifferentiate:** ln|y| = x² − x + C.
3. **Use the initial condition:** ln|−5| = 1 − 1 + C, so **C = ln 5**.
4. **Solve for y:** |y| = e^(x² − x + ln 5) = e^(ln 5) · e^(x² − x) = 5e^(x² − x).
   So y = 5e^(x² − x) or y = −5e^(x² − x). The solution starts at a negative value. Since |y| = 5e^(x² − x) is never 0 and y is continuous, y can never change sign. So y stays negative:
   **y = −5e^(x² − x)**
5. **Domain:** all real x.

**Check.** y(1) = −5e⁰ = −5. Derivative: −5e^(x² − x) · (2x − 1) = (2x − 1)y. Correct.

**A common wrong route.** Writing y = e^(x² − x) + C and then using y(1) = −5 gives C = −6, so y = e^(x² − x) − 6. This passes through (1, −5) but is **not** a solution: its derivative is (2x − 1)e^(x² − x), not (2x − 1)(e^(x² − x) − 6). The point is right; the curve is wrong.

## Domain restrictions

A solution to a differential equation is a **differentiable function on an interval**. Formulas can break that in three ways:

- **Division by zero**, which creates a vertical asymptote.
- **A square root of a negative number**, or a root that reaches 0 where the equation then divides by y.
- **A logarithm of zero or a negative number.**

The particular solution is the piece of the formula that contains the initial point and stays unbroken. Any other piece, beyond a break, is not part of it.

## Worked example 3: a solution with a limited domain

**Question.** Find the particular solution of dy/dx = 2xy² with y(0) = 1, and state its domain.

1. **Separate:** (1/y²) dy = 2x dx.
2. **Antidifferentiate:** −1/y = x² + C. (Not a logarithm: 1/y² is a power of y.)
3. **Use the initial condition:** −1/1 = 0 + C, so **C = −1**.
4. **Solve for y:** −1/y = x² − 1, so 1/y = 1 − x² and
   **y = 1/(1 − x²)**
5. **Domain.** The formula breaks at x = 1 and x = −1, where 1 − x² = 0. The initial value x = 0 lies between them. So the particular solution is valid on **−1 < x < 1**.

**Check.** y(0) = 1. Derivative: d/dx (1 − x²)⁻¹ = 2x/(1 − x²)² = 2x · y². Correct.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="dom77-title dom77-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dom77-title">Graph of y = 1/(1 − x²), showing that only the middle branch is the particular solution through (0, 1)</title>
<desc id="dom77-desc">Axes with x from −2.5 to 2.5 and y from −3 to 4. Two dashed vertical lines mark asymptotes at x = −1 and x = 1. Between them a solid U-shaped curve has its lowest point at (0, 1), marked with a filled dot, and rises steeply towards both asymptotes. Outside the asymptotes, two thin dashed curves lie below the x-axis: they come up from far below near the asymptotes and approach the x-axis from below as x moves away. These outer pieces are labelled as not part of the solution.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="50" y1="179" x2="480" y2="179" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="295" x2="260" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="100" y1="175" x2="100" y2="183"/><line x1="420" y1="175" x2="420" y2="183"/>
<line x1="256" y1="30" x2="264" y2="30"/><line x1="256" y1="67" x2="264" y2="67"/><line x1="256" y1="104" x2="264" y2="104"/><line x1="256" y1="141" x2="264" y2="141"/><line x1="256" y1="216" x2="264" y2="216"/><line x1="256" y1="253" x2="264" y2="253"/>
</g>
<line x1="180" y1="20" x2="180" y2="295" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 5"/>
<line x1="340" y1="20" x2="340" y2="295" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="197">−2</text><text x="172" y="197">−1</text><text x="348" y="197">1</text><text x="420" y="197">2</text><text x="490" y="183">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="251" y="34">4</text><text x="251" y="71">3</text><text x="251" y="108">2</text><text x="251" y="145">1</text><text x="251" y="220">−1</text><text x="251" y="257">−2</text><text x="255" y="16">y</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="3" points="191,30 201,96 211,118 220,129 230,135 240,139 250,141 260,141 270,141 280,139 290,135 300,129 309,118 319,96 329,30"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 4" points="352,290 364,232 376,212 388,202 404,195 418,191 432,189 446,187 460,186"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 4" points="60,186 74,187 88,189 102,191 116,195 132,202 144,212 156,232 168,290"/>
<circle cx="260" cy="141" r="5" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="270" y="160">(0, 1)</text>
<text x="350" y="50">asymptote x = 1</text>
<text x="56" y="50">asymptote x = −1</text>
<text x="370" y="262">dashed: not part of</text>
<text x="370" y="278">this solution</text>
<text x="60" y="318">Solid curve: the particular solution, valid for −1 &lt; x &lt; 1</text>
</g>
</svg>
<figcaption>Figure 1. The formula y = 1/(1 − x²) has three pieces. Only the solid middle piece contains the initial point (0, 1), so only it is the particular solution, with domain −1 &lt; x &lt; 1. The dashed outer pieces satisfy the same equation but cannot be reached from (0, 1) without crossing an asymptote. Axes are unitless.</figcaption>
</figure>

## Particular solutions in context

Exam questions often use other letters, such as t for time. The method is the same, and the answer needs units.

An invented plant grows so that its height H centimetres, t weeks after planting, satisfies dH/dt = 6/H, with H(0) = 4.

1. **Separate and integrate:** H dH = 6 dt, so H²/2 = 6t + C.
2. **Use H(0) = 4:** 16/2 = 0 + C, so C = 8 and H² = 12t + 16.
3. **Choose the sign:** heights are positive, and H(0) = 4 > 0, so H = √(12t + 16).
4. **Use it:** H(4) = √(48 + 16) = √64 = **8 cm** after 4 weeks.

The formula works mathematically for t > −4/3, but the model only describes the plant from planting onwards, so it is used for t ≥ 0.

## The integral form of a particular solution

When the right side depends on x only, dy/dx = f(x), there is a direct formula. The particular solution through (a, y₀) is

**y = F(x) = y₀ + ∫ (a to x) f(t) dt**

**Why it works.** At x = a the integral runs from a to a, so it is 0, and F(a) = y₀. By the Fundamental Theorem of Calculus (Topic 6.4), F′(x) = f(x) when f is continuous. So F passes through the right point and has the right derivative.

**Check with a familiar case.** dy/dx = 3x², y(2) = 5. The formula gives y = 5 + ∫ (2 to x) 3t² dt = 5 + (x³ − 8) = x³ − 3. Separating gives the same: y = x³ + C, 5 = 8 + C, C = −3.

**When it really helps.** Some functions have no antiderivative you can write with familiar functions. Take dy/dx = 1/(1 + x⁴) with y(0) = 2. The particular solution is

**y = 2 + ∫ (0 to x) 1/(1 + t⁴) dt**

To find y(1), evaluate the definite integral with a calculator: ∫ (0 to 1) 1/(1 + t⁴) dt ≈ 0.867, so **y(1) ≈ 2.867**. You never needed a formula for the antiderivative.

Two details matter. The lower limit is the **x-value** of the initial point, a. The number added outside is the **y-value**, y₀. Mixing them up is a common error.

## Common misconceptions

- **Putting the initial condition into the differential equation.** Substituting (a, y₀) into dy/dx only gives the slope at that point. It does not find C. Substitute into the integrated equation.
- **Assuming C = y₀.** That is only true in special cases. Always solve for C.
- **Adding C after rearranging,** as in y = e^(x² − x) + C. The curve then passes through the point but does not satisfy the equation.
- **Ignoring the sign.** After y² = … or |y| = …, the initial value decides between + and −. Both signs together are not one function.
- **Giving a domain with a gap,** such as "all x except ±1". A particular solution lives on one interval, the one containing the initial point.
- **Using the wrong limits in the integral form.** The lower limit is a, not y₀ and not 0 (unless a = 0).
- **Forgetting y₀ in the integral form.** y = ∫ (a to x) f(t) dt passes through (a, 0), not (a, y₀).

## Where this leads

You can now go from a differential equation and one point to a single function with a stated domain. In [Topic 7.8, Exponential Models with Differential Equations](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/), you will apply exactly this method to dy/dt = ky and use it to model growth and decay. Calculus BC students will meet logistic models in Topic 7.9. For the general-solution step, revisit [Topic 7.6](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-checklist/) to consolidate.
