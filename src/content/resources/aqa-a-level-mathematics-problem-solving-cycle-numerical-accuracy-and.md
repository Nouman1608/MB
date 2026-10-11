---
title: "AQA A-level Mathematics: Problem-Solving Cycle, Numerical Accuracy and Mathematical Modelling (7357)"
seoTitle: "AQA A-level Maths Problem Solving and Modelling Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Problem-Solving Cycle, Numerical Accuracy and Mathematical Modelling"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "overarching-themes-aqa-alevel-maths"
    subtopic: "ot2-mathematical-problem-solving-aqa-alevel-maths"
  - qualification: "a-level"
    topic: "overarching-themes-aqa-alevel-maths"
    subtopic: "ot3-mathematical-modelling-aqa-alevel-maths"
description: "Study guide to AQA A-level Mathematics themes OT2 and OT3: the problem-solving cycle, numerical accuracy, diagrams and modelling, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers outcomes OT2.1 to OT2.7 (mathematical problem solving) and OT3.1 to OT3.5 (mathematical modelling) in the AQA A-level Mathematics (7357) specification, for first teaching 2017. The specification says these skills must be applied across all of content sections A to S, so every outcome here can turn up inside any topic. For the argument-and-proof theme, see the [overarching themes overview](/resources/aqa-a-level-mathematics-overarching-themes/). Use the [course hub](/boards/aqa/a-level/mathematics/) and the [printable checklist](/checklists/aqa/a-level/mathematics/) to track progress, and the [free diagnostics](/diagnostics/) to find weak spots. Companion pages: [revision notes](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and-revision-notes/) and [practice questions](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and-practice/).

## What this unit covers

| Outcome | What you must be able to do |
|---|---|
| OT2.1 | Recognise the underlying structure of a situation, simplify and abstract it |
| OT2.2 | Build extended arguments for unstructured problems, including problems in context |
| OT2.3 | Interpret and communicate solutions in the original context |
| OT2.4 | Understand that many problems have no analytic solution, but numerical methods reach a required accuracy |
| OT2.5 | Evaluate accuracy and limitations, including by reasoned estimates |
| OT2.6 | Understand the problem-solving cycle, including repeating it |
| OT2.7 | Read, extract information from and construct diagrams, including in mechanics |
| OT3.1 | Translate a situation into a model, making simplifying assumptions |
| OT3.2 | Use a model with suitable inputs to explore a situation |
| OT3.3 | Interpret a model's outputs in the original context |
| OT3.4 | Refine a model from its outputs and assumptions; judge whether it is appropriate |
| OT3.5 | Understand and use modelling assumptions |

## The problem-solving cycle (OT2.1, OT2.2, OT2.3, OT2.6)

The specification describes a cycle with four stages: specify the problem, collect information, process and represent the information, and interpret the results. Interpretation may show that the cycle needs repeating.

1. **Specify.** Say exactly what is to be found, and what is allowed to vary.
2. **Collect.** Gather the given numbers, constraints and any data you must assume.
3. **Process and represent.** Choose variables, draw a diagram, write equations, solve.
4. **Interpret.** Turn the answer back into the language of the situation, and test it. If it fails, change the specification or the assumptions and go round again.

OT2.1 is the skill behind stage 3: spot the structure (a quadratic to optimise, a right-angled triangle, a rate of change) and strip away detail that does not affect it.

### Worked example 1: a poster

A poster must have a printed area of 600 cm². There are margins of 5 cm at the top and bottom and 4 cm at each side. Find the paper size that uses least paper.

```
Specify:   minimise paper area; printed area fixed at 600
Variables: printed width w cm, printed height 600/w cm  (w > 0)
Paper:     width w + 8, height 600/w + 10
A = (w + 8)(600/w + 10) = 680 + 10w + 4800/w
dA/dw = 10 − 4800/w² = 0   →   w² = 480   →   w = 4√30 ≈ 21.91
d²A/dw² = 9600/w³ > 0 for w > 0, so this is a minimum
```

Then the height: 600/21.91 = 27.39, so the paper is 29.9 cm by 37.4 cm, with area A ≈ 1118 cm².

**Interpret and repeat.** Suppose paper is only sold in whole centimetres of width. Try a paper width of 30 (so w = 22): A = 680 + 220 + 4800/22 = 1118.2 cm². The area is almost unchanged, so the whole-centimetre restriction costs nothing worth worrying about. That second pass through the cycle is what OT2.6 means by repeating it.

**Communicate (OT2.3).** End with a sentence in context: "A paper size of about 30 cm by 37 cm uses least paper."

## Diagrams (OT2.7)

A diagram does two jobs: it lets you extract information from a description, and it shows which standard result applies. Mark known values and unknowns, and write bearings as three figures, measured clockwise from north.

### Worked example 2: a bearings diagram

A boat sails 11 km on a bearing of 035°, then 8 km on a bearing of 120°. Find its distance and bearing from the start.

```
        N
        |       B ·
        |      /  \
        |   11     \ 8
        |   /       \
        | /35°        C
        A
```

The direction changes from 035° to 120°, a turn of 85°. The interior angle at B is 180° − 85° = 95°.

```
AC² = 11² + 8² − 2(11)(8)cos 95° = 200.34   →   AC = 14.15 km
sin A / 8 = sin 95° / 14.15   →   A = 34.3°
Bearing of C from A = 35° + 34.3° = 69.3°
```

The boat is **14.2 km from the start on a bearing of about 069°**.

### Worked example 3: a mechanics diagram

A 6 kg lamp hangs in equilibrium from two light strings fixed to a horizontal ceiling. The strings make 30° and 50° with the ceiling. Find both tensions (use g = 9.8).

```
 ceiling ──────────────────────────────
     \ 30°                      50° /
  T1  \                            /  T2
       \                          /
        \________ lamp __________/
                   ↓ 6g = 58.8 N
```

Horizontal: T1 cos 30° = T2 cos 50°. Vertical: T1 sin 30° + T2 sin 50° = 58.8.

From the first equation, T1 = T2 cos 50° / cos 30° = 0.7422 T2. Substitute: 0.3711 T2 + 0.7660 T2 = 58.8, so T2 = 51.7 N and T1 = 38.4 N. Check: horizontal components are both 33.2 N, as they must be.

## Numerical methods and accuracy (OT2.4, OT2.5)

Some equations have no exact solution by algebra. A numerical method then finds a root to a stated accuracy. You must also say how accurate the result is, and when it may be unreliable.

### Worked example 4: locating and refining a root

Show that x⁵ + x − 3 = 0 has a root near 1.13, and find it to 2 decimal places by iteration.

Let f(x) = x⁵ + x − 3. Then f(1.125) = −0.073 and f(1.135) = 0.019. The sign changes and f is continuous, so there is a root between 1.125 and 1.135. Every number in that interval rounds to 1.13, so the root is **1.13 to 2 decimal places**.

Rearrange: x⁵ = 3 − x, so x = (3 − x)^(1/5). Use xₙ₊₁ = (3 − xₙ)^(1/5) with x₀ = 1:

```
x₁ = 1.1487   x₂ = 1.1311   x₃ = 1.1332   x₄ = 1.1330
```

The values settle at 1.133, consistent with the sign change.

**Why the rearrangement matters.** The form xₙ₊₁ = 3 − xₙ⁵ also has the same fixed point, but from x₀ = 1 it gives 2, −29, 20 511 152, and diverges. A rearrangement converges near a root only if the gradient of its right-hand side has modulus below 1 there. Choose the rearrangement; do not assume any will do.

**Limits of the sign-change test.** It fails if f is not continuous. For f(x) = 1/(x − 2), f(1) = −1 and f(3) = 1, yet there is no root, only an asymptote at x = 2.

### Worked example 5: accuracy of a calculated value

A rectangular tray measures 12.4 cm by 8.3 cm, each to 1 decimal place. How accurately can its area be stated?

```
12.35 ≤ length < 12.45      8.25 ≤ width < 8.35
Smallest area ≈ 12.35 × 8.25 = 101.89
Largest area  ≈ 12.45 × 8.35 = 103.96
```

Both bounds round to 100 at 2 significant figures, so the area is **100 cm² to 2 significant figures**. The exact product 102.92 shows more figures than the data can support. Quote only the figures that are justified.

### Worked example 6: a reasoned estimate

Estimate how long a garden hose takes to fill a swimming pool 25 m long, 10 m wide and 1.5 m deep on average.

```
Volume = 25 × 10 × 1.5 = 375 m³ = 375 000 litres
Assume the hose delivers between 10 and 30 litres per minute
Time = 375 000 / 10 = 37 500 min  down to  375 000 / 30 = 12 500 min
37 500 min ≈ 26 days;   12 500 min ≈ 8.7 days
```

The pool would take **between roughly 9 and 26 days**. The honest conclusion is the order of magnitude (weeks, not hours), and the flow rate is the assumption that dominates. A good estimate states each assumption, gives a range, and says which input matters most.

## Mathematical modelling (OT3.1 to OT3.5)

The modelling process follows the same cycle: translate the situation into mathematics with simplifying assumptions (OT3.1), use the model with suitable inputs (OT3.2), interpret the outputs in context (OT3.3), then compare with reality and refine (OT3.4).

Every assumption makes the mathematics easier and changes the prediction in a known direction. Say both.

| Assumption | What it allows | Typical effect on predictions |
|---|---|---|
| Particle | Ignore size and spin | Ignores rotation and where forces act |
| Light string | Tension equal along the string | Ignores the string's weight |
| Inextensible string | Linked objects share speed and acceleration | Ignores stretching |
| Smooth surface or pulley | No friction | Overestimates acceleration |
| Uniform rod | Weight acts at the midpoint | Wrong if mass is unevenly spread |
| Constant g | Use constant-acceleration equations | Small error over large height changes |
| Unlimited growth | Exponential function fits | Overestimates once resources run out |

### Worked example 7: building, testing and refining a model

A trolley of mass 2.5 kg rests on a horizontal table. It is joined by a light inextensible string over a smooth pulley to a hanging mass of 0.5 kg. The system is released. In a trial the trolley accelerates at 1.20 m s⁻².

**Model 1 (smooth table).** Hanging mass: 0.5g − T = 0.5a. Trolley: T = 2.5a. Adding gives 0.5g = 3.0a, so a = 4.9/3.0 = 1.63 m s⁻².

**Compare.** The model predicts 1.63, but the trial gave 1.20. The model overestimates, which is the direction expected if friction was ignored.

**Model 2 (friction μ between trolley and table).** Trolley: T − μ(2.5g) = 2.5a. Combine with the hanging-mass equation: 0.5g − 3.0a = 2.5μg. With a = 1.20: 4.9 − 3.6 = 24.5μ, so **μ = 0.053**.

**Use the refined model.** Replace the hanging mass by 0.8 kg. Then 0.8g − 2.5(0.053)g = 3.3a, giving a = 1.98 m s⁻². The smooth model would have predicted 2.38 m s⁻².

**Evaluate.** μ was fitted to one trial, so new trials are needed to test it. Other assumptions (a smooth pulley, a light string) remain untested. A model is appropriate when it is accurate enough for its purpose, not when every assumption is literally true.

## Common errors

- Giving an answer without returning to the context, for example leaving a "width = 21.9" without saying what it means for the poster.
- Quoting every figure of a long decimal when the data has only 2 or 3 significant figures.
- Concluding that a sign change proves a root without checking continuity.
- Writing "the model is unrealistic" instead of naming one assumption and its effect on the prediction.
- Drawing a diagram and then not using it: unlabelled angles and unmarked unknowns defeat the purpose.
- Rounding intermediate values, which can move the final digit.
- Stopping when the model disagrees with data instead of changing an assumption and testing again.

## Next steps

Try the [practice questions](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and-practice/), then condense with the [revision notes](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and-revision-notes/). For the content these skills are applied to, see [numerical methods](/resources/aqa-a-level-mathematics-numerical-methods/) and [forces and Newton's laws](/resources/aqa-a-level-mathematics-forces-and-newtons-laws/).

## Official syllabus

Source: AQA A-level Mathematics 7357, sections 3.1.2 (OT2) and 3.1.3 (OT3), published by AQA, for first teaching 2017.
