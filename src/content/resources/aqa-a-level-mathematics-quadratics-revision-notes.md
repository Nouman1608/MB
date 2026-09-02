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
description: "Condensed recall notes on the discriminant, quadratic graphs, simultaneous linear-quadratic equations, and linear/quadratic inequalities for AQA A-Level Mathematics (7357), B3-B5."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
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

## Simultaneous linear-quadratic equations (B4)

**Method: substitution, not elimination** — rearrange the linear equation to isolate one variable, substitute into the quadratic, solve the resulting single-variable quadratic.

The **discriminant of the resulting quadratic** tells you the geometric relationship between the line and the curve:

| Discriminant | Meaning |
|---|---|
| **> 0** | Line intersects the curve **twice** |
| **= 0** | Line is a **tangent** — touches once |
| **< 0** | Line **misses** the curve entirely |

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

## Worked example: simultaneous linear-quadratic pair

Solve y = x + 1 and y = x² − x − 1 simultaneously.

```
Step 1: substitute the linear equation into the quadratic
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

## Why the discriminant is worth over-learning

Because B3, B4 and B5 all lean on the same b^2 - 4ac calculation, being fast and error-free with it pays off three times over rather than once. In B3 it settles how many real roots a quadratic has before you even attempt to solve it -- useful as a quick check that an answer is plausible. In B4 it tells you in advance whether a simultaneous linear-quadratic system has a solution at all, which line-curve intersections to expect, and whether to anticipate one repeated pair of coordinates (tangent case) rather than two distinct pairs. In B5 it identifies the roots that bound or exclude the solution region before you sketch, so the sketch itself becomes a confirmation step rather than a guess. Students who treat B3-B5 as three unconnected procedures tend to re-derive the discriminant's meaning from scratch each time; students who treat it as one recurring tool revise this content noticeably faster.

## Key terms

**Discriminant** — b² − 4ac; its sign gives the number and type of real roots. **Repeated root** — the graph touches the x-axis tangentially (discriminant = 0), doesn't cross it. **Completing the square** — rewriting a quadratic as a(x + p)² + q; reveals the turning point and solves without the formula. **Set notation** — a formal way to express a solution set, e.g. {x : −2 < x < 3}.

## Practising the full cluster together

Because B3, B4 and B5 are frequently combined within a single exam question -- for example, a question that first asks you to find where a line and curve intersect (B4), then asks you to state the range of values for which the curve lies above the line (B5) -- practise moving between these sub-topics within one problem, not just revising each in isolation. A useful drill: given any quadratic, find its discriminant and roots (B3), pair it with a line to solve simultaneously (B4), then use the same roots to write the solution to a related inequality (B5), all in one sitting.

## Common mistakes

- Writing an inequality solution the **wrong way round** ("and" instead of "or", or vice versa) — always sketch first.
- Using **elimination** instead of **substitution** for a linear-quadratic simultaneous pair — substitution is the standard, more reliable method here.
- Forgetting to **check the discriminant** before assuming real roots exist.
- Dropping a solution when an inequality involves a fraction or bracket, by treating it exactly like a linear inequality.

## Quick self-test

- State what each sign of the discriminant (positive, zero, negative) tells you about a quadratic's roots.
- Solve x² + 2x − 8 = 0 by completing the square.
- Solve the simultaneous pair y = 2x and y = x² − 3 by substitution.
- Solve x² − 5x + 6 < 0, sketching the graph first.
- Write the solution set to x² > 9 using both "or" notation and set notation.

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017 —
[aqa.org.uk/7357](https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/subject-content).
