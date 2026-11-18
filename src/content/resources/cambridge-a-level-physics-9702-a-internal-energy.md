---
title: "Cambridge A Level Physics (9702): Internal energy"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Thermodynamics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-thermodynamics"
    subtopic: "a-internal-energy"
description: "Cambridge A Level Physics 9702 subtopic 16.1: internal energy as random molecular kinetic and potential energy, a function of state linked to temperature."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **16.1 Internal energy** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Thermodynamics study guide](/resources/a-physics-thermodynamics/) introduces the whole of Topic 16 and the first law; this page stays with internal energy alone: what exactly is being added up, what is left out, why it depends only on the state of a system, and how a temperature rise connects to it at the molecular level. For quick recall use the [Internal energy revision notes](/resources/cambridge-a-level-physics-9702-a-internal-energy-revision-notes/), and for exam-style questions the [Internal energy practice questions](/resources/cambridge-a-level-physics-9702-a-internal-energy-practice/).

## What 16.1 asks you to do

The syllabus lists two outcomes. Candidates should be able to:

- understand that internal energy is **determined by the state of the system** and that it can be expressed as **the sum of a random distribution of kinetic and potential energies** associated with the molecules of a system
- **relate a rise in temperature** of an object to an increase in its internal energy

Both outcomes are tested mainly with "state", "explain" and "suggest" questions, but they also underpin calculations in 16.2 and in Topic 15 (ideal gases). Every phrase in the first outcome carries meaning, so it is worth taking it apart.

## Reading the definition phrase by phrase

**"The sum"** means a total over every molecule, not an average. A large block of iron at 20 °C has more internal energy than a small one at the same temperature, simply because it contains more molecules. Temperature, by contrast, is linked to the *mean* kinetic energy per molecule and does not depend on how much material there is.

**"Random"** excludes ordered energy. If a sealed box of gas is carried up a staircase, the box gains gravitational potential energy, but every molecule gains it together, in an ordered way. If the box is moving along a corridor, every molecule shares the same drift velocity. Neither of these counts as internal energy. Internal energy is the energy of the jostling, disorganised motion and arrangement of molecules *relative to the centre of mass* of the object.

**"Distribution"** reminds you that molecules do not all have the same energy. In a gas at a fixed temperature some molecules move slowly and some very fast; collisions constantly reshuffle the energies. The internal energy is the sum over this whole spread.

**"Kinetic energies"** are the energies of random motion: molecules in a gas move freely and collide; molecules in a liquid move past one another; molecules in a solid vibrate about fixed positions.

**"Potential energies"** come from the forces between molecules. Taking the potential energy as zero when molecules are infinitely far apart, molecules that attract each other have **negative** potential energy when they are close. Molecules in a solid sit deep in these potential wells; in a liquid they are slightly further apart; in a gas they are so far apart that the potential energy is close to zero. Pulling molecules apart against their attraction therefore *increases* the potential energy, making it less negative.

## Why internal energy is a function of state

The "state" of a system is described by quantities such as its pressure, volume, temperature, phase and amount of substance. Once these are fixed, the arrangement of the molecules and their spread of speeds are fixed too, so the sum of their kinetic and potential energies is fixed. It does not matter how the system got there.

A practical consequence: a beaker of water can be warmed from 20 °C to 30 °C either by heating it on a hotplate or by stirring it vigorously with a paddle. The routes involve completely different energy transfers, but the final state is the same, so the final internal energy is the same. This is why the first law (16.2) is written in terms of a *change* ΔU, and why ΔU around any closed cycle is zero.

It also tells you what internal energy is **not**. "Heat" and "work" describe energy being *transferred*; they belong to a process. A system does not "contain heat". It contains internal energy, which heating and working can change.

## Relating temperature rise to internal energy

The second outcome is a one-way link, and the direction matters.

**Temperature rise implies an increase in internal energy.** The thermodynamic temperature of a substance is a measure of the mean random kinetic energy of its molecules. If the temperature rises, the mean kinetic energy per molecule rises, so the total kinetic energy rises. In a solid or liquid the hotter molecules also vibrate with larger amplitude and their mean separation increases slightly (thermal expansion), so the potential energy rises as well. Either way, the internal energy increases.

**An increase in internal energy does not always imply a temperature rise.** During melting or boiling, energy supplied by heating goes into separating the molecules, raising their potential energy, while their mean kinetic energy stays the same. The temperature stays constant even though the internal energy is increasing.

### The ideal gas special case

An ideal gas has no intermolecular forces (except during collisions), so its molecules have **no potential energy**, and its internal energy is purely the random kinetic energy of its molecules. From Topic 15, the mean translational kinetic energy of a molecule is (3/2)kT. For a gas whose molecules have only translational kinetic energy (a monatomic ideal gas):

```
U = N × (3/2)kT = (3/2)nRT
```

So U ∝ T for a fixed amount of such a gas, and doubling the thermodynamic temperature doubles the internal energy. This is the clearest example of the second outcome.

## Worked example 1: internal energy of a sample of helium

A rigid sealed container holds 0.50 mol of helium, which may be treated as a monatomic ideal gas. The gas is heated from 290 K to 350 K. Calculate the mean kinetic energy of a molecule at 290 K, the internal energy at 290 K and the increase in internal energy.

```
mean KE per molecule = (3/2)kT = 1.5 × 1.38 × 10⁻²³ × 290 = 6.00 × 10⁻²¹ J
number of molecules N = nN_A = 0.50 × 6.02 × 10²³ = 3.01 × 10²³
U at 290 K = N × (3/2)kT = 3.01 × 10²³ × 6.00 × 10⁻²¹ = 1.81 × 10³ J
increase ΔU = (3/2)nRΔT = 1.5 × 0.50 × 8.31 × 60 = 374 J
```

*Annotation.* The internal energy is the sum of molecular kinetic energies only because the gas is ideal: there is no potential energy term. The container is rigid, so the gas does no work, and all 374 J must have been supplied by heating. Notice that ΔU depends only on ΔT, not on the starting temperature.

## Worked example 2: an annotated model answer on melting

*Question.* A block of ice at 0 °C is heated and melts completely to water at 0 °C. Explain, in terms of molecules, why the internal energy of the block increases even though its temperature does not change. **[3]**

*Model answer.* Internal energy is the sum of the random kinetic and potential energies of the molecules. The temperature is constant, so the mean kinetic energy of the molecules does not change [1]. Energy is needed to break the bonds holding the molecules in the solid structure, so the molecules move further apart against their attractive forces [1], and their potential energy increases (becomes less negative). The total of kinetic and potential energy therefore increases [1].

*Annotation.* The first mark is for linking constant temperature to constant mean kinetic energy. The second needs the idea of doing work against intermolecular attraction, not just "the bonds break". The third needs the sum: an answer that mentions only potential energy, without stating that kinetic energy is unchanged, leaves the reasoning incomplete.

## Worked example 3: ordered energy becoming internal energy

A 2.0 kg steel block rides on the flat bed of a lorry moving at 20 m s⁻¹. The block has kinetic energy ½ × 2.0 × 20² = 400 J, but none of this is internal energy, because every molecule shares the same velocity. The lorry brakes and the block slides forward along the bed before friction stops it. The 400 J of ordered kinetic energy is transferred by frictional forces into random motion of the molecules of the block and the bed. Their internal energy increases by 400 J in total, and their temperatures rise slightly. Energy has moved from an ordered form to a disordered one: that is what an increase in internal energy looks like.

## Common mistakes

- **Saying internal energy is "the kinetic energy of the molecules"** and leaving out the potential energy. The definition needs both, and the word "random".
- **Writing "the total heat in a body"**. Heat is energy transferred because of a temperature difference; it is not stored.
- **Including the kinetic or gravitational potential energy of the whole object.** Only random, molecular energy counts.
- **Saying the temperature rises during melting** because energy is supplied. The mean kinetic energy is constant; only the potential energy rises.
- **Claiming an ideal gas has potential energy.** It has none, because there are no intermolecular forces between collisions.
- **Confusing "sum" and "mean".** Two objects at the same temperature have the same mean molecular kinetic energy but can have very different internal energies.

## Exam technique for the command words

- **State** (what is meant by internal energy): "the sum of the random kinetic and potential energies of the molecules". Keep "sum", "random", "kinetic", "potential" and "molecules".
- **Explain** (why a temperature rise increases internal energy, or why melting does): link temperature to mean kinetic energy, then say what happens to potential energy, then add them.
- **Suggest** (whether internal energy changes in an unfamiliar situation): ask whether the state of the system changes. If temperature, volume and phase are all unchanged, the internal energy is unchanged.
- **Calculate** or **show that** (ideal gas): write U = N(3/2)kT or (3/2)nRT, state that it applies because there is no potential energy, and keep T in kelvin.

## Related resources

- [Thermodynamics study guide](/resources/a-physics-thermodynamics/) — the whole of Topic 16
- [Internal energy revision notes](/resources/cambridge-a-level-physics-9702-a-internal-energy-revision-notes/)
- [Internal energy practice questions](/resources/cambridge-a-level-physics-9702-a-internal-energy-practice/)
- [The first law of thermodynamics study guide](/resources/cambridge-a-level-physics-9702-a-the-first-law-of-thermodynamics/) — how heating and work change internal energy
- [Ideal Gases](/resources/a-physics-ideal-gases/) — the kinetic theory result (3/2)kT

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
