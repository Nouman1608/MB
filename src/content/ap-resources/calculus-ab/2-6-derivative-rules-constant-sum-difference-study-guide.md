---
resourceId: "mb-ap-calcab-2.6-study-guide"
title: "Derivative Rules: Constant, Sum, Difference and Constant Multiple: Study Guide (Calculus AB 2.6)"
description: "Learn why constants differentiate to zero and why derivatives split over sums and constant multiples, then use these rules with the power rule to differentiate any polynomial."
course: "calculus-ab"
unit: 2
topics: ["2.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The limit definition of the derivative (Topic 2.2)"
  - "The power rule for xʳ (Topic 2.5)"
  - "Properties of limits: sum, difference and constant multiple (Topic 1.5)"
  - "Expanding brackets and the laws of exponents"
prerequisiteResources: ["mb-ap-calcab-2.5-study-guide"]
learningObjectives:
  - "Explain from the limit definition why the derivative of a constant is 0"
  - "Justify the constant multiple, sum and difference rules using properties of limits"
  - "Differentiate polynomials and sums of powers of x term by term"
  - "Rewrite products, powers of brackets and fractions with a one-term denominator before differentiating"
  - "Use derivatives to find tangent lines and points where the tangent is horizontal"
  - "Combine given derivative values of unknown functions using the rules"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator. Leave answers exact."
related: ["mb-ap-calcab-2.6-revision-notes", "mb-ap-calcab-2.6-practice", "mb-ap-calcab-2.6-checklist"]
next: "mb-ap-calcab-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The derivative of a constant is 0: a horizontal line has slope 0 everywhere."
  - "Constants that multiply stay: d/dx[k·f(x)] = k·f′(x)."
  - "Derivatives split over sums and differences: d/dx[f(x) ± g(x)] = f′(x) ± g′(x)."
  - "With the power rule, these rules let you differentiate any polynomial term by term."
  - "They do not split products or quotients. Expand or simplify first, or wait for the product and quotient rules."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.6 is common content, so the same page serves AB and BC students."
  - question: "Why does the constant disappear when I differentiate but a coefficient stays?"
    answer: "A constant term shifts the graph up or down without changing its steepness, so it adds nothing to the slope. A coefficient stretches the graph vertically, so it scales every slope by the same factor."
  - question: "Is π² a constant?"
    answer: "Yes. π, e, √2 and expressions built only from them are numbers, so their derivative with respect to x is 0."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so derivatives and limits are written in a compact form:

- **f′(x)**, **dy/dx** and **d/dx[…]** all mean the derivative with respect to x.
- **lim (h → 0)** means "the limit as h approaches 0".
- Fractional exponents are written in brackets, for example x^(3/2).
- In this guide, **c** and **k** always stand for constants (fixed real numbers).

## From one power to whole functions

Topic 2.5 gave you the power rule: d/dx[xʳ] = r·xʳ⁻¹. On its own, it handles only a single power such as x⁵ or x^(−1/2). Real functions are built from several pieces, such as 6x⁵ − 4x³ + x − 9. This topic gives four rules that tell you how a derivative treats those pieces. Each rule comes straight from the limit definition and the limit properties you met in Topic 1.5.

## The four rules

### 1. Constant rule

If f(x) = c for every x, then f(x + h) − f(x) = c − c = 0. The difference quotient is 0/h = 0 for every h ≠ 0, so its limit is 0.

> **Constant rule.** d/dx[c] = 0.

Graphically, y = c is a horizontal line. Its slope is 0 everywhere.

### 2. Constant multiple rule

Let g(x) = k·f(x). Then

[g(x + h) − g(x)]/h = k·[f(x + h) − f(x)]/h.

The limit of a constant times an expression is the constant times the limit (Topic 1.5). So, wherever f′(x) exists, the limit is k·f′(x).

> **Constant multiple rule.** d/dx[k·f(x)] = k·f′(x).

Graphically, multiplying by k stretches the graph vertically by a factor k. Every rise is multiplied by k while every run stays the same, so every slope is multiplied by k. For example, y = x² has slope 2 at x = 1, and y = 3x² has slope 6 there.

### 3 and 4. Sum and difference rules

Let s(x) = f(x) + g(x). Regroup the difference quotient:

[s(x + h) − s(x)]/h = [f(x + h) − f(x)]/h + [g(x + h) − g(x)]/h.

The limit of a sum is the sum of the limits, provided both limits exist. So s′(x) = f′(x) + g′(x). The same argument works with a minus sign.

> **Sum and difference rules.** d/dx[f(x) + g(x)] = f′(x) + g′(x) and d/dx[f(x) − g(x)] = f′(x) − g′(x), wherever f′(x) and g′(x) both exist.

| Rule | Statement | Picture |
|---|---|---|
| Constant | d/dx[c] = 0 | Horizontal line: slope 0 |
| Constant multiple | d/dx[k·f] = k·f′ | Vertical stretch by k: every slope × k |
| Sum | d/dx[f + g] = f′ + g′ | Slopes add |
| Difference | d/dx[f − g] = f′ − g′ | Slopes subtract |

Together these say the derivative is **linear**: d/dx[a·f(x) + b·g(x)] = a·f′(x) + b·g′(x) for constants a and b.

## Why a constant term disappears

Adding a constant shifts a graph up or down. A shift moves every point by the same amount, so it does not change how steep the graph is anywhere. Figure 1 shows this for y = x² and y = x² + 3.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="shift-title shift-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="shift-title">Graphs of y = x² and y = x² + 3 with parallel tangent lines at x = 1</title>
<desc id="shift-desc">Two identical U-shaped parabolas drawn for x from −3 to 3. The lower one, drawn as a solid curve, is y = x² with its lowest point at the origin. The upper one, drawn with long dashes, is y = x² + 3, the same curve moved up 3 units, with its lowest point at (0, 3). A dotted vertical arrow labelled plus 3 joins the point (1, 1) on the lower curve to the point (1, 4) on the upper curve. At each of these two points a short dotted tangent line is drawn. The two tangent lines are parallel and each is labelled slope 2.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="35" y1="300" x2="500" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="315" x2="260" y2="14" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="50" y="316">−3</text><text x="120" y="316">−2</text><text x="190" y="316">−1</text><text x="330" y="316">1</text><text x="400" y="316">2</text><text x="470" y="316">3</text>
<text x="506" y="296">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="253" y="260">2</text><text x="253" y="216">4</text><text x="253" y="172">6</text><text x="253" y="128">8</text><text x="253" y="84">10</text><text x="253" y="40">12</text>
<text x="253" y="18">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="50" y1="296" x2="50" y2="304"/><line x1="120" y1="296" x2="120" y2="304"/><line x1="190" y1="296" x2="190" y2="304"/><line x1="330" y1="296" x2="330" y2="304"/><line x1="400" y1="296" x2="400" y2="304"/><line x1="470" y1="296" x2="470" y2="304"/>
<line x1="256" y1="256" x2="264" y2="256"/><line x1="256" y1="212" x2="264" y2="212"/><line x1="256" y1="168" x2="264" y2="168"/><line x1="256" y1="124" x2="264" y2="124"/><line x1="256" y1="80" x2="264" y2="80"/><line x1="256" y1="36" x2="264" y2="36"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="50.0,102.0 57.0,115.0 64.0,127.5 71.0,139.6 78.0,151.3 85.0,162.5 92.0,173.3 99.0,183.6 106.0,193.5 113.0,203.0 120.0,212.0 127.0,220.6 134.0,228.7 141.0,236.4 148.0,243.7 155.0,250.5 162.0,256.9 169.0,262.8 176.0,268.3 183.0,273.4 190.0,278.0 197.0,282.2 204.0,285.9 211.0,289.2 218.0,292.1 225.0,294.5 232.0,296.5 239.0,298.0 246.0,299.1 253.0,299.8 260.0,300.0 267.0,299.8 274.0,299.1 281.0,298.0 288.0,296.5 295.0,294.5 302.0,292.1 309.0,289.2 316.0,285.9 323.0,282.2 330.0,278.0 337.0,273.4 344.0,268.3 351.0,262.8 358.0,256.9 365.0,250.5 372.0,243.7 379.0,236.4 386.0,228.7 393.0,220.6 400.0,212.0 407.0,203.0 414.0,193.5 421.0,183.6 428.0,173.3 435.0,162.5 442.0,151.3 449.0,139.6 456.0,127.5 463.0,115.0 470.0,102.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 6" points="50.0,36.0 57.0,49.0 64.0,61.5 71.0,73.6 78.0,85.3 85.0,96.5 92.0,107.3 99.0,117.6 106.0,127.5 113.0,137.0 120.0,146.0 127.0,154.6 134.0,162.7 141.0,170.4 148.0,177.7 155.0,184.5 162.0,190.9 169.0,196.8 176.0,202.3 183.0,207.4 190.0,212.0 197.0,216.2 204.0,219.9 211.0,223.2 218.0,226.1 225.0,228.5 232.0,230.5 239.0,232.0 246.0,233.1 253.0,233.8 260.0,234.0 267.0,233.8 274.0,233.1 281.0,232.0 288.0,230.5 295.0,228.5 302.0,226.1 309.0,223.2 316.0,219.9 323.0,216.2 330.0,212.0 337.0,207.4 344.0,202.3 351.0,196.8 358.0,190.9 365.0,184.5 372.0,177.7 379.0,170.4 386.0,162.7 393.0,154.6 400.0,146.0 407.0,137.0 414.0,127.5 421.0,117.6 428.0,107.3 435.0,96.5 442.0,85.3 449.0,73.6 456.0,61.5 463.0,49.0 470.0,36.0"/>
<line x1="295" y1="300" x2="379" y2="247.2" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="2 3"/>
<line x1="281" y1="242.8" x2="379" y2="181.2" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="2 3"/>
<line x1="330" y1="272" x2="330" y2="220" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<polygon points="330,214 326,222 334,222" fill="#1d2b44"/>
<circle cx="330" cy="278" r="4.5" fill="#1d2b44"/>
<circle cx="330" cy="212" r="4.5" fill="#1d2b44"/>
<text x="336" y="250" font-size="12" fill="#1d2b44">+3</text>
<text x="388" y="266" font-size="12" fill="#1d2b44">slope 2</text>
<text x="318" y="196" font-size="12" fill="#1d2b44" text-anchor="end">slope 2</text>
<text x="275" y="44" font-size="12" fill="#1d2b44">solid curve: y = x²</text>
<text x="275" y="62" font-size="12" fill="#1d2b44">long dashes: y = x² + 3</text>
<text x="275" y="80" font-size="12" fill="#1d2b44">dotted: tangents at x = 1</text>
</svg>
<figcaption>Figure 1. Adding 3 lifts the whole parabola by 3 units. At x = 1 the points (1, 1) and (1, 4) have parallel tangent lines, both with slope 2. The same is true at every x, so y = x² and y = x² + 3 have the same derivative, 2x. Axes are unitless.</figcaption>
</figure>

## Differentiating polynomials term by term

Every polynomial is a sum of constant multiples of powers of x. So use the sum and difference rules to split it into terms, the constant multiple rule to keep each coefficient, and the power rule on each power.

**Example.** d/dx[6x⁵ − 4x³ + x − 9] = 6(5x⁴) − 4(3x²) + 1 − 0 = **30x⁴ − 12x² + 1**.

The same method works for sums of any powers, not just whole-number ones. For x > 0:

d/dx[5√x − 3/x² + π²] = d/dx[5x^(1/2) − 3x⁻² + π²] = (5/2)x^(−1/2) + 6x⁻³ + 0 = **5/(2√x) + 6/x³**.

Notice two things. The term −3x⁻² became +6x⁻³, because (−3)(−2) = +6. And π² is a number, so its derivative is 0.

### Rewrite first when the function is not yet a sum

The rules split sums, not products or quotients. Before differentiating:

- **Expand products and powers of brackets.** (2x − 3)² = 4x² − 12x + 9, so the derivative is 8x − 12.
- **Split a fraction whose denominator is a single term.** (x³ + 5)/x = x² + 5x⁻¹ for x ≠ 0.
- **A denominator with two or more terms**, such as 1/(x² + 1), cannot be split this way. It needs the quotient rule (Topic 2.9).

### Unknown functions

The rules also work when you only know values. Suppose f′(3) = 2 and g′(3) = −5, and h(x) = 4f(x) − g(x). Then h′(3) = 4f′(3) − g′(3) = 4(2) − (−5) = **13**. You do not need formulas for f or g.

## Worked example 1: a polynomial and its tangent line

**Question.** Let f(x) = 2x⁴ − 5x³ + 3x − 7. Find f′(x), then the equation of the tangent line at x = −1.

1. **Differentiate term by term.** f′(x) = 2(4x³) − 5(3x²) + 3(1) − 0 = **8x³ − 15x² + 3**.
2. **Find the slope.** f′(−1) = 8(−1) − 15(1) + 3 = −8 − 15 + 3 = **−20**. Take care: (−1)³ = −1 but (−1)² = 1.
3. **Find the point.** f(−1) = 2(1) − 5(−1) + 3(−1) − 7 = 2 + 5 − 3 − 7 = −3. The point is (−1, −3).
4. **Write the line.** y − (−3) = −20(x − (−1)), so y + 3 = −20(x + 1), or **y = −20x − 23**.

**Check.** With h = 0.001, [f(−0.999) − f(−1)]/0.001 ≈ −19.97, close to −20.

**Interpretation.** At x = −1 the graph is falling steeply: for a small step to the right, y drops about 20 times as far.

## Worked example 2: split the fraction first

**Question.** Let g(x) = (x² − 4√x + 3)/√x for x > 0. Find g′(4).

1. **Rewrite as a sum of powers.** Divide each term on top by x^(1/2):
   g(x) = x^(2 − 1/2) − 4 + 3x^(−1/2) = **x^(3/2) − 4 + 3x^(−1/2)**.
2. **Differentiate term by term.** g′(x) = (3/2)x^(1/2) − 0 + 3(−1/2)x^(−3/2) = **(3/2)√x − (3/2)x^(−3/2)**.
3. **Evaluate.** √4 = 2 and 4^(−3/2) = 1/(√4)³ = 1/8. So g′(4) = (3/2)(2) − (3/2)(1/8) = 3 − 3/16 = **45/16**.

**A tempting wrong method.** Differentiating top and bottom separately gives (2x − 2/√x) ÷ (1/(2√x)). At x = 4 that is (8 − 1) ÷ (1/4) = 28. That is far from 45/16 ≈ 2.81. The derivative of a quotient is not the quotient of the derivatives.

## Worked example 3: horizontal tangent lines

**Question.** Find every point on the graph of k(x) = x³ − 6x² + 9x + 1 where the tangent line is horizontal.

1. **Translate.** A horizontal tangent has slope 0, so solve k′(x) = 0.
2. **Differentiate.** k′(x) = 3x² − 12x + 9.
3. **Solve.** 3x² − 12x + 9 = 3(x² − 4x + 3) = 3(x − 1)(x − 3) = 0, so x = 1 or x = 3.
4. **Find the points.** k(1) = 1 − 6 + 9 + 1 = 5 and k(3) = 27 − 54 + 27 + 1 = 1.

**Check.** Test a value between the two roots. k′(2) = 12 − 24 + 9 = −3, which is not 0, so the graph is falling between x = 1 and x = 3. That fits a graph that levels off at (1, 5), drops, then levels off again at (3, 1).

**Answer.** The tangent is horizontal at **(1, 5)** and **(3, 1)**. Unit 5 shows how points like these locate peaks and dips of a graph.

## Common misconceptions

- **Keeping the constant term.** d/dx[x² + 7] is 2x, not 2x + 7.
- **Dropping a coefficient.** d/dx[5x] is 5, not 0. The 5 multiplies x; it is not a stand-alone constant.
- **Treating π², e or √2 as variables.** d/dx[π²] = 0, not 2π.
- **Splitting products or quotients.** d/dx[f·g] is not f′·g′, and d/dx[f/g] is not f′/g′. Expand or simplify first (Worked example 2), or use the rules in Topics 2.8 and 2.9.
- **Differentiating a bracket as if it were x.** d/dx[(2x − 3)²] is not 2(2x − 3). Expand first to get 8x − 12. At x = 2 the wrong method gives 2 but the true slope is 4. (The chain rule in Unit 3 handles brackets directly.)
- **Sign slips with negative coefficients and exponents.** d/dx[−3x⁻²] = +6x⁻³; d/dx[3/x²] = −6/x³, not 3/(2x).
- **Pulling a constant out of a denominator wrongly.** 1/(4x³) = (1/4)x⁻³, so its derivative is −(3/4)x⁻⁴, not −12x⁻⁴.

## Where this leads

With these rules and the power rule, you can differentiate every polynomial. [Topic 2.7, Derivatives of cos x, sin x, eˣ and ln x](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/), adds new building blocks; the sum, difference and constant multiple rules work with them in exactly the same way, so 3 sin x − 2eˣ + x⁴ is no harder than a polynomial. Topics 2.8 and 2.9 then handle products and quotients. To revisit the power rule itself, go back to [Topic 2.5](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-checklist/) to consolidate.
