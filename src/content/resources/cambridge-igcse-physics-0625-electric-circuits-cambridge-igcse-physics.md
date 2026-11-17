---
title: "Cambridge IGCSE Physics (0625): Electric circuits"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Electricity and magnetism"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0625"]
syllabusSeries: "For examination in 2026, 2027 and 2028"
order: 4.3
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity-and-magnetism-cambridge-igcse-physics"
    subtopic: "electric-circuits-cambridge-igcse-physics"
description: "Study guide for Cambridge IGCSE Physics 0625 section 4.3 Electric circuits: components, series and parallel rules, combined resistance and potential dividers."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

This guide covers one subtopic of the Cambridge IGCSE Physics 0625 syllabus (for examination in 2026, 2027 and 2028): **4.3 Electric circuits**, in three parts: circuit diagrams and components, series and parallel circuits, and the action of circuit components. Core content is for every candidate; content marked **Extended only** is Supplement material, examined on Papers 2 and 4. The [Electricity and magnetism study guide](/resources/igcse-physics-0625-electricity-and-magnetism/) lists every circuit symbol in words; this page focuses on solving circuits step by step.

## What 4.3 asks you to do

| Part | Core | Extended only |
|---|---|---|
| 4.3.1 Components | Draw and interpret diagrams with cells, batteries, power supplies, generators, potential dividers, switches, resistors, heaters, NTC thermistors, LDRs, lamps, motors, bells, meters, magnetising coils, transformers, fuses and relays; know how they behave | Diodes and LEDs: draw, interpret and know how they behave |
| 4.3.2 Series and parallel | Same current everywhere in series; construct and use circuits; combined e.m.f. of sources in series; combined series resistance; source current larger than each branch current; two parallel resistors less than either; advantages of parallel lamps | Junction rule (recall, use and explain); series p.d.s add; parallel branches share the same p.d.; calculate two resistors in parallel |
| 4.3.3 Action of components | p.d. across a conductor increases with its resistance for a constant current | Variable potential divider; R₁/R₂ = V₁/V₂ |

## How components behave

- **Fixed resistor:** constant resistance; limits the current.
- **Variable resistor:** resistance can be adjusted, so the current (and the brightness of a lamp in series with it) can be varied.
- **NTC thermistor:** resistance **decreases** as temperature **increases**.
- **Light-dependent resistor (LDR):** resistance **decreases** as light intensity **increases**.
- **Relay:** a small current in its coil operates a switch in a second circuit.
- **Fuse:** melts and breaks the circuit if the current is too large.
- **Extended only. Diode:** allows current in one direction only (the way the triangle in its symbol points); very high resistance the other way. **LED:** a diode that emits light when it conducts.

A diode placed in a circuit "backwards" acts like an open switch: no current flows in that branch, and any lamp in series with it stays off.

## Series circuits

In series there is only one path, so:

- the **current is the same** at every point;
- the **total resistance** is the sum: R = R₁ + R₂ + R₃ ...;
- the **e.m.f.s of cells add** if they face the same way. A cell turned round opposes the others and its e.m.f. is subtracted: three 1.5 V cells with one reversed give 1.5 + 1.5 − 1.5 = 1.5 V.
- **Extended only:** the p.d.s across the components add up to the supply p.d.

For a constant current, the component with the **larger resistance has the larger p.d.** across it (V = IR). This Core idea is the basis of every potential divider.

### Worked example 1 (Core)

A 12 V battery is connected in series with resistors of 10 Ω, 20 Ω and 30 Ω. Find the current and the p.d. across each resistor.

```
total R = 10 + 20 + 30 = 60 Ω
I = V / R = 12 / 60 = 0.20 A   (same through all three)
V₁₀ = 0.20 × 10 = 2.0 V;  V₂₀ = 4.0 V;  V₃₀ = 6.0 V
check: 2.0 + 4.0 + 6.0 = 12 V
```

The largest resistor takes the largest share of the supply p.d., as the Core rule predicts.

## Parallel circuits

In parallel, each branch is a separate path back to the source, so:

- the **current from the source is larger** than the current in any one branch;
- the **combined resistance of two resistors is less than either one alone** (adding a branch gives the charge another path);
- **Extended only:** each branch has the **same p.d.**; the current into a junction equals the current out; and for two resistors 1/R = 1/R₁ + 1/R₂.

**Why the junction rule is true (Extended only):** charge is not used up or stored at a junction, so every coulomb that arrives each second must leave each second.

**Advantages of lamps in parallel in a lighting circuit:** each lamp gets the full supply p.d. (so full brightness); each lamp can be switched on and off independently; if one lamp fails, the others stay on.

### Worked example 2 (Extended)

A 4.0 Ω resistor is in series with a parallel pair of 6.0 Ω and 12 Ω, connected to a 12 V supply. Find the supply current and the current in each branch.

```
parallel pair:  1/R = 1/6.0 + 1/12 = 3/12,  so R = 4.0 Ω
total R = 4.0 + 4.0 = 8.0 Ω
supply current I = 12 / 8.0 = 1.5 A
p.d. across 4.0 Ω = 1.5 × 4.0 = 6.0 V;  p.d. across pair = 12 − 6.0 = 6.0 V
branches: 6.0 / 6.0 = 1.0 A;  6.0 / 12 = 0.50 A
check: 1.0 + 0.50 = 1.5 A   (junction rule)
```

Note the check that 4.0 Ω is less than both 6.0 Ω and 12 Ω. If your parallel combination comes out larger than the smaller resistor, you have forgotten to invert 1/R.

**Quick checks for parallel pairs:** two equal resistors in parallel give half of one (two 20 Ω → 10 Ω). For unequal pairs, product over sum gives the same answer as the reciprocal method: (20 × 30) / (20 + 30) = 12 Ω.

## Potential dividers

Two resistors in series across a supply share the supply p.d. in the ratio of their resistances.

**Extended only:** R₁ / R₂ = V₁ / V₂. With a 6.0 V supply and resistors of 1.2 kΩ and 3.6 kΩ, the ratio is 1 : 3, so V₁ = 1.5 V and V₂ = 4.5 V. You do not need to find the current at all.

**Variable potential divider (Extended only).** If one of the resistors is replaced by a thermistor or an LDR, the output p.d. across it changes with conditions:

| Component used as R₂ (output across R₂) | Condition changes | R₂ | Output V₂ |
|---|---|---|---|
| NTC thermistor | Gets hotter | falls | falls |
| NTC thermistor | Gets colder | rises | rises |
| LDR | Gets darker | rises | rises |
| LDR | Gets brighter | falls | falls |

So an LDR in the R₂ position gives a rising output as night falls, which can switch on a lamp (through a relay, for example). To make the output rise when it gets **brighter** instead, swap the positions of the LDR and the fixed resistor and take the output across the fixed resistor.

The reasoning in words, which is what "describe the action" questions want: as it gets darker, the LDR's resistance increases, so it takes a larger share of the supply p.d., so the p.d. across it rises, while the p.d. across the fixed resistor falls by the same amount.

## Common mistakes

- Saying current is "used up" by the first lamp in series.
- Adding parallel resistances directly, or forgetting to invert 1/R.
- Saying the combined parallel resistance is "between" the two values.
- Forgetting that a reversed cell subtracts its e.m.f.
- Getting the thermistor or LDR direction backwards (both have **falling** resistance as temperature or light **increases**).
- Drawing a diode the wrong way round, then expecting current to flow.

## Exam technique

- **Draw** a circuit: use the syllabus symbols, a ruler, no gaps in wires, meters in the right places.
- **Calculate:** find the total resistance first, then the current, then the p.d.s; check that p.d.s add to the supply and currents add at junctions.
- **State** the advantages of parallel lighting: give separate points, not one point reworded.
- **Describe** a potential divider's action: chain the steps (condition → resistance → share of p.d. → output).
- **Explain** the junction rule: use the word **charge** and say it is conserved.

## Next steps

Condense this with the [electric circuits revision notes](/resources/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics-revision-notes/) and practise with the [electric circuits practice questions](/resources/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics-practice/). The previous subtopic is [electrical quantities](/resources/cambridge-igcse-physics-0625-electrical-quantities-cambridge-igcse-physics/) and the next is [electrical safety](/resources/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Physics 0625 syllabus for examination in 2026, 2027 and 2028*, Topic 4 Electricity and magnetism, section 4.3 Electric circuits (4.3.1 to 4.3.3).
