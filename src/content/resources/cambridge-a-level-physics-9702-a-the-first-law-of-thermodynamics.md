---
title: "Cambridge A Level Physics (9702): The first law of thermodynamics"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Thermodynamics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-thermodynamics"
    subtopic: "a-the-first-law-of-thermodynamics"
description: "A focused guide to 16.2 in Cambridge A Level Physics 9702: deriving W = pΔV, work done by and on a gas, ΔU = q + W, sign tables for cycles and worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **16.2 The first law of thermodynamics** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Thermodynamics study guide](/resources/a-physics-thermodynamics/) introduces the whole of Topic 16 and names the standard processes; this page concentrates on the two 16.2 outcomes and the skills examiners test with them: deriving W = pΔV, keeping the signs straight, and filling in an energy table for a cycle. For quick recall use the [First law revision notes](/resources/cambridge-a-level-physics-9702-a-the-first-law-of-thermodynamics-revision-notes/), and for exam-style questions the [First law practice questions](/resources/cambridge-a-level-physics-9702-a-the-first-law-of-thermodynamics-practice/).

## What 16.2 asks you to do

Candidates should be able to:

- **recall and use W = pΔV** for the work done when the volume of a gas changes at constant pressure, and **understand the difference between the work done by the gas and the work done on the gas**
- **recall and use the first law ΔU = q + W**, expressed in terms of the increase in internal energy, the heating of the system (energy transferred to the system by heating) and the work done on the system

The definitions of ΔU come from 16.1: internal energy is a function of state, so its change depends only on the start and end states. See the [Internal energy study guide](/resources/cambridge-a-level-physics-9702-a-internal-energy/) if that idea is not secure.

## Where W = pΔV comes from

Picture gas in a cylinder closed by a frictionless piston of area A. The gas pushes on the piston with force F = pA. If the gas expands slowly at constant pressure and the piston moves outwards a small distance Δx, the work done by the gas is

```
W = FΔx = (pA)Δx = p(AΔx) = pΔV
```

because AΔx is the increase in volume ΔV. Three conditions are built into this result:

- the **pressure is constant** throughout the change (otherwise F changes as the piston moves)
- ΔV is the **change in volume of the gas**, in m³
- the result is the work done **by** the gas when it expands

On a pressure–volume graph, a constant-pressure change is a horizontal line, and pΔV is the area of the rectangle beneath it. A change at constant volume is a vertical line with no area beneath it: **no work is done when the volume does not change**, however much the pressure changes.

## Work done by the gas versus work done on the gas

These are the same amount of energy viewed from opposite sides.

| Change | Work done by the gas | Work done on the gas (W in the first law) |
|---|---|---|
| Expansion (ΔV positive) | +pΔV | −pΔV |
| Compression (ΔV negative) | negative | +p\|ΔV\| |
| Constant volume | 0 | 0 |

When a gas expands, it pushes its surroundings back and transfers energy to them, so energy leaves the gas. When the surroundings compress a gas, they transfer energy into it. The first law in the 9702 syllabus uses **work done on** the system, so an expansion always enters the equation with a minus sign.

## The first law: ΔU = q + W

The first law is the principle of conservation of energy applied to a system that can be heated and can have work done on it:

```
ΔU = q + W
ΔU = increase in internal energy of the system
q  = energy transferred to the system by heating
W  = work done on the system
```

Every term is defined as energy going **into** the system, so each one is positive for an inflow and negative for an outflow:

| Term | Positive when | Negative when |
|---|---|---|
| ΔU | Internal energy rises (for an ideal gas, temperature rises) | Internal energy falls (temperature falls) |
| q | System is heated by its surroundings | System loses energy to its surroundings by heating |
| W | Work is done on the system (compression) | System does work on its surroundings (expansion) |

A reliable routine: write the three symbols, decide each sign from the physics **before** putting in numbers, and only then substitute.

### Special cases worth recognising

- **Constant volume:** W = 0, so ΔU = q. All the energy supplied by heating goes into internal energy.
- **No heating (a very rapid change, or a well-insulated system):** q = 0, so ΔU = W. A rapid compression raises the temperature; a rapid expansion lowers it.
- **Ideal gas at constant temperature:** ΔU = 0, so q = −W. The gas must lose by heating exactly the work done on it.
- **Complete cycle:** the gas returns to its starting state, so ΔU = 0 overall, and the net heating equals the net work done by the gas.

## Worked example 1: expansion at constant pressure

A gas is kept at a constant pressure of 1.5 × 10⁵ Pa while it is heated. Its volume increases from 4.0 × 10⁻³ m³ to 6.5 × 10⁻³ m³ and it receives 950 J by heating. Calculate the change in internal energy.

```
ΔV = 6.5 × 10⁻³ − 4.0 × 10⁻³ = 2.5 × 10⁻³ m³
work done BY the gas = pΔV = 1.5 × 10⁵ × 2.5 × 10⁻³ = 375 J
work done ON the gas   W = −375 J
q = +950 J  (heated)
ΔU = q + W = 950 + (−375) = +575 J
```

*Annotation.* Of the 950 J supplied, 375 J leaves again as work pushing the surroundings back, so only 575 J stays as internal energy. The positive ΔU means the temperature of the gas rises. Writing ΔU = 950 + 375 is the most common error on this kind of question.

## Worked example 2: completing a table for a cycle

A fixed mass of monatomic ideal gas is taken round a rectangular cycle on a p–V graph:

- A (1.0 × 10⁵ Pa, 1.0 × 10⁻³ m³) to B (2.0 × 10⁵ Pa, 1.0 × 10⁻³ m³): heated at constant volume
- B to C (2.0 × 10⁵ Pa, 2.5 × 10⁻³ m³): expands at constant pressure
- C to D (1.0 × 10⁵ Pa, 2.5 × 10⁻³ m³): cooled at constant volume
- D to A: compressed at constant pressure

For this gas U = (3/2)pV (from pV = nRT and U = (3/2)nRT), so U_A = 150 J, U_B = 300 J, U_C = 750 J and U_D = 375 J.

| Stage | W (on gas) / J | ΔU / J | q = ΔU − W / J |
|---|---|---|---|
| A → B | 0 (no volume change) | +150 | +150 |
| B → C | −2.0 × 10⁵ × 1.5 × 10⁻³ = −300 | +450 | +750 |
| C → D | 0 | −375 | −375 |
| D → A | +1.0 × 10⁵ × 1.5 × 10⁻³ = +150 | −225 | −375 |
| Whole cycle | −150 | 0 | +150 |

*Annotation.* Work the W column first: it needs only pΔV and the direction of the volume change. Then ΔU from the change of state, then q by rearranging the first law. Two checks catch most slips: the ΔU column must sum to zero, because the gas returns to state A; and the net q (+150 J) must equal the net work done by the gas (150 J), which is the area enclosed by the rectangle on the p–V graph (1.0 × 10⁵ Pa × 1.5 × 10⁻³ m³).

## Worked example 3: a rapid compression

When a bicycle pump outlet is blocked and the handle is pushed in quickly, the air inside gets warm. Explain this using the first law.

*Model answer.* The compression is rapid, so there is little time for energy to be transferred by heating: q ≈ 0 [1]. Work is done on the air by the piston, so W is positive [1]. From ΔU = q + W, ΔU is positive, so the internal energy, and therefore the mean kinetic energy of the molecules and the temperature, increases [1].

*Annotation.* If the handle is then held still, the warm air cools back to room temperature at constant volume: W = 0, ΔU is negative, so q is negative (energy leaves by heating). Explaining both stages is a common two-part question.

## Common mistakes

- **Adding the work done by the gas** instead of subtracting it. In ΔU = q + W, an expansion gives a negative W.
- **Using W = pΔV when the pressure changes.** The equation applies at constant pressure only.
- **Forgetting unit conversions**: cm³ to m³ is × 10⁻⁶, litres (dm³) to m³ is × 10⁻³, kPa to Pa is × 10³.
- **Saying "no heat, so no temperature change".** Temperature can change with q = 0 if work is done.
- **Saying "constant temperature, so no energy transfer".** For an ideal gas at constant temperature ΔU = 0, but q and W can each be large.
- **Using "heat" for internal energy.** q is energy transferred by heating; U is the energy the system has.

## Exam technique for the command words

- **State** (the first law): write ΔU = q + W and define each symbol, including the words "increase in", "to the system" and "on the system".
- **Show that** (W = pΔV): start from force = pressure × area and work = force × distance, and say that AΔx is the change in volume.
- **Calculate** or **determine**: show a sign for every term before substituting, and give ΔU with its sign.
- **Explain** (a temperature change): name which of q and W is zero or small, deduce the sign of ΔU, then link ΔU to the mean kinetic energy of the molecules.
- **Complete the table**: fill W first, then ΔU, then q, and check that ΔU sums to zero round a cycle.

## Related resources

- [Thermodynamics study guide](/resources/a-physics-thermodynamics/) — the whole of Topic 16
- [First law revision notes](/resources/cambridge-a-level-physics-9702-a-the-first-law-of-thermodynamics-revision-notes/)
- [First law practice questions](/resources/cambridge-a-level-physics-9702-a-the-first-law-of-thermodynamics-practice/)
- [Internal energy study guide](/resources/cambridge-a-level-physics-9702-a-internal-energy/) — what ΔU measures

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
