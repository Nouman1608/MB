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
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by farhat-ul-ain-sehgal on 2026-09-29."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-energetics-entropy-revision-notes--03-second-electron-affinity.webp" width="900" height="940" alt="An energy-level diagram to scale for oxygen. O(g) is at zero, O minus is 141 kJ per mole lower (first electron affinity, exothermic) and O2 minus is 657 kJ per mole above zero because the second electron affinity is +798 kJ per mole (endothermic). The electron is repelled by the ion that is already 1 minus." loading="lazy">
  <figcaption>The second electron is forced onto an ion that is already negative, so energy must be supplied.</figcaption>
</figure>


## What controls lattice energy magnitude

```
lattice energy  proportional to  (charge+ x charge-) / (r+ + r-)
```

- **Greater ionic charge → more exothermic.** This dominates.
- **Smaller ionic radius → more exothermic.**

So MgO (2+/2−, small ions) has a far more exothermic lattice energy than NaCl (1+/1−). Charge matters more than size — compare MgO with NaCl and the charge product quadruples.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy--02-lattice-energy-charge-radius.webp" width="900" height="1170" alt="Two ion pairs are drawn to scale. Na+ and Cl- have charges of 1 and centres 0.283 nm apart; Mg2+ and O2- have charges of 2 and centres 0.212 nm apart. The MgO lattice energy bar, -3791 kJ per mole, is about five times that of NaCl, -787." loading="lazy">
  <figcaption>Higher ionic charge and smaller ionic radius give a more exothermic lattice energy (and hydration enthalpy).</figcaption>
</figure>


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

*(Background, beyond the 9701 syllabus — included for interest/extension only, not examinable.)* Comparing the experimental lattice energy with the theoretical value from a purely ionic model reveals **covalent character** — a large discrepancy means significant polarisation of the anion by the cation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy--01-born-haber-nacl.webp" width="900" height="1090" alt="Energy level diagram: Na(s) and half a Cl2 at 0 rise through atomisation of Na (+107), atomisation of Cl (+122) and ionisation of Na (+496) to 725, fall 349 on electron affinity to 376, then fall 787 as the lattice forms to minus 411. A direct arrow shows the enthalpy of formation, minus 411, so lattice energy is minus 787 kJ per mole." loading="lazy">
  <figcaption>Born-Haber cycle for NaCl: the five steps sum to the enthalpy of formation, giving a lattice energy of -787 kJ mol-1.</figcaption>
</figure>


## Enthalpies of solution and hydration

**Enthalpy of hydration** ΔH_hyd — enthalpy change when **one mole of a gaseous ion** dissolves in water to form aqueous ions. Always **exothermic**, dominated by the attraction between the ion and surrounding polar water molecules.

**Enthalpy of solution** ΔH_sol — enthalpy change when one mole of an ionic solid dissolves to form an infinitely dilute solution. Can be **either sign**, depending on the balance between the lattice-breaking energy and the hydration energy released.

**The cycle:** dissolving is broken into two steps — first break the lattice apart into gaseous ions (the reverse of lattice energy, so +|ΔH_latt|), then hydrate those gaseous ions:

```
delta-H_sol = -delta-H_latt + delta-H_hyd(cation) + delta-H_hyd(anion)
```

**Worked example.** ΔH_latt(NaCl) = −787 kJ mol⁻¹, ΔH_hyd(Na⁺) = −406 kJ mol⁻¹, ΔH_hyd(Cl⁻) = −364 kJ mol⁻¹:

```
delta-H_sol = -(-787) + (-406) + (-364) = 787 - 770 = +17 kJ/mol
```

A small **positive** value is typical for simple 1:1 salts like NaCl — the two large terms nearly cancel, so the small residual can fall on either side of zero.

**Charge and radius:** hydration enthalpy becomes **more exothermic** as ionic charge **increases** and ionic radius **decreases** — the same size/charge logic as lattice energy, which is why the two often move together and partly cancel in the solution cycle.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy--04-solution-cycle.webp" width="900" height="980" alt="Energy level diagram: NaCl(s) at 0 rises 787 to gaseous ions, falls 406 as Na+ is hydrated and 364 as Cl- is hydrated, ending at +17 kJ per mole above the solid. The enthalpy of solution is therefore +17." loading="lazy">
  <figcaption>Dissolving NaCl: break the lattice (+787), then hydrate both ions (-406, -364), giving +17 kJ mol-1.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy--05-what-raises-entropy.webp" width="900" height="1110" alt="Three panels. Particles in a solid sit in fixed places, in a liquid slide past each other, and in a gas move freely, so entropy rises. Heating makes particles move faster, raising entropy. A reaction that makes gas (CaCO3 decomposing) has positive entropy change, while one that uses up gas (ethene plus steam forming ethanol) has negative." loading="lazy">
  <figcaption>Entropy rises from solid to liquid to gas, with temperature, and when a reaction produces more moles of gas.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy--06-entropy-change-calc.webp" width="900" height="1070" alt="Bar chart: CaCO3(s) 92.9 J per K per mole against products CaO(s) 40.0 stacked with CO2(g) 213.6, total 253.6. The difference, +160.7, is the entropy change; most of it is the gas." loading="lazy">
  <figcaption>ΔS = ΣS°(products) − ΣS°(reactants) = +160.7 J K-1 mol-1 for CaCO3 → CaO + CO2.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy--08-gibbs-sign-cases.webp" width="900" height="1130" alt="Four small graphs of ΔG against temperature, with shaded regions above and below zero. ΔH negative with ΔS positive is always feasible; ΔH positive with ΔS negative is never feasible; both positive is feasible above a temperature; both negative is feasible below a temperature." loading="lazy">
  <figcaption>The signs of ΔH and ΔS decide whether a reaction is feasible at all temperatures, never, or only above or below a particular temperature.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy--07-gibbs-vs-temperature.webp" width="900" height="1000" alt="Graph of ΔG against temperature: a straight line starting at +178 kJ per mole, sloping down at -0.165 kJ per K, crossing zero at 1079 K. Above 1079 K ΔG is negative and the reaction is feasible; below it is not. A note says feasible does not mean fast." loading="lazy">
  <figcaption>ΔG = ΔH − TΔS gives a straight line whose intercept is ΔH and gradient is −ΔS; it crosses zero at T = ΔH/ΔS = 1079 K.</figcaption>
</figure>

## Frequently asked questions

**What must a lattice energy definition include to get full marks?**
It must say one mole of the ionic compound is formed from its gaseous ions. "One mole" and "gaseous" are the two details that carry marks in the Cambridge 9701 definitions.

**What multipliers do you need in a Born-Haber cycle?**
Use twice the atomisation enthalpy when two atoms of an element are needed, as for Cl₂ in MgCl₂. A 2+ ion such as Mg²⁺ needs both the first and second ionisation energies.

**How do you predict the sign of an entropy change?**
Count the moles of gas. More moles of gas produced gives a positive ΔS, fewer gives a negative ΔS, and changes from solid to liquid to gas are positive.

**When is a reaction with positive ΔH and positive ΔS feasible?**
Only at high temperature, when TΔS becomes larger than ΔH so that ΔG = ΔH − TΔS is negative. The changeover temperature is T = ΔH/ΔS.
