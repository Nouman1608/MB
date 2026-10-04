---
resourceId: "mb-ap-phys1-1.3-practice"
title: "Representing Motion: Practice Questions (Physics 1 1.3)"
description: "Seven original Marlbridge practice questions on motion diagrams, slopes and areas of motion graphs, constant-acceleration equations, free fall and changing acceleration, with worked solutions."
course: "physics-1"
unit: 1
topics: ["1.3"]
resourceType: "practice-questions"
prerequisites:
  - "Displacement, velocity and acceleration with signs (Topic 1.2)"
prerequisiteResources: ["mb-ap-phys1-1.3-study-guide"]
learningObjectives:
  - "Interpret a motion diagram and an acceleration–time graph"
  - "Compare the motion of two objects in free fall"
  - "Choose and use a constant-acceleration equation"
  - "Translate a narrative into velocity–time and acceleration–time graphs and use their areas"
  - "Derive a symbolic expression and use it to evaluate a claim"
  - "Reason about motion with changing acceleration without the constant-acceleration equations"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-1.3-study-guide", "mb-ap-phys1-1.3-revision-notes", "mb-ap-phys1-1.3-checklist"]
next: "mb-ap-phys1-1.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Use it for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears (exam questions that need a number use 10 m/s², and 9.8 m/s² is also accepted). Ignore air resistance. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A motion diagram records a puck sliding across a rough floor. Its positions at equal 0.50 s intervals are:

| t (s) | 0 | 0.50 | 1.00 | 1.50 | 2.00 |
|---|---|---|---|---|---|
| x (m) | 0 | 1.8 | 3.2 | 4.2 | 4.8 |

Which statement best describes the puck's motion?

- (A) v_x is positive and a_x is positive, so it speeds up.
- (B) v_x is positive and a_x is negative and constant, so it slows down.
- (C) v_x is negative and a_x is positive, because the gaps get smaller.
- (D) v_x is positive and a_x is negative, with a_x getting larger in size.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** x increases every interval, so v_x is positive. The gaps are 1.8, 1.4, 1.0 and 0.6 m, so the puck slows down. The average velocities are 3.6, 2.8, 2.0 and 1.2 m/s. Each falls by 0.8 m/s per 0.50 s, so a_x = −1.6 m/s² in every interval: negative and constant.

- (A) reads the increasing positions as increasing speed. Speed shows in the *gaps*, not in the positions.
- (C) confuses shrinking gaps with moving backwards. The puck moves left only if x decreases.
- (D) has the right signs, but the gaps shrink by the same 0.4 m each time, so the acceleration is constant, not growing.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**. A drone moving along a straight line has v_x = −2.0 m/s at t = 0. Its acceleration–time graph is made of two flat sections: a_x = +3.0 m/s² from 0 to 2.0 s, then a_x = −1.0 m/s² from 2.0 s to 5.0 s. What is its velocity at t = 5.0 s?

- (A) +3.0 m/s
- (B) +1.0 m/s
- (C) +7.0 m/s
- (D) +4.0 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The area under an a_x–t graph is the change in velocity. Area from 0 to 2.0 s: 3.0 × 2.0 = +6.0 m/s. Area from 2.0 to 5.0 s: −1.0 × 3.0 = −3.0 m/s. Total Δv_x = +3.0 m/s. Final velocity = −2.0 + 3.0 = **+1.0 m/s**.

- (A) is Δv_x only. It forgets to add the initial velocity of −2.0 m/s.
- (C) counts the area below the axis as positive: −2.0 + 6.0 + 3.0.
- (D) is the velocity at 2.0 s. It stops before the second section of the graph.
</details>

## Question 3 (multiple choice · core)

Take **+y upward**. From the same window, at the same instant, ball P is dropped from rest and ball Q is thrown straight down at 5.0 m/s. Which statement is correct?

- (A) Q has a larger acceleration than P because it was thrown.
- (B) During the first 1.0 s, the velocity of each ball changes by −9.8 m/s.
- (C) Q's velocity–time graph is steeper than P's.
- (D) P and Q reach the ground at the same time because they have the same acceleration.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Once released, both balls have a_y = −9.8 m/s². The area under each a_y–t graph for 1.0 s is −9.8 m/s, so each velocity changes by the same amount. Q's velocity goes from −5.0 to −14.8 m/s; P's goes from 0 to −9.8 m/s.

- (A) mixes up initial velocity with acceleration. The throw sets v_y0; gravity alone sets a_y.
- (C) is wrong because the slope of a v_y–t graph is the acceleration, which is the same for both. The two lines are parallel, with Q's starting 5.0 m/s lower.
- (D) ignores the initial velocity. Q is already moving down at the start, so it covers the same distance in less time.
</details>

## Question 4 (calculation · core)

Take **+x in the direction of travel**. A cyclist speeds up with constant acceleration from 3.0 m/s to 9.0 m/s over a distance of 48 m. Calculate (a) the acceleration and (b) the time taken.

<details>
<summary>Worked solution</summary>

**(a)** Time is not known and not needed, so use the equation that leaves out t:
v_x² = v_x0² + 2a_x(x − x₀) → 81 = 9.0 + 2a_x(48) → a_x = 72 ÷ 96 = **+0.75 m/s²**.

**(b)** v_x = v_x0 + a_x t → t = (9.0 − 3.0) ÷ 0.75 = **8.0 s**.

**Check.** For constant acceleration, Δx = ½(v_x0 + v_x)t = ½(3.0 + 9.0)(8.0) = 48 m. ✓

Suggested mark points (3): 1 for choosing an equation without t (or another valid route); 1 for 0.75 m/s² with unit; 1 for 8.0 s.

Common error: finding the average velocity 6.0 m/s and then dividing it by a time that has not been found yet. Another valid route is t = 2Δx ÷ (v_x0 + v_x) = 96 ÷ 12 = 8.0 s first, then a_x = 6.0 ÷ 8.0.
</details>

## Question 5 (graph · core)

Take **+y upward**, origin at the ground floor. A lift starts from rest. It speeds up uniformly to 3.0 m/s in 2.0 s, moves at a steady 3.0 m/s for 4.0 s, then slows uniformly to rest in 2.0 s.

(a) Sketch the v_y–t graph for the 8.0 s trip, with values on both axes.
(b) Sketch the matching a_y–t graph, with values.
(c) Find the height of the lift at the end of the trip.
(d) Describe the shape of the y–t graph in each stage.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three straight segments: from (0 s, 0) up to (2.0 s, 3.0 m/s); flat to (6.0 s, 3.0 m/s); down to (8.0 s, 0).

**(b)** Slopes of the v_y–t segments: 3.0 ÷ 2.0 = +1.5 m/s² for 0–2.0 s; 0 for 2.0–6.0 s; −3.0 ÷ 2.0 = −1.5 m/s² for 6.0–8.0 s. The a_y–t graph is three flat sections at +1.5, 0 and −1.5 m/s². Check: the areas +3.0 m/s and −3.0 m/s cancel, so the lift ends at rest. ✓

**(c)** Area under v_y–t: ½ × 2.0 × 3.0 = 3.0 m; 4.0 × 3.0 = 12 m; ½ × 2.0 × 3.0 = 3.0 m. Total **18 m** above the ground floor.

**(d)** 0–2.0 s: curving upward, getting steeper (y = 3.0 m at 2.0 s). 2.0–6.0 s: straight line with slope 3.0 m/s (y = 15 m at 6.0 s). 6.0–8.0 s: still rising but flattening, until it is level at 18 m.

| Point | What earns it |
|---|---|
| 1 | v_y–t sketch with three straight segments and correct values |
| 1 | a_y–t sketch with +1.5, 0 and −1.5 m/s² |
| 1 | Uses areas (or kinematic equations stage by stage) to find each displacement |
| 1 | 18 m with unit |
| 1 | y–t shape: steepening, straight, flattening, with no backward section |

A common error is to draw the y–t graph going *down* in the last stage because a_y is negative. The lift is still moving up (v_y > 0), so y still increases.
</details>

## Question 6 (constructed response · stretch)

Take **+x in the direction of travel**. A driver sees a hazard. For a reaction time t_r the car keeps moving at its initial speed v₀. Then the brakes give a constant acceleration of size a until the car stops.

(a) Derive an expression for the total stopping distance d in terms of v₀, t_r and a.
(b) Use t_r = 0.80 s and a = 6.0 m/s² to find d for v₀ = 15 m/s and for v₀ = 30 m/s.
(c) A student claims: "Doubling the speed doubles the stopping distance." Evaluate this claim using your answers.
(d) Sketch the v_x–t graph for the 15 m/s case and state what its area represents.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Reaction stage (constant velocity): d₁ = v₀t_r.
Braking stage (a_x = −a, final velocity 0): 0 = v₀² + 2(−a)d₂, so d₂ = v₀² ÷ (2a).
**d = v₀t_r + v₀² / (2a)**.

**(b)** v₀ = 15 m/s: d = 15 × 0.80 + 15² ÷ 12 = 12 + 18.75 = **31 m**.
v₀ = 30 m/s: d = 30 × 0.80 + 30² ÷ 12 = 24 + 75 = **99 m**.

**(c)** The claim is **incorrect**. The ratio is 99 ÷ 30.75 ≈ 3.2, not 2. The reaction distance is proportional to v₀, so it doubles (12 m → 24 m). The braking distance is proportional to v₀², so it quadruples (18.75 m → 75 m). The total grows by a factor between 2 and 4.

**(d)** A flat line at 15 m/s from 0 to 0.80 s, then a straight line down to 0 at 0.80 + 15 ÷ 6.0 = 3.3 s. The area under it (rectangle 12 m plus triangle 18.75 m) is the stopping distance.

| Point | What earns it |
|---|---|
| 1 | Reaction distance v₀t_r |
| 1 | Braking distance v₀² ÷ (2a) from a constant-acceleration equation with correct signs |
| 1 | 31 m and 99 m |
| 1 | Rejects the claim **because** one term scales with v₀ and the other with v₀² |
| 1 | Sketch with flat then falling straight segments, area identified as d |

Alternative for (a): use the area of the v_x–t graph directly, v₀t_r + ½v₀(v₀ ÷ a). This earns full credit.
</details>

## Question 7 (constructed response · stretch)

Take **+x forward**. A car starts from rest at t = 0. Its acceleration is not constant: the a_x–t graph is a straight line falling from 4.0 m/s² at t = 0 to zero at t = 4.0 s. After that, a_x stays zero.

(a) Find the car's velocity at t = 4.0 s.
(b) Describe the shape of the v_x–t graph from 0 to 6.0 s.
(c) A student says: "The average acceleration over the first 4.0 s is 2.0 m/s², so the displacement is ½ × 2.0 × 4.0² = 16 m." Evaluate this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The area under the a_x–t graph is a triangle: ½ × 4.0 s × 4.0 m/s² = 8.0 m/s. Starting from rest, **v_x = +8.0 m/s**.

**(b)** From 0 to 4.0 s the graph rises from 0 to 8.0 m/s. It is steepest at the start (slope 4.0 m/s²) and gets less steep, curving over until it is flat at t = 4.0 s, where a_x = 0. From 4.0 to 6.0 s it is a horizontal line at 8.0 m/s.

**(c)** The claim is **incorrect**. The equation x = x₀ + v_x0 t + ½a_x t² is valid only for constant acceleration. Using the average value of 2.0 m/s² amounts to replacing the real v_x–t curve with a straight line from 0 to 8.0 m/s, whose area is 16 m. The real curve rises faster at the start, so it lies **above** that straight line at every time between 0 and 4.0 s. The real area, and so the real displacement, is **more than 16 m**. It is less than 32 m, because v_x stays below 8.0 m/s until t = 4.0 s.

| Point | What earns it |
|---|---|
| 1 | 8.0 m/s from the area under the a_x–t graph |
| 1 | v_x–t rising, slope decreasing, flat from 4.0 s |
| 1 | States the equation needs constant acceleration |
| 1 | Compares the curve with the straight line (or the areas) to conclude the displacement is more than 16 m |

No numerical value of the true displacement is expected. This course asks you to reason about changing acceleration qualitatively.
</details>

## How did you do?

- **Q1 wrong:** re-read "Motion diagrams" and Figure 1 in the [study guide](/advanced-course-resources/physics-1/1-3-representing-motion-study-guide/).
- **Q2 or Q5 wrong:** revisit "Graphs: slopes and areas" and Figure 2.
- **Q3 wrong:** go back to "Free fall near Earth's surface" and Worked example 2.
- **Q4 or Q6 wrong:** work through "Where the constant-acceleration equations come from", Worked example 1 and Worked example 3.
- **Q7 incomplete:** read "When acceleration is not constant". Your answer needs the *why*: a curve above a straight line has more area.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/1-3-representing-motion-checklist/).
