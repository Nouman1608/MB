---
resourceId: "mb-ap-physcm-u1-review"
title: "Kinematics: Mixed Unit Review (Physics C: Mechanics Unit 1)"
description: "A one-hour mixed review of calculus-based kinematics: the big ideas that link Topics 1.1 to 1.5, a summary table and seven original questions that each combine two or more topics."
course: "physics-c-mechanics"
unit: 1
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 1.1 to 1.5"
  - "Differentiating and integrating polynomials"
prerequisiteResources: ["mb-ap-physcm-u1-diagnostic"]
learningObjectives:
  - "Connect vectors, calculus, graphs, reference frames and projectiles into one method for describing motion"
  - "Solve multi-step problems that combine two or more Unit 1 topics"
  - "Choose between integration and the constant-acceleration equations, and justify the choice"
  - "Convert a motion between inertial frames and say which quantities change and which do not"
  - "Use experimental data and a linearised graph to find a physical constant and make a prediction"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry (degrees). We use g = 9.8 m/s²; answers with g = 10 m/s² are equally acceptable. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u1-diagnostic", "mb-ap-physcm-1.1-checklist", "mb-ap-physcm-1.2-checklist", "mb-ap-physcm-1.3-checklist", "mb-ap-physcm-1.4-checklist", "mb-ap-physcm-1.5-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Every kinematics problem starts the same way: choose a frame, state the axes and split vectors into components."
  - "Differentiate to go from x(t) to v(t) to a(t). Integrate, with initial conditions, to go back."
  - "The constant-acceleration equations are a special case. If a depends on time, integrate."
  - "All inertial observers agree on acceleration and time, but not on velocity, displacement or the shape of the path."
  - "A projectile is two one-dimensional motions sharing one clock: a_x = 0 and a_y = −g."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review pulls the five topics of Unit 1 (Kinematics) together. Read the big ideas and the table, then try the seven questions **without notes**. Each one combines two or more topics. These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s² (10 m/s² is equally acceptable) and ignore air resistance. Positions are in m, velocities in m/s, accelerations in m/s² and t in s. If you have not yet done the [Unit 1 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-1-diagnostic/), do it first.

## Big ideas of the unit

- **Components carry the vectors.** Write position, velocity and acceleration with î and ĵ, add them axis by axis, then find a magnitude. State the axes first: every sign depends on them ([Topic 1.1](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-study-guide/)).
- **Derivatives go down, integrals come back up.** v = dr/dt and a = dv/dt. Going back needs initial conditions, because an integral only gives a change. The constant-acceleration equations are the special case of constant a ([Topic 1.2](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/)).
- **Graphs show the same calculus.** Slopes give the quantity below; signed areas give changes in the quantity above. A symbolic result such as h ∝ v₀² predicts factors of change ([Topic 1.3](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/)).
- **Every measurement belongs to a frame.** Velocities combine as vectors, v_PA = v_PB + v_BA. Inertial observers agree on acceleration and time, not on velocity or path ([Topic 1.4](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/)).
- **Motion in a plane is two one-dimensional motions.** Each component has its own initial values and acceleration, which may be non-uniform; they share only the time ([Topic 1.5](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/)).
- **Projectiles join everything.** a_x = 0 and a_y = −g; the launch velocity may come from a frame change.

## Key relationships and methods

| Idea | Relationship or method |
 |
| Magnitude and unit vector | \|A\| = √(A_x² + A_y² + A_z²); Â = A / \|A\| |
| Resultant | add x-, y- and z-components separately |
| Instantaneous values | v_x = dx/dt; a_x = dv_x/dt |
| Going back | v_x = v_x0 + ∫a_x dt; x = x₀ + ∫v_x dt |
| Constant acceleration | v_x = v_x0 + a_x t; x = x₀ + v_x0 t + ½a_x t²; v_x² = v_x0² + 2a_x(x − x₀) |
| Graph links | slope of x–t = v_x; slope of v_x–t = a_x; area under v_x–t = Δx; area under a_x–t = Δv_x |
| Speeding up or slowing down | compare the signs of v_x and a_x |
| Relative velocity | v_PA = v_PB + v_BA; v_AB = −v_BA |
| Inertial frames | a_PA = a_PB when B moves at constant velocity relative to A |
| Projectile | a_x = 0, a_y = −g; same t in both components; R = v₀² sin 2θ / g only for level launch and landing |

## Question 1 (multiple choice · mixed)

Take **+x east and +y north**. A particle's position is r(t) = (2.0t) î + (3.0t² − 1.0t³) ĵ. Which is the unit vector in the direction of its velocity at t = 1.0 s?

- (A) 0.55 î + 0.83 ĵ
- (B) 0.40 î + 0.60 ĵ
- (C) 0.71 î + 0.71 ĵ
- (D) 2.0 î + 3.0 ĵ

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Differentiate each component: v = 2.0 î + (6.0t − 3.0t²) ĵ, so v(1.0) = (2.0 î + 3.0 ĵ) m/s. Its magnitude is √13 = 3.61 m/s. Dividing gives v̂ = 0.55 î + 0.83 ĵ, which has magnitude 1 and no unit.

- (B) divides by 5.0, the sum of the components; its magnitude is 0.72.
- (C) is the unit vector of the **position** r(1.0) = 2.0 î + 2.0 ĵ. The velocity points along the path, not from the origin.
- (D) is the velocity itself, with magnitude 3.6 m/s, not 1.
</details>

## Question 2 (multiple choice · mixed)

Take **+y upward**. A lift rises at a constant 3.0 m/s relative to the building. A passenger throws a ball straight up at 5.0 m/s **relative to the lift**. How high does the ball rise above its release point, as measured by an observer standing in the building?

- (A) 0.46 m
- (B) 1.3 m
- (C) 1.7 m
- (D) 3.3 m

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** In the building frame the ball starts at 5.0 + 3.0 = 8.0 m/s upward. At the top, v = 0, so h = 8.0² ÷ (2 × 9.8) = 3.3 m.

- (A) uses only the lift's 3.0 m/s.
- (B) is the rise measured in the lift frame, 5.0² ÷ 19.6.
- (C) adds the two heights, 1.3 + 0.46. Height depends on v², so you must add the **velocities** first, then square.
</details>

## Question 3 (multiple choice · mixed)

Take **+x horizontal and +y up**. A drone flies in a vertical plane. Its v_x stays at 3.0 m/s. Its v_y–t graph is a straight line from +4.0 m/s at t = 0 to −4.0 m/s at t = 4.0 s. What is the magnitude of its displacement from t = 0 to t = 2.0 s?

- (A) 4.0 m
- (B) 6.0 m
- (C) 7.2 m
- (D) 10 m

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Work each component on its own. Δx = 3.0 × 2.0 = 6.0 m. Δy is the area under the v_y–t graph from 0 to 2.0 s, a triangle: ½ × 2.0 × 4.0 = 4.0 m. Then |Δr| = √(6.0² + 4.0²) = 7.2 m.

- (A) is only the vertical part.
- (B) is only the horizontal part.
- (D) adds the components as numbers, or multiplies the initial speed, 5.0 m/s, by 2.0 s. Components combine by Pythagoras, and the speed changes.
</details>

## Question 4 (constructed response · mixed)

Take **+x forward along a straight test track**, origin at the start. A test car starts from rest. For 0 ≤ t ≤ 5.0 s its acceleration is a_x = 0.40t. At t = 5.0 s it brakes with a constant a_x = −2.5 m/s² until it stops.

(a) Find v_x(t) and x(t) for the first stage, and their values at t = 5.0 s.
(b) Find the braking time and the braking distance.
(c) Describe the shapes of the a_x–t, v_x–t and x–t graphs for the whole run. Say what happens at t = 5.0 s on each.
(d) A student finds the first-stage distance from x = ½a_x t² with a_x = 2.0 m/s² (its value at 5.0 s) and gets 25 m. Explain the error, and check your answer to (a) with an average velocity.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v_x = 0 + ∫₀ᵗ 0.40t dt = **0.20t²**; x = 0 + ∫₀ᵗ 0.20t² dt = **0.20t³/3** (= t³/15). At t = 5.0 s: v_x = **5.0 m/s** and x = **8.3 m** (8.33 m).

**(b)** The acceleration is now constant, so the constant-acceleration equations apply. Time: 0 = 5.0 − 2.5t_b, so **t_b = 2.0 s**. Distance: 0 = 5.0² − 2(2.5)d, so **d = 5.0 m**. The car stops at x = 13 m (13.3 m), at t = 7.0 s.

**(c)**
- a_x–t: a line rising from 0 to 2.0 m/s², then a **jump** to a flat line at −2.5 m/s² until 7.0 s.
- v_x–t: a curve bending upward from 0 to 5.0 m/s, then a straight line down to 0 at 7.0 s: a **corner** at 5.0 s, but no break.
- x–t: bends upward to 8.3 m, then bends downward and levels off at 13.3 m at 7.0 s, with **no corner**.

**(d)** x = ½a_x t² needs a constant acceleration. Here a_x grows from 0 and reaches 2.0 m/s² only at the end, so the student's distance is three times too large. Check: the average velocity is 8.33 ÷ 5.0 = 1.67 m/s, below the mean of the end speeds, 2.5 m/s, because the car moves slowly for most of the stage.

| Point | What earns it |
|---|---|
| 1 | (a) Integrates a_x with v_x0 = 0 to get 0.20t² and 5.0 m/s |
| 1 | (a) Integrates again with x₀ = 0 to get t³/15 and 8.3 m |
| 1 | (b) 2.0 s and 5.0 m, using constant-acceleration equations for the braking stage only |
| 1 | (c) a_x–t: ramp then jump to a flat negative line |
| 1 | (c) v_x–t curving up then straight down (corner); x–t smooth, levelling at 13 m |
| 1 | (d) Identifies the non-constant acceleration as the error, with the average-velocity check or an equivalent argument |

**Total: 6 points.** Carry forward an incorrect v_x(5.0) into (b).
</details>

## Question 5 (constructed response · mixed)

Take **+x east and +y up**, with the ground G as the reference frame. A flat cart C rolls east at a constant 3.0 m/s. A student on it throws a ball B at 6.0 m/s **relative to the cart**, 60° above the horizontal, aimed **west**.

(a) Write the ball's launch velocity relative to the cart, v_BC, in unit vector notation.
(b) Find v_BG, the ball's launch velocity relative to the ground. Describe the ball's path as seen from the ground.
(c) Find the time until the ball returns to its launch height.
(d) Where does the ball come down relative to the student's hand, which moves with the cart? Describe the path as seen by the student.
(e) Explain why both observers measure the same time.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** West is −x. v_BC = (−6.0 cos 60°) î + (6.0 sin 60°) ĵ = **(−3.0 î + 5.2 ĵ) m/s**.

**(b)** v_BG = v_BC + v_CG = (−3.0 + 3.0) î + 5.2 ĵ = **(5.2 ĵ) m/s**. From the ground, the ball goes **straight up and comes straight back down**.

**(c)** Only the vertical motion matters: 0 = 5.2t − 4.9t², so t = 2(5.2) ÷ 9.8 = **1.1 s** (1.06 s).

**(d)** In the cart frame, v_x = −3.0 m/s throughout, so the ball lands **3.2 m west of the hand** (3.0 × 1.06 m), along a parabola. Check: in the ground frame the ball returns to its start point while the cart moves 3.18 m east.

**(e)** The cart's velocity is constant, so both frames are inertial and agree on the acceleration, (0, −9.8) m/s². They also agree on the initial vertical velocity, 5.2 m/s. So the vertical motion and the time are identical; only the horizontal component differs.

| Point | What earns it |
|---|---|
| 1 | (a) Components with the west sign: −3.0 î + 5.2 ĵ |
| 1 | (b) Adds v_CG as a vector to get 5.2 ĵ m/s |
| 1 | (b) Straight up and down in the ground frame |
| 1 | (c) 1.1 s from the vertical motion alone |
| 1 | (d) 3.2 m west of the hand, with the parabola in the cart frame |
| 1 | (e) Same acceleration **and** same initial v_y, so same time |

**Total: 6 points.** With g = 10 m/s², 1.0 s and 3.1 m earn full credit.
</details>

## Question 6 (constructed response · mixed)

Take **+x east and +y north**, origin at the start. A small robot moves on a flat floor with r(t) = (2.0t²) î + (6.0t − 1.0t³) ĵ.

(a) Find v(t) and a(t).
(b) Find the time when the robot is moving due east. Give its speed and position vector at that time.
(c) Find the displacement from t = 0 to t = 2.0 s as a magnitude and a unit vector. Compare the size of the average velocity over that interval with the speed at t = 2.0 s.
(d) For which component could you use the constant-acceleration equations? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v = dr/dt = **(4.0t) î + (6.0 − 3.0t²) ĵ**; a = dv/dt = **4.0 î − (6.0t) ĵ**.

**(b)** Due east means v_y = 0 with v_x > 0: 6.0 − 3.0t² = 0, so **t = √2 = 1.4 s**. Speed = v_x = 4.0 × 1.41 = **5.7 m/s**. Position: r = (2.0 × 2.0) î + (6.0 × 1.41 − 2.83) ĵ = **(4.0 î + 5.7 ĵ) m**.

**(c)** r(2.0) = 8.0 î + (12 − 8.0) ĵ = (8.0 î + 4.0 ĵ) m, and r(0) = 0. |Δr| = √(8.0² + 4.0²) = **8.9 m**; unit vector **0.89 î + 0.45 ĵ**. Average velocity = Δr ÷ 2.0 s = (4.0 î + 2.0 ĵ) m/s, magnitude **4.5 m/s**. At t = 2.0 s, v = 8.0 î − 6.0 ĵ, so the speed is **10 m/s**. The speed has changed and the path curves, so the two differ in size and direction.

**(d)** **The x-component only.** a_x = 4.0 m/s² is constant, but a_y = −6.0t changes with time, so y needs integration. Independent components can behave differently.

| Point | What earns it |
|---|---|
| 1 | (a) v(t) and a(t) by differentiating each component |
| 1 | (b) t = 1.4 s from v_y = 0, with speed 5.7 m/s |
| 1 | (b) Position (4.0 î + 5.7 ĵ) m |
| 1 | (c) 8.9 m and unit vector 0.89 î + 0.45 ĵ |
| 1 | (c) 4.5 m/s compared with 10 m/s, with a reason |
| 1 | (d) x only, because a_x is constant and a_y depends on t |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

Take **+y downward** for this question. A student drops a ball from rest from several heights h and times each fall t with light gates. The data are invented for practice:

| h (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| t (s) | 0.204 | 0.284 | 0.351 | 0.403 | 0.453 |

(a) The student claims that h = ½gt². State what to plot to get a straight line through the origin, and how to find g from it.
(b) Calculate the plotted values and find g.
(c) The same ball rolls off a horizontal table top 1.00 m high at 2.0 m/s. Use the data to predict how far from the table edge it lands.
(d) Suggest why light gates are better than a hand-held stopwatch here, and how a fixed timing delay would show on your graph.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Plot **h (m) on the vertical axis against t² (s²) on the horizontal axis**. If the claim holds, the line passes through the origin with slope g/2, so **g = 2 × slope**.

**(b)** t² values: 0.0416, 0.0807, 0.123, 0.162, 0.205 s², close to a line through the origin. The best-fit slope is about 4.89 m/s², so **g ≈ 9.8 m/s²** (accept 9.6 to 10.0 m/s²).

**(c)** The vertical motion is the same as a drop from rest, so the fall time is **0.453 s** (from the table, or √(2 × 1.00 ÷ 9.8) = 0.45 s). With a_x = 0, the horizontal distance is 2.0 × 0.453 = **0.91 m**.

**(d)** A stopwatch adds a human reaction time that is a large, variable fraction of a 0.2 to 0.5 s fall. A fixed delay adds the same amount to every t, so the graph of h against t² no longer passes through the origin (its h-intercept becomes negative). Light gates remove almost all of that delay.

| Point | What earns it |
|---|---|
| 1 | (a) h against t², with g = 2 × slope |
| 1 | (b) Correct t² values and a straight-line judgement |
| 1 | (b) g from the slope, in the accepted range, with unit |
| 1 | (c) Uses the same fall time as a drop (independence of components) and gets 0.91 m |
| 1 | (d) Reaction-time argument **and** its effect on the graph (curve or non-zero intercept) |

**Total: 5 points.** A free fit (slope 4.89 m/s², intercept close to zero) also earns the (b) points.
</details>

## How did you do?

Add up your points: Questions 1 to 3 are worth 1 point each, Questions 4 to 6 are worth 6 points each and Question 7 is worth 5, for 26 in all. The total shows what to revisit; it does not predict an exam score.

- **Q1 or Q6 incomplete:** revisit vector components and unit vectors, then derivatives of each component. Use the [Topic 1.1 checklist](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-checklist/) and the [Topic 1.5 checklist](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-checklist/).
- **Q4 or Q6(d) incomplete:** ask "is the acceleration constant?" first. Use the [Topic 1.2 checklist](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-checklist/).
- **Q3, Q4(c) or Q7 incomplete:** practise slopes, areas, linearised graphs and factors of change with the [Topic 1.3 checklist](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-checklist/).
- **Q2 or Q5 incomplete:** write the subscript chain before you add any velocity. Use the [Topic 1.4 checklist](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-checklist/).

After you revise, retake the matching part of the [Unit 1 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-1-diagnostic/), then try this review again a few days later.
