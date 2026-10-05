---
resourceId: "mb-ap-physcm-u5-review"
title: "Torque and Rotational Dynamics: Mixed Unit Review (Physics C: Mechanics Unit 5)"
description: "A one-hour mixed review of rotation about a fixed axis: the big ideas that link Topics 5.1 to 5.6, a summary table and seven original questions that each combine two or more topics."
course: "physics-c-mechanics"
unit: 5
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 5.1 to 5.6"
  - "Differentiating and integrating polynomials; Newton's second law for a single object"
prerequisiteResources: ["mb-ap-physcm-u5-diagnostic"]
learningObjectives:
  - "Connect angular kinematics, torque, rotational inertia and Newton's laws into one method for rotation about a fixed axis"
  - "Solve multi-step problems that combine two or more Unit 5 topics"
  - "Write separate linear and rotational equations for linked systems and solve them together"
  - "Decide when a torque is constant and when the angular motion must be found by integration"
  - "Use rotation data to find an angular acceleration and a friction torque, and justify a model with evidence"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry (degrees where angles are given in degrees). We use g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u5-diagnostic", "mb-ap-physcm-5.1-checklist", "mb-ap-physcm-5.2-checklist", "mb-ap-physcm-5.3-checklist", "mb-ap-physcm-5.4-checklist", "mb-ap-physcm-5.5-checklist", "mb-ap-physcm-5.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Every rotation problem starts the same way: name the axis and state which sense of turning is positive."
  - "Torque comes only from the force component perpendicular to r: τ = rF sin θ = r⊥F, or τ = r × F as a vector."
  - "Rotational inertia depends on the axis. Build it from Σmr², ∫r² dm and I = I_cm + Md²."
  - "Στ = 0 means constant ω; Στ = Iα says how fast ω changes. Write ΣF = Ma_cm separately."
  - "If the torque changes with time, integrate α(t) = Στ(t)/I. The constant-α equations are a special case."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review pulls Unit 5 (Torque and Rotational Dynamics) together. Read the big ideas and the table, then try the seven questions, each combining two or more topics, **without notes**. These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s². Strings are light and do not slip or stretch. If you have not yet done the [Unit 5 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-5-diagnostic/), do it first.

## Big ideas of the unit

- **Rotation about one axis is one-dimensional.** θ, ω = dθ/dt and α = dω/dt follow the calculus of x, v and a. State the positive sense first ([Topic 5.1](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-study-guide/)).
- **All points share ω and α; linear values scale with r.** s = rθ, v = rω, a_T = rα, plus a_c = ω²r toward the axis. A non-slipping string moves with the rim ([Topic 5.2](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/)).
- **Torque is about a chosen axis.** Only F⊥ turns: τ = rF sin θ = r⊥F, or τ = r × F with the right-hand rule ([Topic 5.3](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/)).
- **Rotational inertia is mass plus where it sits.** I = Σmr² or ∫r² dm; I = I_cm + Md², so I is smallest about the centre of mass ([Topic 5.4](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/)).
- **Zero net torque means constant ω, not zero ω.** For statics, take torques about the point where an unknown force acts ([Topic 5.5](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-study-guide/)).
- **Στ = Iα joins the unit.** Torque (5.3) divided by I (5.4) gives α for the kinematics (5.1) and linear links (5.2) ([Topic 5.6](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-study-guide/)).
- **Two analyses, side by side.** A pivot force has no torque about the pivot but belongs in ΣF = Ma_cm.

## Key relationships and methods

| Idea | Relationship or method |
|---|---|
| Angular kinematics | ω = dθ/dt, α = dω/dt; ω = ω₀ + ∫α dt; θ = θ₀ + ∫ω dt |
| Constant α only | ω = ω₀ + αt; θ = θ₀ + ω₀t + ½αt²; ω² = ω₀² + 2α(θ − θ₀) |
| Linear links | s = rθ, v = rω, a_T = rα, a_c = ω²r; \|a\| = √(a_T² + a_c²) |
| Torque | τ = rF sin θ = r⊥F; τ_z = xF_y − yF_x; counterclockwise + |
| Rotational inertia | I = Σmr² or ∫r² dm; rod ML²/12 (centre), ML²/3 (end); disk ½MR²; hoop MR²; annulus ½M(R₁² + R₂²) |
| Parallel axis | I = I_cm + Md², always starting from I_cm |
| Equilibrium | ΣF = 0 and Στ = 0; if ΣF = 0, Στ is the same about every point |
| Second law | Στ_ext = Iα (same axis for τ and I); ΣF = Ma_cm separately |
| Changing torque | ω(t) = ω₀ + (1/I)∫Στ dt; ω peaks where Στ = 0 |

## Question 1 (multiple choice · mixed)

A constant torque spins a uniform rod from rest to angular velocity ω about a perpendicular axis through its **centre**. The same torque then spins it from rest to the same ω about a perpendicular axis through **one end**. Compared with the first run, the second run takes

- (A) 4 times as long, through 4 times the angle
- (B) 2 times as long, through 4 times the angle
- (C) 4 times as long, through 16 times the angle
- (D) 2 times as long, through 2 times the angle

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** I_end = ML²/3 = 4 × ML²/12, so α = τ/I is 4 times smaller. From rest, t = ω/α and Δθ = ω²/(2α), so both grow 4 times.

- (B) and (D) take I_end as twice I_centre. The parallel axis term M(L/2)² = 3ML²/12 makes it four times.
- (C) uses Δθ = ½αt² with only the time changed. α has also fallen by 4, so 16 ÷ 4 = 4.
</details>

## Question 2 (multiple choice · mixed)

A drum (I = 0.50 kg·m², radius 0.20 m) turns on a frictionless axle. A rope wound round it is pulled with a constant 40 N tension. Starting from rest, what is the drum's angular velocity when 3.0 m of rope has come off?

- (A) 4.4 rad/s
- (B) 9.8 rad/s
- (C) 15 rad/s
- (D) 22 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Torque: τ = TR = 8.0 N·m, so α = τ/I = 16 rad/s², constant. Angle: θ = s/R = 3.0 ÷ 0.20 = 15 rad. Then ω² = 2αθ = 480, so ω = 22 rad/s (21.9).

- (A) is the rope speed, Rω = 4.4 m/s.
- (B) takes the 3.0 m length as the angle. Use θ = s/R.
- (C) drops the 2 in ω² = 2αθ.
</details>

## Question 3 (multiple choice · mixed)

A uniform horizontal rod of mass 3.0 kg and length 1.2 m is hinged to a wall at one end. A cable from its far end runs up to the wall at 30° to the rod. A 5.0 kg sign hangs from the rod 0.90 m from the wall. What is the tension in the cable?

- (A) 59 N
- (B) 74 N
- (C) 1.0 × 10² N
- (D) 1.3 × 10² N

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Torques about the hinge remove the hinge force. Clockwise: (3.0)(9.8)(0.60) + (5.0)(9.8)(0.90) = 17.6 + 44.1 = 61.7 N·m. The cable pulls at 30° to the rod at 1.2 m, so its torque is T(1.2) sin 30° = 0.60T. Then T = 61.7 ÷ 0.60 = 103 N.

- (A) uses cos 30°, the component along the rod.
- (B) leaves out the rod's own weight.
- (D) puts the rod's weight at its far end, not its centre of mass.
</details>

## Question 4 (constructed response · mixed)

A 2.0 kg block on a table (μ_k = 0.20) is tied by a string that runs over a pulley at the edge to a hanging 1.0 kg block. The pulley is a uniform flat ring of mass 1.0 kg, inner radius 0.040 m and outer radius 0.080 m; the string runs on the outer rim. The axle is frictionless. The system starts from rest.

(a) Starting from I = ∫r² dm, derive the rotational inertia of the ring about its axle and evaluate it.
(b) Write an equation for each block and the pulley, and derive the blocks' acceleration a.
(c) Find a, both tensions and the pulley's α. Explain why the tensions differ.
(d) Find the pulley's angular velocity after the hanging block has fallen 0.50 m, and how many turns the pulley has made.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use thin rings: σ = M/[π(R₂² − R₁²)] and dm = σ(2πr dr). I = ∫ r² σ 2πr dr from R₁ to R₂ = (πσ/2)(R₂⁴ − R₁⁴) = **½M(R₁² + R₂²)**. Here I = ½(1.0)(0.0016 + 0.0064) = **4.0 × 10⁻³ kg·m²**.

**(b)** Let T₁ be the tension on the table side and T₂ on the hanging side. No slipping: a = Rα with R = 0.080 m.
- Table block: T₁ − μm₁g = m₁a
- Hanging block: m₂g − T₂ = m₂a
- Pulley: (T₂ − T₁)R = Iα = Ia/R

Dividing the pulley equation by R and adding all three: **a = (m₂ − μm₁)g / (m₁ + m₂ + I/R²)**.

**(c)** I/R² = 0.625 kg, so a = (1.0 − 0.40)(9.8) ÷ 3.625 = **1.6 m/s²** (1.62). T₂ = 1.0(9.8 − 1.62) = **8.2 N**; T₁ = 3.92 + 2.0(1.62) = **7.2 N**; α = a/R = **20 rad/s²**. The tensions differ because their difference gives the net torque on the pulley. Check: (T₂ − T₁)R = 1.01 × 0.080 = 0.081 N·m and Iα = 0.0040 × 20.3 = 0.081 N·m.

**(d)** a is constant: v² = 2ad = 2(1.62)(0.50), so v = 1.27 m/s and ω = v/R = **16 rad/s**. Angle: θ = s/R = 0.50 ÷ 0.080 = 6.25 rad, which is **about 1.0 turn**.

| Point | What earns it |
|---|---|
| 1 | (a) dm = σ2πr dr, integrated to ½M(R₁² + R₂²) |
| 1 | (a) I = 4.0 × 10⁻³ kg·m² |
| 1 | (b) Three equations with consistent signs and a = Rα |
| 1 | (b) Correct symbolic a |
| 1 | (c) a, tensions and α, with the reason the tensions differ |
| 1 | (d) ω = 16 rad/s and about 1.0 turn |

**Total: 6 points.** Carry forward an incorrect a into (d).
</details>

## Question 5 (constructed response · mixed)

Take **+y upward** and **clockwise as positive** for rotation. A uniform rod of mass M = 1.5 kg and length L = 1.2 m is hinged at its left end. A small block, also of mass M, is fixed to its right end. A vertical string from the ceiling, tied to the right end, holds the rod horizontal at rest.

(a) Draw an extended force diagram. Derive the string tension and hinge force in terms of M and g.
(b) The string is cut. Derive the angular acceleration just after the cut.
(c) Find the accelerations of the block and of the centre of mass just after the cut, and the hinge force then.
(d) Explain how the block's acceleration in (c) can exceed g.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Diagram: hinge force N at the left end, rod's weight Mg at L/2, block's weight Mg and tension T at L. Torques about the hinge: TL − Mg(L/2) − MgL = 0, so **T = 3Mg/2** = 22 N. Forces: N + T − 2Mg = 0, so **N = Mg/2** = 7.4 N upward.

**(b)** I = ML²/3 + ML² = 4ML²/3 = 2.88 kg·m². Στ = Mg(L/2) + MgL = 3MgL/2. α = Στ/I = **9g/(8L)** = 9.2 rad/s², clockwise.

**(c)** At release ω = 0, so each point has only a_T = rα. Block: a = Lα = **9g/8 = 11 m/s²** downward. Centre of mass at 3L/4: a_cm = (3L/4)(9g/8L) = **27g/32 = 8.3 m/s²** downward. Linear analysis: N − 2Mg = −2M(27g/32), so **N = 5Mg/16 = 4.6 N** upward.

**(d)** The block is fixed to the rod's end. The rod's own weight adds clockwise torque, so the end accelerates faster than free fall, and the rod pushes **down** on the block with an extra Mg/8 = 1.8 N. A free object would fall at only g.

| Point | What earns it |
|---|---|
| 1 | (a) Forces at their points of action; T = 3Mg/2 from torques about the hinge |
| 1 | (a) Hinge force Mg/2 upward from ΣF = 0 |
| 1 | (b) I = 4ML²/3 (rod plus point mass) |
| 1 | (b) α = 9g/(8L) = 9.2 rad/s² |
| 1 | (c) 9g/8, 27g/32 and N = 5Mg/16 from ΣF = Ma_cm |
| 1 | (d) The rod pushes down on the block, so a > g is possible |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

Take **counterclockwise as positive**. A flywheel is a uniform disk of mass 4.0 kg and radius 0.20 m. Its motor holds it at 42 rad/s, then switches off at t = 0; only bearing friction acts afterwards. Invented sensor data:

| t (s) | 0 | 2.0 | 4.0 | 6.0 | 8.0 |
|---|---|---|---|---|---|
| ω (rad/s) | 42.1 | 34.9 | 28.0 | 20.9 | 14.1 |

(a) Plot ω against t and find the angular acceleration.
(b) Find the friction torque, with its sense.
(c) Predict when the flywheel stops and how many revolutions it makes after the motor is switched off.
(d) What motor torque holds the flywheel at a steady 42 rad/s? Justify your answer.
(e) A student says friction torque grows with speed. Do the data support this? Give evidence.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The points lie on a straight line. A best-fit line has slope **α = −3.5 rad/s²** and intercept 42.0 rad/s.

**(b)** I = ½MR² = ½(4.0)(0.20)² = 0.080 kg·m². τ_f = Iα = 0.080 × (−3.5) = **−0.28 N·m**: 0.28 N·m clockwise, against the rotation.

**(c)** The torque is constant, so α is constant. Stop: 42 ÷ 3.5 = **12 s**. Angle: 42² ÷ (2 × 3.5) = 252 rad, which is **40 revolutions**.

**(d)** **0.28 N·m counterclockwise.** Constant ω needs zero net torque (Newton's first law in rotational form), so the motor must cancel friction.

**(e)** **No.** In each 2.0 s, ω falls by 7.2, 6.9, 7.1 and 6.8 rad/s: the same drop within scatter, while ω more than halves. A speed-dependent torque would give larger early drops and a curved ω–t graph.

| Point | What earns it |
|---|---|
| 1 | (a) Straight-line plot and α = −3.5 rad/s² (accept −3.4 to −3.6) |
| 1 | (b) I = 0.080 kg·m² and τ_f = 0.28 N·m against the rotation |
| 1 | (c) 12 s and about 40 revolutions |
| 1 | (d) 0.28 N·m, justified by Στ = 0 at constant ω |
| 1 | (e) Equal drops in ω (straight graph), so constant friction torque |

**Total: 5 points.** Carry forward an incorrect α into (b) and (c).
</details>

## Question 7 (constructed response · mixed)

Take **+x east, +y north and counterclockwise (seen from above) as positive**, with the origin on the axle. A horizontal platform is a uniform disk of mass 20 kg and radius 0.50 m on a frictionless vertical axle. It starts at rest. At t = 0 a worker pushes with a horizontal force F = (−12î + 16ĵ) N at the point r = (0.40î + 0.30ĵ) m on its rim.

(a) Find τ = r × F and the initial angular acceleration. Show that F is perpendicular to r.
(b) Find the axle force at t = 0.
(c) The worker walks with the platform, pushing along the rim, but tires, so τ(t) = 10 − 2.5t (N·m) for 0 ≤ t ≤ 4.0 s. Find ω(t), and ω and θ at t = 4.0 s.
(d) At t = 4.0 s, find the speed of a rim point and the size of its acceleration.
(e) A student uses α = 4.0 rad/s² throughout. What ω does she get, and why is it wrong?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** τ_z = xF_y − yF_x = (0.40)(16) − (0.30)(−12) = 6.4 + 3.6 = **+10 N·m** (+z, upward: counterclockwise seen from above). r · F = (0.40)(−12) + (0.30)(16) = 0, so F ⊥ r. Check: rF = 0.50 × 20 = 10 N·m. I = ½(20)(0.50)² = 2.5 kg·m², so **α = 4.0 rad/s²** counterclockwise.

**(b)** The axle holds the centre still, so a_cm = 0 and ΣF = 0. The axle force is **(12î − 16ĵ) N**. It has no torque about the axle but cancels the push in the linear analysis.

**(c)** ω = (1/I)∫₀ᵗ (10 − 2.5t) dt = (10t − 1.25t²) ÷ 2.5 = **4.0t − 0.50t²** (rad/s). At 4.0 s: **ω = 8.0 rad/s**. θ = ∫₀⁴ (4.0t − 0.50t²) dt = 32 − 10.7 = **21 rad** (3.4 turns).

**(d)** v = Rω = 0.50 × 8.0 = **4.0 m/s**. The torque is now zero, so a_T = 0 and a_c = ω²R = 64 × 0.50 = **32 m/s²**, toward the axle.

**(e)** ω = 4.0 × 4.0 = 16 rad/s, twice too large. α falls with the torque, so ω comes from the area under the τ–t graph divided by I.

| Point | What earns it |
|---|---|
| 1 | (a) τ = +10 N·m by components, with r · F = 0 |
| 1 | (a) I = 2.5 kg·m² and α = 4.0 rad/s² |
| 1 | (b) Axle force (12î − 16ĵ) N from ΣF = 0 at a fixed axle |
| 1 | (c) ω(t) by integration; 8.0 rad/s and 21 rad |
| 1 | (d) 4.0 m/s and 32 m/s², with a_T = 0 explained |
| 1 | (e) 16 rad/s identified as a constant-α error |

**Total: 6 points.**
</details>

## How did you do?

Questions 1 to 3 earn 1 point each, Questions 4, 5 and 7 earn 6 each and Question 6 earns 5: 26 in all. The total shows what to revisit; it does not predict an exam score. If a question went wrong:

- **Q1, Q6(c) or Q7(c):** check that α is constant before using constant-α equations. Use the [Topic 5.1 checklist](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-checklist/).
- **Q2, Q4(d) or Q7(d):** practise the linear links with the [Topic 5.2 checklist](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-checklist/).
- **Q3 or Q7(a):** practise lever arms and cross products with the [Topic 5.3 checklist](/advanced-course-resources/physics-c-mechanics/5-3-torque-checklist/).
- **Q1, Q4(a) or Q5(b):** build I about the right axis with the [Topic 5.4 checklist](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-checklist/).
- **Q3, Q5(a) or Q6(d):** revisit equilibrium with the [Topic 5.5 checklist](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-checklist/).
- **Q4, Q5(c) or Q7(b):** write one equation per object, with ΣF = Ma_cm separate. Use the [Topic 5.6 checklist](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-checklist/).

After you revise, retake the matching part of the [Unit 5 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-5-diagnostic/), then try this review again a few days later.
