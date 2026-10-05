---
resourceId: "mb-ap-physcm-5.5-practice"
title: "Rotational Equilibrium and Newton’s First Law in Rotational Form: Practice (Physics C: Mechanics 5.5)"
description: "Seven original Marlbridge calculus-based practice questions on rotational equilibrium: constant angular velocity, couples, non-uniform rods, hinge and cable forces, and a support-force experiment."
course: "physics-c-mechanics"
unit: 5
topics: ["5.5"]
resourceType: "practice-questions"
prerequisites:
  - "Torque as r⊥F (Topic 5.3) and center of mass by integration (Topic 2.1)"
prerequisiteResources: ["mb-ap-physcm-5.5-study-guide"]
learningObjectives:
  - "Use Στ = 0 to find an unknown torque for a system turning at constant angular velocity"
  - "Explain why the net torque is the same about every point when the net force is zero"
  - "Find the balance point and support forces of a non-uniform rod by integration"
  - "Apply ΣF = 0 and Στ = 0 together to a hinged object held by a cable"
  - "Linearise support-force data and extract a mass from the slope"
  - "Explain why rotational and translational equilibrium are independent"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic. g = 9.8 m/s². Counterclockwise torques positive. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-5.5-study-guide", "mb-ap-physcm-5.5-revision-notes", "mb-ap-physcm-5.5-checklist"]
next: "mb-ap-physcm-5.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes and sign convention."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use g = 9.8 m/s². Take **counterclockwise torques as positive** unless a question says otherwise. All rotation is in one plane. Round final answers to 2 significant figures unless told otherwise. All data are invented for practice.

## Question 1 (multiple choice · foundation)

A record-player turntable rotates at a constant 3.5 rad/s counterclockwise. Its motor exerts a torque of 0.42 N·m counterclockwise. Friction in the bearing is the only other torque. What is the friction torque?

- (A) Zero
- (B) 0.42 N·m clockwise
- (C) 1.47 N·m clockwise
- (D) It cannot be found without the rotational inertia of the turntable.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The angular velocity is constant, so the turntable is in rotational equilibrium: Στ = 0.42 + τ_f = 0, giving τ_f = −0.42 N·m, that is 0.42 N·m clockwise.

- (A) assumes nothing opposes a rotation that is already happening. If friction were zero, the motor’s torque would be unbalanced and ω would increase.
- (C) multiplies the torque by ω (0.42 × 3.5). Angular velocity does not enter the equilibrium condition.
- (D) The rotational inertia matters only when ω changes (Topic 5.6). With α = 0, Iα = 0 for any I.
</details>

## Question 2 (multiple choice · core)

Several forces act on a flat rigid plate. Their vector sum is zero. The net torque about point P is 4.0 N·m counterclockwise. Point Q is 0.50 m from P. What is the net torque about Q?

- (A) Zero
- (B) 2.0 N·m counterclockwise
- (C) 4.0 N·m counterclockwise
- (D) 8.0 N·m counterclockwise

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Moving the torque point by d changes the net torque by −d × ΣF: τ_Q = τ_P − d × ΣF. Here ΣF = 0, so τ_Q = τ_P = 4.0 N·m counterclockwise. The forces form a couple, whose torque is the same about every point.

- (A) assumes ΣF = 0 forces Στ = 0. A couple is the counter-example; the two conditions are independent.
- (B) multiplies the torque by the distance PQ (4.0 × 0.50). The distance only matters through d × ΣF, which is zero.
- (D) divides by the distance (4.0 ÷ 0.50). There is no reason for the torque to grow as Q moves away.
</details>

## Question 3 (multiple choice · core)

A thin rod of length L lies along the x-axis from x = 0 to x = L. Its linear mass density is λ(x) = bx, where b is a positive constant. At what x must a single support be placed for the rod to balance horizontally?

- (A) L/2
- (B) 2L/3
- (C) L/3
- (D) 3L/4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The rod balances on a support under its center of mass, where the weight’s torque about the support is zero. M = ∫₀ᴸ bx dx = bL²/2 and ∫₀ᴸ x(bx) dx = bL³/3, so x_cm = (bL³/3) ÷ (bL²/2) = 2L/3.

- (A) treats the rod as uniform. More mass sits near x = L, so the balance point moves to the right.
- (C) is the right distance measured from the wrong end (L − 2L/3).
- (D) is the result for λ ∝ x², which concentrates even more mass near x = L.
</details>

## Question 4 (calculation · core)

Take **+x to the right and +y upward**, origin at the hinge. A uniform drawbridge of mass 900 kg and length 8.0 m is hinged at its lower end. It is held at rest at 30° above the horizontal, rising to the right, by a **horizontal** cable attached to its upper end and running left to a tower. Find (a) the tension in the cable and (b) the size and direction of the force from the hinge.

<details>
<summary>Worked solution</summary>

1. **Extended force diagram:** weight Mg = 8820 N acting at the midpoint; tension T to the left at the upper end; hinge force (H, V) at the origin.
2. **Torques about the hinge** (the hinge force drops out). The weight’s lever arm is the horizontal distance to the midpoint: (L/2) cos 30° = 4.0 × 0.866 = 3.46 m, clockwise: −8820 × 3.46 = −3.06 × 10⁴ N·m. The horizontal cable’s lever arm is the height of the upper end: L sin 30° = 4.0 m; pulling left above the hinge, it gives +4.0T.
3. **(a)** 4.0T − 3.06 × 10⁴ = 0, so T = **7.6 × 10³ N** (7640 N). In symbols, T = Mg/(2 tan 30°).
4. **(b)** ΣF_x = 0: H − T = 0, so H = 7640 N to the right. ΣF_y = 0: V − 8820 = 0, so V = 8820 N upward.
5. Size: √(7640² + 8820²) = **1.2 × 10⁴ N**, at tan⁻¹(8820/7640) = **49° above the horizontal**, pointing up and to the right. Note that this is steeper than the bridge itself (30°): the hinge force does not act along the bridge.

Suggested mark points (4): 1 for both lever arms; 1 for the torque equation and T; 1 for the two force components from ΣF = 0; 1 for the size and direction of the hinge force.

Common error: using the full length 8.0 m as the cable’s lever arm gives T = 3.8 × 10³ N. The cable is horizontal, so its lever arm is the vertical height of its attachment point.
</details>

## Question 5 (constructed response · core)

Take **+x to the right**, origin at the left end, **counterclockwise positive**. A rod of length L hangs horizontally from two vertical strings, A at x = 0 and B at x = L. Its linear mass density is λ(x) = λ₀(1 + x/L).

(a) Derive the mass M and the position of the center of mass in terms of λ₀ and L.
(b) Derive the tensions T_A and T_B in terms of M and g.
(c) Evaluate M, T_A and T_B for λ₀ = 2.0 kg/m and L = 1.5 m.
(d) A small block of mass equal to M is hung from the rod so that the two tensions become equal. Find where it must hang.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** M = ∫₀ᴸ λ₀(1 + x/L) dx = λ₀(L + L/2) = **3λ₀L/2**. ∫₀ᴸ xλ₀(1 + x/L) dx = λ₀(L²/2 + L²/3) = 5λ₀L²/6. So x_cm = (5λ₀L²/6) ÷ (3λ₀L/2) = **5L/9**.

**(b)** Torques about A: T_B L − Mg(5L/9) = 0, so **T_B = 5Mg/9**. Forces: T_A + T_B = Mg, so **T_A = 4Mg/9**.

**(c)** M = 1.5 × 2.0 × 1.5 = **4.5 kg**; Mg = 44.1 N. T_B = **25 N** (24.5 N); T_A = **20 N** (19.6 N). The denser end hangs on B, and B carries more, as expected.

**(d)** The tensions are equal when the combined center of mass is at L/2 (then torques about the midpoint balance). M(5L/9) + Md = 2M(L/2), so d = L − 5L/9 = **4L/9** = 0.67 m from A. Each string then carries (2M)g/2 = 44 N.

| Point | What earns it |
|---|---|
| 1 | (a) Integrates λ for M and xλ for the first moment |
| 1 | (a) x_cm = 5L/9 |
| 1 | (b) Torque equation about a string end with the weight at x_cm, giving T_B = 5Mg/9 |
| 1 | (b)–(c) T_A from ΣF = 0, and correct numbers with units |
| 1 | (d) Uses "equal tensions ⇔ combined center of mass at the midpoint" (or an equivalent torque equation) to get 4L/9 |

**Alternative method.** In (b), taking torques about B first gives T_A = Mg(L − 5L/9)/L = 4Mg/9 directly; either order earns the points.
</details>

## Question 6 (experimental design · stretch)

Take **+x to the right**, origin at the hinge, **counterclockwise positive**. A uniform board of length 1.20 m is hinged at its left end. A student holds it horizontal with a vertical force sensor placed a distance x from the hinge and records the sensor force F. The fictional data are:

| x (m) | 0.40 | 0.60 | 0.80 | 1.00 | 1.20 |
|---|---|---|---|---|---|
| F (N) | 36.9 | 24.3 | 18.5 | 14.6 | 12.3 |

(a) Derive an expression for F in terms of the board’s mass M, g, its length L and x.
(b) State what to plot to get a straight line through the origin.
(c) Use the data to find M.
(d) For x = 0.40 m and x = 1.20 m, find the force from the hinge, with direction. Use your model, not the data.
(e) At what x does the hinge exert no force? Explain why.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Torques about the hinge: Fx − Mg(L/2) = 0, so **F = MgL/(2x)**.

**(b)** Plot **F (N) on the vertical axis against 1/x (m⁻¹) on the horizontal axis**. The slope is MgL/2.

**(c)** Values of 1/x: 2.50, 1.67, 1.25, 1.00, 0.833 m⁻¹. The best-fit line through the origin has slope ≈ 14.7 N·m. So M = 2 × 14.7 ÷ (9.8 × 1.20) = **2.5 kg**.

**(d)** With M = 2.5 kg, Mg = 24.5 N and MgL/2 = 14.7 N·m. Let the hinge force be V (positive upward); ΣF_y = 0 gives V = Mg − F.
- x = 0.40 m: F = 36.75 N, so V = −12 N: **12 N downward**. The sensor is close to the hinge and pushes up more than the weight, so the hinge must hold the board down.
- x = 1.20 m: F = 12.25 N, so V = **12 N upward**.

**(e)** V = 0 when F = Mg, which gives x = L/2 = **0.60 m**. The sensor is then directly under the center of mass, so it balances both the force and the torque of the weight on its own. (The data agree: 24.3 N ≈ 24.5 N.)

| Point | What earns it |
|---|---|
| 1 | (a) Torques about the hinge with the weight at L/2 |
| 1 | (b) F against 1/x, slope identified as MgL/2 |
| 1 | (c) M = 2.5 kg from the slope (2.4–2.6 kg accepted) |
| 1 | (d) Both hinge forces, with correct directions from ΣF_y = 0 |
| 1 | (e) x = L/2 with the reason that the support is under the center of mass |

**Alternative method for (c).** Plotting Fx against x should give a horizontal line at MgL/2; its mean value (≈ 14.7 N·m) gives the same M. Using a single data point earns the mark only if the result is within range and the student notes a graph is more reliable.
</details>

## Question 7 (explanation · stretch)

A rigid spanner is tossed across a workshop. It tumbles end over end in a vertical plane, spinning at 12 rad/s about its center of mass. Ignore air resistance. A student says:

"The spanner’s center of mass is accelerating downward, so it is not in equilibrium. So its angular velocity must be changing as well."

Evaluate the claim. Then describe a different situation in which the reverse is true: translational equilibrium without rotational equilibrium.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Model answer.** The first sentence is half right: the only force is gravity, so ΣF = Mg ≠ 0 and the center of mass accelerates downward at g. The spanner is **not in translational equilibrium**.

The second sentence does not follow. Rotation about the center of mass depends on the **net torque about the center of mass**, not on the net force. Gravity acts on every piece of the spanner, and its total torque about the center of mass is −Mg × (horizontal distance from the center of mass to itself) = 0. So Στ = 0, and by Newton’s first law in rotational form the spanner keeps turning at **12 rad/s**. After 0.50 s its vertical velocity has changed by 4.9 m/s, but its spin has not changed.

The two equilibrium conditions are **independent**: one can hold while the other fails.

**Reverse case.** A couple: for example, two people push a board lying on ice with equal and opposite forces along parallel lines that do not coincide. ΣF = 0, so the center of mass stays at rest, but Στ ≠ 0, so the board starts to rotate.

| Point | What earns it |
|---|---|
| 1 | Agrees ΣF ≠ 0, so no translational equilibrium |
| 1 | Gravity acts at the center of mass, so its torque about the center of mass is zero |
| 1 | Concludes ω stays constant (Newton’s first law in rotational form) and the claim is false |
| 1 | Gives a valid example of ΣF = 0 with Στ ≠ 0 (a couple), with a reason |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Newton’s first law in rotational form" and "Equilibrium of one kind only" in the [study guide](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-study-guide/).
- **Q2 wrong:** go through the derivation in "Choosing the point for torques".
- **Q3 or Q5 wrong:** revisit "Extended force diagrams" and Worked example 1. Find x_cm by integration before taking torques.
- **Q4 or Q6 incomplete:** compare with Worked example 2. Use lever arms, then ΣF = 0 for the pivot force.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-checklist/).
