---
resourceId: "mb-ap-calcbc-6.12-study-guide"
title: "Integrating Using Linear Partial Fractions: Study Guide (Calculus BC 6.12)"
description: "Split a rational function into simpler fractions with different linear factors, find the constants, and integrate each piece with ln, for indefinite and definite integrals."
course: "calculus-bc"
unit: 6
topics: ["6.12"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Factorising quadratics and adding algebraic fractions"
  - "The Fundamental Theorem of Calculus and evaluating definite integrals (Topic 6.7)"
  - "The antiderivative of 1/x is ln|x| (Topic 6.8)"
  - "Integration by substitution (Topic 6.9)"
  - "Polynomial long division of rational functions (Topic 6.10)"
prerequisiteResources: ["mb-ap-calcbc-6.11-study-guide"]
learningObjectives:
  - "Recognise a rational integrand whose denominator factors into different linear factors"
  - "Write such a fraction as a sum of simpler fractions and find the unknown constants"
  - "Find indefinite integrals by integrating each simpler fraction as a logarithm"
  - "Evaluate definite integrals using linear partial fractions, including in context with units"
  - "Check a decomposition by recombining it, and an antiderivative by differentiating it"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Decomposing and integrating are no-calculator skills. Where a calculator is allowed, use it only to check a definite value or to give a decimal; show the exact working."
related: ["mb-ap-calcbc-6.12-revision-notes", "mb-ap-calcbc-6.12-practice", "mb-ap-calcbc-6.12-checklist"]
next: "mb-ap-calcbc-6.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "If the denominator factors into different linear factors, split the fraction: N(x)/((x − p)(x − q)) = A/(x − p) + B/(x − q)."
  - "Find A and B by substituting each root, or by matching coefficients."
  - "Each piece integrates to a logarithm: ∫ A/(x − p) dx = A ln|x − p| + C."
  - "The course only uses linear factors that are all different. If the top's degree is not lower than the bottom's, divide first."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Linear partial fractions are BC-only content. AB students can skip this page."
  - question: "Do I need repeated factors such as (x − 1)², or quadratic factors such as x² + 1?"
    answer: "No. The course only asks for denominators that split into linear factors that are all different. Repeated and irreducible quadratic factors are beyond the course."
  - question: "Which way of finding A and B is best?"
    answer: "Substituting the roots is usually fastest. Matching coefficients always works and is a good check. Both give the same constants."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Linear partial fractions are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

If any of these is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Factorising and adding fractions | Algebra | Splitting the denominator and checking your split |
| Fundamental Theorem of Calculus | 6.7 | Evaluating definite integrals |
| ∫ 1/x dx = ln\|x\| + C | 6.8 | Every piece becomes a logarithm |
| Substitution | 6.9 | Integrating 1/(ax + b), and spotting when substitution is enough |
| Long division of rational functions | 6.10 | Reducing the top's degree first, when needed |
| Integration by parts | [6.11](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/) | Not used here, but you must choose between the two methods later |

Notation on this page: **∫ from a to b of f(x) dx** is the definite integral with lower limit a and upper limit b. **[F(x)] from a to b** means F(b) − F(a).

## The idea: adding fractions backwards

You already know how to add fractions. For example,

**2/(x − 1) − 1/(x + 2) = [2(x + 2) − (x − 1)] / [(x − 1)(x + 2)] = (x + 5)/(x² + x − 2)**

Now look at the problem the other way round. Suppose you must find ∫ (x + 5)/(x² + x − 2) dx. The integrand does not match a basic rule. Substitution fails too: the derivative of the bottom is 2x + 1, and the top, x + 5, is not a multiple of it.

But the left-hand side is easy to integrate, one piece at a time:

**∫ (x + 5)/(x² + x − 2) dx = ∫ [2/(x − 1) − 1/(x + 2)] dx = 2 ln|x − 1| − ln|x + 2| + C**

That is the whole method. **Partial fractions** means splitting one hard fraction into a sum of simple fractions, each with a linear denominator, then integrating each one as a logarithm.

## When the method applies

In this course, the method is for a rational function N(x)/D(x) where:

1. **The fraction is proper.** The degree of the top is less than the degree of the bottom. If it is not, do long division first (Topic 6.10).
2. **The bottom factors into linear factors that are all different**, such as (x − 2)(x + 1) or x(x − 1)(x + 1).

Then you can write

> **N(x)/((x − p)(x − q)) = A/(x − p) + B/(x − q)**, with A and B constants.

With three different linear factors, you use three constants: A/(x − p) + B/(x − q) + C/(x − r).

**Outside this course.** A repeated factor such as (x − 1)² or a quadratic factor with no real roots such as x² + 1 needs a different form of decomposition. You will not be asked for these. (A denominator like x² + 1 on its own is an arctan integral from Topic 6.10.)

## Finding the constants: two methods

Take (4x + 1)/(x² − x − 2). The bottom factors as (x − 2)(x + 1). Write

**(4x + 1)/((x − 2)(x + 1)) = A/(x − 2) + B/(x + 1)**

Multiply both sides by (x − 2)(x + 1) to clear the fractions:

**4x + 1 = A(x + 1) + B(x − 2)**

This must be true for **every** x. That gives two ways to find A and B.

**Method 1: substitute the roots.** Choose x-values that make one bracket zero.
- x = 2: 9 = A(3) + B(0), so **A = 3**.
- x = −1: −3 = A(0) + B(−3), so **B = 1**.

**Method 2: match coefficients.** Expand the right side: 4x + 1 = (A + B)x + (A − 2B). Match the x terms and the constant terms:
- A + B = 4
- A − 2B = 1

Subtracting gives 3B = 3, so B = 1 and A = 3. Same answer.

**Quick shortcut ("cover-up").** To find the constant over (x − p), cover up the factor (x − p) in the original fraction and substitute x = p into what is left. For A: cover (x − 2), put x = 2 into (4x + 1)/(x + 1) to get 9/3 = 3. This is Method 1 done in your head.

**Always check** by recombining: 3/(x − 2) + 1/(x + 1) = [3(x + 1) + (x − 2)]/[(x − 2)(x + 1)] = (4x + 1)/[(x − 2)(x + 1)]. ✓

## Integrating each piece

Each simple fraction is a logarithm:

> **∫ A/(x − p) dx = A ln|x − p| + C**

If the linear factor is ax + b with a ≠ 1, the chain rule gives a factor 1/a:

> **∫ 1/(ax + b) dx = (1/a) ln|ax + b| + C**

(Substitute u = ax + b, so du = a dx.) Keep the absolute value signs: x − p can be negative.

## Worked example 1: an indefinite integral

**Question.** Find ∫ (4x + 1)/(x² − x − 2) dx without a calculator. Check your answer.

1. **Check the method fits.** Top degree 1, bottom degree 2, so the fraction is proper. The bottom factors as (x − 2)(x + 1): two different linear factors. Substitution does not work, because the derivative of the bottom is 2x − 1, which is not a multiple of 4x + 1.
2. **Decompose** (from the section above): (4x + 1)/((x − 2)(x + 1)) = 3/(x − 2) + 1/(x + 1).
3. **Integrate each piece.**
   **∫ (4x + 1)/(x² − x − 2) dx = 3 ln|x − 2| + ln|x + 1| + C**
4. **Optional tidy form.** Using log laws, this is ln|(x − 2)³(x + 1)| + C. Either form is correct.

**Check by differentiating.** d/dx [3 ln|x − 2| + ln|x + 1|] = 3/(x − 2) + 1/(x + 1) = (4x + 1)/((x − 2)(x + 1)). ✓

## Worked example 2: a definite integral in context

**Context.** A small robot moves along a straight track. Its velocity is **v(t) = 12/((t + 1)(t + 4))** metres per second, where t is the time in seconds, for t ≥ 0. How far does it travel from t = 0 to t = 2?

<figure>
<svg viewBox="0 0 540 320" role="img" aria-labelledby="robot-title robot-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="robot-title">Velocity v(t) = 12/((t + 1)(t + 4)) with the area from t = 0 to t = 2 shaded</title>
<desc id="robot-desc">Graph of velocity in metres per second against time in seconds, from t = 0 to t = 4. The curve starts at 3 metres per second at t = 0 and decreases steadily, passing 1.2 at t = 1, about 0.67 at t = 2 and 0.3 at t = 4. It stays above the time axis. The region under the curve between t = 0 and t = 2 is shaded with diagonal hatching and labelled as about 2.77 metres travelled. A dashed vertical line marks t = 2.</desc>
<defs><pattern id="hatch612" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="540" height="320" fill="#ffffff"/>
<path d="M70 270 L70.0 90.0 L81.0 110.4 L92.0 127.1 L103.0 141.2 L114.0 153.1 L125.0 163.3 L136.0 172.2 L147.0 179.9 L158.0 186.7 L169.0 192.7 L180.0 198.0 L191.0 202.8 L202.0 207.1 L213.0 210.9 L224.0 214.4 L235.0 217.6 L246.0 220.5 L257.0 223.2 L268.0 225.7 L279.0 227.9 L290.0 230.0 L290 270 Z" fill="url(#hatch612)" stroke="none"/>
<line x1="70" y1="270" x2="525" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="285" x2="70" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="180" y1="266" x2="180" y2="274"/><line x1="290" y1="266" x2="290" y2="274"/><line x1="400" y1="266" x2="400" y2="274"/><line x1="510" y1="266" x2="510" y2="274"/>
<line x1="66" y1="210" x2="74" y2="210"/><line x1="66" y1="150" x2="74" y2="150"/><line x1="66" y1="90" x2="74" y2="90"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="180" y="288">1</text><text x="290" y="288">2</text><text x="400" y="288">3</text><text x="510" y="288">4</text>
<text x="300" y="310" font-size="13">time t (seconds)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="214">1</text><text x="62" y="154">2</text><text x="62" y="94">3</text>
</g>
<text x="20" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 160)">velocity v(t) (m/s)</text>
<line x1="290" y1="230" x2="290" y2="270" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,90.0 81.0,110.4 92.0,127.1 103.0,141.2 114.0,153.1 125.0,163.3 136.0,172.2 147.0,179.9 158.0,186.7 169.0,192.7 180.0,198.0 191.0,202.8 202.0,207.1 213.0,210.9 224.0,214.4 235.0,217.6 246.0,220.5 257.0,223.2 268.0,225.7 279.0,227.9 290.0,230.0 301.0,231.9 312.0,233.7 323.0,235.4 334.0,236.9 345.0,238.4 356.0,239.7 367.0,241.0 378.0,242.1 389.0,243.2 400.0,244.3 411.0,245.3 422.0,246.2 433.0,247.1 444.0,247.9 455.0,248.7 466.0,249.4 477.0,250.1 488.0,250.8 499.0,251.4 510.0,252.0"/>
<rect x="300" y="120" width="150" height="38" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="375" y="136" font-size="12" fill="#1d2b44" text-anchor="middle">hatched area</text>
<text x="375" y="151" font-size="12" fill="#1d2b44" text-anchor="middle">= 4 ln 2 ≈ 2.77 m</text>
<line x1="300" y1="158" x2="200" y2="235" stroke="#1d2b44" stroke-width="1"/>
<text x="120" y="80" font-size="13" fill="#1d2b44">v(t) = 12/((t + 1)(t + 4))</text>
</svg>
<figcaption>Figure 1. The robot's velocity falls from 3 m/s towards 0 but stays positive. The hatched area between t = 0 and t = 2 (dashed line) is the distance travelled, ∫ from 0 to 2 of v(t) dt = 4 ln 2 ≈ 2.77 m.</figcaption>
</figure>

1. **Set up.** v(t) > 0 for t ≥ 0, so the robot never turns back. Distance = **∫ from 0 to 2 of 12/((t + 1)(t + 4)) dt**.
2. **Decompose.** 12/((t + 1)(t + 4)) = A/(t + 1) + B/(t + 4), so 12 = A(t + 4) + B(t + 1).
   - t = −1: 12 = 3A, so **A = 4**.
   - t = −4: 12 = −3B, so **B = −4**.
   - Check: 4(t + 4) − 4(t + 1) = 12. ✓
3. **Integrate.** ∫ [4/(t + 1) − 4/(t + 4)] dt = 4 ln(t + 1) − 4 ln(t + 4). (No absolute values are needed, because t + 1 and t + 4 are positive for t ≥ 0.)
4. **Evaluate.**
   [4 ln(t + 1) − 4 ln(t + 4)] from 0 to 2 = (4 ln 3 − 4 ln 6) − (4 ln 1 − 4 ln 4)
   = 4 ln 3 − 4 ln 6 + 4 ln 4 = 4 ln(3 × 4/6) = **4 ln 2 ≈ 2.77 m**.

**Answer.** The robot travels **4 ln 2 metres**, about **2.77 m**.

**Checks.**
- *Units:* metres per second × seconds = metres. ✓
- *Size:* v starts at 3 m/s and falls, so in 2 seconds it covers less than 2 × 3 = 6 m. The trapezoid estimate, ½ × 2 × (3 + 2/3) ≈ 3.67 m, is an overestimate for this curve, which bends upwards. 2.77 m is sensible.
- *Calculator (where allowed):* a numerical integral from 0 to 2 gives 2.7726. ✓

**Interpretation.** In its first 2 seconds, the robot moves about 2.77 metres along the track.

## Two variations you must handle

**A linear factor that is not monic.** Find ∫ 5/(2x² + 3x − 2) dx. The bottom factors as (2x − 1)(x + 2). Write 5 = A(x + 2) + B(2x − 1).
- x = ½: 5 = A(5/2), so A = 2.
- x = −2: 5 = B(−5), so B = −1.

So the integral is ∫ [2/(2x − 1) − 1/(x + 2)] dx. The chain-rule factor ½ cancels the 2 on top:

**∫ 5/(2x² + 3x − 2) dx = ln|2x − 1| − ln|x + 2| + C**

**A top that is too big: divide first.** Find ∫ (x² + 2)/(x² + 3x + 2) dx. Top and bottom both have degree 2, so the fraction is not proper. Long division gives

(x² + 2)/(x² + 3x + 2) = 1 + (−3x)/(x² + 3x + 2).

Now decompose the proper part: −3x/((x + 1)(x + 2)) = A/(x + 1) + B/(x + 2), with −3x = A(x + 2) + B(x + 1). At x = −1, A = 3. At x = −2, 6 = −B, so B = −6. Then

**∫ (x² + 2)/(x² + 3x + 2) dx = x + 3 ln|x + 1| − 6 ln|x + 2| + C**

If you skip the division and try A/(x + 1) + B/(x + 2) directly, no constants work: the right side can never produce an x² term.

## Common misconceptions

- **"∫ 1/(x² − 4) dx = ln|x² − 4| + C."** The derivative of ln|x² − 4| is 2x/(x² − 4), not 1/(x² − 4). Use partial fractions: 1/(x² − 4) = ¼/(x − 2) − ¼/(x + 2).
- **Using partial fractions when substitution is quicker.** In ∫ (2x + 1)/(x² + x − 6) dx, the top is exactly the derivative of the bottom, so the answer is ln|x² + x − 6| + C straight away. Partial fractions also work, but take longer.
- **Sign errors with the roots.** The factor (x + 1) is zero at x = −1, not x = 1.
- **Forgetting the 1/a** when integrating 1/(ax + b), or adding it where a = 1.
- **Decomposing an improper fraction.** If the top's degree is not lower, divide first.
- **Dropping the absolute values** inside ln. Keep them unless the expression is positive on the whole interval, as in Worked example 2.
- **Integrating across a vertical asymptote.** ∫ from 0 to 3 of 1/((x − 1)(x + 2)) dx is not an ordinary definite integral, because the integrand is unbounded at x = 1. That is an improper integral (Topic 6.13).
- **Not checking.** Recombining the fractions takes 30 seconds and catches most errors.

## Where this leads

Partial fractions return in the next topic, [Topic 6.13, Evaluating Improper Integrals](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/). For example, if the robot kept moving forever, its total distance would be the improper integral ∫ from 0 to ∞ of v(t) dt, which turns out to be finite. They also appear in Topic 6.14, where you select a technique for an unfamiliar integral. As background, they are also the tool that solves the logistic differential equation BC students meet in Unit 7. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-checklist/) to consolidate.
