---
resourceId: "mb-ap-physcm-6.5-practice"
title: "Rolling: Practice Questions (Physics C: Mechanics 6.5)"
description: "Seven original Marlbridge calculus-based practice questions on rolling: rim velocities, kinetic energy shares, friction, slope dynamics, ramp data and a slipping ball with backspin."
course: "physics-c-mechanics"
unit: 6
topics: ["6.5"]
resourceType: "practice-questions"
prerequisites:
  - "Newton's second law in translational and rotational form"
  - "Static and kinetic friction"
prerequisiteResources: ["mb-ap-physcm-6.5-study-guide"]
learningObjectives:
  - "Find velocities of points on a rolling wheel and the share of kinetic energy in rotation"
  - "Combine F = Ma_cm, τ = I_cm α and the rolling condition to find accelerations and friction forces"
  - "Linearise ramp data to find the β of an unknown rolling object and plan the measurement"
  - "Analyse a slipping ball with Newton's laws, find when it starts to roll, and find the energy dissipated"
  - "Use functional dependence to compare rolling times and justify the result"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. g = 9.8 m/s². Angular speeds in rad/s. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-6.5-study-guide", "mb-ap-physcm-6.5-revision-notes", "mb-ap-physcm-6.5-checklist"]
next: "mb-ap-physcm-6.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis and positive sense of rotation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use g = 9.8 m/s². Write rotational inertias as I_cm = βMr², with β = 1 for a thin hoop, 2/3 for a thin spherical shell, 1/2 for a uniform solid cylinder and 2/5 for a uniform solid sphere. Ignore rolling friction and air resistance. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A bicycle wheel rolls to the right without slipping; its centre moves at 5.0 m/s. A reflector is fixed to the rim. What is the reflector's speed relative to the ground at the instant it is level with the axle, on the front side of the wheel?

- (A) 0
- (B) 5.0 m/s
- (C) 7.1 m/s
- (D) 10 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The reflector's velocity is v_cm forward plus its rotational velocity rω = 5.0 m/s about the centre. On the front side, level with the axle, the rotational velocity points straight down. The two are at right angles, so the speed is √(5.0² + 5.0²) = 5.0√2 = **7.1 m/s**, at 45° below the horizontal.

- (A) is the speed of the contact point, at the bottom of the wheel.
- (B) is the speed of the centre. It forgets the rotation, or adds the vertical part as if it did not count.
- (D) is the speed of the top of the wheel, where both parts point forward.
</details>

## Question 2 (multiple choice · core)

A thin spherical shell (β = 2/3) rolls without slipping across a level floor. What fraction of its total kinetic energy is rotational?

- (A) 0.29
- (B) 0.40
- (C) 0.50
- (D) 0.67

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With v_cm = rω, K_rot = ½βMv_cm² and K_tot = ½M(1 + β)v_cm². The fraction is β/(1 + β) = (2/3) ÷ (5/3) = **2/5 = 0.40**.

- (A) is the fraction for a uniform solid sphere, β = 2/5: (2/5) ÷ (7/5) = 2/7.
- (C) is the fraction for a hoop, β = 1. All of a shell's mass is a distance r from the centre, but most of it is closer than r to the rotation axis, so its β is smaller than a hoop's.
- (D) is β itself, the ratio K_rot/K_trans, not K_rot/K_tot.
</details>

## Question 3 (multiple choice · core)

A uniform solid cylinder rolls without slipping down a rough slope. Which statement about the static friction force on the cylinder is correct?

- (A) It does negative work equal to the loss of mechanical energy, which turns into thermal energy.
- (B) It exerts a torque that increases ω, and it does no net work on the cylinder.
- (C) It is zero, because the contact point is not moving.
- (D) It equals μ_s N, because the cylinder is on the point of slipping.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Friction is the only force with a torque about the centre, so it makes ω grow. It acts at the contact point, whose velocity is zero, so its power F · v is zero.

- (A) treats static friction like kinetic friction. For an ideal rolling body, mechanical energy is conserved.
- (C) confuses "the point does not move" (so no work) with "there is no force". Without friction the cylinder could not gain spin, and it would slide.
- (D) uses the maximum static friction. The actual force here is βMg sin θ ÷ (1 + β), which is less than μ_s N unless the cylinder is about to slip.
</details>

## Question 4 (calculation · core)

Take **+x to the right** and **clockwise positive**. A uniform solid cylinder of mass 8.0 kg rests on a level floor. A horizontal force F = 24 N to the right is applied at its axle. It rolls without slipping.

(a) Find the acceleration of its centre and the friction force from the floor (size and direction).
(b) Find the smallest coefficient of static friction that allows rolling.
(c) Find its speed after 3.0 s, and show that the work done by F equals the kinetic energy gained.

<details>
<summary>Worked solution</summary>

1. Translation: F − f = Ma_cm (friction assumed to the left). Rotation about the axle: fr = ½Mr² α = ½Mr a_cm, so f = ½Ma_cm.
2. **(a)** F = Ma_cm(1 + ½), so a_cm = 24 ÷ (8.0 × 1.5) = **2.0 m/s²**, and f = ½ × 8.0 × 2.0 = **8.0 N, to the left** (positive, so the assumed direction was correct).
3. **(b)** μ_s ≥ f ÷ (Mg) = 8.0 ÷ 78.4 = **0.10**.
4. **(c)** v = a_cm t = **6.0 m/s**. The centre moves ½ × 2.0 × 3.0² = 9.0 m, so W_F = 24 × 9.0 = 216 J. K = ½M(1 + β)v² = ½ × 8.0 × 1.5 × 36 = 216 J. ✓ Friction does no net work.

Suggested mark points (3): 1 for both Newton's-law equations with the rolling condition; 1 for a_cm and f with direction; 1 for the energy check, including that friction does no work.

Common error: a_cm = F/M = 3.0 m/s², which ignores friction.
</details>

## Question 5 (constructed response · experimental · core)

A student has a solid object with a round cross-section. She wants to find β by rolling it down a ramp from rest. A photogate at the bottom measures its speed v. She releases it so that its centre drops through heights h:

| h (m) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| v (m/s) | 1.15 | 1.61 | 1.99 | 2.28 | 2.56 |

(a) Assuming it rolls without slipping, derive an expression for v² in terms of g, h and β.
(b) State what to plot to get a straight line, and what its slope represents.
(c) Use the data to find β. Suggest what the object could be.
(d) Describe how the student could check that the object did not slip.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** No energy is dissipated while rolling without slipping: Mgh = ½Mv² + ½(βMr²)(v/r)² = ½M(1 + β)v². So **v² = 2gh ÷ (1 + β)**.

**(b)** Plot **v² (m²/s²) on the vertical axis against h (m) on the horizontal axis**. The line should pass through the origin with slope 2g ÷ (1 + β).

**(c)** v² values: 1.32, 2.59, 3.96, 5.20, 6.55 m²/s². A best-fit line gives a slope of about **13.1 m/s²** (for example (6.55 − 1.32) ÷ 0.40 = 13.1). Then 1 + β = 2 × 9.8 ÷ 13.1 = 1.50, so **β ≈ 0.50**. This matches a uniform solid cylinder.

**(d)** For example: mark the rim and measure the distance rolled per full turn, which should be 2πr. Or film the run and compare v from the photogate with rω from the video.

| Point | What earns it |
|---|---|
| 1 | (a) Energy conservation with both kinetic terms and v = rω, reaching v² = 2gh/(1 + β) |
| 1 | (b) v² against h, slope identified as 2g/(1 + β) |
| 1 | (c) Slope from a best-fit line (12.8–13.4 m/s²), with unit |
| 1 | (c) β ≈ 0.5 from the slope, linked to a solid cylinder |
| 1 | (d) A practical check that compares distance with turns, or v with rω |
</details>

## Question 6 (constructed response · stretch)

Take **+x to the right** and **clockwise positive** (the sense of rolling to the right). A uniform solid ball (M = 0.50 kg, r = 0.10 m, β = 2/5) is flicked along a level floor. At t = 0 its centre moves right at 4.2 m/s, but it spins **counterclockwise** (backspin) at 35 rad/s. The coefficient of kinetic friction is 0.20.

(a) Find the velocity of the contact point at t = 0 and state the direction of kinetic friction.
(b) Write v_cm(t) and ω(t) while the ball slips.
(c) Find when the ball starts to roll without slipping, and its velocity then.
(d) Confirm (c) using angular momentum about a point on the floor.
(e) Find the energy dissipated by friction.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ω₀ = −35 rad/s (counterclockwise). The contact point moves at v_cm − rω = 4.2 − (0.10)(−35) = **+7.7 m/s**, to the right. Kinetic friction opposes this: it acts **to the left**, with size μ_k Mg = 0.20 × 0.50 × 9.8 = 0.98 N.

**(b)** Translation: a_cm = −μ_k g = −1.96 m/s², so **v_cm = 4.2 − 1.96t**. Rotation: a leftward force at the bottom gives a clockwise torque fr, so α = fr ÷ (βMr²) = μ_k g ÷ (βr) = +49 rad/s², and **ω = −35 + 49t**.

**(c)** Rolling starts when v_cm = rω: 4.2 − 1.96t = −3.5 + 4.9t, so **t = 1.1 s** (1.12 s). Then v_cm = 4.2 − 1.96 × 1.1224 = **2.0 m/s** to the right, and ω = +20 rad/s. (The spin passes through zero at 0.71 s and then reverses.)

**(d)** Take moments about a fixed point on the floor along the ball's path. Friction acts along the floor line, so it has no torque about that point. Gravity (at the centre) and the normal force (at the contact point) are equal, opposite and on the same vertical line, so their torques cancel. The net torque is zero, so L about that point is conserved. L = Mv_cm r + I_cm ω (clockwise positive). Initially: 0.50 × 4.2 × 0.10 + 0.4 × 0.50 × 0.010 × (−35) = 0.21 − 0.07 = 0.14 kg·m²/s. Finally, rolling: M(1 + β)r v = 0.50 × 1.4 × 0.10 × v. So v = 0.14 ÷ 0.070 = **2.0 m/s**. ✓

**(e)** K₀ = ½ × 0.50 × 4.2² + ½ × (0.4 × 0.50 × 0.010) × 35² = 4.41 + 1.225 = 5.635 J. K_final = ½ × 0.50 × 1.4 × 2.0² = 1.40 J. Dissipated: **4.2 J**. Check: the contact point's sliding speed falls linearly from 7.7 m/s to 0 over 1.12 s, so it slides ½ × 7.7 × 1.1224 = 4.32 m; 0.98 N × 4.32 m = 4.2 J. ✓

| Point | What earns it |
|---|---|
| 1 | (a) Contact-point velocity including the backspin, and friction to the left |
| 1 | (b) v_cm(t) from F = Ma_cm |
| 1 | (b) ω(t) from τ = I_cm α with the correct sign of torque |
| 1 | (c) Sets v_cm = rω and finds t and v = 2.0 m/s |
| 1 | (d) Justifies zero torque about a floor point and uses L before and after |
| 1 | (e) Energy dissipated from kinetic energies, or from friction × sliding distance |
</details>

## Question 7 (explanation · stretch)

A uniform solid sphere and a thin hoop have the same mass and the same radius. They are released together from rest at the top of a slope 3.0 m long at 20° to the horizontal, and both roll without slipping. A student says: "Gravity does the same work on both, so they reach the bottom together with the same speed."

(a) Explain what is wrong with the claim.
(b) Find, without using the slope's numbers, the ratio of the hoop's time to the sphere's time.
(c) Find each time using the slope's numbers.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Gravity does do the same work, Mgh, on both, and static friction dissipates nothing, so both have the **same total kinetic energy** at the bottom. But that energy is shared differently. The hoop needs half of it for rotation (β = 1), the sphere only 2/7 (β = 2/5). So the hoop has less translational kinetic energy and a lower speed, v = √(2gh ÷ (1 + β)). The sphere wins.

**(b)** a_cm = g sin θ ÷ (1 + β) is constant, and d = ½a_cm t², so t = √(2d ÷ a_cm) ∝ √(1 + β). Ratio t_hoop ÷ t_sphere = √(2 ÷ 1.4) = **1.2**.

**(c)** Sphere: a_cm = 9.8 × sin 20° ÷ 1.4 = 2.39 m/s², t = √(2 × 3.0 ÷ 2.39) = **1.6 s**. Hoop: a_cm = 1.68 m/s², t = **1.9 s**. (Ratio 1.89 ÷ 1.58 = 1.2. ✓)

| Point | What earns it |
|---|---|
| 1 | Agrees the total kinetic energies are equal, with the reason that static friction does no work |
| 1 | Explains that the hoop puts a larger share into rotation, so its v_cm is smaller |
| 1 | Derives t ∝ √(1 + β) and the ratio 1.2 |
| 1 | Both times from a_cm = g sin θ/(1 + β) |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Rolling without slipping: deriving the links" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/6-5-rolling-study-guide/).
- **Q3 or Q4 wrong:** revisit "Why static friction does no work here" and Worked example 1.
- **Q5 incomplete:** link the slope of your graph to the energy equation before you calculate anything.
- **Q6 or Q7 incomplete:** go through Worked example 2 again. Treat translation and rotation separately until v_cm = rω.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/6-5-rolling-checklist/).
