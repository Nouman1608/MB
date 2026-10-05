---
resourceId: "mb-ap-phys1-6.3-practice"
title: "Angular Momentum and Angular Impulse: Practice Questions (Physics 1 6.3)"
description: "Seven original Marlbridge practice questions on angular momentum, angular impulse, torque–time and momentum–time graphs and the rotational impulse–momentum theorem, with worked solutions."
course: "physics-1"
unit: 6
topics: ["6.3"]
resourceType: "practice-questions"
prerequisites:
  - "Torque as force × lever arm, and τ_net = Iα (Unit 5)"
prerequisiteResources: ["mb-ap-phys1-6.3-study-guide"]
learningObjectives:
  - "Calculate the angular momentum of a rigid body and of an object moving in a straight line about a point"
  - "Compare angular impulses and find them from areas under torque–time graphs"
  - "Use τ_net Δt = ΔL with signs to find final angular speeds and stopping times"
  - "Read net torque from the slope of an angular momentum–time graph"
  - "Derive a symbolic expression and predict factors of change"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angular speeds in rad/s. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-6.3-study-guide", "mb-ap-phys1-6.3-revision-notes", "mb-ap-phys1-6.3-checklist"]
next: "mb-ap-phys1-6.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its positive sense of rotation or reference point. Use it for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. All axles are frictionless unless a question says otherwise. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

A 0.50 kg ball moves at a constant 4.0 m/s along a straight line. Point P is 0.30 m from the line (perpendicular distance). At one instant the ball is 0.50 m from P. What is the size of the ball's angular momentum about P at that instant?

- (A) 0
- (B) 0.60 kg·m²/s
- (C) 0.80 kg·m²/s
- (D) 1.0 kg·m²/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Use L = rmv sin θ. The perpendicular distance is r sin θ = 0.30 m, so sin θ = 0.30 ÷ 0.50 = 0.60 and L = 0.50 × 0.50 × 4.0 × 0.60 = 0.60 kg·m²/s. Faster: L = mvd = 0.50 × 4.0 × 0.30 = 0.60 kg·m²/s.

- (A) assumes an object moving in a straight line has no angular momentum. That is only true about a point on its line of motion.
- (C) uses cos θ (0.80) instead of sin θ. The angle that matters is between r and v, and the perpendicular part of r is r sin θ.
- (D) uses L = rmv with r = 0.50 m and ignores the angle completely.
</details>

## Question 2 (multiple choice · core)

The same wheel starts at rest each time. Which of these produces the largest change in the wheel's angular speed? Each force or torque is the only one acting about the axle.

- (A) A 20 N force applied tangentially at 0.20 m from the axle for 0.50 s
- (B) A torque of 2.0 N·m for 1.5 s
- (C) A torque of 8.0 N·m for 0.20 s
- (D) A torque of 1.0 N·m for 2.5 s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For the same wheel, Δω = ΔL / I, so the largest angular impulse τΔt wins.
(A) τ = 20 × 0.20 = 4.0 N·m, so τΔt = 4.0 × 0.50 = 2.0 N·m·s. (B) 2.0 × 1.5 = 3.0 N·m·s. (C) 8.0 × 0.20 = 1.6 N·m·s. (D) 1.0 × 2.5 = 2.5 N·m·s.

- (A) looks largest if you multiply force by time (20 × 0.50 = 10 N·s). That is a linear impulse; you must use the torque, which needs the lever arm.
- (C) has the largest torque, but it acts for the shortest time.
- (D) acts for the longest time, but its torque is small. Neither torque nor time alone decides; their product does.
</details>

## Question 3 (multiple choice · core)

Take the wheel's spin direction as +. A graph of angular momentum against time for a wheel with I = 0.50 kg·m² is a straight line from 6.0 kg·m²/s at t = 0 to 1.5 kg·m²/s at t = 3.0 s. What is the net torque on the wheel?

- (A) −1.5 N·m
- (B) −4.5 N·m
- (C) −3.0 N·m
- (D) −0.75 N·m

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The net torque is the slope of the L–t graph: (1.5 − 6.0) kg·m²/s ÷ 3.0 s = −1.5 N·m. It is negative because it opposes the spin, and it is constant because the graph is a straight line.

- (B) is ΔL = −4.5 kg·m²/s, the angular impulse over the whole 3.0 s. It has not been divided by the time.
- (C) divides the slope by I. That gives the angular acceleration (−3.0 rad/s²), which is a different quantity with a different unit.
- (D) multiplies the slope by I. The slope of an L–t graph is already the torque; I is not needed.
</details>

## Question 4 (calculation · core)

Take the initial spin as +. A grindstone with rotational inertia 0.75 kg·m² spins at 30 rad/s and its motor is switched off. A metal tool is then pressed against its rim, 0.20 m from the axle. The tool exerts a friction force of 15 N, tangent to the rim and opposing the motion, for 4.0 s. Find (a) the angular impulse from the tool and (b) the grindstone's angular speed when the tool is removed.

<details>
<summary>Worked solution</summary>

1. Torque from friction: τ = −fR = −15 × 0.20 = −3.0 N·m (opposes the spin).
2. (a) Angular impulse: τΔt = −3.0 × 4.0 = **−12 N·m·s**.
3. Initial angular momentum: L₀ = Iω₀ = 0.75 × 30 = +22.5 kg·m²/s.
4. Theorem: L = L₀ + τΔt = 22.5 − 12 = 10.5 kg·m²/s.
5. (b) ω = L / I = 10.5 ÷ 0.75 = **14 rad/s**, still in the + direction.

Suggested mark points (3): 1 for the torque with the lever arm; 1 for −12 N·m·s with the negative sign explained; 1 for 14 rad/s using L₀ + angular impulse.

Common error: adding the angular impulse as if it were positive gives (22.5 + 12) ÷ 0.75 = 46 rad/s. A braking torque cannot make the stone spin faster, so this answer fails a common-sense check.
</details>

## Question 5 (graph · core)

Take the spin direction as +. A bicycle wheel (I = 0.10 kg·m²) on a fixed axle starts at rest. A hand pushes the tyre and exerts this torque:

- from 0 to 0.30 s, the torque rises steadily from 0 to 2.4 N·m;
- from 0.30 s to 0.50 s, it stays at 2.4 N·m;
- from 0.50 s to 0.80 s, it falls steadily back to 0.

(a) Sketch the torque–time graph with labelled scales and units.
(b) Find the total angular impulse.
(c) Find the wheel's angular speed at t = 0.40 s and at t = 0.80 s.
(d) Describe the shape of the wheel's angular momentum–time graph from 0 to 0.80 s.

<details>
<summary>Worked solution</summary>

**(a)** A trapezium: a straight line from (0, 0) to (0.30 s, 2.4 N·m), a flat line to (0.50 s, 2.4 N·m), then a straight line down to (0.80 s, 0). Time axis 0 to 0.80 s; torque axis 0 to at least 2.4 N·m.

**(b)** Areas: triangle ½ × 0.30 × 2.4 = 0.36 N·m·s; rectangle 0.20 × 2.4 = 0.48 N·m·s; triangle ½ × 0.30 × 2.4 = 0.36 N·m·s. Total = **1.2 N·m·s**.

**(c)** At 0.40 s: area so far = 0.36 + (0.10 × 2.4) = 0.60 N·m·s. Starting from rest, L = 0.60 kg·m²/s, so ω = 0.60 ÷ 0.10 = **6.0 rad/s**. At 0.80 s: L = 1.2 kg·m²/s, so ω = **12 rad/s**.

**(d)** L starts at 0 and rises all the time, because the torque is positive throughout. The slope of the L–t graph equals the torque, so: from 0 to 0.30 s the curve gets steeper; from 0.30 s to 0.50 s it is a straight line (constant slope 2.4 N·m); from 0.50 s to 0.80 s it gets less steep and becomes flat at 1.2 kg·m²/s.

Suggested mark points (5): 1 for a correctly scaled and labelled sketch; 1 for the total area 1.2 N·m·s; 1 for 6.0 rad/s using only the area up to 0.40 s; 1 for 12 rad/s; 1 for linking the changing slope of L–t to the size of the torque.
</details>

## Question 6 (constructed response · stretch)

A light string is wrapped around a spool of radius R. The spool has rotational inertia I and turns on a fixed, frictionless axle. It starts at rest. A student pulls the string with a constant tension T for a time t.

(a) Derive an expression for the spool's final angular speed ω in terms of T, R, t and I.
(b) Evaluate ω for T = 4.0 N, R = 0.050 m, t = 3.0 s and I = 0.010 kg·m².
(c) The student says: "If I pull with the same force for the same time, the spool ends up with the same angular speed no matter what radius the string is wrapped at." Use your expression to evaluate this claim.
(d) The same pull (same T, R and t) is applied to a second spool with four times the rotational inertia. Predict its final angular speed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The string pulls tangentially, so the torque is τ = TR. With L₀ = 0, the theorem gives TRt = Iω − 0, so **ω = TRt / I**.

**(b)** ω = (4.0 × 0.050 × 3.0) ÷ 0.010 = 0.60 ÷ 0.010 = **60 rad/s**.

**(c)** The claim is **incorrect**. The angular impulse is TRt, which depends on the lever arm R as well as on T and t. ω is directly proportional to R, so wrapping the string at twice the radius doubles the final angular speed (to 120 rad/s with the data in (b)). The same force gives a bigger torque when it acts further from the axle.

**(d)** ω is inversely proportional to I. Four times the rotational inertia gives one quarter of the angular speed: 60 ÷ 4 = **15 rad/s**.

| Point | What earns it |
|---|---|
| 1 | Torque written as TR, with the string tangent to the spool |
| 1 | Uses τΔt = ΔL with L₀ = 0 to reach ω = TRt / I |
| 1 | 60 rad/s |
| 1 | Rejects the claim **because** the angular impulse (and so ω) is proportional to R |
| 1 | 15 rad/s from the inverse proportion with I |

**Alternative method.** Find α = TR / I from Newton's second law in rotational form, then ω = αt. This reaches the same expression and earns full credit for (a).
</details>

## Question 7 (constructed response · stretch)

A 0.16 kg puck slides in a straight line at 2.5 m/s across a level, frictionless sheet of ice. A post P stands 0.40 m from the puck's line of motion.

(a) Calculate the puck's angular momentum about P (i) when it is closest to P and (ii) when it is 0.80 m from P.
(b) A student says: "The puck's distance from P keeps changing, so its angular momentum about P must keep changing too." Evaluate this claim.
(c) The puck then crosses a rough patch where a friction force of 0.080 N acts on it, opposite its velocity, for 2.0 s. It keeps moving along the same line. Use the rotational impulse–momentum theorem about P to find its new angular momentum about P. Check your answer using its new speed.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** (i) At the closest point, r = 0.40 m and θ = 90°: L = 0.40 × 0.16 × 2.5 × 1 = **0.16 kg·m²/s**. (ii) At r = 0.80 m, sin θ = 0.40 ÷ 0.80 = 0.50: L = 0.80 × 0.16 × 2.5 × 0.50 = **0.16 kg·m²/s**.

**(b)** The claim is **incorrect**. As r grows, the angle between r and v changes so that r sin θ always equals the perpendicular distance, 0.40 m. With m and v constant, L = mvd stays constant. This agrees with the theorem: no net force acts on the puck, so no net torque acts about P, so ΔL = 0.

**(c)** The friction force acts along the line of motion, so its lever arm about P is the perpendicular distance 0.40 m. Torque size: 0.080 × 0.40 = 0.032 N·m, opposing the puck's angular momentum. Angular impulse = −0.032 × 2.0 = −0.064 N·m·s. New L = 0.16 − 0.064 = **0.096 kg·m²/s**.
Check: deceleration = 0.080 ÷ 0.16 = 0.50 m/s², so after 2.0 s, v = 2.5 − 1.0 = 1.5 m/s. Then L = mvd = 0.16 × 1.5 × 0.40 = 0.096 kg·m²/s. The two methods agree.

| Point | What earns it |
|---|---|
| 1 | 0.16 kg·m²/s at both positions, with sin θ used in (ii) |
| 1 | Explains that r sin θ (the perpendicular distance) stays 0.40 m |
| 1 | Links zero net torque about P to constant L |
| 1 | Friction torque about P found with lever arm 0.40 m, and ΔL = −0.064 N·m·s |
| 1 | 0.096 kg·m²/s, confirmed by the new speed |

An answer to (b) that says only "L is conserved" without explaining why r sin θ stays the same earns the third point but not the second.
</details>

## How did you do?

- **Q1 or Q7(a) wrong:** re-read "Angular momentum of an object moving in a straight line" and Figure 1 in the [study guide](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-study-guide/).
- **Q2 wrong:** go back to "Angular impulse". Compare τΔt, and build torques from force × lever arm.
- **Q3 wrong:** revisit "Reading an angular momentum–time graph".
- **Q4 or Q5 wrong:** work through Worked example 1 again. Start from L₀ and keep the signs.
- **Q6 incomplete:** see Worked example 2 and "Factors of change".
- **Q7(b) or (c) incomplete:** link "no net torque about the point" to "constant L", and remember that a force along the line of motion can still have a lever arm about a point off the line.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-checklist/).
