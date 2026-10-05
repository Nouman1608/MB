---
resourceId: "mb-ap-calcab-7.6-study-guide"
title: "Finding General Solutions Using Separation of Variables: Study Guide (Calculus AB 7.6)"
description: "Learn how to spot a separable differential equation, separate the variables, antidifferentiate both sides with one constant, and write the general solution."
course: "calculus-ab"
unit: 7
topics: ["7.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "What a differential equation is and how to check a solution by substitution (Topics 7.1 and 7.2)"
  - "Slope fields and families of solution curves (Topics 7.3 and 7.4)"
  - "Indefinite integrals of powers, exponentials, 1/x, trig functions and 1/(1 + x²) (Unit 6)"
  - "The chain rule and implicit differentiation (Topics 3.1 and 3.2)"
  - "Laws of logarithms and exponents"
prerequisiteResources: ["mb-ap-calcab-7.4-study-guide"]
learningObjectives:
  - "Find the general solution of dy/dx = f(x) by antidifferentiating f"
  - "Decide whether a differential equation can be written in the separable form dy/dx = g(x) · h(y)"
  - "Separate the variables, antidifferentiate both sides and include a single constant of integration"
  - "Explain, using the chain rule, why antidifferentiating both sides is valid"
  - "Rearrange the result into an explicit solution where possible, handling ln|y| and the constant correctly, or leave it in implicit form"
  - "Check a general solution by differentiating it"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. All the work is algebra and antidifferentiation."
related: ["mb-ap-calcab-7.6-revision-notes", "mb-ap-calcab-7.6-practice", "mb-ap-calcab-7.6-checklist"]
next: "mb-ap-calcab-7.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A general solution is a whole family of functions, written with one arbitrary constant."
  - "If dy/dx = f(x) only, the general solution is y = ∫ f(x) dx, that is, any antiderivative of f plus C."
  - "A differential equation is separable if the right side can be written as (a function of x) × (a function of y)."
  - "Method: move every y to the side with dy and every x to the side with dx, antidifferentiate both sides, add one constant C, then solve for y if you can."
  - "Not every fraction gives a logarithm: ∫ 1/y² dy = −1/y, not ln(y²)."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 7.6 is common content, so the same page serves AB and BC students."
  - question: "Why do I add only one constant when I integrate two sides?"
    answer: "You could write C₁ on the left and C₂ on the right, but moving C₁ across gives C₂ − C₁, which is still just one unknown constant. Call it C."
  - question: "Do I always have to solve for y?"
    answer: "Solve for y when it is reasonable. If the equation cannot be rearranged (for example sin y + y³ = x² + C), leave it in implicit form. That is still a correct general solution."
  - question: "Is writing dy and dx on separate sides legal?"
    answer: "It is shorthand. The chain rule shows that antidifferentiating both sides gives a correct result, so the shorthand is safe for separable equations."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form. **∫ f(x) dx** is the indefinite integral (the family of antiderivatives) of f. **ln|y|** is the natural logarithm of the absolute value of y. A general solution always contains an arbitrary constant, written C, A or K.

## From "checking" solutions to "finding" them

In Topic 7.2 you were given a function and checked that it satisfies a differential equation. In Topics 7.3 and 7.4 you drew slope fields and saw that a differential equation has a whole family of solution curves. Now you find that family with algebra.

A **general solution** of a differential equation is a formula that describes every solution, using one arbitrary constant. Each value of the constant gives one curve in the family.

### The simplest case: the right side depends on x only

If dy/dx = f(x), you are asked for a function whose derivative is f. That is exactly an antiderivative. So

**y = ∫ f(x) dx = F(x) + C**, where F is any antiderivative of f.

Example: dy/dx = 3x² + cos x. Then y = x³ + sin x + C. Check: d/dx (x³ + sin x + C) = 3x² + cos x. Every value of C works, so there are infinitely many solutions, all vertical shifts of one curve.

This is pure antidifferentiation. The new idea in this topic is what to do when y also appears on the right.

## Separable differential equations

A differential equation is **separable** if you can write it as

**dy/dx = g(x) · h(y)**

where g depends only on x and h depends only on y. The right side must be a **product** (or a quotient) of an x-part and a y-part, not a sum.

| Differential equation | Separable? | Reason |
|---|---|---|
| dy/dx = x²y | Yes | g(x) = x², h(y) = y |
| dy/dx = y/x (x ≠ 0) | Yes | g(x) = 1/x, h(y) = y |
| dy/dx = xy + 2x | Yes | Factor first: x(y + 2) |
| dy/dx = e^(x + y) | Yes | Exponent law: e^(x + y) = eˣ · eʸ |
| dy/dx = x + y | No | A sum of an x-term and a y-term cannot be split into a product |
| dy/dx = cos(x + y) | No | cos(x + y) = cos x cos y − sin x sin y, which is a difference, not a single product |

Two of the "yes" rows only look separable after you rewrite them. Always try factoring and the exponent laws before you decide.

## The method

For dy/dx = g(x) · h(y):

1. **Separate.** Divide by h(y) and "multiply by dx" so that all the y's are with dy and all the x's are with dx:
   **(1/h(y)) dy = g(x) dx**
2. **Antidifferentiate both sides:** ∫ (1/h(y)) dy = ∫ g(x) dx.
3. **Add one constant of integration**, on the x side: H(y) = G(x) + C.
4. **Solve for y** if you can. Otherwise leave the answer in implicit form.
5. **Check** by differentiating.

### Why this is valid

Writing dy and dx separately is shorthand. Here is the reason it gives correct answers. Suppose y is a solution, so (1/h(y)) · dy/dx = g(x). Let H be an antiderivative of 1/h(y), so H′(y) = 1/h(y). By the chain rule,

**d/dx [H(y)] = H′(y) · dy/dx = (1/h(y)) · dy/dx = g(x)**

So H(y) and G(x) have the same derivative with respect to x. Two functions with equal derivatives on an interval differ by a constant. That gives **H(y) = G(x) + C**, which is exactly what step 3 writes down.

### One constant is enough

If you write C₁ on the left and C₂ on the right, you can move C₁ across: H(y) = G(x) + (C₂ − C₁). The difference of two arbitrary constants is one arbitrary constant. Write just C.

### Not every fraction gives a logarithm

A very common error is to answer every fraction with ln. Only ∫ (1/y) dy = ln|y| + C. Compare:

| Integral | Correct result | Note |
|---|---|---|
| ∫ (1/y) dy | ln\|y\| + C | The only power of y whose antiderivative is a logarithm |
| ∫ (1/y²) dy | −1/y + C | Power rule with y⁻², not ln(y²) |
| ∫ (1/(1 + y²)) dy | arctan y + C | Not ln(1 + y²) |
| ∫ (2y/(1 + y²)) dy | ln(1 + y²) + C | A logarithm, because the top is the derivative of the bottom |

For example, dy/dx = xy² separates to (1/y²) dy = x dx. Then −1/y = x²/2 + C. Multiply by −1 and flip: y = −1/(x²/2 + C) = −2/(x² + K), where K = 2C is still an arbitrary constant.

## Worked example 1: a cube that solves cleanly

**Question.** Find the general solution of dy/dx = (2x + 1)/(3y²).

1. **Is it separable?** Yes: (2x + 1) × 1/(3y²).
2. **Separate.** Multiply both sides by 3y² and by dx:
   **3y² dy = (2x + 1) dx**
3. **Antidifferentiate both sides.** ∫ 3y² dy = y³. ∫ (2x + 1) dx = x² + x.
4. **Add one constant:**
   **y³ = x² + x + C**
5. **Solve for y.** Take the cube root of both sides. A cube root is defined for every real number, so no sign choice is needed:
   **y = ∛(x² + x + C)**

**Check.** Differentiate y³ = x² + x + C implicitly: 3y² · dy/dx = 2x + 1, so dy/dx = (2x + 1)/(3y²). That is the original equation.

**Interpretation.** Each value of C gives a different solution curve. C = 0 gives y = ∛(x² + x); C = 8 gives y = ∛(x² + x + 8); and so on.

## Worked example 2: the logarithm and the constant

**Question.** Find the general solution of dy/dx = −2xy.

1. **Separate.** Divide by y (for now, assume y ≠ 0):
   **(1/y) dy = −2x dx**
2. **Antidifferentiate:** ∫ (1/y) dy = ln|y|; ∫ −2x dx = −x².
   **ln|y| = −x² + C**
3. **Undo the logarithm.** Raise e to the power of each side. Use the exponent law on the right:
   **|y| = e^(−x² + C) = e^C · e^(−x²)**
4. **Remove the absolute value.** |y| = e^C e^(−x²) means y = e^C e^(−x²) or y = −e^C e^(−x²). Both ±e^C are just nonzero constants, so call the constant A:
   **y = A e^(−x²)**
5. **The case we set aside.** We divided by y, which assumed y ≠ 0. But y = 0 also works: its derivative is 0 and −2x · 0 = 0. That is the solution with A = 0. So the general solution is **y = A e^(−x²), for any real A**.

**Check.** If y = A e^(−x²), the chain rule gives dy/dx = A e^(−x²) · (−2x) = −2x · y. Correct.

**Watch the constant.** e^(−x² + C) is e^C · e^(−x²), a **multiplier**. It is not e^(−x²) + C. Try y = e^(−x²) + C in the equation: dy/dx = −2x e^(−x²), but −2xy = −2x e^(−x²) − 2Cx. They are not equal unless C = 0.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="fam76-title fam76-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fam76-title">Four members of the family y = A e^(−x²), for A = 2, 1, 0 and −1</title>
<desc id="fam76-desc">Axes with x from −2.5 to 2.5 and y from −1.5 to 2.5. Three bell-shaped curves are symmetric about the y-axis and flatten towards the x-axis on both sides. The solid curve has its peak at (0, 2) and is labelled A = 2. The long-dashed curve has its peak at (0, 1) and is labelled A = 1. The dotted curve is upside down, with its lowest point at (0, −1), and is labelled A = −1. The x-axis itself is the solution with A = 0. No two curves cross.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="50" y1="190" x2="480" y2="190" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="300" x2="260" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="100" y1="186" x2="100" y2="194"/><line x1="180" y1="186" x2="180" y2="194"/><line x1="340" y1="186" x2="340" y2="194"/><line x1="420" y1="186" x2="420" y2="194"/>
<line x1="256" y1="70" x2="264" y2="70"/><line x1="256" y1="130" x2="264" y2="130"/><line x1="256" y1="250" x2="264" y2="250"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="208">−2</text><text x="180" y="208">−1</text><text x="340" y="208">1</text><text x="420" y="208">2</text><text x="490" y="194">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="251" y="74">2</text><text x="251" y="134">1</text><text x="251" y="254">−1</text><text x="255" y="22">y</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60,190 80,189 100,188 120,184 140,177 160,165 180,146 200,122 220,97 240,77 260,70 280,77 300,97 320,122 340,146 360,165 380,177 400,184 420,188 440,189 460,190"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="9 5" points="60,190 80,190 100,189 120,187 140,184 160,177 180,168 200,156 220,143 240,134 260,130 280,134 300,143 320,156 340,168 360,177 380,184 400,187 420,189 440,190 460,190"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4" points="60,190 80,190 100,191 120,193 140,196 160,203 180,212 200,224 220,237 240,246 260,250 280,246 300,237 320,224 340,212 360,203 380,196 400,193 420,191 440,190 460,190"/>
<g font-size="13" fill="#1d2b44">
<text x="276" y="62">A = 2</text>
<text x="268" y="166">A = 1</text>
<text x="276" y="272">A = −1</text>
<text x="50" y="300" font-size="12">solid: A = 2 · dashed: A = 1 · dotted: A = −1 · x-axis: A = 0</text>
</g>
</svg>
<figcaption>Figure 1. Some solutions of dy/dx = −2xy. Every curve has the form y = A e^(−x²). Changing A stretches the curve vertically (A = 2 is twice as tall as A = 1) or flips it (A = −1). A = 0 gives the constant solution y = 0, which lies along the x-axis. Axes are unitless.</figcaption>
</figure>

Figure 1 shows why the answer is a family. Each curve is a valid solution, and a slope field for dy/dx = −2xy would fit all of them. Picking out one curve needs an extra piece of information, a point on the curve. That is Topic 7.7.

## Worked example 3: splitting an exponential

**Question.** Find the general solution of dy/dx = e^(x − y).

1. **Make it separable.** Use the exponent law: e^(x − y) = eˣ · e^(−y). So dy/dx = eˣ e^(−y).
2. **Separate.** Divide by e^(−y), which is the same as multiplying by eʸ:
   **eʸ dy = eˣ dx**
3. **Antidifferentiate and add one constant:**
   **eʸ = eˣ + C**
4. **Solve for y.** Take the natural log of both sides:
   **y = ln(eˣ + C)**

**Check.** dy/dx = eˣ/(eˣ + C). And e^(x − y) = eˣ/eʸ = eˣ/(eˣ + C). They match.

**Note on the domain.** The logarithm needs eˣ + C > 0. If C ≥ 0, that is true for every x. If C is negative, the solution exists only for some x values. Domain restrictions like this are a focus of Topic 7.7.

**A trap.** Do not "cancel the e's" to get dy/dx = x − y. The exponential function does not cancel like a common factor.

## When you cannot solve for y

Sometimes the y side does not rearrange. For dy/dx = 2x/(cos y + 3y²), separating gives (cos y + 3y²) dy = 2x dx, so

**sin y + y³ = x² + C**

There is no way to isolate y using familiar functions. This **implicit** general solution is still correct and complete. You can check it with implicit differentiation, as in Topic 3.2.

## Common misconceptions

- **Forgetting the constant.** Without C you have found one solution, not the general solution. On free-response questions, a missing constant usually costs most of the credit for solving the equation.
- **Adding C at the end.** The constant enters when you antidifferentiate, before you rearrange. Writing y = e^(−x²) + C (instead of A e^(−x²)) gives functions that are not solutions.
- **Treating e^(G(x) + C) as e^(G(x)) + C.** By the exponent law, e^(G + C) = e^C · e^G. The constant becomes a multiplier.
- **Answering every fraction with ln.** ∫ (1/y²) dy is −1/y, not ln(y²). Check that the top is the derivative of the bottom before writing a logarithm.
- **Calling a sum separable.** dy/dx = x + y cannot be separated. A product or quotient of an x-part and a y-part is needed.
- **Integrating y with respect to x.** In dy = (x + y) dx you cannot write ∫ y dx = xy. y is a function of x, not a constant. This is exactly why you must separate first.
- **Losing a constant solution.** Dividing by h(y) assumes h(y) ≠ 0. Values where h(y) = 0, such as y = 0 in Worked example 2, give constant solutions. Often the constant A = 0 brings them back.
- **Two constants.** One constant per equation is enough.

## Where this leads

You can now find the general solution of a separable differential equation. In [Topic 7.7, Finding Particular Solutions Using Initial Conditions and Separation of Variables](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-study-guide/), you will use one known point to find the value of the constant, choose the right sign, and state the domain of the solution. In Topic 7.8, the same method gives the exponential growth and decay models. The slope fields in [Topic 7.4](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/) show these families as pictures. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-checklist/) to consolidate.
