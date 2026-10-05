---
resourceId: "mb-ap-physcem-11.5-practice"
title: "Compound Direct Current Circuits: Practice Questions (Physics C: E&M 11.5)"
description: "Seven original Marlbridge practice questions on compound DC circuits: equivalent resistance, bulb brightness, internal resistance, meters and battery data, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.5"]
resourceType: "practice-questions"
prerequisites:
  - "Series and parallel rules, and the model of a real battery"
prerequisiteResources: ["mb-ap-physcem-11.5-study-guide"]
learningObjectives:
  - "Combine resistors in series and parallel and analyse every branch of a network"
  - "Predict changes in brightness when a path is added"
  - "Find internal resistance and emf from measurements"
  - "Explain how meter placement and meter resistance affect readings"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "No constants needed. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.5-study-guide", "mb-ap-physcem-11.5-revision-notes", "mb-ap-physcem-11.5-checklist"]
next: "mb-ap-physcem-11.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 is symbolic; Question 7 uses a set of fictional measurements."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Unless a question says otherwise, batteries, wires and meters are ideal, and bulbs behave as resistors of fixed resistance. All data are invented for practice. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A 2.0 Ω resistor is connected in series with a parallel pair made of a 6.0 Ω resistor and a 3.0 Ω resistor. What is the equivalent resistance of the combination?

- (A) 4.0 Ω
- (B) 11 Ω
- (C) 1.0 Ω
- (D) 2.5 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The parallel pair: 1/R_p = 1/6.0 + 1/3.0 = 0.50 Ω⁻¹, so R_p = 2.0 Ω. In series with 2.0 Ω: R_eq = 2.0 + 2.0 = 4.0 Ω.

- (B) adds all three as if they were in series.
- (C) treats all three as parallel: 1/2.0 + 1/6.0 + 1/3.0 = 1.0 Ω⁻¹.
- (D) adds 0.50 to 2.0 without inverting: 0.50 Ω⁻¹ is 1/R_p, not R_p.
</details>

## Question 2 (multiple choice · core)

An ideal battery is connected to bulb X. X is in series with a parallel pair of bulbs, Y and Z. Bulb Z has a switch S in series with it. All three bulbs are identical. S is initially open, then closed. What happens to the brightness of X and of Y?

- (A) X gets brighter; Y gets dimmer.
- (B) X gets brighter; Y stays the same.
- (C) X and Y both get dimmer.
- (D) X stays the same; Y gets dimmer.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Closing S adds a parallel path, so the resistance of the Y–Z group falls from R to R/2 and R_eq falls from 2R to 1.5R. The total current, which all passes through X, rises, so X gets brighter. ΔV across X rises, and the battery's emf is fixed, so ΔV across the Y–Z group falls; Y gets dimmer. (With ℰ = 12 V, ΔV across X goes from 6.0 V to 8.0 V and across Y from 6.0 V to 4.0 V.)

- (B) forgets that the potential difference across the parallel group changes when X takes a bigger share of the emf.
- (C) assumes that sharing current with Z must dim everything; but X carries the larger total current.
- (D) treats X as if it were connected directly across the ideal battery.
</details>

## Question 3 (multiple choice · core)

A student measures the terminal voltage of a cell. When the cell delivers 0.30 A, the terminal voltage is 1.45 V. When it delivers 0.80 A, the terminal voltage is 1.30 V. What is the internal resistance of the cell?

- (A) 0.30 Ω
- (B) 4.8 Ω
- (C) 1.6 Ω
- (D) 0.19 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ΔV = ℰ − Ir, so a change in current changes the terminal voltage by r × (change in I): r = (1.45 − 1.30) ÷ (0.80 − 0.30) = 0.15 ÷ 0.50 = 0.30 Ω. (The emf is then 1.45 + 0.30 × 0.30 = 1.54 V.)

- (B) is 1.45 ÷ 0.30, the resistance of the external load in the first test, not of the cell.
- (C) is 1.30 ÷ 0.80, the load resistance in the second test.
- (D) divides the voltage change by one current (0.15 ÷ 0.80) instead of by the change in current.
</details>

## Question 4 (calculation · core)

A 2.0 Ω resistor is connected to an ideal 3.0 V battery. (a) What current should flow? (b) A student measures the current with an ammeter of resistance 0.50 Ω placed in series. What does the ammeter read, and by what percentage is this below the true value? (c) The student instead connects the same ammeter in parallel with the resistor. What happens? (d) What ammeter resistance would keep the reading within 1% of the true value?

<details>
<summary>Worked solution</summary>

1. (a) I = 3.0 ÷ 2.0 = **1.5 A**.
2. (b) The meter adds 0.50 Ω in series: I = 3.0 ÷ 2.5 = **1.2 A**, which is (1.5 − 1.2) ÷ 1.5 = **20% low**.
3. (c) The ammeter and resistor both connect directly across the battery. The ammeter carries 3.0 ÷ 0.50 = **6.0 A** (it acts almost as a short circuit), and the reading tells you nothing about the resistor's own current of 1.5 A. The large current could damage the meter.
4. (d) Need 3.0/(2.0 + R_A) ≥ 0.99 × 1.5, so 2.0 + R_A ≤ 2.0/0.99, giving **R_A ≤ 0.020 Ω**, about 1% of the resistance in the loop.

Suggested mark points (4): 1 for 1.5 A; 1 for 1.2 A with the 20% error; 1 for explaining that the parallel ammeter is a low-resistance path with a large current; 1 for R_A ≤ 0.020 Ω (accept "about 0.02 Ω").

Common error in (c): saying the ammeter reads 1.5 A. A meter in parallel does not measure the current in the element beside it.
</details>

## Question 5 (calculation · core)

A battery of emf 18 V and internal resistance 1.0 Ω is connected to a 5.0 Ω resistor R₁ in series with a parallel pair: R₂ = 12 Ω and R₃ = 6.0 Ω. Find (a) the battery current, (b) the terminal voltage, (c) the current in R₂ and in R₃, (d) the power delivered to the external circuit and the power dissipated inside the battery.

<details>
<summary>Worked solution</summary>

1. Parallel pair: R_p = (12 × 6.0) ÷ 18 = 4.0 Ω. Total resistance including r: 1.0 + 5.0 + 4.0 = 10 Ω.
2. (a) I = 18 ÷ 10 = **1.8 A**.
3. (b) ΔV_terminal = 18 − (1.8)(1.0) = **16.2 V**. Check: (1.8)(5.0 + 4.0) = 16.2 V.
4. (c) ΔV across the pair = (1.8)(4.0) = 7.2 V. I₂ = 7.2 ÷ 12 = **0.60 A**; I₃ = 7.2 ÷ 6.0 = **1.2 A**. They add to 1.8 A.
5. (d) External: (16.2)(1.8) = **29.2 W**. Internal: (1.8)²(1.0) = **3.24 W**. Total 32.4 W = ℰI.

Suggested mark points (5): 1 for R_p = 4.0 Ω; 1 for including r in the total resistance and I = 1.8 A; 1 for 16.2 V; 1 for both branch currents; 1 for both powers.

Common error: leaving out r, which gives I = 2.0 A and a terminal voltage of 18 V.
</details>

## Question 6 (constructed response · core)

A battery of emf ℰ and internal resistance r is connected to N identical bulbs, each of resistance R, all in parallel with one another across the battery terminals.

(a) Write the equivalent resistance of the bulbs and explain, in terms of paths, why it decreases as N increases.
(b) Derive an expression for the terminal voltage ΔV in terms of ℰ, R, r and N.
(c) Use your answer to describe how the brightness of each bulb changes as more bulbs are added. Compare with an ideal battery.
(d) Sketch ΔV against N, showing its behaviour for small and very large N.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R_eq = R/N. Each extra bulb is another path between the same two points, so for the same ΔV more charge per second can flow; the total current rises and the equivalent resistance falls.

**(b)** I = ℰ/(r + R/N). Then ΔV = ℰ − Ir = ℰ − ℰr/(r + R/N). Multiply top and bottom by N and simplify:
**ΔV = ℰR/(R + Nr)**.

**(c)** Each bulb has ΔV across it, so its power is (ΔV)²/R, which falls as N rises: every bulb gets dimmer as bulbs are added. For example, with ℰ = 6.0 V, R = 12 Ω and r = 1.0 Ω, ΔV is 5.54 V, 5.14 V and 4.50 V for N = 1, 2 and 4. With an ideal battery (r = 0), ΔV = ℰ for every N, so the brightness of each bulb does not change.

**(d)** ΔV starts at ℰR/(R + r), just below ℰ, at N = 1 and decreases smoothly towards zero as N becomes very large, never reaching it. (Treating N as continuous, the curve has the shape of 1/(R + Nr).)

| Point | What earns it |
|---|---|
| 1 | R_eq = R/N with a reason based on extra parallel paths |
| 1 | Correct current I = ℰ/(r + R/N), with r in series with the bulbs |
| 1 | Correct algebra to ΔV = ℰR/(R + Nr) |
| 1 | Brightness of each bulb decreases, justified from ΔV or P = (ΔV)²/R |
| 1 | Ideal-battery comparison: ΔV = ℰ, brightness unchanged |
| 1 | Sketch: decreasing, starting just below ℰ, approaching zero for large N |

Accept the terminal voltage written as IR/N. Carry forward an error in (b) into (c) and (d) once.
</details>

## Question 7 (constructed response · stretch)

A student wants to find the emf and internal resistance of a battery. She connects the battery to a variable resistor, records the current I and the terminal voltage ΔV, and changes the resistance between readings. Her (fictional) results are:

| I (A) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| ΔV (V) | 4.27 | 4.01 | 3.79 | 3.53 | 3.31 |

(a) State where the ammeter and voltmeter should be connected.
(b) Explain why a graph of ΔV against I should be a straight line, and what its gradient and vertical intercept represent.
(c) Use the data to find ℰ and r.
(d) Estimate the current if the terminals were joined by a wire of negligible resistance, and comment on whether this would be a sensible measurement to make.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The ammeter in series with the battery and variable resistor; the voltmeter in parallel across the battery terminals (equivalently, across the variable resistor).

**(b)** ΔV = ℰ − Ir has the form y = c + mx with y = ΔV and x = I. The gradient is −r and the vertical intercept (I = 0) is ℰ.

**(c)** A best-fit line through the points has gradient (3.31 − 4.27) ÷ (1.00 − 0.20) = −1.20 V/A, so **r = 1.2 Ω**. The intercept is **ℰ ≈ 4.50 V**. (A least-squares fit gives the same values to 3 significant figures.)

**(d)** At ΔV = 0, I = ℰ/r = 4.50 ÷ 1.20 ≈ **3.8 A**. This is not sensible: a near short circuit transfers energy at a high rate inside the battery, heating it, and may damage it. It is also beyond the range of the data, so it is an extrapolation.

| Point | What earns it |
|---|---|
| 1 | Ammeter in series and voltmeter in parallel across the terminals |
| 1 | Links ΔV = ℰ − Ir to a straight line |
| 1 | Gradient = −r and intercept = ℰ |
| 1 | r = 1.2 Ω from a gradient using widely spaced points or a best-fit line |
| 1 | ℰ ≈ 4.5 V from the intercept |
| 1 | Short-circuit current ≈ 3.8 A with a safety or extrapolation comment |

Accept r from 1.1 Ω to 1.3 Ω and ℰ from 4.45 V to 4.55 V if found from a hand-drawn best-fit line.
</details>

## How did you do?

- **Q1 or Q5 wrong:** redo Worked example 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/), step by step.
- **Q2 wrong:** re-read "Brightness of bulbs in compound circuits" and follow the order R_eq → I → ΔV → P.
- **Q3, Q6 or Q7 wrong:** revisit "Real batteries and real wires" and Worked example 2.
- **Q4 wrong:** re-read "Measuring current and potential difference".

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-checklist/).
