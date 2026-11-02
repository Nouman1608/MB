---
title: "IB MYP Mathematics: Algebra, equations and sequences (MYP Mathematics) -- Revision Notes"
seoTitle: "IB MYP Maths Algebra and Sequences Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["ib"]
topic: "Algebra in MYP: expressions, equations, sequences and formulae"
boards: ["ib"]
qualifications: ["ib-myp"]
syllabusCodes: ["MYP Mathematics"]
syllabusSeries: "From 2020, first assessment 2022"
order: 340
syllabusTopics:
  - qualification: "ib-myp"
    topic: "ib-myp-mathematics-branches-of-mathematical-study"
    subtopic: "ib-myp-mathematics-branches-of-mathematical-study-numerical-and-abstract-reasoning"
description: "Condensed revision notes for IB MYP Mathematics algebra: sequence rules, equations, quadratics, inequalities, formulae, flowcharts, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense the Algebra rows of the numerical and abstract reasoning branch in the IB *Mathematics guide for the MYP* (first assessment 2022). Full explanations and worked examples are in the [study guide](/resources/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and/); test yourself with the [practice set](/resources/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and-practice/). See also the [MYP Mathematics hub](/boards/ib/ib-myp/mathematics/), the [printable checklist](/checklists/ib/ib-myp/mathematics/) and the free [diagnostics](/diagnostics/). Items marked *Extended* or *Enrichment* come from the guide's extended column and enrichment list.

## Sequences

| Idea | Rule |
|---|---|
| Constant first difference d | Linear rule dn + c, where c = (first term) − d |
| Constant second difference D | Quadratic rule with n² coefficient D/2; subtract that part, then fit what is left |
| Verify | Check the rule against terms you did not use to build it |
| Justify | Give a reason the pattern must continue (what is added or multiplied each step) |
| Prove | Algebra that works for every n |

**Method for a quadratic rule**
1. List first differences, then second differences.
2. Write down D/2 × n² for n = 1, 2, 3, ...
3. Subtract from the terms; the leftover is linear or constant.
4. Add the pieces and verify on a later term.

Worked reminder: 6, 11, 18, 27, 38. First differences 5, 7, 9, 11. Second differences 2. So n² gives 1, 4, 9, 16, 25. Leftovers 5, 7, 9, 11, 13, which is 2n + 3. Rule: **n² + 2n + 3**.

*Extended.* Arithmetic: aₙ = a₁ + (n − 1)d. Geometric: aₙ = a₁ × rⁿ⁻¹.

*Enrichment.* Arithmetic sum: Sₙ = (n/2)(2a₁ + (n − 1)d). Geometric sum: Sₙ = a₁(rⁿ − 1)/(r − 1). Sigma: Σ from k = 1 to 4 of 3k = 3 + 6 + 9 + 12 = 30. A geometric series converges when r lies between −1 and 1 and diverges otherwise.

Worked reminder, a proof: show that the sum of three consecutive terms of 4n + 3 is always a multiple of 3. The terms are 4n + 3, 4n + 7 and 4n + 11, so the sum is 12n + 21 = 3(4n + 7). The bracket is a whole number, so the sum is a multiple of 3.

Worked reminder, an equation from a pattern: in the arithmetic sequence 4, 10, 16, ... which term equals 82? aₙ = 4 + 6(n − 1) = 6n − 2, and 6n − 2 = 82 gives n = 14.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--03-myp-arith-geom-sigma.webp" width="900" height="1290" alt="Bar charts of the arithmetic sequence 50, 44, 38 (a_n = 56 − 6n), the geometric sequence 5, 15, 45 (a_n = 5 × 3^(n−1)) and the six terms of the sigma sum of 3k − 2, which total 51." loading="lazy">
  <figcaption>A fixed step, a fixed ratio, and a sigma sum of six terms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--05-myp-sequence-proof-groups.webp" width="900" height="990" alt="Sums of consecutive terms of 6n + 7 (32, 44, 56, 68) drawn as 8, 11, 14 and 17 columns of four squares, matching 12n + 20 = 4(3n + 5)." loading="lazy">
  <figcaption>Each sum is 3n + 5 groups of four.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--01-linear-nth-term.webp" width="900" height="940" alt="Graph of the sequence 5, 8, 11, 14 against n. Each point is 3 higher than the one before, so the points lie on a straight line of gradient 3. Extending the line back to n = 0 gives 2, so the nth term is 3n + 2." loading="lazy">
  <figcaption>A linear sequence lies on a straight line whose gradient is the common difference.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--02-differences-type.webp" width="900" height="1202" alt="Four sequences with their difference rows. Linear 3, 7, 11, 15 has constant first differences of 4. Quadratic 1, 4, 9, 16 has constant second differences of 2. Cubic 1, 8, 27, 64 has constant third differences of 6. Exponential 3, 6, 12, 24 has a constant ratio of 2." loading="lazy">
  <figcaption>Keep taking differences until a row is constant; that row tells you the type.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--06-quadratic-nth-term.webp" width="900" height="980" alt="The sequence 2, 5, 10, 17, 26 has first differences 3, 5, 7, 9 and constant second difference 2. Dot squares show each term as n squared plus one extra dot, so the nth term is n squared plus 1." loading="lazy">
  <figcaption>A constant second difference means a quadratic nth term.</figcaption>
</figure>


## Equations and expressions

**Method for an equation**
1. Define the unknown in words.
2. Build the equation from the information.
3. Do the same to both sides to isolate the unknown.
4. Substitute back to check; check the answer against the context.

| Term | Meaning |
|---|---|
| Solve | Find every value that makes the equation true |
| Satisfy | A given value makes both sides equal |
| Equivalent expressions | Same value for every input; show by algebra, not one test value |
| ≡ | Is identical to |

**Simultaneous equations.** Elimination: match coefficients, add or subtract, solve, substitute back. Substitution: replace one letter using the other equation. Graph: the intersection point is the solution; parallel lines give none.

**Expanding and factorizing**

| Task | Pattern |
|---|---|
| Expand double brackets | (x + 7)(x − 2) = x² − 2x + 7x − 14 = x² + 5x − 14 |
| Common factor | Take out the highest common factor first |
| Difference of two squares | x² − 49 = (x − 7)(x + 7) |
| Quadratic, x² coefficient 1 | Two numbers with product c and sum b |
| Quadratic, other coefficient | Pick two numbers whose product is ac and whose sum is b, split the middle term, then factorize in pairs |

Simplifying a fraction needs factors: (x² − 16)/(x² + 4x) = (x − 4)(x + 4)/(x(x + 4)) = (x − 4)/x. You can only cancel factors, never single terms.

Worked reminder, simultaneous equations by elimination: 5x + 2y = 19 and 3x − 2y = 5. Adding removes y: 8x = 24, so x = 3. Then 15 + 2y = 19 gives y = 2. Check in the second equation: 9 − 4 = 5.

Worked reminder, non-monic factorizing: 2x² + 11x + 12 needs two numbers with product 24 and sum 11, which are 8 and 3. So 2x² + 8x + 3x + 12 = 2x(x + 4) + 3(x + 4) = (2x + 3)(x + 4).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--08-myp-equal-once-not-equivalent.webp" width="900" height="900" alt="The graphs of (x + 3)² and x² + 9 meet only at x = 0 where both are 9. At x = 1 they give 16 and 10. They differ by 6x, so they are not equivalent." loading="lazy">
  <figcaption>Two expressions can agree at one value and still be different.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--01-myp-simultaneous-scaling-graph.webp" width="900" height="1130" alt="Graph of 4x + 3y = 24 and 3x − 2y = 1 meeting at (3, 4), with the elimination steps (times 2, times 3, add, substitute). A dashed line 4x + 3y = 12, added for illustration, is parallel to the first line and never meets it, so there would be no solution." loading="lazy">
  <figcaption>Elimination with scaling gives (3, 4); a parallel line never meets, so no solution.</figcaption>
</figure>


## Inequalities

| Type | Handling |
|---|---|
| Simple | Solve as an equation; reverse the sign when multiplying or dividing by a negative |
| Compound with "and" | Overlap of the two solutions |
| Compound with "or" | Both pieces together |
| Double | Do the same to all three parts |

Number line: open circle for < and >, filled circle for ≤ and ≥.

Reminder: 7 − 4x ≥ 31 gives −4x ≥ 24, so **x ≤ −6**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--02-myp-compound-inequalities.webp" width="900" height="1200" alt="Number lines show AND as an overlap (−3 ≤ x &lt; 6), OR as two separate rays (x ≤ −3 or x &gt; 3), and the double inequality −1 ≤ x &lt; 6 with its seven integers." loading="lazy">
  <figcaption>And keeps the overlap, or keeps both pieces.</figcaption>
</figure>


## Quadratic equations

**Method in steps**
1. Rearrange to ax² + bx + c = 0.
2. Try to factorize; if it factorizes, set each bracket to zero.
3. Otherwise use x = (−b ± √(b² − 4ac)) / (2a).
4. Reject any root that makes no sense in the context (a negative length).
5. For a graph, read the x-axis crossings.

Reminder with the formula: x² + 6x + 4 = 0 has a = 1, b = 6, c = 4, so x = (−6 ± √20)/2 = −3 ± √5, which is x = −0.764 or x = −5.24 to 3 s.f.

A negative number under the root means the graph does not meet the x-axis. The line of symmetry sits halfway between the roots.

Worked reminder, a context quadratic: a ball's height in metres is h = 16t − 2t². When is h = 30? Then 2t² − 16t + 30 = 0, so t² − 8t + 15 = 0 and (t − 3)(t − 5) = 0. The ball is at 30 m at t = 3 on the way up and t = 5 on the way down.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--11-myp-quadratic-formula-graph.webp" width="900" height="1024" alt="y = 3x² + 4x − 5 crosses the x-axis at 0.786 and −2.12, symmetric about x = −2/3. The curve y = x² + 2x + 3 has b² − 4ac = −8 and never reaches the axis, so has no real root." loading="lazy">
  <figcaption>Roots are where the curve meets y = 0; a negative discriminant means no crossing.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--04-myp-picture-frame-quadratic.webp" width="900" height="1090" alt="A frame is drawn as a w by w square plus a 4 by w strip, giving w² + 4w = 96. The graph of y = w² + 4w − 96 crosses zero at −12 and 8; the negative root is rejected, so the width is 8 cm and the length 12 cm." loading="lazy">
  <figcaption>A quadratic from a context: only w = 8 makes sense.</figcaption>
</figure>


## Formulae

**Method for rearranging**
1. Identify the new subject.
2. Remove anything added or subtracted from its term.
3. Remove multipliers and divisors, undoing in reverse order of operations.
4. If the subject appears twice, collect those terms on one side and factorize.

Reminder: P = 2(l + w) gives P/2 = l + w, so **w = P/2 − l**.

## Flowcharts and algorithms

| Shape | Use |
|---|---|
| Oval | Start or stop |
| Parallelogram | Input or output |
| Rectangle | Process step |
| Diamond | Yes/no decision with two exits |

Keep a trace table: one row per pass, one column per variable. Write the value after each step, not before. Then read the output from the last row.

Worked reminder: set c = 1 and t = 0. Repeat: add 2c + 1 to t, then add 1 to c. Stop when t is above 30 and output t.

| Pass | t | c |
|---|---|---|
| start | 0 | 1 |
| 1 | 3 | 2 |
| 2 | 8 | 3 |
| 3 | 15 | 4 |
| 4 | 24 | 5 |
| 5 | 35 | 6 |

The output is 35, because the total first passes 30 on the fifth pass.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--09-myp-flowchart-trace.webp" width="900" height="900" alt="A flowchart sets t = 0 and p = 3, adds p to t, doubles p and tests t &gt; 60, looping back on No. A trace table shows t = 3, 9, 21, 45, 93 and p = 6, 12, 24, 48, 96. The output is 93." loading="lazy">
  <figcaption>A flowchart and its trace table for the doubling-terms algorithm.</figcaption>
</figure>


## Connecting to the criteria

The guide's Criterion B (investigating patterns) rewards finding general rules and, in the top Year 5 band, proving them or verifying and justifying them. So when an investigation gives you a rule, finish with a short algebraic argument and a test on a case you did not use. Criterion A (knowing and understanding) is about selecting and applying the right mathematics, so say which method you chose, for example elimination rather than substitution, and why. See the [criteria in practice](/resources/ib-myp-mathematics-criteria-in-practice/) page for how these are used.

## Must-know distinctions

- Solving an equation is not simplifying an expression: an expression has no equals sign to solve.
- Verify a rule means test it; prove means show it holds for all n.
- Arithmetic adds a constant; geometric multiplies by a constant.
- An equation is true only for certain values of the unknown; an identity (≡) is true whatever value you choose.
- Compound "and" narrows the solutions; compound "or" widens them.

## Quick self-test

1. Write the rule and the next two terms of 21, 26, 31, 36.
2. Find the rule for 2, 7, 14, 23, 34.
3. Solve 9x + 5 = 4x + 40.
4. Solve 2x + y = 13 and x − y = 2.
5. Expand and simplify (x + 5)(x − 3).
6. Factorize x² + 3x − 54.
7. Solve 5 − 2x ≤ 17.
8. Solve −3 < 3x − 6 ≤ 15.
9. Solve x² − x − 30 = 0.
10. Make n the subject of S = n(a + l)/2.
11. *Extended:* find the 20th term of 8, 13, 18, 23, ...
12. *Enrichment:* solve 8ˣ = 4.

### Answers

1. 5n + 16; next terms 41, 46.
2. n² + 2n − 1.
3. 5x = 35, so x = 7.
4. The y terms cancel on adding: 3x = 15, so x = 5 and y = 3.
5. x² + 2x − 15.
6. (x + 9)(x − 6).
7. −2x ≤ 12, so x ≥ −6.
8. 3 < 3x ≤ 21, so 1 < x ≤ 7.
9. (x − 6)(x + 5) = 0, so x = 6 or x = −5.
10. 2S = n(a + l), so n = 2S/(a + l).
11. a₁ = 8 and d = 5, so a₂₀ = 8 + 19 × 5 = 103.
12. 2³ˣ = 2², so 3x = 2 and x = 2/3.

## Where marks are usually lost

- Final answers with no working, or no check against the context.
- Forgetting the second root of a quadratic, or keeping an impossible one.
- Leaving the inequality sign unchanged after dividing by a negative.
- Declaring a rule correct after it fits only the terms it was built from.
- Treating a test value as proof of equivalence.
- Cancelling terms instead of factors in an algebraic fraction.
- Sign slips when expanding with a negative: 7 times −2 gives −14, not +14.
- Misreading a trace table by recording values before the step happens.

## Official syllabus

*Mathematics guide for the Middle Years Programme (for use from September 2020/January 2021)*, International Baccalaureate Organization, first assessment 2022, numerical and abstract reasoning, Algebra rows.
