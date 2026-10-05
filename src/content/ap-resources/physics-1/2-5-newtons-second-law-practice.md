---
resourceId: "mb-ap-phys1-2.5-practice"
title: "Newton’s Second Law: Practice Questions (Physics 1 2.5)"
description: "Seven original Marlbridge practice questions on net force, a = ΣF / m, system choice, contact forces, force–acceleration data and symbolic derivations, with worked solutions and suggested mark points."
course: "physics-1"
unit: 2
topics: ["2.5"]
resourceType: "practice-questions"
prerequisites:
  - "Drawing free-body diagrams and adding forces with signs along an axis"
prerequisiteResources: ["mb-ap-phys1-2.5-study-guide"]
learningObjectives:
  - "Find accelerations and forces with a = ΣF / m, using correct signs and directions"
  - "Predict factors of change in acceleration from changes in force and mass"
  - "Choose a system to find an acceleration or an internal contact force"
  - "Process force and acceleration data into a straight-line graph and find a mass"
  - "Derive and evaluate symbolic expressions when forces act at an angle"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-2.5-study-guide", "mb-ap-phys1-2.5-revision-notes", "mb-ap-phys1-2.5-checklist"]
next: "mb-ap-phys1-2.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes. Use them for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Take **+x to the east**. Two horizontal forces act on a 5.0 kg box on a frictionless floor: 30 N east and 12 N west. What is the box’s acceleration?

- (A) 8.4 m/s² east
- (B) 6.0 m/s² east
- (C) 3.6 m/s² east
- (D) 2.4 m/s² west

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** First find the net force: ΣF_x = +30 N − 12 N = +18 N. Then a_x = 18 N ÷ 5.0 kg = +3.6 m/s², which is east, the direction of the net force.

- (A) adds the sizes of the two forces (42 N) as if they pointed the same way.
- (B) uses only the 30 N force and ignores the 12 N force.
- (D) uses only the 12 N force. The smaller force cannot set the direction of the acceleration.
</details>

## Question 2 (multiple choice · core)

A net force acting on a cart gives it an acceleration a. The net force is then halved and the cart is loaded so that its mass is three times as large. What is the new acceleration?

- (A) a/6
- (B) 2a/3
- (C) 3a/2
- (D) 6a

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** a_new / a_old = (½ΣF ÷ 3m) ÷ (ΣF ÷ m) = ½ × ⅓ = 1/6.

- (B) treats acceleration as inversely proportional to force, so halving the force doubles a (× 2 instead of × ½). The mass part (÷ 3) is right.
- (C) multiplies ½ by 3, as if a larger mass gave a larger acceleration. More mass means less acceleration.
- (D) inverts both relationships (3 ÷ ½). It is the reciprocal of the correct factor.
</details>

## Question 3 (multiple choice · core)

Take **+x to the north**. A delivery drone flies due north at a constant height. Its speed is decreasing. Which statement about the net force on the drone is correct?

- (A) The net force points north, the direction of motion.
- (B) The net force points south.
- (C) The net force is zero, because the height is constant.
- (D) The net force points straight up, to hold the drone in the air.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The drone moves north (v_x positive) and slows down, so its acceleration points south (a_x negative). The second law says the net force points the same way as the acceleration: south.

- (A) assumes force is needed in the direction of motion. That is the pre-Newton idea; force sets the acceleration, not the velocity.
- (C) is right only for the vertical direction. Forces balance vertically but not horizontally.
- (D) confuses one force (the upward push of the air on the rotors) with the net force. Vertically, that push balances gravity.
</details>

## Question 4 (calculation · core)

Take **+y upward**. A crane lifts a 400 kg crate, starting from rest. The cable exerts an upward force of 4300 N on the crate. Ignore air resistance.

(a) Draw a free-body diagram for the crate.
(b) Calculate the crate’s acceleration.
(c) Calculate the crate’s speed after 4.0 s and how far it has risen.

<details>
<summary>Worked solution</summary>

**(a)** A dot with two separate arrows: an upward arrow labelled cable tension, T = 4300 N, exerted by the cable; a slightly shorter downward arrow labelled gravitational force, F_g = mg = 3920 N, exerted by Earth.

**(b)** ΣF_y = T − mg = 4300 N − (400 kg)(9.8 m/s²) = 4300 − 3920 = 380 N.
a_y = 380 N ÷ 400 kg = **+0.95 m/s²** (upward).

**(c)** v_y = 0 + (0.95)(4.0) = **3.8 m/s**; Δy = ½ (0.95)(4.0)² = **7.6 m**.

Suggested mark points (4): 1 for a diagram with exactly two labelled forces, the upward one longer; 1 for subtracting mg from T; 1 for 0.95 m/s² upward; 1 for 3.8 m/s and 7.6 m.

Common error: 4300 N ÷ 400 kg = 10.75 m/s². That divides one force by the mass and ignores gravity.
</details>

## Question 5 (constructed response · core)

Take **+x to the right**. Block A (3.0 kg) and block B (1.0 kg) touch each other on a frictionless table, with B to the right of A. A student pushes A to the right with a horizontal force of 12 N, so A pushes B.

(a) Calculate the acceleration of the blocks.
(b) Calculate the force that A exerts on B, and state the force that B exerts on A.
(c) The student now pushes on B instead, with 12 N to the left, so that B pushes A. Predict whether the contact force between the blocks is larger, smaller or the same as in (b). Justify your answer, then check it with a calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** System A + B: the contact forces are internal. a = 12 N ÷ 4.0 kg = **3.0 m/s²** to the right.

**(b)** System B alone: the only horizontal force on B is the push from A. F_AonB = m_B a = 1.0 × 3.0 = **3.0 N** to the right. By Newton’s third law, B pushes on A with **3.0 N to the left**. Check on A: 12 − 3.0 = 9.0 N = 3.0 kg × 3.0 m/s². ✓

**(c)** **Larger.** The acceleration is still 3.0 m/s² (same net force, same total mass), but now the contact force has to accelerate A, which has three times the mass of B. F_BonA = m_A a = 3.0 × 3.0 = **9.0 N**.

| Point | What earns it |
|---|---|
| 1 | 3.0 m/s² using the total mass |
| 1 | Chooses B alone and finds 3.0 N |
| 1 | Force on A is 3.0 N, opposite direction, linked to the third law |
| 1 | Predicts larger **because** the contact force now accelerates the larger mass |
| 1 | 9.0 N from m_A a |
</details>

## Question 6 (experimental design · stretch)

Take **+x along a level, low-friction track**. A student pulls a cart with a handheld force sensor, keeping the pull roughly steady, while a motion detector measures the acceleration. The cart’s mass stays the same throughout. The results are below.

| Pulling force F (N) | 0.25 | 0.50 | 0.75 | 1.00 | 1.25 |
|---|---|---|---|---|---|
| Acceleration a (m/s²) | 0.21 | 0.39 | 0.61 | 0.79 | 1.01 |

(a) State which quantities to plot to give a straight line, and what the slope represents.
(b) Use the data to find the mass of the cart.
(c) The student claims friction on the track is negligible. Use the graph to support or refute the claim.
(d) A 0.50 kg block is fixed on top of the cart and the experiment is repeated. Predict the new slope.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Plot a (vertical) against F (horizontal). From a = F/m, the line should pass through the origin with **slope 1/m**.

**(b)** A best-fit line through the points has slope (1.01 − 0.21) m/s² ÷ (1.25 − 0.25) N = 0.80 kg⁻¹ (a least-squares fit gives the same value). Mass m = 1 ÷ 0.80 = **1.25 kg** (about 1.3 kg).

**(c)** The data **support** the claim. The best-fit line passes very close to the origin (intercept about 0.002 m/s², within the scatter of the readings). If there were a significant friction force f, the net force would be F − f, and the line would cross the F-axis at F = f instead of at zero.

**(d)** New mass 1.75 kg, so new slope = 1 ÷ 1.75 ≈ **0.57 kg⁻¹**. The line is less steep.

| Point | What earns it |
|---|---|
| 1 | a against F, with slope = 1/m |
| 1 | Slope found from a best-fit line using points far apart (not one data pair) |
| 1 | Mass 1.25 kg (accept 1.2–1.3 kg) |
| 1 | Supports the claim **because** the line passes through the origin; friction would shift the intercept |
| 1 | New slope 0.57 kg⁻¹, from 1/(1.25 + 0.50) |

**Alternative method for (b).** Average the five values of F/a. This gives about 1.24 kg, which is within the accepted range and earns the mark, but a graph shows any intercept and is the better method.
</details>

## Question 7 (constructed response · stretch)

Take **+x to the right** and **+y up**. A box of mass m rests on a frictionless floor. A rope pulls it with a tension T at an angle θ above the horizontal. The box stays on the floor.

(a) Derive an expression for the box’s acceleration in terms of T, θ and m.
(b) Derive an expression for the normal force exerted by the floor.
(c) Evaluate both for m = 8.0 kg, T = 40 N and θ = 30°.
(d) A student claims: "Pulling at a steeper angle always gives a bigger acceleration, because the rope lifts the box and makes it easier to move." Evaluate the claim for this frictionless floor.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Horizontal: only the horizontal component of the tension acts. ΣF_x = T cos θ = m a_x, so **a_x = T cos θ / m**.

**(b)** Vertical: the box stays on the floor, so a_y = 0. ΣF_y = F_N + T sin θ − mg = 0, so **F_N = mg − T sin θ**.

**(c)** a_x = 40 × cos 30° ÷ 8.0 = 34.64 ÷ 8.0 = **4.3 m/s²**.
F_N = (8.0)(9.8) − 40 × sin 30° = 78.4 − 20 = **58 N**.

**(d)** The claim is **incorrect** here. On a frictionless floor, the acceleration depends only on T cos θ, and cos θ gets smaller as θ increases. With T = 40 N: θ = 0° gives 5.0 m/s², 30° gives 4.3 m/s², 60° gives 2.5 m/s². Lifting does reduce the normal force (forces are balanced vertically but unbalanced horizontally), but with no friction, a smaller normal force does not help the horizontal motion.

| Point | What earns it |
|---|---|
| 1 | Uses only T cos θ along x and obtains T cos θ / m |
| 1 | Vertical balance with all three forces, giving mg − T sin θ |
| 1 | 4.3 m/s² and 58 N |
| 1 | States that a falls as θ rises because cos θ decreases |
| 1 | Explains that the reduced normal force does not matter without friction |

Topic 2.7 shows that on a floor **with** friction, pulling at a small upward angle can help, because a smaller normal force means a smaller friction force.
</details>

## How did you do?

- **Q1 or Q4 wrong:** find the net force before dividing by the mass. Re-read Worked example 1 in the [study guide](/advanced-course-resources/physics-1/2-5-newtons-second-law-study-guide/).
- **Q2 wrong:** revisit "Functional dependence" and set up the ratio a_new / a_old.
- **Q3 wrong:** the net force points along the acceleration, not the velocity. See "Common misconceptions".
- **Q5 incomplete:** work through Worked example 2 on choosing systems.
- **Q6 or Q7 incomplete:** revisit Figure 1 (a against ΣF) and Worked example 3 on symbolic derivations.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/2-5-newtons-second-law-checklist/).
