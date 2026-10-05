---
resourceId: "mb-ap-physcem-11.6-practice"
title: "Kirchhoff's Loop Rule: Practice Questions (Physics C: E&M 11.6)"
description: "Seven original Marlbridge practice questions on Kirchhoff's loop rule: loop equations, signs, reversed cells, potential graphs and power transfer, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.6"]
resourceType: "practice-questions"
prerequisites:
  - "The loop rule and its sign convention"
prerequisiteResources: ["mb-ap-physcem-11.6-study-guide"]
learningObjectives:
  - "Write and solve loop equations with a consistent sign convention"
  - "Find potentials at points and sketch potential against position"
  - "Analyse loops with more than one battery, including a battery being charged"
  - "Read a potential graph and reconstruct the circuit it describes"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "No constants needed. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.6-study-guide", "mb-ap-physcem-11.6-revision-notes", "mb-ap-physcem-11.6-checklist"]
next: "mb-ap-physcem-11.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 needs calculus; Question 7 starts from a graph."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Unless a question says otherwise, batteries, wires and meters are ideal, and resistances do not change with current. All data are invented for practice. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A single loop contains an ideal 9.0 V battery and three resistors. The potential difference across the first resistor is 2.5 V and across the second is 4.0 V. What is the potential difference across the third resistor?

- (A) 2.5 V
- (B) 15.5 V
- (C) 6.5 V
- (D) 9.0 V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Round the loop, +9.0 − 2.5 − 4.0 − ΔV₃ = 0, so ΔV₃ = 2.5 V. The rise across the battery equals the total fall across the resistors.

- (B) adds the drops to the emf, as if the resistors also raised the potential.
- (C) is the total across the first two resistors, not the third.
- (D) assumes each element in series gets the full emf. That is true for parallel branches across an ideal battery, not for series elements.
</details>

## Question 2 (multiple choice · core)

A loop contains an ideal battery and two resistors, R₁ then R₂, in the direction of the current. The current is 0.50 A. Taking the negative terminal P as zero, the potentials are: positive terminal Q, 12.0 V; point S between R₁ and R₂, 9.0 V. What is R₂?

- (A) 18 Ω
- (B) 6.0 Ω
- (C) 24 Ω
- (D) 4.5 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** After R₂ the charge is back at P, so the potential falls from 9.0 V to 0 across R₂. R₂ = 9.0 V ÷ 0.50 A = 18 Ω. (R₁ has a 3.0 V drop, so R₁ = 6.0 Ω; the total 24 Ω agrees with 12.0 V ÷ 0.50 A.)

- (B) is R₁, found from the 3.0 V drop between Q and S.
- (C) is the total resistance of the loop.
- (D) multiplies 9.0 V by 0.50 A instead of dividing.
</details>

## Question 3 (multiple choice · core)

A single loop contains an ideal battery of emf ℰ and resistors R₁ and R₂. The current I flows clockwise. A student starts at the negative terminal and walks **anticlockwise**: first through R₂, then through R₁, then through the battery from its + terminal to its − terminal. Which loop equation is correct?

- (A) IR₂ + IR₁ − ℰ = 0
- (B) IR₂ + IR₁ + ℰ = 0
- (C) −IR₂ + IR₁ − ℰ = 0
- (D) ℰ − IR₁ = 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Walking against the current through each resistor, the potential rises: +IR₂ and +IR₁. Crossing the battery from + to − is a fall: −ℰ. So IR₂ + IR₁ − ℰ = 0, which is the clockwise equation ℰ − IR₁ − IR₂ = 0 multiplied by −1.

- (B) gives the battery the wrong sign; it would need a negative current, which contradicts the stated clockwise current.
- (C) treats R₂ as crossed with the current and R₁ against it, mixing directions within one loop.
- (D) leaves R₂ out, as if each resistor had the full emf across it.
</details>

## Question 4 (calculation · core)

A torch holds three cells in series, each of emf 1.5 V and internal resistance 0.20 Ω, and a bulb of resistance 4.4 Ω. (a) Find the current with all three cells inserted correctly. (b) One cell is inserted the wrong way round. Find the new current. (c) In (b), find the terminal voltage of the reversed cell and explain why it is more than its emf. (d) By what factor does the bulb's power fall?

<details>
<summary>Worked solution</summary>

1. (a) Walk round with the current: 1.5 + 1.5 + 1.5 − I(3 × 0.20) − I(4.4) = 0, so I = 4.5 ÷ 5.0 = **0.90 A**.
2. (b) The reversed cell is crossed from + to −, giving −1.5 V. The resistances are unchanged: 1.5 + 1.5 − 1.5 − I(5.0) = 0, so I = **0.30 A**, still in the direction set by the two correct cells.
3. (c) The current is pushed **into** the reversed cell's + terminal. Crossing it from − to + against the current gives ℰ + Ir, so its terminal voltage is 1.5 + (0.30)(0.20) = **1.56 V**. The other two cells drive charge backwards through it, so its internal resistance adds to, rather than reduces, the potential difference across its terminals.
4. (d) P = I²R, so the factor is (0.30 ÷ 0.90)² = **1/9**: from 3.56 W to 0.396 W.

Suggested mark points (4): 1 for 0.90 A including all internal resistances; 1 for 0.30 A with the reversed emf subtracted; 1 for 1.56 V with a correct explanation; 1 for the factor 1/9.

Common error in (b): reversing the cell's internal resistance as well. Resistance has no direction; only the emf changes sign.
</details>

## Question 5 (calculation · core)

An ideal 6.0 V battery drives a current round a single loop through R₁ = 1.0 Ω, R₂ = 2.0 Ω and R₃ = 3.0 Ω, in that order from the positive terminal. Point X is between R₁ and R₂; point Y is between R₂ and R₃. (a) Find the current. (b) Taking the negative terminal as zero, find the potential at the positive terminal, X and Y. (c) Repeat (b) with V_X = 0. (d) Sketch potential against position round the loop for (c).

<details>
<summary>Worked solution</summary>

1. (a) 6.0 − I(1.0 + 2.0 + 3.0) = 0, so I = **1.0 A**.
2. (b) Positive terminal: **6.0 V**. X: 6.0 − 1.0 = **5.0 V**. Y: 5.0 − 2.0 = **3.0 V**. After R₃: 0, back at the negative terminal.
3. (c) Subtract 5.0 V from everything: positive terminal **+1.0 V**, X **0**, Y **−2.0 V**, negative terminal **−5.0 V**.
4. (d) Starting at the negative terminal (−5.0 V): a vertical rise of 6.0 V to +1.0 V, a flat wire, a straight fall of 1.0 V to 0 at X, flat, a fall of 2.0 V to −2.0 V at Y, flat, a fall of 3.0 V back to −5.0 V, then flat back to the start.

Suggested mark points (4): 1 for 1.0 A; 1 for all three potentials in (b); 1 for the shifted potentials in (c), with negative values; 1 for a graph with the correct rise, falls and flat sections that closes on itself.

Common error: thinking that potentials cannot be negative. With V_X = 0, points "downstream" of X are below zero.
</details>

## Question 6 (constructed response · core)

A battery of emf ℰ and internal resistance r is connected to a variable resistor R.

(a) Use the loop rule to derive the current I and the power P delivered to R, in terms of ℰ, r and R.
(b) Show that P is greatest when R = r, and find the maximum power.
(c) For ℰ = 6.0 V and r = 1.5 Ω, calculate P for R = 0.50 Ω, 1.5 Ω and 6.0 Ω.
(d) Sketch P against R, and state the terminal voltage when P is greatest.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Walking with the current: ℰ − Ir − IR = 0, so **I = ℰ/(R + r)**. Then **P = I²R = ℰ²R/(R + r)²**.

**(b)** dP/dR = ℰ²[(R + r)² − 2R(R + r)]/(R + r)⁴ = ℰ²(r − R)/(R + r)³. This is zero when **R = r**. It is positive for R < r and negative for R > r, so this is a maximum. **P_max = ℰ²r/(2r)² = ℰ²/(4r)**.

**(c)** P(0.50 Ω) = 36 × 0.50 ÷ 2.0² = **4.5 W**; P(1.5 Ω) = 36 × 1.5 ÷ 3.0² = **6.0 W** (= ℰ²/4r); P(6.0 Ω) = 36 × 6.0 ÷ 7.5² = **3.84 W**.

**(d)** P starts at zero when R = 0, rises to a single peak of ℰ²/(4r) at R = r, then falls slowly towards zero as R becomes large. At the peak, I = ℰ/(2r), so the terminal voltage is ℰ − Ir = **ℰ/2** (3.0 V here): half the emf is dropped inside the battery.

| Point | What earns it |
|---|---|
| 1 | Loop equation with both −Ir and −IR, giving I = ℰ/(R + r) |
| 1 | P = ℰ²R/(R + r)² |
| 1 | Correct derivative, set to zero, giving R = r |
| 1 | Justifies a maximum (sign change or shape) and P_max = ℰ²/(4r) |
| 1 | All three numerical powers |
| 1 | Sketch with zero at R = 0, single peak at R = r, falling for large R; terminal voltage ℰ/2 |

Accept a maximum found by differentiating with respect to R after writing P in another equivalent form.
</details>

## Question 7 (constructed response · stretch)

Figure 1 is a graph of electric potential against position round a single loop, drawn **in the direction of the current**. The loop contains two batteries, each with internal resistance, and two external resistors, joined by ideal wires. The current is 0.50 A.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="klr-q7-title klr-q7-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="klr-q7-title">Potential against position round a loop with two batteries</title>
<desc id="klr-q7-desc">Vertical axis: electric potential in volts, 0 to 12. Horizontal axis: position round the loop in the direction of the current, with labelled points A to H and back to A. At A the potential is 0. It rises vertically to 12.0 volts, then slopes down to 11.0 volts at B. It is flat from B to C at 11.0 volts. From C to D it slopes down to 5.0 volts. It is flat from D to E at 5.0 volts. From E it slopes down a little to 4.5 volts, then drops vertically to 1.5 volts at F. It is flat from F to G at 1.5 volts. From G to H it slopes down to 0. It is flat from H back to A at 0.</desc>
<defs><marker id="q7-ax" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="290" x2="545" y2="290" stroke="#1d2b44" stroke-width="2" marker-end="url(#q7-ax)"/>
<line x1="70" y1="290" x2="70" y2="30" stroke="#1d2b44" stroke-width="2" marker-end="url(#q7-ax)"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4">
<line x1="70" y1="70" x2="150" y2="70"/><line x1="70" y1="190" x2="290" y2="190"/><line x1="70" y1="260" x2="360" y2="260"/><line x1="70" y1="200" x2="290" y2="200"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="264">1.5</text><text x="62" y="204">4.5</text><text x="62" y="186">5.0</text><text x="62" y="74">11.0</text><text x="62" y="54">12.0</text>
<line x1="64" y1="50" x2="70" y2="50" stroke="#1d2b44"/>
</g>
<text x="18" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 170)">Electric potential, V (V)</text>
<polyline points="75,290 75,50 105,70 150,70 250,190 290,190 315,200 315,260 360,260 420,290 525,290" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g fill="#1d2b44"><circle cx="75" cy="290" r="4"/><circle cx="105" cy="70" r="4"/><circle cx="150" cy="70" r="4"/><circle cx="250" cy="190" r="4"/><circle cx="290" cy="190" r="4"/><circle cx="315" cy="260" r="4"/><circle cx="360" cy="260" r="4"/><circle cx="420" cy="290" r="4"/><circle cx="525" cy="290" r="4"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="75" y="310">A</text><text x="108" y="56">B</text><text x="152" y="56">C</text><text x="255" y="178">D</text><text x="290" y="178">E</text><text x="305" y="280">F</text><text x="362" y="248">G</text><text x="420" y="310">H</text><text x="525" y="310">A</text>
</g>
<text x="300" y="345" font-size="13" fill="#1d2b44" text-anchor="middle">Position round the loop, in the direction of the current</text>
</svg>
<figcaption>Figure 1. Potential against position for Question 7. Vertical steps occur over a negligible distance; sloping sections are resistances; flat sections are ideal wires.</figcaption>
</figure>

(a) Identify the parts of the graph that represent each battery and each external resistor. For each battery, say whether the current passes through it from − to + or from + to −.
(b) Find the emf and internal resistance of each battery, and the resistance of each external resistor.
(c) Show that the graph is consistent with the loop rule, and use the loop rule to confirm the current of 0.50 A.
(d) Find the rate at which each battery's emf transfers energy and the total rate of dissipation in all resistances. Explain what the results show.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **A to B** is battery 1: a vertical rise (its emf, crossed from − to +) followed by a short slope (its internal resistance). **E to F** is battery 2: a short slope (internal resistance) followed by a vertical **drop**, so the current passes through it from + to −. **C to D** and **G to H** are the external resistors. B to C, D to E, F to G and H to A are wires.

**(b)** Battery 1: ℰ₁ = **12.0 V**; internal drop 1.0 V, so r₁ = 1.0 ÷ 0.50 = **2.0 Ω**.
Battery 2: ℰ₂ = 4.5 − 1.5 = **3.0 V**; internal drop 0.50 V, so r₂ = 0.50 ÷ 0.50 = **1.0 Ω**.
External: R_CD = 6.0 ÷ 0.50 = **12 Ω**; R_GH = 1.5 ÷ 0.50 = **3.0 Ω**.

**(c)** Sum of changes: +12.0 − 1.0 − 6.0 − 0.5 − 3.0 − 1.5 = 0, and the graph ends at its starting value. Loop equation: ℰ₁ − ℰ₂ − I(r₁ + R_CD + r₂ + R_GH) = 0 gives I = 9.0 ÷ 18 = **0.50 A**. ✓

**(d)** Battery 1's emf supplies ℰ₁I = **6.0 W**. Battery 2's emf takes in ℰ₂I = **1.5 W**: it is being charged. Dissipation: I²(2.0 + 12 + 1.0 + 3.0) = 0.25 × 18 = **4.5 W**. Then 6.0 = 1.5 + 4.5, so energy is conserved; the loop rule is energy conservation per unit charge, and multiplying by I turns it into a balance of power. The terminal voltage of battery 2 is 3.0 + 0.5 = 3.5 V, more than its emf, as expected for a battery being charged.

| Point | What earns it |
|---|---|
| 1 | Both batteries and both resistors identified, with battery 2 crossed + to − |
| 1 | ℰ₁ = 12.0 V and r₁ = 2.0 Ω |
| 1 | ℰ₂ = 3.0 V and r₂ = 1.0 Ω |
| 1 | R_CD = 12 Ω and R_GH = 3.0 Ω |
| 1 | Sum of changes is zero and loop equation gives 0.50 A |
| 1 | 6.0 W, 1.5 W and 4.5 W with the energy balance stated |
| 1 | Battery 2 identified as being charged, with a reason (current enters its + terminal, or energy is transferred into it) |

Carry forward an error in a resistance into (c) and (d) once.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "The loop rule" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-study-guide/).
- **Q3 or Q4 wrong:** revisit the sign table in "Writing a loop equation".
- **Q5 or Q7 wrong:** work through Worked example 1 and Figure 2 again.
- **Q6 incomplete:** check the loop equation first, then the differentiation.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-checklist/).
