---
resourceId: "mb-ap-calcab-3.3-study-guide"
title: "Differentiating Inverse Functions: Study Guide (Calculus AB 3.3)"
description: "Learn why the slope of an inverse function is the reciprocal of the original slope at the matching point, and use it with formulas, tables and graphs."
course: "calculus-ab"
unit: 3
topics: ["3.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Inverse functions: f⁻¹(f(x)) = x, one-to-one functions and reflection in the line y = x"
  - "The chain rule (Topic 3.1) and implicit differentiation (Topic 3.2)"
  - "Derivatives of polynomials, eˣ and ln x (Unit 2)"
  - "Equation of a tangent line in point-slope form"
prerequisiteResources: ["mb-ap-calcab-3.2-study-guide"]
learningObjectives:
  - "Derive the rule for the derivative of an inverse function from f(g(x)) = x and the chain rule"
  - "Find the derivative of an inverse at a point by first finding the matching input of the original function"
  - "Use values from a formula, a table or a graph to find slopes and tangent lines of an inverse function"
  - "Explain when the derivative of an inverse fails to exist, and check answers with a known inverse or a nearby value"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work every example here without a calculator. A nearby value is used only as a check, never as the method."
related: ["mb-ap-calcab-3.3-revision-notes", "mb-ap-calcab-3.3-practice", "mb-ap-calcab-3.3-checklist"]
next: "mb-ap-calcab-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If g is the inverse of f and f(a) = b, then g′(b) = 1/f′(a), provided f′(a) ≠ 0."
  - "Always find the matching input first: to get g′(b), solve f(a) = b, then use f′ at a, not at b."
  - "As a formula: g′(x) = 1/f′(g(x)). It comes from differentiating f(g(x)) = x with the chain rule."
  - "If f′(a) = 0, the inverse has a vertical tangent at (b, a) and is not differentiable there."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 3.3 is common content, so the same page serves AB and BC students."
  - question: "Do I need to find the formula for the inverse first?"
    answer: "No. Usually you cannot. You only need one matching pair of values, f(a) = b, and the value of f′(a)."
  - question: "Is f⁻¹(x) the same as 1/f(x)?"
    answer: "No. f⁻¹ is the inverse function, which undoes f. The reciprocal 1/f(x) is a different function, so write [f(x)]⁻¹ if you mean the reciprocal."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so derivatives are written in a compact form.

- **f⁻¹** means the inverse function of f. It undoes f: if f(a) = b, then f⁻¹(b) = a.
- **(f⁻¹)′(b)** means "the derivative of the inverse function, evaluated at b".
- **f⁻¹ is not 1/f.** The −1 is a label for "inverse", not a power. If you want the reciprocal, write 1/f(x) or [f(x)]⁻¹.

On the exam the inverse often has its own name. A question may say "g is the inverse of f" or "k is the inverse of h". The ideas are the same whatever the letters.

## The idea: reflecting a graph swaps rise and run

A one-to-one function f has an inverse. The graph of the inverse is the graph of f reflected in the line y = x. Every point (a, b) on f becomes the point (b, a) on f⁻¹.

Now think about a tangent line at (a, b) with slope m. Slope is rise over run. Reflecting in y = x swaps the horizontal and vertical directions, so the rise becomes the run and the run becomes the rise. The reflected tangent line has slope run over rise, which is **1/m**.

<figure>
<svg viewBox="0 0 520 370" role="img" aria-labelledby="inv-title inv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="inv-title">The graphs of f(x) = x²/4 and its inverse g(x) = 2√x, with tangent lines at matching points</title>
<desc id="inv-desc">Both axes run from 0 to 5 with the same scale. A solid curve shows f(x) = x²/4 for x from 0 to 4.4, starting flat at the origin and rising more and more steeply. A long-dashed curve shows g(x) = 2√x for x from 0 to 4.84, starting steep at the origin and levelling off. A dotted line shows y = x, the mirror line. Point A at (3, 2.25) on f has a short tangent line with slope 3/2. Point B at (2.25, 3) on g, the mirror image of A, has a short tangent line with slope 2/3. The two tangent lines are reflections of each other in y = x.</desc>
<rect x="0" y="0" width="520" height="370" fill="#ffffff"/>
<line x1="50" y1="330" x2="370" y2="330" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="50" y1="345" x2="50" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="110" y="347">1</text><text x="170" y="347">2</text><text x="230" y="347">3</text><text x="290" y="347">4</text><text x="350" y="347">5</text>
<text x="375" y="334">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="43" y="274">1</text><text x="43" y="214">2</text><text x="43" y="154">3</text><text x="43" y="94">4</text><text x="43" y="34">5</text>
<text x="43" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="110" y1="326" x2="110" y2="334"/><line x1="170" y1="326" x2="170" y2="334"/><line x1="230" y1="326" x2="230" y2="334"/><line x1="290" y1="326" x2="290" y2="334"/><line x1="350" y1="326" x2="350" y2="334"/>
<line x1="46" y1="270" x2="54" y2="270"/><line x1="46" y1="210" x2="54" y2="210"/><line x1="46" y1="150" x2="54" y2="150"/><line x1="46" y1="90" x2="54" y2="90"/><line x1="46" y1="30" x2="54" y2="30"/>
</g>
<line x1="50" y1="330" x2="350" y2="30" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4"/>
<polyline points="50,330 62,329.4 74,327.6 86,324.6 98,320.4 110,315 122,308.4 134,300.6 146,291.6 158,281.4 170,270 182,257.4 194,243.6 206,228.6 218,212.4 230,195 242,176.4 254,156.6 266,135.6 278,113.4 290,90 302,65.4 314,39.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="50,330 53,303.2 56,292.1 62,276.3 71,259 80,245.1 95,226.1 110,210 134,188 158,169 185,150 212,132.8 242,115.3 272,99.2 302,84.1 340.4,66" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 5"/>
<line x1="182" y1="267" x2="278" y2="123" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="113" y1="198" x2="257" y2="102" stroke="#1d2b44" stroke-width="1.2"/>
<circle cx="230" cy="195" r="5" fill="#1d2b44"/>
<circle cx="185" cy="150" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="238" y="212" font-size="12" fill="#1d2b44">A (3, 2.25)</text>
<text x="132" y="140" font-size="12" fill="#1d2b44">B (2.25, 3)</text>
<g font-size="12" fill="#1d2b44">
<text x="385" y="60">Key</text>
<line x1="385" y1="80" x2="420" y2="80" stroke="#1d2b44" stroke-width="2.5"/><text x="428" y="84">f(x) = x²/4</text>
<line x1="385" y1="104" x2="420" y2="104" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 5"/><text x="428" y="108">g(x) = 2√x</text>
<line x1="385" y1="128" x2="420" y2="128" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4"/><text x="428" y="132">y = x</text>
<text x="385" y="168">Slope at A: f′(3) = 3/2</text>
<text x="385" y="188">Slope at B: g′(2.25) = 2/3</text>
<text x="385" y="216">B is A reflected</text>
<text x="385" y="232">in y = x, and the</text>
<text x="385" y="248">slopes are reciprocals.</text>
</g>
</svg>
<figcaption>Figure 1. f(x) = x²/4 for x ≥ 0 (solid) and its inverse g(x) = 2√x (long dashes) are mirror images in y = x (dotted). The tangent at A (3, 2.25) has slope 3/2. The tangent at the mirror point B (2.25, 3) has slope 2/3. The curves are told apart by line style and labels, not colour. Both axes use the same scale, so the reflection is accurate.</figcaption>
</figure>

Notice two things in Figure 1.

1. The slopes are reciprocals **at matching points**. The slope of g at x = 2.25 is linked to the slope of f at x = 3, not at x = 2.25.
2. A steep part of f becomes a shallow part of g, and a shallow part of f becomes a steep part of g. Near the origin f is almost flat, so g is almost vertical.

## Deriving the rule with the chain rule

The picture suggests the rule. The chain rule proves it.

Let g be the inverse of f. By the definition of an inverse,

**f(g(x)) = x** for every x in the domain of g.

Differentiate both sides with respect to x. The left side is a composition, so use the chain rule (Topic 3.1):

**f′(g(x)) · g′(x) = 1**

Divide by f′(g(x)), which is allowed only when it is not 0:

> **Rule.** If g is the inverse of f, then g′(x) = 1/f′(g(x)), provided f′(g(x)) ≠ 0.

At a single point the rule is easier to use in this form:

> **Point form.** If f(a) = b and f′(a) ≠ 0, then g′(b) = 1/f′(a).

**The implicit route.** You can reach the same rule with Topic 3.2. Write y = g(x). Then f(y) = x. Differentiate implicitly: f′(y) · dy/dx = 1, so dy/dx = 1/f′(y). Since y = g(x), this is the same rule. In Leibniz notation, **dx/dy = 1/(dy/dx)** at matching points.

**A three-step method** for "find the derivative of the inverse at x = b":

1. **Find the matching input.** Solve f(a) = b for a. (Usually by inspection or from a table.)
2. **Find f′(a).** Differentiate f, then substitute a.
3. **Take the reciprocal.** g′(b) = 1/f′(a).

The most common error is skipping step 1 and calculating 1/f′(b). The input b belongs to g, not to f.

## Checking the rule on functions you already know

The skill this topic practises is confirming that an answer is correct. A good habit is to test a new rule on cases where you already know the answer.

**Exponential and logarithm.** f(x) = eˣ and g(x) = ln x are inverses. The rule gives

g′(x) = 1/f′(g(x)) = 1/e^(ln x) = 1/x.

That matches the derivative of ln x from Unit 2.

**Square and square root.** f(x) = x² for x ≥ 0 and g(x) = √x are inverses. The rule gives

g′(x) = 1/f′(g(x)) = 1/(2√x), for x > 0.

That matches the power rule applied to x^(1/2).

When a question gives you an inverse you can write down, you can always check your answer this way. When you cannot write the inverse, check with a nearby value instead (see Worked example 1).

## When the inverse is not differentiable

The rule has a condition: f′(a) ≠ 0. Two things must be true before you use it.

- **f must be one-to-one** on the interval you are working on, so that the inverse exists. A function whose derivative keeps one sign (always positive or always negative) on an interval is one-to-one there. If a function is not one-to-one, the question will restrict its domain (for example "x ≥ 0").
- **f′(a) must not be 0.** If f′(a) = 0, the tangent to f at (a, b) is horizontal. Its reflection is vertical, so the inverse has a **vertical tangent** at (b, a) and no derivative there.

Example: f(x) = x³ is one-to-one with inverse g(x) = ∛x. Since f′(0) = 0, the cube-root graph has a vertical tangent at the origin, and g′(0) does not exist. Away from 0 the rule works: f(2) = 8 and f′(2) = 12, so g′(8) = 1/12. The power rule gives the same: g′(x) = (1/3)x^(−2/3), and at x = 8 this is (1/3)(1/4) = 1/12.

## Worked example 1: a formula with no algebraic inverse

**Question.** Let f(x) = x³ + 2x − 5, and let g be the inverse of f.
(a) Explain why g exists. (b) Find g′(7). (c) Write an equation for the tangent line to the graph of g at x = 7.

1. **Inverse exists.** f′(x) = 3x² + 2. Since 3x² ≥ 0, f′(x) ≥ 2 > 0 for all x. So f is always increasing, which makes it one-to-one, and g exists.
2. **Matching input.** You need a with f(a) = 7. Try small integers: f(2) = 8 + 4 − 5 = 7. So a = 2, which means g(7) = 2. (f is one-to-one, so this is the only solution.)
3. **Derivative of f at the matching input.** f′(2) = 3(4) + 2 = 14.
4. **Reciprocal.** g′(7) = 1/f′(2) = **1/14**.
5. **Tangent line.** The point on g is (7, 2) and the slope is 1/14:
   **y = 2 + (1/14)(x − 7)**

**Check with a nearby value.** f(2.01) = 7.140601, so the point (7.140601, 2.01) lies on g. The slope from (7, 2) to that point is 0.01/0.140601 ≈ 0.0711. That is close to 1/14 ≈ 0.0714, so the answer is reasonable.

**Check the sign and size.** f is steep at x = 2 (slope 14), so g should be shallow at x = 7. A small positive slope makes sense.

**Why not solve for g?** Solving y = x³ + 2x − 5 for x needs the cubic formula. You do not need it. One matching pair of values is enough.

## Worked example 2: an inverse from a table

**Question.** The function r is differentiable and increasing. Let s be the inverse of r. Selected values are shown.

| x | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| r(x) | −4 | −1 | 2 | 6 | 11 |
| r′(x) | 4 | 2 | 3.5 | 4.5 | 6 |

(a) Find s′(2). (b) Find s′(6). (c) Write the tangent line to s at x = −1. (d) Let H(x) = s(3x). Find H′(2).

**(a)** Look for 2 in the **r(x) row**, not the x row. r(1) = 2, so s(2) = 1. Then s′(2) = 1/r′(1) = 1/3.5 = **2/7**.

A tempting wrong answer is 1/r′(2) = 2/9. That uses the slope of r at x = 2, which is the wrong point.

**(b)** r(2) = 6, so s(6) = 2. Then s′(6) = 1/r′(2) = 1/4.5 = **2/9**.

**(c)** r(0) = −1, so s(−1) = 0 and the point is (−1, 0). The slope is s′(−1) = 1/r′(0) = **1/2**. The tangent line is

**y = (1/2)(x + 1)**

**(d)** H is a composition, so use the chain rule: H′(x) = s′(3x) · 3. At x = 2, H′(2) = 3 · s′(6) = 3 · (2/9) = **2/3**.

**Check.** Every r′ value is positive, so every s′ value should be positive. All four answers are positive. Also, a large r′ should give a small s′: r′(2) = 4.5 > r′(1) = 3.5, and s′(6) = 2/9 < s′(2) = 2/7, as expected.

**How to read a table for an inverse.** To evaluate s at a number, find that number among the outputs of r. Then read the input above it. Use that input for r′.

## Common misconceptions

- **Using the wrong input.** Writing g′(b) = 1/f′(b). The derivative of f must be taken at a, the value with f(a) = b. Draw an arrow from b in the output row to a in the input row before you calculate.
- **Treating f⁻¹ as 1/f.** The derivative of 1/f(x) is −f′(x)/[f(x)]², which is a different thing. The inverse function is not the reciprocal.
- **Forgetting the reciprocal.** The slope of the inverse at (b, a) is 1/f′(a), not f′(a).
- **Changing the sign.** Reflection keeps the sign of a slope. If f is decreasing with f′(a) = −4, then the inverse has slope −1/4 at the matching point, not +1/4.
- **Ignoring f′(a) = 0.** A horizontal tangent on f means a vertical tangent on the inverse. There is no derivative there, not a derivative of 0.
- **Believing you must find the inverse formula.** You need only the matching pair of values and f′ at the right input.
- **Forgetting the chain rule in a composition.** If H(x) = g(3x), then H′(x) = 3g′(3x). The factor 3 is easy to drop.

## Where this leads

Topic 3.4 uses exactly this rule (or the implicit route) to find the derivatives of the inverse trigonometric functions, such as arcsin x and arctan x. Continue with [Differentiating Inverse Trigonometric Functions](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-study-guide/). Later, inverse functions return in Unit 6, where antiderivatives undo derivatives. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-checklist/) to consolidate.
