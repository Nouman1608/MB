---
resourceId: "mb-ap-phys2-11.5-practice"
title: "Compound Direct Current (DC) Circuits: Practice Questions (Physics 2 11.5)"
description: "Seven original Marlbridge practice questions on equivalent resistance, compound networks, internal resistance and meters, with full solutions and suggested mark points."
course: "physics-2"
unit: 11
topics: ["11.5"]
resourceType: "practice-questions"
prerequisites:
  - "Series and parallel rules and ΔV_terminal = ℰ − Ir"
prerequisiteResources: ["mb-ap-phys2-11.5-study-guide"]
learningObjectives:
  - "Calculate the equivalent resistance of series, parallel and compound networks"
  - "Find the current in and potential difference across each resistor in a compound circuit"
  - "Use the internal resistance model of a battery, including data from measurements"
  - "Predict and justify how currents change when a circuit is altered"
  - "Describe how meters are connected and how real meters affect readings"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Batteries, wires and meters are ideal unless stated. Resistances are constant. Give answers to 2 or 3 significant figures to match the data"
related: ["mb-ap-phys2-11.5-study-guide", "mb-ap-phys2-11.5-revision-notes", "mb-ap-phys2-11.5-checklist"]
next: "mb-ap-phys2-11.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Bulbs are treated as resistors of constant resistance; brightness follows power."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: batteries, wires and meters are ideal unless the question says otherwise; every resistor and bulb has constant resistance; a brighter bulb is one that dissipates more power, P = I²R. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Resistors of 2.0 Ω, 3.0 Ω and 6.0 Ω are connected in parallel. What is their equivalent resistance?

- (A) 1.0 Ω
- (B) 11 Ω
- (C) 3.7 Ω
- (D) 0.091 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 1/R_eq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 1 Ω⁻¹, so R_eq = 1.0 Ω. This is smaller than the smallest resistor, as it must be for a parallel group.

- (B) adds the resistances, which is the series rule.
- (C) is the mean of the three values, 11 Ω ÷ 3. There is no averaging rule.
- (D) is 1/11 Ω: it adds the resistances and then inverts, mixing the two rules.
</details>

## Question 2 (multiple choice · core)

Two identical bulbs, X and Y, are connected in parallel directly across an ideal battery. A third identical bulb, Z, is then connected in parallel with them. What happens to the current from the battery and to the brightness of X?

- (A) The current from the battery increases; X stays equally bright.
- (B) The current from the battery stays the same; X gets dimmer.
- (C) The current from the battery decreases; X gets dimmer.
- (D) The current from the battery increases; X gets brighter.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each bulb is connected directly across the ideal battery, so each has the full emf across it before and after Z is added. The current in X, ΔV/R, does not change, so X is equally bright. The extra branch adds another equal current, so the current from the battery rises by a factor of 3/2.

- (B) treats the battery as supplying a fixed current that is shared out. An ideal battery fixes the potential difference, not the current.
- (C) thinks an extra resistor always adds resistance. In parallel it lowers R_eq.
- (D) is right about the battery current but wrong about X: its potential difference, and so its current, are unchanged. (With a real battery X would dim slightly, because the larger current would lower the terminal voltage.)
</details>

## Question 3 (multiple choice · core)

A battery has an emf of 9.0 V. When it is connected to a resistor, the current is 0.30 A and a voltmeter across the battery's terminals reads 8.4 V. What is the internal resistance of the battery?

- (A) 2.0 Ω
- (B) 28 Ω
- (C) 30 Ω
- (D) 0.18 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ΔV_terminal = ℰ − Ir, so r = (ℰ − ΔV_terminal)/I = (9.0 V − 8.4 V) ÷ 0.30 A = 0.60 V ÷ 0.30 A = 2.0 Ω.

- (B) is 8.4 V ÷ 0.30 A: that is the external resistance, not the internal one.
- (C) is 9.0 V ÷ 0.30 A: the total resistance of the circuit, external plus internal.
- (D) multiplies the lost voltage by the current (0.60 V × 0.30 A). That gives a power in watts, not a resistance.
</details>

## Question 4 (multiple choice · core)

A student wants to measure the current in resistor R and the potential difference across it. She has an ammeter with a small resistance and a voltmeter with a large, but not infinite, resistance. Which describes the correct connections and the effect of the real voltmeter?

- (A) Ammeter in series with R; voltmeter in parallel with R. The voltmeter reading is slightly less than the potential difference across R without the voltmeter.
- (B) Ammeter in series with R; voltmeter in parallel with R. The voltmeter reading is slightly greater than the potential difference across R without the voltmeter.
- (C) Ammeter in parallel with R; voltmeter in series with R. Neither meter changes the circuit.
- (D) Ammeter in series with R; voltmeter in series with R. The voltmeter reading equals the emf.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Current is measured through the element, so the ammeter goes in series. Potential difference is measured between its ends, so the voltmeter goes in parallel. The real voltmeter adds a parallel branch, which lowers the resistance of that part of the circuit. That part then takes a smaller share of the potential difference, so the reading is slightly low.

- (B) has the right connections but the wrong direction of the effect. A parallel branch can only lower the resistance.
- (C) swaps the meters. An ammeter in parallel would short-circuit R, and a voltmeter in series would almost stop the current. Real meters always change the circuit a little.
- (D) puts the voltmeter in series. With its very large resistance it would carry almost no current, and it would not measure the potential difference across R.
</details>

## Question 5 (calculation · core)

An ideal 24 V battery is connected to resistor R₁ = 8.0 Ω. R₁ is in series with a parallel group. One branch of the group is R₂ = 6.0 Ω. The other branch is R₃ = 4.0 Ω in series with R₄ = 8.0 Ω. Calculate (a) the equivalent resistance of the circuit, (b) the current in R₁, (c) the current in R₂ and (d) the potential difference across R₃.

<details>
<summary>Worked solution</summary>

1. Branch R₃ + R₄ = 4.0 Ω + 8.0 Ω = 12 Ω.
2. Parallel group: 1/R_p = 1/6.0 + 1/12 = 3/12, so R_p = 4.0 Ω.
3. (a) R_eq = 8.0 Ω + 4.0 Ω = **12 Ω**.
4. (b) I₁ = 24 V ÷ 12 Ω = **2.0 A**.
5. Potential difference across the parallel group: ΔV_p = (2.0 A)(4.0 Ω) = 8.0 V. (Check: ΔV₁ = 16 V, and 16 V + 8.0 V = 24 V.)
6. (c) I₂ = 8.0 V ÷ 6.0 Ω = **1.33 A**.
7. Current in the R₃–R₄ branch: 8.0 V ÷ 12 Ω = 0.667 A. (Check: 1.33 A + 0.667 A = 2.0 A.)
8. (d) ΔV₃ = (0.667 A)(4.0 Ω) = **2.67 V**.

Suggested mark points (4): 1 for R_eq = 12 Ω with the R₃ + R₄ branch combined first; 1 for I₁ = 2.0 A; 1 for I₂ = 1.33 A using ΔV_p = 8.0 V; 1 for ΔV₃ = 2.67 V. Accept ΔV₃ found by sharing 8.0 V between R₃ and R₄ in the ratio 4 : 8.

Common error: combining R₂ with R₃ alone in parallel. R₃ is not in parallel with R₂, because its ends are not both connected to the junctions; only the whole R₃–R₄ branch is.
</details>

## Question 6 (constructed response · core)

Four identical bulbs, A, B, C and D, each of resistance R, are connected to an ideal battery of emf ℰ. Bulb A is in series with a parallel group. One branch of the group is bulb B. The other branch is bulbs C and D in series.

(a) Rank the brightness of the four bulbs, from brightest to dimmest. Justify your ranking.
(b) A student then connects a plain wire directly across bulb D. State whether each of A, B and C gets brighter, gets dimmer or stays the same. Justify your answers.
(c) Derive an expression for the current in A after the wire is added, in terms of ℰ and R.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** All of the current passes through A, and it then splits between the two branches. Both branches have the same potential difference, so the branch with the smaller resistance (B, resistance R) carries more current than the C–D branch (resistance 2R). C and D are in series, so they carry the same current. Ranking: **A > B > C = D**. (Values: I_A = 3ℰ/5R, I_B = 2ℰ/5R, I_C = I_D = ℰ/5R.)

**(b)** The wire short-circuits D, so D goes out. The C–D branch now has resistance R instead of 2R, so the parallel group falls from 2R/3 to R/2 and the total resistance falls from 5R/3 to 3R/2.

- **A gets brighter:** the total resistance is lower, so the current from the battery (all through A) increases.
- **B gets dimmer:** A now takes a larger share of the emf, so the potential difference across the parallel group, and the current in B, decrease (from 2ℰ/5R to ℰ/3R).
- **C gets brighter:** its branch resistance halved, so its current rises (from ℰ/5R to ℰ/3R), even though the group's potential difference fell.

**(c)** R_eq = R + R/2 = 3R/2, so I_A = ℰ ÷ (3R/2) = **2ℰ/3R**.

| Point | What earns it |
|---|---|
| 1 | A is brightest **because** it carries the total current, which divides between the branches |
| 1 | B brighter than C **because** both branches have the same ΔV and B's branch has the smaller resistance; C = D because they are in series |
| 1 | A brighter after the wire, linked to the decrease in total resistance |
| 1 | B dimmer, linked to the smaller potential difference across the parallel group |
| 1 | C brighter, linked to its branch resistance halving (or to its current rising from ℰ/5R to ℰ/3R) |
| 1 | I_A = 2ℰ/3R from R_eq = 3R/2 |

Accept correct reasoning in (b) that uses calculated currents throughout. Do not award the B point for "B dims because current is shared with C" without reference to the change in potential difference or calculated currents.
</details>

## Question 7 (constructed response · stretch)

A student investigates a battery of unknown emf and internal resistance. With a 5.0 Ω resistor connected, a voltmeter across the terminals reads 5.0 V. With a 2.0 Ω resistor instead, it reads 4.4 V.

(a) Calculate the current in each case.
(b) Use the two measurements to find the emf and internal resistance of the battery.
(c) Sketch the graph of terminal voltage against current for this battery. Label the intercept on the voltage axis and state the slope.
(d) The student says: "If I connect a thick copper wire across the terminals, the current will be enormous, because the wire has almost no resistance." Evaluate this claim, with a value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** I = ΔV/R: 5.0 V ÷ 5.0 Ω = **1.0 A**; 4.4 V ÷ 2.0 Ω = **2.2 A**.

**(b)** ΔV_terminal = ℰ − Ir for both:
ℰ − (1.0 A)r = 5.0 V and ℰ − (2.2 A)r = 4.4 V.
Subtract: (1.2 A)r = 0.60 V, so **r = 0.50 Ω**. Then ℰ = 5.0 V + (1.0 A)(0.50 Ω) = **5.5 V**.
Check: 5.5 V ÷ (2.0 Ω + 0.50 Ω) = 2.2 A. ✓

**(c)** A straight line sloping down. It crosses the voltage axis at ℰ = 5.5 V (zero current) and has slope −r = −0.50 V/A. (It would reach zero voltage at I = 11 A.)

**(d)** The claim is only partly right. The wire's resistance is tiny, but the internal resistance is still in series with it. With the wire's resistance negligible, I = ℰ/r = 5.5 V ÷ 0.50 Ω = **11 A**. That is large and dangerous, but finite: the internal resistance limits it. (Wire resistance can be ignored here only in comparison with r, the one other resistance in the loop.)

| Point | What earns it |
|---|---|
| 1 | Both currents, 1.0 A and 2.2 A |
| 1 | Sets up ℰ − Ir for both measurements |
| 1 | r = 0.50 Ω and ℰ = 5.5 V |
| 1 | Sketch: straight line with negative slope, intercept 5.5 V on the voltage axis |
| 1 | States slope = −r = −0.50 V/A |
| 1 | Evaluates the claim: internal resistance limits the current to about 11 A |

Carry forward an error from (b) into (c) and (d) once.
</details>

## How did you do?

- **Q1 or Q5 wrong:** redo Worked example 1 in the [study guide](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-study-guide/), then check which resistors share both ends.
- **Q2 or Q6 wrong:** revisit "Equivalent resistance in parallel" and the misconceptions list.
- **Q3 or Q7 wrong:** work through "Batteries: emf and internal resistance" and Worked example 2.
- **Q4 wrong:** read "Measuring current and potential difference" and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-checklist/).
