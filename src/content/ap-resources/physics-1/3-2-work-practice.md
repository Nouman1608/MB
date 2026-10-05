---
resourceId: "mb-ap-phys1-3.2-practice"
title: "Work: Practice Questions (Physics 1 3.2)"
description: "Seven original Marlbridge practice questions on work: forces at an angle, signs of work, path independence, force–position graphs, circular motion with friction, a work-energy experiment and a push-off."
course: "physics-1"
unit: 3
topics: ["3.2"]
resourceType: "practice-questions"
prerequisites:
  - "Free-body diagrams, force components and kinetic friction"
  - "Translational kinetic energy, K = ½mv²"
prerequisiteResources: ["mb-ap-phys1-3.2-study-guide"]
learningObjectives:
  - "Calculate the work done by a constant force at an angle to the displacement"
  - "Decide the sign of the work done by each force on a moving object"
  - "Use path independence to find the work done by gravity"
  - "Use the area under a force–position graph with the work-energy theorem"
  - "Design and analyse an experiment that tests the work-energy theorem"
  - "Justify which forces do work when a point of application does not move"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-3.2-study-guide", "mb-ap-phys1-3.2-revision-notes", "mb-ap-phys1-3.2-checklist"]
next: "mb-ap-phys1-3.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "For every force, ask: does its point of application move, and at what angle to the force?"
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

A rope pulls a crate with a constant 40 N force at 60° to the crate's displacement. The crate moves 5.0 m. How much work does the rope do on the crate?

- (A) 0 J
- (B) 100 J
- (C) 173 J
- (D) 200 J

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** W = Fd cos θ = 40 N × 5.0 m × cos 60° = 40 × 5.0 × 0.50 = 100 J.

- (A) assumes a force at an angle does no work. Only a force at exactly 90° to the motion does zero work.
- (C) uses sin 60° instead of cos 60°. That is the work the perpendicular component would do if it were along the motion, which it is not.
- (D) uses W = Fd and ignores the angle.
</details>

## Question 2 (multiple choice · core)

A box is shoved up a rough ramp. After it leaves the hand, it slides up the ramp and slows down. While it slides up, what is the sign of the work done on the box by gravity, by friction and by the normal force?

- (A) gravity negative, friction negative, normal force zero
- (B) gravity zero, friction negative, normal force zero
- (C) gravity negative, friction positive, normal force zero
- (D) gravity positive, friction negative, normal force positive

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The box moves up the slope. Gravity has a component down the slope, opposite to the motion, so its work is negative. Kinetic friction points down the slope, opposite to the motion, so its work is negative. The normal force is perpendicular to the ramp, so its work is zero. Both negative works remove kinetic energy, which is why the box slows.

- (B) treats gravity as perpendicular to the motion. Only the normal force is perpendicular; gravity has a component along the slope.
- (C) thinks friction helps the box up the slope. Kinetic friction opposes sliding.
- (D) gives positive work to gravity, which would be true only on the way down, and positive work to a force that is perpendicular to the motion.
</details>

## Question 3 (multiple choice · core)

A 5.0 kg box is raised from the floor onto a shelf 1.2 m higher. Route 1: lift it straight up. Route 2: push it up a frictionless ramp 3.0 m long. How much work does gravity do on the box for each route?

- (A) −59 J for both routes
- (B) −59 J for route 1 and −147 J for route 2
- (C) −59 J for route 1 and −24 J for route 2
- (D) −59 J for route 1 and 0 J for route 2, because the ramp supports the box

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Gravity is conservative, so its work depends only on the change in height: W = −mgh = −5.0 × 9.8 × 1.2 = −58.8 J ≈ −59 J for any route. On the ramp, gravity's component along the slope (mg × 1.2/3.0) acts over 3.0 m, and the product is the same −58.8 J.

- (B) multiplies the full weight by the ramp length. Only the component of gravity along the ramp does work on the ramp route.
- (C) multiplies by sin θ twice: it uses mgh and then also the factor 1.2/3.0 = 0.40.
- (D) confuses the normal force (which does zero work) with gravity. The ramp does not stop gravity acting.
</details>

## Question 4 (calculation · core)

Take **+x to the right**. A 0.50 kg puck moves at +2.0 m/s on frictionless ice. Starting at x = 0, a horizontal force acts on it. The force is +4.0 N from x = 0 to x = 0.50 m, then −2.0 N from x = 0.50 m to x = 1.00 m.

(a) Sketch the force–position graph and find the total work done from 0 to 1.00 m.
(b) Find the puck's speed at x = 1.00 m.
(c) Find the greatest speed of the puck, and where it occurs.

<details>
<summary>Worked solution</summary>

**(a)** The graph is a rectangle 4.0 N high above the axis from 0 to 0.50 m, then a rectangle 2.0 N deep below the axis from 0.50 m to 1.00 m. Areas: +4.0 × 0.50 = +2.0 J and −2.0 × 0.50 = −1.0 J. Total **W = +1.0 J**.

**(b)** K₀ = ½ × 0.50 × 2.0² = 1.0 J. K = 1.0 + 1.0 = 2.0 J, so v = √(2 × 2.0 ÷ 0.50) = √8.0 = **2.8 m/s**.

**(c)** The puck speeds up while the force is positive and slows down after x = 0.50 m. At 0.50 m, K = 1.0 + 2.0 = 3.0 J, so v = √12 = **3.5 m/s at x = 0.50 m**.

Suggested mark points (4): 1 for a correct sketch with negative area below the axis; 1 for +1.0 J; 1 for 2.8 m/s using ΔK = W_net; 1 for 3.5 m/s at 0.50 m with a reason. Common error: adding both areas as positive (3.0 J) gives 4.0 m/s at the end, which ignores the backward force.
</details>

## Question 5 (calculation · core)

A 0.20 kg puck is tied to a string and moves in a horizontal circle of radius 0.60 m on a table, starting at 3.0 m/s.

(a) The table is frictionless. How much work does the string tension do on the puck in one revolution? Explain.
(b) The table is now replaced by a rough one. Kinetic friction of 0.15 N acts on the puck, opposite to its velocity. Find the energy dissipated by friction in the first revolution and the puck's speed after it.

<details>
<summary>Worked solution</summary>

**(a)** **Zero.** The tension always points to the centre, perpendicular to the puck's velocity, so cos 90° = 0 at every instant. It changes the direction of the puck's motion but not its kinetic energy, so the speed stays 3.0 m/s.

**(b)** Path length of one revolution = 2πr = 2π × 0.60 = 3.77 m. Energy dissipated = 0.15 N × 3.77 m = **0.57 J**. K₀ = ½ × 0.20 × 3.0² = 0.90 J, so K = 0.90 − 0.565 = 0.335 J and v = √(2 × 0.335 ÷ 0.20) = **1.8 m/s**.

Suggested mark points (4): 1 for zero work by tension; 1 for the reason (perpendicular to velocity at every point); 1 for using the path length 2πr, not the displacement (which is zero for a full circle); 1 for 1.8 m/s. A student who uses the displacement gets zero friction work; that cannot be right, because friction acts opposite to the motion the whole way round.
</details>

## Question 6 (experimental design · stretch)

A student wants to test the work-energy theorem. She has a low-friction cart (mass 0.80 kg), a level track, a light string over a pulley with a hanging mass, a force sensor attached to the cart, a metre rule and a photogate.

(a) Describe a procedure to measure how the cart's final speed depends on the distance over which a constant force acts. Say what is kept constant and what is varied.
(b) With a constant 2.0 N force on the cart, starting from rest, she records:

| d (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| v (m/s) | 0.99 | 1.42 | 1.72 | 2.01 | 2.23 |

Use the work-energy theorem to decide what to plot for a straight line. Plot it and find the slope.
(c) Compare the slope with the theorem's prediction, and use your slope to find the cart's mass.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Release the cart from rest at a marked start line. Place the photogate at a distance d further along the track; measure d with the metre rule. Use the force sensor to check the string tension stays at the same value (keep the same hanging mass). Record the cart's speed at the gate. Repeat each distance three times and average. Change d (for example 0.20 m to 1.00 m in 0.20 m steps). Keep constant: the cart's mass, the hanging mass and the start position. Vary: d.

**(b)** From the theorem, Fd = ½mv², so **v² = (2F/m) d**. Plot v² (vertical, m²/s²) against d (horizontal, m).

| d (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| v² (m²/s²) | 0.98 | 2.02 | 2.96 | 4.04 | 4.97 |

The points lie on a straight line through the origin. Slope ≈ (4.97 − 0.98) ÷ (1.00 − 0.20) = **5.0 m/s²** (a best-fit line gives 4.99 m/s²).

**(c)** Predicted slope = 2F/m = 2 × 2.0 ÷ 0.80 = 5.0 m/s². The measured slope agrees to within 1%, which supports the theorem. Using the slope: m = 2F ÷ slope = 2 × 2.0 ÷ 4.99 = **0.80 kg**, matching the cart's mass.

| Point | What earns it |
|---|---|
| 1 | A workable procedure: release from rest, measure d, measure speed at d with the photogate |
| 1 | Identifies d as the variable changed and force and mass as controlled, with repeats |
| 1 | Derives v² ∝ d from Fd = ½mv² and plots v² against d with labelled axes and units |
| 1 | Slope ≈ 5.0 m/s² with unit |
| 1 | Compares with 2F/m and finds m ≈ 0.80 kg |

**Alternative method.** Calculating ½mv² for each run and plotting it against Fd should give a line of slope 1 through the origin. This earns full credit if the comparison with the theorem is stated.
</details>

## Question 7 (constructed response · stretch)

A 60 kg roller skater stands at rest facing a wall. She pushes against the wall with her hands and rolls away at 2.0 m/s. Ignore friction with the floor.

A student says: "The skater gained 120 J of kinetic energy, so the wall did 120 J of work on her."

(a) Confirm the skater's gain in kinetic energy.
(b) Evaluate the student's claim, and explain where the skater's kinetic energy came from.
(c) Explain why the skater cannot be modelled as a single object during the push.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** ΔK = ½ × 60 × 2.0² − 0 = **120 J**.

**(b)** The claim is **incorrect**. Work needs the point of application of the force to move. The wall pushes on her hands, and her hands do not move while they touch the wall. So the wall's force acts over zero distance and does **zero work**. The energy came from inside the skater: chemical energy in her muscles was transformed as her arms straightened and pushed her body away.

**(c)** To model a system as an object, its center of mass and the point where the force acts must move the same distance. Here her center of mass moves away from the wall while her hands (the point of application) stay still. Her shape changes, and internal energy changes, so she must be treated as a system with internal structure.

| Point | What earns it |
|---|---|
| 1 | 120 J |
| 1 | States that the wall does zero work because the point of application does not move |
| 1 | Identifies internal (chemical) energy of the skater as the source |
| 1 | Explains that the center of mass and the point of application move different distances, so the object model fails |

An answer that says "the wall does work because it exerts a force" earns no credit for (b): a force with no displacement of its point of application transfers no energy.
</details>

## How did you do?

- **Q1 wrong:** re-read "Work done by a constant force" and Figure 1 in the [study guide](/advanced-course-resources/physics-1/3-2-work-study-guide/).
- **Q2 wrong:** work through the table "Positive, negative or zero" and Worked example 1.
- **Q3 wrong:** revisit "Conservative and nonconservative forces".
- **Q4 wrong:** study Figure 2 and Worked example 2.
- **Q5 incomplete:** see "Where friction's energy goes" and the circular-motion note under the sign table.
- **Q6 incomplete:** link Fd = ½mv² to a straight-line graph, as in Worked example 3's symbolic step.
- **Q7 incomplete:** re-read "Where the force acts: when is a system an object?"

Then tick off the [topic checklist](/advanced-course-resources/physics-1/3-2-work-checklist/).
