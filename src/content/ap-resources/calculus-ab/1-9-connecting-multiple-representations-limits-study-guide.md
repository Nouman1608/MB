---
resourceId: "mb-ap-calcab-1.9-study-guide"
title: "Connecting Multiple Representations of Limits: Study Guide (Calculus AB 1.9)"
description: "Read the same limit from a graph, a table, a formula and a sentence, then combine them: sums, products and composite functions where each piece comes from a different representation."
course: "calculus-ab"
unit: 1
topics: ["1.9"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation and one-sided limits (Topics 1.2 and 1.3)"
  - "Estimating limits from graphs and tables (Topics 1.3 and 1.4)"
  - "Limit properties for sums, products and composites (Topic 1.5)"
  - "Algebraic rewriting and the squeeze theorem (Topics 1.6 to 1.8)"
prerequisiteResources: ["mb-ap-calcab-1.8-study-guide"]
learningObjectives:
  - "Read one-sided and two-sided limits from a graph, a table, a piecewise formula and a verbal description"
  - "Translate a limit statement from one representation into another, for example from a sentence into notation or from a formula into a sketch"
  - "Find limits of sums, products and composite functions when the functions are given in different representations"
  - "Explain why the value f(c) does not decide the limit as x → c"
  - "Recognise when a graph or a table can mislead, and say what extra information would settle the question"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work without a calculator. Tables on this page are given to you; you never need to generate values yourself."
related: ["mb-ap-calcab-1.9-revision-notes", "mb-ap-calcab-1.9-practice", "mb-ap-calcab-1.9-checklist"]
next: "mb-ap-calcab-1.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A limit is the same idea in every representation: the value f(x) gets close to as x gets close to c, not the value at c."
  - "On a graph, follow the curve towards x = c from each side. In a table, look at the trend of the outputs as the inputs close in on c."
  - "The two-sided limit exists only when both one-sided limits exist and are equal."
  - "For a composite f(g(x)), first find what g(x) approaches and from which side, then use the matching limit of f."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.9 is common content, so the same page serves AB and BC students."
  - question: "Is there new theory in Topic 1.9?"
    answer: "Very little. The topic asks you to use everything from Topics 1.2 to 1.8 when the information comes as a graph, a table, a formula or words, often mixed together in one question."
  - question: "Can a table prove that a limit exists?"
    answer: "No. A table suggests a value. It can even mislead, because it only shows a few inputs. A formula, a graph with clear features, or a theorem is needed for certainty."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

Limits are written in a compact form on this page:

**lim (x → 3) f(x)** means "the limit as x approaches 3 of f(x)". **lim (x → 3⁻)** means x approaches 3 from the left (x < 3), and **lim (x → 3⁺)** means from the right (x > 3).

On paper, write the usual form with "x → 3" under "lim".

## One limit, four representations

Exam questions on limits give you information in four ways. The idea underneath is always the same: the limit as x → c of f(x) is the number that f(x) gets close to when x is close to c, **but not equal to c**.

| Representation | How you read the limit | What can mislead you |
|---|---|---|
| **Graph** | Trace the curve towards x = c from the left and from the right. Note the height each side heads towards. | A filled dot at x = c shows f(c), not the limit. A small hole or spike can be invisible at the wrong scale. |
| **Table** | Read the outputs as the inputs close in on c from each side. Look for a trend, not a single entry. | Only a few inputs are shown. The function could behave differently between them. |
| **Formula** (analytic) | Substitute if allowed; otherwise rewrite (Topic 1.6) or use a theorem (Topic 1.8). For a piecewise formula, use the piece that applies on each side of c. | Using the piece for x = c itself instead of the pieces on either side. |
| **Words** (verbal) | Translate phrases into notation: "as x gets close to 5 from the right, P(x) gets close to 12" means lim (x → 5⁺) P(x) = 12. | Confusing "approaches" (a limit) with "equals at" (a function value). |

Three ways a limit can fail to exist appear in every representation:

| Way it fails | Example | What you see |
|---|---|---|
| Left limit ≠ right limit | (x − 2)/\|x − 2\| as x → 2 | Graph jumps from −1 to 1; table values are −1 on the left and 1 on the right |
| Unbounded | 1/x² as x → 0 | Graph shoots upwards; table values grow without bound |
| Oscillating | sin(π/x) as x → 0 | Graph swings between −1 and 1 faster and faster; no single trend |

## Reading a graph

Figure 1 shows a function f that this guide uses in the worked examples. Read it carefully: open circles mean "the curve gets close but this point is not on the graph", filled dots mean "this point is on the graph".

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="f19-title f19-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f19-title">Graph of a piecewise function f with a jump at x = −1 and a hole at x = 1</title>
<desc id="f19-desc">For x from −4 up to −1 the graph is a straight line rising from the filled point (−4, 0) to an open circle at (−1, 3). There is a filled point at (−1, 1). From (−1, 1) a downward-opening parabola rises to a highest point at x = 1 and falls back to the filled end point (3, 1). At the top of the parabola, (1, 3), there is an open circle, and the actual value f(1) = 0 is shown by a filled point on the x-axis at (1, 0).</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<line x1="30" y1="300" x2="510" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="300" y1="325" x2="300" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="318">−4</text><text x="120" y="318">−3</text><text x="180" y="318">−2</text><text x="240" y="318">−1</text><text x="360" y="318">1</text><text x="420" y="318">2</text><text x="480" y="318">3</text>
<text x="508" y="292">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="293" y="244">1</text><text x="293" y="184">2</text><text x="293" y="124">3</text><text x="293" y="64">4</text>
<text x="293" y="36">y</text>
</g>
<path d="M60,296L60,304M120,296L120,304M180,296L180,304M240,296L240,304M360,296L360,304M420,296L420,304M480,296L480,304M296,240L304,240M296,180L304,180M296,120L304,120M296,60L304,60" stroke="#1d2b44" stroke-width="1" fill="none"/>
<line x1="60" y1="300" x2="234" y2="126" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="240,240 246,228.3 252,217.2 258,206.7 264,196.8 270,187.5 276,178.8 282,170.7 288,163.2 294,156.3 300,150 306,144.3 312,139.2 318,134.7 324,130.8 330,127.5 336,124.8 342,122.7 348,121.2 354,120.3 360,120 366,120.3 372,121.2 378,122.7 384,124.8 390,127.5 396,130.8 402,134.7 408,139.2 414,144.3 420,150 426,156.3 432,163.2 438,170.7 444,178.8 450,187.5 456,196.8 462,206.7 468,217.2 474,228.3 480,240" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="60" cy="300" r="5" fill="#1d2b44"/>
<circle cx="240" cy="120" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="240" cy="240" r="5" fill="#1d2b44"/>
<circle cx="360" cy="120" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="360" cy="300" r="5" fill="#1d2b44"/>
<circle cx="480" cy="240" r="5" fill="#1d2b44"/>
<line x1="360" y1="128" x2="360" y2="294" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<text x="130" y="112" font-size="12" fill="#1d2b44">open circle (−1, 3)</text>
<text x="140" y="262" font-size="12" fill="#1d2b44">filled point (−1, 1)</text>
<text x="372" y="100" font-size="12" fill="#1d2b44">open circle (1, 3)</text>
<text x="372" y="288" font-size="12" fill="#1d2b44">filled point (1, 0)</text>
<text x="420" y="262" font-size="12" fill="#1d2b44">end point (3, 1)</text>
</svg>
<figcaption>Figure 1. The function f used in Worked examples 1 and 2. Open circles mark points that are not on the graph; filled points are on the graph. At x = −1 the two sides head to different heights (3 and 1). At x = 1 both sides head to height 3, but f(1) = 0. Axes are unitless.</figcaption>
</figure>

Two habits make graph questions safe:

1. **Cover up x = c.** Put a finger over the vertical line x = c. The limit is decided only by what you can still see either side of your finger.
2. **Read each side separately.** Write the left-hand and right-hand limits first, then decide about the two-sided limit.

## Reading a table

A table gives a few sample inputs on each side of c. Read it like a sequence: are the outputs settling towards one number?

| x | 2.9 | 2.99 | 2.999 | 3.001 | 3.01 | 3.1 |
|---|---|---|---|---|---|---|
| m(x) | 5.8 | 5.98 | 5.998 | 6.002 | 6.02 | 6.2 |

The left-side outputs close in on 6 from below and the right-side outputs close in on 6 from above. A sensible estimate is lim (x → 3) m(x) = 6. Notice the words "sensible estimate". The table does not show m(3), and it does not prove anything.

**How a table can mislead.** Take sin(π/x) near x = 0. At x = 0.1, 0.01 and 0.001, the value of π/x is 10π, 100π and 1000π, so sin(π/x) = 0 every time. A table built from those inputs suggests a limit of 0. But at x = 2/21 ≈ 0.095 the value is sin(10.5π) = 1, and at x = 2/23 ≈ 0.087 it is sin(11.5π) = −1. The function keeps swinging between −1 and 1 however close you get to 0, so the limit does not exist. The table hid this because of the inputs chosen.

**How a graph can mislead.** On a graphing screen, y = (x² − 4)/(x − 2) looks exactly like the line y = x + 2. The missing point at (2, 4) is one pixel wide or less, so you may not see it. The limit as x → 2 is still 4, but the function is undefined at x = 2. Scale can hide important behaviour; the formula reveals it.

## Reading a formula and reading words

For a **piecewise formula**, the piece you use depends on the side. Suppose

- h(x) = x² − 1 for x < 2
- h(x) = 7 − x for x > 2
- h(2) = 5

From the left, use x² − 1: lim (x → 2⁻) h(x) = 4 − 1 = 3. From the right, use 7 − x: lim (x → 2⁺) h(x) = 5. The sides disagree, so lim (x → 2) h(x) does not exist. The value h(2) = 5 plays no part in either one-sided limit.

For **words**, translate one phrase at a time:

| Sentence | Notation |
|---|---|
| "As t gets close to 4 from below, T(t) gets close to 20." | lim (t → 4⁻) T(t) = 20 |
| "Near x = 0, on both sides, g(x) gets close to −1." | lim (x → 0) g(x) = −1 |
| "As x approaches 2, the values of 1/(x − 2)² grow without bound." | lim (x → 2) 1/(x − 2)² = ∞ (the limit does not exist as a real number) |

## Combining representations

Many questions give one function as a graph and another as a table or formula. The limit properties from Topic 1.5 still work, **provided each limit you use exists**:

- lim [f(x) + g(x)] = lim f(x) + lim g(x)
- lim [f(x) · g(x)] = lim f(x) · lim g(x)
- For a composite f(g(x)): find what g(x) approaches, say L, and **from which side**. Then use the limit of f as its input approaches L from that side.

If a two-sided limit does not exist, split into one-sided limits and work on each side.

## Worked example 1: reading and combining limits from a graph

**Question.** Use the graph of f in Figure 1.

(a) Find lim (x → −1⁻) f(x), lim (x → −1⁺) f(x) and lim (x → −1) f(x).
(b) Find lim (x → 1) f(x) and f(1).
(c) Find lim (x → 1) [2f(x) − x²].
(d) Find lim (x → −1) [(x + 1) · f(x)].

**Solution.**

(a) From the left, the straight line rises towards the open circle at height 3, so lim (x → −1⁻) f(x) = **3**. From the right, the parabola starts at the filled point (−1, 1), so lim (x → −1⁺) f(x) = **1**. The one-sided limits are different, so lim (x → −1) f(x) **does not exist**.

(b) Both sides of the parabola rise towards the open circle at (1, 3). So lim (x → 1) f(x) = **3**. The filled point says f(1) = **0**. The limit and the function value are different numbers, and that is allowed.

(c) Both limits exist: lim (x → 1) f(x) = 3 and lim (x → 1) x² = 1. By the sum and constant-multiple properties,

**lim (x → 1) [2f(x) − x²] = 2 × 3 − 1 = 5**

A common error is to use f(1) = 0, which gives −1.

(d) The product rule needs both limits to exist, and lim (x → −1) f(x) does not. So work one side at a time.

- Left: (x + 1) → 0 and f(x) → 3, so the product → 0 × 3 = 0.
- Right: (x + 1) → 0 and f(x) → 1, so the product → 0 × 1 = 0.

Both one-sided limits equal 0, so lim (x → −1) [(x + 1) · f(x)] = **0**.

**Interpretation.** Part (d) shows that an expression containing f can have a limit where f itself does not. Check each side.

## Worked example 2: a graph and a table together

**Question.** The function g is defined for all x, and some of its values are shown below. Assume the trend in the table continues for all x close to 0, with g(x) > −1 for x ≠ 0.

| x | −0.1 | −0.01 | −0.001 | 0.001 | 0.01 | 0.1 |
|---|---|---|---|---|---|---|
| g(x) | −0.9 | −0.99 | −0.999 | −0.999 | −0.99 | −0.9 |

Using this table and the graph of f in Figure 1, find:

(a) lim (x → 0) f(g(x))
(b) lim (x → 0) [g(x) · f(x + 1)]

**Solution.**

(a) **Step 1: the inner function.** From both sides, g(x) gets close to −1. So lim (x → 0) g(x) = −1.

**Step 2: the side.** Every value of g(x) is **greater than** −1. So the input to f approaches −1 from the right.

**Step 3: the outer function.** From the graph, lim (u → −1⁺) f(u) = 1. Therefore

**lim (x → 0) f(g(x)) = 1**

Saying "f has no limit at −1, so no answer" ignores the side: the input to f only arrives from the right.

(b) As x → 0, the input x + 1 → 1, from both sides. From Worked example 1(b), lim (u → 1) f(u) = 3, so lim (x → 0) f(x + 1) = 3. (The value f(1) = 0 is irrelevant, because x + 1 ≠ 1 when x ≠ 0.) Both limits exist, so by the product property

**lim (x → 0) [g(x) · f(x + 1)] = (−1) × 3 = −3**

**Check.** At x = 0.01, g(x) = −0.99 and f(1.01) is very close to 3 (the parabola is near its top), so the product is close to −3.

## Worked example 3: from a formula to every other representation

**Question.** Let p(x) = x² + k for x < 3, p(x) = 2x + 5 for x > 3, and p(3) = 4, where k is a constant.

(a) Find the value of k for which lim (x → 3) p(x) exists, and state the limit.
(b) For that k, describe the graph of p near x = 3 and write the limit as a sentence.

**Solution.**

(a) From the left: lim (x → 3⁻) (x² + k) = 9 + k. From the right: lim (x → 3⁺) (2x + 5) = 11. The two-sided limit exists only if 9 + k = 11, so **k = 2**, and then lim (x → 3) p(x) = **11**.

(b) **Graph:** a parabola coming up to an open circle at (3, 11) from the left, a line leaving the same open circle to the right, and a separate filled point at (3, 4).
**Sentence:** "As x gets close to 3 from either side, p(x) gets close to 11, even though p(3) = 4."

**Table check (k = 2):** p(2.99) = 10.9401 and p(3.01) = 11.02. Both are close to 11.

## Common misconceptions

- **"The limit is where the filled dot is."** The filled dot gives f(c). Cover up x = c and look at the curve either side instead.
- **"If the two-sided limit does not exist, nothing involving the function has a limit."** Products and composites can still have limits. Check each side (Worked example 1(d), Worked example 2(a)).
- **Ignoring the side in a composite.** For f(g(x)), it matters whether g(x) approaches its limit from above, from below or from both sides.
- **Using f(L) instead of the limit of f at L.** In Worked example 2(b), f(1) = 0 would give the wrong answer.
- **Treating a table as proof.** A table suggests a value. It can miss oscillation or a narrow spike between the sample inputs.
- **Trusting one screen.** A graphing window can hide a hole or a jump. Check the formula.
- **Using the wrong piece of a piecewise function.** The rule for x = c, or for the other side, does not affect a one-sided limit.
- **Mixing up words.** "Approaches" means a limit. "Equals at" or "is" means a function value.

## Where this leads

Topic 1.10, [Exploring Types of Discontinuities](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-study-guide/), uses exactly these readings. The hole at x = 1 in Figure 1 is a removable discontinuity, and the gap at x = −1 is a jump discontinuity. Later in Unit 1 you will meet unbounded behaviour again as vertical asymptotes. If the squeeze theorem from the previous topic felt shaky, revisit the [Topic 1.8 study guide](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-checklist/) to consolidate.
