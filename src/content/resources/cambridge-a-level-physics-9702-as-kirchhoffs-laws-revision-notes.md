---
title: "Cambridge A Level Physics (9702): Kirchhoff's laws -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge AS Physics 9702 10.2 Kirchhoff's laws: both laws and their conservation basis, series and parallel derivations, signs, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 10.2 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers Kirchhoff's two laws, the conservation principles behind them, the derivation and use of the series and parallel resistance formulas, and solving simple circuits. These notes are condensed for recall. The [Kirchhoff's laws study guide](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws/) works through full derivations and a two-loop circuit; the [Kirchhoff's laws practice questions](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-practice/) give you more to try.

## The two laws

| Law | Statement | Consequence of |
|---|---|---|
| First | Sum of currents into a junction = sum of currents out | Conservation of charge |
| Second | Around any closed loop, sum of e.m.f.s = sum of p.d.s (Σε = ΣIR) | Conservation of energy |

**Charge reason:** charge cannot be created, destroyed or stored at a junction, so charge in per second = charge out per second.

**Energy reason:** energy gained per coulomb (e.m.f.s) = energy transferred per coulomb (p.d.s) for a charge that goes once round a loop.

## Sign rules for the second law

- Choose a direction round the loop.
- E.m.f. **positive** when you cross a cell from − to +; **negative** from + to −.
- IR **positive** when you go through a resistor in the direction of its assumed current; **negative** against it.
- Negative answer for a current: it flows opposite to the arrow you drew.

## Series derivation (4 steps)

1. No junctions, so the same current I in every resistor (first law).
2. Second law: ε = IR₁ + IR₂ + IR₃.
3. Equivalent resistor: ε = IR.
4. Divide by I: **R = R₁ + R₂ + R₃**.

## Parallel derivation (4 steps)

1. Same p.d. V across each branch (second law).
2. Branch currents V/R₁, V/R₂, V/R₃.
3. First law: I = I₁ + I₂ + I₃, with I = V/R.
4. Divide by V: **1/R = 1/R₁ + 1/R₂ + 1/R₃**.

## Parallel shortcuts and facts

- Total is less than the smallest branch resistance.
- n identical resistors R: R/n.
- Two resistors only: R₁R₂/(R₁ + R₂).
- Extra branch → total resistance falls → supply current rises.
- In parallel, current divides in inverse proportion to resistance: the smaller resistance takes the larger current.

**Example:** 10 Ω, 20 Ω and 20 Ω in parallel: 1/R = 0.10 + 0.05 + 0.05 = 0.20, so R = 5.0 Ω.

## Solving a circuit: checklist

1. Draw (or describe) a current arrow in every branch.
2. Use the first law to reduce the number of unknowns.
3. Write one second-law equation per independent loop.
4. Solve simultaneously.
5. Check using a loop or junction you have not used.

**Two-cells-in-one-loop shortcut:** cells aiding each other add; cells opposing subtract. With 9.0 V and 3.0 V opposing, and 6.0 Ω total resistance, I = (9.0 − 3.0) ÷ 6.0 = 1.0 A, flowing in the direction driven by the larger cell.

## Potential at points in a network

The second law also gives the p.d. between any two points: add the p.d.s along **any** path between them. In two parallel branches across the same supply, the p.d. between the midpoints of the branches is the difference between the p.d.s across their lower resistors.

## Key terms

| Term | Meaning |
|---|---|
| Junction | Point where three or more conductors meet |
| Loop | Any closed path round a circuit |
| Branch | A path between two junctions |
| Combined (equivalent) resistance | Single resistance that would draw the same current from the same supply |
| Conservation of charge | Charge is neither created nor destroyed |
| Conservation of energy | Energy is neither created nor destroyed, only transferred |

## Exam traps

- Leaving out an e.m.f. from a loop equation.
- Wrong sign for an e.m.f. crossed from + to −.
- Forgetting to invert 1/R at the end of a parallel calculation.
- Using product over sum for three resistors.
- Treating a negative current as a mistake.
- "Deriving" by quoting the formula without using either law.
- Saying the first law is conservation of energy, or the second is conservation of charge.

## Self-test

1. State Kirchhoff's first law.
2. Which conservation law underlies Kirchhoff's second law?
3. Currents of 3.0 A and 1.5 A enter a junction; 0.8 A leaves along one wire. What flows in the fourth wire?
4. Find the combined resistance of 10 Ω, 20 Ω and 20 Ω in parallel.
5. Why is the combined resistance of resistors in parallel less than the smallest?
6. Four identical 12 Ω resistors are in parallel. Find the total.
7. In the series derivation, which law tells you the current is the same in each resistor?
8. In the parallel derivation, which law tells you the p.d. is the same across each branch?
9. A cell is crossed from + to − in a loop equation. What sign does its e.m.f. take?
10. A calculation gives a branch current of −0.40 A. What does this mean?
11. A 6.0 Ω and a 3.0 Ω resistor are in parallel with 1.8 A entering. How does the current divide?
12. Why does adding a lamp in parallel increase the current from the supply?

**Answers:** 1. The sum of the currents into a junction equals the sum of the currents out. 2. Conservation of energy. 3. 3.7 A out of the junction. 4. 5.0 Ω. 5. Each branch adds another path for charge, so for the same p.d. the total current is larger than through any single branch. 6. 3.0 Ω. 7. The first law (no junctions between them). 8. The second law (each branch forms a loop with the supply). 9. Negative. 10. The current is 0.40 A in the opposite direction to the arrow drawn. 11. 0.60 A in the 6.0 Ω and 1.2 A in the 3.0 Ω. 12. The total resistance falls, so for the same e.m.f. the supply current rises.

## Related resources

- [D.C. circuits revision notes](/resources/as-physics-dc-circuits-revision-notes/) — the whole of Topic 10
- [Practical circuits revision notes](/resources/cambridge-a-level-physics-9702-as-practical-circuits-revision-notes/) — subtopic 10.1
- [Kirchhoff's laws practice questions](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-practice/)
