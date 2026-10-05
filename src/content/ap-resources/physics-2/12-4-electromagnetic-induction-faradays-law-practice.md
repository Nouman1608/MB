---
resourceId: "mb-ap-phys2-12.4-practice"
title: "Electromagnetic Induction and Faraday's Law: Practice Questions (Physics 2 12.4)"
description: "Seven original Marlbridge practice questions on magnetic flux, Faraday's law, Lenz's law, flux and emf graphs, and rods on rails, with full solutions."
course: "physics-2"
unit: 12
topics: ["12.4"]
resourceType: "practice-questions"
prerequisites:
  - "Using Φ = BA cos θ, ε = −ΔΦ/Δt and ε = Bℓv"
prerequisiteResources: ["mb-ap-phys2-12.4-study-guide"]
learningObjectives:
  - "Calculate flux and induced emf, including for coils"
  - "Find the direction of an induced current with Lenz's law"
  - "Sketch flux and emf graphs for a loop moving through a field"
  - "Analyse a falling rod on rails using forces and energy"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Flux in Wb (T·m²). Give answers to 2 or 3 significant figures"
related: ["mb-ap-phys2-12.4-study-guide", "mb-ap-phys2-12.4-revision-notes", "mb-ap-phys2-12.4-checklist"]
next: "mb-ap-phys2-12.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "For every direction question, write the four Lenz steps."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: g = 9.8 m/s²; fields are uniform where stated; current means conventional current; rails and connecting wires have negligible resistance and there is no friction unless stated. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A flat loop of area 0.020 m² is in a uniform 0.50 T magnetic field. The field lines make an angle of 30° with the **plane** of the loop. What is the magnetic flux through the loop?

- (A) 5.0 × 10⁻³ Wb
- (B) 8.7 × 10⁻³ Wb
- (C) 1.0 × 10⁻² Wb
- (D) 0 Wb

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The area vector is perpendicular to the plane, so the angle between B and the area vector is 90° − 30° = 60°. Φ = BA cos 60° = (0.50 T)(0.020 m²)(0.5) = 5.0 × 10⁻³ Wb.

- (B) uses cos 30°, taking the angle from the plane instead of from the area vector.
- (C) uses Φ = BA, as if the field were perpendicular to the loop.
- (D) assumes any field not perpendicular to the loop gives no flux. Only a field lying **in** the plane gives zero.
</details>

## Question 2 (multiple choice · core)

A loop of wire lies flat on a table. The north pole of a bar magnet is held above the centre of the loop, pointing down, and is then lifted straight up, away from the loop. Seen from above, what is the direction of the induced current in the loop while the magnet moves?

- (A) Clockwise
- (B) Anticlockwise
- (C) Clockwise at first, then anticlockwise
- (D) There is no current, because the magnet does not pass through the loop

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** (1) Field lines leave a north pole, so the magnet's field points **down** through the loop. (2) As the magnet moves away, the downward flux **decreases**. (3) The induced field opposes the decrease, so it also points **down** inside the loop. (4) Thumb pointing down (away from a viewer above): the fingers curl **clockwise** as seen from above.

- (B) opposes the field instead of the change. That would be right if the magnet were approaching.
- (C) invents a reversal. The flux decreases the whole time the magnet moves away, so the direction stays the same.
- (D) forgets that the flux changes when the magnet merely moves nearer or further away.
</details>

## Question 3 (multiple choice · core)

A flat square coil sits at right angles to a magnetic field that changes from B₁ to B₂ in time t, inducing an average emf ε₀. A second coil has **twice as many turns** and **sides twice as long**. Its field changes from B₁ to B₂ in time **2t**. What is the average emf in the second coil?

- (A) 4ε₀
- (B) ε₀
- (C) 2ε₀
- (D) 8ε₀

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** |ε| = NAΔB/Δt. N doubles (×2), the area of a square goes as side² (×4), and the time doubles (÷2). So the emf changes by 2 × 4 ÷ 2 = 4.

- (B) treats the area as unchanged, so the factors of N and time cancel.
- (C) doubles the area instead of multiplying it by 4.
- (D) ignores the longer time. Faraday's law depends on the **rate** of change.
</details>

## Question 4 (multiple choice · core)

The flux through a loop rises steadily from 0 to 6 mWb between t = 0 and t = 3 s, stays at 6 mWb until t = 5 s, then falls steadily to 0 at t = 6 s. Which describes the size of the induced emf?

- (A) 2 mV for 0–3 s, zero for 3–5 s, 6 mV for 5–6 s
- (B) 2 mV for 0–3 s, 6 mV for 3–5 s, 2 mV for 5–6 s
- (C) zero for 0–3 s, largest for 3–5 s, zero for 5–6 s
- (D) 2 mV for 0–6 s, because the total change in flux is the same both ways

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** |ε| = |ΔΦ|/Δt. For 0–3 s: 6 mWb ÷ 3 s = 2 mV. For 3–5 s the flux is steady: 0. For 5–6 s: 6 mWb ÷ 1 s = 6 mV, with the opposite sign to the first interval.

- (B) gives a large emf while the flux is large but steady. The emf depends on the change, not on the flux itself.
- (C) mirrors the flux graph instead of its slope.
- (D) ignores the times. The same ΔΦ in a shorter time gives a larger emf.
</details>

## Question 5 (calculation · core)

A square coil of 50 turns, side 8.0 cm, lies in the plane of the page. A uniform field into the page decreases steadily from 0.30 T to 0.050 T in 0.25 s. The coil's resistance is 2.0 Ω.

(a) Calculate the size of the average induced emf.
(b) Calculate the induced current.
(c) State the direction of the current as seen from the front of the page. Explain using Lenz's law.
(d) Calculate the charge that passes round the coil during the 0.25 s.

<details>
<summary>Worked solution</summary>

1. A = (0.080 m)² = 6.4 × 10⁻³ m². ΔB = 0.050 − 0.30 = −0.25 T, so the flux through each turn changes by ΔΦ = (−0.25 T)(6.4 × 10⁻³ m²) = −1.6 × 10⁻³ Wb.
2. (a) |ε| = N|ΔΦ|/Δt = 50 × 1.6 × 10⁻³ Wb ÷ 0.25 s = **0.32 V**.
3. (b) I = ε/R = 0.32 V ÷ 2.0 Ω = **0.16 A**.
4. (c) The external field is into the page and the flux is decreasing. The induced field opposes the decrease, so it points **into** the page inside the coil. Thumb into the page: the current is **clockwise**.
5. (d) Q = IΔt = 0.16 A × 0.25 s = **0.040 C**.

Suggested mark points (4): 1 for 0.32 V (including N); 1 for 0.16 A; 1 for clockwise with the Lenz reasoning (decreasing flux into page, so induced field into page); 1 for 0.040 C.

Common errors: leaving out N gives 6.4 × 10⁻³ V; using the final field instead of the change gives 0.064 V.
</details>

## Question 6 (constructed response · core)

A square loop of side 0.10 m moves to the right at a constant 0.050 m/s. It enters a region 0.30 m wide where there is a uniform 0.80 T field into the page; outside the region the field is zero. The plane of the loop is the plane of the page. At t = 0 the loop's leading edge reaches the region.

(a) Sketch the flux through the loop against time from t = 0 to t = 10 s. Label key values.
(b) On a second graph with the same time axis, sketch the induced emf. Label key values.
(c) Give the direction of the induced current (clockwise or anticlockwise, as seen) while the loop enters and while it leaves the region. Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**Timing.** The loop takes 0.10 m ÷ 0.050 m/s = 2.0 s to enter fully. Its leading edge reaches the far side at 0.30 ÷ 0.050 = 6.0 s, and the loop is fully out at 8.0 s.

**(a)** Φ rises in a straight line from 0 at t = 0 to BA = (0.80)(0.10)² = **8.0 × 10⁻³ Wb** at t = 2 s, stays flat until t = 6 s, falls in a straight line to 0 at t = 8 s, then stays at 0.

**(b)** |ε| = Bℓv = (0.80)(0.10)(0.050) = **4.0 × 10⁻³ V** for 0–2 s (check: 8.0 × 10⁻³ Wb ÷ 2.0 s). Zero for 2–6 s. 4.0 × 10⁻³ V of the **opposite sign** for 6–8 s. Zero after 8 s.

**(c)** Entering: flux into the page increases, so the induced field points out of the page: **anticlockwise**. Leaving: flux into the page decreases, so the induced field points into the page: **clockwise**.

| Point | What earns it |
|---|---|
| 1 | Flux graph: linear rise 0–2 s, flat 2–6 s, linear fall 6–8 s |
| 1 | Peak flux 8.0 × 10⁻³ Wb labelled |
| 1 | emf graph: constant non-zero values only during 0–2 s and 6–8 s, zero elsewhere |
| 1 | Opposite signs for entering and leaving, equal size 4.0 × 10⁻³ V |
| 1 | Anticlockwise while entering, with reasoning from increasing flux |
| 1 | Clockwise while leaving, with reasoning from decreasing flux |

Do not award the emf-graph point for an emf while the loop is fully inside the field: the flux is large there but not changing.
</details>

## Question 7 (constructed response · stretch)

Two vertical conducting rails, 0.25 m apart, are joined at the top by a 0.50 Ω resistor. A uniform horizontal 0.40 T field is perpendicular to the plane of the rails. A horizontal metal rod of mass 0.020 kg is released from rest, touching both rails, and slides down without friction, staying horizontal.

(a) Explain why the rod eventually falls at a constant speed.
(b) Derive an expression for this terminal speed v_t in terms of m, g, R, B and ℓ, and calculate it.
(c) Show that, at terminal speed, the rate at which gravitational potential energy is lost equals the power in the resistor.
(d) Predict the terminal speed if the resistor were replaced by a 1.0 Ω resistor. Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** As the rod falls, the area of the circuit (and the flux) changes, so an emf ε = Bℓv and a current I = Bℓv/R are induced. The field exerts a force IℓB on this current that opposes the motion (Lenz's law), so it acts upward. This force grows with v. When it equals the weight, the net force is zero and the speed stops changing.

**(b)** At terminal speed: IℓB = mg, with I = Bℓv_t/R. So B²ℓ²v_t/R = mg and

**v_t = mgR / (B²ℓ²)** = (0.020)(9.8)(0.50) ÷ [(0.40)²(0.25)²] = 0.098 ÷ 0.010 = **9.8 m/s**.

**(c)** Rate of loss of gravitational potential energy: mgv_t = (0.196 N)(9.8 m/s) = 1.92 W. Current: I = mg/(Bℓ) = 0.196 ÷ (0.40 × 0.25) = 1.96 A. Power in the resistor: I²R = (1.96)²(0.50) = 1.92 W. They are equal: at constant speed the kinetic energy does not change, so all the lost gravitational energy becomes thermal energy in the resistor.

**(d)** v_t ∝ R, so doubling R doubles the terminal speed to **19.6 m/s** (about 20 m/s). With more resistance, a larger speed is needed to make enough current for the upward force to balance the weight.

| Point | What earns it |
|---|---|
| 1 | (a) Induced current gives an upward (opposing) magnetic force |
| 1 | (a) That force increases with speed until it balances the weight |
| 1 | (b) Correct derivation of v_t = mgR/(B²ℓ²) from IℓB = mg and I = Bℓv/R |
| 1 | (b) v_t = 9.8 m/s |
| 1 | (c) Both powers calculated (1.9 W), with the energy-transfer explanation |
| 1 | (d) 19.6 m/s with reasoning from v_t ∝ R |

Accept (c) done symbolically: I²R = (mg/(Bℓ))² R = mg × mgR/(B²ℓ²) = mgv_t.
</details>

## How did you do?

- **Q1 wrong:** re-read "Magnetic flux" and the table of angles in the [study guide](/advanced-course-resources/physics-2/12-4-electromagnetic-induction-faradays-law-study-guide/).
- **Q2 or Q5c wrong:** practise the four Lenz steps in "Lenz's law: which way does the current go?".
- **Q3 or Q5 wrong:** go back to "Faraday's law" and Worked example 1.
- **Q4 or Q6 wrong:** redo "Sketching emf from a flux graph" with Figure 3.
- **Q7 incomplete:** work through Worked example 2 again, then redo the falling rod.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/12-4-electromagnetic-induction-faradays-law-checklist/).
