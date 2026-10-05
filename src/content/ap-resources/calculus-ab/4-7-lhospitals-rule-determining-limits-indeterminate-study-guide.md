---
resourceId: "mb-ap-calcab-4.7-study-guide"
title: "Using L'Hospital's Rule for Determining Limits of Indeterminate Forms: Study Guide (Calculus AB 4.7)"
description: "Learn when L'Hospital's Rule applies, why it works, how to show the conditions in writing, and how to use it on 0/0 and ∞/∞ limits, including repeated use."
course: "calculus-ab"
unit: 4
topics: ["4.7"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "0/0 limits by algebra (Topic 1.6) and limits at infinity (Topic 1.15)"
  - "Derivatives of polynomials, eˣ, ln x, sin x and cos x (Topics 2.5 to 2.7)"
  - "The chain rule (Topic 3.1)"
  - "Local linearity and tangent line approximations (Topic 4.6)"
learningObjectives:
  - "Recognise the indeterminate forms 0/0 and ∞/∞ and explain why they do not decide a limit"
  - "Check, and show in writing, that numerator and denominator both tend to 0 or both tend to infinity before using L'Hospital's Rule"
  - "Find a limit by taking the ratio of the derivatives of the numerator and the denominator, applying the rule more than once when needed"
  - "Explain, using tangent lines, why the rule gives the right answer for 0/0"
  - "Recognise limits where the rule does not apply or does not help"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every limit here without a calculator. Angles are in radians. Decimal values in tables are checks, not methods."
related: ["mb-ap-calcab-4.7-revision-notes", "mb-ap-calcab-4.7-practice", "mb-ap-calcab-4.7-checklist"]
next: "mb-ap-calcab-4.7-practice"
prerequisiteResources: ["mb-ap-calcab-4.6-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "L'Hospital's Rule: if f(x) and g(x) both tend to 0, or both tend to ±∞, then lim f(x)/g(x) = lim f′(x)/g′(x), provided the second limit exists or is infinite."
  - "Always check both limits first, and write the check down. If the form is not 0/0 or ∞/∞, the rule does not apply."
  - "Differentiate the top and the bottom separately. Do not use the quotient rule."
  - "If the new limit is still 0/0 or ∞/∞, check again and apply the rule again."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 4.7 is common content, so the same page serves AB and BC students. BC students use the rule again later, for example with improper integrals and series."
  - question: "Can I write lim f(x)/g(x) = 0/0?"
    answer: "No. 0/0 is a label for the type of limit, not a value. Write the two separate limits, lim f(x) = 0 and lim g(x) = 0, and then say the form is 0/0."
  - question: "Should I still use algebra from Topic 1.6?"
    answer: "Yes. Factoring or a conjugate is often quicker, and some limits loop forever under L'Hospital's Rule. Choose the method that finishes the job."
  - question: "What about forms such as 0 · ∞ or ∞ − ∞?"
    answer: "They exist, but the exam does not assess them. This page mentions them only as background."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both, except the short background note on other forms, which is not assessed.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

**lim (x → a) f(x)** means "the limit as x approaches a of f(x)".

The rule is named after the French mathematician L'Hospital. You will also see it spelled L'Hôpital. Both are correct.

## Limits that algebra cannot finish

In Topic 1.6 you met 0/0 limits and removed the problem with algebra: factoring, conjugates, combining fractions or a trig identity. That works when a common factor is hiding. Now look at these two limits:

- lim (x → 0) (eˣ − 1)/x
- lim (x → 1) (ln x)/(x − 1)

In both, the top and the bottom tend to 0. But there is no factor to cancel. eˣ − 1 is not x times anything simple. Algebra cannot finish the job. (Both limits equal 1, as you will see.)

In Topic 1.15 you also met limits at infinity where the top and the bottom both grow without bound, such as (ln x)/√x as x → ∞. There you used the growth order of logs, powers and exponentials as a known fact.

These are the two **indeterminate forms** for this topic:

| Form | What it means | Why it does not decide the limit |
|---|---|---|
| 0/0 | top → 0 and bottom → 0 | a "race to 0": the ratio depends on which shrinks faster |
| ∞/∞ | top → ±∞ and bottom → ±∞ | a "race to infinity": the ratio depends on which grows faster |

**Important.** 0/0 and ∞/∞ are **labels**, not numbers. You may say "the limit has the form 0/0". You may not write lim (x → 0) (eˣ − 1)/x = 0/0, because the left side is a number (or does not exist), and 0/0 is not a number.

## The rule

> **L'Hospital's Rule.** Suppose f and g are differentiable near a (except possibly at a) and g′(x) ≠ 0 near a (except possibly at a). If
>
> lim (x → a) f(x) = 0 and lim (x → a) g(x) = 0,
>
> or both limits are infinite (+∞ or −∞), then
>
> lim (x → a) f(x)/g(x) = lim (x → a) f′(x)/g′(x),
>
> provided the limit on the right exists or is infinite.

Notes on the statement:

- The same rule works for one-sided limits and for limits as x → ∞ or x → −∞.
- The right side is the **ratio of the derivatives**, f′(x)/g′(x). It is not the derivative of the ratio f(x)/g(x). You never use the quotient rule here.
- The rule moves the problem to a new limit. You still have to evaluate that new limit.
- If lim f′(x)/g′(x) does not exist, the rule tells you nothing. It does not say the original limit fails to exist.

## Why it works: local linearity

This is where Topic 4.6 helps. Take the 0/0 case with a = 0, and suppose f(0) = g(0) = 0 and f, g have derivatives at 0. Near x = 0, each graph is almost a straight line through the origin. The tangent lines are

**f(x) ≈ f′(0) · x and g(x) ≈ g′(0) · x**

So for x close to 0 (but not 0),

**f(x)/g(x) ≈ f′(0) · x / (g′(0) · x) = f′(0)/g′(0)**

The x cancels because both lines pass through the same point. The ratio of the two functions is close to the ratio of the two slopes. The closer x is to 0, the better the tangent lines fit, so the ratio gets closer to f′(0)/g′(0).

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="lh-title lh-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lh-title">Graphs of y = e^(4x) − 1 and y = sin 2x near x = 0, each with its tangent line at the origin</title>
<desc id="lh-desc">Both curves pass through the origin. The solid curve y = e^(4x) − 1 rises steeply and bends upward; its dotted tangent line y = 4x has slope 4. The dashed curve y = sin 2x rises more gently; its dotted tangent line y = 2x has slope 2. The x-axis runs from −0.25 to 0.25 and the y-axis from −1 to 1.8. Close to the origin each curve lies almost on its tangent line, so the ratio of the curves' heights is close to 4 divided by 2, which is 2.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<line x1="50" y1="210" x2="500" y2="210" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="270" y1="325" x2="270" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="102" y1="206" x2="102" y2="214"/><line x1="186" y1="206" x2="186" y2="214"/><line x1="354" y1="206" x2="354" y2="214"/><line x1="438" y1="206" x2="438" y2="214"/>
<line x1="266" y1="310" x2="274" y2="310"/><line x1="266" y1="260" x2="274" y2="260"/><line x1="266" y1="160" x2="274" y2="160"/><line x1="266" y1="110" x2="274" y2="110"/><line x1="266" y1="60" x2="274" y2="60"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="102" y="228">−0.2</text><text x="186" y="228">−0.1</text><text x="354" y="228">0.1</text><text x="438" y="228">0.2</text><text x="506" y="206">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="262" y="314">−1</text><text x="262" y="264">−0.5</text><text x="262" y="164">0.5</text><text x="262" y="114">1</text><text x="262" y="64">1.5</text><text x="262" y="24">y</text>
</g>
<line x1="60" y1="310" x2="480" y2="110" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<line x1="60" y1="260" x2="480" y2="160" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60,273.2 81,269.3 102,265.1 123,260.3 144,255.1 165,249.3 186,243 207,235.9 228,228.1 249,219.5 270,210 291,199.5 312,187.9 333,175 354,160.8 375,145.1 396,127.8 417,108.6 438,87.4 459,64 480,38.2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5" points="60,257.9 81,253.5 102,248.9 123,244.3 144,239.6 165,234.7 186,229.9 207,224.9 228,220 249,215 270,210 291,205 312,200 333,195.1 354,190.1 375,185.3 396,180.4 417,175.7 438,171.1 459,166.5 480,162.1"/>
<circle cx="270" cy="210" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<line x1="40" y1="40" x2="80" y2="40" stroke="#1d2b44" stroke-width="2.5"/><text x="88" y="44">f(x) = e^(4x) − 1 (solid)</text>
<line x1="40" y1="62" x2="80" y2="62" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/><text x="88" y="66">g(x) = sin 2x (dashed)</text>
<line x1="40" y1="84" x2="80" y2="84" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/><text x="88" y="88">tangent lines (dotted)</text>
</g>
<text x="482" y="104" font-size="12" fill="#1d2b44" text-anchor="end">y = 4x</text>
<text x="482" y="154" font-size="12" fill="#1d2b44" text-anchor="end">y = 2x</text>
</svg>
<figcaption>Figure 1. Near the origin, f(x) = e^(4x) − 1 is close to its tangent line y = 4x, and g(x) = sin 2x is close to y = 2x. So f(x)/g(x) is close to 4x/(2x) = 2. That is f′(0)/g′(0). Further from the origin the curves pull away from their tangent lines and the ratio drifts from 2. Axes are unitless.</figcaption>
</figure>

A table confirms the picture for f(x) = e^(4x) − 1 and g(x) = sin 2x:

| x | 0.1 | 0.01 | 0.001 |
|---|---|---|---|
| f(x)/g(x) (to 3 s.f.) | 2.48 | 2.04 | 2.00 |

The ratio heads to 2, the ratio of the slopes 4 and 2. This argument covers the simplest 0/0 case. The full rule, including ∞/∞, can be proved with an extended version of the Mean Value Theorem (Topic 5.1 introduces the basic version); you do not need that proof.

## Using the rule: four steps

1. **Check the form.** Find lim f(x) and lim g(x) **separately**. Write both down. Continue only if both are 0, or both are infinite.
2. **Differentiate the top and the bottom separately.** Write f′(x)/g′(x). Simplify if you can.
3. **Evaluate the new limit.** Often substitution now works.
4. **If the new limit is again 0/0 or ∞/∞, go back to step 1** with f′ and g′. Check the form again before each use.

**How to write the justification.** Examiners expect to see that the rule applies. A short version is enough:

> lim (x → 0) (e^(4x) − 1) = 0 and lim (x → 0) sin 2x = 0, so L'Hospital's Rule applies.

Then write the new limit with "lim" in front of it. Keep "lim" on every line until you substitute.

**Using a table of values.** Some questions give only values of f, g, f′ and g′ at a point. Suppose f and g have continuous derivatives, f(1) = 0, g(1) = 0, f′(1) = −3 and g′(1) = 12. Continuous functions have limits equal to their values, so lim f(x) = 0 and lim g(x) = 0. The rule then gives

**lim (x → 1) f(x)/g(x) = lim (x → 1) f′(x)/g′(x) = f′(1)/g′(1) = −3/12 = −1/4**

The last step uses the continuity of f′ and g′ and the fact that g′(1) ≠ 0.

## Worked example 1: a 0/0 limit with exponentials and trig

**Question.** Find lim (x → 0) (e^(4x) − 1)/(sin 2x) without a calculator.

1. **Check the form.** lim (x → 0) (e^(4x) − 1) = e⁰ − 1 = 0. lim (x → 0) sin 2x = sin 0 = 0. Both are 0, so the form is 0/0 and L'Hospital's Rule applies.
2. **Differentiate top and bottom separately**, using the chain rule on each:
   d/dx (e^(4x) − 1) = 4e^(4x), and d/dx (sin 2x) = 2 cos 2x.
3. **Write the new limit:**
   **lim (x → 0) (e^(4x) − 1)/(sin 2x) = lim (x → 0) 4e^(4x)/(2 cos 2x)**
4. **Evaluate.** The new bottom is 2 cos 0 = 2, not 0, so substitute: 4e⁰/(2 cos 0) = 4/2 = **2**.

**Answer.** The limit is **2**.

**Check.** At x = 0.01, (e^(0.04) − 1)/(sin 0.02) ≈ 2.04. That is close to 2.

**Interpretation.** This is the limit drawn in Figure 1. The answer is the ratio of the two tangent slopes, 4 and 2.

## Worked example 2: an ∞/∞ limit at infinity

**Question.** Show that lim (x → ∞) (ln x)/√x = 0.

In Topic 1.15 you used this as a fact about growth rates: logarithms grow more slowly than positive powers. Now you can prove it.

1. **Check the form.** As x → ∞, ln x → ∞ and √x → ∞. Both the top and the bottom are infinite, so the form is ∞/∞ and L'Hospital's Rule applies.
2. **Differentiate separately.** d/dx (ln x) = 1/x. d/dx (√x) = 1/(2√x).
3. **Write the new limit and simplify:**
   **lim (x → ∞) (1/x)/(1/(2√x)) = lim (x → ∞) 2√x/x = lim (x → ∞) 2/√x**
4. **Evaluate.** As x → ∞, √x → ∞, so 2/√x → 0. The limit is **0**.

**Answer.** lim (x → ∞) (ln x)/√x = **0**.

**Check.** At x = 10 000, (ln x)/√x ≈ 0.092. At x = 100 000 000, it is about 0.0018. The values shrink towards 0, but slowly.

**Why simplify in step 3?** Dividing by a fraction is the same as multiplying by its reciprocal. Simplifying before you evaluate stops you from writing a new ∞/∞ by mistake.

## Worked example 3: using the rule more than once

**Question.** Find lim (x → 0) (2x − sin 2x)/x³.

1. **Check the form.** lim (x → 0) (2x − sin 2x) = 0 − 0 = 0 and lim (x → 0) x³ = 0. Form 0/0, so the rule applies:
   **lim (x → 0) (2x − sin 2x)/x³ = lim (x → 0) (2 − 2 cos 2x)/(3x²)**
2. **Check again.** lim (x → 0) (2 − 2 cos 2x) = 2 − 2 = 0 and lim (x → 0) 3x² = 0. Still 0/0, so apply the rule again:
   **= lim (x → 0) (4 sin 2x)/(6x)**
3. **Check again.** lim (x → 0) 4 sin 2x = 0 and lim (x → 0) 6x = 0. Still 0/0. Apply the rule a third time:
   **= lim (x → 0) (8 cos 2x)/6**
4. **Evaluate.** The bottom is 6, not 0. Substitute: 8 cos 0/6 = 8/6 = **4/3**.

**Answer.** The limit is **4/3**.

**Check.** At x = 0.1, (0.2 − sin 0.2)/0.001 ≈ 1.3307, and 4/3 ≈ 1.3333.

**Shortcut.** At step 3 you could stop early. Write (4 sin 2x)/(6x) = (4/3) · (sin 2x)/(2x), and use lim (θ → 0) (sin θ)/θ = 1 from Topic 1.8 with θ = 2x. Then the limit is 4/3 at once. Either route earns the answer.

## When not to use the rule

**When the form is not indeterminate.** Take lim (x → 0) (x² + 3)/(x + 1). Substitution gives 3/1 = 3, so the limit is 3. If you apply the rule anyway, you get lim (x → 0) 2x/1 = 0, which is wrong. The rule only works because the top and bottom are racing to the same place. If they are not, the ratio of derivatives has nothing to do with the ratio of the functions.

Also watch for **nonzero/0** (for example 1/0) and **0/∞**. Neither is indeterminate. A nonzero number over something tending to 0 is unbounded, as in Topic 1.14. And 0/∞ tends to 0.

**When the rule loops.** Take lim (x → ∞) x/√(x² + 1). It is ∞/∞, but the rule gives lim (x → ∞) √(x² + 1)/x: the same problem upside down. Applying it again returns the original. Use Topic 1.15 algebra instead: divide top and bottom by x (for x > 0) to get 1/√(1 + 1/x²) → **1**.

**When algebra is quicker.** For a polynomial ratio such as (x² − 25)/(x − 5) as x → 5, factoring is as fast and shows the hole in the graph. Use whichever method you can justify cleanly.

**Background, not assessed: other forms.** Forms such as 0 · ∞, ∞ − ∞, 1^∞, 0⁰ and ∞⁰ are also indeterminate. You may see them in some classes, but they are outside the exam. The usual approach is to rewrite them as a quotient first. For example, x ln x as x → 0⁺ has the form 0 · ∞; writing it as (ln x)/(1/x) gives ∞/∞, and the rule shows the limit is 0.

## Common misconceptions

- **"The limit equals 0/0."** 0/0 is a label for a type of limit, never a value. Write the two separate limits instead.
- **Using the quotient rule.** The rule uses f′(x)/g′(x), the derivatives of the top and the bottom taken separately. The derivative of f(x)/g(x) is a different expression.
- **Skipping the check.** Applying the rule to a limit that is not 0/0 or ∞/∞ usually gives a wrong answer, as with (x² + 3)/(x + 1). On written answers, a missing check can cost the mark even if the value is right.
- **Checking only once.** Each new application needs its own check. Stop as soon as the form is no longer indeterminate.
- **Writing lim f(x)/g(x) = lim f(x) / lim g(x) when lim g(x) = 0.** The quotient property of limits needs a nonzero bottom limit. That is exactly why the rule is needed.
- **Forgetting the chain rule.** d/dx (sin 2x) is 2 cos 2x, not cos 2x. A missing factor changes the answer.
- **"If lim f′/g′ does not exist, then lim f/g does not exist."** The rule only works in one direction. If the new limit fails, try another method.
- **Thinking the rule replaces algebra.** It is one more tool. Sometimes factoring or dividing by the highest power is quicker or is the only route that ends.

## Where this leads

L'Hospital's Rule finishes Unit 4. Unit 5 begins with the [Mean Value Theorem in Topic 5.1](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/), the theorem behind a full proof of this rule. BC students will use the rule again when they compare growth rates in improper integrals and in tests for series. If the tangent-line argument above felt shaky, look back at [Topic 4.6, Approximating Values of a Function Using Local Linearity and Linearization](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-checklist/) to consolidate.
