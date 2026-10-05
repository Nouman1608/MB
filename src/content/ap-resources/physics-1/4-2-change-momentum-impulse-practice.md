---
resourceId: "mb-ap-phys1-4.2-practice"
title: "Change in Momentum and Impulse: Practice Questions (Physics 1 4.2)"
description: "Seven original Marlbridge practice questions on impulse, change in momentum with rebounds, force–time areas, momentum–time slopes, lab data analysis and a symbolic landing-force derivation."
course: "physics-1"
unit: 4
topics: ["4.2"]
resourceType: "practice-questions"
prerequisites:
  - "Momentum p = mv with signs (Topic 4.1)"
  - "Areas of rectangles and triangles; slopes of straight lines"
prerequisiteResources: ["mb-ap-phys1-4.2-study-guide"]
learningObjectives:
  - "Calculate impulse from a force–time graph and use it to find a change in velocity"
  - "Calculate a change in momentum and an average force for a rebound, including the role of weight"
  - "Find net forces from the slopes of a momentum–time graph"
  - "Analyse lab data with a straight-line graph to test the impulse–momentum theorem"
  - "Derive a symbolic expression for an average force and predict factors of change"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-4.2-study-guide", "mb-ap-phys1-4.2-revision-notes", "mb-ap-phys1-4.2-checklist"]
next: "mb-ap-phys1-4.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Which unit is equivalent to the newton-second (N·s), the unit of impulse?

- (A) kg·m/s
- (B) kg·m/s²
- (C) N/s
- (D) J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 1 N = 1 kg·m/s², so 1 N·s = 1 kg·m/s² × s = 1 kg·m/s. This is the unit of momentum, as the impulse–momentum theorem J = Δp requires.

- (B) is the newton itself, the unit of force, not force × time.
- (C) divides by time instead of multiplying. It would describe how fast a force changes.
- (D) is the joule, N·m: force × **distance**, the unit of work and energy.
</details>

## Question 2 (multiple choice · core)

Take **+x in the direction of a kick**. A 0.15 kg ball at rest is kicked. The net force on it rises in a straight line from 0 to 40 N and falls back to 0 in a straight line, a symmetric triangle lasting 0.030 s in total. What is the ball's speed just after the kick?

- (A) 4.0 m/s
- (B) 8.0 m/s
- (C) 0.60 m/s
- (D) 0.090 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Impulse = area of the triangle = ½ × 0.030 s × 40 N = 0.60 N·s. Since the ball starts at rest, Δp = mv = 0.60 kg·m/s, so v = 0.60 ÷ 0.15 = 4.0 m/s.

- (B) uses the peak force for the whole time, 40 × 0.030 = 1.2 N·s. The force is only at its peak for an instant.
- (C) is the impulse in N·s, not a speed. The mass has been left out.
- (D) multiplies the impulse by the mass instead of dividing.
</details>

## Question 3 (multiple choice · core)

Two identical eggs are dropped from the same height. One lands on a foam pad and survives; the other lands on concrete and breaks. Which statement best explains the difference?

- (A) The foam gives the egg a smaller change in momentum, so the force on it is smaller.
- (B) The change in momentum is the same, but it takes place over a longer time on the foam, so the average force is smaller.
- (C) The change in momentum is the same, but the foam exerts a smaller impulse on the egg.
- (D) The foam reduces the egg's speed before impact, so its momentum is smaller when it lands.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both eggs arrive at the same speed and both stop, so Δp is the same. By J = F_avg Δt = Δp, the same impulse spread over a longer stopping time needs a smaller average force.

- (A) is wrong because both eggs go from the same arrival speed to rest: Δp is equal.
- (C) contradicts itself. The impulse equals the change in momentum, so equal Δp means equal impulse.
- (D) is wrong because the egg arrives at the pad with the same speed as at the concrete; the pad only acts once contact begins.
</details>

## Question 4 (calculation · core)

Take **+y upward**. A 0.40 kg ball falls onto a hard floor. It arrives moving downward at 5.0 m/s and leaves moving upward at 3.0 m/s. It is in contact with the floor for 0.020 s.

(a) Calculate the impulse of the net force on the ball during contact.
(b) Calculate the average net force on the ball.
(c) Calculate the average force exerted by the floor on the ball. Give this answer to 3 significant figures.

<details>
<summary>Worked solution</summary>

**(a)** v₀ = −5.0 m/s, v = +3.0 m/s. J = Δp = 0.40 × (3.0 − (−5.0)) = **+3.2 N·s** (upward).

**(b)** F_net = J ÷ Δt = 3.2 ÷ 0.020 = **+160 N** (upward).

**(c)** During contact the floor pushes up and gravity pulls down: F_net = F_floor − mg. So F_floor = 160 + 0.40 × 9.8 = 160 + 3.92 = **164 N** upward.

Suggested mark points (4): 1 for opposite signs on the two velocities; 1 for +3.2 N·s; 1 for 160 N; 1 for adding the weight to get 164 N.

Common error: using speeds only, 0.40 × (3.0 − 5.0) = −0.80 N·s. This gives a force of −40 N, the wrong size and the wrong direction.
</details>

## Question 5 (graph · core)

Take **+x to the right**. A 2.0 kg cart's momentum–time graph is made of three straight segments:

- from (0 s, 0) to (2.0 s, +6.0 kg·m/s),
- flat at +6.0 kg·m/s from 2.0 s to 4.0 s,
- from (4.0 s, +6.0 kg·m/s) to (5.0 s, −2.0 kg·m/s).

(a) Find the net force on the cart in each of the three intervals.
(b) Sketch the net force–time graph from 0 to 5.0 s.
(c) Find the cart's velocity at t = 3.0 s and at t = 5.0 s.
(d) Use your force–time graph to find the total impulse from 0 to 5.0 s, and check it against the momentum–time graph.

<details>
<summary>Worked solution</summary>

**(a)** Net force = slope of the momentum–time graph.
0–2.0 s: (6.0 − 0) ÷ 2.0 = **+3.0 N**. 2.0–4.0 s: **0**. 4.0–5.0 s: (−2.0 − 6.0) ÷ 1.0 = **−8.0 N**.

**(b)** Three horizontal segments: +3.0 N from 0 to 2.0 s, 0 from 2.0 to 4.0 s, and −8.0 N from 4.0 to 5.0 s (below the time axis).

**(c)** v = p ÷ m. At 3.0 s: 6.0 ÷ 2.0 = **+3.0 m/s**. At 5.0 s: −2.0 ÷ 2.0 = **−1.0 m/s** (moving left).

**(d)** Areas: 3.0 × 2.0 = +6.0 N·s; 0; −8.0 × 1.0 = −8.0 N·s. Total **−2.0 N·s**. Momentum–time graph: Δp = −2.0 − 0 = −2.0 kg·m/s. They agree, as J = Δp requires.

Suggested mark points (5): 1 for +3.0 N and 0 in the first two intervals; 1 for −8.0 N in the last; 1 for a sketch of three flat segments with the last one below the axis; 1 for both velocities in (c); 1 for (d) with the area below the axis counted as negative and the comparison made.
</details>

## Question 6 (experimental design and analysis · stretch)

A student wants to test the impulse–momentum theorem using a cart of **unknown mass** on a level track with very low friction. Available equipment: a force sensor, a motion sensor, and a spring plunger that can give pushes of different strengths.

(a) Describe a procedure that collects the data needed. Say what is measured and how.
(b) The student's results are below. Plot a graph that should be a straight line through the origin if the theorem holds, and use it to find the cart's mass.

| Impulse J (N·s) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| Change in velocity Δv (m/s) | 0.39 | 0.81 | 1.19 | 1.62 | 1.98 |

(c) State whether the data support the theorem, with a reason.
(d) Describe one way in which friction, if present, would show up on the graph.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Mount the force sensor at the front of the cart so the plunger pushes through it. Place the motion sensor at the end of the track. For each run, record force against time during the push, and the cart's velocity just before and just after. Find J as the area under the force–time graph and Δv as v − v₀. Repeat with different plunger settings, and repeat each setting a few times.

**(b)** Since J = mΔv, Δv = (1/m)J. Plot **Δv (vertical) against J (horizontal)**. The points lie close to a straight line through the origin. A best-fit line has slope about **2.0 m/s per N·s** (2.0 kg⁻¹). Mass = 1 ÷ slope = **0.50 kg**.

**(c)** The data **support** the theorem. The points lie close to a straight line through the origin (each Δv ÷ J ratio is between about 1.95 and 2.03 kg⁻¹), so Δv is proportional to J, as J = mΔv predicts for a constant mass.

**(d)** Friction would add a small impulse in the opposite direction during each run, so Δv would be slightly smaller than J ÷ m. The points would fall below the expected line, so the best-fit line would have a smaller slope (giving a mass that is too large) or would not pass through the origin.

| Point | What earns it |
|---|---|
| 1 | Measures force against time (for the area) and velocities before and after |
| 1 | Varies the push and repeats runs |
| 1 | Plots Δv against J (or J against Δv) and explains why it should be straight |
| 1 | Mass 0.50 kg from the slope, with working |
| 1 | Supports the theorem **because** the line is straight and passes through the origin |
| 1 | A correct description of how friction would affect the graph |

**Alternative method.** Plotting J against Δv gives a slope equal to m directly (about 0.50 kg). This earns the same credit.
</details>

## Question 7 (constructed response · stretch)

A box of mass m is dropped from rest from height h above the floor. It hits the floor and stops, without bouncing, in a time Δt. Air resistance is negligible. Take **+y upward**.

(a) Derive an expression for the average force exerted **by the floor** on the box during the stop, in terms of m, g, h and Δt.
(b) The box is dropped from 4 times the height, onto a softer surface that doubles the stopping time. Predict how the average **net** force on the box during the stop changes. Justify your answer.
(c) A student says: "Dropping from 4 times the height always means 4 times the stopping force." Evaluate the claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Speed on arrival from kinematics: v² = 2gh, so v₀ = −√(2gh) (downward). Final velocity 0.
Δp = m(0 − (−√(2gh))) = m√(2gh).
F_net = Δp ÷ Δt = m√(2gh) ÷ Δt (upward).
F_net = F_floor − mg, so **F_floor = m√(2gh) ÷ Δt + mg**.

**(b)** With 4h, the arrival speed is √4 = 2 times larger, so Δp doubles. With 2Δt, the time doubles. F_net = Δp ÷ Δt is multiplied by 2 ÷ 2 = 1: the average net force is **unchanged**.

**(c)** The claim is **wrong**. Arrival speed depends on √h, so 4 times the height gives only 2 times the speed and 2 times the change in momentum. Even with the same stopping time, the average net force only doubles, and a longer stopping time reduces it further.

| Point | What earns it |
|---|---|
| 1 | Arrival speed √(2gh) |
| 1 | Δp = m√(2gh) and F_net = Δp ÷ Δt |
| 1 | Adds mg to get the floor force, with the reason (weight acts down during contact) |
| 1 | (b) Δp ×2 and Δt ×2, so F_net unchanged |
| 1 | (c) Rejects the claim, citing the √h dependence |

An answer to (a) that gives only m√(2gh) ÷ Δt earns the first two points but not the third: that is the net force, not the floor force.
</details>

## How did you do?

- **Q1 wrong:** re-read "Impulse" in the [study guide](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-study-guide/).
- **Q2 wrong:** go back to "Impulse as an area", Figure 1 and Worked example 1.
- **Q3 or Q7 incomplete:** revisit Worked example 3. The same Δp over a longer time gives a smaller average force.
- **Q4 wrong:** work through Worked example 2 and Worked example 3; watch the signs and the weight.
- **Q5 wrong:** see "Net force as a slope" and Figure 2.
- **Q6 incomplete:** see "Testing the theorem in the lab". Your reasoning needs the straight line **through the origin**.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-checklist/).
