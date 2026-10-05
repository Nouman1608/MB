---
resourceId: "mb-ap-physcem-u11-review"
title: "Electric Circuits: Mixed Unit Review (Physics C: E&M Unit 11)"
description: "A mixed review of Unit 11: the big ideas that link current, resistance, power, Kirchhoff's rules and RC circuits, a summary table and seven original questions that combine topics, with rubrics."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 11.1 to 11.8"
  - "Electric potential (Unit 9) and capacitance, C = Q/ΔV (Topic 10.3)"
prerequisiteResources: ["mb-ap-physcem-u11-diagnostic"]
learningObjectives:
  - "Connect current, resistance, power and Kirchhoff's rules as statements of charge and energy conservation"
  - "Choose between equivalent resistance and Kirchhoff's rules for a given circuit"
  - "Solve multi-step problems that combine two or more Unit 11 topics, including RC circuits"
  - "Check answers with power balances, loop sums and limiting cases"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C; ln 2 ≈ 0.693. Batteries, wires and meters are ideal unless stated. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u11-diagnostic", "mb-ap-physcem-11.1-checklist", "mb-ap-physcem-11.2-checklist", "mb-ap-physcem-11.3-checklist", "mb-ap-physcem-11.4-checklist", "mb-ap-physcem-11.5-checklist", "mb-ap-physcem-11.6-checklist", "mb-ap-physcem-11.7-checklist", "mb-ap-physcem-11.8-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Current is charge flow, I = dq/dt = nqv_dA; inside a conductor E = ρJ, which leads to R = ρℓ/A."
  - "The junction rule is charge conservation; the loop rule is energy conservation."
  - "Power IΔV is supplied by emfs and dissipated in resistances; the two always balance."
  - "A real battery's terminal voltage is ℰ − Ir, so changing one branch can change the others."
  - "An uncharged capacitor acts like a wire; a fully charged one carries no current; between the two, change follows e^(−t/τ) with τ = RC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This review joins the eight topics of Unit 11. Each question uses at least two topics. These are **original Marlbridge practice questions**, not past exam questions, and the mark tables are a **suggested Marlbridge rubric**, not an official scoring guideline. All data are invented for practice. If you have not taken it yet, start with the [Unit 11 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-11-diagnostic/).

## Big ideas of the unit

- **Current is a rate of charge flow.** I = dq/dt. Carriers drift slowly, so I = nqv_dA, and when J varies across a wire you integrate: I = ∫J·dA ([11.1](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/)).
- **Loops decide everything.** Charge flows only round closed loops, one element can be in several loops, and a short circuit has no potential difference ([11.2](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-study-guide/)).
- **Resistance comes from the material and the shape.** E = ρJ inside a conductor gives R = ρℓ/A; if ρ varies along the length, R = ∫ρ dx/A ([11.3](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-study-guide/)).
- **Power is current times potential difference.** P = IΔV for every element; for a resistor, use I²R or ΔV²/R, whichever has the fixed quantity ([11.4](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/)).
- **Equivalent resistance is a shortcut, not a law.** Series adds R; parallel adds 1/R. A real battery adds r in series, so its terminal voltage ℰ − Ir falls as the current rises ([11.5](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/)).
- **Real meters change what they measure:** a voltmeter adds a parallel path, an ammeter adds series resistance.
- **The loop rule is energy conservation.** Potential differences round any closed loop sum to zero, and a graph of V against position returns to its start ([11.6](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-study-guide/)).
- **The junction rule is charge conservation.** Current in equals current out, at a junction or for any closed region ([11.7](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-study-guide/)).
- **Capacitors bring time into circuits.** The loop rule gives a differential equation with solutions in e^(−t/τ), τ = RC; "just after" and "long after" are the easy limits ([11.8](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/)).

## Key relationships and methods

| Idea | Relationship | When to use it |
|---|---|---|
| Current | I = dq/dt = nqv_dA; I = ∫J·dA | Charge flow, drift speed, non-uniform J |
| Field in a conductor | E = ρJ | Linking ΔV along a wire to its current |
| Resistance | R = ρℓ/A; R = (1/A)∫ρ dx | Uniform wire; ρ varying along the length |
| Ohm's law | ΔV = IR | Ohmic elements (straight I–ΔV graph) |
| Power | P = IΔV = I²R = ΔV²/R | I²R if I is fixed; ΔV²/R if ΔV is fixed |
| Equivalent resistance | Series: ΣR; parallel: (Σ1/R)⁻¹ | Networks that reduce to series and parallel |
| Real battery | ΔV_terminal = ℰ − Ir | Whenever a battery has internal resistance |
| Loop rule | ΣΔV = 0 round any closed loop | Potentials, unknown emfs or currents |
| Junction rule | ΣI_in = ΣI_out | Every junction; a negative answer means the reverse direction |
| Capacitors | Parallel: ΣC; series: (Σ1/C)⁻¹ | Networks of capacitors |
| RC circuit | q = Cℰ(1 − e^(−t/τ)) charging; q = Q₀e^(−t/τ) discharging; τ = RC | Any time-dependent current or charge |

## Question 1 (multiple choice · mixed)

Wires A and B are made of the same metal and have the same length, but B has twice the diameter of A. They are connected first in parallel, then in series, across the same ideal battery. Which row gives P_B/P_A, the ratio of the powers dissipated?

- (A) Parallel 4; series 1/4
- (B) Parallel 2; series 1/2
- (C) Parallel 4; series 4
- (D) Parallel 1/4; series 4

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Doubling the diameter gives four times the area, so R_B = R_A/4. In parallel both have the same ΔV, and P = ΔV²/R makes P_B four times P_A. In series both have the same I, and P = I²R makes P_B a quarter of P_A.

- (B) uses the diameter instead of the area.
- (C) In series, the larger resistance takes the larger share.
- (D) swaps the two cases.
</details>

## Question 2 (multiple choice · mixed)

A copper wire of cross-sectional area A carries current I to a junction. There it splits into two copper wires, each of area A/4, which carry equal currents. If the drift speed in the first wire is v₀, what is the drift speed in each branch?

- (A) 2v₀
- (B) v₀/2
- (C) 4v₀
- (D) v₀

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the junction rule, each branch carries I/2. With the same n and q, v_d = I/(nqA) = (I/2) ÷ (nqA/4) = 2v₀.

- (B) uses only the halved current.
- (C) uses only the smaller area.
- (D) Drift speed depends on both the current and the area.
</details>

## Question 3 (multiple choice · mixed)

An uncharged 100 μF capacitor is charged by an ideal 12 V battery through a 5.0 kΩ resistor. How much energy is dissipated in the resistor during the whole charging process?

- (A) 7.2 mJ
- (B) 14 mJ
- (C) Zero, because the current falls to zero
- (D) 3.6 mJ

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The battery moves Q = Cℰ = 1.2 mC through 12 V, so it does Qℰ = 14.4 mJ of work. The capacitor stores ½Cℰ² = 7.2 mJ. The rest, **7.2 mJ**, is dissipated in the resistor. Check: ∫I²R dt with I = (ℰ/R)e^(−t/τ) gives ℰ²τ/(2R) = ½Cℰ², whatever R is.

- (B) is the battery's total work, not the dissipated part.
- (C) The current is zero only at the end; it is large at first.
- (D) halves the stored energy again with no reason.
</details>

## Question 4 (constructed response · mixed)

A heater is made by joining two wires end to end. Both have cross-sectional area 2.0 × 10⁻⁷ m². The lead wire is 3.0 m long with resistivity 2.0 × 10⁻⁸ Ω·m and 8.0 × 10²⁸ free electrons per m³. The element wire is 0.90 m long with resistivity 1.0 × 10⁻⁶ Ω·m and 5.0 × 10²⁸ free electrons per m³. A 12 V ideal supply is connected across the ends of the combination.

(a) Find the resistance of each wire and the current.
(b) Find the current density, and the electric field inside each wire. Show that the field values are consistent with the loop rule.
(c) Find the power dissipated in each wire and the power per metre of each. Explain which wire gets hot.
(d) Find the drift speed in each wire, and explain why the speeds differ although the current is the same.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R = ρℓ/A. Lead: (2.0 × 10⁻⁸)(3.0) ÷ (2.0 × 10⁻⁷) = **0.30 Ω**. Element: (1.0 × 10⁻⁶)(0.90) ÷ (2.0 × 10⁻⁷) = **4.5 Ω**. In series, R = 4.8 Ω, so I = 12 ÷ 4.8 = **2.5 A**.

**(b)** J = I/A = 2.5 ÷ (2.0 × 10⁻⁷) = **1.25 × 10⁷ A/m²**, the same in both (same I and A). E = ρJ: lead **0.25 V/m**, element **12.5 V/m**. Potential differences: (0.25)(3.0) = 0.75 V and (12.5)(0.90) = 11.25 V. Their sum is 12 V, equal to the emf, as the loop rule requires.

**(c)** P = I²R: lead **1.9 W** (1.875 W), element **28 W** (28.1 W). Total 30 W = (12 V)(2.5 A). Per metre: lead 0.63 W/m, element 31 W/m, **50 times** as much. With the same I and A, heating per metre is proportional to ρ, so the element gets hot and the lead stays cool.

**(d)** v_d = J/(ne). Lead: 1.25 × 10⁷ ÷ (8.0 × 10²⁸ × 1.60 × 10⁻¹⁹) = **9.8 × 10⁻⁴ m/s**. Element: **1.6 × 10⁻³ m/s**. The element has fewer free electrons per m³, so they must drift faster to carry the same current through the same area.

| Point | What earns it |
|---|---|
| 1 | Both resistances and I = 2.5 A |
| 1 | J the same in both, with a reason |
| 1 | E = ρJ for both wires |
| 1 | Loop check: 0.75 V + 11.25 V = 12 V |
| 1 | Both powers, per-metre values and which wire heats, linked to ρ |
| 1 | Both drift speeds, explained by n |

Total: 6 points.
</details>

## Question 5 (constructed response · mixed)

A battery of emf 12.0 V and internal resistance 1.0 Ω has its positive terminal connected through R₁ = 1.0 Ω to junction X. Between X and junction Y are two branches: R₂ = 10.0 Ω, and R₃ = 6.0 Ω in series with R₄ = 9.0 Ω, with point Z between R₃ and R₄. Y is connected to the negative terminal.

(a) Find the equivalent resistance of the external circuit, the battery current and the terminal voltage.
(b) Write a junction equation and two loop equations for I₁ (battery), I₂ (R₂) and I₃ (R₃ and R₄). Solve them and check with your answer to (a).
(c) Taking the negative terminal as 0 V, find the potentials at the positive terminal, X and Z.
(d) An ammeter of resistance 0.40 Ω is placed in series with R₂. Find its reading and the percentage by which it is below the value in (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The branches are 10.0 Ω and 15.0 Ω in parallel: 6.0 Ω. External R = 1.0 + 6.0 = **7.0 Ω**. I = 12.0 ÷ (7.0 + 1.0) = **1.5 A**. Terminal voltage = 12.0 − (1.5)(1.0) = **10.5 V**.

**(b)** Junction X: I₁ = I₂ + I₃. Outer loop through R₂: 12.0 − 1.0I₁ − 1.0I₁ − 10.0I₂ = 0. Inner loop through both branches: 10.0I₂ − 15.0I₃ = 0. Solving: **I₁ = 1.5 A, I₂ = 0.90 A, I₃ = 0.60 A**. I₁ agrees with (a).

**(c)** V₊ = **10.5 V**. Through R₁ with the current: V_X = 10.5 − (1.5)(1.0) = **9.0 V**. Through R₃: V_Z = 9.0 − (0.60)(6.0) = **5.4 V**. Check: R₄ then drops (0.60)(9.0) = 5.4 V, reaching Y at 0 V.

**(d)** The branch becomes 10.4 Ω. In parallel with 15.0 Ω: 6.14 Ω. I₁ = 12.0 ÷ (1.0 + 1.0 + 6.14) = 1.474 A, so V_XY = (1.474)(6.142) = 9.05 V. The ammeter reads 9.05 ÷ 10.4 = **0.87 A**, about **3.3% low**.

| Point | What earns it |
|---|---|
| 1 | R = 7.0 Ω, I = 1.5 A and terminal voltage 10.5 V |
| 1 | Correct junction equation and two loop equations, with consistent signs |
| 1 | I₂ = 0.90 A and I₃ = 0.60 A |
| 1 | V₊ and V_X |
| 1 | V_Z, with a check that the loop returns to 0 V |
| 1 | Ammeter reading 0.87 A and 3.3% |

Total: 6 points.
</details>

## Question 6 (constructed response · mixed)

An uncharged capacitor C is connected at t = 0 to an ideal battery of emf ℰ through a resistor R.

(a) Use the loop rule to write the differential equation for the charge q on the capacitor.
(b) Show that q = Cℰ(1 − e^(−t/τ)), with τ = RC, satisfies the equation and the starting condition. Find I(t).
(c) Find the time at which energy is being stored in the capacitor at the same rate as it is dissipated in the resistor.
(d) Show that the rate of storing energy in the capacitor is greatest at this same time, and find that greatest rate.
(e) Evaluate (c) and (d) for ℰ = 9.0 V, R = 20 kΩ and C = 150 μF.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Walking round with the current: ℰ − IR − q/C = 0, with I = dq/dt, so **ℰ − R dq/dt − q/C = 0**.

**(b)** At t = 0, q = Cℰ(1 − 1) = 0, as required. dq/dt = (ℰ/R)e^(−t/τ). Then R dq/dt + q/C = ℰe^(−t/τ) + ℰ(1 − e^(−t/τ)) = ℰ, so the equation holds. **I = (ℰ/R)e^(−t/τ)**.

**(c)** The capacitor gains energy at rate (q/C)I; the resistor dissipates I²R. These are equal when IR = q/C: the potential differences across R and C are equal, so each is ℰ/2. Then 1 − e^(−t/τ) = ½, so **t = τ ln 2**.

**(d)** dU/dt = (q/C)I = (ℰ²/R)(1 − e^(−t/τ))e^(−t/τ). Let x = e^(−t/τ): x(1 − x) is greatest at x = ½, which is t = τ ln 2 again. The greatest rate is (ℰ²/R)(½)(½) = **ℰ²/(4R)**.

**(e)** τ = (20 × 10³)(150 × 10⁻⁶) = 3.0 s, so t = 3.0 ln 2 = **2.1 s** (2.08 s). Greatest rate = 9.0² ÷ (4 × 20 × 10³) = **1.0 × 10⁻³ W** (1.01 mW).

| Point | What earns it |
|---|---|
| 1 | Loop equation with I = dq/dt |
| 1 | Substitution showing the solution works, with q(0) = 0 |
| 1 | I(t) = (ℰ/R)e^(−t/τ) |
| 1 | Equal rates when ΔV_R = ΔV_C = ℰ/2, giving τ ln 2 |
| 1 | Maximum of dU/dt shown (by x(1 − x) or by differentiating) with ℰ²/(4R) |
| 1 | t = 2.1 s and 1.0 mW |

Total: 6 points.
</details>

## Question 7 (constructed response · mixed)

An ideal 6.0 V battery and a switch S are connected to junctions P and Q. Between P and Q are two branches: identical bulbs A and B in series; and an identical bulb D in series with an uncharged 0.50 F capacitor. Each bulb has a resistance of 12 Ω. S closes at t = 0.

(a) Rank the brightness of A, B and D just after S closes. Justify your ranking.
(b) Rank the brightness a long time later, and find the final charge on the capacitor.
(c) Explain why the brightness of A does not change while the capacitor charges. Find the time constant.
(d) The battery is replaced by one with the same emf and internal resistance 2.0 Ω, and the capacitor is discharged. Find the power in A just after S closes and a long time later. Describe how A's brightness changes.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The uncharged capacitor acts like a wire, so the D branch is 12 Ω and the A–B branch is 24 Ω. Both branches have 6.0 V across them: I_D = **0.50 A** and I_A = I_B = **0.25 A**. So **D > A = B**. (Powers: 3.0 W and 0.75 W.)

**(b)** The charged capacitor carries no current, so D is **off**: **A = B > D**. A and B still carry 0.25 A. With no current in D, the capacitor has the full 6.0 V: Q = (0.50)(6.0) = **3.0 C**.

**(c)** An ideal battery keeps 6.0 V across P and Q. The A–B branch always has 6.0 V across its 24 Ω, so I_A stays at 0.25 A: the branches are independent. The capacitor charges through D alone: τ = (12)(0.50) = **6.0 s**.

**(d)** Just after: the branches in parallel give 8.0 Ω, so I = 6.0 ÷ (8.0 + 2.0) = 0.60 A and V_PQ = 4.8 V. I_A = 4.8 ÷ 24 = 0.20 A, P_A = **0.48 W**. Long after: I = 6.0 ÷ (24 + 2.0) = 0.231 A, P_A = **0.64 W**. A starts dimmer and gets **brighter** as the capacitor charges. The battery current falls, so less potential difference is lost across r.

| Point | What earns it |
|---|---|
| 1 | Capacitor treated as a wire just after; D > A = B with currents or powers |
| 1 | D off long after; A = B, with the capacitor branch carrying no current |
| 1 | Q = 3.0 C, using ΔV_C = 6.0 V |
| 1 | A unchanged because the ideal battery fixes V_PQ; τ = 6.0 s |
| 1 | P_A = 0.48 W just after and 0.64 W long after |
| 1 | A brightens, explained by the falling Ir loss |

Total: 6 points.
</details>

## How did you do?

Questions 1–3 are worth 1 point each, and Questions 4–7 are worth 6 points each, 27 in all. Look at **where** you lost points.

- **Current, drift speed or current density (Q2, Q4(b) and (d)):** use the [11.1 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-checklist/).
- **Loops, short paths and switches (Q7(a)–(b)):** use the [11.2 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-checklist/).
- **Resistance from ρ, ℓ and A (Q1, Q4(a)):** use the [11.3 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-checklist/).
- **Power and energy (Q1, Q3, Q4(c), Q6(c)–(d)):** use the [11.4 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-checklist/).
- **Equivalent resistance, internal resistance or meters (Q5(a) and (d), Q7(d)):** use the [11.5 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-checklist/).
- **Loop equations and potentials (Q4(b), Q5(b)–(c), Q6(a)):** use the [11.6 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-checklist/).
- **Junction equations (Q2, Q5(b)):** use the [11.7 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-checklist/).
- **RC circuits (Q3, Q6, Q7):** use the [11.8 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-checklist/).

If you have not done it yet, the [Unit 11 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-11-diagnostic/) gives a quick topic-by-topic check.
