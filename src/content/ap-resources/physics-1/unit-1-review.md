---
resourceId: "mb-ap-phys1-u1-review"
title: "Kinematics: Mixed Unit Review (Physics 1 Unit 1)"
description: "Connect all five kinematics topics: the big ideas, a one-table summary of key relationships, and seven original exam-style questions that each combine two or more topics."
course: "physics-1"
unit: 1
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have worked through the study guides for Topics 1.1 to 1.5"
prerequisiteResources: ["mb-ap-phys1-u1-diagnostic"]
learningObjectives:
  - "Link signs, graphs, kinematic equations, reference frames and components into one method for any motion problem"
  - "Solve multi-step problems that combine graph areas and slopes with the constant-acceleration equations"
  - "Use relative motion and free fall together, checking a result in two frames"
  - "Analyse projectiles from a height and compare launches with a derived symbolic result"
  - "Linearise motion data to test a claim about constant acceleration"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus; calculator in degree mode. We use g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-u1-diagnostic", "mb-ap-phys1-1.1-checklist", "mb-ap-phys1-1.2-checklist", "mb-ap-phys1-1.3-checklist", "mb-ap-phys1-1.4-checklist", "mb-ap-phys1-1.5-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Every kinematics answer starts with the same two choices: which observer, and which axis."
  - "Slopes and areas of motion graphs say the same things as the three constant-acceleration equations."
  - "Two-dimensional motion is two one-dimensional problems linked only by time."
  - "Observers moving at constant velocity disagree about velocity but agree about acceleration."
  - "Questions 1–3 are multiple choice; Questions 4–7 are multi-part with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review is for the **algebra-based Physics 1 course**, Unit 1 (Kinematics). Exam questions rarely stay inside one topic, so this page connects the ideas and gives you mixed practice. Do the [unit diagnostic](/advanced-course-resources/physics-1/unit-1-diagnostic/) first if you have not yet done it.

## Big ideas of the unit

- **A sign means nothing without an axis.** State "+x to the right" first. A negative answer is often correct ([Topic 1.1](/advanced-course-resources/physics-1/1-1-scalars-vectors-one-dimension-study-guide/)).
- **Vectors add with signs; scalars add without them.** Displacement and distance differ for any trip that turns round ([Topic 1.2](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-study-guide/)).
- **Acceleration is the rate of change of velocity.** Compare the signs of v_x and a_x to decide speeding up or slowing down. Zero velocity does not mean zero acceleration ([Topic 1.2](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-study-guide/)).
- **Graphs and equations are two views of one motion.** The kinematic equations are the slopes and areas of a straight v_x–t line written in algebra ([Topic 1.3](/advanced-course-resources/physics-1/1-3-representing-motion-study-guide/)).
- **The equations need constant acceleration.** Split a motion into stages, or reason qualitatively when a_x changes ([Topic 1.3](/advanced-course-resources/physics-1/1-3-representing-motion-study-guide/)).
- **Free fall is constant acceleration.** With +y up, a_y = −g at every point, including the top ([Topic 1.3](/advanced-course-resources/physics-1/1-3-representing-motion-study-guide/)).
- **Every measurement belongs to an observer.** Inertial observers shift the v_x–t graph up or down but measure the same slope ([Topic 1.4](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-study-guide/)).
- **Two dimensions are two one-dimensional problems** linked only by the shared time t. For a projectile a_x = 0 and a_y = −g ([Topic 1.5](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method | When it applies |
|---|---|---|
| Displacement | Δx = x − x₀ | always |
| Average velocity, acceleration | v_avg = Δx / Δt; a_avg = Δv_x / Δt | always (initial and final states only) |
| Speeding up or slowing down | same signs of v_x and a_x: speeding up; opposite: slowing down | always |
| Graph links | slope of x–t = v_x; slope of v_x–t = a_x; area under v_x–t = Δx; area under a_x–t = Δv_x | always (calculate only with straight-line graphs) |
| Kinematic equations | v_x = v_x0 + a_x t; x = x₀ + v_x0 t + ½a_x t²; v_x² = v_x0² + 2a_x(x − x₀) | constant acceleration only; leave out the quantity you neither know nor need |
| Relative velocity | v_AC = v_AB + v_BC; v_BA = −v_AB; x_AB = x_AG − x_BG | one line only; frames inertial unless stated |
| Components | A_x = A cos θ, A_y = A sin θ (θ from +x); A = √(A_x² + A_y²) | sketch first to choose the quadrant |
| Projectile | a_x = 0; a_y = −g; same t on both axes | air resistance negligible |

## Practice questions

These are **original Marlbridge practice questions**, not past exam questions. The rubric tables are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s², ignore air resistance and treat every frame as inertial.

## Question 1 (multiple choice · mixed)

Take **+x forward**. A delivery van moves along a straight road at a constant 25 m/s. As it passes a motorbike travelling the same way at 5.0 m/s, the motorbike starts to speed up with a constant acceleration of 2.0 m/s² relative to the road. Measured by the van driver, how far ahead of the motorbike is the van at the instant the motorbike's velocity **relative to the van** becomes zero?

- (A) 0 m
- (B) 100 m
- (C) 250 m
- (D) 400 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** In the van's frame, v_MV = (5.0 + 2.0t) − 25 = 2.0t − 20: it starts at −20 m/s, keeps the slope 2.0 m/s² (the van is inertial) and reaches zero at t = 10 s. The area under that line is ½ × 10 × (−20) = −100 m, so the motorbike is 100 m behind the van. Road check: 25 × 10 − (5.0 × 10 + ½ × 2.0 × 10²) = 250 − 150 = 100 m.

- (A) assumes equal velocities means the motorbike has caught up. Matching velocity is when the gap is **largest**.
- (C) is the van's displacement in the road's frame. It ignores the motorbike's motion.
- (D) adds the two road-frame displacements (250 m + 150 m) instead of subtracting them.
</details>

## Question 2 (multiple choice · mixed)

Take **+x horizontal and +y up**. A ball is launched from level ground at 20 m/s, 30° above the horizontal, and lands at the same level. What is the ball's **change in velocity** between launch and landing?

- (A) zero, because it lands with the same speed it was launched with
- (B) 20 m/s downward
- (C) 10 m/s downward
- (D) 40 m/s downward

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v_x stays 17 m/s, so Δv_x = 0. Vertically, v_y0 = 20 sin 30° = +10 m/s, and by symmetry v_y = −10 m/s at landing, so Δv_y = (−10) − (+10) = −20 m/s. Check: the flight lasts 2 × 10 ÷ 9.8 = 2.04 s, and −20 ÷ 2.04 = −9.8 m/s², which is −g.

- (A) compares speeds (scalars) instead of velocities (vectors). Same speed, different direction.
- (C) uses only the change from launch to the top of the path.
- (D) computes (−20) − (+20), as if the whole velocity reversed. Only the vertical component reverses.
</details>

## Question 3 (multiple choice · mixed)

Take **+x horizontal and +y up**. A ball is thrown at 30° above the horizontal from a balcony and lands on the ground below the balcony. Which statement about its motion graphs is correct?

- (A) The v_x–t graph is a horizontal line, and the v_y–t graph is a straight line of slope −9.8 m/s² that crosses the time axis once.
- (B) The v_y–t graph changes slope at the highest point, because the ball changes vertical direction there.
- (C) The total area under the v_y–t graph from launch to landing is zero, because the ball goes up and then comes down.
- (D) The v_x–t graph slopes gently downward, because the horizontal motion fades during the flight.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With a_x = 0, v_x is constant. With a_y = −9.8 m/s² throughout, v_y–t is one straight line. It starts positive and ends negative, so it crosses zero once, at the top.

- (B) mixes up velocity and acceleration. The slope is a_y, which stays −g at the top.
- (C) would be true only for a landing at launch height. The area is Δy, which is negative here.
- (D) describes air resistance, which this review ignores. With a_x = 0, v_x never changes.
</details>

## Question 4 (constructed response · mixed)

Take **+x east**, origin where a remote-controlled car starts. Its v_x–t graph is made of three straight segments joining these points: (0, −2.0 m/s), (2.0 s, +2.0 m/s), (6.0 s, +2.0 m/s) and (8.0 s, −2.0 m/s).

(a) Find the acceleration in each segment.
(b) At what times is the car momentarily at rest?
(c) Find the car's displacement and the distance it travels from 0 to 8.0 s.
(d) Find its average velocity and average speed for the 8.0 s.
(e) A student says: "From 6.0 s to 8.0 s the acceleration is negative, so the car slows down for that whole interval." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 0–2.0 s: (2.0 − (−2.0)) ÷ 2.0 = **+2.0 m/s²**. 2.0–6.0 s: **0**. 6.0–8.0 s: (−2.0 − 2.0) ÷ 2.0 = **−2.0 m/s²**.

**(b)** The line crosses v_x = 0 at **t = 1.0 s** and **t = 7.0 s**.

**(c)** Areas: 0–1.0 s, −1.0 m; 1.0–2.0 s, +1.0 m; 2.0–6.0 s, 4.0 × 2.0 = +8.0 m; 6.0–7.0 s, +1.0 m; 7.0–8.0 s, −1.0 m.
Displacement = **+8.0 m** (8.0 m east). Distance = 1 + 1 + 8 + 1 + 1 = **12 m**.

**(d)** Average velocity = +8.0 ÷ 8.0 = **+1.0 m/s** (east). Average speed = 12 ÷ 8.0 = **1.5 m/s**.

**(e)** The claim is **incorrect**. From 6.0 to 7.0 s, v_x is positive and a_x negative, so the car slows down. From 7.0 to 8.0 s both are negative, so it **speeds up** westward.

| Point | What earns it |
|---|---|
| 1 | All three accelerations with signs |
| 1 | Rest at 1.0 s and 7.0 s, from where the graph crosses the axis |
| 1 | Displacement +8.0 m, with areas below the axis subtracted |
| 1 | Distance 12 m, with all areas added as positive |
| 1 | Average velocity +1.0 m/s and average speed 1.5 m/s |
| 1 | Rejects the claim **because** the signs of v_x and a_x match from 7.0 to 8.0 s |

**Total: 6 points.**
</details>

## Question 5 (constructed response · mixed)

Take **+y upward**, origin at ground level. A builders' hoist platform rises at a constant 2.5 m/s. When it is 18 m above the ground, a worker on it lets go of a bolt, which leaves her hand at rest relative to the platform.

(a) State the bolt's velocity relative to the ground at the moment of release.
(b) State the bolt's acceleration measured by the worker and by a person on the ground, with a reason.
(c) Calculate how long the bolt takes to reach the ground.
(d) Find the bolt's velocity just before it lands, measured by the person on the ground and measured by the worker.
(e) A student says: "The bolt starts from rest, so it takes the same time as a bolt dropped from rest at 18 m: √(2 × 18 ÷ 9.8) = 1.9 s." Explain why this is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v_bolt,ground = v_bolt,platform + v_platform,ground = 0 + (+2.5) = **+2.5 m/s** (upward).

**(b)** **−9.8 m/s² for both observers.** The platform moves at constant velocity, so it is an inertial frame.

**(c)** Ground frame: 0 = 18 + 2.5t − 4.9t². The positive root is t = (2.5 + √(2.5² + 4 × 4.9 × 18)) ÷ 9.8 = (2.5 + 18.95) ÷ 9.8 = **2.2 s** (2.19 s).

**(d)** Ground: v_y = 2.5 − 9.8 × 2.19 = **−19 m/s** (18.9 m/s downward). Worker: v_bolt,platform = v_bolt,ground − v_platform,ground = −18.9 − 2.5 = **−21 m/s**.

**(e)** The bolt is at rest only **relative to the worker**. Relative to the ground it starts upward at 2.5 m/s, so it first rises 2.5² ÷ 19.6 = 0.32 m and then falls 18.3 m. That takes longer than a drop from rest at 18 m.

| Point | What earns it |
|---|---|
| 1 | +2.5 m/s, combining the two velocities |
| 1 | −9.8 m/s² in both frames, justified by constant platform velocity |
| 1 | Kinematic equation with v_y0 = +2.5 m/s, y₀ = 18 m, a_y = −9.8 m/s² |
| 1 | t = 2.2 s |
| 1 | −19 m/s (ground) and −21 m/s (worker), with signs |
| 1 | Explains that "at rest" is frame-dependent and the bolt rises first in the ground frame |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

Take **+x horizontal in the direction of flight and +y up**, origin on the ground below the release point. A delivery drone releases a parcel 45 m above flat ground. At release the parcel's velocity is 6.0 m/s at 20° **above** the horizontal.

(a) Find the parcel's initial velocity components.
(b) Calculate how long the parcel is in the air and where it lands.
(c) Show that the parcel's landing speed is given by v = √(v₀² + 2gh), where v₀ is the release speed and h the release height. Evaluate it.
(d) A student claims: "If the parcel left at the same speed but horizontally, it would land sooner **and** more slowly." Evaluate both parts of the claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v_x0 = 6.0 cos 20° = **5.64 m/s**; v_y0 = 6.0 sin 20° = **+2.05 m/s**.

**(b)** Vertical: 0 = 45 + 2.05t − 4.9t², so t = (2.05 + √(2.05² + 4 × 4.9 × 45)) ÷ 9.8 = **3.2 s** (3.25 s).
Horizontal: x = 5.64 × 3.25 = **18 m** from the point below the release.

**(c)** v_x stays v₀ cos θ, so v_x² = v₀² cos² θ. Vertically, v_y² = v_y0² + 2a_y(y − y₀) = v₀² sin² θ + 2(−g)(−h) = v₀² sin² θ + 2gh.
Adding: v² = v_x² + v_y² = v₀²(cos² θ + sin² θ) + 2gh = **v₀² + 2gh**, so v = √(v₀² + 2gh).
Here v = √(6.0² + 2 × 9.8 × 45) = **30 m/s**.

**(d)** **Sooner: correct.** With v_y0 = 0, 45 = 4.9t² gives t = 3.0 s, less than 3.25 s, because the parcel no longer rises first. **More slowly: incorrect.** The result in (c) does not contain θ, so the landing speed is 30 m/s either way.

| Point | What earns it |
|---|---|
| 1 | Both components with correct trigonometry and signs |
| 1 | Quadratic in t with v_y0 = +2.05 m/s and y₀ = 45 m, giving 3.2 s |
| 1 | Landing point 18 m, using the same t on the horizontal axis |
| 1 | Derivation combining the two axes to v₀² + 2gh |
| 1 | 30 m/s |
| 1 | Agrees the horizontal launch lands sooner, with time 3.0 s or a reason |
| 1 | Rejects "more slowly" **because** the speed expression does not depend on θ |

**Total: 7 points.**
</details>

## Question 7 (constructed response · mixed)

Take **+x down a ramp**. A cart passes a start gate already moving, then rolls down the ramp. Photogates measure its speed at distances d beyond the start gate:

| d (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| v_x (m/s) | 0.85 | 1.10 | 1.30 | 1.47 | 1.63 |

A student claims the cart's acceleration is constant.

(a) Explain what to plot to get a straight line if the claim is true. State what the slope and the vertical intercept represent.
(b) Process the data and find the acceleration and the cart's speed at the start gate.
(c) State whether the data support the claim, with a reason.
(d) Use your results to predict the cart's speed 1.50 m beyond the start gate.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Time was not measured, so use the equation without t: v_x² = v_x0² + 2a_x d. Plot **v_x² (vertical, m²/s²) against d (horizontal, m)**. If a_x is constant, the points lie on a straight line with **slope 2a_x** and **vertical intercept v_x0²**, the square of the speed at the start gate.

**(b)**

| d (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| v_x² (m²/s²) | 0.72 | 1.21 | 1.69 | 2.16 | 2.66 |

Slope = (2.66 − 0.72) ÷ (1.00 − 0.20) = 2.425 m/s², so a_x = 2.425 ÷ 2 = **1.2 m/s²**.
Intercept = 0.72 − 2.425 × 0.20 = 0.235 m²/s², so v_x0 = √0.235 = **0.48 m/s**.

**(c)** The data **support** the claim. v_x² rises by about 0.49 m²/s² for every 0.20 m step, so the points lie on one straight line, and a straight v_x²–d line means a constant 2a_x.

**(d)** v_x = √(0.235 + 2.425 × 1.50) ≈ **2.0 m/s**. This extrapolates beyond the data, so it assumes the ramp and the acceleration stay the same.

| Point | What earns it |
|---|---|
| 1 | Chooses v_x² against d, from the equation without t |
| 1 | Slope = 2a_x and intercept = v_x0² |
| 1 | a_x ≈ 1.2 m/s² from the slope, with unit |
| 1 | Start-gate speed 0.48–0.50 m/s from the intercept |
| 1 | Supports the claim **because** v_x² rises by equal amounts for equal steps in d |
| 1 | Prediction ≈ 2.0 m/s, with the extrapolation assumption stated |

**Total: 6 points.** A best-fit line through all five points (slope 2.41 m/s², start-gate speed 0.49 m/s) is better practice than a two-point slope.
</details>

## How did you do?

Questions 4, 5 and 7 are worth 6 points and Question 6 is worth 7 on the suggested Marlbridge rubric. Use the points you lost, not the total, to choose what to study.

- **Questions 1 or 5:** reference frames. Use the [Topic 1.4 checklist](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-checklist/).
- **Questions 2 or 4:** signs, vector changes, speeding up and slowing down. Use the [Topic 1.1 checklist](/advanced-course-resources/physics-1/1-1-scalars-vectors-one-dimension-checklist/) and the [Topic 1.2 checklist](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-checklist/).
- **Questions 3, 4 or 7:** graph links and equation choice. Use the [Topic 1.3 checklist](/advanced-course-resources/physics-1/1-3-representing-motion-checklist/).
- **Questions 2, 3 or 6:** components and projectiles. Use the [Topic 1.5 checklist](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-checklist/).
- **Quick check of every topic:** retake the [unit diagnostic](/advanced-course-resources/physics-1/unit-1-diagnostic/).
