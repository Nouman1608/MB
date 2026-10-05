---
resourceId: "mb-ap-phys1-6.5-practice"
title: "Rolling: Practice Questions (Physics 1 6.5)"
description: "Seven original Marlbridge practice questions on rolling: v = rω, total kinetic energy, friction in rolling, a ramp race, linearising data and a slipping ball, with worked solutions."
course: "physics-1"
unit: 6
topics: ["6.5"]
resourceType: "practice-questions"
prerequisites:
  - "K_total = ½Mv_cm² + ½I_cm ω² (Topic 6.1) and conservation of mechanical energy (Topic 3.4)"
prerequisiteResources: ["mb-ap-phys1-6.5-study-guide"]
learningObjectives:
  - "Use v_cm = rω and the velocities of points on a rolling wheel"
  - "Calculate the translational, rotational and total kinetic energy of a rolling object"
  - "Use conservation of energy for rolling without slipping, and explain why static friction does no work"
  - "Linearise ramp data to identify the shape of a rolling object"
  - "Explain how a slipping object's motion changes and find the energy dissipated from measured values"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Rotational inertias are given. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-6.5-study-guide", "mb-ap-phys1-6.5-revision-notes", "mb-ap-phys1-6.5-checklist"]
next: "mb-ap-phys1-6.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Check whether the object rolls without slipping before using v = rω."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s². Ignore air resistance and rolling friction. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

A trolley wheel of radius 0.30 m rolls without slipping along a level floor. Its centre moves at 6.0 m/s. What are the wheel's angular speed, and the speed of the highest point of the wheel relative to the floor?

- (A) 20 rad/s; 12 m/s
- (B) 20 rad/s; 6.0 m/s
- (C) 1.8 rad/s; 12 m/s
- (D) 20 rad/s; 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ω = v_cm / r = 6.0 ÷ 0.30 = 20 rad/s. The top point has the forward speed of the centre plus a forward rim speed rω = 6.0 m/s, so it moves at 12 m/s.

- (B) gives the top point only the speed of the centre. It forgets the rotation adds to the translation at the top.
- (C) multiplies instead of dividing (v × r = 1.8, in m²/s).
- (D) describes the **bottom** point, the contact point, which is momentarily at rest.
</details>

## Question 2 (multiple choice · core)

Two uniform solid cylinders roll from rest without slipping down the same ramp, starting at the same height. Cylinder P has mass 2.0 kg and radius 0.050 m. Cylinder Q has mass 6.0 kg and radius 0.10 m. Each has I = ½MR². Which statement about their speeds at the bottom is correct?

- (A) They have the same speed.
- (B) P is faster, because its smaller radius means it spins less.
- (C) Q is faster, because gravity pulls harder on a heavier object.
- (D) P is faster, because it has less mass to accelerate.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For a disc shape, Mgh = ½Mv² + ½(½MR²)(v/R)² = ¾Mv². Both M and R cancel, so v = √(4gh/3) for both. Only the shape (how the mass is spread relative to R) matters, and both are solid cylinders.

- (B) P does spin faster, but its rotational inertia is smaller to match. The rotational share is 1/3 for both.
- (C) Gravity pulls harder on Q, but Q also has more mass and rotational inertia. The effects cancel.
- (D) is the same error reversed: less mass also means less gravitational force.
</details>

## Question 3 (multiple choice · core)

A ball rolls down a ramp without slipping. Which statement about the friction force from the ramp on the ball is correct?

- (A) It is static friction. It does no work on the ball, so the mechanical energy of the ball–Earth system stays constant.
- (B) It is kinetic friction. It turns some of the ball's kinetic energy into thermal energy.
- (C) No friction acts. A ball on a ramp would roll without slipping even on ice.
- (D) It is static friction pointing up the slope. It does negative work equal to the ball's rotational kinetic energy.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The contact point is momentarily at rest, so it does not slide: the friction is static. A force whose point of application does not move does no work, so no energy is dissipated and mechanical energy is conserved.

- (B) describes slipping, where the contact point slides. Here it does not.
- (C) Without friction there is no torque about the centre, so the ball would slide without spinning.
- (D) has the right direction but wrong work. Friction shares energy between translation and rotation; its net work is zero.
</details>

## Question 4 (calculation · core)

A garden roller is a uniform solid cylinder of mass 40 kg and radius 0.25 m, with I = ½MR². A gardener pushes it so that it rolls without slipping.

(a) The roller moves at 1.5 m/s on level ground. Find its angular speed.
(b) Find its translational, rotational and total kinetic energy.
(c) Starting from rest, the gardener pushes it up a slope that rises 0.30 m, and it is moving at 1.5 m/s at the top. How much work does the gardener do on the roller?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Rolling without slipping: ω = v / R = 1.5 ÷ 0.25 = **6.0 rad/s**.

**(b)** I = ½ × 40 × 0.25² = 1.25 kg·m².
Translational: ½ × 40 × 1.5² = **45 J**. Rotational: ½ × 1.25 × 6.0² = **22.5 J** (≈ 23 J). Total: **67.5 J** (≈ 68 J).

**(c)** Static friction does no work and the normal force is perpendicular to the motion, so the gardener's work equals the gain in kinetic energy plus the gain in gravitational potential energy:
W = 67.5 J + Mgh = 67.5 + 40 × 9.8 × 0.30 = 67.5 + 117.6 = **185 J** (≈ 190 J to 2 s.f.).

| Point | What earns it |
|---|---|
| 1 | ω = 6.0 rad/s from v = Rω |
| 1 | Correct I and rotational K (22.5 J) |
| 1 | Total K = 67.5 J as the sum of the two kinds |
| 1 | Work = ΔK + ΔU_g, with a reason why friction contributes no work |
| 1 | 185 J (or 190 J) with unit |

Common error: using only ½Mv² = 45 J, which gives 163 J in (c).
</details>

## Question 5 (graph · core)

A student rolls a ball from rest down a ramp, without slipping, from several heights h. A light gate at the bottom measures its speed v.

| h (m) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| v (m/s) | 1.08 | 1.53 | 1.88 | 2.17 | 2.42 |

The ball is either a thin hollow sphere (I = ⅔MR²) or a solid sphere (I = ⅖MR²). It looks the same from outside.

(a) Show that a graph of v² against h should be a straight line through the origin, and give its slope in terms of g and β, where I = βMR².
(b) Calculate v² values, find the slope of the best-fit line and decide which ball it is.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Energy is conserved because static friction does no work: Mgh = ½(1 + β)Mv². So **v² = [2g / (1 + β)] h**. This has the form y = mx with y = v² and x = h: a straight line through the origin with slope 2g / (1 + β).

**(b)**

| h (m) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| v² (m²/s²) | 1.17 | 2.34 | 3.53 | 4.71 | 5.86 |

The points lie on a straight line through the origin. Slope ≈ (5.86 − 1.17) ÷ (0.50 − 0.10) = **11.7 m/s²** (a best-fit line gives 11.7 to 11.8 m/s²).

Predicted slopes: hollow sphere 2 × 9.8 ÷ (5/3) = **11.8 m/s²**; solid sphere 2 × 9.8 ÷ 1.4 = **14.0 m/s²**. The measured slope matches the **hollow sphere**. Equivalently, β = 2g / slope − 1 = 19.6 ÷ 11.7 − 1 ≈ 0.67 ≈ ⅔.

| Point | What earns it |
|---|---|
| 1 | Energy equation including both kinds of kinetic energy |
| 1 | Rearranged to v² = [2g/(1 + β)]h and identified as a line through the origin |
| 1 | v² values and a slope of about 11.7–11.8 m/s² from the line, not from one data point |
| 1 | Hollow sphere, by comparing with both predicted slopes or by finding β ≈ 0.67 |

Plotting v against h gives a curve and earns no credit for (a).
</details>

## Question 6 (constructed response · stretch)

A bowling ball (a uniform solid sphere, I = ⅖MR²) of mass 6.0 kg and radius 0.11 m is launched along a level lane. It leaves the bowler's hand sliding at 8.4 m/s with **no spin**. Further down the lane it is observed rolling without slipping at 6.0 m/s.

(a) State the direction of the friction force from the lane on the ball while it slides, and explain your answer.
(b) Describe how v_cm and ω change while the ball slides, and state the condition at which sliding stops.
(c) Calculate the kinetic energy at launch and once rolling, and the energy dissipated.
(d) A student says: "Once it is rolling, friction will keep slowing the ball down, so it will soon stop." Evaluate this claim for an ideal ball and lane.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** **Backwards**, opposite to the ball's motion. At launch the bottom of the ball moves forwards at 8.4 m/s over the lane (no spin to cancel it), so kinetic friction opposes this sliding.

**(b)** The backward friction force **reduces v_cm**. Its torque about the centre makes the ball spin forwards, so **ω increases** from zero. The bottom of the ball slides more and more slowly. Sliding stops when **v_cm = Rω**; then the contact point is at rest.

**(c)** At launch: K = ½Mv² = ½ × 6.0 × 8.4² = **212 J** (211.68 J), all translational.
Rolling: ω = 6.0 ÷ 0.11 = 54.5 rad/s. K = ½Mv² + ½Iω² = ½(1 + 0.4)Mv² = 108 + 43.2 = **151 J**.
Dissipated: 211.68 − 151.2 = **60 J** (29%), now thermal energy.

**(d)** The claim is **incorrect** for the ideal case. Once the ball rolls without slipping on a level lane, the contact point is at rest, so no kinetic friction acts. No static friction is needed either, because nothing is trying to change v_cm or ω. The ball rolls on at 6.0 m/s. (A real ball slows a little from rolling friction and air resistance, which the course does not model.)

| Point | What earns it |
|---|---|
| 1 | Friction backwards, because the contact point slides forwards |
| 1 | v_cm decreases and ω increases, with friction's force and torque as the causes |
| 1 | Sliding stops when v_cm = Rω |
| 1 | Both kinetic energies, including ½Iω² in the rolling state |
| 1 | About 60 J dissipated |
| 1 | Claim rejected: rolling without slipping on level ground needs no friction, so no energy is dissipated |

Predicting the 6.0 m/s rolling speed is beyond this course.
</details>

## Question 7 (constructed response · stretch)

A thin-walled steel pipe (I = MR²) and a solid wooden cylinder (I = ½MR²) roll from rest without slipping down a ramp 1.5 m long that rises 0.30 m. The pipe has three times the mass of the cylinder.

(a) For an object with I = βMR², derive an expression for the acceleration of its centre of mass down a ramp of angle θ.
(b) Calculate each object's time to reach the bottom.
(c) A student says: "The pipe is heavier, and both lose the same fraction of their energy to rotation, so the pipe wins." Evaluate both parts of this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** After moving distance d down the ramp, the object has dropped h = d sin θ. Energy: Mgd sin θ = ½(1 + β)Mv², so v² = 2gd sin θ / (1 + β). For constant acceleration from rest, v² = 2ad. Comparing: **a = g sin θ / (1 + β)**.

**(b)** sin θ = 0.30 ÷ 1.5 = 0.20.
Cylinder: a = 9.8 × 0.20 ÷ 1.5 = 1.31 m/s²; t = √(2d / a) = √(3.0 ÷ 1.307) = **1.5 s** (1.52 s).
Pipe: a = 9.8 × 0.20 ÷ 2 = 0.98 m/s²; t = √(3.0 ÷ 0.98) = **1.7 s** (1.75 s).

**(c)** Both parts of the claim are **wrong**. Mass cancels from a = g sin θ / (1 + β), so being heavier makes no difference. And the fractions are not the same: the pipe's mass is all at the rim, so half its kinetic energy is rotational, compared with a third for the cylinder. More of the pipe's energy goes into spinning, leaving less for moving down the ramp, so the **cylinder wins** by about 0.23 s. The time ratio is √(2 / 1.5) = 1.15, whatever the masses.

| Point | What earns it |
|---|---|
| 1 | Energy equation with ½(1 + β)Mv² and h = d sin θ |
| 1 | Uses v² = 2ad (constant acceleration) to reach a = g sin θ/(1 + β) |
| 1 | Both times, with the cylinder faster |
| 1 | States mass cancels, using the derived expression |
| 1 | Explains that the pipe's larger rotational share leaves less translational energy, so it is slower |

Saying only "conservation of energy" earns neither of the last two points.
</details>

## How did you do?

- **Q1 wrong:** go back to "The contact point is momentarily at rest" and Figure 1 in the [study guide](/advanced-course-resources/physics-1/6-5-rolling-study-guide/).
- **Q2 or Q7 wrong:** revisit "The ramp race". Only the shape factor β matters.
- **Q3 wrong:** re-read "Friction in ideal rolling does no work" and Figure 2.
- **Q4 or Q5 incomplete:** check you included ½Iω² in every energy equation (Worked example 1).
- **Q6 incomplete:** see "Rolling while slipping" and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/6-5-rolling-checklist/).
