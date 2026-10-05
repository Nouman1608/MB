---
resourceId: "mb-ap-calcab-6.7-study-guide"
title: "The Fundamental Theorem of Calculus and Definite Integrals: Study Guide (Calculus AB 6.7)"
description: "Learn how an antiderivative turns a definite integral into F(b) − F(a), why the theorem works, when it fails, and how to use it for net change in context."
course: "calculus-ab"
unit: 6
topics: ["6.7"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definite integral as a limit of Riemann sums and as signed area (Topics 6.1 to 6.3)"
  - "Accumulation functions and d/dx ∫ (a to x) f(t) dt = f(x) (Topic 6.4)"
  - "Properties of definite integrals (Topic 6.6)"
  - "Derivatives of powers, sin x, cos x, eˣ and ln x (Unit 2 and Topic 3.1)"
prerequisiteResources: ["mb-ap-calcab-6.6-study-guide"]
learningObjectives:
  - "Explain what an antiderivative of a function is and check a proposed one by differentiating"
  - "Explain why an accumulation function ∫ (a to x) f(t) dt is an antiderivative of a continuous f"
  - "Evaluate a definite integral exactly as F(b) − F(a), with correct bracket notation, after checking that the integrand is continuous on [a, b]"
  - "Recognise when the theorem does not apply because the integrand is discontinuous on the interval"
  - "Use ∫ (a to b) F′(x) dx = F(b) − F(a) to find a net change, and turn a limit of Riemann sums into an integral you can evaluate"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example without a calculator and give exact answers. On calculator sections you may evaluate a definite integral numerically, but you must still write the integral with its limits and dx."
related: ["mb-ap-calcab-6.7-revision-notes", "mb-ap-calcab-6.7-practice", "mb-ap-calcab-6.7-checklist"]
next: "mb-ap-calcab-6.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "An antiderivative of f is any function F with F′ = f. Check one by differentiating it."
  - "If f is continuous on [a, b] and F is any antiderivative of f, then ∫ (a to b) f(x) dx = F(b) − F(a)."
  - "The theorem follows from Topic 6.4: ∫ (a to x) f(t) dt is itself an antiderivative, and any two antiderivatives differ only by a constant, which cancels."
  - "Check continuity first. If f is undefined or jumps inside [a, b], F(b) − F(a) can give a wrong answer."
  - "In context, ∫ (a to b) (rate) dt = net change in the amount from t = a to t = b. This topic is shared by Calculus AB and Calculus BC."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.7 is common content, so the same page serves AB and BC students."
  - question: "Do I need + C when I evaluate a definite integral?"
    answer: "No. Any constant you add appears in both F(b) and F(a) and cancels in the subtraction. Leaving it out is standard."
  - question: "How is this different from Topic 6.4?"
    answer: "Topic 6.4 differentiates an accumulation function: d/dx ∫ (a to x) f(t) dt = f(x). This topic uses an antiderivative to find the number ∫ (a to b) f(x) dx. They are two halves of the same theorem."
  - question: "What if I cannot find an antiderivative?"
    answer: "Some functions have no antiderivative that can be written with familiar functions. Then the theorem cannot be used by hand, and you estimate the integral with a Riemann sum or evaluate it on a calculator where calculators are allowed."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form. **∫ (a to b) f(x) dx** means the definite integral of f(x) from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top.

**[F(x)] (a to b)** is shorthand for **F(b) − F(a)**. On paper, write square brackets around F(x) with a at the bottom right and b at the top right. A vertical bar in place of the brackets means the same thing.

## Antiderivatives

An **antiderivative** of a function f is a function F whose derivative is f. In symbols, F′(x) = f(x).

- x³ is an antiderivative of 3x², because d/dx (x³) = 3x².
- x³ + 7 is also an antiderivative of 3x², because the derivative of 7 is 0.
- −cos x is an antiderivative of sin x, because d/dx (−cos x) = sin x.

So a function has many antiderivatives. They differ only by a constant. (If F′ = G′ on an interval, then (F − G)′ = 0 there, and a function with zero derivative on an interval is constant. That is a consequence of the Mean Value Theorem, Topic 5.1.)

**You find antiderivatives by running derivative rules backwards.** You know these derivative facts, so you already know these antiderivatives:

| Function f(x) | One antiderivative F(x) | Check: F′(x) |
|---|---|---|
| xⁿ, for n ≠ −1 | xⁿ⁺¹/(n + 1) | xⁿ |
| 1/x, for x > 0 | ln x | 1/x |
| eˣ | eˣ | eˣ |
| cos x | sin x | cos x |
| sin x | −cos x | sin x |
| sec²x | tan x | sec²x |

Constant multiples and sums work term by term: an antiderivative of 5x⁴ − 2 is x⁵ − 2x. Topic 6.8 builds the full table and the notation for families of antiderivatives. For this topic, these rules are enough.

**Always check by differentiating.** If F′(x) is not exactly f(x), F is not an antiderivative of f. This check takes seconds and catches most sign errors.

## Where the theorem comes from

Topic 6.4 gave you one antiderivative of any continuous function. If f is continuous on an interval containing a, the accumulation function

**A(x) = ∫ (a to x) f(t) dt**

has A′(x) = f(x). So **A is an antiderivative of f**, even when no formula for it is known.

Now let F be any other antiderivative of f that you can write down. Because two antiderivatives differ by a constant, F(x) = A(x) + C for some number C. Then

F(b) − F(a) = (A(b) + C) − (A(a) + C) = A(b) − A(a).

A(b) is ∫ (a to b) f(t) dt, and A(a) = ∫ (a to a) f(t) dt = 0. So **F(b) − F(a) = ∫ (a to b) f(x) dx**. The constant C cancelled, which is why any antiderivative works.

> **The Fundamental Theorem of Calculus (evaluation form).** If f is continuous on [a, b] and F is an antiderivative of f, then
> **∫ (a to b) f(x) dx = F(b) − F(a)**.

This is remarkable. The left side is a limit of Riemann sums: infinitely many thinner and thinner rectangles. The right side needs two values of one function.

## Picturing it: area under f equals rise in F

<figure>
<svg viewBox="0 0 520 520" role="img" aria-labelledby="eval-title eval-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eval-title">The area under f from 0 to 3 equals the rise of its antiderivative F from 0 to 3</title>
<desc id="eval-desc">Two graphs share the same horizontal x-axis scale from 0 to 3.5. The top graph shows the straight line y = f(x) = x + 1. The region under it from x = 0 to x = 3 is a hatched trapezoid with parallel sides 1 and 4 and width 3, labelled area 7.5. The bottom graph shows the curve y = F(x) = x²/2 + x, which starts at the origin and curves upward. At x = 3 the curve has height 7.5, marked with a dot. Just to the right of x = 3, a vertical double-headed arrow runs from height 0 up to height 7.5 and is labelled rise F(3) − F(0) = 7.5. A dashed line joins the top of the arrow to 7.5 on the vertical axis.</desc>
<rect x="0" y="0" width="520" height="520" fill="#ffffff"/>
<defs><pattern id="eval-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern></defs>
<text x="20" y="20" font-size="13" fill="#1d2b44" font-weight="bold">Top: y = f(x) = x + 1</text>
<polygon points="70,230 70,190 430,70 430,230" fill="url(#eval-hatch)" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="50" y1="230" x2="505" y2="230" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="240" x2="70" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1"><line x1="190" y1="226" x2="190" y2="234"/><line x1="310" y1="226" x2="310" y2="234"/><line x1="430" y1="226" x2="430" y2="234"/><line x1="66" y1="190" x2="74" y2="190"/><line x1="66" y1="150" x2="74" y2="150"/><line x1="66" y1="110" x2="74" y2="110"/><line x1="66" y1="70" x2="74" y2="70"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="190" y="246">1</text><text x="310" y="246">2</text><text x="430" y="246">3</text><text x="508" y="246">x</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="194">1</text><text x="62" y="154">2</text><text x="62" y="114">3</text><text x="62" y="74">4</text></g>
<line x1="70" y1="190" x2="490" y2="50" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="190" y="168" width="108" height="22" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/>
<text x="244" y="183" font-size="13" fill="#1d2b44" text-anchor="middle">area = 7.5</text>
<line x1="20" y1="262" x2="500" y2="262" stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="2 4"/>
<text x="20" y="284" font-size="13" fill="#1d2b44" font-weight="bold">Bottom: y = F(x) = x²/2 + x</text>
<line x1="50" y1="480" x2="505" y2="480" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="490" x2="70" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1"><line x1="190" y1="476" x2="190" y2="484"/><line x1="310" y1="476" x2="310" y2="484"/><line x1="430" y1="476" x2="430" y2="484"/><line x1="66" y1="440" x2="74" y2="440"/><line x1="66" y1="400" x2="74" y2="400"/><line x1="66" y1="360" x2="74" y2="360"/><line x1="66" y1="320" x2="74" y2="320"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="190" y="497">1</text><text x="310" y="497">2</text><text x="430" y="497">3</text><text x="508" y="497">x</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="444">2</text><text x="62" y="404">4</text><text x="62" y="364">6</text><text x="62" y="334">7.5</text><text x="62" y="318">8</text></g>
<polyline points="70.0,480.0 82.0,477.9 94.0,475.6 106.0,473.1 118.0,470.4 130.0,467.5 142.0,464.4 154.0,461.1 166.0,457.6 178.0,453.9 190.0,450.0 202.0,445.9 214.0,441.6 226.0,437.1 238.0,432.4 250.0,427.5 262.0,422.4 274.0,417.1 286.0,411.6 298.0,405.9 310.0,400.0 322.0,393.9 334.0,387.6 346.0,381.1 358.0,374.4 370.0,367.5 382.0,360.4 394.0,353.1 406.0,345.6 418.0,337.9 430.0,330.0 442.0,321.9 454.0,313.6 466.0,305.1 478.0,296.4 490.0,287.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="70" y1="330" x2="424" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="450" y1="474" x2="450" y2="336" stroke="#1d2b44" stroke-width="1.5"/>
<polygon points="450,330 445,340 455,340" fill="#1d2b44"/><polygon points="450,480 445,470 455,470" fill="#1d2b44"/>
<line x1="430" y1="330" x2="452" y2="330" stroke="#1d2b44" stroke-width="1"/>
<circle cx="430" cy="330" r="4" fill="#1d2b44"/>
<text x="458" y="400" font-size="13" fill="#1d2b44">rise</text>
<text x="458" y="416" font-size="13" fill="#1d2b44">= 7.5</text>
<text x="240" y="470" font-size="12" fill="#1d2b44">F(3) − F(0) = 7.5 − 0</text>
</svg>
<figcaption>Figure 1. Top: the hatched trapezoid under f(x) = x + 1 from 0 to 3 has area (1 + 4)/2 × 3 = 7.5. Bottom: the antiderivative F(x) = x²/2 + x rises from F(0) = 0 to F(3) = 7.5 over the same interval. The area under the rate equals the change in the antiderivative. Axes are unitless.</figcaption>
</figure>

Figure 1 checks the theorem with geometry. The trapezoid has area 7.5, and F(3) − F(0) = (4.5 + 3) − 0 = 7.5. Read it as: **f is the rate at which F changes, so adding up f over [0, 3] gives the total change in F**.

## How to evaluate a definite integral

1. **Check continuity.** Is f continuous on the whole closed interval [a, b]? Look for zero denominators, logs of 0 and points where tan or sec is undefined.
2. **Rewrite if needed.** Roots become powers (√x = x^(1/2)); fractions with a single term on the bottom become negative powers (2/x² = 2x⁻²).
3. **Find an antiderivative** F, term by term. No + C is needed.
4. **Write it in brackets:** [F(x)] (a to b).
5. **Substitute and subtract,** putting each value in its own brackets: F(b) − F(a). Upper limit first.

Write the working as one chain of equal expressions: ∫ (a to b) f(x) dx = [F(x)] (a to b) = F(b) − F(a) = number. Every "=" must join things that really are equal.

## Worked example 1: powers and roots

**Question.** Evaluate ∫ (1 to 4) (3√x − 2/x²) dx exactly.

1. **Continuity.** √x is continuous for x ≥ 0 and 2/x² is continuous for x ≠ 0. Both are continuous on [1, 4], so the theorem applies.
2. **Rewrite as powers:** 3x^(1/2) − 2x⁻².
3. **Antidifferentiate each term.**
   - 3x^(1/2) → 3 · x^(3/2)/(3/2) = 2x^(3/2)
   - −2x⁻² → −2 · x⁻¹/(−1) = 2x⁻¹ = 2/x
   So F(x) = 2x^(3/2) + 2/x.
4. **Check:** F′(x) = 3x^(1/2) − 2x⁻², which is the integrand.
5. **Evaluate.**
   ∫ (1 to 4) (3√x − 2/x²) dx = [2x^(3/2) + 2/x] (1 to 4)
   = (2 · 8 + 2/4) − (2 · 1 + 2/1)
   = 16.5 − 4 = **25/2**

**Notes.** 4^(3/2) = (√4)³ = 8. The bracket around F(1) matters: forgetting it gives 16.5 − 2 + 2 = 16.5, which is wrong.

## Worked example 2: trig, exponential and log integrands

**Question.** Evaluate exactly:

(a) ∫ (0 to π/2) (cos x − 2 sin x) dx
(b) ∫ (0 to ln 3) eˣ dx
(c) ∫ (1 to e³) (2/x) dx

**(a)** The integrand is continuous everywhere. An antiderivative of cos x is sin x. An antiderivative of −2 sin x is 2 cos x, since d/dx (2 cos x) = −2 sin x.

∫ (0 to π/2) (cos x − 2 sin x) dx = [sin x + 2 cos x] (0 to π/2) = (1 + 0) − (0 + 2) = **−1**

A negative answer is allowed. It means the integrand is negative over more of the interval than it is positive, in the signed-area sense. Here cos x − 2 sin x is positive only until tan x = 1/2 (about x = 0.464). The region above the axis has area about 0.236 and the region below has area about 1.236. Their signed sum is −1.

**(b)** eˣ is its own antiderivative and is continuous everywhere.

∫ (0 to ln 3) eˣ dx = [eˣ] (0 to ln 3) = e^(ln 3) − e⁰ = 3 − 1 = **2**

**(c)** 2/x is continuous on [1, e³] because 0 is not in the interval. An antiderivative for x > 0 is 2 ln x.

∫ (1 to e³) (2/x) dx = [2 ln x] (1 to e³) = 2 · 3 − 2 · 0 = **6**

## When the theorem does not apply

The condition "f is continuous on [a, b]" is not decoration. Look at ∫ (−1 to 2) (3/x⁴) dx. An antiderivative of 3x⁻⁴ is −x⁻³ = −1/x³, so a careless calculation gives

[−1/x³] (−1 to 2) = (−1/8) − (1) = −9/8.

That cannot be right. The integrand 3/x⁴ is **positive** wherever it is defined, so a signed area under it cannot be negative. The mistake is that 3/x⁴ is not continuous on [−1, 2]: it is undefined at x = 0 and grows without bound there. The theorem's condition fails, so F(b) − F(a) means nothing here.

**Rule:** before you subtract, scan the interval for points where the integrand is undefined. If there is one, stop. (BC students meet integrals like this again as improper integrals in Topic 6.13.)

## The theorem in context: net change

Apply the theorem to a function F and its derivative F′. F is an antiderivative of F′, so if F′ is continuous on [a, b],

**∫ (a to b) F′(x) dx = F(b) − F(a)**

Integrating a **rate of change** gives the **net change** in the amount. Rearranged, F(b) = F(a) + ∫ (a to b) F′(x) dx: the final amount is the starting amount plus the net change.

## Worked example 3: net change from a rate

**Question.** A drone's height above the ground is H(t) metres, t seconds after a timer starts. Its vertical velocity is v(t) = 3t² − 12t + 9 metres per second for 0 ≤ t ≤ 4. At t = 0 the drone is 20 metres up. (The data are invented.)

(a) Find ∫ (0 to 4) v(t) dt and say what it means.
(b) Find H(4).

**(a)** v is a polynomial, so it is continuous. An antiderivative is t³ − 6t² + 9t.

∫ (0 to 4) v(t) dt = [t³ − 6t² + 9t] (0 to 4) = (64 − 96 + 36) − 0 = **4**

Since v = H′, this is H(4) − H(0). **Between t = 0 and t = 4 seconds, the drone's height increases by a net 4 metres.**

**(b)** H(4) = H(0) + ∫ (0 to 4) v(t) dt = 20 + 4 = **24 metres**.

**Interpretation.** v(t) = 3(t − 1)(t − 3), so the drone rises for 0 < t < 1, falls for 1 < t < 3 and rises again for 3 < t < 4. Over those pieces the height changes by +4, −4 and +4 metres. The integral gives the **net** change, +4, not the total distance moved, which is 12 metres. Total distance is a Unit 8 idea.

## Reading a limit of Riemann sums as an integral

Topic 6.3 showed that a limit of Riemann sums is a definite integral. Now you can evaluate it. Consider

lim (n → ∞) Σ (i = 1 to n) (3/n)(1 + 3i/n)²

Match the parts: Δx = 3/n, so the interval has length 3. The sample point is xᵢ = 1 + 3i/n, which starts near 1 and ends at 1 + 3 = 4. The function is f(x) = x². So the limit is

∫ (1 to 4) x² dx = [x³/3] (1 to 4) = 64/3 − 1/3 = **21**

Without the theorem, you would need a formula for Σ i² and a long limit calculation.

## Common misconceptions

- **Subtracting in the wrong order.** It is F(upper) − F(lower). Reversing gives the negative of the answer.
- **Dropping brackets.** F(b) − F(a) must subtract every term of F(a). Put F(a) in brackets.
- **Differentiating instead.** Writing f(b) − f(a), or f′, instead of F(b) − F(a).
- **"I must add + C."** You can, but it cancels. It is not wrong, just unnecessary.
- **Ignoring continuity.** Using the theorem across a point where the integrand is undefined, as in ∫ (−1 to 2) (3/x⁴) dx, gives nonsense.
- **"A definite integral is always positive."** It is a signed quantity. A negative answer is fine when more of the region is below the axis.
- **Confusing net change with total change.** ∫ (a to b) v(t) dt is net change in position, not distance travelled.
- **Mixing up the two forms of the theorem.** d/dx ∫ (a to x) f(t) dt = f(x) gives a function. ∫ (a to b) f(x) dx = F(b) − F(a) gives a number.
- **Antiderivative sign slips.** The antiderivative of sin x is −cos x, not cos x. Differentiate your F to check.

## Where this leads

You can now evaluate definite integrals exactly whenever you can find an antiderivative. In [Topic 6.8, Finding Antiderivatives and Indefinite Integrals](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-study-guide/), you will build the full table of basic antiderivatives and the notation ∫ f(x) dx = F(x) + C. Topics 6.9 onwards add techniques, starting with substitution, for integrands the basic rules cannot handle. Look back at [Topic 6.4](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/) for the accumulation form of the theorem, and at [Topic 6.6](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-study-guide/) for the properties used alongside it. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-checklist/) to consolidate.
