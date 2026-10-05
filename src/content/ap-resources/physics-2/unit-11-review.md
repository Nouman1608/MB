---
resourceId: "mb-ap-phys2-u11-review"
title: "Electric Circuits: Mixed Unit Review (Physics 2 Unit 11)"
description: "Connect the circuits topics: the big ideas, one summary table and six original questions that combine current, resistance, power, Kirchhoff's rules and RC circuits."
course: "physics-2"
unit: 11
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 11.1 to 11.8"
  - "You have tried the Unit 11 diagnostic and revisited any weak topics"
prerequisiteResources: ["mb-ap-phys2-u11-diagnostic"]
learningObjectives:
  - "Link current, resistance and power so you can predict how a change in one element affects the whole circuit"
  - "Combine resistivity, internal resistance and power in one multi-step problem"
  - "Use the loop and junction rules together with potentials at points in a circuit"
  - "Connect capacitor combinations, the time constant and energy transfer in RC circuits"
  - "Explain answers in words, with the reasoning a written exam answer needs"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Batteries, wires and meters are ideal unless a question says otherwise. 1 μF = 10⁻⁶ F, 1 kΩ = 10³ Ω, 1 mA = 10⁻³ A. Round only at the end"
related: ["mb-ap-phys2-u11-diagnostic", "mb-ap-phys2-11.1-checklist", "mb-ap-phys2-11.2-checklist", "mb-ap-phys2-11.3-checklist", "mb-ap-phys2-11.4-checklist", "mb-ap-phys2-11.5-checklist", "mb-ap-phys2-11.6-checklist", "mb-ap-phys2-11.7-checklist", "mb-ap-phys2-11.8-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The junction rule is conservation of charge and the loop rule is conservation of energy; every circuit method comes from these two."
  - "Change one element and the equivalent resistance, the battery current and every potential difference can change with it."
  - "Power is IΔV for any element; choose I²R or ΔV²/R by what stays fixed."
  - "A capacitor acts like a wire at first and like a break after a long time; τ = RC sets how fast it gets there."
  - "Questions 1–2 are multiple choice; Questions 3–6 are multi-part and each combines at least three topics."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

The questions in this review are **original Marlbridge practice questions**, not past exam questions, and each combines two or more topics. The rubrics are a **suggested Marlbridge rubric**, not official scoring. Batteries, wires and meters are ideal unless a question says otherwise, and all data are invented.

## Big ideas of the unit

- **Current is a rate of charge flow.** I = ΔQ/Δt, in the direction positive charge would move; the area under a current–time graph is the charge ([Topic 11.1](/advanced-course-resources/physics-2/11-1-electric-current-study-guide/)).
- **Only closed loops carry current.** An element works only if it is in a closed loop with a source; a short circuit removes the potential difference across what it bypasses ([Topic 11.2](/advanced-course-resources/physics-2/11-2-simple-circuits-study-guide/)).
- **Resistance comes from material and shape.** R = ρL/A; an ohmic element has a straight I–ΔV line through the origin ([Topic 11.3](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-study-guide/)).
- **Power is the energy rate.** P = IΔV for any element; for a resistor, use I²R when the current is shared and ΔV²/R when the potential difference is shared ([Topic 11.4](/advanced-course-resources/physics-2/11-4-electric-power-study-guide/)).
- **Networks reduce to one resistor.** Series resistances add; parallel paths lower the total. A real battery is an emf in series with r ([Topic 11.5](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-study-guide/)).
- **Energy per charge balances round a loop.** The potential differences in any closed loop sum to zero ([Topic 11.6](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-study-guide/)).
- **Charge balances at a junction.** Current in equals current out, because charge cannot pile up ([Topic 11.7](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-study-guide/)).
- **Capacitors change a circuit over time.** Wire at first, break at the end, with τ = RC setting the pace ([Topic 11.8](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method | Watch out for |
|---|---|---|
| Current (11.1) | I = ΔQ/Δt; ΔQ = area under I–t | Electron flow is opposite to I |
| Resistance (11.3) | R = ρL/A; R = ΔV/I | Area depends on diameter squared |
| Power (11.4) | P = IΔV = I²R = ΔV²/R; ΔE = PΔt | Which quantity is the same for both elements |
| Series and parallel (11.5) | R_s = R₁ + R₂; 1/R_p = 1/R₁ + 1/R₂ | Adding a parallel branch lowers R_eq |
| Real battery (11.5) | ΔV_terminal = ℰ − Ir | Terminal voltage falls as current rises |
| Loop rule (11.6) | ΣΔV = 0 round any closed loop | Signs when crossing against the current |
| Junction rule (11.7) | ΣI_in = ΣI_out | A negative answer means the other direction |
| Capacitors (11.8) | C_p = C₁ + C₂; 1/C_s = 1/C₁ + 1/C₂; Q = CΔV | Series capacitors carry equal charge |
| RC circuits (11.8) | τ = RC; 63% charged or 37% left after τ | τ does not depend on the emf |

## Question 1 (multiple choice · mixed)

*Topics 11.2, 11.4, 11.8.* Identical bulbs L₁ and L₂ and an uncharged capacitor are connected to an ideal battery. L₁ is in series with a parallel pair made of L₂ and the capacitor. The switch is closed at t = 0. Which describes the bulbs?

- (A) L₂ lights at once and goes off later; L₁ stays equally bright.
- (B) L₂ is off at first and then lights; L₁ is brightest at first and then dims.
- (C) L₂ is off at first and then lights; L₁ stays equally bright throughout.
- (D) Both bulbs light equally at once and stay that way, because no charge crosses a capacitor.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At first the uncharged capacitor acts like a wire and short-circuits L₂, so L₂ has no potential difference across it. L₁ then has the whole emf: current ℰ/R, power ℰ²/R. After a long time the capacitor acts like a break, so L₁ and L₂ share the emf in series: each has current ℰ/(2R) and one quarter of L₁'s first power.

- (A) reverses the capacitor's behaviour.
- (C) forgets that the circuit's resistance rises from R to 2R, so L₁'s current falls.
- (D) forgets that charge flows onto and off the plates while the capacitor charges, even though none crosses the gap.
</details>

## Question 2 (multiple choice · mixed)

*Topics 11.1, 11.3, 11.6.* Wires X and Y are made of the same metal and have the same length. Y has half the cross-sectional area of X. They are joined end to end across an ideal 9.0 V battery. Which row is correct?

- (A) More current in X; ΔV_X = ΔV_Y = 4.5 V
- (B) Same current in both; ΔV_X = 6.0 V and ΔV_Y = 3.0 V
- (C) Same current in both; ΔV_X = ΔV_Y = 4.5 V
- (D) Same current in both; ΔV_X = 3.0 V and ΔV_Y = 6.0 V

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The wires are in series, so charge has one path and the current is the same. R = ρL/A, so R_Y = 2R_X. The loop rule gives ΔV_X + ΔV_Y = 9.0 V, and with equal currents ΔV ∝ R: 3.0 V and 6.0 V.

- (A) gives the thicker wire more current. That happens in parallel, not in series.
- (B) gives the larger share to the wire with less resistance.
- (C) ignores the difference in resistance.
</details>

## Question 3 (constructed response · mixed)

*Topics 11.3, 11.4, 11.5.* A heating element is 1.57 m of alloy wire, resistivity 1.0 × 10⁻⁶ Ω·m and diameter 0.50 mm. It is connected to a battery pack of emf 13.5 V and internal resistance 1.0 Ω.

(a) Show that the resistance of the element is about 8.0 Ω.
(b) Calculate the current and the terminal voltage of the battery.
(c) Calculate the energy transferred to the element in 10 minutes.
(d) A second, identical element is connected in parallel with the first. A student says: "Two elements give twice the heating." Evaluate the claim with calculations.
(e) In use the element warms up and the resistivity of the alloy rises. State how the battery current changes, and why.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A = π(0.25 × 10⁻³ m)² = 1.96 × 10⁻⁷ m². R = ρL/A = (1.0 × 10⁻⁶ Ω·m)(1.57 m) ÷ (1.96 × 10⁻⁷ m²) = **8.0 Ω**.

**(b)** r is in series with the element: I = ℰ/(R + r) = 13.5 V ÷ 9.0 Ω = **1.5 A**. ΔV_terminal = ℰ − Ir = 13.5 V − 1.5 V = **12.0 V**.

**(c)** P = I²R = (1.5 A)²(8.0 Ω) = 18 W. ΔE = PΔt = (18 W)(600 s) = **1.08 × 10⁴ J**.

**(d)** The two elements in parallel make 4.0 Ω. I = 13.5 V ÷ 5.0 Ω = 2.7 A, and ΔV_terminal = 13.5 V − 2.7 V = 10.8 V. Each element: ΔV²/R = (10.8 V)² ÷ 8.0 Ω = 14.6 W, so the total is **29.2 W**, not 36 W. The claim is wrong: the larger current loses more of the emf across r, so each element has less than 12.0 V across it.

**(e)** R = ρL/A rises, so the total resistance R + r rises and the current **decreases**.

| Point | What earns it |
|---|---|
| 1 | Area from the radius, and R = 8.0 Ω |
| 1 | I = 1.5 A, including r in the total |
| 1 | Terminal voltage 12.0 V |
| 1 | 18 W and 1.08 × 10⁴ J, with time in seconds |
| 1 | Parallel pair 4.0 Ω; new current 2.7 A and terminal voltage 10.8 V |
| 1 | Total 29.2 W, less than 36 W, explained by the larger loss across r |
| 1 | Current decreases because R rises with resistivity |

Total: 7 points.
</details>

## Question 4 (constructed response · mixed)

*Topics 11.4, 11.5, 11.6, 11.7.* Two branches are connected in parallel across an ideal 9.0 V battery. Branch 1 has R₁ = 3.0 Ω next to the positive terminal, then R₂ = 6.0 Ω. Branch 2 has R₃ = 6.0 Ω next to the positive terminal, then R₄ = 3.0 Ω. X is the point between R₁ and R₂; Y is the point between R₃ and R₄.

(a) Calculate the current in each branch and in the battery.
(b) Taking the negative terminal as 0 V, find the potentials at X and Y. Which point is at the higher potential?
(c) A plain wire is now connected from X to Y. Find the current in each resistor and the size and direction of the current in the new wire.
(d) Compare the power delivered by the battery before and after the wire is added, and explain the change.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each branch is 9.0 Ω with 9.0 V across it, so each carries **1.0 A**. Junction rule: the battery carries **2.0 A**.

**(b)** V_X = 9.0 V − (1.0 A)(3.0 Ω) = **6.0 V**. V_Y = 9.0 V − (1.0 A)(6.0 Ω) = **3.0 V**. X is **3.0 V higher** than Y.

**(c)** The wire puts X and Y at the same potential. Now R₁ and R₃ are in parallel (2.0 Ω), and so are R₂ and R₄ (2.0 Ω). R_eq = 4.0 Ω, so the battery current is 9.0 V ÷ 4.0 Ω = 2.25 A, and each pair has 4.5 V across it.

| Resistor | R₁ | R₂ | R₃ | R₄ |
|---|---|---|---|---|
| Current (A) | 1.5 | 0.75 | 0.75 | 1.5 |

Junction rule at X: 1.5 A arrives through R₁ and 0.75 A leaves through R₂, so **0.75 A** flows along the wire **from X to Y**. Check at Y: 0.75 A + 0.75 A = 1.5 A leaves through R₄.

**(d)** Before: P = ℰI = (9.0 V)(2.0 A) = **18 W**. After: (9.0 V)(2.25 A) = **20.25 W**. The wire lowers R_eq from 4.5 Ω to 4.0 Ω, so with a fixed emf the current, and so the power, rises.

| Point | What earns it |
|---|---|
| 1 | 1.0 A in each branch and 2.0 A in the battery |
| 1 | V_X = 6.0 V and V_Y = 3.0 V, using the falls across R₁ and R₃ |
| 1 | X is higher, by 3.0 V |
| 1 | With the wire: R_eq = 4.0 Ω and 2.25 A |
| 1 | All four resistor currents |
| 1 | 0.75 A from X to Y, from the junction rule |
| 1 | 18 W → 20.25 W, linked to the lower R_eq |

Total: 7 points. Carry forward an error in the battery current once.
</details>

## Question 5 (constructed response · mixed)

*Topics 11.4, 11.6, 11.8.* Capacitors C₁ = 30 μF and C₂ = 60 μF are connected in series with each other, a 50 kΩ resistor, a switch and an ideal 12 V battery. Both capacitors start uncharged.

(a) Calculate the equivalent capacitance and the time constant.
(b) Calculate the current just after the switch is closed. After a long time, find the charge on each capacitor and the potential difference across each.
(c) Calculate the energy stored at the end and the energy transferred by the battery. Account for the difference.
(d) The capacitors are reconnected in parallel with each other, and the experiment is repeated. Does the circuit take a longer or shorter time to charge? Justify with a value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 1/C_eq = 1/30 + 1/60 = 1/20, so **C_eq = 20 μF**. τ = RC_eq = (50 × 10³ Ω)(20 × 10⁻⁶ F) = **1.0 s**.

**(b)** At first the capacitors act like wires: I₀ = 12 V ÷ 50 × 10³ Ω = **0.24 mA**. After a long time the current is zero and the capacitors share the full 12 V. Q = C_eq ℰ = **240 μC on each**, because capacitors in series carry equal charge. ΔV₁ = 240 μC ÷ 30 μF = **8.0 V**; ΔV₂ = 240 μC ÷ 60 μF = **4.0 V**. Check: 8.0 V + 4.0 V = 12 V.

**(c)** Stored: U = ½C_eq ℰ² = ½(20 × 10⁻⁶ F)(12 V)² = **1.44 mJ**. The battery moves 240 μC through 12 V: Qℰ = **2.88 mJ**. The other **1.44 mJ** was dissipated as thermal energy in the resistor while the current flowed.

**(d)** In parallel, C = 30 + 60 = 90 μF, so τ = (50 × 10³ Ω)(90 × 10⁻⁶ F) = **4.5 s**: a **longer** time. More charge (1080 μC) must flow through the same resistor.

| Point | What earns it |
|---|---|
| 1 | C_eq = 20 μF and τ = 1.0 s |
| 1 | I₀ = 0.24 mA, because the uncharged capacitors act like wires |
| 1 | 240 μC on each capacitor, with the reason |
| 1 | 8.0 V and 4.0 V |
| 1 | 1.44 mJ stored and 2.88 mJ from the battery |
| 1 | Difference dissipated in the resistor |
| 1 | Parallel: 90 μF, τ = 4.5 s, longer |

Total: 7 points.
</details>

## Question 6 (constructed response · mixed)

*Topics 11.1, 11.3, 11.4, 11.8.* A capacitor charged to 10 V is discharged through a resistor at t = 0. A student records the current (fictional data):

| t (s) | 0 | 2.0 | 4.0 | 6.0 | 8.0 | 10 | 12 |
|---|---|---|---|---|---|---|---|
| I (mA) | 2.00 | 1.21 | 0.74 | 0.45 | 0.27 | 0.16 | 0.10 |

(a) Calculate the resistance of the resistor.
(b) Use the data to find the time constant, and hence the capacitance.
(c) Use the area under the I–t graph from 0 to 12 s to estimate the charge that has flowed. Compare it with the capacitor's starting charge, and explain the difference.
(d) Calculate the total energy dissipated in the resistor during the whole discharge.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At t = 0 the resistor has the full 10 V across it: R = 10 V ÷ 2.00 × 10⁻³ A = **5.0 kΩ**.

**(b)** After one time constant the current has fallen to about 37%: 0.37 × 2.00 mA = 0.74 mA, reached at t = 4.0 s. So **τ = 4.0 s**, and C = τ/R = 4.0 s ÷ 5.0 × 10³ Ω = **800 μF**.

**(c)** Add trapezia 2.0 s wide: area ≈ **7.8 mC**. The starting charge is CΔV₀ = (800 μF)(10 V) = **8.0 mC**. The capacitor is not yet empty at 12 s: ΔV_C = IR = (0.10 mA)(5.0 kΩ) = 0.50 V, so 0.40 mC is still stored. 7.8 + 0.4 ≈ 8.2 mC, consistent with 8.0 mC given that trapezia slightly overestimate the area under this curve.

**(d)** All the stored energy ends up in the resistor: U = ½CΔV₀² = ½(800 × 10⁻⁶ F)(10 V)² = **0.040 J**.

| Point | What earns it |
|---|---|
| 1 | R = 5.0 kΩ from the starting values |
| 1 | τ = 4.0 s from the 37% value |
| 1 | C = 800 μF |
| 1 | Area about 7.8 mC (accept 7.6 to 8.0 mC) |
| 1 | Compared with 8.0 mC; the difference is charge still on the plates at 12 s |
| 1 | 0.040 J, because all stored energy is dissipated |

Total: 6 points.
</details>

## How did you do?

Questions 1–2 are worth 1 point each and Questions 3–6 are worth 27 in total. There is no pass mark: use the checklist that matches the points you lost.

- **charge from current, current direction** (Q2, 6(c)): [Topic 11.1 checklist](/advanced-course-resources/physics-2/11-1-electric-current-checklist/)
- **closed loops and short circuits** (Q1): [Topic 11.2 checklist](/advanced-course-resources/physics-2/11-2-simple-circuits-checklist/)
- **R = ρL/A and Ohm's law** (Q2, 3(a), 3(e), 6(a)): [Topic 11.3 checklist](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-checklist/)
- **power and energy** (Q1, 3(c)–(d), 4(d), 5(c), 6(d)): [Topic 11.4 checklist](/advanced-course-resources/physics-2/11-4-electric-power-checklist/)
- **equivalent resistance and internal resistance** (Q3(b)–(d), 4(c)): [Topic 11.5 checklist](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-checklist/)
- **potentials and the loop rule** (Q2, 4(b), 5(b)): [Topic 11.6 checklist](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-checklist/)
- **the junction rule** (Q4(a), 4(c)): [Topic 11.7 checklist](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-checklist/)
- **capacitors and the time constant** (Q1, 5, 6(b)): [Topic 11.8 checklist](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-checklist/)

For a quicker topic-by-topic check, take the [Unit 11 diagnostic](/advanced-course-resources/physics-2/unit-11-diagnostic/).
