---
title: "D.C. Circuits: Kirchhoff's Laws and Potential Dividers"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "D.C. circuits"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.1
syllabusTopics:
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-practical-circuits"
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-kirchhoffs-laws"
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-potential-dividers"
description: "E.m.f. and internal resistance, Kirchhoff's first and second laws, combined resistance in series and parallel, and potential divider circuits, for Cambridge International AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "iftikhar-azeemi"
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers Topic 10, D.C. circuits, in full — subtopics **10.1
Practical circuits**, **10.2 Kirchhoff's laws** and **10.3 Potential
dividers** — from Cambridge International AS & A Level Physics 9702,
2025–2027 series. This is AS Level content.

## Before studying this

This resource assumes current, potential difference, power and resistance
from [Electricity: Current, Potential Difference and
Resistance](/resources/as-physics-electricity/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 10**

**10.1 Practical circuits** — recalling and using standard circuit symbols;
drawing and interpreting circuit diagrams; defining e.m.f. as energy
transferred per unit charge driving charge around a complete circuit;
distinguishing e.m.f. from potential difference; understanding the effect of
internal resistance on terminal potential difference.

**10.2 Kirchhoff's laws** — recalling Kirchhoff's first law as a consequence
of charge conservation and the second as a consequence of energy conservation;
deriving and using formulas for combined resistance in series and parallel;
using Kirchhoff's laws to solve simple circuit problems.

**10.3 Potential dividers** — the principle of a potential divider circuit;
recalling and using the potentiometer principle for comparing potential
differences; understanding a galvanometer's use in null methods; explaining
the use of thermistors and LDRs in potential dividers to give a
temperature- or light-dependent output.

## E.m.f., internal resistance and terminal p.d.

**Electromotive force (e.m.f.)** is the energy transferred per unit charge by
a source in driving charge around a complete circuit — it is defined for the
source, whether or not current is flowing, and is distinct from **potential
difference**, which is the energy transferred per unit charge across any
component.

Real sources have **internal resistance** r. When current I flows, some
energy is transferred within the source itself, so the **terminal potential
difference** (what's actually available to the external circuit) is less than
the e.m.f.:

```
ε = I(R + r) = V_terminal + Ir
```

This is why a battery's measured terminal voltage drops under load, especially
noticeable when internal resistance is significant relative to the external
circuit's resistance.

**Worked example.** A cell of e.m.f. 1.50 V and internal resistance 0.80 Ω is
connected to a 4.20 Ω resistor. Current I = ε / (R + r) = 1.50 / (4.20 + 0.80)
= 1.50 / 5.00 = **0.30 A**. Terminal p.d. = ε − Ir = 1.50 − (0.30 × 0.80) =
1.50 − 0.24 = **1.26 V**. If the external resistance is reduced, current
increases, so more energy is transferred inside the cell (Ir increases) and
the terminal p.d. **falls further** below the e.m.f.

**Reading e.m.f. and internal resistance from a V-I graph.** Since
V_terminal = ε − Ir, plotting terminal p.d. against current gives a straight
line with a **negative gradient equal to −r** and a **y-intercept equal to
ε**. A graph with gradient −0.45 V A⁻¹ and intercept 1.62 V therefore gives
ε = 1.62 V and r = 0.45 Ω.

## Kirchhoff's laws

**Kirchhoff's first law:** the sum of currents entering a junction equals the
sum of currents leaving it — a direct consequence of conservation of charge.

**Kirchhoff's second law:** around any closed loop in a circuit, the sum of
e.m.f.s equals the sum of potential differences — a direct consequence of
conservation of energy.

**Combined resistance.** Using Kirchhoff's laws:

- **Series:** R_total = R₁ + R₂ + R₃ + …
- **Parallel:** 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + …

**Worked example.** Two resistors, 6.0 Ω and 3.0 Ω, are connected in
parallel:

```
1/R = 1/6.0 + 1/3.0 = 1/6.0 + 2/6.0 = 3/6.0
R = 2.0 Ω
```

## Potential dividers

A **potential divider** splits a supply voltage across two (or more) series
components in proportion to their resistance, producing a chosen fraction of
the supply voltage at the junction between them. This is the basis of the
**potentiometer**, which can be used to compare potential differences, and
**null methods**, where a galvanometer detects zero current (and hence a
balanced condition) rather than measuring a current directly — a more
precise technique than a direct voltmeter reading in many cases.

Replacing one fixed resistor in a potential divider with a **thermistor** or
**LDR** produces an output voltage that varies with temperature or light
intensity respectively — a light- or temperature-sensing circuit, since the
varying component's changing resistance changes the voltage division ratio.

## Meters

An **ideal ammeter has zero resistance** and is connected in **series**, so
it does not reduce the current it is measuring. An **ideal voltmeter has
infinite resistance** and is connected in **parallel**, so it draws no
current away from the component it is measuring. A **real voltmeter draws
a small current**, since its resistance is large but not infinite, which
slightly reduces the potential difference it is trying to measure — a
systematic error worth naming explicitly when a question asks why a
measured reading differs from a calculated one.

## Common mistakes

- **Treating e.m.f. and terminal potential difference as the same thing.**
They are only equal when internal resistance is negligible or no current
flows (open circuit).
- **Adding resistances in parallel directly** (e.g. writing R = R₁ + R₂ for a
parallel combination) — parallel resistors combine via reciprocals, always
giving a combined resistance smaller than the smallest individual resistor.
- **Forgetting that Kirchhoff's second law includes e.m.f.s as well as
potential differences** around a loop — omitting a battery's e.m.f. from the
loop equation is a frequent source of error.
- **Not tracing through which component's resistance change increases or
decreases the potential-divider output** — work through the ratio
explicitly rather than guessing the direction.

## Quick revision checklist

- E.m.f. vs. potential difference, and the effect of internal resistance on
terminal p.d.
- Kirchhoff's first and second laws, and their conservation-law basis
- Combined resistance formulas for series and parallel
- The potential divider principle, and thermistor/LDR sensing circuits

## Related resources

- [Electricity: Current, Potential Difference and Resistance](/resources/as-physics-electricity/) — the previous AS topic
- [Particle Physics: Atoms, Nuclei and Fundamental Particles](/resources/as-physics-particle-physics/) — the final AS topic
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
