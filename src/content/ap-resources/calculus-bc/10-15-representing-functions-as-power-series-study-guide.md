---
resourceId: "mb-ap-calcbc-10.15-study-guide"
title: "Representing Functions as Power Series: Study Guide (Calculus BC 10.15)"
description: "Build power series for new functions from known series by substitution, algebra, geometric-series rewriting and term-by-term differentiation or integration, and find where each series is valid."
course: "calculus-bc"
unit: 10
topics: ["10.15"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Geometric series and their sums (Topic 10.2)"
  - "Radius and interval of convergence of a power series, including endpoint tests (Topic 10.13)"
  - "Maclaurin series for 1/(1 − x), eˣ, sin x and cos x (Topic 10.14)"
  - "Antiderivatives and definite integrals of powers of x (Topics 6.7 and 6.8)"
prerequisiteResources: ["mb-ap-calcbc-10.14-study-guide"]
learningObjectives:
  - "Rewrite a rational function as a·1/(1 − r) and write its power series and interval of convergence"
  - "Build new series from the series for eˣ, sin x, cos x and 1/(1 − x) by substitution and by multiplying or dividing by a power of x"
  - "Differentiate and integrate a power series term by term, including finding the constant after integrating"
  - "Explain why the radius of convergence stays the same after differentiating or integrating, and test the endpoints again"
  - "Use a constructed series to find a derivative value at the centre, a limit, the sum of a numerical series or an approximation"
skills: ["2", "3"]
studyMinutes: 55
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Building series is a no-calculator skill. Where a calculator is allowed, you may use it to compare a partial sum with the function value; give decimals to 3 decimal places unless told otherwise."
related: ["mb-ap-calcbc-10.15-revision-notes", "mb-ap-calcbc-10.15-practice", "mb-ap-calcbc-10.15-checklist"]
next: "mb-ap-calcbc-10.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Do not differentiate f again and again. Start from a series you already know and change it."
  - "The main tools are: rewriting as a/(1 − r), substituting for x, multiplying by a power of x, and differentiating or integrating term by term."
  - "Term-by-term differentiation and integration keep the radius of convergence. The endpoints can change, so test them again."
  - "After integrating, find the constant by putting in the centre (usually x = 0)."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Power series are BC-only content. AB students can skip this page."
  - question: "Is a series built this way really the Taylor series of the function?"
    answer: "Yes. If a power series has a positive radius of convergence and adds up to f(x) on that interval, it is the Taylor series of f there. So you can read f⁽ⁿ⁾(0) from its coefficients."
  - question: "Do I always need the general term?"
    answer: "Often a question asks for the first few nonzero terms and the general term. Give both when asked. The general term is also what you need for the ratio test and the endpoint checks."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Representing functions as power series is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic is the last one in the course. It uses most of Unit 10. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Geometric series | 10.2 | The pattern a + ar + ar² + … = a/(1 − r) for \|r\| < 1 |
| Radius and interval of convergence | 10.13 | Finding where a new series is valid, and testing endpoints |
| Maclaurin series of key functions | [10.14](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/) | The starting series you change |
| Antiderivatives of powers | 6.8 | Integrating a series one term at a time |

Notation: **Σ from n = 0 to ∞ of aₙ** is an infinite series. A series "**about x = 0**" (a Maclaurin series) uses powers of x. A series "about x = c" uses powers of (x − c).

## The idea: change a series you already know

In Topic 10.14 you found a Maclaurin series by working out f(0), f′(0), f″(0) and so on. That works, but the derivatives of a function like ln(4 + x) or 5x/(3 + x²) get messy fast.

There is a quicker route. Start from a series you already know, and change it the same way the function changes. Four series do almost all the work:

| Function | Series about x = 0 | Valid for |
|---|---|---|
| 1/(1 − x) | 1 + x + x² + x³ + … = Σ xⁿ | −1 < x < 1 |
| eˣ | 1 + x + x²/2! + x³/3! + … = Σ xⁿ/n! | all real x |
| sin x | x − x³/3! + x⁵/5! − … = Σ (−1)ⁿ x^(2n+1)/(2n+1)! | all real x |
| cos x | 1 − x²/2! + x⁴/4! − … = Σ (−1)ⁿ x^(2n)/(2n)! | all real x |

You can change them in four ways:

1. **Rewrite** a rational function in the form a/(1 − r), then use the geometric series.
2. **Substitute** an expression for x, such as −x², 3x or x/2.
3. **Multiply or divide** by a power of x (or add and subtract series).
4. **Differentiate or integrate** term by term.

**Why this is allowed.** A power series with a positive radius of convergence is the Taylor series of the function it adds up to, on its open interval. So any correct route gives *the* Maclaurin series. You may then read derivatives from it: the coefficient of xⁿ is f⁽ⁿ⁾(0)/n!.

## Rewriting into geometric form

The geometric series needs a **1** in front, then **minus** something. So divide top and bottom to make the constant term 1.

For 2/(5 − x): 2/(5 − x) = (2/5) · 1/(1 − x/5). Here a = 2/5 and r = x/5. So

**2/(5 − x) = Σ (2/5)(x/5)ⁿ = Σ 2xⁿ/5ⁿ⁺¹**, valid when |x/5| < 1, that is −5 < x < 5.

For a plus sign, write + as minus a negative: 1/(1 + u) = 1/(1 − (−u)) = Σ (−1)ⁿ uⁿ.

The interval comes from **|r| < 1**. At an endpoint the terms of a geometric series have size |a|, which does not go to 0, so a geometric series never converges at its endpoints.

## Substituting and multiplying by powers of x

**Substitution.** Replace every x in a known series by the new expression, *including inside the powers*:

- e^(−x²) = 1 − x² + x⁴/2! − x⁶/3! + … = Σ (−1)ⁿ x^(2n)/n!. Valid for all x.
- sin(3x) = 3x − (3x)³/3! + (3x)⁵/5! − … = 3x − 9x³/2 + 81x⁵/40 − …. Note (3x)³ = 27x³, not 3x³.
- 1/(1 − x³) = 1 + x³ + x⁶ + x⁹ + …, valid when |x³| < 1, that is −1 < x < 1.

A substitution can change the interval. If you replace x by x/2 in 1/(1 − x), you need |x/2| < 1, so the interval becomes −2 < x < 2.

**Multiplying or dividing by a power of x.** This shifts every power by the same amount and does not change the interval (except that dividing by x leaves out x = 0 from the formula for the function). For example

(1 − cos x)/x² = (x²/2! − x⁴/4! + x⁶/6! − …)/x² = **1/2 − x²/24 + x⁴/720 − …**

This also shows that the limit of (1 − cos x)/x² as x → 0 is 1/2, the constant term.

**Reading a derivative from a built series.** Let g(x) = x² sin(x²). Substitute x² into sin x, then multiply by x²:

g(x) = x² (x² − x⁶/3! + x¹⁰/5! − …) = x⁴ − x⁸/6 + x¹²/120 − …

The coefficient of x⁸ is −1/6, and it also equals g⁽⁸⁾(0)/8!. So g⁽⁸⁾(0) = 8! × (−1/6) = **−6720**. Finding this by differentiating eight times would take a long time.

## Worked example 1: a rational function, then a substitution

**Question.** Let f(x) = 5/(3 + x).
(a) Write the first four nonzero terms and the general term of the Maclaurin series for f, and find its interval of convergence.
(b) Use (a) to write the Maclaurin series for g(x) = 5x/(3 + x²), with its general term and interval of convergence.

**(a)**

1. **Make the constant 1.** 5/(3 + x) = (5/3) · 1/(1 + x/3) = (5/3) · 1/(1 − (−x/3)).
2. **Read a and r.** a = 5/3 and r = −x/3.
3. **Write the series.** Σ (5/3)(−x/3)ⁿ = **Σ (−1)ⁿ 5xⁿ/3ⁿ⁺¹**.
   First four terms: **5/3 − 5x/9 + 5x²/27 − 5x³/81 + …**
4. **Interval.** The series converges when |−x/3| < 1, so −3 < x < 3. At x = 3 the terms are 5/3, −5/3, 5/3, …; at x = −3 they are all 5/3. Neither tends to 0, so both diverge by the nth term test. The interval of convergence is **−3 < x < 3**.

**(b)**

1. **Spot the link.** 5/(3 + x²) is f with x replaced by x². Then g(x) = x · 5/(3 + x²).
2. **Substitute x²** into the general term: Σ (−1)ⁿ 5(x²)ⁿ/3ⁿ⁺¹ = Σ (−1)ⁿ 5x^(2n)/3ⁿ⁺¹.
3. **Multiply by x:** **g(x) = Σ (−1)ⁿ 5x^(2n+1)/3ⁿ⁺¹ = 5x/3 − 5x³/9 + 5x⁵/27 − 5x⁷/81 + …**
4. **Interval.** We need |x²| < 3, so |x| < √3. At x = ±√3 the terms have size 5√3/3, which does not tend to 0. The interval is **−√3 < x < √3**.

**Check.** At x = 1 (inside the interval), g(1) = 5/4 = 1.25. The partial sums of 5/3 − 5/9 + 5/27 − 5/81 + … are about 1.111 after two terms, 1.235 after four and 1.2498 after eight. They approach 1.25. ✓

## Term-by-term differentiation and integration

Inside its interval of convergence, a power series can be differentiated or integrated one term at a time, just like a polynomial.

If f(x) = Σ aₙ xⁿ for |x| < R, then

- **f′(x) = Σ from n = 1 to ∞ of n aₙ xⁿ⁻¹** (the constant term differentiates to 0, so the sum starts at n = 1), and
- **∫ from 0 to x of f(t) dt = Σ aₙ xⁿ⁺¹/(n + 1)**.

**The radius of convergence R does not change.** The endpoints can. Integrating divides each term by (n + 1), which can make a divergent endpoint converge. Differentiating multiplies by n, which can make a convergent endpoint diverge. So **test both endpoints again** every time.

**Example: differentiating to sum a series.** Differentiate 1/(1 − x) = Σ xⁿ:

1/(1 − x)² = Σ from n = 1 to ∞ of n xⁿ⁻¹ = 1 + 2x + 3x² + …, for |x| < 1.

Multiply by x: x/(1 − x)² = Σ n xⁿ. Put x = 1/2 (inside the interval): **Σ from n = 1 to ∞ of n/2ⁿ = (1/2)/(1/2)² = 2**. A numerical series has been summed by recognising it as a power series.

**Integrating: remember the constant.** If you integrate a series as an indefinite integral, a constant C appears. Find it by putting in the centre, where every power of x is 0.

## Worked example 2: integrating to get a logarithm

**Question.** (a) Find the Maclaurin series for ln(4 + x): the first four nonzero terms and the general term. (b) Find its interval of convergence. (c) Use three terms after the constant to estimate ln(4.4) − ln 4, and say how accurate the estimate is.

**(a)**

1. **Link to a known series.** d/dx [ln(4 + x)] = 1/(4 + x), and 1/(4 + x) is geometric.
2. **Series for 1/(4 + x).** 1/(4 + x) = (1/4) · 1/(1 − (−x/4)) = Σ (−1)ⁿ xⁿ/4ⁿ⁺¹ = 1/4 − x/16 + x²/64 − x³/256 + …, for |x| < 4.
3. **Integrate term by term from 0 to x.** Since ln(4 + x) = ln 4 + ∫ from 0 to x of 1/(4 + t) dt,
   **ln(4 + x) = ln 4 + Σ (−1)ⁿ xⁿ⁺¹/((n + 1) 4ⁿ⁺¹)**
   **= ln 4 + x/4 − x²/32 + x³/192 − x⁴/1024 + …**
4. **The constant.** At x = 0 every power term is 0, so the constant must be ln(4 + 0) = ln 4. Leaving it out is the most common error here.

**(b)**

1. **Radius.** Integration keeps the radius, so R = 4. The series converges for −4 < x < 4.
2. **x = 4.** The terms become (−1)ⁿ 4ⁿ⁺¹/((n + 1) 4ⁿ⁺¹) = (−1)ⁿ/(n + 1): 1 − 1/2 + 1/3 − 1/4 + …. This is the alternating harmonic series, which **converges**.
3. **x = −4.** The terms become (−1)ⁿ (−4)ⁿ⁺¹/((n + 1) 4ⁿ⁺¹) = −1/(n + 1): −(1 + 1/2 + 1/3 + …). This is a multiple of the harmonic series, which **diverges**. (Also, ln(4 + x) is not defined at x = −4.)
4. **Interval of convergence: −4 < x ≤ 4.** The series for 1/(4 + x) converged on −4 < x < 4 only, so integrating has **gained** the endpoint x = 4.

**(c)** ln(4.4) − ln 4 is the series without its constant, at x = 0.4:

0.4/4 − 0.4²/32 + 0.4³/192 = 0.1 − 0.005 + 0.000333… ≈ **0.095333**.

The series is alternating with terms decreasing to 0, so the error is less than the next term, 0.4⁴/1024 = **0.000025**. (The true value, ln 1.1 ≈ 0.095310, is indeed within 0.000025.)

<figure>
<svg viewBox="0 0 540 345" role="img" aria-labelledby="lnps-title lnps-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lnps-title">The graph of y = ln(4 + x) with two partial sums of its Maclaurin series</title>
<desc id="lnps-desc">Axes from x = −6 to 6 and y = −2 to 3. A thick solid curve shows y = ln(4 + x), which falls steeply towards x = −4 and rises slowly to about 2.3 at x = 6. A dashed curve shows the partial sum up to x³. A dotted curve shows the partial sum up to x¹⁰. Between x = −3 and x = 3 the dotted curve lies almost on top of the solid curve, closer than the dashed one. Beyond x = 4 the dotted curve turns sharply down and leaves the graph near x = 6, and to the left of x = −4 both partial sums continue where the function does not exist. A bar under the x-axis marks the interval of convergence from −4, an open circle, to 4, a filled circle.</desc>
<rect x="0" y="0" width="540" height="345" fill="#ffffff"/>
<g stroke="#c9ced8" stroke-width="1">
<line x1="60" y1="40" x2="520" y2="40"/><line x1="60" y1="90" x2="520" y2="90"/><line x1="60" y1="140" x2="520" y2="140"/><line x1="60" y1="240" x2="520" y2="240"/><line x1="60" y1="290" x2="520" y2="290"/>
</g>
<line x1="60" y1="190" x2="525" y2="190" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="290" y1="295" x2="290" y2="35" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="136.7" y1="40" x2="136.7" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 5"/>
<line x1="443.3" y1="40" x2="443.3" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="205">−6</text><text x="136.7" y="205">−4</text><text x="213.3" y="205">−2</text><text x="366.7" y="205">2</text><text x="443.3" y="205">4</text><text x="512" y="205">6</text>
<text x="515" y="183">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="284" y="44">3</text><text x="284" y="94">2</text><text x="284" y="144">1</text><text x="284" y="244">−1</text><text x="284" y="287">−2</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="3" points="142.0,288.3 145.9,261.4 149.7,243.9 153.5,231.0 157.4,220.8 161.2,212.3 165.0,205.1 168.9,198.7 172.7,193.1 176.5,188.0 180.4,183.4 184.2,179.2 188.0,175.4 191.9,171.8 195.7,168.4 199.5,165.3 203.4,162.3 207.2,159.5 211.0,156.9 214.9,154.4 218.7,152.0 222.5,149.7 226.4,147.5 230.2,145.4 234.0,143.4 237.9,141.5 241.7,139.6 245.5,137.8 249.4,136.1 253.2,134.4 257.0,132.8 260.9,131.2 264.7,129.7 268.5,128.2 272.4,126.8 276.2,125.4 280.0,124.0 283.9,122.7 287.7,121.4 291.5,120.2 295.4,119.0 299.2,117.8 303.0,116.6 306.9,115.5 310.7,114.4 314.5,113.3 318.4,112.2 322.2,111.2 326.0,110.1 329.9,109.1 333.7,108.1 337.5,107.2 341.4,106.2 345.2,105.3 349.0,104.4 352.9,103.5 356.7,102.6 360.5,101.8 364.4,100.9 368.2,100.1 372.0,99.3 375.9,98.5 379.7,97.7 383.5,96.9 387.4,96.1 391.2,95.3 395.0,94.6 398.9,93.9 402.7,93.1 406.5,92.4 410.4,91.7 414.2,91.0 418.0,90.3 421.9,89.7 425.7,89.0 429.5,88.3 433.4,87.7 437.2,87.0 441.0,86.4 444.9,85.8 448.7,85.2 452.5,84.5 456.4,83.9 460.2,83.4 464.0,82.8 467.9,82.2 471.7,81.6 475.5,81.0 479.4,80.5 483.2,79.9 487.0,79.4 490.9,78.8 494.7,78.3 498.5,77.8 502.4,77.2 506.2,76.7 510.0,76.2 513.9,75.7 517.7,75.2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="9 5" points="75.3,285.4 83.0,274.8 90.7,264.6 98.3,254.8 106.0,245.5 113.7,236.6 121.3,228.1 129.0,220.0 136.7,212.4 144.3,205.0 152.0,198.1 159.7,191.5 167.3,185.2 175.0,179.3 182.7,173.7 190.3,168.3 198.0,163.3 205.7,158.5 213.3,154.0 221.0,149.8 228.7,145.8 236.3,142.0 244.0,138.4 251.7,135.0 259.3,131.8 267.0,128.8 274.7,126.0 282.3,123.2 290.0,120.7 297.7,118.2 305.3,115.9 313.0,113.7 320.7,111.6 328.3,109.5 336.0,107.5 343.7,105.5 351.3,103.6 359.0,101.7 366.7,99.9 374.3,98.0 382.0,96.1 389.7,94.2 397.3,92.2 405.0,90.2 412.7,88.2 420.3,86.0 428.0,83.8 435.7,81.5 443.3,79.0 451.0,76.5 458.7,73.8 466.3,70.9 474.0,67.9 481.7,64.7 489.3,61.3 497.0,57.7 504.7,54.0 512.3,49.9 520.0,45.7"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.2" stroke-dasharray="2 4" points="132.8,280.4 136.7,267.1 140.5,255.3 144.3,244.7 148.2,235.2 152.0,226.6 155.8,218.9 159.7,211.9 163.5,205.5 167.3,199.6 171.2,194.3 175.0,189.4 178.8,184.8 182.7,180.6 186.5,176.7 190.3,173.1 194.2,169.7 198.0,166.5 201.8,163.4 205.7,160.6 209.5,157.9 213.3,155.3 217.2,152.9 221.0,150.6 224.8,148.4 228.7,146.2 232.5,144.2 236.3,142.2 240.2,140.3 244.0,138.5 247.8,136.8 251.7,135.1 255.5,133.4 259.3,131.8 263.2,130.3 267.0,128.8 270.8,127.4 274.7,126.0 278.5,124.6 282.3,123.2 286.2,122.0 290.0,120.7 293.8,119.5 297.7,118.2 301.5,117.1 305.3,115.9 309.2,114.8 313.0,113.7 316.8,112.6 320.7,111.6 324.5,110.5 328.3,109.5 332.2,108.5 336.0,107.6 339.8,106.6 343.7,105.7 347.5,104.8 351.3,103.9 355.2,103.0 359.0,102.1 362.8,101.3 366.7,100.4 370.5,99.6 374.3,98.8 378.2,98.0 382.0,97.2 385.8,96.4 389.7,95.7 393.5,94.9 397.3,94.2 401.2,93.5 405.0,92.8 408.8,92.2 412.7,91.5 416.5,90.9 420.3,90.4 424.2,89.8 428.0,89.4 431.8,89.0 435.7,88.7 439.5,88.5 443.3,88.4 447.2,88.5 451.0,88.8 454.8,89.3 458.7,90.1 462.5,91.2 466.3,92.7 470.2,94.8 474.0,97.4 477.8,100.7 481.7,104.9 485.5,110.0 489.3,116.3 493.2,124.0 497.0,133.2 500.8,144.4 504.7,157.7 508.5,173.6 512.3,192.4 516.2,214.7 520.0,240.8"/>
<line x1="136.7" y1="315" x2="443.3" y2="315" stroke="#1d2b44" stroke-width="4"/>
<circle cx="136.7" cy="315" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="443.3" cy="315" r="5" fill="#1d2b44"/>
<text x="290" y="335" font-size="12" fill="#1d2b44" text-anchor="middle">interval of convergence −4 &lt; x ≤ 4</text>
<g font-size="12" fill="#1d2b44">
<line x1="75" y1="55" x2="105" y2="55" stroke="#1d2b44" stroke-width="3"/><text x="112" y="59">y = ln(4 + x)</text>
<line x1="75" y1="75" x2="105" y2="75" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="9 5"/><text x="112" y="79">partial sum to x³</text>
<line x1="75" y1="95" x2="105" y2="95" stroke="#1d2b44" stroke-width="2.2" stroke-dasharray="2 4"/><text x="112" y="99">partial sum to x¹⁰</text>
</g>
</svg>
<figcaption>Figure 1. Inside −4 &lt; x ≤ 4, adding more terms brings the partial sums closer to ln(4 + x): the dotted partial sum (to x¹⁰) is nearer the curve than the dashed one (to x³). Outside that interval more terms do not help: beyond x = 4 the dotted curve breaks away, and for x ≤ −4 the function does not even exist.</figcaption>
</figure>

## Common misconceptions

- **"Any fraction is geometric as it stands."** 5/(3 + x) is not Σ 5(−x)ⁿ. You must first make the constant 1: (5/3) · 1/(1 + x/3).
- **Substituting into x but not into the powers.** sin(2x) starts 2x − (2x)³/3! = 2x − 8x³/6, not 2x − 2x³/6.
- **Keeping the old interval after a substitution.** Replacing x by x² or x/2 changes the condition |r| < 1, so it changes the interval.
- **Forgetting the constant after integrating.** ln(4 + x) needs ln 4 in front. Always check the value at the centre.
- **"The interval is the same after integrating or differentiating."** Only the radius is guaranteed to stay the same. Test the endpoints again.
- **Starting a differentiated series at n = 0.** The constant term becomes 0, so Σ n aₙ xⁿ⁻¹ starts at n = 1 (writing n = 0 adds a zero term but can confuse the general term).
- **Using the series outside its interval.** 1/(1 − x) = −1 at x = 2, but 1 + 2 + 4 + 8 + … diverges. The function exists there; the series does not represent it.
- **Confusing the coefficient with the derivative.** The coefficient of xⁿ is f⁽ⁿ⁾(0)/n!. Multiply by n! to get the derivative.

## Where this leads

This is the final topic of Calculus BC. Power series tie the course together: they turn hard functions into polynomials, so you can approximate values, evaluate limits and estimate integrals that have no elementary antiderivative, and then bound the error with the alternating series error bound or the Lagrange error bound from earlier in Unit 10. For a full review of the unit and the course, return to the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap), or look back at [Topic 10.14, Finding Taylor or Maclaurin Series for a Function](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-checklist/) to consolidate.
