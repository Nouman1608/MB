---
resourceId: "mb-ap-calcab-2.9-study-guide"
title: "The Quotient Rule: Study Guide (Calculus AB 2.9)"
description: "Learn the quotient rule for differentiating one function divided by another: where it comes from, why order matters, when to simplify first, and how to use it with tables."
course: "calculus-ab"
unit: 2
topics: ["2.9"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The power rule, constant multiple, sum and difference rules (Topics 2.5 and 2.6)"
  - "Derivatives of sin x, cos x, eˣ and ln x (Topic 2.7)"
  - "The product rule (Topic 2.8)"
  - "Simplifying algebraic fractions and negative exponents"
prerequisiteResources: ["mb-ap-calcab-2.8-study-guide"]
learningObjectives:
  - "Differentiate a quotient of two differentiable functions with the quotient rule, keeping the terms in the correct order"
  - "Explain where the quotient rule comes from, using the product rule"
  - "State where the derivative of a quotient exists (the denominator must not be zero)"
  - "Decide when rewriting or simplifying first is quicker than the quotient rule"
  - "Use the quotient rule with values from a table and to find a tangent line"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator. Leave answers as exact fractions."
related: ["mb-ap-calcab-2.9-revision-notes", "mb-ap-calcab-2.9-practice", "mb-ap-calcab-2.9-checklist"]
next: "mb-ap-calcab-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If q(x) = f(x)/g(x), then q′(x) = [g(x)f′(x) − f(x)g′(x)] / [g(x)]², wherever g(x) ≠ 0."
  - "Order matters: the term with f′ comes first. Swapping the two terms flips the sign of the answer."
  - "The derivative of a quotient is not the quotient of the derivatives: (f/g)′ is not f′/g′."
  - "If the numerator or the denominator is a constant, or the fraction simplifies, rewrite first and use the power rule."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.9 is common content, so the same page serves AB and BC students."
  - question: "Do I have to use the quotient rule for every fraction?"
    answer: "No. Any correct method earns credit. If the bottom is a constant, or the top is a constant, or the fraction simplifies, rewriting first is usually quicker and safer."
  - question: "Should I simplify my answer after using the quotient rule?"
    answer: "Simplify enough to evaluate it or to find where it equals zero. A long tidy-up is not required, and every extra line is a chance to slip."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so fractions are written on one line. Brackets matter:

**[g(x)f′(x) − f(x)g′(x)] / [g(x)]²** means the whole numerator in square brackets divided by the square of g(x).

On paper, write it as a stacked fraction with a long bar. f′(x) is read "f prime of x" and means the derivative of f. Angles are in radians throughout.

## Why you need a new rule

In Topic 2.8 you saw that the derivative of a product is not the product of the derivatives. The same warning applies to division. Try a quotient whose derivative you already know:

**q(x) = x²/x**, which equals x for every x ≠ 0, so q′(x) = 1.

If you divide the derivatives instead, you get 2x/1 = 2x. That is wrong for every x except x = 1/2. So **(f/g)′ is not f′/g′**. You need a rule that uses f, g and both derivatives.

## The rule

Let f and g be differentiable at x, and suppose g(x) ≠ 0. Then the quotient q(x) = f(x)/g(x) is differentiable at x, and

> **Quotient rule.** q′(x) = [g(x)f′(x) − f(x)g′(x)] / [g(x)]²

In words: **bottom times derivative of top, minus top times derivative of bottom, all over bottom squared**. Some students remember it as "low d-high minus high d-low, over low squared".

Three features to notice:

| Feature | What it means for you |
|---|---|
| A **minus** sign in the numerator | Order matters. Start with the bottom function g, multiplied by f′. Swapping the terms gives the negative of the correct answer. |
| The denominator is **[g(x)]²** | Square the original bottom function. Do not differentiate it. |
| The condition **g(x) ≠ 0** | The quotient, and its derivative, exist only where the bottom is nonzero. |

### Where the rule comes from

You can build the quotient rule from the product rule. Suppose q = f/g is differentiable. Then

**f(x) = q(x) · g(x)**

Differentiate both sides with the product rule:

**f′(x) = q′(x)g(x) + q(x)g′(x)**

Solve for q′(x), then replace q(x) by f(x)/g(x):

**q′(x) = [f′(x) − (f(x)/g(x))g′(x)] / g(x)**

Multiply top and bottom by g(x):

**q′(x) = [g(x)f′(x) − f(x)g′(x)] / [g(x)]²**

That is the quotient rule. (This argument assumes q is differentiable. A proof from the limit definition shows that it is, whenever f and g are differentiable and g(x) ≠ 0. You do not need that proof for this course.)

### A special case: the reciprocal rule

If the top is the constant 1, then f′ = 0 and the rule shrinks to

**d/dx [1/g(x)] = −g′(x) / [g(x)]²**

For example, d/dx [1/(x² + 1)] = −2x/(x² + 1)².

## When not to use the quotient rule

The quotient rule always works, but it is not always the best tool. Check the fraction first.

| What you see | Better approach | Example |
|---|---|---|
| A constant on the bottom | Treat it as a constant multiple | (x² + 3)/5 = (1/5)(x² + 3), so the derivative is 2x/5 |
| A constant on the top and a power of x on the bottom | Rewrite with a negative exponent | 7/x³ = 7x⁻³, so the derivative is −21x⁻⁴ = −21/x⁴ |
| A single-term bottom that divides each top term | Split and simplify, then use the power rule | See below |
| Anything else, such as (2x + 5)/(x² + 3) or (sin x)/x | Use the quotient rule | See Worked example 1 |

**Simplify first, an example.** Let k(x) = (x³ − 4√x)/x for x > 0. Divide each term by x:

**k(x) = x² − 4x^(−1/2)**

Now the power rule gives

**k′(x) = 2x + 2x^(−3/2)**

So k′(4) = 8 + 2/8 = 8 + 1/4 = **33/4**. The quotient rule gives the same answer, but with more algebra to simplify.

**Trig, exponential and log quotients** usually call for the quotient rule. For example,

**d/dx [(sin x)/x] = [x cos x − sin x] / x²**, for x ≠ 0.

## Worked example 1: a derivative and a tangent line

**Question.** Let h(x) = (2x + 5)/(x² + 3). Find h′(x). Then find the equation of the line tangent to the graph of h at x = 1.

1. **Name the parts.** Top: f(x) = 2x + 5, so f′(x) = 2. Bottom: g(x) = x² + 3, so g′(x) = 2x. The bottom is never 0, so h is differentiable for every x.
2. **Write the rule with the bottom first.**
   **h′(x) = [(x² + 3)(2) − (2x + 5)(2x)] / (x² + 3)²**
3. **Expand the numerator carefully.** (x² + 3)(2) = 2x² + 6. (2x + 5)(2x) = 4x² + 10x. Subtract the whole second product:
   2x² + 6 − 4x² − 10x = −2x² − 10x + 6.
4. **State the derivative.** Leave the denominator factored:
   **h′(x) = (−2x² − 10x + 6) / (x² + 3)²**
5. **Evaluate at x = 1.** h′(1) = (−2 − 10 + 6)/(1 + 3)² = −6/16 = **−3/8**.
6. **Find the point.** h(1) = (2 + 5)/(1 + 3) = 7/4.
7. **Write the tangent line** in point-slope form:
   **y = 7/4 − (3/8)(x − 1)**

**Answer.** h′(x) = (−2x² − 10x + 6)/(x² + 3)², and the tangent line is y = 7/4 − (3/8)(x − 1), which is the same as y = 17/8 − (3/8)x.

**Check.** A symmetric difference quotient with a small step, [h(1.001) − h(0.999)]/0.002, gives −0.375 to six decimal places, and −3/8 = −0.375.

**Interpretation.** At x = 1 the graph is falling. h′(x) = 0 where −2x² − 10x + 6 = 0, that is x² + 5x − 3 = 0, so x = (−5 ± √37)/2. The value x = (−5 + √37)/2 ≈ 0.54 gives the high point in Figure 1.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="qr-title qr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="qr-title">Graph of h(x) = (2x + 5)/(x² + 3) with its tangent line at x = 1</title>
<desc id="qr-desc">The curve is drawn for x from −4 to 5. It starts slightly below the x-axis at x = −4, crosses the x-axis at x = −2.5, passes through (0, 5/3), rises to a high point of about 1.85 near x = 0.54, then falls slowly towards the x-axis, reaching about 0.54 at x = 5. A short dashed horizontal segment marks the flat tangent at the high point. A solid point marks (1, 1.75). A straight dashed-and-dotted tangent line passes through that point with slope −3/8, sloping gently downwards from left to right.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="50" y1="230" x2="505" y2="230" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="255.6" y1="290" x2="255.6" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="247">−4</text><text x="108.9" y="247">−3</text><text x="157.8" y="247">−2</text><text x="206.7" y="247">−1</text><text x="304.4" y="247">1</text><text x="353.3" y="247">2</text><text x="402.2" y="247">3</text><text x="451.1" y="247">4</text><text x="500" y="247">5</text>
<text x="510" y="226">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="249" y="184">0.5</text><text x="249" y="134">1</text><text x="249" y="84">1.5</text><text x="249" y="34">2</text>
<text x="249" y="18">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="226" x2="60" y2="234"/><line x1="108.9" y1="226" x2="108.9" y2="234"/><line x1="157.8" y1="226" x2="157.8" y2="234"/><line x1="206.7" y1="226" x2="206.7" y2="234"/><line x1="304.4" y1="226" x2="304.4" y2="234"/><line x1="353.3" y1="226" x2="353.3" y2="234"/><line x1="402.2" y1="226" x2="402.2" y2="234"/><line x1="451.1" y1="226" x2="451.1" y2="234"/><line x1="500" y1="226" x2="500" y2="234"/>
<line x1="251.6" y1="180" x2="259.6" y2="180"/><line x1="251.6" y1="130" x2="259.6" y2="130"/><line x1="251.6" y1="80" x2="259.6" y2="80"/><line x1="251.6" y1="30" x2="259.6" y2="30"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,245.8 69.8,244.9 79.6,243.8 89.3,242.4 99.1,240.6 108.9,238.3 118.7,235.5 128.4,232.0 138.2,227.7 148.0,222.3 157.8,215.7 167.6,207.6 177.3,197.6 187.1,185.6 196.9,171.4 206.7,155.0 216.4,136.6 226.2,116.9 236.0,97.1 245.8,78.7 255.6,63.3 260.4,57.2 265.3,52.4 270.2,48.8 275.1,46.5 280.0,45.4 284.9,45.5 289.8,46.6 294.7,48.7 299.6,51.5 304.4,55.0 314.2,63.3 324.0,72.7 333.8,82.5 343.6,92.2 353.3,101.4 363.1,110.1 372.9,118.1 382.7,125.5 392.4,132.2 402.2,138.3 412.0,143.9 421.8,149.0 431.6,153.6 441.3,157.8 451.1,161.6 460.9,165.1 470.7,168.3 480.4,171.2 490.2,173.9 500.0,176.4"/>
<line x1="274.9" y1="32.5" x2="475.6" y2="186.3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 4 2 4"/>
<line x1="257" y1="45.3" x2="307" y2="45.3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="304.4" cy="55" r="5" fill="#1d2b44"/>
<text x="314" y="40" font-size="12" fill="#1d2b44">flat tangent near x ≈ 0.54</text>
<text x="318" y="72" font-size="12" fill="#1d2b44">(1, 7/4)</text>
<text x="380" y="100" font-size="12" fill="#1d2b44">tangent line, slope −3/8</text>
<text x="330" y="200" font-size="12" fill="#1d2b44">y = h(x)</text>
</svg>
<figcaption>Figure 1. The graph of h(x) = (2x + 5)/(x² + 3). The solid point is (1, 7/4). The dash-dot line is the tangent there, with slope h′(1) = −3/8, so the curve is falling at x = 1. The short dashed segment marks where h′(x) = 0, near x ≈ 0.54. Axes are unitless.</figcaption>
</figure>

The graph agrees with the algebra: the curve rises while h′(x) > 0, levels off where h′(x) = 0 and falls where h′(x) < 0.

## Worked example 2: using values from a table

Many exam questions give values of functions instead of formulas. You then use the rule with numbers.

**Question.** Functions f and g are differentiable, with

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 3 | 4 | −2 | 2 | 5 |

(a) Let p(x) = f(x)/g(x). Find p′(3).
(b) Let r(x) = g(x)/f(x). Find r′(3).

**(a)**

1. **Check the condition.** g(3) = 2, which is not 0, so the quotient rule applies at x = 3.
2. **Write the rule, then substitute.** p′(3) = [g(3)f′(3) − f(3)g′(3)] / [g(3)]².
3. **Calculate.** p′(3) = [(2)(−2) − (4)(5)] / 2² = (−4 − 20)/4 = −24/4 = **−6**.

**(b)**

1. **The top and bottom have swapped.** Now the top is g and the bottom is f. Check: f(3) = 4, which is not 0.
2. **Write the rule with the new bottom first.** r′(3) = [f(3)g′(3) − g(3)f′(3)] / [f(3)]².
3. **Calculate.** r′(3) = [(4)(5) − (2)(−2)] / 4² = (20 + 4)/16 = 24/16 = **3/2**.

**What the wrong methods give.**

| Error | Result for p′(3) |
|---|---|
| Dividing the derivatives: f′(3)/g′(3) | −2/5 |
| Swapping the order in the numerator | +6 |
| Forgetting to square the bottom | −12 |

**Interpretation.** p is decreasing at x = 3 (p′(3) < 0), while r is increasing there (r′(3) > 0). That makes sense: r = 1/p, so when p goes down, r goes up.

**Check.** The reciprocal rule links the answers. r = 1/p, so r′(3) = −p′(3)/[p(3)]². Here p(3) = 4/2 = 2, so r′(3) = −(−6)/4 = 3/2. The two methods agree.

## Common misconceptions

- **"(f/g)′ = f′/g′."** Dividing the derivatives is wrong. The example x²/x shows this: the true derivative is 1, but f′/g′ gives 2x.
- **Swapping the order in the numerator.** g f′ − f g′ and f g′ − g f′ differ by a minus sign. Always start with the bottom function times the derivative of the top.
- **Differentiating the denominator.** The bottom of the answer is [g(x)]², the original bottom squared. It is not g′(x), and not [g′(x)]².
- **Losing a bracket.** In [(x² + 3)(2) − (2x + 5)(2x)], the minus sign applies to the whole second product. Write the products in brackets, then expand.
- **Expanding the denominator.** Leave (x² + 3)² as it is. Expanding wastes time and hides useful factors.
- **Using the quotient rule when the bottom is a constant.** It is not wrong, but (x² + 3)/5 is just a constant multiple. Rewriting is quicker.
- **Ignoring where the bottom is zero.** The derivative of f/g does not exist where g(x) = 0, because the function itself is undefined there.
- **"Simplifying" a quotient by cancelling terms.** In (x² + 3)/(x + 3) you cannot cancel the 3s. Only whole factors cancel, as in Topic 1.6.

## Where this leads

The quotient rule completes your set of rules for combining functions: sum, difference, constant multiple, product and quotient. Next, in [Topic 2.10](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-study-guide/), you rewrite tan x as (sin x)/(cos x), and similar identities, and use the quotient rule to find the derivatives of tangent, cotangent, secant and cosecant. In Unit 3 you will combine the quotient rule with the chain rule. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap). If the product rule still feels shaky, review [Topic 2.8](/advanced-course-resources/calculus-ab/2-8-product-rule-study-guide/) first.

Try the [practice questions](/advanced-course-resources/calculus-ab/2-9-quotient-rule-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-9-quotient-rule-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-9-quotient-rule-checklist/) to consolidate.
