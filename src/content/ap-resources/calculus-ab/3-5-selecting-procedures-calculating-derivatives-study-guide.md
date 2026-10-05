---
resourceId: "mb-ap-calcab-3.5-study-guide"
title: "Selecting Procedures for Calculating Derivatives: Study Guide (Calculus AB 3.5)"
description: "Learn how to choose the right derivative rule: rewrite first, find the last operation, then apply power, product, quotient, chain, implicit or inverse rules in order."
course: "calculus-ab"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Power, constant multiple, sum and difference rules (Topics 2.5 and 2.6)"
  - "Derivatives of sin x, cos x, eˣ, ln x and the other trig functions (Topics 2.7 and 2.10)"
  - "Product and quotient rules (Topics 2.8 and 2.9)"
  - "Chain rule, implicit differentiation and derivatives of inverse functions (Topics 3.1 to 3.4)"
prerequisiteResources: ["mb-ap-calcab-3.4-study-guide"]
learningObjectives:
  - "Rewrite an expression with powers, split fractions or log properties when that makes it easier to differentiate"
  - "Identify the last operation in an expression and use it to pick the first derivative rule"
  - "Combine the power, product, quotient and chain rules inside one calculation"
  - "Recognise when a relationship needs implicit differentiation or the inverse-function rule"
  - "Apply the rules to values given in a table as well as to formulas"
  - "Check a derivative by a second method or by a sense check"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator. Give exact answers. On calculator sections, a numerical derivative can check an answer at a point, but it does not replace the algebra."
related: ["mb-ap-calcab-3.5-revision-notes", "mb-ap-calcab-3.5-practice", "mb-ap-calcab-3.5-checklist"]
next: "mb-ap-calcab-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Topic 3.5 adds no new rule. It asks you to choose, in the right order, among the rules from Units 2 and 3."
  - "Rewrite first if you can: roots and reciprocals become powers, a fraction with a single-term bottom splits, a log of a product or power becomes a sum."
  - "Then ask: what is the last operation? A sum uses the sum rule, a product the product rule, a quotient the quotient rule, a function of a function the chain rule."
  - "If y is not given on its own, differentiate implicitly. For an inverse at a point, use (f⁻¹)′(b) = 1/f′(a), where f(a) = b."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 3.5 is common content, so the same page serves AB and BC students."
  - question: "Is there anything new to learn in Topic 3.5?"
    answer: "No new rule. The topic is about choosing a procedure from the form of the expression, then carrying it out without slips. That choice is what most derivative questions really test."
  - question: "Can I use the quotient rule for everything that looks like a fraction?"
    answer: "You can, and it will be correct if you apply it carefully. But when the bottom is a single term such as x² or √x, rewriting as powers is shorter and has fewer places to go wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so derivatives are written in a compact form:

- **f′(x)** is the derivative of f(x). **dy/dx** is the derivative of y with respect to x.
- **d/dx [ … ]** means "the derivative of the expression in the brackets".
- Powers that do not fit as superscripts are written with brackets, for example x^(−3/2) or e^(−x²).

All angles are in radians. Every derivative rule for trig functions assumes radians.

## What this topic asks of you

By now you know many rules. Topic 3.5 adds nothing new to the list. It is about **choosing**: you look at an expression, decide what kind of expression it is, and pick the rule that fits. The course description says this topic is about selecting a procedure, and it expects you to practise when and how to use every derivative rule you have met so far.

Most mistakes in later units (motion, related rates, optimisation, differential equations) are not mistakes in calculus ideas. They are slips in a derivative. A clear, repeatable way to choose the rule removes most of them.

Here is the toolbox you are choosing from.

| The expression is… | Rule | What you write |
|---|---|---|
| a power of x, xⁿ (any real n) | Power rule | n xⁿ⁻¹ |
| a constant times a function, k·f | Constant multiple | k·f′ |
| a sum or difference, f ± g | Sum/difference | f′ ± g′ |
| a basic function: sin x, cos x, tan x, sec x, eˣ, ln x | Known derivative | cos x, −sin x, sec²x, sec x tan x, eˣ, 1/x |
| a product, f·g | Product rule | f′g + fg′ |
| a quotient, f/g | Quotient rule | (f′g − fg′)/g² |
| a function of a function, f(g(x)) | Chain rule | f′(g(x))·g′(x) |
| an equation in x and y that is not solved for y | Implicit differentiation | differentiate both sides, then solve for dy/dx |
| the inverse of a known function, at a point | Inverse-function rule | (f⁻¹)′(b) = 1/f′(a), where f(a) = b |
| arcsin x, arccos x, arctan x | Inverse trig formulas | 1/√(1 − x²), −1/√(1 − x²), 1/(1 + x²) |

## Step 1: rewrite before you differentiate

Look for a simpler form first. Three rewrites save the most time.

- **Roots and reciprocals become powers.** 4/√x = 4x^(−1/2), and its derivative is −2x^(−3/2). No quotient rule needed.
- **A fraction with a single-term bottom splits.** (x³ − 5x)/x² = x − 5x⁻¹. Each term is now a power.
- **Log properties.** ln(x⁵) = 5 ln x, so its derivative is 5/x. ln(ab) = ln a + ln b and ln(a/b) = ln a − ln b also turn products and quotients into sums. These work where the logs are defined.

Some rewrites go the other way. tan x = sin x / cos x, sec x = 1/cos x and similar identities let you derive or recall the derivatives of tan, cot, sec and csc.

**When not to rewrite.** If the bottom of a fraction has two or more terms, such as x² + 1, it does not split. Keep the fraction and use the quotient rule (or write it as a product with a negative power and use the product and chain rules).

## Step 2: find the last operation

Imagine you had to **evaluate** the expression at some number, say x = 2, by hand. The operation you would do **last** is the main structure of the expression. That tells you which rule to use first.

- In x³ cos(4x), you would find 2³, find cos 8, then **multiply**. The last operation is a product, so start with the product rule.
- In cos(4x³), you would find 4 × 2³ = 32, then take **cos**. The last operation is applying cos, so start with the chain rule.
- In (x² + 1)⁵ − 3x, the last operation is the **subtraction**. Use the difference rule, then the chain rule on the first part.

After the first rule, every piece it produces is a smaller expression. Ask the same question about each piece. Keep going until every piece is a basic function you know.

<figure>
<svg viewBox="0 0 540 330" role="img" aria-labelledby="tree-title tree-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tree-title">Structure tree for g(x) = x³ cos(4x), showing which rule to use at each level</title>
<desc id="tree-desc">A tree diagram with three levels. The top box reads "x³ · cos(4x)" with the label "last step: multiply" and an arrow note "product rule". Two lines lead down to two boxes. The left box reads "x³" with the label "power rule: 3x²". The right box, drawn with a dashed border, reads "cos(4x)" with the label "function of a function" and an arrow note "chain rule". Two lines lead down from the right box to two more boxes. One reads "outer: cos u, derivative −sin u". The other reads "inner: u = 4x, derivative 4". The diagram shows that the rule is chosen from the top down, one level at a time.</desc>
<rect x="0" y="0" width="540" height="330" fill="#ffffff"/>
<line x1="270" y1="70" x2="130" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="270" y1="70" x2="390" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="390" y1="190" x2="300" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="390" y1="190" x2="465" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="190" y="20" width="160" height="50" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="270" y="44" font-size="15" fill="#1d2b44" text-anchor="middle">x³ · cos(4x)</text>
<text x="270" y="62" font-size="11" fill="#1d2b44" text-anchor="middle">last step: multiply</text>
<text x="360" y="36" font-size="12" fill="#1d2b44">→ product rule</text>
<rect x="70" y="140" width="120" height="50" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="130" y="164" font-size="15" fill="#1d2b44" text-anchor="middle">x³</text>
<text x="130" y="182" font-size="11" fill="#1d2b44" text-anchor="middle">power rule: 3x²</text>
<rect x="320" y="140" width="140" height="50" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 3"/>
<text x="390" y="164" font-size="15" fill="#1d2b44" text-anchor="middle">cos(4x)</text>
<text x="390" y="182" font-size="11" fill="#1d2b44" text-anchor="middle">function of a function</text>
<text x="466" y="160" font-size="12" fill="#1d2b44">→ chain</text>
<text x="466" y="174" font-size="12" fill="#1d2b44">rule</text>
<rect x="225" y="250" width="150" height="50" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="300" y="272" font-size="13" fill="#1d2b44" text-anchor="middle">outer: cos u</text>
<text x="300" y="290" font-size="11" fill="#1d2b44" text-anchor="middle">derivative −sin u</text>
<rect x="395" y="250" width="140" height="50" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="465" y="272" font-size="13" fill="#1d2b44" text-anchor="middle">inner: u = 4x</text>
<text x="465" y="290" font-size="11" fill="#1d2b44" text-anchor="middle">derivative 4</text>
<text x="20" y="250" font-size="12" fill="#1d2b44">Read from the top down:</text>
<text x="20" y="266" font-size="12" fill="#1d2b44">one rule per level.</text>
</svg>
<figcaption>Figure 1. A structure tree for g(x) = x³ cos(4x). The top box is the last operation (a product), so the product rule comes first. Its two pieces are then handled separately: x³ by the power rule, and cos(4x), drawn with a dashed border, by the chain rule. Each label names the rule in words, so the diagram does not rely on colour.</figcaption>
</figure>

You do not need to draw a tree in an exam. But asking "what is the last operation?" at each level is the same process, done in your head.

## Step 3: special situations

Some questions do not give you y = (formula in x). The form of the question then picks the procedure.

**An equation that mixes x and y.** If y is not on its own, for example y³ + xy = 10, use **implicit differentiation**. Differentiate every term with respect to x, remembering that d/dx [y³] = 3y² · dy/dx (a chain rule) and d/dx [xy] = y + x · dy/dx (a product rule). Collect the dy/dx terms and solve: dy/dx = −y/(3y² + x). Solving the equation for y first is often impossible, or very messy.

**An inverse function at a point.** If f(x) = x³ + x and you need the derivative of f⁻¹ at 2, do not try to find a formula for f⁻¹. Find the a with f(a) = 2: here a = 1, since 1 + 1 = 2. Then f′(x) = 3x² + 1, so f′(1) = 4, and (f⁻¹)′(2) = 1/f′(1) = **1/4**. The rule needs f′(a) ≠ 0.

**Inverse trig functions.** Use the formulas with the chain rule. d/dx [arctan(7x)] = 7/(1 + 49x²). The 7 on top is the derivative of the inside.

**Values in a table or a graph.** The rules work the same way with numbers. Write the rule with letters first, then substitute values from the table. Worked example 2 shows this.

**A limit that is a derivative in disguise.** A limit such as lim (h → 0) [(2 + h)⁴ − 16]/h has the shape of the definition of a derivative: it is f′(2) for f(x) = x⁴. So it equals 4 × 2³ = **32**. Recognising the shape is a procedure too.

## Worked example 1: three functions, three different first steps

**Question.** Differentiate each function. Choose the shortest correct procedure.

(a) f(x) = (2x⁴ − 6√x)/x²   (b) g(x) = x³ cos(4x)   (c) h(x) = e²ˣ/(x² + 1)

**(a) Classify.** A quotient, but the bottom is the single term x². So rewrite first.

1. Split: f(x) = 2x⁴/x² − 6x^(1/2)/x² = 2x² − 6x^(−3/2), for x > 0.
2. Power rule on each term: f′(x) = 4x − 6 × (−3/2) x^(−5/2) = **4x + 9x^(−5/2)**.

**Check.** At x = 1, f′(1) = 4 + 9 = 13. The quotient rule gives the same function, with more algebra.

**(b) Classify.** The last operation is a product (Figure 1). Product rule, with u = x³ and v = cos(4x).

1. u′ = 3x².
2. v = cos(4x) is a function of a function. Chain rule: v′ = −sin(4x) × 4 = −4 sin(4x).
3. g′(x) = u′v + uv′ = **3x² cos(4x) − 4x³ sin(4x)**.

**(c) Classify.** A quotient whose bottom, x² + 1, has two terms. It does not split, so use the quotient rule. The top, e²ˣ, needs the chain rule inside it.

1. Top: d/dx [e²ˣ] = 2e²ˣ. Bottom: d/dx [x² + 1] = 2x.
2. Quotient rule: h′(x) = [2e²ˣ(x² + 1) − e²ˣ(2x)] / (x² + 1)².
3. Factor 2e²ˣ out of the top: **h′(x) = 2e²ˣ(x² − x + 1)/(x² + 1)²**.

**Check.** At x = 0: 2 × 1 × 1/1 = 2. Also, x² − x + 1 is never 0 (its discriminant is 1 − 4 = −3), and e²ˣ > 0, so h′(x) > 0 for every x. h is always increasing, which matches the factored form.

**Interpretation.** Three fractions-or-products, three different first steps. The choice came from the form, not from habit.

## Worked example 2: the rules with values from a table

**Question.** The functions f and g are differentiable for all x. The function g is one-to-one. Selected values are given below.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 1 | 3 | −2 | 2 | 4 |
| 2 | 4 | 6 | 3 | 2 |
| 3 | 1 | 5 | 5 | 3 |

(a) Let h(x) = f(g(x)). Find h′(1).
(b) Let k(x) = f(x)/g(x). Find k′(2).
(c) Let g⁻¹ be the inverse of g. Find (g⁻¹)′(3).

**(a) Classify.** A composition. Chain rule.

1. h′(x) = f′(g(x)) · g′(x).
2. At x = 1: g(1) = 2, so h′(1) = f′(2) · g′(1).
3. From the table: f′(2) = 6 and g′(1) = 4. So **h′(1) = 24**.

A common slip is to use f′(1) instead of f′(g(1)) = f′(2). That gives −2 × 4 = −8. The outer derivative is always evaluated at the **inside value**.

**(b) Classify.** A quotient. Quotient rule.

1. k′(x) = [f′(x)g(x) − f(x)g′(x)] / [g(x)]².
2. At x = 2: [6 × 3 − 4 × 2] / 3² = (18 − 8)/9 = **10/9**.

**(c) Classify.** Inverse function at a point. Inverse-function rule.

1. Find a with g(a) = 3. From the table, g(2) = 3, so a = 2.
2. (g⁻¹)′(3) = 1/g′(2) = **1/2**.

A common slip is to use g′(3) = 3 and answer 1/3. The 3 in (g⁻¹)′(3) is an **output** of g, so you must look for it in the g(x) column, not the x column.

**Check.** In each part, the formula was written with letters before any number was substituted. That is the habit that prevents most table errors.

## Common misconceptions

- **"Every fraction needs the quotient rule."** A single-term bottom can be rewritten as a power. This is quicker and safer.
- **"The derivative of a product is the product of the derivatives."** (fg)′ is f′g + fg′, never f′g′. The same holds for quotients: (f/g)′ is not f′/g′.
- **Forgetting the inner derivative.** d/dx [cos(4x)] = −4 sin(4x), not −sin(4x). Every chain rule step multiplies by the derivative of the inside.
- **Evaluating the outer derivative at x instead of at the inside.** For f(g(x)) at x = 1, you need f′(g(1)), not f′(1).
- **Using x-values for an inverse.** (f⁻¹)′(b) needs the a with f(a) = b. Then use 1/f′(a), not 1/f′(b).
- **Choosing the rule from the first symbol you see.** In x³ cos(4x), the cos is not the main structure: the product is. Find the last operation.
- **Using degrees.** sin x has derivative cos x only when x is in radians.
- **Stopping at an unsimplified answer that hides an error.** Factoring a common term (such as 2e²ˣ in Worked example 1) often shows a sign slip, and helps in later work such as finding where f′(x) = 0.

## Where this leads

Every later unit uses these choices. Topic 3.6 differentiates a derivative again to get second and higher derivatives, so the same rules are applied twice. Unit 4 puts derivatives into contexts: motion, related rates and L'Hôpital's rule. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-checklist/) to consolidate. When you are ready, continue to [Topic 3.6: Calculating Higher-Order Derivatives](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-study-guide/).
