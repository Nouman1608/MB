---
title: "A Level Chemistry: Lattice Energy, Entropy and Gibbs Free Energy — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Chemical energetics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 23.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-chemical-energetics"
    subtopic: "a-lattice-energy-and-born-haber-cycles"
  - qualification: "a-level"
    topic: "a-chemical-energetics"
    subtopic: "a-enthalpies-of-solution-and-hydration"
  - qualification: "a-level"
    topic: "a-chemical-energetics"
    subtopic: "a-entropy-change"
  - qualification: "a-level"
    topic: "a-chemical-energetics"
    subtopic: "a-gibbs-free-energy-change"
description: "Condensed recall notes on Born-Haber cycles, entropy change and the Gibbs equation for Cambridge A Level Chemistry 9701."
author: "nouman-ahmed"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Lattice Energy, Entropy and Gibbs Free Energy study guide](/resources/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy/).

## Definitions that must be exact

| Term | Definition |
|---|---|
| **Lattice energy** ΔH_latt | Enthalpy change when **one mole** of an ionic compound is formed **from its gaseous ions** |
| **Enthalpy of atomisation** | Enthalpy change when **one mole of gaseous atoms** is formed from the element in its standard state |
| **First electron affinity** | Enthalpy change when one mole of gaseous atoms each gain an electron to form 1− ions |
| **Enthalpy of hydration** | Enthalpy change when one mole of gaseous ions is dissolved in an excess of water |
| **Enthalpy of solution** | Enthalpy change when one mole of solute dissolves to infinite dilution |

Two details carry marks: **"one mole"** in every definition, and **"gaseous"** in the lattice, atomisation, affinity and hydration definitions.

Lattice energy defined this way is always **exothermic** (negative) — bonds are being formed. First electron affinity is exothermic; **second and subsequent electron affinities are endothermic**, because an electron is being forced onto an already negative ion.

## What controls lattice energy magnitude

```
lattice energy  proportional to  (charge+ x charge-) / (r+ + r-)
```

- **Greater ionic charge → more exothermic.** This dominates.
- **Smaller ionic radius → more exothermic.**

So MgO (2+/2−, small ions) has a far more exothermic lattice energy than NaCl (1+/1−). Charge matters more than size — compare MgO with NaCl and the charge product quadruples.

## Born–Haber cycles

Apply Hess's law around the cycle. The reliable method:

1. Write ΔH_f at the bottom, elements in standard states.
2. Go up via atomisation, then ionisation energies (cation) and electron affinities (anion) to reach gaseous ions.
3. Lattice energy takes you from gaseous ions down to the solid.
4. Set the two routes equal.

```
delta-H_f  =  sum(atomisation)  +  sum(IE)  +  sum(EA)  +  delta-H_latt
```

**Watch the multipliers.** Cl₂ → 2Cl needs 2 × atomisation; Mg²⁺ needs both first *and* second ionisation energy.

Comparing the experimental lattice energy with the theoretical value from a purely ionic model reveals **covalent character** — a large discrepancy means significant polarisation of the anion by the cation.

## Entropy

**Entropy S** is a measure of the **disorder**, or the number of ways energy and particles can be arranged.

```
delta-S = S(products) - S(reactants)      units J K^-1 mol^-1
```

Note the units: **J**, not kJ. Gibbs calculations mix them, and this is where most arithmetic marks vanish.

Order of entropy: **gas ≫ liquid > solid**.

Predict the sign by counting **moles of gas**:

| Change | ΔS |
|---|---|
| More moles of gas produced | Positive |
| Fewer moles of gas | Negative |
| Solid → liquid → gas | Positive |
| Dissolving a solid | Usually positive |

If the number of gas moles is unchanged, ΔS is small and its sign needs closer thought.

## Gibbs free energy

```
delta-G = delta-H - T delta-S       (T in KELVIN, delta-S converted to kJ)
```

**ΔG negative → reaction is feasible.** ΔG = 0 gives the temperature at which feasibility changes:

```
T = delta-H / delta-S
```

| ΔH | ΔS | Feasible when |
|---|---|---|
| − | + | **Always** |
| + | − | **Never** |
| − | − | Low temperature |
| + | + | High temperature |

Those four rows answer most Gibbs questions on sight.

**As always: feasible ≠ fast.** A reaction with a very negative ΔG may have an activation energy so high that no observable change occurs.

## Exam traps

- Omitting "one mole" or "gaseous" from a definition.
- Mixing J and kJ in ΔG = ΔH − TΔS.
- Using °C instead of K.
- Forgetting the second ionisation energy for a 2+ ion, or the ×2 for a diatomic atomisation.
- Saying second electron affinity is exothermic.
- Concluding that a feasible reaction will be observed.

## Self-test

1. Define lattice energy precisely.
2. Why is the second electron affinity endothermic?
3. Which has the more exothermic lattice energy, NaCl or MgO, and why?
4. State the Gibbs equation and the condition for feasibility.
5. A reaction has ΔH positive and ΔS positive. When is it feasible?

**Answers:** 1. The enthalpy change when one mole of an ionic compound is formed from its gaseous ions. 2. An electron is being added to an already negatively charged ion, so energy must be supplied to overcome the repulsion. 3. MgO — the ions carry double the charge and are smaller, and lattice energy is proportional to the product of the charges divided by the sum of the radii. 4. ΔG = ΔH − TΔS; the reaction is feasible when ΔG is negative. 5. At high temperature, where TΔS exceeds ΔH.
