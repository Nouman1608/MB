---
title: "Cambridge A Level Physics (9702): Kirchhoff's laws"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "D.C. circuits"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-kirchhoffs-laws"
description: "A focused guide to 10.2 Kirchhoff's laws in Cambridge AS Physics 9702: conservation of charge and energy, resistor derivations and two-loop circuits."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **10.2 Kirchhoff's laws** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (AS Level). The broader [D.C. circuits study guide](/resources/as-physics-dc-circuits/) states both laws and the combined-resistance formulas; this page goes further: why each law follows from a conservation principle, the full derivations of the series and parallel formulas that the syllabus asks for, a reliable sign convention, and a complete two-source, two-loop problem. For quick recall use the [Kirchhoff's laws revision notes](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-revision-notes/), and for exam-style questions the [Kirchhoff's laws practice questions](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-practice/).

## What 10.2 asks you to do

Candidates should be able to:

- recall Kirchhoff's **first law** and understand that it is a consequence of **conservation of charge**
- recall Kirchhoff's **second law** and understand that it is a consequence of **conservation of energy**
- **derive**, using Kirchhoff's laws, a formula for the combined resistance of two or more resistors in **series**, and use it
- **derive**, using Kirchhoff's laws, a formula for the combined resistance of two or more resistors in **parallel**, and use it
- use Kirchhoff's laws to solve simple circuit problems

## Kirchhoff's first law

> The sum of the currents into a junction is equal to the sum of the currents out of the junction.

**Why it is conservation of charge.** Current is the rate of flow of charge. Charge cannot be created or destroyed, and in a steady circuit it does not build up at a junction. So in any time interval, the charge arriving at a junction must equal the charge leaving, and dividing by the time gives equal total currents in and out.

**Using it.** At a junction where 2.5 A enters along one wire and 1.2 A and 0.6 A leave along two others, the fourth wire must carry 2.5 − 1.2 − 0.6 = 0.7 A **out** of the junction. If the arithmetic gives a negative value, that current flows the other way.

## Kirchhoff's second law

> Around any closed loop in a circuit, the sum of the e.m.f.s is equal to the sum of the potential differences.

```
Σε = ΣIR    (around any closed loop)
```

**Why it is conservation of energy.** E.m.f. is the energy gained per unit charge from sources; p.d. is the energy lost per unit charge in components. A charge that travels once around a closed loop returns to its starting point with the same electrical potential energy it started with. So the energy gained per coulomb must equal the energy transferred per coulomb.

## A sign convention that always works

1. Mark an assumed direction for the current in every branch. (A guess is fine.)
2. Apply the first law at the junctions, so that you use as few unknown currents as possible.
3. Choose a direction to travel round each loop.
4. Count an **e.m.f. as positive** if, travelling in that direction, you pass through the cell from its negative terminal to its positive terminal; negative otherwise.
5. Count an **IR term as positive** if you travel through the resistor in the same direction as its assumed current; negative otherwise.
6. Solve. A negative current means that current flows opposite to your arrow; its size is still correct.

## Deriving the series formula

Resistors R₁, R₂ and R₃ are in series with a supply of e.m.f. ε and negligible internal resistance.

- **First law:** there are no junctions between the resistors, so the same current I passes through each.
- **Second law** round the loop: ε = IR₁ + IR₂ + IR₃.
- The combined resistance R is the single resistor that would carry the same current from the same e.m.f.: ε = IR.
- So IR = IR₁ + IR₂ + IR₃, and dividing by I:

```
R = R₁ + R₂ + R₃
```

## Deriving the parallel formula

Resistors R₁, R₂ and R₃ are connected in parallel across a p.d. V.

- **Second law:** each resistor forms a loop with the supply (or with each other), so the p.d. across each resistor is the same, V.
- The current in each is therefore V/R₁, V/R₂ and V/R₃.
- **First law** at the junction where the branches divide: I = I₁ + I₂ + I₃.
- For the combined resistance R, I = V/R, so V/R = V/R₁ + V/R₂ + V/R₃. Dividing by V:

```
1/R = 1/R₁ + 1/R₂ + 1/R₃
```

**Consequences to recall:**

- The combined resistance of a parallel group is always **less than the smallest** individual resistance.
- n identical resistors R in parallel give R/n.
- For exactly two resistors, R = R₁R₂ / (R₁ + R₂) ("product over sum"). This shortcut does not extend to three resistors.
- Adding another branch in parallel always **decreases** the total resistance, because it provides an extra path for charge.

## Worked example 1: a series–parallel network

A 4.0 Ω resistor is in series with a parallel pair of 6.0 Ω and 12.0 Ω resistors, connected to a 12 V supply of negligible internal resistance. Find every current and p.d.

```
parallel pair: 1/R = 1/6.0 + 1/12.0 = 3/12   →   R = 4.0 Ω
total resistance = 4.0 + 4.0 = 8.0 Ω
supply current I = 12 / 8.0 = 1.5 A
p.d. across 4.0 Ω = 1.5 × 4.0 = 6.0 V
p.d. across parallel pair = 12 − 6.0 = 6.0 V          (second law)
current in 6.0 Ω = 6.0 / 6.0 = 1.0 A
current in 12.0 Ω = 6.0 / 12.0 = 0.50 A
check (first law): 1.0 + 0.50 = 1.5 A ✓
```

*Annotation.* The final check costs ten seconds and catches most arithmetic slips. Notice that the larger of the two parallel resistors carries the smaller current.

## Worked example 2: two sources, two loops

Three branches connect a top junction T to a bottom junction B:

- Branch 1: a cell of e.m.f. 12 V (positive terminal towards T) in series with a 2.0 Ω resistor.
- Branch 2: a cell of e.m.f. 9.0 V (positive terminal towards T) in series with a 3.0 Ω resistor.
- Branch 3: a 1.5 Ω resistor only.

The cells have negligible internal resistance. Find the current in each branch.

Assume I₁ flows up through branch 1 into T, I₂ up through branch 2 into T, and I₃ down through branch 3.

```
first law at T:            I₃ = I₁ + I₂
loop (branch 1 + branch 3): 12 = 2.0 I₁ + 1.5 I₃
loop (branch 2 + branch 3): 9.0 = 3.0 I₂ + 1.5 I₃
```

Substitute I₃ = I₁ + I₂:

```
12  = 3.5 I₁ + 1.5 I₂
9.0 = 1.5 I₁ + 4.5 I₂
multiply the first by 3:  36 = 10.5 I₁ + 4.5 I₂
subtract the second:      27 = 9.0 I₁   →   I₁ = 3.0 A
then 9.0 = 4.5 + 4.5 I₂   →   I₂ = 1.0 A,   I₃ = 4.0 A
```

**Check with the outer loop** (branches 1 and 2, going up branch 1 and down branch 2): 12 − 9.0 = 2.0 × 3.0 − 3.0 × 1.0, so 3.0 = 3.0 ✓. Both currents came out positive, so both cells are delivering energy. Had I₂ come out negative, cell 2 would have been charged by cell 1.

## Common mistakes

- **Applying the second law to a path that is not closed.**
- **Forgetting an e.m.f.** in a loop, or giving it the wrong sign when the loop passes through a cell from + to −.
- **Adding parallel resistances directly**, or forgetting to take the reciprocal at the end of 1/R = Σ1/R.
- **Using product over sum for three resistors.**
- **Assuming a negative current is an error.** It simply means the current flows the other way.
- **Writing a derivation that only quotes the formula.** "Derive" needs both laws stated and used.

## Exam technique for the command words

- **State** (a law): one sentence; add the conservation principle if asked what it is a consequence of.
- **Explain** (the conservation basis): for charge, "charge cannot accumulate at a junction"; for energy, "energy gained per unit charge from e.m.f.s equals energy lost per unit charge in p.d.s around a loop".
- **Derive** or **show that**: name which law gives "same current" or "same p.d.", write the sum, and divide through.
- **Calculate** or **determine**: label currents on the diagram (or describe them), write one junction equation and enough loop equations, solve, then check with a loop you have not used.

## More resources on this topic

- [D.C. circuits study guide](/resources/as-physics-dc-circuits/) — the whole of Topic 10
- [Kirchhoff's laws revision notes](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-revision-notes/)
- [Kirchhoff's laws practice questions](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-practice/)
- [Practical circuits](/resources/cambridge-a-level-physics-9702-as-practical-circuits/) — subtopic 10.1
- [Potential dividers](/resources/cambridge-a-level-physics-9702-as-potential-dividers/) — subtopic 10.3

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
