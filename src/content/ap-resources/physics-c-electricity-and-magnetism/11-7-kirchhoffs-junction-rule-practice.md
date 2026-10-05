---
resourceId: "mb-ap-physcem-11.7-practice"
title: "Kirchhoff's Junction Rule: Practice Questions (Physics C: E&M 11.7)"
description: "Seven original Marlbridge practice questions on Kirchhoff's junction rule: junction and closed-region currents, multi-loop circuits, a bridge circuit and a lab test, with suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.7"]
resourceType: "practice-questions"
prerequisites:
  - "The junction rule and the loop rule"
prerequisiteResources: ["mb-ap-physcem-11.7-study-guide"]
learningObjectives:
  - "Apply the junction rule at junctions and to closed regions, interpreting negative currents"
  - "Combine junction and loop equations to solve multi-loop circuits"
  - "Use node potentials to solve a circuit that is not series-parallel"
  - "Plan and analyse a measurement that tests the junction rule"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "All batteries, wires and meters are ideal unless stated. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.7-study-guide", "mb-ap-physcem-11.7-revision-notes", "mb-ap-physcem-11.7-checklist"]
next: "mb-ap-physcem-11.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 is an experimental design and graphing question; Question 7 is a stretch circuit."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. In every question, batteries, wires and meters are ideal unless the question says otherwise, and current means conventional current. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

Four wires meet at a junction. A current of 1.6 A flows into the junction along wire 1 and 0.9 A flows in along wire 2. A current of 0.7 A flows out along wire 3. What is the current in wire 4?

- (A) 1.4 A, out of the junction
- (B) 1.8 A, out of the junction
- (C) 1.8 A, into the junction
- (D) 3.2 A, out of the junction

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Total in = 1.6 + 0.9 = 2.5 A. Out so far = 0.7 A. Charge cannot build up at the junction, so wire 4 must carry 2.5 − 0.7 = 1.8 A **out**.

- (A) swaps the directions of wires 2 and 3 (wire 2 out, wire 3 in): 1.6 + 0.7 − 0.9 = 1.4 A.
- (C) has the right size but the wrong direction: 4.3 A would enter and only 0.7 A leave.
- (D) adds all three sizes and ignores direction.
</details>

## Question 2 (multiple choice · core)

A current I reaches a junction where the wire splits into two branches. One branch has resistance R and the other has resistance 2R. The branches rejoin at a second junction. What are the currents in the two branches?

- (A) I/2 in each branch
- (B) I/3 in R and 2I/3 in 2R
- (C) 2I/3 in R and I/3 in 2R
- (D) I in each branch

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Both branches join the same two junctions, so they have the same potential difference ΔV across them. The branch currents are ΔV/R and ΔV/(2R), so the R branch carries twice the current of the 2R branch. The junction rule says the two add to I: 2x + x = I, so x = I/3. The R branch carries 2I/3 and the 2R branch carries I/3.

- (A) assumes an equal split, which is true only for identical branches.
- (B) is upside down: more current takes the **lower**-resistance path.
- (D) breaks the junction rule: 2I would leave a junction that only I enters.
</details>

## Question 3 (multiple choice · core)

Three wires meet at a junction and the currents are steady. In 2.0 s, 6.0 C of charge enters the junction along wire 1 and 2.0 C leaves along wire 2. What is the current in wire 3?

- (A) 4.0 A, out of the junction
- (B) 2.0 A, into the junction
- (C) 3.0 A, out of the junction
- (D) 2.0 A, out of the junction

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The junction cannot store charge, so 6.0 − 2.0 = 4.0 C must leave along wire 3 in the same 2.0 s. The current is 4.0 C ÷ 2.0 s = 2.0 A, out of the junction. Equivalently, I₁ = 3.0 A in and I₂ = 1.0 A out, so I₃ = 2.0 A out.

- (A) gives the charge (4.0 C) as if it were the current; it forgets to divide by the time.
- (B) has the wrong direction: charge would pile up at 4.0 C/s.
- (C) uses only wire 1 (6.0 C ÷ 2.0 s) and ignores the charge leaving along wire 2.
</details>

## Question 4 (calculation · core)

On a circuit board, three junctions P, Q and R are joined by wires. A current of 6.0 mA enters P from the rest of the circuit. A current of 2.0 mA flows from P to Q. A wire joins P to R, and another wire joins R to Q. A current of 3.5 mA leaves Q to the rest of the circuit. The only other wire at R goes to one plate of a capacitor.

(a) Find the current in wire PR and its direction.
(b) Find the current in wire RQ and its direction.
(c) Find the current in the capacitor wire and its direction.
(d) The currents stay constant for 20 ms. By how much does the charge on the capacitor plate change?
(e) Use a closed region round P, Q and R to check your answers.

<details>
<summary>Worked solution</summary>

1. (a) Junction P: 6.0 mA in = 2.0 mA (to Q) + I_PR. So **I_PR = 4.0 mA, from P to R**.
2. (b) Junction Q: 2.0 mA + I_RQ (assumed R to Q) = 3.5 mA. So **I_RQ = 1.5 mA, from R to Q**.
3. (c) Junction R: 4.0 mA in = 1.5 mA (to Q) + I_cap. So **I_cap = 2.5 mA, from R towards the capacitor plate**.
4. (d) Δq = IΔt = (2.5 × 10⁻³ A)(0.020 s) = **5.0 × 10⁻⁵ C (50 μC), an increase in positive charge on that plate**.
5. (e) Wires crossing a boundary round P, Q and R: 6.0 mA in; 3.5 mA + 2.5 mA = 6.0 mA out. In equals out, so the answers are consistent.

Suggested mark points (5): 1 each for (a), (b) and (c) with directions; 1 for 50 μC with the sign; 1 for a closed-region check naming the three boundary wires.

Common error: thinking (d) breaks the junction rule. Charge collects on the capacitor **plate**, not at junction R.
</details>

## Question 5 (constructed response · core)

A battery with emf 9.0 V and internal resistance 0.50 Ω is connected in series with R₁ = 2.5 Ω to junction X. From X, two branches, R₂ = 4.0 Ω and R₃ = 12.0 Ω, run to junction Y, which connects back to the battery.

(a) Write one junction equation and two loop equations for the currents I₁ (battery), I₂ (R₂) and I₃ (R₃).
(b) Solve for the three currents.
(c) Find the terminal potential difference of the battery.
(d) Check I₁ using equivalent resistance, and check that power supplied equals power dissipated.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Junction X: **I₁ = I₂ + I₃**.
Loop through the battery, r, R₁ and R₂: **9.0 − 0.50I₁ − 2.5I₁ − 4.0I₂ = 0**, so 3.0I₁ + 4.0I₂ = 9.0.
Loop through R₂ and R₃: **4.0I₂ − 12.0I₃ = 0**, so I₂ = 3I₃.

**(b)** I₁ = 3I₃ + I₃ = 4I₃. Then 3.0(4I₃) + 4.0(3I₃) = 24I₃ = 9.0, so **I₃ = 0.375 A**, **I₂ = 1.125 A** and **I₁ = 1.5 A**.

**(c)** ΔV_terminal = ℰ − I₁r = 9.0 − (1.5)(0.50) = **8.25 V**.

**(d)** R₂ ∥ R₃ = (4.0 × 12.0)/16.0 = 3.0 Ω. Total resistance = 0.50 + 2.5 + 3.0 = 6.0 Ω, so I₁ = 9.0/6.0 = 1.5 A. ✓
Supplied: ℰI₁ = 9.0 × 1.5 = 13.5 W. Dissipated: r: (1.5)²(0.50) = 1.125 W; R₁: (1.5)²(2.5) = 5.625 W; R₂: (1.125)²(4.0) = 5.0625 W; R₃: (0.375)²(12.0) = 1.6875 W. Total = 13.5 W. ✓

| Point | What earns it |
|---|---|
| 1 | Correct junction equation at X |
| 1 | Loop equation including the internal resistance |
| 1 | Second loop equation (R₂ and R₃ branches) with correct signs |
| 1 | All three currents correct, with units |
| 1 | Terminal potential difference 8.25 V |
| 1 | Both checks shown: R_eq gives 1.5 A, and 13.5 W supplied equals 13.5 W dissipated |

Accept a node-potential method (V_X − V_Y = 4.5 V) in place of the loop equations.
</details>

## Question 6 (constructed response · core · experimental)

A student wants to test the junction rule. A battery is connected across two parallel branches: a fixed resistor and a variable resistor. Ammeter A₁ is in the wire from the battery, before the split; A₂ is in the variable-resistor branch and A₃ is in the fixed-resistor branch. The student records these readings (precision ±0.1 mA):

| Setting | I₁ (mA) | I₂ (mA) | I₃ (mA) |
|---|---|---|---|
| 1 | 32.0 | 12.1 | 20.0 |
| 2 | 35.2 | 15.0 | 20.1 |
| 3 | 38.0 | 18.2 | 19.9 |
| 4 | 43.2 | 22.9 | 20.2 |
| 5 | 49.9 | 30.1 | 20.0 |

(a) Explain how the ammeters must be connected and why.
(b) State which quantities to plot to test the junction rule with a straight-line graph, and what the rule predicts for the slope and intercept.
(c) Plot the graph and find the slope of the best-fit line.
(d) The ammeters are not ideal. Does this affect the test? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each ammeter goes **in series** in its branch, so the whole branch current passes through it. In parallel, it would create a new path and change the circuit.

**(b)** Plot I₁ on the vertical axis against I₂ + I₃ on the horizontal axis. The junction rule predicts **I₁ = I₂ + I₃**: a straight line through the origin with **slope 1**.

**(c)** The values of I₂ + I₃ are 32.1, 35.1, 38.1, 43.1 and 50.1 mA. A least-squares fit gives a slope of **0.99** and an intercept of about 0.2 mA. Each I₁ differs from I₂ + I₃ by 0.2 mA or less, within the reading precision, so the data support the rule. A hand-drawn line should give a slope close to 1.

**(d)** No, not for this test. Non-ideal ammeters add a little resistance and change the sizes of the currents slightly, but the junction rule applies to whatever currents are actually present. All three meters measure the real currents at the junction.

| Point | What earns it |
|---|---|
| 1 | Ammeters in series, with a reason |
| 1 | Correct axes chosen (I₁ against I₂ + I₃, or equivalent) |
| 1 | Prediction stated: slope 1, intercept 0 |
| 1 | Graph with labelled axes, units and a sensible scale; points plotted correctly |
| 1 | Slope from the best-fit line close to 1, compared with the prediction |
| 1 | Correct reasoning for (d) |

Accept plotting I₁ − (I₂ + I₃) against setting number, predicting zero within uncertainty.
</details>

## Question 7 (constructed response · stretch)

In Figure 1 an ideal 10.0 V battery is connected between junctions A and B. Junction C is joined to A by R₁ = 10 Ω and to B by R₂ = 20 Ω. Junction D is joined to A by R₃ = 20 Ω and to B by R₄ = 10 Ω. R₅ = 10 Ω joins C and D.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="jq7-title jq7-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="jq7-title">Bridge circuit for Question 7</title>
<desc id="jq7-desc">A battery on the far left, positive terminal at the top, labelled 10.0 volts. Its top wire runs right to junction A at the top centre; its bottom wire runs right to junction B at the bottom centre. Junctions C on the left and D on the right are level with each other halfway down, so A, C, B and D form a diamond. Resistor R one, 10 ohms, joins A and C. Resistor R two, 20 ohms, joins C and B. Resistor R three, 20 ohms, joins A and D. Resistor R four, 10 ohms, joins D and B. Resistor R five, 10 ohms, runs horizontally between C and D.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="50" y1="50" x2="280" y2="50"/><line x1="50" y1="50" x2="50" y2="164"/><line x1="32" y1="164" x2="68" y2="164" stroke-width="2.5"/><line x1="41" y1="176" x2="59" y2="176" stroke-width="5"/><line x1="50" y1="176" x2="50" y2="290"/><line x1="50" y1="290" x2="280" y2="290"/>
<line x1="280" y1="50" x2="241.2" y2="88.8"/><polyline transform="rotate(-45 220 110)" points="190,110 195,100 205,120 215,100 225,120 235,100 245,120 250,110"/><line x1="198.8" y1="131.2" x2="160" y2="170"/>
<line x1="160" y1="170" x2="198.8" y2="208.8"/><polyline transform="rotate(45 220 230)" points="190,230 195,220 205,240 215,220 225,240 235,220 245,240 250,230"/><line x1="241.2" y1="251.2" x2="280" y2="290"/>
<line x1="280" y1="50" x2="318.8" y2="88.8"/><polyline transform="rotate(45 340 110)" points="310,110 315,100 325,120 335,100 345,120 355,100 365,120 370,110"/><line x1="361.2" y1="131.2" x2="400" y2="170"/>
<line x1="400" y1="170" x2="361.2" y2="208.8"/><polyline transform="rotate(-45 340 230)" points="310,230 315,220 325,240 335,220 345,240 355,220 365,240 370,230"/><line x1="318.8" y1="251.2" x2="280" y2="290"/>
<line x1="160" y1="170" x2="250" y2="170"/><polyline points="250,170 255,160 265,180 275,160 285,180 295,160 305,180 310,170"/><line x1="310" y1="170" x2="400" y2="170"/>
</g>
<circle cx="280" cy="50" r="5" fill="#1d2b44"/><circle cx="280" cy="290" r="5" fill="#1d2b44"/><circle cx="160" cy="170" r="5" fill="#1d2b44"/><circle cx="400" cy="170" r="5" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44">
<text x="72" y="160" font-weight="bold">+</text>
<text x="78" y="182">10.0 V</text>
<text x="280" y="36" text-anchor="middle" font-weight="bold">A</text>
<text x="280" y="318" text-anchor="middle" font-weight="bold">B</text>
<text x="146" y="166" text-anchor="end" font-weight="bold">C</text>
<text x="414" y="166" font-weight="bold">D</text>
<text x="196" y="92" text-anchor="end">R₁ = 10 Ω</text>
<text x="196" y="262" text-anchor="end">R₂ = 20 Ω</text>
<text x="364" y="92">R₃ = 20 Ω</text>
<text x="364" y="262">R₄ = 10 Ω</text>
<text x="280" y="152" text-anchor="middle">R₅ = 10 Ω</text>
</g>
</svg>
<figcaption>Figure 1. A bridge circuit. R₅ links the two middle junctions, so the resistors are not in simple series or parallel combinations.</figcaption>
</figure>

(a) Explain why you cannot find the battery current using series and parallel rules alone.
(b) Take B as 0 V. Write the junction rule at C and at D in terms of the unknown potentials V_C and V_D.
(c) Solve for V_C and V_D.
(d) Find the current in R₅ and its direction, and the current supplied by the battery.
(e) Find the equivalent resistance of the network between A and B. Compare it with the equivalent resistance when R₅ is removed, and explain the difference.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R₁ and R₂ are not in series, because R₅ also connects at C. R₁ and R₃ share only one end (A), so they are not in parallel. The same is true of every pair.

**(b)** V_A = 10.0 V and V_B = 0. Each current is (potential at start − potential at end)/R.
At C (in from A; out to B and to D): **(10 − V_C)/10 = V_C/20 + (V_C − V_D)/10**
At D (in from A and from C; out to B): **(10 − V_D)/20 + (V_C − V_D)/10 = V_D/10**

**(c)** Multiply the first by 20: 20 − 2V_C = V_C + 2V_C − 2V_D, so 5V_C − 2V_D = 20.
Multiply the second by 20: 10 − V_D + 2V_C − 2V_D = 2V_D, so 2V_C − 5V_D = −10.
Solving: **V_C = 40/7 V ≈ 5.71 V** and **V_D = 30/7 V ≈ 4.29 V**.

**(d)** I₅ = (V_C − V_D)/R₅ = (10/7 V)/(10 Ω) = **1/7 A ≈ 0.143 A, from C to D**.
Battery current = current leaving A = (10 − V_C)/10 + (10 − V_D)/20 = 3/7 + 2/7 = **5/7 A ≈ 0.714 A**.
Check at B: V_C/20 + V_D/10 = 2/7 + 3/7 = 5/7 A arrives. ✓

**(e)** R_eq = 10.0 V ÷ (5/7 A) = **14 Ω**. Without R₅, the two paths (10 + 20 = 30 Ω each) are in parallel: R_eq = **15 Ω**. Adding R₅ gives charge an extra path from C to D, so the network passes more current for the same battery and its equivalent resistance falls.

| Point | What earns it |
|---|---|
| 1 | Valid reason why the network is not series-parallel |
| 1 | Correct junction equation at C |
| 1 | Correct junction equation at D |
| 1 | V_C and V_D correct |
| 1 | I₅ = 0.143 A with direction C to D |
| 1 | Battery current 0.714 A, with a check at another junction or a loop |
| 1 | R_eq = 14 Ω and 15 Ω without R₅, with the extra-path explanation |

Accept a branch-current solution with junction and loop equations. Carry forward an error in (c) into (d) once.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Charge cannot pile up at a junction" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-study-guide/).
- **Q4 wrong:** work through Worked example 1 again, including the closed-region check.
- **Q2 or Q5 wrong:** revisit "Combining the junction and loop rules" and Worked example 2.
- **Q6 incomplete:** re-read "Testing the junction rule in the lab".
- **Q7 incomplete:** study "The same circuit with node potentials", then try again.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-checklist/).
