---
resourceId: "mb-ap-phys1-4.3-practice"
title: "Conservation of Linear Momentum: Practice Questions (Physics 1 4.3)"
description: "Seven original Marlbridge practice questions on system momentum, centre-of-mass velocity, choosing a system, collisions, explosions and two-dimensional set-ups, with worked solutions and suggested mark points."
course: "physics-1"
unit: 4
topics: ["4.3"]
resourceType: "practice-questions"
prerequisites:
  - "Momentum p = mv and impulse J = F_avg Δt (Topics 4.1 and 4.2)"
prerequisiteResources: ["mb-ap-phys1-4.3-study-guide"]
learningObjectives:
  - "Calculate total momentum and centre-of-mass velocity with correct signs"
  - "Decide whether a chosen system's momentum is constant and justify the choice"
  - "Use conservation of momentum to find an unknown velocity after a collision or explosion"
  - "Link a change in system momentum to the external impulse"
  - "Use experimental data and a linear graph to test a claim that momentum is conserved"
  - "Derive a symbolic expression from momentum conservation and use it to evaluate a claim"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-4.3-study-guide", "mb-ap-phys1-4.3-revision-notes", "mb-ap-phys1-4.3-checklist"]
next: "mb-ap-phys1-4.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "State the system and the axis before you use conservation of momentum."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. All data are invented for practice.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A 2.0 kg cart moves at +3.0 m/s and a 1.0 kg cart moves at −1.5 m/s on the same track. What is the velocity of the centre of mass of the two-cart system?

- (A) +1.5 m/s
- (B) +0.75 m/s
- (C) +2.5 m/s
- (D) +4.5 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Total momentum p_sys = (2.0)(+3.0) + (1.0)(−1.5) = +6.0 − 1.5 = +4.5 kg·m/s. Then v_cm = p_sys / M_total = 4.5 ÷ 3.0 = **+1.5 m/s**.

- (B) is the plain mean of the two velocities, (3.0 − 1.5) ÷ 2. It ignores the fact that the heavier cart counts for more.
- (C) adds the momenta without signs, (6.0 + 1.5) ÷ 3.0; opposite momenta should partly cancel.
- (D) is the total momentum (kg·m/s), not divided by the total mass.
</details>

## Question 2 (multiple choice · core)

A student stands at rest on frictionless ice holding a ball. She throws the ball horizontally. Which statement about the throw is correct?

- (A) The ball's momentum is constant during the throw.
- (B) The student's momentum is constant during the throw.
- (C) The horizontal momentum of the student–ball system is constant during the throw.
- (D) The horizontal momentum of the student–ball system increases, because the student exerts a force on the ball.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** With student and ball as one system, the push between hand and ball is an internal third-law pair. The ice exerts no horizontal force, so the system's horizontal momentum stays zero: the ball and the student gain equal and opposite momenta.

- (A) For the ball alone, the hand's push is external, so the ball's momentum changes.
- (B) For the student alone, the ball's push back is external, so she slides backwards.
- (D) The student's push on the ball is internal to this system; its partner force acts on the student. Internal forces cannot change a system's total momentum.
</details>

## Question 3 (multiple choice · core)

Take **+x as east and +y as north**. A firework shell at rest on the ground bursts into three pieces that slide on a smooth, level surface. Immediately afterwards, piece 1 has momentum 4.0 kg·m/s east and piece 2 has momentum 3.0 kg·m/s north. What is the momentum of piece 3?

- (A) 5.0 kg·m/s, directed 37° south of west
- (B) 7.0 kg·m/s, directed south-west
- (C) 5.0 kg·m/s, directed 37° north of east
- (D) 1.0 kg·m/s, directed west

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The total momentum was zero, so each component must still add to zero. Piece 3 needs p_x = −4.0 kg·m/s and p_y = −3.0 kg·m/s. Its size is √(4.0² + 3.0²) = 5.0 kg·m/s. It points west and south, at tan⁻¹(3.0/4.0) = 37° below the westward direction.

- (B) adds the sizes 4.0 + 3.0 as if they were in the same direction. Perpendicular components combine by Pythagoras.
- (C) has the right size but points the same way as the sum of pieces 1 and 2. It must point the opposite way to cancel them.
- (D) subtracts the sizes, as if the two momenta lay along one line.
</details>

## Question 4 (calculation · core)

Take **+x forward along a straight, level road**. A 1,200 kg car moving at +15 m/s runs into the back of a 1,800 kg van moving at +5.0 m/s. Immediately after the collision, the car moves at +7.0 m/s.

(a) Explain why friction from the road can be ignored during the collision.
(b) Find the van's velocity immediately after the collision.
(c) Find the impulse on the van and the impulse on the car, and explain how they are related.
(d) The collision lasts 0.12 s. Find the average force exerted on the van.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The collision is very short, and the forces between car and van are much larger than road friction. So the external impulse during the collision is small compared with the momentum exchanged: treat car + van as a system with constant momentum.

**(b)** Before: (1,200)(15) + (1,800)(5.0) = 18,000 + 9,000 = 27,000 kg·m/s.
After: car = (1,200)(7.0) = 8,400 kg·m/s, so van = 27,000 − 8,400 = 18,600 kg·m/s.
v_van = 18,600 ÷ 1,800 = **+10 m/s** (10.3 m/s forward).

**(c)** J_van = Δp_van = 18,600 − 9,000 = **+9,600 N·s** (forward). J_car = 8,400 − 18,000 = **−9,600 N·s** (backward). They are equal in size and opposite in direction, because the forces car-on-van and van-on-car are a third-law pair acting for the same time.

**(d)** F_avg = J / Δt = 9,600 ÷ 0.12 = **8.0 × 10⁴ N** forward.

| Point | What earns it |
|---|---|
| 1 | Collision forces ≫ friction over a short time, so external impulse negligible |
| 1 | Correct total momentum before (27,000 kg·m/s) |
| 1 | v_van ≈ +10 m/s, forward |
| 1 | Both impulses with signs, linked to Newton's third law |
| 1 | 8.0 × 10⁴ N with direction |

Common error: giving the van the 8.0 m/s the car lost. The momentum changes match; the velocity changes do not.
</details>

## Question 5 (calculation and reasoning · core)

Take **+x in the direction of motion**. A 2.0 kg block slides along a rough, level floor at 4.0 m/s. The kinetic friction force on it is 3.0 N.

(a) Using the block alone as the system, find the change in its momentum over the next 2.0 s, and its velocity at the end.
(b) A student says: "This shows momentum is not conserved." Choose a system for which momentum **is** constant and use it to respond.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Friction is external to the block. J = F_net,ext Δt = (−3.0 N)(2.0 s) = **−6.0 kg·m/s**. The block is still moving at 2.0 s (it would take 8.0 ÷ 3.0 ≈ 2.7 s to stop). New momentum = 8.0 − 6.0 = 2.0 kg·m/s, so v = 2.0 ÷ 2.0 = **+1.0 m/s**.

**(b)** Choose the **block + floor + Earth** as the system. The friction force on the block and the block's friction force on the floor are an internal third-law pair, so the total horizontal momentum of this system stays constant. The block loses 6.0 kg·m/s; the floor and Earth gain +6.0 kg·m/s, but Earth's huge mass makes its velocity change unmeasurable. Momentum is transferred, not destroyed.

| Point | What earns it |
|---|---|
| 1 | −6.0 kg·m/s from F Δt, with sign |
| 1 | +1.0 m/s |
| 1 | Chooses a system that includes the floor/Earth |
| 1 | Explains the transfer (Earth gains +6.0 kg·m/s) and why it is not noticed |
</details>

## Question 6 (experimental · stretch)

A student wants to test the claim: "When a moving cart collides with a cart at rest on a level track, the total momentum of the two carts is the same just before and just after the collision."

(a) Describe a procedure. Name the quantities to measure, the equipment, and one way to reduce external forces.

The student keeps cart B (0.50 kg, at rest) the same and changes cart A by adding masses. Her results are below. Take **+x in A's initial direction**.

| Trial | m_A (kg) | v_A before (m/s) | v_A after (m/s) | v_B after (m/s) |
|---|---|---|---|---|
| 1 | 0.50 | 0.80 | 0 | 0.78 |
| 2 | 0.75 | 0.60 | 0.12 | 0.70 |
| 3 | 1.00 | 0.70 | 0.23 | 0.90 |
| 4 | 1.25 | 0.50 | 0.21 | 0.71 |

(b) Calculate the total momentum before and after for each trial.
(c) Say what graph to plot to test the claim, what it should look like if the claim is true, and find its slope.
(d) Do the data support the claim? Suggest one reason why the values after are a little smaller.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Measure both masses with a balance. Measure velocities just before and just after the collision with a motion sensor at each end of the track (or photogates). Level the track and use low-friction carts or an air track, so external forces are small. Vary m_A or the launch speed to get a range of momenta.

**(b)**

| Trial | p before (kg·m/s) | p after (kg·m/s) |
|---|---|---|
| 1 | 0.400 | 0 + 0.390 = 0.390 |
| 2 | 0.450 | 0.090 + 0.350 = 0.440 |
| 3 | 0.700 | 0.230 + 0.450 = 0.680 |
| 4 | 0.625 | 0.263 + 0.355 = 0.618 |

**(c)** Plot **p_after (vertical axis) against p_before (horizontal axis)**. If momentum is conserved, the points lie on a straight line through the origin with slope 1. A best-fit line through the origin has slope ≈ **0.98**.

**(d)** Yes, the data support the claim. Every trial agrees to within 3%, and the slope is very close to 1. The values after are consistently 1–3% low. A likely reason is friction acting between the moment each velocity was measured and the collision, so a little momentum is transferred to the track; a small tilt of the track would have a similar effect.

| Point | What earns it |
|---|---|
| 1 | Measures masses and velocities just before and just after, with suitable equipment |
| 1 | A sensible way to reduce friction or slope (level track, low-friction carts) |
| 1 | Correct p before and p after for all trials |
| 1 | Plots p_after against p_before; expects a straight line through the origin with slope 1 |
| 1 | Slope ≈ 0.98 from a best-fit line |
| 1 | Supports the claim **because** the slope ≈ 1, with a reason for the small systematic shortfall |

**Alternative method.** Percentage differences for each trial (−2.5%, −2.2%, −2.9%, −1.2%), argued as small and of one sign, earn the last point but not the graph points.
</details>

## Question 7 (constructed response · stretch)

Take **+x in the direction of travel**. A spacecraft of total mass M, including a probe of mass m, drifts in deep space at speed v₀. It pushes the probe out of the back, so that immediately afterwards the probe moves at speed v_p in the −x direction.

(a) Derive an expression for the spacecraft's speed V after the release, in terms of M, m, v₀ and v_p.
(b) A student claims: "If the probe were instead pushed out of the **front**, faster than v₀, the spacecraft would also speed up, because pushing anything always speeds you up." Evaluate the claim.
(c) How does the velocity of the centre of mass of the spacecraft–probe system change during the release? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** System: spacecraft + probe. No external forces in deep space, so momentum is constant.
Before: M v₀. After: (M − m)V + m(−v_p).
M v₀ = (M − m)V − m v_p, so **V = (M v₀ + m v_p) / (M − m)**.

*Check:* with M = 900 kg, m = 60 kg, v₀ = 2.0 m/s and v_p = 3.0 m/s, V = (1,800 + 180) ÷ 840 = 2.4 m/s, faster than 2.0 m/s, as expected for a backwards push.

**(b)** The claim is **incorrect**. If the probe leaves forwards at speed u > v₀, then M v₀ = (M − m)V + m u, so V = (M v₀ − m u) / (M − m). Because u > v₀, the probe carries more than its share (m v₀) of the forward momentum, so the spacecraft carries less: V < v₀ (with u = 5.0 m/s and the numbers above, V ≈ 1.8 m/s). The push on the probe is forwards, so by the third law the probe pushes the spacecraft **backwards**.

**(c)** It does **not** change: v_cm = v₀ throughout. The forces between spacecraft and probe are internal, and there is no net external force, so the centre of mass keeps moving at constant velocity.

| Point | What earns it |
|---|---|
| 1 | Conservation equation with correct signs, including −v_p |
| 1 | V = (M v₀ + m v_p) / (M − m) |
| 1 | Shows V < v₀ for a forward release, from the equation or from momentum shares |
| 1 | Uses the third-law direction of the force on the spacecraft to reject the claim |
| 1 | v_cm unchanged, because there is no net external force |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "One system, one total momentum" and "Momentum in two dimensions" in the [study guide](/advanced-course-resources/physics-1/4-3-conservation-linear-momentum-study-guide/). Signs and components first.
- **Q2 or Q5 wrong:** revisit "Choosing the system decides whether momentum changes" and Worked example 3.
- **Q4, Q6 or Q7 incomplete:** work through Worked examples 1 and 2 and Figure 1; check that impulses are equal and opposite.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/4-3-conservation-linear-momentum-checklist/).
