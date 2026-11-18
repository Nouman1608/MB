---
title: "AQA A-Level Mathematics (7357): OT2 Mathematical problem solving"
resourceType: "study-guides"
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
description: "Study guide to AQA A-level Maths 7357 theme OT2: spotting structure, unstructured problems, interpreting answers, numerical accuracy, the cycle and diagrams."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches overarching theme **OT2 Mathematical problem solving** of the AQA A-level Mathematics (7357) specification, for first teaching 2017. It covers all seven statements, OT2.1 to OT2.7. The specification requires the overarching themes to be applied across the whole of the content, so OT2 has no paper of its own: it turns up inside questions on algebra, calculus, sequences, mechanics and statistics on all three papers. A calculator is required in every 7357 assessment.

The [problem-solving cycle, numerical accuracy and modelling study guide](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and/) introduces OT2 and OT3 together. This page concentrates on OT2 alone, with new examples chosen to show each statement in a different area of the content: a sequence problem, a logarithm problem, a constrained optimisation that needs a second pass, Newton–Raphson, the trapezium rule's error, and a velocity–time diagram. Afterwards use the [OT2 revision notes](/resources/aqa-a-level-mathematics-7357-ot2-mathematical-problem-solving-aqa-alevel-maths-revision-notes/) and the [OT2 practice questions](/resources/aqa-a-level-mathematics-7357-ot2-mathematical-problem-solving-aqa-alevel-maths-practice/).

## What OT2 covers

| Ref | Statement in brief |
|---|---|
| OT2.1 | Recognise the underlying mathematical structure in a situation; simplify and abstract so the problem can be solved |
| OT2.2 | Construct extended arguments to solve problems presented in an unstructured form, including problems in context |
| OT2.3 | Interpret and communicate solutions in the context of the original problem |
| OT2.4 | Understand that many problems cannot be solved analytically, but numerical methods permit solution to a required accuracy |
| OT2.5 | Evaluate, including by reasoned estimates, the accuracy or limitations of solutions, including numerical ones |
| OT2.6 | Understand the problem-solving cycle: specify, collect information, process and represent, interpret; repeat if needed |
| OT2.7 | Understand, interpret and extract information from diagrams, and construct diagrams to solve problems, including in mechanics |

## OT2.1 Recognising structure

Most context questions are a familiar piece of A-level content in disguise. Ask: *what is changing, and by how much each step?* Equal additions suggest an arithmetic sequence; equal multiplications a geometric one; "rate of change proportional to amount" an exponential; "maximum" or "minimum" a derivative or completing the square.

### Worked example 1: a theatre

A theatre has 20 seats in the front row and each row has 2 more seats than the row in front. How many rows are needed to seat 1000 people?

**Structure.** Seats per row: 20, 22, 24, … This is an **arithmetic series** with a = 20, d = 2.

```
Sₙ = (n/2)(2a + (n − 1)d) = (n/2)(40 + 2n − 2) = n(n + 19)
n(n + 19) = 1000   →   n² + 19n − 1000 = 0
n = (−19 + √(361 + 4000))/2 = 23.5 (taking the positive root)
```

**Interpret (OT2.3).** n must be a whole number. S₂₃ = 23 × 42 = 966 < 1000 and S₂₄ = 24 × 43 = 1032 ≥ 1000. So **24 rows** are needed, with the last row partly filled. Writing "23.5 rows" loses the final mark.

## OT2.2 Extended arguments for unstructured problems

An unstructured question gives a goal but no parts (a), (b), (c) to guide you. Before calculating, write a plan in one or two lines: which quantity you will find first and which result you will use.

### Worked example 2: tripling an investment

£5000 is invested at 8% compound interest per year. After how many complete years will it first be worth more than £15 000?

**Plan.** Value after n years is 5000 × 1.08ⁿ. Set up an inequality, use logarithms, then round in the right direction.

```
5000 × 1.08ⁿ > 15 000
1.08ⁿ > 3
n ln 1.08 > ln 3        (ln 1.08 > 0, so the inequality is unchanged)
n > ln 3 / ln 1.08 = 14.27
```

**Interpret.** Interest is added once a year, so the value only changes at whole years: **15 years**. Check: 5000 × 1.08¹⁴ = £14 686 and 5000 × 1.08¹⁵ = £15 861.

The argument has four links (model, inequality, logarithm, integer interpretation). Each link is a mark; a bare "15" with no working scores very little.

## OT2.6 The cycle: specify, collect, process, interpret, repeat

### Worked example 3: a pen against a wall

A farmer has 60 m of fencing to make a rectangular pen against a straight wall, so fencing is needed on three sides only. Find the largest possible area.

**First pass.**

```
Specify:   maximise area A; two sides of length x perpendicular to the wall
Collect:   fencing 60 m, so the side parallel to the wall is 60 − 2x
Process:   A = x(60 − 2x) = 60x − 2x²
           dA/dx = 60 − 4x = 0  →  x = 15
           d²A/dx² = −4 < 0, so a maximum
Interpret: pen 15 m by 30 m, area 450 m²
```

**New information.** The wall is only 20 m long. The side along the wall must satisfy 60 − 2x ≤ 20, so x ≥ 20.

**Second pass.** A = 60x − 2x² is decreasing for x > 15, so on x ≥ 20 its greatest value is at x = 20: A = 20 × 20 = **400 m²**, a 20 m by 20 m pen.

This is OT2.6 in action: interpreting the first answer against reality showed a constraint had been missed, and the cycle was repeated.

## OT2.4 Numerical methods when algebra fails

The equation cos x = x (x in radians) cannot be solved by algebra. Newton–Raphson finds the root to any accuracy you need.

### Worked example 4: Newton–Raphson

Let f(x) = cos x − x, so f′(x) = −sin x − 1. Use xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) with x₀ = 0.7.

```
x₁ = 0.739436
x₂ = 0.739085
x₃ = 0.739085
```

**Justify the accuracy.** To claim 0.739 to 3 decimal places, check a sign change across the rounding interval: f(0.7385) = 0.00098 > 0 and f(0.7395) = −0.00069 < 0. f is continuous, so the root lies between 0.7385 and 0.7395, and it is **0.739 (3 d.p.)**.

**When Newton–Raphson fails.** If f′(xₙ) is zero or close to zero, the tangent is nearly horizontal and the next estimate can jump far away. Choose a starting value away from turning points.

## OT2.5 Evaluating accuracy and limitations

### Worked example 5: is the trapezium rule estimate too big or too small?

Estimate ∫₀¹ e^(x²) dx using the trapezium rule with 4 strips, and say whether it is an over- or underestimate.

```
h = 0.25
x:       0       0.25     0.5      0.75     1
e^(x²):  1       1.0645   1.2840   1.7551   2.7183
Area ≈ (0.25/2)[1 + 2.7183 + 2(1.0645 + 1.2840 + 1.7551)] = 1.491
```

**Evaluate.** e^(x²) is convex (curving upwards) on [0, 1], so each trapezium's top edge lies above the curve: **1.491 is an overestimate**. More strips reduce the error. The true value is about 1.463, so the error here is roughly 2%.

**Reasoned estimates.** Before trusting any calculator output, estimate it. The integrand runs from 1 to 2.72, so the area must lie between 1 and 2.72; an answer of 14.9 would signal a slip.

## OT2.7 Diagrams, including in mechanics

### Worked example 6: a velocity–time diagram

A car starts from rest, accelerates uniformly to 15 m s⁻¹ in 6 s, travels at 15 m s⁻¹ for 20 s, then decelerates uniformly to rest in 4 s. Find the total distance.

**Construct the diagram.** Sketch velocity against time: a straight line from (0, 0) to (6, 15), horizontal to (26, 15), then down to (30, 0). The shape is a trapezium.

**Extract.** Distance = area under the graph:

```
= ½ × 6 × 15 + 20 × 15 + ½ × 4 × 15
= 45 + 300 + 30 = 375 m
```

Or use the trapezium area directly: ½ × (30 + 20) × 15 = 375 m. Reading the gradient of each section gives the accelerations: 2.5 m s⁻² and −3.75 m s⁻².

## Common mistakes

- Leaving a non-integer answer when the context demands a whole number, or rounding the wrong way.
- Starting to calculate an unstructured problem with no plan, then losing track of what has been found.
- Accepting a first answer without checking it against every constraint in the question.
- Quoting a numerical root to more figures than were justified, or with no sign-change check.
- Saying the trapezium rule over- or underestimates without referring to the shape (convex or concave) of the curve.
- Drawing a diagram but not labelling the quantities used in the calculation.

## Exam technique

- **Show that**: every step must be visible, ending with the given result and a concluding statement.
- **Hence**: use the previous part; a different method may score nothing.
- **Interpret** or **in context**: a sentence with units, referring to the situation.
- **Comment** or **evaluate**: give a specific reason (a constraint, an assumption, the shape of a curve), not "it may be inaccurate".

## Official syllabus

Source: AQA A-level Mathematics 7357, overarching theme OT2 Mathematical problem solving (OT2.1 to OT2.7), published by AQA, for first teaching 2017.
