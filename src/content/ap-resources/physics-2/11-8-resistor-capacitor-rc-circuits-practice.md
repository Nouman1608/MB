---
resourceId: "mb-ap-phys2-11.8-practice"
title: "Resistor-Capacitor (RC) Circuits: Practice Questions (Physics 2 11.8)"
description: "Seven original Marlbridge practice questions on equivalent capacitance, charging and discharging graphs, the time constant, and start and end states of RC circuits, with solutions."
course: "physics-2"
unit: 11
topics: ["11.8"]
resourceType: "practice-questions"
prerequisites:
  - "Q = CΔV and U = ½C(ΔV)² (Topic 10.6)"
  - "Kirchhoff's loop and junction rules (Topics 11.6 and 11.7)"
prerequisiteResources: ["mb-ap-phys2-11.8-study-guide"]
learningObjectives:
  - "Combine capacitors in series and parallel and find the charge and potential difference on each"
  - "Find currents and potential differences just after a switch moves and after a long time"
  - "Sketch and compare charging and discharging graphs using τ = RC"
  - "Plan a measurement of a time constant"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "1 μF = 10⁻⁶ F, 1 kΩ = 10³ Ω, 1 mA = 10⁻³ A. Batteries, wires and switches are ideal. Give answers to 2 or 3 significant figures"
related: ["mb-ap-phys2-11.8-study-guide", "mb-ap-phys2-11.8-revision-notes", "mb-ap-phys2-11.8-checklist"]
next: "mb-ap-phys2-11.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working or sketches."
  - "No question asks for a value at a particular time other than the start, one time constant, or a long time."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: batteries, wires and switches are ideal; resistors are ohmic; capacitors start uncharged unless stated; τ = RC; after one time constant a charging capacitor has about 63% of its final charge and a discharging one about 37% of its initial charge. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A 4.0 μF capacitor and a 12 μF capacitor are connected in series. What is their equivalent capacitance?

- (A) 3.0 μF
- (B) 16 μF
- (C) 8.0 μF
- (D) 0.33 μF

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 1/C_eq = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12, so C_eq = 3.0 μF. It is smaller than 4.0 μF, as a series combination must be.

- (B) adds the capacitances, which is the **parallel** rule.
- (C) averages the two values. No combination rule does this.
- (D) stops at 1/C_eq = 0.33 μF⁻¹ and forgets to take the reciprocal.
</details>

## Question 2 (multiple choice · core)

A 2.0 μF capacitor and a 6.0 μF capacitor are connected in series to a 12 V battery and fully charged. Which row is correct?

- (A) Each has 18 μC; the 2.0 μF capacitor has 9.0 V across it.
- (B) Each has 18 μC; the 6.0 μF capacitor has 9.0 V across it.
- (C) Each has 12 V across it; the charges are 24 μC and 72 μC.
- (D) Each has 6.0 V across it; the charges are 12 μC and 36 μC.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** C_eq = 1/(1/2.0 + 1/6.0) = 1.5 μF, so Q = (1.5 μF)(12 V) = 18 μC on **each** capacitor. ΔV = Q/C: 18/2.0 = 9.0 V and 18/6.0 = 3.0 V. The smaller capacitor has the larger ΔV.

- (B) swaps the potential differences, as if ΔV were proportional to C.
- (C) treats the capacitors as parallel, each across the full 12 V.
- (D) splits the 12 V equally, which would give unequal charges. Series capacitors must carry equal charge.
</details>

## Question 3 (multiple choice · core)

An uncharged capacitor, a 5.0 kΩ resistor, a switch and a 10 V battery are in series. Immediately after the switch is closed, what are the current and the potential difference across the capacitor?

- (A) 2.0 mA; 0 V
- (B) 0 mA; 10 V
- (C) 0 mA; 0 V
- (D) 2.0 mA; 10 V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With no charge yet, ΔV_C = Q/C = 0, so the capacitor acts like a wire. The whole 10 V is across the resistor: I = 10 V ÷ 5000 Ω = 2.0 mA.

- (B) describes the state after a **long** time, not the start.
- (C) treats the uncharged capacitor as a break. That is only true once it is charged.
- (D) breaks the loop rule: 10 V across the resistor plus 10 V across the capacitor would be 20 V.
</details>

## Question 4 (multiple choice · core)

A capacitor of 150 μF, charged to 6.0 V, is discharged through a 20 kΩ resistor. Which is closest to the potential difference across the capacitor 3.0 s after the discharge starts?

- (A) 2.2 V
- (B) 3.8 V
- (C) 3.0 V
- (D) 0 V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** τ = RC = (20 × 10³ Ω)(150 × 10⁻⁶ F) = 3.0 s, so 3.0 s is one time constant. A discharging capacitor keeps about 37%: 0.37 × 6.0 V ≈ 2.2 V.

- (B) is 63% of 6.0 V, the charging benchmark used for a discharge.
- (C) assumes the voltage halves in one time constant. The fraction left after τ is about 37%, not 50%.
- (D) assumes the capacitor is fully discharged after one time constant.
</details>

## Question 5 (calculation · core)

C₁ = 3.0 μF and C₂ = 6.0 μF are connected in series. This pair is connected in parallel with C₃ = 5.0 μF. The whole network is connected to a 6.0 V battery and fully charged.

(a) Find the equivalent capacitance. (b) Find the charge and potential difference for each capacitor. (c) Find the total energy stored.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. (a) Series pair: 1/C₁₂ = 1/3.0 + 1/6.0 = 1/2.0, so C₁₂ = 2.0 μF. In parallel with C₃: **C_eq = 2.0 + 5.0 = 7.0 μF**.
2. (b) The pair and C₃ are in parallel, so each has 6.0 V across it.
3. C₃: Q₃ = (5.0 μF)(6.0 V) = **30 μC**, ΔV₃ = **6.0 V**.
4. Pair: Q = (2.0 μF)(6.0 V) = 12 μC, so **Q₁ = Q₂ = 12 μC**. ΔV₁ = 12/3.0 = **4.0 V**; ΔV₂ = 12/6.0 = **2.0 V**.
5. (c) U = ½C_eq(ΔV)² = ½(7.0 × 10⁻⁶ F)(6.0 V)² = **1.26 × 10⁻⁴ J** (126 μJ).

**Check.** Total charge from the battery: 12 + 30 = 42 μC = (7.0 μF)(6.0 V). ΔV₁ + ΔV₂ = 6.0 V.

| Point | What earns it |
|---|---|
| 1 | C₁₂ = 2.0 μF from the series rule |
| 1 | C_eq = 7.0 μF |
| 1 | Q₃ = 30 μC with ΔV₃ = 6.0 V |
| 1 | Q₁ = Q₂ = 12 μC, with the reason (series, equal charge) |
| 1 | ΔV₁ = 4.0 V and ΔV₂ = 2.0 V |
| 1 | U = 126 μJ (or by summing ½QΔV for each capacitor) |
</details>

## Question 6 (constructed response · core)

An uncharged 100 μF capacitor, a 30 kΩ resistor, a switch and a 9.0 V battery are in series. The switch is closed at t = 0.

(a) Calculate the time constant, the initial current and the final charge on the capacitor.
(b) Sketch graphs of ΔV_C against t and I against t from 0 to 15 s. Label the values at t = 0, at one time constant, and the value approached after a long time.
(c) The resistor is replaced by a 60 kΩ resistor and the experiment is repeated. Add dashed curves to both sketches. State which features change and which do not.
(d) Outline how a student could measure the time constant using a voltmeter and a timer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** τ = (30 × 10³ Ω)(100 × 10⁻⁶ F) = **3.0 s**. I₀ = 9.0 V ÷ 30 × 10³ Ω = **0.30 mA**. Q_final = CΔV = (100 μF)(9.0 V) = **900 μC**.

**(b)** ΔV_C: starts at 0, rises steeply then levels off, about 0.63 × 9.0 ≈ **5.7 V** at t = 3.0 s, approaching 9.0 V (nearly there by 15 s, which is 5τ). I: starts at 0.30 mA, falls steeply then levels off, about 0.37 × 0.30 ≈ **0.11 mA** at 3.0 s, approaching 0.

**(c)** With 60 kΩ: τ = **6.0 s**, so both dashed curves change more slowly. The initial current halves to **0.15 mA**. The final ΔV_C (9.0 V), the final charge (900 μC) and the final stored energy (½(100 × 10⁻⁶ F)(9.0 V)² = 4.05 mJ) **do not change**; only the time to get there does.

**(d)** Connect the voltmeter across the capacitor. Close the switch and start the timer together. Record ΔV_C at regular intervals (for example every 1 s) until it stops changing. Plot ΔV_C against t and read the time at which ΔV_C = 0.63 × its final value. Repeat and average; or discharge the capacitor and find when ΔV_C falls to 0.37 of its starting value.

| Point | What earns it |
|---|---|
| 1 | τ = 3.0 s, I₀ = 0.30 mA and Q = 900 μC, with units |
| 1 | ΔV_C sketch: from 0, concave down, levelling towards 9.0 V, about 5.7 V marked at τ |
| 1 | I sketch: from 0.30 mA, concave up, decreasing towards 0, about 0.11 mA marked at τ |
| 1 | Dashed curves rise or fall more slowly, with τ = 6.0 s |
| 1 | Initial current halves; final ΔV_C, charge and energy unchanged |
| 1 | Procedure: voltmeter across C, readings at regular times, graph, 63% (or 37% on discharge) to find τ |

Do not award the sketch points for straight lines or for curves that reach their final values at a definite time.
</details>

## Question 7 (constructed response · stretch)

An ideal 18 V battery, a switch S and R₁ = 3.0 kΩ are in series. After R₁ the circuit splits at junction J into two branches that rejoin at junction K, which connects back to the battery. Branch 1 is R₂ = 6.0 kΩ. Branch 2 is R₃ = 2.0 kΩ in series with an uncharged capacitor C = 40 μF.

(a) Find the currents in R₁, R₂ and R₃ immediately after S is closed.
(b) Find the currents, ΔV_C, the charge on C and the stored energy after S has been closed for a long time.
(c) S is then opened. A student says: "With the battery disconnected, the current in R₂ drops to zero immediately." Evaluate the claim. Include the time constant of the discharge and the current in R₂ just after S opens.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The uncharged capacitor acts like a wire, so branch 2 is just R₃. R₂ ∥ R₃ = (6.0 × 2.0)/(6.0 + 2.0) = 1.5 kΩ. Total = 4.5 kΩ. I₁ = 18 V ÷ 4.5 kΩ = **4.0 mA**. ΔV across the branches = (4.0 mA)(1.5 kΩ) = 6.0 V, so I₂ = 6.0 V ÷ 6.0 kΩ = **1.0 mA** and I₃ = 6.0 V ÷ 2.0 kΩ = **3.0 mA**. Junction check: 1.0 + 3.0 = 4.0 mA.

**(b)** The charged capacitor acts like a break: **I₃ = 0**. Then I₁ = I₂ = 18 V ÷ 9.0 kΩ = **2.0 mA**. ΔV across R₂ = 12 V. There is no current in R₃, so no ΔV across it, and **ΔV_C = 12 V**. Q = (40 μF)(12 V) = **480 μC**. U = ½(40 × 10⁻⁶ F)(12 V)² = **2.88 mJ** (2.9 mJ).

**(c)** The claim is wrong. Opening S removes the battery branch, but C is still connected in a loop with R₃ and R₂. The capacitor now drives the current: just after S opens, I = 12 V ÷ (2.0 + 6.0) kΩ = **1.5 mA** in R₂ (in the same direction as before, J to K) and in R₃ (reversed). The discharge time constant uses the resistance in the discharge path: τ = (8.0 × 10³ Ω)(40 × 10⁻⁶ F) = **0.32 s**. The current in R₂ then falls smoothly towards zero; after about 0.32 s the charge on C is about 37% of 480 μC, roughly 180 μC.

| Point | What earns it |
|---|---|
| 1 | (a) Treats the uncharged capacitor as a wire, giving I₁ = 4.0 mA |
| 1 | (a) I₂ = 1.0 mA and I₃ = 3.0 mA, consistent with the junction rule |
| 1 | (b) I₃ = 0 and I₁ = I₂ = 2.0 mA |
| 1 | (b) ΔV_C = 12 V, justified by zero ΔV across R₃ |
| 1 | (b) Q = 480 μC and U = 2.88 mJ |
| 1 | (c) Rejects the claim: C drives current through R₃ and R₂ after S opens |
| 1 | (c) τ = 0.32 s using R₂ + R₃, and initial current 1.5 mA |

Carry forward an error in ΔV_C from (b) into (c) once. Do not award the τ point for using R₁, which is no longer in a closed loop.
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** re-read "Capacitors in combination" in the [study guide](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-study-guide/) and redo Worked example 1.
- **Q3 or Q7 wrong:** use the two snapshots in "Capacitors in circuits with branches" and work through Worked example 2 again.
- **Q4 or Q6 wrong:** revisit "The time constant τ = RC" and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-checklist/).
