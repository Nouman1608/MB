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

## Expressions: substitute, expand, factorize

**Substitute** with brackets around negatives. For a = −4 and b = 5, 2a² − ab = 2(16) − (−4)(5) = 32 + 20 = 52.

**Expand** every term in the first bracket times every term in the second:

(3x − 2)(x + 6) = 3x² + 18x − 2x − 12 = **3x² + 16x − 12**.

**Factorize** by taking out the highest common factor first: 8p²q − 12pq² = **4pq(2p − 3q)**. Then look for a difference of two squares: 25y² − 36 = (5y − 6)(5y + 6).

**Quadratic expressions:** for x² − 3x − 28 look for two numbers with product −28 and sum −3. They are −7 and 4, so **(x − 7)(x + 4)**. When the x² term has a coefficient, split the middle term: 6x² + 7x − 5 needs two numbers with product 6 × (−5) = −30 and sum 7, which are 10 and −3:

6x² + 10x − 3x − 5 = 2x(3x + 5) − (3x + 5) = **(2x − 1)(3x + 5)**.

Expanding the answer is always the fastest check.

## Inequalities

Solve like an equation, with one change: multiplying or dividing by a negative reverses the sign.

9 − 4x ≥ 21 gives −4x ≥ 12, so **x ≤ −3**.

**Compound inequalities** join two conditions with "and" or "or". For "and" the answer is the overlap: 2x + 3 < 15 and x − 1 ≥ −4 give x < 6 and x ≥ −3, so −3 ≤ x < 6. For "or" the answer is both pieces: 3x + 1 ≤ −8 or 2 − x < −1 give x ≤ −3 or x > 3.

**Double inequalities** are solved in one go by doing the same to all three parts: −5 ≤ 2x − 3 < 9 gives −2 ≤ 2x < 12, so **−1 ≤ x < 6**. On a number line use an open circle for < and > and a filled circle for ≤ and ≥. The integers that satisfy it are −1, 0, 1, 2, 3, 4, 5, which is 7 values.

## Quadratic equations

Rearrange to one side equal to zero first. Then pick a method.

**Factorization:** x² − 3x − 28 = 0 gives (x − 7)(x + 4) = 0, so x = 7 or x = −4. Do not divide both sides by x in x² = 7x; write x² − 7x = 0, so x(x − 7) = 0 and x = 0 or 7.

**The quadratic formula:** for ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / (2a). For 3x² + 4x − 5 = 0, a = 3, b = 4, c = −5:

x = (−4 ± √(16 + 60)) / 6 = (−4 ± √76) / 6, so x = 0.786 or x = −2.12 to 3 s.f.

If the number under the root is negative, the graph never reaches the x-axis and there is no real solution.

**Graphically:** draw y = ax² + bx + c and read off the x-values at its crossings of the x-axis; those are the solutions of ax² + bx + c = 0. The graph is symmetrical about the vertical line through the midpoint of the two roots.

**In context:** a picture frame is 4 cm longer than it is wide and its area is 96 cm². With width w, w(w + 4) = 96, so w² + 4w − 96 = 0 and (w + 12)(w − 8) = 0. Width cannot be negative, so **w = 8 cm** and the length is 12 cm.

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

## Extended: arithmetic and geometric sequences

For terms a₁, a₂, a₃, … (the guide's notation list writes terms this way) an **arithmetic** sequence adds a common difference d, so aₙ = a₁ + (n − 1)d. A **geometric** sequence multiplies by a common ratio r, so aₙ = a₁ × rⁿ⁻¹.

Arithmetic: 50, 44, 38, … has a₁ = 50 and d = −6, so aₙ = 56 − 6n and a₁₅ = −34.

Geometric: 5, 15, 45, … has a₁ = 5 and r = 3, so aₙ = 5 × 3ⁿ⁻¹ and a₆ = 1215. The progression shows growth by tripling; the arithmetic one shows steady decline.

## Enrichment

**Exponential equations:** write both sides with the same base. 16ˣ = 8 gives 2⁴ˣ = 2³, so 4x = 3 and x = 3/4. And 2 × 3ⁿ⁻¹ = 54 gives 3ⁿ⁻¹ = 27 = 3³, so n = 4.

**Sums:** for an arithmetic sequence, Sₙ = (n/2)(2a₁ + (n − 1)d). For 50, 44, 38, … S₁₂ = 6(100 − 66) = 204. For a geometric sequence, Sₙ = a₁(rⁿ − 1)/(r − 1). For 5, 15, 45, … S₆ = 5 × 728 / 2 = 1820.

**Sigma notation** writes a sum compactly. Σ from k = 1 to 6 of (3k − 2) = 1 + 4 + 7 + 10 + 13 + 16 = 51.

**Convergence and divergence:** 12, 6, 3, … halves each time, so its running total approaches 24 and the series *converges*. A sequence with r = 3 gets ever larger, so its total *diverges*. Convergence needs a ratio between −1 and 1.

## Common errors

- Writing x = 4 for x² = 16 and forgetting −4.
- Keeping the original sign after dividing an inequality by a negative number.
- Expanding (x + 3)² as x² + 9.
- Dividing by x in a quadratic and losing a root.
- Rejecting a verified rule because one term fails, or accepting it because three terms fit. Verify beyond the data and prove with algebra.
- Writing a power as 2^n instead of 2ⁿ; the guide's notation list asks for mathematical notation, not calculator notation.

## Official syllabus

*Mathematics guide for the Middle Years Programme (for use from September 2020/January 2021)*, International Baccalaureate Organization, first assessment 2022, numerical and abstract reasoning, Algebra rows.
