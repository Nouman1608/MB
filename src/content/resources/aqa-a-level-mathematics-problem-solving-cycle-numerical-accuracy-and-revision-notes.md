---
title: "AQA A-level Mathematics: Problem Solving, Accuracy and Modelling (7357) -- Revision Notes"
seoTitle: "AQA A-level Maths Problem Solving Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for AQA A-level Mathematics OT2 and OT3: problem-solving cycle, numerical methods, accuracy, diagrams and modelling assumptions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Quick recall for outcomes OT2.1 to OT2.7 and OT3.1 to OT3.5 of the AQA A-level Mathematics (7357) specification, for first teaching 2017. The [study guide](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and/), has the full explanations, and the [practice questions](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and-practice/). The [course hub](/boards/aqa/a-level/mathematics/), the [printable checklist](/checklists/aqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/) help you plan. For the argument and proof theme, see the [overarching themes notes](/resources/aqa-a-level-mathematics-themes-revision-notes/).

## The two cycles in one table

| Stage | Problem solving (OT2.6) | Modelling (OT3) |
|---|---|---|
| 1 | Specify the problem | Translate the situation, state simplifying assumptions (OT3.1) |
| 2 | Collect information | Choose inputs and use the model (OT3.2) |
| 3 | Process and represent | Interpret outputs in context (OT3.3) |
| 4 | Interpret results | Compare with reality, refine, judge appropriateness (OT3.4) |
| Repeat | Interpretation may show you must go round again | Refine the assumptions and run the model again |

## Method in steps: an unstructured problem (OT2.1 to OT2.3)

1. Underline what is wanted and what is fixed.
2. Name the variables with units. Draw a diagram.
3. Spot the structure: optimise, rate of change, triangle, equilibrium, sequence.
4. Write one equation or expression in one variable. Note its domain.
5. Solve, and check the type of any stationary point.
6. Answer the original question in a sentence, with units.
7. Test the answer: sign, size, units, and whether it respects the domain.

**Quick reminder.** A taxi model says cost = 8 + 1.6d pounds for d km. For 20 km it predicts £40. If the actual fare was £44, the model underestimates. Refine by naming a missing feature (waiting time, a minimum charge), adjust the model, and test it on fresh data.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and--01-problem-solving-cycle.webp" width="900" height="840" alt="A loop of four boxes: Specify, Collect, Process, Interpret, joined by clockwise arrows. A dashed arrow from Interpret back to Specify says that if the answer fails you go round again. Each box shows what that stage was in the poster example." loading="lazy">
  <figcaption>The cycle has four stages and interpretation may send you round again.</figcaption>
</figure>


## Diagrams (OT2.7)

- Bearings: three figures, clockwise from north. A change of direction of θ° gives an interior angle of 180° − θ° at the turning point.
- Forces: draw every force on the body, with the angle stated to a named line. Resolve along two perpendicular directions.
- Vectors, triangles and graphs: mark known values on the diagram before calculating.
- Resolving a force F at α° to the horizontal: horizontal component F cos α, vertical component F sin α. For 10 N at 40°, these are 7.66 N and 6.43 N.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and--03-bearings-diagram.webp" width="900" height="880" alt="A boat goes 11 km on 035 degrees then 8 km on 120 degrees. Bearings are shown as arcs clockwise from north lines. The interior angle at B is 95 degrees, the distance AC is 14.2 km and the bearing of C from A is 069 degrees." loading="lazy">
  <figcaption>Bearings are measured clockwise from north; the turn of 85 degrees leaves an interior angle of 95 degrees at B.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations--03-staircase-cobweb.webp" width="900" height="1270" alt="Four cobweb diagrams with g-prime at the root 0.358 (staircase in), -0.215 (cobweb in), 2.795 (staircase out) and -1.217 (cobweb out). The iteration converges when |g-prime| &lt; 1." loading="lazy">
  <figcaption>Where the curve y = g(x) meets y = x is the root; the path converges when the curve is flatter than the line there.</figcaption>
</figure>


## Numerical methods (OT2.4)

| Idea | Rule |
|---|---|
| Change of sign | If f is continuous and f(a), f(b) have opposite signs, a root lies between a and b |
| Accuracy to n d.p. | Show the sign change across an interval whose ends both round to the same n-decimal-place value |
| Iteration | Rearrange f(x) = 0 to x = g(x), then use xₙ₊₁ = g(xₙ) |
| Convergence | Near the root, a rearrangement converges if the gradient of g has modulus below 1 |
| Failure of the sign test | Discontinuities, such as an asymptote, can change the sign with no root |

**Check yourself on the trap.** tan 1 = 1.557 and tan 2 = −2.185, so tan x changes sign between 1 and 2, but there is no root there. The change is at the asymptote x = π/2.

**Worked reminder.** For x³ − x − 3 = 0, rearrange to x = (x + 3)^(1/3). From x₀ = 1.5: x₁ = 1.651, x₂ = 1.669, x₃ = 1.671, settling at 1.672. The values rise towards the root from below.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and--05-root-sign-change-iteration.webp" width="900" height="1290" alt="The graph of x^5 + x - 3 changes sign between 1.125 and 1.135 so the root is 1.13 to 2 decimal places. A cobweb of x(n+1) = (3 - x(n))^(1/5) from 1 settles on the root, whereas x(n+1) = 3 - x(n)^5 runs 1, 2, -29, 20 511 152 and diverges." loading="lazy">
  <figcaption>A sign change locates the root, and only a rearrangement whose gradient has modulus below 1 near the root converges.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations--02-sign-change-fails.webp" width="900" height="1000" alt="Three graphs: 1/(x-2) on 1 to 3 changes sign across an asymptote with no root; (2x-3)^2 on 1 to 2 touches the axis with equal signs at the ends; (x-1)(x-2)(x+3) on 0.5 to 2.5 has two roots but positive ends." loading="lazy">
  <figcaption>A sign change proves a root only if the function is continuous, and no sign change proves nothing.</figcaption>
</figure>


## Accuracy and estimation (OT2.5)

- **Bounds from rounding.** A value given to 1 decimal place lies within ±0.05 of the stated value. Sums use lower with lower and upper with upper. Products of positive quantities do the same.
- **Quote only justified figures.** If the lower and upper bounds round to the same value at n significant figures, give that value.
- **Reasoned estimate.** Round to one significant figure, state assumptions, give a range, name the input that matters most.
- **Do not round early.** Round once, at the end, to the accuracy the data supports.

**Worked reminder.** A frame is 6.3 cm by 4.8 cm, each to 1 d.p. The perimeter lies between 2(6.25 + 4.75) = 22.0 cm and 2(6.35 + 4.85) = 22.4 cm. Both round to 22 at 2 significant figures, so the perimeter is **22 cm to 2 significant figures**.

**Why early rounding is dangerous.** 1000(√2 − 1.41) = 4.21 to 3 significant figures. Rounding √2 to 1.41 first would give 0.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and--06-tray-area-bounds.webp" width="900" height="960" alt="A tray of 12.4 cm by 8.3 cm, each to 1 d.p., has area between 101.89 and 103.96 square centimetres. All of that range rounds to 100 at 2 significant figures, so quoting 102.92 claims too much." loading="lazy">
  <figcaption>Both area bounds round to 100, so the area is 100 cm² to 2 significant figures.</figcaption>
</figure>


## Modelling assumptions (OT3.5)

| Assumption | Use | Direction of error if untrue |
|---|---|---|
| Particle | Ignore size and rotation | Rotation, or where a force acts, is lost |
| Light | String or rod has no mass | Tension varies along a heavy string |
| Inextensible | Constant length | Linked parts could move differently |
| Smooth | No friction | Predicted speed or acceleration too high |
| Uniform | Weight at the centre | Moment calculations shift |
| Constant g | Same acceleration downward | Small error over a very large drop |
| Air resistance negligible | Use constant-acceleration equations | Range, speed and height overestimated |
| Unlimited growth | Exponential model | Overestimates once a limit is reached |

**To evaluate a model (OT3.4):** compare predictions with data, find the largest disagreement, link it to a named assumption, say how to change it, then test the new version on new data. A model is appropriate when it is accurate enough for its purpose over the range where it is used.

## Interpreting outputs (OT2.3, OT3.3)

- Restate the number with its meaning and units: not "t = 8.33" but "the exponential model overtakes the linear model after about 8.3 months".
- Reject outputs that break the context, such as a negative length, a probability above 1 or a time before the start.
- Say how far the result can be trusted: inside the range of the data, or an extrapolation beyond it.
- If the output is implausible, return to the assumptions and run the cycle again.

**Worked reminder.** A crate of mass m on a rough horizontal floor is pulled by a horizontal force P. With friction coefficient μ, the acceleration is a = (P − μmg)/m. If you wrongly assume the floor is smooth, you predict a = P/m, which is larger by μg. A measured acceleration below P/m is therefore consistent with friction, and the gap lets you estimate μ.

## Must-know distinctions

- **Specify vs interpret.** Specify fixes the question before you start. Interpret restates the answer in context afterwards.
- **Limitation vs error.** A limitation is a known restriction of a model. An error is a mistake in the working.
- **Exact vs numerical.** An analytic solution is an exact expression; a numerical method gives a value to a stated accuracy.
- **Checking vs proving.** Matching one data point checks a model but does not prove it is right.

## Quick self-test

1. Put these in order: interpret results, collect information, process and represent, specify the problem.
2. Two lengths are 6.3 cm and 4.8 cm, each to 1 d.p. Give the perimeter of the rectangle to a justified accuracy.
3. Why does tan x change sign between x = 1 and x = 2 without a root?
4. For x³ − x − 3 = 0 with xₙ₊₁ = (xₙ + 3)^(1/3) and x₀ = 1.5, find x₁ and x₂ to 3 d.p.
5. Estimate the number of seconds in a year, as a power of ten with one significant figure.
6. Resolve a force of 10 N acting at 40° above the horizontal.
7. A walker goes 5 km on 060°, then 7 km on 150°. How far from the start?
8. A skater on ice is modelled as a particle on a smooth surface. State two things this ignores.
9. State one limitation of using N = 500e^(0.2t) to predict a population for large t.
10. Find 1000(√2 − 1.41) to 3 s.f. and say what goes wrong if √2 is first rounded to 1.41.

### Answers

1. Specify the problem, collect information, process and represent, interpret results (then repeat if needed).
2. Perimeter lies between 22.0 and 22.4 cm, so **22 cm to 2 s.f.**
3. The change of sign comes from the asymptote at x = π/2 (tan 1 = 1.557, tan 2 = −2.185), where tan is discontinuous.
4. **x₁ = 1.651, x₂ = 1.669.**
5. 365 × 24 × 3600 = 31 536 000, which is about **3 × 10⁷ seconds**.
6. **7.66 N horizontally and 6.43 N vertically.**
7. The turn is 90°, so the interior angle is 90°. Distance = √(25 + 49) = √74 = **8.60 km**.
8. Any two: skater size or shape, rotation, friction with the ice, air resistance.
9. The model grows without limit, but real resources are finite, so it overestimates for large t.
10. **4.21.** Rounding to 1.41 first gives 0, losing all the information.

## Where marks are usually lost

- Writing "the model is unrealistic" with no named assumption and no direction of error.
- Quoting an answer to more figures than the data supports.
- Claiming a root from a sign change without noting the function is continuous on the interval.
- Using a rearrangement that diverges, then reporting the last value anyway.
- Leaving an optimisation answer as a number without stating what it represents, or with the wrong units.
- Failing to test a stationary point, or ignoring the domain.
- Drawing a force diagram with missing forces or unlabelled angles.
- Rounding intermediate results, so the final digit is out.
- Treating the first pass as final when the result is implausible and the cycle should be repeated.

## Official syllabus

Source: AQA A-level Mathematics 7357, sections 3.1.2 (OT2) and 3.1.3 (OT3), published by AQA, for first teaching 2017.
