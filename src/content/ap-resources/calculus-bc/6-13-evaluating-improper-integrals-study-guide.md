---
resourceId: "mb-ap-calcbc-6.13-study-guide"
title: "Evaluating Improper Integrals: Study Guide (Calculus BC 6.13)"
description: "Learn what makes an integral improper, rewrite it as a limit of definite integrals, and decide whether it converges or diverges, including infinite limits and vertical asymptotes."
course: "calculus-bc"
unit: 6
topics: ["6.13"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity and infinite limits (Unit 1)"
  - "L'Hospital's rule for limits of the form ∞/∞ (Topic 4.7)"
  - "The Fundamental Theorem of Calculus and evaluating definite integrals (Topic 6.7)"
  - "Substitution, integration by parts and linear partial fractions (Topics 6.9, 6.11, 6.12)"
prerequisiteResources: ["mb-ap-calcbc-6.12-study-guide"]
learningObjectives:
  - "Recognise the two kinds of improper integral: an infinite limit of integration, or an integrand that is unbounded on the interval"
  - "Rewrite an improper integral as a limit of definite integrals, using correct limit notation"
  - "Evaluate the limit to find the value of a convergent improper integral, or show that it diverges"
  - "Find hidden discontinuities inside the interval and split the integral there"
  - "Interpret a convergent improper integral as a finite total, with units, in context"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Improper integrals are evaluated by hand with limits; a calculator cannot show convergence. Where a calculator is allowed, use it only to check a value or to give a decimal."
related: ["mb-ap-calcbc-6.13-revision-notes", "mb-ap-calcbc-6.13-practice", "mb-ap-calcbc-6.13-checklist"]
next: "mb-ap-calcbc-6.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "An integral is improper if a limit of integration is infinite, or if the integrand is unbounded somewhere on the interval."
  - "Replace the problem point by a letter, integrate normally, then take a limit: ∫ from a to ∞ of f(x) dx = lim as b → ∞ of ∫ from a to b of f(x) dx."
  - "If the limit is a finite number, the integral converges to that number. Otherwise it diverges."
  - "Benchmarks: ∫ from 1 to ∞ of 1/xᵖ dx converges only when p > 1; ∫ from 0 to 1 of 1/xᵖ dx converges only when p < 1."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Improper integrals are BC-only content. AB students can skip this page."
  - question: "Can I just write ∞ in the antiderivative?"
    answer: "No. Infinity is not a number you can substitute. Write the integral with a letter such as b, then take the limit. Exam answers are expected to show the limit."
  - question: "If the integrand tends to 0, does the integral converge?"
    answer: "Not necessarily. 1/x tends to 0, but ∫ from 1 to ∞ of 1/x dx diverges. The integrand must shrink fast enough."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Improper integrals are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

If any of these is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Limits at infinity and infinite limits | Unit 1 | Every improper integral ends with a limit |
| L'Hospital's rule | 4.7 | Limits such as b e^(−b) or (ln b)/b |
| Fundamental Theorem of Calculus | 6.7 | Evaluating the definite integral before the limit |
| Substitution, parts, partial fractions | 6.9, [6.11](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/), [6.12](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-study-guide/) | Finding the antiderivative |

Notation on this page: **∫ from a to b of f(x) dx** is the definite integral with lower limit a and upper limit b. **[F(x)] from a to b** means F(b) − F(a). **lim as b → ∞** means the limit as b grows without bound.

## The idea: an infinite region with a finite area

So far, every definite integral had a finite interval and an integrand that stayed bounded. Now drop one of those conditions.

Look at the region under y = 1/x² to the right of x = 1. It goes on forever. Can it have a finite area? Find the area up to x = b, then let b grow:

**∫ from 1 to b of 1/x² dx = [−1/x] from 1 to b = 1 − 1/b**

| b | 10 | 100 | 1000 | → ∞ |
|---|---|---|---|---|
| Area under 1/x² from 1 to b | 0.9 | 0.99 | 0.999 | → 1 |
| Area under 1/x from 1 to b | 2.303 | 4.605 | 6.908 | → ∞ |

The area under 1/x² approaches 1. So we say ∫ from 1 to ∞ of 1/x² dx **converges** to 1. The area under 1/x is ln b, which grows without bound, so ∫ from 1 to ∞ of 1/x dx **diverges**. The two curves look alike, but 1/x² falls to 0 much faster.

<figure>
<svg viewBox="0 0 540 320" role="img" aria-labelledby="imp-title imp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="imp-title">The curves y = 1/x and y = 1/x², with the region under y = 1/x² to the right of x = 1 shaded</title>
<desc id="imp-desc">Graph for x from 0 to 8 and y from 0 to 2. The solid curve y = 1/x² and the dashed curve y = 1/x both pass through the point (1, 1). To the right of x = 1, the solid curve drops towards the x-axis much faster than the dashed one: at x = 8 the solid curve is at about 0.016 and the dashed curve is at 0.125. The region under the solid curve from x = 1 onwards is hatched, with an arrow showing that it continues to infinity. Labels say that this region has finite area 1, while the area under the dashed curve from x = 1 onwards is infinite.</desc>
<defs><pattern id="hatch613" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1"/></pattern>
<marker id="arr613" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="540" height="320" fill="#ffffff"/>
<path d="M125.0 270 L125.0 170.0 L130.5 187.4 L136.0 200.6 L141.5 210.8 L147.0 219.0 L152.5 225.6 L158.0 230.9 L163.5 235.4 L169.0 239.1 L174.5 242.3 L180.0 245.0 L185.5 247.3 L191.0 249.3 L196.5 251.1 L202.0 252.6 L207.5 254.0 L213.0 255.2 L218.5 256.3 L224.0 257.2 L229.5 258.1 L235.0 258.9 L246.0 260.2 L257.0 261.3 L268.0 262.3 L279.0 263.1 L290.0 263.8 L301.0 264.3 L312.0 264.8 L323.0 265.3 L334.0 265.7 L345.0 266.0 L367.0 266.6 L389.0 267.0 L411.0 267.4 L433.0 267.7 L455.0 268.0 L477.0 268.2 L499.0 268.4 L510.0 268.4 L510.0 270 Z" fill="url(#hatch613)" stroke="none"/>
<line x1="70" y1="270" x2="525" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="285" x2="70" y2="55" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="125" y1="266" x2="125" y2="274"/><line x1="180" y1="266" x2="180" y2="274"/><line x1="235" y1="266" x2="235" y2="274"/><line x1="290" y1="266" x2="290" y2="274"/><line x1="345" y1="266" x2="345" y2="274"/><line x1="400" y1="266" x2="400" y2="274"/><line x1="455" y1="266" x2="455" y2="274"/><line x1="510" y1="266" x2="510" y2="274"/>
<line x1="66" y1="220" x2="74" y2="220"/><line x1="66" y1="170" x2="74" y2="170"/><line x1="66" y1="120" x2="74" y2="120"/><line x1="66" y1="70" x2="74" y2="70"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="125" y="288">1</text><text x="180" y="288">2</text><text x="235" y="288">3</text><text x="290" y="288">4</text><text x="345" y="288">5</text><text x="400" y="288">6</text><text x="455" y="288">7</text><text x="510" y="288">8</text>
<text x="300" y="310" font-size="13">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="224">0.5</text><text x="62" y="174">1</text><text x="62" y="124">1.5</text><text x="62" y="74">2</text>
</g>
<text x="24" y="165" font-size="13" fill="#1d2b44" text-anchor="middle">y</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5" points="97.5,70.0 103.0,103.3 108.5,127.1 114.0,145.0 119.5,158.9 125.0,170.0 130.5,179.1 136.0,186.7 141.5,193.1 147.0,198.6 152.5,203.3 158.0,207.5 163.5,211.2 169.0,214.4 174.5,217.4 180.0,220.0 191.0,224.5 202.0,228.3 213.0,231.5 224.0,234.3 235.0,236.7 246.0,238.8 257.0,240.6 268.0,242.2 279.0,243.7 290.0,245.0 312.0,247.3 334.0,249.2 356.0,250.8 378.0,252.1 400.0,253.3 422.0,254.4 444.0,255.3 466.0,256.1 488.0,256.8 510.0,257.5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="108.9,70.0 114.0,113.8 119.5,146.5 125.0,170.0 130.5,187.4 136.0,200.6 141.5,210.8 147.0,219.0 152.5,225.6 158.0,230.9 163.5,235.4 169.0,239.1 174.5,242.3 180.0,245.0 191.0,249.3 202.0,252.6 213.0,255.2 224.0,257.2 235.0,258.9 246.0,260.2 257.0,261.3 268.0,262.3 279.0,263.1 290.0,263.8 312.0,264.8 334.0,265.7 356.0,266.3 378.0,266.8 400.0,267.2 422.0,267.6 444.0,267.8 466.0,268.1 488.0,268.3 510.0,268.4"/>
<line x1="125" y1="170" x2="125" y2="270" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 3"/>
<line x1="440" y1="125" x2="520" y2="125" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#arr613)"/>
<text x="520" y="112" font-size="12" fill="#1d2b44" text-anchor="end">hatched region continues to ∞</text>
<text x="200" y="185" font-size="13" fill="#1d2b44">y = 1/x (dashed): area from 1 to ∞ is infinite</text>
<text x="230" y="215" font-size="13" fill="#1d2b44">y = 1/x² (solid): hatched area = 1</text>
</svg>
<figcaption>Figure 1. Both curves pass through (1, 1) and approach the x-axis. The hatched region under the solid curve y = 1/x² is infinitely long but has area 1. The region under the dashed curve y = 1/x from x = 1 onwards has no finite area.</figcaption>
</figure>

## The two kinds of improper integral

An integral is **improper** if either:

1. **a limit of integration is infinite**, such as ∫ from 1 to ∞ or ∫ from −∞ to 0; or
2. **the integrand is unbounded** somewhere on the interval, usually at a vertical asymptote. The asymptote can be at an endpoint or **inside** the interval.

In each case, you replace the problem point with a letter, integrate normally, and take a limit.

| Situation | Definition |
|---|---|
| Upper limit infinite | ∫ from a to ∞ of f(x) dx = lim as b → ∞ of ∫ from a to b of f(x) dx |
| Lower limit infinite | ∫ from −∞ to b of f(x) dx = lim as a → −∞ of ∫ from a to b of f(x) dx |
| f unbounded at the lower endpoint a | ∫ from a to b of f(x) dx = lim as t → a⁺ of ∫ from t to b of f(x) dx |
| f unbounded at the upper endpoint b | ∫ from a to b of f(x) dx = lim as t → b⁻ of ∫ from a to t of f(x) dx |
| Both limits infinite, or an asymptote at c inside | Split at a point c into two improper integrals; **both** must converge |

**Converges** means the limit exists and is a finite number; that number is the value of the integral. **Diverges** means it does not: the limit is infinite, or does not exist at all. For example, ∫ from 0 to ∞ of cos x dx diverges, because sin b keeps oscillating.

## Benchmarks: the p-integrals

Integrals of 1/xᵖ (with p > 0) are worth knowing, because they are quick to recognise and they return as the p-series in Unit 10.

- **On [1, ∞):** ∫ from 1 to ∞ of 1/xᵖ dx converges when p > 1, with value 1/(p − 1). It diverges when p ≤ 1.
- **On (0, 1]:** ∫ from 0 to 1 of 1/xᵖ dx converges when p < 1, with value 1/(1 − p). It diverges when p ≥ 1.

For example, ∫ from 0 to 1 of 1/√x dx = lim as t → 0⁺ of [2√x] from t to 1 = lim as t → 0⁺ of (2 − 2√t) = **2**. Here the region is infinitely tall but has finite area. Notice that p = 1 diverges in both cases: ln x grows without bound as x → ∞ and as x → 0⁺.

## Worked example 1: an infinite limit with partial fractions

**Question.** Evaluate ∫ from 1 to ∞ of 4/(x(x + 2)) dx, or show that it diverges. No calculator.

1. **Identify the problem.** The upper limit is infinite. The integrand is continuous on [1, ∞), because its asymptotes are at x = 0 and x = −2, outside the interval.
2. **Write the limit.** ∫ from 1 to ∞ of 4/(x(x + 2)) dx = lim as b → ∞ of ∫ from 1 to b of 4/(x(x + 2)) dx.
3. **Find an antiderivative.** Partial fractions (Topic 6.12): 4 = A(x + 2) + Bx. At x = 0, A = 2. At x = −2, B = −2. So 4/(x(x + 2)) = 2/x − 2/(x + 2), with antiderivative 2 ln x − 2 ln(x + 2) = 2 ln(x/(x + 2)) for x > 0.
4. **Evaluate the definite integral.**
   ∫ from 1 to b = 2 ln(b/(b + 2)) − 2 ln(1/3) = 2 ln(b/(b + 2)) + 2 ln 3.
5. **Take the limit.** As b → ∞, b/(b + 2) → 1, so ln(b/(b + 2)) → ln 1 = 0.
   **∫ from 1 to ∞ of 4/(x(x + 2)) dx = 2 ln 3 ≈ 2.197**. The integral converges.

**Watch out.** Each piece on its own diverges: 2 ln b → ∞ and 2 ln(b + 2) → ∞. If you take those limits separately, you get "∞ − ∞", which tells you nothing. **Combine the logs into one before taking the limit.**

**Check.** The integrand is less than 4/x² for x ≥ 1, and ∫ from 1 to ∞ of 4/x² dx = 4. A finite value below 4 is sensible.

## Worked example 2: an asymptote inside the interval

**Question.** Evaluate ∫ from −1 to 8 of x^(−1/3) dx, or show that it diverges. No calculator.

1. **Look for problem points.** The limits are finite, but x^(−1/3) = 1/∛x is unbounded at x = 0, which lies inside [−1, 8]. So the integral is improper, and you must split it at 0:
   ∫ from −1 to 8 = ∫ from −1 to 0 + ∫ from 0 to 8, and **each part must converge**.
2. **Antiderivative.** ∫ x^(−1/3) dx = (3/2) x^(2/3). (Here x^(2/3) means (∛x)², which is defined for negative x too.)
3. **Left part.** lim as t → 0⁻ of [(3/2)x^(2/3)] from −1 to t = lim as t → 0⁻ of ((3/2)t^(2/3) − 3/2) = **−3/2**.
4. **Right part.** lim as t → 0⁺ of [(3/2)x^(2/3)] from t to 8 = (3/2)(4) − 0 = **6**.
5. **Combine.** Both parts converge, so **∫ from −1 to 8 of x^(−1/3) dx = −3/2 + 6 = 9/2**.

**Interpretation.** The left part is negative because x^(−1/3) < 0 for x < 0. The value 9/2 is a net signed area, as for any definite integral.

**The trap: a hidden asymptote.** Try ∫ from −1 to 1 of 1/x² dx "the usual way": [−1/x] from −1 to 1 = −1 − 1 = −2. That cannot be right, because 1/x² is always positive. The Fundamental Theorem needs f to be continuous on the interval, and 1/x² is not continuous at 0. Split it: ∫ from 0 to 1 of 1/x² dx = lim as t → 0⁺ of (1/t − 1) = ∞. One part diverges, so **the whole integral diverges**. Always check for asymptotes inside the interval before you evaluate.

## Worked example 3: total output in context

**Context.** A fictional oil well produces oil at a rate of **r(t) = 600/(t + 4)²** thousand barrels per month, where t is the number of months after it opens. Engineers model the well as producing forever, at a falling rate.

(a) Find the total amount of oil the model predicts the well will ever produce.
(b) After how many months will the well have produced 120 thousand barrels?

1. **Set up (a).** The total over all time is ∫ from 0 to ∞ of 600/(t + 4)² dt = lim as b → ∞ of ∫ from 0 to b of 600/(t + 4)² dt.
2. **Integrate.** An antiderivative of 600(t + 4)^(−2) is −600/(t + 4). So
   ∫ from 0 to b = −600/(b + 4) + 600/4 = 150 − 600/(b + 4).
3. **Take the limit.** As b → ∞, 600/(b + 4) → 0. **Total = 150 thousand barrels.**
4. **(b)** Solve 150 − 600/(b + 4) = 120. Then 600/(b + 4) = 30, so b + 4 = 20 and **b = 16 months**.

**Checks.**
- *Units:* thousand barrels per month × months = thousand barrels. ✓
- *Sense:* the production rate starts at 600/16 = 37.5 thousand barrels per month and falls. 120 of the 150 total comes in the first 16 months; the remaining 30 is spread over the rest of time.

**Interpretation.** The model predicts a finite lifetime output of 150 thousand barrels, even though the well never fully stops. A model such as r(t) = 60/(t + 4) would behave very differently: its integral is 60 ln((b + 4)/4), which grows without bound, so it predicts unlimited oil. That is a sign the model is unrealistic over long times.

## Common misconceptions

- **"If f(x) → 0, the integral converges."** 1/x → 0, yet ∫ from 1 to ∞ of 1/x dx diverges. The rate at which f shrinks matters.
- **Substituting ∞ as a number.** Writing [−1/x] from 1 to ∞ = 0 + 1 hides the reasoning. Write the limit with a letter. Exam answers are expected to show it.
- **Missing an asymptote inside the interval.** ∫ from −1 to 1 of 1/x² dx is not −2; it diverges. Check where the denominator is zero.
- **Using one symmetric limit for ∫ from −∞ to ∞.** lim as b → ∞ of ∫ from −b to b of x dx = 0, but ∫ from −∞ to ∞ of x dx diverges, because ∫ from 0 to ∞ of x dx diverges. Split at a point and check each half separately.
- **Taking the limits of log pieces separately.** That gives ∞ − ∞. Combine the logs first (Worked example 1).
- **Thinking "unbounded region" means "infinite area".** Figure 1 shows an infinitely long region with area 1.
- **Treating "diverges" as "goes to infinity" only.** A limit that oscillates, such as sin b, also means divergence.
- **Forgetting L'Hospital's rule** for limits such as b e^(−b), which is of the form ∞ · 0. Rewrite it as b/e^b, which tends to 0.

## Where this leads

Improper integrals return in Unit 10, where the integral test links the convergence of a series to the convergence of an improper integral, and the p-integrals above become the p-series. The next topic, [Topic 6.14, Selecting Techniques for Antidifferentiation](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-study-guide/), asks you to choose the right method for an unfamiliar integral, including the methods you used here. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-checklist/) to consolidate.
