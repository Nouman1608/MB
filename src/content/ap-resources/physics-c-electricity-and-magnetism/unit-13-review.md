---
resourceId: "mb-ap-physcem-u13-review"
title: "Electromagnetic Induction: Mixed Unit Review (Physics C: E&M Unit 13)"
description: "A mixed review of Unit 13: the big ideas that link flux, induction, magnetic braking, inductance, LR and LC circuits, a summary table and seven original questions that combine topics, with rubrics."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 13.1 to 13.6"
  - "Magnetic force on a current and the field of a solenoid (Unit 12); RC circuits (Topic 11.8)"
prerequisiteResources: ["mb-ap-physcem-u13-diagnostic"]
learningObjectives:
  - "Connect flux, Faraday's and Lenz's laws, magnetic forces and inductance in one picture"
  - "Follow energy from mechanical work or a battery into fields and thermal energy"
  - "Solve multi-step problems that combine two or more Unit 13 topics"
  - "Check answers with limiting cases, units and energy bookkeeping"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Work in radians for oscillations; e⁻¹ ≈ 0.368. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u13-diagnostic", "mb-ap-physcem-13.1-checklist", "mb-ap-physcem-13.2-checklist", "mb-ap-physcem-13.3-checklist", "mb-ap-physcem-13.4-checklist", "mb-ap-physcem-13.5-checklist", "mb-ap-physcem-13.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "An emf appears only when flux changes: ℰ = −N dΦ_B/dt, with the direction from Lenz's law."
  - "The force on an induced current always opposes the motion that causes it, so work done becomes thermal energy."
  - "An inductor resists changes in its own current (ℰ = −L dI/dt) and stores ½LI² in its field."
  - "LR circuits change exponentially with τ = L/R; ideal LC circuits oscillate with ω = 1/√(LC)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This review joins the six topics of Unit 13; each question uses at least two. These are **original Marlbridge practice questions**, not past exam questions, and the mark tables are a **suggested Marlbridge rubric**, not an official scoring guideline. All data are invented; inductors and wires have no resistance unless stated.

## Big ideas of the unit

- **Flux counts the field through a surface.** Φ_B = ∫B·dA, with a sign set by the area vector. Through any closed surface it is zero ([13.1](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/)).
- **Only change induces.** Change B, the area or the angle, and ℰ = −N dΦ_B/dt. A large steady flux induces nothing ([13.2](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/)).
- **Lenz's law is energy conservation.** The induced current opposes the **change** in flux, not the field itself.
- **A changing B makes an electric field.** It circles the changing region, exists even where B is zero and is non-conservative.
- **The field pushes on the current it induces.** Only segments inside the field feel a force, which opposes the motion: magnetic braking ([13.3](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/)).
- **Braking forces grow with speed.** F = B²L²v/R, so motion decays exponentially or reaches a terminal speed.
- **A coil induces an emf in itself.** L = NΦ_B/I depends only on the coil, and ℰ = −L dI/dt ([13.4](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-study-guide/)).
- **Inductor current cannot jump.** Just after switching it keeps its old value; long after, an ideal inductor acts as a wire ([13.5](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/)).
- **Stored energy ½LI² goes somewhere.** A resistor turns it into thermal energy; a capacitor takes it and gives it back, so the circuit oscillates ([13.6](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-study-guide/)).

## Key relationships and methods

| Idea | Relationship | When to use it |
|---|---|---|
| Magnetic flux | Φ_B = ∫B·dA; BA cos θ if uniform and flat | Strips or rings when B varies |
| Faraday's law | ℰ = −N dΦ_B/dt | Any changing flux; Lenz's law for direction |
| Motional emf | ℰ = BLv | Rod or edge moving across a uniform field |
| Induced E field | ∮E·dl = −dΦ_B/dt | Symmetric regions such as solenoids |
| Force on induced current | F = ILB = B²L²v/R | Only segments inside the field |
| Coasting rod | v = v₀e^(−t/τ), τ = mR/(B²L²) | No other horizontal force |
| Solenoid inductance | L = μ_core N²A/ℓ | Long solenoid |
| Self-induced emf, energy | ℰ = −L dI/dt; U = ½LI² | Any inductor |
| LR circuit | I = (ℰ/R)(1 − e^(−t/τ)) or I₀e^(−t/τ); τ = L/R | Use the resistance in the inductor's loop |
| LC circuit | ω = 1/√(LC); I_max = Q₀/√(LC) | Ideal circuit, energy conserved |

## Question 1 (multiple choice · mixed)

A hand-turned generator has a flat coil spinning at constant angular speed ω in a uniform field and is connected to a fixed resistor. Ignore friction and the coil's inductance. If ω is doubled, by what factor does the **average torque** needed to turn the coil change?

- (A) 2
- (B) 1
- (C) 4
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The peak emf NBAω doubles, so the average power, (NBAω)²/(2R), rises by 4. The turning power is torque × ω, so the average torque is P/ω = (NBA)²ω/(2R): a factor of 2.

- (B) forgets that the current, and so the force on the coil sides, grows with ω.
- (C) is the factor for the power, not the torque.
- (D) multiplies the power factor by the speed factor instead of dividing.
</details>

## Question 2 (multiple choice · mixed)

A battery, a resistor and an inductor are in series, and the switch is closed at t = 0. At t = τ, what fraction of its final stored energy does the inductor hold?

- (A) 0.40
- (B) 0.63
- (C) 0.37
- (D) 0.86

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At t = τ, I = (1 − e⁻¹)I_f = 0.632I_f. Energy goes as I², so U/U_f = 0.632² = **0.40**.

- (B) is the current fraction. U = ½LI² needs it squared.
- (C) is the fraction of ℰ still across the inductor.
- (D) is the current fraction at 2τ.
</details>

## Question 3 (multiple choice · mixed)

In circuit X, a capacitor charged to potential difference V is connected across an air-cored solenoid. Circuit Y uses the same capacitor, charged to the same V, and a solenoid with the same length and area but **twice the number of turns**. How do the period and the maximum current in Y compare with X?

- (A) The period doubles; the maximum current halves.
- (B) The period is four times as long; the maximum current is a quarter.
- (C) The period doubles; the maximum current is unchanged.
- (D) The period is √2 times as long; the maximum current is 1/√2 times as large.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** L ∝ N², so L is 4 times larger. T = 2π√(LC) doubles. The energy ½CV² is the same, so ½LI_max² is unchanged and I_max falls by √4 = 2.

- (B) uses T ∝ L instead of √L.
- (C) forgets that the same energy in a larger L needs a smaller current.
- (D) takes L ∝ N, forgetting that N doubles both the field and the number of linked turns.
</details>

## Question 4 (constructed response · mixed)

Two horizontal rails 0.25 m apart are joined at one end by a 0.50 Ω resistor. A metal rod is held at rest across the rails, 0.80 m from the resistor. A vertical field points **upward** and grows as B(t) = 0.20 T + (0.15 T/s)t.

(a) Find the flux through the circuit at t = 2.0 s.
(b) Find the induced emf and current, and the direction of the current viewed from above.
(c) Find the magnetic force on the rod at t = 2.0 s, with its direction, and explain the direction using Lenz's law.
(d) Instead, the field is held at a steady 0.50 T upward and the rod is moved along the rails. Find the speed and direction of motion that give the same current in the same direction.
(e) Find the power dissipated in both cases, and state where the energy comes from in each.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A = (0.25)(0.80) = 0.20 m². B(2.0 s) = 0.50 T, so Φ_B = **0.10 Wb**.

**(b)** A is fixed, so |ℰ| = A dB/dt = (0.20)(0.15) = **0.030 V** and I = 0.030 ÷ 0.50 = **0.060 A**. Upward flux is increasing, so the induced field inside points down: **clockwise** viewed from above.

**(c)** F = IℓB = (0.060)(0.25)(0.50) = **7.5 × 10⁻³ N**, towards the resistor. Moving that way would shrink the area and the growing flux, so the force opposes the change.

**(d)** Need BLv = 0.030 V: v = 0.030 ÷ (0.50 × 0.25) = **0.24 m/s, away from the resistor**, so the upward flux still increases. The 7.5 × 10⁻³ N force towards the resistor now opposes the motion.

**(e)** I²R = (0.060)²(0.50) = **1.8 × 10⁻³ W** in both cases. Rod still: the energy comes from the supply driving the changing field. Rod moving: it comes from the agent, Fv = (7.5 × 10⁻³)(0.24) = 1.8 × 10⁻³ W.

| Point | What earns it |
|---|---|
| 1 | Φ_B = 0.10 Wb |
| 1 | ℰ = 0.030 V and I = 0.060 A from A dB/dt |
| 1 | Clockwise from above, with Lenz's law reasoning |
| 1 | F = 7.5 × 10⁻³ N towards the resistor, explained |
| 1 | v = 0.24 m/s away from the resistor |
| 1 | 1.8 mW in both, with the two energy sources (Fv check) |

Total: 6 points.
</details>

## Question 5 (constructed response · mixed)

A long air-cored solenoid has 1200 turns over 0.60 m and radius 0.025 m. It is in series with a 4.0 Ω resistor, a 6.0 V battery and a switch. A coaxial 40-turn search coil of radius 0.010 m inside it is connected to a high-resistance voltmeter. The switch is closed at t = 0.

(a) Starting from B = μ₀NI/ℓ, derive the solenoid's inductance and evaluate it. Find the time constant.
(b) Write I(t) for the solenoid and give its final value and its initial rate of change.
(c) Show that the search coil's emf is ℰ_c = N_c(πr_c²)μ₀(N/ℓ)(dI/dt), and find its value at t = 0.
(d) Sketch I(t) and ℰ_c(t) on the same time axis. Explain why ℰ_c is zero when I is greatest.
(e) A core of permeability 50μ₀ (an invented value) now fills the solenoid, with the search coil wound on it. Predict the new time constant, final current and search-coil emf at t = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Flux per turn: BA = μ₀NIA/ℓ. Flux linkage NΦ_B = μ₀N²IA/ℓ, so L = **μ₀N²A/ℓ**. With A = π(0.025)² = 1.96 × 10⁻³ m²: L = (4π × 10⁻⁷)(1200)²(1.96 × 10⁻³) ÷ 0.60 = **5.9 × 10⁻³ H**. τ = L/R = **1.5 ms** (1.48 ms).

**(b)** I = (ℰ/R)(1 − e^(−t/τ)), with I_f = 6.0 ÷ 4.0 = **1.5 A**. At t = 0 the whole 6.0 V is across the inductor: dI/dt = ℰ/L = **1.0 × 10³ A/s**.

**(c)** The search coil's flux per turn is (μ₀NI/ℓ)πr_c², and only I changes, so ℰ_c = N_c πr_c² μ₀(N/ℓ) dI/dt. At t = 0: dB/dt = μ₀(2000 m⁻¹)(1013 A/s) = 2.55 T/s, so ℰ_c = 40 × π(0.010)² × 2.55 = **3.2 × 10⁻² V** (32 mV).

**(d)** I rises from zero towards 1.5 A; ℰ_c starts at 32 mV and decays as e^(−t/τ) (11.8 mV at τ). ℰ_c follows dI/dt, which is greatest at the start and zero once the current is steady.

**(e)** L and τ rise by 50: τ = **74 ms**. The final current is still **1.5 A**, set by R alone. The search-coil emf at t = 0 is **unchanged**: dB/dt = μ_core n ℰ/L, and L is also proportional to μ_core, so the factor cancels. (Simplified: ℰ_c(0) = N_c r_c² ℰ/(N r_s²) = 32 mV.) The pulse lasts 50 times longer.

| Point | What earns it |
|---|---|
| 1 | Derivation of L = μ₀N²A/ℓ via flux linkage |
| 1 | L = 5.9 mH and τ = 1.5 ms |
| 1 | I(t) with I_f = 1.5 A and dI/dt = 1.0 × 10³ A/s |
| 1 | ℰ_c expression from Faraday's law |
| 1 | ℰ_c(0) = 32 mV |
| 1 | Sketches with ℰ_c ∝ dI/dt explained |
| 1 | Core: τ × 50, I_f unchanged, ℰ_c(0) unchanged with reason |

Total: 7 points.
</details>

## Question 6 (constructed response · mixed)

A rectangular loop, 0.30 m long in the direction of motion and 0.15 m high, has resistance 0.40 Ω. It is pulled at a steady 2.0 m/s to the right through a region of uniform field 0.80 T into the page. The region is only 0.12 m wide but taller than the loop. Let x be the distance the loop's leading edge has travelled past the region's left boundary.

(a) Sketch Φ_B against x from x = 0 to 0.50 m, with values.
(b) Find the emf and current in each stage, with the direction of the current.
(c) Find the force the agent must apply in each stage.
(d) Find the total thermal energy produced, and check it a second way.
(e) Predict the total thermal energy if the speed were 4.0 m/s.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For 0 < x < 0.12 m, Φ_B = Bhx rises linearly to (0.80)(0.15)(0.12) = **1.44 × 10⁻² Wb**. For 0.12 < x < 0.30 m, the whole region lies inside the loop: Φ_B stays at 1.44 × 10⁻² Wb. For 0.30 < x < 0.42 m, the trailing edge crosses and Φ_B falls linearly to zero. After that it stays zero.

**(b)** Entering: ℰ = Bhv = (0.80)(0.15)(2.0) = **0.24 V**, I = **0.60 A**, anticlockwise (inward flux increasing). Middle stage: flux steady, so **ℰ = 0**. Leaving: 0.24 V and 0.60 A, **clockwise**.

**(c)** In each active stage, one vertical side is in the field, with F = IhB = (0.60)(0.15)(0.80) = **0.072 N** opposing the motion. The forces on the parts of the top and bottom sides in the field cancel. The agent pushes with **0.072 N** while entering and leaving, and **zero** in between.

**(d)** Work = F × distance = 0.072 × (0.12 + 0.12) = **1.7 × 10⁻² J**. Check: each active stage lasts 0.12 ÷ 2.0 = 0.060 s, and I²Rt = (0.36)(0.40)(0.060) × 2 = 1.7 × 10⁻² J.

**(e)** The heat is (B²h²v/R) × (0.24 m), proportional to v. At 4.0 m/s it **doubles** to 3.5 × 10⁻² J: twice the force over the same distance.

| Point | What earns it |
|---|---|
| 1 | Φ_B graph with three stages and 1.44 × 10⁻² Wb plateau |
| 1 | 0.24 V and 0.60 A in the active stages |
| 1 | Directions: anticlockwise entering, clockwise leaving, none in the middle |
| 1 | 0.072 N opposing motion; zero in the middle stage |
| 1 | 1.7 × 10⁻² J with an energy check |
| 1 | Doubles, with reason |

Total: 6 points.
</details>

## Question 7 (constructed response · mixed)

A 40 μF capacitor is charged to 25 V and connected across a 0.10 H inductor at t = 0.

(a) Find ω, the period and the first time the current is greatest.
(b) Find the maximum current using energy conservation.
(c) At the moment the current is greatest, a switch disconnects the capacitor and connects the inductor across a 50 Ω resistor, without interrupting the inductor current. Write the current in the resistor as a function of time t′ after switching, and find the potential difference across the resistor just after switching.
(d) Find the total thermal energy produced in the resistor. Compare it with the capacitor's starting energy.
(e) Repeat (d) if the switch had been operated at T/8 instead. Where is the rest of the energy?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ω = 1/√(LC) = 1/√(0.10 × 40 × 10⁻⁶) = **500 rad/s**. T = 2π/ω = **12.6 ms**. The current first peaks when the capacitor is empty, at T/4 = **3.1 ms**.

**(b)** U = ½CV² = ½(40 × 10⁻⁶)(25)² = 1.25 × 10⁻² J = ½LI_max², so I_max = **0.50 A**. Check: ωQ₀ = 500 × 1.0 × 10⁻³ = 0.50 A.

**(c)** The inductor current cannot jump, so it starts at 0.50 A and decays with τ = L/R = **2.0 ms**: I = **0.50e^(−t′/2.0 ms) A**. The resistor's potential difference starts at (0.50)(50) = **25 V**.

**(d)** All of ½LI_max² = **1.25 × 10⁻² J**, the capacitor's starting energy, becomes thermal energy: the ideal LC stage loses none.

**(e)** At T/8, I = I_max sin(π/4) = 0.354 A, so the resistor gets ½(0.10)(0.354)² = **6.3 × 10⁻³ J**, half the total. The other half stays on the isolated capacitor, with q = Q₀/√2 = 0.71 mC (17.7 V).

| Point | What earns it |
|---|---|
| 1 | ω = 500 rad/s, T = 12.6 ms, peak at T/4 = 3.1 ms |
| 1 | I_max = 0.50 A by energy |
| 1 | I = 0.50e^(−t′/τ) with τ = 2.0 ms |
| 1 | 25 V across R just after switching |
| 1 | 1.25 × 10⁻² J, equal to the starting energy |
| 1 | T/8 case: 6.3 mJ, with the other half on the capacitor |

Total: 6 points.
</details>

## How did you do?

Questions 1–3 are worth 1 point each, and Questions 4–7 are worth 6, 7, 6 and 6 points, 28 in all. Look at **where** you lost points.

- **Flux, including graphs of Φ_B (Q4(a), Q6(a)):** use the [13.1 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-checklist/).
- **Faraday's law, Lenz's law or directions (Q1, Q4(b), Q5(c), Q6(b)):** use the [13.2 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-checklist/).
- **Forces on induced currents and energy (Q1, Q4(c)–(e), Q6(c)–(e)):** use the [13.3 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-checklist/).
- **Inductance and stored energy (Q3, Q5(a) and (e), Q7(d)):** use the [13.4 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-checklist/).
- **LR switching and time constants (Q2, Q5(b) and (d), Q7(c)):** use the [13.5 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-checklist/).
- **LC oscillations (Q3, Q7(a), (b) and (e)):** use the [13.6 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-checklist/).

For a quick topic-by-topic check, take the [Unit 13 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-13-diagnostic/).
