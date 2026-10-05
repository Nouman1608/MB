---
resourceId: "mb-ap-physcem-13.4-practice"
title: "Inductance: Practice Questions (Physics C: E&M 13.4)"
description: "Seven original Marlbridge practice questions on inductance: units, solenoid scaling, self-induced emf from changing currents, stored energy and energy transfer, with solutions."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.4"]
resourceType: "practice-questions"
prerequisites:
  - "The field inside a long solenoid and Faraday's law"
prerequisiteResources: ["mb-ap-physcem-13.4-study-guide"]
learningObjectives:
  - "Derive and scale the inductance of a solenoid"
  - "Find the size and direction of a self-induced emf, including by differentiating I(t)"
  - "Calculate stored energy and energy changes with U = ½LI²"
  - "Use energy conservation to follow energy from an inductor into a resistor or capacitor"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.4-study-guide", "mb-ap-physcem-13.4-revision-notes", "mb-ap-physcem-13.4-checklist"]
next: "mb-ap-physcem-13.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 5 needs you to differentiate a current that varies sinusoidally."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: μ₀ = 4π × 10⁻⁷ T·m/A. Inductors are ideal (no resistance) and solenoids are long unless stated. Core permeabilities given as multiples of μ₀ are invented values for practice. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

Which of these is equivalent to the henry, the unit of inductance?

- (A) V·s/A
- (B) V·A/s
- (C) Ω/s
- (D) J/A

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** From ℰ = −L dI/dt, L = ℰ ÷ (dI/dt), which has units V ÷ (A/s) = V·s/A. This also equals Ω·s and J/A².

- (B) multiplies by the rate of change of current instead of dividing by it.
- (C) has the time in the wrong place: V·s/A = Ω·s, not Ω/s.
- (D) comes from U = ½LI² with the current not squared. The correct unit from energy is J/A².
</details>

## Question 2 (multiple choice · core)

Solenoid P has N turns, length ℓ and radius r, with an air core. Solenoid Q has 2N turns, length 2ℓ and radius 2r, also with an air core. What is L_Q / L_P?

- (A) 2
- (B) 4
- (C) 8
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** L = μ₀N²A/ℓ with A = πr². The factors are: N² gives 4, A gives 2² = 4, and ℓ gives 1/2. Overall 4 × 4 ÷ 2 = 8.

- (A) treats both N and r as if they appeared to the first power: 2 × 2 ÷ 2.
- (B) squares only one of N and r.
- (D) forgets to divide by the doubled length.
</details>

## Question 3 (multiple choice · core)

The current in a 0.40 H inductor falls steadily from 3.0 A to 1.0 A in 0.50 s. Which statement describes the self-induced emf during this time?

- (A) 1.6 V, acting in the same direction as the current
- (B) 1.6 V, acting against the current
- (C) 0.80 V, acting in the same direction as the current
- (D) 2.4 V, acting against the current

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dI/dt = (1.0 − 3.0) A ÷ 0.50 s = −4.0 A/s. ℰ = −L dI/dt = −(0.40)(−4.0) = +1.6 V. The positive sign means the emf acts along the current, trying to keep it from falling (Lenz's law).

- (B) has the right size but the wrong direction. The emf acts against the current only while the current is rising.
- (C) is LΔI = 0.40 × 2.0. It forgets to divide by the time.
- (D) uses the starting current, 3.0 A, instead of the change in current. The emf depends on how fast I changes, not on I.
</details>

## Question 4 (calculation · core)

A 0.25 H inductor carries a current of 4.0 A.

(a) Find the energy stored. (b) What current would store 8.0 J? (c) The current is reduced from 4.0 A to 2.0 A. How much energy does the inductor release?

<details>
<summary>Worked solution</summary>

1. (a) U = ½LI² = ½(0.25 H)(4.0 A)² = **2.0 J**.
2. (b) I = √(2U/L) = √(2 × 8.0 ÷ 0.25) = √64 = **8.0 A**. Check with factors: four times the energy needs twice the current.
3. (c) At 2.0 A, U = ½(0.25)(2.0)² = 0.50 J. Energy released = 2.0 − 0.50 = **1.5 J**.

Suggested mark points (3): 1 for 2.0 J; 1 for 8.0 A; 1 for 1.5 J found as a difference of two energies.

Common error: in (c), using ½L(ΔI)² = ½(0.25)(2.0)² = 0.50 J. Energy depends on I², so you must find each energy and subtract.
</details>

## Question 5 (calculation · core)

The current in a 0.050 H inductor is I(t) = I₀ sin(ωt), with I₀ = 2.0 A and ω = 120 rad/s. Take ℰ as positive when it acts in the direction of positive current.

(a) Derive an expression for the self-induced emf ℰ(t). (b) Find the greatest magnitude of the emf. (c) Find ℰ at t = 5.0 ms and state whether it acts with or against the current. (d) What is the emf when the current is at its maximum, and what is the greatest energy stored?

<details>
<summary>Worked solution</summary>

1. (a) ℰ = −L dI/dt = **−LI₀ω cos(ωt)**.
2. (b) |ℰ|max = LI₀ω = (0.050)(2.0)(120) = **12 V**.
3. (c) ωt = (120)(0.0050) = 0.60 rad. ℰ = −12 cos(0.60) = −12 × 0.825 = **−9.9 V**. At this time I = 2.0 sin(0.60) ≈ 1.1 A is positive and increasing, so the negative emf acts **against** the current, opposing its rise.
4. (d) The current is greatest when cos(ωt) = 0, so **ℰ = 0** there: the current is momentarily not changing. The greatest energy is ½LI₀² = ½(0.050)(2.0)² = **0.10 J**.

Suggested mark points (4): 1 for differentiating correctly, including the chain-rule factor ω; 1 for 12 V; 1 for −9.9 V with the direction explained; 1 for zero emf at maximum current and 0.10 J.

Common error: setting the calculator to degrees. ωt is in radians.
</details>

## Question 6 (constructed response · core)

A long air-cored solenoid has 800 turns over a length of 0.40 m and a radius of 0.015 m.

(a) Starting from B = μ₀NI/ℓ, derive L = μ₀N²A/ℓ. (b) Calculate L. (c) A core of permeability 150μ₀ is inserted. Find the new inductance and the energy stored at 0.50 A. (d) With the core in place, the current rises at 40 A/s. Find the size of the self-induced emf. (e) Explain why the straight connecting wires to the solenoid are usually treated as having zero inductance.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Flux through one turn: Φ_B = BA = μ₀NIA/ℓ. Flux linkage: NΦ_B = μ₀N²IA/ℓ. L = NΦ_B/I = **μ₀N²A/ℓ**; the current cancels.

**(b)** A = π(0.015)² = 7.07 × 10⁻⁴ m². L = (4π × 10⁻⁷)(800)²(7.07 × 10⁻⁴) ÷ 0.40 = **1.42 × 10⁻³ H**.

**(c)** L = 150 × 1.421 mH = **0.213 H**. U = ½(0.2132)(0.50)² = **0.0266 J** (27 mJ).

**(d)** |ℰ| = L dI/dt = (0.2132)(40) = **8.5 V**, acting against the current because the current is increasing.

**(e)** A straight wire's field circles round the wire. There are no stacked turns for that field to pass through again and again, so the wire's flux linkage per ampere is tiny compared with the coil's, where N turns each link the strong field inside. Modelling it as zero inductance puts all the inductance in the solenoid.

| Point | What earns it |
|---|---|
| 1 | Flux per turn BA with B = μ₀NI/ℓ |
| 1 | Multiplies by N and divides by I to reach μ₀N²A/ℓ |
| 1 | L = 1.42 mH |
| 1 | Inductance with core 0.213 H and energy 0.0266 J |
| 1 | emf 8.5 V with direction against the current |
| 1 | Reason for zero inductance of straight wires based on flux linkage |

Accept 1.4 mH and 0.21 H. Carry forward an error in (b) into (c) and (d) once.
</details>

## Question 7 (constructed response · stretch)

A 0.20 H ideal inductor carries a steady current of 1.5 A. At t = 0 it is disconnected from its supply and, in one experiment, connected across a 10 Ω resistor.

(a) Find the energy stored at t = 0. (b) Find the total thermal energy produced in the resistor as the current falls to zero. (c) Just after t = 0, the current is still 1.5 A. Find the rate of change of current and show that dU/dt for the inductor equals −I²R.

In a second experiment, the same inductor with the same 1.5 A current is instead connected to an uncharged 50 μF capacitor, with negligible resistance.

(d) Find the greatest charge on the capacitor and the greatest potential difference across it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** U = ½LI² = ½(0.20)(1.5)² = **0.225 J**.

**(b)** All the stored energy is dissipated, so the thermal energy is **0.225 J** (energy conservation; you do not need I(t)).

**(c)** Loop rule with the inductor as the only source: the inductor's emf drives the current through R, so L|dI/dt| = IR and dI/dt = −IR/L = −(1.5)(10) ÷ 0.20 = **−75 A/s**. Then dU/dt = LI dI/dt = (0.20)(1.5)(−75) = −22.5 W, and I²R = (1.5)²(10) = 22.5 W. So **dU/dt = −I²R**: energy leaves the field at the rate the resistor dissipates it.

**(d)** When the capacitor's charge is greatest, the current is zero, so all 0.225 J is in the capacitor: Q²/(2C) = ½LI₀², giving Q = I₀√(LC) = 1.5 × √(0.20 × 50 × 10⁻⁶) = **4.74 × 10⁻³ C**. V = Q/C = 4.74 × 10⁻³ ÷ 50 × 10⁻⁶ = **94.9 V**.

| Point | What earns it |
|---|---|
| 1 | U = 0.225 J |
| 1 | Thermal energy equals the stored energy, with energy conservation stated |
| 1 | dI/dt = −75 A/s from the loop rule |
| 1 | Shows LI dI/dt = −22.5 W = −I²R |
| 1 | Sets ½LI₀² = Q²/(2C) at the moment of zero current |
| 1 | Q = 4.74 × 10⁻³ C and V = 94.9 V |

Topics 13.5 and 13.6 find how the current changes with time in these two circuits; here energy conservation is enough.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "The self-induced emf: ℰ = −L dI/dt" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-study-guide/).
- **Q2 or Q6 wrong:** revisit "The inductance of a long solenoid", its scaling table and Worked example 1.
- **Q4 or Q7 wrong:** work through "Energy stored in an inductor" again.
- **Q5 wrong:** compare with Worked example 2 and Figure 1: the emf follows the slope of I(t).

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-checklist/).
