---
title: "Cambridge A Level Physics (9702): Practical circuits -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge AS Physics 9702 10.1 Practical circuits: diagram rules, e.m.f. versus p.d., internal resistance, terminal p.d. and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 10.1 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers circuit symbols and diagrams, the definition of e.m.f., the energy distinction between e.m.f. and p.d., and the effect of internal resistance on terminal p.d. These notes are condensed for recall. The [Practical circuits study guide](/resources/cambridge-a-level-physics-9702-as-practical-circuits/) has fuller explanations and worked examples, and the [Practical circuits practice questions](/resources/cambridge-a-level-physics-9702-as-practical-circuits-practice/) let you test yourself. The full symbol table is in the [D.C. circuits study guide](/resources/as-physics-dc-circuits/).

## Reading and drawing circuit diagrams

- Trace from the positive terminal (longer cell line) back to the negative.
- Same single path → **series** → same current.
- Connected between the same two junctions → **parallel** → same p.d.
- **Ammeter in series**; ideal ammeter has zero resistance.
- **Voltmeter in parallel**; ideal voltmeter has infinite resistance.
- A closed switch or plain wire across a component short-circuits it: no current through that component.
- Draw straight lines, square corners, and a dot at every junction.

## E.m.f. and p.d.

| | E.m.f. ε | P.d. V |
|---|---|---|
| Where | Across a source | Across a component |
| Energy transfer | Other forms → electrical | Electrical → other forms |
| Definition | Energy transferred per unit charge in driving charge round a complete circuit | Energy transferred per unit charge passing through the component |
| Unit | V (J C⁻¹) | V (J C⁻¹) |

## Internal resistance equations

```
ε = I(R + r)
V = ε − Ir        (discharging)
V = ε + Ir        (being charged)
εI = I²R + I²r    (power from source = power to load + power wasted inside)
```

- Ir = "lost volts".
- Open circuit (I = 0): V = ε.
- Short circuit (R = 0): I_max = ε/r, V = 0.

## Effect of changing the external resistance

| R decreases → | I increases → | Ir increases → | V decreases |
|---|---|---|---|

Graph of V (vertical) against I (horizontal): straight line, **intercept ε**, **gradient −r**.

## Two-reading method

Readings (V₁, I₁) and (V₂, I₂):

```
ε = V₁ + I₁r = V₂ + I₂r
r = (V₁ − V₂) / (I₂ − I₁)
```

Example: V = 1.20 V at 0.30 A and 0.75 V at 0.75 A gives r = 0.45 ÷ 0.45 = 1.0 Ω and ε = 1.20 + 0.30 = 1.50 V.

## When internal resistance matters

| Source | Internal resistance | Why |
|---|---|---|
| Car battery | Very low | Must deliver very large starter-motor currents without the terminal p.d. collapsing |
| Extra-high-tension laboratory supply | Very high | Limits the maximum current to a safe value |
| Dry cell running down | Rises with age | Terminal p.d. under load falls even if the e.m.f. is nearly unchanged |

## Combining sources

- Series, same direction: ε's add, r's add.
- One cell reversed: its ε subtracts, its r still adds.

## Key terms

| Term | Meaning |
|---|---|
| Electromotive force | Energy transferred to electrical energy per unit charge by a source |
| Potential difference | Energy transferred from electrical energy per unit charge in a component |
| Internal resistance | Resistance of the materials inside a source |
| Terminal p.d. | p.d. across the source's terminals; V = ε − Ir |
| Lost volts | Ir, the energy per unit charge dissipated inside the source |
| Short circuit | Zero-resistance path; current limited only by r |
| Open circuit | No current; V = ε |

## Exam traps

- Calling e.m.f. a force, or defining it without "per unit charge".
- "In terms of energy" questions answered without saying which way the energy is converted.
- Using ε = IR and forgetting r.
- Assuming V = ε when current flows.
- Forgetting that the reversed cell's internal resistance still adds.
- Placing ammeters in parallel or voltmeters in series in a drawn circuit.
- Writing "gradient = r" for a V–I graph: it is −r.

## Self-test

1. Define e.m.f.
2. Distinguish between e.m.f. and p.d. in terms of energy.
3. State the terminal p.d. of a source on open circuit.
4. A cell of e.m.f. 9.0 V and internal resistance 1.5 Ω is short-circuited. Find the current.
5. Find the power dissipated in the cell in question 4.
6. Six cells, each 2.0 V and 0.10 Ω, are in series. Total ε and r?
7. Why must a car battery have a low internal resistance?
8. Why does an extra-high-tension supply have a very high internal resistance?
9. A V–I graph for a cell has intercept 1.58 V and gradient −0.80 V A⁻¹. State ε and r.
10. As the external resistance is reduced, what happens to the terminal p.d.? Explain briefly.
11. A battery of e.m.f. 6.0 V and internal resistance 0.50 Ω is charged with a current of 2.0 A. Find the terminal p.d.
12. An ammeter is drawn in parallel with a lamp. What happens to the lamp?

**Answers:** 1. Energy transferred per unit charge by a source in driving charge round a complete circuit. 2. E.m.f.: energy converted from other forms to electrical energy per unit charge; p.d.: energy converted from electrical energy to other forms per unit charge. 3. Equal to the e.m.f. 4. I = 9.0 ÷ 1.5 = 6.0 A. 5. P = I²r = 6.0² × 1.5 = 54 W. 6. 12 V and 0.60 Ω. 7. So that it can supply very large currents with only a small Ir, keeping the terminal p.d. high. 8. To limit the maximum current to a safe value. 9. ε = 1.58 V, r = 0.80 Ω. 10. It falls: the current increases, so Ir increases and V = ε − Ir decreases. 11. V = 6.0 + 2.0 × 0.50 = 7.0 V. 12. The lamp is short-circuited by the low-resistance ammeter, so almost no current passes through it and it does not light.

## More resources on this topic

- [D.C. circuits revision notes](/resources/as-physics-dc-circuits-revision-notes/) — the whole of Topic 10
- [Kirchhoff's laws revision notes](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-revision-notes/) — subtopic 10.2
- [Practical circuits practice questions](/resources/cambridge-a-level-physics-9702-as-practical-circuits-practice/)
