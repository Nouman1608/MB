---
resourceId: "mb-ap-phys1-7.1-practice"
title: "Defining Simple Harmonic Motion (SHM): Practice Questions (Physics 1 7.1)"
description: "Seven original Marlbridge practice questions on equilibrium, restoring forces, the SHM condition, vertical springs and small-angle pendulums, with worked solutions and suggested mark points."
course: "physics-1"
unit: 7
topics: ["7.1"]
resourceType: "practice-questions"
prerequisites:
  - "Hooke's law and Newton's second law along one axis"
prerequisiteResources: ["mb-ap-phys1-7.1-study-guide"]
learningObjectives:
  - "Decide whether a system moves in SHM from its force law or from force data"
  - "Use a = −(k/m)x to find the size and direction of an acceleration"
  - "Find the equilibrium of a vertical spring and the net force about it"
  - "Justify when a pendulum can be modelled as SHM"
  - "Evaluate a claim that a periodic motion is simple harmonic"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus. g = 9.8 m/s². Angles in radians where θ and sin θ are compared. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-7.1-study-guide", "mb-ap-phys1-7.1-revision-notes", "mb-ap-phys1-7.1-checklist"]
next: "mb-ap-phys1-7.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis and where x = 0 is. Use it for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s². Springs and strings are ideal and surfaces are frictionless unless stated. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end.

## Question 1 (multiple choice · foundation)

In each case below, x is the object's displacement from its equilibrium position. Which object moves in simple harmonic motion?

- (A) A cart on a track that always feels a net force of 2.0 N directed toward the centre of the track
- (B) A block for which the net force is F_net = −(30 N/m)x
- (C) A puck sliding back and forth on ice between two walls, bouncing off each wall without losing speed
- (D) A block for which the net force always points toward equilibrium and has size proportional to x²

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The force is opposite to the displacement and proportional to it, which is exactly the SHM condition F_net = −kx, with k = 30 N/m.

- (A) is a restoring force, but its size stays at 2.0 N whatever x is. The motion repeats but is not SHM.
- (C) is periodic, but the puck feels no force except at the walls. Force is not proportional to x.
- (D) is a restoring force, but doubling x makes it four times bigger, not twice as big. It is not proportional to x.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**, with x = 0 at equilibrium. A block on a horizontal spring is at x = +2.0 cm and is moving to the right. Which statement about its acceleration at this instant is correct?

- (A) It is to the right, in the direction of the velocity.
- (B) It is to the left, toward equilibrium.
- (C) It is zero, because the block has not yet reached the end of its motion.
- (D) Its direction cannot be found without knowing the speed.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** a = −(k/m)x. With x positive, a is negative: to the left, toward equilibrium. The block is moving right but slowing down.

- (A) assumes acceleration points the way the object moves. The spring force depends on position, not on velocity.
- (C) confuses the two special points. Acceleration is zero only at x = 0; at the end of the motion the *velocity* is zero.
- (D) is wrong because a depends only on x (and k and m), not on speed.
</details>

## Question 3 (multiple choice · core)

Take **+x to the right**, with x = 0 at equilibrium. An object in SHM has an acceleration of 1.2 m/s² to the left when it is at x = +3.0 cm. What is its acceleration when it is at x = −5.0 cm?

- (A) 1.2 m/s² to the right
- (B) 0.72 m/s² to the right
- (C) 2.0 m/s² to the left
- (D) 2.0 m/s² to the right

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** In SHM the size of a is proportional to the size of x, so |a| = 1.2 × (5.0 ÷ 3.0) = 2.0 m/s². The object is now on the left of equilibrium, so the acceleration points right.

- (A) assumes the acceleration has the same size everywhere.
- (B) uses the inverse ratio, 1.2 × 3.0 ÷ 5.0. Further from equilibrium means more acceleration, not less.
- (C) has the right size but keeps the old direction. The acceleration always points toward x = 0.
</details>

## Question 4 (calculation · core)

Take **+y downward**. A 0.50 kg mass hangs from a spring with k = 80 N/m.

(a) Calculate the stretch of the spring when the mass hangs at equilibrium.
(b) The mass is lifted to 4.0 cm **above** equilibrium and held. Calculate the spring force and the net force on it just after it is released, and its acceleration.

<details>
<summary>Worked solution</summary>

**(a)** At equilibrium kd = mg, so d = (0.50 × 9.8) ÷ 80 = 4.9 N ÷ 80 N/m = 0.06125 m ≈ **0.061 m** (6.1 cm).

**(b)** The spring is still stretched, by 6.125 − 4.0 = 2.125 cm = 0.02125 m. Spring force = 80 × 0.02125 = **1.7 N upward**. Weight = 4.9 N downward. Net force = 4.9 − 1.7 = **3.2 N downward**. a = 3.2 ÷ 0.50 = **6.4 m/s² downward**, toward equilibrium.

**Check.** Measured from equilibrium, F_net = −ky = −80 × (−0.040) = +3.2 N, i.e. 3.2 N downward. The same answer, as it must be for SHM.

Suggested mark points (4): 1 for d from kd = mg; 1 for the new stretch measured from the relaxed length; 1 for the spring force and the net force with directions; 1 for 6.4 m/s² downward.

Common error: using only the spring force, 1.7 N ÷ 0.50 kg = 3.4 m/s² upward. That forgets the weight, and points the wrong way.
</details>

## Question 5 (constructed response · core)

Take **+x to the right**, x = 0 at equilibrium. A 0.75 kg cart is held between two stretched rubber cords on a level track. A force sensor measures the size of the net force on the cart at different displacements to the right. The force always points toward x = 0.

| x (cm) | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|
| \|F_net\| (N) | 0.30 | 0.60 | 0.90 | 1.35 | 2.00 |

(a) Sketch the shape of the graph of F_net (with sign) against x for x from −10 cm to +10 cm, assuming the cords behave the same way on both sides.
(b) A student claims: "The cart will move in SHM whatever its amplitude." Use the data to evaluate the claim.
(c) The cart is released from rest at x = +5.0 cm. Calculate its acceleration at release.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A curve through the origin, with F_net negative for positive x and positive for negative x. It is a straight line for small |x| and bends more steeply beyond about 6 cm (like Figure 1c in the study guide).

**(b)** Find |F_net| ÷ x: 15, 15, 15, 16.9 and 20 N/m. Up to 6.0 cm the ratio is constant, so the force is proportional to displacement and the motion is SHM with k = 15 N/m. Beyond 6.0 cm the ratio grows, so the force is no longer proportional to x. The claim is **wrong**: the motion is only SHM for amplitudes up to about 6 cm.

**(c)** x = 5.0 cm is inside the linear range, so use k = 15 N/m: F = 15 × 0.050 = 0.75 N, and a = −(k/m)x = −(15 ÷ 0.75) × 0.050 = **−1.0 m/s²** (1.0 m/s² to the left).

| Point | What earns it |
|---|---|
| 1 | Sketch passes through the origin with a negative slope, and is symmetric through the origin |
| 1 | Sketch is straight near the origin and steeper at large \|x\| |
| 1 | Calculates F/x (or uses equal steps of 0.30 N) to show proportion up to 6 cm |
| 1 | Rejects the claim **because** the ratio rises beyond 6 cm, so F is not proportional to x there |
| 1 | −1.0 m/s² (or 1.0 m/s² toward equilibrium), using k = 15 N/m |

A student who notices only "the force always points back to x = 0" and accepts the claim earns no credit for (b): a restoring force is necessary but not enough.
</details>

## Question 6 (constructed response · stretch)

A pendulum has a 0.30 kg bob on a string of length 1.2 m.

(a) Write an expression for the size of the restoring torque about the pivot when the string makes an angle θ with the vertical, and explain why the tension does not appear.
(b) Calculate the restoring torque at θ = 0.10 rad, both exactly and with the small-angle model. Repeat for θ = 1.0 rad.
(c) Use your answers to explain when the pendulum can be modelled as SHM.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** τ = mgℓ sin θ. The weight acts at the bob with lever arm ℓ sin θ about the pivot. The tension acts along the string, through the pivot, so its lever arm and torque are zero.

**(b)** mgℓ = 0.30 × 9.8 × 1.2 = 3.528 N·m.

| θ (rad) | exact, mgℓ sin θ | model, mgℓθ | model too large by |
|---|---|---|---|
| 0.10 (5.7°) | 0.352 N·m | 0.353 N·m | 0.17% |
| 1.0 (57°) | 2.97 N·m | 3.53 N·m | 19% |

**(c)** SHM needs a restoring torque proportional to the angular displacement. At 0.10 rad, mgℓ sin θ and mgℓθ agree to 0.2%, so the torque is effectively proportional to θ: SHM is a good model. At 1.0 rad they differ by about 19%, so the torque is not proportional to θ and the motion is not SHM. The model holds only for small angles.

| Point | What earns it |
|---|---|
| 1 | τ = mgℓ sin θ, with the lever arm identified |
| 1 | Tension has zero torque because it acts through the pivot |
| 1 | Both pairs of torques correct (0.35 and 0.35; 2.97 and 3.53 N·m) |
| 1 | Links SHM to "torque proportional to θ", which holds only when sin θ ≈ θ |
| 1 | Concludes small angles only, with the numbers as evidence |

**Alternative.** Working with force along the arc: at 0.10 rad, mg sin θ = 0.294 N and s = ℓθ = 0.12 m, so F/s ≈ 2.45 N/m, which matches mg/ℓ = 2.45 N/m. A constant ratio of force to displacement is the same argument and earns the fourth point.
</details>

## Question 7 (constructed response · stretch)

Take **+y upward**. A rubber ball is dropped onto a hard floor and bounces back to the same height each time, every 0.64 s. A student says: "The motion repeats at a steady rate, so the ball is in simple harmonic motion."

(a) Calculate the height the ball is dropped from.
(b) Evaluate the student's claim. Refer to the force on the ball and its displacement from a suitable reference point.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Each 0.64 s cycle is a fall and a rise of equal duration, so the fall takes 0.32 s. h = ½gt² = 0.5 × 9.8 × 0.32² ≈ **0.50 m**.

**(b)** The claim is **incorrect**. The motion is periodic, but SHM also needs a net force proportional to the displacement from an equilibrium position and opposite to it. While the ball is in the air, the net force is its weight, mg downward, and it is the **same at every height**. So the force does not grow as the ball moves further from any reference point. The only other force is a large, brief push from the floor. No point exists about which F_net = −ky.

Extra evidence: if the ball were dropped from 2.0 m instead, each cycle would take 2 × √(2 × 2.0 ÷ 9.8) ≈ 1.3 s. Topic 7.2 shows that an SHM period does not change with amplitude, so this is a second sign the motion is not SHM.

| Point | What earns it |
|---|---|
| 1 | Fall time 0.32 s (half the period) |
| 1 | h ≈ 0.50 m |
| 1 | States the SHM condition: restoring force proportional to displacement |
| 1 | Notes the force in the air is a constant mg, independent of height |
| 1 | Concludes the motion is periodic but not SHM |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "SHM compared with other periodic motion" in the [study guide](/advanced-course-resources/physics-1/7-1-defining-simple-harmonic-motion-shm-study-guide/). Periodic is not enough.
- **Q2 or Q3 wrong:** go back to "The condition for SHM". Acceleration depends on position, and always points toward equilibrium.
- **Q4 wrong:** work through Worked example 2 (vertical spring). Measure from equilibrium.
- **Q5 incomplete:** see Worked example 1 and Figure 1c. Test proportion, not just direction.
- **Q6 incomplete:** revisit "The pendulum: a restoring torque" and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/7-1-defining-simple-harmonic-motion-shm-checklist/).
