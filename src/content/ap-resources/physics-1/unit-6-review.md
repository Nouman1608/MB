---
resourceId: "mb-ap-phys1-u6-review"
title: "Energy and Momentum of Rotating Systems: Mixed Unit Review (Physics 1 Unit 6)"
description: "Connect all six rotational energy and angular momentum topics: the big ideas, a one-table summary of key relationships, and seven original exam-style questions that each combine two or more topics."
course: "physics-1"
unit: 6
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have worked through the study guides for Topics 6.1 to 6.6"
prerequisiteResources: ["mb-ap-phys1-u6-diagnostic"]
learningObjectives:
  - "Choose between energy (work through an angle) and angular momentum (impulse over a time) for a rotating system"
  - "Combine translational and rotational kinetic energy with constraints such as v = rω in multi-step problems"
  - "Use conservation of angular momentum with a stated system, and explain where kinetic energy is gained or lost"
  - "Explain why static friction does no work in rolling without slipping, and why a string unwinding from a fixed end does no net work"
  - "Analyse orbit changes with energy and angular momentum, and say when angular momentum is not conserved"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angles in radians; angular velocity in rad/s. We use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Rotational inertias of extended objects are given. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-u6-diagnostic", "mb-ap-phys1-6.1-checklist", "mb-ap-phys1-6.2-checklist", "mb-ap-phys1-6.3-checklist", "mb-ap-phys1-6.4-checklist", "mb-ap-phys1-6.5-checklist", "mb-ap-phys1-6.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A torque through an angle changes kinetic energy; a torque over a time changes angular momentum. Pick the one the question gives you."
  - "Angular momentum is conserved for a system with no net external torque. Kinetic energy usually is not."
  - "Rolling without slipping links v_cm = rω, and static friction then does no work."
  - "Orbits keep E and L constant under gravity alone; a rocket burn is an external torque that changes both."
  - "Questions 1–3 are multiple choice; Questions 4–7 are multi-part with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review is for the **algebra-based Physics 1 course**, Unit 6 (Energy and Momentum of Rotating Systems). Do the [unit diagnostic](/advanced-course-resources/physics-1/unit-6-diagnostic/) first if you have not yet done it.

## Big ideas of the unit

- **Rotational kinetic energy is ordinary kinetic energy.** ½Iω² is the ½mv² of every piece added up. An object that moves and spins has ½Mv_cm² + ½I_cm ω² ([Topic 6.1](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-study-guide/)).
- **A torque does work only through an angle:** W = τΔθ, or the signed area under a τ–θ graph. Net work equals ΔK ([Topic 6.2](/advanced-course-resources/physics-1/6-2-torque-work-study-guide/)).
- **A torque acting for a time gives angular impulse:** τΔt = ΔL, or the area under a τ–t graph ([Topic 6.3](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-study-guide/)).
- **Angle or time decides the tool.** Equal τΔt gives equal ΔL, but a lighter wheel turns through a larger angle, so it gains more K.
- **No net external torque, no change in total L.** Internal torques only move L between parts. Choose the system so awkward forces are internal or act through the axis ([Topic 6.4](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-study-guide/)).
- **Conserved L does not mean conserved K.** Sticking collisions lose K; pulling mass inwards gains it.
- **Rolling without slipping links v_cm = rω.** Static friction does no work; it shares energy between translation and rotation ([Topic 6.5](/advanced-course-resources/physics-1/6-5-rolling-study-guide/)).
- **Orbits use both conservation laws.** Gravity has no torque about the central body's centre, so L is constant, and E = K + U_g is constant and negative for a bound orbit ([Topic 6.6](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method | When it applies |
|---|---|---|
| Rotational kinetic energy | K = ½Iω²; K_total = ½Mv_cm² + ½I_cm ω² | ω in rad/s |
| Work by a torque | W = τΔθ, or area under τ–θ; W_net = ΔK | Δθ in radians, with signs |
| Angular momentum | L = Iω (rigid body); L = mvr sin θ = mvd (point object) | about one stated axis or point |
| Angular impulse | τ_net Δt = ΔL, or area under τ–t | add L₀ to find L |
| Conservation | ΣL_before = ΣL_after; I₁ω₁ = I₂ω₂ | no net external torque |
| Kinetic energy and L | K = L² / (2I) | one rigid body, fixed axis |
| Rolling | v_cm = rω, a_cm = rα; K = ½(1 + β)Mv², with I = βMr² | rolling without slipping only |
| Circular orbit | v² = GM/r; K = GMm/(2r); U_g = −GMm/r; E = −K | gravity alone; r from the centre |
| Ellipse and escape | v_near r_near = v_far r_far; v_esc = √(2GM/r) | v ⟂ r at the end points; E = 0 to escape |

## Practice questions

These are **original Marlbridge practice questions**, not past exam questions. The rubric tables are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s². Strings are light, axles frictionless and air resistance and rolling friction negligible unless stated. All planets are fictional.

## Question 1 (multiple choice · mixed)

Disk A, with rotational inertia I, spins at ω₀ on a frictionless axle. Disk B, with rotational inertia 3I, is at rest on the same axle. A clutch locks them together. What fraction of the original kinetic energy is left?

- (A) 1, because angular momentum is conserved
- (B) ¾
- (C) 1/16
- (D) ¼

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The clutch torques are internal, so Iω₀ = 4Iω. With L fixed, K = L² / (2I) falls to ¼ as I rises 4 times. The rest becomes thermal energy in the clutch.

- (A) assumes kinetic energy is conserved whenever angular momentum is.
- (B) is the fraction lost, not the fraction left.
- (C) squares the factor ¼ in ω but forgets that I is now 4 times larger.
</details>

## Question 2 (multiple choice · mixed)

Wheels X and Y start at rest on frictionless axles; Y has 4 times the rotational inertia of X. The same constant torque acts on each for the same time. Which statement is then correct?

- (A) Equal angular momenta and equal kinetic energies.
- (B) Equal angular momenta; X has 4 times the kinetic energy of Y.
- (C) Y has 4 times the angular momentum of X; equal kinetic energies.
- (D) Equal angular momenta; Y has 4 times the kinetic energy of X.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Same τΔt gives the same L. Then K = L² / (2I), so X has 4 times the kinetic energy. As work: X has 4 times the angular acceleration, turns through 4 times the angle, and so receives 4 times the work.

- (A) treats equal angular impulse as equal work.
- (C) gives Y more L because it is heavier. ΔL depends only on τΔt.
- (D) inverts the ratio.
</details>

## Question 3 (multiple choice · mixed)

Two identical thin hoops have mass M and radius R (I = MR²). Hoop P spins at ω on a fixed axle through its centre. Hoop Q rolls without slipping along a level floor at v_cm = Rω. How does the work needed to stop Q compare with that needed to stop P?

- (A) It is the same, because both hoops spin at ω
- (B) It is half as much
- (C) It is twice as much
- (D) It is 4 times as much

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** P has only rotational energy, ½MR²ω². Q has that plus an equal translational energy, ½M(Rω)². Twice the kinetic energy needs twice the work to remove.

- (A) forgets that Q's centre of mass also moves.
- (B) inverts the ratio.
- (D) squares the factor of 2 as if v were doubled.
</details>

## Question 4 (constructed response · mixed)

A flywheel (I = 0.020 kg·m²) is fixed to a drum of radius 0.050 m on a frictionless axle. A light string wrapped around the drum, without slipping, holds a 0.50 kg block. The block is released from rest and falls 0.80 m.

(a) Derive an expression for the block's speed v after falling a height h, in terms of m, I, r, g and h, and evaluate it.
(b) Find the fraction of the lost potential energy that ends up in the flywheel.
(c) Use W = τΔθ for the flywheel to find the tension in the string. Explain why it is less than the block's weight.
(d) Find the time to fall 0.80 m, and show that the string's angular impulse equals the flywheel's change in angular momentum.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** System: block + flywheel + Earth. No energy is dissipated, and the string links the speeds: ω = v / r.
mgh = ½mv² + ½I(v / r)², so **v = √(2mgh ÷ (m + I/r²))**.
I/r² = 0.020 ÷ 0.0025 = 8.0 kg, so v = √(2 × 0.50 × 9.8 × 0.80 ÷ 8.5) = **0.96 m/s**.

**(b)** ω = 0.960 ÷ 0.050 = 19.2 rad/s. Flywheel: ½ × 0.020 × 19.2² = 3.69 J of mgh = 3.92 J, so **94%**.

**(c)** Δθ = 0.80 ÷ 0.050 = 16 rad. The string's torque alone does 3.69 J, so τ = 3.69 ÷ 16 = 0.231 N·m and T = τ / r = **4.6 N**. The block accelerates downward, so T < mg = 4.9 N.

**(d)** a = v² ÷ 2h = 0.576 m/s², so t = v ÷ a = **1.7 s** (1.67 s). Angular impulse τt = 0.231 × 1.67 = 0.384 N·m·s = Iω = 0.020 × 19.2. ✓

| Point | What earns it |
|---|---|
| 1 | Energy equation with both kinetic energies and ω = v / r |
| 1 | Expression for v and 0.96 m/s |
| 1 | About 94% (3.7 J of 3.9 J) in the flywheel |
| 1 | Δθ = h / r and τ from W = τΔθ |
| 1 | T ≈ 4.6 N, less than mg because the block accelerates downward |
| 1 | t ≈ 1.7 s and τt = Iω ≈ 0.38 kg·m²/s |

**Total: 6 points.**
</details>

## Question 5 (constructed response · mixed)

A horizontal rod (I = 0.080 kg·m² alone) spins at 12 rad/s on a frictionless vertical axle. A thread holds two 0.10 kg beads, treated as points, 0.10 m from the axle on either side. The thread is cut, and the beads slide out along the frictionless rod until they hit stops at 0.40 m and stay there.

(a) State the system for which angular momentum is conserved, and justify your choice.
(b) Find the final angular speed.
(c) Find the kinetic energy before and after, and explain the difference.
(d) A motor then brings the system back up to 12 rad/s with a constant torque of 0.50 N·m. Find the time and the angle this takes.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Rod + beads. Rod–bead forces are internal, and gravity and the frictionless axle exert no torque about the vertical axis.

**(b)** I₁ = 0.080 + 2 × 0.10 × 0.10² = 0.082 kg·m². I₂ = 0.080 + 2 × 0.10 × 0.40² = 0.112 kg·m².
ω₂ = 0.082 × 12 ÷ 0.112 = **8.8 rad/s** (8.79 rad/s).

**(c)** K₁ = ½ × 0.082 × 12² = **5.9 J**. K₂ = ½ × 0.112 × 8.79² = **4.3 J**. About **1.6 J** (27%) is lost. While sliding, the beads gain outward speed; the inelastic impacts at the stops turn that energy into thermal energy.

**(d)** Angular impulse needed: ΔL = 0.112 × (12 − 8.79) = 0.36 kg·m²/s, so t = 0.36 ÷ 0.50 = **0.72 s**. Work needed: ½ × 0.112 × 12² − 4.32 = 3.74 J, so Δθ = 3.74 ÷ 0.50 = **7.5 rad**.

| Point | What earns it |
|---|---|
| 1 | Rod + beads, with zero external torque about the axle |
| 1 | Both rotational inertias, including mr² for the beads |
| 1 | ω₂ ≈ 8.8 rad/s |
| 1 | Both energies, with the loss at the stops |
| 1 | 0.72 s from ΔL ÷ τ |
| 1 | 7.5 rad from W ÷ τ |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

A yo-yo of mass 0.20 kg has rotational inertia 1.0 × 10⁻⁴ kg·m² about its centre. Its string is wound around an axle of radius r = 0.010 m. The top of the string is held still and the yo-yo is released from rest. It falls 0.60 m as the string unwinds without slipping, so v_cm = rω.

(a) Explain why the string does no net work on the yo-yo, even though it pulls upward on a falling object.
(b) Find the speed and angular speed after the 0.60 m fall, and the fraction of the kinetic energy that is rotational.
(c) Find the tension in the string, and use it to check the yo-yo's angular momentum after the fall.
(d) A student says: "If the axle were twice as wide, with the same mass and the same rotational inertia, the yo-yo would reach the bottom sooner." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The string leaves the axle at a point that is momentarily at rest, like the contact point of a rolling wheel, so the tension does no work. Its upward pull removes translational energy, but its torque adds exactly that much rotational energy.

**(b)** With I = βMr², β = 1.0 × 10⁻⁴ ÷ (0.20 × 0.010²) = 5.0. Energy: Mgh = ½(1 + β)Mv², so v = √(2 × 9.8 × 0.60 ÷ 6.0) = **1.4 m/s**, and ω = 1.4 ÷ 0.010 = **140 rad/s**. Rotational share = β / (1 + β) = **5/6**: 0.98 J of the 1.18 J.

**(c)** a = v² ÷ 2h = 1.63 m/s² (g/6). With down positive, Mg − T = Ma, so T = 0.20 × (9.8 − 1.63) = **1.6 N**. With t = v ÷ a = 0.857 s, the angular impulse Trt = 1.63 × 0.010 × 0.857 = 0.014 N·m·s equals Iω = 1.0 × 10⁻⁴ × 140 = 0.014 kg·m²/s. ✓

**(d)** **Correct.** With r doubled, β = I / (Mr²) falls to 1.25, so a = g / (1 + β) rises to 4.36 m/s² and the drop takes 0.52 s instead of 0.86 s. A wider axle needs less spin per metre of fall, so less energy goes into rotation.

| Point | What earns it |
|---|---|
| 1 | Tension acts at a point at rest, so it does no net work |
| 1 | Energy equation with both kinetic energies and v = rω |
| 1 | 1.4 m/s and 140 rad/s |
| 1 | Rotational share 5/6 |
| 1 | T ≈ 1.6 N from the second law, with a found first |
| 1 | Trt = Iω ≈ 0.014 kg·m²/s |
| 1 | Supports the claim **because** β falls, so less energy goes into spin |

**Total: 7 points.**
</details>

## Question 7 (constructed response · mixed)

A 1200 kg satellite moves in a circular orbit of radius 1.0 × 10⁷ m around a fictional planet of mass 3.0 × 10²⁴ kg. A short forward rocket burn raises its speed to 5.17 × 10³ m/s. It then follows an ellipse whose farthest point is 2.0 × 10⁷ m from the planet's centre.

(a) Find the satellite's speed in the circular orbit.
(b) Find its speed at the farthest point of the ellipse. Justify the principle you use.
(c) Find the energy supplied by the burn, and show that the satellite is still bound to the planet.
(d) A student says: "Gravity exerts no torque about the planet's centre, so the satellite's angular momentum is unchanged by the burn." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** GM = 6.67 × 10⁻¹¹ × 3.0 × 10²⁴ = 2.0 × 10¹⁴ N·m²/kg. v = √(GM / r) = **4.5 × 10³ m/s** (4.47 × 10³).

**(b)** After the burn only gravity acts. It points at the planet's centre, so it exerts no torque there and L is constant. With v ⟂ r at both points, mv_near r_near = mv_far r_far:
v_far = 5.17 × 10³ × (1.0 × 10⁷ ÷ 2.0 × 10⁷) = **2.6 × 10³ m/s**.

**(c)** The burn is short, so r and U_g do not change during it. Energy supplied = ΔK = ½ × 1200 × (5170² − 4470²) = **4.0 × 10⁹ J**. Afterwards K = 1.60 × 10¹⁰ J and U_g = −GMm / r = −2.40 × 10¹⁰ J, so E = −8.0 × 10⁹ J. E is still negative, so the satellite stays bound.

**(d)** **Incorrect.** During the burn the exhaust pushes the satellite along its path, perpendicular to r. That external force has lever arm r about the planet's centre, so it exerts a torque: L rises from 5.4 × 10¹³ to 6.2 × 10¹³ kg·m²/s. Gravity's zero torque keeps L constant only when gravity acts alone.

| Point | What earns it |
|---|---|
| 1 | Circular speed 4.5 × 10³ m/s from GMm/r² = mv²/r |
| 1 | L constant (no torque from gravity), with v ⟂ r at both points |
| 1 | v_far ≈ 2.6 × 10³ m/s |
| 1 | U_g unchanged during the short burn, so energy supplied = ΔK |
| 1 | 4.0 × 10⁹ J, and E = −8.0 × 10⁹ J < 0, so still bound |
| 1 | Rejects the claim: the thrust exerts an external torque |

**Total: 6 points.**
</details>

## How did you do?

Use the points you lost on the suggested Marlbridge rubric to choose what to study.

- **Questions 1, 3 or 5(c) (kinetic energy):** [Topic 6.1 checklist](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-checklist/).
- **Questions 2, 4(c) or 5(d) (work by a torque):** [Topic 6.2 checklist](/advanced-course-resources/physics-1/6-2-torque-work-checklist/).
- **Questions 2, 4(d) or 6(c) (angular impulse):** [Topic 6.3 checklist](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-checklist/).
- **Questions 1, 5 or 7(d) (conservation and choosing the system):** [Topic 6.4 checklist](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-checklist/).
- **Questions 3, 4(a) or 6 (rolling and v = rω links):** [Topic 6.5 checklist](/advanced-course-resources/physics-1/6-5-rolling-checklist/).
- **Question 7 (orbits):** [Topic 6.6 checklist](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-checklist/).
- **Quick check of every topic:** retake the [unit diagnostic](/advanced-course-resources/physics-1/unit-6-diagnostic/).
