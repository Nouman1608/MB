---
resourceId: "mb-ap-calcbc-10.14-study-guide"
title: "Finding Taylor or Maclaurin Series for a Function: Study Guide (Calculus BC 10.14)"
description: "Build Taylor and Maclaurin series from derivatives, learn the series for eˣ, sin x, cos x and 1/(1 − x), and read derivatives and sums back from a series."
course: "calculus-bc"
unit: 10
topics: ["10.14"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Taylor polynomials and the coefficient f⁽ⁿ⁾(c)/n! (Topic 10.11)"
  - "Radius and interval of convergence of power series (Topic 10.13)"
  - "Geometric series (Topic 10.2) and the ratio test (Topic 10.8)"
  - "Derivatives of eˣ, sin x and cos x, and the chain rule (Unit 2 and Topic 3.1)"
prerequisiteResources: ["mb-ap-calcbc-10.13-study-guide"]
learningObjectives:
  - "Explain how a Taylor polynomial is a partial sum of a Taylor series"
  - "Find the Taylor series of a function about x = c from a pattern in its derivatives, including the general term"
  - "Derive and recall the Maclaurin series for eˣ, sin x, cos x and 1/(1 − x), with where each converges"
  - "Recognise the Maclaurin series for 1/(1 − x) as a geometric series"
  - "Use a known series to write the series for a related function"
  - "Read derivative values, local behaviour and sums of numerical series from a Taylor series"
skills: ["1", "2"]
studyMinutes: 55
difficulty: "core"
calculator: "mixed"
calculatorNote: "Building series is a no-calculator skill. Where a calculator is allowed, you may use it to compare a partial sum with the function value; give decimals to 3 decimal places unless told otherwise."
related: ["mb-ap-calcbc-10.14-revision-notes", "mb-ap-calcbc-10.14-practice", "mb-ap-calcbc-10.14-checklist"]
next: "mb-ap-calcbc-10.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "The Taylor series for f about c is Σ f⁽ⁿ⁾(c)(x − c)ⁿ/n!. A Taylor polynomial is one of its partial sums. A Maclaurin series has c = 0."
  - "Know four series: eˣ = Σ xⁿ/n!, sin x = Σ (−1)ⁿx^(2n+1)/(2n+1)!, cos x = Σ (−1)ⁿx^(2n)/(2n)! (all real x), and 1/(1 − x) = Σ xⁿ for −1 < x < 1."
  - "Work backwards too: the coefficient of (x − c)ⁿ times n! is f⁽ⁿ⁾(c)."
  - "Give the general term when asked, and state where the series converges."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Taylor and Maclaurin series are BC-only content. AB students can skip this page."
  - question: "What is the difference between a Taylor series and a Maclaurin series?"
    answer: "A Maclaurin series is a Taylor series centred at x = 0. Every Maclaurin series is a Taylor series; a Taylor series about any other centre uses powers of (x − c)."
  - question: "Which series should I memorise?"
    answer: "The series for eˣ, sin x, cos x and 1/(1 − x), with their intervals of convergence. Many other series in this unit are built from these four."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Taylor and Maclaurin series are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

If any of these is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first. The previous topic, [radius and interval of convergence](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/), gives you the tools to say where a series converges.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Taylor polynomials | 10.11 | Each coefficient is f⁽ⁿ⁾(c)/n! |
| Radius and interval of convergence | 10.13 | Stating where each series converges |
| Geometric series | 10.2 | The series for 1/(1 − x) |
| Ratio test | 10.8 | Showing the eˣ, sin x and cos x series converge for all x |
| Derivatives of eˣ, sin x, cos x; chain rule | Units 2–3 | Finding derivative patterns |

Notation on this page: **Σ from n = 0 to ∞ of uₙ** is the infinite series u₀ + u₁ + u₂ + … . **f⁽ⁿ⁾(c)** is the nth derivative of f at c, with f⁽⁰⁾ = f. Recall 0! = 1.

## From Taylor polynomials to Taylor series

In Topic 10.11 you built the **nth-degree Taylor polynomial** for f about x = c:

Pₙ(x) = f(c) + f′(c)(x − c) + f″(c)(x − c)²/2! + … + f⁽ⁿ⁾(c)(x − c)ⁿ/n!

If f has derivatives of every order at c, you never have to stop. Keeping every term gives the **Taylor series for f about x = c**:

> **f(c) + f′(c)(x − c) + f″(c)(x − c)²/2! + … = Σ from n = 0 to ∞ of f⁽ⁿ⁾(c)(x − c)ⁿ / n!**

When c = 0 it is called the **Maclaurin series** for f:

> **Σ from n = 0 to ∞ of f⁽ⁿ⁾(0) xⁿ / n!**

**The polynomial is a partial sum.** P₃(x) is the sum of the first four terms of the Taylor series (the terms of degree 0 to 3). In general, the nth-degree Taylor polynomial is the partial sum of the series up to the (x − c)ⁿ term. So "the series converges at x" means "the Taylor polynomials at x settle down to a limit as the degree grows".

**Where does it equal f?** A Taylor series is a power series, so by Topic 10.13 it converges on an interval centred at c (or only at c, or everywhere). For eˣ, sin x, cos x, 1/(1 − x), and the functions built from them in this unit, the series converges to f(x) at every x inside its interval. (Background: there are unusual functions where a Taylor series converges to something else, but they are outside this course.)

## The four foundation series

You should be able to derive these and also recall them quickly.

**eˣ.** Every derivative of eˣ is eˣ, and e⁰ = 1. So every coefficient is 1/n!:

eˣ = 1 + x + x²/2! + x³/3! + … = **Σ from n = 0 to ∞ of xⁿ/n!**

Ratio test: |uₙ₊₁/uₙ| = |x|/(n + 1) → 0 for every x, so it converges for **all real x**.

**sin x.** The derivatives cycle sin x, cos x, −sin x, −cos x, sin x, … At 0 their values cycle **0, 1, 0, −1**. Only odd powers survive, with alternating signs:

sin x = x − x³/3! + x⁵/5! − x⁷/7! + … = **Σ from n = 0 to ∞ of (−1)ⁿ x^(2n+1)/(2n + 1)!**

**cos x.** The derivatives at 0 cycle **1, 0, −1, 0**. Only even powers survive:

cos x = 1 − x²/2! + x⁴/4! − x⁶/6! + … = **Σ from n = 0 to ∞ of (−1)ⁿ x^(2n)/(2n)!**

For both, the ratio of consecutive terms is x² divided by a product of two numbers that grow with n, so the limit is 0 and both converge for **all real x**.

**1/(1 − x).** Here f′(x) = 1/(1 − x)², f″(x) = 2/(1 − x)³, f‴(x) = 6/(1 − x)⁴, and in general f⁽ⁿ⁾(x) = n!/(1 − x)ⁿ⁺¹. So f⁽ⁿ⁾(0) = n! and every coefficient is n!/n! = 1:

1/(1 − x) = 1 + x + x² + x³ + … = **Σ from n = 0 to ∞ of xⁿ**

This is a **geometric series** with first term 1 and ratio x. It converges only when |x| < 1. At x = ±1 the terms do not tend to 0, so the interval is **(−1, 1)**.

| f(x) | Maclaurin series | General term | Converges for |
|---|---|---|---|
| eˣ | 1 + x + x²/2! + x³/3! + … | xⁿ/n! | all real x |
| sin x | x − x³/3! + x⁵/5! − … | (−1)ⁿ x^(2n+1)/(2n + 1)! | all real x |
| cos x | 1 − x²/2! + x⁴/4! − … | (−1)ⁿ x^(2n)/(2n)! | all real x |
| 1/(1 − x) | 1 + x + x² + x³ + … | xⁿ | −1 < x < 1 |

**Quick checks.** sin x is an odd function and its series has only odd powers; cos x is even and has only even powers. Differentiating the sin series term by term gives the cos series, as it should.

## Worked example 1: a Taylor series from a derivative pattern

**Question.** Find the Taylor series for f(x) = 1/x² about x = 1. Give the first four terms and the general term, and find the interval of convergence.

1. **Derivatives.** Write f(x) = x⁻².
   f′(x) = −2x⁻³, f″(x) = 6x⁻⁴, f‴(x) = −24x⁻⁵, f⁽⁴⁾(x) = 120x⁻⁶.
2. **Values at x = 1.** f(1) = 1, f′(1) = −2, f″(1) = 6, f‴(1) = −24, f⁽⁴⁾(1) = 120.
3. **Spot the pattern.** The sizes are 1, 2, 6, 24, 120, which are 1!, 2!, 3!, 4!, 5!. The signs alternate. So **f⁽ⁿ⁾(1) = (−1)ⁿ(n + 1)!**.
4. **Coefficients.** aₙ = f⁽ⁿ⁾(1)/n! = (−1)ⁿ(n + 1)!/n! = **(−1)ⁿ(n + 1)**.
5. **Write the series.**
   **1/x² = 1 − 2(x − 1) + 3(x − 1)² − 4(x − 1)³ + … = Σ from n = 0 to ∞ of (−1)ⁿ(n + 1)(x − 1)ⁿ**
6. **Radius.** |uₙ₊₁/uₙ| = |x − 1| · (n + 2)/(n + 1) → |x − 1|. So |x − 1| < 1 and R = 1.
7. **Endpoints.** At x = 2 the series is Σ (−1)ⁿ(n + 1) = 1 − 2 + 3 − …; at x = 0 it is Σ (n + 1) = 1 + 2 + 3 + … . In both, the terms do not tend to 0, so both **diverge** (nth term test).

**Answer.** Σ from n = 0 to ∞ of (−1)ⁿ(n + 1)(x − 1)ⁿ, with interval of convergence **(0, 2)**.

**Checks.**
- *Pattern:* the n = 4 term should be 5(x − 1)⁴, and f⁽⁴⁾(1)/4! = 120/24 = 5. ✓
- *A value inside:* at x = 1.2, 1/x² = 25/36 ≈ 0.6944. The partial sums give P₂(1.2) = 0.72 and P₅(1.2) ≈ 0.6941, closing in on 0.6944. ✓
- *Sense:* 1/x² is undefined at 0, so the series cannot reach past 0. The interval is centred at 1, so it cannot reach past 2 either, even though 1/x² is defined there.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="ps-title ps-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ps-title">y = 1/x² and three partial sums of its Taylor series about x = 1</title>
<desc id="ps-desc">Graph for x from 0.3 to 2.3 and y from −2 to 6. The solid curve is y = 1/x². The dashed curve is the partial sum P2, the dotted curve is P5 and the dash-dot curve is P10. All four curves pass through (1, 1). Between about x = 0.6 and x = 1.4 the partial sums lie almost on top of 1/x², and P10 stays close over a wider part of the interval from 0 to 2. A dashed vertical line marks x = 2, the right end of the interval of convergence, and the region to its right is hatched and labelled outside the interval. There P10 shoots off the top of the graph and P5 drops off the bottom, while 1/x² stays small and positive.</desc>
<defs><pattern id="hatch1014" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#f3f4f6"/><line x1="0" y1="0" x2="0" y2="8" stroke="#9aa3b2" stroke-width="1"/></pattern><clipPath id="clip1014"><rect x="70" y="30" width="450" height="240"/></clipPath></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<rect x="452.5" y="30" width="67.5" height="240" fill="url(#hatch1014)"/>
<line x1="70" y1="210.0" x2="520" y2="210.0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="270" x2="70" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1"><line x1="115.0" y1="206.0" x2="115.0" y2="214.0"/><line x1="227.5" y1="206.0" x2="227.5" y2="214.0"/><line x1="340.0" y1="206.0" x2="340.0" y2="214.0"/><line x1="452.5" y1="206.0" x2="452.5" y2="214.0"/><line x1="66" y1="270.0" x2="74" y2="270.0"/><line x1="66" y1="150.0" x2="74" y2="150.0"/><line x1="66" y1="90.0" x2="74" y2="90.0"/><line x1="66" y1="30.0" x2="74" y2="30.0"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="115.0" y="228.0">0.5</text><text x="227.5" y="228.0">1</text><text x="340.0" y="228.0">1.5</text><text x="452.5" y="228.0">2</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="274.0">−2</text><text x="62" y="154.0">2</text><text x="62" y="94.0">4</text><text x="62" y="34.0">6</text><text x="62" y="214.0">0</text></g>
<text x="295" y="318" font-size="13" fill="#1d2b44" text-anchor="middle">x</text>
<line x1="452.5" y1="30" x2="452.5" y2="270" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g clip-path="url(#clip1014)" fill="none" stroke="#1d2b44">
<polyline stroke-width="3" points="70.0,-30.0 73.8,-30.0 77.5,-30.0 81.2,-30.0 85.0,-13.1 88.8,5.8 92.5,22.5 96.2,37.2 100.0,50.2 103.8,61.9 107.5,72.2 111.2,81.6 115.0,90.0 118.7,97.6 122.5,104.5 126.3,110.8 130.0,116.6 133.8,121.8 137.5,126.7 141.2,131.1 145.0,135.2 148.8,139.0 152.5,142.5 156.2,145.8 160.0,148.8 163.8,151.6 167.5,154.2 171.2,156.7 175.0,159.0 178.8,161.1 182.5,163.1 186.2,165.0 190.0,166.8 193.8,168.5 197.5,170.1 201.2,171.6 205.0,173.0 208.8,174.3 212.5,175.6 216.2,176.8 220.0,177.9 223.8,179.0 227.5,180.0 231.2,181.0 235.0,181.9 238.8,182.8 242.5,183.6 246.2,184.4 250.0,185.2 253.8,185.9 257.5,186.6 261.2,187.3 265.0,188.0 268.8,188.6 272.5,189.2 276.2,189.7 280.0,190.3 283.8,190.8 287.5,191.3 291.2,191.8 295.0,192.2 298.8,192.7 302.5,193.1 306.2,193.5 310.0,193.9 313.8,194.3 317.5,194.7 321.2,195.1 325.0,195.4 328.8,195.7 332.5,196.1 336.2,196.4 340.0,196.7 343.8,197.0 347.5,197.2 351.2,197.5 355.0,197.8 358.8,198.0 362.5,198.3 366.2,198.5 370.0,198.8 373.8,199.0 377.5,199.2 381.2,199.4 385.0,199.6 388.8,199.8 392.5,200.0 396.2,200.2 400.0,200.4 403.8,200.6 407.5,200.7 411.2,200.9 415.0,201.1 418.8,201.2 422.5,201.4 426.2,201.5 430.0,201.7 433.8,201.8 437.5,202.0 441.2,202.1 445.0,202.2 448.8,202.4 452.5,202.5 456.2,202.6 460.0,202.7 463.7,202.9 467.5,203.0 471.2,203.1 475.0,203.2 478.8,203.3 482.5,203.4 486.2,203.5 490.0,203.6 493.7,203.7 497.5,203.8 501.2,203.9 505.0,204.0 508.8,204.1 512.5,204.2 516.2,204.2 520.0,204.3"/>
<polyline stroke-width="1.8" stroke-dasharray="9 5" points="70.0,93.9 73.8,97.0 77.5,100.0 81.2,103.0 85.0,105.9 88.8,108.8 92.5,111.6 96.2,114.4 100.0,117.1 103.8,119.8 107.5,122.4 111.2,125.0 115.0,127.5 118.7,130.0 122.5,132.4 126.3,134.8 130.0,137.1 133.8,139.4 137.5,141.6 141.2,143.8 145.0,145.9 148.8,148.0 152.5,150.0 156.2,152.0 160.0,153.9 163.8,155.8 167.5,157.6 171.2,159.4 175.0,161.1 178.8,162.8 182.5,164.4 186.2,166.0 190.0,167.5 193.8,169.0 197.5,170.4 201.2,171.8 205.0,173.1 208.8,174.4 212.5,175.6 216.2,176.8 220.0,177.9 223.8,179.0 227.5,180.0 231.2,181.0 235.0,181.9 238.8,182.8 242.5,183.6 246.2,184.4 250.0,185.1 253.8,185.8 257.5,186.4 261.2,187.0 265.0,187.5 268.8,188.0 272.5,188.4 276.2,188.8 280.0,189.1 283.8,189.4 287.5,189.6 291.2,189.8 295.0,189.9 298.8,190.0 302.5,190.0 306.2,190.0 310.0,189.9 313.8,189.8 317.5,189.6 321.2,189.4 325.0,189.1 328.8,188.8 332.5,188.4 336.2,188.0 340.0,187.5 343.8,187.0 347.5,186.4 351.2,185.8 355.0,185.1 358.8,184.4 362.5,183.6 366.2,182.8 370.0,181.9 373.8,181.0 377.5,180.0 381.2,179.0 385.0,177.9 388.8,176.8 392.5,175.6 396.2,174.4 400.0,173.1 403.8,171.8 407.5,170.4 411.2,169.0 415.0,167.5 418.8,166.0 422.5,164.4 426.2,162.8 430.0,161.1 433.8,159.4 437.5,157.6 441.2,155.8 445.0,153.9 448.8,152.0 452.5,150.0 456.2,148.0 460.0,145.9 463.7,143.8 467.5,141.6 471.2,139.4 475.0,137.1 478.8,134.8 482.5,132.4 486.2,130.0 490.0,127.5 493.7,125.0 497.5,122.4 501.2,119.8 505.0,117.1 508.8,114.4 512.5,111.6 516.2,108.8 520.0,105.9"/>
<polyline stroke-width="2" stroke-dasharray="2 4" stroke-linecap="round" points="70.0,-13.5 73.8,-0.8 77.5,11.1 81.2,22.4 85.0,32.9 88.8,42.9 92.5,52.2 96.2,61.0 100.0,69.3 103.8,77.0 107.5,84.3 111.2,91.1 115.0,97.5 118.7,103.5 122.5,109.1 126.3,114.4 130.0,119.3 133.8,123.9 137.5,128.2 141.2,132.3 145.0,136.1 148.8,139.6 152.5,143.0 156.2,146.1 160.0,149.0 163.8,151.8 167.5,154.3 171.2,156.7 175.0,159.0 178.8,161.1 182.5,163.1 186.2,165.0 190.0,166.8 193.8,168.5 197.5,170.1 201.2,171.6 205.0,173.0 208.8,174.3 212.5,175.6 216.2,176.8 220.0,177.9 223.8,179.0 227.5,180.0 231.2,181.0 235.0,181.9 238.8,182.8 242.5,183.6 246.2,184.4 250.0,185.2 253.8,185.9 257.5,186.6 261.2,187.3 265.0,188.0 268.8,188.6 272.5,189.2 276.2,189.8 280.0,190.3 283.8,190.8 287.5,191.4 291.2,191.9 295.0,192.4 298.8,192.9 302.5,193.3 306.2,193.8 310.0,194.3 313.8,194.8 317.5,195.3 321.2,195.8 325.0,196.3 328.8,196.9 332.5,197.5 336.2,198.1 340.0,198.8 343.8,199.5 347.5,200.2 351.2,201.1 355.0,202.0 358.8,203.0 362.5,204.1 366.2,205.3 370.0,206.6 373.8,208.0 377.5,209.6 381.2,211.4 385.0,213.3 388.8,215.4 392.5,217.7 396.2,220.3 400.0,223.0 403.8,226.1 407.5,229.4 411.2,233.0 415.0,236.9 418.8,241.2 422.5,245.9 426.2,251.0 430.0,256.5 433.8,262.4 437.5,268.8 441.2,275.8 445.0,283.3 448.8,291.3 452.5,300.0 456.2,309.3 460.0,319.3 463.7,330.0 467.5,330.0 471.2,330.0 475.0,330.0 478.8,330.0 482.5,330.0 486.2,330.0 490.0,330.0 493.7,330.0 497.5,330.0 501.2,330.0 505.0,330.0 508.8,330.0 512.5,330.0 516.2,330.0 520.0,330.0"/>
<polyline stroke-width="1.8" stroke-dasharray="10 4 2 4" points="70.0,-30.0 73.8,-30.0 77.5,-30.0 81.2,-24.5 85.0,-5.8 88.8,11.1 92.5,26.2 96.2,39.8 100.0,52.0 103.8,63.1 107.5,73.1 111.2,82.1 115.0,90.4 118.7,97.9 122.5,104.7 126.3,110.9 130.0,116.6 133.8,121.9 137.5,126.7 141.2,131.1 145.0,135.2 148.8,139.0 152.5,142.5 156.2,145.8 160.0,148.8 163.8,151.6 167.5,154.2 171.2,156.7 175.0,159.0 178.8,161.1 182.5,163.1 186.2,165.0 190.0,166.8 193.8,168.5 197.5,170.1 201.2,171.6 205.0,173.0 208.8,174.3 212.5,175.6 216.2,176.8 220.0,177.9 223.8,179.0 227.5,180.0 231.2,181.0 235.0,181.9 238.8,182.8 242.5,183.6 246.2,184.4 250.0,185.2 253.8,185.9 257.5,186.6 261.2,187.3 265.0,188.0 268.8,188.6 272.5,189.2 276.2,189.7 280.0,190.3 283.8,190.8 287.5,191.3 291.2,191.8 295.0,192.2 298.8,192.7 302.5,193.1 306.2,193.5 310.0,193.9 313.8,194.3 317.5,194.7 321.2,195.0 325.0,195.4 328.8,195.7 332.5,196.0 336.2,196.3 340.0,196.6 343.8,196.8 347.5,197.0 351.2,197.2 355.0,197.3 358.8,197.4 362.5,197.5 366.2,197.5 370.0,197.4 373.8,197.1 377.5,196.8 381.2,196.3 385.0,195.6 388.8,194.6 392.5,193.4 396.2,191.8 400.0,189.8 403.8,187.3 407.5,184.2 411.2,180.4 415.0,175.6 418.8,169.9 422.5,163.0 426.2,154.6 430.0,144.6 433.8,132.6 437.5,118.3 441.2,101.4 445.0,81.3 448.8,57.7 452.5,30.0 456.2,-2.5 460.0,-30.0 463.7,-30.0 467.5,-30.0 471.2,-30.0 475.0,-30.0 478.8,-30.0 482.5,-30.0 486.2,-30.0 490.0,-30.0 493.7,-30.0 497.5,-30.0 501.2,-30.0 505.0,-30.0 508.8,-30.0 512.5,-30.0 516.2,-30.0 520.0,-30.0"/>
</g>
<circle cx="227.5" cy="180.0" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44"><text x="148.0" y="128.0" text-anchor="start">y = 1/x² (solid)</text><text x="489.5" y="114.4" text-anchor="end">P₂ (dashed)</text><text x="414.2" y="262.5" text-anchor="end">P₅ (dotted)</text><text x="430.8" y="42.0" text-anchor="end">P₁₀ (dash-dot)</text><text x="232.0" y="170.0" text-anchor="start">(1, 1)</text></g>
<rect x="456.5" y="36" width="60" height="34" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="486.5" y="50" font-size="11" fill="#1d2b44" text-anchor="middle">outside</text><text x="486.5" y="64" font-size="11" fill="#1d2b44" text-anchor="middle">interval</text>
</svg>
<figcaption>Figure 1. Partial sums of the Taylor series for 1/x² about x = 1. Inside the interval of convergence (0, 2), adding more terms brings the partial sums closer to 1/x². At x = 2 and beyond (hatched), the partial sums move further apart as more terms are added, even though 1/x² itself is defined there.</figcaption>
</figure>

## Taylor series about other centres

The same method works for any centre. For eˣ about x = −1, every derivative is eˣ, so every derivative at −1 is e⁻¹:

eˣ = e⁻¹ + e⁻¹(x + 1) + e⁻¹(x + 1)²/2! + … = **Σ from n = 0 to ∞ of e⁻¹(x + 1)ⁿ/n!**, for all real x.

Check another way: eˣ = e⁻¹ · e^(x+1), and putting (x + 1) into the eˣ series gives the same answer.

## Building on the foundation series

You do not always need to differentiate. If a function is one of the four foundation functions with something substituted, substitute into the known series. For example, replacing x by −2x in the eˣ series:

e^(−2x) = Σ (−2x)ⁿ/n! = **1 − 2x + 2x² − (4/3)x³ + …**, for all real x.

Each term is (−2)ⁿxⁿ/n!; the whole of (−2x) is raised to the power n. Topic 10.15 develops this idea much further, with substitution, multiplying by powers of x, and term-by-term calculus.

## Worked example 2: interpreting a Taylor series

**Question.** A function g has derivatives of all orders. Its Taylor series about x = 1 is

**g(x) = Σ from n = 0 to ∞ of (−1)ⁿ(n + 2)(x − 1)ⁿ/n! = 2 − 3(x − 1) + 2(x − 1)² − (5/6)(x − 1)³ + …**

and it converges to g(x) for all real x.

(a) Find g(1), g′(1), g″(1) and g⁽⁵⁾(1).
(b) Is g increasing or decreasing at x = 1? Is its graph concave up or down there?
(c) Use the second-degree Taylor polynomial to estimate g(1.2).

1. **Link coefficients to derivatives.** The coefficient of (x − 1)ⁿ is aₙ = g⁽ⁿ⁾(1)/n!, so **g⁽ⁿ⁾(1) = n! · aₙ**.
2. **(a)** a₀ = 2, so g(1) = 2. a₁ = −3, so g′(1) = 1! · (−3) = −3. a₂ = 4/2! = 2, so g″(1) = 2! · 2 = 4. For n = 5, a₅ = (−1)⁵ · 7/5!, so g⁽⁵⁾(1) = 5! · (−7/5!) = **−7**. (In general g⁽ⁿ⁾(1) = (−1)ⁿ(n + 2): the n! cancels.)
3. **(b)** g′(1) = −3 < 0, so g is **decreasing** at x = 1. g″(1) = 4 > 0, so the graph is **concave up** there.
4. **(c)** P₂(x) = 2 − 3(x − 1) + 2(x − 1)². With x − 1 = 0.2: P₂(1.2) = 2 − 0.6 + 0.08 = **1.48**.

**Checks.**
- *Partial sums:* adding the cubic term, P₃(1.2) = 1.48 − (5/6)(0.008) ≈ 1.4733. The changes are getting smaller, as you expect inside the interval of convergence.
- *Convergence for all x:* the ratio of consecutive terms is |x − 1|(n + 3)/((n + 1)(n + 2)), which tends to 0. ✓
- *Background only:* this series is the Taylor series of g(x) = (3 − x)e^(1 − x), and g(1.2) ≈ 1.474.

**Interpretation.** You found several derivatives, the direction of the graph and an estimate without ever knowing a formula for g. That is the main way Taylor series appear in exam-style questions.

## Recognising the sum of a series

Because the foundation series equal their functions, you can sometimes find the exact sum of a numerical series by matching it to one.

- 1 + 3 + 3²/2! + 3³/3! + … = Σ 3ⁿ/n! is the eˣ series at x = 3, so it equals **e³**.
- 1 − 1/2! + 1/4! − 1/6! + … is the cos x series at x = 1, so it equals **cos 1** (about 0.540).
- 1 + ½ + ¼ + ⅛ + … is the 1/(1 − x) series at x = ½, so it equals 1/(1 − ½) = **2**.

Match the **powers**, the **factorials** and the **signs**. If the factorials are (2n)!, think cos; (2n + 1)!, think sin; n!, think eˣ; none, think geometric.

## Common misconceptions

- **Forgetting the n!** The coefficient is f⁽ⁿ⁾(c)/n!, not f⁽ⁿ⁾(c). Writing 1/x² = 1 − 2(x − 1) + 6(x − 1)² + … is wrong.
- **Using xⁿ for a series about c ≠ 0.** About x = 1 the powers are (x − 1)ⁿ.
- **Mixing up sin and cos.** sin x has odd powers and odd factorials, starting with x; cos x has even powers and even factorials, starting with 1.
- **Wrong sign pattern.** In the sin and cos series the signs alternate +, −, +, …, starting from the first nonzero term.
- **Using 1/(1 − x) = Σ xⁿ outside (−1, 1).** At x = 2, 1/(1 − x) = −1, but 1 + 2 + 4 + … diverges.
- **Confusing "degree n" with "n terms".** For sin x, P₃ and P₄ are both x − x³/6, because the x⁴ coefficient is 0.
- **Reading a coefficient as the derivative.** If the coefficient of (x − c)³ is 1/2, then f‴(c) = 3! · 1/2 = 3, not 1/2.
- **Substituting into only part of the term.** In e^(−2x), the term is (−2x)ⁿ/n!, not −2xⁿ/n!.

## Where this leads

Next, [Representing functions as power series](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-study-guide/) (Topic 10.15) builds new series from the four on this page by substitution, algebra and term-by-term differentiation and integration. The error bounds from Topics 10.10 and 10.12 then tell you how good a partial sum is. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-checklist/) to consolidate.
