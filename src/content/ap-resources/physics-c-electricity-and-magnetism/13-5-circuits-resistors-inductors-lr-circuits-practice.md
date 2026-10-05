---
resourceId: "mb-ap-physcem-13.5-practice"
title: "Circuits with Resistors and Inductors (LR Circuits): Practice Questions (Physics C: E&M 13.5)"
description: "Seven original Marlbridge practice questions on LR circuits: time constants, growth and decay, switching, energy, experimental data and a loop-rule derivation, with solutions and suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.5"]
resourceType: "practice-questions"
prerequisites:
  - "The LR loop equation and its exponential solutions"
prerequisiteResources: ["mb-ap-physcem-13.5-study-guide"]
learningObjectives:
  - "Calculate time constants, currents, voltages and powers in LR circuits"
  - "Predict circuit behaviour just after and long after a switch moves"
  - "Use experimental current–time data to find a time constant and an inductance"
  - "Derive the differential equation for a circuit with two resistors and one inductor"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Batteries are ideal and inductors have no resistance unless stated. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.5-study-guide", "mb-ap-physcem-13.5-revision-notes", "mb-ap-physcem-13.5-checklist"]
next: "mb-ap-physcem-13.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 5 and 7 test experimental reasoning and calculus derivation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Unless a question says otherwise, batteries have no internal resistance, inductors have no resistance in their windings, and connecting wires have negligible resistance and inductance. Useful values: e⁻¹ ≈ 0.368, 1 − e⁻¹ ≈ 0.632. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A coil of inductance 0.60 H is connected in series with a 150 Ω resistor and a battery. What is the time constant of the circuit?

- (A) 2.0 ms
- (B) 4.0 ms
- (C) 90 s
- (D) 250 s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** τ = L/R = 0.60 H ÷ 150 Ω = 4.0 × 10⁻³ s = 4.0 ms. A henry divided by an ohm is a second.

- (A) is τ/2, the time constant for the **stored energy**, which varies as I².
- (C) multiplies L by R. The units would be H·Ω, not seconds.
- (D) is R/L. That number is 250, but its unit is s⁻¹, so it is the reciprocal of the time constant.
</details>

## Question 2 (multiple choice · core)

A battery of emf ℰ, a resistor R, an inductor L and an open switch are connected in series. The switch is closed at t = 0. Which statement describes the circuit **just after** the switch closes?

- (A) The current is ℰ/R and the potential difference across the inductor is zero.
- (B) The current is zero and the potential difference across the inductor is ℰ.
- (C) The current is zero and the potential difference across the inductor is zero.
- (D) The current is ℰ/R and the potential difference across the inductor is ℰ.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The inductor's current was zero before the switch closed, and it cannot change instantly. With I = 0 the resistor has no potential difference, so by the loop rule the whole emf appears across the inductor: L dI/dt = ℰ. The current then starts to grow at ℰ/L.

- (A) describes the circuit a **long time** later, when the inductor acts as a wire.
- (C) and (D) break the loop rule: IR + V_L must equal ℰ, but it would be 0 in (C) and 2ℰ in (D).
</details>

## Question 3 (multiple choice · core)

An inductor carrying 2.0 A is suddenly connected across a resistor, with the battery removed. The time constant of the inductor–resistor loop is 3.0 ms. How long does it take for the current to fall to 0.50 A?

- (A) 2.1 ms
- (B) 2.3 ms
- (C) 4.2 ms
- (D) 6.0 ms

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** I = I₀e^(−t/τ), so 0.50 = 2.0e^(−t/τ), giving e^(−t/τ) = 1/4 and t = τ ln 4 = 3.0 ms × 1.386 = 4.2 ms.

- (A) is τ ln 2, the time for the current to **halve** once (to 1.0 A), not to fall to a quarter.
- (B) assumes the current keeps falling at its initial rate, I₀/τ. The rate decreases, so the real time is longer.
- (D) treats τ as the time for the current to halve. In one τ the current falls to 37%, not 50%.
</details>

## Question 4 (calculation · core)

A 24 V battery, an 8.0 Ω resistor and a 1.2 H inductor are connected in series with a switch, which is closed at t = 0.

(a) Find the time constant and the final current.
(b) Find the current and its rate of change at t = 0.30 s.
(c) At t = 0.30 s, find the rate at which the battery supplies energy, the rate at which the resistor dissipates it and the rate at which energy is stored in the inductor. Show that they are consistent.

<details>
<summary>Worked solution</summary>

1. (a) τ = L/R = 1.2 ÷ 8.0 = **0.15 s**. I_f = ℰ/R = 24 ÷ 8.0 = **3.0 A**.
2. (b) t = 0.30 s = 2τ. I = 3.0(1 − e⁻²) = **2.59 A**. dI/dt = (ℰ/L)e^(−t/τ) = (24 ÷ 1.2)e⁻² = 20 × 0.135 = **2.71 A/s**.
3. (c) Battery: ℰI = 24 × 2.594 = **62.3 W**. Resistor: I²R = (2.594)² × 8.0 = **53.8 W**. Inductor: LI dI/dt = 1.2 × 2.594 × 2.707 = **8.43 W** (equivalently V_L I, with V_L = 24e⁻² = 3.25 V).
4. Check: 53.8 W + 8.43 W = 62.3 W. The battery's power is split between dissipation in R and storage in the magnetic field.

Suggested mark points (4): 1 for τ and I_f; 1 for I(0.30 s) using 1 − e⁻²; 1 for dI/dt using (ℰ/L)e^(−t/τ); 1 for all three powers with the sum shown to balance.

Common error: using dI/dt = ℰ/L at t = 0.30 s. That is only the **initial** rate.
</details>

## Question 5 (experimental reasoning · core)

A student wants to find the inductance of a home-made coil. She connects it in series with a resistor, a 5.0 V battery and a switch. The total resistance of the circuit, including the coil's windings, is 25.0 Ω. A current sensor records the current after the switch is closed at t = 0. After a long time the current is steady at 0.200 A.

| t (ms) | 0 | 4 | 8 | 12 | 16 | 24 | 36 |
|---|---|---|---|---|---|---|---|
| I (A) | 0 | 0.057 | 0.097 | 0.126 | 0.147 | 0.173 | 0.190 |

(a) Show that the steady current agrees with the circuit data.
(b) Use the data to estimate the time constant, explaining your method.
(c) Find the inductance of the coil.
(d) Describe a straight-line graph she could plot to use all of the data, and state how τ is found from it.
(e) She pushes an iron rod into the coil and repeats the experiment. Predict the effect on the time constant and on the steady current, with reasons.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Long after switching, the inductor acts as a wire, so I_f = ℰ/R = 5.0 ÷ 25.0 = 0.200 A. This agrees with the measured value.

**(b)** After one time constant, I = 0.632 I_f = 0.632 × 0.200 = 0.126 A. The table shows 0.126 A at t = 12 ms, so **τ ≈ 12 ms**.

**(c)** τ = L/R, so L = τR = 0.012 s × 25.0 Ω = **0.30 H**.

**(d)** From I = I_f(1 − e^(−t/τ)), rearrange: ln(1 − I/I_f) = −t/τ. Plot ln(1 − I/I_f) on the vertical axis against t. The points should lie on a straight line through the origin with gradient −1/τ. For example, at t = 24 ms, ln(1 − 0.173/0.200) = −2.00, giving τ ≈ 12 ms again.

**(e)** The iron core increases the inductance (Topic 13.4: L depends on the core's permeability). τ = L/R increases, so the current rises **more slowly**. The steady current is ℰ/R, which does not depend on L, so it stays **0.200 A**.

| Point | What earns it |
|---|---|
| 1 | I_f = ℰ/R = 0.200 A shown to agree with the data |
| 1 | Uses 63% of I_f to read τ ≈ 12 ms from the table |
| 1 | L = τR = 0.30 H |
| 1 | Linearised plot of ln(1 − I/I_f) against t, gradient −1/τ |
| 1 | τ increases (larger L) and steady current unchanged (ℰ/R), both justified |

Accept, for (b), the tangent at t = 0 meeting 0.200 A at about 12 ms; for (d), a plot of ln(I_f − I) against t.
</details>

## Question 6 (constructed response · core)

A 12 V battery is connected through a switch S to two branches in parallel. Branch 1 is a resistor R₁ = 20 Ω. Branch 2 is an inductor L = 0.80 H in series with a resistor R₂ = 4.0 Ω. S has been open for a long time and is closed at t = 0.

(a) Find the current in R₁, the current in the inductor and the current from the battery just after S closes.
(b) Find the same three currents a long time later, and the time constant for the growth of the inductor current.
(c) S is now opened. Find the current in R₁ just after opening, the potential difference across R₁, and the time constant of the decay. State how the direction of the current in R₁ compares with part (b).
(d) Find the energy dissipated in R₁ after S is opened.
(e) Sketch the current in R₁ against time from just before S closes until long after S opens.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R₁ is connected straight across the battery, so its current jumps to 12 ÷ 20 = **0.60 A**. The inductor current cannot jump: **0**. Battery current: **0.60 A**.

**(b)** The inductor now acts as a wire, so branch 2 carries 12 ÷ 4.0 = **3.0 A**. R₁ still carries **0.60 A**. Battery: **3.6 A**. Branch 2 sits directly across the ideal battery, so its loop is ℰ = IR₂ + L dI/dt and **τ = L/R₂ = 0.80 ÷ 4.0 = 0.20 s**.

**(c)** With the battery cut off, the only loop is L, R₂ and R₁ in series. The inductor keeps its 3.0 A, so R₁ now carries **3.0 A**, flowing through R₁ in the **opposite direction** to before. V across R₁ = 3.0 × 20 = **60 V**, five times the battery emf. τ = L/(R₁ + R₂) = 0.80 ÷ 24 = **33 ms**.

**(d)** Stored energy = ½LI² = ½ × 0.80 × (3.0)² = 3.6 J. R₁ and R₂ carry the same current in the decay loop, so they share the energy in the ratio 20 : 4. Energy in R₁ = 3.6 × 20/24 = **3.0 J**.

**(e)** Zero before closing; a jump to +0.60 A, flat while S is closed; at opening a jump to −3.0 A (reversed), then exponential decay to zero, reaching −1.1 A after 33 ms.

| Point | What earns it |
|---|---|
| 1 | (a) Inductor current zero and R₁ current 0.60 A at once |
| 1 | (b) 3.0 A, 0.60 A, 3.6 A and τ = L/R₂ = 0.20 s |
| 1 | (c) 3.0 A in R₁, reversed, with 60 V across it |
| 1 | (c) Decay τ = L/(R₁ + R₂) = 33 ms, with the reason that all three are in one loop |
| 1 | (d) 3.0 J, from ½LI² shared in proportion to resistance |
| 1 | (e) Sketch shows constant 0.60 A, then a reversed jump to 3.0 A and exponential decay |

Carry forward an error in the 3.0 A current into (c)–(e) once.
</details>

## Question 7 (constructed response · stretch)

A battery of emf ℰ, a switch and a resistor R₁ are connected in series to junctions P and Q. Between P and Q are two parallel branches: a resistor R₂ and an ideal inductor L. The switch is closed at t = 0. Let I_L be the current in the inductor and I₂ the current in R₂.

(a) Use the junction rule and two loops to show that ℰ = R₁I_L + L(1 + R₁/R₂) dI_L/dt.
(b) Show that I_L = (ℰ/R₁)(1 − e^(−t/τ)) satisfies this equation, and find τ in terms of L, R₁ and R₂.
(c) Show that your τ gives the expected result when R₂ is very large, and explain physically why.
(d) Find I₂(t) and check its value at t = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Junction P: the current in R₁ is I₁ = I_L + I₂. Loop through R₂ and L: I₂R₂ = L dI_L/dt, so I₂ = (L/R₂) dI_L/dt. Outer loop through the battery, R₁ and L: ℰ = I₁R₁ + L dI_L/dt. Substitute I₁:
ℰ = R₁I_L + (R₁L/R₂) dI_L/dt + L dI_L/dt = **R₁I_L + L(1 + R₁/R₂) dI_L/dt**.

**(b)** dI_L/dt = (ℰ/(R₁τ))e^(−t/τ). Substituting: R₁I_L + L(1 + R₁/R₂) dI_L/dt = ℰ − ℰe^(−t/τ) + [L(R₁ + R₂)/(R₂τ)](ℰ/R₁)e^(−t/τ). This equals ℰ for all t only if L(R₁ + R₂)/(R₁R₂τ) = 1, so
**τ = L(R₁ + R₂)/(R₁R₂) = L/R_p**, where R_p = R₁R₂/(R₁ + R₂) is R₁ and R₂ in parallel. Also I_L(0) = 0, as required.

**(c)** As R₂ → ∞, (R₁ + R₂)/R₂ → 1, so τ → L/R₁, the series LR result. Physically, a very large R₂ carries almost no current, leaving a single loop.

**(d)** I₂ = (L/R₂) dI_L/dt = (L/R₂)(ℰ/(R₁τ))e^(−t/τ) = **[ℰ/(R₁ + R₂)]e^(−t/τ)**. At t = 0, I₂ = ℰ/(R₁ + R₂), as expected with the inductor branch effectively open and R₁, R₂ in series.

| Point | What earns it |
|---|---|
| 1 | Junction rule I₁ = I_L + I₂ and the R₂–L loop giving I₂ = (L/R₂) dI_L/dt |
| 1 | Outer loop and correct substitution to reach the given equation |
| 1 | Differentiates I_L and substitutes correctly |
| 1 | τ = L(R₁ + R₂)/(R₁R₂) |
| 1 | Limit R₂ → ∞ gives L/R₁, with a physical reason |
| 1 | I₂(t) = [ℰ/(R₁ + R₂)]e^(−t/τ), checked at t = 0 |

Accept separating variables in (b) instead of substituting the given solution.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "The time constant τ = L/R" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/).
- **Q2 or Q6 wrong:** revisit "What an inductor does in a circuit" and Worked example 2.
- **Q4 wrong:** work through "Energy in an LR circuit" and Worked example 1.
- **Q7 incomplete:** revisit "The loop rule and the differential equation", then try again.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-checklist/).
