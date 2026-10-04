---
resourceId: "mb-ap-calcab-1.6-study-guide"
title: "Determining Limits Using Algebraic Manipulation: Study Guide (Calculus AB 1.6)"
description: "Learn why 0/0 is a signal rather than an answer, and how factoring, conjugates, combining fractions and trig identities turn it into a limit you can evaluate."
course: "calculus-ab"
unit: 1
topics: ["1.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation and the idea of a limit (Topics 1.2 to 1.4)"
  - "Properties of limits and direct substitution (Topic 1.5)"
  - "Factoring quadratics, difference of squares and difference of cubes"
  - "The Pythagorean identity sin²x + cos²x = 1 and the double-angle identity sin 2x = 2 sin x cos x"
learningObjectives:
  - "Recognise 0/0 as an indeterminate form that does not decide the limit"
  - "Explain why replacing a function by one that agrees with it near x = a (but not at a) keeps the limit the same"
  - "Find limits by factoring and cancelling, by multiplying by a conjugate, by combining fractions and by using trigonometric identities"
  - "State the condition under which each technique applies"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every limit here without a calculator. A table of values is a check, not a method."
related: ["mb-ap-calcab-1.6-revision-notes", "mb-ap-calcab-1.6-practice", "mb-ap-calcab-1.6-checklist"]
next: "mb-ap-calcab-1.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If direct substitution gives 0/0, the limit is not yet decided. Rewrite the expression and try again."
  - "If f(x) = g(x) for every x near a except possibly x = a, then the limit as x → a of f(x) equals the limit as x → a of g(x)."
  - "Polynomial 0/0 at x = a: factor out (x − a). Square roots: multiply by the conjugate. Stacked fractions: combine over a common denominator. Trig: use an identity."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.6 is common content, so the same page serves AB and BC students. BC students should know it just as well, because the same algebra reappears in derivatives from first principles and in series."
  - question: "If I cancel a factor, have I changed the function?"
    answer: "Yes, slightly: the new expression is also defined at x = a, while the original was not. But a limit only looks at x values near a, never at a itself, so the two expressions have the same limit."
  - question: "Can I just use a table of values?"
    answer: "A table suggests a value; it does not prove it. Algebra gives the exact value and a justification. Use a table only to check."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in words or in a compact form:

**lim (x → 3) f(x)** means "the limit as x approaches 3 of f(x)".

Both forms mean the same thing. On paper, write the usual form with "x → 3" under "lim". Keep "lim" on every line until you actually substitute; an expression without "lim" is a function, not a number.

## Why direct substitution sometimes fails

In Topic 1.5 you used the properties of limits. For polynomials, rational functions, roots and trig functions you could often just substitute x = a. That works whenever the function is defined and well behaved at a.

Now try lim (x → 3) (x² − 9)/(x − 3). Substituting x = 3 gives

**(9 − 9)/(3 − 3) = 0/0**

0/0 is not a number. It is called an **indeterminate form**. It tells you that the top and bottom both shrink towards 0 as x → 3, but it does not tell you how their ratio behaves. Different expressions that give 0/0 have different limits:

| Expression as x → 0 | Substitution gives | Actual limit |
|---|---|---|
| x²/x | 0/0 | 0 |
| 5x/x | 0/0 | 5 |
| x/x² | 0/0 | does not exist (unbounded) |

So **0/0 is a signal to do more work, never an answer**.

Contrast this with a nonzero number over 0, such as 4/0. That is *not* indeterminate. It tells you the expression grows without bound near a, so the limit does not exist as a finite number. Check the one-sided behaviour to describe it (infinite limits come later in Unit 1).

## The key fact: functions that agree near a have the same limit

Factor the numerator: x² − 9 = (x − 3)(x + 3). For every x **except x = 3**,

**(x² − 9)/(x − 3) = (x − 3)(x + 3)/(x − 3) = x + 3**

At x = 3 the left side is undefined (you cannot divide by 0), so the cancellation is only allowed when x ≠ 3. That is exactly the situation a limit cares about. The definition of a limit looks at x values close to 3, never at x = 3 itself.

> **Key fact.** If f(x) = g(x) for all x in an open interval around a, except possibly at x = a, then lim (x → a) f(x) = lim (x → a) g(x).

So

**lim (x → 3) (x² − 9)/(x − 3) = lim (x → 3) (x + 3) = 3 + 3 = 6**

The second limit can be found by substitution, because x + 3 is a polynomial.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="hole-title hole-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hole-title">Graph of y = (x² − 9)/(x − 3), a straight line with a hole at (3, 6)</title>
<desc id="hole-desc">A straight line with gradient 1 drawn for x from −1 to 6. It passes through (−1, 2), (0, 3) and (6, 9). At x = 3 there is an open circle at height 6, showing the function is undefined there. Dashed guide lines run from the open circle to 3 on the x-axis and to 6 on the y-axis. As x approaches 3 from either side, the y-values approach 6.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="280" x2="500" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="120" y1="300" x2="120" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="297">−1</text><text x="180" y="297">1</text><text x="240" y="297">2</text><text x="300" y="297">3</text><text x="360" y="297">4</text><text x="420" y="297">5</text><text x="480" y="297">6</text>
<text x="505" y="275">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="113" y="234">2</text><text x="113" y="184">4</text><text x="113" y="134">6</text><text x="113" y="84">8</text><text x="113" y="34">10</text>
<text x="113" y="18">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="276" x2="60" y2="284"/><line x1="180" y1="276" x2="180" y2="284"/><line x1="240" y1="276" x2="240" y2="284"/><line x1="300" y1="276" x2="300" y2="284"/><line x1="360" y1="276" x2="360" y2="284"/><line x1="420" y1="276" x2="420" y2="284"/><line x1="480" y1="276" x2="480" y2="284"/>
<line x1="116" y1="230" x2="124" y2="230"/><line x1="116" y1="180" x2="124" y2="180"/><line x1="116" y1="130" x2="124" y2="130"/><line x1="116" y1="80" x2="124" y2="80"/><line x1="116" y1="30" x2="124" y2="30"/>
</g>
<line x1="300" y1="136" x2="300" y2="280" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="120" y1="130" x2="294" y2="130" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="60" y1="230" x2="480" y2="55" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="300" cy="130" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="312" y="122" font-size="13" fill="#1d2b44">open circle: f(3) undefined</text>
<text x="330" y="250" font-size="13" fill="#1d2b44">y = (x² − 9)/(x − 3)</text>
<text x="330" y="266" font-size="12" fill="#1d2b44">(same as y = x + 3 when x ≠ 3)</text>
</svg>
<figcaption>Figure 1. The graph of (x² − 9)/(x − 3) is the line y = x + 3 with one point removed. The open circle at (3, 6) marks the "hole". Both sides of the line head towards height 6 as x → 3, so the limit is 6 even though f(3) does not exist. Axes are unitless.</figcaption>
</figure>

The picture explains the algebra. The original function and x + 3 have identical graphs except for one missing point. A limit asks where the graph is heading, and the missing point does not change that.

## Four techniques and when to use each

Each technique produces an equivalent expression that agrees with the original near a. Always check the **condition** first.

| Technique | Use it when | What you do |
|---|---|---|
| Factor and cancel | A rational function (polynomial over polynomial) gives 0/0 at x = a | Factor top and bottom. Both contain (x − a), by the factor theorem. Cancel it. |
| Multiply by the conjugate | A sum or difference involving a square root gives 0/0 | Multiply top and bottom by the conjugate, e.g. (√x + 2) for (√x − 2). Use (p − q)(p + q) = p² − q². |
| Combine fractions | A fraction inside a fraction gives 0/0 | Write the small fractions over a common denominator, then simplify the stacked fraction. |
| Use a trig identity | A trig expression gives 0/0 | Rewrite with an identity such as sin²x = 1 − cos²x or sin 2x = 2 sin x cos x, then cancel. |

**Why factoring always finds (x − a).** If a polynomial p(x) has p(a) = 0, the factor theorem says (x − a) is a factor of p(x). So when a rational function gives 0/0 at a, both the top and the bottom contain (x − a).

**After simplifying, substitute again.** Three outcomes are possible:

1. You get a number: that is the limit.
2. You get 0/0 again: a factor (x − a) is still hiding. Simplify further.
3. You get a nonzero number over 0: the limit does not exist as a finite number. Look at each side.

### Technique 3 in action: combining fractions

lim (x → 3) (1/x − 1/3)/(x − 3). Substitution gives (1/3 − 1/3)/0 = 0/0.

1. Combine the top: 1/x − 1/3 = (3 − x)/(3x).
2. Divide by (x − 3): (3 − x)/(3x(x − 3)).
3. Note 3 − x = −(x − 3). Cancel (x − 3), allowed for x ≠ 3: the expression becomes −1/(3x).
4. Substitute: −1/(3 × 3) = **−1/9**.

### Technique 4 in action: trig identities

lim (x → 0) (1 − cos x)/sin²x. Substitution gives (1 − 1)/0 = 0/0.

1. Write sin²x = 1 − cos²x = (1 − cos x)(1 + cos x).
2. Cancel (1 − cos x), which is nonzero for x near 0 but not equal to 0: the expression becomes 1/(1 + cos x).
3. Substitute: 1/(1 + 1) = **1/2**.

A second example: lim (x → 0) (sin 2x)/(sin x). Use sin 2x = 2 sin x cos x, cancel sin x (nonzero near 0, x ≠ 0), and the expression becomes 2 cos x. The limit is 2 cos 0 = **2**.

**Pointer to Topic 1.8.** The limit as x → 0 of (sin x)/x gives 0/0, but no algebraic rearrangement removes the problem: there is no common factor to cancel. Its value, 1, is established with the squeeze theorem in Topic 1.8. Do not try to "cancel the x" in sin x / x; sin x is not x times anything.

## Worked example 1: factoring a difference of cubes

**Question.** Find lim (x → 2) (x³ − 8)/(x² − 4) without a calculator.

1. **Try substitution.** Top: 2³ − 8 = 0. Bottom: 2² − 4 = 0. The result is 0/0, so the limit is not yet decided.
2. **Check the condition.** Top and bottom are polynomials that are both 0 at x = 2, so both contain the factor (x − 2).
3. **Factor.** Difference of cubes: x³ − 8 = (x − 2)(x² + 2x + 4). Difference of squares: x² − 4 = (x − 2)(x + 2).
4. **Cancel**, valid for x ≠ 2:
   **(x³ − 8)/(x² − 4) = (x² + 2x + 4)/(x + 2)**
5. **Take the limit of the equivalent expression.** The new denominator is 4, not 0, so substitute:
   **lim (x → 2) (x² + 2x + 4)/(x + 2) = (4 + 4 + 4)/(2 + 2) = 12/4 = 3**

**Answer.** The limit is **3**.

**Check.** At x = 2.001, (x³ − 8)/(x² − 4) ≈ 3.0008, which is close to 3. The table agrees with the algebra.

**Interpretation.** The graph of (x³ − 8)/(x² − 4) has a hole at (2, 3). (At x = −2 it has a vertical asymptote instead, because there only the bottom is 0.)

## Worked example 2: multiplying by the conjugate

**Question.** Find lim (x → 4) (√x − 2)/(x − 4) without a calculator.

1. **Try substitution.** Top: √4 − 2 = 0. Bottom: 4 − 4 = 0. The result is 0/0.
2. **Check the condition.** The 0 on top comes from a difference involving a square root, √x − 2. Its conjugate is √x + 2.
3. **Multiply top and bottom by the conjugate.** This multiplies by (√x + 2)/(√x + 2), which equals 1 because √x + 2 > 0:
   **(√x − 2)(√x + 2) / ((x − 4)(√x + 2))**
4. **Expand the top only.** (√x − 2)(√x + 2) = (√x)² − 2² = x − 4. Leave the bottom factored.
   **= (x − 4) / ((x − 4)(√x + 2))**
5. **Cancel (x − 4)**, valid for x ≠ 4:
   **= 1/(√x + 2)**
6. **Substitute:** 1/(√4 + 2) = 1/(2 + 2) = **1/4**.

**Answer.** The limit is **1/4**, or 0.25.

**Check.** At x = 4.01, (√4.01 − 2)/0.01 ≈ 0.2498. That is close to 0.25.

**Alternative method.** Write x − 4 as a difference of squares in √x: x − 4 = (√x − 2)(√x + 2), for x ≥ 0. Cancelling (√x − 2) gives the same 1/(√x + 2). Both methods are valid.

**Why keep the bottom factored?** If you expand (x − 4)(√x + 2), the common factor disappears from view and you cannot cancel it.

## Common misconceptions

- **"0/0 means the limit is 0."** Or 1, or "does not exist". None of these follows. 0/0 only says more work is needed.
- **"Cancelling changes the function, so the limit changes."** The new expression differs from the old one only at x = a. A limit never uses the value at a, so the limit is unchanged.
- **"The limit equals f(a)."** Only for functions that behave well at a. In this topic f(a) usually does not exist, yet the limit does.
- **Cancelling terms instead of factors.** In (x² + 5x + 6)/(x² − 4) you cannot "cancel the x²". Only whole factors cancel.
- **Dropping "lim" too early.** Writing "lim (x → 3) (x² − 9)/(x − 3) = x + 3" is wrong: the left side is a number, the right side is a function. Keep "lim" until you substitute.
- **Expanding the bottom after using a conjugate.** This hides the factor you need to cancel.
- **Rationalising when substitution already works.** If substitution gives a number with a nonzero bottom, you are finished. Extra algebra only adds chances to slip.
- **Treating 4/0 as 0/0.** A nonzero number over 0 means the expression is unbounded near a. No cancellation will produce a finite limit.
- **"Cancelling" the x in sin x / x.** sin x is not a product with x. That limit belongs to Topic 1.8.

## Where this leads

Algebraic manipulation is the tool you will use most in the rest of Unit 1. Topic 1.7 asks you to choose between substitution, these techniques and other methods. Topic 1.8 handles limits such as (sin x)/x with the squeeze theorem. In Unit 2, every derivative from first principles is a 0/0 limit that you simplify in exactly this way. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-checklist/) to consolidate.
