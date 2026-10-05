---
resourceId: "mb-ap-phys1-u2-review"
title: "Force and Translational Dynamics: Mixed Unit Review (Physics 1 Unit 2)"
description: "Connect all nine force and dynamics topics: the big ideas, a one-table summary of key relationships, and seven original exam-style questions that each combine two or more topics."
course: "physics-1"
unit: 2
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have worked through the study guides for Topics 2.1 to 2.9"
prerequisiteResources: ["mb-ap-phys1-u2-diagnostic"]
learningObjectives:
  - "Link system choice, free-body diagrams, force pairs and Newton's laws into one method for any force problem"
  - "Combine friction, spring and gravitational force models with the second law in multi-step problems"
  - "Decide between static and kinetic friction, and check a result with limiting cases"
  - "Analyse circular motion and orbits with real forces, including a derived symbolic result"
  - "Explain why an accelerating frame is not inertial, using a ground-frame analysis"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus; calculator in degree mode. We use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-u2-diagnostic", "mb-ap-phys1-2.1-checklist", "mb-ap-phys1-2.2-checklist", "mb-ap-phys1-2.3-checklist", "mb-ap-phys1-2.4-checklist", "mb-ap-phys1-2.5-checklist", "mb-ap-phys1-2.6-checklist", "mb-ap-phys1-2.7-checklist", "mb-ap-phys1-2.8-checklist", "mb-ap-phys1-2.9-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Every force answer starts with two choices: which system, and which axes."
  - "Only external forces on the chosen system go into ΣF, and the acceleration points along ΣF, not along the velocity."
  - "Friction, springs and gravity are force models: each gives a size and direction to put on the free-body diagram."
  - "In circular motion, real forces add up to an inward net force of mv²/r. There is no extra centripetal force to draw."
  - "Questions 1–3 are multiple choice; Questions 4–7 are multi-part with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review is for the **algebra-based Physics 1 course**, Unit 2 (Force and Translational Dynamics). It connects the topics and gives you mixed practice. Do the [unit diagnostic](/advanced-course-resources/physics-1/unit-2-diagnostic/) first if you have not yet done it.

## Big ideas of the unit

- **Choose the system first.** Only external forces change how its center of mass moves ([Topic 2.1](/advanced-course-resources/physics-1/2-1-systems-center-mass-study-guide/)).
- **Every force has an object that exerts it.** Ask "on what, by what?". Free-body diagrams show whole forces only, never components or ma ([Topic 2.2](/advanced-course-resources/physics-1/2-2-forces-free-body-diagrams-study-guide/)).
- **Third-law pairs act on different objects,** so a pair never cancels. An ideal string pulls with the same tension at both ends ([Topic 2.3](/advanced-course-resources/physics-1/2-3-newtons-third-law-study-guide/)).
- **Zero net force means constant velocity, not rest.** Apply it one axis at a time. A frame where the first law fails is not inertial ([Topic 2.4](/advanced-course-resources/physics-1/2-4-newtons-first-law-study-guide/)).
- **The acceleration points along the net force:** a = ΣF / m on each axis. Split a connected system to find an internal force ([Topic 2.5](/advanced-course-resources/physics-1/2-5-newtons-second-law-study-guide/)).
- **Gravity is the only long-range force here.** Measure r from centres. A scale reads the normal force, which equals mg only without acceleration ([Topic 2.6](/advanced-course-resources/physics-1/2-6-gravitational-force-study-guide/)).
- **Static friction is whatever is needed, up to μ_s F_n.** Kinetic friction is μ_k F_n. Find F_n from the forces, never assume it is mg ([Topic 2.7](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-study-guide/)).
- **A spring force depends on the change in length,** not on the motion, and always points back towards the relaxed length ([Topic 2.8](/advanced-course-resources/physics-1/2-8-spring-forces-study-guide/)).
- **A circle needs an inward net force of mv²/r,** supplied by real forces or their components ([Topic 2.9](/advanced-course-resources/physics-1/2-9-circular-motion-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method | When it applies |
|---|---|---|
| Center of mass | x_cm = Σm x ÷ Σm (same for y) | up to five particles, or symmetric objects |
| Third law | F_(A on B) = −F_(B on A) | every interaction, any motion |
| Equilibrium | ΣF_x = 0 and ΣF_y = 0 | at rest or constant velocity, inertial frame |
| Second law | ΣF_x = m a_x; ΣF_y = m a_y | external forces on the chosen system |
| Gravitation | F_g = G m₁m₂ / r²; g = GM / r²; weight = mg | r from centre to centre |
| Apparent weight | F_N = m(g + a_y) with +y up | vertical acceleration only |
| Friction | F_f,k = μ_k F_n; F_f,s ≤ μ_s F_n | kinetic: sliding; static: not sliding |
| Spring | F_s = −kΔx | ideal spring; Δx from the relaxed length |
| Circular motion | a_c = v² / r = 4π²r / T²; ΣF_inward = mv² / r | any circle; T² = 4π²r³ / GM for orbits |

## Practice questions

These are **original Marlbridge practice questions**, not past exam questions. The rubric tables are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s², ignore air resistance, treat strings, springs and pulleys as ideal, and treat the ground as an inertial frame.

## Question 1 (multiple choice · mixed)

Take **+y up**. A 60 kg student stands on a scale in a lift accelerating **downward** at 2.0 m/s². Which statement is correct?

- (A) The scale reads 588 N, because the normal force and the student's weight are a third-law pair.
- (B) The scale reads 468 N, and the student pushes down on the scale with 468 N.
- (C) The scale reads 468 N, but the student pushes down on the scale with 588 N, the full weight.
- (D) The scale reads 708 N, because a falling lift presses the student into the floor.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** On the student, F_N − mg = ma_y with a_y = −2.0 m/s², so F_N = 60(9.8 − 2.0) = 468 N. The student's push on the scale is its third-law partner, so it is also 468 N.

- (A) pairs two forces on the same object. Weight pairs with the student's pull on Earth.
- (C) gets the reading right but breaks the third law: the two contact forces must be equal.
- (D) uses a_y = +2.0 m/s², the wrong sign for a downward acceleration.
</details>

## Question 2 (multiple choice · mixed)

A 0.10 kg puck on a frictionless air table is tied to a fixed pin by a light spring with k = 40 N/m and relaxed length 0.20 m. The puck moves in a circle of radius 0.25 m at constant speed. What is its speed?

- (A) 1.0 m/s
- (B) 2.0 m/s
- (C) 2.2 m/s
- (D) 5.0 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The spring is stretched by 0.25 − 0.20 = 0.050 m, so it pulls inward with 40 × 0.050 = 2.0 N. That is the only horizontal force, so 2.0 = mv² ÷ r and v = √(2.0 × 0.25 ÷ 0.10) = 2.2 m/s.

- (A) uses the stretch (0.050 m) as the radius.
- (B) uses the relaxed length as the radius.
- (D) uses the whole length as the stretch, giving a 10 N force.
</details>

## Question 3 (multiple choice · mixed)

Take **+x to the right**. On frictionless ice, a compressed spring sits between a 3.0 kg block and a 1.0 kg block. The spring is released, and at the same moment a hand pulls the 1.0 kg block to the right with a constant 8.0 N. While the spring still pushes, what is the acceleration of the system's center of mass?

- (A) 2.0 m/s² to the right
- (B) 8.0 m/s² to the right
- (C) Zero, because the spring forces cancel
- (D) It cannot be found without the spring constant

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The spring's pushes on the two blocks are a third-law pair inside the system, so they cancel in ΣF. The only horizontal external force is 8.0 N, so a_cm = 8.0 ÷ 4.0 = 2.0 m/s².

- (B) divides by one block's mass instead of the total mass.
- (C) is right that the spring forces cancel, but forgets the external 8.0 N.
- (D) k affects how each block moves, not the center of mass.
</details>

## Question 4 (constructed response · mixed)

Take **+x up the slope and +y perpendicular to it**, away from the surface. A small block is given a push so that it slides **up** a rough ramp inclined at 25°, starting at 4.0 m/s. For the block and ramp, μ_k = 0.30 and μ_s = 0.40.

(a) Draw the free-body diagram while the block slides up.
(b) Show that the size of the block's acceleration while it slides up is about 6.8 m/s².
(c) Find how far up the ramp it slides.
(d) Decide whether the block stays at its highest point or slides back. Justify your answer.
(e) A student says: "The block takes the same time to slide back down as it took to go up." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three arrows from a dot: gravity, vertically down; normal force, perpendicular to the ramp; kinetic friction, **down** the slope.

**(b)** y: F_n = mg cos 25°. x: −mg sin 25° − μ_k mg cos 25° = ma_x, so a_x = −g(sin 25° + μ_k cos 25°) = −9.8(0.423 + 0.272) = **−6.8 m/s²**. The mass cancels.

**(c)** 0 = 4.0² + 2(−6.81)d, so d = 16 ÷ 13.6 = **1.2 m** (1.18 m).

**(d)** To stay at rest, the block needs static friction of mg sin 25° up the slope: 4.1 N for each kilogram. The most available is μ_s mg cos 25°: 3.6 N per kilogram. That is not enough, so the block **slides back**. Equivalently, tan 25° = 0.47 is larger than μ_s = 0.40.

**(e)** **Incorrect.** Sliding down, friction points up the slope, so a = g(sin 25° − μ_k cos 25°) = 1.5 m/s². Over the same 1.18 m, t_up = 4.0 ÷ 6.81 = 0.59 s but t_down = √(2 × 1.18 ÷ 1.48) = 1.3 s. Friction adds to gravity's component going up and subtracts from it coming down.

| Point | What earns it |
|---|---|
| 1 | Three forces, with friction down the slope while sliding up |
| 1 | F_n = mg cos 25°, not mg |
| 1 | Acceleration 6.8 m/s² down the slope, with both terms |
| 1 | Distance 1.2 m |
| 1 | Compares mg sin 25° with μ_s mg cos 25° (or tan 25° with μ_s) |
| 1 | Concludes it slides back |
| 1 | Rejects the claim **because** friction reverses, so the acceleration is smaller and the time longer |

**Total: 7 points.**
</details>

## Question 5 (constructed response · mixed)

A block of mass m₁ = 2.0 kg rests on a rough, level table. A light string runs from it, over a light frictionless pulley at the table's edge, to a hanging mass m₂. For the block and table, μ_s = 0.45 and μ_k = 0.30.

(a) Find the largest m₂ for which the block stays at rest when released. Explain how the tension compares at the two ends of the string.
(b) With m₂ = 1.5 kg the block slides. Derive an expression for the acceleration in terms of m₁, m₂, μ_k and g, then evaluate it.
(c) Find the tension, and explain why it is less than m₂g.
(d) Show that your expression in (b) gives a sensible result when μ_k = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At rest, T = m₂g. The string and pulley are ideal, so the string pulls the block with the same T. The block holds while T ≤ μ_s m₁g, so the largest m₂ = μ_s m₁ = **0.90 kg**.

**(b)** Take each object's direction of motion as positive. Block: T − μ_k m₁g = m₁a. Hanging mass: m₂g − T = m₂a. Adding removes T:
**a = (m₂ − μ_k m₁)g ÷ (m₁ + m₂)** = (1.5 − 0.60)(9.8) ÷ 3.5 = **2.5 m/s²** (2.52 m/s²).

**(c)** T = m₂(g − a) = 1.5(9.8 − 2.52) = **11 N** (10.9 N). The hanging mass accelerates downward, so T must be less than m₂g = 14.7 N.

**(d)** With μ_k = 0, a = m₂g ÷ (m₁ + m₂) = 4.2 m/s²: the hanging weight alone drives the whole mass, the frictionless result.

| Point | What earns it |
|---|---|
| 1 | Static friction balances T = m₂g at rest; 0.90 kg from μ_s m₁ |
| 1 | Same tension at both ends because the string and pulley are ideal |
| 1 | Two correct second-law equations, with kinetic friction μ_k m₁g |
| 1 | Expression for a and 2.5 m/s² |
| 1 | T ≈ 11 N, less than m₂g because m₂ accelerates downward |
| 1 | Limiting case reduces to m₂g ÷ (m₁ + m₂) |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

The fictional planet Corvane has mass 9.0 × 10²³ kg and radius 4.0 × 10⁶ m, and it spins once every 10.0 h. A "synchronous" satellite circles above the equator with a period equal to the spin period.

(a) Find the gravitational field strength at Corvane's surface.
(b) Starting from Newton's second law and the law of gravitation, derive an expression for the radius r of a synchronous orbit, then evaluate it.
(c) Find the satellite's speed, and show that its centripetal acceleration equals Corvane's field strength at radius r.
(d) A student says: "A heavier satellite would need a lower orbit to keep the same period, because Corvane pulls on it harder." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** g = GM ÷ R² = (6.67 × 10⁻¹¹)(9.0 × 10²³) ÷ (4.0 × 10⁶)² = **3.8 N/kg** (3.75 N/kg).

**(b)** Gravity is the only force and points to the centre: GMm ÷ r² = mv² ÷ r, with v = 2πr ÷ T. So GM ÷ r = 4π²r² ÷ T², which gives **r = (GMT² ÷ 4π²)^(1/3)**.
With T = 10.0 × 3600 = 3.60 × 10⁴ s: r = [(6.00 × 10¹³)(3.60 × 10⁴)² ÷ 39.5]^(1/3) = **1.3 × 10⁷ m** (1.25 × 10⁷ m), about 3.1 planet radii from the centre.

**(c)** v = 2πr ÷ T = 2π(1.254 × 10⁷) ÷ (3.60 × 10⁴) = **2.2 × 10³ m/s**. a_c = v² ÷ r = 0.38 m/s², and GM ÷ r² = 0.38 N/kg. They agree because gravity is the only force.

**(d)** **Incorrect.** The larger force comes with proportionally more inertial mass, so m cancels in (b). The radius depends only on G, M and T.

| Point | What earns it |
|---|---|
| 1 | 3.8 N/kg with r = R |
| 1 | Sets gravity equal to mv² ÷ r and uses v = 2πr ÷ T |
| 1 | r = (GMT² ÷ 4π²)^(1/3) |
| 1 | r ≈ 1.3 × 10⁷ m, with T in seconds |
| 1 | Speed 2.2 × 10³ m/s and a_c = GM ÷ r² ≈ 0.38 m/s² |
| 1 | Rejects the claim **because** the satellite's mass cancels |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

Take **+x forward and +y up**. A 0.20 kg ball hangs from the roof of a van on a light spring with k = 25 N/m. The van speeds up along a level road at a constant 3.0 m/s². The spring settles at a steady angle to the vertical, and the ball is at rest **relative to the van**.

(a) Draw the ball's free-body diagram as seen from the roadside.
(b) Find the angle between the spring and the vertical, and say which way the ball hangs.
(c) Find the spring's extension, and compare it with the extension when the van is parked.
(d) A passenger says: "The ball is at rest, so the forces on it balance. The spring pulls it forward, so something must push it backward." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two arrows from a dot: gravity (Earth on ball), down; spring force (spring on ball), along the spring, up and forward.

**(b)** Seen from the road, the ball accelerates with the van. y: F_s cos θ = mg. x: F_s sin θ = ma. Dividing: tan θ = a ÷ g = 3.0 ÷ 9.8, so **θ = 17°**. The ball hangs **backward**, so the spring tilts forward from the ball to the roof.

**(c)** F_s = m√(g² + a²) = 0.20 × 10.25 = 2.05 N, so Δx = 2.05 ÷ 25 = **0.082 m** (8.2 cm). Parked: Δx = mg ÷ k = 0.078 m. The spring now also supplies a horizontal component.

**(d)** **Incorrect.** The ball is at rest only relative to the accelerating van, which is **not an inertial frame**. From the road, the ball accelerates at 3.0 m/s², so the forces do **not** balance: the net force is ma = 0.60 N forward, from the spring's horizontal component. No object pushes the ball backward.

| Point | What earns it |
|---|---|
| 1 | Exactly two forces, the spring force along the spring |
| 1 | Vertical balance and horizontal ΣF = ma, in the ground frame |
| 1 | θ = 17°, ball hanging backward |
| 1 | Extension 8.2 cm, larger than 7.8 cm when parked |
| 1 | Van is not inertial, so "at rest, so balanced" fails there |
| 1 | Net forward force 0.60 N from the spring, with no backward force needed |

**Total: 6 points.**
</details>

## How did you do?

Question 4 is worth 7 points and Questions 5–7 are worth 6 each on the suggested Marlbridge rubric. Use the points you lost, not the total, to choose what to study.

- **Questions 1 or 3 (force pairs, internal forces):** [Topic 2.1](/advanced-course-resources/physics-1/2-1-systems-center-mass-checklist/) and [Topic 2.3](/advanced-course-resources/physics-1/2-3-newtons-third-law-checklist/) checklists.
- **Questions 4 or 7 (diagrams, frames):** [Topic 2.2](/advanced-course-resources/physics-1/2-2-forces-free-body-diagrams-checklist/) and [Topic 2.4](/advanced-course-resources/physics-1/2-4-newtons-first-law-checklist/) checklists.
- **Questions 3, 5 or 7 (ΣF = ma):** [Topic 2.5 checklist](/advanced-course-resources/physics-1/2-5-newtons-second-law-checklist/).
- **Questions 1 or 6 (gravity, apparent weight):** [Topic 2.6 checklist](/advanced-course-resources/physics-1/2-6-gravitational-force-checklist/).
- **Questions 4 or 5 (friction):** [Topic 2.7 checklist](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-checklist/).
- **Questions 2 or 7 (springs):** [Topic 2.8 checklist](/advanced-course-resources/physics-1/2-8-spring-forces-checklist/).
- **Questions 2 or 6 (circles, orbits):** [Topic 2.9 checklist](/advanced-course-resources/physics-1/2-9-circular-motion-checklist/).
- **Quick check of every topic:** retake the [unit diagnostic](/advanced-course-resources/physics-1/unit-2-diagnostic/).
