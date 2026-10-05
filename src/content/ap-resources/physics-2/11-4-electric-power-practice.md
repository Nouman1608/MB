---
resourceId: "mb-ap-phys2-11.4-practice"
title: "Electric Power: Practice Questions (Physics 2 11.4)"
description: "Seven original Marlbridge practice questions on P = IΔV, I²R and ΔV²/R, energy transfer in circuits, factors of change, power graphs and bulb brightness, with full solutions."
course: "physics-2"
unit: 11
topics: ["11.4"]
resourceType: "practice-questions"
prerequisites:
  - "Using P = IΔV, P = I²R and P = ΔV²/R"
prerequisiteResources: ["mb-ap-phys2-11.4-study-guide"]
learningObjectives:
  - "Calculate power and energy for circuit elements"
  - "Predict factors of change in power"
  - "Compare bulb brightness using power"
  - "Sketch power graphs and derive symbolic expressions for power"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Batteries are ideal and wires have no resistance. Bulbs and resistors have constant resistance unless stated. Give answers to 2 or 3 significant figures"
related: ["mb-ap-phys2-11.4-study-guide", "mb-ap-phys2-11.4-revision-notes", "mb-ap-phys2-11.4-checklist"]
next: "mb-ap-phys2-11.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Before comparing powers, decide whether the elements share the same current or the same potential difference."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: batteries are ideal and wires have no resistance; resistors and bulbs have constant resistance unless the question says otherwise; the brightness of a bulb increases with its power; meters are ideal. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A 2.0 kΩ resistor in a sensor circuit carries a current of 3.0 mA. At what rate is energy dissipated in the resistor?

- (A) 18 mW
- (B) 18 kW
- (C) 18 μW
- (D) 6.0 W

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** P = I²R = (3.0 × 10⁻³ A)² × (2.0 × 10³ Ω) = 9.0 × 10⁻⁶ × 2.0 × 10³ = 0.018 W = 18 mW.

- (B) uses I = 3.0 A, forgetting to convert milliamperes.
- (C) uses R = 2.0 Ω, forgetting to convert kilohms.
- (D) calculates IR = 6.0, which is the potential difference across the resistor in volts, not a power.
</details>

## Question 2 (multiple choice · foundation)

The potential difference across an ohmic resistor is tripled. By what factor does the power dissipated in the resistor change?

- (A) 1 (no change)
- (B) 3
- (C) 9
- (D) 1/3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** R is constant, so P = ΔV²/R gives P ∝ ΔV². Tripling ΔV multiplies P by 3² = 9. (Equivalently, I triples and ΔV triples, so P = IΔV is multiplied by 3 × 3.)

- (A) reasons "the resistance has not changed, so the power has not changed". Power depends on ΔV as well as R.
- (B) forgets that the current also triples.
- (D) treats P as inversely proportional to ΔV, perhaps by confusing it with the R in the denominator.
</details>

## Question 3 (multiple choice · core)

Two identical batteries are used. Bulb P (8.0 Ω) is connected alone across one battery. Bulb Q (4.0 Ω) is connected alone across the other. Which statement is correct?

- (A) Q is brighter, with twice the power of P.
- (B) P is brighter, with twice the power of Q.
- (C) Q is brighter, with four times the power of P.
- (D) The bulbs are equally bright, because the batteries are identical.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each bulb has the full battery potential difference across it, so the shared quantity is ΔV. P = ΔV²/R, so P ∝ 1/R. Q has half the resistance, so twice the power, and is brighter.

- (B) uses P = I²R as if the bulbs carried the same current. They do not: Q carries twice the current of P.
- (C) squares the resistance ratio. Only ΔV is squared in P = ΔV²/R.
- (D) assumes identical batteries give identical powers. The power also depends on the resistance of each bulb.
</details>

## Question 4 (multiple choice · core)

Bulbs 1 and 2 are connected one after the other in a single loop with a battery. The resistance of bulb 1 is three times that of bulb 2. What is the ratio P₁/P₂ of their powers?

- (A) 3
- (B) 1/3
- (C) 9
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In a single loop the current is the same in both bulbs. P = I²R, so P ∝ R and P₁/P₂ = 3. Bulb 1 is brighter.

- (B) uses P = ΔV²/R as if both bulbs had the same potential difference across them. In a single loop they share the current, not the potential difference.
- (C) squares the resistance ratio; in P = I²R only the current is squared.
- (D) reasons "same current, so same brightness". Brightness depends on power, and power depends on R as well as I.
</details>

## Question 5 (calculation · core)

An aquarium heater is rated 12 V, 48 W.

(a) Calculate the current in the heater when it operates at its rating.
(b) Calculate its resistance.
(c) Calculate the energy it transfers in 10 minutes at its rating.
(d) The supply is replaced by one that provides 10 V. Assuming the resistance does not change, calculate the new power.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. (a) I = P/ΔV = 48 W ÷ 12 V = **4.0 A**.
2. (b) R = ΔV/I = 12 V ÷ 4.0 A = **3.0 Ω** (or R = ΔV²/P = 144 ÷ 48 = 3.0 Ω).
3. (c) Δt = 10 × 60 s = 600 s. ΔE = PΔt = (48 W)(600 s) = **2.9 × 10⁴ J** (28 800 J).
4. (d) P = ΔV²/R = (10 V)² ÷ 3.0 Ω = **33 W** (33.3 W).

| Point | What earns it |
|---|---|
| 1 | I = 4.0 A |
| 1 | R = 3.0 Ω |
| 1 | Energy 2.9 × 10⁴ J, with time converted to seconds |
| 1 | New power 33 W using the **unchanged resistance** |

Common error in (d): scaling the power in proportion to ΔV, 48 W × 10/12 = 40 W. The current also falls, so P falls by (10/12)², to 69% of 48 W.
</details>

## Question 6 (constructed response · core)

(a) On one set of axes, sketch a graph of the power P dissipated in a fixed ohmic resistor against the current I in it. Label any important features.
(b) A set of resistors with different resistances is tested. Each one in turn is connected alone across the same ideal battery. Sketch a graph of P against R for these resistors.
(c) A student says: "Because P = I²R, the resistor with the largest resistance always dissipates the most power." Use your graph from (b) and a relevant equation to evaluate this claim, and describe one situation in which the student's conclusion would be correct.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A curve starting at the origin and getting steeper as I increases (a parabola, P ∝ I²). It is not a straight line.

**(b)** A curve that is high at small R and falls as R increases, approaching the R axis but never reaching it (P ∝ 1/R). It never crosses the axes.

**(c)** The claim is wrong in this situation. Every resistor in (b) has the same ΔV across it, so P = ΔV²/R and the largest resistance dissipates the **least** power, as the falling graph shows. The student's equation P = I²R is true, but I is not the same for each resistor: a larger R carries a smaller current, and the current is squared. The conclusion would be correct if the resistors all carried the **same current**, for example when they are connected one after another in a single loop.

| Point | What earns it |
|---|---|
| 1 | (a) Curve through the origin that gets steeper (concave up) |
| 1 | (b) Decreasing curve, steepest at small R, approaching the R axis without touching it |
| 1 | (c) Rejects the claim for (b), using P = ΔV²/R with ΔV the same for each resistor |
| 1 | Explains that I is not constant in (b): larger R means smaller I |
| 1 | Correct situation for the claim: the same current in each resistor (single loop) |

Do not award the third point for "the graph goes down" without linking it to ΔV being the same.
</details>

## Question 7 (constructed response · stretch)

Wires 1 and 2 are made of the same metal and have the same length L. Wire 2 has twice the diameter of wire 1. The resistivity of the metal is ρ and the diameter of wire 1 is d.

(a) Each wire in turn is connected alone across a battery of potential difference ΔV. Derive an expression for the power of wire 1 in terms of ρ, L, d and ΔV. Hence find the ratio P₂/P₁.
(b) The two wires are then connected one after the other in a single loop with the same battery. Which wire now dissipates energy at the greater rate? Find the ratio P₁/P₂ and justify it.
(c) In the arrangement of (b), the battery has ℰ = 10 V, R₂ = 1.0 Ω, and an ammeter in the loop reads 2.0 A. Calculate the power of each wire and show that energy is conserved.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R₁ = ρL/A₁ with A₁ = πd²/4, so R₁ = 4ρL/(πd²). With ΔV fixed, P₁ = ΔV²/R₁ = **πd²ΔV²/(4ρL)**. Wire 2 has diameter 2d, so its area and its power are 2² = 4 times larger: **P₂/P₁ = 4**.

**(b)** Wire 2 has 4 times the area, so R₁ = 4R₂. In a single loop the current is the same in both, so P = I²R and P ∝ R. **Wire 1** dissipates more: **P₁/P₂ = 4**.

**(c)** R₁ = 4R₂ = 4.0 Ω. P₁ = I²R₁ = (2.0 A)²(4.0 Ω) = **16 W**. P₂ = (2.0 A)²(1.0 Ω) = **4.0 W**. The battery delivers Iℰ = (2.0 A)(10 V) = 20 W, and 16 W + 4.0 W = 20 W, so the rate of energy input equals the total rate of dissipation.

| Point | What earns it |
|---|---|
| 1 | R₁ = 4ρL/(πd²), using the area of a circle with radius d/2 |
| 1 | P₁ = πd²ΔV²/(4ρL) from P = ΔV²/R |
| 1 | P₂/P₁ = 4, linked to the area (or resistance) changing by a factor of 4 |
| 1 | (b) Wire 1, because the current is the same and P = I²R, giving P₁/P₂ = 4 |
| 1 | (c) P₁ = 16 W and P₂ = 4.0 W |
| 1 | Battery power 20 W equals the 20 W total, stated as conservation of energy |

Accept in (a) a ratio argument that does not write P₁ in full, for the third point only. The reversal between (a) and (b) is the point of the question: a full answer recognises that the thicker wire is the "more powerful" one only when both have the same ΔV.
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** re-read "Two forms for a resistor" and "How power depends on current, potential difference and resistance" in the [study guide](/advanced-course-resources/physics-2/11-4-electric-power-study-guide/). Check unit prefixes and the squared terms.
- **Q3, Q4 or Q6 wrong:** revisit "Bulb brightness" and Worked example 2. Ask first: same ΔV or same I?
- **Q7 incomplete:** work through Worked example 3, then the energy check in Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/11-4-electric-power-checklist/).
