---
title: "AQA A-Level Mathematics: Quadratics, Simultaneous Equations and Inequalities — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b3-quadratic-functions-aqa-alevel-maths"
description: "Revision notes on the discriminant, simultaneous linear-quadratic equations and linear and quadratic inequalities for AQA A-Level Mathematics 7357, B3 to B5."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-02
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

Condensed for the final weeks. For the full explanation, use the
[Quadratics, Simultaneous Equations and Inequalities study guide](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/).

## The discriminant: the thread connecting B3–B5 (B3)

```
discriminant = b^2 - 4ac
```

| Discriminant | Roots |
|---|---|
| **> 0** | Two distinct real roots |
| **= 0** | One repeated (equal) root |
| **< 0** | No real roots |

Treat this as the **single tool** linking all three sub-topics below, not three separate procedures to learn in isolation.

**Solving quadratics:** by **completing the square** (a(x + p)² + q form — reveals the turning point directly) or the **quadratic formula**. Both work for any quadratic; factorising is faster only when it's clean.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--02-discriminant-roots.webp" width="900" height="1150" alt="Three parabolas y = x^2 - 4x + k for k = 1, 4 and 7. Discriminants 12, 0 and -12 give two distinct real roots, one repeated root and no real roots respectively." loading="lazy">
  <figcaption>The sign of b^2 - 4ac tells you whether the curve crosses, touches or misses the x-axis.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--01-completing-the-square.webp" width="900" height="910" alt="Graph of y = -2x^2 + 8x + 3 rewritten as -2(x - 2)^2 + 11. The vertex (2, 11) is the maximum because a is negative, the line of symmetry is x = 2, the y-intercept is 3 and the roots are about -0.35 and 4.35." loading="lazy">
  <figcaption>Completed-square form gives the vertex, line of symmetry and maximum value at a glance.</figcaption>
</figure>


## Simultaneous linear-quadratic equations (B4)

**Methods: B4 requires both elimination and substitution.** Substitution is often the most convenient for a linear-quadratic pair — rearrange the linear equation to isolate one variable, substitute into the quadratic, solve the resulting single-variable quadratic. Equating two expressions for the same variable (eliminating it) gives the same quadratic and is equally valid.

The **discriminant of the resulting quadratic** tells you the geometric relationship between the line and the curve:

| Discriminant | Meaning |
|---|---|
| **> 0** | Line intersects the curve **twice** |
| **= 0** | Line is a **tangent** — touches once |
| **< 0** | Line **misses** the curve entirely |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--04-line-meets-curve.webp" width="900" height="940" alt="Parabola y = x^2 with three parallel lines of gradient 2. Substituting gives discriminants 16, 0 and -8: two intersections, a tangent at (1, 1), and no intersection." loading="lazy">
  <figcaption>After substitution, the discriminant shows whether the line cuts, touches or misses the curve.</figcaption>
</figure>


## Linear and quadratic inequalities (B5)

**Always sketch the graph before writing the final solution** — this single habit prevents the most common error in this sub-topic (writing the solution the wrong way round).

- A solution like **−2 < x < 3** ("and") describes a **bounded** region **between** two roots — typical for "quadratic < 0" opening upward.
- A solution like **x < −2 or x > 3** ("or") describes the **unbounded** regions **outside** two roots — typical for "quadratic > 0" opening upward.

Solutions can be expressed in words ("and"/"or") or in **set notation**, e.g. {x : −2 < x < 3}.

## Worked example: solving x² − x − 6 > 0

```
Step 1: find the roots
        x^2 - x - 6 = 0
        (x - 3)(x + 2) = 0
        x = 3 or x = -2

Step 2: sketch -- upward parabola crossing the x-axis at x = -2, x = 3

Step 3: identify where the graph is ABOVE the x-axis (> 0)
        -- this is OUTSIDE the two roots

Step 4: write the solution using "or"
        x < -2  or  x > 3
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--03-quadratic-inequality.webp" width="900" height="1130" alt="The graph of x^2 - x - 6 shown twice. Above the axis the solution is x &lt; -2 or x &gt; 3 (two outer regions); below the axis it is -2 &lt; x &lt; 3 (one bounded region)." loading="lazy">
  <figcaption>Sketch the curve: above the axis gives an &quot;or&quot; answer outside the roots, below gives an &quot;and&quot; answer between them.</figcaption>
</figure>


## Worked example: simultaneous linear-quadratic pair

Solve y = x + 1 and y = x² − x − 1 simultaneously.

```
Step 1: eliminate y by equating the two expressions for y
        (the same as substituting y = x + 1 into the quadratic)
        x + 1 = x^2 - x - 1

Step 2: rearrange to standard form
        0 = x^2 - 2x - 2

Step 3: apply the discriminant
        b^2 - 4ac = (-2)^2 - 4(1)(-2) = 4 + 8 = 12 > 0
        -- two distinct real roots, so the line crosses the curve
        twice

Step 4: solve using the quadratic formula and substitute back into
        the linear equation to find each y-value
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-quadratics-revision-notes--02-line-curve-worked.webp" width="900" height="940" alt="Graph of y = x squared minus x minus 1 and the line y = x + 1. They meet at A (about -0.73, 0.27) and B (about 2.73, 3.73). Equating gives x squared minus 2x minus 2 = 0 with discriminant 12, so two points; the roots are x = 1 plus or minus root 3." loading="lazy">
  <figcaption>The positive discriminant of x² − 2x − 2 = 0 means the line cuts the curve at two points, at x = 1 ± √3.</figcaption>
</figure>


## Why the discriminant is worth over-learning

Because B3, B4 and B5 all lean on the same b^2 - 4ac calculation, being fast and error-free with it pays off three times over rather than once. In B3 it settles how many real roots a quadratic has before you even attempt to solve it -- useful as a quick check that an answer is plausible. In B4 it tells you in advance whether a simultaneous linear-quadratic system has a solution at all, which line-curve intersections to expect, and whether to anticipate one repeated pair of coordinates (tangent case) rather than two distinct pairs. In B5 it identifies the roots that bound or exclude the solution region before you sketch, so the sketch itself becomes a confirmation step rather than a guess. Students who treat B3-B5 as three unconnected procedures tend to re-derive the discriminant's meaning from scratch each time; students who treat it as one recurring tool revise this content noticeably faster.

## Key terms

**Discriminant** — b² − 4ac; its sign gives the number and type of real roots. **Repeated root** — the graph touches the x-axis tangentially (discriminant = 0), doesn't cross it. **Completing the square** — rewriting a quadratic as a(x + p)² + q; reveals the turning point and solves without the formula. **Set notation** — a formal way to express a solution set, e.g. {x : −2 < x < 3}.

## Practising the full cluster together

Because B3, B4 and B5 are frequently combined within a single exam question -- for example, a question that first asks you to find where a line and curve intersect (B4), then asks you to state the range of values for which the curve lies above the line (B5) -- practise moving between these sub-topics within one problem, not just revising each in isolation. A useful drill: given any quadratic, find its discriminant and roots (B3), pair it with a line to solve simultaneously (B4), then use the same roots to write the solution to a related inequality (B5), all in one sitting.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-quadratics-revision-notes--03-curve-above-line.webp" width="900" height="940" alt="The same curve and line as the worked pair. The curve lies above the line to the left of x = 1 minus root 3 and to the right of x = 1 plus root 3, shaded and shown with thick bars on the x-axis and open circles at the roots. The solution is x less than 1 minus root 3 or x greater than 1 plus root 3." loading="lazy">
  <figcaption>The roots that solve the simultaneous pair also bound the inequality: the curve is above the line outside them, so the answer uses &quot;or&quot;.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--05-curve-below-line.webp" width="900" height="880" alt="The curve y = x^2 - 4x + 3 and line y = 3 - 2x meet at x = 0 and x = 2. The curve is below the line between them, so 0 &lt; x &lt; 2." loading="lazy">
  <figcaption>f(x) &lt; g(x) means the first graph lies below the second; find the intersections first.</figcaption>
</figure>


## Common mistakes

- Writing an inequality solution the **wrong way round** ("and" instead of "or", or vice versa) — always sketch first.
- Thinking only one method is allowed for a linear-quadratic simultaneous pair — B4 names **both elimination and substitution**; pick whichever is more convenient, but always substitute back to find the matching y-values.
- Forgetting to **check the discriminant** before assuming real roots exist.
- Dropping a solution when an inequality involves a fraction or bracket, by treating it exactly like a linear inequality.

## Quick self-test

- State what each sign of the discriminant (positive, zero, negative) tells you about a quadratic's roots.
- Solve x² + 2x − 8 = 0 by completing the square.
- Solve the simultaneous pair y = 2x and y = x² − 3 by substitution, then check by elimination.
- Solve x² − 5x + 6 < 0, sketching the graph first.
- Write the solution set to x² > 9 using both "or" notation and set notation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-mathematics-quadratics-and-inequalities--07-fraction-inequality.webp" width="900" height="940" alt="Graph of y = 5/(x - 2) with asymptote x = 2 and the line y = 3. The curve is above the line only for 2 &lt; x &lt; 11/3. Multiplying by x - 2 is unsafe because its sign changes at x = 2." loading="lazy">
  <figcaption>Multiply by the square of the denominator, or compare graphs, rather than by x - 2 itself. (AQA / Edexcel IAL content.)</figcaption>
</figure>

## Frequently asked questions

**What does the discriminant tell you about a quadratic?**
The discriminant b² − 4ac tells you the number of real roots: positive means two distinct real roots, zero means one repeated root where the graph touches the x-axis, and negative means no real roots.

**How do you solve a linear and a quadratic equation simultaneously?**
Rearrange the linear equation and substitute it into the quadratic, then solve the resulting quadratic. AQA 7357 content B4 names both elimination and substitution, so either method is acceptable.

**How do you write the answer to a quadratic inequality?**
Sketch the graph first. A region between the roots is written as one inequality such as −2 < x < 3, while the regions outside the roots need two parts joined by or, such as x < −2 or x > 3; set notation can also be used.

**How can the discriminant tell you if a line meets a curve?**
After substituting the line into the curve, the discriminant of the resulting quadratic shows whether the line crosses the curve at two points, touches it as a tangent, or misses it.

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017 —
[aqa.org.uk/7357](https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/subject-content).
