---
resourceId: "mb-ap-calcab-6.8-study-guide"
title: "Antiderivatives and Indefinite Integrals: Basic Rules and Notation: Study Guide (Calculus AB 6.8)"
description: "Learn what ∫ f(x) dx = F(x) + C means, how every basic antiderivative comes from a derivative rule, how to rewrite before integrating, and why some functions have no formula."
course: "calculus-ab"
unit: 6
topics: ["6.8"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of powers, exponentials, logarithms, trig and inverse trig functions (Units 2 and 3)"
  - "Antiderivatives and evaluating definite integrals (Topic 6.7)"
  - "Index laws, including negative and fractional powers"
  - "Basic trig identities such as sec x = 1/cos x"
prerequisiteResources: ["mb-ap-calcab-6.7-study-guide"]
learningObjectives:
  - "Read and write indefinite integral notation, ∫ f(x) dx = F(x) + C, and explain the role of the constant C"
  - "Explain why all antiderivatives of a function on an interval form a family of vertical shifts"
  - "Find antiderivatives of powers, 1/x, exponentials, trig functions and the two basic inverse trig forms by reversing derivative rules"
  - "Rewrite products, quotients and roots so that the basic rules apply, and check every answer by differentiating"
  - "Recognise that some functions have no antiderivative that can be written with familiar functions"
skills: ["1", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise everything here without a calculator. Indefinite integrals are found by hand, and you are expected to show the antiderivative you used."
related: ["mb-ap-calcab-6.8-revision-notes", "mb-ap-calcab-6.8-practice", "mb-ap-calcab-6.8-checklist"]
next: "mb-ap-calcab-6.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "∫ f(x) dx = F(x) + C means F′(x) = f(x), where C is any constant. The answer is a whole family of functions, not one number."
  - "Every basic antiderivative is a derivative rule read backwards. The power rule needs n ≠ −1; the case 1/x gives ln|x|."
  - "Constant multiples and sums can be integrated term by term. There is no product or quotient rule for integrals, so rewrite first."
  - "Check every answer by differentiating it. Some functions, such as e^(x²), have no antiderivative you can write with familiar functions."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.8 is common content, so the same page serves AB and BC students."
  - question: "Will I lose credit for leaving out + C?"
    answer: "On an indefinite integral, yes, you should expect to. Without + C you have given one antiderivative, not the indefinite integral. With a definite integral the constant cancels, so it is not needed."
  - question: "Why ln|x| and not ln x?"
    answer: "1/x is defined for negative x too. For x < 0, the derivative of ln(−x) is 1/x, so ln|x| covers both sides of 0 in one formula."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

**∫ f(x) dx**, with no numbers on the integral sign, is an **indefinite integral**. It stands for every antiderivative of f. The function inside, f(x), is the **integrand**. The **dx** says that x is the variable; it is part of the notation and you must write it.

**∫ (a to b) f(x) dx**, with limits a and b, is a **definite integral**: one number (Topic 6.7).

## From one antiderivative to a family

In Topic 6.7 you met antiderivatives: F is an antiderivative of f if F′(x) = f(x). For example, x² is an antiderivative of 2x. So are x² + 2, x² − 2 and x² + 4.5, because the derivative of a constant is 0.

The reverse is also true. If F and G are both antiderivatives of f on an interval, then (F − G)′ = 0 there, so F − G is a constant. (This follows from the Mean Value Theorem, Topic 5.1.) So once you have found one antiderivative F, you have found them all: **F(x) + C, where C is any constant**.

The indefinite integral collects them in one line:

> **∫ f(x) dx = F(x) + C**, where F′(x) = f(x) and C is any constant.

C is called the **constant of integration**. Read ∫ 2x dx = x² + C as "the antiderivatives of 2x are the functions x² + C".

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="fam-title fam-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fam-title">Three antiderivatives of 2x: the curves y = x² + C for C = 2, 0 and −2</title>
<desc id="fam-desc">Three upward-opening parabolas are drawn for x from −2 to 2. The top one, a solid line, is y = x² + 2 with lowest point (0, 2). The middle one, a dashed line, is y = x² with lowest point at the origin. The bottom one, a dotted line, is y = x² − 2 with lowest point (0, −2). Each curve is the one above it moved down 2 units. At x = 1 each curve has a marked point, at heights 3, 1 and −1, and a short straight tangent segment through it. The three tangent segments are parallel, each with slope 2.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<line x1="50" y1="250" x2="480" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="335" x2="260" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<text x="484" y="254" font-size="12" fill="#1d2b44">x</text><text x="266" y="44" font-size="12" fill="#1d2b44">y</text>
<g stroke="#1d2b44" stroke-width="1"><line x1="80" y1="246" x2="80" y2="254"/><line x1="170" y1="246" x2="170" y2="254"/><line x1="350" y1="246" x2="350" y2="254"/><line x1="440" y1="246" x2="440" y2="254"/><line x1="256" y1="300" x2="264" y2="300"/><line x1="256" y1="200" x2="264" y2="200"/><line x1="256" y1="150" x2="264" y2="150"/><line x1="256" y1="100" x2="264" y2="100"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="80" y="268">−2</text><text x="170" y="268">−1</text><text x="350" y="268">1</text><text x="440" y="268">2</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="252" y="304">−2</text><text x="252" y="204">2</text><text x="252" y="154">4</text><text x="252" y="104">6</text></g>
<polyline points="80.0,100.0 89.0,109.8 98.0,119.0 107.0,127.8 116.0,136.0 125.0,143.8 134.0,151.0 143.0,157.8 152.0,164.0 161.0,169.8 170.0,175.0 179.0,179.8 188.0,184.0 197.0,187.8 206.0,191.0 215.0,193.8 224.0,196.0 233.0,197.8 242.0,199.0 251.0,199.8 260.0,200.0 269.0,199.8 278.0,199.0 287.0,197.8 296.0,196.0 305.0,193.8 314.0,191.0 323.0,187.8 332.0,184.0 341.0,179.8 350.0,175.0 359.0,169.8 368.0,164.0 377.0,157.8 386.0,151.0 395.0,143.8 404.0,136.0 413.0,127.8 422.0,119.0 431.0,109.8 440.0,100.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="80.0,150.0 89.0,159.8 98.0,169.0 107.0,177.8 116.0,186.0 125.0,193.8 134.0,201.0 143.0,207.8 152.0,214.0 161.0,219.8 170.0,225.0 179.0,229.8 188.0,234.0 197.0,237.8 206.0,241.0 215.0,243.8 224.0,246.0 233.0,247.8 242.0,249.0 251.0,249.8 260.0,250.0 269.0,249.8 278.0,249.0 287.0,247.8 296.0,246.0 305.0,243.8 314.0,241.0 323.0,237.8 332.0,234.0 341.0,229.8 350.0,225.0 359.0,219.8 368.0,214.0 377.0,207.8 386.0,201.0 395.0,193.8 404.0,186.0 413.0,177.8 422.0,169.0 431.0,159.8 440.0,150.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<polyline points="80.0,200.0 89.0,209.8 98.0,219.0 107.0,227.8 116.0,236.0 125.0,243.8 134.0,251.0 143.0,257.8 152.0,264.0 161.0,269.8 170.0,275.0 179.0,279.8 188.0,284.0 197.0,287.8 206.0,291.0 215.0,293.8 224.0,296.0 233.0,297.8 242.0,299.0 251.0,299.8 260.0,300.0 269.0,299.8 278.0,299.0 287.0,297.8 296.0,296.0 305.0,293.8 314.0,291.0 323.0,287.8 332.0,284.0 341.0,279.8 350.0,275.0 359.0,269.8 368.0,264.0 377.0,257.8 386.0,251.0 395.0,243.8 404.0,236.0 413.0,227.8 422.0,219.0 431.0,209.8 440.0,200.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="296" y1="205" x2="404" y2="145"/><line x1="296" y1="255" x2="404" y2="195"/><line x1="296" y1="305" x2="404" y2="245"/></g>
<circle cx="350" cy="175" r="4.5" fill="#1d2b44"/><circle cx="350" cy="225" r="4.5" fill="#1d2b44"/><circle cx="350" cy="275" r="4.5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44"><text x="446" y="104">y = x² + 2</text><text x="446" y="154">y = x²</text><text x="446" y="204">y = x² − 2</text></g>
<text x="90" y="22" font-size="12" fill="#1d2b44">solid: C = 2 · dashed: C = 0 · dotted: C = −2</text>
<text x="270" y="325" font-size="12" fill="#1d2b44">at x = 1, every tangent has slope 2</text>
</svg>
<figcaption>Figure 1. Three members of the family ∫ 2x dx = x² + C. Changing C moves the graph up or down without changing its shape. At any x, every member has the same slope, 2x, which is why they all have the same derivative. Axes are unitless.</figcaption>
</figure>

| | Indefinite integral | Definite integral |
|---|---|---|
| Notation | ∫ f(x) dx | ∫ (a to b) f(x) dx |
| What it is | A family of functions | One number |
| Answer looks like | F(x) + C | F(b) − F(a) |
| Constant C | Required | Cancels, so leave it out |

## Basic rules: derivative rules read backwards

Every row of this table is a derivative fact you already know, read from right to left. The last column is the check.

| Integral | Result | Because |
|---|---|---|
| ∫ k dx (k a constant) | kx + C | d/dx (kx) = k |
| ∫ xⁿ dx, n ≠ −1 | xⁿ⁺¹/(n + 1) + C | d/dx xⁿ⁺¹ = (n + 1)xⁿ |
| ∫ (1/x) dx | ln\|x\| + C | d/dx ln\|x\| = 1/x, for x ≠ 0 |
| ∫ eˣ dx | eˣ + C | d/dx eˣ = eˣ |
| ∫ aˣ dx (a > 0, a ≠ 1) | aˣ/ln a + C | d/dx aˣ = aˣ ln a |
| ∫ cos x dx | sin x + C | d/dx sin x = cos x |
| ∫ sin x dx | −cos x + C | d/dx cos x = −sin x |
| ∫ sec²x dx | tan x + C | d/dx tan x = sec²x |
| ∫ csc²x dx | −cot x + C | d/dx cot x = −csc²x |
| ∫ sec x tan x dx | sec x + C | d/dx sec x = sec x tan x |
| ∫ csc x cot x dx | −csc x + C | d/dx csc x = −csc x cot x |
| ∫ 1/√(1 − x²) dx | arcsin x + C | d/dx arcsin x = 1/√(1 − x²) |
| ∫ 1/(1 + x²) dx | arctan x + C | d/dx arctan x = 1/(1 + x²) |

Three points to notice.

- **The power rule fails at n = −1.** x⁻¹⁺¹/(−1 + 1) = x⁰/0, which is meaningless. That gap is filled by ln|x|.
- **Why the absolute value.** For x > 0, d/dx ln x = 1/x. For x < 0, the chain rule gives d/dx ln(−x) = (−1)/(−x) = 1/x. So ln|x| works on both sides of 0.
- **The minus signs follow the derivatives.** Every "co-" function (cos, cot, csc) has a minus sign in its derivative, so a minus sign appears in the matching antiderivative.

## Two rules that let you work term by term

These come straight from the matching derivative rules:

- **Constant multiple:** ∫ k f(x) dx = k ∫ f(x) dx.
- **Sum and difference:** ∫ (f(x) ± g(x)) dx = ∫ f(x) dx ± ∫ g(x) dx.

So ∫ (5x⁴ − 2) dx = x⁵ − 2x + C. One + C at the end covers all the separate constants.

There is **no product rule and no quotient rule** for integrals. ∫ f(x) g(x) dx is **not** ∫ f(x) dx · ∫ g(x) dx. Before you integrate a product or a quotient, rewrite it as a sum of terms the table can handle:

| You see | Rewrite as |
|---|---|
| √x, ∛(x²) | x^(1/2), x^(2/3) |
| 3/x⁴ | 3x⁻⁴ |
| A product of polynomials | Expand it |
| A fraction with a single term on the bottom | Split it into separate fractions |
| sin x/cos²x | sec x tan x |

## Check by differentiating

Differentiation rules are the foundation of antidifferentiation. That gives you a built-in test: **differentiate your answer**. If you get back exactly the integrand, your answer is right. If not, it is wrong, however reasonable it looks. Make this a habit on every indefinite integral.

## Worked example 1: rewriting powers, products and quotients

**Question.** Find

(a) ∫ (2x − 1)(x + 3) dx
(b) ∫ (x³ − 4√x + 5)/x dx

**(a)** There is no product rule, so expand first: (2x − 1)(x + 3) = 2x² + 5x − 3.

∫ (2x² + 5x − 3) dx = **(2/3)x³ + (5/2)x² − 3x + C**

**Check:** d/dx gives 2x² + 5x − 3. ✓

**(b)** The bottom is a single term, so split the fraction. Write √x = x^(1/2):

(x³ − 4x^(1/2) + 5)/x = x² − 4x^(−1/2) + 5/x

Integrate each term:

- x² → x³/3
- −4x^(−1/2) → −4 · x^(1/2)/(1/2) = −8x^(1/2) = −8√x
- 5/x → 5 ln|x|

∫ (x³ − 4√x + 5)/x dx = **x³/3 − 8√x + 5 ln|x| + C**

**Check:** d/dx gives x² − 4x^(−1/2) + 5/x, which is the split form of the integrand. ✓

## Worked example 2: trig, inverse trig and exponential rules

**Question.** Find

(a) ∫ (3 sec²x − 2 csc x cot x) dx
(b) ∫ (4/(1 + x²) − 5ˣ) dx
(c) ∫ sin x/cos²x dx

**(a)** ∫ sec²x dx = tan x and ∫ csc x cot x dx = −csc x. So

∫ (3 sec²x − 2 csc x cot x) dx = 3 tan x − 2(−csc x) + C = **3 tan x + 2 csc x + C**

**Check:** d/dx (2 csc x) = −2 csc x cot x. ✓ The two minus signs combined correctly.

**(b)** Use the arctan rule and the aˣ rule with a = 5:

**4 arctan x − 5ˣ/ln 5 + C**

**Check:** d/dx (5ˣ/ln 5) = 5ˣ ln 5/ln 5 = 5ˣ. ✓

**(c)** This is a quotient, but an identity turns it into a table entry:

sin x/cos²x = (1/cos x) · (sin x/cos x) = sec x tan x

So ∫ sin x/cos²x dx = **sec x + C**.

## Worked example 3: checking claimed antiderivatives

**Question.** Each answer below is wrong. Use differentiation to show why, and correct it if a basic rule applies.

(a) ∫ 6/x³ dx = 6 ln|x³| + C
(b) ∫ x cos x dx = (x²/2) sin x + C
(c) ∫ e^(x²) dx = e^(x²)/(2x) + C

**(a)** d/dx (6 ln|x³|) = 6 · 3x²/x³ = 18/x. That is not 6/x³. The ln rule only applies to 1/x itself. Here 6/x³ = 6x⁻³ and n = −3 ≠ −1, so use the power rule:

∫ 6x⁻³ dx = 6 · x⁻²/(−2) + C = **−3/x² + C**. Check: d/dx (−3x⁻²) = 6x⁻³. ✓

**(b)** By the product rule, d/dx ((x²/2) sin x) = x sin x + (x²/2) cos x. That is not x cos x. The error is integrating each factor separately. No basic rule handles this product. (BC students find it with integration by parts, a BC-only topic.)

**(c)** By the quotient rule, d/dx (e^(x²)/(2x)) = e^(x²)(x² − 1/2)/x², which is not e^(x²). In fact **e^(x²) has no antiderivative that can be written with familiar functions**. Many functions are like this, for example sin(x²), √(1 + x³) and (sin x)/x. They still have antiderivatives: by Topic 6.4, ∫ (0 to x) e^(t²) dt is one. You just cannot write it as a formula. If a definite integral of such a function is needed, it is found numerically, with a calculator or a Riemann sum.

## Common misconceptions

- **Leaving out + C.** Without it you have one antiderivative, not the indefinite integral.
- **Using the power rule for 1/x.** It gives division by 0. Use ln|x|.
- **Using ln for every fraction.** ∫ 1/x² dx is −1/x + C, not ln(x²) + C. The ln rule is only for 1/x (and constant multiples of it).
- **Integrating factor by factor.** ∫ f · g dx ≠ ∫ f dx · ∫ g dx. Expand, split or use an identity first.
- **Sign errors with trig.** ∫ sin x dx = −cos x + C. ∫ csc²x dx = −cot x + C. Differentiate to check.
- **Differentiating instead of integrating.** Writing 20x³ for ∫ 5x⁴ dx. Integration raises the power by one.
- **Forgetting dx**, or writing ∫ 3x² = x³ + C. The dx names the variable and closes the integral.
- **Assuming every function has a formula antiderivative.** e^(x²) and sin(x²) do not.
- **Writing strings of unequal expressions.** Write ∫ 2x dx = x² + C, not "2x = x² + C".

## Where this leads

These basic rules are the building blocks for everything else in integration. In [Topic 6.9, Integrating Using Substitution](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-study-guide/), you will reverse the chain rule to handle integrands such as cos(3x) or x e^(x²), which the basic table cannot do directly. In Topic 7.7 you will use a known point to pick one member of the family F(x) + C. Look back at [Topic 6.7](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-study-guide/) to see how one antiderivative evaluates a definite integral. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-checklist/) to consolidate.
