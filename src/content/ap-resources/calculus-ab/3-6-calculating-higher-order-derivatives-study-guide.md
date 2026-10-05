---
resourceId: "mb-ap-calcab-3.6-study-guide"
title: "Calculating Higher-Order Derivatives: Study Guide (Calculus AB 3.6)"
description: "Learn to find second, third and nth derivatives, read every notation for them, spot repeating patterns and find d²y/dx² for curves defined implicitly."
course: "calculus-ab"
unit: 3
topics: ["3.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "All derivative rules from Units 2 and 3, including the chain rule and implicit differentiation"
  - "Choosing a derivative procedure from the form of an expression (Topic 3.5)"
prerequisiteResources: ["mb-ap-calcab-3.5-study-guide"]
learningObjectives:
  - "Find the second, third and higher derivatives of a function by differentiating repeatedly"
  - "Read and write the notations f″(x), y″, d²y/dx², f‴(x), f⁽ⁿ⁾(x) and dⁿy/dxⁿ"
  - "Explain why a second derivative exists only where the first derivative is differentiable"
  - "Spot and use repeating patterns in the derivatives of polynomials, exponentials and sine or cosine"
  - "Find d²y/dx² for an implicitly defined curve and evaluate it at a point"
skills: ["1", "2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator and give exact answers. On calculator sections you may be given f′ as a formula and asked for f″ at a point; the algebra is the same."
related: ["mb-ap-calcab-3.6-revision-notes", "mb-ap-calcab-3.6-practice", "mb-ap-calcab-3.6-checklist"]
next: "mb-ap-calcab-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The second derivative is the derivative of the first derivative: f″ = (f′)′. Repeat to get f‴, f⁽⁴⁾ and so on."
  - "Notation: f″(x), y″ and d²y/dx² all mean the second derivative. f⁽ⁿ⁾(x) and dⁿy/dxⁿ mean the nth derivative."
  - "f″(a) exists only if f′ is differentiable at a. A function can have f′(a) but no f″(a)."
  - "For a curve defined implicitly, differentiate dy/dx again, then substitute dy/dx and use the curve's equation to simplify."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 3.6 is common content. BC students will use higher derivatives again for parametric curves and Taylor polynomials."
  - question: "Is d²y/dx² the same as (dy/dx)²?"
    answer: "No. d²y/dx² means differentiate twice. (dy/dx)² means find the first derivative and square it. For y = x², d²y/dx² = 2 but (dy/dx)² = 4x²."
  - question: "What does the second derivative mean?"
    answer: "It is the rate of change of the rate of change. For position it gives acceleration, and for a graph it describes concavity. Those meanings are taught in Units 4 and 5; this topic is about calculating it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so derivatives are written in a compact form. Powers that do not fit as superscripts use brackets, for example x^(4/3). All angles are in radians.

## The idea: differentiate the derivative

The derivative f′ is a function in its own right. So you can differentiate it again. The result is the **second derivative**, written f″.

- f′ is the derivative of f.
- f″ is the derivative of f′.
- f‴ is the derivative of f″, and so on.

For example, if f(x) = x⁵, then f′(x) = 5x⁴, f″(x) = 20x³ and f‴(x) = 60x².

There is one condition. **f″ exists at a point only if f′ is differentiable there.** Differentiating is not always possible, so a higher derivative is not guaranteed just because a lower one exists.

**Example where the second derivative fails.** Let f(x) = x^(4/3).

1. f′(x) = (4/3)x^(1/3). At x = 0 this gives f′(0) = 0. (The difference quotient h^(4/3)/h = h^(1/3) also goes to 0, so f′(0) really is 0.)
2. f″(x) = (4/9)x^(−2/3) for x ≠ 0. At x = 0 this is undefined.
3. Check with the definition: [f′(h) − f′(0)]/h = (4/3)h^(1/3)/h = (4/3)h^(−2/3), which grows without bound as h → 0.

So f has a first derivative everywhere but **no second derivative at x = 0**. The graph of f′ = (4/3)x^(1/3) has a vertical tangent at the origin, so it is not differentiable there.

## Notation you must recognise

| Order | Prime notation | Leibniz notation | Other |
|---|---|---|---|
| first | f′(x) | dy/dx | y′ |
| second | f″(x) | d²y/dx² | y″ |
| third | f‴(x) | d³y/dx³ | y‴ |
| fourth | f⁽⁴⁾(x) | d⁴y/dx⁴ | y⁽⁴⁾ |
| nth | f⁽ⁿ⁾(x) | dⁿy/dxⁿ | y⁽ⁿ⁾ |

Three reading tips.

- **d²y/dx² means d/dx (dy/dx).** The 2 on top sits on the d; the 2 on the bottom sits on the x. It is one symbol, not a fraction to cancel.
- **The brackets in f⁽⁴⁾ matter.** f⁽⁴⁾(x) is the fourth derivative. f⁴(x) usually means [f(x)]⁴, a power. After the third derivative, prime marks become hard to count, so brackets are used.
- **d²y/dx² is not (dy/dx)².** For y = x³, d²y/dx² = 6x but (dy/dx)² = 9x⁴.

## Patterns in higher derivatives

Some families of functions produce a pattern you can use to jump straight to the nth derivative.

**Polynomials run out.** Each derivative lowers the degree by 1. Take p(x) = 2x⁴ − x³ + 5:

p′(x) = 8x³ − 3x², p″(x) = 24x² − 6x, p‴(x) = 48x − 6, p⁽⁴⁾(x) = 48, p⁽⁵⁾(x) = 0.

A polynomial of degree n has a constant nth derivative and every derivative after that is 0. The constant is the leading coefficient times n × (n − 1) × … × 1. Here 2 × 4 × 3 × 2 × 1 = 48.

**Exponentials repeat with a factor.** d/dx [e^(kx)] = k e^(kx). Each new derivative multiplies by k again, so the nth derivative is kⁿ e^(kx). For example, the third derivative of e^(−2x) is (−2)³ e^(−2x) = −8e^(−2x).

**Sine and cosine cycle every four steps.**

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="cycle-title cycle-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cycle-title">The derivatives of sin x repeat in a cycle of four</title>
<desc id="cycle-desc">Four boxes arranged in a square, joined by arrows going clockwise. Each arrow is labelled d/dx. Top left box: sin x. Top right box: cos x, the first derivative. Bottom right box: −sin x, the second derivative. Bottom left box: −cos x, the third derivative. The arrow from −cos x leads back to sin x, the fourth derivative. Text in the centre says the cycle repeats every 4 derivatives.</desc>
<defs>
<marker id="arrow36" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/>
</marker>
</defs>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<rect x="60" y="30" width="130" height="56" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="125" y="56" font-size="16" fill="#1d2b44" text-anchor="middle">sin x</text>
<text x="125" y="76" font-size="11" fill="#1d2b44" text-anchor="middle">start (0th and 4th)</text>
<rect x="330" y="30" width="130" height="56" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="395" y="56" font-size="16" fill="#1d2b44" text-anchor="middle">cos x</text>
<text x="395" y="76" font-size="11" fill="#1d2b44" text-anchor="middle">1st derivative</text>
<rect x="330" y="214" width="130" height="56" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="395" y="240" font-size="16" fill="#1d2b44" text-anchor="middle">−sin x</text>
<text x="395" y="260" font-size="11" fill="#1d2b44" text-anchor="middle">2nd derivative</text>
<rect x="60" y="214" width="130" height="56" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="125" y="240" font-size="16" fill="#1d2b44" text-anchor="middle">−cos x</text>
<text x="125" y="260" font-size="11" fill="#1d2b44" text-anchor="middle">3rd derivative</text>
<line x1="192" y1="58" x2="326" y2="58" stroke="#1d2b44" stroke-width="2" marker-end="url(#arrow36)"/>
<line x1="395" y1="88" x2="395" y2="210" stroke="#1d2b44" stroke-width="2" marker-end="url(#arrow36)"/>
<line x1="328" y1="242" x2="194" y2="242" stroke="#1d2b44" stroke-width="2" marker-end="url(#arrow36)"/>
<line x1="125" y1="212" x2="125" y2="90" stroke="#1d2b44" stroke-width="2" marker-end="url(#arrow36)"/>
<g font-size="13" fill="#1d2b44">
<text x="259" y="50" text-anchor="middle">d/dx</text>
<text x="405" y="154">d/dx</text>
<text x="259" y="234" text-anchor="middle">d/dx</text>
<text x="80" y="154">d/dx</text>
</g>
<text x="260" y="146" font-size="13" fill="#1d2b44" text-anchor="middle">cycle repeats</text>
<text x="260" y="164" font-size="13" fill="#1d2b44" text-anchor="middle">every 4 derivatives</text>
</svg>
<figcaption>Figure 1. Differentiating sin x four times brings you back to sin x. To find the nth derivative, divide n by 4 and use the remainder: remainder 1 gives cos x, 2 gives −sin x, 3 gives −cos x, 0 gives sin x. Starting from cos x, enter the same cycle one box later.</figcaption>
</figure>

With an inside function kx, the chain rule adds a factor k at every step. So the nth derivative of sin(kx) is kⁿ times the matching function from the cycle, with kx inside. For example, to find the 25th derivative of sin(3x): 25 = 6 × 4 + 1, remainder 1, so the answer is **3²⁵ cos(3x)**.

**A habit that saves time.** Simplify f′ before you differentiate again. A messy f′ makes f″ much harder, and factoring often shows a pattern.

## Choosing the rule at each step

A second derivative is two separate derivative problems. The rule that worked for f may not be the rule you need for f′, so classify again at every step, exactly as in Topic 3.5.

**Example: y = tan x.**

1. y′ = sec²x. This is a basic derivative.
2. Now classify y′. sec²x means (sec x)², so the last operation is squaring. Chain rule: y″ = 2 sec x × (sec x tan x) = **2 sec²x tan x**.

The first step used a known result; the second needed the chain rule.

**Example: y = √x, for x > 0.**

1. Rewrite as a power: y = x^(1/2), so y′ = (1/2)x^(−1/2).
2. Power rule again: y″ = (1/2)(−1/2)x^(−3/2) = **−1/(4x^(3/2))**.

Keeping powers in index form makes each step one line. Converting back to roots between steps only adds chances to slip.

**Example: y = x e^(−x).** The product rule gives y′ = e^(−x) − x e^(−x) = (1 − x)e^(−x). Factoring e^(−x) out first leaves another product, so the product rule is used again: y″ = −e^(−x) − (1 − x)e^(−x) = **(x − 2)e^(−x)**. Factored forms like these are easier to evaluate and to test for sign.

In every case, write each derivative fully before starting the next. Most errors in higher derivatives come from trying to do two steps at once.

## Worked example 1: a second derivative that needs the quotient rule

**Question.** Let f(x) = ln(x² + 1). Find f″(x), then evaluate f″(0) and f″(1).

1. **First derivative.** Chain rule: f′(x) = 2x/(x² + 1).
2. **Classify f′.** It is a quotient whose bottom has two terms, so it does not split. Use the quotient rule.
3. **Second derivative.**
   f″(x) = [2(x² + 1) − 2x(2x)] / (x² + 1)²
   = (2x² + 2 − 4x²) / (x² + 1)²
   = **(2 − 2x²)/(x² + 1)²**, which is 2(1 − x²)/(x² + 1)².
4. **Evaluate.** f″(0) = 2/1 = **2**. f″(1) = (2 − 2)/4 = **0**.

**Check.** The bottom (x² + 1)² is always positive, so the sign of f″ is the sign of 1 − x². That is positive between −1 and 1 and negative outside. A quick value: f″(2) = (2 − 8)/25 = −6/25, which is negative, as expected.

**Interpretation.** You will meet this sign information again in Unit 5, where the sign of f″ describes the shape of a graph. For now the point is the procedure: differentiate, simplify, classify the new expression, differentiate again.

## Worked example 2: a second derivative for an implicit curve

**Question.** The curve x² + 4y² = 20 passes through (4, 1). Find dy/dx and d²y/dx² at that point.

**Check the point.** 4² + 4(1²) = 16 + 4 = 20. It is on the curve.

1. **First derivative.** Differentiate both sides with respect to x. The term 4y² needs the chain rule:
   2x + 8y · dy/dx = 0, so **dy/dx = −x/(4y)**.
   At (4, 1): dy/dx = −4/4 = **−1**.
2. **Differentiate dy/dx again.** It is a quotient, and y is a function of x, so the bottom 4y has derivative 4 · dy/dx:
   d²y/dx² = −[(1)(4y) − x(4 · dy/dx)] / (4y)²
   = −[4y − 4x · dy/dx] / (16y²).
3. **Substitute dy/dx = −x/(4y).** Then 4x · dy/dx = −x²/y, so the bracket becomes
   4y + x²/y = (4y² + x²)/y.
4. **Use the curve's equation.** On the curve, x² + 4y² = 20, so the bracket is 20/y. Therefore
   d²y/dx² = −(20/y)/(16y²) = **−5/(4y³)**.
5. **Evaluate.** At (4, 1): d²y/dx² = −5/(4 × 1) = **−5/4**.

**Check.** Near (4, 1) the curve is the upper half, y = √(20 − x²)/2. Differentiating this explicitly twice and substituting x = 4 also gives −5/4.

**Why step 4 matters.** Replacing x² + 4y² by 20 turned a long expression into a short one. Always look for the original equation inside your second derivative.

**Alternative method.** Differentiate the equation 2x + 8y · y′ = 0 again, without solving for y′ first: 2 + 8(y′)² + 8y · y″ = 0. At (4, 1) with y′ = −1: 2 + 8 + 8y″ = 0, so y″ = −10/8 = −5/4. This avoids the quotient rule and is often quicker.

## Common misconceptions

- **"d²y/dx² is (dy/dx)²."** It is the derivative of dy/dx, not its square.
- **Reading f⁽⁴⁾ as a power.** The brackets mean "fourth derivative".
- **"If f′(a) exists, then f″(a) exists."** Not always: x^(4/3) has f′(0) = 0 but no f″(0).
- **Forgetting that y is a function of x.** In an implicit second derivative, the derivative of y is dy/dx, and the derivative of 4y is 4 · dy/dx, not 4.
- **Leaving dy/dx inside d²y/dx².** Unless a question allows it, substitute your expression for dy/dx so the answer is in terms of x and y.
- **Losing the factor k in each step.** The second derivative of sin(5x) is −5² sin(5x) = −25 sin(5x), not −sin(5x).
- **Not simplifying f′ first.** Expanding or factoring f′ before the next step prevents long, error-prone algebra.

## Where this leads

Higher derivatives appear throughout the rest of the course. The next topic, [Topic 4.1: Interpreting the Meaning of the Derivative in Context](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/), starts Unit 4, where the second derivative of position becomes acceleration. In Unit 5 the sign of f″ describes concavity and gives the second derivative test. BC students also use second derivatives of parametric curves and build Taylor polynomials from f, f′, f″, f‴ and beyond. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-checklist/) to consolidate.
