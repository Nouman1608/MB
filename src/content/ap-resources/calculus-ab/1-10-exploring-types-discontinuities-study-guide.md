---
resourceId: "mb-ap-calcab-1.10-study-guide"
title: "Exploring Types of Discontinuities: Study Guide (Calculus AB 1.10)"
description: "Learn to recognise removable, jump and vertical-asymptote discontinuities from graphs, tables and formulas, and to justify each type with one-sided limits."
course: "calculus-ab"
unit: 1
topics: ["1.10"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "One-sided limits and limit notation (Topics 1.2 to 1.4)"
  - "Algebraic manipulation of 0/0 limits, especially factoring (Topic 1.6)"
  - "Reading limits from graphs, tables and formulas (Topic 1.9)"
prerequisiteResources: ["mb-ap-calcab-1.9-study-guide"]
learningObjectives:
  - "Describe what it means for a graph to be broken at a point, and name the three things that must all hold for it to be unbroken there"
  - "Classify a discontinuity as removable, jump or due to a vertical asymptote"
  - "Use left-hand and right-hand limits, together with the function value, to justify the type"
  - "Find and classify the discontinuities of rational and piecewise-defined functions"
  - "Recognise each type in a graph, a table of values and a formula"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Tables of values are a check, not a justification."
related: ["mb-ap-calcab-1.10-revision-notes", "mb-ap-calcab-1.10-practice", "mb-ap-calcab-1.10-checklist"]
next: "mb-ap-calcab-1.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A discontinuity at x = c is a break in the graph: f(c) is missing, the limit at c does not exist, or the limit and f(c) disagree."
  - "Removable: the two-sided limit exists (a finite number) but f(c) is undefined or different. On a graph it is a hole."
  - "Jump: both one-sided limits are finite numbers but they are different."
  - "Vertical asymptote: f(x) grows without bound on at least one side of c."
  - "Justify the type with the left-hand limit, the right-hand limit and f(c), not with a picture alone."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.10 is common content, so the same page serves AB and BC students."
  - question: "If f(c) is defined, can there still be a discontinuity at c?"
    answer: "Yes. If the limit at c exists but is different from f(c), the discontinuity is removable. If the one-sided limits are finite but different, it is a jump, whatever f(c) is."
  - question: "Does a zero in the denominator always mean a vertical asymptote?"
    answer: "No. If the factor that makes the denominator zero cancels with the numerator, the graph has a hole instead. Factor first, then decide."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

- **lim (x → c) f(x)** means "the limit as x approaches c of f(x)".
- **lim (x → c⁻) f(x)** is the **left-hand limit**: x approaches c through values less than c.
- **lim (x → c⁺) f(x)** is the **right-hand limit**: x approaches c through values greater than c.

On paper, write the usual form with "x → c⁻" or "x → c⁺" under "lim". "f(x) → ∞" means f(x) grows without bound. An infinite limit is a description of behaviour; the limit still does not exist as a number.

## What a discontinuity is

Informally, a function is **continuous at x = c** if you can draw its graph through the point where x = c without lifting your pencil. A **discontinuity** at c is a place where you would have to lift it.

Lifting the pencil can happen for three different reasons. Each one breaks one of three conditions that together make the graph unbroken at c:

1. **f(c) exists.** There is a point on the graph at x = c.
2. **lim (x → c) f(x) exists.** The left-hand and right-hand limits are the same finite number.
3. **lim (x → c) f(x) = f(c).** The graph heads to the same height as the actual point.

Topic 1.11 turns these three conditions into the formal definition of continuity at a point. In this topic you use them to sort discontinuities into types. The type tells you **what went wrong**, which matters later when you remove discontinuities (Topic 1.13) and study asymptotes (Topic 1.14).

## The three types you need

The course names three types. Learn the limit evidence for each, not just the picture.

| Type | Left-hand and right-hand limits at c | f(c) | What the graph shows |
|---|---|---|---|
| **Removable** | Both finite and **equal**, so lim (x → c) f(x) = L exists | Undefined, or defined but not equal to L | A hole at height L (sometimes with a separate filled point elsewhere) |
| **Jump** | Both finite but **different** | Any value, or undefined | The graph jumps from one height to another |
| **Vertical asymptote** | At least one side is **unbounded** (→ ∞ or → −∞) | Usually undefined | The graph shoots up or down beside a vertical line x = c |

<figure>
<svg viewBox="0 0 720 300" role="img" aria-labelledby="types-title types-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="types-title">Three graphs showing a removable discontinuity, a jump discontinuity and a discontinuity due to a vertical asymptote, each at x = 2</title>
<desc id="types-desc">Left panel, labelled removable: the line y = x + 1 for x from 0 to 4, with an open circle at (2, 3) and a separate filled dot at (2, 5). Middle panel, labelled jump: a line rising from (0, 1) to an open circle at (2, 2), then a second line starting at a filled dot at (2, 4) and rising to (4, 6). Right panel, labelled vertical asymptote: a dashed vertical line at x = 2. To its left the curve falls steeply towards the bottom of the panel as x approaches 2; to its right the curve comes down from the top of the panel and levels off near height 3.5 at x = 4.</desc>
<rect x="0" y="0" width="720" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="45" y1="250" x2="230" y2="250"/><line x1="45" y1="255" x2="45" y2="35"/>
<line x1="285" y1="250" x2="470" y2="250"/><line x1="285" y1="255" x2="285" y2="35"/>
<line x1="525" y1="250" x2="710" y2="250"/><line x1="525" y1="255" x2="525" y2="35"/>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="90" y1="246" x2="90" y2="254"/><line x1="135" y1="246" x2="135" y2="254"/><line x1="180" y1="246" x2="180" y2="254"/><line x1="225" y1="246" x2="225" y2="254"/>
<line x1="41" y1="180" x2="49" y2="180"/><line x1="41" y1="110" x2="49" y2="110"/><line x1="41" y1="40" x2="49" y2="40"/>
<line x1="330" y1="246" x2="330" y2="254"/><line x1="375" y1="246" x2="375" y2="254"/><line x1="420" y1="246" x2="420" y2="254"/><line x1="465" y1="246" x2="465" y2="254"/>
<line x1="281" y1="180" x2="289" y2="180"/><line x1="281" y1="110" x2="289" y2="110"/><line x1="281" y1="40" x2="289" y2="40"/>
<line x1="570" y1="246" x2="570" y2="254"/><line x1="615" y1="246" x2="615" y2="254"/><line x1="660" y1="246" x2="660" y2="254"/><line x1="705" y1="246" x2="705" y2="254"/>
<line x1="521" y1="180" x2="529" y2="180"/><line x1="521" y1="110" x2="529" y2="110"/><line x1="521" y1="40" x2="529" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="135" y="267">2</text><text x="225" y="267">4</text><text x="375" y="267">2</text><text x="465" y="267">4</text><text x="615" y="267">2</text><text x="705" y="267">4</text>
<text x="236" y="246">x</text><text x="476" y="246">x</text><text x="714" y="246">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="38" y="184">2</text><text x="38" y="114">4</text><text x="38" y="44">6</text>
<text x="278" y="184">2</text><text x="278" y="114">4</text><text x="278" y="44">6</text>
<text x="518" y="184">2</text><text x="518" y="114">4</text><text x="518" y="44">6</text>
</g>
<g font-size="14" font-weight="bold" fill="#1d2b44" text-anchor="middle">
<text x="135" y="20">(a) Removable</text><text x="375" y="20">(b) Jump</text><text x="615" y="20">(c) Vertical asymptote</text>
</g>
<line x1="45" y1="215" x2="225" y2="75" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="135" cy="145" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="135" cy="75" r="5" fill="#1d2b44"/>
<line x1="285" y1="215" x2="369" y2="182.3" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="375" cy="180" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="375" y1="110" x2="465" y2="40" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="375" cy="110" r="5" fill="#1d2b44"/>
<line x1="615" y1="250" x2="615" y2="33" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<path d="M525.0 162.5 L531.2 163.8 L537.5 165.3 L543.8 167.1 L550.0 169.2 L556.2 171.8 L562.5 175.0 L568.8 179.1 L575.0 184.4 L581.2 191.7 L584.4 196.4 L587.5 202.3 L590.6 209.6 L593.8 219.1 L596.9 231.9 L600.0 250.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M630.0 40.0 L633.1 58.1 L636.2 70.9 L639.4 80.4 L642.5 87.7 L645.6 93.6 L651.9 102.3 L658.1 108.5 L664.4 113.1 L670.6 116.7 L676.9 119.5 L683.1 121.9 L689.4 123.8 L695.6 125.5 L701.9 126.9 L705.0 127.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44">
<text x="145" y="150">hole (2, 3)</text><text x="145" y="72">f(2) = 5</text>
<text x="383" y="196">open (2, 2)</text><text x="383" y="125">filled (2, 4)</text>
<text x="620" y="245">x = 2</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="135" y="290">limit 3 exists; f(2) = 5 ≠ 3</text><text x="375" y="290">left limit 2, right limit 4</text><text x="615" y="290">left → −∞, right → +∞</text>
</g>
</svg>
<figcaption>Figure 1. The three types of discontinuity, each at x = 2. Open circles mark heights the graph approaches but does not reach; filled dots mark the actual value f(2). In (a) both sides approach height 3, so the limit exists, but f(2) = 5. In (b) the left side approaches 2 and the right side approaches 4. In (c) the graph is unbounded on both sides of the dashed line x = 2. Axes are unitless.</figcaption>
</figure>

Notice that panel (a) has a value f(2) = 5, yet it is still a discontinuity. "Removable" does not require f(c) to be undefined. It only requires the limit to exist and to disagree with f(c), or f(c) to be missing.

**Background (not one of the named types).** Some functions break in other ways. For example, sin(1/x) oscillates faster and faster near x = 0, so it has no limit there, and it is neither a jump nor an asymptote. The course asks you to classify the three types above.

## A classification routine

Use the same four steps every time. They work for graphs, tables and formulas.

1. **Find the candidates.** Look for x values where a denominator is zero, where a piecewise rule changes, or where the graph visibly breaks.
2. **Find the left-hand and right-hand limits** at each candidate.
3. **Decide the type:**
   - If either side is unbounded, the discontinuity is due to a **vertical asymptote**.
   - If both sides are finite but different, it is a **jump**.
   - If both sides are finite and equal (call the value L), the limit exists. Compare it with f(c). If f(c) is undefined or not equal to L, the discontinuity is **removable**. If f(c) = L, there is **no discontinuity** at c.
4. **Write the justification** using the limits and f(c), as in the worked examples.

### Rational functions: factor first

For a rational function, every zero of the denominator is a candidate. Factor the top and bottom completely, then cancel common factors (Topic 1.6).

- A factor (x − c) that **cancels** completely leaves a finite limit at c. That gives a **hole**: a removable discontinuity.
- A factor (x − c) that **stays in the denominator** after cancelling makes the expression a nonzero number over 0 near c. That gives a **vertical asymptote**.

### Piecewise functions and absolute values

At a point where the rule changes, find each one-sided limit using the rule that applies on that side. Polynomial pieces can be evaluated by substitution.

An absolute value can hide a piecewise rule. For example, |x − 4|/(x − 4) equals −1 when x < 4 and 1 when x > 4. So the left-hand limit at 4 is −1 and the right-hand limit is 1: a **jump**, even though the denominator is zero at x = 4. Rewrite |x − c| as −(x − c) for x < c and as x − c for x > c.

### Tables of values

A table suggests one-sided behaviour; it cannot prove it. This table comes from a function that equals x² for x < 1 and x + 2 for x ≥ 1.

| x | 0.9 | 0.99 | 0.999 | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|
| f(x) | 0.81 | 0.9801 | 0.998001 | 3.001 | 3.01 | 3.1 |

From the left the values approach 1. From the right they approach 3. The table is consistent with a **jump** at x = 1, and the formula confirms it: lim (x → 1⁻) x² = 1 and lim (x → 1⁺) (x + 2) = 3. Values that grow larger and larger in size, such as 10, 100, 1000, suggest a vertical asymptote instead.

## Worked example 1: classifying the discontinuities of a rational function

**Question.** Let f(x) = (x² + x − 6)/(x² − x − 2). Find every x where f is discontinuous, and classify each discontinuity. Justify your answers using limits.

1. **Find the candidates.** The denominator is x² − x − 2 = (x − 2)(x + 1). It is zero at x = 2 and x = −1, so f is undefined there. A rational function has no other breaks, so these are the only candidates.
2. **Factor and cancel.** The numerator is x² + x − 6 = (x − 2)(x + 3). For x ≠ 2 and x ≠ −1,
   **f(x) = (x − 2)(x + 3)/((x − 2)(x + 1)) = (x + 3)/(x + 1)**
3. **At x = 2.** The factor (x − 2) cancelled. The simplified form has denominator 3 at x = 2, so
   **lim (x → 2) f(x) = lim (x → 2) (x + 3)/(x + 1) = 5/3**
   Both one-sided limits equal 5/3, so the limit exists, but f(2) is undefined.
4. **At x = −1.** The factor (x + 1) is still in the denominator. Substituting into (x + 3)/(x + 1) gives 2/0, a nonzero number over 0. Look at each side:
   - For x slightly greater than −1, x + 1 is a small positive number and x + 3 is close to 2. So f(x) → +∞ as x → −1⁺.
   - For x slightly less than −1, x + 1 is a small negative number. So f(x) → −∞ as x → −1⁻.

**Answer.** f has a **removable discontinuity at x = 2** (a hole at (2, 5/3)), because lim (x → 2) f(x) = 5/3 exists but f(2) is undefined. f has a **discontinuity due to a vertical asymptote at x = −1**, because f(x) is unbounded as x → −1 from either side.

**Check.** f(1.99) ≈ 1.6689 and f(2.01) ≈ 1.6644, both close to 5/3 ≈ 1.6667. f(−0.99) = 201 and f(−1.01) = −199, which grow in size with opposite signs, as predicted.

**Interpretation.** Both x = 2 and x = −1 make the original denominator zero, yet they are different types. The zero denominator tells you **where** to look. Factoring tells you **which type** you have.

## Worked example 2: a piecewise function with two different breaks

**Question.** A function g is defined by

- g(x) = x² + 1 for x < 1
- g(1) = 5
- g(x) = 3x − 1 for 1 < x ≤ 3
- g(x) = 10 − x for x > 3

Classify the discontinuities of g. Justify using limits.

1. **Find the candidates.** Each piece is a polynomial, so g has no breaks inside a piece. The only candidates are the points where the rule changes: x = 1 and x = 3.
2. **At x = 1.**
   - Left: lim (x → 1⁻) g(x) = lim (x → 1⁻) (x² + 1) = 1 + 1 = 2.
   - Right: lim (x → 1⁺) g(x) = lim (x → 1⁺) (3x − 1) = 3 − 1 = 2.
   - The one-sided limits agree, so lim (x → 1) g(x) = 2. But g(1) = 5, and 5 ≠ 2.
3. **At x = 3.** The point x = 3 belongs to the middle rule, so g(3) = 3(3) − 1 = 8.
   - Left: lim (x → 3⁻) (3x − 1) = 8.
   - Right: lim (x → 3⁺) (10 − x) = 7.
   - Both are finite, but 8 ≠ 7.

**Answer.** g has a **removable discontinuity at x = 1**: the limit is 2, which exists, but g(1) = 5 is different. g has a **jump discontinuity at x = 3**: the left-hand limit is 8 and the right-hand limit is 7.

**Interpretation.** At x = 1 the graph has a hole at (1, 2) and a single filled point at (1, 5). At x = 3 the graph steps down from height 8 to height 7. Notice that g(3) = 8 matches the left-hand limit. That does not help: when the two sides disagree, the two-sided limit does not exist, so no value of g(3) can join the graph.

## Writing the justification

A classification with no limits earns little credit. A good justification names the type and gives the evidence that defines it.

- **Removable:** "lim (x → c) f(x) = L exists, because both one-sided limits equal L, but f(c) is undefined (or f(c) ≠ L)."
- **Jump:** "lim (x → c⁻) f(x) = A and lim (x → c⁺) f(x) = B are both finite, but A ≠ B."
- **Vertical asymptote:** "f(x) → ∞ (or −∞) as x → c⁻ (or c⁺), so f is unbounded near c."

Use one-sided limit notation for a jump or an asymptote. For a removable discontinuity, show that the two-sided limit exists before comparing it with f(c).

## Common misconceptions

- **"If f(c) is defined, f is continuous at c."** Worked example 2 has g(1) = 5 and g(3) = 8, yet g is discontinuous at both points.
- **"A zero denominator means a vertical asymptote."** Only if the zero factor survives cancelling. In Worked example 1, x = 2 is a hole.
- **"Removable means f(c) is undefined."** A removable discontinuity can have a filled point at a different height, as in Figure 1(a).
- **Calling a jump "removable".** A jump cannot be repaired by changing one value, because the two-sided limit does not exist.
- **"The limit is ∞, so the limit exists."** An infinite limit describes unbounded behaviour. The limit does not exist as a number.
- **Checking only one side.** A function can approach a number from the left and be unbounded on the right. One unbounded side is enough for a vertical asymptote, so check both sides before choosing.
- **Classifying from a table alone.** A table suggests the type. The justification needs limits found from the formula or the graph.
- **Forgetting where a piecewise point belongs.** Read the inequality signs (≤ or <) to find f(c), and use the correct rule on each side.

## Where this leads

Topic 1.11 turns the three conditions in "What a discontinuity is" into the formal definition of continuity at a point. Topic 1.13 shows how to remove a removable discontinuity, and Topic 1.14 studies the infinite limits behind vertical asymptotes. Continue with the next study guide, [Defining Continuity at a Point](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/). If you need to revisit reading limits from different representations, go back to [Connecting Multiple Representations of Limits](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-checklist/) to consolidate.
