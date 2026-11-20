---
title: "AQA A-Level Chemistry (7405): Born–Haber cycles"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Thermodynamics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "A"
order: 8.1
syllabusTopics:
  - qualification: "a-level"
    topic: "thermodynamics-7405"
    subtopic: "born-haber-cycles-7405"
description: "AQA 7405 Born-Haber cycles in depth: defining each enthalpy term, constructing cycles for NaCl, MgCl2 and MgO, comparing with the perfect ionic model and calculating enthalpies of solution."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.1.8.1 Born–Haber cycles** of the AQA A-level Chemistry specification (7405), for teaching from September 2015. It is A-level only content, examined on Paper 1 (and Paper 3). It is A-level only content. Lattice enthalpy cannot be measured directly, so it is found with a cycle that applies Hess's law to the formation of an ionic solid from its elements. The specification asks you to define seven terms, construct cycles, calculate lattice enthalpies or other missing values, compare experimental and theoretical lattice enthalpies, and use the cycles to find enthalpies of solution. The [Thermodynamics study guide](/resources/aqa-a-level-chemistry-thermodynamics/) covers the whole topic. Recall is in the [Born–Haber cycles revision notes](/resources/aqa-a-level-chemistry-7405-born-haber-cycles-revision-notes/), and questions are in the [Born–Haber cycles practice questions](/resources/aqa-a-level-chemistry-7405-born-haber-cycles-practice/).

## What the specification asks

| Content and skills | What you must be able to do |
|---|---|
| Lattice enthalpy defined as enthalpy of lattice dissociation or enthalpy of lattice formation | Give either definition, and know which one is being used |
| Born–Haber cycles using enthalpy of formation, ionisation energy, enthalpy of atomisation, bond enthalpy and electron affinity | Define each term and use them in a cycle |
| Construct cycles to calculate lattice enthalpies, or to calculate one of the other enthalpy changes | Draw the cycle and solve for any unknown |
| Compare lattice enthalpies from Born–Haber cycles with those from a perfect ionic model, as evidence for covalent character | Interpret the differences |
| Calculate enthalpies of solution from lattice enthalpies and enthalpies of hydration | Use the second type of cycle |

## Definitions you must know

| Term | Definition (all values per mole, under standard conditions) |
|---|---|
| Enthalpy of formation, ΔfH⦵ | The enthalpy change when one mole of a compound is formed from its elements in their standard states |
| First ionisation energy | The enthalpy change when one mole of gaseous atoms loses one mole of electrons to form one mole of gaseous 1+ ions |
| Second ionisation energy | The enthalpy change when one mole of gaseous 1+ ions loses one mole of electrons to form one mole of gaseous 2+ ions |
| Enthalpy of atomisation, ΔatH⦵ | The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state |
| Bond enthalpy (dissociation) | The enthalpy change when one mole of a covalent bond is broken in the gaseous state |
| First electron affinity | The enthalpy change when one mole of gaseous atoms gains one mole of electrons to form one mole of gaseous 1− ions |
| Second electron affinity | The enthalpy change when one mole of gaseous 1− ions gains one mole of electrons to form one mole of gaseous 2− ions |
| Enthalpy of lattice formation | The enthalpy change when one mole of an ionic solid is formed from its gaseous ions (always exothermic) |
| Enthalpy of lattice dissociation | The enthalpy change when one mole of an ionic solid is broken into its gaseous ions (always endothermic) |
| Enthalpy of hydration | The enthalpy change when one mole of gaseous ions is dissolved in water to form one mole of aqueous ions |

Signs: ionisation energies are endothermic. Atomisation and bond dissociation are endothermic. The first electron affinity is usually exothermic, but the second electron affinity of an element such as oxygen is **endothermic**, because an electron is added to an ion that is already negative. Lattice formation and hydration are exothermic.

## Building the cycle

A Born–Haber cycle is a Hess's law diagram. The upper route goes from the elements, through gaseous atoms, then gaseous ions, to the solid via lattice formation. The lower route is the direct formation from the elements. The two routes must have the same total enthalpy change:

**ΔfH = ΔatH(metal) + IE(s) + ΔatH(non-metal) + EA(s) + ΔHlattice formation**

### Steps

1. Start with the elements in their standard states.
2. Atomise the metal and the non-metal to gaseous atoms. For a diatomic element such as Cl₂ the atomisation of one mole of atoms is **half the bond enthalpy**.
3. Ionise the metal atom (all required ionisation energies).
4. Add electrons to the non-metal atoms (electron affinities).
5. Form the solid lattice from the gaseous ions.
6. Draw a direct arrow from elements to the solid for ΔfH.
7. Equate the routes and solve.

Remember to multiply for the stoichiometry: MgCl₂ needs two chlorine atoms, so two atomisation steps (or a full bond enthalpy) and two electron affinities.

### Worked example 1: sodium chloride

Data (kJ mol⁻¹): ΔfH(NaCl) −411; ΔatH(Na) +107; first IE (Na) +496; bond enthalpy Cl–Cl +244; first EA (Cl) −349. Find the lattice enthalpy of formation.

```
Na(g) + Cl(g)  →  Na⁺(g) + Cl⁻(g)  →  NaCl(s)
Na(s) + ½Cl₂(g) ──────── ΔfH = −411 ───────► NaCl(s)
```

Route 2 (via gaseous ions):

```
ΔatH(Na)         = +107
IE₁(Na)          = +496
½ bond enthalpy  = +122      (½ × 244)
EA₁(Cl)          = −349
lattice formation = x
```

```
−411 = 107 + 496 + 122 − 349 + x
−411 = 376 + x
x = −787 kJ mol⁻¹
```

The enthalpy of lattice formation is −787 kJ mol⁻¹, so the enthalpy of lattice dissociation is +787 kJ mol⁻¹.

### Worked example 2: magnesium chloride

Data (kJ mol⁻¹): ΔfH(MgCl₂) −641; ΔatH(Mg) +148; IE₁ +738; IE₂ +1451; bond enthalpy Cl–Cl +244; EA₁(Cl) −349.

```
ΔatH(Mg)          = +148
IE₁ + IE₂         = 738 + 1451 = +2189
2 × ½ bond enthalpy = +244    (2 Cl atoms)
2 × EA₁           = −698
lattice formation = x
−641 = 148 + 2189 + 244 − 698 + x
−641 = 1883 + x
x = −2524 kJ mol⁻¹
```

Mg²⁺ has a higher charge than Na⁺, so the lattice enthalpy is much more exothermic.

### Worked example 3: magnesium oxide (second electron affinity)

Data (kJ mol⁻¹): ΔfH(MgO) −602; ΔatH(Mg) +148; IE₁ + IE₂ = +2189; ΔatH(O) = ½ bond enthalpy of O₂ = +249; EA₁(O) −141; EA₂(O) +798.

```
−602 = 148 + 2189 + 249 − 141 + 798 + x
−602 = 3243 + x
x = −3845 kJ mol⁻¹
```

The second electron affinity is positive because the incoming electron is repelled by the O⁻ ion. This is made up for by the very large lattice enthalpy.

### Worked example 4: finding a different quantity

Use the sodium chloride cycle, with ΔHlattice formation = −787, to find the first electron affinity of chlorine, given the other data.

```
−411 = 107 + 496 + 122 + EA + (−787)
−411 = −62 + EA
EA = −349 kJ mol⁻¹
```

## Comparing experimental and theoretical lattice enthalpies

The **perfect ionic model** assumes that the ions are perfectly spherical with charge distributed evenly, and that the bonding is entirely electrostatic. Theoretical lattice enthalpies are calculated from this model using charges and ionic radii. Experimental values come from the Born–Haber cycle, which uses real measured data and so includes any covalent character.

| Compound | Born–Haber / kJ mol⁻¹ | Perfect ionic model / kJ mol⁻¹ | Agreement |
|---|---|---|---|
| NaCl | −787 | −770 | Close, so bonding is nearly purely ionic |
| AgCl | −905 | −864 | Born–Haber value is more exothermic |
| AgI | −889 | −778 | Born–Haber value is much more exothermic |

(These values are illustrative.)

### Interpretation

If the experimental value is **more exothermic** than the theoretical one, there is an extra attraction beyond the purely ionic model: the bonding has some **covalent character**. This occurs when the positive ion is small and highly charged (large charge density) and polarises the electron cloud of a large negative ion, drawing electron density between the nuclei. The effect is bigger for larger anions (I⁻ more than Cl⁻), which are more easily polarised. If the two values agree closely, the ionic model is a good description.

## Enthalpy of solution

Dissolving an ionic solid can be shown on a cycle: the lattice is broken into gaseous ions, and the ions are hydrated.

```
ΔsolH = ΔH(lattice dissociation) + ΣΔhydH(ions)
```

### Worked example 5

Lattice dissociation enthalpy of NaCl +787 kJ mol⁻¹. Enthalpy of hydration of Na⁺ −406 and Cl⁻ −364 kJ mol⁻¹. Find the enthalpy of solution.

```
ΔsolH = +787 + (−406) + (−364) = +17 kJ mol⁻¹
```

A small difference between large numbers, so the enthalpy of solution is very sensitive to the data used.

## Common mistakes

- Using lattice enthalpy of formation where dissociation is needed (or vice versa) so the sign is wrong.
- Using the full bond enthalpy for atomisation of one chlorine atom (it should be half).
- Missing the second ionisation energy for Group 2 metals.
- Missing the second electron affinity for oxide ions.
- Not doubling steps for MgCl₂.
- Drawing the cycle with arrows in the wrong direction.
- Giving the electron affinity of a negative ion as negative.
- Explaining covalent character without referring to polarisation or charge density.

## Exam technique for the command words

- **Define**: include "one mole", "gaseous", and the product (for example "1− ions").
- **Calculate**: draw the cycle and write the equation for the sum of the steps.
- **Explain** the difference between theoretical and experimental values: mention covalent character and polarisation.
- **Compare**: give the trend in lattice enthalpy and the reason (charge and radius).

## Frequently asked questions

**Why is the first electron affinity negative but the second positive?**
The first electron is attracted by the nucleus. The second is added to a negative ion, so it is repelled, and energy has to be supplied.

**Which lattice enthalpy definition will the exam use?**
Either may be used. Check the sign of the data or the wording of the question.

**Does the Born–Haber cycle apply to covalent compounds?**
No. It is used for ionic compounds, and differences from the ionic model show the extent of covalent character.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.8.1 Born–Haber cycles.
