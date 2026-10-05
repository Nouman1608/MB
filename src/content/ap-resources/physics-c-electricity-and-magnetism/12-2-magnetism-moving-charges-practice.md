---
resourceId: "mb-ap-physcem-12.2-practice"
title: "Magnetism and Moving Charges: Practice Questions (Physics C: E&M 12.2)"
description: "Seven original Marlbridge practice questions on moving charges and magnetism: fields of moving charges, F = q(v × B), helices, crossed fields and a Hall-effect experiment."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.2"]
resourceType: "practice-questions"
prerequisites:
  - "Cross products in unit-vector form and the right-hand rule"
prerequisiteResources: ["mb-ap-physcem-12.2-study-guide"]
learningObjectives:
  - "Find the magnetic field of a moving charge as a vector"
  - "Use F = q(v × B) for positive and negative charges and analyse circular and helical paths"
  - "Derive expressions for charges in combined electric and magnetic fields"
  - "Plan a Hall-effect experiment, graph its data and find the carrier density"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀/4π = 1 × 10⁻⁷ T·m/A, e = 1.60 × 10⁻¹⁹ C, mₚ = 1.67 × 10⁻²⁷ kg. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-12.2-study-guide", "mb-ap-physcem-12.2-revision-notes", "mb-ap-physcem-12.2-checklist"]
next: "mb-ap-physcem-12.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 4 needs a full 3D cross product; Question 7 asks you to plan an experiment and analyse a graph."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data: μ₀/4π = 1 × 10⁻⁷ T·m/A, e = 1.60 × 10⁻¹⁹ C, mₚ = 1.67 × 10⁻²⁷ kg. Use right-handed axes (î × ĵ = k̂). Ignore gravity. Speeds are much less than the speed of light. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

An electron moves in the +x direction through a uniform magnetic field that points in the +y direction. In which direction is the magnetic force on the electron?

- (A) −z
- (B) +z
- (C) +y
- (D) −x

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v × B is along î × ĵ = +k̂. The electron's charge is negative, so F = q(v × B) points along **−z**.

- (B) is the direction for a **positive** charge. It forgets to reverse for the electron.
- (C) puts the force along B, as for an electric force along E. The magnetic force is perpendicular to B.
- (D) treats the force as a drag opposing motion. The magnetic force is perpendicular to v and does no work.
</details>

## Question 2 (multiple choice · core)

A charged particle moves in a straight line. At one instant, point 1 is a distance r from the particle, in a direction perpendicular to its velocity. Point 2 is a distance 2r from the particle, along a line at 30° to its velocity. What is B₂/B₁, the ratio of the magnetic field sizes the particle produces at the two points at that instant?

- (A) 1/2
- (B) 1/4
- (C) 1/8
- (D) √3/8

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** B ∝ sin θ/r². Point 1: sin 90°/r² = 1/r². Point 2: sin 30°/(2r)² = (1/2)/(4r²) = 1/(8r²). Ratio = **1/8**.

- (A) uses B ∝ 1/r and ignores the angle. The field of a point charge falls as 1/r².
- (B) uses the 1/r² factor but forgets sin θ, as if B did not depend on direction.
- (D) uses cos 30° instead of sin 30°. B depends on the sine of the angle between v and r, and is zero along the line of motion.
</details>

## Question 3 (multiple choice · core)

Ions start from rest, are accelerated through a potential difference ΔV, and then move in a circle at right angles to a uniform magnetic field. If ΔV is made four times as large, what happens to the radius of the circle?

- (A) It stays the same.
- (B) It doubles.
- (C) It becomes four times as large.
- (D) It becomes sixteen times as large.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** qΔV = ½mv² gives v ∝ √ΔV, so v doubles. With r = mv/(qB), r ∝ v, so r **doubles**.

- (A) confuses the radius with the period, which does not depend on speed. Or it wrongly uses "the magnetic force does no work" to say nothing changes.
- (C) assumes r ∝ ΔV, skipping the square root from the kinetic energy.
- (D) assumes r ∝ v² and v ∝ ΔV, two errors in a row.
</details>

## Question 4 (calculation · core)

An electron passes through the origin moving at 3.0 × 10⁶ m/s in the +y direction. At that instant:

(a) find the magnetic field vector it produces at P (40 nm, 0, 30 nm);
(b) find the magnetic field it produces at (0, 50 nm, 0).

<details>
<summary>Worked solution</summary>

1. (a) r = (40 nm, 0, 30 nm), so r = 50 nm = 5.0 × 10⁻⁸ m and r̂ = (0.8, 0, 0.6).
2. v̂ × r̂ = ĵ × (0.8î + 0.6k̂) = 0.8(ĵ × î) + 0.6(ĵ × k̂) = −0.8k̂ + 0.6î, i.e. (0.6, 0, −0.8). This is a unit vector, so sin θ = 1 (r ⊥ v).
3. Size: B = (1 × 10⁻⁷)(1.60 × 10⁻¹⁹)(3.0 × 10⁶) ÷ (5.0 × 10⁻⁸)² = **1.92 × 10⁻⁵ T**.
4. q is negative, so reverse the direction: B = 1.92 × 10⁻⁵ T × (−0.6, 0, +0.8) = **(−1.15 × 10⁻⁵ î + 1.54 × 10⁻⁵ k̂) T**.
5. (b) This point is on the line of motion (ahead of the electron), so v × r̂ = 0 and **B = 0**.

Suggested mark points (4): 1 for r and r̂; 1 for a correct cross product; 1 for the size 1.92 × 10⁻⁵ T; 1 for reversing for the negative charge and for B = 0 in (b).

Common error: forgetting the sign of q, which gives (+1.15 × 10⁻⁵, 0, −1.54 × 10⁻⁵) T.
</details>

## Question 5 (calculation · core)

A proton enters a uniform field B = 0.50 T î with velocity v = (3.0 × 10⁵ î + 4.0 × 10⁵ ĵ) m/s.

(a) Find the magnetic force vector on the proton as it enters.
(b) Describe its path and find the radius, the period and the pitch.
(c) What is its speed after 10 turns?

<details>
<summary>Worked solution</summary>

1. (a) v × B = (3.0 × 10⁵ î + 4.0 × 10⁵ ĵ) × 0.50 î. The î × î part is zero. 4.0 × 10⁵ × 0.50 (ĵ × î) = −2.0 × 10⁵ k̂. So F = e(v × B) = **−3.2 × 10⁻¹⁴ k̂ N**.
2. (b) The component along B (3.0 × 10⁵ m/s along x) feels no force and stays constant. The perpendicular component (4.0 × 10⁵ m/s) makes a circle. The path is a **helix** with axis along x.
3. r = mₚv⊥/(eB) = (1.67 × 10⁻²⁷ × 4.0 × 10⁵) ÷ (1.60 × 10⁻¹⁹ × 0.50) = **8.4 × 10⁻³ m**.
4. T = 2πmₚ/(eB) = **1.31 × 10⁻⁷ s**. Pitch = v∥T = 3.0 × 10⁵ × 1.31 × 10⁻⁷ = **3.9 × 10⁻² m**.
5. (c) The magnetic force does no work, so the speed is still √(3.0² + 4.0²) × 10⁵ = **5.0 × 10⁵ m/s**.

Suggested mark points (5): 1 for the force vector; 1 for identifying a helix with a reason; 1 for r using v⊥ only; 1 for T and the pitch; 1 for constant speed with the no-work reason.

Common error: using the full speed 5.0 × 10⁵ m/s for r, giving 1.04 × 10⁻² m.
</details>

## Question 6 (constructed response · core)

Positive ions of charge q are accelerated from rest through a potential difference ΔV. They then enter a region where a uniform electric field E points in the +y direction and a uniform magnetic field B points in the +z direction. The ions move in the +x direction when they enter.

(a) Derive an expression for the speed v₀ of an ion of mass m.
(b) Show that the electric and magnetic forces on these ions point in opposite directions, and derive the value of E (in terms of q, m, ΔV and B) for which ions of mass m pass straight through.
(c) With E set to that value, ions of mass 2m, with the same charge, enter after the same acceleration. Which way are they deflected? Justify your answer.
(d) The electric field is switched off. Find the ratio of the radii of the circles of the 2m ions and the m ions.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** qΔV = ½mv₀², so **v₀ = √(2qΔV/m)**.

**(b)** Electric force: qE, along +y. Magnetic force: q(v₀î × Bk̂) = qv₀B(î × k̂) = −qv₀B ĵ, along −y. They are opposite. Straight through when qE = qv₀B, so **E = v₀B = B√(2qΔV/m)**.

**(c)** The 2m ions move more slowly: v = √(2qΔV/(2m)) = v₀/√2. The electric force qE is the same for them (it does not depend on speed), but the magnetic force qvB is smaller. The net force points along **+y**, the direction of the electric force, so they are deflected that way.

**(d)** r = mv/(qB) = (1/B)√(2mΔV/q), so r ∝ √m. The ratio is **√2 ≈ 1.41**.

| Point | What earns it |
|---|---|
| 1 | v₀ = √(2qΔV/m) from energy conservation |
| 1 | Cross product shown, magnetic force along −y, opposite to qE |
| 1 | E = v₀B = B√(2qΔV/m) |
| 1 | Heavier ions are slower: v₀/√2 |
| 1 | Electric force unchanged, magnetic force smaller, so deflection along +y |
| 1 | r ∝ √m, ratio √2 |

Accept (c) argued from the condition v = E/B: slower ions have v below E/B, so the electric force wins.
</details>

## Question 7 (constructed response · stretch)

A student wants to find the number density n of charge carriers in a thin semiconductor strip, 0.20 mm thick. She can use a power supply that keeps the current at 20 mA, an electromagnet whose field can be set and measured, and a voltmeter.

(a) Describe a procedure. Say what she should vary, what she should keep constant, what she should measure and how she should place the voltmeter leads.
(b) Her invented results are below. Plot ΔV_H against B and find the gradient of the best-fit line.

| B (T) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| ΔV_H (mV) | 12.4 | 25.3 | 37.2 | 50.4 | 62.3 |

(c) Derive ΔV_H = IB/(nqt) and use your gradient to find n.
(d) The strip lies in the plane of the page. With the current to the right and B into the page, the top edge is at the higher potential. What is the sign of the carriers? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Clamp the strip in the gap of the electromagnet with its flat face perpendicular to B. Keep the current at 20 mA throughout. Connect the voltmeter across the **width**, at points exactly opposite each other, so it reads no potential difference with B = 0 (check this first and note any offset). Set B to several values, for example 0.10 T to 0.50 T, measuring B each time, and record ΔV_H. Repeat each reading, and reverse B to check that ΔV_H reverses.

**(b)** Plot B (T) on the horizontal axis from 0 to 0.50 and ΔV_H (mV) on the vertical axis from 0 to 70. The points lie close to a straight line through the origin. Draw the best-fit line and read its gradient from two well-separated points on the line (least squares gives the same): **0.125 V/T** (125 mV/T).

**(c)** Balance: qE_H = qv_dB, so ΔV_H = v_dBw. Current: I = nqv_d(wt), so v_d = I/(nqwt). Substituting, ΔV_H = IB/(nqt). The gradient is I/(nqt), so n = I/(qt × gradient) = 0.020 ÷ (1.60 × 10⁻¹⁹ × 2.0 × 10⁻⁴ × 0.125) = **5.0 × 10²¹ m⁻³**.

**(d)** Take the current to the right (+x) and B into the page (−z). A positive carrier moves right: v × B = î × (−k̂) = +ĵ, so positive carriers are pushed to the top. A negative carrier moves left: (−î) × (−k̂) = −ĵ, times a negative charge gives +ĵ, so negative carriers are **also** pushed to the top. The top is higher only if the charge collecting there is positive, so the carriers are **positive**.

| Point | What earns it |
|---|---|
| 1 | Controls current; varies and measures B; strip face perpendicular to B |
| 1 | Voltmeter across the width at opposite points, with a zero check or field reversal |
| 1 | Axes labelled with units and sensible scales; straight line through the origin |
| 1 | Gradient 0.125 V/T (accept 0.122 to 0.128 V/T) |
| 1 | Derivation of ΔV_H = IB/(nqt) from the force balance and I = nqv_dwt |
| 1 | n ≈ 5.0 × 10²¹ m⁻³ |
| 1 | Both carrier signs pushed to the top; top higher means positive carriers |

Accept a gradient read from two well-separated points on the best-fit line, not from two data points that are off the line.
</details>

## How did you do?

- **Q1 or Q5 wrong:** re-read "The force on a moving charge" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/) and Worked example 2.
- **Q2 or Q4 wrong:** revisit "A moving charge makes a magnetic field", Figure 1 and Worked example 1.
- **Q3 or Q6 wrong:** revisit "Circular and helical motion" and "Electric and magnetic fields together".
- **Q7 incomplete:** work through "The Hall effect" and Worked example 3 again.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-checklist/).
