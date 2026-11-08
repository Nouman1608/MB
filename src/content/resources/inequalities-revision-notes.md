---
title: "Inequalities: Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.6
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "inequalities"
description: "Condensed recall notes on solving linear inequalities, number lines and regions for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-22
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: reviewed by sajawal-zahid."
---

Condensed for the final weeks. For worked examples, use the
[Inequalities study guide](/resources/inequalities/).

## The symbols

| Symbol | Meaning | On a number line | On a graph |
|---|---|---|---|
| `<` | less than | **Open** circle ○ | **Dashed** line |
| `>` | greater than | **Open** circle ○ | **Dashed** line |
| `≤` | less than or equal | **Filled** circle ● | **Solid** line |
| `≥` | greater than or equal | **Filled** circle ● | **Solid** line |

Open/dashed = the boundary is **not** included. Filled/solid = it **is**.

## Solving linear inequalities

Solve exactly as you would an equation — with **one critical exception**:

> **Multiplying or dividing by a negative number REVERSES the inequality sign.**

```
-3x > 12
  x < -4        <- sign flipped
```

This single rule accounts for most lost marks in the topic. Adding and subtracting never flip it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--02-negative-flips-sign.webp" width="900" height="1030" alt="Values of x from minus 5 to 2 are put through minus 2x and compared with 6. Only x greater than minus 3 passes, so −2x &lt; 6 becomes x &gt; −3, shown on a number line with an open circle at minus 3. Dividing by a negative reverses the sign." loading="lazy">
  <figcaption>Dividing by a negative number reverses the inequality sign, as testing values confirms.</figcaption>
</figure>


## Double inequalities

Operate on **all three parts** at once.

```
-5 <  2x + 1  <=  9
-6 <  2x      <=  8       (subtract 1 from each part)
-3 <  x       <=  4       (divide each part by 2)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--01-open-closed-number-line.webp" width="900" height="1110" alt="Four number lines from minus 4 to 4: x &lt; 1 (open circle at 1, shaded left), x at most 1 (closed circle), x &gt; minus 2 (open circle at minus 2, shaded right) and minus 3 at most x &lt; 1 (closed circle at minus 3, open at 1, shaded between). Closed means included, open means excluded." loading="lazy">
  <figcaption>Closed circles include the value (⩽ ⩾); open circles exclude it (&lt; &gt;).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--03-double-inequality-integers.webp" width="900" height="990" alt="Three number lines for −7 ⩽ 3x + 2 &lt; 11. Subtracting 2 from every part gives −9 ⩽ 3x &lt; 9; dividing every part by 3 gives −3 ⩽ x &lt; 3. The integers −3, −2, −1, 0, 1, 2 are marked; 3 has an open circle and is excluded." loading="lazy">
  <figcaption>Operate on all three parts at once, then check each endpoint separately for integer solutions.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--04-two-variable-shading.webp" width="900" height="950" alt="A grid with a broken vertical line at x = 1 (shade right) and a solid horizontal line at y = 1 (shade below). The unshaded region R at upper left satisfies both inequalities; the point (−1, 3) is inside it." loading="lazy">
  <figcaption>Broken line for strict inequalities, solid for inclusive; shade the unwanted region and leave R clear.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--05-reading-a-region.webp" width="900" height="970" alt="An unshaded triangle with corners (1, 0), (1, 4) and (5, 4). Its edges give x ⩾ 1 (solid, right), y &lt; 4 (broken, below) and y ⩾ x − 1 (solid, above). The test point (2, 3) satisfies all three." loading="lazy">
  <figcaption>Name each boundary, choose solid or broken, then pick the side that holds the unshaded region.</figcaption>
</figure>


## Integer solutions

When asked to **list** integer values, apply the endpoints carefully.

For −3 < x ≤ 4, the integers are **−2, −1, 0, 1, 2, 3, 4**. Note −3 is excluded (strict) but 4 is included.

## Regions on a graph

1. Draw each boundary line (dashed or solid as appropriate).
2. Decide which side satisfies the inequality — **test a point**, usually (0, 0) if it is not on the line.
3. Shade as the question instructs — read whether it asks you to shade the **required** region or the unwanted one.
4. Label the region **R**.

```
Test (0,0) in  y < 2x + 1:
   0 < 1  TRUE  ->  the origin side is the required region
```

Common region boundaries: `x ≥ 0`, `y ≥ 0`, `x + y ≤ 10`, `y ≤ 2x`.

**Worked example.** Represent x < 1 and y ≥ 1 on the same diagram.

Draw a **broken** vertical line at x = 1 (strict, so broken), and shade
the unwanted side (x ≥ 1, to the right). Draw a **solid** horizontal
line at y = 1 (inclusive, so solid), and shade the unwanted side (y < 1,
below it). What's left **unshaded** — to the left of x = 1 and on or
above y = 1 — is the region satisfying both inequalities.

## The reverse skill: reading inequalities from a region

Given a shaded diagram, identify each boundary line's equation, decide
whether it should be < / > (broken line) or ≤ / ≥ (solid line), and
decide which side of each line the **unshaded** (wanted) region lies on
— that determines the direction of each inequality sign.

**Note:** linear programming — optimising a quantity subject to a
system of inequalities — is explicitly **not** part of this syllabus;
the skill required stops at representing, solving and reading off
regions.

## Inequalities in worded problems

Translate the words into symbols **before** solving, and define what
the variable represents.

**Worked example.** A taxi charges a $3 call-out fee plus $2 per
kilometre. A passenger has at most $25 to spend. Form and solve an
inequality for the number of kilometres, k, the passenger can travel.

```
3 + 2k <= 25
    2k <= 22
     k <= 11
```

The passenger can travel **at most 11 km**. Note the answer is
bounded by the real-world context — k also cannot be negative, so the
full solution is 0 <= k <= 11, even though the algebra alone only
produces the upper bound.

## Combining two separate inequalities

Some questions give two inequalities in the same variable and ask for
the values that satisfy **both**.

```
Solve:  2x - 1 > 5   and   x + 4 <= 10

2x - 1 > 5            x + 4 <= 10
    2x > 6                 x <= 6
     x > 3

Combined: 3 < x <= 6
```

Write the combined answer as a single double inequality, not as two
separate lines — this is what "hence find the set of values" is
asking for.

## Exam traps

- Forgetting to flip the sign when dividing by a negative.
- Using an open circle where ≤ requires a filled one.
- Dashed vs solid lines — worth a mark on its own.
- Shading the wrong region: always test a point rather than guessing.
- When listing integers, checking whether each endpoint is included.
- Treating a double inequality one side at a time and losing a bound in the process.

## Checking a solution

After solving, substitute a value from your solution set back into
the **original** inequality to confirm it holds — this catches sign
errors quickly, especially after dividing by a negative number.

```
Check x < -4 solves -3x > 12:
   Try x = -5:  -3(-5) = 15,  and 15 > 12  TRUE
```

If the check fails, the sign was very likely not flipped when it
should have been (or was flipped when it shouldn't have been).

## Self-test

1. Solve 4x − 3 ≤ 17.
2. Solve −2x > 10.
3. List the integers satisfying −2 ≤ x < 3.
4. Should y > x + 1 be drawn with a dashed or solid line?
5. How do you decide which side of a line to shade?

**Answers:** 1. 4x ≤ 20 → **x ≤ 5**. 2. Divide by −2 and flip: **x < −5**. 3. −2, −1, 0, 1, 2. 4. Dashed — the inequality is strict, so points on the line are not included. 5. Substitute a test point not on the line (usually the origin) into the inequality; if it is true, shade that side.

For the full worked explanation with additional detail, see the [Inequalities study guide](/resources/inequalities/); for exam-style questions with full mark schemes, see the [Inequalities practice questions](/resources/inequalities-practice/).

## Frequently asked questions

**When do you flip an inequality sign?**
Flip the sign only when you multiply or divide both sides by a negative number. Adding or subtracting never changes it.

**Should a boundary line be dashed or solid?**
Use a dashed (broken) line for a strict inequality, < or >, and a solid line for ≤ or ≥.

**How do you decide which side of a line to shade?**
Test a point that is not on the line, usually (0, 0), and check whether it satisfies the inequality. Read carefully whether the question asks you to shade the required region or the unwanted one.

**How do you check the answer to an inequality?**
Substitute a value from your solution set back into the original inequality. If it does not hold, the sign was probably not flipped when it should have been.

**Is linear programming in Cambridge O Level Maths 4024?**
No. Linear programming is not part of the 4024 syllabus; the skills stop at representing, solving and reading off regions.
