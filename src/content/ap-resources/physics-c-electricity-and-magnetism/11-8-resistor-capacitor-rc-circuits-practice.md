---
resourceId: "mb-ap-physcem-11.8-practice"
title: "Resistor-Capacitor (RC) Circuits: Practice Questions (Physics C: E&M 11.8)"
description: "Seven original Marlbridge practice questions on RC circuits: capacitor networks, charging and discharging, time constants, multi-branch circuits and a linearised graph, with suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.8"]
resourceType: "practice-questions"
prerequisites:
  - "Capacitor combinations and the RC charging and discharging equations"
prerequisiteResources: ["mb-ap-physcem-11.8-study-guide"]
learningObjectives:
  - "Find equivalent capacitance and the charge, potential difference and energy for each capacitor"
  - "Use exponential solutions and the time constant to find times, charges, currents and energies"
  - "Find currents just after a switch closes and after a long time in a multi-branch circuit"
  - "Linearise discharge data to find a time constant and an unknown capacitance"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Batteries, wires and meters are ideal unless stated. e ≈ 2.718. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.8-study-guide", "mb-ap-physcem-11.8-revision-notes", "mb-ap-physcem-11.8-checklist"]
next: "mb-ap-physcem-11.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 needs the junction and loop rules together; Question 7 is a graphing question."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. In every question, batteries, wires and meters are ideal unless stated, and capacitors start uncharged unless stated. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

Capacitors of 2.0 μF, 3.0 μF and 6.0 μF are connected in series. What is their equivalent capacitance?

- (A) 1.0 μF
- (B) 2.0 μF
- (C) 3.7 μF
- (D) 11 μF

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 1/C_eq = 1/2.0 + 1/3.0 + 1/6.0 = 3/6 + 2/6 + 1/6 = 1, so C_eq = 1.0 μF. It is smaller than the smallest capacitor, as series capacitance must be.

- (B) assumes the group equals its smallest member. C_eq must be **less** than 2.0 μF.
- (C) is the average of the three values, which has no physical meaning here.
- (D) adds the values. That is the rule for capacitors in **parallel**.
</details>

## Question 2 (multiple choice · core)

A charged capacitor discharges through a resistor. What fraction of its initial stored energy is left after two time constants?

- (A) 0.14
- (B) 0.25
- (C) 0.018
- (D) 0.37

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The charge falls as e^(−t/τ), so after 2τ the charge fraction is e⁻² = 0.135. The energy U = q²/(2C) depends on q², so the energy fraction is (e⁻²)² = e⁻⁴ = 0.018.

- (A) is the fraction of **charge** (or potential difference) left, not energy.
- (B) assumes the energy halves each time constant: (1/2)² = 0.25. The decay is exponential with base e, not halving.
- (D) is the charge fraction after **one** time constant.
</details>

## Question 3 (multiple choice · core)

An uncharged capacitor is charged by a battery through a resistor. The resistor is replaced by one with twice the resistance; the battery and capacitor are unchanged. How do the initial current and the time to reach half the final charge change?

- (A) Initial current unchanged; time doubles
- (B) Initial current halves; time doubles
- (C) Initial current halves; time unchanged
- (D) Initial current doubles; time halves

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Just after closing, the uncharged capacitor acts like a wire, so I₀ = ℰ/R: doubling R halves I₀. Half charge occurs at t = τ ln 2 = RC ln 2, which is proportional to R, so the time doubles. The final charge Cℰ does not depend on R.

- (A) forgets that the resistor alone limits the initial current.
- (C) forgets that τ = RC depends on R.
- (D) has both effects the wrong way round: more resistance means less current and a slower process.
</details>

## Question 4 (calculation · core)

C₁ = 4.0 μF and C₂ = 12.0 μF are connected in series. This pair is connected in parallel with C₃ = 5.0 μF, and the whole group is connected across a 24.0 V battery.

(a) Find the equivalent capacitance of the group.
(b) Find the charge and potential difference for each capacitor.
(c) Which capacitor stores the most energy? Show that the energies add to the total.

<details>
<summary>Worked solution</summary>

1. (a) Series pair: 1/C₁₂ = 1/4.0 + 1/12.0 = 4/12, so C₁₂ = 3.0 μF. With C₃ in parallel: **C_eq = 3.0 + 5.0 = 8.0 μF**.
2. (b) The pair and C₃ each have 24.0 V across them. Series pair: Q₁ = Q₂ = (3.0 μF)(24.0 V) = **72 μC**, so ΔV₁ = 72/4.0 = **18 V** and ΔV₂ = 72/12.0 = **6.0 V** (sum 24 V). C₃: **Q₃ = (5.0 μF)(24.0 V) = 120 μC**, ΔV₃ = **24 V**.
3. (c) U₁ = ½(4.0 μF)(18 V)² = 648 μJ; U₂ = ½(12.0 μF)(6.0 V)² = 216 μJ; U₃ = ½(5.0 μF)(24 V)² = 1440 μJ. **C₃ stores the most.** Total = 2304 μJ = ½(8.0 μF)(24 V)² ✓.

Suggested mark points (5): 1 for C₁₂ = 3.0 μF; 1 for C_eq = 8.0 μF; 1 for equal 72 μC on C₁ and C₂; 1 for 18 V and 6.0 V (smaller capacitor has the larger ΔV); 1 for the energy comparison and total.

Common error: giving C₁ and C₂ charges in the ratio 4 : 12. In series they **must** carry the same charge; it is their potential differences that differ.
</details>

## Question 5 (calculation · core)

A 220 μF capacitor charged to 15.0 V is connected across a 4.7 kΩ resistor at t = 0.

(a) Find the time constant and the current just after the connection is made.
(b) Find the time at which the potential difference across the capacitor has fallen to 3.0 V.
(c) How much energy has been dissipated in the resistor by that time?

<details>
<summary>Worked solution</summary>

1. (a) τ = RC = (4.7 × 10³ Ω)(220 × 10⁻⁶ F) = **1.03 s**. At t = 0 the capacitor still has 15.0 V, so I₀ = 15.0 V ÷ 4.7 kΩ = **3.19 mA**.
2. (b) 3.0 = 15.0 e^(−t/τ), so e^(−t/τ) = 1/5 and t = τ ln 5 = 1.034 s × 1.609 = **1.66 s**.
3. (c) Energy dissipated = energy lost by the capacitor = ½C(15.0² − 3.0²) = ½(220 × 10⁻⁶)(216) = **2.38 × 10⁻² J (23.8 mJ)**. This is 96% of the initial 24.75 mJ, although the potential difference has fallen only to 20%.

Suggested mark points (4): 1 for τ; 1 for I₀ using the full initial potential difference; 1 for t = τ ln 5; 1 for 23.8 mJ from the change in ½CΔV².

Common error: using log₁₀ instead of ln. That gives t = 0.72 s, which is 2.3 times too small.
</details>

## Question 6 (constructed response · stretch)

A 12.0 V battery and switch S are connected in series with R₁ = 2.0 kΩ to junction P. From P, two branches return to the battery: one through R₂ = 6.0 kΩ, the other through R₃ = 3.0 kΩ in series with an uncharged C = 10 μF capacitor. S closes at t = 0.

(a) Find the currents in R₁, R₂ and R₃ just after S closes.
(b) Find the currents in R₁, R₂ and R₃ a long time later, and the final charge on C.
(c) Sketch the current in R₃ against time, labelling its initial value.
(d) Using q for the charge on C and I₃ = dq/dt, apply the junction and loop rules to show that R_T dq/dt + q/C = 9.0 V, where R_T = R₃ + R₁R₂/(R₁ + R₂). Hence find the time constant.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** C acts like a wire, so R₃ is in parallel with R₂: (6.0 × 3.0)/9.0 = 2.0 kΩ. Total 4.0 kΩ, so **I₁ = 3.0 mA**. ΔV across the parallel part = (3.0 mA)(2.0 kΩ) = 6.0 V, so **I₂ = 1.0 mA** and **I₃ = 2.0 mA**. Junction P: 3.0 = 1.0 + 2.0 ✓.

**(b)** No current in the capacitor branch: **I₃ = 0** and **I₁ = I₂ = 12.0 V ÷ 8.0 kΩ = 1.5 mA**. ΔV across R₂ = 9.0 V; with no current in R₃, C also has 9.0 V, so **Q = (10 μF)(9.0 V) = 90 μC**.

**(c)** An exponential decay starting at 2.0 mA at t = 0 and approaching zero, with no sudden jumps after t = 0 (it falls to about 0.74 mA at t = τ = 45 ms).

**(d)** Junction P: I₁ = I₂ + I₃. Loop with R₁ and R₂: 12.0 = I₁R₁ + I₂R₂. Loop with R₂, R₃ and C: I₂R₂ = I₃R₃ + q/C.
Substituting I₁ into the first loop: 12.0 = (I₂ + I₃)R₁ + I₂R₂, so I₂ = (12.0 − I₃R₁)/(R₁ + R₂).
Then I₂R₂ = 12.0R₂/(R₁ + R₂) − I₃R₁R₂/(R₁ + R₂) = I₃R₃ + q/C.
Rearranging: [R₃ + R₁R₂/(R₁ + R₂)] dq/dt + q/C = 12.0 × 6.0/8.0 = **9.0 V**.
R_T = 3.0 + 1.5 = 4.5 kΩ, so **τ = R_T C = (4.5 × 10³)(10 × 10⁻⁶) = 0.045 s (45 ms)**.

| Point | What earns it |
|---|---|
| 1 | Capacitor treated as a wire at t = 0, giving I₁ = 3.0 mA |
| 1 | I₂ = 1.0 mA and I₃ = 2.0 mA, consistent with the junction rule |
| 1 | Long-time currents: I₃ = 0, I₁ = I₂ = 1.5 mA |
| 1 | Q = 90 μC using the 9.0 V across R₂ |
| 1 | Sketch: decaying exponential from 2.0 mA towards 0 |
| 1 | Correct junction and two loop equations written |
| 1 | Differential equation derived and τ = 45 ms |

Check on (d): the steady state of the equation, q = C(9.0 V) = 90 μC, agrees with (b).
</details>

## Question 7 (constructed response · core · experimental)

A student finds the capacitance of an unlabelled capacitor. She charges it, then at t = 0 lets it discharge through a 100 kΩ resistor, reading the potential difference with a voltmeter of resistance 10 MΩ:

| t (s) | 0 | 5.0 | 10.0 | 15.0 | 20.0 | 25.0 |
|---|---|---|---|---|---|---|
| ΔV_C (V) | 8.00 | 4.85 | 2.95 | 1.80 | 1.09 | 0.66 |

(a) Starting from the discharge equation, show which quantities to plot to get a straight line, and state what the slope represents.
(b) Plot the graph and find the slope.
(c) Find the time constant and the capacitance.
(d) Explain whether the voltmeter's resistance affects the result significantly.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ΔV_C = ΔV₀e^(−t/RC). Taking natural logs: **ln ΔV_C = ln ΔV₀ − (1/RC)t**. Plot ln ΔV_C (vertical) against t (horizontal). The slope is **−1/(RC)**; the intercept is ln ΔV₀.

**(b)** ln ΔV_C values: 2.079, 1.579, 1.082, 0.588, 0.086, −0.416. The points lie on a straight line. The best-fit slope is **−0.0997 s⁻¹** (intercept 2.079, so ΔV₀ = 8.0 V).

**(c)** τ = −1/slope = **10.0 s**. C = τ/R = 10.0 s ÷ (100 × 10³ Ω) = **1.0 × 10⁻⁴ F (100 μF)**.

**(d)** The voltmeter is a second discharge path in parallel with R. The combined resistance is 1/(1/100 kΩ + 1/10 MΩ) = 99.0 kΩ, only 1% less than 100 kΩ. So the true C is about 1% larger than calculated: not significant at this precision. A voltmeter with resistance close to 100 kΩ would give a much shorter τ and a large error.

| Point | What earns it |
|---|---|
| 1 | Takes logs correctly to get a linear relationship |
| 1 | Identifies the slope as −1/(RC) |
| 1 | Graph with labelled axes (ln(ΔV_C / 1 V) against t in s), sensible scale, points plotted |
| 1 | Slope from the best-fit line, about −0.10 s⁻¹ |
| 1 | τ ≈ 10 s and C ≈ 100 μF with units |
| 1 | Voltmeter effect explained using the parallel resistance |

Accept finding τ from the time for ΔV_C to fall to e⁻¹ × 8.00 ≈ 0.368 × 8.00 = 2.94 V (about 10 s) as a check, but the graph method uses all the data and earns full credit.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Capacitors in combination" and Worked example 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/).
- **Q2, Q3 or Q5 wrong:** revisit "Charging a capacitor through a resistor", "Discharging" and "Energy in an RC circuit".
- **Q6 incomplete:** study "Just after and long after", then Topic 11.7 on combining the junction and loop rules.
- **Q7 incomplete:** re-read "Measuring a time constant".

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-checklist/).
