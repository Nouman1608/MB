---
resourceId: "mb-ap-phys1-u5-review"
title: "Torque and Rotational Dynamics: Mixed Unit Review (Physics 1 Unit 5)"
description: "Connect all six rotation topics: the big ideas, a one-table summary of key relationships, and seven original exam-style questions that each combine two or more topics."
course: "physics-1"
unit: 5
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have worked through the study guides for Topics 5.1 to 5.6"
prerequisiteResources: ["mb-ap-phys1-u5-diagnostic"]
learningObjectives:
  - "Link angular kinematics, torque, rotational inertia and the rotational second law into one method for any rotation problem"
  - "Use v = rω and a = rα to connect a turning body to strings, ropes and hanging masses"
  - "Solve balance problems with a well-chosen pivot, and say what changes when a support is removed"
  - "Process timing data from a rotation experiment to find rotational inertia and a hidden mass"
  - "Evaluate claims using functional dependence and symbolic results"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus; calculator in degree mode for torque angles. Angles of rotation in radians: 1 rev = 2π rad. We use g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-u5-diagnostic", "mb-ap-phys1-5.1-checklist", "mb-ap-phys1-5.2-checklist", "mb-ap-phys1-5.3-checklist", "mb-ap-phys1-5.4-checklist", "mb-ap-phys1-5.5-checklist", "mb-ap-phys1-5.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Every rotation answer starts with two choices: which axis, and which sense (clockwise or counterclockwise) is positive."
  - "Torque uses the lever arm, not just the distance: τ = rF sin θ. A force through the axis exerts no torque."
  - "Rotational inertia depends on where the mass is: I = Σmr², so distance counts twice."
  - "Zero net torque means constant ω; a net torque gives α = τ_net / I. The linear equation ΣF = ma_cm still applies separately."
  - "Questions 1–3 are multiple choice; Questions 4–7 are multi-part with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review is for the **algebra-based Physics 1 course**, Unit 5 (Torque and Rotational Dynamics). It connects the topics and gives you mixed practice. Do the [unit diagnostic](/advanced-course-resources/physics-1/unit-5-diagnostic/) first if you have not yet done it.

## Big ideas of the unit

- **Rotation has its own kinematics.** θ, ω and α behave like x, v and a, with signs from a stated clockwise or counterclockwise convention ([Topic 5.1](/advanced-course-resources/physics-1/5-1-rotational-kinematics-study-guide/)).
- **One body shares ω; a belt or string shares v.** Each point moves at v = rω with a_T = rα; a rope that does not slip has the rim's speed ([Topic 5.2](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-study-guide/)).
- **Torque is force times lever arm.** Only the perpendicular part of a force turns the body, and torques need a named axis ([Topic 5.3](/advanced-course-resources/physics-1/5-3-torque-study-guide/)).
- **Rotational inertia measures where the mass is.** I = Σmr² for small objects; the smallest I among parallel axes is through the centre of mass ([Topic 5.4](/advanced-course-resources/physics-1/5-4-rotational-inertia-study-guide/)).
- **Balanced torques mean constant ω, not rest.** For a body at rest, Στ = 0 about every point, so pivot where an unknown force acts ([Topic 5.5](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-study-guide/)).
- **Net torque sets α:** α = τ_net / I, in the sense of the net torque. ([Topic 5.6](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-study-guide/)).
- **Rotation and translation are analysed separately,** linked by a = rα when a rope runs on a drum.
- **Write the symbolic result first,** then read off factors: I ∝ r², τ ∝ sin θ, α ∝ 1/I.

## Key relationships and methods

| Idea | Relationship or method | When it applies |
|---|---|---|
| Angular kinematics | ω = ω₀ + αt; θ = θ₀ + ω₀t + ½αt²; ω² = ω₀² + 2αΔθ | constant α, angles in radians |
| Linear links | Δs = rΔθ; v = rω; a_T = rα; a_c = ω²r | a point at radius r; ropes and belts that do not slip |
| Torque | τ = rF sin θ = rF⊥ = r⊥F | about a named axis; sense cw or ccw |
| Rotational inertia | I = Σmr²; I = I_cm + Md² | up to five small objects; parallel axes |
| First law (rotation) | Στ = 0 ⇔ constant ω | any rigid system, including steady spinning |
| Second law (rotation) | α = τ_net / I | torques and I about the same axis |
| Linked motion | ΣF = ma for each mass; Στ = Iα for the wheel; a = rα | ropes on pulleys or drums |

## Practice questions

These are **original Marlbridge practice questions**, not past exam questions. The rubric tables are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s², treat strings as light and inextensible, and assume ropes do not slip on drums or pulleys.

## Question 1 (multiple choice · mixed)

A spool on a fixed, frictionless axle has rotational inertia 0.020 kg·m². A string wound on it at radius 0.10 m is pulled with a constant 4.0 N, starting from rest. How much string comes off the spool in the first 2.0 s?

- (A) 4.0 m
- (B) 8.0 m
- (C) 40 m
- (D) 2.0 m

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** τ = 0.10 × 4.0 = 0.40 N·m, so α = 20 rad/s². From rest, Δθ = ½αt² = 40 rad, and the string length is rΔθ = 4.0 m.

- (B) multiplies the **final** string speed (4.0 m/s) by the time instead of the average speed.
- (C) gives the angle in radians as if it were a length. Multiply by r.
- (D) uses ½αt without squaring t.
</details>

## Question 2 (multiple choice · mixed)

A light rod carries two 0.40 kg beads, each 0.10 m from a central axle. A constant torque turns it from rest, and after one revolution its angular velocity is ω. The beads are moved to 0.20 m from the axle and the test is repeated with the same torque. What is the angular velocity after one revolution now?

- (A) ω/4
- (B) ω/2
- (C) ω/√2
- (D) ω

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Doubling each distance multiplies I = Σmr² by 4 (0.0080 to 0.032 kg·m²), so α falls to a quarter. Over a fixed angle from rest, ω² = 2αΔθ, so ω ∝ √α and becomes ω/2.

- (A) assumes ω ∝ α. That holds for a fixed **time**, not a fixed angle.
- (C) doubles I instead of quadrupling it.
- (D) ignores the change in I.
</details>

## Question 3 (multiple choice · mixed)

A hand winch has a crank handle 0.30 m from the axle, fixed to a drum of radius 0.075 m. A rope on the drum lifts a 40 kg sack at constant speed. The worker pushes at right angles to the crank; ignore friction. Which statement is correct?

- (A) The push is 98 N, and the handle moves 4 times as fast as the sack.
- (B) The push is 98 N, and the handle and the sack move at the same speed.
- (C) The push is 1.6 × 10³ N, and the handle moves a quarter as fast as the sack.
- (D) The push is 392 N, because a sack lifted at constant speed needs its full weight.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Constant ω means Στ = 0: F × 0.30 = 392 × 0.075, so F = 98 N. Handle and drum share ω, so speeds scale with radius: 0.30 ÷ 0.075 = 4.

- (B) gives both points the same speed. They share ω, not v.
- (C) inverts the radius ratio in both parts.
- (D) balances forces on the sack, not torques on the winch. The 392 N tension acts at a smaller radius than the push.
</details>

## Question 4 (constructed response · mixed)

A uniform drawbridge deck (mass 600 kg, length 5.0 m) is hinged at one end. A cable from its free end rises to a tower above the hinge, at 40° to the deck, and holds it horizontal. About the hinge, the deck's rotational inertia is (1/3)ML² (given).

(a) Derive an expression for the cable tension T, then evaluate it.
(b) Find the horizontal and vertical components of the hinge force on the deck.
(c) The cable suddenly snaps. Find the deck's angular acceleration just afterwards.
(d) A student says: "Once the cable snaps, every point of the deck falls with acceleration g." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Torques about the hinge remove the hinge force. The weight acts at L/2 (clockwise); only T sin 40° turns the deck, at L (counterclockwise). T sin 40° · L = Mg(L/2), so **T = Mg ÷ (2 sin 40°)** = **4.6 × 10³ N** (4574 N). L cancels.

**(b)** Horizontal: the cable pulls towards the tower with T cos 40°, so the hinge pushes **3.5 × 10³ N away from the tower**. Vertical: 5880 − T sin 40° = 5880 − 2940, so the hinge pushes up with **2.9 × 10³ N** (Mg/2).

**(c)** Only the weight now exerts a torque about the hinge. α = (MgL/2) ÷ (ML²/3) = 3g ÷ 2L = **2.9 rad/s²** (2.94).

**(d)** **Incorrect.** The hinge still holds one end, so the deck rotates and a = rα. The centre gets 2.5 × 2.94 = 7.4 m/s², less than g; the free end gets **15 m/s²**, more than g. The hinge still exerts a force, so this is not free fall.

| Point | What earns it |
|---|---|
| 1 | Torques about the hinge, using T sin 40° at L |
| 1 | T ≈ 4.6 × 10³ N |
| 1 | Hinge components 3.5 × 10³ N horizontal and 2.9 × 10³ N up |
| 1 | α ≈ 2.9 rad/s² using the given I |
| 1 | Uses a = rα to compare the centre and the free end with g |
| 1 | Rejects the claim **because** the hinge still exerts a force |

**Total: 6 points.**
</details>

## Question 5 (constructed response · mixed)

A turntable carries two identical sliding blocks. A string wound round its axle (radius 0.025 m) passes over a light pulley to a 0.20 kg hanging mass. Released from rest, the mass falls 1.00 m. A student times the fall with both blocks 0.050 m from the axis, then 0.200 m from it. The data are invented for practice.

| Block distance d (m) | 0.050 | 0.200 |
|---|---|---|
| Time to fall 1.00 m (s) | 6.0 | 9.2 |

(a) For the first run, find the acceleration of the falling mass and the turntable's angular acceleration.
(b) Find the string tension and the torque it exerts on the turntable.
(c) Derive an expression for I in terms of m, g, r, h and t, then find I for both runs.
(d) Model each block as a small mass m_b. Use your two values of I to find m_b and the turntable's own rotational inertia.
(e) Another student says: "You can skip part (b) and use τ = mgr." Evaluate this claim for these data.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** h = ½at², so a = 2h ÷ t² = **0.056 m/s²** (0.0556). No slipping: α = a ÷ r = **2.2 rad/s²**.

**(b)** Falling mass, down positive: mg − T = ma, so T = 0.20(9.8 − 0.056) = **1.95 N**. Torque τ = Tr = **0.049 N·m**.

**(c)** I = τ / α = Tr ÷ (a/r) = **m(g − a)r² ÷ a, with a = 2h ÷ t²**.
Run 1: I = **0.022 kg·m²** (0.0219). Run 2: a = 0.0236 m/s², so I = **0.052 kg·m²** (0.0517).

**(d)** I = I_t + 2m_b d². Subtracting: 0.0298 = 2m_b(0.0375), so **m_b = 0.40 kg**. Then I_t = 0.0219 − 2(0.40)(0.050²) = **0.020 kg·m²**.

**(e)** **Acceptable here, but only because a ≪ g.** T is 99.4% of mg, so τ = mgr raises I by about 0.5%, well inside the timing uncertainty. With a larger a, T falls well below mg and the shortcut overestimates I.

| Point | What earns it |
|---|---|
| 1 | a = 2h ÷ t² and α = a ÷ r |
| 1 | T from the falling mass's second law, less than mg |
| 1 | τ = Tr and I = τ ÷ α, or the symbolic expression |
| 1 | I ≈ 0.022 kg·m² and 0.052 kg·m² |
| 1 | Uses I = I_t + 2m_b d² for both runs |
| 1 | m_b ≈ 0.40 kg and I_t ≈ 0.020 kg·m² |
| 1 | Judges the shortcut by comparing a with g |

**Total: 7 points.**
</details>

## Question 6 (constructed response · mixed)

A bench grinder's wheel has rotational inertia 0.0060 kg·m² (given) and radius 0.10 m; take its spin direction as positive. Its ω–t graph has three straight sections: 0 to 150 rad/s from 0 to 4.0 s; steady at 150 rad/s until 10.0 s; then, with the motor off, down to 0 at 40.0 s. The bearing's friction torque is constant.

(a) Find the friction torque from the last section of the graph.
(b) Find the motor torque from 0 to 4.0 s, and from 4.0 s to 10.0 s.
(c) Find the total number of revolutions, and the rim speed at full speed.
(d) A student says: "From 4.0 s to 10.0 s the wheel is spinning, so there must be a net torque on it." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Slope after switch-off: α = −150 ÷ 30 = −5.0 rad/s². Only friction acts, so τ_f = Iα = **−0.030 N·m** (against the spin).

**(b)** 0–4.0 s: α = 37.5 rad/s², so τ_net = 0.0060 × 37.5 = 0.225 N·m = τ_motor − 0.030, giving **τ_motor = 0.26 N·m** (0.255). 4.0–10.0 s: α = 0, so **τ_motor = 0.030 N·m**, cancelling friction.

**(c)** Areas: 300 + 900 + 2250 = 3450 rad, so 3450 ÷ 2π = **549 rev** (5.5 × 10²). Rim speed v = rω = 0.10 × 150 = **15 m/s**.

**(d)** **Incorrect.** The graph is flat there, so α = 0 and Στ = 0: the motor's torque balances friction. A net torque is needed to **change** ω, not to keep it.

| Point | What earns it |
|---|---|
| 1 | Friction torque 0.030 N·m from the switch-off slope (−5.0 rad/s²) |
| 1 | Spin-up motor torque 0.26 N·m, adding back friction |
| 1 | Steady motor torque equal to friction, 0.030 N·m |
| 1 | Total angle 3450 rad from the areas, about 549 rev |
| 1 | Rim speed 15 m/s |
| 1 | Rejects the claim **because** constant ω means zero net torque |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

A stepped pulley turns on a fixed, frictionless axle; I = 0.045 kg·m² (given). A rope on the outer step (R = 0.20 m) holds block 1 (m₁ = 2.0 kg) on the left; a rope on the inner step (r = 0.10 m) holds block 2 (m₂ = 5.0 kg) on the right. When block 2 goes down, block 1 goes up.

(a) Find the m₂ that would hold the system at rest. Hence predict which way it turns with m₂ = 5.0 kg.
(b) Write separate equations for block 1, block 2 and the pulley, and the two links between a₁, a₂ and α.
(c) Derive α = g(m₂r − m₁R) ÷ (I + m₁R² + m₂r²), then find α, both block accelerations and both tensions.
(d) A student says: "Block 2 is heavier, so it moves down faster than block 1 moves up." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At rest, tensions equal weights and Στ = 0: m₂gr = m₁gR, so m₂ = m₁R ÷ r = **4.0 kg**. With 5.0 kg, block 2's torque (4.90 N·m) beats block 1's (3.92 N·m), so block 2 descends.

**(b)** Motion direction positive. Block 1 (up): T₁ − m₁g = m₁a₁. Block 2 (down): m₂g − T₂ = m₂a₂. Pulley: T₂r − T₁R = Iα. Links: a₁ = Rα, a₂ = rα.

**(c)** Substitute T₁ = m₁(g + Rα) and T₂ = m₂(g − rα) into the pulley equation and collect α.
α = 9.8(0.50 − 0.40) ÷ (0.045 + 0.080 + 0.050) = **5.6 rad/s²**.
a₁ = **1.1 m/s² up** (1.12); a₂ = **0.56 m/s² down**. T₁ = 2.0(9.8 + 1.12) = **22 N**; T₂ = 5.0(9.8 − 0.56) = **46 N**.
Check: T₂r − T₁R = 4.62 − 4.37 = 0.25 N·m = Iα. ✓

**(d)** **Incorrect.** Both ropes come off one rigid pulley, so they share α, and a = rα. Block 1 hangs from twice the radius, so it accelerates **twice as fast** as block 2. Mass decides the sense of rotation, through torque, not which block moves faster.

| Point | What earns it |
|---|---|
| 1 | Balance mass 4.0 kg from torques, and correct prediction of the sense |
| 1 | Correct second-law equations for both blocks |
| 1 | Pulley equation with two different tensions |
| 1 | Links a₁ = Rα and a₂ = rα |
| 1 | α = 5.6 rad/s² from the derived expression |
| 1 | a₁ ≈ 1.1 m/s², a₂ ≈ 0.56 m/s², T₁ ≈ 22 N, T₂ ≈ 46 N |
| 1 | Rejects the claim **because** the blocks share α and a = rα |

**Total: 7 points.**
</details>

## How did you do?

Questions 4 and 6 are worth 6 points and Questions 5 and 7 are worth 7 each on the suggested Marlbridge rubric. Use the points you lost, not the total, to choose what to study.

- **Questions 1, 2 or 6 (angles, ω and α over time):** [Topic 5.1 checklist](/advanced-course-resources/physics-1/5-1-rotational-kinematics-checklist/).
- **Questions 1, 3, 4(d), 5 or 7 (v = rω, a = rα):** [Topic 5.2 checklist](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-checklist/).
- **Questions 3, 4(a) or 7(a) (torque and lever arm):** [Topic 5.3 checklist](/advanced-course-resources/physics-1/5-3-torque-checklist/).
- **Questions 2 or 5(d) (rotational inertia):** [Topic 5.4 checklist](/advanced-course-resources/physics-1/5-4-rotational-inertia-checklist/).
- **Questions 3, 4(a)–(b), 6(d) or 7(a) (balance, constant ω):** [Topic 5.5 checklist](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-checklist/).
- **Questions 1, 4(c)–(d), 5, 6 or 7 (α = τ_net / I):** [Topic 5.6 checklist](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-checklist/).
- **Quick check of every topic:** retake the [unit diagnostic](/advanced-course-resources/physics-1/unit-5-diagnostic/).
