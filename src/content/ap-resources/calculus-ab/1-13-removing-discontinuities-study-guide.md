---
resourceId: "mb-ap-calcab-1.13-study-guide"
title: "Removing Discontinuities: Study Guide (Calculus AB 1.13)"
description: "Learn when a discontinuity can be removed, how to redefine a function at a hole, and how to solve for parameters that make a piecewise function continuous."
course: "calculus-ab"
unit: 1
topics: ["1.13"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The three conditions for continuity at a point (Topic 1.11)"
  - "Types of discontinuity: removable, jump and vertical asymptote (Topic 1.10)"
  - "Finding 0/0 limits by factoring and conjugates (Topic 1.6)"
  - "Solving linear and quadratic equations, and pairs of simultaneous equations"
prerequisiteResources: ["mb-ap-calcab-1.12-study-guide"]
learningObjectives:
  - "Decide whether a discontinuity can be removed by checking whether the limit at that point exists"
  - "Remove a discontinuity by defining or redefining the function value to equal the limit"
  - "Write the condition that makes a piecewise function continuous at a boundary"
  - "Solve for one or two parameters that make a piecewise function continuous, or show that no value works"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Give exact values (fractions, not decimals)."
related: ["mb-ap-calcab-1.13-revision-notes", "mb-ap-calcab-1.13-practice", "mb-ap-calcab-1.13-checklist"]
next: "mb-ap-calcab-1.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A discontinuity at x = c can be removed only if lim (x → c) f(x) exists as a finite number."
  - "To remove it, define (or redefine) f(c) to be that limit. Jumps and vertical asymptotes cannot be removed this way."
  - "A piecewise function is continuous at a boundary c when the left expression at c, the right expression at c and f(c) are all equal."
  - "One unknown parameter needs one equation; two unknowns need two equations, usually one from each boundary."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.13 is common content, so the same page serves AB and BC students."
  - question: "Why can I not remove a jump by choosing a better value of f(c)?"
    answer: "At a jump the left-hand and right-hand limits are different numbers. One value of f(c) cannot equal both, so the limit does not exist and no choice of f(c) makes f continuous."
  - question: "Do I need to worry about which piece contains the boundary point?"
    answer: "Yes. The piece with ≤ or ≥ at the boundary gives f(c). For continuity all three values must agree, so in practice you set the two expressions equal at c, and f(c) then matches automatically."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

Limits are written in a compact form: **lim (x → c) f(x)** means "the limit as x approaches c of f(x)". A minus or plus sign after c gives a one-sided limit: **lim (x → c⁻) f(x)** is the limit from the left, and **lim (x → c⁺) f(x)** is the limit from the right.

## The idea: some breaks can be repaired

In Topic 1.11 you met the three conditions for f to be continuous at x = c:

1. f(c) is defined;
2. lim (x → c) f(x) exists;
3. the limit equals f(c).

A discontinuity happens when at least one condition fails. This topic asks a practical question: **can you change the definition of f so that all three conditions hold?**

You are only allowed to change one thing: the value of f at the single point c. You cannot change the values of f near c. That one rule decides everything.

- If the limit exists, you can set f(c) equal to it. Conditions 1, 2 and 3 then all hold. The discontinuity is **removable**.
- If the limit does not exist, changing one point does not help. Condition 2 still fails, whatever value you give f(c). The discontinuity is **not removable**.

So the test is simple: **find the limit first**. If it exists as a finite number, the discontinuity can be removed. If not, it cannot.

<figure>
<svg viewBox="0 0 600 245" role="img" aria-labelledby="types-title types-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="types-title">Three kinds of discontinuity at x = c, and which one can be removed</title>
<desc id="types-desc">Three schematic panels side by side, each with a dashed vertical line at x = c. Left panel, labelled removable: a smooth curve passes through x = c with an open circle on the curve, and a separate filled point labelled f(c) sits above the open circle. The limit exists, so the discontinuity can be removed by moving f(c) down to the open circle. Middle panel, labelled jump: the curve from the left ends at an open circle at a lower height, and the curve on the right starts from a filled point at a higher height. The one-sided limits differ, so the jump cannot be removed. Right panel, labelled vertical asymptote: on both sides of x = c the curve rises steeply without bound. There is no finite limit, so the discontinuity cannot be removed.</desc>
<rect x="0" y="0" width="600" height="245" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="10" y1="180" x2="190" y2="180"/><line x1="210" y1="180" x2="390" y2="180"/><line x1="410" y1="180" x2="590" y2="180"/>
</g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4">
<line x1="100" y1="25" x2="100" y2="180"/><line x1="300" y1="25" x2="300" y2="180"/><line x1="500" y1="25" x2="500" y2="180"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="196">c</text><text x="300" y="196">c</text><text x="500" y="196">c</text>
</g>
<path d="M20 170 Q100 140 180 60" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="100" cy="127.5" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="100" cy="80" r="5" fill="#1d2b44"/>
<text x="110" y="78" font-size="12" fill="#1d2b44">f(c)</text>
<line x1="220" y1="160" x2="294" y2="132" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="300" cy="130" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="80" r="5" fill="#1d2b44"/>
<line x1="300" y1="80" x2="380" y2="60" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M420 165 Q490 160 495 30" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M505 30 Q510 160 580 165" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">
<text x="100" y="218">Removable (hole)</text><text x="300" y="218">Jump</text><text x="500" y="218">Vertical asymptote</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="236">limit exists: can remove</text><text x="300" y="236">sides differ: cannot</text><text x="500" y="236">no finite limit: cannot</text>
</g>
</svg>
<figcaption>Figure 1. Schematic, not to scale. Only the first kind of discontinuity can be removed by changing one function value. Open circles mark points not on the graph; filled points are on the graph. The labels, not the shapes alone, carry the meaning.</figcaption>
</figure>

## Removing a discontinuity: define or redefine f(c)

There are two versions of a removable discontinuity.

**The value is missing.** For example, f(x) = (x² − 4)/(x − 2) is undefined at x = 2. For x ≠ 2 it equals x + 2, so lim (x → 2) f(x) = 4. Define a new function with the missing value filled in:

- F(x) = (x² − 4)/(x − 2) for x ≠ 2
- F(2) = 4

F is continuous at 2. Notice that F is simply x + 2 for every x. Filling the hole gives back the whole line.

**The value is in the wrong place.** In Topic 1.6 you met a function with f(x) = (x² − x − 6)/(x − 3) for x ≠ 3 and f(3) = 2. The limit at 3 is 5, but f(3) = 2. Condition 3 fails. Redefine f(3) = 5 and the function becomes continuous at 3. Nothing else changes.

The same idea works for any limit you can find, including limits from earlier topics. For example, g(x) = (sin 3x)/x is undefined at 0, and the result from Topic 1.8 gives lim (x → 0) g(x) = 3. Setting g(0) = 3 removes the discontinuity.

### The method in four steps

1. **Find where f is discontinuous.** For a rational function, look for zeros of the denominator. For a piecewise function, look at the boundaries.
2. **Find the limit there.** Use the algebra of Topic 1.6, or one-sided limits.
3. **Decide.** If the limit exists as a finite number L, the discontinuity is removable. If the one-sided limits differ, or either is infinite, it is not.
4. **Write the new definition.** Set f(c) = L and state the function in full, including what happens at every other x.

## Worked example 1: one hole, one asymptote

**Question.** Let f(x) = (x² + x − 12)/(x² − 5x + 6). Find every value of x where f is discontinuous. For each one, decide whether the discontinuity can be removed. If it can, say how.

1. **Find the problem points.** The denominator factors as x² − 5x + 6 = (x − 2)(x − 3). It is 0 at x = 2 and x = 3. f is undefined at both, so f is discontinuous at both.
2. **Factor the top.** x² + x − 12 = (x + 4)(x − 3).
3. **Simplify.** For x ≠ 2 and x ≠ 3,
   **f(x) = (x + 4)(x − 3)/((x − 2)(x − 3)) = (x + 4)/(x − 2)**
4. **At x = 3.** The simplified form has denominator 3 − 2 = 1, not 0, so substitute:
   **lim (x → 3) f(x) = lim (x → 3) (x + 4)/(x − 2) = 7/1 = 7**
   The limit exists, so the discontinuity at x = 3 is **removable**. Define f(3) = 7.
5. **At x = 2.** In the simplified form the top is 2 + 4 = 6 and the bottom is 0: a nonzero number over 0. The function is unbounded near 2 (it goes to −∞ from the left and +∞ from the right). There is no finite limit, so this discontinuity is **not removable**. It is a vertical asymptote.

**Answer.** Removable at x = 3, by defining f(3) = 7. Not removable at x = 2.

**Check.** f(3.001) ≈ 6.994 and f(2.999) ≈ 7.006. Both are close to 7.

**Writing it up.** The new function is F(x) = (x² + x − 12)/(x² − 5x + 6) for x ≠ 2, 3, with F(3) = 7. Its domain still excludes x = 2. F is continuous at 3; nothing can make it continuous at 2.

## Piecewise functions: making the pieces meet

A piecewise function uses different expressions on different intervals. Each piece is usually a polynomial, root, exponential or trig function, so each piece is continuous on its own interval (Topic 1.12). The only places that need checking are the **boundaries**, where one expression hands over to the next.

At a boundary x = c, three numbers must agree:

- the value the **left expression** gives at c (this is the limit from the left);
- the value the **right expression** gives at c (this is the limit from the right);
- **f(c)**, given by whichever piece includes c (the one with ≤ or ≥).

If the left and right values match, the limit exists. Since f(c) comes from one of those two expressions, it matches as well. So in practice you write **one equation: left expression at c = right expression at c**. Then confirm f(c) agrees.

If the function contains an unknown constant (a parameter), this equation lets you solve for it.

## Worked example 2: solving for one parameter

**Question.** Find the value of k that makes f continuous at x = 2, where

- f(x) = kx + 6 for x < 2
- f(x) = kx² − 2 for x ≥ 2

1. **Left value at 2.** Substitute x = 2 into kx + 6: 2k + 6. This is lim (x → 2⁻) f(x).
2. **Right value at 2.** Substitute x = 2 into kx² − 2: 4k − 2. This is lim (x → 2⁺) f(x), and it is also f(2), because the second piece includes x = 2.
3. **Set them equal.** 2k + 6 = 4k − 2.
4. **Solve.** 8 = 2k, so **k = 4**.
5. **Check all three values.** Left: 2(4) + 6 = 14. Right: 4(4) − 2 = 14. f(2) = 14. All equal, so f is continuous at 2.

**Answer.** k = 4.

**Interpretation.** For x < 2 and x > 2, f is a polynomial, so it is continuous there. With k = 4 it is also continuous at 2, so f is continuous for all real x.

<figure>
<svg viewBox="0 0 580 330" role="img" aria-labelledby="pw-title pw-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pw-title">The piecewise function from Worked example 2 with k = 3 and with k = 4</title>
<desc id="pw-desc">Two panels with the same axes: x from 0 to about 2.6, y from 0 to about 26, with ticks at x = 1 and 2 and at y = 10 and 20. In each panel a solid straight line shows the left piece kx + 6 for x less than 2, and a dashed curve shows the right piece kx squared minus 2 for x at least 2. Left panel, k = 3: the solid line ends at an open circle at height 12 above x = 2, while the dashed curve starts at a filled point at height 10. The pieces do not meet, so there is a jump. Right panel, k = 4: the solid line rises to height 14 at x = 2, and the dashed curve starts from a filled point at the same height 14, so the graph is joined.</desc>
<rect x="0" y="0" width="580" height="330" fill="#ffffff"/>
<line x1="40" y1="280" x2="280" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="50" y1="290" x2="50" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="130" y1="276" x2="130" y2="284" stroke="#1d2b44" stroke-width="1"/><text x="130" y="297" font-size="12" fill="#1d2b44" text-anchor="middle">1</text>
<line x1="210" y1="276" x2="210" y2="284" stroke="#1d2b44" stroke-width="1"/><text x="210" y="297" font-size="12" fill="#1d2b44" text-anchor="middle">2</text>
<line x1="46" y1="190" x2="54" y2="190" stroke="#1d2b44" stroke-width="1"/><text x="43" y="194" font-size="12" fill="#1d2b44" text-anchor="end">10</text>
<line x1="46" y1="100" x2="54" y2="100" stroke="#1d2b44" stroke-width="1"/><text x="43" y="104" font-size="12" fill="#1d2b44" text-anchor="end">20</text>
<text x="278" y="274" font-size="12" fill="#1d2b44">x</text><text x="56" y="36" font-size="12" fill="#1d2b44">y</text>
<line x1="50" y1="226" x2="210" y2="172" stroke="#1d2b44" stroke-width="2.5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 4" points="210.0,190.0 214.0,184.5 218.0,178.9 222.0,173.2 226.0,167.3 230.0,161.3 234.0,155.2 238.0,148.9 242.0,142.5 246.0,135.9 250.0,129.2 254.0,122.4 258.0,115.5"/>
<circle cx="210" cy="172" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="210" cy="190" r="5" fill="#1d2b44"/>
<text x="202" y="164" font-size="11" fill="#1d2b44" text-anchor="end">left side → 12</text>
<text x="219" y="204" font-size="11" fill="#1d2b44">f(2) = 10</text>
<text x="160" y="318" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">k = 3: the pieces miss</text>
<line x1="320" y1="280" x2="560" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="330" y1="290" x2="330" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="410" y1="276" x2="410" y2="284" stroke="#1d2b44" stroke-width="1"/><text x="410" y="297" font-size="12" fill="#1d2b44" text-anchor="middle">1</text>
<line x1="490" y1="276" x2="490" y2="284" stroke="#1d2b44" stroke-width="1"/><text x="490" y="297" font-size="12" fill="#1d2b44" text-anchor="middle">2</text>
<line x1="326" y1="190" x2="334" y2="190" stroke="#1d2b44" stroke-width="1"/><text x="323" y="194" font-size="12" fill="#1d2b44" text-anchor="end">10</text>
<line x1="326" y1="100" x2="334" y2="100" stroke="#1d2b44" stroke-width="1"/><text x="323" y="104" font-size="12" fill="#1d2b44" text-anchor="end">20</text>
<text x="558" y="274" font-size="12" fill="#1d2b44">x</text><text x="336" y="36" font-size="12" fill="#1d2b44">y</text>
<line x1="330" y1="226" x2="490" y2="154" stroke="#1d2b44" stroke-width="2.5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 4" points="490.0,154.0 494.0,146.7 498.0,139.2 502.0,131.6 506.0,123.8 510.0,115.8 514.0,107.6 518.0,99.2 522.0,90.6 526.0,81.9 530.0,73.0 534.0,63.9 538.0,54.6"/>
<circle cx="490" cy="154" r="5" fill="#1d2b44"/>
<text x="482" y="146" font-size="11" fill="#1d2b44" text-anchor="end">both → 14, f(2) = 14</text>
<text x="440" y="318" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">k = 4: the pieces meet</text>
<text x="290" y="16" font-size="12" fill="#1d2b44" text-anchor="middle">solid line: kx + 6 (x &lt; 2) · dashed curve: kx² − 2 (x ≥ 2)</text>
</svg>
<figcaption>Figure 2. With k = 3 the left piece heads to 12 but f(2) = 10, so there is a jump at x = 2. With k = 4 both pieces reach 14 at x = 2 and the graph has no break. Solid and dashed lines, and the labels, distinguish the pieces. Axes are unitless.</figcaption>
</figure>

## Worked example 3: two parameters, two boundaries

**Question.** Find the constants a and b that make g continuous for all real x, where

- g(x) = x + 1 for x < 1
- g(x) = ax² + b for 1 ≤ x ≤ 3
- g(x) = 4x − 2 for x > 3

1. **Count unknowns and conditions.** There are two unknowns, a and b, and two boundaries, x = 1 and x = 3. Each boundary gives one equation.
2. **Boundary at x = 1.** Left: 1 + 1 = 2. Right (middle piece, which includes 1): a(1)² + b = a + b. Equation: **a + b = 2**.
3. **Boundary at x = 3.** Left (middle piece, which includes 3): a(3)² + b = 9a + b. Right: 4(3) − 2 = 10. Equation: **9a + b = 10**.
4. **Solve simultaneously.** Subtract the first equation from the second: 8a = 8, so a = 1. Then b = 2 − 1 = 1.
5. **Check.** The middle piece is x² + 1. At x = 1: left 2, middle 2. At x = 3: middle 10, right 10. Both boundaries join.
6. **Conclude.** Each piece is a polynomial, so it is continuous on its own interval. Both boundaries now join. So g is continuous for all real x.

**Answer.** a = 1 and b = 1.

## When it is impossible, or there are two answers

The question for this topic often says "if possible". Two outcomes need care.

**No value works.** Take f(x) = kx + 3 for x < 0 and f(x) = x² + 1 for x ≥ 0. At x = 0 the left piece gives k(0) + 3 = 3 for every k, and the right piece gives 1. The parameter disappears at the boundary, so the equation 3 = 1 has no solution. No k makes f continuous at 0. Say so clearly; that is the answer.

**More than one value works.** Take f(x) = x² + k² for x < 1 and f(x) = 5kx − 5 for x ≥ 1. The boundary condition is 1 + k² = 5k − 5, which rearranges to k² − 5k + 6 = 0, or (k − 2)(k − 3) = 0. So **k = 2 or k = 3**. Check both: with k = 2 the pieces give 5 and 5; with k = 3 they give 10 and 10. Give both values.

**A jump cannot be removed by redefining one point.** Suppose a function has lim (x → c⁻) f(x) = 2 and lim (x → c⁺) f(x) = 5. Setting f(c) = 2 makes the left side match but not the right. Setting f(c) = 5 does the reverse. The two-sided limit still does not exist, so f stays discontinuous at c. A jump can only be fixed by changing the pieces themselves, which is what a parameter does.

## Using technology

You may meet this topic with or without a graphing calculator. Two cautions apply when you do use one:

- A plotted graph usually **does not show a hole**. The calculator samples points, and it almost never lands exactly on x = c. A smooth-looking curve is not proof of continuity.
- A table of values near c **suggests** a limit. It does not give the exact value you need for f(c). Use algebra to find the exact limit, and use the table only as a check.

## Common misconceptions

- **"Every discontinuity can be removed."** Only those where the limit exists. Jumps and vertical asymptotes cannot be removed by changing one value.
- **"Removing a discontinuity means cancelling the factor."** Cancelling helps you find the limit. The removal itself is a statement about f(c): you must say what value f takes at c.
- **"If f(c) is already defined, f is continuous at c."** f(c) must also equal the limit. A point in the wrong place still gives a discontinuity, and you remove it by redefining f(c).
- **Setting a piece equal to 0** instead of setting the two pieces equal to each other at the boundary.
- **Substituting the wrong x.** The boundary value c goes into both expressions. Do not use a point from inside one interval.
- **Forgetting the "both values" check.** After solving, substitute back into both expressions. It catches sign slips, and it shows the examiner that the pieces meet.
- **Dropping a solution.** A quadratic condition can give two parameter values. Give both unless the question restricts k.
- **Forcing an answer.** If the equation has no solution, the correct answer is "no value works". Do not invent one.
- **Trusting a calculator graph.** A plot that looks unbroken may still have a hole.

## Where this leads

Topic 1.12 showed you how to find the intervals on which a function is continuous ([previous study guide](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-study-guide/)). This topic repairs the breaks that can be repaired. Next, [Topic 1.14](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-study-guide/) studies the breaks that cannot: infinite limits and vertical asymptotes, like the one at x = 2 in Worked example 1. The same boundary condition returns in Unit 2, where a piecewise function must be continuous before it can be differentiable at a boundary. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-checklist/) to consolidate.
