---
resourceId: "mb-ap-calcab-6.3-study-guide"
title: "Riemann Sums, Summation Notation and Definite Integral Notation: Study Guide (Calculus AB 6.3)"
description: "Learn to write Riemann sums with sigma notation, see why their limit defines the definite integral, and translate between a limit of sums and an integral in both directions."
course: "calculus-ab"
unit: 6
topics: ["6.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Left, right and midpoint Riemann sums and the trapezoidal sum (Topic 6.2)"
  - "Area under a rate graph as accumulated change (Topic 6.1)"
  - "Limits as n → ∞ (Topic 1.15)"
  - "Areas of rectangles, triangles, trapezoids and circles"
prerequisiteResources: ["mb-ap-calcab-6.2-study-guide"]
learningObjectives:
  - "Read and write sums in sigma notation, including the index, its first and last values, and the term"
  - "Describe a Riemann sum as a total of products, each a function value at a point of a subinterval times that subinterval's width"
  - "Explain why the limit of Riemann sums, as every subinterval width shrinks to 0, is the definite integral of a continuous function"
  - "Rewrite the limit of a Riemann sum as a definite integral by identifying the width, the starting value and the function"
  - "Rewrite a definite integral as the limit of a right (or left) Riemann sum with equal widths"
skills: ["2", "1", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Every example here is designed to be done by hand. Leave answers exact, e.g. 15/2 or 9π/4."
related: ["mb-ap-calcab-6.3-revision-notes", "mb-ap-calcab-6.3-practice", "mb-ap-calcab-6.3-checklist"]
next: "mb-ap-calcab-6.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A Riemann sum is Σ f(xᵢ*) Δxᵢ: add up the products of a function value at a point in each subinterval and that subinterval's width."
  - "The definite integral ∫ (a to b) f(x) dx is the limit of these sums as the largest width shrinks to 0. For a continuous f, the choice of sample points does not change the limit."
  - "With n equal widths on [a, b]: Δx = (b − a)/n and the right endpoints are xᵢ = a + iΔx."
  - "To turn lim (n → ∞) Σ f(a + iΔx) Δx into an integral: Δx becomes dx, a + iΔx becomes x, and the limits run from a to b = a + nΔx."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.3 is common content, so the same page serves AB and BC students."
  - question: "Do I have to evaluate the limit of a Riemann sum with sum formulas?"
    answer: "The core skill is translation: recognising which integral a limit of sums represents, and the reverse. Once you have the integral, you evaluate it with geometry now, or with antiderivatives from Topic 6.7. Sum formulas are shown here only as an optional check."
  - question: "Can one limit of a Riemann sum match more than one integral?"
    answer: "Yes. The same limit can be written as ∫ (2 to 5) √x dx or as ∫ (0 to 3) √(2 + x) dx, for example. They have the same value. Multiple-choice options usually list only one correct form, so check each option by matching width, start and function."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so sums and integrals are written in a compact form:

- **Σ (i = 1 to n) aᵢ** means a₁ + a₂ + … + aₙ. On paper, write i = 1 under the Σ and n above it.
- **∫ (a to b) f(x) dx** means the definite integral of f from a to b. On paper, write a at the bottom of the integral sign and b at the top.
- **lim (n → ∞)** means "the limit as n grows without bound", as in Topic 1.15.

## Summation notation from first principles

In Topic 6.2 you wrote Riemann sums out term by term. With 4 rectangles that is fine. With 100 it is not. Sigma notation (Σ is the Greek capital letter sigma, for "sum") packs a long sum into one line.

A sum in sigma notation has four parts:

| Part | In Σ (i = 1 to 4) (2i + 1) | Meaning |
|---|---|---|
| Index | i | A counter. It takes whole-number values only. |
| Lower value | 1 | The first value of the index |
| Upper value | 4 | The last value of the index |
| Term | 2i + 1 | What you add for each value of i |

So Σ (i = 1 to 4) (2i + 1) = 3 + 5 + 7 + 9 = **24**.

Two more quick examples:

- Σ (i = 1 to 5) 3 = 3 + 3 + 3 + 3 + 3 = **15**. The term does not contain i, so you add the same number 5 times.
- Σ (k = 0 to 3) k² = 0 + 1 + 4 + 9 = **14**. The index can have any name and can start at 0. Count carefully: k = 0, 1, 2, 3 is **four** terms.

Two rules let you tidy a sum. A constant factor can come outside: Σ c·aᵢ = c · Σ aᵢ. A sum of terms can be split: Σ (aᵢ + bᵢ) = Σ aᵢ + Σ bᵢ. You will use the first rule when a width Δx is the same in every term.

## What a Riemann sum is, in general

Topic 6.2 used left, right and midpoint sums with tables and graphs. Each one follows the same recipe, which works even when the pieces have different widths.

1. **Partition** the interval [a, b]: choose points a = x₀ < x₁ < x₂ < … < xₙ = b. This cuts [a, b] into n subintervals.
2. **Width** of the ith subinterval: Δxᵢ = xᵢ − xᵢ₋₁.
3. **Sample point**: choose any point xᵢ* in the ith subinterval [xᵢ₋₁, xᵢ].
4. **Multiply and add**: the Riemann sum is

**Σ (i = 1 to n) f(xᵢ*) Δxᵢ**

Each product f(xᵢ*) Δxᵢ is the signed area of one rectangle: positive if f(xᵢ*) > 0, negative if f(xᵢ*) < 0. A left sum chooses xᵢ* = xᵢ₋₁, a right sum chooses xᵢ* = xᵢ, and a midpoint sum chooses the middle of each subinterval.

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="rs-title rs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rs-title">A general Riemann sum: four rectangles of unequal width under a curve</title>
<desc id="rs-desc">A curve y = f(x) rises from height 1 at x0 = 0 to a peak of about 2.8 near x = 6, then dips slightly. The interval from x0 to x4 is cut into four subintervals of unequal width at x1, x2 and x3. In each subinterval a sample point, marked by a small triangle on the x-axis and labelled x1*, x2*, x3*, x4*, is chosen somewhere inside it, not necessarily at an end. Each rectangle has the width of its subinterval and the height of the curve at its sample point, so the top edge of each rectangle touches the curve once. The third rectangle is labelled: its width is delta x3 and its height is f of x3*.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<defs><pattern id="rs-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern></defs>
<rect x="60.0" y="142.8" width="125.0" height="107.2" fill="url(#rs-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="185.0" y="100.8" width="75.0" height="149.2" fill="url(#rs-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="260.0" y="85.0" width="125.0" height="165.0" fill="url(#rs-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="385.0" y="88.8" width="75.0" height="161.2" fill="url(#rs-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="40" y1="250" x2="500" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<text x="505" y="246" font-size="12" fill="#1d2b44">x</text><text x="66" y="34" font-size="12" fill="#1d2b44">y</text>
<polyline points="60.0,190.0 65.0,186.4 70.0,182.9 75.0,179.5 80.0,176.1 85.0,172.8 90.0,169.5 95.0,166.3 100.0,163.1 105.0,160.0 110.0,157.0 115.0,154.0 120.0,151.1 125.0,148.3 130.0,145.5 135.0,142.8 140.0,140.1 145.0,137.5 150.0,134.9 155.0,132.4 160.0,130.0 165.0,127.6 170.0,125.3 175.0,123.1 180.0,120.9 185.0,118.8 190.0,116.7 195.0,114.7 200.0,112.7 205.0,110.8 210.0,109.0 215.0,107.2 220.0,105.5 225.0,103.9 230.0,102.3 235.0,100.8 240.0,99.3 245.0,97.9 250.0,96.5 255.0,95.2 260.0,94.0 265.0,92.8 270.0,91.7 275.0,90.7 280.0,89.7 285.0,88.8 290.0,87.9 295.0,87.1 300.0,86.3 305.0,85.6 310.0,85.0 315.0,84.4 320.0,83.9 325.0,83.5 330.0,83.1 335.0,82.8 340.0,82.5 345.0,82.3 350.0,82.1 355.0,82.0 360.0,82.0 365.0,82.0 370.0,82.1 375.0,82.3 380.0,82.5 385.0,82.8 390.0,83.1 395.0,83.5 400.0,83.9 405.0,84.4 410.0,85.0 415.0,85.6 420.0,86.3 425.0,87.1 430.0,87.9 435.0,88.8 440.0,89.7 445.0,90.7 450.0,91.7 455.0,92.8 460.0,94.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="410" y="73" font-size="13" fill="#1d2b44">y = f(x)</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="268">x₀</text>
<text x="185" y="268">x₁</text>
<text x="260" y="268">x₂</text>
<text x="385" y="268">x₃</text>
<text x="460" y="268">x₄</text>
<polygon points="135,252 130,260 140,260" fill="#1d2b44"/>
<text x="135" y="284">x₁*</text>
<polygon points="235,252 230,260 240,260" fill="#1d2b44"/>
<text x="235" y="284">x₂*</text>
<polygon points="310,252 305,260 315,260" fill="#1d2b44"/>
<text x="310" y="284">x₃*</text>
<polygon points="435,252 430,260 440,260" fill="#1d2b44"/>
<text x="435" y="284">x₄*</text>
</g>
<line x1="310" y1="85.0" x2="310" y2="250" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<rect x="314" y="158" width="62" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/>
<text x="345" y="172" font-size="13" fill="#1d2b44" text-anchor="middle">f(x₃*)</text>
<line x1="260" y1="304" x2="385" y2="304" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="260" y1="298" x2="260" y2="310" stroke="#1d2b44" stroke-width="1.2"/><line x1="385" y1="298" x2="385" y2="310" stroke="#1d2b44" stroke-width="1.2"/>
<text x="322" y="324" font-size="13" fill="#1d2b44" text-anchor="middle">width Δx₃ = x₃ − x₂</text>
</svg>
<figcaption>Figure 1. A Riemann sum on a partition with unequal widths. Each rectangle uses the width Δxᵢ of its own subinterval and the height f(xᵢ*) of the curve at a sample point xᵢ* chosen inside that subinterval (triangles on the axis). The Riemann sum is the total of the four products f(xᵢ*) Δxᵢ. Axes are unitless.</figcaption>
</figure>

### Equal widths: the formulas you will use most

When all n subintervals have the same width:

- **Δx = (b − a)/n**
- **xᵢ = a + iΔx** for i = 0, 1, …, n. So x₀ = a and xₙ = a + nΔx = b.
- Right sum: **Σ (i = 1 to n) f(a + iΔx) Δx**
- Left sum: **Σ (i = 1 to n) f(a + (i − 1)Δx) Δx**, or equally Σ (i = 0 to n − 1) f(a + iΔx) Δx

For example, on [1, 4] with n = 6, Δx = 3/6 = 1/2, and the right endpoints are 3/2, 2, 5/2, 3, 7/2, 4. The last one is b = 4, which is a useful check.

## From sums to the definite integral

As you make the rectangles thinner, a Riemann sum for a continuous function gets closer and closer to one number. That number is the **definite integral**:

> **Definition.** For f continuous on [a, b],
> **∫ (a to b) f(x) dx = lim Σ (i = 1 to n) f(xᵢ*) Δxᵢ**, where the limit is taken as the largest width Δxᵢ shrinks to 0.

Three things to notice:

- **The largest width must shrink.** With unequal widths it is not enough to let n grow: one wide piece could stay wide. With equal widths, Δx = (b − a)/n, so "largest width → 0" is the same as **n → ∞**.
- **The sample points do not matter in the limit.** For a continuous function, left, right, midpoint or any other choice of xᵢ* gives the same limit. That is why the integral has one value, while L₆ and R₆ can differ.
- **The notation records the recipe.** The integral sign ∫ is a stretched S for "sum". f(x) is the height of a typical rectangle. dx is what a width Δx becomes in the limit. The numbers a and b say where the partition starts and ends.

| Riemann sum | Definite integral |
|---|---|
| Σ (i = 1 to n) | ∫ (a to b) |
| f(xᵢ*) or f(a + iΔx) | f(x) |
| Δx | dx |
| a finite number of rectangles | the limit as widths → 0 |

The integral is a **signed** area: regions below the x-axis count as negative, because there f(xᵢ*) < 0 in every product. In context (Topic 6.1) it is the net accumulated change.

## Translating a limit of sums into an integral

When you are given lim (n → ∞) Σ (i = 1 to n) (something) and asked for an integral, work in this order:

1. **Find Δx.** Look for the factor that has the form (number)/n. That number is b − a.
2. **Find a and the input.** Look inside the function for an expression of the form a + iΔx. Its constant part is a. Replace the whole expression a + iΔx by x.
3. **Find b.** b = a + (b − a).
4. **Write ∫ (a to b) f(x) dx**, with dx where Δx was.

Because the factoring can be done in different ways, one limit of sums can match several correct integrals. Worked example 1 shows this.

## Worked example 1: from a limit of sums to an integral

**Question.** Write lim (n → ∞) Σ (i = 1 to n) √(2 + 3i/n) · (3/n) as a definite integral. Give two different correct forms.

1. **Width.** The factor 3/n has the form (b − a)/n, so Δx = 3/n and b − a = 3.
2. **Input.** Inside the root is 2 + 3i/n = 2 + i · (3/n) = 2 + iΔx. This is a right endpoint xᵢ = a + iΔx with **a = 2**.
3. **End.** b = 2 + 3 = 5.
4. **Function.** Replacing 2 + iΔx by x turns √(2 + 3i/n) into √x. So f(x) = √x.

**Form 1.** ∫ (2 to 5) √x dx.

**Form 2.** Instead, let x = iΔx = 3i/n run from 0 to 3. Then the term is √(2 + x) and the integral is ∫ (0 to 3) √(2 + x) dx. This is the same region slid 2 units to the left, so it has the same value.

**Check.** Both integrals equal about 5.568, and the Riemann sum with n = 1000 is about 5.569. You do not need these decimals in an exam; they only confirm that the two forms agree.

**Common slip.** Writing ∫ (2 to 5) √(2 + x) dx mixes the two forms. It shifts the input twice and gives about 7.01, a different number.

## Translating an integral into a limit of sums

To go the other way, choose equal widths and right endpoints (unless a question asks for left endpoints):

**∫ (a to b) f(x) dx = lim (n → ∞) Σ (i = 1 to n) f(a + i(b − a)/n) · (b − a)/n**

Substitute your a, b and f, and simplify inside f.

## Worked example 2: from an integral to a limit of sums, then a value

**Question.** (a) Write ∫ (1 to 4) (5 − x) dx as the limit of a right Riemann sum. (b) Find R₆. (c) Find the value of the integral and explain how R₆ compares with it.

**(a)** Here a = 1, b = 4, so Δx = 3/n and xᵢ = 1 + 3i/n. Then f(xᵢ) = 5 − (1 + 3i/n) = 4 − 3i/n. So

**∫ (1 to 4) (5 − x) dx = lim (n → ∞) Σ (i = 1 to n) (4 − 3i/n) · (3/n)**

**(b)** With n = 6, Δx = 1/2 and the right endpoints are 3/2, 2, 5/2, 3, 7/2, 4. The heights 5 − x are 7/2, 3, 5/2, 2, 3/2, 1. So

R₆ = (1/2)(7/2 + 3 + 5/2 + 2 + 3/2 + 1) = (1/2)(27/2) = **27/4 = 6.75**

**(c)** The graph of y = 5 − x on [1, 4] is above the axis and the region under it is a trapezoid with parallel sides 4 and 1 and width 3. Its area is (4 + 1)/2 × 3 = **15/2 = 7.5**. Since 5 − x is decreasing, every right-endpoint rectangle sits below the line, so R₆ = 6.75 is an underestimate. The left sum L₆ = 33/4 = 8.25 overestimates.

**Optional check with a sum formula.** Using Σ (i = 1 to n) i = n(n + 1)/2, the right sum simplifies to 12 − 9(n + 1)/(2n). As n → ∞ this approaches 12 − 9/2 = 15/2, matching the geometry. This algebra is background; it is not needed to answer exam questions about translation.

## Common misconceptions

- **"Δx and dx are the same thing."** Δx is a real, positive width in a finite sum. dx is notation in the integral that records the variable and where the width went in the limit.
- **Forgetting the width factor.** lim Σ f(2 + 3i/n) · (1/n) is not ∫ (2 to 5) f(x) dx. With width 1/n the sum is one third of it, because the true width is 3/n.
- **Reading b straight off the term.** In √(2 + 3i/n), the number 3 is b − a, not b. Here b = 5.
- **Shifting twice.** If you keep a = 2 as the lower limit, the function is √x, not √(2 + x).
- **"n → ∞ always makes widths shrink."** Only for equal widths. For a general partition the condition is that the largest width goes to 0.
- **"Left and right sums give different integrals."** For a continuous function they have the same limit. They differ only for finite n.
- **Miscounting terms.** Σ (i = 0 to n − 1) has n terms; Σ (i = 0 to n) has n + 1.
- **"An integral is always a positive area."** It is signed. Rectangles below the axis contribute negative products.
- **Dropping dx.** Without dx the integral does not say which variable the widths are measured in. Keep it in every integral you write.

## Where this leads

You can now move between a Riemann sum, its limit and the definite integral it defines. In [Topic 6.4, The Fundamental Theorem of Calculus and Accumulation Functions](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/), you will let the upper limit vary, ∫ (a to x) f(t) dt, which turns an integral into a new function, and you will find its derivative. The estimating methods from [Topic 6.2](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/) remain useful whenever an integral cannot be found exactly. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-checklist/) to consolidate.
