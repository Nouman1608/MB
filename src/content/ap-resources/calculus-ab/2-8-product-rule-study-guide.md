---
resourceId: "mb-ap-calcab-2.8-study-guide"
title: "The Product Rule: Study Guide (Calculus AB 2.8)"
description: "Learn the product rule for derivatives, why it works, how to use it with formulas and tables of values, and why the derivative of a product is not the product of the derivatives."
course: "calculus-ab"
unit: 2
topics: ["2.8"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative as a limit, and differentiability implies continuity (Topics 2.1 to 2.4)"
  - "Power, sum, difference and constant multiple rules (Topics 2.5 and 2.6)"
  - "Derivatives of sin x, cos x, eˣ and ln x (Topic 2.7)"
learningObjectives:
  - "State the product rule and apply it to products of two differentiable functions"
  - "Explain why the derivative of a product is not the product of the derivatives"
  - "Use the product rule with tables of values as well as with formulas"
  - "Decide when the product rule is needed and when a simpler rule or expanding is enough"
  - "Use the product rule to find tangent lines and horizontal tangents"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work without a calculator. Angles are in radians. Leave answers in exact form unless a question asks for a decimal check."
related: ["mb-ap-calcab-2.8-revision-notes", "mb-ap-calcab-2.8-practice", "mb-ap-calcab-2.8-checklist"]
next: "mb-ap-calcab-2.8-practice"
prerequisiteResources: ["mb-ap-calcab-2.7-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If f and g are differentiable, (f · g)′ = f′ · g + f · g′."
  - "The derivative of a product is NOT the product of the derivatives: (f · g)′ ≠ f′ · g′."
  - "Each term differentiates one factor and leaves the other unchanged."
  - "With a table of values, substitute f(a), f′(a), g(a) and g′(a) straight into the rule."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.8 is common content, so the same page serves AB and BC students."
  - question: "Does the order of the two terms matter?"
    answer: "No. f′g + fg′ and fg′ + f′g are the same, because addition and multiplication can be done in any order. Pick one habit and keep it."
  - question: "Do I need the product rule for 5 sin x?"
    answer: "No. 5 is a constant, so the constant multiple rule gives 5 cos x directly. The product rule gives the same answer, because the derivative of 5 is 0, but it is extra work."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer. **f′(x)** and **d/dx f(x)** both mean "the derivative of f with respect to x". **(f · g)(x)** means f(x) · g(x). Limits are written **lim (h → 0)**.

## The rule

You can now differentiate x³, sin x and eˣ on their own. But what about x³ sin x, or eˣ ln x? These are **products** of two functions, and you need a new rule.

> **Product rule.** If f and g are differentiable at x, then f · g is differentiable at x and
>
> **(f · g)′(x) = f′(x) · g(x) + f(x) · g′(x)**

In words: **differentiate the first factor and keep the second, then add the first factor times the derivative of the second.** Each term changes exactly one factor.

A quick example: for y = x³ sin x, take f(x) = x³ and g(x) = sin x. Then f′(x) = 3x² and g′(x) = cos x, so

**dy/dx = 3x² sin x + x³ cos x**

## Why the derivative of a product is not f′ · g′

It is tempting to guess that (f · g)′ = f′ · g′. That guess is wrong. Test it on a product you can also expand.

Let f(x) = x² + 1 and g(x) = x³ − x. Expanding first:

**f(x) · g(x) = x⁵ − x³ + x³ − x = x⁵ − x**, so the derivative is **5x⁴ − 1**.

The product rule gives the same answer:

2x(x³ − x) + (x² + 1)(3x² − 1) = 2x⁴ − 2x² + 3x⁴ − x² + 3x² − 1 = **5x⁴ − 1** ✓

The wrong guess gives f′ · g′ = 2x(3x² − 1) = 6x³ − 2x. That is a different function. At x = 2, the true derivative is 79, but the guess gives 44.

## Why the rule works

### The area picture

Think of f(x) and g(x) as the side lengths of a rectangle, so the product f · g is its area. Now let x increase a little. The width grows by Δf and the height by Δg.

<figure>
<svg viewBox="0 0 520 350" role="img" aria-labelledby="prod-title prod-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="prod-title">A growing rectangle shows where the two terms of the product rule come from</title>
<desc id="prod-desc">A large rectangle with width f and height g is labelled "original area f · g". To its right is a tall thin strip of width Δf and height g, labelled "g · Δf". Above it is a long thin strip of width f and height Δg, labelled "f · Δg". In the top right corner is a tiny square of width Δf and height Δg, labelled "Δf · Δg, very small". Brackets along the bottom and left edges mark the lengths f, Δf, g and Δg.</desc>
<rect x="0" y="0" width="520" height="350" fill="#ffffff"/>
<rect x="80" y="100" width="300" height="190" fill="#eef1f6" stroke="#1d2b44" stroke-width="2"/>
<rect x="380" y="100" width="60" height="190" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 3"/>
<rect x="80" y="50" width="300" height="50" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 3"/>
<rect x="380" y="50" width="60" height="50" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 3"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="230" y="200">original area</text><text x="230" y="220" font-weight="600">f · g</text>
<text x="230" y="81" font-weight="600">f · Δg</text>
<text x="410" y="200" font-weight="600">g · Δf</text>
<text x="410" y="80" font-size="11">Δf · Δg</text>
</g>
<text x="505" y="38" font-size="11" fill="#1d2b44" text-anchor="end">very small corner</text>
<line x1="455" y1="42" x2="425" y2="60" stroke="#1d2b44" stroke-width="1"/>
<g stroke="#1d2b44" stroke-width="1.2">
<line x1="80" y1="310" x2="380" y2="310"/><line x1="80" y1="304" x2="80" y2="316"/><line x1="380" y1="304" x2="380" y2="316"/>
<line x1="380" y1="310" x2="440" y2="310"/><line x1="440" y1="304" x2="440" y2="316"/>
<line x1="60" y1="100" x2="60" y2="290"/><line x1="54" y1="100" x2="66" y2="100"/><line x1="54" y1="290" x2="66" y2="290"/>
<line x1="60" y1="50" x2="60" y2="100"/><line x1="54" y1="50" x2="66" y2="50"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="230" y="332">width f</text><text x="410" y="332">Δf</text>
<text x="38" y="200">g</text><text x="38" y="80">Δg</text>
</g>
</svg>
<figcaption>Figure 1. When the sides f and g grow by Δf and Δg, the area grows by three pieces: a strip g · Δf (right), a strip f · Δg (top) and a tiny corner Δf · Δg. Dividing by Δx and letting Δx → 0, the two strips give g · f′ and f · g′, while the corner vanishes. Shading only separates regions; every region is labelled.</figcaption>
</figure>

The extra area is made of three pieces:

**change in area = g · Δf + f · Δg + Δf · Δg**

A numerical illustration: if f = 3 and g = 5 grow to 3.2 and 5.1, the area changes from 15 to 16.32, a change of 1.32. The pieces are g · Δf = 5(0.2) = 1.0, f · Δg = 3(0.1) = 0.3, and the corner Δf · Δg = 0.02. The corner is tiny compared with the strips.

Divide by the small change in x. The strips become g · (Δf/Δx) and f · (Δg/Δx), which tend to g · f′ and f · g′. The corner becomes Δf · (Δg/Δx), which tends to 0 · g′ = 0. What is left is the product rule.

### The limit proof

The same idea in symbols uses one trick: subtract and add f(x + h) · g(x) in the numerator.

[f(x + h)g(x + h) − f(x)g(x)]/h
= [f(x + h)g(x + h) − f(x + h)g(x) + f(x + h)g(x) − f(x)g(x)]/h
= **f(x + h) · [g(x + h) − g(x)]/h + g(x) · [f(x + h) − f(x)]/h**

As h → 0, the difference quotients tend to g′(x) and f′(x). Also f(x + h) → f(x), because f is differentiable at x and so it is continuous there (Topic 2.4). The limit is f(x)g′(x) + g(x)f′(x), the product rule.

## When to use it, and when not to

| Situation | Best approach |
|---|---|
| Constant times a function, e.g. 5 sin x | Constant multiple rule: 5 cos x |
| Product of two polynomials, e.g. (x² + 1)(x³ − x) | Product rule, or expand first; both are valid |
| Two different kinds of function, e.g. x² eˣ, eˣ cos x, x ln x | Product rule (no way to expand) |
| A function whose input is not plain x, e.g. sin(3x) | Chain rule (Topic 3.1), not the product rule |
| A quotient, e.g. sin x / x | Quotient rule (Topic 2.9) |

The product rule includes the constant multiple rule as a special case. If f(x) = c, then f′ = 0 and (c · g)′ = 0 · g + c · g′ = c · g′.

**Three factors.** Use the rule twice. Group u · v · w as (u · v) · w:

**(u · v · w)′ = u′ · v · w + u · v′ · w + u · v · w′**

Each term differentiates one factor and leaves the other two alone.

## Worked example 1: a product with eˣ and a tangent line

**Question.** Let h(x) = (x³ − 2x)eˣ. (a) Find h′(x). (b) Find the tangent line to the graph of h at x = 0. (c) Show that the graph of h has a horizontal tangent at x = 1.

**(a)**

1. **Name the factors.** f(x) = x³ − 2x and g(x) = eˣ.
2. **Differentiate each.** f′(x) = 3x² − 2 and g′(x) = eˣ.
3. **Apply the rule.** h′(x) = (3x² − 2)eˣ + (x³ − 2x)eˣ.
4. **Tidy up.** Factor out eˣ: **h′(x) = eˣ(x³ + 3x² − 2x − 2)**.

**(b)**

1. h(0) = (0 − 0)e⁰ = 0, so the point is (0, 0).
2. h′(0) = e⁰(0 + 0 − 0 − 2) = −2.
3. The tangent line is **y = −2x**.

**Check.** [h(0.001) − h(0)]/0.001 ≈ −2.002, close to −2.

**(c)** h′(1) = e¹(1 + 3 − 2 − 2) = e · 0 = **0**. A slope of 0 means a horizontal tangent. The point is (1, h(1)) = (1, −e).

**Tip.** Factoring out eˣ helps because eˣ is never 0. So h′(x) = 0 exactly when the polynomial factor is 0.

## Worked example 2: the product rule with a table

Exam questions often give values instead of formulas. The rule works the same way: substitute the numbers.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 2 | 3 | −1 | 4 | 5 |

**Question.** (a) Let P(x) = f(x) · g(x). Find P′(2). (b) Let Q(x) = x² · f(x). Find Q′(2).

**(a)**

1. Write the rule at x = 2: P′(2) = f′(2) · g(2) + f(2) · g′(2).
2. Substitute: P′(2) = (−1)(4) + (3)(5) = −4 + 15 = **11**.

The wrong rule f′(2) · g′(2) would give (−1)(5) = −5. Also note that P(2) = 3 × 4 = 12 is the value of the product, not its slope.

**(b)**

1. Here the factors are x² and f(x). d/dx (x²) = 2x.
2. Rule: Q′(x) = 2x · f(x) + x² · f′(x).
3. Substitute x = 2: Q′(2) = 2(2)(3) + (2²)(−1) = 12 − 4 = **8**.

**Interpretation.** P′(2) = 11 means that at x = 2 the product f · g is increasing at a rate of 11 units per unit of x.

## Worked example 3: finding a horizontal tangent

**Question.** Let y = x ln x for x > 0. Find the point where the tangent line is horizontal.

1. **Factors:** f(x) = x, g(x) = ln x. Derivatives: f′(x) = 1, g′(x) = 1/x.
2. **Rule:** dy/dx = 1 · ln x + x · (1/x) = **ln x + 1**.
3. **Set the slope to 0:** ln x + 1 = 0, so ln x = −1 and **x = 1/e** ≈ 0.368.
4. **Height:** y = (1/e) · ln(1/e) = (1/e)(−1) = **−1/e**.

**Answer.** The tangent is horizontal at **(1/e, −1/e)**.

**Check the simplification.** x · (1/x) = 1 for every x > 0. Students sometimes write x · (1/x) = 0 or leave it unsimplified and miss the clean answer.

## Common misconceptions

- **"(f · g)′ = f′ · g′."** The most common error. Each term of the true rule differentiates only one factor.
- **Dropping a term.** Writing only f′ · g, as if g were a constant. This happens with products like x² sin x, where sin x is treated as fixed.
- **Sign slips inside the rule.** For x⁴ cos x the second term is x⁴ · (−sin x). Keep the minus sign from d/dx cos x = −sin x.
- **Subtracting instead of adding.** The product rule has a plus sign. The minus sign belongs to the quotient rule in Topic 2.9.
- **Using the product rule on a constant multiple, then making an error.** For 7eˣ, just write 7eˣ. Extra steps add chances to slip.
- **Confusing the value with the slope in a table question.** f(a) · g(a) is the value of the product. The slope needs f′(a) and g′(a) as well.
- **Using the product rule for a composition.** sin(x²) is not sin times x². It needs the chain rule (Topic 3.1).
- **Not simplifying.** Factor out a common factor such as eˣ before solving h′(x) = 0.

## Where this leads

The product rule is the first rule that combines two functions by multiplication. Next, [Topic 2.9, the quotient rule](/advanced-course-resources/calculus-ab/2-9-quotient-rule-study-guide/), handles division, and Topic 2.10 uses it for tan x, sec x, cot x and csc x. In Unit 3 the chain rule handles compositions, and many later problems need the product rule and chain rule together. For the four derivatives you combined here, see [Topic 2.7](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-8-product-rule-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-8-product-rule-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-8-product-rule-checklist/) to consolidate.
