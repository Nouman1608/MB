---
resourceId: "mb-ap-physcem-u13-diagnostic"
title: "Electromagnetic Induction: Unit Diagnostic (Physics C: E&M Unit 13)"
description: "A 30-minute check of Unit 13: ten original Marlbridge questions on flux, Faraday's and Lenz's laws, magnetic braking, inductance, LR and LC circuits, each linked to the guide to revisit."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied, or at least started, Topics 13.1 to 13.6"
learningObjectives:
  - "Find out which Unit 13 topics you can already use with confidence"
  - "Spot the specific mistakes behind any wrong answers"
  - "Choose the study guide to revisit for each topic you missed"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Work in radians for oscillations; e⁻¹ ≈ 0.368. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u13-review", "mb-ap-physcem-13.2-study-guide", "mb-ap-physcem-13.3-study-guide", "mb-ap-physcem-13.5-study-guide", "mb-ap-physcem-13.6-study-guide"]
next: "mb-ap-physcem-u13-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Ten short questions cover all six Unit 13 topics; allow about 30 minutes."
  - "Questions 4, 8 and 10 need short written working; the rest are multiple choice."
  - "Every answer says why each wrong option is tempting and which guide to read if you missed it."
  - "This is a check of what to revisit, not a score prediction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic shows which Unit 13 topics to revisit, with at least one short question per topic. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated against real exam results, and your result is **not** a predicted score.

**How to take it.** Work without notes for about 30 minutes, answering before opening each explanation. A scientific calculator is assumed. Data: μ₀ = 4π × 10⁻⁷ T·m/A. Inductors and wires have no resistance unless stated, and all data are invented.

## Question 1 (multiple choice · 13.1)

A hemispherical plastic bowl of radius 0.12 m sits with its rim horizontal in a uniform vertical field of 0.50 T. What is the size of the flux through the bowl's curved surface?

- (A) 4.5 × 10⁻² Wb
- (B) 0
- (C) 2.3 × 10⁻² Wb
- (D) 1.1 × 10⁻² Wb

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The bowl and the flat disc across its rim form a closed surface (zero net flux), so the bowl carries the disc's flux: BπR² = (0.50)π(0.12)² = **2.3 × 10⁻² Wb**.

- (A) multiplies B by the curved area, 2πR², ignoring the tilt.
- (B) applies ∮B·dA = 0 to the bowl, an open surface.
- (D) halves the answer, as if the bowl's tilt cost half the flux.

**If you missed this:** read "Closed surfaces: zero net magnetic flux" in the [13.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/).
</details>

## Question 2 (multiple choice · 13.2)

A long straight wire on the page carries a steady current up the page. A square conducting loop lies on the page to the right of the wire. The loop moves steadily to the right, away from the wire. As seen on the page, what is the induced current?

- (A) Clockwise
- (B) Anticlockwise
- (C) Zero, because the current in the wire is steady
- (D) Zero, because the loop moves in its own plane

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** To the right of an upward current, the field points into the page. Moving away, the loop's flux into the page **decreases**, so the induced field inside points into the page: a clockwise current.

- (B) makes the induced field oppose the external field. Lenz's law opposes the **change**, and here the flux is falling.
- (C) The loop moves into weaker field, so its flux still changes.
- (D) Moving in its own plane keeps the flux fixed only in a uniform field.

**If you missed this:** read "Lenz's law: the direction" in the [13.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/).
</details>

## Question 3 (multiple choice · 13.2)

The uniform axial field inside a long solenoid of radius 0.040 m is increasing steadily. At 0.020 m from the axis, the induced electric field has size E₁. At what distance from the axis, outside the solenoid, is the induced field also E₁?

- (A) 0.060 m
- (B) 0.080 m
- (C) Nowhere, because there is no induced field outside
- (D) 0.057 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Apply ∮E·dl = −dΦ_B/dt to a circle of radius r. Inside, E = (r/2) dB/dt, growing with r. Outside, only the solenoid's cross-section has flux, so E = (R²/2r) dB/dt, falling as 1/r. Setting R²/(2r) = (0.020 m)/2 gives r = 0.0016 ÷ 0.020 = **0.080 m**.

- (A) assumes E falls outside as fast as it rose inside.
- (C) There is an induced E outside, although B is nearly zero there: the circle still encloses changing flux.
- (D) makes E fall as 1/r² outside, like the field of a point charge.

**If you missed this:** read "Induced electric fields" and Worked example 3 in the [13.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/).
</details>

## Question 4 (short answer · 13.1, 13.2 and 13.3)

In a region of the page, the magnetic field points out of the page with size B = γxt, where γ = 3.0 T/(m·s), x is the distance from a fixed line on the page, and t is time. A flat square coil of 25 turns, side 0.20 m and total resistance 1.5 Ω lies on the page with two sides parallel to that line, at x = 0.10 m and x = 0.30 m.

(a) Use an integral to find the flux through one turn as a function of t. Evaluate it at t = 2.0 s.
(b) Find the induced emf and current at t = 2.0 s.
(c) State the direction of the current as seen on the page.
(d) Find the net magnetic force on the coil at t = 2.0 s and explain its direction.

<details>
<summary>Answer and explanation</summary>

**(a)** Use strips of width dx and area (0.20 m) dx. Φ_B = ∫ from 0.10 to 0.30 of γxt(0.20) dx = γt(0.20)(0.30² − 0.10²)/2 = **(0.024 Wb/s)t**. At t = 2.0 s, Φ_B = **4.8 × 10⁻² Wb**.

**(b)** |ℰ| = N dΦ_B/dt = 25 × 0.024 = **0.60 V**. I = 0.60 ÷ 1.5 = **0.40 A**.

**(c)** Outward flux is increasing, so the induced field points into the page: **clockwise**.

**(d)** The forces on the top and bottom sides cancel. At x = 0.30 m, B = 1.8 T and F = NIaB = 25(0.40)(0.20)(1.8) = 3.6 N towards smaller x. At x = 0.10 m, B = 0.60 T and F = 1.2 N the other way. Net force: **2.4 N towards smaller x**, into weaker field, which would reduce the growing flux (Lenz's law).

Check yourself: 1 mark each for the integral with Φ_B(t), the emf and current, the direction, and the net force with its direction (4 in total).

**If you missed this:** see the [13.1](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/) (a), [13.2](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/) (b)–(c) and [13.3](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/) (d) study guides.
</details>

## Question 5 (multiple choice · 13.3)

A metal rod on frictionless horizontal rails, joined by a resistor, is given a speed v₀ in a uniform vertical field and then left to coast. It travels a total distance D. The field is doubled and the rod replaced by one of the same length and twice the mass, again given speed v₀. What total distance does it now travel?

- (A) D
- (B) D/4
- (C) 2D
- (D) D/2

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** v = v₀e^(−t/τ) with τ = mR/(B²L²), so the distance is v₀τ. Doubling m doubles τ; doubling B quarters it.

- (A) assumes the two changes cancel. The braking force grows with B², not B.
- (B) forgets the extra mass.
- (C) ignores the stronger braking.

**If you missed this:** read "Newton's second law for a moving conductor" and Worked example 2 in the [13.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/).
</details>

## Question 6 (multiple choice · 13.4)

An air-cored solenoid stores energy U when its current is I. A core of permeability 4μ₀ is slid in to fill it, and the current is adjusted until the stored energy is again U. What is the new current?

- (A) I/4
- (B) I/2
- (C) I
- (D) 2I

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The core multiplies L = μ_core N²A/ℓ by 4. With U = ½LI² fixed, I² falls by 4.

- (A) treats the energy as proportional to LI rather than LI².
- (C) assumes the stored energy depends only on the current.
- (D) assumes the core "opposes" the current. Inductance opposes changes in current.

**If you missed this:** read "The inductance of a long solenoid" and "Energy stored in an inductor" in the [13.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-study-guide/).
</details>

## Question 7 (multiple choice · 13.5)

A battery, a 60 Ω resistor and a 0.30 H inductor are in series with a switch, which is closed at t = 0. When is the potential difference across the inductor equal to the potential difference across the resistor?

- (A) 5.0 ms
- (B) 2.5 ms
- (C) 3.5 ms
- (D) 1.7 ms

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** τ = L/R = 5.0 ms. V_L = ℰe^(−t/τ) and V_R = ℰ(1 − e^(−t/τ)). They are equal when e^(−t/τ) = ½, so t = τ ln 2 = **3.5 ms**.

- (A) is τ, when V_L is only 37% of ℰ.
- (B) assumes the voltages change linearly, crossing at τ/2.
- (D) is τ ln 2 ÷ 2, the halving time of something that goes as e^(−2t/τ).

**If you missed this:** read "The time constant τ = L/R" in the [13.5 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/).
</details>

## Question 8 (short answer · 13.4 and 13.5)

An 18 V battery and a switch are in series with R₁ = 6.0 Ω, leading to junctions P and Q. Between P and Q there are two branches in parallel: R₂ = 30 Ω alone, and a 0.25 H inductor in series with R₃ = 20 Ω. The switch has been open for a long time and is closed at t = 0.

(a) Just after closing, find the current in R₁, the current in R₂ and the potential difference across the inductor. Find the initial rate of change of the inductor current.
(b) A long time later, find the current in each branch.
(c) Find the energy finally stored in the inductor.

<details>
<summary>Answer and explanation</summary>

**(a)** The inductor current cannot jump from zero, so that branch is open. R₁ and R₂ are in series: I = 18 ÷ 36 = **0.50 A** in both. V_PQ = (0.50)(30) = 15 V. R₃ carries no current, so the whole 15 V is across the inductor: **V_L = 15 V**, and dI_L/dt = 15 ÷ 0.25 = **60 A/s**.

**(b)** The inductor acts as a wire. R₂ ∥ R₃ = 12 Ω, so the battery current is 18 ÷ 18 = **1.0 A** in R₁. V_PQ = 12 V, giving **0.40 A** in R₂ and **0.60 A** in the inductor branch.

**(c)** U = ½LI² = ½(0.25)(0.60)² = **4.5 × 10⁻² J**.

Check yourself: 1 mark each for the currents just after closing, V_L with dI/dt, the final currents, and U (4 in total).

**If you missed this:** for (a)–(b), read "Circuits with more than one resistor" in the [13.5 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/); for (c), the [13.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-study-guide/).
</details>

## Question 9 (multiple choice · 13.6)

In an ideal LC circuit, capacitor C starts with charge Q₀ and zero current. Later, the charge is Q₀/2. What is the size of the potential difference across the inductor then?

- (A) Zero
- (B) Q₀/C
- (C) √3Q₀/(2C)
- (D) Q₀/(2C)

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The loop rule, q/C + L dI/dt = 0, makes |V_L| equal to |V_C| at every instant: (Q₀/2)/C.

- (A) The current is still changing, so V_L ≠ 0. V_L is zero only when q = 0.
- (B) is the value at the start, when the charge is Q₀.
- (C) is the current's fraction: when q = Q₀/2, |I| = (√3/2)I_max.

**If you missed this:** read "The loop rule gives simple harmonic motion" in the [13.6 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-study-guide/).
</details>

## Question 10 (short answer · 13.6)

An ideal LC circuit with a 2.5 mH inductor must oscillate at 1.0 kHz.

(a) Find the capacitance needed.
(b) The capacitor is charged to 6.0 V and then connected across the inductor. Find the maximum current by two methods.
(c) Find the first time after connection at which the current is greatest.

<details>
<summary>Answer and explanation</summary>

**(a)** f = 1/(2π√(LC)), so C = 1/(4π²f²L) = 1/[4π²(1000)²(2.5 × 10⁻³)] = **1.0 × 10⁻⁵ F** (10.1 μF).

**(b)** Energy: ½CV² = ½LI_max², so I_max = V√(C/L) = 6.0 × √(1.013 × 10⁻⁵ ÷ 2.5 × 10⁻³) = **0.38 A**. Oscillation: Q₀ = CV = 6.08 × 10⁻⁵ C and I_max = ωQ₀ = (2π × 1000)(6.08 × 10⁻⁵) = **0.38 A**.

**(c)** The current is greatest when the capacitor is first empty, at T/4 = (1.0 ms)/4 = **0.25 ms**.

Check yourself: 1 mark each for C, each method for I_max, and T/4 (4 in total). Using ω = 1000 rad/s makes C about 40 times too large.

**If you missed this:** read "The idea: energy passed back and forth" and Worked example 1 in the [13.6 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-study-guide/).
</details>

## Your next step

Count a short answer as missed if you lost more than one mark.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 13.1 Magnetic flux | 1, 4(a) | [13.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/) |
| 13.2 Electromagnetic induction | 2, 3, 4(b)–(c) | [13.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/) |
| 13.3 Induced currents and magnetic forces | 4(d), 5 | [13.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/) |
| 13.4 Inductance | 6, 8(c) | [13.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-study-guide/) |
| 13.5 LR circuits | 7, 8(a)–(b) | [13.5 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/) |
| 13.6 LC circuits | 9, 10 | [13.6 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-study-guide/) |

## How to use your result

- **Missed nothing in a topic?** Go straight to the [mixed unit review](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-13-review/), which joins the topics together.
- **Missed one topic?** Read its study guide and do its practice set first.
- **Missed three or more topics?** Work through 13.1 to 13.6 in order.
- **Got it right but guessed?** Treat it as missed.
