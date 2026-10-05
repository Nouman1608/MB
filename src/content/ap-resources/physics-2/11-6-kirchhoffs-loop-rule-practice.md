---
resourceId: "mb-ap-phys2-11.6-practice"
title: "Kirchhoff's Loop Rule: Practice Questions (Physics 2 11.6)"
description: "Seven original Marlbridge practice questions on the loop rule: sign rules, potential–position graphs, opposing batteries and loops without a battery, with full solutions."
course: "physics-2"
unit: 11
topics: ["11.6"]
resourceType: "practice-questions"
prerequisites:
  - "The loop rule ΣΔV = 0 and its sign rules"
prerequisiteResources: ["mb-ap-phys2-11.6-study-guide"]
learningObjectives:
  - "Write correct loop equations, including for loops traversed against the current"
  - "Read and sketch graphs of potential against position around a loop"
  - "Use loops with and without a battery to find unknown resistances, currents and emfs"
  - "Derive symbolic expressions from the loop rule and justify them with energy conservation"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Wires and ammeters are ideal. Resistances are constant. Give answers to 2 or 3 significant figures to match the data"
related: ["mb-ap-phys2-11.6-study-guide", "mb-ap-phys2-11.6-revision-notes", "mb-ap-phys2-11.6-checklist"]
next: "mb-ap-phys2-11.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Battery − to +: +ℰ. Resistor with the current: −IR; against it: +IR."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: wires and ammeters are ideal; every resistor has constant resistance; batteries are ideal unless an internal resistance is given; ΔU = qΔV for a charge q moving through a potential difference ΔV. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

An ideal 9.0 V battery is connected in a single loop with three resistors, P, Q and S. A voltmeter connected across P and Q together reads 5.0 V. What is the potential difference across S?

- (A) 4.0 V
- (B) 14 V
- (C) 5.0 V
- (D) 3.0 V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Round the loop, the rise across the battery equals the sum of the falls: 9.0 V = 5.0 V + ΔV_S, so ΔV_S = 4.0 V.

- (B) adds the readings instead of using ΣΔV = 0. The falls cannot total more than the battery supplies.
- (C) assumes S matches the other reading. The share depends on resistances, which are not given.
- (D) shares the 9.0 V equally between three resistors. That is only true if they are identical, which the question does not say.
</details>

## Question 2 (multiple choice · core)

A battery of emf ℰ and internal resistance r is in a single loop with resistors R₁ and R₂. The current I leaves the positive terminal, passes through R₁, then R₂, and returns to the negative terminal. A student starts at the positive terminal and goes round the loop **against** the current: through the battery, then R₂, then R₁. Which loop equation is correct?

- (A) −ℰ + Ir + IR₂ + IR₁ = 0
- (B) −ℰ − Ir − IR₂ − IR₁ = 0
- (C) ℰ − IR₁ − IR₂ = 0
- (D) ℰ + Ir − IR₂ − IR₁ = 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Going from the positive terminal back through the battery crosses the emf from + to −: −ℰ. Every resistor, including r, is crossed against the current, so each gives +IR. Rearranged, (A) gives ℰ = I(r + R₁ + R₂), the same result as going with the current.

- (B) uses −IR for each resistor even though the student is going against the current. Rearranged, it gives I = −ℰ/(r + R₁ + R₂), a current opposite to the one described.
- (C) leaves out the internal resistance and uses the signs for going with the current.
- (D) has the wrong battery sign and treats r differently from the other resistors.
</details>

## Question 3 (multiple choice · core)

A battery of emf 6.0 V is connected in a single loop with two resistors. The current is 0.40 A. Taking the negative terminal a as 0 V, the potentials at points in the direction of the current are:

| Point | a (negative terminal) | b (positive terminal) | c (start of R₁) | d (between R₁ and R₂) |
|---|---|---|---|---|
| Potential (V) | 0 | 5.6 | 5.6 | 2.4 |

What is the resistance of R₁?

- (A) 8.0 Ω
- (B) 6.0 Ω
- (C) 14 Ω
- (D) 1.0 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The fall in potential across R₁ is V_c − V_d = 5.6 V − 2.4 V = 3.2 V. So R₁ = 3.2 V ÷ 0.40 A = 8.0 Ω. (b and c have equal potentials, so they are joined by an ideal wire.)

- (B) divides the potential **at** d by the current. That gives R₂ (2.4 V across R₂, from d back to a), not R₁.
- (C) divides the potential at c by the current: 5.6 V ÷ 0.40 A is the total external resistance, R₁ + R₂.
- (D) is the internal resistance, (6.0 V − 5.6 V) ÷ 0.40 A.
</details>

## Question 4 (multiple choice · core)

Two branches are connected in parallel between junctions J and K. Branch 1 is a 6.0 Ω resistor carrying 0.50 A. Branch 2 is a 2.0 Ω resistor in series with an unknown resistor R, carrying 0.75 A. What is R?

- (A) 2.0 Ω
- (B) 4.0 Ω
- (C) 3.0 Ω
- (D) 6.0 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Use the loop J → branch 1 → K → branch 2 → J, which contains no battery. Branch 1 has (0.50 A)(6.0 Ω) = 3.0 V across it, so branch 2 must too. Across the 2.0 Ω resistor: (0.75 A)(2.0 Ω) = 1.5 V. So R has 3.0 V − 1.5 V = 1.5 V across it, and R = 1.5 V ÷ 0.75 A = 2.0 Ω.

- (B) is 3.0 V ÷ 0.75 A, the resistance of the whole of branch 2. It forgets to subtract the 2.0 Ω.
- (C) divides R's 1.5 V by branch 1's current, 0.50 A. Each resistor needs its own current.
- (D) adds the 1.5 V across the 2.0 Ω resistor instead of subtracting it: (3.0 V + 1.5 V) ÷ 0.75 A. That is a sign error in the loop equation.
</details>

## Question 5 (calculation · core)

A battery of emf 12 V and internal resistance 0.40 Ω is used to charge a battery of emf 6.0 V and internal resistance 0.60 Ω. The positive terminal of the 12 V battery is connected through a 4.0 Ω resistor to the positive terminal of the 6.0 V battery, and the two negative terminals are joined by a wire. This makes a single loop in which the two emfs oppose each other. Calculate (a) the current, (b) the terminal voltage of each battery and (c) show that the rates of energy transfer balance.

<details>
<summary>Worked solution</summary>

1. Go round the loop in the direction the 12 V battery drives current. Cross the 12 V battery − to + (+12 V), the 6.0 V battery + to − (−6.0 V) and the three resistances with the current:
   12 V − 6.0 V − I(0.40 Ω + 0.60 Ω + 4.0 Ω) = 0
2. (a) I = 6.0 V ÷ 5.0 Ω = **1.2 A**. Positive, so the guessed direction is right.
3. (b) 12 V battery: ℰ − Ir = 12 V − (1.2 A)(0.40 Ω) = **11.5 V** (11.52 V).
4. 6.0 V battery: the current is forced through it from + to −, so its terminal voltage is ℰ + Ir = 6.0 V + (1.2 A)(0.60 Ω) = **6.72 V**.
5. Check with the loop rule: 11.52 V − 6.72 V − (1.2 A)(4.0 Ω) = 11.52 − 6.72 − 4.80 = 0. ✓
6. (c) The 12 V battery supplies ℰI = 14.4 W. The 6.0 V battery stores ℰI = 7.2 W. The resistances dissipate I²(5.0 Ω) = 7.2 W. 7.2 W + 7.2 W = 14.4 W. ✓

Suggested mark points (4): 1 for a loop equation with opposite signs for the two emfs; 1 for I = 1.2 A; 1 for both terminal voltages (11.5 V and 6.72 V); 1 for the energy balance.

Common error: adding the emfs (18 V ÷ 5.0 Ω = 3.6 A). Opposing batteries are crossed in opposite directions.
</details>

## Question 6 (constructed response · core)

An ideal battery of emf ℰ = 6.0 V is connected in a single loop with resistor R₁ = R and resistor R₂ = 2R. The current leaves the positive terminal b, passes through R₁ to point c, then through R₂ back to the negative terminal a.

(a) Taking a as 0 V, sketch a graph of electric potential against position as you go a → b → c → a. Label the potential at b and at c.
(b) A student says: "R₁ is first after the positive terminal, so it gets most of the 6.0 V and there is little left for R₂." Evaluate this claim.
(c) Derive an expression for the potential at c in terms of ℰ, R₁ and R₂, and check it with the numbers given.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Loop rule: ℰ − IR − I(2R) = 0, so I = ℰ/3R. The fall across R₁ is IR = ℰ/3 = 2.0 V; across R₂ it is 2ℰ/3 = 4.0 V. The graph rises vertically from 0 to 6.0 V across the battery (b at 6.0 V), is flat along the wire, falls by 2.0 V across R₁ (c at 4.0 V), is flat, then falls by 4.0 V across R₂ back to 0 V at a.

**(b)** The claim is wrong. In a single loop the current is the same in every element, so each fall in potential is IR. R₂ has twice the resistance, so it has twice the fall: 4.0 V across R₂ and 2.0 V across R₁. The order of the resistors has no effect; swapping them changes the shape of the graph but not the size of each fall.

**(c)** From c to a through R₂ the potential falls by IR₂, and V_a = 0, so V_c = IR₂. The loop rule gives I = ℰ/(R₁ + R₂). So **V_c = ℰR₂/(R₁ + R₂)**. Check: 6.0 V × 2R/3R = 4.0 V. ✓

| Point | What earns it |
|---|---|
| 1 | Graph rises to 6.0 V across the battery and returns to 0 V at the end |
| 1 | Flat sections along wires; falls across R₁ and R₂ with V_c = 4.0 V labelled |
| 1 | Rejects the claim, stating that the current is the same in both resistors |
| 1 | Uses ΔV = IR to show the fall is larger across R₂ (twice R₁'s) |
| 1 | Writes the loop equation and I = ℰ/(R₁ + R₂) |
| 1 | V_c = ℰR₂/(R₁ + R₂), checked as 4.0 V |

Accept any graph that follows the order of points described.
</details>

## Question 7 (constructed response · stretch)

A battery of emf ℰ and internal resistance r is connected in series with resistor R₀. Then the current divides between two parallel branches: one has resistance R, the other has resistance 3R. An ammeter shows that the current in the branch of resistance R is I₁.

(a) Use a loop that contains no battery to show that the current in the 3R branch is I₁/3.
(b) Derive an expression for ℰ in terms of I₁, R, R₀ and r.
(c) I₁ = 0.60 A, R = 5.0 Ω, R₀ = 2.0 Ω and r = 0.50 Ω. Calculate ℰ.
(d) A charge passing through the 3R branch meets three times the resistance of the R branch. Explain, in terms of energy, why it loses the same electric potential energy per coulomb as a charge passing through the R branch.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Go round the loop formed by the two branches: down the R branch with its current (−I₁R), up the 3R branch against its current (+I₃ × 3R). ΣΔV = 0 gives I₃ × 3R = I₁R, so **I₃ = I₁/3**.

**(b)** The current through the battery and R₀ is the total that then splits between the branches: I₁ + I₁/3 = 4I₁/3. Loop through the battery, R₀ and the R branch, going with the current:
ℰ − (4I₁/3)r − (4I₁/3)R₀ − I₁R = 0, so **ℰ = I₁R + (4I₁/3)(R₀ + r)**.

**(c)** ℰ = (0.60 A)(5.0 Ω) + (0.80 A)(2.0 Ω + 0.50 Ω) = 3.0 V + 2.0 V = **5.0 V**. (Ignoring r would give 4.6 V, so r matters here.)

**(d)** Both branches connect the same two junctions, so a charge leaving one junction and arriving at the other moves through the same potential difference, 3.0 V, whichever branch it takes. By ΔU = qΔV, it loses 3.0 J per coulomb either way. The larger resistance of the 3R branch means **fewer** charges pass through it per second (0.20 A instead of 0.60 A), not that each one loses more energy. Otherwise a charge going down one branch and back up the other would return with a different energy.

| Point | What earns it |
|---|---|
| 1 | Loop through the two branches with opposite signs for the two terms |
| 1 | I₃ = I₁/3 |
| 1 | Total current 4I₁/3 through the battery and R₀ |
| 1 | Correct loop equation including the −Ir term, giving ℰ = I₁R + (4I₁/3)(R₀ + r) |
| 1 | ℰ = 5.0 V |
| 1 | Same potential difference across both branches, so same energy per coulomb (ΔU = qΔV) |
| 1 | Links the larger resistance to a smaller current, not a larger energy loss per charge, or argues from energy conservation round the closed loop |

Carry forward an error in (b) into (c) once. Do not award the final point for "the resistance doesn't matter" with no reference to current or to energy conservation.
</details>

## How did you do?

- **Q1 or Q3 wrong:** go back to "The loop rule" and Worked example 1 in the [study guide](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-study-guide/), and redraw Figure 2 yourself.
- **Q2 or Q5 wrong:** learn the sign-rules table, then redo both questions going the other way round the loop.
- **Q4 or Q7 wrong:** study Worked example 2, especially the loop with no battery.
- **Q6 incomplete:** practise sketching potential–position graphs from "Potential–position graphs".

Then tick off the [topic checklist](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-checklist/).
