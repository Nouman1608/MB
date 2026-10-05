---
resourceId: "mb-ap-physcem-13.3-practice"
title: "Induced Currents and Magnetic Forces: Practice Questions (Physics C: E&M 13.3)"
description: "Seven original Marlbridge practice questions on magnetic forces on induced currents: braking direction, factors of change, rods on rails and falling loops, with solutions."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.3"]
resourceType: "practice-questions"
prerequisites:
  - "Motional emf and Lenz's law (Topic 13.2)"
prerequisiteResources: ["mb-ap-physcem-13.3-study-guide"]
learningObjectives:
  - "Find the direction of the magnetic force on an induced current"
  - "Calculate induced current, force and power for moving rods and loops"
  - "Apply Newton's second law to derive terminal speed and v(t)"
  - "Predict factors of change using functional dependence"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.3-study-guide", "mb-ap-physcem-13.3-revision-notes", "mb-ap-physcem-13.3-checklist"]
next: "mb-ap-physcem-13.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 6 and 7 need Newton's second law written as a differential equation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: g = 9.8 m/s². Fields are uniform inside their region and zero outside. Rails and connecting wires have negligible resistance and there is no friction unless stated. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A rectangular conducting loop lies in the plane of the page, partly inside a region where a uniform magnetic field points out of the page. The loop is pulled to the right, so that it is **leaving** the field region through the region's right-hand boundary. Which statement describes the net magnetic force on the loop?

- (A) It points to the left, opposing the motion.
- (B) It points to the right, helping the motion.
- (C) It is zero, because the field is uniform.
- (D) It points up the page, perpendicular to the motion.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The flux out of the page is decreasing, so the induced current is counterclockwise (it adds flux out of the page). Only the left edge and parts of the top and bottom edges are in the field. The top and bottom forces cancel. On the left edge the current flows down the page; F = I L × B with L down and B out of the page points to the left. The force opposes the motion, as Lenz's law requires.

- (B) would let the loop speed up and generate more current with no energy input. That breaks energy conservation.
- (C) is true only when the **whole** loop is inside the field. Here the flux is changing, so a current flows and the edge inside the field feels a force.
- (D) treats the force on the top or bottom edge as if it were not cancelled. The top and bottom parts in the field carry opposite currents and have equal lengths inside the field.
</details>

## Question 2 (multiple choice · core)

A metal rod is pulled at constant speed along rails connected by a resistor in a uniform field. The speed is then doubled and kept constant again. By what factor does the power the pulling agent must supply change?

- (A) 1 (no change)
- (B) 2
- (C) 4
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At constant speed the pull equals the magnetic force, F = B²L²v/R. The power is P = Fv = B²L²v²/R, so doubling v multiplies P by 2² = 4. Check from the circuit side: the current doubles, so I²R becomes 4 times as large.

- (A) assumes the force is fixed by the field alone. The force depends on the current, which depends on the speed.
- (B) is the factor for the current, or for the force. Power is force × speed, and both double.
- (D) multiplies by v³. The force depends on v once (through I), and power multiplies by v once more: v² in total.
</details>

## Question 3 (multiple choice · core)

A square loop is dropped from rest above a region of uniform horizontal field that is perpendicular to the plane of the loop. The region is taller than the loop. The loop stays vertical and falls straight down through the region. Compare its downward acceleration while it is entering the field (a_in), while it is wholly inside (a_mid) and while it is leaving (a_out).

- (A) a_in < g, a_mid = g, a_out < g
- (B) a_in < g, a_mid = g, a_out > g
- (C) a_in = a_mid = a_out = g
- (D) a_in < g, a_mid < g, a_out < g

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** While entering or leaving, the flux changes, a current flows and the magnetic force opposes the motion (upward), so the acceleration is less than g. While wholly inside, the flux is constant, no current flows and the loop falls freely with a = g.

- (B) assumes the force on leaving helps the motion. When the flux decreases the current reverses, but the force on the edge still in the field again opposes the motion.
- (C) ignores the induced current entirely.
- (D) assumes a force acts whenever the loop is in a field. With no change in flux there is no current and no force.
</details>

## Question 4 (calculation · core)

A rod 0.40 m long slides on rails joined by a 2.0 Ω resistor. A uniform field of 0.50 T is perpendicular to the plane of the rails. The rod is pulled at a constant 5.0 m/s.

(a) Find the induced emf and current. (b) Find the magnetic force on the rod. (c) Show that the power supplied by the pull equals the power dissipated. (d) The resistor is replaced by a 1.0 Ω resistor and the speed is kept at 5.0 m/s. By what factor does the required pull change?

<details>
<summary>Worked solution</summary>

1. (a) ℰ = BLv = (0.50 T)(0.40 m)(5.0 m/s) = **1.0 V**. I = ℰ/R = 1.0 V ÷ 2.0 Ω = **0.50 A**.
2. (b) F = ILB = (0.50 A)(0.40 m)(0.50 T) = **0.10 N**, opposite to the velocity.
3. (c) The pull equals 0.10 N, so P = Fv = (0.10 N)(5.0 m/s) = 0.50 W. I²R = (0.50 A)²(2.0 Ω) = 0.50 W. **They are equal.**
4. (d) F = B²L²v/R, so halving R **doubles** the force: the pull becomes 0.20 N.

Suggested mark points (4): 1 for the emf and current; 1 for the force with its direction; 1 for showing both powers equal 0.50 W; 1 for the factor of 2 with reasoning from F ∝ 1/R.

Common error: answering (d) with "halves". A smaller resistance lets **more** current flow, so the braking force is larger.
</details>

## Question 5 (calculation · core)

A square loop of side 0.10 m, mass 0.020 kg and resistance 0.050 Ω slides on a smooth horizontal table towards a region of vertical field 0.40 T. At one instant its leading edge is inside the field and its speed is 1.5 m/s.

(a) Find the induced current at that instant. (b) Find the magnitude of the loop's acceleration. (c) Using m dv = −(B²L²/R) dx, find the loop's speed once it is wholly inside the field, if it had 1.5 m/s just as its leading edge entered.

<details>
<summary>Worked solution</summary>

1. (a) ℰ = BLv = (0.40)(0.10)(1.5) = 0.060 V, so I = 0.060 ÷ 0.050 = **1.2 A**.
2. (b) F = ILB = (1.2)(0.10)(0.40) = 0.048 N. a = F/m = 0.048 ÷ 0.020 = **2.4 m/s²**, opposite to the velocity. The forces on the side edges cancel, and the trailing edge is outside the field.
3. (c) Write m dv/dt = −B²L²v/R and use v = dx/dt, so m dv = −(B²L²/R) dx. The speed therefore falls by the same amount for each metre travelled. Over the distance L = 0.10 m needed to enter: Δv = B²L³/(mR) = (0.16)(0.0010) ÷ [(0.020)(0.050)] = 0.16 m/s. Final speed = 1.5 − 0.16 = **1.34 m/s** (1.3 m/s to 2 s.f.).

Suggested mark points (4): 1 for the current; 1 for the acceleration with direction; 1 for the change of variable to dx and integrating over the length L; 1 for 1.34 m/s.

Common error: using constant-acceleration equations with a = 2.4 m/s². The deceleration falls as the loop slows, so that method is not valid. Here it happens to give 1.33 m/s, close to the right answer only because the speed changes little; for larger speed changes the error is large.
</details>

## Question 6 (constructed response · core)

A rod of mass m and length L rests on frictionless horizontal rails joined by a resistor R, in a uniform vertical field B. At t = 0 a constant horizontal force F₀ starts to pull the rod along the rails.

(a) Write Newton's second law for the rod. (b) Derive the terminal speed v_T. (c) Solve for v(t) and sketch it. (d) For F₀ = 0.30 N, m = 0.10 kg, L = 0.50 m, B = 0.60 T and R = 0.75 Ω, find v_T, the time constant and the current at terminal speed. (e) Show that at terminal speed the pulling power equals the power dissipated.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** m dv/dt = F₀ − B²L²v/R.

**(b)** At terminal speed dv/dt = 0: **v_T = F₀R/(B²L²)**.

**(c)** Separate variables: dv/(v_T − v) = dt/τ with τ = mR/(B²L²). Integrating from v = 0 at t = 0: **v(t) = v_T(1 − e^(−t/τ))**. Sketch: starts at zero with slope F₀/m, rises and levels off towards v_T; it reaches 63% of v_T at t = τ.

**(d)** B²L² = (0.36)(0.25) = 0.090 T²·m². v_T = (0.30)(0.75) ÷ 0.090 = **2.5 m/s**. τ = (0.10)(0.75) ÷ 0.090 = **0.83 s**. I = BLv_T/R = (0.60)(0.50)(2.5) ÷ 0.75 = **1.0 A**.

**(e)** Pulling power F₀v_T = (0.30)(2.5) = 0.75 W. I²R = (1.0)²(0.75) = 0.75 W. They are equal, so all the work done goes to thermal energy once the speed is steady.

| Point | What earns it |
|---|---|
| 1 | Newton's second law with the magnetic force B²L²v/R opposing the pull |
| 1 | Terminal speed from dv/dt = 0 |
| 1 | Separates variables and integrates with the correct initial condition |
| 1 | Sketch: rising curve from the origin, levelling off at v_T, labelled |
| 1 | v_T = 2.5 m/s and τ = 0.83 s |
| 1 | Current 1.0 A and the power comparison 0.75 W = 0.75 W |

Accept a correct solution of the differential equation by any valid method, such as substituting the trial solution and checking it.
</details>

## Question 7 (constructed response · stretch)

A rectangular wire loop hangs vertically. It is 0.15 m wide, has mass 0.012 kg and resistance 0.020 Ω. It falls from above a horizontal boundary; below the boundary there is a uniform horizontal field of 0.50 T perpendicular to the loop. The loop is tall enough that it reaches terminal speed while its bottom edge is in the field and its top edge is still above the boundary.

(a) Explain why the loop reaches a terminal speed. (b) Derive and calculate the terminal speed. (c) Find the current at terminal speed and check energy conservation. (d) A second loop has the same shape but is made of the same metal with twice the cross-sectional area. Predict its terminal speed. (e) What happens to the acceleration once the top edge passes the boundary?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** As the bottom edge moves down through the field, the flux increases and a current flows. The force on the bottom edge is upward and grows with speed (F = B²w²v/R). The speed rises until this force balances the weight; then the acceleration is zero.

**(b)** mg = B²w²v_T/R, so **v_T = mgR/(B²w²)** = (0.012)(9.8)(0.020) ÷ [(0.25)(0.0225)] = **0.418 m/s** (0.42 m/s).

**(c)** I = mg/(Bw) = (0.1176) ÷ (0.075) = **1.57 A**. Power from gravity: mgv_T = (0.1176)(0.4181) = 0.0492 W. I²R = (1.568)²(0.020) = 0.0492 W. Equal: the gravitational potential energy lost each second all becomes thermal energy, and the kinetic energy stays constant.

**(d)** Twice the area means twice the mass (m → 2m) and half the resistance (R → R/2). The product mR is unchanged, so **v_T is the same, 0.42 m/s**.

**(e)** With the whole loop in the field the flux is constant, so the current and the magnetic force vanish. The loop accelerates at **g** again.

| Point | What earns it |
|---|---|
| 1 | Explains that the upward force grows with speed until it balances mg |
| 1 | Sets mg = B²w²v_T/R and obtains v_T = 0.42 m/s |
| 1 | Current 1.57 A |
| 1 | Energy check: mgv_T equals I²R |
| 1 | Uses m ∝ area and R ∝ 1/area to conclude v_T is unchanged |
| 1 | Acceleration returns to g, with the reason (no change in flux) |

Accept the current found from I = Bwv_T/R. Carry forward an error in v_T into (c) once.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Direction: Lenz's law gives magnetic braking" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/).
- **Q2 or Q4 wrong:** revisit "How big is the force?" and its factor-of-change table, then Worked example 1.
- **Q5, Q6 or Q7 incomplete:** work through "Newton's second law for a moving conductor" and Worked example 2 again.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-checklist/).
