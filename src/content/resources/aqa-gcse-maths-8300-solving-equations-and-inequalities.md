---
title: "AQA GCSE Mathematics 8300: Solving equations and inequalities -- Study Guide"
seoTitle: "AQA GCSE Maths 8300 Solving Equations Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Solving equations and inequalities"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 2
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
    subtopic: "solving-equations-and-inequalities-aqa-gcse-maths"
description: "Study guide for AQA GCSE Maths 8300 section 3.2.3 (A17-A22): linear and quadratic equations, simultaneous equations, iteration and inequalities."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches subsection 3.2.3, **Solving equations and inequalities** (specification references A17 to A22), of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Linear equations, factorising quadratics, linear/linear simultaneous equations, forming equations and linear inequalities are Foundation content, so they appear at both tiers. Completing the square, the quadratic formula, linear/quadratic simultaneous equations, iteration (A20) and quadratic inequalities are **Higher tier only** and are labelled below.

The [Algebra study guide](/resources/aqa-gcse-mathematics-algebra/) gives the overview of all of Topic 2; this page goes deeper on 3.2.3 only. Use it with the [solving equations revision notes](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-revision-notes/) and the [solving equations practice questions](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-practice/). The course hub is [AQA GCSE Mathematics](/boards/aqa/gcse/mathematics/), the [printable checklist](/checklists/aqa/gcse/mathematics/) lists every statement, and the [free diagnostics](/diagnostics/) show where to start.

## What this subsection covers

| Spec | What you must be able to do | Tier |
|---|---|---|
| A17 | Solve linear equations in one unknown, including brackets and the unknown on both sides; find approximate solutions from a graph | Both |
| A18 | Solve quadratic equations by factorising; find approximate solutions from a graph | Both |
| A18 | Quadratics that need rearranging; completing the square; the quadratic formula | Higher tier only |
| A19 | Solve two linear simultaneous equations algebraically; find approximate solutions from a graph | Both |
| A19 | Linear/quadratic simultaneous equations | Higher tier only |
| A20 | Find approximate solutions numerically by iteration, using suffix notation | Higher tier only |
| A21 | Translate situations into expressions or formulae; derive equations, solve them and interpret the answer | Both |
| A22 | Solve linear inequalities in one variable and show them on a number line | Both |
| A22 | Linear inequalities in two variables, quadratic inequalities, set notation, regions on a graph | Higher tier only |

Any of this can appear on the non-calculator Paper 1 or the calculator Papers 2 and 3.

## A17: Linear equations

Do the same operation to both sides until the unknown is alone. The specification note says "including use of brackets", so expect to expand first.

**Method**

1. Expand any brackets.
2. Collect the unknown on the side with the larger coefficient.
3. Collect the numbers on the other side.
4. Divide by the coefficient.

**Worked example 1.** Solve 4(2x − 3) = 3(x + 6).

```
8x - 12 = 3x + 18      expand both brackets
5x - 12 = 18           subtract 3x from both sides
5x = 30                add 12
x = 6                  divide by 5
Check: 4(12 - 3) = 36 and 3(6 + 6) = 36
```

**From a graph.** To solve 2x + 1 = 6, draw y = 2x + 1 and y = 6 and read the x-coordinate where they cross. Graph readings are approximate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--01-equation-balance.webp" width="900" height="1170" alt="A balance holds two x-bags and three 1-blocks on one side and eleven 1-blocks on the other. Taking three from both sides, then halving both sides, leaves one x-bag against four blocks, so x = 4. Whatever is done to one side is done to the other." loading="lazy">
  <figcaption>Do the same to both sides and the equation stays balanced.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--03-linear-intersection.webp" width="900" height="970" alt="Graphs of y = 5 - 2x and y = 3(x + 7) cross at x = -3.2, y = 11.4, the solution of the equation." loading="lazy">
  <figcaption>The solution of an equation is the x where both sides have the same value.</figcaption>
</figure>


## A18: Quadratic equations

Get zero on one side of ax² + bx + c = 0 before you do anything else.

### By factorising (both tiers)

If two factors multiply to give 0, one of them must be 0.

**Worked example 2.** Solve x² + 3x − 28 = 0.

```
Need two numbers that multiply to -28 and add to +3: +7 and -4
(x + 7)(x - 4) = 0
x + 7 = 0  or  x - 4 = 0
x = -7  or  x = 4
```

Two special cases come up often:

- **Common factor:** x² − 9x = 0 gives x(x − 9) = 0, so x = 0 or x = 9. Never divide both sides by x; you lose the solution x = 0.
- **Difference of two squares:** x² − 49 = 0 gives (x − 7)(x + 7) = 0, so x = 7 or x = −7.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--08-common-factor-zero.webp" width="900" height="930" alt="The curve y = x squared minus 9x crosses the x-axis at x = 0 and x = 9, so x squared minus 9x = 0 has two solutions. Factorising gives x(x − 9) = 0, so x = 0 or x = 9. Dividing both sides by x would lose the solution x = 0." loading="lazy">
  <figcaption>x(x − 9) = 0 has two solutions, x = 0 and x = 9; dividing by x throws one away.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--02-factorise-trinomial-tiles.webp" width="900" height="670" alt="Tiles for x squared plus 5x plus 6 fit into a rectangle of width x plus 3 and height x plus 2. The six unit tiles fill the corner, which is why the numbers must multiply to 6 and add to 5. So the expression equals (x + 2)(x + 3)." loading="lazy">
  <figcaption>The tiles for x² + 5x + 6 build a rectangle with sides x + 2 and x + 3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--03-difference-of-squares.webp" width="900" height="886" alt="A square of side a with a b-by-b square removed leaves a shape of area a squared minus b squared. Cut and rearranged it forms a rectangle a plus b by a minus b. With a = 5 and b = 3, 25 minus 9 equals 2 times 8." loading="lazy">
  <figcaption>a² − b² is the area of a rectangle with sides (a − b) and (a + b).</figcaption>
</figure>


### Equations that need rearranging (Higher tier only)

**Worked example 3.** Solve 3x² = 5x + 2.

```
3x^2 - 5x - 2 = 0                rearrange so one side is 0
(3x + 1)(x - 2) = 0              factorise ax^2 + bx + c
x = -1/3  or  x = 2
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--07-rearrange-then-factorise.webp" width="900" height="950" alt="The curve y = 3x squared and the line y = 5x + 2 cross at x = −1/3 and x = 2, which are the solutions of 3x squared = 5x + 2. Moving everything to one side gives 3x squared − 5x − 2 = 0, which factorises to (3x + 1)(x − 2) = 0, so x = −1/3 or x = 2." loading="lazy">
  <figcaption>Both sides equal where the curve and line cross; moving everything to one side makes the equation ready to factorise.</figcaption>
</figure>


### Completing the square (Higher tier only)

Write x² + bx + c as (x + b/2)² − (b/2)² + c, then solve.

**Worked example 4.** Solve x² − 6x + 4 = 0, giving exact answers.

```
x^2 - 6x + 4 = (x - 3)^2 - 9 + 4 = (x - 3)^2 - 5
(x - 3)^2 - 5 = 0
(x - 3)^2 = 5
x - 3 = ±√5
x = 3 + √5  or  x = 3 - √5
```

The same form gives the turning point of y = x² − 6x + 4 at (3, −5) (reference A11).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--04-complete-square-tiles.webp" width="900" height="730" alt="Tiles for x squared plus 6x plus 5 nearly make a square of side x plus 3, but the 3 by 3 corner needs 9 unit squares and only 5 are there. So 4 are missing and x squared plus 6x plus 5 equals (x + 3) squared minus 4." loading="lazy">
  <figcaption>Completing the square fills the corner of (x + 3)² and then takes away what was never there.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--05-quadratic-surd-roots.webp" width="900" height="970" alt="The parabola y = x^2 - 4x - 3 has line of symmetry x = 2 and crosses the x axis a distance sqrt(7) either side, giving x = 2 +/- sqrt(7)." loading="lazy">
  <figcaption>The surd roots sit sqrt(7) either side of the line of symmetry x = 2.</figcaption>
</figure>


### The quadratic formula (Higher tier only)

For ax² + bx + c = 0, where a ≠ 0:

x = (−b ± √(b² − 4ac)) / (2a)

The specification's appendix lists this among the formulae you must know: **it is not given in the exam**.

**Worked example 5.** Solve 3x² + 7x − 5 = 0, giving answers to 2 decimal places.

```
a = 3, b = 7, c = -5
b^2 - 4ac = 49 - 4(3)(-5) = 49 + 60 = 109
x = (-7 ± √109) / 6
x = 0.57  or  x = -2.91   (2 d.p.)
```

Write the substitution down first: it can earn method marks even if the final answer is wrong.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--05-quadratic-formula-graph.webp" width="900" height="980" alt="The curve y = 3x² + 7x − 5 crosses the x-axis at x = −2.91 and x = 0.57, the two solutions the formula gives. The working shows a = 3, b = 7, c = −5 and b² − 4ac = 109." loading="lazy">
  <figcaption>The two answers from the formula are where the curve meets the x-axis.</figcaption>
</figure>


### Approximate solutions from a graph (both tiers)

The solutions of ax² + bx + c = 0 are the x-coordinates where y = ax² + bx + c crosses the x-axis (the roots). To solve x² − 2x − 4 = 1, draw y = x² − 2x − 4 and the line y = 1 and read off where they cross: about x = −1.4 and x = 3.4. (The exact values are 1 ± √6, which round to −1.45 and 3.45.) The readings should sit equally either side of the line of symmetry, x = 1.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--02-solve-with-a-line.webp" width="900" height="1090" alt="The curve y = x² − 2x − 3 is drawn once. Its x-axis crossings (x = −1 and 3) solve x² − 2x − 3 = 0. Rearranging x² − 4x − 1 = 0 gives the line y = 2x − 2, which meets the curve at about x = −0.2 and 4.2." loading="lazy">
  <figcaption>Draw the curve once, then choose the line that matches the equation to solve.</figcaption>
</figure>


## A19: Simultaneous equations

### Linear/linear by elimination (both tiers)

**Worked example 6.** Solve 3x + 2y = 17 and 5x − 2y = 7.

```
The y terms are +2y and -2y, so ADD the equations
8x = 24
x = 3
Substitute into the first: 9 + 2y = 17, so 2y = 8, y = 4
Check in the second: 15 - 8 = 7
```

When no coefficients match, multiply one or both equations first.

**Worked example 7.** Solve 2x + 3y = 12 and 5x + 4y = 23.

```
Multiply the first by 4:   8x + 12y = 48
Multiply the second by 3:  15x + 12y = 69
Subtract:                  7x = 21, so x = 3
Substitute: 6 + 3y = 12, so y = 2
```

Rule of thumb: same signs, subtract; different signs, add.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--04-elimination-steps.webp" width="900" height="1080" alt="Two worked examples of elimination. First, 3x + 2y = 17 and 5x − 2y = 7 have opposite y terms, so adding gives 8x = 24, x = 3 and y = 4. Second, 2x + 3y = 12 and 5x + 4y = 23 are multiplied by 4 and by 3 to give 8x + 12y = 48 and 15x + 12y = 69; the y terms now match, so subtracting gives 7x = 21, x = 3 and y = 2. Same signs: subtract. Different signs: add." loading="lazy">
  <figcaption>Make the coefficients of one letter equal in size, then add if the signs differ and subtract if they match.</figcaption>
</figure>


### Linear/quadratic by substitution (Higher tier only)

Rearrange the linear equation to make one letter the subject, then substitute into the quadratic.

**Worked example 8.** Solve x² + y² = 25 and y = x + 1.

```
x^2 + (x + 1)^2 = 25
x^2 + x^2 + 2x + 1 = 25
2x^2 + 2x - 24 = 0
x^2 + x - 12 = 0
(x + 4)(x - 3) = 0
x = -4  or  x = 3
y = x + 1 gives y = -3  or  y = 4
Solutions: x = -4, y = -3  and  x = 3, y = 4
```

Pair each x with its own y.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--06-line-meets-circle.webp" width="900" height="1020" alt="The circle x² + y² = 25 of radius 5 and the line y = x + 1 cross at two points, (−4, −3) and (3, 4). These are the two solution pairs from substitution." loading="lazy">
  <figcaption>A line and a circle can cross twice: pair each x with its own y.</figcaption>
</figure>


### From a graph (both tiers)

The solution is the point where the two graphs cross. A line can meet a curve twice, once (touching) or not at all.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--02-simultaneous-lines.webp" width="900" height="940" alt="The lines 2x + y = 7 and x − y = 2 are graphed and cross at (3, 1). Adding the equations gives 3x = 9, so x = 3, and then y = 1. The crossing point is the one pair of values that fits both equations." loading="lazy">
  <figcaption>The solution of simultaneous equations is where their graphs cross.</figcaption>
</figure>


## A20: Iteration (Higher tier only)

Iteration finds an approximate solution by feeding each answer back into a formula. The specification note asks for **suffix notation** in recursive formulae: xₙ₊₁ means the next value and xₙ the current one.

**Step 1: locate the root by a change of sign.** For x³ − 5x − 3 = 0, let f(x) = x³ − 5x − 3.

```
f(2) = 8 - 10 - 3 = -5
f(3) = 27 - 15 - 3 = 9
The sign changes, so there is a solution between x = 2 and x = 3
```

**Step 2: rearrange into an iterative formula.**

```
x^3 = 5x + 3
x = ∛(5x + 3)
So xₙ₊₁ = ∛(5xₙ + 3)
```

**Step 3: iterate.** Start with x₀ = 2.5. On a calculator, type 2.5, press =, then type ∛(5 × ANS + 3) and press = repeatedly.

```
x₁ = 2.4933...
x₂ = 2.4915...
x₃ = 2.4910...
```

The values are settling at 2.49 to 2 decimal places. To confirm, check the sign change across the rounding interval: f(2.485) = −0.0796 and f(2.495) = 0.0564. The sign changes, so the solution is 2.49 to 2 d.p.

Write every iterate to at least 4 decimal places.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--07-iteration-converging.webp" width="900" height="1060" alt="Top: the graph of f(x) = x³ − 5x − 3 is below zero at x = 2 (value −5) and above zero at x = 3 (value 9), so a root lies between. Bottom: starting at 2.5 the iterates 2.4933, 2.4915, 2.4910 settle inside the interval 2.485 to 2.495 where f changes sign, so the root is 2.49 to 2 decimal places." loading="lazy">
  <figcaption>A sign change locates the root; repeated use of the formula settles on it.</figcaption>
</figure>


## A21: Forming and solving equations

Turn words or a diagram into algebra, solve, then answer in context. The specification note includes geometrical problems and problems set in context.

**Worked example 9 (geometry).** A rectangle is 4 cm longer than it is wide. Its area is 45 cm². Find its width.

```
Let the width be x cm, so the length is (x + 4) cm
x(x + 4) = 45
x^2 + 4x - 45 = 0
(x + 9)(x - 5) = 0
x = -9  or  x = 5
A length cannot be negative, so the width is 5 cm
```

The rejection step is part of "interpret the solution". Say why you reject −9.

**Worked example 10 (two equations).** 3 adult tickets and 2 child tickets cost £39. 2 adult tickets and 5 child tickets cost £48. Find the price of each.

```
Let an adult ticket be £a and a child ticket £c
3a + 2c = 39
2a + 5c = 48
Multiply the first by 2:  6a + 4c = 78
Multiply the second by 3: 6a + 15c = 144
Subtract: 11c = 66, so c = 6
3a + 12 = 39, so a = 9
Adult £9, child £6
```

Define your letters and finish with a sentence that answers the question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--09-rectangle-equation.webp" width="900" height="800" alt="A rectangle of width x cm and length x + 4 cm has area 45 square centimetres. Solving x(x + 4) = 45 gives x = 5 or x = −9; the width is 5 cm, so the rectangle is 5 cm by 9 cm. A negative length is rejected." loading="lazy">
  <figcaption>Draw the unknowns on the shape, form the equation, then reject the answer that makes no sense.</figcaption>
</figure>


## A22: Inequalities

### Linear inequalities in one variable (both tiers)

Solve them like equations, with one extra rule: **if you multiply or divide by a negative number, reverse the inequality sign.**

**Worked example 11.** Solve 5 − 2x < 11.

```
-2x < 6
x > -3      dividing by -2 reverses < to >
```

**Worked example 12.** Find the integers n that satisfy −3 ≤ 2n + 1 < 7.

```
-4 ≤ 2n < 6       subtract 1 from all three parts
-2 ≤ n < 3        divide all three parts by 2
Integers: -2, -1, 0, 1, 2
```

**Number lines.** The specification sets the convention: an **open circle** for a strict inequality (< or >) and a **closed circle** for an included boundary (≤ or ≥). For −2 ≤ n < 3, draw a closed circle at −2, an open circle at 3, and a line joining them.

### Set notation (Higher tier only)

x > −3 can be written {x : x > −3}, read as "the set of x such that x is greater than −3". Two separate parts join with the union symbol ∪.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--05-set-notation-union.webp" width="900" height="760" alt="Two number lines from −6 to 7. The first shows x greater than −3 as an open circle at −3 with a ray to the right, written {x : x &gt; −3}, &quot;the set of x such that x is greater than −3&quot;. The second shows x less than −3 or x greater than 4, two separate rays with open circles at −3 and 4, written {x : x &lt; −3} ∪ {x : x &gt; 4}, where ∪ joins the two parts." loading="lazy">
  <figcaption>A curly bracket with a condition names the set; the union symbol joins two separate parts.</figcaption>
</figure>


### Quadratic inequalities (Higher tier only)

Find the roots, sketch the parabola, then read off which part you need.

**Worked example 13.** Solve x² − x − 12 > 0.

```
x^2 - x - 12 = (x - 4)(x + 3), roots x = -3 and x = 4
y = x^2 - x - 12 is a U-shape, so it is above the x-axis
outside the roots
x < -3  or  x > 4
Set notation: {x : x < -3} ∪ {x : x > 4}
```

For x² ≤ 16, the answer is −4 ≤ x ≤ 4. Writing only x ≤ 4 misses the negative root.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--08-quadratic-inequality.webp" width="900" height="900" alt="The U-shaped curve y = x² − x − 12 crosses the x-axis at −3 and 4. The curve is above the axis where x is less than −3 or greater than 4, shown by two highlighted parts of the axis with open circles at the roots." loading="lazy">
  <figcaption>Sketch the curve; the solution is the part of the axis where the curve is above zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-solving-equations-and-inequalities--06-x-squared-two-sided.webp" width="900" height="850" alt="The curve y = x squared and the horizontal line y = 16 meet at x = −4 and x = 4. Between those points the curve is on or below the line, shown by a shaded region and a thick section of the x-axis with closed circles at −4 and 4. So x squared less than or equal to 16 gives −4 ≤ x ≤ 4." loading="lazy">
  <figcaption>The curve is on or below y = 16 between the two roots, so the answer has two ends: −4 ≤ x ≤ 4.</figcaption>
</figure>


### Regions on a graph (Higher tier only)

An inequality in two variables describes a region. Draw each boundary line: **dashed for a strict inequality** and **solid for an included one**, as the specification requires. Then shade or label the region.

For y ≥ 1, y < 2x and x + y ≤ 6: y = 1 and x + y = 6 are solid lines, and y = 2x is dashed. The point (3, 3) is in the region, because it lies on the solid line x + y = 6. The point (2, 4) is not, because it lies on the dashed line y = 2x and 4 < 4 is false.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--02-negative-flips-sign.webp" width="900" height="1030" alt="Values of x from minus 5 to 2 are put through minus 2x and compared with 6. Only x greater than minus 3 passes, so −2x &lt; 6 becomes x &gt; −3, shown on a number line with an open circle at minus 3. Dividing by a negative reverses the sign." loading="lazy">
  <figcaption>Dividing by a negative number reverses the inequality sign, as testing values confirms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--03-double-inequality-integers.webp" width="900" height="990" alt="Three number lines for −7 ⩽ 3x + 2 &lt; 11. Subtracting 2 from every part gives −9 ⩽ 3x &lt; 9; dividing every part by 3 gives −3 ⩽ x &lt; 3. The integers −3, −2, −1, 0, 1, 2 are marked; 3 has an open circle and is excluded." loading="lazy">
  <figcaption>Operate on all three parts at once, then check each endpoint separately for integer solutions.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--01-open-closed-number-line.webp" width="900" height="1110" alt="Four number lines from minus 4 to 4: x &lt; 1 (open circle at 1, shaded left), x at most 1 (closed circle), x &gt; minus 2 (open circle at minus 2, shaded right) and minus 3 at most x &lt; 1 (closed circle at minus 3, open at 1, shaded between). Closed means included, open means excluded." loading="lazy">
  <figcaption>Closed circles include the value (⩽ ⩾); open circles exclude it (&lt; &gt;).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--04-two-variable-shading.webp" width="900" height="950" alt="A grid with a broken vertical line at x = 1 (shade right) and a solid horizontal line at y = 1 (shade below). The unshaded region R at upper left satisfies both inequalities; the point (−1, 3) is inside it." loading="lazy">
  <figcaption>Broken line for strict inequalities, solid for inclusive; shade the unwanted region and leave R clear.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--05-reading-a-region.webp" width="900" height="970" alt="An unshaded triangle with corners (1, 0), (1, 4) and (5, 4). Its edges give x ⩾ 1 (solid, right), y &lt; 4 (broken, below) and y ⩾ x − 1 (solid, above). The test point (2, 3) satisfies all three." loading="lazy">
  <figcaption>Name each boundary, choose solid or broken, then pick the side that holds the unshaded region.</figcaption>
</figure>


## Calculator or not?

On Paper 1 you must do everything by hand, including exact surd answers. On Papers 2 and 3 use the calculator for the quadratic formula and iteration, but still write the substitution and each iterate.

## Common errors

- Expanding 3(x + 6) as 3x + 6.
- Dividing by x in x² = 9x and losing x = 0.
- Writing −b as b in the quadratic formula when b is already negative.
- Forgetting the ± when square-rooting in completing the square.
- Not reversing the sign when dividing an inequality by a negative.
- Using a closed circle for < or a solid line for a strict inequality.
- Giving x < 5 for a quadratic inequality that needs two parts.

## Next steps

Condense this page with the [revision notes](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-revision-notes/), then test yourself with the [practice questions](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-practice/). For the rest of Topic 2, use the [Algebra revision notes](/resources/aqa-gcse-mathematics-algebra-revision-notes/) and [Algebra practice questions](/resources/aqa-gcse-mathematics-algebra-practice/).

## Official syllabus

AQA GCSE Mathematics (8300) specification, for teaching from September 2015, exams from May/June 2017, version 1.0, published by AQA -- section 3.2.3 Solving equations and inequalities (A17 to A22), with the Appendix on mathematical formulae.
