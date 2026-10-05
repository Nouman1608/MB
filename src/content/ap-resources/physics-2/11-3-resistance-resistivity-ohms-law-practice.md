---
resourceId: "mb-ap-phys2-11.3-practice"
title: "Resistance, Resistivity and Ohm's Law: Practice Questions (Physics 2 11.3)"
description: "Seven original Marlbridge practice questions on R = ρL/A, Ohm's law, ohmic and non-ohmic elements, I–ΔV graphs and planning a resistance experiment, with full solutions."
course: "physics-2"
unit: 11
topics: ["11.3"]
resourceType: "practice-questions"
prerequisites:
  - "Using R = ρL/A and I = ΔV/R with SI units"
prerequisiteResources: ["mb-ap-phys2-11.3-study-guide"]
learningObjectives:
  - "Calculate resistance from the resistivity and dimensions of a conductor"
  - "Predict factors of change in resistance and current"
  - "Find resistance from an I–ΔV graph and decide whether an element is ohmic"
  - "Plan a measurement of resistance and analyse the data"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Resistivity of copper 1.68 × 10⁻⁸ Ω·m. 1 mm = 10⁻³ m and 1 mm² = 10⁻⁶ m². Give answers to 2 or 3 significant figures to match the data"
related: ["mb-ap-phys2-11.3-study-guide", "mb-ap-phys2-11.3-revision-notes", "mb-ap-phys2-11.3-checklist"]
next: "mb-ap-phys2-11.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Check units first: convert mm, mm² and mA before calculating."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: resistivity of copper ρ = 1.68 × 10⁻⁸ Ω·m; all wires have a circular cross-section, A = π(d/2)²; "resistor" means an ohmic element unless the question says otherwise; meters are ideal. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Wire X has resistance R. Wire Y is made of the same metal, at the same temperature. Y is twice as long as X and has twice the diameter. What is the resistance of Y?

- (A) R/2
- (B) R
- (C) 2R
- (D) 8R

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** R = ρL/A. Doubling the length doubles R. Doubling the diameter makes the area 2² = 4 times larger, which divides R by 4. Overall R_Y = R × 2 ÷ 4 = R/2.

- (B) treats doubling the diameter as doubling the area, so the two changes seem to cancel. Area depends on diameter squared.
- (C) accounts for the length but ignores the change in diameter.
- (D) multiplies by the area factor instead of dividing: a wider wire has **less** resistance, not more.
</details>

## Question 2 (multiple choice · core)

A graph of current I, in **milliamperes**, against potential difference ΔV, in volts, for a resistor is a straight line through the origin. The line passes through the point (4.0 V, 160 mA). What is the resistance of the resistor?

- (A) 25 Ω
- (B) 0.025 Ω
- (C) 0.040 Ω
- (D) 40 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Convert the current: 160 mA = 0.160 A. Then R = ΔV/I = 4.0 V ÷ 0.160 A = 25 Ω. (Equivalently, the slope is 0.040 A/V and R = 1/slope = 25 Ω.)

- (B) divides 4.0 by 160 without converting mA to A.
- (C) takes the slope of the I–ΔV graph, 0.160 A ÷ 4.0 V = 0.040 A/V, as the resistance. The slope is 1/R.
- (D) divides 160 by 4.0, which is the slope in mA/V; it is still not R, and it ignores the unit conversion.
</details>

## Question 3 (multiple choice · core)

The graph of current against potential difference for a filament bulb passes through the origin and becomes less steep as ΔV increases. Which statement best explains the shape?

- (A) The resistance of the filament increases as ΔV increases, because the filament gets hotter and its resistivity rises.
- (B) The resistance of the filament decreases as ΔV increases, because the graph is still rising.
- (C) The filament is ohmic, because the graph passes through the origin.
- (D) The resistance at each point equals the slope of the curve at that point, and that slope is decreasing.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At each point R = ΔV/I. Because the curve bends towards the ΔV axis, each extra volt produces less extra current, so ΔV/I grows. The larger current heats the filament, and the resistivity of a metal increases with temperature.

- (B) confuses "the current is still increasing" with "the resistance is decreasing". I rises, but more slowly than ΔV.
- (C) passing through the origin is not enough. An ohmic element needs a **straight** line through the origin.
- (D) uses the slope of the curve. Resistance comes from ΔV/I at the point, and the slope of an I–ΔV graph is related to 1/R, not R.
</details>

## Question 4 (multiple choice · core)

An extension cable contains a copper wire 1.5 m long with a cross-sectional area of 0.50 mm². What is the resistance of this wire?

- (A) 0.050 Ω
- (B) 0.13 Ω
- (C) 5.0 × 10⁻⁵ Ω
- (D) 50 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A = 0.50 mm² = 0.50 × 10⁻⁶ m². R = ρL/A = (1.68 × 10⁻⁸ Ω·m)(1.5 m) ÷ (0.50 × 10⁻⁶ m²) = 0.0504 Ω ≈ 0.050 Ω.

- (B) treats 0.50 mm as a diameter and calculates A = π(0.25 × 10⁻³ m)². The question gives the area directly.
- (C) converts mm² to m² by multiplying by 10⁻³, the factor for mm. For area the factor is (10⁻³)² = 10⁻⁶.
- (D) converts with 10⁻⁹, the factor for mm³ (volume), not area.
</details>

## Question 5 (calculation · core)

A designer needs a 6.0 Ω resistor for a hand warmer. It will be made from alloy wire of resistivity 5.0 × 10⁻⁷ Ω·m and diameter 0.40 mm.

(a) Calculate the length of wire needed.
(b) Calculate the current when the resistor is connected across 9.0 V.
(c) The only alloy wire in stock has a diameter of 0.20 mm. What length of this wire gives the same 6.0 Ω? Explain your reasoning without repeating the full calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. Area: A = π(0.20 × 10⁻³ m)² = 1.257 × 10⁻⁷ m².
2. (a) L = RA/ρ = (6.0 Ω)(1.257 × 10⁻⁷ m²) ÷ (5.0 × 10⁻⁷ Ω·m) = **1.51 m** (1.5 m).
3. (b) I = ΔV/R = 9.0 V ÷ 6.0 Ω = **1.5 A**.
4. (c) Halving the diameter divides the area by 4, which would make R four times bigger for the same length. To keep R = 6.0 Ω, the length must also be divided by 4: L = 1.51 m ÷ 4 = **0.377 m** (0.38 m).

| Point | What earns it |
|---|---|
| 1 | Correct area from the **radius** 0.20 × 10⁻³ m (1.26 × 10⁻⁷ m²) |
| 1 | L = RA/ρ rearranged and evaluated to 1.5 m |
| 1 | I = 1.5 A with unit |
| 1 | (c) Reasoning that A falls by a factor of 4, so L must fall by a factor of 4, giving 0.38 m |

Accept a full recalculation in (c) for the final value, but the reasoning point needs the factor-of-4 argument. Common error: using the diameter in A = πr², which gives L four times too long (6.0 m).
</details>

## Question 6 (constructed response · core)

A student wants to find out whether a length of thin iron wire is ohmic over the range 0 to 3.0 V.

(a) Describe a procedure the student could use. Include a labelled description of the circuit and say what is measured and what is changed.
(b) The student's results are below. Calculate the resistance for the first and last readings.

| ΔV (V) | 0.50 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|
| I (A) | 0.25 | 0.48 | 0.68 | 0.84 | 0.97 | 1.07 |

(c) Describe the shape of the graph of I against ΔV for these data, and state whether the wire is ohmic over this range.
(d) Suggest a physical reason for the trend, and one change to the procedure that would make the wire behave more nearly ohmically.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Connect a battery, a variable resistor (or use an adjustable supply), an ammeter and the wire in a single loop. Connect a voltmeter across the ends of the wire. Change ΔV using the variable resistor; record ΔV and I for at least five values from 0 to 3.0 V. Plot I against ΔV.

**(b)** First: R = 0.50 V ÷ 0.25 A = **2.0 Ω**. Last: R = 3.0 V ÷ 1.07 A = **2.8 Ω**.

**(c)** The graph starts at the origin but curves, becoming less steep at higher ΔV (it bends towards the ΔV axis). R = ΔV/I rises from 2.0 Ω to 2.8 Ω, so the resistance is not constant and the wire is **not ohmic** over this range.

**(d)** The larger currents heat the thin wire. The resistivity of a metal increases with temperature, so R increases. Keeping the wire cool would reduce this, for example by using small currents, taking each reading quickly and switching off between readings, or placing the wire in a water bath.

| Point | What earns it |
|---|---|
| 1 | Ammeter in the loop with the wire **and** voltmeter across the wire |
| 1 | A way to vary ΔV and a range of readings recorded, then I plotted against ΔV (or R calculated for each) |
| 1 | Both resistances correct: 2.0 Ω and 2.8 Ω |
| 1 | Graph described as curved (not a straight line) and the wire judged non-ohmic, linked to R not being constant |
| 1 | Temperature rise increases resistivity, and a sensible way to limit heating |

Do not award the fourth point for "not ohmic" with no evidence from the data.
</details>

## Question 7 (constructed response · stretch)

Wires P and Q are made of the same metal and have the same length. Their I–ΔV graphs are straight lines through the origin. P's line passes through (2.0 V, 0.80 A); Q's line passes through (2.0 V, 0.40 A).

(a) Which wire has the greater resistance? Justify using the graphs.
(b) Find the ratio of the diameter of P to the diameter of Q.
(c) A student says: "Since R = ΔV/I, if I double the potential difference across P, its resistance doubles." Evaluate this claim.
(d) Wire Q is replaced by wire S. S is made of the same metal and has the same diameter as Q, but is three times as long. On the same axes, describe the line for S, giving the current at ΔV = 6.0 V.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R = ΔV/I. R_P = 2.0 V ÷ 0.80 A = 2.5 Ω and R_Q = 2.0 V ÷ 0.40 A = 5.0 Ω. **Q** has the greater resistance: its line is less steep, and the slope of an I–ΔV graph is 1/R.

**(b)** Same metal and length, so R ∝ 1/A. R_Q / R_P = 2, so A_P / A_Q = 2. Area ∝ d², so d_P / d_Q = √2 ≈ **1.41**.

**(c)** The claim is wrong for this wire. P's graph is a straight line through the origin, so it is ohmic: doubling ΔV doubles I, and R = ΔV/I stays 2.5 Ω (for example, at 4.0 V the current is 1.6 A). R depends on the material, length and area, not on the applied ΔV.

**(d)** R_S = 3 × 5.0 Ω = 15 Ω. Its line is straight, through the origin, with slope 1/15 A/V, which is one third of Q's slope. At 6.0 V, I = 6.0 V ÷ 15 Ω = **0.40 A**.

| Point | What earns it |
|---|---|
| 1 | Q has greater R, justified by ΔV/I values or by the smaller slope with slope = 1/R |
| 1 | Uses R ∝ 1/A for the same material and length to get A_P/A_Q = 2 |
| 1 | d_P/d_Q = √2 (1.4), using A ∝ d² |
| 1 | Rejects the claim: for an ohmic wire I ∝ ΔV, so R is unchanged, with supporting evidence (the straight line or a numerical check) |
| 1 | S: straight line through the origin with one third of Q's slope |
| 1 | Current 0.40 A at 6.0 V |

Carry forward an error in R_Q from (a) into (d) once.
</details>

## How did you do?

- **Q1, Q4 or Q5 wrong:** re-read "Resistance from shape and material" in the [study guide](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-study-guide/) and check your unit conversions and A = π(d/2)².
- **Q2 or Q7 wrong:** revisit "Reading resistance from a graph": the slope of I against ΔV is 1/R.
- **Q3 or Q6 wrong:** compare ohmic and non-ohmic elements and the effect of temperature on resistivity.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-checklist/).
