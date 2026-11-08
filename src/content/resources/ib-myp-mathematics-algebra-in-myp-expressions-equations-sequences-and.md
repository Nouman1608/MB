---
title: "IB MYP Mathematics: Algebra, equations and sequences (MYP Mathematics)"
seoTitle: "IB MYP Maths Algebra, Equations, Sequences Study Guide"
resourceType: "study-guides"
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
description: "Study guide to the algebra rows of IB MYP Mathematics: sequences, equations, expressions, inequalities, quadratics, formulae and flowcharts."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide covers the Algebra rows of the numerical and abstract reasoning branch in the IB *Mathematics guide for the MYP* (for use from September 2020 and January 2021, first assessment 2022). The framework has three columns: MYP 1-3, MYP 4-5 standard and MYP 4-5 extended, plus a list of enrichment ideas. Items from the extended column and the enrichment list are labelled below. MYP has no tiers. For the other branches see the [MYP Mathematics hub](/boards/ib/ib-myp/mathematics/), the [printable checklist](/checklists/ib/ib-myp/mathematics/) and the [syllabus guide](/resources/ib-myp-mathematics-syllabus-guide/). Pair it with the [revision notes](/resources/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and-revision-notes/), the [practice set](/resources/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and-practice/) and the free [diagnostics](/diagnostics/).

## What this unit covers

| Topic | What you should be able to do | Stage |
|---|---|---|
| Sequences | Find and verify rules; justify and prove general rules | MYP 1-3 (find, verify); MYP 4-5 (justify, prove) |
| Equations | Form, rearrange and solve; simultaneous equations by algebra and graphs | MYP 1-3; MYP 4-5 |
| Expressions | Substitute, expand, factorize, including quadratics; spot equivalent expressions | MYP 1-3; MYP 4-5 |
| Inequalities | Solve, including compound and double | MYP 4-5 |
| Quadratic equations | Solve by factorization, the formula and graphs | MYP 4-5 |
| Formulae | Use and rearrange | MYP 1-3; MYP 4-5 |
| Algorithms | Read and build flowcharts | MYP 1-3 |
| Sequence notation | Arithmetic and geometric formulae | Extended |
| Enrichment | Exponential equations, sums, sigma notation, convergence | Enrichment |

The guide ties this to *solving versus satisfying an equation* and *equivalent expressions*. The related concepts it names for the branch include equivalence, generalization, simplification and validity. Criterion B (investigating patterns) asks you to describe general rules and, at the top levels, to prove them, or verify and justify them.

## Sequences: find, verify, justify, prove

**Find** a rule by looking at differences. A constant first difference means a linear rule. Constant *second* differences mean a quadratic rule whose n² coefficient is half the second difference.

Sequence 13, 19, 25, 31, 37. The first difference is 6 each time, so the rule is 6n + c. At n = 1 the term is 13, so c = 7 and the term is **6n + 7**.

**Verify** by testing terms the rule was not built from. The rule 6n + 7 gives 13, 19, 25, 31, 37 for n = 1 to 5. Continue the list by adding 6 up to position 8 and you reach 55; the rule gives 6(8) + 7 = 55. Verifying shows the rule fits; it does not show it always will.

**Justify** means giving a reason: the difference is always 6 because each step adds 6, and the rule adds 6 per position.

**Prove** means an argument that works for every n. Claim: the sum of two consecutive terms of 6n + 7 is always a multiple of 4.

```
(6n + 7) + (6(n + 1) + 7) = 6n + 7 + 6n + 13 = 12n + 20
12n + 20 = 4(3n + 5), and 3n + 5 is a whole number.
```

Quadratic example: 5, 9, 15, 23, 33. First differences: 4, 6, 8, 10. Second differences: all 2, so the rule contains n². Subtract n² (1, 4, 9, 16, 25) and the leftovers are 4, 5, 6, 7, 8, which is n + 3. The rule is **n² + n + 3**. To justify it, the gap between terms n and n + 1 is ((n + 1)² + (n + 1) + 3) − (n² + n + 3) = 2n + 2, which is 4, 6, 8, 10 for n = 1 to 4.

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


## Forming and solving equations

Define the unknown, build the equation from the words, solve, then check against the story.

A plumber charges a £28 call-out fee plus £16.50 per hour. The bill is £110.50. Let h be the number of hours.

```
28 + 16.5h = 110.5
16.5h = 82.5
h = 5
```

The job took 5 hours. When the unknown is on both sides, collect terms: 8x + 3 = 3x + 38 gives 5x = 35, so x = 7. With fractions, multiply by the common denominator: (x + 5)/3 = (2x − 1)/5 becomes 5x + 25 = 6x − 3, so x = 28.

### Solving versus satisfying

A value *satisfies* an equation if substituting it makes both sides equal. *Solving* means finding every value that does this. For 8x + 3 = 3x + 38, x = 7 satisfies it (59 = 59) and nothing else does. For x² = 16, both 4 and −4 satisfy it, so a solution of only 4 is incomplete.

### Equivalent expressions

Two expressions are equivalent if they have the same value for every input. Equations hold for particular values, so check them by substitution. Equivalence needs algebra: 4(x + 2) and 4x + 8 are equivalent because expanding turns one into the other. Testing one value is not enough. (x + 3)² and x² + 9 both equal 9 when x = 0, but at x = 1 they give 16 and 10, so they are not equivalent. Use the symbol ≡ for "is identical to".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--08-myp-equal-once-not-equivalent.webp" width="900" height="900" alt="The graphs of (x + 3)² and x² + 9 meet only at x = 0 where both are 9. At x = 1 they give 16 and 10. They differ by 6x, so they are not equivalent." loading="lazy">
  <figcaption>Two expressions can agree at one value and still be different.</figcaption>
</figure>


## Simultaneous equations

Two equations in x and y have a solution that satisfies both.

**Elimination:** 4x + 3y = 24 and 3x − 2y = 1. Scale the first equation by 2 and the second by 3 so the y terms match:

```
8x + 6y = 48
9x − 6y = 3
Add: 17x = 51, so x = 3.
Substitute: 12 + 3y = 24, so y = 4.
Check in the second: 9 − 8 = 1.
```

**Substitution:** y = x − 4 and 3x + 2y = 7. Replace y: 3x + 2x − 8 = 7, so x = 3 and y = −1.

**Graphically:** draw both lines; the coordinates of the intersection are the solution. For y = x/2 + 1 and x + y = 7 the lines cross at (4, 3): check 4/2 + 1 = 3 and 4 + 3 = 7. Parallel lines never meet, so there is no solution.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--01-myp-simultaneous-scaling-graph.webp" width="900" height="1130" alt="Graph of 4x + 3y = 24 and 3x − 2y = 1 meeting at (3, 4), with the elimination steps (times 2, times 3, add, substitute). A dashed line 4x + 3y = 12, added for illustration, is parallel to the first line and never meets it, so there would be no solution." loading="lazy">
  <figcaption>Elimination with scaling gives (3, 4); a parallel line never meets, so no solution.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--02-simultaneous-lines.webp" width="900" height="940" alt="The lines 2x + y = 7 and x − y = 2 are graphed and cross at (3, 1). Adding the equations gives 3x = 9, so x = 3, and then y = 1. The crossing point is the one pair of values that fits both equations." loading="lazy">
  <figcaption>The solution of simultaneous equations is where their graphs cross.</figcaption>
</figure>


## Expressions: substitute, expand, factorize

**Substitute** with brackets around negatives. For a = −4 and b = 5, 2a² − ab = 2(16) − (−4)(5) = 32 + 20 = 52.

**Expand** every term in the first bracket times every term in the second:

(3x − 2)(x + 6) = 3x² + 18x − 2x − 12 = **3x² + 16x − 12**.

**Factorize** by taking out the highest common factor first: 8p²q − 12pq² = **4pq(2p − 3q)**. Then look for a difference of two squares: 25y² − 36 = (5y − 6)(5y + 6).

**Quadratic expressions:** for x² − 3x − 28 look for two numbers with product −28 and sum −3. They are −7 and 4, so **(x − 7)(x + 4)**. When the x² term has a coefficient, split the middle term: 6x² + 7x − 5 needs two numbers with product 6 × (−5) = −30 and sum 7, which are 10 and −3:

6x² + 10x − 3x − 5 = 2x(3x + 5) − (3x + 5) = **(2x − 1)(3x + 5)**.

Expanding the answer is always the fastest check.

## Inequalities

<!-- marlbridge-diagram:math-b44-myp-inequality-sign-reversal-and-intervals -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-b44-myp-inequality-sign-reversal-and-intervals.svg" aria-label="Open full-size diagram: math-b44-myp-inequality-sign-reversal-and-intervals"><img src="/images/learning/mathematics/math-b44-myp-inequality-sign-reversal-and-intervals.svg" width="1600" height="1050" alt="Dividing 9−4x≥21 by −4 reverses the sign, giving x≤−3. The overlap of x&lt;6 and x≥−3 is −3≤x&lt;6, with an included left endpoint and excluded right endpoint." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Dividing 9−4x≥21 by −4 reverses the sign, giving x≤−3. The overlap of x&lt;6 and x≥−3 is −3≤x&lt;6, with an included left endpoint and excluded right endpoint. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-b44-myp-inequality-sign-reversal-and-intervals -->


Solve like an equation, with one change: multiplying or dividing by a negative reverses the sign.

9 − 4x ≥ 21 gives −4x ≥ 12, so **x ≤ −3**.

**Compound inequalities** join two conditions with "and" or "or". For "and" the answer is the overlap: 2x + 3 < 15 and x − 1 ≥ −4 give x < 6 and x ≥ −3, so −3 ≤ x < 6. For "or" the answer is both pieces: 3x + 1 ≤ −8 or 2 − x < −1 give x ≤ −3 or x > 3.

**Double inequalities** are solved in one go by doing the same to all three parts: −5 ≤ 2x − 3 < 9 gives −2 ≤ 2x < 12, so **−1 ≤ x < 6**. On a number line use an open circle for < and > and a filled circle for ≤ and ≥. The integers that satisfy it are −1, 0, 1, 2, 3, 4, 5, which is 7 values.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--02-myp-compound-inequalities.webp" width="900" height="1200" alt="Number lines show AND as an overlap (−3 ≤ x &lt; 6), OR as two separate rays (x ≤ −3 or x &gt; 3), and the double inequality −1 ≤ x &lt; 6 with its seven integers." loading="lazy">
  <figcaption>And keeps the overlap, or keeps both pieces.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--01-open-closed-number-line.webp" width="900" height="1110" alt="Four number lines from minus 4 to 4: x &lt; 1 (open circle at 1, shaded left), x at most 1 (closed circle), x &gt; minus 2 (open circle at minus 2, shaded right) and minus 3 at most x &lt; 1 (closed circle at minus 3, open at 1, shaded between). Closed means included, open means excluded." loading="lazy">
  <figcaption>Closed circles include the value (⩽ ⩾); open circles exclude it (&lt; &gt;).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--02-negative-flips-sign.webp" width="900" height="1030" alt="Values of x from minus 5 to 2 are put through minus 2x and compared with 6. Only x greater than minus 3 passes, so −2x &lt; 6 becomes x &gt; −3, shown on a number line with an open circle at minus 3. Dividing by a negative reverses the sign." loading="lazy">
  <figcaption>Dividing by a negative number reverses the inequality sign, as testing values confirms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--03-double-inequality-integers.webp" width="900" height="990" alt="Three number lines for −7 ⩽ 3x + 2 &lt; 11. Subtracting 2 from every part gives −9 ⩽ 3x &lt; 9; dividing every part by 3 gives −3 ⩽ x &lt; 3. The integers −3, −2, −1, 0, 1, 2 are marked; 3 has an open circle and is excluded." loading="lazy">
  <figcaption>Operate on all three parts at once, then check each endpoint separately for integer solutions.</figcaption>
</figure>


## Quadratic equations

Rearrange to one side equal to zero first. Then pick a method.

**Factorization:** x² − 3x − 28 = 0 gives (x − 7)(x + 4) = 0, so x = 7 or x = −4. Do not divide both sides by x in x² = 7x; write x² − 7x = 0, so x(x − 7) = 0 and x = 0 or 7.

**The quadratic formula:** for ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / (2a). For 3x² + 4x − 5 = 0, a = 3, b = 4, c = −5:

x = (−4 ± √(16 + 60)) / 6 = (−4 ± √76) / 6, so x = 0.786 or x = −2.12 to 3 s.f.

If the number under the root is negative, the graph never reaches the x-axis and there is no real solution.

**Graphically:** draw y = ax² + bx + c and read off the x-values at its crossings of the x-axis; those are the solutions of ax² + bx + c = 0. The graph is symmetrical about the vertical line through the midpoint of the two roots.

**In context:** a picture frame is 4 cm longer than it is wide and its area is 96 cm². With width w, w(w + 4) = 96, so w² + 4w − 96 = 0 and (w + 12)(w − 8) = 0. Width cannot be negative, so **w = 8 cm** and the length is 12 cm.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--11-myp-quadratic-formula-graph.webp" width="900" height="1024" alt="y = 3x² + 4x − 5 crosses the x-axis at 0.786 and −2.12, symmetric about x = −2/3. The curve y = x² + 2x + 3 has b² − 4ac = −8 and never reaches the axis, so has no real root." loading="lazy">
  <figcaption>Roots are where the curve meets y = 0; a negative discriminant means no crossing.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--04-myp-picture-frame-quadratic.webp" width="900" height="1090" alt="A frame is drawn as a w by w square plus a 4 by w strip, giving w² + 4w = 96. The graph of y = w² + 4w − 96 crosses zero at −12 and 8; the negative root is rejected, so the width is 8 cm and the length 12 cm." loading="lazy">
  <figcaption>A quadratic from a context: only w = 8 makes sense.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--04-sketch-quadratic.webp" width="900" height="1160" alt="A sketch of y = x² + 2x − 15: a U-shape crossing the x-axis at (−5, 0) and (3, 0) and the y-axis at (0, −15), symmetrical about x = −1. The turning point (−1, −16), from completing the square, is Extended only." loading="lazy">
  <figcaption>A sketch shows shape, roots, y-intercept and symmetry; Extended adds the turning point.</figcaption>
</figure>


## Using and rearranging formulae

Substitute known values, keeping units. To rearrange, undo operations in reverse order, treating both sides equally.

E = ½mv²: multiply by 2, divide by m, then take the square root, so **v = √(2E/m)**. With E = 50 and m = 4, v = √25 = 5.

I = Prt: dividing by Pr gives t = I/(Pr).

If the new subject appears twice, gather those terms on one side and factorize. Make x the subject of y = (5x − 1)/(x + 2):

```
y(x + 2) = 5x − 1
yx + 2y = 5x − 1
yx − 5x = −1 − 2y
x(y − 5) = −(1 + 2y)
x = (1 + 2y)/(5 − y)
```

Check with x = 3: y = 14/5 = 2.8, and the formula gives (1 + 5.6)/(5 − 2.8) = 3.

## Flowcharts and simple algorithms

A flowchart uses ovals for start and stop, parallelograms for input and output, rectangles for steps and diamonds for yes/no decisions. Arrows show the order. A trace table records each variable after every pass.

Algorithm: set p = 3 and t = 0. Repeat: add p to t, then double p. Stop when t is above 60, and output t.

| Pass | t | p |
|---|---|---|
| start | 0 | 3 |
| 1 | 3 | 6 |
| 2 | 9 | 12 |
| 3 | 21 | 24 |
| 4 | 45 | 48 |
| 5 | 93 | 96 |

The output is **93**. The algorithm is adding the terms of the sequence 3, 6, 12, 24, 48 until the total passes 60.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--09-myp-flowchart-trace.webp" width="900" height="900" alt="A flowchart sets t = 0 and p = 3, adds p to t, doubles p and tests t &gt; 60, looping back on No. A trace table shows t = 3, 9, 21, 45, 93 and p = 6, 12, 24, 48, 96. The output is 93." loading="lazy">
  <figcaption>A flowchart and its trace table for the doubling-terms algorithm.</figcaption>
</figure>


## Extended: arithmetic and geometric sequences

For terms a₁, a₂, a₃, … (the guide's notation list writes terms this way) an **arithmetic** sequence adds a common difference d, so aₙ = a₁ + (n − 1)d. A **geometric** sequence multiplies by a common ratio r, so aₙ = a₁ × rⁿ⁻¹.

Arithmetic: 50, 44, 38, … has a₁ = 50 and d = −6, so aₙ = 56 − 6n and a₁₅ = −34.

Geometric: 5, 15, 45, … has a₁ = 5 and r = 3, so aₙ = 5 × 3ⁿ⁻¹ and a₆ = 1215. The progression shows growth by tripling; the arithmetic one shows steady decline.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--03-myp-arith-geom-sigma.webp" width="900" height="1290" alt="Bar charts of the arithmetic sequence 50, 44, 38 (a_n = 56 − 6n), the geometric sequence 5, 15, 45 (a_n = 5 × 3^(n−1)) and the six terms of the sigma sum of 3k − 2, which total 51." loading="lazy">
  <figcaption>A fixed step, a fixed ratio, and a sigma sum of six terms.</figcaption>
</figure>


## Enrichment

**Exponential equations:** write both sides with the same base. 16ˣ = 8 gives 2⁴ˣ = 2³, so 4x = 3 and x = 3/4. And 2 × 3ⁿ⁻¹ = 54 gives 3ⁿ⁻¹ = 27 = 3³, so n = 4.

**Sums:** for an arithmetic sequence, Sₙ = (n/2)(2a₁ + (n − 1)d). For 50, 44, 38, … S₁₂ = 6(100 − 66) = 204. For a geometric sequence, Sₙ = a₁(rⁿ − 1)/(r − 1). For 5, 15, 45, … S₆ = 5 × 728 / 2 = 1820.

**Sigma notation** writes a sum compactly. Σ from k = 1 to 6 of (3k − 2) = 1 + 4 + 7 + 10 + 13 + 16 = 51.

**Convergence and divergence:** 12, 6, 3, … halves each time, so its running total approaches 24 and the series *converges*. A sequence with r = 3 gets ever larger, so its total *diverges*. Convergence needs a ratio between −1 and 1.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and--10-myp-series-converges.webp" width="900" height="960" alt="A bar of length 24 is filled by 12, 6, 3, 1.5, … and the running total 12, 18, 21, 22.5, 23.25, 23.625 approaches but never passes 24. A ratio between −1 and 1 means the total converges." loading="lazy">
  <figcaption>A halving sequence has a running total that approaches 24.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--02-matching-bases.webp" width="900" height="990" alt="Two columns show 32^x = 2 and 5^(x+1) = 25^x solved by rewriting 32 as 2^5 and 25 as 5^2, then equating indices. Results are x = 1/5 and x = 1." loading="lazy">
  <figcaption>Rewrite both sides with the same base, then equate the indices.</figcaption>
</figure>


## Common errors

- Writing x = 4 for x² = 16 and forgetting −4.
- Keeping the original sign after dividing an inequality by a negative number.
- Expanding (x + 3)² as x² + 9.
- Dividing by x in a quadratic and losing a root.
- Rejecting a verified rule because one term fails, or accepting it because three terms fit. Verify beyond the data and prove with algebra.
- Writing a power as 2^n instead of 2ⁿ; the guide's notation list asks for mathematical notation, not calculator notation.

## Frequently asked questions

**Which algebra topics are in IB MYP Mathematics?**
The Algebra rows of the numerical and abstract reasoning branch in the IB Mathematics guide cover sequences, equations, expressions, inequalities, quadratic equations, formulae and simple algorithms. Inequalities and quadratic equations appear at MYP 4-5.

**How do you tell if a sequence has a linear or quadratic rule?**
Look at the differences between terms. A constant first difference means a linear rule, such as 6n + 7, while a constant second difference means the rule contains n².

**What does it mean for a value to satisfy an equation?**
A value satisfies an equation if substituting it makes both sides equal. Solving means finding every value that does so.

**What shapes are used in a flowchart?**
Ovals mark start and stop, parallelograms show input and output, rectangles show steps and diamonds show yes/no decisions. Arrows show the order in which the steps are carried out.

## Official syllabus

*Mathematics guide for the Middle Years Programme (for use from September 2020/January 2021)*, International Baccalaureate Organization, first assessment 2022, numerical and abstract reasoning, Algebra rows.
