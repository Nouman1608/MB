---
resourceId: "mb-ap-calcab-1.5-study-guide"
title: "Determining Limits Using Algebraic Properties of Limits: Study Guide (Calculus AB 1.5)"
description: "Learn the limit laws for sums, products, quotients, powers, roots and composite functions, when each applies, and how to find one-sided limits from formulas and graphs."
course: "calculus-ab"
unit: 1
topics: ["1.5"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation, one-sided limits and the idea of a limit (Topics 1.2 to 1.4)"
  - "Reading values and open or filled points from a graph"
  - "Evaluating polynomials, square roots and sine or cosine at exact values"
prerequisiteResources: ["mb-ap-calcab-1.4-study-guide"]
learningObjectives:
  - "Combine known limits using the sum, difference, constant multiple, product, quotient, power and root properties"
  - "State the condition each property needs, including a nonzero limit in the denominator for quotients"
  - "Explain why direct substitution gives the limit of a polynomial, and of a rational function whose denominator is not 0"
  - "Find the limit of a composite function when the outer function can be evaluated at the inner limit, and track the side of approach when it cannot"
  - "Find one-sided limits from a formula (including piecewise functions) and from a graph, and use them to decide whether a two-sided limit exists"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every limit here without a calculator. Angles are in radians. Give exact answers."
related: ["mb-ap-calcab-1.5-revision-notes", "mb-ap-calcab-1.5-practice", "mb-ap-calcab-1.5-checklist"]
next: "mb-ap-calcab-1.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If two limits exist, the limit of their sum, difference, product or constant multiple is the sum, difference, product or multiple of the limits."
  - "The quotient property needs the limit of the denominator to be nonzero. If it is 0, the property says nothing, and you need another method."
  - "For a composite f(g(x)): if g(x) → L and f can be evaluated by substitution at L, the limit is f(L)."
  - "The properties work for one-sided limits too. A two-sided limit exists only when both one-sided limits exist and are equal."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.5 is common content, so the same page serves AB and BC students."
  - question: "If lim f(x) does not exist, can lim [f(x) + g(x)] still exist?"
    answer: "Yes. The sum property cannot be used then, but the sum can still have a limit. Work out each one-sided limit of the sum directly, as in Worked example 2."
  - question: "Why can I just substitute into a polynomial?"
    answer: "Because a polynomial is built from constants and x using sums, products and constant multiples. Applying the limit properties step by step gives exactly the value at x = a."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both. It follows [Topic 1.4, Estimating Limit Values from Tables](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-study-guide/).

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

- **lim (x → a) f(x)** means "the limit as x approaches a of f(x)".
- **lim (x → a⁻) f(x)** is the **left-hand limit**: x approaches a through values less than a.
- **lim (x → a⁺) f(x)** is the **right-hand limit**: x approaches a through values greater than a.

On paper, write "x → a" under "lim" as usual. Keep "lim" on every line until you substitute.

## Why we need properties of limits

In Topics 1.3 and 1.4 you **estimated** limits from graphs and tables. An estimate is useful, but it is not exact, and it is not a justification. This topic gives you rules that turn limits you already know into new limits. Each rule is a theorem, so each step you write can be justified by naming the rule.

Everything starts from two simple facts:

1. **Constant:** lim (x → a) c = c. A function that never changes approaches its own value.
2. **Identity:** lim (x → a) x = a. As x gets close to a, x gets close to a.

## The properties of limits

Suppose **lim (x → a) f(x) = L** and **lim (x → a) g(x) = M**, where L and M are real numbers (both limits exist and are finite). Then:

| Property | Rule | Condition |
|---|---|---|
| Sum | lim [f(x) + g(x)] = L + M | Both limits exist |
| Difference | lim [f(x) − g(x)] = L − M | Both limits exist |
| Constant multiple | lim [k · f(x)] = k · L | The limit of f exists; k is any constant |
| Product | lim [f(x) · g(x)] = L · M | Both limits exist |
| Quotient | lim [f(x) / g(x)] = L / M | Both limits exist **and M ≠ 0** |
| Power | lim [f(x)]ⁿ = Lⁿ | n is a positive whole number |
| Root | lim ⁿ√f(x) = ⁿ√L | For an even root (such as a square root), L > 0 |

All limits in the table are as x → a. Three things to notice:

- **Every property needs the separate limits to exist.** If lim f(x) does not exist, the sum property cannot be used. That does not prove the sum has no limit. It only means this rule cannot tell you.
- **The quotient property fails when M = 0.** If the top tends to a nonzero number and the bottom tends to 0, the quotient grows without bound near a, so there is no finite limit. If both tend to 0, the result 0/0 is undecided; Topic 1.6 deals with that.
- **The same properties hold for one-sided limits.** Replace "x → a" by "x → a⁻" or "x → a⁺" everywhere.

## Why direct substitution works for polynomials

Take lim (x → 2) (3x² − 5x + 1). Using the properties one at a time:

- lim x = 2 (identity), so lim x² = 2² = 4 (power).
- lim 3x² = 3 × 4 = 12 and lim 5x = 5 × 2 = 10 (constant multiple).
- lim 1 = 1 (constant).
- So lim (3x² − 5x + 1) = 12 − 10 + 1 = **3** (sum and difference).

The result is the same as substituting x = 2. That is no accident. Every polynomial is built from constants and x by sums, differences, products and constant multiples, so **for any polynomial p, lim (x → a) p(x) = p(a)**.

A rational function is a polynomial over a polynomial. By the quotient property, **lim (x → a) p(x)/q(x) = p(a)/q(a), provided q(a) ≠ 0**. For example,

**lim (x → −1) (x² + 4)/(x − 2) = (1 + 4)/(−1 − 2) = 5/(−3) = −5/3**

The bottom is −3, not 0, so substitution is justified.

## Limits of composite functions

A composite function has an inner function inside an outer one, such as √(x³ + 1). The inner function is x³ + 1 and the outer function is the square root.

> **Composite property.** If lim (x → a) g(x) = L, and the outer function f can be evaluated by substitution at L (that is, lim (y → L) f(y) = f(L)), then lim (x → a) f(g(x)) = f(L).

Polynomials, roots of positive numbers, sine and cosine all allow substitution at every point of their domain. So:

- lim (x → 2) √(x³ + 1): the inner limit is 8 + 1 = 9, and √ can be evaluated at 9. The limit is √9 = **3**.
- lim (x → π) cos(x/3): the inner limit is π/3, and cosine can be evaluated anywhere. The limit is cos(π/3) = **1/2**.

**When the outer function jumps at L.** If f has a jump or a hole at L, you cannot just write f(L). Instead ask: **from which side does g(x) approach L?** If g(x) approaches L from above (g(x) > L), the composite approaches lim (y → L⁺) f(y). If from below, use the left-hand limit of f. Worked example 2 part (f) shows this.

## One-sided limits from formulas and graphs

**From a formula.** Use the piece of the formula that applies on that side. For example, |x| = −x when x < 0 and |x| = x when x > 0. So:

- lim (x → 0⁻) |x|/x = lim (x → 0⁻) (−x)/x = lim (x → 0⁻) (−1) = **−1**
- lim (x → 0⁺) |x|/x = lim (x → 0⁺) x/x = lim (x → 0⁺) 1 = **1**

(Cancelling x is allowed because x ≠ 0 on either side.)

**From a graph.** Follow the curve towards x = a from one side and read the height it approaches. An open circle marks a point that is not on the graph; a filled circle marks the actual value f(a). The value f(a) never affects the limit.

**The two-sided test.** lim (x → a) f(x) exists exactly when both one-sided limits exist and are equal. Then the two-sided limit is that common value.

<figure>
<svg viewBox="0 0 580 300" role="img" aria-labelledby="fg15-title fg15-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fg15-title">Graphs of f and g, each with a jump at x = 1</title>
<desc id="fg15-desc">Two panels, each for x from −1 to 4 and y from 0 to 4. Left panel, y = f(x): a line segment rises from (−1, 0) to an open circle at (1, 2); a second segment starts at a filled circle at (1, 3) and falls to (4, 0). So f(1) = 3, the left-hand limit at 1 is 2 and the right-hand limit is 3. Right panel, y = g(x): a line segment falls from (−1, 4) to an open circle at (1, 2); a second segment starts at a filled circle at (1, 1) and rises to (4, 4). So g(1) = 1, the left-hand limit at 1 is 2 and the right-hand limit is 1.</desc>
<rect x="0" y="0" width="580" height="300" fill="#ffffff"/>
<line x1="40" y1="264" x2="40" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="84" y1="264" x2="84" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="128" y1="264" x2="128" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="172" y1="264" x2="172" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="216" y1="264" x2="216" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="260" y1="264" x2="260" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="264" x2="260" y2="264" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="214" x2="260" y2="214" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="164" x2="260" y2="164" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="114" x2="260" y2="114" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="64" x2="260" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="32" y1="264" x2="270" y2="264" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="84" y1="272" x2="84" y2="54" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="40" y="280">−1</text><text x="128" y="280">1</text><text x="172" y="280">2</text><text x="216" y="280">3</text><text x="260" y="280">4</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="78" y="218">1</text><text x="78" y="168">2</text><text x="78" y="118">3</text><text x="78" y="68">4</text><text x="78" y="280">0</text></g>
<text x="274" y="268" font-size="12" fill="#1d2b44">x</text>
<text x="90" y="52" font-size="12" fill="#1d2b44">y</text>
<text x="150" y="28" font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">y = f(x)</text>
<line x1="40" y1="264" x2="128" y2="164" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="128" y1="114" x2="260" y2="264" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="128" cy="164" r="5.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="128" cy="114" r="5.5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<line x1="320" y1="264" x2="320" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="364" y1="264" x2="364" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="408" y1="264" x2="408" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="452" y1="264" x2="452" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="496" y1="264" x2="496" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="540" y1="264" x2="540" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="264" x2="540" y2="264" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="214" x2="540" y2="214" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="164" x2="540" y2="164" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="114" x2="540" y2="114" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="64" x2="540" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="312" y1="264" x2="550" y2="264" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="364" y1="272" x2="364" y2="54" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="320" y="280">−1</text><text x="408" y="280">1</text><text x="452" y="280">2</text><text x="496" y="280">3</text><text x="540" y="280">4</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="358" y="218">1</text><text x="358" y="168">2</text><text x="358" y="118">3</text><text x="358" y="68">4</text><text x="358" y="280">0</text></g>
<text x="554" y="268" font-size="12" fill="#1d2b44">x</text>
<text x="370" y="52" font-size="12" fill="#1d2b44">y</text>
<text x="430" y="28" font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">y = g(x)</text>
<line x1="320" y1="64" x2="408" y2="164" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="408" y1="214" x2="540" y2="64" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="408" cy="164" r="5.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="408" cy="214" r="5.5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
</svg>
<figcaption>Figure 1. Graphs of f (left) and g (right) for −1 ≤ x ≤ 4. Open circles are points not on the graph; filled circles show the actual function values f(1) = 3 and g(1) = 1. Formulas: f(x) = x + 1 for x &lt; 1 and 4 − x for x ≥ 1; g(x) = 3 − x for x &lt; 1 and x for x ≥ 1. Axes are unitless.</figcaption>
</figure>

## Worked example 1: combining known limits

**Question.** You are told that lim (x → 3) f(x) = 5 and lim (x → 3) g(x) = −2. Find each limit, or explain why the properties cannot give it.

(a) lim (x → 3) [f(x)g(x) + x²] / [f(x) − g(x)]
(b) lim (x → 3) √(f(x) + 4)
(c) lim (x → 3) [g(x)]³
(d) lim (x → 3) f(x) / [g(x) + 2]

**(a)** Work out the top and bottom separately first.

1. Top: lim f(x)g(x) = 5 × (−2) = −10 (product). lim x² = 3² = 9 (power of the identity). So the top tends to −10 + 9 = −1 (sum).
2. Bottom: lim [f(x) − g(x)] = 5 − (−2) = 7 (difference).
3. The bottom limit is 7, which is not 0, so the quotient property applies: the limit is **−1/7**.

**(b)** lim [f(x) + 4] = 5 + 4 = 9 (sum and constant). Since 9 > 0, the root property applies: the limit is √9 = **3**.

**(c)** By the power property, the limit is (−2)³ = **−8**. Watch the sign: an odd power of a negative number is negative.

**(d)** The top tends to 5. The bottom tends to −2 + 2 = 0. The quotient property **does not apply**, because the bottom limit is 0. Since the top tends to a nonzero number while the bottom tends to 0, the quotient becomes unbounded near x = 3. **There is no finite limit.**

**Check your reasoning.** Each step names a property and confirms its condition (limits exist; bottom limit nonzero; positive number under a square root). That is what "justify" means in this topic.

## Worked example 2: limits from graphs

**Question.** Use Figure 1 to find each limit, or explain why it does not exist.

(a) lim (x → 1) f(x)  (b) lim (x → 1) g(x)  (c) lim (x → 1) [f(x) + g(x)]
(d) lim (x → 1) f(x)g(x)  (e) lim (x → 3) f(g(x))  (f) lim (x → 1) f(g(x))

**(a)** From the left, the graph of f heads to the open circle at height 2. From the right, it heads to height 3. The one-sided limits are 2 and 3. They differ, so **lim (x → 1) f(x) does not exist**.

**(b)** From the left, g heads to 2. From the right, g heads to 1. **The limit does not exist.**

**(c)** The sum property cannot be used, because neither limit exists. Use one-sided limits instead; the properties do work on each side.

- Left: 2 + 2 = 4.
- Right: 3 + 1 = 4.

Both one-sided limits equal 4, so **lim (x → 1) [f(x) + g(x)] = 4**. The jumps cancel: f jumps up by 1 and g jumps down by 1.

**(d)** Left: 2 × 2 = 4. Right: 3 × 1 = 3. They differ, so **the limit does not exist**.

**(e)** Near x = 3, g(x) = x, so g(x) → 3. The graph of f has no break at 3, and f(3) = 1. By the composite property, **lim (x → 3) f(g(x)) = 1**.

**(f)** The inner limit does not exist at 1, so track each side.

- As x → 1⁺, g(x) = x approaches 1 **from above**. So f(g(x)) approaches the right-hand limit of f at 1, which is **3**.
- As x → 1⁻, g(x) = 3 − x is a little more than 2 (for example, g(0.9) = 2.1). So g(x) approaches 2 from above. f has no break at 2 and f(2) = 2, so f(g(x)) → **2**.

The one-sided limits are 3 and 2, so **lim (x → 1) f(g(x)) does not exist**.

**Interpretation.** Part (c) shows that a sum can have a limit even when its parts do not. Part (f) shows why the side of approach matters for composites.

## Worked example 3: a piecewise function with a parameter

**Question.** Let h(x) = x² + kx for x < 2, h(2) = 7, and h(x) = 3x − 1 for x > 2, where k is a constant.

(a) Find lim (x → 2⁻) h(x) and lim (x → 2⁺) h(x).
(b) Find the value of k for which lim (x → 2) h(x) exists, and give the limit.
(c) For that value of k, find lim (x → 2) √(h(x) + 4).

**(a)** For x < 2, h(x) = x² + kx, a polynomial in x. So lim (x → 2⁻) h(x) = 2² + 2k = **4 + 2k**. For x > 2, h(x) = 3x − 1, so lim (x → 2⁺) h(x) = 6 − 1 = **5**.

**(b)** The two-sided limit exists only if 4 + 2k = 5. So 2k = 1 and **k = 1/2**. The limit is then **5**. Notice that h(2) = 7 plays no part: the limit is 5 even though the function value is 7.

**(c)** The inner limit is 5, so h(x) + 4 → 9 > 0. The square root can be evaluated at 9, so the limit is √9 = **3** (composite property).

**Check.** With k = 1/2, h(1.99) = 1.99² + 0.995 = 4.9551, and h(2.01) = 5.03. Both are close to 5.

## Common misconceptions

- **"The limit properties always work."** Each needs the separate limits to exist, and the quotient property also needs a nonzero bottom limit. Check the conditions before you use a rule.
- **"If lim f(x) does not exist, then lim [f(x) + g(x)] cannot exist."** False. Worked example 2(c) has a sum with a limit, built from two parts without limits.
- **"A zero bottom limit means the limit is 0."** No. Nonzero over 0 means there is no finite limit. 0 over 0 is undecided (Topic 1.6).
- **"The limit equals the function value."** Worked example 3 has limit 5 and value 7. A limit depends only on values near a, never at a.
- **"lim f(g(x)) is always f(lim g(x))."** Only when f can be evaluated by substitution at the inner limit. If f jumps there, look at which side g approaches from.
- **Sign slips with powers.** (−2)³ = −8, but (−2)² = 4. Keep brackets around negative limits.
- **Reading the filled dot as the limit.** On a graph, the filled dot is f(a). The limit is where the curve heads, which may be an open circle.

## Where this leads

Topic 1.6, [Determining Limits Using Algebraic Manipulation](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/), handles the case the quotient property cannot: a bottom limit of 0, especially 0/0. The one-sided reasoning here returns in Topics 1.10 to 1.12, where continuity is defined as "the limit equals the function value", and the composite property becomes a statement about continuous functions. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-checklist/) to consolidate.
