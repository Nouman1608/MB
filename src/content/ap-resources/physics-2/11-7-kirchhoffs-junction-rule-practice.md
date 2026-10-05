---
resourceId: "mb-ap-phys2-11.7-practice"
title: "Kirchhoff's Junction Rule: Practice Questions (Physics 2 11.7)"
description: "Seven original Marlbridge practice questions on the junction rule, current splitting, assumed directions, junction and loop equations, and judging lab data, with full solutions."
course: "physics-2"
unit: 11
topics: ["11.7"]
resourceType: "practice-questions"
prerequisites:
  - "The junction rule ΣI_in = ΣI_out"
  - "The loop rule (Topic 11.6) and equivalent resistance (Topic 11.5)"
prerequisiteResources: ["mb-ap-phys2-11.7-study-guide"]
learningObjectives:
  - "Apply the junction rule to find unknown currents, including their directions"
  - "Predict how current splits between parallel branches"
  - "Combine junction and loop equations to solve a branched circuit"
  - "Use measured currents and their uncertainty to evaluate claims"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Batteries, wires and meters are ideal unless stated. Resistors are ohmic. Give answers to 2 or 3 significant figures to match the data"
related: ["mb-ap-phys2-11.7-study-guide", "mb-ap-phys2-11.7-revision-notes", "mb-ap-phys2-11.7-checklist"]
next: "mb-ap-phys2-11.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Currents are steady and all elements are ideal unless a question says otherwise."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: currents are steady; batteries, wires and meters are ideal unless a question says otherwise; resistors obey ΔV = IR; "current" means conventional current. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Four wires meet at a junction. Two wires carry 2.5 A and 0.8 A into the junction. A third wire carries 1.9 A out of it. What is the current in the fourth wire?

- (A) 1.4 A out of the junction
- (B) 5.2 A out of the junction
- (C) 0.2 A into the junction
- (D) 3.3 A out of the junction

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In = 2.5 A + 0.8 A = 3.3 A. Out = 1.9 A + I. So I = 3.3 A − 1.9 A = 1.4 A, and it is positive, so it flows out.

- (B) adds all three currents.
- (C) treats the 0.8 A as leaving: 2.5 − 0.8 − 1.9 = −0.2, then reads the sign as "into".
- (D) forgets the 1.9 A that is already going out.
</details>

## Question 2 (multiple choice · foundation)

Which statement best explains why the junction rule is true for a circuit with steady currents?

- (A) Charge is conserved, and charge cannot build up at a junction, so the charge arriving each second equals the charge leaving each second.
- (B) Energy is conserved, so the energy carried into a junction equals the energy carried out.
- (C) Every point on an ideal wire is at the same potential, so the currents in all wires at a junction are equal.
- (D) Resistors use up current, so the current leaving must be smaller than the current arriving.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Current is charge per second. A junction cannot store charge, so in a steady circuit the charge in per second equals the charge out per second.

- (B) is the basis of the **loop** rule.
- (C) starts from a true fact but draws a false conclusion. Currents at a junction are usually different; only the totals in and out match.
- (D) is the "current is used up" error. Resistors transfer energy, not charge.
</details>

## Question 3 (multiple choice · core)

An ideal battery is connected across a 10 Ω resistor and a 30 Ω resistor in parallel. The current in the battery is 2.0 A. What is the current in the 30 Ω resistor?

- (A) 0.50 A
- (B) 1.5 A
- (C) 1.0 A
- (D) 0.67 A

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The two resistors share one potential difference, so I₁₀ × 10 Ω = I₃₀ × 30 Ω, giving I₁₀ = 3I₃₀. The junction rule says I₁₀ + I₃₀ = 2.0 A, so 4I₃₀ = 2.0 A and I₃₀ = 0.50 A. (Then I₁₀ = 1.5 A.)

- (B) is the current in the **10 Ω** resistor. It sends the larger current through the larger resistance.
- (C) splits the current equally, which is true only for identical branches.
- (D) multiplies 2.0 A by 10/30, a ratio of resistances that ignores the junction rule. The two currents must add to 2.0 A, which gives the 30 Ω branch 10/(10 + 30) = 1/4 of the total.
</details>

## Question 4 (multiple choice · core)

Three identical bulbs are connected in parallel directly across an ideal battery. An ammeter between the battery and the first junction reads 0.90 A. One bulb is unscrewed. Assume the bulbs' resistance does not change. Which row gives the new current in each remaining bulb and the new ammeter reading?

- (A) 0.30 A in each bulb; ammeter 0.60 A
- (B) 0.45 A in each bulb; ammeter 0.90 A
- (C) 0.30 A in each bulb; ammeter 0.90 A
- (D) 0.45 A in each bulb; ammeter 0.60 A

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each bulb is directly across the ideal battery, so its potential difference, and so its current, is unchanged: 0.90 A ÷ 3 = 0.30 A. By the junction rule the ammeter now reads 0.30 A + 0.30 A = 0.60 A.

- (B) treats the battery as a fixed-current source. An ideal battery fixes the potential difference, not the current.
- (C) has the right bulb currents but breaks the junction rule: 0.30 + 0.30 ≠ 0.90.
- (D) also breaks the junction rule: 0.45 + 0.45 ≠ 0.60.
</details>

## Question 5 (calculation · core)

Figure 1 shows part of a circuit with two junctions, P and Q, joined by wire 3. The arrows show known currents and the **assumed** directions of the unknown currents I_a and I_b.

<figure>
<svg viewBox="0 0 520 260" role="img" aria-labelledby="pq-title pq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pq-title">Two junctions P and Q joined by a wire</title>
<desc id="pq-desc">Junctions P and Q joined by wire 3. Wire 1 brings 1.6 A into P from the left. Wire 2 carries 0.70 A up and away from P. Wire 3 carries I_a from P to Q (assumed). Wire 4 carries 0.40 A down and away from Q. Wire 5 carries I_b from the right into Q (assumed).</desc>
<defs><marker id="pq-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2.5" fill="none">
<line x1="40" y1="130" x2="490" y2="130"/><line x1="180" y1="130" x2="180" y2="30"/><line x1="360" y1="130" x2="360" y2="235"/>
</g>
<circle cx="180" cy="130" r="5" fill="#1d2b44"/><circle cx="360" cy="130" r="5" fill="#1d2b44"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="70" y1="112" x2="130" y2="112" marker-end="url(#pq-arr)"/>
<line x1="198" y1="100" x2="198" y2="50" marker-end="url(#pq-arr)"/>
<line x1="240" y1="112" x2="300" y2="112" marker-end="url(#pq-arr)"/>
<line x1="378" y1="160" x2="378" y2="210" marker-end="url(#pq-arr)"/>
<line x1="460" y1="112" x2="400" y2="112" marker-end="url(#pq-arr)"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="60" y="100">wire 1: 1.6 A</text>
<text x="212" y="62">wire 2: 0.70 A</text>
<text x="232" y="100">wire 3: I_a</text>
<text x="386" y="196">wire 4: 0.40 A</text>
<text x="404" y="100">wire 5: I_b</text>
<text x="166" y="152" font-weight="600">P</text><text x="342" y="152" font-weight="600">Q</text>
</g>
</svg>
<figcaption>Figure 1. Junctions P and Q. Arrows show known currents and the assumed directions of I_a and I_b.</figcaption>
</figure>

(a) Find I_a. (b) Find I_b and state the real direction of the current in wire 5. (c) How much charge passes along wire 3 in 2.0 minutes? (d) Show that your answers satisfy the junction rule for a boundary drawn around both P and Q.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. (a) Junction P: in = 1.6 A; out = 0.70 A + I_a. So I_a = **0.90 A**, from P to Q as assumed.
2. (b) Junction Q: in = I_a + I_b; out = 0.40 A. So 0.90 A + I_b = 0.40 A and I_b = **−0.50 A**. The minus sign means 0.50 A flows **out of Q** along wire 5, to the right.
3. (c) ΔQ = IΔt = (0.90 A)(120 s) = **108 C** (1.1 × 10² C).
4. (d) Into the region: 1.6 A. Out: 0.70 A + 0.40 A + 0.50 A = 1.6 A. Wire 3 is inside the boundary, so it does not appear.

| Point | What earns it |
|---|---|
| 1 | Junction equation at P and I_a = 0.90 A |
| 1 | Junction equation at Q using the assumed directions, giving I_b = −0.50 A |
| 1 | Interprets the negative sign: 0.50 A flows out of Q along wire 5 |
| 1 | 108 C, with time converted to seconds |
| 1 | Region check with all three outgoing currents summing to 1.6 A |

Accept "0.50 A out of Q" found directly. Carry forward an error in (a) once.
</details>

## Question 6 (constructed response · core)

A battery has emf 6.0 V and internal resistance 0.50 Ω. Its terminals are connected to two parallel branches. Branch 1 has a 4.0 Ω resistor in series with a 2.0 Ω resistor. Branch 2 has a single 3.0 Ω resistor.

(a) Define the currents I (in the battery), I₁ (branch 1) and I₂ (branch 2). Write one junction equation and two loop equations.
(b) Solve for I, I₁ and I₂, and find the terminal potential difference of the battery.
(c) A student says: "In branch 1, the 2.0 Ω resistor carries more current than the 4.0 Ω resistor, because it has less resistance." Evaluate the claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Junction: **I = I₁ + I₂**. Loop through the battery and branch 1: 6.0 − 0.50I − 6.0I₁ = 0. Loop through the two branches: 6.0I₁ − 3.0I₂ = 0. (A loop through the battery and branch 2 is equally valid.)

**(b)** From the second loop, I₂ = 2I₁, so I = 3I₁. Then 6.0 = 0.50(3I₁) + 6.0I₁ = 7.5I₁, so **I₁ = 0.80 A**, **I₂ = 1.6 A** and **I = 2.4 A**. Terminal potential difference = 6.0 V − (2.4 A)(0.50 Ω) = **4.8 V**. Check: branch 2 has (1.6 A)(3.0 Ω) = 4.8 V; branch 1 has 3.2 V + 1.6 V = 4.8 V.

**(c)** The claim is wrong. The two resistors are in the **same branch**, with no junction between them, so they carry the same current, 0.80 A. Lower resistance means a smaller potential difference (1.6 V instead of 3.2 V), not a larger current.

| Point | What earns it |
|---|---|
| 1 | Correct junction equation consistent with the defined directions |
| 1 | Two correct, independent loop equations, including the internal resistance |
| 1 | I₁ = 0.80 A and I₂ = 1.6 A |
| 1 | I = 2.4 A and terminal potential difference 4.8 V |
| 1 | Rejects the claim **because** elements in one branch carry the same current (junction rule / no junction between them) |
| 1 | States that the difference shows up as a smaller potential difference across the 2.0 Ω resistor |

Accept an equivalent-resistance method for (b) (2.5 Ω in total) if (a) uses Kirchhoff equations.
</details>

## Question 7 (constructed response · stretch)

A student builds a circuit with an ideal battery and three bulbs. Bulb X is in the main line. After X the wire splits at a junction into two branches: bulb Y in one, bulb Z in the other. The student places four ammeters, each reading to the nearest 0.01 A:

| Ammeter | Position | Reading (A) |
|---|---|---|
| A₁ | between battery and X | 0.62 |
| A₂ | between X and the junction | 0.61 |
| A₃ | in series with Y | 0.40 |
| A₄ | in series with Z | 0.22 |

(a) The student claims: "A₂ is less than A₁, so bulb X uses up some of the current." Evaluate the claim using the data.
(b) Use the data to test the junction rule at the junction after X.
(c) Which of Y and Z has the greater resistance? Justify, and estimate the ratio R_Z/R_Y.
(d) Bulb Z is unscrewed. Predict whether the readings of A₁ and A₃ increase, decrease or stay the same. Justify using Kirchhoff's rules. Assume each bulb's resistance stays constant.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A₁ − A₂ = 0.01 A, one meter's resolution, so the readings agree within uncertainty. X and both meters are in one branch, so the junction rule requires the same current in all of them. The claim is not supported.

**(b)** In: A₂ = 0.61 A. Out: A₃ + A₄ = 0.62 A. The difference, 0.01 A, is within the combined resolution of three meters (up to about 0.03 A), so the data are consistent with the junction rule.

**(c)** Y and Z are in parallel, so they have the same potential difference. ΔV = IR with the same ΔV means the bulb with the **smaller** current has the **larger** resistance: **Z**. R_Z/R_Y = I_Y/I_Z = 0.40/0.22 ≈ **1.8**.

**(d)** Removing Z removes a parallel path, so the total resistance increases and the battery current falls: **A₁ decreases**. A smaller current through X means a smaller potential difference across X. By the loop rule, ΔV_X + ΔV_Y = emf, so ΔV_Y increases, and **A₃ increases**. By the junction rule, with Z gone, A₃ now equals A₂ = A₁.

| Point | What earns it |
|---|---|
| 1 | (a) Notes the 0.01 A difference is within meter resolution |
| 1 | (a) Uses the junction rule (one branch, one current) to reject "used up" |
| 1 | (b) Compares 0.61 A with 0.40 A + 0.22 A = 0.62 A and judges agreement within uncertainty |
| 1 | (c) Z, because parallel bulbs share ΔV so the smaller current means larger R |
| 1 | (c) Ratio about 1.8 |
| 1 | (d) A₁ decreases, because the total resistance increases |
| 1 | (d) A₃ increases, linked through the loop rule to the smaller ΔV across X |

Do not award (d) for "Y gets Z's share of the current": the battery current does not stay the same.
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** re-read "Signs and assumed directions" in the [study guide](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-study-guide/) and redo Worked example 1.
- **Q3 or Q4 wrong:** revisit "Branches, junctions and regions": parallel branches share ΔV, and an ideal battery fixes ΔV, not current.
- **Q6 incomplete:** work through Worked example 2, writing every equation before you solve.
- **Q7 incomplete:** compare with Worked example 3, then revise the loop rule (Topic 11.6).

Then tick off the [topic checklist](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-checklist/).
