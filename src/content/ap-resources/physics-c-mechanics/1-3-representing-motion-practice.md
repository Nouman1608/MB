---
resourceId: "mb-ap-physcm-1.3-practice"
title: "Representing Motion: Practice Questions (Physics C: Mechanics 1.3)"
description: "Seven original Marlbridge practice questions on motion diagrams, matching graphs, slopes and areas, free fall, motion-sensor data and factors of change."
course: "physics-c-mechanics"
unit: 1
topics: ["1.3"]
resourceType: "practice-questions"
prerequisites:
  - "Velocity and acceleration as derivatives, and integration with initial conditions (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-1.3-study-guide"]
learningObjectives:
  - "Read motion diagrams and translate between velocity and position graphs"
  - "Use areas under a_x–t and v_x–t graphs to find changes in velocity, displacement and distance"
  - "Apply the constant-acceleration equations to free fall and to data from a ramp"
  - "Derive symbolic results and use them to predict factors of change"
  - "Justify claims about acceleration using experimental data"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. g = 9.8 m/s² (10 m/s² is also accepted). Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-1.3-study-guide", "mb-ap-physcm-1.3-revision-notes", "mb-ap-physcm-1.3-checklist"]
next: "mb-ap-physcm-1.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Use g = 9.8 m/s² unless told otherwise."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. All data are invented for practice. Use g = 9.8 m/s² and ignore air resistance unless told otherwise; answers with g = 10 m/s² are equally acceptable. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A motion diagram for a cart shows its position every 0.10 s: 0, 9.0, 16.0, 21.0 and 24.0 cm. Which statement describes the cart's motion?

- (A) v_x is positive and decreasing; a_x is constant at about −2.0 m/s².
- (B) v_x is positive and decreasing; a_x is negative and growing in size, because the gaps keep shrinking.
- (C) v_x is negative, because the cart is slowing down; a_x is constant at about −2.0 m/s².
- (D) v_x is positive and decreasing; a_x is constant at about −0.20 m/s².

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The gaps are 9.0, 7.0, 5.0 and 3.0 cm. The cart moves right (v_x > 0) and slows down. Each gap is 2.0 cm shorter than the one before, so the acceleration is constant: a_x = (change in gap) ÷ (Δt)² = −0.020 m ÷ (0.10 s)² = −2.0 m/s².

- (B) The gaps shrink by the **same** amount each step, which means constant acceleration.
- (C) confuses slowing down with moving left. The positions increase, so v_x is positive.
- (D) divides the change in gap by Δt only once. Acceleration needs (Δt)², so the unit would be wrong too.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**, with the object at x₀ = 0 at t = 0. Its v_x–t graph is a straight line from +4.0 m/s at t = 0 to −4.0 m/s at t = 4.0 s. Which description of its x–t graph is correct?

- (A) A straight line with a negative slope, starting at x = 0.
- (B) A curve bending downward that rises to a maximum of 4.0 m at t = 2.0 s and returns to x = 0 at t = 4.0 s.
- (C) A curve bending upward that falls to a minimum at t = 2.0 s and returns to x = 0 at t = 4.0 s.
- (D) A curve bending downward that keeps rising, reaching its maximum at t = 4.0 s.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The slope of the v_x–t graph is a_x = −2.0 m/s², so the x–t graph bends downward. Integrating, x = 4.0t − 1.0t². Velocity is zero at t = 2.0 s, where x = 8.0 − 4.0 = 4.0 m (the maximum). At t = 4.0 s, x = 16 − 16 = 0. The areas under v_x–t cancel.

- (A) copies the shape of the velocity graph. The slope of x–t, not its shape, gives v_x.
- (C) has the wrong curvature. A negative a_x makes x–t bend downward.
- (D) forgets that after 2.0 s the velocity is negative, so the object moves back towards the origin.
</details>

## Question 3 (multiple choice · core)

Take **+y upward**. A drone hovering at rest releases a sensor package, which falls a height h in time T. Ignore air resistance. From what height must the package be released so that its fall lasts 3T?

- (A) √3 h
- (B) 3h
- (C) 9h
- (D) 27h

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Starting from rest, the drop is h = ½gT², so h ∝ T². Multiplying the time by 3 multiplies the height by 3² = 9.

- (A) inverts the relationship. It would be right for "how does the time change if the height triples?" (t ∝ √h).
- (B) assumes height ∝ time, which needs constant velocity; the package speeds up.
- (D) uses a cube. A t³ dependence needs an acceleration that grows with time.
</details>

## Question 4 (calculation · core)

Take **+x to the right**. A particle is at x₀ = 0 with v_x0 = −3.0 m/s at t = 0. Its acceleration is:

| Time interval (s) | 0 to 3.0 | 3.0 to 5.0 | 5.0 to 7.0 |
|---|---|---|---|
| a_x (m/s²) | +2.0 | 0 | −1.0 |

Find (a) v_x at t = 3.0 s, 5.0 s and 7.0 s, (b) the time when the particle is momentarily at rest, (c) its displacement from 0 to 7.0 s, (d) the distance it travels in that time.

<details>
<summary>Worked solution</summary>

1. **(a)** Use areas under the a_x–t graph: +2.0 × 3.0 = +6.0 m/s, then 0, then −1.0 × 2.0 = −2.0 m/s. So v_x(3.0) = −3.0 + 6.0 = **+3.0 m/s**, v_x(5.0) = **+3.0 m/s**, v_x(7.0) = 3.0 − 2.0 = **+1.0 m/s**.
2. **(b)** In the first stage v_x = −3.0 + 2.0t = 0 at **t = 1.5 s**. After that v_x stays positive.
3. **(c)** Areas under the v_x–t graph: 0 to 1.5 s is a triangle below the axis, −½ × 1.5 × 3.0 = −2.25 m; 1.5 to 3.0 s is a triangle above, +2.25 m; 3.0 to 5.0 s is a rectangle, +6.0 m; 5.0 to 7.0 s is a trapezium, ½ × (3.0 + 1.0) × 2.0 = +4.0 m. Displacement = −2.25 + 2.25 + 6.0 + 4.0 = **+10 m**.
4. **(d)** Distance = 2.25 + 2.25 + 6.0 + 4.0 = **14.5 m** (15 m to 2 s.f.).

Suggested mark points (4): 1 for the three velocities, including v_x0; 1 for t = 1.5 s; 1 for the displacement from signed areas; 1 for splitting at t = 1.5 s and adding sizes for the distance.

Common error: +4.0 m/s at 7.0 s, from leaving out v_x0.
</details>

## Question 5 (constructed response · core)

Take **+y upward**, origin at a juggler's hand. A ball leaves the hand moving straight up at 3.0 m/s and is caught at the same height.

(a) Sketch the y–t, v_y–t and a_y–t graphs from release to catch, on the same time axis. Label the time and the values at the top of the path and at the catch.
(b) A student says: "At the top, the acceleration is zero because the ball stops." Use your v_y–t graph to explain why this is wrong.
(c) Use an area on your v_y–t graph to find the greatest height of the ball above the hand.
(d) Derive an expression for the time in the air in terms of v₀ and g. Use it to state the factor by which the time in the air and the greatest height change if the launch speed is halved.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Top at t = v₀/g = 3.0/9.8 = 0.31 s; catch at 0.61 s.
- y–t: a curve bending downward from 0, peaking at 0.46 m at 0.31 s, back to 0 at 0.61 s, symmetric about the top.
- v_y–t: a straight line from +3.0 m/s, crossing zero at 0.31 s, reaching −3.0 m/s at 0.61 s.
- a_y–t: a flat line at −9.8 m/s² for the whole flight.

**(b)** The v_y–t graph is one straight line with slope −9.8 m/s² everywhere, including where it crosses zero. The velocity is still changing at the top, so the acceleration is not zero.

**(c)** Area of the triangle from 0 to 0.31 s: ½ × 0.306 × 3.0 = **0.46 m**. (Check: v₀²/(2g) = 9.0/19.6 = 0.46 m.)

**(d)** At the catch, y = 0: 0 = v₀T − ½gT², so T(v₀ − ½gT) = 0. Reject T = 0 (the release), leaving **T = 2v₀/g**. T ∝ v₀, so halving v₀ **halves** the time in the air (0.31 s). The height is v₀²/(2g) ∝ v₀², so it falls to **one quarter** (0.11 m).

| Point | What earns it |
|---|---|
| 1 | (a) y–t curving downward, symmetric, peak at 0.31 s, back to 0 at 0.61 s |
| 1 | (a) v_y–t straight line from +3.0 to −3.0 m/s, crossing zero at the time of the top; a_y–t flat at −9.8 m/s² |
| 1 | (b) Uses the constant slope of v_y–t (or the changing velocity) to show a_y = −g at the top |
| 1 | (c) 0.46 m from the triangle area under v_y–t |
| 1 | (d) Derives T = 2v₀/g, rejecting T = 0 |
| 1 | (d) Time halves and height becomes one quarter, from T ∝ v₀ and h ∝ v₀² |

With g = 10 m/s², 0.30 s, 0.60 s and 0.45 m earn full credit.
</details>

## Question 6 (constructed response · stretch)

Take **+x up a ramp**, origin at the cart's position at t = 0. A student gives a cart a push up a straight ramp and lets it roll. A motion sensor records:

| t (s) | 0 | 0.40 | 0.80 | 1.20 | 1.60 | 2.00 |
|---|---|---|---|---|---|---|
| v_x (m/s) | 1.20 | 0.90 | 0.60 | 0.30 | 0.00 | −0.30 |

(a) The student claims the acceleration is constant throughout, both up and back down the ramp. Use the data to support or reject this claim.
(b) Find a_x, with its unit.
(c) Find how far up the ramp the cart travels before it stops. Use one method and check it with a second.
(d) Find the cart's position at t = 2.00 s.
(e) Another student says the acceleration is zero at t = 1.60 s, because the cart is at rest. Use the data to respond.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** In every 0.40 s interval, v_x falls by 0.30 m/s, including where the cart turns round. The v_x–t graph is a straight line with constant slope, so the data **support** the claim.

**(b)** Slope = (−0.30 − 1.20) ÷ (2.00 − 0) = **−0.75 m/s²** (down the ramp).

**(c)** Area under v_x–t from 0 to 1.60 s: ½ × 1.60 × 1.20 = **0.96 m**. Check with the equation with no t: 0 = 1.20² + 2(−0.75)Δx gives Δx = 1.44 ÷ 1.5 = 0.96 m.

**(d)** x = 0 + 1.20 × 2.00 + ½(−0.75)(2.00)² = 2.40 − 1.50 = **0.90 m**. (Areas: 0.96 m up, then ½ × 0.40 × 0.30 = 0.06 m back.)

**(e)** The velocity goes from +0.30 m/s at 1.20 s to −0.30 m/s at 2.00 s, changing at the same rate through 1.60 s. So a_x = −0.75 m/s² at 1.60 s too.

| Point | What earns it |
|---|---|
| 1 | (a) Equal velocity changes in equal times (or a straight v_x–t graph), so the claim is supported |
| 1 | (b) −0.75 m/s² with sign and unit |
| 1 | (c) 0.96 m by one method and confirmed by a second |
| 1 | (d) 0.90 m (carry forward an incorrect a_x) |
| 1 | (e) Uses the data around 1.60 s to show v_x is still changing, so a_x ≠ 0 |
</details>

## Question 7 (explanation · stretch)

Take **+x along a straight test track**. A test vehicle starts from rest and speeds up at constant acceleration a for time T. It then brakes with constant acceleration of size 2a until it stops.

A student says: "Braking takes half as long. Distance goes as time squared, so the braking distance is a quarter of the speed-up distance."

(a) Derive expressions, in terms of a and T, for the braking time and for each distance.
(b) Evaluate the student's claim and explain the result using a v_x–t graph or average velocities.
(c) If the same vehicle speeds up for 2T with the same a, then brakes as before, by what factor does the total distance change?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Top speed: v = aT. Braking time: 0 = aT − 2a t_b, so **t_b = T/2**. Speed-up distance: **d₁ = ½aT²**. Braking distance: d₂ = (aT)² ÷ (2 × 2a) = **aT²/4**.

**(b)** d₂/d₁ = (aT²/4) ÷ (aT²/2) = **½**, not ¼, so the claim is **false**. On a v_x–t graph both stages are triangles with the same height aT. Their areas are in the ratio of their bases, T/2 to T. Equivalently, both stages have the same average velocity, aT/2, so distance ∝ time. "Distance ∝ t²" holds only for one acceleration from rest.

**(c)** Total distance = ½aT² + aT²/4 = **¾aT²**, so it is ∝ T². Doubling T multiplies the total distance by **4**.

| Point | What earns it |
|---|---|
| 1 | (a) t_b = T/2 from the velocity equation |
| 1 | (a) d₁ = ½aT² and d₂ = aT²/4, each with working |
| 1 | (b) Ratio ½, so the claim fails |
| 1 | (b) Explains with equal heights of the v_x–t triangles or equal average velocities |
| 1 | (c) Factor of 4, from total distance ∝ T² |

A numerical test with chosen a and T can earn only the (b) ratio point.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Motion diagrams" and "The graph links" in the [study guide](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/).
- **Q3 or Q7(c) wrong:** revisit "Functional dependence and factors of change".
- **Q4 wrong:** work through Worked example 1 and Figure 2.
- **Q5 or Q6 incomplete:** review "Free fall near Earth" and Worked example 2. Point to a slope, an area or a data pattern.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-checklist/).
