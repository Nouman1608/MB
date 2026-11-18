---
title: "AQA A-Level Mathematics (7357): OT2 Mathematical problem solving -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Overarching themes"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 1.2
syllabusTopics:
  - qualification: "a-level"
    topic: "overarching-themes-aqa-alevel-maths"
    subtopic: "ot2-mathematical-problem-solving-aqa-alevel-maths"
description: "Condensed recall for AQA A-level Maths 7357 OT2: structure spotting, planning unstructured problems, interpreting, numerical accuracy, the cycle and diagrams."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

New to this content? Start with the [OT2 study guide](/resources/aqa-a-level-mathematics-7357-ot2-mathematical-problem-solving-aqa-alevel-maths/), which works through each statement with a full example.

These notes condense overarching theme **OT2 Mathematical problem solving** (OT2.1 to OT2.7) of the AQA A-level Mathematics (7357) specification, for first teaching 2017. OT2 is assessed inside questions on any content area, on all three papers. Test yourself with the [OT2 practice questions](/resources/aqa-a-level-mathematics-7357-ot2-mathematical-problem-solving-aqa-alevel-maths-practice/).

## Key terms

| Term | Meaning to learn |
|---|---|
| Underlying structure | The standard mathematical form hidden in a context, e.g. arithmetic series, exponential, quadratic |
| Abstract | Replace the context by variables and equations, dropping irrelevant detail |
| Unstructured problem | A goal with no scaffolded parts; you choose the route |
| Extended argument | A connected chain of reasoning from information to conclusion |
| Analytical solution | Exact answer found by algebra |
| Numerical method | Procedure giving an approximate answer to a chosen accuracy, e.g. iteration, Newton–Raphson, trapezium rule |
| Reasoned estimate | Rough value from rounded inputs and stated assumptions, used to check or bound an answer |
| Problem-solving cycle | Specify → collect information → process and represent → interpret → repeat if needed |
| Limitation | A reason a solution may not hold or may be inaccurate |

## OT2.1 Structure spotting

| Clue in the context | Structure | Tool |
|---|---|---|
| Same amount added each step | Arithmetic sequence / series | uₙ = a + (n − 1)d, Sₙ = (n/2)(2a + (n − 1)d) |
| Same factor each step | Geometric sequence / series | uₙ = arⁿ⁻¹, Sₙ = a(1 − rⁿ)/(1 − r) |
| Rate proportional to amount | Exponential | y = Ae^(kt), logarithms |
| Largest or smallest value | Optimisation | dy/dx = 0, second derivative or completing the square |
| Distances and angles | Triangle | Pythagoras, sine and cosine rules |
| Motion with constant acceleration | Kinematics | suvat, v–t graph areas |

*Worked reminder:* rows of 20, 22, 24, … seats; total ≥ 1000 → n(n + 19) ≥ 1000 → **24 rows**.

## OT2.2 Unstructured problems: method in steps

1. Write the goal in symbols.
2. List what is given and what is unknown.
3. Choose the structure and write a one-line plan.
4. Carry out the plan, labelling each result.
5. Answer the question asked, in context.

## OT2.3 Interpreting

- Round to suit the context (whole people, whole years) and say which way and why.
- Give units.
- Reject impossible solutions (negative lengths, times before the start) with a reason.

*Worked reminder:* 5000 × 1.08ⁿ > 15 000 → n > 14.27 → **15 complete years**.

## OT2.4 Numerical methods

| Method | Use | Watch for |
|---|---|---|
| Change of sign | Locate a root in an interval | f must be continuous |
| Fixed-point iteration xₙ₊₁ = g(xₙ) | Refine a root | Converges only if \|g′(x)\| < 1 near the root |
| Newton–Raphson xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) | Fast refinement | Fails if f′(xₙ) ≈ 0 |
| Trapezium rule | Estimate an area | Over- or underestimate depending on curvature |

**Justifying a root to k decimal places:** show a sign change across the interval of numbers that round to your answer.

*Worked reminder:* cos x = x: Newton–Raphson from 0.7 gives 0.739436, 0.739085; f(0.7385) > 0, f(0.7395) < 0 → **0.739**.

## OT2.5 Evaluating

- **Trapezium rule**: curve convex (bending up) → overestimate; concave (bending down) → underestimate. More strips → smaller error.
- **Bounds**: use upper and lower bounds of rounded data to find how many figures are justified.
- **Reasoned estimate**: round inputs, state assumptions, give a range; compare with the calculated answer.

*Worked reminder:* ∫₀¹ e^(x²) dx, 4 strips → 1.491, an **overestimate** (convex).

## OT2.6 The cycle

1. **Specify** what is to be found.
2. **Collect** the information and constraints.
3. **Process and represent**: variables, diagram, equations, solution.
4. **Interpret**: check against every constraint; if one fails, **repeat**.

*Worked reminder:* pen against a wall with 60 m of fencing → 15 m by 30 m (450 m²); wall only 20 m long → repeat with x ≥ 20 → **400 m²**.

## OT2.7 Diagrams

- Draw and label before calculating: known values, unknowns, directions.
- **v–t graph**: gradient = acceleration; area = displacement.
- **Force diagram**: every force, with arrows and labels; resolve in two perpendicular directions.
- **Bearings**: north lines at each point; three-figure bearings clockwise from north.

*Worked reminder:* 0 → 15 m s⁻¹ in 6 s, 20 s steady, 4 s to rest → area = 45 + 300 + 30 = **375 m**.

## Exam traps

- Non-integer answers in whole-number contexts.
- Rounding "to the nearest" when the context needs rounding up (or down).
- Dividing an inequality by a negative logarithm without reversing it (e.g. ln 0.9 < 0).
- Claiming accuracy without a sign-change check.
- Ignoring a constraint given later in the question.

## Quick self-test

1. State the four stages of the problem-solving cycle.
2. A pattern grows by multiplying by 1.5 each step. What structure is this?
3. Why must you check that f is continuous before using a change of sign?
4. Give the Newton–Raphson formula.
5. When does Newton–Raphson fail?
6. A curve is concave on an interval. Does the trapezium rule over- or underestimate the area?
7. Solve 0.9ⁿ < 0.5 for the least integer n.
8. A v–t graph is a triangle with base 8 s and height 12 m s⁻¹. Find the distance.
9. A calculation gives 23.4 buses. How many buses are needed?
10. What does OT2.2 mean by an unstructured problem?
11. Give one way of making a trapezium-rule estimate more accurate.
12. A side length must be at most 20 m, but your optimum gives 30 m. What should you do?

### Answers

1. Specify the problem; collect information; process and represent information; interpret results (and repeat if needed).
2. A **geometric** sequence.
3. A discontinuity (e.g. an asymptote) can change the sign without a root.
4. xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ).
5. When f′(xₙ) is zero or close to zero (near a turning point), or the start is too far from the root.
6. **Underestimate**.
7. n ln 0.9 < ln 0.5; ln 0.9 < 0, so n > ln 0.5/ln 0.9 = 6.58, so **n = 7**.
8. ½ × 8 × 12 = **48 m**.
9. **24** buses (round up).
10. A problem stated as a goal without parts guiding the method.
11. Use more (narrower) strips.
12. Repeat the cycle with the constraint included, and find the best value on the allowed interval.

## Where marks are usually lost

- No concluding sentence in context.
- Unjustified accuracy for numerical answers.
- Diagrams with missing labels.

## Official syllabus

Source: AQA A-level Mathematics 7357, overarching theme OT2 Mathematical problem solving, published by AQA, for first teaching 2017.
