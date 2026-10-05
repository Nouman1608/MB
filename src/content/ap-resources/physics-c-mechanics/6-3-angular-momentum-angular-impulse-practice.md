---
resourceId: "mb-ap-physcm-6.3-practice"
title: "Angular Momentum and Angular Impulse: Practice Questions (Physics C: Mechanics 6.3)"
description: "Seven original Marlbridge calculus-based practice questions on angular momentum and angular impulse: L = r × p, torque–time and L–time graphs, integration and sensor data."
course: "physics-c-mechanics"
unit: 6
topics: ["6.3"]
resourceType: "practice-questions"
prerequisites:
  - "Integrating polynomials; torque and τ_net = Iα (Topics 5.3 and 5.6)"
prerequisiteResources: ["mb-ap-physcm-6.3-study-guide"]
learningObjectives:
  - "Calculate angular momentum for rigid bodies and for point objects about a chosen point"
  - "Find angular impulse and changes in angular momentum from torque–time graphs and functions"
  - "Read net torque from the slope of an angular momentum–time graph"
  - "Derive τ_net = dL/dt and the rotational impulse–momentum theorem"
  - "Estimate angular impulse from sensor data and use it to judge friction"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. Use sin 37° = 0.60 and cos 37° = 0.80. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-6.3-study-guide", "mb-ap-physcm-6.3-revision-notes", "mb-ap-physcm-6.3-checklist"]
next: "mb-ap-physcm-6.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its positive sense of rotation or its reference point."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, τ is in N·m, t in s, ω in rad/s, I in kg·m² and L in kg·m²/s, so each numerical coefficient carries whatever unit makes the term correct. Axles are frictionless unless stated. Use sin 37° = 0.60 and cos 37° = 0.80. Round final answers to 2 significant figures unless told otherwise. A calculator is used only for arithmetic.

## Question 1 (multiple choice · foundation)

A 2.0 kg object moves at 3.0 m/s in a straight line. At one instant it is 5.0 m from point O, and the angle between its position vector from O and its velocity is 37°. What is the size of its angular momentum about O?

- (A) 9.0 kg·m²/s
- (B) 18 kg·m²/s
- (C) 24 kg·m²/s
- (D) 30 kg·m²/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** L = rmv sin φ = 5.0 × 2.0 × 3.0 × 0.60 = 18 kg·m²/s. Equivalently, the perpendicular distance from O to the path is d = 5.0 × 0.60 = 3.0 m, and L = mvd = 2.0 × 3.0 × 3.0 = 18 kg·m²/s.

- (A) halves the correct answer, as if a ½ belonged in the formula. That ½ belongs in kinetic energy, not angular momentum.
- (C) uses cos 37° instead of sin 37°. The vector product needs the sine of the angle between r and v.
- (D) uses rmv with no angle. That is only right when the velocity is perpendicular to r.
</details>

## Question 2 (multiple choice · core)

Take counterclockwise as positive. A wheel with I = 0.25 kg·m² is turning at −4.0 rad/s. A net torque of +3.0 N·m acts for 2.0 s, then a net torque of −1.0 N·m acts for the next 3.0 s. What is the wheel's angular velocity at the end?

- (A) +8.0 rad/s
- (B) +12 rad/s
- (C) +20 rad/s
- (D) +32 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** L₀ = 0.25 × (−4.0) = −1.0 kg·m²/s. Net angular impulse = (+3.0)(2.0) + (−1.0)(3.0) = +3.0 N·m·s. L = −1.0 + 3.0 = +2.0 kg·m²/s, so ω = 2.0/0.25 = +8.0 rad/s.

- (B) leaves out the initial angular momentum: 3.0/0.25. The angular impulse gives only the change in L.
- (C) uses only the positive angular impulse: (−1.0 + 6.0)/0.25. That is the angular velocity at t = 2.0 s, before the negative torque acts.
- (D) adds the sizes of both areas: (−1.0 + 6.0 + 3.0)/0.25. Area below the t-axis is a negative angular impulse.
</details>

## Question 3 (multiple choice · core)

Take counterclockwise as positive. The angular momentum of a turntable about its axle rises steadily from 0 to +6.0 kg·m²/s between t = 0 and t = 3.0 s, stays at +6.0 kg·m²/s until t = 5.0 s, then falls steadily to −2.0 kg·m²/s at t = 7.0 s. Which describes the net torque on the turntable?

- (A) +2.0 N·m from 0 to 3.0 s; zero from 3.0 to 5.0 s; −4.0 N·m from 5.0 to 7.0 s
- (B) +2.0 N·m from 0 to 3.0 s; +6.0 N·m from 3.0 to 5.0 s; −2.0 N·m from 5.0 to 7.0 s
- (C) +2.0 N·m from 0 to 3.0 s; zero from 3.0 to 5.0 s; −1.0 N·m from 5.0 to 7.0 s
- (D) +2.0 N·m from 0 to 3.0 s; zero from 3.0 to 5.0 s; −4.0 N·m from 5.0 to 6.5 s, then +4.0 N·m from 6.5 to 7.0 s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The net torque is the slope of the L–t graph. From 0 to 3.0 s: 6.0/3.0 = +2.0 N·m. From 3.0 to 5.0 s the graph is flat: zero torque. From 5.0 to 7.0 s: (−2.0 − 6.0)/2.0 = −4.0 N·m.

- (B) reads the value of L as the torque in the middle and last intervals. Torque is the slope, not the height.
- (C) divides the final value by the time interval, −2.0/2.0, instead of using the change, −8.0 kg·m²/s.
- (D) thinks the torque must reverse when L passes through zero at 6.5 s. The slope stays the same as the graph crosses the axis; only L changes sign.
</details>

## Question 4 (calculation · core)

Take counterclockwise as positive. A turntable with I = 0.50 kg·m² turns at +8.0 rad/s. A brake applies a torque τ = −0.60t that grows with time from t = 0 until the turntable stops. No other torque acts.

(a) Find the angular impulse of the brake from t = 0 to t = 2.0 s, and the angular velocity at 2.0 s.
(b) Find the time at which the turntable stops.
(c) Sketch the L–t graph from t = 0 until it stops, and describe its shape.

<details>
<summary>Worked solution</summary>

1. **(a)** ∫₀^2.0 (−0.60t) dt = −0.30t² from 0 to 2.0 = **−1.2 N·m·s**. L₀ = 0.50 × 8.0 = 4.0 kg·m²/s, so L = 4.0 − 1.2 = 2.8 kg·m²/s and ω = 2.8/0.50 = **5.6 rad/s**.
2. **(b)** L(t) = 4.0 − 0.30t². L = 0 when t² = 4.0/0.30 = 13.3, so **t = 3.7 s** (3.65 s).
3. **(c)** L(t) = 4.0 − 0.30t² is a downward parabola. It starts at 4.0 kg·m²/s with **zero slope** (the brake torque is zero at t = 0), gets steeper as the torque grows, and reaches zero at 3.7 s with slope −2.2 N·m.

Suggested mark points (4): 1 for setting up ∫τ dt; 1 for −1.2 N·m·s and ω = 5.6 rad/s with L₀ included; 1 for the stopping time; 1 for a sketch that starts flat at 4.0 and curves down more and more steeply to zero.

Common error: using the torque at 2.0 s, −1.2 N·m, for the whole 2.0 s. That gives −2.4 N·m·s and ω = 3.2 rad/s. The torque only reaches −1.2 N·m at the end of the interval.
</details>

## Question 5 (constructed response · core)

(a) A rigid body turns about a fixed axis with rotational inertia I. Starting from τ_net = Iα, show that τ_net = dL/dt, and hence that ∫τ_net dt = ΔL.
(b) State the condition used in (a), and say which step needs it.
(c) A point object of mass m has position r and velocity v relative to a fixed point O. Show that d(r × p)/dt = r × F_net.
(d) A constant net torque acts on a wheel that starts at rest. Sketch the τ–t graph and the L–t graph on the same time axis, and explain how they are linked.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** α = dω/dt, so τ_net = I dω/dt. With I constant, I dω/dt = d(Iω)/dt = **dL/dt**. Multiply by dt and integrate from t₁ to t₂: **∫τ_net dt = L₂ − L₁ = ΔL**.

**(b)** The body must be **rigid** (so I is constant). It is needed to move I inside the derivative: I dω/dt = d(Iω)/dt.

**(c)** Product rule: d(r × p)/dt = (dr/dt) × p + r × (dp/dt) = v × (mv) + r × F_net. The vector product of two parallel vectors is zero, so v × mv = 0, leaving **r × F_net**, the torque of the net force about O.

**(d)** τ–t: a horizontal line at the constant torque τ₀. L–t: a straight line through the origin with slope τ₀. The slope of the L–t graph equals the torque, and the area under the τ–t graph up to any time (τ₀t) equals the height of the L–t graph at that time.

| Point | What earns it |
|---|---|
| 1 | (a) Writes τ_net = I dω/dt and brings I inside to get dL/dt |
| 1 | (a) Integrates over time with limits to reach ∫τ_net dt = ΔL |
| 1 | (b) Constant I (rigid body), linked to the step I dω/dt = d(Iω)/dt |
| 1 | (c) Product rule with v × mv = 0 |
| 1 | (d) Correct pair of graphs, with slope ↔ torque **or** area ↔ L stated |

**Alternative for (c).** Working in components, L_z = x p_y − y p_x; differentiating gives v_x p_y + x F_y − v_y p_x − y F_x, and the velocity terms cancel because p = mv. This earns the point.
</details>

## Question 6 (constructed response · stretch)

A fan rotor (I = 0.0080 kg·m² about its shaft) starts from rest. A torque sensor on the shaft records the motor torque on the rotor:

| t (s) | 0 | 0.5 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|
| motor torque (N·m) | 0 | 0.090 | 0.140 | 0.160 | 0.150 | 0.110 | 0.050 |

Take the rotor's direction of spin as positive.

(a) Estimate the angular impulse delivered by the motor from 0 to 3.0 s, showing your method.
(b) Predict the rotor's angular velocity at 3.0 s if there is no friction.
(c) A tachometer reads 40 rad/s at 3.0 s. Estimate the average friction torque on the rotor.
(d) At what time in the data is the rotor's angular momentum increasing fastest? Justify your answer.
(e) Sketch the rotor's L–t graph from the motor data alone (no friction), showing its key features.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Trapezium rule with 0.5 s strips: 0.5 × [½(0 + 0.050) + 0.090 + 0.140 + 0.160 + 0.150 + 0.110] = 0.5 × 0.675 = **0.34 N·m·s** (0.3375).

**(b)** ΔL = 0.34 kg·m²/s from rest, so ω = 0.3375/0.0080 = **42 rad/s**.

**(c)** Measured L = 0.0080 × 40 = 0.32 kg·m²/s. Missing angular momentum = 0.3375 − 0.32 ≈ 0.018 kg·m²/s, taken out by friction over 3.0 s. Average friction torque ≈ 0.0175/3.0 ≈ **0.006 N·m** (5.8 × 10⁻³ N·m), acting against the spin.

**(d)** At **t = 1.5 s**. dL/dt equals the net torque, and the motor torque is largest there (0.160 N·m). Friction is small and roughly constant, so the net torque is still largest at 1.5 s.

**(e)** L starts at 0 with a gentle slope, rises most steeply around 1.5 s, then flattens as the torque falls, reaching about 0.34 kg·m²/s at 3.0 s. It never decreases, because the motor torque is never negative.

| Point | What earns it |
|---|---|
| 1 | (a) Area under the τ–t data by trapezia or counting squares, about 0.34 N·m·s (accept 0.32–0.35 with a valid method) |
| 1 | (b) ω ≈ 42 rad/s from ΔL = Iω (carry forward from (a)) |
| 1 | (c) Uses the difference in L and divides by 3.0 s, giving about 0.006 N·m |
| 1 | (d) 1.5 s, linked to dL/dt = τ_net and the largest torque |
| 1 | (e) Sketch starts flat at 0, steepest near 1.5 s, levels off, always rising |

**Alternative for (a).** Simpson's rule gives 0.345 N·m·s and earns the point.
</details>

## Question 7 (explanation · stretch)

A 0.17 kg puck slides at a constant 8.0 m/s across frictionless ice. Point P is fixed on the ice, 0.40 m from the puck's straight path.

- Student X says: "The puck has no angular momentum about P, because it is not rotating."
- Student Y says: "The puck's angular momentum about P keeps changing, because its distance from P keeps changing."

(a) Find the size of the puck's angular momentum about P.
(b) Evaluate each student's claim.
(c) Explain, using torque, why the angular momentum about P does not change with time.
(d) Name a point about which the puck's angular momentum is zero.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** L = mvd = 0.17 × 8.0 × 0.40 = **0.54 kg·m²/s** (0.544).

**(b)** **X is wrong.** Angular momentum about a point does not need spin: L = r × p is nonzero whenever the path does not pass through P. **Y is wrong** too. As r grows, the angle between r and v changes so that r sin φ stays equal to the fixed perpendicular distance d = 0.40 m. For example, when the puck is 1.0 m along the path from the closest point, r = 1.08 m and sin φ = 0.371, and rmv sin φ is still 0.544 kg·m²/s.

**(c)** The ice is frictionless and the puck moves at constant velocity, so the net force on it is zero. The net torque about P, r × F_net, is therefore zero, and since τ_net = dL/dt, L about P is constant.

**(d)** Any point **on the puck's path**, where d = 0.

| Point | What earns it |
|---|---|
| 1 | (a) 0.54 kg·m²/s from mvd or rmv sin φ |
| 1 | (b) Rejects X: angular momentum about a point does not need rotation |
| 1 | (b) Rejects Y: r sin φ stays equal to d (a numerical check also earns this) |
| 1 | (c) Zero net force, so zero torque about P, so dL/dt = 0 |
| 1 | (d) Any point on the line of motion |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Angular momentum of a point object" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-study-guide/). Name the reference point first.
- **Q2 or Q4 wrong:** revisit "Angular impulse" and Worked example 1. Include L₀ with its sign, and integrate torques that change with time.
- **Q3 wrong:** remember that net torque is the slope of the L–t graph (Figure 2).
- **Q5 or Q6 incomplete:** go through "The rotational impulse–momentum theorem" step by step, then compare your sketches with Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-checklist/).
