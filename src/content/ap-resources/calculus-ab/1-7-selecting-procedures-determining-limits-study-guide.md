---
resourceId: "mb-ap-calcab-1.7-study-guide"
title: "Selecting Procedures for Determining Limits: Study Guide (Calculus AB 1.7)"
description: "Learn how to choose the right method for a limit: read the representation, check for a split, substitute, then let the result tell you whether to stop, check signs or rewrite."
course: "calculus-ab"
unit: 1
topics: ["1.7"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Estimating limits from graphs and tables (Topics 1.3 and 1.4)"
  - "Properties of limits and direct substitution (Topic 1.5)"
  - "Factoring, conjugates, combining fractions and trig identities for 0/0 limits (Topic 1.6)"
prerequisiteResources: ["mb-ap-calcab-1.6-study-guide"]
learningObjectives:
  - "Classify a limit problem by its representation and by the result of direct substitution"
  - "Choose between estimation, substitution, one-sided analysis and algebraic rewriting, and give the reason for the choice"
  - "Recognise when a function needs one-sided limits: piecewise definitions and absolute values"
  - "Decide what a nonzero number over 0 means by checking the sign on each side"
  - "Find limits of composite functions by working from the inside out"
  - "Recognise a limit that needs a method from a later topic, such as the squeeze theorem"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every limit here without a calculator. A table of values is a check, not a method, unless the question only gives you a table."
related: ["mb-ap-calcab-1.7-revision-notes", "mb-ap-calcab-1.7-practice", "mb-ap-calcab-1.7-checklist"]
next: "mb-ap-calcab-1.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Choose the method before you calculate. First ask what you are given: a graph, a table or a formula."
  - "With a formula, check for a split at x = a (a piecewise rule or an absolute value). If there is one, find each one-sided limit."
  - "Then substitute. A number with a nonzero bottom is the answer. Nonzero over 0 means no finite limit: check the sign on each side. 0/0 means rewrite."
  - "For 0/0, the form picks the tool: polynomials factor, square roots take a conjugate, stacked fractions combine, trig takes an identity."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.7 is common content, so the same page serves AB and BC students."
  - question: "Is there anything new to learn in Topic 1.7?"
    answer: "Very little new content. The topic is about choosing: you bring together the methods from Topics 1.3 to 1.6 and decide which one fits a given limit."
  - question: "Can I use L'Hôpital's rule instead?"
    answer: "Not yet. It is taught in Unit 4 (Topic 4.7), and it has conditions that must be checked. In Unit 1, use the methods on this page."
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

This page has no equation renderer, so limits are written in a compact form:

**lim (x → 3) f(x)** means "the limit as x approaches 3 of f(x)". **lim (x → 3⁺)** means x approaches 3 from the right (x > 3), and **lim (x → 3⁻)** means from the left (x < 3).

On paper, write the usual form with "x → 3" under "lim". Keep "lim" on every line until you actually substitute.

## What this topic asks of you

By now you have several ways to find a limit. Topic 1.7 adds no new technique. Instead, it asks you to **choose the right one** for the problem in front of you, and to know why it fits. Choosing well saves time and avoids errors such as factoring when substitution already works, or cancelling when the function has a split.

Here is your toolkit so far:

| Tool | Where you met it | Signal that it fits |
|---|---|---|
| Estimate from a graph | Topic 1.3 | You are given a graph and no formula |
| Estimate from a table | Topic 1.4 | You are given values of f(x) near a |
| Direct substitution | Topic 1.5 | The formula is defined and well behaved at a |
| One-sided limits | Topics 1.2 to 1.5 | A piecewise rule changes at a, or an absolute value of (x − a) appears |
| Factor and cancel | Topic 1.6 | Polynomial over polynomial gives 0/0 |
| Multiply by a conjugate | Topic 1.6 | A square root in a sum or difference gives 0/0 |
| Combine fractions | Topic 1.6 | A fraction inside a fraction gives 0/0 |
| Trig identity | Topic 1.6 | A trig expression gives 0/0 |
| Squeeze theorem | Topic 1.8 (next) | A bounded, oscillating factor such as cos(1/x) appears |

The rest of this guide turns that table into a short routine you can run on any limit.

## Step 1: what are you given?

Start with the **representation**.

- **A graph.** Read where the curve is heading from each side of x = a. The height of an open circle or a filled dot *at* a does not matter. Be careful: a graph drawn at the wrong scale can hide behaviour, such as a very narrow spike.
- **A table.** Look at f(x) for x values closer and closer to a, from both sides. Your answer is an estimate. If the two sides head to different values, the limit does not exist.
- **A formula.** You can usually find the exact value. Go on to Step 2.

A table or graph only suggests a value. When you have a formula, use algebra for the answer and a table only as a check.

## Step 2: is there a split at x = a?

Some formulas behave differently on each side of a. Two common signals:

- **A piecewise rule** whose pieces change at x = a.
- **An absolute value** such as |x − a|, which equals x − a when x > a and −(x − a) when x < a.

When you see a split, find the **left-hand** and **right-hand** limits separately, using the piece that applies on each side. The two-sided limit exists only if both one-sided limits exist and are equal. The value f(a), if it is defined at all, plays no part.

**Short example.** Find lim (x → 2) (x² − 4)/|x − 2|.

- For x > 2, |x − 2| = x − 2, so the expression is (x − 2)(x + 2)/(x − 2) = x + 2. The right-hand limit is 2 + 2 = 4.
- For x < 2, |x − 2| = −(x − 2), so the expression is −(x + 2). The left-hand limit is −4.
- The one-sided limits differ (4 and −4), so the limit **does not exist**.

If you had cancelled without splitting, you would have reported 4, which is wrong.

## Step 3: substitute and read the result

For a formula with no split (or for each piece), try direct substitution. The result tells you what to do next.

1. **A number, with a nonzero denominator.** That is the limit. Stop. Substitution is valid for polynomials, for rational functions where the bottom is not 0, and for roots and trig functions at points inside their domains.
2. **A nonzero number over 0.** The expression is unbounded near a, so there is **no finite limit**. To describe the behaviour, check the sign of the expression on each side of a. If both sides go to +∞ (or both to −∞), write that. If one side goes to +∞ and the other to −∞, the limit does not exist in any sense.
3. **0/0.** This is indeterminate. It tells you nothing yet. Go to Step 4 and rewrite.

<figure>
<svg viewBox="0 0 640 450" role="img" aria-labelledby="pick-title pick-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pick-title">Flowchart for selecting a procedure to find a limit</title>
<desc id="pick-desc">A flowchart. The top box asks "What are you given?". One arrow, labelled graph or table, leads to a box saying: estimate from each side, Topics 1.3 and 1.4. A second arrow, labelled formula, leads to a box asking "Split at x = a? Piecewise rule or |x − a|". From there, an arrow labelled yes leads to a box saying: find each one-sided limit, using the steps below on each piece. An arrow labelled no leads to a box saying "Substitute x = a". From the substitute box, three arrows lead to three result boxes. Box 1: a number with a nonzero bottom, so that is the limit. Box 2: nonzero over 0, so there is no finite limit; check the sign on each side to decide between plus infinity, minus infinity or does not exist. Box 3: 0 over 0, so rewrite by factoring, conjugate, combining fractions or an identity, then substitute again. An arrow labelled "still stuck?" leads from box 3 to a final box: a bounded oscillating factor such as cos(1/x) suggests the squeeze theorem, Topic 1.8.</desc>
<defs><marker id="pick-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="640" height="450" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5" fill="#ffffff">
<rect x="230" y="10" width="180" height="40" rx="6"/>
<rect x="20" y="85" width="190" height="56" rx="6"/>
<rect x="300" y="85" width="320" height="44" rx="6"/>
<rect x="250" y="165" width="150" height="40" rx="6"/>
<rect x="430" y="160" width="190" height="56" rx="6"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="#fdf6e3">
<rect x="20" y="255" width="185" height="70" rx="6"/>
<rect x="225" y="255" width="190" height="90" rx="6"/>
<rect x="425" y="255" width="205" height="90" rx="6"/>
<rect x="300" y="380" width="320" height="56" rx="6" stroke-dasharray="6 4"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="320" y="35" font-weight="bold">What are you given?</text>
<text x="115" y="108" font-weight="bold">Graph or table</text>
<text x="115" y="127" font-size="12">Estimate each side (1.3, 1.4)</text>
<text x="460" y="104" font-weight="bold">Formula: is there a split at x = a?</text>
<text x="460" y="121" font-size="12">(piecewise rule, or |x − a|)</text>
<text x="325" y="190" font-weight="bold">Substitute x = a</text>
<text x="525" y="183" font-weight="bold">Find each one-sided limit</text>
<text x="525" y="201" font-size="12">using the steps below</text>
<text x="112" y="278" font-weight="bold">1. A number</text>
<text x="112" y="296" font-size="12">(bottom not 0)</text>
<text x="112" y="314" font-size="12">That is the limit. Stop.</text>
<text x="320" y="278" font-weight="bold">2. Nonzero ÷ 0</text>
<text x="320" y="296" font-size="12">No finite limit.</text>
<text x="320" y="313" font-size="12">Check the sign on each side:</text>
<text x="320" y="330" font-size="12">+∞, −∞ or does not exist</text>
<text x="527" y="278" font-weight="bold">3. 0 ÷ 0</text>
<text x="527" y="296" font-size="12">Rewrite (1.6): factor, conjugate,</text>
<text x="527" y="313" font-size="12">combine fractions or identity,</text>
<text x="527" y="330" font-size="12">then substitute again</text>
<text x="460" y="403" font-weight="bold">Bounded oscillating factor, e.g. cos(1/x)?</text>
<text x="460" y="422" font-size="12">Squeeze theorem (Topic 1.8)</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#pick-arrow)">
<line x1="280" y1="50" x2="140" y2="84"/>
<line x1="360" y1="50" x2="440" y2="84"/>
<line x1="400" y1="129" x2="345" y2="164"/>
<line x1="525" y1="129" x2="525" y2="159"/>
<line x1="290" y1="205" x2="140" y2="254"/>
<line x1="325" y1="205" x2="322" y2="254"/>
<line x1="365" y1="205" x2="500" y2="254"/>
<line x1="527" y1="345" x2="527" y2="379"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="148" y="62">graph or table</text>
<text x="408" y="62">formula</text>
<text x="352" y="152">no</text>
<text x="533" y="150">yes</text>
<text x="535" y="368">still stuck?</text>
</g>
</svg>
<figcaption>Figure 1. A routine for choosing a limit method. Work from the top. The three shaded result boxes are the three possible outcomes of substitution, and each one names the next action. The dashed box points ahead to Topic 1.8.</figcaption>
</figure>

## Step 4: if you get 0/0, read the form

0/0 means the top and bottom share something that vanishes at a. The **form** of the expression tells you how to remove it:

| What you see | Tool | Why it works |
|---|---|---|
| Polynomial over polynomial | Factor and cancel (x − a) | By the factor theorem, both top and bottom contain (x − a) |
| √(…) − number, or number − √(…) | Multiply top and bottom by the conjugate | (p − q)(p + q) = p² − q² removes the root |
| A fraction inside a fraction | Combine over a common denominator | The hidden factor appears after combining |
| sin²x, 1 − cos x, sin 2x and similar | Use an identity | The identity exposes a common factor |

After rewriting, **substitute again** and read the result with the same three outcomes. If you get 0/0 a second time, a factor is still hiding.

### Composite functions: work from the inside out

For an expression such as √(something) or cos(something), find the limit of the inside first. If the outer function is continuous at that value, apply it.

**Short example.** Find lim (x → 1) √((x² + 3x − 4)/(x − 1) + 4).

1. The inside contains (x² + 3x − 4)/(x − 1), which gives 0/0 at x = 1. Factor: x² + 3x − 4 = (x − 1)(x + 4), so for x ≠ 1 it equals x + 4, which approaches 5.
2. So the whole inside approaches 5 + 4 = 9.
3. The square root is continuous at 9, so the limit is √9 = **3**.

Do not give up because the inside is undefined at x = 1. The limit only needs the inside to *approach* a value.

### When none of these works

Some limits give 0/0 or have no value at a, yet no rearrangement helps. Two examples you will meet soon:

- **lim (x → 0) (sin x)/x.** No algebra cancels anything here, because sin x is not x times anything. Its value is found with the squeeze theorem in Topic 1.8.
- **lim (x → 0) x cos(1/x).** Substitution is impossible, and cos(1/x) oscillates. But cos(1/x) stays between −1 and 1 while x → 0, which is exactly the situation the squeeze theorem handles.

Recognising "this needs the squeeze theorem" is part of selecting a procedure, even before you have learned the theorem in full.

*Background, not needed for Unit 1:* L'Hôpital's rule (Unit 4) is another tool for 0/0 forms. It has conditions that must be checked, and on Unit 1 work you should use algebra.

## Worked example 1: one function, three different procedures

**Question.** Let f(x) = (x² + x − 6)/(x² − 5x + 6). Find, or describe, the limit of f(x) as x approaches 0, 2 and 3. Name the procedure you use each time.

**Preparation.** The function is one formula with no absolute value, so there is no split. Factor once; it will help later: top (x + 3)(x − 2), bottom (x − 2)(x − 3).

**(i) x → 0.** Substitute: top 0 + 0 − 6 = −6, bottom 0 − 0 + 6 = 6. The bottom is not 0, so the limit is −6/6 = **−1**. Procedure: direct substitution. No factoring was needed.

**(ii) x → 2.** Substitute: top 4 + 2 − 6 = 0, bottom 4 − 10 + 6 = 0. That is 0/0, and the expression is a polynomial over a polynomial, so factor and cancel.

For x ≠ 2, f(x) = (x + 3)(x − 2)/((x − 2)(x − 3)) = (x + 3)/(x − 3).

lim (x → 2) f(x) = lim (x → 2) (x + 3)/(x − 3) = 5/(−1) = **−5**.

Check: f(2.001) ≈ −5.006, close to −5.

**(iii) x → 3.** Substitute: top 9 + 3 − 6 = 6, bottom 9 − 15 + 6 = 0. That is a nonzero number over 0, so there is no finite limit. Check the signs using the simplified form (x + 3)/(x − 3), valid near 3:

- x slightly more than 3: top ≈ 6 (positive), bottom small and positive. So f(x) → +∞.
- x slightly less than 3: top ≈ 6, bottom small and negative. So f(x) → −∞.

The sides disagree, so lim (x → 3) f(x) **does not exist**. The graph has a vertical asymptote at x = 3. Check: f(3.01) = 601 and f(2.99) = −599.

**Interpretation.** The same function needed three different procedures. Substitution decided which one each time. The graph of f has a hole at (2, −5) and a vertical asymptote at x = 3.

## Worked example 2: a piecewise function with a different method on each side

**Question.** A function h is defined by

- h(x) = (√(x + 3) − 2)/(x − 1) for x > 1
- h(x) = (x + 1)/8 for x < 1

Determine whether lim (x → 1) h(x) exists. If it does, find it.

1. **Spot the split.** The rule changes at x = 1, so find each one-sided limit with its own piece. Note that h(1) is not defined. That does not matter for the limit.
2. **Right-hand limit.** Use the piece for x > 1. Substitution gives (√4 − 2)/0 = 0/0. The 0 on top comes from a square root minus a number, so multiply top and bottom by the conjugate √(x + 3) + 2.
   Top: (√(x + 3) − 2)(√(x + 3) + 2) = (x + 3) − 4 = x − 1.
   So for x > 1, h(x) = (x − 1)/((x − 1)(√(x + 3) + 2)) = 1/(√(x + 3) + 2).
   lim (x → 1⁺) h(x) = 1/(√4 + 2) = **1/4**.
3. **Left-hand limit.** Use the piece for x < 1. It is a polynomial, so substitute: (1 + 1)/8 = **1/4**.
4. **Compare.** Both one-sided limits equal 1/4.

**Answer.** lim (x → 1) h(x) exists and equals **1/4**.

**Check.** h(1.01) = (√4.01 − 2)/0.01 ≈ 0.2498, close to 0.25.

**What to take from this.** One question used three tools: spotting the split, the conjugate on one side and substitution on the other. If the left piece had been (x + 2)/8, its limit would be 3/8, and the two-sided limit would not exist.

## Common misconceptions

- **"Always start by factoring."** Substitute first. If you get a number with a nonzero bottom, you are finished. In Worked example 1(i), factoring was wasted effort.
- **"0/0 means the limit does not exist."** 0/0 is indeterminate, not a verdict. Rewrite and try again.
- **"Nonzero over 0 means I should cancel something."** No cancellation can fix it. Check the sign on each side instead.
- **"If both sides go to infinity, the answer is ∞."** Only if both sides go the *same* way. In Worked example 1(iii), one side goes to +∞ and the other to −∞.
- **Cancelling an absolute value as if it were the bracket.** |x − 2| is not x − 2 when x < 2. Split into one-sided limits first.
- **Using f(a) for a piecewise function.** The value at a, even when it is given, does not decide the limit. Only the nearby values do.
- **Trusting a table or graph over algebra.** With a formula, the algebra gives the exact value. A table can mislead if the x values are not close enough, and a graph can hide behaviour at a poor scale.
- **Stopping because the inside of a composite is undefined at a.** The inside only needs a limit, not a value.

## Where this leads

Choosing a method quickly is the skill you need for the rest of Unit 1. Next, [Topic 1.8](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/) adds the squeeze theorem for limits such as (sin x)/x and x cos(1/x), where no algebra helps. Later in Unit 1 you will use one-sided limits to classify discontinuities, and in Unit 2 every derivative from first principles starts as a 0/0 limit. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap). To review the rewriting techniques, see the [Topic 1.6 study guide](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-checklist/) to consolidate.
